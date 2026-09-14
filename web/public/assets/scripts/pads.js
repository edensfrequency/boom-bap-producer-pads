/* Playable 16-pad demo for the hero.
   Same kit and pad layout the plugin ships with, so what you hear here is what
   loads when you open the Demo Kit. Samples are fetched on the first gesture,
   never on page load.

   Behaviour that matters for it to feel like hardware rather than a web page:
   - velocity comes from WHERE on the pad you hit (top soft, bottom hard)
   - closed hat chokes open hat, the way a real hi-hat channel does
   - the meters are driven by the actual output, not faked with a timer */
(() => {
  'use strict';

  // pad number -> [sample id, label, choke group]
  const KIT = {
    1:  ['kick-1',    'KICK 1',  null],  2:  ['kick-2',    'KICK 2',  null],
    3:  ['snare-1',   'SNARE 1', null],  4:  ['snare-2',   'SNARE 2', null],
    5:  ['hat-closed','HAT CL',  'hat'], 6:  ['hat-open',  'HAT OP',  'hat'],
    7:  ['clap',      'CLAP',    null],  8:  ['rim',       'RIM',     null],
    9:  ['tom-low',   'TOM LO',  null],  10: ['tom-mid',   'TOM MID', null],
    11: ['tom-high',  'TOM HI',  null],  12: ['perc-1',    'PERC 1',  null],
    13: ['perc-2',    'PERC 2',  null],  14: ['perc-3',    'PERC 3',  null],
    15: ['crash',     'CRASH',   null],  16: ['shaker',    'SHAKER',  null]
  };

  // top row first, so pad 1 sits bottom-left like the hardware
  const ORDER = [13, 14, 15, 16, 9, 10, 11, 12, 5, 6, 7, 8, 1, 2, 3, 4];
  const KEYS  = { '1':13,'2':14,'3':15,'4':16, q:9,w:10,e:11,r:12,
                  a:5,s:6,d:7,f:8, z:1,x:2,c:3,v:4 };
  const KEYCAP = { 13:'1',14:'2',15:'3',16:'4', 9:'Q',10:'W',11:'E',12:'R',
                   5:'A',6:'S',7:'D',8:'F', 1:'Z',2:'X',3:'C',4:'V' };
  const BASE = 'public/assets/audio/demo/';

  const grid = document.getElementById('padGrid');
  if (!grid) return;
  const status = document.getElementById('padStatus');
  const lcdPad = document.getElementById('lcdPad');
  const lcdVel = document.getElementById('lcdVel');
  const lcdMeter = document.getElementById('lcdMeter');
  const ledMidi = document.getElementById('ledMidi');
  const outBars = [...document.querySelectorAll('.out-meter b')];

  const supported = typeof (window.AudioContext || window.webkitAudioContext) === 'function';

  let ctx = null, master = null, analyser = null, data = null;
  const buffers = new Map();
  const chokes = new Map();     // group -> currently sounding gain node
  let loading = null, armed = false, metering = false, pending = null;

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

  const setStatus = (msg, tone) => {
    if (!status) return;
    status.textContent = msg;
    status.dataset.tone = tone || '';
  };

  if (!supported) setStatus('Your browser cannot play audio here — the pads still respond.', 'warn');

  // ---- audio graph
  function ensureCtx() {
    if (ctx) return ctx;
    const AC = window.AudioContext || window.webkitAudioContext;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.9;
    analyser = ctx.createAnalyser();
    analyser.fftSize = 256;
    analyser.smoothingTimeConstant = 0.72;
    data = new Uint8Array(analyser.frequencyBinCount);
    master.connect(analyser);
    analyser.connect(ctx.destination);
    startMetering();
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
      setStatus(buffers.size ? 'Hit the pads, or use your keyboard.'
                             : 'Kit could not load — the pads still respond.',
                buffers.size ? '' : 'warn');
    });
    return loading;
  }

  // ---- meters, driven by the real signal
  function meterLoop() {
    if (!analyser) return;
    analyser.getByteFrequencyData(data);
    let sum = 0;
    for (let i = 0; i < data.length; i++) sum += data[i] * data[i];
    const rms = Math.sqrt(sum / data.length) / 255;        // 0..1
    const level = Math.min(1, rms * 2.6);

    if (lcdMeter) lcdMeter.style.width = (level * 100).toFixed(1) + '%';
    const lit = Math.round(level * outBars.length);
    outBars.forEach((b, i) => {
      b.classList.toggle('on', i < lit);
      b.classList.toggle('hot', i < lit && i >= outBars.length - 2);
    });
    requestAnimationFrame(meterLoop);
  }

  function startMetering() {
    if (metering) return;
    metering = true;
    requestAnimationFrame(meterLoop);
  }

  // ---- feel
  function press(el, velocity) {
    if (!el) return;
    el.classList.add('down');
    el.style.setProperty('--v', (0.25 + velocity / 127 * 0.75).toFixed(3));
    setTimeout(() => el.classList.remove('down'), 90);
    setTimeout(() => el.style.setProperty('--v', '0'), 140);
  }

  function blinkMidi() {
    if (!ledMidi) return;
    ledMidi.classList.add('lit');
    setTimeout(() => ledMidi.classList.remove('lit'), 110);
  }

  function readout(n, velocity) {
    if (lcdPad) lcdPad.textContent = KIT[n][1];
    if (lcdVel) lcdVel.textContent = String(velocity).padStart(3, '0');
  }

  // ---- trigger
  function trigger(n, velocity) {
    const el = padEls.get(n);
    press(el, velocity);
    blinkMidi();
    readout(n, velocity);
    if (!supported) return;

    ensureCtx();
    if (ctx.state === 'suspended') ctx.resume();
    if (!armed) { armed = true; loadKit(); }

    if (!buffers.get(KIT[n][0])) { pending = { n: n, velocity: velocity }; return; }
    voice(n, velocity);
  }

  function voice(n, velocity) {
    const [id, , choke] = KIT[n];
    const buf = buffers.get(id);
    if (!buf) return;

    const src = ctx.createBufferSource();
    src.buffer = buf;
    const g = ctx.createGain();
    // velocity curve — squared tracks perceived loudness better than linear
    g.gain.value = Math.pow(velocity / 127, 1.6) * 0.95;
    src.connect(g); g.connect(master);

    if (choke) {
      const prev = chokes.get(choke);
      if (prev) {
        // quick fade rather than an abrupt stop, so it doesn't click
        const t = ctx.currentTime;
        prev.gain.cancelScheduledValues(t);
        prev.gain.setValueAtTime(prev.gain.value, t);
        prev.gain.linearRampToValueAtTime(0.0001, t + 0.012);
      }
      chokes.set(choke, g);
      src.onended = () => { if (chokes.get(choke) === g) chokes.delete(choke); };
    }
    src.start(0);
  }

  if (supported && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      if (!entries.some((en) => en.isIntersecting)) return;
      io.disconnect();
      ensureCtx();
      armed = true;
      loadKit();
    }, { threshold: 0.2 });
    io.observe(grid);
  }

  // velocity from where the pad was struck: top = soft, bottom = hard
  function velocityFromPoint(el, clientY) {
    const r = el.getBoundingClientRect();
    const y = Math.min(1, Math.max(0, (clientY - r.top) / r.height));
    return Math.round(48 + y * 79);          // 48..127
  }

  grid.addEventListener('pointerdown', (e) => {
    const b = e.target.closest('.pad');
    if (!b) return;
    e.preventDefault();
    trigger(Number(b.dataset.pad), velocityFromPoint(b, e.clientY));
  });

  grid.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const b = e.target.closest('.pad');
    if (!b) return;
    e.preventDefault();
    trigger(Number(b.dataset.pad), 104);
  });

  document.addEventListener('keydown', (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey || e.repeat) return;
    const t = e.target;
    if (t && (t.isContentEditable || /^(input|textarea|select)$/i.test(t.tagName))) return;
    if (t && t.classList && t.classList.contains('pad')) return;
    const n = KEYS[e.key.toLowerCase()];
    if (!n) return;
    e.preventDefault();
    trigger(n, 96 + Math.floor(Math.random() * 24));   // a little human variation
  });
})();
