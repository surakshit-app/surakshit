# Surakshit website

Two static pages for the Google Play listing, no build step:

- `privacy/` — Privacy Policy
- `delete-account/` — how to delete an account and what happens to the data
- `index.html` — a small landing page linking to both
- `style.css`, `script.js`, `icons.svg`, `icon.png` — shared styling, the contents-list highlight, the icon set and the app icon. Nothing is loaded from other websites.

Preview locally: `python3 -m http.server 8000` in this folder, then open http://localhost:8000

Deploy: push to a GitHub repo named `surakshit-app.github.io` under the `surakshit-app`
organization and turn on Pages (Settings -> Pages -> Deploy from branch -> `main` / root).
The links then are `https://surakshit-app.github.io/privacy/` and
`https://surakshit-app.github.io/delete-account/`.

All links between pages are relative, so the site also works unchanged on a custom domain.

If the app's behaviour changes (what is stored, how long, how deletion works), update these
pages and the app's Terms (`mobile/src/content/terms.ts`) together.
