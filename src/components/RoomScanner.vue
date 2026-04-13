<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'

// ===== TYPES =====
interface ScanPoint {
  position: THREE.Vector3
  normal: THREE.Vector3
  color: THREE.Color
}

interface UserPosition {
  x: number
  y: number
  z: number
}

// ===== REFS =====
const canvasContainer = ref<HTMLDivElement>()
const minimapCanvas = ref<HTMLCanvasElement>()
const videoElement = ref<HTMLVideoElement>()

// États
const isXRSupported = ref(false)
const isXRActive = ref(false)
const isScanning = ref(false)
const scanPoints = ref<ScanPoint[]>([])
const userPosition = ref<UserPosition>({ x: 0, y: 0, z: 0 })
const xrMessage = ref('')
const fps = ref(0)
const isSidebarOpen = ref(true)
const isVideoPopupOpen = ref(false)
const lastXRPosition = ref<{ x: number; y: number; z: number }>({ x: 0, y: 0, z: 0 })

// Three.js objets
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let animationId: number
let minimapCtx: CanvasRenderingContext2D | null = null

// WebXR
let xrSession: XRSession | null = null
let xrReferenceSpace: XRReferenceSpace | null = null
let xrFrame: XRFrame | null = null

// Scanning
let scannedMesh: THREE.Mesh | null = null
let pointsMesh: THREE.Points | null = null
let scanInterval: number | null = null

let stream: MediaStream | null = null
let lastFrameTime = Date.now()
let frameCount = 0

// ===== INITIALIZATION =====
onMounted(async () => {
  // Vérifier support WebXR
  if ('xr' in navigator) {
    try {
      const supported = await (navigator as any).xr?.isSessionSupported('immersive-ar')
      isXRSupported.value = supported || false
      xrMessage.value = supported ? '✅ WebXR (AR) disponible' : '⚠️ WebXR non disponible sur ce navigateur'
    } catch {
      isXRSupported.value = false
      xrMessage.value = '❌ Erreur WebXR'
    }
  }

  if (!canvasContainer.value) return

  // Setup Three.js
  setupThreeJS()

  // Setup minimap
  if (minimapCanvas.value) {
    minimapCtx = minimapCanvas.value.getContext('2d')
  }

  // Lancer animation
  animate()

  // Redimensionnement
  window.addEventListener('resize', onWindowResize)
})

onUnmounted(() => {
  stopXR()
  stopCamera()
  cancelAnimationFrame(animationId)
  if (scanInterval) clearInterval(scanInterval)
  window.removeEventListener('resize', onWindowResize)
})

// ===== THREE.JS SETUP =====
function setupThreeJS() {
  if (!canvasContainer.value) return

  const width = canvasContainer.value.clientWidth
  const height = canvasContainer.value.clientHeight

  // Scene
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x1a1a2e)
  scene.fog = new THREE.Fog(0x1a1a2e, 50, 100)

  // Camera
  camera = new THREE.PerspectiveCamera(75, width / height, 0.01, 1000)
  camera.position.set(5, 2, 5)
  camera.lookAt(0, 1, 0)

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(width, height)
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.shadowMap.enabled = true
  canvasContainer.value.appendChild(renderer.domElement)

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
  scene.add(ambientLight)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9)
  directionalLight.position.set(10, 10, 10)
  directionalLight.castShadow = true
  directionalLight.shadow.mapSize.width = 2048
  directionalLight.shadow.mapSize.height = 2048
  scene.add(directionalLight)

  // Axes
  const axesHelper = new THREE.AxesHelper(5)
  scene.add(axesHelper)

  // Sol
  const floorGeometry = new THREE.PlaneGeometry(20, 20)
  const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.1, roughness: 0.8 })
  const floor = new THREE.Mesh(floorGeometry, floorMaterial)
  floor.rotation.x = -Math.PI / 2
  floor.position.y = 0
  scene.add(floor)

  // Grille
  const gridHelper = new THREE.GridHelper(20, 20, 0x444444, 0x222222)
  gridHelper.position.y = 0.01
  scene.add(gridHelper)

  // User position marker
  const userGeometry = new THREE.SphereGeometry(0.25, 32, 32)
  const userMaterial = new THREE.MeshStandardMaterial({ color: 0xff6600, emissive: 0xff6600 })
  const userMarker = new THREE.Mesh(userGeometry, userMaterial)
  userMarker.position.set(0, 0.25, 0)
  scene.add(userMarker)

  // Points cloud placeholder
  const pointsGeometry = new THREE.BufferGeometry()
  pointsGeometry.setAttribute('position', new THREE.Float32BufferAttribute([], 3))
  pointsGeometry.setAttribute('color', new THREE.Float32BufferAttribute([], 3))
  
  const pointsMaterial = new THREE.PointsMaterial({
    size: 0.05,
    sizeAttenuation: true,
    vertexColors: true,
    transparent: true,
    opacity: 0.8
  })
  pointsMesh = new THREE.Points(pointsGeometry, pointsMaterial)
  scene.add(pointsMesh)

  // Room placeholder
  const roomGeometry = new THREE.BoxGeometry(8, 3, 8)
  const roomMaterial = new THREE.MeshStandardMaterial({
    color: 0x4a4a6a,
    transparent: true,
    opacity: 0.1,
    wireframe: false
  })
  scannedMesh = new THREE.Mesh(roomGeometry, roomMaterial)
  scannedMesh.position.y = 1.5
  scene.add(scannedMesh)

  // Wireframe
  const edges = new THREE.EdgesGeometry(roomGeometry)
  const wireframe = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x00ff00, linewidth: 2 }))
  wireframe.position.copy(scannedMesh.position)
  scene.add(wireframe)
}

// ===== CAMERA CONTROL =====
async function startCamera() {
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: { ideal: 'environment' }, // Caméra arrière
        width: { ideal: 1280 },
        height: { ideal: 720 }
      }
    })
    if (videoElement.value) {
      videoElement.value.srcObject = stream
    }
  } catch (error) {
    console.error('Erreur caméra:', error)
    xrMessage.value = '❌ Impossible d\'accéder à la caméra'
  }
}

function stopCamera() {
  if (stream) {
    stream.getTracks().forEach(track => track.stop())
    stream = null
  }
  if (videoElement.value) {
    videoElement.value.srcObject = null
  }
}

// ===== WebXR AR =====
async function startXR() {
  if (!isXRSupported.value) {
    xrMessage.value = '❌ WebXR non supporté'
    return
  }

  try {
    const xr = (navigator as any).xr
    xrSession = await xr.requestSession('immersive-ar', {
      requiredFeatures: ['hit-test', 'dom-overlay'],
      optionalFeatures: ['depth-sensing', 'dom-overlay-for-handheld-ar'],
      domOverlay: { root: document.body }
    })

    if (xrSession) {
      xrReferenceSpace = await xrSession.requestReferenceSpace('local')
    }

    renderer.xr.enabled = true
    renderer.xr.setSession(xrSession)

    isXRActive.value = true
    xrMessage.value = '✅ Mode AR activé'

    // Commencer le scan
    startXRScan()
  } catch (error) {
    console.error('Erreur XR:', error)
    xrMessage.value = `❌ Erreur AR: ${(error as Error).message}`
  }
}

function stopXR() {
  if (xrSession) {
    xrSession.end()
    xrSession = null
  }
  isXRActive.value = false
  xrMessage.value = 'Mode AR arrêté'
  stopXRScan()
  renderer.xr.enabled = false
}

function startXRScan() {
  isScanning.value = true
  xrMessage.value = '🔄 Scanning... Déplacez autour de la pièce'

  scanInterval = window.setInterval(() => {
    if (!xrFrame || !xrReferenceSpace) return

    try {
      const pose = xrFrame.getViewerPose(xrReferenceSpace)
      if (pose) {
        // Position utilisateur
        userPosition.value = {
          x: pose.transform.position.x,
          y: pose.transform.position.y,
          z: pose.transform.position.z
        }
        lastXRPosition.value = { ...userPosition.value }
      }

      // Générer des points de scan
      if (Math.random() < 0.3) {
        const angle = Math.random() * Math.PI * 2
        const distance = 2 + Math.random() * 3
        const point: ScanPoint = {
          position: new THREE.Vector3(
            Math.cos(angle) * distance + userPosition.value.x,
            0.5 + Math.random() * 2,
            Math.sin(angle) * distance + userPosition.value.z
          ),
          normal: new THREE.Vector3(0, 1, 0),
          color: new THREE.Color().setHSL(Math.random(), 0.7, 0.6)
        }
        scanPoints.value.push(point)
      }

      updatePointsVisualization()
    } catch (error) {
      console.error('Erreur scan XR:', error)
    }
  }, 100)
}

function stopXRScan() {
  isScanning.value = false
  if (scanInterval) {
    clearInterval(scanInterval)
    scanInterval = null
  }
}

// ===== SCANNING =====
function startManualScan() {
  isScanning.value = true
  xrMessage.value = '🔄 Scanning manual en cours...'

  // Simuler scanning avec déplacement dans la scène
  scanInterval = window.setInterval(() => {
    // Ajouter des points aléatoires autour de la position utilisateur
    let newPoints = 5
    for (let i = 0; i < newPoints; i++) {
      const angle = Math.random() * Math.PI * 2
      const distance = 1.5 + Math.random() * 4
      const height = Math.random() * 2.5

      const point: ScanPoint = {
        position: new THREE.Vector3(
          Math.cos(angle) * distance + userPosition.value.x,
          height,
          Math.sin(angle) * distance + userPosition.value.z
        ),
        normal: new THREE.Vector3(0, 1, 0),
        color: new THREE.Color().setHSL(Math.random() * 0.3, 0.8, 0.6) // Teintes vertes/bleues
      }
      scanPoints.value.push(point)
    }
    updatePointsVisualization()
  }, 200)
}

function stopManualScan() {
  isScanning.value = false
  if (scanInterval) {
    clearInterval(scanInterval)
    scanInterval = null
  }
  xrMessage.value = '✅ Scanning stoppé'
}

function clearScan() {
  scanPoints.value = []
  if (pointsMesh) {
    pointsMesh.geometry.dispose()
    const newGeom = new THREE.BufferGeometry()
    newGeom.setAttribute('position', new THREE.Float32BufferAttribute([], 3))
    newGeom.setAttribute('color', new THREE.Float32BufferAttribute([], 3))
    pointsMesh.geometry = newGeom
  }
  xrMessage.value = '🗑️ Scan effacé'
}

// ===== VISUALIZATION =====
function updatePointsVisualization() {
  if (!pointsMesh) return

  const positions = new Float32Array(scanPoints.value.length * 3)
  const colors = new Float32Array(scanPoints.value.length * 3)

  scanPoints.value.forEach((point, i) => {
    positions[i * 3] = point.position.x
    positions[i * 3 + 1] = point.position.y
    positions[i * 3 + 2] = point.position.z

    colors[i * 3] = point.color.r
    colors[i * 3 + 1] = point.color.g
    colors[i * 3 + 2] = point.color.b
  })

  pointsMesh.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  pointsMesh.geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  pointsMesh.geometry.attributes.position.needsUpdate = true
  pointsMesh.geometry.attributes.color.needsUpdate = true
}

function updateMinimap() {
  if (!minimapCtx || !minimapCanvas.value) return

  const w = minimapCanvas.value.width
  const h = minimapCanvas.value.height
  const scale = 0.05 // pixels per meter

  // Fond
  minimapCtx.fillStyle = '#1a1a2e'
  minimapCtx.fillRect(0, 0, w, h)

  // Grille
  minimapCtx.strokeStyle = '#333'
  minimapCtx.lineWidth = 1
  for (let i = 0; i <= 20; i++) {
    minimapCtx.beginPath()
    minimapCtx.moveTo(i * (w / 20), 0)
    minimapCtx.lineTo(i * (w / 20), h)
    minimapCtx.stroke()

    minimapCtx.beginPath()
    minimapCtx.moveTo(0, i * (h / 20))
    minimapCtx.lineTo(w, i * (h / 20))
    minimapCtx.stroke()
  }

  const centerX = w / 2
  const centerY = h / 2

  // Points scannés
  minimapCtx.fillStyle = 'rgba(0, 255, 100, 0.6)'
  scanPoints.value.slice(-500).forEach(point => {
    const px = centerX + point.position.x * scale
    const pz = centerY + point.position.z * scale
    if (px > 0 && px < w && pz > 0 && pz < h && minimapCtx) {
      minimapCtx.fillRect(px - 1, pz - 1, 2, 2)
    }
  })

  // Position utilisateur
  minimapCtx.fillStyle = '#ff6600'
  minimapCtx.beginPath()
  minimapCtx.arc(centerX, centerY, 8, 0, Math.PI * 2)
  minimapCtx.fill()

  // Direction utilisateur
  minimapCtx.strokeStyle = '#ffaa44'
  minimapCtx.lineWidth = 2
  minimapCtx.beginPath()
  minimapCtx.moveTo(centerX, centerY)
  minimapCtx.lineTo(centerX, centerY - 15)
  minimapCtx.stroke()

  // Texte info
  minimapCtx.fillStyle = '#0f0'
  minimapCtx.font = '12px monospace'
  minimapCtx.fillText(`Pts: ${scanPoints.value.length}`, 5, 15)
  minimapCtx.fillText(`Pos: (${userPosition.value.x.toFixed(1)}, ${userPosition.value.z.toFixed(1)})`, 5, 30)
}

// ===== ANIMATION =====
function animate() {
  animationId = requestAnimationFrame(animate)

  // FPS counter
  frameCount++
  const now = Date.now()
  if (now - lastFrameTime > 1000) {
    fps.value = frameCount
    frameCount = 0
    lastFrameTime = now
  }

  updateMinimap()
  renderer.render(scene, camera)
}

function onWindowResize() {
  if (!canvasContainer.value) return
  const width = canvasContainer.value.clientWidth
  const height = canvasContainer.value.clientHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}
</script>

<template>
  <div class="room-scanner-container">
    <!-- Header -->
    <div class="header">
      <div class="header-row">
        <h1>🏠 Room Scanner 3D + GPS Intérieur</h1>
        <div class="header-actions">
          <button @click="isSidebarOpen = !isSidebarOpen" class="btn btn-secondary small">
            {{ isSidebarOpen ? 'Fermer menu' : 'Ouvrir menu' }}
          </button>
          <button @click="isVideoPopupOpen = !isVideoPopupOpen" class="btn btn-primary small">
            {{ isVideoPopupOpen ? 'Fermer vidéo' : 'Voir vidéo' }}
          </button>
        </div>
      </div>
      <div class="info-bar">
        <span :class="['xr-status', { supported: isXRSupported }]">{{ xrMessage }}</span>
        <span class="fps-counter">FPS: {{ fps }}</span>
      </div>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <!-- 3D Viewer -->
      <div class="viewer-section">
        <div ref="canvasContainer" class="canvas-container"></div>
      </div>
    </div>

    <aside class="sidebar" :class="{ open: isSidebarOpen }">
      <div class="sidebar-header">
        <h3>📦 Menu</h3>
        <button @click="isSidebarOpen = false" class="btn btn-icon">×</button>
      </div>
      <div class="sidebar-body">
        <div class="minimap-section">
          <h3>📍 GPS Intérieur</h3>
          <canvas ref="minimapCanvas" width="300" height="300" class="minimap"></canvas>
          <div class="position-info">
            <p><strong>Position:</strong></p>
            <p>X: {{ userPosition.x.toFixed(2) }} m</p>
            <p>Y: {{ userPosition.y.toFixed(2) }} m</p>
            <p>Z: {{ userPosition.z.toFixed(2) }} m</p>
          </div>
        </div>

        <div class="controls-panel">
          <div class="control-group">
            <h3>📹 Caméra & AR</h3>
            <button @click="startCamera" class="btn btn-primary">Ouvrir Caméra</button>
            <button @click="stopCamera" class="btn btn-secondary">Fermer Caméra</button>
            <button @click="startXR" :disabled="!isXRSupported || isXRActive" class="btn btn-success">
              Démarrer AR (WebXR)
            </button>
            <button @click="stopXR" :disabled="!isXRActive" class="btn btn-danger">Arrêter AR</button>
          </div>

          <div class="control-group">
            <h3>🔍 Scanning</h3>
            <button @click="startManualScan" :disabled="isScanning" class="btn btn-primary">Démarrer Scan Manuel</button>
            <button @click="stopManualScan" :disabled="!isScanning" class="btn btn-secondary">Arrêter Scan</button>
            <button @click="clearScan" class="btn btn-warning">Effacer Points ({{ scanPoints.length }})</button>
          </div>
        </div>
      </div>
    </aside>

    <!-- Debug Info -->
    <div class="debug-info">
      <p><strong>Scan Points:</strong> {{ scanPoints.length }}</p>
      <p><strong>XR Status:</strong> {{ isXRActive ? 'Actif' : 'Inactif' }}</p>
      <p><strong>Scanning:</strong> {{ isScanning ? '🟢 En cours' : '🔴 Arrêté' }}</p>
    </div>

    <div v-if="isVideoPopupOpen" class="popup-overlay" @click.self="isVideoPopupOpen = false">
      <div class="video-popup">
        <div class="popup-header">
          <h3>🔴 Vidéo Caméra</h3>
          <button @click="isVideoPopupOpen = false" class="btn btn-icon">×</button>
        </div>
        <video ref="videoElement" autoplay playsinline muted class="popup-video"></video>
      </div>
    </div>
  </div>
</template>

<style scoped>
.room-scanner-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #0a0a0a;
  color: #fff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  overflow: hidden;
}

/* ===== HEADER (Compact) ===== */
.header {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 8px 12px;
  border-bottom: 2px solid #00ff88;
  flex-shrink: 0;
  min-height: 50px;
}

.header h1 {
  margin: 0;
  font-size: 16px;
  background: linear-gradient(90deg, #00ff88, #00ccff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.info-bar {
  display: flex;
  gap: 12px;
  margin-top: 4px;
  font-size: 10px;
  flex-wrap: wrap;
}

.xr-status {
  padding: 2px 8px;
  border-radius: 3px;
  background: #333;
  border: 1px solid #555;
  white-space: nowrap;
}

.xr-status.supported {
  background: #1a3a1a;
  border-color: #00ff88;
  color: #00ff88;
}

.fps-counter {
  padding: 2px 8px;
  background: #1a1a2a;
  border-radius: 3px;
  font-family: monospace;
  color: #00ffff;
  white-space: nowrap;
}

/* ===== MAIN CONTENT (Flexbox) ===== */
.main-content {
  display: flex;
  gap: 8px;
  padding: 8px;
  flex: 1;
  overflow: hidden;
}

.viewer-section {
  background: #000;
  border: 2px solid #333;
  border-radius: 6px;
  overflow: hidden;
  flex: 1;
  min-width: 0;
}

.canvas-container {
  width: 100%;
  height: 100%;
}

/* ===== MINIMAP (Compact & Responsive) ===== */
.minimap-section {
  background: #1a1a2e;
  border: 2px solid #333;
  border-radius: 6px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 180px;
  width: 200px;
  flex-shrink: 0;
}

.minimap-section h3 {
  margin: 0;
  font-size: 11px;
  color: #00ff88;
  text-transform: uppercase;
  white-space: nowrap;
}

.minimap {
  border: 1px solid #555;
  border-radius: 3px;
  background: #0a0a0a;
  width: 100%;
  aspect-ratio: 1;
  min-height: 120px;
}

.position-info {
  font-size: 9px;
  background: #0a0a0a;
  padding: 6px;
  border-radius: 3px;
  border: 1px solid #333;
}

.position-info p {
  margin: 1px 0;
  font-family: monospace;
  color: #00ccff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ===== CONTROLS PANEL (Horizontal + Compact) ===== */
.controls-panel {
  display: flex;
  gap: 8px;
  padding: 8px;
  background: #1a1a2e;
  border-top: 1px solid #333;
  flex-wrap: wrap;
  align-items: center;
  flex-shrink: 0;
  overflow-y: auto;
  max-height: 100px;
}

.control-group {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
}

.control-group h3 {
  margin: 0;
  font-size: 9px;
  color: #00ff88;
  text-transform: uppercase;
  white-space: nowrap;
  flex-basis: 100%;
}

.btn {
  padding: 5px 10px;
  border: 1px solid #555;
  border-radius: 3px;
  background: #2a2a3e;
  color: #fff;
  cursor: pointer;
  font-size: 10px;
  transition: all 0.2s;
  text-transform: uppercase;
  white-space: nowrap;
  flex-shrink: 0;
}

.btn:hover:not(:disabled) {
  background: #3a3a4e;
  border-color: #00ff88;
}

.btn-primary:not(:disabled) {
  background: #1a3a1a;
  border-color: #00ff88;
  color: #00ff88;
}

.btn-primary:not(:disabled):hover {
  background: #1a4a1a;
  box-shadow: 0 0 8px rgba(0, 255, 136, 0.2);
}

.btn-secondary:not(:disabled) {
  background: #3a1a1a;
  border-color: #ff4444;
  color: #ff8888;
}

.btn-secondary:not(:disabled):hover {
  background: #4a1a1a;
}

.btn-success:not(:disabled) {
  background: #1a3a3a;
  border-color: #00ccff;
  color: #00ccff;
}

.btn-danger:not(:disabled) {
  background: #4a1a1a;
  border-color: #ff4444;
  color: #ff6666;
}

.btn-warning:not(:disabled) {
  background: #4a4a1a;
  border-color: #ffcc00;
  color: #ffdd44;
}

.btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  background: #1a1a1a;
}

.video-preview {
  height: 60px;
  width: 80px;
  border: 1px solid #555;
  border-radius: 3px;
  background: #000;
  object-fit: cover;
  flex-shrink: 0;
}

/* ===== DEBUG INFO (Very Compact) ===== */
.debug-info {
  background: #0a0a0a;
  padding: 4px 8px;
  border-top: 1px solid #333;
  font-size: 9px;
  font-family: monospace;
  color: #00ccff;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
  flex-shrink: 0;
  overflow: hidden;
}

.debug-info p {
  margin: 0;
  white-space: nowrap;
}

/* ===== RESPONSIVE: Mobile ===== */
@media (max-width: 768px) {
  .header {
    min-height: 45px;
    padding: 6px 8px;
  }

  .header h1 {
    font-size: 14px;
  }

  .main-content {
    flex-direction: column;
    gap: 6px;
  }

  .minimap-section {
    width: 100%;
    min-width: auto;
    max-height: 150px;
  }

  .minimap {
    min-height: 100px;
  }

  .controls-panel {
    max-height: 85px;
    padding: 6px;
  }

  .btn {
    padding: 4px 8px;
    font-size: 9px;
  }

  .video-preview {
    height: 50px;
    width: 70px;
  }

  .debug-info {
    font-size: 8px;
    padding: 3px 6px;
    gap: 8px;
  }
}

/* ===== RESPONSIVE: Very Small ===== */
@media (max-width: 480px) {
  .header {
    min-height: 40px;
    padding: 4px 6px;
  }

  .header h1 {
    font-size: 13px;
  }

  .info-bar {
    font-size: 8px;
    gap: 8px;
  }

  .main-content {
    gap: 4px;
    padding: 4px;
  }

  .minimap-section {
    width: 100%;
    min-width: auto;
    max-height: 120px;
    padding: 6px;
  }

  .minimap {
    min-height: 80px;
  }

  .controls-panel {
    max-height: 75px;
    padding: 4px;
    gap: 4px;
  }

  .control-group {
    gap: 2px;
  }

  .btn {
    padding: 3px 6px;
    font-size: 8px;
  }

  .video-preview {
    height: 45px;
    width: 60px;
  }

  .debug-info {
    font-size: 7px;
    padding: 2px 4px;
    gap: 6px;
  }
}
</style>
