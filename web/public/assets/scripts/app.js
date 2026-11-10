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

  // header: see-through over the hero, solid once you scroll
  const header = document.getElementById('siteHeader');
  const solid = () => header?.classList.toggle('is-solid', window.scrollY > 24);
  window.addEventListener('scroll', solid, { passive: true });
  solid();

  // the annotated screenshot: a hotspot and its note light together
  const spots = [...document.querySelectorAll('.hotspot')];
  const notes = [...document.querySelectorAll('#tourNotes li')];
  const pick = (i) => {
    spots.forEach((b, j) => b.classList.toggle('is-on', j === i));
    notes.forEach((li, j) => li.classList.toggle('is-on', j === i));
  };
  spots.forEach((b) => b.addEventListener('click', () => pick(Number(b.dataset.spot))));
  notes.forEach((li, i) => li.addEventListener('click', () => pick(i)));
  if (spots.length) pick(0);

  // each tab that has one gets its one-minute episode: a button under the
  // screenshot swaps the picture for the video, loaded only when asked for
  document.querySelectorAll('.mode-panel[data-episode]').forEach((panel) => {
    const n = panel.dataset.episode;
    const frame = panel.querySelector('.window');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'watch-button';
    button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>'
      + '<span>Watch it: ' + panel.dataset.episodeTitle + ' <small>1 min</small></span>';
    frame.after(button);
    button.addEventListener('click', () => {
      const video = document.createElement('video');
      video.controls = true;
      video.playsInline = true;
      video.preload = 'auto';
      video.poster = 'public/assets/video/episodes/ep' + n + '.jpg';
      video.src = 'public/assets/video/episodes/ep' + n + '.mp4';
      frame.replaceChildren(video);
      video.play().catch(() => {});
      button.remove();
    });
  });
  // a video still playing when you switch tabs stops
  document.querySelector('.mode-tabs')?.addEventListener('click', () => {
    document.querySelectorAll('.mode-panel[hidden] video').forEach((v) => v.pause());
  });

  // Version history is generated from the public changelog, including untagged versions.
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
  }
})();
