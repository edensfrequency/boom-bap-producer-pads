# Boom Bap Producer Pads — Web/PWA

Static, dependency-free PWA surface for GitHub Pages.

## Local preview

Serve this directory with any static HTTP server. Do not open `index.html` directly as a `file://` URL if you want service-worker testing.

## GitHub Pages

Deploy the contents of `web/` as the Pages artifact. The app is intentionally relative-path based, so it works under a repository path such as:

`https://edensfrequency.github.io/boom-bap-producer-pads/`

The page currently uses remote Google Fonts. If fully offline operation is required, vendor the fonts locally and update `styles.css`.
