# devground-labs.github.io

The devground-labs website: https://devground-labs.github.io

Plain static HTML, served by GitHub Pages straight from `main`. There's no build step.

## Layout

- `index.html` is the home page, with one card per app
- `<app>/index.html` is each app's page, with its download button and install steps
- `assets/style.css` holds the shared styles. The colors match the DiskLens app palette.
- `assets/site.js` fills in each app's latest version from the GitHub releases API. It's optional, and the pages work without it.

## Adding an app

1. Copy `disklens/` to `<app>/` and edit the text, the icon and the repo name.
2. Add a card for it in `index.html`.
3. In the app's release workflow, attach a file with a fixed name (like `DiskLens.dmg`) to every release. The download button links to `https://github.com/devground-labs/<app>/releases/latest/download/<File>.dmg`, which always serves the newest release, so the site doesn't need updating for each release.

## Preview locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000.
