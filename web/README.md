# Boom Bap Producer Pads — Web/PWA

The project website: <https://edensfrequency.github.io/boom-bap-producer-pads/>.
One page that introduces the plugin, lets visitors play a 16-pad drum demo
right in the browser, tours the plugin's tabs, and links to the downloads.
It can also be installed like an app (a "PWA") and keeps working offline once
visited.

Static, dependency-free PWA surface for GitHub Pages.

## What's in this folder

| Item | What it is |
|---|---|
| [index.html](index.html) | The page itself: every section's text and layout. |
| [manifest.json](manifest.json) | Tells phones and browsers how to install the site as an app (name, icons, colours). |
| [sw.js](sw.js) | The "service worker": saves the page's files so it opens instantly and works offline. Bump its asset version when files change, or returning visitors keep seeing the old ones. |
| [public/](public/README.md) | Everything the page loads: sounds, images, scripts and styles. |

## Pay what you want

The **Name your price** card (`#get`) is driven by
[public/assets/scripts/store.js](public/assets/scripts/store.js). Its
`STORE_URL` is empty for now, so every amount, $0 included, goes straight to
the latest installer on GitHub (the page reads the latest release's version,
date, installer link and size from the GitHub API, and falls back to the
releases page). Paste a store's product link (Gumroad, Sellfy, Ko-fi...) into
`STORE_URL` and any amount above $0 opens that checkout instead; $0 still
downloads directly.

## The demo, the videos and the release list

- **The pads in the hero** (`pads.js`) play the demo kit, play a swung
  90 BPM beat, and have two before/after switches: Swing (on/off) and Grit
  (a bit-reduced, rolled-off sound). **Connect** plays them from a real MIDI
  controller through Web MIDI (Chrome, Edge); notes 36-51 are pads 1-16.
- **A one-minute video per tab**: `public/assets/video/episodes/epN.mp4`
  are 720p web copies of the promo episodes in `promo/out/` (made with the
  ffmpeg Remotion bundles: `-vf scale=1280:-2 -crf 30 -b:a 96k
  -movflags +faststart`, poster frame at 4 s). Which tab plays which
  episode is the `data-episode` on each `.mode-panel` in `index.html`.
- **What changed lately** lists the last six releases from the GitHub API,
  each described by the first bullet of its notes.

## Photos

The hero, Watch, feature and story photos are hotlinked from Unsplash
(free licence), so they need a connection; everything else works offline.

## Local preview

Serve this directory with any static HTTP server. Do not open `index.html` directly as a `file://` URL if you want service-worker testing.

## GitHub Pages

Deploy the contents of `web/` as the Pages artifact. The app is intentionally relative-path based, so it works under a repository path such as:

`https://edensfrequency.github.io/boom-bap-producer-pads/`

The page currently uses remote Google Fonts. If fully offline operation is required, vendor the fonts locally and update `styles.css`.
