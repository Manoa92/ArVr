<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue'
import * as THREE from 'three'

const sceneContainerRef = ref<HTMLDivElement | null>(null)
const arOverlayRef = ref<HTMLDivElement | null>(null)

const statusMessage = ref('AR inactif')
const xrSupported = ref(false)
const xrActive = ref(false)
const showInfoPopup = ref(false)

interface Marker {
  id: number
  wx: number
  wy: number
  wz: number
  label: string
}

const markers = ref<Marker[]>([])
let nextMarkerId = 1
let markerMeshes: THREE.Mesh[] = []

let renderRafId = 0

// WebXR state
let xrSession: XRSession | null = null
let hitTestSource: XRHitTestSource | null = null
let transientHitTestSource: any = null
let localRefSpace: XRReferenceSpace | null = null
let reticleMesh: THREE.Mesh | null = null
let lastHitPose: XRPose | null = null
let xrController: THREE.Group | null = null

// Stable marker placement state
let anchorMap = new Map<number, any>()
let pendingMarkerPlacement = false
let pendingMarkerPlacementFrames = 0

const MARKER_SMOOTHING = 0.25
const MARKER_DEADBAND_METERS = 0.004
const MAX_PENDING_PLACEMENT_FRAMES = 30

const sceneState = shallowRef<{
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  renderer: THREE.WebGLRenderer
} | null>(null)

function createThreeScene() {
  const container = sceneContainerRef.value
  if (!container) {
    return
  }

  const scene = new THREE.Scene()
  scene.background = new THREE.Color('#03070d')

  const camera = new THREE.PerspectiveCamera(55, container.clientWidth / container.clientHeight, 0.1, 200)
  camera.position.set(0, 1.4, 3)

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(container.clientWidth, container.clientHeight)
  container.innerHTML = ''
  container.appendChild(renderer.domElement)

  const ambient = new THREE.AmbientLight(0xffffff, 0.7)
  scene.add(ambient)

  sceneState.value = {
    scene,
    camera,
    renderer,
  }

  const renderLoop = () => {
    const state = sceneState.value
    if (!state || xrActive.value) {
      return
    }

    state.renderer.render(state.scene, state.camera)
    renderRafId = requestAnimationFrame(renderLoop)
  }

  renderLoop()
}

function updateSize() {
  if (xrActive.value) return
  const state = sceneState.value
  const container = sceneContainerRef.value
  if (!state || !container) {
    return
  }

  const width = Math.max(container.clientWidth, 320)
  const height = Math.max(container.clientHeight, 240)

  state.camera.aspect = width / height
  state.camera.updateProjectionMatrix()
  state.renderer.setSize(width, height)
}

async function checkXRSupport() {
  if (navigator.xr) {
    try {
      xrSupported.value = await navigator.xr.isSessionSupported('immersive-ar')
    } catch {
      xrSupported.value = false
    }
  }
}

async function startAR() {
  const state = sceneState.value
  if (!state || !navigator.xr) return

  try {
    statusMessage.value = 'Demarrage AR...'

    const init: XRSessionInit = {
      requiredFeatures: ['local-floor', 'hit-test'],
      optionalFeatures: ['dom-overlay', 'anchors'],
    }
    if (arOverlayRef.value) {
      ;(init as any).domOverlay = { root: arOverlayRef.value }
    }

    const session = await navigator.xr.requestSession('immersive-ar', init)
    xrSession = session
    session.addEventListener('end', onXREnd)

    if (renderRafId) {
      cancelAnimationFrame(renderRafId)
      renderRafId = 0
    }

    state.renderer.xr.enabled = true
    state.renderer.xr.setReferenceSpaceType('local-floor')
    await state.renderer.xr.setSession(session)

    state.scene.background = null

    localRefSpace = await session.requestReferenceSpace('local-floor')
    const viewerSpace = await session.requestReferenceSpace('viewer')
    hitTestSource = (await session.requestHitTestSource!({ space: viewerSpace })) ?? null
    transientHitTestSource = await (session as any).requestHitTestSourceForTransientInput?.({ profile: 'generic-touchscreen' }) ?? null

    const geo = new THREE.RingGeometry(0.06, 0.09, 32).rotateX(-Math.PI / 2)
    const mat = new THREE.MeshBasicMaterial({ color: 0x00ff88, transparent: true, opacity: 0.85 })
    reticleMesh = new THREE.Mesh(geo, mat)
    reticleMesh.visible = false
    reticleMesh.matrixAutoUpdate = false
    state.scene.add(reticleMesh)

    xrController = state.renderer.xr.getController(0)
    xrController.addEventListener('select', onXRTap)
    state.scene.add(xrController)

    state.renderer.setAnimationLoop((_t: number, frame?: XRFrame) => {
      if (frame) xrRenderFrame(frame, state)
    })

    xrActive.value = true
    statusMessage.value = 'AR actif : pointez une surface puis tapez pour ancrer un point'
  } catch (err) {
    statusMessage.value = `Erreur AR : ${err instanceof Error ? err.message : err}`
  }
}

function xrRenderFrame(frame: XRFrame, state: NonNullable<typeof sceneState.value>) {
  if (hitTestSource && localRefSpace) {
    const results = frame.getHitTestResults(hitTestSource)
    if (results.length > 0 && reticleMesh) {
      const pose = results[0].getPose(localRefSpace)
      if (pose) {
        reticleMesh.visible = true
        reticleMesh.matrix.fromArray(pose.transform.matrix)
        lastHitPose = pose
      }
    } else if (reticleMesh) {
      reticleMesh.visible = false
      lastHitPose = null
    }

    if (pendingMarkerPlacement && localRefSpace) {
      pendingMarkerPlacementFrames++

      let pose: XRPose | null = null
      let hitResultForAnchor: any = null

      if (transientHitTestSource) {
        const transientResults = (frame as any).getHitTestResultsForTransientInput?.(transientHitTestSource) as any[] | undefined
        if (transientResults && transientResults.length) {
          for (const transientResult of transientResults) {
            const inputHits = transientResult.results as any[] | undefined
            if (!inputHits?.length) continue
            const candidate = inputHits[0]
            const candidatePose = candidate.getPose(localRefSpace)
            if (candidatePose) {
              pose = candidatePose
              hitResultForAnchor = candidate
              break
            }
          }
        }
      }

      if (!pose && results.length > 0) {
        const candidate = results[0]
        const candidatePose = candidate.getPose(localRefSpace)
        if (candidatePose) {
          pose = candidatePose
          hitResultForAnchor = candidate
        }
      }
      if (!pose && lastHitPose) {
        pose = lastHitPose
      }

      if (pose) {
        pendingMarkerPlacement = false
        pendingMarkerPlacementFrames = 0
        const pos = pose.transform.position
        const id = nextMarkerId++
        const marker: Marker = { id, wx: pos.x, wy: pos.y, wz: pos.z, label: `M${id}` }
        markers.value.push(marker)
        addMarker3D(marker)
        statusMessage.value = `Point ${marker.label} ancre a (${pos.x.toFixed(2)}, ${pos.y.toFixed(2)}, ${pos.z.toFixed(2)})`

        const createFromHit = (hitResultForAnchor as any)?.createAnchor
        const createFromFrame = (frame as any).createAnchor
        if (typeof createFromHit === 'function') {
          createFromHit.call(hitResultForAnchor).then((anchor: any) => {
            anchorMap.set(id, anchor)
          }).catch(() => {})
        } else if (typeof createFromFrame === 'function') {
          createFromFrame.call(frame, pose.transform, localRefSpace).then((anchor: any) => {
            anchorMap.set(id, anchor)
          }).catch(() => {})
        }
      } else if (pendingMarkerPlacementFrames >= MAX_PENDING_PLACEMENT_FRAMES) {
        pendingMarkerPlacement = false
        pendingMarkerPlacementFrames = 0
        statusMessage.value = 'Placement impossible ici. Essayez une zone plus stable.'
      }
    }
  }

  if (localRefSpace && anchorMap.size > 0) {
    for (const [markerId, anchor] of anchorMap) {
      const anchorSpace = anchor.anchorSpace
      if (!anchorSpace) continue
      const anchorPose = frame.getPose(anchorSpace, localRefSpace)
      if (!anchorPose) continue

      const p = anchorPose.transform.position
      const mesh = markerMeshes.find(m => m.name === `marker-${markerId}`)
      if (!mesh) continue

      const target = new THREE.Vector3(p.x, p.y, p.z)
      if (mesh.position.distanceTo(target) > MARKER_DEADBAND_METERS) {
        mesh.position.lerp(target, MARKER_SMOOTHING)
      }

      const mk = markers.value.find(m => m.id === markerId)
      if (mk) {
        mk.wx = mesh.position.x
        mk.wy = mesh.position.y
        mk.wz = mesh.position.z
      }
    }
  }

  state.renderer.render(state.scene, state.camera)
}

function onXRTap() {
  if (!xrActive.value) return
  pendingMarkerPlacement = true
  pendingMarkerPlacementFrames = 0
  if (!lastHitPose) {
    statusMessage.value = 'Recherche de surface...'
  }
}

function onXREnd() {
  for (const anchor of anchorMap.values()) {
    if (typeof anchor.delete === 'function') anchor.delete()
  }
  anchorMap.clear()
  pendingMarkerPlacement = false
  pendingMarkerPlacementFrames = 0

  const state = sceneState.value

  if (reticleMesh && state) {
    state.scene.remove(reticleMesh)
    reticleMesh.geometry.dispose()
    ;(reticleMesh.material as THREE.Material).dispose()
    reticleMesh = null
  }

  if (xrController && state) {
    xrController.removeEventListener('select', onXRTap)
    state.scene.remove(xrController)
    xrController = null
  }

  if (transientHitTestSource && typeof transientHitTestSource.cancel === 'function') {
    transientHitTestSource.cancel()
  }

  transientHitTestSource = null
  hitTestSource = null
  localRefSpace = null
  lastHitPose = null
  xrSession = null
  xrActive.value = false

  if (state) {
    state.renderer.xr.enabled = false
    state.renderer.setAnimationLoop(null)
    state.scene.background = new THREE.Color('#03070d')
    const loop = () => {
      const s = sceneState.value
      if (!s || xrActive.value) return
      s.renderer.render(s.scene, s.camera)
      renderRafId = requestAnimationFrame(loop)
    }
    loop()
  }

  nextTick(() => updateSize())
  statusMessage.value = `AR termine - ${markers.value.length} points ancrés`
}

async function stopAR() {
  if (xrSession) await xrSession.end()
}

function addMarker3D(marker: Marker) {
  const state = sceneState.value
  if (!state) return

  const geo = new THREE.SphereGeometry(0.06, 16, 16)
  const mat = new THREE.MeshStandardMaterial({ color: 0xff3055, emissive: 0xff1030, emissiveIntensity: 0.45 })
  const mesh = new THREE.Mesh(geo, mat)
  mesh.position.set(marker.wx, marker.wy, marker.wz)
  mesh.name = `marker-${marker.id}`
  state.scene.add(mesh)
  markerMeshes.push(mesh)
}

function removeMarker(id: number) {
  const anchor = anchorMap.get(id)
  if (anchor) {
    if (typeof anchor.delete === 'function') anchor.delete()
    anchorMap.delete(id)
  }

  markers.value = markers.value.filter(m => m.id !== id)

  const state = sceneState.value
  if (!state) {
    return
  }

  const idx = markerMeshes.findIndex(m => m.name === `marker-${id}`)
  if (idx !== -1) {
    const mesh = markerMeshes[idx]
    state.scene.remove(mesh)
    mesh.geometry.dispose()
    ;(mesh.material as THREE.MeshStandardMaterial).dispose()
    markerMeshes.splice(idx, 1)
  }

  statusMessage.value = `${markers.value.length} point(s) ancre(s)`
}

function clearMarkers() {
  for (const anchor of anchorMap.values()) {
    if (typeof anchor.delete === 'function') anchor.delete()
  }
  anchorMap.clear()

  const state = sceneState.value
  for (const mesh of markerMeshes) {
    if (state) {
      state.scene.remove(mesh)
    }
    mesh.geometry.dispose()
    ;(mesh.material as THREE.MeshStandardMaterial).dispose()
  }
  markerMeshes = []
  markers.value = []
  nextMarkerId = 1
  statusMessage.value = 'Tous les points ancrés ont ete supprimes'
}

onMounted(async () => {
  await nextTick()
  createThreeScene()
  updateSize()
  window.addEventListener('resize', updateSize)
  checkXRSupport()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateSize)
  if (xrSession) xrSession.end()

  if (renderRafId) {
    cancelAnimationFrame(renderRafId)
    renderRafId = 0
  }

  clearMarkers()

  const state = sceneState.value
  if (state) {
    state.renderer.dispose()
    sceneState.value = null
  }
})
</script>

<template>
  <main class="ar-page" :class="{ active: xrActive }">
    <div ref="sceneContainerRef" class="scene-host"></div>

    <section class="intro-panel" v-show="!xrActive">
      <h1>Experience WebXR AR</h1>
      <p>
        Mode AR uniquement : ancrage de points dans l espace reel, visualisation des reperes et interactions directes.
      </p>

      <div class="intro-actions">
        <button class="btn ar-start" type="button" @click="startAR" :disabled="!xrSupported || xrActive">
          {{ xrSupported ? 'Lancer AR' : 'WebXR non disponible' }}
        </button>
        <button class="btn" type="button" @click="clearMarkers" :disabled="markers.length === 0">
          Reinitialiser les points
        </button>
      </div>

      <div class="status-grid">
        <span>Statut</span>
        <strong>{{ statusMessage }}</strong>
        <span>Points ancrés</span>
        <strong>{{ markers.length }}</strong>
      </div>

      <div v-if="markers.length" class="marker-list">
        <div v-for="mk in markers" :key="mk.id" class="marker-item">
          <span class="marker-dot"></span>
          <span class="marker-label">{{ mk.label }}</span>
          <span class="marker-coords">
            ({{ mk.wx.toFixed(2) }}, {{ mk.wy.toFixed(2) }}, {{ mk.wz.toFixed(2) }})
          </span>
          <button class="marker-remove" type="button" @click="removeMarker(mk.id)">&times;</button>
        </div>
      </div>
    </section>

    <div ref="arOverlayRef" class="ar-overlay" :class="{ active: xrActive }">
      <div class="ar-hud">
        <div class="ar-top">
          <span class="ar-badge">AR</span>
          <span class="ar-status">{{ statusMessage }}</span>
          <button class="ar-info-btn" type="button" @click="showInfoPopup = !showInfoPopup" title="Aide">
            &#9432;
          </button>
        </div>

        <Transition name="info-fade">
          <div v-if="showInfoPopup" class="ar-info-popup">
            <button class="ar-info-close" type="button" @click="showInfoPopup = false">&times;</button>
            <h3>Flux d interaction AR</h3>
            <ol>
              <li>Visez une surface detectee par hit-test.</li>
              <li>Tapez l ecran pour poser un point ancre.</li>
              <li>Suivez les points pour reperage spatial.</li>
              <li>Supprimez un point pour ajuster votre scenario.</li>
            </ol>
          </div>
        </Transition>

        <div class="ar-stats">
          <span>{{ markers.length }} points</span>
        </div>

        <div v-if="markers.length" class="ar-marker-list">
          <div v-for="mk in markers" :key="mk.id" class="ar-marker-item">
            <span class="marker-dot"></span>
            <span>{{ mk.label }}</span>
            <span class="ar-mk-coords">
              ({{ mk.wx.toFixed(2) }}, {{ mk.wy.toFixed(2) }}, {{ mk.wz.toFixed(2) }})
            </span>
            <button type="button" @click="removeMarker(mk.id)">&times;</button>
          </div>
        </div>

        <div class="ar-bottom">
          <button class="ar-btn-action" type="button" @click="clearMarkers" :disabled="markers.length === 0">Reinitialiser</button>
          <div class="ar-reticle-hint">Tapez pour ancrer un point</div>
          <button class="ar-btn-action exit" type="button" @click="stopAR">Quitter AR</button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.ar-page {
  position: relative;
  min-height: 100vh;
  background: radial-gradient(circle at 15% 20%, #0e2744 0%, transparent 42%), radial-gradient(circle at 80% 85%, #123a3a 0%, transparent 45%), #03070d;
  color: #eef4f9;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.ar-page.active {
  background: #000;
}

.scene-host {
  width: 100%;
  min-height: 100vh;
}

.intro-panel {
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: min(420px, calc(100vw - 2rem));
  background: rgba(7, 16, 29, 0.86);
  border: 1px solid rgba(132, 186, 216, 0.3);
  border-radius: 14px;
  padding: 1rem;
  backdrop-filter: blur(6px);
}

h1 {
  margin: 0;
  font-size: 1.45rem;
}

p {
  margin-top: 0.6rem;
  color: #b9cbda;
  line-height: 1.4;
}

.intro-actions {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.6rem;
  margin: 0.8rem 0;
}

.btn {
  border: 1px solid rgba(147, 188, 209, 0.45);
  background: rgba(35, 66, 90, 0.72);
  color: #eef4f9;
  padding: 0.62rem 0.72rem;
  border-radius: 10px;
  cursor: pointer;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn.ar-start {
  background: linear-gradient(135deg, rgba(0, 180, 100, 0.9), rgba(0, 120, 180, 0.9));
  border-color: rgba(120, 230, 190, 0.45);
  font-weight: 600;
}

.status-grid {
  display: grid;
  grid-template-columns: 92px 1fr;
  gap: 0.22rem 0.65rem;
  margin-bottom: 0.8rem;
  font-size: 0.94rem;
}

.marker-list {
  max-height: 160px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.marker-item {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  background: rgba(255, 48, 85, 0.12);
  border: 1px solid rgba(255, 48, 85, 0.35);
  border-radius: 8px;
  padding: 0.3rem 0.55rem;
  font-size: 0.88rem;
}

.marker-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ff3055;
  flex-shrink: 0;
}

.marker-label {
  font-weight: 600;
  color: #ffd4dc;
}

.marker-coords,
.ar-mk-coords {
  font-family: monospace;
  color: #b0d0e8;
  flex: 1;
}

.marker-remove {
  background: none;
  border: none;
  color: #ff6080;
  font-size: 1.15rem;
  cursor: pointer;
  padding: 0 0.3rem;
  line-height: 1;
}

.ar-overlay {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 1000;
  pointer-events: none;
}

.ar-overlay.active {
  display: flex;
  flex-direction: column;
}

.ar-hud {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
}

.ar-top {
  pointer-events: auto;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  padding: 0.6rem 1rem;
  align-self: flex-start;
}

.ar-badge {
  background: #00e676;
  color: #000;
  font-weight: 700;
  font-size: 0.75rem;
  padding: 0.15rem 0.5rem;
  border-radius: 6px;
}

.ar-status {
  font-size: 0.9rem;
  color: #eee;
}

.ar-info-btn {
  margin-left: auto;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ar-info-popup {
  pointer-events: auto;
  position: absolute;
  top: 3.8rem;
  right: 1rem;
  width: min(320px, calc(100vw - 2rem));
  background: rgba(8, 18, 32, 0.92);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(100, 180, 220, 0.35);
  border-radius: 14px;
  padding: 1rem 1.1rem;
  color: #e0eef6;
  font-size: 0.85rem;
  line-height: 1.5;
}

.ar-info-popup h3 {
  margin: 0 0 0.6rem;
  font-size: 1rem;
  color: #fff;
}

.ar-info-popup ol {
  margin: 0;
  padding-left: 1.2rem;
}

.ar-info-popup li {
  margin-bottom: 0.35rem;
}

.ar-info-close {
  position: absolute;
  top: 0.5rem;
  right: 0.6rem;
  background: none;
  border: none;
  color: #90b0c8;
  font-size: 1.3rem;
  cursor: pointer;
}

.info-fade-enter-active,
.info-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.info-fade-enter-from,
.info-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.ar-stats {
  pointer-events: auto;
  display: flex;
  gap: 1rem;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(6px);
  border-radius: 10px;
  padding: 0.4rem 0.8rem;
  font-size: 0.82rem;
  color: #b0d0e8;
  align-self: flex-start;
  margin-top: 0.4rem;
}

.ar-marker-list {
  pointer-events: auto;
  max-height: 140px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-self: flex-start;
  margin-top: auto;
  margin-bottom: 0.5rem;
}

.ar-marker-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(255, 48, 85, 0.2);
  border: 1px solid rgba(255, 48, 85, 0.4);
  border-radius: 8px;
  padding: 0.25rem 0.5rem;
  font-size: 0.82rem;
  color: #ffd4dc;
}

.ar-marker-item button {
  background: none;
  border: none;
  color: #ff6080;
  font-size: 1.1rem;
  cursor: pointer;
}

.ar-bottom {
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(8px);
  border-radius: 12px;
  padding: 0.6rem 1rem;
}

.ar-btn-action {
  background: rgba(35, 66, 90, 0.85);
  border: 1px solid rgba(147, 188, 209, 0.5);
  color: #eef4f9;
  padding: 0.45rem 0.9rem;
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.88rem;
}

.ar-btn-action:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.ar-btn-action.exit {
  background: rgba(160, 40, 40, 0.85);
  border-color: rgba(255, 100, 100, 0.5);
}

.ar-reticle-hint {
  font-size: 0.8rem;
  color: #90c0d0;
  text-align: center;
}

@media (max-width: 768px) {
  .intro-panel {
    width: calc(100vw - 1rem);
    left: 0.5rem;
    top: 0.5rem;
    padding: 0.85rem;
  }

  .ar-bottom {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
