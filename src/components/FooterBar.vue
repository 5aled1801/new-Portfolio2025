<template>
  <footer class="footer">
    <span class="footer-logo">Khaled Hassan</span>
    <span class="footer-copy">© 2025 · Frontend Developer · Cairo, Egypt</span>
    <div class="footer-links">
      <a href="https://github.com/5aled1801" target="_blank" rel="noopener" class="hover-target">GitHub</a>
      <a href="https://www.linkedin.com/in/khaled-hassan-2820b4248" target="_blank" rel="noopener" class="hover-target">LinkedIn</a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  z-index: 2;
  padding: 2rem 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border-top: 0.5px solid rgba(201,168,76,0.1);
  background: var(--dark);
  flex-wrap: wrap;
}

.footer-logo {
  font-family: var(--font-display);
  font-size: 0.88rem;
  color: var(--gold);
  letter-spacing: 0.1em;
}

.footer-copy {
  font-size: 0.7rem;
  color: var(--muted);
  letter-spacing: 0.1em;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}

.footer-links a {
  font-size: 0.7rem;
  color: var(--muted);
  text-decoration: none;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition: color 0.3s;
}

.footer-links a:hover { color: var(--gold); }
</style>
