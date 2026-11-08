<template>
  <section id="experience" class="section-wrapper bg-dark-2">
    <div class="container section-pad">
      <div class="section-header reveal">
        <span class="section-label">The Journey</span>
        <h2 class="section-title">Experience</h2>
        <div class="gold-divider" />
      </div>

      <div class="timeline">
        <article v-for="(job, index) in jobs" :key="job.role" class="timeline-item reveal">
          <div class="timeline-date">
            <span>{{ job.date }}</span>
            <span class="timeline-number">0{{ index + 1 }}</span>
          </div>
          <div class="timeline-rail" aria-hidden="true">
            <span class="timeline-dot" />
            <span v-if="index < jobs.length - 1" class="timeline-line" />
          </div>
          <div class="timeline-content">
            <p class="job-company">{{ job.company }}</p>
            <h3 class="job-role">{{ job.role }}</h3>
            <ul class="job-points">
              <li v-for="point in job.points" :key="point">{{ point }}</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const jobs = [
  {
    date: 'Oct 2024 — Dec 2025',
    role: 'Frontend Developer — Vue.js',
    company: 'Egyptian Army Programming Center · Cairo',
    points: [
      'Developed a system for interview committees, enabling members to submit opinions via Vue.js',
      'Mentored teammates to improve code quality and development skills',
      'Debugged errors, resolved issues, and performed routine performance optimizations',
      'Implemented on-site SEO strategies and wrote high-quality, scalable, reusable code',
    ],
  },
  {
    date: 'Apr 2024 — Sep 2024',
    role: 'Frontend Developer — Vue.js & Nuxt.js',
    company: 'Cairo House Development (CHD) · Cairo',
    points: [
      'Built websites, mobile apps and web applications following development best practices',
      'Collaborated with back-end developers to integrate UI components with APIs and databases',
      'Gathered and refined specifications based on technical requirements and UX design',
      'Stayed current with emerging technologies and industry trends',
    ],
  },
  {
    date: 'Aug 2022 — Sep 2022',
    role: 'Frontend Internship — Vue.js',
    company: 'ITI · Mansoura',
    points: [
      'Built websites and web applications using Vue.js with development best practices',
      'Debugged, optimized performance, and practiced SEO fundamentals',
    ],
  },
]
</script>

<style scoped>
.timeline {
  max-width: 980px;
  margin-inline: auto;
}

.timeline-item {
  display: grid;
  grid-template-columns: minmax(130px, 0.32fr) 24px minmax(0, 1fr);
  gap: 0 2rem;
  min-height: 200px;
}

.timeline-date {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  padding-top: 0.25rem;
  color: var(--gold-light);
  font-size: 0.67rem;
  letter-spacing: 0.045em;
  line-height: 1.65;
}

.timeline-number {
  color: rgba(201, 168, 76, 0.42);
  font-size: 0.58rem;
  letter-spacing: 0.12em;
}

.timeline-rail {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timeline-dot {
  z-index: 1;
  width: 9px;
  height: 9px;
  flex: 0 0 auto;
  margin-top: 0.42rem;
  border: 1px solid var(--gold-light);
  border-radius: 50%;
  background: var(--dark-2);
  box-shadow: 0 0 16px rgba(201, 168, 76, 0.35);
}

.timeline-line {
  width: 1px;
  height: 100%;
  margin-top: 0.65rem;
  background: linear-gradient(rgba(201, 168, 76, 0.36), rgba(201, 168, 76, 0.04));
}

.timeline-content {
  padding: 0 0 3.3rem 0.5rem;
}

.job-company {
  margin-bottom: 0.55rem;
  color: var(--gold);
  font-size: 0.64rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.job-role {
  margin-bottom: 1.2rem;
  color: var(--text);
  font-family: var(--font-display);
  font-size: clamp(1.1rem, 2vw, 1.42rem);
  font-weight: 500;
  line-height: 1.4;
}

.job-points {
  display: grid;
  gap: 0.5rem;
  list-style: none;
}

.job-points li {
  position: relative;
  padding-left: 1.2rem;
  color: var(--text-soft);
  font-size: 0.84rem;
  font-weight: 300;
  line-height: 1.8;
}

.job-points li::before {
  position: absolute;
  top: 0;
  left: 0;
  color: var(--gold);
  content: "—";
}

@media (max-width: 680px) {
  .timeline-item {
    grid-template-columns: 18px minmax(0, 1fr);
    gap: 0 1rem;
  }

  .timeline-date {
    grid-column: 2;
    justify-content: flex-start;
    gap: 1rem;
    padding-top: 0;
  }

  .timeline-rail {
    grid-column: 1;
    grid-row: 1 / span 2;
  }

  .timeline-dot {
    margin-top: 0.3rem;
  }

  .timeline-content {
    grid-column: 2;
    padding: 0.7rem 0 2.5rem;
  }
}
</style>
