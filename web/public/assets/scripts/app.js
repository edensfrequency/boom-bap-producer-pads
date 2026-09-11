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



  // mode viewer: roving-tabindex tablist
  const tablist = document.querySelector('.mode-tabs');
  if (tablist) {
    const tabs = [...tablist.querySelectorAll('.mode-tab')];
    const show = (tab) => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.classList.toggle('is-on', on);
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        const panel = document.getElementById(t.getAttribute('aria-controls'));
        if (panel) { panel.hidden = !on; panel.classList.toggle('is-on', on); }
      });
    };
    tablist.addEventListener('click', (e) => {
      const t = e.target.closest('.mode-tab');
      if (t) show(t);
    });
    tablist.addEventListener('keydown', (e) => {
      const i = tabs.indexOf(document.activeElement);
      if (i < 0) return;
      let n = null;
      if (e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
      if (e.key === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
      if (e.key === 'Home') n = tabs[0];
      if (e.key === 'End') n = tabs[tabs.length - 1];
      if (!n) return;
      e.preventDefault();
      show(n);
      n.focus();
    });
  }

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
  }
})();
