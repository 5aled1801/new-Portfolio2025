<template>
  <footer class="footer">
    <a class="footer-logo" href="#hero" aria-label="Khaled Hassan, back to top">Khaled Hassan</a>
    <span class="footer-copy">© {{ currentYear }} · Frontend Developer · Cairo, Egypt</span>
    <div class="footer-links">
      <a href="https://github.com/5aled1801" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
      <a href="https://www.linkedin.com/in/khaled-hassan-2820b4248" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  position: relative;
  z-index: 2;
  display: flex;
  min-height: 82px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem 2rem;
  padding: 1.3rem clamp(1.2rem, 5vw, 4.5rem);
  border-top: 1px solid rgba(201, 168, 76, 0.14);
  background: var(--dark);
}

.footer-logo {
  color: var(--gold-light);
  font-family: var(--font-display);
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  text-decoration: none;
}

.footer-copy {
  color: var(--muted);
  font-size: 0.62rem;
  letter-spacing: 0.06em;
}

.footer-links {
  display: flex;
  gap: 1.2rem;
}

.footer-links a {
  color: var(--text-soft);
  font-size: 0.61rem;
  letter-spacing: 0.1em;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 200ms ease;
}

.footer-links a:hover {
  color: var(--gold-light);
}

.footer-links span {
  color: var(--gold);
}

@media (max-width: 600px) {
  .footer {
    justify-content: flex-start;
  }

  .footer-copy {
    flex-basis: 100%;
    order: 2;
  }

  .footer-links {
    margin-left: auto;
  }
}
</style>
