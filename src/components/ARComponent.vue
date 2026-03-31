<template>
  <div id="ar-container" ref="container"></div>

  <button class="panel-toggle btn-panel" @click="togglePanel">
    {{ isPanelOpen ? 'Fermer la liste' : 'Liste des objets' }}
  </button>

  <button class="btn-panel add-tag-btn" @click="onAddTagBtnClick" :disabled="!isARStarted">
    Ajouter un objet
  </button>

  <aside :class="['objects-panel', { open: isPanelOpen }]" aria-label="Liste des objets AR">
    <div class="panel-header">
      <h3>Objets AR</h3>
      <button class="close-panel" @click="togglePanel">✕</button>
    </div>
    <div v-if="objectsInScene.length === 0" class="empty-list">Aucun objet placé</div>
    <ul>
      <li v-for="(obj, index) in objectsInScene" :key="index">
        <div class="object-info">
          <strong>{{ obj.name }}</strong>
          <small>({{ obj.position.x.toFixed(2) }}, {{ obj.position.y.toFixed(2) }}, {{ obj.position.z.toFixed(2) }})</small>
        </div>
        <button class="delete-object-btn" @click="removeTag(index)">Supprimer</button>
      </li>
    </ul>
  </aside>

  <p v-if="isARSupported === false">Votre navigateur ne supporte pas WebXR AR.</p>
  <div  v-if="isInputVisible" class="tag-input-overlay">
    <div class="tag-input-box">
      <label>
        <div class="tag-input-div">
          Nom :
          <input v-model="tagText" @keydown.enter.prevent="confirmTagText" placeholder="Entrez le nom..." autofocus />
        </div>
      </label>
    </div>
  </div>

  <AlertComponent
    :message="alertMessage"
    :isVisible="isAlertVisible"
    @close="closeAlert"
  />
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed, onBeforeUnmount } from 'vue'
import * as THREE from 'three'
import AlertComponent from './AlertComponent.vue'

const props = defineProps<{
  roomId: string
}>()

const container = ref<HTMLDivElement>()
const isARStarted = ref(false)
const isARSupported = ref<boolean | null>(null)
const isInputVisible = ref(false)
const tagText = ref('')
const isPanelOpen = ref(false)
const isAlertVisible = ref(false)
const alertMessage = ref('')
const tags = ref<TagObject[]>([])
let isARStarting = false  // Flag pour éviter les appels multiples à startAR()

const objectsInScene = computed(() => tags.value.map(tag => ({
  name: tag.sprite.userData.text || 'Sans nom',
  position: tag.sprite.position.clone()
})))

interface TagObject {
  sprite: THREE.Sprite
  anchor?: any
  baseMatrix?: THREE.Matrix4
}

let scene: THREE.Scene
let camera: THREE.Camera
let renderer: THREE.WebGLRenderer
let controller: THREE.Group
let reticle: THREE.Mesh
let reticleMaterial: THREE.MeshBasicMaterial
let hitTestSource: any = null
let localReferenceSpace: any = null
let lastHitTestResult: any = null
let pendingTagMatrix = new THREE.Matrix4()
let smoothedReticleMatrix = new THREE.Matrix4()
let reticleSmoothingFactor = 0.1 // Facteur de lissage (0.1 = lissage fort, 1.0 = pas de lissage)
let recentMatrices: THREE.Matrix4[] = []
const maxRecentMatrices = 5 // Nombre de matrices récentes à moyenner
const minTagDistance = 0.1 // Distance minimale en mètres entre les tags

const saveTags = () => {
  const tagsData = tags.value.map(tag => ({
    name: tag.sprite.userData.text || '',
    position: {
      x: tag.sprite.position.x,
      y: tag.sprite.position.y,
      z: tag.sprite.position.z
    },
    baseMatrix: tag.baseMatrix?.elements ? Array.from(tag.baseMatrix.elements) : null
  }))
  localStorage.setItem(`arTags_${props.roomId}`, JSON.stringify(tagsData))
}

const loadTags = () => {
  const stored = localStorage.getItem(`arTags_${props.roomId}`)
  if (!stored) return []
  
  try {
    const tagsData = JSON.parse(stored)
    return tagsData
  } catch (e) {
    console.error('Failed to load tags from localStorage:', e)
    return []
  }
}

const isPositionTooClose = (newPosition: THREE.Vector3): boolean => {
  for (const tag of tags.value) {
    const pos = new THREE.Vector3()
    pos.setFromMatrixPosition(tag.sprite.matrixWorld)
    const distance = pos.distanceTo(newPosition)
    if (distance < minTagDistance) {
      return true
    }
  }
  return false
}

const togglePanel = () => {
  isPanelOpen.value = !isPanelOpen.value
}

const removeTag = (index: number) => {
  const tag = tags.value[index]
  if (!tag) return

  // Disposer les ressources WebGL
  if (tag.sprite.material instanceof THREE.SpriteMaterial) {
    if (tag.sprite.material.map) {
      tag.sprite.material.map.dispose()
    }
    tag.sprite.material.dispose()
  }

  // Supprimer sprite de la scène
  scene.remove(tag.sprite)

  // Supprimer ancre si nécessaire
  if (tag.anchor && tag.anchor.delete) {
    try {
      tag.anchor.delete()
    } catch {
      // ignore
    }
  }

  tags.value.splice(index, 1)
  saveTags()
}

const reloadTagsForRoom = (roomId: string) => {
  // S'assurer que la scène existe avant de faire quoi que ce soit
  if (!scene) return
  
  // Supprimer tous les tags actuels de la scène et disposer les ressources
  for (const tag of tags.value) {
    // Disposer les ressources WebGL
    if (tag.sprite.material instanceof THREE.SpriteMaterial) {
      if (tag.sprite.material.map) {
        tag.sprite.material.map.dispose()
      }
      tag.sprite.material.dispose()
    }
    
    // Retirer de la scène
    scene.remove(tag.sprite)
    
    // Nettoyer les ancres si elles existent
    if (tag.anchor && tag.anchor.delete) {
      try {
        tag.anchor.delete()
      } catch {
        // ignore
      }
    }
  }
  
  // Vider le tableau des tags
  tags.value = []
  
  // Charger les tags de la nouvelle pièce
  const savedTagsData = loadTagsForRoom(roomId)
  for (const tagData of savedTagsData) {
    const sprite = createTextSprite(tagData.name)
    if (tagData.position) {
      sprite.position.set(tagData.position.x, tagData.position.y, tagData.position.z)
    }
    const baseMatrix = tagData.baseMatrix ? new THREE.Matrix4().fromArray(tagData.baseMatrix) : new THREE.Matrix4().setPosition(tagData.position?.x || 0, tagData.position?.y || 0, tagData.position?.z || 0)
    scene.add(sprite)
    tags.value.push({ sprite, baseMatrix })
  }
}

const loadTagsForRoom = (roomId: string) => {
  const stored = localStorage.getItem(`arTags_${roomId}`)
  if (!stored) return []
  
  try {
    const tagsData = JSON.parse(stored)
    return tagsData
  } catch (e) {
    console.error('Failed to load tags from localStorage:', e)
    return []
  }
}

onMounted(() => {
  checkARSupport()
})

const checkARSupport = async () => {
  if ('xr' in navigator) {
    const supported = await (navigator as any).xr.isSessionSupported('immersive-ar')
    isARSupported.value = supported
  } else {
    isARSupported.value = false
  }
}

const startAR = async () => {
  if (!isARSupported.value) return
  if (isARStarted.value || isARStarting) return  // Éviter d'appeler startAR() plusieurs fois
  
  isARStarting = true

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
    isARStarting = false
    isInputVisible.value = false

    if (hitTestSource?.cancel) hitTestSource.cancel()
    hitTestSource = null
    localReferenceSpace = null

    if (container.value?.contains(renderer.domElement)) {
      container.value.removeChild(renderer.domElement)
    }

    // Nettoyer les ancres et tags
    for (const tag of tags.value) {
      // Disposer les ressources WebGL
      if (tag.sprite.material instanceof THREE.SpriteMaterial) {
        if (tag.sprite.material.map) {
          tag.sprite.material.map.dispose()
        }
        tag.sprite.material.dispose()
      }
      
      if (tag.anchor && tag.anchor.delete) {
        try {
          tag.anchor.delete()
        } catch {
          // ignore
        }
      }
      scene.remove(tag.sprite)
    }
    tags.value = []

    // Clean up WebGL resources
    renderer.dispose()
  }

  session.addEventListener('end', endARSession)

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 20)

  // Charger les tags sauvegardés
  const savedTagsData = loadTags()
  for (const tagData of savedTagsData) {
    const sprite = createTextSprite(tagData.name)
    if (tagData.position) {
      sprite.position.set(tagData.position.x, tagData.position.y, tagData.position.z)
    }
    const baseMatrix = tagData.baseMatrix ? new THREE.Matrix4().fromArray(tagData.baseMatrix) : new THREE.Matrix4().setPosition(tagData.position?.x || 0, tagData.position?.y || 0, tagData.position?.z || 0)
    scene.add(sprite)
    tags.value.push({ sprite, baseMatrix })
  }

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
  isARStarting = false
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
  sprite.userData.text = text

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

const onAddTagBtnClick = () => {
  if (!isARStarted.value) {
    showAlert('L\'AR n\'est pas encore démarré.')
    return
  }

  if (!reticle || !reticle.visible) {
    showAlert('Aucune surface détectée actuellement. Veuillez attendre que le réticule apparaisse.')
    return
  }

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

  if (isPositionTooClose(newPosition)) {
    // Afficher un message d'erreur ou annuler
    showAlert('Position trop proche d\'un tag existant. Veuillez choisir un autre emplacement.')
    cancelTagText()
    return
  }

  const placeTag = (matrix: THREE.Matrix4, anchor?: any) => {
    const tag = createTextSprite(text)
    tag.position.setFromMatrixPosition(matrix)
    scene.add(tag)
    tags.value.push({ sprite: tag, anchor, baseMatrix: matrix.clone() })
    saveTags()
  }

  const placeWithAnchor = async () => {
    if (lastHitTestResult?.createAnchor) {
      try {
        const anchor = await lastHitTestResult.createAnchor()
        placeTag(pendingTagMatrix, anchor)
        return
      } catch (err) {
        console.warn('WebXR anchor creation failed, fallback on position only', err)
      }
    }
    placeTag(pendingTagMatrix)
  }

  placeWithAnchor().catch(() => placeTag(pendingTagMatrix))

  isInputVisible.value = false
  tagText.value = ''
}

const cancelTagText = () => {
  isInputVisible.value = false
  tagText.value = ''
}

const showAlert = (message: string) => {
  alertMessage.value = message
  isAlertVisible.value = true
}

const closeAlert = () => {
  isAlertVisible.value = false
  alertMessage.value = ''
}

const render = (_timestamp: number, frame: any) => {
  if (frame) {
    if (hitTestSource && localReferenceSpace) {
      const hitTestResults = frame.getHitTestResults(hitTestSource)
      if (hitTestResults.length) {
        const hit = hitTestResults[0]
        lastHitTestResult = hit
        const pose = hit.getPose(localReferenceSpace)

        if (pose) {
          reticle.visible = true

          // Ajouter la nouvelle matrice aux récentes
          const currentMatrix = new THREE.Matrix4().fromArray(pose.transform.matrix)
          recentMatrices.push(currentMatrix)
          if (recentMatrices.length > maxRecentMatrices) {
            recentMatrices.shift() // Garder seulement les dernières
          }

          // Calculer la moyenne des matrices récentes pour plus de stabilité
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

            // Moyenner les positions
            const avgPosition = positions.reduce((sum, pos) => sum.add(pos), new THREE.Vector3()).divideScalar(positions.length)

            // Pour les quaternions, utiliser le premier comme base et slerp vers les autres
            let avgQuaternion = quaternions[0].clone()
            for (let i = 1; i < quaternions.length; i++) {
              avgQuaternion.slerp(quaternions[i], 0.5)
            }

            const averageMatrix = new THREE.Matrix4()
            averageMatrix.compose(avgPosition, avgQuaternion, new THREE.Vector3(1, 1, 1))

            // Appliquer un lissage simple en interpolant vers la nouvelle matrice
            const lerpFactor = reticleSmoothingFactor
            for (let i = 0; i < 16; i++) {
              smoothedReticleMatrix.elements[i] = THREE.MathUtils.lerp(smoothedReticleMatrix.elements[i], averageMatrix.elements[i], lerpFactor)
            }

            reticle.matrix.copy(smoothedReticleMatrix)

            // Vérifier si la position est trop proche d'un tag existant et changer la couleur
            const currentPosition = new THREE.Vector3()
            currentPosition.setFromMatrixPosition(smoothedReticleMatrix)
            if (isPositionTooClose(currentPosition)) {
              reticleMaterial.color.setHex(0xff0000) // Rouge si trop proche
            } else {
              reticleMaterial.color.setHex(0xffffff) // Blanc sinon
            }
          }
        }
      } else {
        reticle.visible = false
        // Réinitialiser les matrices récentes quand pas de hit-test
        recentMatrices = []
      }
    }

    // Mettre à jour la position des tags basés sur les ancres XR (si disponibles)
    for (const tag of tags.value) {
      if (tag.anchor && localReferenceSpace) {
        const anchorSpace = tag.anchor.anchorSpace || tag.anchor
        const anchorPose = frame.getPose(anchorSpace, localReferenceSpace)
        if (anchorPose) {
          const anchorMatrix = new THREE.Matrix4().fromArray(anchorPose.transform.matrix)
          tag.sprite.position.setFromMatrixPosition(anchorMatrix)
        }
      } else if (tag.baseMatrix) {
        tag.sprite.position.setFromMatrixPosition(tag.baseMatrix)
      }
    }
  }

  renderer.render(scene, camera)
}

const cleanupAR = () => {
  // Arrêter la boucle de rendu
  if (renderer) {
    renderer.setAnimationLoop(null)
  }

  // Réinitialiser les ressources XR
  if (hitTestSource?.cancel) {
    try {
      hitTestSource.cancel()
    } catch {
      // ignore
    }
  }
  hitTestSource = null
  localReferenceSpace = null

  // Nettoyer les tags
  for (const tag of tags.value) {
    // Disposer les ressources WebGL
    if (tag.sprite.material instanceof THREE.SpriteMaterial) {
      if (tag.sprite.material.map) {
        tag.sprite.material.map.dispose()
      }
      tag.sprite.material.dispose()
    }
    
    if (tag.anchor && tag.anchor.delete) {
      try {
        tag.anchor.delete()
      } catch {
        // ignore
      }
    }
    if (scene) {
      scene.remove(tag.sprite)
    }
  }
  tags.value = []

  // Nettoyer le renderer et le canvas
  if (renderer && container.value?.contains(renderer.domElement)) {
    container.value.removeChild(renderer.domElement)
  }
  
  if (renderer) {
    renderer.dispose()
  }

  isARStarted.value = false
  isARStarting = false
  isInputVisible.value = false
}

onMounted(async () => {
  await checkARSupport()
  setTimeout(() => {
    startAR()
  }, 500)
})

onBeforeUnmount(() => {
  cleanupAR()
})

// Fonction pour démarrer AR de manière sécurisée
const ensureARStarted = async () => {
  if (isARStarted.value || isARStarting) return
  if (!isARSupported.value) return
  
  try {
    await startAR()
  } catch (err) {
    console.error('Failed to start AR:', err)
    isARStarting = false
  }
}

// Watcher pour recharger les tags quand la pièce change
watch(() => props.roomId, async (newRoomId, oldRoomId) => {
  // Ignorer le premier appel (lors du montage initial)
  if (!oldRoomId) return
  
  if (newRoomId !== oldRoomId) {
    // Si AR est démarré, recharger les tags pour la nouvelle pièce
    if (isARStarted.value) {
      reloadTagsForRoom(newRoomId)
    } else {
      // Si AR n'est pas démarré, le démarrer
      await ensureARStarted()
    }
  }
}, { immediate: false })
</script>

<style scoped>
.objects-panel {
  position: fixed;
  top: 0;
  right: -340px;
  width: 320px;
  height: 100vh;
  background: rgba(255, 255, 255, 0.95);
  border-left: 1px solid rgba(0,0,0,0.15);
  box-shadow: -10px 0 30px rgba(0,0,0,0.25);
  z-index: 999999;
  padding: 16px;
  transition: right 0.3s ease;
  overflow-y: auto;
}

.objects-panel.open {
  right: 0;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
  margin-bottom: 12px;
}

.panel-header h3 {
  margin: 0;
  font-size: 1.1rem;
}

.close-panel {
  border: none;
  background: transparent;
  font-size: 1rem;
  cursor: pointer;
  background: rgba(0,0,0,0.08);
  width: 28px;
  height: 28px;
  border-radius: 50%;
}

.empty-list {
  text-align: center;
  color: #555;
  padding-top: 20px;
}

.objects-panel ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.objects-panel li {
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 0.9rem;
  color: #333;
  background: #f8f9fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.object-info {
  display: flex;
  flex-direction: column;
}

.objects-panel li strong {
  font-size: 1rem;
  margin-bottom: 4px;
}

.delete-object-btn {
  border: none;
  background: #dc3545;
  color: white;
  border-radius: 6px;
  padding: 6px 10px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.delete-object-btn:hover {
  background: #c82333;
}

.btn-panel {
  position: fixed;
  right: 12px;
  z-index: 1000000;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 14px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

.btn-panel:hover {
  background: #0056b3;
}

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

.add-tag-btn {
  position: fixed;
  bottom: 70px!important;
  left: 16px;
  height: 48px;
  z-index: 999999;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
}

.add-tag-btn:disabled {
  background: #6c757d;
  cursor: not-allowed;
}

.panel-toggle {
  top: 12px;
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