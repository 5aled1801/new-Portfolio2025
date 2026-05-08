<script setup>
const features = [
  {
    icon: 'mdi-lightning-bolt',
    title: 'High Performance',
    description: 'Optimized applications that load fast and run smooth across all devices.',
    color: '#1da4ff',
  },
  {
    icon: 'mdi-palette',
    title: 'Modern Design',
    description: 'Beautiful, intuitive interfaces built with latest design principles.',
    color: '#00ffe7',
  },
  {
    icon: 'mdi-responsive',
    title: 'Fully Responsive',
    description: 'Perfect experience on mobile, tablet, desktop, and everything in between.',
    color: '#ff4081',
  },
  {
    icon: 'mdi-accessibility',
    title: 'Accessible',
    description: 'WCAG compliant applications that everyone can use and enjoy.',
    color: '#1da4ff',
  },
  {
    icon: 'mdi-code-braces',
    title: 'Clean Code',
    description: 'Well-structured, maintainable code following best practices.',
    color: '#00ffe7',
  },
  {
    icon: 'mdi-rocket',
    title: 'Future Ready',
    description: 'Built with modern technologies and scalable architecture.',
    color: '#ff4081',
  },
]

const experience = [
  {
    year: '2025',
    title: 'Senior Developer',
    company: 'Your Company',
    description: 'Leading development initiatives and mentoring junior developers.',
  },
  {
    year: '2024',
    title: 'Full Stack Developer',
    company: 'Previous Company',
    description: 'Developed and maintained multiple production applications.',
  },
  {
    year: '2023',
    title: 'Junior Developer',
    company: 'First Company',
    description: 'Started journey with web development and learned core concepts.',
  },
]
</script>

<template>
  <section id="About" class="about-section py-16">
    <v-container>
      <!-- Section Title -->
      <div class="section-header mb-12">
        <h2 class="section-title">About Me</h2>
        <p class="section-subtitle">Passionate developer crafting digital experiences</p>
      </div>

      <!-- Introduction -->
      <v-row class="mb-16">
        <v-col cols="12" md="6" class="pb-8">
          <div class="about-text">
            <p class="intro-paragraph">
              Hello! I'm a full-stack developer with a passion for creating beautiful, performant web
              applications. With expertise in Vue.js, Node.js, and modern web technologies, I transform
              ideas into reality.
            </p>

            <p class="intro-paragraph">
              I believe in writing clean code, optimizing performance, and creating accessible
              experiences for everyone. Every project is an opportunity to learn something new and push
              boundaries.
            </p>

            <div class="cta-buttons mt-8">
              <v-btn
                color="primary"
                size="large"
                class="text-capitalize"
                prepend-icon="mdi-download"
              >
                Download Resume
              </v-btn>

              <v-btn
                color="primary"
                variant="outlined"
                size="large"
                class="text-capitalize ms-4"
                prepend-icon="mdi-email"
              >
                Get In Touch
              </v-btn>
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="6">
          <div class="about-image">
            <div class="image-placeholder">
              <v-icon size="120" color="#1da4ff">mdi-account-circle</v-icon>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Features Grid -->
      <div class="features-section mb-16">
        <h3 class="section-subtitle-lg mb-8">What I Offer</h3>

        <v-row>
          <v-col v-for="feature in features" :key="feature.title" cols="12" sm="6" md="4" class="mb-6">
            <div class="feature-card">
              <div class="feature-icon" :style="{ color: feature.color }">
                <v-icon size="40">{{ feature.icon }}</v-icon>
              </div>

              <h4 class="feature-title">{{ feature.title }}</h4>
              <p class="feature-description">{{ feature.description }}</p>
            </div>
          </v-col>
        </v-row>
      </div>

      <!-- Experience Timeline -->
      <div class="experience-section">
        <h3 class="section-subtitle-lg mb-8">Experience</h3>

        <div class="timeline">
          <div v-for="(item, index) in experience" :key="item.year" class="timeline-item">
            <div class="timeline-marker" :style="{ animationDelay: `${index * 0.2}s` }"></div>

            <div class="timeline-content">
              <div class="timeline-year">{{ item.year }}</div>
              <h4 class="timeline-title">{{ item.title }}</h4>
              <p class="timeline-company">{{ item.company }}</p>
              <p class="timeline-description">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.about-section {
  background: linear-gradient(135deg, rgba(29, 164, 255, 0.03) 0%, rgba(0, 255, 231, 0.02) 100%);
  position: relative;
  overflow: hidden;
}

.about-section::before {
  content: '';
  position: absolute;
  top: -200px;
  right: -200px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(0, 255, 231, 0.1) 0%, transparent 70%);
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

.about-text {
  position: relative;
}

.intro-paragraph {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #ccc;
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
}

.intro-paragraph:nth-child(2) {
  animation-delay: 0.2s;
}

.cta-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  animation: fadeInUp 0.8s ease-out 0.4s forwards;
  opacity: 0;
}

.about-image {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.8s ease-out 0.2s forwards;
  opacity: 0;
}

.image-placeholder {
  width: 280px;
  height: 280px;
  background: linear-gradient(135deg, rgba(29, 164, 255, 0.15) 0%, rgba(0, 255, 231, 0.1) 100%);
  border: 2px solid rgba(29, 164, 255, 0.3);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.image-placeholder:hover {
  border-color: rgba(29, 164, 255, 0.6);
  box-shadow: 0 0 30px rgba(29, 164, 255, 0.2);
  transform: translateY(-8px);
}

.features-section {
  position: relative;
  z-index: 1;
}

.feature-card {
  background: linear-gradient(135deg, rgba(29, 164, 255, 0.05) 0%, rgba(0, 255, 231, 0.02) 100%);
  border: 1px solid rgba(29, 164, 255, 0.15);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  height: 100%;
}

.feature-card:hover {
  border-color: rgba(29, 164, 255, 0.4);
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(29, 164, 255, 0.15);
}

.feature-icon {
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
}

.feature-card:hover .feature-icon {
  transform: scale(1.1) rotateY(10deg);
}

.feature-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.75rem;
}

.feature-description {
  font-size: 0.95rem;
  color: #999;
  line-height: 1.6;
}

.experience-section {
  background: linear-gradient(135deg, rgba(29, 164, 255, 0.05) 0%, rgba(0, 255, 231, 0.02) 100%);
  border: 1px solid rgba(29, 164, 255, 0.15);
  border-radius: 12px;
  padding: 2rem;
}

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, #1da4ff 0%, transparent 100%);
}

.timeline-item {
  position: relative;
  margin-bottom: 2.5rem;
  animation: slideInLeft 0.6s ease-out forwards;
  opacity: 0;
}

.timeline-marker {
  position: absolute;
  left: -9px;
  top: 0;
  width: 16px;
  height: 16px;
  background: #1da4ff;
  border: 3px solid #000;
  border-radius: 50%;
  animation: pulse 1.5s ease-in-out infinite;
}

.timeline-year {
  font-size: 0.85rem;
  font-weight: 700;
  color: #1da4ff;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.timeline-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  margin-top: 0.25rem;
}

.timeline-company {
  font-size: 0.95rem;
  color: #00ffe7;
  font-weight: 600;
}

.timeline-description {
  font-size: 0.95rem;
  color: #999;
  margin-top: 0.5rem;
  line-height: 1.6;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulse {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(29, 164, 255, 0.7);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(29, 164, 255, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
  }
}

@media (max-width: 768px) {
  .cta-buttons {
    flex-direction: column;
  }

  .cta-buttons .v-btn {
    margin: 0 !important;
    width: 100%;
  }
}
</style>
