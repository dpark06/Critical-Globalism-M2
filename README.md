# Critical Globalism M2: Walk the Concept

An interactive concept map of racial capitalism for Critical Globalisms (LAS E701-01, RISD, Fall 2026).

The site is plain HTML, CSS, and JavaScript with no build step.

## Run it

Open `website/index.html` in a browser, or serve the folder:

```bash
cd website
python3 -m http.server 8765
```

Then visit http://localhost:8765. Fonts load from Google Fonts, so a connection is needed for the intended look.

## What is in here

- `website/`: the site (`index.html`, `app.js`, `data.js`, `styles.css`, `images/`). Routes use the URL hash: `#/map`, `#/full`, `#/read/<id>`, `#/practice/sort|flip|build`, `#/mastery`.
- `ui-review/`: the UI review inventory and report.

Image credits are in `website/images/CREDITS.txt`.
