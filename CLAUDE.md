# Laura Capes Terry — project notes

## Frontend target: Astro
This HTML/CSS/JS prototype will be rebuilt in **Astro** (frontend framework). Keep all design work Astro-friendly:

- **Componentize cleanly.** Each page section maps to an Astro component (`.astro`). Keep the current per-section structure (Hero, Feature, Newsletter, Mosaic, etc.) so they port 1:1 to `src/components/*.astro`.
- **Markup is canonical/semantic HTML** so it drops into `.astro` templates with minimal change. Avoid React-only patterns where a static section would do.
- **Styling via `site.css` + design-system tokens** (CSS custom properties). This global CSS + token approach maps directly to Astro global styles / scoped `<style>` blocks. Keep using `var(--*)` tokens, not hard-coded values.
- **Shared chrome** (header `MEGA` nav model, footer) → Astro layout (`src/layouts/*.astro`) + a nav data file.
- **Interactivity** (mega-menu, mobile drawer, search toggle, checklist progress, carousels, tweaks) → Astro islands (`client:load` / `client:visible`) or small vanilla scripts. Keep interactive logic isolated and prop-driven so it becomes an island cleanly.
- **Content/data arrays** (POSTS, MEGA, ITEMS, mentors, etc.) → move to Astro content collections / data files; keep them as plain data separate from markup.
- **Assets** live in `assets/`; in Astro they go under `public/` (or `src/assets/` for processed images).

(Earlier note: a faust.js build was mentioned — superseded by Astro.)

## Brand / design system
Bound design system: **Laura Capes Terry Design System** (teal `#31738f`, Fira Sans headings, Open Sans body). Use its tokens and components; no invented colors/fonts.
