<template>
  <section id="projects" class="section-wrapper bg-dark">
    <div class="container section-pad">
      <div class="section-header">
        <span class="section-label reveal">The Work</span>
        <h2 class="section-title reveal reveal-delay-1">Projects</h2>
        <div class="gold-divider reveal reveal-delay-2" />
      </div>

      <div class="projects-grid">
        <article
          v-for="(proj, i) in projects"
          :key="proj.title"
          class="project-card hover-target reveal"
          :class="`reveal-delay-${i % 3}`"
          @click="openLink(proj.link)"
        >
          <div class="card-top">
            <span class="proj-num">{{ String(i + 1).padStart(2, '0') }} ——</span>
            <a :href="proj.link" target="_blank" rel="noopener" class="ext-icon" @click.stop>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>

          <h3 class="proj-title">{{ proj.title }}</h3>
          <p class="proj-desc">{{ proj.desc }}</p>

          <div class="proj-tags">
            <span v-for="tag in proj.tags" :key="tag" class="proj-tag">{{ tag }}</span>
          </div>

          <a :href="proj.link" target="_blank" rel="noopener" class="proj-link" @click.stop>
            Live Demo →
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
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
]

function openLink(url) {
  window.open(url, '_blank', 'noopener')
}
</script>

<style scoped>
.bg-dark { background: var(--dark); }

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 1.25rem;
}

.project-card {
  background: var(--dark-3);
  border: 0.5px solid rgba(201,168,76,0.09);
  padding: 2rem;
  cursor: none;
  position: relative;
  overflow: hidden;
  transition: border-color 0.4s, background 0.4s, transform 0.4s var(--ease-cinema);
  display: flex;
  flex-direction: column;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(201,168,76,0), transparent);
  transition: background 0.4s;
}

.project-card:hover {
  border-color: rgba(201,168,76,0.28);
  background: var(--dark-4);
  transform: translateY(-5px);
}

.project-card:hover::before {
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
}

.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.proj-num {
  font-family: var(--font-display);
  font-size: 0.68rem;
  color: rgba(201,168,76,0.28);
  letter-spacing: 0.18em;
}

.ext-icon {
  color: var(--muted);
  display: flex;
  align-items: center;
  transition: color 0.3s, transform 0.3s;
}
.ext-icon:hover { color: var(--gold); transform: translate(2px, -2px); }

.proj-title {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--text);
  letter-spacing: 0.02em;
}

.proj-desc {
  font-size: 0.83rem;
  color: var(--text-40);
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-weight: 300;
  flex: 1;
}

.proj-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-bottom: 1.5rem;
}

.proj-tag {
  font-size: 0.62rem;
  letter-spacing: 0.12em;
  color: rgba(201,168,76,0.65);
  border: 0.5px solid rgba(201,168,76,0.18);
  padding: 0.2rem 0.65rem;
  text-transform: uppercase;
}

.proj-link {
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  color: var(--gold);
  text-decoration: none;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: gap 0.3s var(--ease-cinema), opacity 0.3s;
  margin-top: auto;
}
.proj-link:hover { gap: 0.75rem; opacity: 0.8; }
</style>
