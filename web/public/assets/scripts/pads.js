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
    1:  ['kick-1',    'Kick 1',     null],  2:  ['kick-2',    'Kick 2',   null],
    3:  ['snare-1',   'Snare 1',    null],  4:  ['snare-2',   'Snare 2',  null],
    5:  ['hat-closed','Hat Closed', 'hat'], 6:  ['hat-open',  'Hat Open', 'hat'],
    7:  ['clap',      'Clap',       null],  8:  ['rim',       'Rim',      null],
    9:  ['tom-low',   'Tom Low',    null],  10: ['tom-mid',   'Tom Mid',  null],
    11: ['tom-high',  'Tom High',   null],  12: ['perc-1',    'Perc 1',   null],
    13: ['perc-2',    'Perc 2',     null],  14: ['perc-3',    'Perc 3',   null],
    15: ['crash',     'Crash',      null],  16: ['shaker',    'Shaker',   null]
  };

  // top row first, so pad 1 sits bottom-left like the hardware
  const ORDER = [13, 14, 15, 16, 9, 10, 11, 12, 5, 6, 7, 8, 1, 2, 3, 4];
  const KEYS  = { '1':13,'2':14,'3':15,'4':16, q:9,w:10,e:11,r:12,
                  a:5,s:6,d:7,f:8, z:1,x:2,c:3,v:4 };
  const KEYCAP = { 13:'1',14:'2',15:'3',16:'4', 9:'Q',10:'W',11:'E',12:'R',
                   5:'A',6:'S',7:'D',8:'F', 1:'Z',2:'X',3:'C',4:'V' };
  const BASE = 'public/assets/audio/demo/';
  // Sample filenames are fixed, so a swapped kit reuses the same URLs and
  // every browser that already cached the old ones keeps serving them.
  // Bump this whenever the files in that folder change.
  const KIT_VERSION = '2';

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
    // drawn the way the plugin's PadComponent paints a pad: the mute and
    // solo circles top right, "N: Name" in the middle, the sample's
    // waveform along the bottom
    b.innerHTML = '<i class="pad-ms" aria-hidden="true"><b></b><b></b></i>'
      + '<span class="pad-name">' + n + ': ' + label + '</span>'
      + '<canvas class="pad-wave" aria-hidden="true"></canvas>';
    grid.appendChild(b);
    padEls.set(n, b);
  });

  // ---- the pad being edited (amber outline and waveform, as in the plugin)
  let selectedPad = 1;
  padEls.get(1).classList.add('is-selected');
  function select(n) {
    if (n === selectedPad) return;
    padEls.get(selectedPad)?.classList.remove('is-selected');
    padEls.get(n)?.classList.add('is-selected');
    const before = selectedPad;
    selectedPad = n;
    drawWave(before);
    drawWave(n);
  }

  // ---- waveforms: 32 bars of each sample's peaks, mirrored about the
  // middle, grey (amber on the selected pad) at 45%, like the plugin
  const peaks = new Map();
  function computePeaks(buffer, bars) {
    const out = new Array(bars).fill(0);
    const len = buffer.length, per = Math.max(1, Math.floor(len / bars));
    for (let c = 0; c < buffer.numberOfChannels; c++) {
      const d = buffer.getChannelData(c);
      for (let b = 0; b < bars; b++) {
        let m = 0;
        for (let i = b * per, end = Math.min(len, (b + 1) * per); i < end; i++) m = Math.max(m, Math.abs(d[i]));
        out[b] = Math.max(out[b], m);
      }
    }
    const top = Math.max(...out) || 1;
    return out.map((v) => v / top);
  }
  function drawWave(n) {
    const el = padEls.get(n);
    const canvas = el?.querySelector('.pad-wave');
    const p = peaks.get(KIT[n][0]);
    if (!canvas || !p) return;
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth, h = canvas.clientHeight;
    if (!w || !h) return;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    const g = canvas.getContext('2d');
    g.scale(dpr, dpr);
    g.clearRect(0, 0, w, h);
    g.fillStyle = n === selectedPad ? 'rgba(230, 160, 74, 0.45)' : 'rgba(156, 160, 169, 0.45)';
    const bw = w / p.length, mid = h / 2;
    p.forEach((v, i) => {
      const bh = Math.max(1, v * h);
      g.fillRect(i * bw, mid - bh / 2, Math.max(1, bw - 1), bh);
    });
  }
  function drawAllWaves() { padEls.forEach((_, n) => drawWave(n)); }
  if ('ResizeObserver' in window) new ResizeObserver(drawAllWaves).observe(grid);

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
    buildGrit();
    master.connect(analyser);
    analyser.connect(ctx.destination);
    startMetering();
    return ctx;
  }

  // ---- Grit: the before/after switch. Fewer bits and the top rolled off,
  // roughly what an old 12-bit sampler did to a break. Switched in between
  // the master and the meter, so the meter shows what you hear.
  let gritIn = null, gritOn = false;
  function buildGrit() {
    const shaper = ctx.createWaveShaper();
    const steps = 48, n = 2048, curve = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const x = i / (n - 1) * 2 - 1;
      curve[i] = Math.round(Math.tanh(x * 1.6) * steps) / steps;
    }
    shaper.curve = curve;
    const tone = ctx.createBiquadFilter();
    tone.type = 'lowpass';
    tone.frequency.value = 6500;
    tone.Q.value = 0.5;
    const level = ctx.createGain();
    level.gain.value = 0.9;
    shaper.connect(tone); tone.connect(level); level.connect(analyser);
    gritIn = shaper;
  }
  function setGrit(on) {
    gritOn = on;
    if (!ctx) return;
    master.disconnect();
    master.connect(on ? gritIn : analyser);
  }

  function loadKit() {
    if (loading) return loading;
    setStatus('Loading kit…');
    const ids = [...new Set(Object.values(KIT).map((k) => k[0]))];
    loading = Promise.all(ids.map((id) =>
      fetch(BASE + id + '.wav?v=' + KIT_VERSION)
        .then((r) => { if (!r.ok) throw new Error(r.status); return r.arrayBuffer(); })
        .then((buf) => new Promise((res, rej) => ensureCtx().decodeAudioData(buf, res, rej)))
        .then((audio) => { buffers.set(id, audio); peaks.set(id, computePeaks(audio, 32)); })
        .catch(() => {})
    )).then(() => {
      drawAllWaves();
      setStatus(buffers.size ? 'Editing pad ' + selectedPad + ' (' + KIT[selectedPad][1] + ')'
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
  // a hit: the plugin's 120 ms white flash, then the warm "playing" tint
  // for as long as the sample sounds (two seconds at most)
  function press(el, velocity) {
    if (!el) return;
    el.classList.remove('flash');
    void el.offsetWidth;
    el.classList.add('flash', 'playing');
    clearTimeout(el._flash);
    clearTimeout(el._playing);
    el._flash = setTimeout(() => el.classList.remove('flash'), 120);
    const buf = buffers.get(KIT[Number(el.dataset.pad)][0]);
    el._playing = setTimeout(() => el.classList.remove('playing'), Math.min(2000, buf ? buf.duration * 1000 : 300));
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

  // the line under the pads, as the plugin words it
  function editing(n) {
    setStatus('Editing pad ' + n + ' (' + KIT[n][1] + ')');
  }

  // ---- trigger
  function trigger(n, velocity) {
    const el = padEls.get(n);
    press(el, velocity);
    blinkMidi();
    readout(n, velocity);
    select(n);
    editing(n);
    if (!supported) return;

    ensureCtx();
    if (ctx.state === 'suspended') ctx.resume();
    if (!armed) { armed = true; loadKit(); }

    if (!buffers.get(KIT[n][0])) { pending = { n: n, velocity: velocity }; return; }
    voice(n, velocity);
  }

  function voice(n, velocity, when) {
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
        const t = Math.max(ctx.currentTime, when || 0);
        prev.gain.cancelScheduledValues(t);
        prev.gain.setValueAtTime(prev.gain.value, t);
        prev.gain.linearRampToValueAtTime(0.0001, t + 0.012);
      }
      chokes.set(choke, g);
      src.onended = () => { if (chokes.get(choke) === g) chokes.delete(choke); };
    }
    src.start(when || 0);
  }

  // ---- "Play a beat": a two-bar boom bap groove on the same kit, at 90 BPM
  // with the late 16ths swung, scheduled on the audio clock (a short
  // look-ahead timer) so the swing stays tight. The pads light as it plays.
  // step -> [pad, velocity]; 16 steps a bar, two bars.
  const GROOVE = [
    [[1,120],[5,92]], [], [[5,60]], [[1,78]],
    [[3,118],[5,96]], [], [[5,64]], [[12,70]],
    [[5,90]], [[1,96]], [[2,104],[5,66]], [],
    [[3,122],[6,88]], [], [[5,70]], [[3,44]],
    [[1,120],[5,92]], [], [[5,62]], [],
    [[3,118],[5,96]], [], [[1,82],[5,66]], [[1,100]],
    [[5,90]], [], [[2,108],[5,64]], [[12,64]],
    [[4,124],[7,90],[5,96]], [], [[5,72],[16,70]], [[15,96]]
  ];
  const BPM = 90, LOOKAHEAD = 0.12;
  let SWING = 0.58;
  const beatButton = document.getElementById('heroBeat');
  const ledSeq = document.getElementById('ledSeq');
  let beatTimer = null, nextStep = 0, nextTime = 0;

  function stepLength() { return 60 / BPM / 4; }

  function scheduleBeat() {
    while (nextTime < ctx.currentTime + LOOKAHEAD) {
      const notes = GROOVE[nextStep % GROOVE.length];
      // the off 16ths land late: a pair of 16ths split SWING : 1 - SWING
      const swungTime = nextTime + (nextStep % 2 ? (SWING - 0.5) * 2 * stepLength() : 0);
      notes.forEach(([n, vel]) => {
        voice(n, vel, swungTime);
        const delay = Math.max(0, (swungTime - ctx.currentTime) * 1000);
        setTimeout(() => { press(padEls.get(n), vel); readout(n, vel); blinkMidi(); }, delay);
      });
      if (ledSeq && nextStep % 4 === 0)
        setTimeout(() => { ledSeq.classList.add('lit'); setTimeout(() => ledSeq.classList.remove('lit'), 90); },
                   Math.max(0, (nextTime - ctx.currentTime) * 1000));
      nextStep += 1;
      nextTime += stepLength();
    }
  }

  function stopBeat() {
    if (!beatTimer) return;
    clearInterval(beatTimer);
    beatTimer = null;
    beatButton?.setAttribute('aria-pressed', 'false');
    const label = beatButton?.querySelector('span');
    if (label) label.textContent = 'Play a beat';
  }

  beatButton?.addEventListener('click', () => {
    if (beatTimer) { stopBeat(); return; }
    if (!supported) { setStatus('Your browser cannot play audio here.', 'warn'); return; }
    ensureCtx();
    if (ctx.state === 'suspended') ctx.resume();
    armed = true;
    beatButton.setAttribute('aria-pressed', 'true');
    const label = beatButton.querySelector('span');
    if (label) label.textContent = 'Stop the beat';
    loadKit().then(() => {
      if (beatButton.getAttribute('aria-pressed') !== 'true') return;
      nextStep = 0;
      nextTime = ctx.currentTime + 0.08;
      scheduleBeat();
      beatTimer = setInterval(scheduleBeat, 25);
      setStatus('90 BPM, swung. Play along on top.');
    });
  });
  document.addEventListener('visibilitychange', () => { if (document.hidden) stopBeat(); });

  // ---- the before/after switches
  function wireSwitch(id, onLabel, offLabel, apply) {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener('click', () => {
      const on = el.getAttribute('aria-pressed') !== 'true';
      el.setAttribute('aria-pressed', String(on));
      const label = el.querySelector('b'); // the LED says it in the plugin's toggles; a word only where there is one
      if (label) label.textContent = on ? onLabel : offLabel;
      apply(on);
    });
  }
  wireSwitch('swingSwitch', 'On', 'Off', (on) => {
    SWING = on ? 0.58 : 0.5;
    setStatus(on ? 'Swing on: the off 16ths land late. That’s the knock.' : 'Swing off: dead on the grid. Hear how stiff it gets?');
  });
  wireSwitch('gritSwitch', 'On', 'Off', (on) => {
    if (supported) { ensureCtx(); setGrit(on); }
    setStatus(on ? 'Grit on: fewer bits, the top rolled off. Old-sampler crunch.' : 'Grit off: the clean kit.');
  });

  // ---- a real MIDI controller (Chrome, Edge, Opera). Pads usually send
  // notes 36-51 for pads 1-16; anything else wraps onto the 16 pads.
  const midiButton = document.getElementById('midiSwitch');
  if (midiButton && !navigator.requestMIDIAccess) {
    midiButton.disabled = true;
    midiButton.title = 'This browser cannot talk to MIDI controllers. Try Chrome or Edge.';
    midiButton.querySelector('b').textContent = 'Not here';
  }
  midiButton?.addEventListener('click', () => {
    if (midiButton.getAttribute('aria-pressed') === 'true') return;
    navigator.requestMIDIAccess().then((access) => {
      const listen = () => {
        const names = [];
        access.inputs.forEach((input) => {
          names.push(input.name);
          input.onmidimessage = (m) => {
            const [status, note, vel] = m.data;
            if ((status & 0xf0) !== 0x90 || vel === 0) return;
            const n = ((note - 36) % 16 + 16) % 16 + 1;
            trigger(n, vel);
          };
        });
        midiButton.setAttribute('aria-pressed', String(names.length > 0));
        midiButton.querySelector('b').textContent = names.length ? 'Connected' : 'None found';
        setStatus(names.length ? 'Playing from ' + names.join(', ') + '.' : 'No MIDI controller found. Plug one in and try again.', names.length ? '' : 'warn');
      };
      access.onstatechange = listen;
      listen();
    }).catch(() => setStatus('MIDI access was blocked.', 'warn'));
  });

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
