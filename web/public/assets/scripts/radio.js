// Radio is intentionally data-driven. Add owned tracks to /radio/catalog.json
// and set the stream URL when the station host is ready.
(function () {
  const card = document.querySelector('[data-radio-player]');
  if (!card) return;
  const play = card.querySelector('[data-radio-play]');
  const audio = card.querySelector('[data-radio-audio]');
  const status = card.querySelector('[data-radio-status]');
  const title = card.querySelector('[data-radio-title]');
  const detail = card.querySelector('[data-radio-detail]');

  fetch('public/radio/catalog.json').then((response) => response.json()).then((catalog) => {
    const tracks = Array.isArray(catalog.tracks) ? catalog.tracks : [];
    if (!tracks.length) {
      status.textContent = 'Station setup';
      return;
    }
    const first = tracks[0];
    title.textContent = first.title || 'EdensFrequency Radio';
    detail.textContent = `${first.artist || 'EdensFrequency'} · ${first.bpm || ''} BPM${first.key ? ` · ${first.key}` : ''}`;
    if (catalog.streamUrl) {
      audio.src = catalog.streamUrl;
      play.disabled = false;
      status.textContent = 'Stream ready';
      play.addEventListener('click', () => {
        if (audio.paused) { audio.play(); play.textContent = 'Pause stream'; }
        else { audio.pause(); play.textContent = 'Listen live'; }
      });
    } else {
      status.textContent = 'Awaiting stream';
    }
  }).catch(() => { status.textContent = 'Station setup'; });
})();
