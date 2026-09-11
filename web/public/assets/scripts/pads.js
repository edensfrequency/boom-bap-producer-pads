/* Playable 16-pad demo for the hero.
   Same kit and pad layout the plugin ships with, so what you hear here is what
   loads when you open the Demo Kit. Samples are fetched on the first gesture,
   never on page load. */
(() => {
  'use strict';

  // pad number -> [sample id, label]  (matches the plugin's Demo Kit)
  const KIT = {
    1:  ['kick-1',    'KICK 1'],   2:  ['kick-2',    'KICK 2'],
    3:  ['snare-1',   'SNARE 1'],  4:  ['snare-2',   'SNARE 2'],
    5:  ['hat-closed','HAT CL'],   6:  ['hat-open',  'HAT OP'],
    7:  ['clap',      'CLAP'],     8:  ['rim',       'RIM'],
    9:  ['tom-low',   'TOM LO'],   10: ['tom-mid',   'TOM MID'],
    11: ['tom-high',  'TOM HI'],   12: ['perc-1',    'PERC 1'],
    13: ['perc-2',    'PERC 2'],   14: ['perc-3',    'PERC 3'],
    15: ['crash',     'CRASH'],    16: ['shaker',    'SHAKER']
  };

  // top row first, so pad 1 sits bottom-left like the hardware
  const ORDER = [13, 14, 15, 16, 9, 10, 11, 12, 5, 6, 7, 8, 1, 2, 3, 4];
  const KEYS  = { '1':13,'2':14,'3':15,'4':16, q:9,w:10,e:11,r:12,
                  a:5,s:6,d:7,f:8, z:1,x:2,c:3,v:4 };
  const KEYCAP = { 13:'1',14:'2',15:'3',16:'4', 9:'Q',10:'W',11:'E',12:'R',
                   5:'A',6:'S',7:'D',8:'F', 1:'Z',2:'X',3:'C',4:'V' };
  const BASE = 'public/assets/audio/demo/';

  const grid = document.getElementById('padGrid');
  const status = document.getElementById('padStatus');
  if (!grid) return;

  let ctx = null, master = null;
  const buffers = new Map();
  let loading = null;
  let armed = false;

  const supported = typeof (window.AudioContext || window.webkitAudioContext) === 'function';

  // ---- build the grid
  const padEls = new Map();
  ORDER.forEach((n) => {
    const [, label] = KIT[n];
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'pad';
    b.dataset.pad = String(n);
    b.setAttribute('aria-label', label + ', pad ' + n + ', key ' + KEYCAP[n]);
    b.innerHTML = '<em>' + KEYCAP[n] + '</em><span>' + label + '</span>';
    grid.appendChild(b);
    padEls.set(n, b);
  });

  function setStatus(msg, tone) {
    if (!status) return;
    status.textContent = msg;
    status.dataset.tone = tone || '';
  }

  if (!supported) {
    setStatus('Your browser cannot play audio here — the pads still respond.', 'warn');
  }

  // ---- audio
  function ensureCtx() {
    if (ctx) return ctx;
    const AC = window.AudioContext || window.webkitAudioContext;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.9;
    master.connect(ctx.destination);
    return ctx;
  }

  function loadKit() {
    if (loading) return loading;
    setStatus('Loading kit…');
    const ids = [...new Set(Object.values(KIT).map((k) => k[0]))];
    loading = Promise.all(ids.map((id) =>
      fetch(BASE + id + '.wav')
        .then((r) => { if (!r.ok) throw new Error(r.status); return r.arrayBuffer(); })
        .then((buf) => new Promise((res, rej) => ensureCtx().decodeAudioData(buf, res, rej)))
        .then((audio) => buffers.set(id, audio))
        .catch(() => {})
    )).then(() => {
      const ok = buffers.size;
      setStatus(ok ? 'Hit the pads, or use your keyboard.'
                   : 'Kit could not load — the pads still respond.', ok ? '' : 'warn');
    });
    return loading;
  }

  function flash(n) {
    const el = padEls.get(n);
    if (!el) return;
    el.classList.remove('hit');
    void el.offsetWidth;      // restart the animation
    el.classList.add('hit');
  }

  function trigger(n) {
    flash(n);
    if (!supported) return;
    ensureCtx();
    if (ctx.state === 'suspended') ctx.resume();
    if (!armed) { armed = true; loadKit(); }
    const buf = buffers.get(KIT[n][0]);
    if (!buf) return;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const g = ctx.createGain();
    // a touch of level variation so repeated hits don't machine-gun
    g.gain.value = 0.82 + Math.random() * 0.18;
    src.connect(g); g.connect(master);
    src.start(0);
  }

  // ---- input
  grid.addEventListener('pointerdown', (e) => {
    const b = e.target.closest('.pad');
    if (!b) return;
    e.preventDefault();
    trigger(Number(b.dataset.pad));
  });

  grid.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const b = e.target.closest('.pad');
    if (!b) return;
    e.preventDefault();
    trigger(Number(b.dataset.pad));
  });

  document.addEventListener('keydown', (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey || e.repeat) return;
    const t = e.target;
    if (t && (t.isContentEditable || /^(input|textarea|select)$/i.test(t.tagName))) return;
    if (t && t.classList && t.classList.contains('pad')) return;   // handled above
    const n = KEYS[e.key.toLowerCase()];
    if (!n) return;
    e.preventDefault();
    trigger(n);
  });

  // warm the kit once the pads are actually on screen
  if ('IntersectionObserver' in window && supported) {
    const io = new IntersectionObserver((entries) => {
      if (entries.some((en) => en.isIntersecting)) {
        io.disconnect();
        setStatus('Hit the pads, or use your keyboard.');
      }
    }, { threshold: 0.25 });
    io.observe(grid);
  }
})();
