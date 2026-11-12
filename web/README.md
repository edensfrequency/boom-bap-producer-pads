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
- **What changed lately** lists up to ten recent version entries from the
  public changelog, including versions grouped into one published release.
  `python Tools/UpdateWebChangelog.py` refreshes the static list automatically
  during public sync. It works offline; each row links to its full notes.

## Photos

The hero, Watch, feature and story photos are hotlinked from Unsplash
(free licence), so they need a connection; everything else works offline.

## Local preview

From the private checkout, run `python Tools/ServeLocalPwa.py` and open
`http://127.0.0.1:8765/web/`. Refresh to read the version and ten recent
changes from local Git HEAD. The Download section still links to the
published installer. The server binds to loopback and serves the PWA and
end-user guides.

To preview the published site, serve the public repository root and visit
`/web/`. Use an HTTP server for service-worker testing.

## GitHub Pages

Pages serves the public repository's `main` branch at its root. Its root
`index.html` redirects to `web/`; sync this directory there without flattening it.
The app is intentionally relative-path based, so it works under:

`https://edensfrequency.github.io/boom-bap-producer-pads/web/`

## Current feature copy

The v1.580.0 page adds, per tab, the song work (audio clips, recording,
launching, bar selection, bounce, MIDI songs, music video), the mixer's cue,
timing, Convolution Reverb and insert switching, loop recording with layers,
the four newer keyboard voices, and a "New in v1.580.0" list in place of the
development preview. Screenshots are the reviewed v1.580.0 neutral-demo
images (Tools/TakeScreenshots.ps1, copied from assets/screen-shots).
Cache revision v19 refreshes the PWA.

The page currently uses remote Google Fonts. If fully offline operation is required, vendor the fonts locally and update `styles.css`.
