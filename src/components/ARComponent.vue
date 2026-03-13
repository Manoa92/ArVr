<template>
  <div id="ar-container" ref="container"></div>
  <button @click="startAR" v-if="!isARStarted">Démarrer AR</button>
  <p v-if="isARSupported === false">Votre navigateur ne supporte pas WebXR AR.</p>

  <div v-if="isInputVisible" class="tag-input-overlay">
    <div class="tag-input-box">
      <label>
        Nom du tag
        <input
          v-model="tagText"
          @keydown.enter.prevent="confirmTagText"
          placeholder="Entrez le texte..."
          autofocus
        />
      </label>
      <div class="tag-input-actions">
        <button @click="confirmTagText">Valider</button>
        <button @click="cancelTagText">Annuler</button>
      </div>
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

let scene: THREE.Scene
let camera: THREE.Camera
let renderer: THREE.WebGLRenderer
let controller: THREE.Group
let reticle: THREE.Mesh
let hitTestSource: any = null
let localReferenceSpace: any = null
let tags: THREE.Object3D[] = []
let pendingTagMatrix = new THREE.Matrix4()

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
    requiredFeatures: ['hit-test']
  })

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.xr.enabled = true
  renderer.xr.setReferenceSpaceType('local')
  renderer.xr.setSession(session)

  container.value?.appendChild(renderer.domElement)

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 20)

  // Créer le reticle pour indiquer où placer le tag
  const reticleGeometry = new THREE.RingGeometry(0.15, 0.2, 32).rotateX(-Math.PI / 2)
  const reticleMaterial = new THREE.MeshBasicMaterial()
  reticle = new THREE.Mesh(reticleGeometry, reticleMaterial)
  reticle.matrixAutoUpdate = false
  reticle.visible = false
  scene.add(reticle)

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
  const scaleFactor = 0.0015
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

  // Créer un tag texte à la position mémorisée
  const tag = createTextSprite(text)
  tag.position.setFromMatrixPosition(pendingTagMatrix)
  scene.add(tag)
  tags.push(tag)

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
        const pose = hit.getPose(localReferenceSpace)
        reticle.visible = true
        reticle.matrix.fromArray(pose.transform.matrix)
      } else {
        reticle.visible = false
      }
    }
  }

  renderer.render(scene, camera)
}
</script>

<style scoped>
#ar-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}

button {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;
}

.tag-input-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.55);
  z-index: 2000;
}

.tag-input-box {
  background: rgba(255, 255, 255, 0.95);
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  width: min(320px, 90vw);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.tag-input-box input {
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  outline: none;
  font-size: 16px;
}

.tag-input-actions {
  display: flex;
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