<template>
  <section id="contact" class="section-wrapper bg-dark-2">
    <div class="container section-pad">
      <div class="contact-grid">
        <div class="contact-heading reveal">
          <span class="section-label">The Next Chapter</span>
          <h2 class="contact-big">
            Let's make<br />
            <span class="gold-text">something matter.</span>
          </h2>
        </div>

        <div class="contact-content">
          <p class="contact-text reveal">
            Have a project in mind? Looking for a dedicated frontend developer?
            I'd love to hear from you and discuss how we can create something remarkable together.
          </p>

          <a class="contact-email reveal" href="mailto:khaled.h.almass@gmail.com">
            khaled.h.almass@gmail.com
            <span aria-hidden="true">↗</span>
          </a>

          <div class="contact-links reveal">
            <a
              v-for="link in contactLinks"
              :key="link.label"
              :href="link.href"
              :target="link.external ? '_blank' : undefined"
              :rel="link.external ? 'noopener noreferrer' : undefined"
              :download="link.download ? 'Khaled-Hassan-Frontend-Developer-CV.pdf' : undefined"
              class="contact-link"
              :aria-label="link.accessibleLabel || link.label"
            >
              <svg v-if="link.download" class="contact-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M10 2.75v9m0 0 3.5-3.5M10 11.75l-3.5-3.5M4 13.5v3h12v-3" stroke="currentColor" stroke-width="1.4" />
              </svg>
              <span v-else class="contact-icon contact-icon-text" aria-hidden="true">{{ link.icon }}</span>
              {{ link.label }}
              <span v-if="link.external" class="external-mark" aria-hidden="true">↗</span>
            </a>
          </div>

          <a href="mailto:khaled.h.almass@gmail.com" class="btn-gold reveal">
            Send a message
            <svg class="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M3 10h13m-5-5 5 5-5 5" stroke="currentColor" stroke-width="1.4" />
            </svg>
          </a>
        </div>
      </div>

      <div class="contact-bottom reveal">
        <span>Cairo, Egypt</span>
        <span>Good work starts with a conversation.</span>
      </div>
    </div>
  </section>
</template>

<script setup>
const contactLinks = [
  { icon: 'GH', label: 'GitHub', href: 'https://github.com/5aled1801', external: true },
  {
    icon: 'in',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/khaled-hassan-2820b4248',
    external: true,
  },
  {
    icon: '',
    label: 'Download CV',
    href: '/Khaled%20Hassan%20CV.pdf',
    download: true,
    accessibleLabel: "Download Khaled Hassan's CV as a PDF",
  },
  { icon: 'TEL', label: 'Phone', href: 'tel:+201284456019', external: false },
]
</script>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 0.8fr;
  gap: clamp(3rem, 9vw, 8rem);
  align-items: center;
}

.contact-big {
  margin-top: 0.7rem;
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 6.4vw, 5.8rem);
  font-weight: 500;
  letter-spacing: -0.035em;
  line-height: 1.1;
}

.contact-text {
  margin-bottom: 1.5rem;
  color: var(--text-soft);
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.9;
}

.contact-email {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid rgba(201, 168, 76, 0.3);
  color: var(--gold-light);
  font-family: var(--font-display);
  font-size: clamp(0.9rem, 1.6vw, 1.15rem);
  text-decoration: none;
  overflow-wrap: anywhere;
  transition: color 200ms ease;
}

.contact-email:hover {
  color: #fff0c1;
}

.contact-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-block: 1.4rem 1.8rem;
}

.contact-link {
  display: inline-flex;
  min-height: 2.7rem;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 0.8rem;
  border: 1px solid rgba(201, 168, 76, 0.16);
  color: var(--text-soft);
  font-size: 0.65rem;
  letter-spacing: 0.04em;
  text-decoration: none;
  transition: border-color 200ms ease, color 200ms ease, background 200ms ease, transform 200ms ease;
}

.contact-link:hover {
  transform: translateY(-2px);
  border-color: rgba(201, 168, 76, 0.5);
  background: rgba(201, 168, 76, 0.045);
  color: var(--gold-light);
}

.contact-icon {
  width: 1rem;
  height: 1rem;
  flex: 0 0 auto;
  color: var(--gold);
}

.contact-icon-text {
  display: inline-grid;
  place-items: center;
  font-size: 0.54rem;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.external-mark {
  color: var(--muted);
  font-size: 0.65rem;
}

.contact-bottom {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: clamp(4rem, 9vw, 7rem);
  padding-top: 1.1rem;
  border-top: 1px solid rgba(201, 168, 76, 0.16);
  color: var(--muted);
  font-size: 0.63rem;
  letter-spacing: 0.08em;
}

@media (max-width: 760px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-big {
    font-size: clamp(2.75rem, 12vw, 4.7rem);
  }
}

@media (max-width: 500px) {
  .contact-bottom {
    flex-direction: column;
    font-size: 0.58rem;
  }
}
</style>
