<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'
import * as cocoSsd from '@tensorflow-models/coco-ssd'

const canvasContainer = ref<HTMLDivElement>()
const videoElement = ref<HTMLVideoElement>()
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let animationId: number
let stream: MediaStream | null = null
let isScanning = ref(false)
let scanPoints: THREE.Points | null = null
let scanInterval: number | null = null
let cocoModel: cocoSsd.ObjectDetection | null = null

onMounted(async () => {
  if (!canvasContainer.value) return

  // Charger le modèle COCO-SSD
  try {
    cocoModel = await cocoSsd.load()
    console.log('Modèle COCO-SSD chargé')
  } catch (error) {
    console.error('Erreur de chargement du modèle:', error)
  }

  // Initialiser la scène
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x1a1a2e)

  // Caméra
  const width = canvasContainer.value.clientWidth
  const height = canvasContainer.value.clientHeight
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
  camera.position.set(5, 4, 5)
  camera.lookAt(0, 0, 0)

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(width, height)
  canvasContainer.value.appendChild(renderer.domElement)

  // Lumière
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
  scene.add(ambientLight)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
  directionalLight.position.set(10, 10, 10)
  scene.add(directionalLight)

  // Axes (repère XYZ)
  const axesHelper = new THREE.AxesHelper(3)
  scene.add(axesHelper)

  // Créer les axes avec dégradé
  createColoredAxes()

  // Représentation de la pièce (boîte)
  const roomGeometry = new THREE.BoxGeometry(10, 3, 10)
  const roomMaterial = new THREE.MeshStandardMaterial({
    color: 0x4a4a6a,
    wireframe: false,
    metalness: 0.2,
    roughness: 0.8
  })
  const room = new THREE.Mesh(roomGeometry, roomMaterial)
  room.position.y = -1.5
  scene.add(room)

  // Arêtes de la pièce (wireframe)
  const edges = new THREE.EdgesGeometry(roomGeometry)
  const wireframe = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0x00ff00, linewidth: 2 }))
  wireframe.position.y = -1.5
  scene.add(wireframe)

  // Sphère représentant votre position
  const userSphereGeometry = new THREE.SphereGeometry(0.3, 32, 32)
  const userMaterial = new THREE.MeshStandardMaterial({ color: 0xff6600 })
  const userSphere = new THREE.Mesh(userSphereGeometry, userMaterial)
  userSphere.position.set(0, 0, 0)
  scene.add(userSphere)

  // Label de position
  createPositionLabel()

  // Signal de rayons depuis la position utilisateur
  createRaysFromUser()

  // Grille au sol
  const gridHelper = new THREE.GridHelper(10, 10, 0x444444, 0x222222)
  gridHelper.position.y = -1.8
  scene.add(gridHelper)

  // Animation
  const animate = () => {
    animationId = requestAnimationFrame(animate)
    
    // Rotation douce de la scène
    // room.rotation.y += 0.0005

    renderer.render(scene, camera)
  }
  animate()

  // Gestion du redimensionnement
  window.addEventListener('resize', () => {
    if (!canvasContainer.value) return
    const newWidth = canvasContainer.value.clientWidth
    const newHeight = canvasContainer.value.clientHeight
    camera.aspect = newWidth / newHeight
    camera.updateProjectionMatrix()
    renderer.setSize(newWidth, newHeight)
  })
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  stopCamera()
})

async function startCamera() {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ 
      video: { 
        facingMode: 'environment', // Caméra arrière
        width: { ideal: 640 },
        height: { ideal: 480 }
      } 
    })
    if (videoElement.value) {
      videoElement.value.srcObject = stream
    }
  } catch (error) {
    console.error('Erreur d\'accès à la caméra:', error)
    // Essayer la caméra avant si la caméra arrière échoue
    try {
      stream = await navigator.mediaDevices.getUserMedia({ video: true })
      if (videoElement.value) {
        videoElement.value.srcObject = stream
      }
    } catch (fallbackError) {
      console.error('Erreur de fallback caméra:', fallbackError)
    }
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

function startScan() {
  if (!stream || !videoElement.value || !cocoModel) return
  
  isScanning.value = true
  
  // Scanner toutes les 2 secondes
  scanInterval = window.setInterval(async () => {
    if (!videoElement.value || !cocoModel) return
    
    try {
      const predictions = await cocoModel.detect(videoElement.value)
      addScanPointsFromDetections(predictions)
    } catch (error) {
      console.error('Erreur de détection:', error)
    }
  }, 2000)
}

function stopScan() {
  isScanning.value = false
  if (scanInterval) {
    clearInterval(scanInterval)
    scanInterval = null
  }
}

function addScanPointsFromDetections(predictions: cocoSsd.DetectedObject[]) {
  if (!scanPoints) {
    // Créer le nuage de points initial
    const pointsGeometry = new THREE.BufferGeometry()
    const positions: number[] = []
    const colors: number[] = []
    pointsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    pointsGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
    
    const pointsMaterial = new THREE.PointsMaterial({ 
      size: 0.1, 
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    })
    scanPoints = new THREE.Points(pointsGeometry, pointsMaterial)
    scene.add(scanPoints)
  }

  const positions = scanPoints.geometry.attributes.position.array as Float32Array
  const colors = scanPoints.geometry.attributes.color.array as Float32Array
  let currentCount = positions.length / 3

  predictions.forEach(prediction => {
    // Convertir les coordonnées 2D en 3D approximatives
    const x = (prediction.bbox[0] / 640 - 0.5) * 10 // Normaliser et scaler
    const y = (prediction.bbox[1] / 480 - 0.5) * -6 + 1 // Inverser Y et ajuster hauteur
    const z = -5 + Math.random() * 10 // Profondeur aléatoire
    
    // Ajouter le point
    positions[currentCount * 3] = x
    positions[currentCount * 3 + 1] = y
    positions[currentCount * 3 + 2] = z
    
    // Couleur basée sur la classe d'objet
    const color = getColorForClass(prediction.class)
    colors[currentCount * 3] = color.r
    colors[currentCount * 3 + 1] = color.g
    colors[currentCount * 3 + 2] = color.b
    
    currentCount++
  })

  // Mettre à jour la géométrie
  scanPoints.geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions.slice(0, currentCount * 3), 3))
  scanPoints.geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors.slice(0, currentCount * 3), 3))
  scanPoints.geometry.attributes.position.needsUpdate = true
  scanPoints.geometry.attributes.color.needsUpdate = true
}

function getColorForClass(className: string): {r: number, g: number, b: number} {
  const colors: { [key: string]: {r: number, g: number, b: number} } = {
    'person': {r: 1, g: 0, b: 0}, // Rouge pour personnes
    'chair': {r: 0, g: 1, b: 0}, // Vert pour chaises
    'table': {r: 0, g: 0, b: 1}, // Bleu pour tables
    'tv': {r: 1, g: 1, b: 0}, // Jaune pour TV
    'laptop': {r: 1, g: 0, b: 1}, // Magenta pour ordinateurs
    'book': {r: 0, g: 1, b: 1}, // Cyan pour livres
    'bottle': {r: 0.5, g: 0.5, b: 0.5}, // Gris pour bouteilles
  }
  return colors[className] || {r: Math.random(), g: Math.random(), b: Math.random()}
}

function createColoredAxes() {
  // Axe X (rouge)
  const xGeometry = new THREE.BufferGeometry()
  xGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array([0, 0, 0, 3, 0, 0]), 3))
  const xMaterial = new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 3 })
  const xLine = new THREE.Line(xGeometry, xMaterial)
  scene.add(xLine)

  // Axe Y (vert)
  const yGeometry = new THREE.BufferGeometry()
  yGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array([0, 0, 0, 0, 3, 0]), 3))
  const yMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00, linewidth: 3 })
  const yLine = new THREE.Line(yGeometry, yMaterial)
  scene.add(yLine)

  // Axe Z (bleu)
  const zGeometry = new THREE.BufferGeometry()
  zGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array([0, 0, 0, 0, 0, 3]), 3))
  const zMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff, linewidth: 3 })
  const zLine = new THREE.Line(zGeometry, zMaterial)
  scene.add(zLine)
}

function createPositionLabel() {
  // Ajouter des étiquettes pour les axes
  const labels = [
    { pos: [3.5, 0, 0], text: 'X', color: 0xff0000 },
    { pos: [0, 3.5, 0], text: 'Y', color: 0x00ff00 },
    { pos: [0, 0, 3.5], text: 'Z', color: 0x0000ff }
  ]

  labels.forEach(label => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')!
    canvas.width = 64
    canvas.height = 64
    
    ctx.fillStyle = `#${label.color.toString(16).padStart(6, '0')}`
    ctx.font = 'bold 40px Arial'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(label.text, 32, 32)

    const texture = new THREE.CanvasTexture(canvas)
    const spriteMaterial = new THREE.SpriteMaterial({ map: texture })
    const sprite = new THREE.Sprite(spriteMaterial)
    sprite.scale.set(0.5, 0.5, 0.5)
    sprite.position.set(label.pos[0], label.pos[1], label.pos[2])
    scene.add(sprite)
  })
}

function createRaysFromUser() {
  // Rayons partant de la position utilisateur vers les axes
  const rayMaterial = new THREE.LineBasicMaterial({ color: 0xffff00, linewidth: 1, transparent: true, opacity: 0.3 })
  
  // Rayon vers X
  const rayXGeometry = new THREE.BufferGeometry()
  rayXGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array([0, 0, 0, 5, 0, 0]), 3))
  const rayX = new THREE.Line(rayXGeometry, rayMaterial)
  scene.add(rayX)

  // Rayon vers Y
  const rayYGeometry = new THREE.BufferGeometry()
  rayYGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array([0, 0, 0, 0, 5, 0]), 3))
  const rayY = new THREE.Line(rayYGeometry, rayMaterial)
  scene.add(rayY)

  // Rayon vers Z
  const rayZGeometry = new THREE.BufferGeometry()
  rayZGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array([0, 0, 0, 0, 0, 5]), 3))
  const rayZ = new THREE.Line(rayZGeometry, rayMaterial)
  scene.add(rayZ)
}
</script>

<template>
  <div class="room-viewer-container">
    <div class="camera-section">
      <video ref="videoElement" autoplay playsinline muted class="camera-video"></video>
      <div class="camera-controls">
        <button @click="startCamera" class="btn">Ouvrir Caméra</button>
        <button @click="stopCamera" class="btn">Fermer Caméra</button>
        <button @click="startScan" :disabled="!stream || !cocoModel" class="btn scan-btn">Démarrer Scan</button>
        <button @click="stopScan" :disabled="!isScanning" class="btn stop-btn">Arrêter Scan</button>
      </div>
    </div>
    <div ref="canvasContainer" class="canvas-container"></div>
    <div class="info-panel">
      <h2>Repère 3D de la pièce</h2>
      <div class="axis-info">
        <p><span class="axis-x">X</span> (Rouge) - Largeur</p>
        <p><span class="axis-y">Y</span> (Vert) - Hauteur</p>
        <p><span class="axis-z">Z</span> (Bleu) - Profondeur</p>
      </div>
      <p class="user-position"><span class="user-marker">●</span> Position utilisateur (orangé)</p>
      <p v-if="!cocoModel" class="loading-model">🔄 Chargement du modèle de détection...</p>
      <p v-if="isScanning" class="scanning-status">🔄 Scanning en cours... Objets détectés s'ajoutent au nuage de points</p>
    </div>
  </div>
</template>

<style scoped>
.room-viewer-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #0a0a0a;
}

.camera-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background: rgba(0, 0, 0, 0.8);
  border-bottom: 1px solid #444;
}

.camera-video {
  width: 320px;
  height: 240px;
  border: 2px solid #444;
  border-radius: 8px;
  background: #000;
}

.camera-controls {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.btn {
  padding: 8px 16px;
  background: #333;
  color: #fff;
  border: 1px solid #555;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;
}

.btn:hover:not(:disabled) {
  background: #555;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.scan-btn {
  background: #006600;
  border-color: #00aa00;
}

.scan-btn:hover:not(:disabled) {
  background: #008800;
}

.stop-btn {
  background: #660000;
  border-color: #aa0000;
}

.stop-btn:hover:not(:disabled) {
  background: #880000;
}

.canvas-container {
  flex: 1;
  width: 100%;
  height: 100%;
}

.info-panel {
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  font-family: monospace;
  z-index: 100;
  border: 2px solid #444;
}

.info-panel h2 {
  margin: 0 0 15px 0;
  color: #00ff00;
  font-size: 18px;
}

.axis-info {
  margin: 10px 0;
  line-height: 1.8;
}

.axis-info p {
  margin: 5px 0;
  font-size: 14px;
}

.axis-x, .axis-y, .axis-z, .user-marker {
  font-weight: bold;
  margin-right: 8px;
}

.axis-x {
  color: #ff0000;
}

.axis-y {
  color: #00ff00;
}

.axis-z {
  color: #0000ff;
}

.user-marker {
  color: #ff6600;
}

.user-position {
  margin-top: 10px;
  font-size: 14px;
  color: #ff6600;
}

.scanning-status {
  margin-top: 10px;
  font-size: 16px;
  color: #ffff00;
  font-weight: bold;
}

.loading-model {
  margin-top: 10px;
  font-size: 14px;
  color: #ffaa00;
}
</style>
