<template>
  <section id="experience" class="section-wrapper bg-dark-2">
    <div class="container section-pad">
      <div class="section-header">
        <span class="section-label reveal">The Journey</span>
        <h2 class="section-title reveal reveal-delay-1">Experience</h2>
        <div class="gold-divider reveal reveal-delay-2" />
      </div>

      <div class="timeline">
        <div
          v-for="(job, i) in jobs"
          :key="job.role"
          class="timeline-item reveal"
          :class="`reveal-delay-${i}`"
        >
          <div class="timeline-left">
            <div class="job-date">{{ job.date }}</div>
          </div>

          <div class="timeline-center">
            <div class="dot" />
            <div class="line" v-if="i < jobs.length - 1" />
          </div>

          <div class="timeline-right">
            <div class="job-role">{{ job.role }}</div>
            <div class="job-company">{{ job.company }}</div>
            <ul class="job-points">
              <li v-for="point in job.points" :key="point">{{ point }}</li>
            </ul>
          </div>
        </div>
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
.bg-dark-2 { background: var(--dark-2); }

.timeline {
  max-width: 900px;
  margin: 0 auto;
}

.timeline-item {
  display: grid;
  grid-template-columns: 160px 32px 1fr;
  gap: 0 1.5rem;
  margin-bottom: 3.5rem;
}

.timeline-item:last-child { margin-bottom: 0; }

/* Left — date */
.timeline-left { padding-top: 4px; text-align: right; }

.job-date {
  font-size: 0.7rem;
  color: var(--gold);
  letter-spacing: 0.08em;
  line-height: 1.6;
  font-weight: 300;
}

/* Center — dot + line */
.timeline-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dot {
  width: 10px; height: 10px;
  border-radius: 50%;
  background: var(--gold);
  box-shadow: 0 0 14px rgba(201,168,76,0.5);
  flex-shrink: 0;
  margin-top: 5px;
}

.line {
  flex: 1;
  width: 1px;
  background: linear-gradient(to bottom, rgba(201,168,76,0.4), transparent);
  margin-top: 8px;
}

/* Right — content */
.timeline-right {}

.job-role {
  font-family: var(--font-display);
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  margin-bottom: 0.3rem;
  color: var(--text);
}

.job-company {
  font-size: 0.75rem;
  color: var(--gold);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.job-points {
  list-style: none;
}

.job-points li {
  font-size: 0.87rem;
  color: var(--text-60);
  line-height: 1.8;
  padding-left: 1.2rem;
  position: relative;
  margin-bottom: 0.4rem;
  font-weight: 300;
}

.job-points li::before {
  content: '—';
  position: absolute;
  left: 0;
  color: rgba(201,168,76,0.35);
  font-size: 0.7rem;
}

@media (max-width: 768px) {
  .timeline-item {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
  .timeline-left { text-align: left; }
  .timeline-center { display: none; }
}
</style>
