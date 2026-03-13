<template>
  <div id="ar-container" ref="container"></div>
  <div v-if="!isARStarted" class="ui">
    <button @click="startAR">Démarrer AR</button>
  </div>
  <div v-if="isARStarted" class="ui">
    <input v-model="tagName" placeholder="Nom du tag" />
    <button @click="placeTag" :disabled="!tagName.trim()">Placer Tag</button>
  </div>
  <p v-if="isARSupported === false">Votre navigateur ne supporte pas WebXR AR.</p>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as THREE from 'three'

const container = ref<HTMLDivElement>()
const isARStarted = ref(false)
const isARSupported = ref<boolean | null>(null)
const tagName = ref('')

let scene: THREE.Scene
let camera: THREE.Camera
let renderer: THREE.WebGLRenderer
let controller: THREE.Group
let reticle: THREE.Mesh
let hitTestSource: any = null
let localReferenceSpace: any = null
let tags: THREE.Mesh[] = []
let pendingTag = false

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

const onSelect = () => {
  if (reticle.visible && pendingTag && tagName.value.trim()) {
    const tag = createTag(tagName.value.trim())
    tag.position.setFromMatrixPosition(reticle.matrix)
    scene.add(tag)
    tags.push(tag)
    pendingTag = false
    tagName.value = ''
  }
}

const placeTag = () => {
  if (tagName.value.trim()) {
    pendingTag = true
  }
}

const createTag = (text: string): THREE.Mesh => {
  // Créer un canvas pour le texte
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')!
  canvas.width = 256
  canvas.height = 128

  // Fond semi-transparent
  context.fillStyle = 'rgba(0, 0, 0, 0.7)'
  context.fillRect(0, 0, canvas.width, canvas.height)

  // Bordure
  context.strokeStyle = '#ffffff'
  context.lineWidth = 2
  context.strokeRect(5, 5, canvas.width - 10, canvas.height - 10)

  // Texte
  context.fillStyle = '#ffffff'
  context.font = 'bold 24px Arial'
  context.textAlign = 'center'
  context.fillText(text, canvas.width / 2, canvas.height / 2 + 8)

  // Créer texture
  const texture = new THREE.CanvasTexture(canvas)
  texture.generateMipmaps = false
  texture.minFilter = THREE.LinearFilter

  // Créer matériau
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    side: THREE.DoubleSide
  })

  // Créer géométrie (plan)
  const geometry = new THREE.PlaneGeometry(0.3, 0.15)

  // Créer mesh
  const mesh = new THREE.Mesh(geometry, material)

  // Orienter vers la caméra (approximatif)
  mesh.lookAt(camera.position)

  return mesh
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

    // Orienter les tags vers la caméra
    tags.forEach(tag => {
      tag.lookAt(camera.position)
    })
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

.ui {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.ui input {
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.ui button {
  padding: 8px 16px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.ui button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.ui button:hover:not(:disabled) {
  background-color: #0056b3;
}
</style>