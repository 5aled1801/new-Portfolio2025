<template>
  <section id="skills" class="section-wrapper bg-dark">
    <div class="container section-pad">
      <div class="section-header">
        <span class="section-label reveal">The Craft</span>
        <h2 class="section-title reveal reveal-delay-1">Skills &amp; Technologies</h2>
        <div class="gold-divider reveal reveal-delay-2" />
      </div>

      <div class="skills-wrapper">
        <div
          v-for="(cat, ci) in categories"
          :key="cat.name"
          class="skill-category"
          :class="`reveal reveal-delay-${ci}`"
        >
          <div class="cat-label">
            <span>{{ cat.name }}</span>
            <div class="cat-line" />
          </div>
          <div class="tags-wrap">
            <span
              v-for="skill in cat.skills"
              :key="skill"
              class="skill-tag hover-target"
            >{{ skill }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const categories = [
  {
    name: 'Languages & Core',
    skills: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'Sass / SCSS'],
  },
  {
    name: 'Frameworks & Libraries',
    skills: ['Vue.js 2', 'Vue.js 3', 'Nuxt.js', 'Vuex', 'Pinia', 'Vue Router', 'Vuelidate'],
  },
  {
    name: 'UI & Component Libraries',
    skills: ['Vuetify', 'Bootstrap', 'Bootstrap Vue', 'Tailwind CSS'],
  },
  {
    name: 'Tools & Best Practices',
    skills: ['REST API', 'Axios', 'Git', 'GitHub', 'OOP', 'SEO Optimization', 'Vite'],
  },
]
</script>

<style scoped>
.bg-dark { background: var(--dark); }

.skills-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.skill-category {
  margin-bottom: 3rem;
}

.cat-label {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 1.2rem;
}

.cat-label span {
  font-size: 0.62rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--gold);
  white-space: nowrap;
}

.cat-line {
  flex: 1;
  height: 0.5px;
  background: linear-gradient(90deg, rgba(201,168,76,0.3), transparent);
}

.tags-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.skill-tag {
  display: inline-block;
  padding: 0.5rem 1.1rem;
  border: 0.5px solid rgba(201,168,76,0.18);
  background: rgba(201,168,76,0.03);
  font-size: 0.8rem;
  color: var(--text-60);
  letter-spacing: 0.04em;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s, color 0.3s, transform 0.3s;
  cursor: default;
}

.skill-tag::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(201,168,76,0.1), transparent);
  opacity: 0;
  transition: opacity 0.3s;
}

.skill-tag:hover {
  border-color: rgba(201,168,76,0.45);
  color: var(--gold-light);
  transform: translateY(-2px);
}

.skill-tag:hover::before { opacity: 1; }
</style>
