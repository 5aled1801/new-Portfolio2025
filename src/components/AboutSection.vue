<template>
  <section id="about" class="section-wrapper bg-dark-2">
    <div class="container section-pad">
      <div class="section-header reveal">
        <span class="section-label">The Story</span>
        <h2 class="section-title">About Me</h2>
        <div class="gold-divider" />
      </div>

      <div class="about-grid">
        <div class="about-main">
          <p class="about-index reveal">01 <span>— A little about me</span></p>
          <h3 class="about-sub reveal">
            Thoughtful code.<br />
            <span class="gold-text">Meaningful experiences.</span>
          </h3>
          <p class="about-text reveal">
            I'm a passionate frontend developer specializing in the Vue.js and Nuxt.js
            ecosystem. I take pride in writing clean, scalable, reusable code that
            solves real business problems.
          </p>
          <p class="about-text reveal">
            From building enterprise systems at the Egyptian Army Programming Center
            to developing full-featured web apps at Cairo House Development, I bring
            technical rigor and creative thinking to every project.
          </p>

          <div class="stats-grid">
            <div class="stat-card reveal" v-for="stat in stats" :key="stat.label">
              <span class="stat-num">{{ stat.num }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
          </div>
        </div>

        <aside class="about-aside" aria-label="Personal details">
          <div class="aside-heading reveal">
            <span>At a glance</span>
            <span aria-hidden="true">KH / PROFILE</span>
          </div>
          <dl class="info-list">
            <div v-for="info in infoRows" :key="info.label" class="info-row reveal">
              <dt>{{ info.label }}</dt>
              <dd>
                <a v-if="info.href" :href="info.href">{{ info.value }}</a>
                <span v-else>{{ info.value }}</span>
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { num: '1.5+', label: 'Years Experience' },
  { num: '9+', label: 'Projects Shipped' },
  { num: '2', label: 'Companies' },
  { num: '100%', label: 'Dedication' },
]

const infoRows = [
  { label: 'Full Name', value: 'Khaled Hassan Ahmed' },
  { label: 'Date of Birth', value: 'January 19, 2002' },
  { label: 'Location', value: 'Cairo, Egypt' },
  { label: 'Education', value: 'B.Sc. Computer Science, University of Zagazig' },
  { label: 'Email', value: 'khaled.h.almass@gmail.com', href: 'mailto:khaled.h.almass@gmail.com' },
  { label: 'Phone', value: '(+20) 1284456019', href: 'tel:+201284456019' },
  { label: 'Languages', value: 'Arabic (Fluent) · English (Very Good)' },
]
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.75fr);
  gap: clamp(3rem, 9vw, 8rem);
  align-items: start;
}

.about-index {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  margin-bottom: 1.8rem;
  color: var(--gold);
  font-size: 0.65rem;
  letter-spacing: 0.16em;
}

.about-index span {
  color: var(--muted);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.about-sub {
  margin-bottom: 1.75rem;
  font-family: var(--font-display);
  font-size: clamp(1.65rem, 3.2vw, 2.45rem);
  font-weight: 500;
  line-height: 1.34;
}

.about-text {
  max-width: 39rem;
  margin-bottom: 1.15rem;
  color: var(--text-soft);
  font-size: 0.91rem;
  font-weight: 300;
  line-height: 1.95;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0;
  margin-top: 2.8rem;
  border-top: 1px solid rgba(201, 168, 76, 0.16);
  border-bottom: 1px solid rgba(201, 168, 76, 0.16);
}

.stat-card {
  display: flex;
  min-height: 6rem;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
  padding: 1rem 0.7rem 1rem 0;
}

.stat-num {
  color: var(--gold-light);
  font-family: var(--font-display);
  font-size: clamp(1.3rem, 2.4vw, 2rem);
  line-height: 1;
}

.stat-label {
  color: var(--muted);
  font-size: 0.58rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.about-aside {
  padding: 1.6rem 1.8rem;
  border: 1px solid rgba(201, 168, 76, 0.14);
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.025), rgba(201, 168, 76, 0.018));
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.18);
}

.aside-heading {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 1.1rem;
  border-bottom: 1px solid rgba(201, 168, 76, 0.16);
  color: var(--gold-light);
  font-family: var(--font-display);
  font-size: 0.83rem;
}

.aside-heading span:last-child {
  color: var(--muted);
  font-family: var(--font-body);
  font-size: 0.52rem;
  letter-spacing: 0.14em;
}

.info-list {
  display: grid;
}

.info-row {
  display: grid;
  grid-template-columns: minmax(90px, 0.62fr) minmax(0, 1.38fr);
  gap: 0.75rem;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.055);
}

.info-row:last-child {
  border-bottom: 0;
}

.info-row dt {
  color: var(--muted);
  font-size: 0.6rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.info-row dd {
  color: #d3cec2;
  font-size: 0.77rem;
  font-weight: 300;
  line-height: 1.55;
  overflow-wrap: anywhere;
}

.info-row a {
  text-decoration-color: rgba(201, 168, 76, 0.28);
  text-underline-offset: 3px;
}

.info-row a:hover {
  color: var(--gold-light);
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .about-aside {
    max-width: 680px;
  }
}

@media (max-width: 540px) {
  .stats-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .stat-card:nth-child(odd) {
    border-right: 1px solid rgba(201, 168, 76, 0.12);
  }

  .stat-card:nth-child(even) {
    padding-left: 1rem;
  }

  .about-aside {
    padding: 1.2rem;
  }

  .info-row {
    grid-template-columns: 90px minmax(0, 1fr);
  }
}
</style>
