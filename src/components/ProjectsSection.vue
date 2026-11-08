<template>
  <section id="projects" class="section-wrapper bg-dark">
    <div class="container section-pad">
      <div class="section-header reveal">
        <span class="section-label">The Work</span>
        <h2 class="section-title">Selected projects</h2>
        <div class="gold-divider" />
      </div>

      <div class="projects-intro reveal">
        <p>A selection of web experiences, built with care from first interaction to final detail.</p>
        <span>10 PROJECTS</span>
      </div>

      <div class="projects-grid">
        <article
          v-for="(project, index) in projects"
          :key="project.title"
          class="project-card reveal"
          :class="{ featured: index < 2 }"
          @pointermove="tiltCard"
          @pointerleave="resetCard"
        >
          <div class="project-art" aria-hidden="true">
            <img
              v-if="!project.previewFailed"
              class="project-screenshot"
              :src="getScreenshotUrl(project.link)"
              alt=""
              loading="lazy"
              decoding="async"
              referrerpolicy="no-referrer"
              @error="project.previewFailed = true"
            >
            <template v-if="project.previewFailed">
              <div class="art-orbit" />
              <div class="art-arch" />
              <div class="art-glow" />
            </template>
            <span class="art-index">0{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="art-caption">Selected work <span>—</span> {{ project.tags[0] }}</span>
          </div>

          <div class="project-meta">
            <span>{{ index < 2 ? 'Featured project' : 'Web project' }}</span>
            <span class="project-mark" aria-hidden="true">↗</span>
          </div>
          <h3 class="proj-title">{{ project.title }}</h3>
          <p class="proj-desc">{{ project.desc }}</p>
          <div class="proj-tags" aria-label="Technologies">
            <span v-for="tag in project.tags" :key="tag" class="proj-tag">{{ tag }}</span>
          </div>
          <a
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="proj-link"
            :aria-label="`Visit ${project.title} live demo (opens in a new tab)`"
          >
            View live demo
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4.5 10h11m-4.5-4.5L15.5 10 11 14.5" stroke="currentColor" stroke-width="1.4" />
            </svg>
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const projects = reactive([
  {
    title: 'Bundle builder App',
    desc: 'An interactive multi-step Bundle Builder that allows users to create customized product bundles through a guided selection process. Built with React, Redux Toolkit, and Tailwind CSS, featuring dynamic product selection, centralized state management, and a real-time review panel.',
    tags: ['React 19 + Vite', 'Redux Toolkit ', 'Tailwind ', 'lucide-react for icons'],
    link: 'https://bundlebuilder-drab.vercel.app/',
  },
  {
    title: 'E-Commerce App',
    desc: 'Dynamic e-commerce web application with cart management, product browsing, and real-time state management using Pinia.',
    tags: ['Vue 3', 'Pinia', 'Vuetify', 'Axios', 'REST API'],
    link: 'https://e-commerce-8821b.web.app/',
  },
  {
    title: 'Restaurant System',
    desc: 'Full auth system with location management, menu categories, user profiles and dynamic data management via JSON server.',
    tags: ['Vue 3', 'Vuelidate', 'Vuetify', 'REST API'],
    link: 'https://restaurant-system-f289b.web.app/',
  },
  {
    title: 'Movies App',
    desc: 'Movie discovery application fetching rich media data from a public REST API with a clean, responsive UI.',
    tags: ['Vue 2', 'REST API', 'Axios'],
    link: 'https://movies-7e7af.web.app/',
  },
  {
    title: 'GitHub Repo Finder',
    desc: 'GitHub integration tool that fetches and displays all public repositories by username using the GitHub REST API.',
    tags: ['Vue 3', 'GitHub API'],
    link: 'https://get-repo-31fcb.web.app/',
  },
  {
    title: 'Weather App',
    desc: 'Real-time weather information lookup for any location powered by a weather REST API with clean data visualization.',
    tags: ['Vue 3', 'REST API', 'Axios'],
    link: 'https://weather-1d634.web.app/',
  },
  {
    title: 'Bakery Website',
    desc: 'Fully responsive bakery business website with product showcase and feature-rich UI built with Bootstrap Vue.',
    tags: ['Vue 3', 'Bootstrap Vue'],
    link: 'https://bakery-site-2944f.web.app/',
  },
  {
    title: 'Intense Gym',
    desc: 'Gym landing page with modern UI, service highlights and smooth user experience built with vanilla web technologies.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    link: 'https://5aled1801.github.io/Gym/',
  },
  {
    title: 'Yummy Restaurant',
    desc: 'A restaurant showcase website featuring services, menu highlights, and engaging visual design.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    link: 'https://5aled1801.github.io/Yummy/',
  },
  {
    title: 'To-Do List',
    desc: 'Clean task management app to organize and track to-dos with persistent state and reactive Vue 3 UI.',
    tags: ['Vue 3'],
    link: 'https://todolist-c7c25.web.app/',
  },
])

function getScreenshotUrl(url) {
  return `https://image.thum.io/get/width/1200/crop/800/noanimate/${url}`
}

function tiltCard(event) {
  if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const card = event.currentTarget
  const bounds = card.getBoundingClientRect()
  const relativeX = (event.clientX - bounds.left) / bounds.width - 0.5
  const relativeY = (event.clientY - bounds.top) / bounds.height - 0.5
  card.style.setProperty('--tilt-x', `${relativeY * -3}deg`)
  card.style.setProperty('--tilt-y', `${relativeX * 3}deg`)
  card.style.setProperty('--glow-x', `${(relativeX + 0.5) * 100}%`)
  card.style.setProperty('--glow-y', `${(relativeY + 0.5) * 100}%`)
}

function resetCard(event) {
  event.currentTarget.style.setProperty('--tilt-x', '0deg')
  event.currentTarget.style.setProperty('--tilt-y', '0deg')
}
</script>

<style scoped>
.projects-intro {
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 1.5rem;
  color: var(--text-soft);
  font-size: 0.82rem;
}

.projects-intro span {
  flex: 0 0 auto;
  color: var(--gold);
  font-size: 0.6rem;
  letter-spacing: 0.14em;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.1rem;
}

.project-card {
  position: relative;
  display: flex;
  min-width: 0;
  flex-direction: column;
  padding: clamp(1.2rem, 3vw, 2rem);
  overflow: hidden;
  border: 1px solid rgba(201, 168, 76, 0.13);
  background:
    radial-gradient(ellipse at var(--glow-x, 50%) var(--glow-y, 0%), rgba(201, 168, 76, 0.075), transparent 55%),
    linear-gradient(145deg, #11110f, #090908 80%);
  transform: perspective(1100px) rotateX(var(--tilt-x)) rotateY(var(--tilt-y));
  transform-style: preserve-3d;
  transition:
    border-color 300ms ease,
    background-color 300ms ease,
    transform 220ms ease-out;
}

.project-card:hover {
  border-color: rgba(201, 168, 76, 0.42);
}

.project-card.featured {
  grid-column: span 1;
}

.project-art {
  position: relative;
  display: flex;
  min-height: 200px;
  align-items: flex-end;
  justify-content: space-between;
  margin: -1px -1px 1.5rem;
  padding: 1rem;
  overflow: hidden;
  border: 1px solid rgba(201, 168, 76, 0.11);
  background:
    radial-gradient(ellipse at 68% 42%, rgba(201, 168, 76, 0.19), transparent 28%),
    linear-gradient(120deg, #15140f, #090908 64%);
}

.project-screenshot {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}

.project-card.featured .project-art {
  min-height: 250px;
}

.project-art::after {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(5, 5, 5, 0.04) 35%, rgba(5, 5, 5, 0.72)),
    linear-gradient(130deg, transparent 40%, rgba(255, 255, 255, 0.035), transparent 70%);
  content: "";
  pointer-events: none;
}

.art-orbit {
  position: absolute;
  top: 50%;
  left: 58%;
  width: 43%;
  aspect-ratio: 1;
  border: 1px solid rgba(201, 168, 76, 0.38);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 35px rgba(201, 168, 76, 0.08);
}

.art-orbit::before,
.art-orbit::after {
  position: absolute;
  inset: 13%;
  border: 1px solid rgba(201, 168, 76, 0.21);
  border-radius: 50%;
  content: "";
}

.art-orbit::after {
  inset: 28%;
  background: radial-gradient(circle at 34% 30%, #e8cf84, #80632a 24%, #12110e 70%);
  box-shadow: 0 0 26px rgba(201, 168, 76, 0.12);
}

.art-arch {
  position: absolute;
  top: 50%;
  left: 58%;
  width: 61%;
  aspect-ratio: 1.7;
  border: 1px solid rgba(234, 209, 141, 0.14);
  border-radius: 50%;
  transform: translate(-50%, -50%) rotate(-24deg);
}

.art-glow {
  position: absolute;
  top: 50%;
  left: 58%;
  width: 24%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: rgba(201, 168, 76, 0.08);
  filter: blur(26px);
  transform: translate(-50%, -50%);
}

.art-index {
  z-index: 1;
  color: rgba(234, 209, 141, 0.83);
  font-family: var(--font-display);
  font-size: 1rem;
}

.art-caption {
  z-index: 1;
  color: var(--muted);
  font-size: 0.52rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.art-caption span {
  padding-inline: 0.3rem;
  color: var(--gold);
}

.project-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.7rem;
  color: var(--gold);
  font-size: 0.59rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.project-mark {
  color: rgba(201, 168, 76, 0.6);
  font-size: 0.9rem;
}

.proj-title {
  margin-bottom: 0.6rem;
  color: var(--text);
  font-family: var(--font-display);
  font-size: clamp(1.12rem, 2.2vw, 1.45rem);
  font-weight: 500;
  line-height: 1.4;
}

.proj-desc {
  flex: 1;
  margin-bottom: 1.3rem;
  color: var(--text-soft);
  font-size: 0.8rem;
  font-weight: 300;
  line-height: 1.8;
}

.proj-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.3rem;
}

.proj-tag {
  max-width: 100%;
  padding: 0.28rem 0.5rem;
  border: 1px solid rgba(201, 168, 76, 0.15);
  color: rgba(234, 209, 141, 0.75);
  font-size: 0.57rem;
  letter-spacing: 0.045em;
  overflow-wrap: anywhere;
}

.proj-link {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  gap: 0.6rem;
  color: var(--text);
  font-size: 0.65rem;
  letter-spacing: 0.12em;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 220ms ease, gap 220ms var(--ease-cinema);
}

.proj-link svg {
  width: 1rem;
  height: 1rem;
  transition: transform 220ms ease;
}

.proj-link:hover {
  gap: 0.85rem;
  color: var(--gold-light);
}

.proj-link:hover svg {
  transform: translateX(2px);
}

@media (max-width: 700px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-card.featured {
    grid-column: auto;
  }

  .project-art,
  .project-card.featured .project-art {
    min-height: 190px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .project-card {
    transform: none !important;
  }
}
</style>
