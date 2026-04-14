<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const videoRef = ref<HTMLVideoElement | null>(null)
const scannerCanvasRef = ref<HTMLCanvasElement | null>(null)
const overlayCanvasRef = ref<HTMLCanvasElement | null>(null)
const sceneContainerRef = ref<HTMLDivElement | null>(null)

const cameraActive = ref(false)
const scanning = ref(false)
const statusMessage = ref('Camera is off')
const pointCount = ref(0)
const frameCount = ref(0)

let mediaStream: MediaStream | null = null
let scannerRafId = 0
let renderRafId = 0

let lastOverlayPoints: { x: number; y: number; r: number; g: number; b: number; depth: number }[] = []

const sceneState = shallowRef<{
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  renderer: THREE.WebGLRenderer
  controls: OrbitControls
  pointGeometry: THREE.BufferGeometry
  pointMaterial: THREE.PointsMaterial
  pointMesh: THREE.Points
} | null>(null)

const canScan = computed(() => cameraActive.value)

function createThreeScene() {
  const container = sceneContainerRef.value
  if (!container) {
    return
  }

  const scene = new THREE.Scene()
  scene.background = new THREE.Color('#0b0f16')

  const camera = new THREE.PerspectiveCamera(55, container.clientWidth / container.clientHeight, 0.1, 200)
  camera.position.set(0, 1.4, 5)

  const renderer = new THREE.WebGLRenderer({ antialias: true })
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

  scene.add(new THREE.GridHelper(14, 14, 0x4f7188, 0x1e3546))
  scene.add(new THREE.AxesHelper(2.2))

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
    pointMesh
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

function updatePointCloud(positions: number[], colors: number[]) {
  const state = sceneState.value
  if (!state) {
    return
  }

  state.pointGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  state.pointGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
  state.pointGeometry.computeBoundingSphere()
  pointCount.value = positions.length / 3
}

function sampleRoomToPointCloud() {
  const video = videoRef.value
  const scanCanvas = scannerCanvasRef.value
  if (!video || !scanCanvas || video.videoWidth === 0 || video.videoHeight === 0) {
    return
  }

  const sampleWidth = 160
  const sampleHeight = 120
  scanCanvas.width = sampleWidth
  scanCanvas.height = sampleHeight

  const ctx = scanCanvas.getContext('2d', { willReadFrequently: true })
  if (!ctx) {
    return
  }

  ctx.drawImage(video, 0, 0, sampleWidth, sampleHeight)
  const imageData = ctx.getImageData(0, 0, sampleWidth, sampleHeight)
  const data = imageData.data

  const positions: number[] = []
  const colors: number[] = []
  const overlayPts: typeof lastOverlayPoints = []

  const step = 3
  frameCount.value += 1
  const frameWave = Math.sin(frameCount.value * 0.09) * 0.18

  for (let y = 0; y < sampleHeight; y += step) {
    for (let x = 0; x < sampleWidth; x += step) {
      const i = (y * sampleWidth + x) * 4
      const r = data[i]
      const g = data[i + 1]
      const b = data[i + 2]
      const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b

      const nextX = Math.min(x + 1, sampleWidth - 1)
      const nextY = Math.min(y + 1, sampleHeight - 1)
      const iX = (y * sampleWidth + nextX) * 4
      const iY = (nextY * sampleWidth + x) * 4
      const lumX = 0.2126 * data[iX] + 0.7152 * data[iX + 1] + 0.0722 * data[iX + 2]
      const lumY = 0.2126 * data[iY] + 0.7152 * data[iY + 1] + 0.0722 * data[iY + 2]
      const contrast = Math.min(Math.abs(lumX - luminance) + Math.abs(lumY - luminance), 255)

      const xNorm = x / sampleWidth - 0.5
      const yNorm = 0.5 - y / sampleHeight

      const estimatedDepth = (255 - luminance) / 255
      const contrastBoost = contrast / 255
      const z = estimatedDepth * 3.4 + contrastBoost * 1.2 + frameWave

      positions.push(xNorm * 6.4, yNorm * 3.6, z)

      const colorDepth = 1 - estimatedDepth
      const cr = colorDepth
      const cg = 0.35 + contrastBoost * 0.45
      const cb = estimatedDepth
      colors.push(cr, cg, cb)

      overlayPts.push({ x, y, r: cr, g: cg, b: cb, depth: estimatedDepth })
    }
  }

  lastOverlayPoints = overlayPts
  updatePointCloud(positions, colors)
  statusMessage.value = `Scanning in progress (${pointCount.value} xyz points)`
}

function drawOverlay() {
  const video = videoRef.value
  const canvas = overlayCanvasRef.value
  if (!video || !canvas || video.videoWidth === 0) {
    return
  }

  const displayW = canvas.clientWidth
  const displayH = canvas.clientHeight
  if (canvas.width !== displayW || canvas.height !== displayH) {
    canvas.width = displayW
    canvas.height = displayH
  }

  const ctx = canvas.getContext('2d')
  if (!ctx) {
    return
  }

  ctx.drawImage(video, 0, 0, displayW, displayH)

  const sampleWidth = 160
  const sampleHeight = 120
  const scaleX = displayW / sampleWidth
  const scaleY = displayH / sampleHeight
  const dotSize = Math.max(2, Math.min(scaleX, scaleY) * 1.6)

  for (const pt of lastOverlayPoints) {
    const px = pt.x * scaleX
    const py = pt.y * scaleY
    const alpha = 0.35 + pt.depth * 0.55
    const ri = Math.round(pt.r * 255)
    const gi = Math.round(pt.g * 255)
    const bi = Math.round(pt.b * 255)
    ctx.fillStyle = `rgba(${ri},${gi},${bi},${alpha.toFixed(2)})`
    ctx.beginPath()
    ctx.arc(px, py, dotSize, 0, Math.PI * 2)
    ctx.fill()
  }
}

function scanLoop() {
  if (!scanning.value) {
    return
  }

  sampleRoomToPointCloud()
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
  statusMessage.value = 'Preparing room scan...'
  scanLoop()
}

function stopScan() {
  scanning.value = false
  if (scannerRafId) {
    cancelAnimationFrame(scannerRafId)
    scannerRafId = 0
  }
  statusMessage.value = 'Scan paused'
}

function resetCloud() {
  updatePointCloud([], [])
  frameCount.value = 0
  statusMessage.value = cameraActive.value ? 'Point cloud reset' : 'Camera is off'
}

onMounted(async () => {
  await nextTick()
  createThreeScene()
  updateSize()
  window.addEventListener('resize', updateSize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateSize)
  stopCamera()

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
  <main class="scanner-page">
    <section class="panel controls">
      <h1>RoomScanner</h1>
      <p>
        Open camera, scan your room, and generate an estimated 3D xyz point cloud.
      </p>

      <div class="actions">
        <button class="btn primary" type="button" @click="openCamera" :disabled="cameraActive">
          Open Camera
        </button>
        <button class="btn" type="button" @click="stopCamera" :disabled="!cameraActive">
          Close Camera
        </button>
        <button class="btn success" type="button" @click="startScan" :disabled="!canScan || scanning">
          Start Scan
        </button>
        <button class="btn" type="button" @click="stopScan" :disabled="!scanning">
          Stop Scan
        </button>
        <button class="btn" type="button" @click="resetCloud">
          Reset Cloud
        </button>
      </div>

      <div class="status-grid">
        <span>Status</span>
        <strong>{{ statusMessage }}</strong>
        <span>Points</span>
        <strong>{{ pointCount }}</strong>
        <span>Axes</span>
        <strong>X (red), Y (green), Z (blue)</strong>
      </div>

      <video ref="videoRef" autoplay muted playsinline></video>
      <canvas ref="scannerCanvasRef" class="hidden-canvas"></canvas>
    </section>

    <section class="panel viewer">
      <div ref="sceneContainerRef" class="scene-host"></div>
      <small>
        XYZ output is an estimated monocular depth map, useful as a lightweight room reconstruction preview.
      </small>
    </section>

    <section class="panel overlay-panel">
      <h2>AR Overlay</h2>
      <div class="overlay-host">
        <canvas ref="overlayCanvasRef" class="overlay-canvas"></canvas>
        <div v-if="!scanning" class="overlay-placeholder">
          Start scanning to see points overlaid on camera
        </div>
      </div>
      <small>
        Points are drawn on top of the camera feed so you can check alignment with walls &amp; objects.
      </small>
    </section>
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

.overlay-canvas {
  width: 100%;
  height: 100%;
  display: block;
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
</style>
