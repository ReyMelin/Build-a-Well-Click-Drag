# Build a Well — Starter

This repository contains a minimal, semantic, and modular starter for the "Build a Well" game.

What you'll find:

- `index.html` — semantic layout with a game area and a control sidebar.
- `css/style.css` — small responsive stylesheet using CSS variables.
- `js/app.js` — ES module exposing a `Game` class and a minimal interactive example.

Goals

- Keep HTML semantic and accessible.
- Keep JS modular so game logic can be unit tested and expanded.
- Keep CSS responsive and simple to override.

Quick start (serve locally)

Run a simple static server from the repo root (recommended):

```bash
# Python 3
python -m http.server 8000
```

Then open http://localhost:8000 in your browser.

Next steps and ideas

- Replace the placeholder rendering in `js/app.js` with a Canvas or SVG renderer.
- Add a build pipeline (Vite/Parcel) and a test runner for game logic.
- Wire game state to persistent storage or social scoreboards.

License

This starter is unlicensed; add a license that matches your needs.
# Build-a-Well-Click-Drag