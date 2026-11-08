<template>
  <nav class="navbar" :class="{ scrolled: isScrolled, 'menu-open': menuOpen }" @keydown.esc="menuOpen = false">
    <a class="nav-logo" href="#hero" aria-label="Khaled Hassan, back to top" @click.prevent="scrollTo('hero')">
      <span>KH</span>
      <span class="logo-divider" aria-hidden="true" />
      <span class="logo-name">Khaled Hassan</span>
    </a>

    <ul id="site-navigation" class="nav-links" :class="{ open: menuOpen }">
      <li v-for="item in navItems" :key="item.id">
        <a
          :href="`#${item.id}`"
          :class="{ active: activeSection === item.id }"
          @click.prevent="scrollTo(item.id)"
        >{{ item.label }}</a>
      </li>
      <li class="mobile-cv">
        <a
          class="nav-cv"
          href="/Khaled%20Hassan%20CV.pdf"
          download="Khaled-Hassan-Frontend-Developer-CV.pdf"
          aria-label="Download Khaled Hassan's CV as a PDF"
          @click="menuOpen = false"
        >Download CV <span aria-hidden="true">↓</span></a>
      </li>
    </ul>

    <a
      class="nav-cv desktop-cv"
      href="/Khaled%20Hassan%20CV.pdf"
      download="Khaled-Hassan-Frontend-Developer-CV.pdf"
      aria-label="Download Khaled Hassan's CV as a PDF"
    >Download CV <span aria-hidden="true">↓</span></a>

    <button
      class="hamburger"
      :class="{ open: menuOpen }"
      type="button"
      :aria-expanded="menuOpen"
      aria-controls="site-navigation"
      :aria-label="menuOpen ? 'Close navigation menu' : 'Open navigation menu'"
      @click="menuOpen = !menuOpen"
    >
      <span /><span /><span />
    </button>
  </nav>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)
const activeSection = ref('hero')

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Work' },
  { id: 'contact', label: 'Contact' },
]

function scrollTo(id) {
  menuOpen.value = false
  const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
  document.getElementById(id)?.scrollIntoView({ behavior })
}

function onScroll() {
  isScrolled.value = window.scrollY > 24

  const sections = [...navItems.map(item => item.id), 'hero']
  for (const id of sections.reverse()) {
    const section = document.getElementById(id)
    if (section && section.getBoundingClientRect().top <= 130) {
      activeSection.value = id
      break
    }
  }
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  z-index: 1000;
  inset: 0 0 auto;
  display: flex;
  min-height: 76px;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1rem clamp(1.2rem, 5vw, 4.5rem);
  border-bottom: 1px solid transparent;
  transition: min-height 250ms ease, background 250ms ease, border-color 250ms ease;
}

.navbar.scrolled,
.navbar.menu-open {
  min-height: 66px;
  border-color: rgba(201, 168, 76, 0.1);
  background: rgba(5, 5, 5, 0.88);
  backdrop-filter: blur(18px);
}

.nav-logo {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  color: var(--gold-light);
  font-family: var(--font-display);
  font-size: 0.92rem;
  letter-spacing: 0.1em;
  text-decoration: none;
}

.logo-divider {
  width: 1px;
  height: 1.1rem;
  background: rgba(201, 168, 76, 0.4);
}

.logo-name {
  color: var(--text-soft);
  font-family: var(--font-body);
  font-size: 0.62rem;
  font-weight: 400;
  letter-spacing: 0.08em;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: clamp(1rem, 2.5vw, 2.2rem);
  list-style: none;
}

.nav-links a {
  position: relative;
  color: var(--text-soft);
  font-size: 0.62rem;
  letter-spacing: 0.12em;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 200ms ease;
}

.nav-links a::after {
  position: absolute;
  right: 0;
  bottom: -0.5rem;
  left: 0;
  height: 1px;
  background: var(--gold);
  content: "";
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 230ms var(--ease-cinema);
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--gold-light);
}

.nav-links a:hover::after,
.nav-links a.active::after {
  transform: scaleX(1);
}

.nav-cv {
  display: inline-flex;
  min-height: 2.5rem;
  align-items: center;
  gap: 0.55rem;
  padding: 0.55rem 0.8rem;
  border: 1px solid rgba(201, 168, 76, 0.36);
  color: var(--gold-light);
  font-size: 0.59rem;
  letter-spacing: 0.11em;
  text-decoration: none;
  text-transform: uppercase;
  transition: border-color 200ms ease, background 200ms ease, transform 200ms ease;
}

.nav-cv:hover {
  transform: translateY(-1px);
  border-color: var(--gold);
  background: rgba(201, 168, 76, 0.07);
}

.nav-cv span {
  font-size: 0.8rem;
}

.mobile-cv,
.hamburger {
  display: none;
}

@media (max-width: 860px) {
  .navbar {
    min-height: 66px;
  }

  .desktop-cv {
    margin-left: auto;
  }

  .hamburger {
    position: relative;
    z-index: 2;
    display: flex;
    width: 42px;
    height: 42px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    border: 1px solid rgba(201, 168, 76, 0.22);
    background: transparent;
    cursor: pointer;
  }

  .hamburger span {
    width: 16px;
    height: 1px;
    background: var(--gold-light);
    transition: transform 220ms ease, opacity 220ms ease;
  }

  .hamburger.open span:first-child {
    transform: translateY(3px) rotate(45deg);
  }

  .hamburger.open span:nth-child(2) {
    opacity: 0;
  }

  .hamburger.open span:last-child {
    transform: translateY(-9px) rotate(-45deg);
  }

  .nav-links {
    position: fixed;
    z-index: 1;
    inset: 0;
    visibility: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.8rem;
    background: rgba(5, 5, 5, 0.98);
    opacity: 0;
    pointer-events: none;
    transition: opacity 240ms ease, visibility 0s linear 240ms;
  }

  .nav-links.open {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
    transition-delay: 0s;
  }

  .nav-links a {
    font-size: 0.9rem;
    letter-spacing: 0.2em;
  }

  .mobile-cv {
    display: list-item;
    margin-top: 0.6rem;
  }

  .mobile-cv a {
    display: inline-flex;
    padding: 0.8rem 1rem;
    border: 1px solid rgba(201, 168, 76, 0.36);
    color: var(--gold-light);
    font-size: 0.68rem;
  }

  .mobile-cv a::after {
    content: none;
  }

  .desktop-cv {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .nav-links {
    transition-duration: 0.01ms;
  }
}
</style>
