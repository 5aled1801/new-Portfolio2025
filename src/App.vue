<template>
  <div id="app-root">
    <!-- Custom Cursor -->
    <div class="cursor" ref="cursorDot" />
    <div class="cursor-ring" ref="cursorRing" :class="{ hovered: isHovered }" />

    <!-- Scroll Progress -->
    <div class="progress-bar" :style="{ width: scrollProgress + '%' }" />

    <!-- Navigation -->
    <NavBar />

    <!-- Page Sections -->
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>

    <FooterBar />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterBar from './components/FooterBar.vue'

const cursorDot = ref(null)
const cursorRing = ref(null)
const isHovered = ref(false)
const scrollProgress = ref(0)

let ringX = 0, ringY = 0
let dotX = 0, dotY = 0
let animId = null

function onMouseMove(e) {
  dotX = e.clientX
  dotY = e.clientY
  if (cursorDot.value) {
    cursorDot.value.style.left = dotX + 'px'
    cursorDot.value.style.top = dotY + 'px'
  }
}

function animateRing() {
  ringX += (dotX - ringX) * 0.12
  ringY += (dotY - ringY) * 0.12
  if (cursorRing.value) {
    cursorRing.value.style.left = ringX + 'px'
    cursorRing.value.style.top = ringY + 'px'
  }
  animId = requestAnimationFrame(animateRing)
}

function onScroll() {
  const total = document.body.scrollHeight - window.innerHeight
  scrollProgress.value = total > 0 ? (window.scrollY / total) * 100 : 0
}

function setupReveal() {
  const els = document.querySelectorAll('.reveal')
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
  }, { threshold: 0.12 })
  els.forEach(el => obs.observe(el))
}

function setupHoverCursor() {
  document.addEventListener('mouseover', e => {
    const el = e.target.closest('a, button, .hover-target')
    isHovered.value = !!el
  })
}

onMounted(() => {
  document.addEventListener('mousemove', onMouseMove)
  window.addEventListener('scroll', onScroll, { passive: true })
  animateRing()
  setTimeout(setupReveal, 100)
  setupHoverCursor()
})

onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('scroll', onScroll)
  cancelAnimationFrame(animId)
})
</script>

<style scoped>
#app-root {
  min-height: 100vh;
}


</style>
