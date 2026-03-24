<template>
  <div id="ar-container" ref="container"></div>
  <button class="btnStart" @click="startAR" v-if="!isARStarted">Démarrer AR</button>
  <p v-if="isARSupported === false">Votre navigateur ne supporte pas WebXR AR.</p>
  <!-- Indicateurs d'état -->
  <div class="status-indicators">
    <div class="status-item" :class="{ ready: isARSupported === true, error: isARSupported === false }">
      <span class="status-dot"></span>
      <span>AR: {{ isARSupported === true ? 'Prêt' : isARSupported === false ? 'Non supporté' : 'Vérification...' }}</span>
    </div>
    <div class="status-item" :class="{ ready: isAIModelLoaded, loading: isAILoading }">
      <span class="status-dot"></span>
      <span>IA: {{ isAIModelLoaded ? 'Prête' : isAILoading ? 'Chargement...' : 'Non chargée' }}</span>
    </div>
  </div>
  
  <div v-if="isInputVisible" class="tag-input-overlay">
    <div class="tag-input-box">
      <label>
        <div class="tag-input-div">
          Nom :
          <input v-model="tagText" @keydown.enter.prevent="confirmTagText" placeholder="Entrez le nom..." autofocus />
        </div>
      </label>
      <!-- <div class="tag-input-actions">
        <button @click="confirmTagText">Valider</button>
        <button @click="cancelTagText">Annuler</button>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as THREE from 'three'
import * as cocoSsd from '@tensorflow-models/coco-ssd'

const container = ref<HTMLDivElement>()
const isARStarted = ref(false)
const isARSupported = ref<boolean | null>(null)
const isInputVisible = ref(false)
const tagText = ref('')
const isAIModelLoaded = ref(false)
const isAILoading = ref(false)

let scene: THREE.Scene
let camera: THREE.Camera
let renderer: THREE.WebGLRenderer
let controller: THREE.Group
let reticle: THREE.Mesh
let reticleMaterial: THREE.MeshBasicMaterial
let hitTestSource: any = null
let localReferenceSpace: any = null
let tags: THREE.Object3D[] = []
let pendingTagMatrix = new THREE.Matrix4()
let smoothedReticleMatrix = new THREE.Matrix4()
let reticleSmoothingFactor = 0.05 // Réduit pour plus de stabilité
let recentMatrices: THREE.Matrix4[] = []
const maxRecentMatrices = 10 // Augmenté pour plus de stabilité
const minTagDistance = 0.1 // Distance minimale en mètres entre les tags

// Nouvelles variables pour la détection d'objets
let model: cocoSsd.ObjectDetection | null = null
let detectedObjects: cocoSsd.DetectedObject[] = []
let videoElement: HTMLVideoElement | null = null
let canvasElement: HTMLCanvasElement | null = null
let context: CanvasRenderingContext2D | null = null
const detectionThreshold = 0.5 // Seuil de confiance pour la détection

const isPositionTooClose = (newPosition: THREE.Vector3): boolean => {
  for (const tag of tags) {
    const distance = tag.position.distanceTo(newPosition)
    if (distance < minTagDistance) {
      return true
    }
  }
  return false
}

const isScreenOverlap = (position: THREE.Vector3): boolean => {
  const screenPos = new THREE.Vector3()
  screenPos.copy(position).project(camera)
  const screenX = (screenPos.x + 1) * window.innerWidth / 2
  const screenY = (-screenPos.y + 1) * window.innerHeight / 2

  for (const tag of tags) {
    const tagScreenPos = new THREE.Vector3()
    tagScreenPos.copy(tag.position).project(camera)
    const tagScreenX = (tagScreenPos.x + 1) * window.innerWidth / 2
    const tagScreenY = (-tagScreenPos.y + 1) * window.innerHeight / 2

    const distance = Math.sqrt((screenX - tagScreenX) ** 2 + (screenY - tagScreenY) ** 2)
    if (distance < 100) { // Distance minimale en pixels
      return true
    }
  }
  return false
}

onMounted(() => {
  checkARSupport()
  loadAIModel()
})

const checkARSupport = async () => {
  if ('xr' in navigator) {
    const supported = await (navigator as any).xr.isSessionSupported('immersive-ar')
    isARSupported.value = supported
  } else {
    isARSupported.value = false
  }
}

const loadAIModel = async () => {
  if (model) return

  isAILoading.value = true
  isAIModelLoaded.value = false

  try {
    // Charger TensorFlow.js uniquement si nécessaire, puis le modèle COCO-SSD.
    const tfModule = await import('@tensorflow/tfjs')
    await tfModule.ready()
    model = await cocoSsd.load()
    isAIModelLoaded.value = true
    console.log('Modèle COCO-SSD chargé')
  } catch (error) {
    console.error('Erreur lors du chargement du modèle IA :', error)
    isAIModelLoaded.value = false
  } finally {
    isAILoading.value = false
  }
}

const startAR = async () => {
  if (!isARSupported.value) return

  // Si modèle IA non chargé encore, tenter à nouveau
  if (!model && !isAILoading.value) {
    await loadAIModel()
  }

  // Créer un élément vidéo pour capturer l'image de la caméra
  videoElement = document.createElement('video')
  videoElement.width = 640
  videoElement.height = 480
  videoElement.style.display = 'none'
  document.body.appendChild(videoElement)

  // Créer un canvas pour analyser l'image
  canvasElement = document.createElement('canvas')
  canvasElement.width = 640
  canvasElement.height = 480
  canvasElement.style.display = 'none'
  document.body.appendChild(canvasElement)
  context = canvasElement.getContext('2d')

  // Démarrer la caméra
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 640, height: 480 } })
    videoElement.srcObject = stream
    videoElement.play()
  } catch (error) {
    console.error('Erreur d\'accès à la caméra:', error)
  }

  const session = await (navigator as any).xr.requestSession('immersive-ar', {
    requiredFeatures: ['hit-test'],
    optionalFeatures: ['dom-overlay'],
    domOverlay: { root: document.body }
  })

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.xr.enabled = true
  renderer.xr.setReferenceSpaceType('local')
  renderer.xr.setSession(session)

  container.value?.appendChild(renderer.domElement)

  const endARSession = () => {
    renderer.setAnimationLoop(null)
    isARStarted.value = false
    isInputVisible.value = false

    if (hitTestSource?.cancel) hitTestSource.cancel()
    hitTestSource = null
    localReferenceSpace = null

    if (container.value?.contains(renderer.domElement)) {
      container.value.removeChild(renderer.domElement)
    }

    // Nettoyer les éléments vidéo et canvas
    if (videoElement && videoElement.parentNode) {
      videoElement.parentNode.removeChild(videoElement)
      videoElement = null
    }
    if (canvasElement && canvasElement.parentNode) {
      canvasElement.parentNode.removeChild(canvasElement)
      canvasElement = null
    }

    // Optionally clean up WebGL resources
    renderer.dispose()
  }

  session.addEventListener('end', endARSession)

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 20)

  // Créer le reticle pour indiquer où placer le tag
  const reticleGeometry = new THREE.RingGeometry(0.15, 0.2, 32).rotateX(-Math.PI / 2)
  reticleMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff }) // Blanc par défaut
  reticle = new THREE.Mesh(reticleGeometry, reticleMaterial)
  reticle.matrixAutoUpdate = false
  reticle.visible = false
  scene.add(reticle)

  // Initialiser la matrice lissée
  smoothedReticleMatrix.identity()

  // Contrôleur pour les interactions
  controller = renderer.xr.getController(0)
  controller.addEventListener('select', onSelect)
  scene.add(controller)

  // Initialiser hit-test
  session.requestReferenceSpace('viewer').then((referenceSpace: any) => {
    session.requestHitTestSource({ space: referenceSpace }).then((source: any) => {
      hitTestSource = source
    })
  })

  session.requestReferenceSpace('local').then((referenceSpace: any) => {
    localReferenceSpace = referenceSpace
  })

  renderer.setAnimationLoop(render)
  isARStarted.value = true
}

const createTextSprite = (text: string) => {
  const fontSize = 64
  const padding = 20
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')!

  context.font = `${fontSize}px Arial`
  const textMetrics = context.measureText(text)
  const textWidth = Math.ceil(textMetrics.width)
  const textHeight = fontSize

  canvas.width = textWidth + padding * 2
  canvas.height = textHeight + padding * 2

  // Need to set font again after resizing canvas
  context.font = `${fontSize}px Arial`
  context.textAlign = 'center'
  context.textBaseline = 'middle'

  // Background + text
  context.fillStyle = 'rgba(0, 0, 0, 0.6)'
  context.fillRect(0, 0, canvas.width, canvas.height)
  context.fillStyle = 'white'
  context.fillText(text, canvas.width / 2, canvas.height / 2)

  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true

  const material = new THREE.SpriteMaterial({ map: texture, transparent: true })
  const sprite = new THREE.Sprite(material)

  // Scale the sprite so it appears at a reasonable size in AR
  const scaleFactor = 0.001 // Réduit pour éviter les chevauchements visuels
  sprite.scale.set(canvas.width * scaleFactor, canvas.height * scaleFactor, 1)

  return sprite
}

const onSelect = () => {
  if (!reticle.visible) return
  pendingTagMatrix.copy(reticle.matrix)
  tagText.value = ''
  isInputVisible.value = true
}

const confirmTagText = () => {
  const text = tagText.value.trim()
  if (!text) {
    cancelTagText()
    return
  }

  // Vérifier si la position est trop proche d'un tag existant
  const newPosition = new THREE.Vector3()
  newPosition.setFromMatrixPosition(pendingTagMatrix)

  if (isPositionTooClose(newPosition) || isScreenOverlap(newPosition)) {
    alert('Position trop proche d\'un tag existant ou chevauchement visuel. Veuillez choisir un autre emplacement.')
    cancelTagText()
    return
  }

  // Créer un tag texte à la position mémorisée
  const tag = createTextSprite(text)
  tag.position.setFromMatrixPosition(pendingTagMatrix)

  // Si un objet est détecté près de cette position, attacher le tag à cet objet pour plus de stabilité
  if (detectedObjects.length > 0) {
    // Trouver l'objet le plus proche de la position du tag
    const tagScreenPos = new THREE.Vector3()
    tagScreenPos.copy(tag.position).project(camera)
    const tagScreenX = (tagScreenPos.x + 1) * window.innerWidth / 2
    const tagScreenY = (-tagScreenPos.y + 1) * window.innerHeight / 2

    let closestObject: cocoSsd.DetectedObject | null = null
    let minDistance = Infinity

    for (const obj of detectedObjects) {
      const objCenterX = (obj.bbox[0] + obj.bbox[2]) / 2
      const objCenterY = (obj.bbox[1] + obj.bbox[3]) / 2
      // Convertir les coordonnées de l'objet en coordonnées écran (approximatif)
      const objScreenX = objCenterX * (window.innerWidth / canvasElement!.width)
      const objScreenY = objCenterY * (window.innerHeight / canvasElement!.height)
      const distance = Math.sqrt((tagScreenX - objScreenX) ** 2 + (tagScreenY - objScreenY) ** 2)
      if (distance < minDistance) {
        minDistance = distance
        closestObject = obj
      }
    }

    if (closestObject && minDistance < 150) { // Si l'objet est assez proche
      // Attacher le tag à l'objet détecté (logique simplifiée : garder la position mais marquer comme ancré)
      tag.userData.anchoredObject = closestObject
      console.log(`Tag "${text}" ancré à l'objet: ${closestObject.class}`)
    }
  }

  scene.add(tag)
  tags.push(tag)

  isInputVisible.value = false
  tagText.value = ''
}

const cancelTagText = () => {
  isInputVisible.value = false
  tagText.value = ''
}

const render = async (_timestamp: number, frame: any) => {
  // Détection d'objets dans l'image
  if (model && videoElement && context && videoElement.readyState === 4) {
    context.drawImage(videoElement, 0, 0, canvasElement!.width, canvasElement!.height)
    try {
      detectedObjects = await model.detect(canvasElement!)
      // Filtrer les objets avec une confiance suffisante
      detectedObjects = detectedObjects.filter(obj => obj.score > detectionThreshold)
    } catch (error) {
      console.error('Erreur de détection:', error)
    }
  }

  if (frame) {
    if (hitTestSource && localReferenceSpace) {
      const hitTestResults = frame.getHitTestResults(hitTestSource)
      if (hitTestResults.length) {
        const hit = hitTestResults[0]
        const pose = hit.getPose(localReferenceSpace)
        reticle.visible = true

        // Calcul de la position de base depuis le hit-test
        const currentMatrix = new THREE.Matrix4().fromArray(pose.transform.matrix)
        recentMatrices.push(currentMatrix)
        if (recentMatrices.length > maxRecentMatrices) {
          recentMatrices.shift()
        }

        // Calculer la moyenne avec un lissage amélioré
        if (recentMatrices.length > 0) {
          const positions: THREE.Vector3[] = []
          const quaternions: THREE.Quaternion[] = []

          recentMatrices.forEach(matrix => {
            const pos = new THREE.Vector3()
            const quat = new THREE.Quaternion()
            const scl = new THREE.Vector3()
            matrix.decompose(pos, quat, scl)
            positions.push(pos)
            quaternions.push(quat)
          })

          const avgPosition = positions.reduce((sum, pos) => sum.add(pos), new THREE.Vector3()).divideScalar(positions.length)
          let avgQuaternion = quaternions[0].clone()
          for (let i = 1; i < quaternions.length; i++) {
            avgQuaternion.slerp(quaternions[i], 0.5)
          }

          const averageMatrix = new THREE.Matrix4()
          averageMatrix.compose(avgPosition, avgQuaternion, new THREE.Vector3(1, 1, 1))

          const lerpFactor = reticleSmoothingFactor
          for (let i = 0; i < 16; i++) {
            smoothedReticleMatrix.elements[i] = THREE.MathUtils.lerp(smoothedReticleMatrix.elements[i], averageMatrix.elements[i], lerpFactor)
          }

          reticle.matrix.copy(smoothedReticleMatrix)

          // Vérifier les chevauchements en coordonnées écran
          const currentPosition = new THREE.Vector3()
          currentPosition.setFromMatrixPosition(smoothedReticleMatrix)
          if (isPositionTooClose(currentPosition) || isScreenOverlap(currentPosition)) {
            reticleMaterial.color.setHex(0xff0000) // Rouge si chevauchement
          } else {
            reticleMaterial.color.setHex(0xffffff) // Blanc sinon
          }
        }

        // Si l'objet n'est pas détecté en IA, on garde le reticle AR activé (mode fallback)
        if (detectedObjects.length === 0) {
          // mode de base, on n'ajuste pas à l'objet IA
        } else {
          // Si on a des objets, on peut basculer dessus pour plus de stabilité
          const centerX = canvasElement!.width / 2
          const centerY = canvasElement!.height / 2
          let closestObject: cocoSsd.DetectedObject | null = null
          let minDistance = Infinity

          for (const obj of detectedObjects) {
            const objCenterX = (obj.bbox[0] + obj.bbox[2]) / 2
            const objCenterY = (obj.bbox[1] + obj.bbox[3]) / 2
            const distance = Math.sqrt((objCenterX - centerX) ** 2 + (objCenterY - centerY) ** 2)
            if (distance < minDistance) {
              minDistance = distance
              closestObject = obj
            }
          }

          if (closestObject) {
            // On conserve le positionnement via hit-test mais c'est bien rassurant d'enregistrer l'objet
            // (option possible : appliquer une correction ici lorsque l'IA est très fiable)
          }
        }
      } else {
        reticle.visible = false
        recentMatrices = []
      }
    }
  }

  // Mettre à jour les positions des tags ancrés aux objets détectés
  tags.forEach(tag => {
    if (tag.userData.anchoredObject) {
      const anchoredObj = tag.userData.anchoredObject as cocoSsd.DetectedObject
      // Trouver l'objet correspondant dans les détections actuelles
      const currentObj = detectedObjects.find(obj => obj.class === anchoredObj.class && 
        Math.abs(obj.bbox[0] - anchoredObj.bbox[0]) < 50 && // Tolérance pour le suivi
        Math.abs(obj.bbox[1] - anchoredObj.bbox[1]) < 50)

      if (currentObj) {
        // Mettre à jour la position du tag basée sur la nouvelle position de l'objet
        // Conversion simplifiée : ajuster la position 3D basée sur les changements dans l'image
        const deltaX = (currentObj.bbox[0] - anchoredObj.bbox[0]) * 0.001 // Facteur d'échelle
        const deltaY = (currentObj.bbox[1] - anchoredObj.bbox[1]) * 0.001
        tag.position.x += deltaX
        tag.position.y -= deltaY // Inverser Y car l'image est inversée
        // Mettre à jour l'objet ancré
        tag.userData.anchoredObject = currentObj
      }
    }
  })

  renderer.render(scene, camera)
}
</script>

<style scoped>
.btnStart {
  padding: 12px 24px;
  font-size: 18px;
  background-color: #1d4ed8;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin: 20px;
  z-index: 999999;
}

.status-indicators {
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;
}

.status-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
}

.status-item.ready {
  background: rgba(34, 197, 94, 0.9);
}

.status-item.loading {
  background: rgba(251, 191, 36, 0.9);
}

.status-item.error {
  background: rgba(239, 68, 68, 0.9);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #666;
}

.status-item.ready .status-dot {
  background: #22c55e;
}

.status-item.loading .status-dot {
  background: #fbbf24;
  animation: pulse 1.5s infinite;
}

.status-item.error .status-dot {
  background: #ef4444;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

#ar-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}

.tag-input-overlay {
  position: fixed;
  width: 100vw;
  left: 0;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.55);
  z-index: 999999;
}

.tag-input-box {
  background: rgba(255, 255, 255, 0.95);
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.tag-input-box .tag-input-div{
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  gap: 8px;
}

.tag-input-box input {
  display: block;
  width: auto;
  max-width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  outline: none;
  font-size: 16px;
}

.tag-input-actions {
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: flex-end;
}

.tag-input-actions button {
  padding: 10px 14px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
}

.tag-input-actions button:first-of-type {
  background: #1d4ed8;
  color: white;
}

.tag-input-actions button:last-of-type {
  background: rgba(0, 0, 0, 0.12);
}
</style>