<template>
  <div ref="container" class="sculpture" :class="{ 'webgl-ready': webglReady }">
    <div class="sculpture-fallback">
      <div class="fallback-orbit fallback-orbit-one" />
      <div class="fallback-orbit fallback-orbit-two" />
      <div class="fallback-core" />
    </div>
    <canvas ref="canvas" class="sculpture-canvas" />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import {
  ACESFilmicToneMapping,
  BufferAttribute,
  BufferGeometry,
  CanvasTexture,
  DirectionalLight,
  EquirectangularReflectionMapping,
  Group,
  HemisphereLight,
  Mesh,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  PerspectiveCamera,
  PMREMGenerator,
  Points,
  PointsMaterial,
  PointLight,
  SRGBColorSpace,
  Scene,
  TorusGeometry,
  TorusKnotGeometry,
  WebGLRenderer,
} from 'three'

const container = ref(null)
const canvas = ref(null)
const webglReady = ref(false)

let renderer
let resizeObserver
let intersectionObserver
let environmentTarget
let geometries = []
let materials = []
let frameTimer
let scene
let sculpture
let camera
let active = true
let pointerX = 0
let pointerY = 0
let currentX = 0
let currentY = 0
let baseRotation = 0
let reduceMotion = false

function onPointerMove(event) {
  const bounds = container.value.getBoundingClientRect()
  if (!bounds.width || !bounds.height) return
  pointerX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 0.28
  pointerY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 0.2
}

function draw() {
  window.clearTimeout(frameTimer)
  if (!renderer || !active || document.hidden) return

  if (!reduceMotion) {
    currentX += (pointerY - currentX) * 0.035
    currentY += (pointerX - currentY) * 0.035
    sculpture.rotation.x = currentX + 0.13
    baseRotation += 0.004
    sculpture.rotation.y = baseRotation + currentY
    sculpture.rotation.z = Math.sin(performance.now() * 0.00025) * 0.035
  }

  renderer.render(scene, camera)

  if (!reduceMotion) frameTimer = window.setTimeout(draw, 33)
}

function resize() {
  if (!renderer || !container.value) return
  const { width, height } = container.value.getBoundingClientRect()
  if (!width || !height) return

  renderer.setSize(width, height, false)
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  draw()
}

async function createScene() {
  if (!canvas.value || !container.value) return

  const width = container.value.clientWidth
  const height = container.value.clientHeight
  if (!width || !height) return

  renderer = new WebGLRenderer({
    canvas: canvas.value,
    alpha: true,
    antialias: window.devicePixelRatio < 2,
    powerPreference: 'low-power',
  })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5))
  renderer.setSize(width, height, false)
  renderer.outputColorSpace = SRGBColorSpace
  renderer.toneMapping = ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.1

  scene = new Scene()
  camera = new PerspectiveCamera(36, width / height, 0.1, 50)
  camera.position.set(0, 0, 6.2)

  const environmentGenerator = new PMREMGenerator(renderer)
  const environmentCanvas = document.createElement('canvas')
  environmentCanvas.width = 512
  environmentCanvas.height = 256
  const environmentContext = environmentCanvas.getContext('2d')
  if (!environmentContext) {
    environmentGenerator.dispose()
    renderer.dispose()
    renderer = undefined
    return
  }

  const environmentGradient = environmentContext.createLinearGradient(0, 0, 0, 256)
  environmentGradient.addColorStop(0, '#534a30')
  environmentGradient.addColorStop(0.35, '#a38a50')
  environmentGradient.addColorStop(0.55, '#211d14')
  environmentGradient.addColorStop(1, '#080807')
  environmentContext.fillStyle = environmentGradient
  environmentContext.fillRect(0, 0, 512, 256)
  environmentContext.fillStyle = 'rgba(255, 242, 197, 0.82)'
  environmentContext.fillRect(112, 42, 48, 12)
  environmentContext.fillStyle = 'rgba(255, 255, 255, 0.54)'
  environmentContext.fillRect(340, 67, 24, 9)
  environmentContext.fillStyle = 'rgba(215, 173, 80, 0.62)'
  environmentContext.fillRect(228, 35, 18, 30)

  const environmentTexture = new CanvasTexture(environmentCanvas)
  environmentTexture.mapping = EquirectangularReflectionMapping
  environmentTexture.colorSpace = SRGBColorSpace
  environmentTarget = environmentGenerator.fromEquirectangular(environmentTexture)
  environmentTexture.dispose()
  scene.environment = environmentTarget.texture
  environmentGenerator.dispose()

  scene.add(new HemisphereLight(0xffedc2, 0x17130d, 1.25))
  const keyLight = new DirectionalLight(0xffdf8b, 3.1)
  keyLight.position.set(3.5, 4, 5)
  scene.add(keyLight)
  const rimLight = new PointLight(0xc38322, 32, 12, 2)
  rimLight.position.set(-3.2, -1.5, 2.5)
  scene.add(rimLight)

  sculpture = new Group()
  scene.add(sculpture)

  const gold = new MeshPhysicalMaterial({
    color: 0xd4ad50,
    metalness: 0.82,
    roughness: 0.24,
    clearcoat: 0.65,
    clearcoatRoughness: 0.2,
  })
  const polishedGold = new MeshStandardMaterial({
    color: 0xf0cd75,
    metalness: 0.85,
    roughness: 0.18,
  })
  materials.push(gold, polishedGold)

  const knotGeometry = new TorusKnotGeometry(1.14, 0.27, 180, 22, 2, 3)
  const knot = new Mesh(knotGeometry, gold)
  knot.rotation.set(0.45, 0.3, -0.25)
  sculpture.add(knot)
  geometries.push(knotGeometry)

  const orbitGeometry = new TorusGeometry(1.7, 0.012, 8, 120)
  const orbit = new Mesh(orbitGeometry, polishedGold)
  orbit.rotation.set(1.1, 0.3, 0.35)
  sculpture.add(orbit)
  geometries.push(orbitGeometry)

  const innerOrbitGeometry = new TorusGeometry(1.91, 0.007, 6, 120)
  const innerOrbit = new Mesh(innerOrbitGeometry, gold)
  innerOrbit.rotation.set(0.7, 0.9, -0.4)
  sculpture.add(innerOrbit)
  geometries.push(innerOrbitGeometry)

  const particlePositions = new Float32Array(66 * 3)
  for (let index = 0; index < particlePositions.length; index += 3) {
    const radius = 2.1 + Math.random() * 0.75
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    particlePositions[index] = radius * Math.sin(phi) * Math.cos(theta)
    particlePositions[index + 1] = radius * Math.sin(phi) * Math.sin(theta)
    particlePositions[index + 2] = radius * Math.cos(phi)
  }

  const particlesGeometry = new BufferGeometry()
  particlesGeometry.setAttribute('position', new BufferAttribute(particlePositions, 3))
  const particlesMaterial = new PointsMaterial({
    color: 0xd9b85e,
    size: 0.018,
    transparent: true,
    opacity: 0.65,
    sizeAttenuation: true,
  })
  const particles = new Points(particlesGeometry, particlesMaterial)
  sculpture.add(particles)
  geometries.push(particlesGeometry)
  materials.push(particlesMaterial)

  webglReady.value = true
  resize()
}

function handleVisibility() {
  if (document.hidden) {
    window.clearTimeout(frameTimer)
  } else {
    draw()
  }
}

onMounted(() => {
  reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  createScene()
    .then(() => {
      if (reduceMotion) draw()
      else draw()
    })
    .catch(() => {
      webglReady.value = false
    })

  if ('ResizeObserver' in window) {
    resizeObserver = new ResizeObserver(resize)
    if (container.value) resizeObserver.observe(container.value)
  } else {
    window.addEventListener('resize', resize)
  }

  intersectionObserver = new IntersectionObserver(([entry]) => {
    active = entry.isIntersecting
    if (active) draw()
    else window.clearTimeout(frameTimer)
  })
  if (container.value) intersectionObserver.observe(container.value)

  container.value?.addEventListener('pointermove', onPointerMove, { passive: true })
  document.addEventListener('visibilitychange', handleVisibility)
})

onUnmounted(() => {
  window.clearTimeout(frameTimer)
  resizeObserver?.disconnect()
  window.removeEventListener('resize', resize)
  intersectionObserver?.disconnect()
  container.value?.removeEventListener('pointermove', onPointerMove)
  document.removeEventListener('visibilitychange', handleVisibility)
  geometries.forEach(geometry => geometry.dispose())
  materials.forEach(material => material.dispose())
  environmentTarget?.dispose()
  renderer?.dispose()
  geometries = []
  materials = []
})
</script>

<style scoped>
.sculpture {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.sculpture-canvas,
.sculpture-fallback {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.sculpture-canvas {
  opacity: 0;
  transition: opacity 400ms ease;
}

.webgl-ready .sculpture-canvas {
  opacity: 1;
}

.sculpture-fallback {
  display: grid;
  place-items: center;
  background: radial-gradient(circle, rgba(201, 168, 76, 0.12), transparent 64%);
  transition: opacity 300ms ease;
}

.webgl-ready .sculpture-fallback {
  opacity: 0;
}

.fallback-core {
  position: absolute;
  width: 37%;
  aspect-ratio: 1;
  border: 1px solid rgba(234, 209, 141, 0.85);
  border-radius: 42% 58% 55% 45%;
  background:
    radial-gradient(ellipse at 32% 28%, rgba(255, 232, 161, 0.72), transparent 12%),
    radial-gradient(ellipse at 36% 35%, #b68b34 0%, #503b17 48%, #11100d 78%);
  box-shadow:
    inset -20px -20px 36px rgba(0, 0, 0, 0.65),
    0 0 70px rgba(201, 168, 76, 0.18);
  transform: rotate(-24deg);
}

.fallback-orbit {
  position: absolute;
  width: 74%;
  height: 37%;
  border: 1px solid rgba(201, 168, 76, 0.48);
  border-radius: 50%;
  transform: rotate(-32deg);
}

.fallback-orbit-two {
  width: 77%;
  height: 29%;
  border-color: rgba(234, 209, 141, 0.25);
  transform: rotate(55deg);
}
</style>
