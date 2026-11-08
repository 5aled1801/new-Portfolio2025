<template>
  <section id="hero" class="section-wrapper hero">
    <div class="hero-atmosphere" aria-hidden="true" />
    <div class="hero-layout container">
      <div class="hero-copy">
        <p class="hero-kicker reveal">
          <span class="kicker-line" />
          Frontend engineer · Cairo, Egypt
        </p>

        <h1 class="hero-name reveal">
          <span>Khaled</span>
          <span class="gold-text">Hassan</span>
        </h1>

        <p class="hero-role reveal">
          Frontend Developer <span aria-hidden="true">/</span> Vue.js &amp; React.js
        </p>

        <p class="hero-intro reveal">
          I build thoughtful, high-performance web experiences — bringing clean
          engineering and an eye for detail to every interface.
        </p>

        <div class="hero-actions reveal">
          <a class="btn-gold" href="#projects" @click.prevent="scrollTo('projects')">
            View Projects
            <svg class="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" stroke-width="1.4" />
            </svg>
          </a>
          <a
            class="btn-outline"
            href="/Khaled%20Hassan%20CV.pdf"
            download="Khaled-Hassan-Frontend-Developer-CV.pdf"
            aria-label="Download Khaled Hassan's CV as a PDF"
          >
            Download CV
            <svg class="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M10 2.75v9m0 0 3.5-3.5M10 11.75l-3.5-3.5M4 13.5v3h12v-3" stroke="currentColor" stroke-width="1.4" />
            </svg>
          </a>
          <a class="hero-contact-link" href="#contact" @click.prevent="scrollTo('contact')">
            Contact me <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div class="hero-footnote reveal">
          <span class="availability-dot" aria-hidden="true" />
          Open to meaningful opportunities
        </div>
      </div>

      <div class="hero-art" aria-hidden="true">
        <HeroSculpture v-if="useWebGl" class="hero-scene" />
        <div v-else class="hero-scene hero-static">
          <div class="hero-static-orbit hero-static-orbit-one" />
          <div class="hero-static-orbit hero-static-orbit-two" />
          <div class="hero-static-core" />
        </div>
        <div class="art-caption">
          <span>KH</span>
          <span>DESIGN · ENGINEERING · DETAIL</span>
        </div>
      </div>
    </div>

    <a class="scroll-cue" href="#about" aria-label="Scroll to About section">
      <span>Scroll to explore</span>
      <span class="scroll-cue-line" aria-hidden="true" />
    </a>
    <span class="hero-index" aria-hidden="true">01 / 06</span>
  </section>
</template>

<script setup>
import { defineAsyncComponent, onMounted, onUnmounted, ref } from 'vue'

const HeroSculpture = defineAsyncComponent(() => import('./HeroSculpture.vue'))
const useWebGl = ref(false)
const desktopPointer = window.matchMedia('(min-width: 761px) and (hover: hover) and (pointer: fine)')

function updateRenderingMode() {
  useWebGl.value = desktopPointer.matches
}

function scrollTo(id) {
  const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
  document.getElementById(id)?.scrollIntoView({ behavior })
}

onMounted(() => {
  updateRenderingMode()
  desktopPointer.addEventListener('change', updateRenderingMode)
})

onUnmounted(() => desktopPointer.removeEventListener('change', updateRenderingMode))
</script>

<style scoped>
.hero {
  min-height: max(720px, 100svh);
  display: flex;
  align-items: center;
  overflow: clip;
  padding: 8rem 0 7rem;
  background:
    radial-gradient(ellipse at 78% 45%, rgba(201, 168, 76, 0.09), transparent 32rem),
    linear-gradient(115deg, #050505 20%, #090908 68%, #070706);
}

.hero::after {
  position: absolute;
  z-index: -1;
  inset: 0;
  background-image: linear-gradient(rgba(255, 255, 255, 0.018) 1px, transparent 1px);
  background-size: 100% 72px;
  content: "";
  mask-image: linear-gradient(transparent, black 20%, transparent 90%);
  pointer-events: none;
}

.hero-atmosphere {
  position: absolute;
  z-index: -1;
  top: 8%;
  right: 4%;
  width: min(65vw, 780px);
  aspect-ratio: 1;
  border: 1px solid rgba(201, 168, 76, 0.055);
  border-radius: 50%;
  box-shadow:
    0 0 0 5rem rgba(201, 168, 76, 0.012),
    0 0 0 10rem rgba(201, 168, 76, 0.009);
  pointer-events: none;
}

.hero-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.04fr) minmax(340px, 0.96fr);
  align-items: center;
  gap: clamp(1.5rem, 5vw, 5.5rem);
}

.hero-copy {
  position: relative;
  z-index: 2;
  padding-block: 2rem;
}

.hero-kicker {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 2rem;
  color: var(--text-soft);
  font-size: 0.68rem;
  letter-spacing: 0.17em;
  text-transform: uppercase;
}

.kicker-line {
  width: 2rem;
  height: 1px;
  background: var(--gold);
}

.hero-name {
  display: flex;
  flex-direction: column;
  margin-left: -0.07em;
  font-family: var(--font-display);
  font-size: clamp(4rem, 8.5vw, 8rem);
  font-weight: 500;
  letter-spacing: -0.055em;
  line-height: 0.94;
}

.hero-role {
  margin-top: 1.6rem;
  color: #ddd8ca;
  font-size: clamp(0.73rem, 1.2vw, 0.92rem);
  font-weight: 400;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.hero-role span {
  padding-inline: 0.45rem;
  color: var(--gold);
}

.hero-intro {
  max-width: 32rem;
  margin-top: 1.3rem;
  color: var(--text-soft);
  font-size: 0.96rem;
  font-weight: 300;
  line-height: 1.9;
}

.hero-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
}

.hero-contact-link {
  display: inline-flex;
  min-height: 3rem;
  align-items: center;
  gap: 0.4rem;
  margin-left: 0.3rem;
  color: var(--text-soft);
  font-size: 0.73rem;
  letter-spacing: 0.09em;
  text-decoration: none;
  transition: color 200ms ease;
}

.hero-contact-link:hover {
  color: var(--gold-light);
}

.hero-footnote {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 2.4rem;
  color: var(--muted);
  font-size: 0.68rem;
  letter-spacing: 0.09em;
}

.availability-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--gold);
  box-shadow: 0 0 12px rgba(201, 168, 76, 0.65);
}

.hero-art {
  position: relative;
  width: 100%;
  max-width: 600px;
  justify-self: end;
  transform-origin: center;
}

.hero-scene {
  display: block;
  width: 100%;
  aspect-ratio: 1;
}

.hero-static {
  position: relative;
  display: grid;
  place-items: center;
  background: radial-gradient(circle, rgba(201, 168, 76, 0.12), transparent 64%);
}

.hero-static-core {
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

.hero-static-orbit {
  position: absolute;
  width: 74%;
  height: 37%;
  border: 1px solid rgba(201, 168, 76, 0.48);
  border-radius: 50%;
  transform: rotate(-32deg);
}

.hero-static-orbit-two {
  width: 77%;
  height: 29%;
  border-color: rgba(234, 209, 141, 0.25);
  transform: rotate(55deg);
}

.art-caption {
  position: absolute;
  right: 8%;
  bottom: 8%;
  left: 8%;
  display: flex;
  justify-content: space-between;
  color: rgba(234, 226, 210, 0.48);
  font-size: 0.55rem;
  letter-spacing: 0.18em;
}

.art-caption span:first-child {
  color: var(--gold);
  font-family: var(--font-display);
  font-size: 0.75rem;
}

.scroll-cue {
  position: absolute;
  bottom: 2.3rem;
  left: 50%;
  display: flex;
  align-items: center;
  gap: 0.85rem;
  color: var(--muted);
  font-size: 0.58rem;
  letter-spacing: 0.16em;
  text-decoration: none;
  text-transform: uppercase;
  transform: translateX(-50%);
}

.scroll-cue-line {
  width: 2.8rem;
  height: 1px;
  background: linear-gradient(90deg, var(--gold), transparent);
}

.hero-index {
  position: absolute;
  right: 3rem;
  bottom: 2.3rem;
  color: rgba(234, 226, 210, 0.38);
  font-size: 0.6rem;
  letter-spacing: 0.16em;
}

@media (max-width: 900px) {
  .hero {
    min-height: 100svh;
    padding-block: 7rem 6rem;
  }

  .hero-layout {
    grid-template-columns: 1fr 0.82fr;
    gap: 0.5rem;
  }

  .hero-name {
    font-size: clamp(3.7rem, 10vw, 6.4rem);
  }

  .hero-art {
    width: 115%;
    margin-left: -10%;
  }

  .art-caption {
    right: 6%;
    left: 6%;
  }
}

@media (max-width: 640px) {
  .hero {
    min-height: auto;
    min-height: 100svh;
    padding-block: 7.5rem 6rem;
  }

  .hero-layout {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .hero-copy {
    padding-block: 0;
  }

  .hero-kicker {
    margin-bottom: 1.5rem;
    font-size: 0.6rem;
  }

  .hero-name {
    font-size: clamp(3.7rem, 16vw, 5.8rem);
  }

  .hero-role {
    margin-top: 1.25rem;
    font-size: 0.66rem;
    letter-spacing: 0.09em;
  }

  .hero-intro {
    max-width: 32rem;
    font-size: 0.87rem;
  }

  .hero-actions {
    gap: 0.55rem;
  }

  .hero-contact-link {
    flex-basis: 100%;
    min-height: 2.5rem;
    margin-left: 0;
  }

  .hero-footnote {
    margin-top: 1.5rem;
    font-size: 0.62rem;
  }

  .hero-art {
    width: min(83vw, 370px);
    margin: -1rem auto 0;
  }

  .art-caption {
    bottom: 9%;
    font-size: 0.46rem;
  }

  .scroll-cue {
    bottom: 1.4rem;
    left: 1.2rem;
    transform: none;
  }

  .hero-index {
    right: 1.2rem;
    bottom: 1.4rem;
  }
}

@media (max-width: 380px) {
  .hero-actions .btn-gold,
  .hero-actions .btn-outline {
    padding-inline: 0.75rem;
    font-size: 0.59rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-art {
    transform: none !important;
  }
}
</style>
