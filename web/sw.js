const CACHE_NAME = 'bbpp-site-v4';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './public/assets/styles/styles.css',
  './public/assets/scripts/app.js',
  './public/assets/scripts/pads.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      // `cache.add` reads through the HTTP cache, which can bake a stale copy
      // into the shell; `cache: 'reload'` forces it to come from the network.
      // Also cache per-URL rather than addAll(), so one bad path can't reject
      // the whole install the way it used to.
      .then((cache) => Promise.all(
        APP_SHELL.map((u) => cache.add(new Request(u, { cache: 'reload' })).catch(() => {}))
      ))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Network-first for same-origin GETs. The old cache-first handler meant a
// visitor kept whatever they first downloaded until CACHE_NAME changed, so
// shipped updates never reached anyone. Cache is now the offline fallback.
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  if (new URL(req.url).origin !== self.location.origin) return;

  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(req, copy)).catch(() => {});
        }
        return res;
      })
      .catch(() => caches.match(req).then((cached) => cached || caches.match('./index.html')))
  );
});
