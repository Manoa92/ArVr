<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const videoRef = ref<HTMLVideoElement | null>(null)
const sceneContainerRef = ref<HTMLDivElement | null>(null)
const arOverlayRef = ref<HTMLDivElement | null>(null)

const cameraActive = ref(false)
const scanning = ref(false)
const statusMessage = ref('Camera is off')
const pointCount = ref(0)
const captureCount = ref(0)
const xrSupported = ref(false)
const xrActive = ref(false)
const showInfoPopup = ref(false)

interface Marker {
  id: number
  wx: number  // world-space x (fixed)
  wy: number  // world-space y (fixed)
  wz: number  // world-space z (fixed)
  label: string
}

const markers = ref<Marker[]>([])
let nextMarkerId = 1

let mediaStream: MediaStream | null = null
let scannerRafId = 0
let renderRafId = 0
let markerMeshes: THREE.Mesh[] = []

// WebXR state
let xrSession: XRSession | null = null
let hitTestSource: XRHitTestSource | null = null
let localRefSpace: XRReferenceSpace | null = null
let reticleMesh: THREE.Mesh | null = null
let lastHitPose: XRPose | null = null
let xrFrameCount = 0
let xrController: THREE.Group | null = null

// Anchor tracking for stable marker placement
let anchorMap = new Map<number, any>()
let pendingMarkerPlacement = false

// Plane & mesh detection state
let detectedPlaneMeshes = new Map<any, THREE.Mesh>()
let detectedRoomMeshes = new Map<any, THREE.Mesh>()

// Accumulated world-space point cloud
let accPositions: number[] = []
let accColors: number[] = []

const MAX_WORLD_POINTS = 200000

const sceneState = shallowRef<{
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  renderer: THREE.WebGLRenderer
  controls: OrbitControls
  pointGeometry: THREE.BufferGeometry
  pointMaterial: THREE.PointsMaterial
  pointMesh: THREE.Points
  grid: THREE.GridHelper
  axes: THREE.AxesHelper
} | null>(null)

function createThreeScene() {
  const container = sceneContainerRef.value
  if (!container) {
    return
  }

  const scene = new THREE.Scene()
  scene.background = new THREE.Color('#0b0f16')

  const camera = new THREE.PerspectiveCamera(55, container.clientWidth / container.clientHeight, 0.1, 200)
  camera.position.set(0, 1.4, 5)

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(container.clientWidth, container.clientHeight)
  container.innerHTML = ''
  container.appendChild(renderer.domElement)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.maxDistance = 30
  controls.minDistance = 0.8

  const ambient = new THREE.AmbientLight(0xffffff, 0.45)
  scene.add(ambient)

  const directional = new THREE.DirectionalLight(0x9ac4ff, 1.15)
  directional.position.set(2, 6, 3)
  scene.add(directional)

  const grid = new THREE.GridHelper(14, 14, 0x4f7188, 0x1e3546)
  scene.add(grid)
  const axes = new THREE.AxesHelper(2.2)
  scene.add(axes)

  const pointGeometry = new THREE.BufferGeometry()
  const pointMaterial = new THREE.PointsMaterial({ size: 0.045, vertexColors: true, sizeAttenuation: true })
  const pointMesh = new THREE.Points(pointGeometry, pointMaterial)
  scene.add(pointMesh)

  sceneState.value = {
    scene,
    camera,
    renderer,
    controls,
    pointGeometry,
    pointMaterial,
    pointMesh,
    grid,
    axes
  }

  const renderLoop = () => {
    const state = sceneState.value
    if (!state) {
      return
    }

    state.controls.update()
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

function syncCloudToScene() {
  const state = sceneState.value
  if (!state) {
    return
  }

  state.pointGeometry.setAttribute('position', new THREE.Float32BufferAttribute(accPositions, 3))
  state.pointGeometry.setAttribute('color', new THREE.Float32BufferAttribute(accColors, 3))
  state.pointGeometry.computeBoundingSphere()
  pointCount.value = accPositions.length / 3
}

function trimCloud() {
  if (accPositions.length / 3 > MAX_WORLD_POINTS) {
    const remove = Math.floor(MAX_WORLD_POINTS * 0.15) * 3
    accPositions.splice(0, remove)
    accColors.splice(0, remove)
  }
}

// ──────────────── WebXR AR ────────────────

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
    statusMessage.value = 'Démarrage AR...'
    if (scanning.value) stopScan()
    if (cameraActive.value) stopCamera()

    const init: XRSessionInit = {
      requiredFeatures: ['local-floor', 'hit-test'],
      optionalFeatures: ['dom-overlay', 'depth-sensing', 'anchors', 'plane-detection', 'mesh-detection'],
    }
    if (arOverlayRef.value) {
      ;(init as any).domOverlay = { root: arOverlayRef.value }
    }
    ;(init as any).depthSensing = {
      usagePreference: ['cpu-optimized', 'gpu-optimized'],
      dataFormatPreference: ['luminance-alpha', 'float32']
    }

    const session = await navigator.xr.requestSession('immersive-ar', init)
    xrSession = session
    session.addEventListener('end', onXREnd)

    if (renderRafId) { cancelAnimationFrame(renderRafId); renderRafId = 0 }
    state.renderer.xr.enabled = true
    state.renderer.xr.setReferenceSpaceType('local-floor')
    await state.renderer.xr.setSession(session)

    state.scene.background = null
    state.grid.visible = false
    state.axes.visible = false

    localRefSpace = await session.requestReferenceSpace('local-floor')
    const viewerSpace = await session.requestReferenceSpace('viewer')
    hitTestSource = (await session.requestHitTestSource!({ space: viewerSpace })) ?? null

    const geo = new THREE.RingGeometry(0.06, 0.09, 32).rotateX(-Math.PI / 2)
    const mat = new THREE.MeshBasicMaterial({ color: 0x00ff88, transparent: true, opacity: 0.85 })
    reticleMesh = new THREE.Mesh(geo, mat)
    reticleMesh.visible = false
    reticleMesh.matrixAutoUpdate = false
    state.scene.add(reticleMesh)

    xrController = state.renderer.xr.getController(0)
    xrController.addEventListener('select', onXRTap)
    state.scene.add(xrController)

    xrFrameCount = 0
    state.renderer.setAnimationLoop((_t: number, frame?: XRFrame) => {
      if (frame) xrRenderFrame(frame, state)
    })

    xrActive.value = true
    statusMessage.value = 'AR actif — visez une surface, tapez pour placer un marqueur'
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

    // Process pending marker placement with anchor for stable tracking
    if (pendingMarkerPlacement && results.length > 0 && localRefSpace) {
      pendingMarkerPlacement = false
      const hitResult = results[0]
      const pose = hitResult.getPose(localRefSpace)
      if (pose) {
        const pos = pose.transform.position
        const id = nextMarkerId++
        const marker: Marker = { id, wx: pos.x, wy: pos.y, wz: pos.z, label: `M${id}` }
        markers.value.push(marker)
        addMarker3D(marker)
        statusMessage.value = `Marqueur ${marker.label} à (${pos.x.toFixed(2)}, ${pos.y.toFixed(2)}, ${pos.z.toFixed(2)})`

        // Create anchor — prefer hit-test anchor (surface-aware), fallback to frame anchor
        const createFromHit = (hitResult as any).createAnchor
        const createFromFrame = (frame as any).createAnchor
        if (typeof createFromHit === 'function') {
          createFromHit.call(hitResult).then((anchor: any) => {
            anchorMap.set(id, anchor)
          }).catch(() => {})
        } else if (typeof createFromFrame === 'function') {
          createFromFrame.call(frame, pose.transform, localRefSpace).then((anchor: any) => {
            anchorMap.set(id, anchor)
          }).catch(() => {})
        }
      }
    }

    // Hit-test cloud — sample every 2 frames for denser coverage
    if (results.length > 0 && xrFrameCount % 2 === 0) {
      const p = results[0].getPose(localRefSpace)
      if (p) {
        const pos = p.transform.position
        accPositions.push(pos.x, pos.y, pos.z)
        accColors.push(0.3, 0.85, 0.5)
        trimCloud()
      }
    }
  }

  // Update anchored marker positions each frame (compensates for tracking drift)
  if (localRefSpace && anchorMap.size > 0) {
    for (const [markerId, anchor] of anchorMap) {
      const anchorSpace = anchor.anchorSpace
      if (!anchorSpace) continue
      const anchorPose = frame.getPose(anchorSpace, localRefSpace)
      if (anchorPose) {
        const p = anchorPose.transform.position
        const mesh = markerMeshes.find(m => m.name === `marker-${markerId}`)
        if (mesh) mesh.position.set(p.x, p.y, p.z)
        const mk = markers.value.find(m => m.id === markerId)
        if (mk) { mk.wx = p.x; mk.wy = p.y; mk.wz = p.z }
      }
    }
  }

  // Detected planes → render as semi-transparent geometry
  if (localRefSpace) {
    updateDetectedPlanes(frame, state)
    updateDetectedMeshes(frame, state)
  }

  // Depth sensing cloud — sample every 4 frames for denser reconstruction
  if (localRefSpace && xrFrameCount % 4 === 0) {
    const viewerPose = frame.getViewerPose(localRefSpace)
    if (viewerPose) sampleDepthCloud(frame, viewerPose)
  }

  // Sync point cloud to scene periodically
  if (xrFrameCount % 30 === 0) syncCloudToScene()

  xrFrameCount++
  state.renderer.render(state.scene, state.camera)
}

function sampleDepthCloud(frame: XRFrame, viewerPose: XRViewerPose) {
  for (const view of viewerPose.views) {
    const depthInfo = (frame as any).getDepthInformation?.(view)
    if (!depthInfo) continue
    const { width, height } = depthInfo
    // Denser sampling: ~40 samples per axis for much better room shape
    const step = Math.max(4, Math.floor(width / 40))
    const projInv = new THREE.Matrix4().fromArray(view.projectionMatrix).invert()
    const v2w = new THREE.Matrix4().fromArray(view.transform.matrix)
    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        const depth: number = depthInfo.getDepthInMeters(x / width, y / height)
        if (depth <= 0.1 || depth > 8) continue
        const ndcX = (x / width) * 2 - 1
        const ndcY = 1 - (y / height) * 2
        const clip = new THREE.Vector4(ndcX, ndcY, -1, 1).applyMatrix4(projInv)
        const dir = new THREE.Vector3(clip.x / clip.w, clip.y / clip.w, clip.z / clip.w).normalize()
        const wp = dir.multiplyScalar(depth).applyMatrix4(v2w)
        accPositions.push(wp.x, wp.y, wp.z)
        const norm = Math.min(depth / 8, 1)
        accColors.push(1 - norm * 0.6, 0.4 + norm * 0.3, 0.3 + norm * 0.5)
      }
    }
    captureCount.value++
  }
  trimCloud()
}

// ──── Plane Detection ────

const PLANE_MATERIAL = new THREE.MeshBasicMaterial({
  color: 0x4488cc,
  transparent: true,
  opacity: 0.18,
  side: THREE.DoubleSide,
  depthWrite: false,
})
const PLANE_WIRE_MATERIAL = new THREE.LineBasicMaterial({ color: 0x66aadd, transparent: true, opacity: 0.35 })

function updateDetectedPlanes(frame: XRFrame, state: NonNullable<typeof sceneState.value>) {
  const detectedPlanes: Set<any> | undefined = (frame as any).detectedPlanes
  if (!detectedPlanes || !localRefSpace) return

  // Remove old planes no longer tracked
  for (const [plane, mesh] of detectedPlaneMeshes) {
    if (!detectedPlanes.has(plane)) {
      state.scene.remove(mesh)
      mesh.geometry.dispose()
      if (mesh.children.length) {
        const wire = mesh.children[0] as THREE.LineSegments
        wire.geometry.dispose()
      }
      detectedPlaneMeshes.delete(plane)
    }
  }

  for (const plane of detectedPlanes) {
    const planePose = frame.getPose(plane.planeSpace, localRefSpace)
    if (!planePose) continue

    const polygon: DOMPointReadOnly[] = plane.polygon
    if (!polygon || polygon.length < 3) continue

    let mesh = detectedPlaneMeshes.get(plane)
    const lastChanged = plane.lastChangedTime

    if (!mesh || (mesh.userData.lastChanged !== lastChanged)) {
      // (Re)build geometry from polygon
      if (mesh) {
        state.scene.remove(mesh)
        mesh.geometry.dispose()
        if (mesh.children.length) (mesh.children[0] as THREE.LineSegments).geometry.dispose()
      }

      const shape = new THREE.Shape()
      shape.moveTo(polygon[0].x, polygon[0].z)
      for (let i = 1; i < polygon.length; i++) shape.lineTo(polygon[i].x, polygon[i].z)
      shape.closePath()

      const geo = new THREE.ShapeGeometry(shape)
      geo.rotateX(-Math.PI / 2)
      mesh = new THREE.Mesh(geo, PLANE_MATERIAL)
      mesh.renderOrder = -1
      mesh.userData.lastChanged = lastChanged

      // Wireframe outline
      const edges = new THREE.EdgesGeometry(geo)
      const wire = new THREE.LineSegments(edges, PLANE_WIRE_MATERIAL)
      mesh.add(wire)

      state.scene.add(mesh)
      detectedPlaneMeshes.set(plane, mesh)

      // Also inject plane boundary as points for the cloud
      for (const pt of polygon) {
        const wp = new THREE.Vector3(pt.x, 0, pt.z)
          .applyMatrix4(new THREE.Matrix4().fromArray(planePose.transform.matrix))
        accPositions.push(wp.x, wp.y, wp.z)
        accColors.push(0.27, 0.53, 0.8)
      }
    }

    // Update transform each frame
    mesh.matrixAutoUpdate = false
    mesh.matrix.fromArray(planePose.transform.matrix)
  }
}

// ──── Mesh Detection (room geometry) ────

const ROOM_MESH_MATERIAL = new THREE.MeshBasicMaterial({
  color: 0x22ddaa,
  transparent: true,
  opacity: 0.12,
  side: THREE.DoubleSide,
  wireframe: false,
  depthWrite: false,
})
const ROOM_WIRE_MATERIAL = new THREE.MeshBasicMaterial({
  color: 0x22ddaa,
  transparent: true,
  opacity: 0.22,
  wireframe: true,
  depthWrite: false,
})

function updateDetectedMeshes(frame: XRFrame, state: NonNullable<typeof sceneState.value>) {
  const detectedMeshes: Set<any> | undefined = (frame as any).detectedMeshes
  if (!detectedMeshes || !localRefSpace) return

  // Remove stale
  for (const [xrMesh, threeMesh] of detectedRoomMeshes) {
    if (!detectedMeshes.has(xrMesh)) {
      state.scene.remove(threeMesh)
      threeMesh.geometry.dispose()
      if (threeMesh.children.length) (threeMesh.children[0] as THREE.Mesh).geometry.dispose()
      detectedRoomMeshes.delete(xrMesh)
    }
  }

  for (const xrMesh of detectedMeshes) {
    const meshPose = frame.getPose(xrMesh.meshSpace, localRefSpace)
    if (!meshPose) continue

    let threeMesh = detectedRoomMeshes.get(xrMesh)
    const lastChanged = xrMesh.lastChangedTime

    if (!threeMesh || threeMesh.userData.lastChanged !== lastChanged) {
      if (threeMesh) {
        state.scene.remove(threeMesh)
        threeMesh.geometry.dispose()
        if (threeMesh.children.length) (threeMesh.children[0] as THREE.Mesh).geometry.dispose()
      }

      const vertices: Float32Array = xrMesh.vertices
      const indices: Uint32Array = xrMesh.indices
      const geo = new THREE.BufferGeometry()
      geo.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
      geo.setIndex(new THREE.BufferAttribute(indices, 1))
      geo.computeVertexNormals()

      threeMesh = new THREE.Mesh(geo, ROOM_MESH_MATERIAL)
      threeMesh.renderOrder = -2
      threeMesh.userData.lastChanged = lastChanged

      // Wireframe overlay
      const wireGeo = new THREE.BufferGeometry()
      wireGeo.setAttribute('position', new THREE.BufferAttribute(vertices.slice(), 3))
      wireGeo.setIndex(new THREE.BufferAttribute(indices.slice(), 1))
      const wireMesh = new THREE.Mesh(wireGeo, ROOM_WIRE_MATERIAL)
      threeMesh.add(wireMesh)

      state.scene.add(threeMesh)
      detectedRoomMeshes.set(xrMesh, threeMesh)

      // Inject mesh vertices as dense point cloud
      for (let i = 0; i < vertices.length; i += 3) {
        const wp = new THREE.Vector3(vertices[i], vertices[i + 1], vertices[i + 2])
          .applyMatrix4(new THREE.Matrix4().fromArray(meshPose.transform.matrix))
        accPositions.push(wp.x, wp.y, wp.z)
        accColors.push(0.13, 0.87, 0.67)
      }
    }

    threeMesh.matrixAutoUpdate = false
    threeMesh.matrix.fromArray(meshPose.transform.matrix)
  }
}

function onXRTap() {
  if (!reticleMesh?.visible || !lastHitPose) return
  // Defer actual placement to next render frame so we can create an anchor
  pendingMarkerPlacement = true
}

function onXREnd() {
  // Clean up anchors
  for (const anchor of anchorMap.values()) {
    if (typeof anchor.delete === 'function') anchor.delete()
  }
  anchorMap.clear()
  pendingMarkerPlacement = false

  const state = sceneState.value

  // Clean up detected planes
  for (const mesh of detectedPlaneMeshes.values()) {
    if (state) state.scene.remove(mesh)
    mesh.geometry.dispose()
    if (mesh.children.length) (mesh.children[0] as THREE.LineSegments).geometry.dispose()
  }
  detectedPlaneMeshes.clear()

  // Clean up detected meshes
  for (const mesh of detectedRoomMeshes.values()) {
    if (state) state.scene.remove(mesh)
    mesh.geometry.dispose()
    if (mesh.children.length) (mesh.children[0] as THREE.Mesh).geometry.dispose()
  }
  detectedRoomMeshes.clear()

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
  hitTestSource = null
  localRefSpace = null
  lastHitPose = null
  xrSession = null
  xrActive.value = false
  if (state) {
    state.renderer.xr.enabled = false
    state.renderer.setAnimationLoop(null)
    state.scene.background = new THREE.Color('#0b0f16')
    state.grid.visible = true
    state.axes.visible = true
    const loop = () => {
      const s = sceneState.value
      if (!s) return
      s.controls.update()
      s.renderer.render(s.scene, s.camera)
      renderRafId = requestAnimationFrame(loop)
    }
    loop()
  }
  nextTick(() => updateSize())
  statusMessage.value = `AR terminé — ${pointCount.value} points, ${markers.value.length} marqueurs`
}

async function stopAR() {
  if (xrSession) await xrSession.end()
}

function stopCamera() {
  if (scannerRafId) {
    cancelAnimationFrame(scannerRafId)
    scannerRafId = 0
  }
  scanning.value = false

  if (mediaStream) {
    mediaStream.getTracks().forEach((track) => track.stop())
    mediaStream = null
  }

  const video = videoRef.value
  if (video) {
    video.pause()
    video.srcObject = null
  }

  cameraActive.value = false
  statusMessage.value = 'Camera is off'
}

function stopScan() {
  scanning.value = false
  if (scannerRafId) {
    cancelAnimationFrame(scannerRafId)
    scannerRafId = 0
  }
  statusMessage.value = `Scan paused — ${captureCount.value} captures, ${pointCount.value} points`
}

function addMarker3D(marker: Marker) {
  const state = sceneState.value
  if (!state) return

  const geo = new THREE.SphereGeometry(0.09, 16, 16)
  const mat = new THREE.MeshStandardMaterial({ color: 0xff3055, emissive: 0xff1030, emissiveIntensity: 0.5 })
  const mesh = new THREE.Mesh(geo, mat)
  mesh.position.set(marker.wx, marker.wy, marker.wz)
  mesh.name = `marker-${marker.id}`
  state.scene.add(mesh)
  markerMeshes.push(mesh)
}

function removeMarker(id: number) {
  // Delete anchor if it exists
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
}

function clearMarkers() {
  // Delete all anchors
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
}

function resetCloud() {
  accPositions = []
  accColors = []
  syncCloudToScene()
  captureCount.value = 0
  clearMarkers()
  statusMessage.value = cameraActive.value ? 'Cloud reset — ready to scan again' : 'Camera is off'
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
  stopCamera()
  if (xrSession) xrSession.end()

  if (renderRafId) {
    cancelAnimationFrame(renderRafId)
    renderRafId = 0
  }

  const state = sceneState.value
  if (state) {
    state.controls.dispose()
    state.pointGeometry.dispose()
    state.pointMaterial.dispose()
    state.renderer.dispose()
    sceneState.value = null
  }
})
</script>

<template>
  <main class="scanner-page" :class="{ 'ar-active': xrActive }">
    <section v-show="!xrActive" class="panel controls">
      <h1>RoomScanner</h1>
      <p>
        Scannez votre pièce en 3D et marquez des objets.
        Les marqueurs restent ancrés dans l'espace réel.
      </p>

      <div class="actions">
        <button v-if="xrSupported" class="btn ar-btn" type="button" @click="startAR" :disabled="xrActive">
          Lancer AR
        </button>
        <button class="btn" type="button" @click="resetCloud">
          Réinitialiser
        </button>
        <button class="btn warn" type="button" @click="clearMarkers" :disabled="markers.length === 0">
          Effacer Marqueurs
        </button>
      </div>



      <div class="status-grid">
        <span>Statut</span>
        <strong>{{ statusMessage }}</strong>
        <span>Points</span>
        <strong>{{ pointCount }}</strong>
        <span>Captures</span>
        <strong>{{ captureCount }}</strong>
        <span>Marqueurs</span>
        <strong>{{ markers.length }}</strong>
        <span>Mode</span>
        <strong>{{ xrSupported ? 'WebXR disponible' : 'Desktop (pas de WebXR)' }}</strong>
      </div>

      <div v-if="markers.length" class="marker-list">
        <div v-for="mk in markers" :key="mk.id" class="marker-item">
          <span class="marker-dot"></span>
          <span class="marker-label">{{ mk.label }}</span>
          <span class="marker-coords">
            ({{ mk.wx.toFixed(2) }}, {{ mk.wy.toFixed(2) }}, {{ mk.wz.toFixed(2) }})
          </span>
          <button class="marker-remove" type="button" @click="removeMarker(mk.id)" title="Supprimer marqueur">&times;</button>
        </div>
      </div>
    </section>

    <section v-show="!xrActive" class="panel viewer">
      <div ref="sceneContainerRef" class="scene-host"></div>
      <small>
        Reconstruction 3D accumulée. Les marqueurs apparaissent comme des sphères rouges.
      </small>
    </section>



    <!-- AR DOM Overlay (WebXR) -->
    <div ref="arOverlayRef" class="ar-overlay" :class="{ active: xrActive }">
      <div class="ar-hud">
        <div class="ar-top">
          <span class="ar-badge">AR</span>
          <span class="ar-status">{{ statusMessage }}</span>
          <button class="ar-info-btn" type="button" @click="showInfoPopup = !showInfoPopup" title="Aide">
            &#9432;
          </button>
        </div>

        <!-- Info popup -->
        <Transition name="info-fade">
          <div v-if="showInfoPopup" class="ar-info-popup">
            <button class="ar-info-close" type="button" @click="showInfoPopup = false">&times;</button>
            <h3>Comment scanner votre pièce</h3>
            <ol>
              <li><strong>Tournez sur place</strong> (360°) depuis le centre pour capturer la vue d'ensemble.</li>
              <li><strong>Longez chaque mur</strong> à 1-2 m de distance en pointant la caméra vers lui.</li>
              <li><strong>Approchez-vous des coins</strong> et des objets importants.</li>
              <li><strong>Bougez lentement</strong> — les mouvements brusques dégradent le tracking.</li>
            </ol>
            <p class="ar-info-tip">💡 Se déplacer donne un scan beaucoup plus précis que tourner sur place. La profondeur est optimale à moins de 3 m.</p>
          </div>
        </Transition>
        <div class="ar-stats">
          <span>{{ markers.length }} marqueurs</span>
          <span>{{ pointCount }} points</span>
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
          <button class="ar-btn-action" type="button" @click="resetCloud">Réinitialiser</button>
          <div class="ar-reticle-hint">Tapez pour placer un marqueur</div>
          <button class="ar-btn-action exit" type="button" @click="stopAR">Quitter AR</button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.scanner-page {
  min-height: 100vh;
  display: grid;
  grid-template-columns: minmax(300px, 380px) 1fr;
  grid-template-rows: 1fr;
  gap: 1rem;
  padding: 1rem;
  box-sizing: border-box;
  background:
    radial-gradient(circle at 15% 20%, #173457 0%, transparent 45%),
    radial-gradient(circle at 80% 85%, #194f4f 0%, transparent 42%),
    #04080f;
  color: #eef4f9;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.scanner-page.ar-active {
  display: block;
  padding: 0;
  background: transparent;
}

.panel {
  background: rgba(7, 16, 29, 0.82);
  border: 1px solid rgba(132, 186, 216, 0.3);
  border-radius: 14px;
  padding: 1rem;
  backdrop-filter: blur(6px);
}

h1 {
  margin: 0;
  font-size: 1.7rem;
}

p {
  margin-top: 0.55rem;
  color: #b9cbda;
  line-height: 1.35;
}

.actions {
  display: grid;
  grid-template-columns: repeat(2, minmax(120px, 1fr));
  gap: 0.6rem;
  margin: 0.75rem 0;
}

.btn {
  border: 1px solid rgba(147, 188, 209, 0.45);
  background: rgba(35, 66, 90, 0.7);
  color: #eef4f9;
  padding: 0.58rem 0.68rem;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.16s ease, background-color 0.16s ease;
}

.btn:hover:not(:disabled) {
  transform: translateY(-1px);
  background: rgba(49, 92, 121, 0.88);
}

.btn:disabled {
  opacity: 0.44;
  cursor: not-allowed;
}

.btn.primary {
  background: rgba(35, 94, 125, 0.85);
}

.btn.success {
  background: rgba(24, 113, 92, 0.85);
}

.btn.warn {
  background: rgba(140, 60, 30, 0.85);
}

.btn.ar-btn {
  grid-column: 1 / -1;
  background: linear-gradient(135deg, rgba(0, 180, 100, 0.85), rgba(0, 120, 180, 0.85));
  font-weight: 600;
  font-size: 1.05rem;
  letter-spacing: 0.02em;
}

.status-grid {
  display: grid;
  grid-template-columns: 84px 1fr;
  gap: 0.22rem 0.65rem;
  margin-bottom: 0.85rem;
  font-size: 0.94rem;
}

video {
  width: 100%;
  border-radius: 12px;
  border: 1px solid rgba(152, 196, 221, 0.42);
  aspect-ratio: 16 / 9;
  object-fit: cover;
  background: #000;
}

.hidden-canvas {
  display: none;
}

.yaw-control {
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.yaw-control label {
  font-size: 0.9rem;
  color: #b9cbda;
}

.yaw-control input[type="range"] {
  width: 100%;
  accent-color: #3a8cc2;
}

.yaw-control small {
  margin: 0;
  font-size: 0.8rem;
  color: #7ea0b8;
}

.marker-list {
  max-height: 140px;
  overflow-y: auto;
  margin-bottom: 0.7rem;
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

.marker-coords {
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

.marker-remove:hover {
  color: #ff3055;
}

.overlay-canvas {
  cursor: crosshair;
}

.viewer {
  display: flex;
  flex-direction: column;
}

.scene-host {
  flex: 1;
  min-height: 500px;
  border-radius: 12px;
  border: 1px solid rgba(152, 196, 221, 0.32);
  overflow: hidden;
}

small {
  margin-top: 0.6rem;
  color: #9bb4c9;
  line-height: 1.45;
}

.overlay-panel {
  display: flex;
  flex-direction: column;
}

.overlay-panel h2 {
  margin: 0 0 0.5rem;
  font-size: 1.15rem;
}

.overlay-host {
  position: relative;
  flex: 1;
  min-height: 400px;
  border-radius: 12px;
  border: 1px solid rgba(152, 196, 221, 0.32);
  overflow: hidden;
  background: #000;
}

.overlay-placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6a8da6;
  font-size: 0.95rem;
  pointer-events: none;
}

@media (max-width: 1200px) {
  .scanner-page {
    grid-template-columns: 1fr 1fr;
  }

  .controls {
    grid-column: 1 / -1;
  }
}

@media (max-width: 980px) {
  .scanner-page {
    grid-template-columns: 1fr;
  }

  .controls {
    grid-column: 1;
  }

  .scene-host {
    min-height: 380px;
  }

  .overlay-host {
    min-height: 300px;
  }
}

/* ═══ AR Overlay (WebXR DOM) ═══ */

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
  line-height: 1;
  flex-shrink: 0;
}

.ar-info-btn:hover {
  background: rgba(255, 255, 255, 0.28);
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
  z-index: 10;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
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

.ar-info-tip {
  margin: 0.7rem 0 0;
  padding: 0.5rem 0.65rem;
  background: rgba(0, 180, 120, 0.15);
  border: 1px solid rgba(0, 180, 120, 0.3);
  border-radius: 8px;
  font-size: 0.82rem;
  color: #a0e8d0;
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
  line-height: 1;
  padding: 0 0.2rem;
}

.ar-info-close:hover {
  color: #fff;
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
  max-height: 120px;
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
  padding: 0 0.2rem;
}

.ar-mk-coords {
  font-family: monospace;
  color: #b0d0e8;
  font-size: 0.75rem;
}

.ar-bottom {
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

.ar-btn-action.exit {
  background: rgba(160, 40, 40, 0.85);
  border-color: rgba(255, 100, 100, 0.5);
}

.ar-reticle-hint {
  font-size: 0.8rem;
  color: #90c0d0;
}
</style>
