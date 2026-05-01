<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import * as THREE from 'three'
import { useRoomsStore } from '../stores/rooms'
import { usePointsStore } from '../stores/points'
import type { Point } from '../types'

// ─── Router / Stores ────────────────────────────────────────────────────────
const route = useRoute()
const router = useRouter()
const roomsStore = useRoomsStore()
const pointsStore = usePointsStore()

const roomId = computed(() => route.params.id as string)
const room = computed(() => roomsStore.getRoomById(roomId.value))
const points = computed(() => pointsStore.getPoints(roomId.value))

// ─── State ───────────────────────────────────────────────────────────────────
const canvasRef = ref<HTMLCanvasElement | null>(null)
const overlayRootRef = ref<HTMLDivElement | null>(null)
const arSupported = ref<boolean | null>(null) // null = checking
const arError = ref('')
// const showPanel = ref(false)
const isARActive = ref(false)
const trackingQuality = ref<'excellent' | 'bon' | 'faible'>('bon')
const trackingJitterMm = ref(0)
const trackingQualityClass = computed(() => `quality-${trackingQuality.value}`)

// ─── Three.js internals ──────────────────────────────────────────────────────
let renderer: THREE.WebGLRenderer | null = null
let scene: THREE.Scene | null = null
let camera: THREE.PerspectiveCamera | null = null
let xrSession: XRSession | null = null
let hitTestSource: XRHitTestSource | null = null
let hitTestSourceRequested = false
let animationFrameId = 0
let lastXRFrame: XRFrame | null = null

// Reticle (curseur de placement)
let reticle: THREE.Mesh | null = null
let reticleVisible = false

// Dictionnaire pointId → mesh pour suppression propre
const meshByPointId = new Map<string, THREE.Mesh>()
const anchorByPointId = new Map<string, XRAnchor>()
const lastRawPoseByPointId = new Map<
  string,
  { position: THREE.Vector3; quaternion: THREE.Quaternion }
>()

const POSITION_DEADBAND_METERS = 0.0025
const ORIENTATION_DEADBAND_RADIANS = THREE.MathUtils.degToRad(0.7)

// ─── Check support WebXR ─────────────────────────────────────────────────────
onMounted(async () => {
  if (!room.value) {
    router.replace('/')
    return
  }

  if (!navigator.xr) {
    arSupported.value = false
    arError.value = "WebXR n'est pas disponible sur ce navigateur."
    return
  }

  try {
    arSupported.value = await navigator.xr.isSessionSupported('immersive-ar')
    if (!arSupported.value) {
      arError.value = "La RA immersive n'est pas supportée sur cet appareil."
    }
  } catch {
    arSupported.value = false
    arError.value = "Impossible de vérifier le support WebXR."
  }
})

onUnmounted(() => {
  cleanup()
})

// ─── Démarrer la session AR ───────────────────────────────────────────────────
async function startARSession() {
  if (!navigator.xr) return

  try {
    const sessionInit: XRSessionInit & {
      domOverlay?: { root: Element }
    } = {
      requiredFeatures: ['hit-test'],
      optionalFeatures: ['anchors'],
    }

    if (overlayRootRef.value) {
      sessionInit.optionalFeatures?.push('dom-overlay')
      sessionInit.domOverlay = { root: overlayRootRef.value }
    }

    xrSession = await navigator.xr.requestSession('immersive-ar', sessionInit)
  } catch (e) {
    arError.value = `Impossible de démarrer la session AR : ${(e as Error).message}`
    return
  }

  xrSession.addEventListener('end', onSessionEnd)
  xrSession.addEventListener('select', onXRSelect)

  initThree()
  renderer!.xr.setReferenceSpaceType('local')
  await renderer!.xr.setSession(xrSession)
  isARActive.value = true
  renderer!.setAnimationLoop(onXRFrame)
}

// ─── Init Three.js ────────────────────────────────────────────────────────────
function initThree() {
  scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 20)

  renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value!,
    antialias: true,
    alpha: true,
  })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.xr.enabled = true

  // Lumière ambiante
  scene.add(new THREE.AmbientLight(0xffffff, 1.5))
  const dir = new THREE.DirectionalLight(0xffffff, 1)
  dir.position.set(1, 2, 1)
  scene.add(dir)

  // Reticle (anneau de visée)
  const geo = new THREE.RingGeometry(0.04, 0.06, 32)
  geo.applyMatrix4(new THREE.Matrix4().makeRotationX(-Math.PI / 2))
  const mat = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide })
  reticle = new THREE.Mesh(geo, mat)
  reticle.matrixAutoUpdate = false
  reticle.visible = false
  scene.add(reticle)

  // Recréer les meshes des points déjà existants dans le store
  for (const point of points.value) {
    addPointMesh(point)
  }

  // Fallback tactile pour les environnements non immersifs / debug navigateur.
  canvasRef.value!.addEventListener('pointerdown', onTap)
}

// ─── Boucle XR ───────────────────────────────────────────────────────────────
function onXRFrame(_time: number, frame: XRFrame) {
  if (!xrSession || !renderer || !scene || !camera) return

  lastXRFrame = frame

  const referenceSpace = renderer.xr.getReferenceSpace()
  if (!referenceSpace) return

  // Demander la source de hit-test une seule fois
  if (!hitTestSourceRequested) {
    hitTestSourceRequested = true
    xrSession.requestReferenceSpace('viewer').then((viewerSpace) => {
      const session = xrSession
      if (!session) return
      const hitTestPromise = session.requestHitTestSource?.({ space: viewerSpace })
      if (!hitTestPromise) return
      hitTestPromise.then((source) => {
        hitTestSource = source
      })
    }).catch(() => {
      // hit-test non disponible, pas de reticle
    })
  }

  // Mettre à jour le reticle via le hit-test
  if (hitTestSource && reticle) {
    const hitTestResults = frame.getHitTestResults(hitTestSource)
    if (hitTestResults.length > 0) {
      const hit = hitTestResults[0]
      const pose = hit.getPose(referenceSpace)
      if (pose) {
        reticleVisible = true
        reticle.visible = true
        reticle.matrix.fromArray(pose.transform.matrix)
      }
    } else {
      reticleVisible = false
      reticle.visible = false
    }
  }

  updateAnchoredMeshes(frame, referenceSpace)

  renderer.render(scene, camera)
}

// ─── Tap pour placer un point ─────────────────────────────────────────────────
function onXRSelect(event: XRInputSourceEvent) {
  void placePoint(event.frame)
}

function onTap() {
  void placePoint(lastXRFrame)
}

async function placePoint(frame: XRFrame | null) {
  if (!reticleVisible || !reticle || !scene) return

  // Lire la position depuis la matrice du reticle
  const position = new THREE.Vector3()
  const quaternion = new THREE.Quaternion()
  const scale = new THREE.Vector3()
  reticle.matrix.decompose(position, quaternion, scale)

  const point = pointsStore.addPoint(roomId.value, {
    position: { x: position.x, y: position.y, z: position.z },
    quaternion: { x: quaternion.x, y: quaternion.y, z: quaternion.z, w: quaternion.w },
  })

  addPointMesh(point)

  // Utilise une ancre si possible pour réduire le drift des points dans le monde réel.
  if (frame) {
    await attachAnchorToPoint(point.id, frame)
  }
}

async function attachAnchorToPoint(pointId: string, frame: XRFrame) {
  if (!hitTestSource) return

  const hitTestResults = frame.getHitTestResults(hitTestSource)
  if (hitTestResults.length === 0) return

  const hit = hitTestResults[0] as XRHitTestResult & {
    createAnchor?: () => Promise<XRAnchor>
  }

  if (!hit.createAnchor) return

  try {
    const anchor = await hit.createAnchor()
    anchorByPointId.set(pointId, anchor)
  } catch {
    // Certains appareils exposent hit-test sans support effectif des anchors.
  }
}

function updateAnchoredMeshes(frame: XRFrame, referenceSpace: XRReferenceSpace) {
  if (anchorByPointId.size === 0) {
    trackingQuality.value = 'faible'
    trackingJitterMm.value = 0
    return
  }

  const tmpPosition = new THREE.Vector3()
  const tmpQuaternion = new THREE.Quaternion()
  const tmpScale = new THREE.Vector3()
  let visibleAnchors = 0
  let cumulatedDelta = 0

  for (const [pointId, anchor] of anchorByPointId) {
    const mesh = meshByPointId.get(pointId)
    if (!mesh) continue

    const pose = frame.getPose(anchor.anchorSpace, referenceSpace)
    if (!pose) {
      mesh.visible = false
      continue
    }

    visibleAnchors += 1
    mesh.visible = true
    const matrix = new THREE.Matrix4().fromArray(pose.transform.matrix)
    matrix.decompose(tmpPosition, tmpQuaternion, tmpScale)

    const lastRaw = lastRawPoseByPointId.get(pointId)
    if (!lastRaw) {
      mesh.position.copy(tmpPosition)
      mesh.quaternion.copy(tmpQuaternion)
      lastRawPoseByPointId.set(pointId, {
        position: tmpPosition.clone(),
        quaternion: tmpQuaternion.clone(),
      })
      continue
    }

    const delta = tmpPosition.distanceTo(lastRaw.position)
    const angularDelta = tmpQuaternion.angleTo(lastRaw.quaternion)
    cumulatedDelta += delta

    // Ignore les micro-variations qui génèrent un effet de tremblement visuel.
    if (delta < POSITION_DEADBAND_METERS && angularDelta < ORIENTATION_DEADBAND_RADIANS) {
      continue
    }

    const adaptiveAlpha = THREE.MathUtils.clamp(0.18 + delta * 10, 0.14, 0.62)
    const adaptiveRotAlpha = THREE.MathUtils.clamp(adaptiveAlpha + 0.08, 0.2, 0.75)

    mesh.position.lerp(tmpPosition, adaptiveAlpha)
    mesh.quaternion.slerp(tmpQuaternion, adaptiveRotAlpha)

    lastRaw.position.copy(tmpPosition)
    lastRaw.quaternion.copy(tmpQuaternion)
  }

  if (visibleAnchors === 0) {
    trackingQuality.value = 'faible'
    trackingJitterMm.value = 0
    return
  }

  const averageDelta = cumulatedDelta / visibleAnchors
  trackingJitterMm.value = averageDelta * 1000
  if (averageDelta < 0.004) {
    trackingQuality.value = 'excellent'
  } else if (averageDelta < 0.012) {
    trackingQuality.value = 'bon'
  } else {
    trackingQuality.value = 'faible'
  }
}

// ─── Créer un mesh pour un point ─────────────────────────────────────────────
function addPointMesh(point: Point) {
  if (!scene) return

  const geo = new THREE.SphereGeometry(0.03, 16, 16)
  const mat = new THREE.MeshStandardMaterial({ color: 0xff4444 })
  const mesh = new THREE.Mesh(geo, mat)
  mesh.position.set(point.pose.position.x, point.pose.position.y, point.pose.position.z)
  scene.add(mesh)
  meshByPointId.set(point.id, mesh)
}

// ─── Supprimer un point ───────────────────────────────────────────────────────
// function removePoint(pointId: string) {
//   pointsStore.removePoint(roomId.value, pointId)
//   const mesh = meshByPointId.get(pointId)
//   if (mesh && scene) {
//     scene.remove(mesh)
//     mesh.geometry.dispose()
//     ;(mesh.material as THREE.Material).dispose()
//   }
//   meshByPointId.delete(pointId)

//   const anchor = anchorByPointId.get(pointId)
//   if (anchor) {
//     anchor.delete()
//     anchorByPointId.delete(pointId)
//   }
//   lastRawPoseByPointId.delete(pointId)
// }

// function clearAll() {
//   for (const [id, mesh] of meshByPointId) {
//     if (scene) scene.remove(mesh)
//     mesh.geometry.dispose()
//     ;(mesh.material as THREE.Material).dispose()
//     meshByPointId.delete(id)
//   }

//   for (const [id, anchor] of anchorByPointId) {
//     anchor.delete()
//     anchorByPointId.delete(id)
//   }
//   lastRawPoseByPointId.clear()

//   pointsStore.clearPoints(roomId.value)
// }

// ─── Fin de session ───────────────────────────────────────────────────────────
function onSessionEnd() {
  cleanup()
  router.push(`/rooms/${roomId.value}`)
}

async function exitAR() {
  // if (xrSession) {
  //   await xrSession.end()
  // }
    // cleanup()
    router.push(`/rooms/${roomId.value}`)
}

function cleanup() {
  isARActive.value = false
  xrSession?.removeEventListener('select', onXRSelect)
  canvasRef.value?.removeEventListener('pointerdown', onTap)
  renderer?.setAnimationLoop(null)

  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
    animationFrameId = 0
  }

  for (const mesh of meshByPointId.values()) {
    mesh.geometry.dispose()
    ;(mesh.material as THREE.Material).dispose()
  }
  meshByPointId.clear()

  for (const anchor of anchorByPointId.values()) {
    anchor.delete()
  }
  anchorByPointId.clear()
  lastRawPoseByPointId.clear()

  if (reticle) {
    reticle.geometry.dispose()
    ;(reticle.material as THREE.Material).dispose()
    reticle = null
  }

  renderer?.dispose()
  renderer = null
  scene = null
  camera = null
  hitTestSource = null
  hitTestSourceRequested = false
  lastXRFrame = null
  reticleVisible = false
  trackingQuality.value = 'bon'
  trackingJitterMm.value = 0
  xrSession = null
}
</script>

<template>
  <div class="ar-page" ref="overlayRootRef">
    <!-- Canvas Three.js (plein écran) -->
    <canvas ref="canvasRef" class="ar-canvas" />

    <!-- Vérification support -->
    <div v-if="arSupported === null" class="overlay centered">
      <p>Vérification du support WebXR…</p>
    </div>

    <div v-else-if="arSupported === false" class="overlay centered error-box">
      <p>{{ arError }}</p>
      <button @click="router.push(`/rooms/${roomId}`)">Retour</button>
    </div>

    <!-- Écran de démarrage -->
    <div v-else-if="!isARActive" class="overlay centered start-box">
      <h2>{{ room?.name }}</h2>
      <p>Pointez la caméra vers une surface plane.</p>
      <button class="ar-start-btn" @click="startARSession">Lancer la RA</button>
      <button class="back-btn" @click="router.push(`/rooms/${roomId}`)">Annuler</button>
    </div>

    <!-- HUD AR actif -->
    <template v-else>
      <div class="tracking-chip" :class="trackingQualityClass">
        Suivi {{ trackingQuality }} · ~{{ trackingJitterMm.toFixed(1) }} mm
      </div>

      <button class="hud-btn ar-back-btn" @click="exitAR">← Retour</button>

      <!-- Bouton quitter -->
      <!-- <button class="hud-btn exit-btn" @click="exitAR">✕ Quitter</button> -->

      <!-- Bouton liste -->
      <!-- <button class="hud-btn list-btn" @click="showPanel = !showPanel">
        ☰ Points ({{ points.length }})
      </button> -->

      <!-- Panneau liste -->
      <!-- <transition name="slide">
        <div class="points-panel" v-if="showPanel">
          <div class="panel-header">
            <span>Points placés</span>
            <button class="danger-btn" @click="clearAll" v-if="points.length > 0">
              Tout supprimer
            </button>
          </div>
          <ul class="point-list">
            <li v-for="point in points" :key="point.id" class="point-item">
              <span class="coords">
                ({{ point.pose.position.x.toFixed(2) }},
                 {{ point.pose.position.y.toFixed(2) }},
                 {{ point.pose.position.z.toFixed(2) }})
              </span>
              <button class="danger-btn small" @click="removePoint(point.id)">✕</button>
            </li>
            <li v-if="points.length === 0" class="empty">Tapez l'écran pour placer un point.</li>
          </ul>
        </div>
      </transition> -->

      <!-- Indicateur reticle -->
      <div class="reticle-hint" v-if="!reticleVisible">
        Pointez vers une surface détectée…
      </div>
    </template>
  </div>
</template>

<style scoped>
.ar-page {
  position: fixed;
  inset: 0;
  background: #000;
  overflow: hidden;
}

.ar-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px;
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  text-align: center;
  z-index: 30;
  pointer-events: auto;
}

.start-box h2 {
  font-size: 1.5rem;
  margin: 0;
}

.start-box p {
  color: #aaa;
}

.error-box p {
  color: #ef9a9a;
}

.ar-start-btn {
  padding: 14px 28px;
  background: #2196f3;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  cursor: pointer;
  width: 100%;
  max-width: 280px;
}

.ar-start-btn:hover {
  background: #1e88e5;
}

.back-btn {
  background: transparent;
  border: 1px solid #555;
  color: #ccc;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.95rem;
  width: 100%;
  max-width: 280px;
}

/* HUD buttons */
.hud-btn {
  position: absolute;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 0.9rem;
  cursor: pointer;
  z-index: 10;
  backdrop-filter: blur(4px);
  pointer-events: auto;
  touch-action: manipulation;
}

.exit-btn {
  top: 20px;
  right: 20px;
  background: rgba(198, 40, 40, 0.85);
  color: #fff;
}

.list-btn {
  top: 20px;
  left: 20px;
  background: rgba(33, 33, 33, 0.85);
  color: #fff;
}

.ar-back-btn {
  left: 20px;
  top: 70px;
  background: rgba(33, 33, 33, 0.85);
  color: #fff;
}

.tracking-chip {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 25;
  border-radius: 999px;
  padding: 8px 12px;
  font-size: 0.78rem;
  color: #fff;
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(6px);
  pointer-events: none;
}

.tracking-chip.quality-excellent {
  background: rgba(27, 94, 32, 0.88);
}

.tracking-chip.quality-bon {
  background: rgba(245, 124, 0, 0.88);
}

.tracking-chip.quality-faible {
  background: rgba(183, 28, 28, 0.9);
}

/* Panneau latéral points */
.points-panel {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 260px;
  background: rgba(18, 18, 18, 0.92);
  backdrop-filter: blur(8px);
  z-index: 20;
  display: flex;
  flex-direction: column;
  padding-top: 70px;
  pointer-events: auto;
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid #333;
  color: #ccc;
  font-size: 0.95rem;
}

.point-list {
  list-style: none;
  padding: 8px;
  margin: 0;
  overflow-y: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.point-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  background: #252525;
  border-radius: 6px;
  gap: 8px;
}

.coords {
  font-size: 0.75rem;
  font-family: monospace;
  color: #aaa;
}

.empty {
  color: #666;
  font-size: 0.85rem;
  text-align: center;
  padding: 20px 0;
}

/* Boutons danger */
.danger-btn {
  background: #c62828;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 0.8rem;
  white-space: nowrap;
}

.danger-btn:hover {
  background: #b71c1c;
}

.danger-btn.small {
  padding: 4px 8px;
  font-size: 0.75rem;
}

/* Indice reticle */
.reticle-hint {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  pointer-events: none;
  z-index: 10;
}

/* Transition panneau */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.25s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
