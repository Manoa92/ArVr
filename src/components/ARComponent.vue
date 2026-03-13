<template>
  <div id="ar-container" ref="container"></div>
  <button @click="startAR" v-if="!isARStarted">Démarrer AR</button>
  <p v-if="isARSupported === false">Votre navigateur ne supporte pas WebXR AR.</p>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as THREE from 'three'

const container = ref<HTMLDivElement>()
const isARStarted = ref(false)
const isARSupported = ref<boolean | null>(null)

let scene: THREE.Scene
let camera: THREE.Camera
let renderer: THREE.WebGLRenderer
let controller: THREE.Group
let reticle: THREE.Mesh
let hitTestSource: any = null
let localReferenceSpace: any = null
let tags: THREE.Object3D[] = []

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
  if (reticle.visible) {
    const text = window.prompt('Entrez le texte du tag :', '🎯')
    if (!text) return

    // Créer un tag texte à la position du reticle
    const tag = createTextSprite(text)
    tag.position.setFromMatrixPosition(reticle.matrix)
    scene.add(tag)
    tags.push(tag)
  }
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
</style>