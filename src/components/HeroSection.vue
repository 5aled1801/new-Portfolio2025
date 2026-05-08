<template>
  <section id="hero" class="section-wrapper hero">
    <!-- Ambient rings -->
    <div class="hero-rings" aria-hidden="true">
      <div class="ring ring-1" />
      <div class="ring ring-2" />
      <div class="ring ring-3" />
    </div>

    <!-- Floating gold particles -->
    <div class="particles" aria-hidden="true">
      <span v-for="i in 20" :key="i" class="particle" :style="particleStyle(i)" />
    </div>

    <div class="hero-content">
      <p class="hero-label reveal">✦ Available for opportunities</p>

      <h1 class="hero-name reveal reveal-delay-1">
        <span class="name-line">Khaled</span>
        <span class="name-line gold-text">Hassan</span>
      </h1>

      <p class="hero-role reveal reveal-delay-2">
        Frontend Developer
        <span class="role-sep">·</span>
        Vue.js Specialist
      </p>

      <p class="hero-desc reveal reveal-delay-3">
        Crafting high-performance, scalable web experiences
        with Vue.js, Nuxt.js &amp; modern frontend technologies.
        B.Sc. Computer Science · Cairo, Egypt.
      </p>

      <div class="hero-cta reveal reveal-delay-4">
        <a href="#projects" class="btn-gold" @click.prevent="scrollTo('projects')">
          <span>View My Work</span>
        </a>
        <a href="#contact" class="btn-outline" @click.prevent="scrollTo('contact')">Get In Touch</a>
      </div>

      <!-- Code block -->
      <div class="code-block reveal reveal-delay-5">
        <div class="code-dots">
          <span /><span /><span />
        </div>
        <pre class="code-body"><span class="c-kw">const</span> <span class="c-var">developer</span> = {
  <span class="c-key">name</span>:      <span class="c-str">"Khaled Hassan"</span>,
  <span class="c-key">role</span>:      <span class="c-str">"Frontend Developer"</span>,
  <span class="c-key">stack</span>:     [<span class="c-str">"Vue 3"</span>, <span class="c-str">"Nuxt.js"</span>, <span class="c-str">"Pinia"</span>],
  <span class="c-key">available</span>: <span class="c-bool">true</span>
};</pre>
      </div>
    </div>

    <!-- Scroll cue -->
    <div class="scroll-cue reveal reveal-delay-5">
      <span class="scroll-text">Scroll</span>
      <div class="scroll-line" />
    </div>
  </section>
</template>

<script setup>
function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function particleStyle(i) {
  const x = Math.random() * 100
  const y = Math.random() * 100
  const delay = (i * 0.4) % 4
  const dur = 4 + (i % 5)
  const size = 1 + (i % 3)
  return {
    left: x + '%',
    top:  y + '%',
    width: size + 'px',
    height: size + 'px',
    animationDelay: delay + 's',
    animationDuration: dur + 's',
  }
}
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6rem 5% 5rem;
  overflow: hidden;
  position: relative;
  background: var(--dark);
}

/* ─── Ambient rings ─── */
.hero-rings { position: absolute; inset: 0; pointer-events: none; }
.ring {
  position: absolute;
  border: 1px solid rgba(201,168,76,0.06);
  border-radius: 50%;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
}
.ring-1 { width: 500px; height: 500px; animation: rotateSlow 30s linear infinite; }
.ring-2 { width: 750px; height: 750px; animation: rotateSlow 45s linear infinite reverse; }
.ring-3 { width: 1050px; height: 1050px; animation: rotateSlow 60s linear infinite; }

@keyframes rotateSlow {
  from { transform: translate(-50%,-50%) rotate(0deg); }
  to   { transform: translate(-50%,-50%) rotate(360deg); }
}

/* ─── Particles ─── */
.particles { position: absolute; inset: 0; pointer-events: none; }
.particle {
  position: absolute;
  background: var(--gold);
  border-radius: 50%;
  opacity: 0;
  animation: floatParticle linear infinite;
}
@keyframes floatParticle {
  0%   { opacity: 0; transform: translateY(0); }
  20%  { opacity: 0.6; }
  80%  { opacity: 0.2; }
  100% { opacity: 0; transform: translateY(-80px); }
}

/* ─── Content ─── */
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 820px;
}

.hero-label {
  font-size: 0.68rem;
  letter-spacing: 0.45em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 2rem;
}

.hero-name {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 9vw, 8rem);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: 0.04em;
  margin-bottom: 1.25rem;
}

.name-line { display: block; }

.gold-text {
  background: linear-gradient(135deg, var(--gold-dark) 0%, var(--gold) 50%, var(--gold-light) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-role {
  font-size: clamp(0.75rem, 2vw, 0.95rem);
  color: var(--muted);
  letter-spacing: 0.28em;
  text-transform: uppercase;
  margin-bottom: 2rem;
}

.role-sep { color: var(--gold); margin: 0 0.75em; }

.hero-desc {
  max-width: 520px;
  margin: 0 auto 2.5rem;
  font-size: 0.95rem;
  line-height: 1.85;
  color: var(--text-60);
  font-weight: 300;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}

/* ─── Code Block ─── */
.code-block {
  display: inline-block;
  background: rgba(255,255,255,0.02);
  border: 0.5px solid rgba(201,168,76,0.12);
  text-align: left;
  padding: 1.25rem 1.5rem;
  position: relative;
  overflow: hidden;
}

.code-block::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
}

.code-dots {
  display: flex;
  gap: 5px;
  margin-bottom: 0.75rem;
}
.code-dots span {
  display: block;
  width: 7px; height: 7px;
  border-radius: 50%;
  background: rgba(201,168,76,0.2);
}
.code-dots span:first-child { background: #ff5f57; }
.code-dots span:nth-child(2) { background: #febc2e; }
.code-dots span:last-child { background: #28c840; }

.code-body {
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  line-height: 1.7;
  color: var(--text-60);
}

.c-kw   { color: #C792EA; }
.c-var  { color: #82AAFF; }
.c-key  { color: var(--gold); }
.c-str  { color: #C3E88D; }
.c-bool { color: #F78C6C; }

/* ─── Scroll cue ─── */
.scroll-cue {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  z-index: 2;
}

.scroll-text {
  font-size: 0.6rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--muted);
}

.scroll-line {
  width: 1px;
  height: 55px;
  background: linear-gradient(to bottom, transparent, var(--gold), transparent);
  animation: scrollPulse 2.2s ease-in-out infinite;
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.2; }
  50%       { opacity: 1; }
}
</style>
