<template>
  <section id="skills" class="section-wrapper bg-dark">
    <div class="container section-pad">
      <div class="section-header reveal">
        <span class="section-label">The Craft</span>
        <h2 class="section-title">Tools of the trade</h2>
        <div class="gold-divider" />
      </div>

      <div class="skills-intro reveal">
        <p>Technologies I use to turn thoughtful ideas into dependable, polished products.</p>
        <span>01 — 05</span>
      </div>

      <div class="skills-grid">
        <article
          v-for="(category, index) in categories"
          :key="category.name"
          class="skill-category reveal"
        >
          <div class="category-topline">
            <span class="category-number">0{{ index + 1 }}</span>
            <span class="category-mark" aria-hidden="true">✳</span>
          </div>
          <h3>{{ category.name }}</h3>
          <div class="tags-wrap">
            <span v-for="skill in category.skills" :key="skill" class="skill-tag">
              {{ skill }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const categories = [
  {
    name: 'Frontend Development',
    skills: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'Sass / SCSS'],
  },
  {
    name: 'Frameworks & Libraries',
    skills: ['Vue.js 2', 'Vue.js 3', 'Nuxt.js', 'React 19', 'Vue Router', 'Vuelidate'],
  },
  {
    name: 'State Management',
    skills: ['Vuex', 'Pinia', 'Redux Toolkit'],
  },
  {
    name: 'Styling & UI',
    skills: ['Vuetify', 'Bootstrap', 'Bootstrap Vue', 'Tailwind CSS'],
  },
  {
    name: 'Tools & APIs',
    skills: ['REST API', 'Axios', 'Git', 'GitHub', 'OOP', 'SEO Optimization', 'Vite'],
  },
]
</script>

<style scoped>
.skills-intro {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
  margin-bottom: 1.2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(201, 168, 76, 0.16);
  color: var(--text-soft);
  font-size: 0.82rem;
}

.skills-intro span {
  flex: 0 0 auto;
  color: var(--muted);
  font-size: 0.62rem;
  letter-spacing: 0.14em;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-left: 1px solid rgba(255, 255, 255, 0.08);
}

.skill-category {
  grid-column: span 2;
  min-height: 230px;
  padding: 1.5rem;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.018), transparent 68%);
  transition: background 250ms ease;
}

.skill-category:nth-last-child(-n + 2) {
  grid-column: span 3;
}

.skill-category:hover {
  background: linear-gradient(145deg, rgba(201, 168, 76, 0.065), transparent 75%);
}

.category-topline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;
}

.category-number {
  color: var(--gold);
  font-size: 0.62rem;
  letter-spacing: 0.15em;
}

.category-mark {
  color: rgba(201, 168, 76, 0.55);
  font-size: 1rem;
  transition: transform 450ms var(--ease-cinema);
}

.skill-category:hover .category-mark {
  transform: rotate(45deg);
}

.skill-category h3 {
  margin-bottom: 1.1rem;
  color: var(--text);
  font-family: var(--font-display);
  font-size: clamp(0.86rem, 1.5vw, 1.05rem);
  font-weight: 500;
}

.tags-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  padding: 0.36rem 0.62rem;
  border: 1px solid rgba(201, 168, 76, 0.15);
  color: var(--text-soft);
  font-size: 0.68rem;
  line-height: 1.45;
  transition: border-color 220ms ease, color 220ms ease, background 220ms ease;
}

.skill-tag:hover {
  border-color: rgba(201, 168, 76, 0.55);
  background: rgba(201, 168, 76, 0.06);
  color: var(--gold-light);
}

@media (max-width: 760px) {
  .skill-category,
  .skill-category:nth-last-child(-n + 2) {
    grid-column: span 3;
    min-height: 200px;
    padding: 1.2rem;
  }

  .skill-category:last-child {
    grid-column: span 6;
  }
}

@media (max-width: 520px) {
  .skills-intro {
    align-items: flex-start;
    font-size: 0.75rem;
  }

  .skills-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .skill-category,
  .skill-category:nth-last-child(-n + 2),
  .skill-category:last-child {
    grid-column: auto;
    min-height: auto;
    padding: 1.25rem;
  }

  .category-topline {
    margin-bottom: 1rem;
  }
}
</style>
