<template>
  <div id="ar-container" ref="container"></div>
  <button class="btnStart" @click="startAR" v-if="!isARStarted">Démarrer AR</button>
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
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as THREE from 'three'

const container = ref<HTMLDivElement>()
const isARStarted = ref(false)
const isARSupported = ref<boolean | null>(null)
const isInputVisible = ref(false)
const tagText = ref('')

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
let tags: TagObject[] = []
let pendingTagMatrix = new THREE.Matrix4()
let smoothedReticleMatrix = new THREE.Matrix4()
let reticleSmoothingFactor = 0.1 // Facteur de lissage (0.1 = lissage fort, 1.0 = pas de lissage)
let recentMatrices: THREE.Matrix4[] = []
const maxRecentMatrices = 5 // Nombre de matrices récentes à moyenner
const minTagDistance = 0.1 // Distance minimale en mètres entre les tags

const saveTags = () => {
  const tagsData = tags.map(tag => ({
    name: tag.sprite.userData.text || '',
    position: tag.sprite.position,
    baseMatrix: tag.baseMatrix?.elements
  }))
  sessionStorage.setItem('arTags', JSON.stringify(tagsData))
}

const loadTags = () => {
  const stored = sessionStorage.getItem('arTags')
  if (!stored) return []
  
  try {
    const tagsData = JSON.parse(stored)
    return tagsData
  } catch (e) {
    console.error('Failed to load tags from sessionStorage:', e)
    return []
  }
}

const isPositionTooClose = (newPosition: THREE.Vector3): boolean => {
  for (const tag of tags) {
    const pos = new THREE.Vector3()
    pos.setFromMatrixPosition(tag.sprite.matrixWorld)
    const distance = pos.distanceTo(newPosition)
    if (distance < minTagDistance) {
      return true
    }
  }
  return false
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

    // Nettoyer les ancres et tags
    for (const tag of tags) {
      if (tag.anchor && tag.anchor.delete) {
        try {
          tag.anchor.delete()
        } catch {
          // ignore
        }
      }
      scene.remove(tag.sprite)
    }
    tags = []

    // Optionally clean up WebGL resources
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
      sprite.position.copy(tagData.position)
    }
    const baseMatrix = tagData.baseMatrix ? new THREE.Matrix4().fromArray(tagData.baseMatrix) : new THREE.Matrix4().setPosition(tagData.position)
    scene.add(sprite)
    tags.push({ sprite, baseMatrix })
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
    alert('Position trop proche d\'un tag existant. Veuillez choisir un autre emplacement.')
    cancelTagText()
    return
  }

  const placeTag = (matrix: THREE.Matrix4, anchor?: any) => {
    const tag = createTextSprite(text)
    tag.position.setFromMatrixPosition(matrix)
    scene.add(tag)
    tags.push({ sprite: tag, anchor, baseMatrix: matrix.clone() })
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
    for (const tag of tags) {
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