<template>
  <section id="contact" class="section-wrapper bg-dark-2">
    <div class="container section-pad">
      <div class="contact-inner">
        <div class="reveal">
          <span class="section-label">The Next Chapter</span>
          <h2 class="contact-big">
            Let's Build<br />
            <span class="gold-text">Something Great</span>
          </h2>
        </div>

        <p class="contact-text reveal reveal-delay-1">
          Have a project in mind? Looking for a dedicated frontend developer?
          I'd love to hear from you and discuss how we can create something remarkable together.
        </p>

        <div class="contact-links reveal reveal-delay-2">
          <a v-for="link in contactLinks" :key="link.label"
            :href="link.href"
            :target="link.external ? '_blank' : undefined"
            rel="noopener"
            class="contact-link hover-target"
          >
            <span class="link-icon">{{ link.icon }}</span>
            {{ link.label }}
          </a>
        </div>

        <div class="reveal reveal-delay-3">
          <a href="mailto:khaled.h.almass@gmail.com" class="btn-gold">
            <span>Send a Message →</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const contactLinks = [
  { icon: '✉', label: 'Email',    href: 'mailto:khaled.h.almass@gmail.com', external: false },
  { icon: '⌥', label: 'GitHub',   href: 'https://github.com/5aled1801', external: true },
  { icon: '◈', label: 'LinkedIn', href: 'https://www.linkedin.com/in/khaled-hassan-2820b4248', external: true },
  { icon: '☏', label: 'Phone',    href: 'tel:+201284456019', external: false },
]
</script>

<style scoped>
.bg-dark-2 { background: var(--dark-2); }

.contact-inner {
  max-width: 680px;
  margin: 0 auto;
  text-align: center;
}

.contact-big {
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 6vw, 5rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: 0.03em;
  margin: 1rem 0 2rem;
}

.gold-text {
  background: linear-gradient(135deg, var(--gold-dark), var(--gold), var(--gold-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contact-text {
  font-size: 0.95rem;
  color: var(--text-60);
  line-height: 1.85;
  margin-bottom: 3rem;
  font-weight: 300;
}

.contact-links {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.75rem 1.5rem;
  border: 0.5px solid rgba(201,168,76,0.18);
  color: rgba(234,226,210,0.65);
  text-decoration: none;
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  transition: all 0.3s var(--ease-cinema);
}

.contact-link:hover {
  border-color: var(--gold);
  color: var(--gold);
  background: rgba(201,168,76,0.05);
  transform: translateY(-2px);
}

.link-icon { font-size: 0.85rem; }
</style>
