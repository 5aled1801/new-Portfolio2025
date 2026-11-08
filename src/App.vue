<template>
  <div id="app-root">
    <div class="progress-bar" :style="{ width: scrollProgress + '%' }" />
    <NavBar />
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
  <Analytics v-if="isVercelHost" />
</template>

<script setup>
import { Analytics } from '@vercel/analytics/vue'
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterBar from './components/FooterBar.vue'

const scrollProgress = ref(0)
const isVercelHost = typeof window !== 'undefined' && window.location.hostname.endsWith('.vercel.app')
let animationContext

function onScroll() {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  gsap.registerPlugin(ScrollTrigger)
  animationContext = gsap.context(() => {
    ScrollTrigger.batch('.reveal', {
      start: 'top 88%',
      once: true,
      onEnter: elements => gsap.fromTo(elements, {
        autoAlpha: 0,
        y: 22,
      }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.075,
        ease: 'power3.out',
        overwrite: true,
      }),
    })

    gsap.fromTo('.hero-art', {
      autoAlpha: 0,
      scale: 0.92,
    }, {
      autoAlpha: 1,
      scale: 1,
      duration: 1.3,
      delay: 0.15,
      ease: 'power3.out',
    })

    gsap.to('.hero-art', {
      yPercent: -7,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.8,
      },
    })
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  animationContext?.revert()
})
</script>
