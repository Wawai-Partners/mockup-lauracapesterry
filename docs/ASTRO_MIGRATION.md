# Astro migration guide

Target: a static-first **Astro** site that renders the prototype's pages and ships JS only for the
few interactive pieces (islands). Keep the design pixel-identical.

## Proposed structure
```
src/
  layouts/
    BaseLayout.astro        ← <head> (token CSS, site.css, FA), Header, <slot/>, Footer
  components/
    Header.astro            ← from chrome.jsx Header (+ MegaMenu island)
    Footer.astro            ← from chrome.jsx Footer
    sections/               ← one .astro per prototype section (Hero, FeatureSplit, …)
    islands/
      MegaMenu.tsx          ← desktop dropdown + mobile drawer + search toggle
      Checklist.tsx         ← BeLocal checklist progress
      Carousel.tsx          ← reviews/podcast carousels
      GhlForm.astro|tsx     ← GoHighLevel form/calendar embed (see GHL doc)
  data/
    nav.ts                  ← MEGA / NAV_TOP / TOP_FOR_PAGE from chrome.jsx
    posts.ts (or content/)  ← from js/blog-data.js
  pages/
    index.astro, about.astro, services.astro, …   ← one per current *.html
  styles/
    site.css                ← copied verbatim, still token-driven
public/
  assets/                   ← copied from prototype assets/
  ds/                       ← copied from _ds/ (tokens, styles.css, fonts, bundle if still needed)
```
Use Astro **content collections** for blog posts and any other repeating content
(`src/content/posts/*.md` or a typed data file). Keep data **separate from markup**.

## Porting rules (per page)
1. Create `src/pages/<page>.astro` using `BaseLayout`.
2. For each section in `js/<page>.jsx`, create/reuse a `src/components/sections/<Name>.astro`.
   Copy the JSX markup, convert `className`→`class`, `{expr}`→Astro `{expr}`, and pass any data as
   props. Most sections are static and convert almost verbatim.
3. Replace design-system React components with their Astro equivalent:
   - Easiest faithful path: render DS components server-side via
     `@astrojs/react` and `client:load` **only** where interactivity is required; for static
     buttons/cards, reproduce the DS component's exact class + markup (read the bundle / its CSS)
     so output HTML matches. Prefer whichever keeps the **rendered HTML identical**.
   - **Buttons:** keep the brand variant names — `primary` (teal), `secondary` (navy),
     `accent` (rose outline), `ghost` (teal text), `onDark`. There is **no `outline` variant** —
     don't reintroduce one.
4. Keep all `site.css` classes; do not rename them while porting (reduces visual diff risk).

## Tokens & styling (unchanged philosophy)
- Link the DS token stylesheets in `BaseLayout` `<head>`, then `site.css`. Style with `var(--*)`.
- Do **not** hardcode colors/fonts/spacing. If you need a value, it already exists as a token.
- Scoped `<style>` in a component is fine **as long as it only uses tokens**.

## Islands — keep them small and prop-driven
- Mark interactive components with `client:visible` (carousels, checklist) or `client:load`
  (header menu, since it's above the fold). Everything else stays zero-JS.
- Move the `useReveal` IntersectionObserver into one global script included by `BaseLayout`
  (it just toggles `.is-in` on `.reveal`).

## Do NOT port
- `js/tweaks-panel.jsx` and `SiteTweaks` in `chrome.jsx` — design-time tooling only.
- The Babel/CDN React bootstrap — Astro handles components/build.
- The browser-compiled `<script type="text/babel">` pattern.

## Verification per page
- Diff against the prototype screenshot: same sections, order, spacing, type, color, copy.
- No hardcoded design values introduced; no console errors; islands hydrate correctly.
- Links/anchors and active-nav state match `TOP_FOR_PAGE`.
