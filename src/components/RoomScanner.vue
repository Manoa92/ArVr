<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const videoRef = ref<HTMLVideoElement | null>(null)
const scannerCanvasRef = ref<HTMLCanvasElement | null>(null)
const overlayCanvasRef = ref<HTMLCanvasElement | null>(null)
const sceneContainerRef = ref<HTMLDivElement | null>(null)
const arOverlayRef = ref<HTMLDivElement | null>(null)

const cameraActive = ref(false)
const scanning = ref(false)
const statusMessage = ref('Camera is off')
const pointCount = ref(0)
const captureCount = ref(0)
const hasGyro = ref(false)
const manualYaw = ref(0) // degrees, desktop fallback
const xrSupported = ref(false)
const xrActive = ref(false)

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

// Orientation from device
let orientAlpha = 0
let orientBeta = 0

// Accumulated world-space point cloud
let accPositions: number[] = []
let accColors: number[] = []

// Per-frame view-space data (for overlay + click)
let frameViewPts: { px: number; py: number; vx: number; vy: number; vz: number; cr: number; cg: number; cb: number; depth: number }[] = []

let lastCaptureYaw = -999
const AUTO_CAPTURE_ANGLE = 8 * Math.PI / 180
const SAMPLE_W = 160
const SAMPLE_H = 120
const MAX_WORLD_POINTS = 250000

// Pinhole camera model
const HFOV = 55 * Math.PI / 180
const TAN_HALF_H = Math.tan(HFOV / 2)
const TAN_HALF_V = TAN_HALF_H * (SAMPLE_H / SAMPLE_W)

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

const canScan = computed(() => cameraActive.value && !xrActive.value)

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
  const pointMaterial = new THREE.PointsMaterial({ size: 0.04, vertexColors: true })
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
      optionalFeatures: ['dom-overlay', 'depth-sensing', 'anchors'],
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

    // Sparse cloud from hit-test center ray
    if (results.length > 0 && xrFrameCount % 3 === 0) {
      const p = results[0].getPose(localRefSpace)
      if (p) {
        const pos = p.transform.position
        accPositions.push(pos.x, pos.y, pos.z)
        accColors.push(0.3, 0.85, 0.5)
        trimCloud()
        if (xrFrameCount % 30 === 0) syncCloudToScene()
      }
    }
  }

  // Depth sensing cloud (when available)
  if (localRefSpace && xrFrameCount % 5 === 0) {
    const viewerPose = frame.getViewerPose(localRefSpace)
    if (viewerPose) sampleDepthCloud(frame, viewerPose)
  }

  xrFrameCount++
  state.renderer.render(state.scene, state.camera)
}

function sampleDepthCloud(frame: XRFrame, viewerPose: XRViewerPose) {
  for (const view of viewerPose.views) {
    const depthInfo = (frame as any).getDepthInformation?.(view)
    if (!depthInfo) continue
    const { width, height } = depthInfo
    const step = Math.max(4, Math.floor(width / 40))
    const projInv = new THREE.Matrix4().fromArray(view.projectionMatrix).invert()
    const v2w = new THREE.Matrix4().fromArray(view.transform.matrix)
    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        const depth: number = depthInfo.getDepthInMeters(x / width, y / height)
        if (depth <= 0.1 || depth > 6) continue
        const ndcX = (x / width) * 2 - 1
        const ndcY = 1 - (y / height) * 2
        const clip = new THREE.Vector4(ndcX, ndcY, -1, 1).applyMatrix4(projInv)
        const dir = new THREE.Vector3(clip.x / clip.w, clip.y / clip.w, clip.z / clip.w).normalize()
        const wp = dir.multiplyScalar(depth).applyMatrix4(v2w)
        accPositions.push(wp.x, wp.y, wp.z)
        const norm = Math.min(depth / 6, 1)
        accColors.push(1 - norm * 0.6, 0.4 + norm * 0.3, 0.3 + norm * 0.5)
      }
    }
    captureCount.value++
  }
  trimCloud()
  syncCloudToScene()
}

function onXRTap() {
  if (!reticleMesh?.visible || !lastHitPose) return
  const pos = new THREE.Vector3()
  pos.setFromMatrixPosition(new THREE.Matrix4().fromArray(lastHitPose.transform.matrix))
  const id = nextMarkerId++
  const marker: Marker = { id, wx: pos.x, wy: pos.y, wz: pos.z, label: `M${id}` }
  markers.value.push(marker)
  addMarker3D(marker)
  statusMessage.value = `Marqueur ${marker.label} à (${pos.x.toFixed(2)}, ${pos.y.toFixed(2)}, ${pos.z.toFixed(2)})`
}

function onXREnd() {
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

// ──────────────── Orientation ────────────────

function onDeviceOrientation(e: DeviceOrientationEvent) {
  if (e.alpha == null || e.beta == null) return
  hasGyro.value = true
  orientAlpha = e.alpha * Math.PI / 180
  orientBeta = (e.beta ?? 0) * Math.PI / 180
}

async function initOrientation() {
  const DOE = DeviceOrientationEvent as any
  if (typeof DOE.requestPermission === 'function') {
    try {
      const result = await DOE.requestPermission()
      if (result === 'granted') {
        window.addEventListener('deviceorientation', onDeviceOrientation, true)
      }
    } catch { /* denied */ }
  } else {
    window.addEventListener('deviceorientation', onDeviceOrientation, true)
  }
}

function currentYaw(): number {
  return hasGyro.value ? orientAlpha : (manualYaw.value * Math.PI / 180)
}

function currentPitch(): number {
  return hasGyro.value ? orientBeta : 0
}

function viewToWorldMatrix(): THREE.Matrix4 {
  const m = new THREE.Matrix4()
  m.makeRotationFromEuler(new THREE.Euler(-currentPitch(), currentYaw(), 0, 'YXZ'))
  return m
}

function worldToViewMatrix(): THREE.Matrix4 {
  return viewToWorldMatrix().clone().invert()
}

// ──────────────── Projection ────────────────

function projectWorldToScreen(wx: number, wy: number, wz: number, dw: number, dh: number): { sx: number; sy: number; visible: boolean } {
  const inv = worldToViewMatrix()
  const v = new THREE.Vector3(wx, wy, wz)
  v.applyMatrix4(inv)

  if (v.z >= -0.05) return { sx: 0, sy: 0, visible: false }

  const negZ = -v.z
  const ndcX = v.x / (2 * TAN_HALF_H * negZ)
  const ndcY = v.y / (2 * TAN_HALF_V * negZ)

  const visible = ndcX >= -0.5 && ndcX <= 0.5 && ndcY >= -0.5 && ndcY <= 0.5
  return {
    sx: (ndcX + 0.5) * dw,
    sy: (0.5 - ndcY) * dh,
    visible
  }
}

// ──────────────── Frame Processing ────────────────

function processFrame() {
  const video = videoRef.value
  const canvas = scannerCanvasRef.value
  if (!video || !canvas || video.videoWidth === 0) return

  canvas.width = SAMPLE_W
  canvas.height = SAMPLE_H
  const ctx = canvas.getContext('2d', { willReadFrequently: true })
  if (!ctx) return

  ctx.drawImage(video, 0, 0, SAMPLE_W, SAMPLE_H)
  const data = ctx.getImageData(0, 0, SAMPLE_W, SAMPLE_H).data

  frameViewPts = []
  const step = 3

  for (let py = 0; py < SAMPLE_H; py += step) {
    for (let px = 0; px < SAMPLE_W; px += step) {
      const i = (py * SAMPLE_W + px) * 4
      const r = data[i], g = data[i + 1], b = data[i + 2]
      const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b

      const depthNorm = (255 - lum) / 255
      const depth = 1.0 + depthNorm * 3.5

      const ndcX = px / SAMPLE_W - 0.5
      const ndcY = 0.5 - py / SAMPLE_H
      const vx = ndcX * 2 * TAN_HALF_H * depth
      const vy = ndcY * 2 * TAN_HALF_V * depth
      const vz = -depth

      const nextPx = Math.min(px + 1, SAMPLE_W - 1)
      const nextPy = Math.min(py + 1, SAMPLE_H - 1)
      const iX = (py * SAMPLE_W + nextPx) * 4
      const iY = (nextPy * SAMPLE_W + px) * 4
      const lumX = 0.2126 * data[iX] + 0.7152 * data[iX + 1] + 0.0722 * data[iX + 2]
      const lumY = 0.2126 * data[iY] + 0.7152 * data[iY + 1] + 0.0722 * data[iY + 2]
      const contrast = Math.min(Math.abs(lumX - lum) + Math.abs(lumY - lum), 255) / 255

      frameViewPts.push({
        px, py, vx, vy, vz,
        cr: 1 - depthNorm,
        cg: 0.35 + contrast * 0.45,
        cb: depthNorm,
        depth: depthNorm
      })
    }
  }
}

function captureSnapshot() {
  if (frameViewPts.length === 0) return

  const rot = viewToWorldMatrix()
  const v = new THREE.Vector3()

  for (const pt of frameViewPts) {
    v.set(pt.vx, pt.vy, pt.vz)
    v.applyMatrix4(rot)
    accPositions.push(v.x, v.y, v.z)
    accColors.push(pt.cr, pt.cg, pt.cb)
  }
  trimCloud()

  captureCount.value++
  lastCaptureYaw = currentYaw()
  syncCloudToScene()
  statusMessage.value = `Capture #${captureCount.value} — ${pointCount.value} world points`
}

function drawOverlay() {
  const video = videoRef.value
  const canvas = overlayCanvasRef.value
  if (!video || !canvas || video.videoWidth === 0) return

  const dw = canvas.clientWidth
  const dh = canvas.clientHeight
  if (canvas.width !== dw || canvas.height !== dh) {
    canvas.width = dw
    canvas.height = dh
  }

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  ctx.drawImage(video, 0, 0, dw, dh)

  const scaleX = dw / SAMPLE_W
  const scaleY = dh / SAMPLE_H
  const dotSize = Math.max(2, Math.min(scaleX, scaleY) * 1.6)

  // Draw current-frame overlay points
  for (const pt of frameViewPts) {
    const sx = pt.px * scaleX
    const sy = pt.py * scaleY
    const alpha = 0.3 + pt.depth * 0.5
    ctx.fillStyle = `rgba(${Math.round(pt.cr * 255)},${Math.round(pt.cg * 255)},${Math.round(pt.cb * 255)},${alpha.toFixed(2)})`
    ctx.beginPath()
    ctx.arc(sx, sy, dotSize, 0, Math.PI * 2)
    ctx.fill()
  }

  // Draw markers re-projected from world space
  for (const mk of markers.value) {
    const proj = projectWorldToScreen(mk.wx, mk.wy, mk.wz, dw, dh)
    const radius = Math.max(8, dotSize * 4)

    if (!proj.visible) continue

    const mx = proj.sx
    const my = proj.sy

    // Outer ring
    ctx.strokeStyle = '#ffffff'
    ctx.lineWidth = 2.5
    ctx.beginPath()
    ctx.arc(mx, my, radius, 0, Math.PI * 2)
    ctx.stroke()

    // Inner filled dot
    ctx.fillStyle = '#ff3055'
    ctx.beginPath()
    ctx.arc(mx, my, radius * 0.45, 0, Math.PI * 2)
    ctx.fill()

    // Crosshair lines
    ctx.strokeStyle = 'rgba(255,255,255,0.6)'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(mx - radius * 1.5, my)
    ctx.lineTo(mx - radius * 0.7, my)
    ctx.moveTo(mx + radius * 0.7, my)
    ctx.lineTo(mx + radius * 1.5, my)
    ctx.moveTo(mx, my - radius * 1.5)
    ctx.lineTo(mx, my - radius * 0.7)
    ctx.moveTo(mx, my + radius * 0.7)
    ctx.lineTo(mx, my + radius * 1.5)
    ctx.stroke()

    // Label
    ctx.font = `bold ${Math.max(12, radius * 0.9)}px sans-serif`
    ctx.fillStyle = '#ffffff'
    ctx.fillText(mk.label, mx + radius + 4, my - radius * 0.3)

    // Coordinates
    ctx.font = `${Math.max(10, radius * 0.7)}px monospace`
    ctx.fillStyle = '#b0d0e8'
    ctx.fillText(
      `(${mk.wx.toFixed(2)}, ${mk.wy.toFixed(2)}, ${mk.wz.toFixed(2)})`,
      mx + radius + 4,
      my + radius * 0.6
    )
  }
}

function scanLoop() {
  if (!scanning.value) return

  processFrame()

  // Auto-capture when yaw changes enough
  const yawDelta = Math.abs(currentYaw() - lastCaptureYaw)
  const normalizedDelta = Math.min(yawDelta, 2 * Math.PI - yawDelta)
  if (normalizedDelta >= AUTO_CAPTURE_ANGLE || lastCaptureYaw === -999) {
    captureSnapshot()
  }

  drawOverlay()
  scannerRafId = requestAnimationFrame(scanLoop)
}

async function openCamera() {
  if (cameraActive.value) {
    return
  }

  try {
    statusMessage.value = 'Requesting camera access...'
    mediaStream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: { ideal: 'environment' },
        width: { ideal: 1280 },
        height: { ideal: 720 }
      },
      audio: false
    })

    const video = videoRef.value
    if (!video) {
      throw new Error('Video element is unavailable')
    }

    video.srcObject = mediaStream
    await video.play()
    cameraActive.value = true
    statusMessage.value = 'Camera is ready'
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown camera error'
    statusMessage.value = `Camera error: ${message}`
    cameraActive.value = false
  }
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

function startScan() {
  if (!cameraActive.value || scanning.value) {
    return
  }

  scanning.value = true
  lastCaptureYaw = -999
  statusMessage.value = 'Scanning — rotate slowly around you...'
  scanLoop()
}

function stopScan() {
  scanning.value = false
  if (scannerRafId) {
    cancelAnimationFrame(scannerRafId)
    scannerRafId = 0
  }
  statusMessage.value = `Scan paused — ${captureCount.value} captures, ${pointCount.value} points`
}

function onOverlayClick(event: MouseEvent) {
  const canvas = overlayCanvasRef.value
  if (!canvas || frameViewPts.length === 0) return

  const rect = canvas.getBoundingClientRect()
  const clickX = event.clientX - rect.left
  const clickY = event.clientY - rect.top
  const scaleX = canvas.clientWidth / SAMPLE_W
  const scaleY = canvas.clientHeight / SAMPLE_H

  // Find nearest frame point to click
  let bestDist = Infinity
  let bestPt = frameViewPts[0]
  for (const pt of frameViewPts) {
    const dx = pt.px * scaleX - clickX
    const dy = pt.py * scaleY - clickY
    const d = dx * dx + dy * dy
    if (d < bestDist) { bestDist = d; bestPt = pt }
  }

  // Convert view-space point to world-space (fixed anchor)
  const rot = viewToWorldMatrix()
  const worldPt = new THREE.Vector3(bestPt.vx, bestPt.vy, bestPt.vz).applyMatrix4(rot)

  const id = nextMarkerId++
  const marker: Marker = {
    id,
    wx: worldPt.x,
    wy: worldPt.y,
    wz: worldPt.z,
    label: `M${id}`
  }
  markers.value.push(marker)
  addMarker3D(marker)
  statusMessage.value = `Marker ${marker.label} placed at (${marker.wx.toFixed(2)}, ${marker.wy.toFixed(2)}, ${marker.wz.toFixed(2)})`
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

function manualCapture() {
  if (frameViewPts.length === 0) return
  captureSnapshot()
}

function resetCloud() {
  accPositions = []
  accColors = []
  syncCloudToScene()
  captureCount.value = 0
  lastCaptureYaw = -999
  clearMarkers()
  statusMessage.value = cameraActive.value ? 'Cloud reset — ready to scan again' : 'Camera is off'
}

onMounted(async () => {
  await nextTick()
  createThreeScene()
  updateSize()
  window.addEventListener('resize', updateSize)
  initOrientation()
  checkXRSupport()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateSize)
  window.removeEventListener('deviceorientation', onDeviceOrientation, true)
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
        <button class="btn primary" type="button" @click="openCamera" :disabled="cameraActive || xrActive">
          Ouvrir Caméra
        </button>
        <button class="btn" type="button" @click="stopCamera" :disabled="!cameraActive">
          Fermer Caméra
        </button>
        <button class="btn success" type="button" @click="startScan" :disabled="!canScan || scanning">
          Scanner
        </button>
        <button class="btn" type="button" @click="stopScan" :disabled="!scanning">
          Arrêter
        </button>
        <button class="btn primary" type="button" @click="manualCapture" :disabled="!scanning">
          Capturer
        </button>
        <button class="btn" type="button" @click="resetCloud">
          Réinitialiser
        </button>
        <button class="btn warn" type="button" @click="clearMarkers" :disabled="markers.length === 0">
          Effacer Marqueurs
        </button>
      </div>

      <div v-if="!hasGyro && scanning" class="yaw-control">
        <label>Rotation manuelle : {{ manualYaw }}°</label>
        <input type="range" min="0" max="360" step="1" v-model.number="manualYaw" />
        <small>Pas de gyroscope détecté. Utilisez ce curseur pour simuler la rotation.</small>
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
        <span>Gyro</span>
        <strong>{{ hasGyro ? 'Actif' : 'Manuel' }}</strong>
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

      <video ref="videoRef" autoplay muted playsinline></video>
      <canvas ref="scannerCanvasRef" class="hidden-canvas"></canvas>
    </section>

    <section v-show="!xrActive" class="panel viewer">
      <div ref="sceneContainerRef" class="scene-host"></div>
      <small>
        Reconstruction 3D accumulée. Les marqueurs apparaissent comme des sphères rouges.
      </small>
    </section>

    <section v-show="!xrActive" class="panel overlay-panel">
      <h2>AR Overlay</h2>
      <div class="overlay-host">
        <canvas ref="overlayCanvasRef" class="overlay-canvas" @click="onOverlayClick"></canvas>
        <div v-if="!scanning" class="overlay-placeholder">
          Lancez le scan pour voir les points sur la caméra
        </div>
      </div>
      <small>
        Cliquez pour poser un marqueur. Les marqueurs restent fixes dans l'espace.
      </small>
    </section>

    <!-- AR DOM Overlay (WebXR) -->
    <div ref="arOverlayRef" class="ar-overlay" :class="{ active: xrActive }">
      <div class="ar-hud">
        <div class="ar-top">
          <span class="ar-badge">AR</span>
          <span class="ar-status">{{ statusMessage }}</span>
        </div>
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
  grid-template-columns: minmax(300px, 380px) 1fr 1fr;
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
