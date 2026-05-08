<template>
  <section id="about" class="section-wrapper bg-dark-2">
    <div class="container section-pad">
      <div class="section-header">
        <span class="section-label reveal">The Story</span>
        <h2 class="section-title reveal reveal-delay-1">About Me</h2>
        <div class="gold-divider reveal reveal-delay-2" />
      </div>

      <div class="about-grid">
        <!-- Left -->
        <div class="about-left">
          <h3 class="about-sub reveal">
            A Frontend Developer who crafts<br />
            <span class="gold-text">digital experiences</span>
          </h3>
          <p class="about-text reveal reveal-delay-1">
            I'm a passionate frontend developer specializing in the Vue.js and Nuxt.js
            ecosystem. I take pride in writing clean, scalable, reusable code that
            solves real business problems.
          </p>
          <p class="about-text reveal reveal-delay-2">
            From building enterprise systems at the Egyptian Army Programming Center
            to developing full-featured web apps at Cairo House Development, I bring
            technical rigor and creative thinking to every project.
          </p>

          <div class="stats-grid">
            <div class="stat-card reveal reveal-delay-1" v-for="s in stats" :key="s.label">
              <div class="stat-num">{{ s.num }}</div>
              <div class="stat-label">{{ s.label }}</div>
            </div>
          </div>
        </div>

        <!-- Right -->
        <div class="about-right">
          <div
            v-for="(info, i) in infoRows"
            :key="info.label"
            class="info-row reveal hover-target"
            :class="`reveal-delay-${i}`"
          >
            <span class="info-icon">◈</span>
            <div>
              <div class="info-label">{{ info.label }}</div>
              <div class="info-val">{{ info.value }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { num: '1.5+',   label: 'Years Experience' },
  { num: '9+',   label: 'Projects Shipped' },
  { num: '2',    label: 'Companies' },
  { num: '100%', label: 'Dedication' },
]

const infoRows = [
  { label: 'Full Name',  value: 'Khaled Hassan Ahmed' },
  { label: 'Date of Birth', value: 'January 19, 2002' },
  { label: 'Location',   value: 'Cairo, Egypt' },
  { label: 'Education',  value: 'B.Sc. Computer Science, University of Zagazig' },
  { label: 'Email',      value: 'khaled.h.almass@gmail.com' },
  { label: 'Phone',      value: '(+20) 1284456019' },
  { label: 'Languages',  value: 'Arabic (Fluent) · English (Very Good)' },
]
</script>

<style scoped>
.bg-dark-2 { background: var(--dark-2); }

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
}

.about-sub {
  font-family: var(--font-display);
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  line-height: 1.35;
  margin-bottom: 1.5rem;
}

.gold-text {
  background: linear-gradient(135deg, var(--gold-dark), var(--gold), var(--gold-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-text {
  font-size: 0.93rem;
  color: var(--text-60);
  line-height: 1.9;
  margin-bottom: 1.2rem;
  font-weight: 300;
}

/* ─── Stats ─── */
.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 2.5rem;
}

.stat-card {
  padding: 1.5rem;
  border: 0.5px solid rgba(201,168,76,0.14);
  background: rgba(201,168,76,0.025);
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s, background 0.3s;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
}

.stat-card:hover {
  border-color: rgba(201,168,76,0.3);
  background: rgba(201,168,76,0.05);
}

.stat-num {
  font-family: var(--font-display);
  font-size: 2.4rem;
  color: var(--gold);
  font-weight: 700;
  line-height: 1;
}

.stat-label {
  font-size: 0.68rem;
  color: var(--muted);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-top: 0.4rem;
}

/* ─── Info rows ─── */
.about-right { display: flex; flex-direction: column; gap: 0.75rem; }

.info-row {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border: 0.5px solid rgba(201,168,76,0.08);
  background: rgba(201,168,76,0.018);
  transition: border-color 0.3s, background 0.3s, transform 0.3s;
}

.info-row:hover {
  border-color: rgba(201,168,76,0.28);
  background: rgba(201,168,76,0.04);
  transform: translateX(4px);
}

.info-icon {
  color: var(--gold);
  flex-shrink: 0;
  margin-top: 3px;
  font-size: 0.9rem;
}

.info-label {
  font-size: 0.62rem;
  color: var(--muted);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin-bottom: 0.2rem;
}

.info-val {
  font-size: 0.88rem;
  color: var(--text);
  font-weight: 300;
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style>
