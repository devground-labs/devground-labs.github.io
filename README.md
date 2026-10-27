# devground-labs.github.io

The devground-labs website: https://devgroundlabs.in

Plain static HTML, served by GitHub Pages straight from `main`. There's no build step.

The custom domain is set in `CNAME`. DNS for `devgroundlabs.in` is managed at Hostinger: four `A` and four `AAAA` records for `@` point to GitHub Pages, and `www` is a `CNAME` to `devground-labs.github.io`.

## Layout

- `index.html` is the home page, with one card per app
- `<app>/index.html` is each app's page, with its download button and install steps
- `assets/style.css` holds the shared styles. The colors match the DiskLens app palette.
- `assets/site.js` fills in each app's latest version from the GitHub releases API, and adds the scroll fade-ins and the header hairline. It's optional, and the pages work without it.
- `assets/logo.svg` is the devground-labs mark (also used as `favicon.svg`)
- `404.html` is served by GitHub Pages for unknown paths

The DiskLens window on the home page and the DiskLens page is built in HTML/CSS (`.mock` in `style.css`) with illustrative numbers. Swap it for a real screenshot whenever you like.

## Adding an app

1. Copy `disklens/` to `<app>/` and edit the text, the icon and the repo name.
2. Add a card for it in `index.html`.
3. Add the page to `sitemap.xml` and `llms.txt`, and update its JSON-LD (`SoftwareApplication`, `FAQPage`) in the page `<head>`. Keep the FAQ JSON-LD in sync with the visible FAQ.
4. In the app's release workflow, attach a file with a fixed name (like `DiskLens.dmg`) to every release. The download button links to `https://github.com/devground-labs/<app>/releases/latest/download/<File>.dmg`, which always serves the newest release, so the site doesn't need updating for each release.

## Preview locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000.
