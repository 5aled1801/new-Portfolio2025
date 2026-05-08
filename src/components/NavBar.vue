<template>
  <nav :class="['navbar', { scrolled: isScrolled }]">
    <a href="#hero" class="nav-logo" @click.prevent="scrollTo('hero')">KH</a>

    <ul class="nav-links" :class="{ open: menuOpen }">
      <li v-for="item in navItems" :key="item.id">
        <a
          :href="`#${item.id}`"
          :class="{ active: activeSection === item.id }"
          @click.prevent="scrollTo(item.id)"
        >{{ item.label }}</a>
      </li>
    </ul>

    <button class="hamburger" :class="{ open: menuOpen }" @click="menuOpen = !menuOpen" aria-label="Menu">
      <span /><span /><span />
    </button>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled    = ref(false)
const menuOpen      = ref(false)
const activeSection = ref('hero')

const navItems = [
  { id: 'about',      label: 'About'      },
  { id: 'skills',     label: 'Skills'     },
  { id: 'experience', label: 'Experience' },
  { id: 'projects',   label: 'Work'       },
  { id: 'contact',    label: 'Contact'    },
]

function scrollTo(id) {
  menuOpen.value = false
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function onScroll() {
  isScrolled.value = window.scrollY > 60

  const sections = navItems.map(i => i.id).concat(['hero'])
  for (const id of sections.reverse()) {
    const el = document.getElementById(id)
    if (el && el.getBoundingClientRect().top <= 120) {
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
  top: 0; left: 0; right: 0;
  z-index: 900;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.4rem 5%;
  border-bottom: 0.5px solid transparent;
  transition: background 0.4s, border-color 0.4s, padding 0.4s;
}

.navbar.scrolled {
  background: rgba(6, 6, 6, 0.92);
  backdrop-filter: blur(20px);
  border-color: var(--gold-dim);
  padding: 1rem 5%;
}

.nav-logo {
  font-family: var(--font-display);
  font-size: 1.1rem;
  color: var(--gold);
  text-decoration: none;
  letter-spacing: 0.12em;
  transition: opacity 0.2s;
}
.nav-logo:hover { opacity: 0.7; }

.nav-links {
  display: flex;
  gap: 2.5rem;
  list-style: none;
}

.nav-links a {
  color: var(--muted);
  text-decoration: none;
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  position: relative;
  transition: color 0.3s;
  cursor: none;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px; left: 0; right: 0;
  height: 1px;
  background: var(--gold);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s var(--ease-cinema);
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--gold);
}
.nav-links a:hover::after,
.nav-links a.active::after {
  transform: scaleX(1);
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: none;
  padding: 4px;
}
.hamburger span {
  display: block;
  width: 24px; height: 1px;
  background: var(--gold);
  transition: transform 0.3s, opacity 0.3s;
}
.hamburger.open span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

@media (max-width: 768px) {
  .hamburger { display: flex; }

  .nav-links {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(6,6,6,0.98);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.4s;
  }
  .nav-links.open {
    opacity: 1;
    pointer-events: auto;
  }
  .nav-links a { font-size: 1rem; letter-spacing: 0.3em; }
}
</style>
