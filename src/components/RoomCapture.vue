<template>
  <div class="room-capture">
    <div class="capture-header">
      <h1>📐 Scan 3D de la pièce</h1>
      <p>Faites un tour à 360° de votre pièce avec la caméra. Le système collecte des points dans l'espace pour estimer la largeur, la profondeur, la hauteur et la forme.</p>
    </div>

    <div class="capture-actions">
      <button @click="startScan" class="start-scan-btn" :disabled="isScanning || isLoading || isARSupported === false">
        {{ isScanning ? 'Scanning...' : 'Démarrer le scan 360°' }}
      </button>
      <button @click="stopScan" class="stop-scan-btn" :disabled="!isScanning">Arrêter le scan</button>
      <button @click="backToRooms" class="back-btn">Retour aux pièces</button>
    </div>

    <div class="capture-status">
      <div class="status-card">
        <h2>État du scan</h2>
        <p>{{ scanMessage }}</p>
        <div class="metrics-grid">
          <div class="metric-item">
            <span>Points capturés</span>
            <strong>{{ positions.length }}</strong>
          </div>
          <div class="metric-item">
            <span>Largeur</span>
            <strong>{{ roomMetrics.width }}</strong>
          </div>
          <div class="metric-item">
            <span>Profondeur</span>
            <strong>{{ roomMetrics.depth }}</strong>
          </div>
          <div class="metric-item">
            <span>Hauteur</span>
            <strong>{{ roomMetrics.height }}</strong>
          </div>
          <div class="metric-item">
            <span>Volume estimé</span>
            <strong>{{ roomMetrics.volume }}</strong>
          </div>
          <div class="metric-item">
            <span>Forme</span>
            <strong>{{ roomMetrics.shape }}</strong>
          </div>
        </div>
      </div>

      <div class="preview-card">
        <h2>Maquette 3D</h2>
        <div class="preview-info">
          <p>La maquette est une approximation calculée à partir des points capturés.</p>
          <ul>
            <li v-for="(coord, index) in topCoordinates" :key="index">{{ coord }}</li>
          </ul>
        </div>
        <div ref="previewContainer" class="preview-canvas" aria-label="Prévisualisation 3D"></div>
      </div>
    </div>

    <div v-if="isScanning" class="scan-overlay">
      <div class="scan-info">
        <div class="scan-counter">
          <div class="counter-number">{{ positions.length }}</div>
          <div class="counter-label">Points capturés</div>
        </div>
        <div class="scan-instructions">
          <p>🔄 Tournez lentement autour de la pièce</p>
          <p>📍 Pointez vers les murs, sols et plafonds</p>
          <p>⚡ Les points s'ajoutent automatiquement</p>
        </div>
        <div class="scan-progress">
          <div class="progress-bar">
            <div class="progress-fill" :style="{ width: scanProgress + '%' }"></div>
          </div>
          <p class="progress-text">{{ scanProgressText }}</p>
        </div>
      </div>
    </div>

    <div v-if="isScanning && lastPointCaptured" class="point-captured-feedback">
      <span class="point-indicator">✨ Point capturé!</span>
    </div>

    <AlertComponent
      :message="alertMessage"
      :isVisible="isAlertVisible"
      @close="closeAlert"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onBeforeUnmount } from 'vue'
import * as THREE from 'three'
import AlertComponent from './AlertComponent.vue'

const props = defineProps<{
  roomId: string
}>()

const emit = defineEmits<{
  back: []
}>()

const container = ref<HTMLDivElement>()
const previewContainer = ref<HTMLDivElement>()

const isScanning = ref(false)
const isLoading = ref(false)
const isARSupported = ref<boolean | null>(null)
const scanMessage = ref('Appuyez sur « Démarrer le scan » et faites un tour à 360° de la pièce avec votre appareil.')
const positions = ref<THREE.Vector3[]>([])
const isAlertVisible = ref(false)
const alertMessage = ref('')
const lastPointCaptured = ref(false)
const scanProgress = ref(0)
const scanProgressText = ref('');

let renderer: THREE.WebGLRenderer | null = null
let scene: THREE.Scene | null = null
let camera: THREE.PerspectiveCamera | null = null
let reticle: THREE.Mesh | null = null
let hitTestSource: any = null
let localReferenceSpace: any = null
let xrSession: any = null
let previewRenderer: THREE.WebGLRenderer | null = null
let previewScene: THREE.Scene | null = null
let previewCamera: THREE.PerspectiveCamera | null = null
let boundingBoxMesh: THREE.LineSegments | null = null
let pointsGroup: THREE.Group | null = null
let previewAnimationId: number | null = null
const scanDistanceThreshold = 0.2

const roomMetrics = computed(() => {
  if (positions.value.length === 0) {
    return {
      width: '0.00 m',
      depth: '0.00 m',
      height: '0.00 m',
      volume: '0.00 m³',
      shape: 'Indéterminée'
    }
  }

  const box = new THREE.Box3().setFromPoints(positions.value)
  const size = box.getSize(new THREE.Vector3())
  const volume = size.x * size.y * size.z
  const shape = positions.value.length >= 8 ? 'Approx. rectangulaire' : 'Irrégulière'

  return {
    width: `${size.x.toFixed(2)} m`,
    depth: `${size.z.toFixed(2)} m`,
    height: `${size.y.toFixed(2)} m`,
    volume: `${volume.toFixed(2)} m³`,
    shape
  }
})

const topCoordinates = computed(() => {
  return positions.value
    .slice(-6)
    .map((pos, index) => `Point ${positions.value.length - 5 + index}: x=${pos.x.toFixed(2)} m, y=${pos.y.toFixed(2)} m, z=${pos.z.toFixed(2)} m`)
})

const showAlert = (message: string) => {
  alertMessage.value = message
  isAlertVisible.value = true
}

const closeAlert = () => {
  isAlertVisible.value = false
  alertMessage.value = ''
}

const backToRooms = () => {
  cleanupScan()
  emit('back')
}

const checkARSupport = async () => {
  if ('xr' in navigator) {
    isARSupported.value = await (navigator as any).xr.isSessionSupported('immersive-ar')
  } else {
    isARSupported.value = false
  }
}

const initPreview = () => {
  if (!previewContainer.value) return

  previewScene = new THREE.Scene()
  previewCamera = new THREE.PerspectiveCamera(50, previewContainer.value.clientWidth / previewContainer.value.clientHeight, 0.1, 100)
  previewCamera.position.set(3, 2.5, 4)
  previewCamera.lookAt(0, 1, 0)

  const ambient = new THREE.AmbientLight(0xffffff, 0.7)
  const directional = new THREE.DirectionalLight(0xffffff, 0.8)
  directional.position.set(5, 5, 5)
  previewScene.add(ambient, directional)

  previewRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  previewRenderer.setSize(previewContainer.value.clientWidth, previewContainer.value.clientHeight)
  previewRenderer.setPixelRatio(window.devicePixelRatio || 1)
  previewContainer.value.innerHTML = ''
  previewContainer.value.appendChild(previewRenderer.domElement)

  pointsGroup = new THREE.Group()
  previewScene.add(pointsGroup)

  previewAnimationId = window.requestAnimationFrame(renderPreview)
}

const renderPreview = () => {
  if (previewRenderer && previewScene && previewCamera) {
    previewRenderer.render(previewScene, previewCamera)
  }
  previewAnimationId = window.requestAnimationFrame(renderPreview)
}

const updatePreview = () => {
  if (!previewScene || !pointsGroup) return

  // Mettre à jour les points capturés
  pointsGroup.clear()
  const pointGeometry = new THREE.SphereGeometry(0.03, 10, 10)
  const pointMaterial = new THREE.MeshStandardMaterial({ color: 0xffc107 })

  positions.value.forEach((position) => {
    const sphere = new THREE.Mesh(pointGeometry, pointMaterial)
    sphere.position.copy(position)
    pointsGroup?.add(sphere)
  })

  // Mettre à jour la boîte englobante
  if (boundingBoxMesh) {
    previewScene.remove(boundingBoxMesh)
    boundingBoxMesh.geometry.dispose()
    ;(boundingBoxMesh.material as THREE.Material).dispose()
    boundingBoxMesh = null
  }

  if (positions.value.length > 1) {
    const box = new THREE.Box3().setFromPoints(positions.value)
    const size = box.getSize(new THREE.Vector3())
    const center = box.getCenter(new THREE.Vector3())

    const boxGeometry = new THREE.BoxGeometry(size.x || 0.01, size.y || 0.01, size.z || 0.01)
    const edges = new THREE.EdgesGeometry(boxGeometry)
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x22aaff })
    boundingBoxMesh = new THREE.LineSegments(edges, lineMaterial)
    boundingBoxMesh.position.copy(center)
    previewScene.add(boundingBoxMesh)
  }
}

const addScanPoint = (position: THREE.Vector3) => {
  const tooClose = positions.value.some((point) => point.distanceTo(position) < scanDistanceThreshold)
  if (!tooClose) {
    positions.value.push(position.clone())

    // Feedback visuel pour le point capturé
    lastPointCaptured.value = true
    setTimeout(() => {
      lastPointCaptured.value = false
    }, 1000)

    updateScanProgress()
    scanMessage.value = `Points capturés : ${positions.value.length}. ${scanProgressText.value}`
    updatePreview()
  }
}

const updateScanProgress = () => {
  const pointCount = positions.value.length

  // Progression basée sur le nombre de points (minimum 20 points pour un scan décent)
  const optimalPoints = 50
  let progress = Math.min((pointCount / optimalPoints) * 100, 100)

  // Bonus pour la couverture spatiale (si les points sont bien répartis)
  if (pointCount >= 8) {
    const box = new THREE.Box3().setFromPoints(positions.value)
    const size = box.getSize(new THREE.Vector3())
    const volume = size.x * size.y * size.z

    // Plus le volume est grand, meilleure est la couverture
    if (volume > 1) { // Volume minimum pour une pièce
      const coverageBonus = Math.min(volume * 10, 20) // Bonus max de 20%
      progress = Math.min(progress + coverageBonus, 100)
    }
  }

  scanProgress.value = Math.round(progress)

  if (pointCount < 5) {
    scanProgressText.value = 'Continuez à scanner - besoin de plus de points'
  } else if (pointCount < 15) {
    scanProgressText.value = 'Bon début ! Continuez à tourner'
  } else if (pointCount < 30) {
    scanProgressText.value = 'Bien ! Couvrez tous les angles'
  } else if (pointCount < 50) {
    scanProgressText.value = 'Excellent ! Presque terminé'
  } else {
    scanProgressText.value = 'Scan complet ! Vous pouvez arrêter'
  }
}

const createReticle = () => {
  const geometry = new THREE.RingGeometry(0.15, 0.22, 32).rotateX(-Math.PI / 2)
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff })
  const mesh = new THREE.Mesh(geometry, material)
  mesh.matrixAutoUpdate = false
  mesh.visible = false
  return mesh
}

const startScan = async () => {
  if (isScanning.value || isLoading.value) return
  isLoading.value = true
  await checkARSupport()

  if (isARSupported.value === false) {
    isLoading.value = false
    showAlert('AR non disponible sur cet appareil.')
    return
  }

  try {
    xrSession = await (navigator as any).xr.requestSession('immersive-ar', {
      requiredFeatures: ['hit-test'],
      optionalFeatures: ['dom-overlay'],
      domOverlay: { root: document.body }
    })

    if (!container.value) {
      throw new Error('Conteneur AR manquant')
    }

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio || 1)
    renderer.xr.enabled = true
    renderer.xr.setSession(xrSession)
    container.value.appendChild(renderer.domElement)

    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 20)
    scene.add(camera)

    const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1)
    scene.add(light)

    reticle = createReticle()
    scene.add(reticle)

    if (!previewScene) {
      initPreview()
    }

    xrSession.addEventListener('end', stopScan)

    const viewerSpace = await xrSession.requestReferenceSpace('viewer')
    const hitSource = await xrSession.requestHitTestSource({ space: viewerSpace })
    hitTestSource = hitSource
    localReferenceSpace = await xrSession.requestReferenceSpace('local')

    renderer.setAnimationLoop(renderFrame)
    isScanning.value = true
    scanMessage.value = 'Scan en cours. Faites un tour complet de la pièce en observant les murs et les sols.'
    updateScanProgress()
  } catch (error) {
    console.error(error)
    showAlert('Impossible de démarrer le scan. Vérifiez les permissions AR et réessayez.')
  } finally {
    isLoading.value = false
  }
}

const stopScan = () => {
  if (xrSession && typeof xrSession.end === 'function') {
    xrSession.end()
  }
  cleanupScan()
  scanMessage.value = 'Scan arrêté. Vous pouvez relancer le scan pour capturer plus de points.'
  scanProgress.value = 0
  scanProgressText.value = ''
}

const renderFrame = (_timestamp: number, frame: any) => {
  if (!renderer || !scene || !camera) return

  if (frame && hitTestSource && localReferenceSpace) {
    const hitResults = frame.getHitTestResults(hitTestSource)
    if (hitResults.length > 0) {
      const hit = hitResults[0]
      const pose = hit.getPose(localReferenceSpace)
      if (pose && reticle) {
        const matrix = new THREE.Matrix4().fromArray(pose.transform.matrix)
        reticle.visible = true
        reticle.matrix.copy(matrix)

        const position = new THREE.Vector3().setFromMatrixPosition(matrix)
        addScanPoint(position)
      }
    } else if (reticle) {
      reticle.visible = false
    }
  }

  renderer.render(scene, camera)
}

const cleanupScan = () => {
  isScanning.value = false
  if (renderer) {
    renderer.setAnimationLoop(null)
  }

  if (hitTestSource?.cancel) {
    try {
      hitTestSource.cancel()
    } catch {
      // ignore
    }
  }
  hitTestSource = null
  localReferenceSpace = null

  if (xrSession && typeof xrSession.end === 'function') {
    xrSession.removeEventListener('end', stopScan)
    xrSession = null
  }

  if (container.value && renderer) {
    if (container.value.contains(renderer.domElement)) {
      container.value.removeChild(renderer.domElement)
    }
    renderer.dispose()
  }
  renderer = null
  scene = null
  camera = null
  reticle = null
}

onBeforeUnmount(() => {
  if (previewAnimationId) {
    window.cancelAnimationFrame(previewAnimationId)
  }
  if (previewRenderer) {
    previewRenderer.dispose()
  }
  cleanupScan()
})
</script>

<style scoped>
.room-capture {
  padding: 24px;
  min-height: 100vh;
  background: #f4f6fb;
  color: #222;
  box-sizing: border-box;
}

.capture-header {
  max-width: 920px;
  margin: 0 auto 24px;
  text-align: center;
}

.capture-header h1 {
  margin-bottom: 12px;
  font-size: 2.2rem;
}

.capture-header p {
  margin: 0 auto;
  max-width: 760px;
  color: #4b5563;
  line-height: 1.6;
}

.capture-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin: 20px auto;
}

.start-scan-btn,
.stop-scan-btn,
.back-btn {
  border: none;
  border-radius: 12px;
  padding: 14px 20px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease;
}

.start-scan-btn {
  background: #0b76ef;
  color: white;
}

.stop-scan-btn {
  background: #ef4a4a;
  color: white;
}

.back-btn {
  background: #5b5f76;
  color: white;
}

.start-scan-btn:disabled,
.stop-scan-btn:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.capture-status {
  display: grid;
  grid-template-columns: 1.1fr 0.95fr;
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.status-card,
.preview-card {
  background: white;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 22px 45px rgba(36, 37, 44, 0.08);
}

.status-card h2,
.preview-card h2 {
  margin-top: 0;
  margin-bottom: 14px;
}

.status-card p,
.preview-card p {
  color: #555e6f;
  line-height: 1.7;
}

.metrics-grid {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.metric-item {
  background: #f8fafc;
  border-radius: 16px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.metric-item span {
  color: #6b7280;
}

.metric-item strong {
  font-size: 1.15rem;
  color: #111827;
}

.preview-info {
  margin-bottom: 18px;
}

.preview-info ul {
  margin: 12px 0 0;
  padding-left: 20px;
  color: #334155;
}

.preview-info li {
  margin-bottom: 8px;
}

.preview-canvas {
  width: 100%;
  min-height: 340px;
  border-radius: 20px;
  overflow: hidden;
  background: #111827;
}

.loading-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(15, 23, 42, 0.75);
  z-index: 1000;
}

.loading-box {
  background: #ffffff;
  padding: 24px 28px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  gap: 18px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
}

.spinner {
  width: 40px;
  height: 40px;
  border: 5px solid rgba(15, 23, 42, 0.15);
  border-top-color: #0b76ef;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.unsupported-message {
  margin: 24px auto;
  max-width: 840px;
  padding: 18px 22px;
  border-radius: 18px;
  background: #fff4f4;
  color: #7f1d1d;
  border: 1px solid #f8d7da;
}

.ar-overlay {
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
}

.scan-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 20px;
  pointer-events: none;
}

.scan-info {
  max-width: 400px;
  margin: 0 auto;
}

.scan-counter {
  text-align: center;
  margin-bottom: 20px;
}

.counter-number {
  font-size: 3rem;
  font-weight: bold;
  color: #4ade80;
  margin-bottom: 5px;
}

.counter-label {
  font-size: 1.1rem;
  color: #e5e7eb;
}

.scan-instructions {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 20px;
}

.scan-instructions p {
  margin: 5px 0;
  font-size: 0.9rem;
  line-height: 1.4;
}

.scan-progress {
  text-align: center;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #4ade80, #22d3ee);
  border-radius: 4px;
  transition: width 0.3s ease;
}

.progress-text {
  font-size: 0.9rem;
  color: #e5e7eb;
  margin: 0;
}

.point-captured-feedback {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  pointer-events: none;
  animation: pointCapture 1s ease-out;
}

.point-indicator {
  background: rgba(74, 222, 128, 0.9);
  color: white;
  padding: 12px 20px;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

@keyframes pointCapture {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.8);
  }
  20% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
  }
}

@media (max-width: 960px) {
  .capture-status {
    grid-template-columns: 1fr;
  }

  .capture-actions {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
