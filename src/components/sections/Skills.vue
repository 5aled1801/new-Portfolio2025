<script setup>
const skills = [
  {
    category: 'Frontend',
    color: '#1da4ff',
    items: [
      { name: 'Vue.js', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'CSS & SCSS', level: 88 },
      { name: 'Vuetify', level: 85 },
    ],
  },
  {
    category: 'Backend',
    color: '#00ffe7',
    items: [
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 78 },
      { name: 'MongoDB', level: 75 },
      { name: 'REST APIs', level: 85 },
    ],
  },
  {
    category: 'Tools & Practices',
    color: '#ff4081',
    items: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Vite', level: 85 },
      { name: 'Performance Optimization', level: 82 },
      { name: 'Responsive Design', level: 92 },
    ],
  },
]
</script>

<template>
  <section id="Skills" class="skills-section py-16">
    <v-container>
      <!-- Section Title -->
      <div class="section-header mb-12">
        <h2 class="section-title">Skills & Expertise</h2>
        <p class="section-subtitle">Technologies and tools I work with</p>
      </div>

      <!-- Skills Grid -->
      <v-row>
        <v-col v-for="skillGroup in skills" :key="skillGroup.category" cols="12" md="4" class="mb-8">
          <div class="skill-group">
            <h3 class="skill-category" :style="{ color: skillGroup.color }">
              {{ skillGroup.category }}
            </h3>

            <div class="skills-list">
              <div v-for="skill in skillGroup.items" :key="skill.name" class="skill-item">
                <div class="skill-header">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-level">{{ skill.level }}%</span>
                </div>

                <div class="progress-bar">
                  <div
                    class="progress-fill"
                    :style="{
                      width: skill.level + '%',
                      backgroundColor: skillGroup.color,
                    }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Additional Skills -->
      <div class="additional-skills mt-12">
        <h3 class="section-subtitle-lg mb-6">Other Proficiencies</h3>

        <div class="badges">
          <v-chip
            v-for="badge in [
              'Web Performance',
              'Accessibility (WCAG)',
              'UI/UX Design',
              'Testing',
              'SEO Optimization',
              'DevOps',
              'Cloud Deployment',
              'Open Source',
            ]"
            :key="badge"
            color="primary"
            variant="outlined"
            class="skill-badge"
          >
            {{ badge }}
          </v-chip>
        </div>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.skills-section {
  background: linear-gradient(
    135deg,
    rgba(29, 164, 255, 0.03) 0%,
    rgba(0, 255, 231, 0.02) 100%
  );
  position: relative;
  overflow: hidden;
}

.skills-section::after {
  content: '';
  position: absolute;
  bottom: -200px;
  left: -200px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(29, 164, 255, 0.1) 0%, transparent 70%);
  border-radius: 50%;
}

.section-header {
  text-align: center;
}

.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  background: linear-gradient(135deg, #1da4ff, #00ffe7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #999;
}

.section-subtitle-lg {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1da4ff;
}

.skill-group {
  background: linear-gradient(135deg, rgba(29, 164, 255, 0.05) 0%, rgba(0, 255, 231, 0.02) 100%);
  border: 1px solid rgba(29, 164, 255, 0.15);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
  height: 100%;
  position: relative;
}

.skill-group:hover {
  border-color: rgba(29, 164, 255, 0.4);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(29, 164, 255, 0.15);
}

.skill-category {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-item {
  animation: slideUp 0.6s ease-out;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.skill-name {
  font-size: 0.95rem;
  font-weight: 600;
  color: #fff;
}

.skill-level {
  font-size: 0.85rem;
  color: #999;
  font-weight: 600;
}

.progress-bar {
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
  position: relative;
}

.progress-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 1s ease-out;
  box-shadow: 0 0 10px currentColor;
}

.additional-skills {
  background: linear-gradient(135deg, rgba(29, 164, 255, 0.05) 0%, rgba(0, 255, 231, 0.02) 100%);
  border: 1px solid rgba(29, 164, 255, 0.15);
  border-radius: 12px;
  padding: 2rem;
}

.badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.skill-badge {
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
}

.skill-badge:hover {
  background: rgba(29, 164, 255, 0.2) !important;
  transform: scale(1.05);
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
  }
}
</style>
