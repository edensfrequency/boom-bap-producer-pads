(() => {
  const root = document.documentElement;
  const themeButton = document.getElementById('themeToggle');
  const stored = localStorage.getItem('bbpp-theme');
  if (stored) root.dataset.theme = stored;

  themeButton?.addEventListener('click', () => {
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    localStorage.setItem('bbpp-theme', next);
  });

  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const mobileNav = document.getElementById('mobileNav');
  mobileNavToggle?.addEventListener('click', () => {
    const isOpen = !mobileNav.hidden;
    mobileNav.hidden = isOpen;
    mobileNavToggle.setAttribute('aria-expanded', String(!isOpen));
  });
  mobileNav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.hidden = true;
      mobileNavToggle?.setAttribute('aria-expanded', 'false');
    });
  });

  document.querySelectorAll('.pad').forEach((pad) => {
    pad.addEventListener('pointerdown', () => {
      pad.classList.add('active');
      window.setTimeout(() => pad.classList.remove('active'), 130);
    });
  });

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
  }
})();
