# Architecture — current prototype

The prototype is a set of **static HTML pages**, each mounting a single React tree compiled in the
browser by Babel Standalone. There is **no build step** — pages load React + the design-system
bundle + per-page JSX over `<script>` tags. This is intentional for design iteration; Astro
replaces it.

## Page shell (every `*.html` is identical except the page module)
```
<head>
  DS token stylesheets  (_ds/.../tokens/*.css)   ← colors, fonts, type, spacing, base
  DS styles.css         (_ds/.../styles.css)
  site.css              ← project-level layout + chrome styles
  Font Awesome 6 (CDN)
  React + ReactDOM + Babel (pinned, integrity-hashed)
  _ds_bundle.js         ← exports window.LauraCapesTerryDesignSystem_1d8d61
</head>
<body>
  <div id="root"></div>
  js/tweaks-panel.jsx   ← design-time tweak panel (NOT part of the shipped site)
  js/chrome.jsx         ← Header, Footer, App shell, nav model, reveal, toast, renderSite()
  js/blog-data.js       ← shared data (only where needed)
  js/<page>.jsx         ← the page's sections; registers into window.__pages
  window.renderSite('<pageKey>')
  js/page-nav.js        ← misc nav helper
</body>
```

## Key modules
- **`js/chrome.jsx`** — the shared chrome and app spine:
  - `MEGA` / `NAV_TOP` / `MEGA_BY` — the navigation IA (mega-menus: About · How I Help ·
    Resources, plus Podcast, Blog, Start Here). **This is the nav data model** → becomes an Astro
    data file.
  - `Header`, `Footer` — shared chrome → become an Astro layout.
  - `App` + `TOP_FOR_PAGE` — maps each `pageKey` to its active top-nav item.
  - `useReveal()` — IntersectionObserver scroll-in animation (adds `.is-in` to `.reveal`).
  - `toast()` — transient form-submit confirmation.
  - `SiteTweaks` — design-time only; **do not port to production**.
  - `window.renderSite(pageKey)` — mounts `App` with the registered page.
- **`js/<page>.jsx`** — one module per page. Each defines its sections as small local components
  and registers a top-level page component into `window.__pages[pageKey]`. Section components are
  mostly **static, semantic markup** styled by `site.css` classes + tokens → these port almost 1:1
  to `.astro` components.
- **`site.css`** — all project layout/chrome CSS (mega-menu, drawer, footer, cards, hero, dividers,
  etc.), entirely token-driven (`var(--*)`). → becomes Astro global CSS (or split into scoped
  `<style>` blocks per component).
- **`_ds/…`** — vendored design-system snapshot (tokens, `styles.css`, `_ds_bundle.js`,
  brand fonts, assets). **Read-only.**

## Interactivity inventory (these are the only "islands" you need)
| Behavior | Where | Port as |
|---|---|---|
| Mega-menu dropdowns (desktop, flip-on-overflow) | `chrome.jsx` `DropItem`/`MegaItem` | island or vanilla |
| Mobile drawer (hamburger) | `chrome.jsx` | island or vanilla |
| Search toggle | `chrome.jsx` | island or vanilla |
| Scroll reveal | `chrome.jsx` `useReveal` | tiny vanilla script (global) |
| Toast on form submit | `chrome.jsx` | replaced by GHL form behavior |
| BeLocal checklist progress | `js/belocal-checklist.jsx` | island |
| Carousels (reviews/podcast) | page modules | island |
| Tweaks panel | `js/tweaks-panel.jsx` | **drop entirely** in production |

Everything else is static presentational markup.

## Assets
- Brand imagery + logo live in `assets/` (and `assets/moments/`, etc.).
- Design-system fonts are self-hosted under `_ds/.../assets/fonts/` and declared in
  `_ds/.../tokens/fonts.css`.
