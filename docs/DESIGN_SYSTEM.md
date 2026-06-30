# Design system — how to consume it

The project is bound to the **Laura Capes Terry Design System**, vendored under
`_ds/laura-capes-terry-design-system-1d8d6110-9b0d-4d3a-a0b3-4a251091e329/`.

> The **token files are the single source of truth** for all visual values. Never hardcode a color,
> font, size, radius, or shadow that isn't a token. If a value seems wrong, change the token in the
> design system — not the page that consumes it. (This repo has already been bitten by hardcoded
> values drifting out of sync with the system; tokens prevent that.)

## What to load (and the order)
```html
<link rel="stylesheet" href="…/tokens/fonts.css">
<link rel="stylesheet" href="…/tokens/colors.css">
<link rel="stylesheet" href="…/tokens/typography.css">
<link rel="stylesheet" href="…/tokens/spacing.css">
<link rel="stylesheet" href="…/tokens/base.css">
<link rel="stylesheet" href="…/styles.css">
<!-- then project CSS -->
<link rel="stylesheet" href="/styles/site.css">
```
In Astro, put these in `BaseLayout.astro`'s `<head>` (copy `_ds/` into `public/ds/` and update
paths). If the folder name differs, list `_ds/` and use the one ending in `…1d8d6110…`.

## Token families (reference by name, not value)
- **Color roles:** `--color-primary`, `--color-primary-hover`, `--color-primary-active`,
  `--color-secondary`, `--color-accent`, plus surface/text/border roles
  (`--surface-page`, `--surface-dark`, `--surface-tint`, `--text-heading`, `--text-body`,
  `--border-strong`, …) and the raw brand scale (`--lct-*`). **Always read the live token file** for
  the authoritative list and values before relying on a name.
- **Type:** `--font-heading`, `--font-body`; size scale `--fs-*` (display, h1–h4, body, overline);
  line-height `--lh-*`; tracking `--ls-*`.
- **Spacing:** `--space-*`. **Radii:** `--radius-*`. **Shadow:** `--shadow-*`.
  **Motion:** `--dur-*`, `--ease-*`.

> ⚠️ The bound system's brand values have been revised more than once (typeface and palette have
> both changed). **Do not memorize hexes or font names** — resolve them from the token files at
> build time. That's the whole point of the token layer.

## Components (from `_ds_bundle.js` → `window.LauraCapesTerryDesignSystem_1d8d61`)
- **`Button`** — variants: `primary` (solid teal), `secondary` (solid navy),
  `accent` (rose outline), `ghost` (teal text), `onDark` (for dark fields). Sizes: small / default /
  large. `fullWidth` supported. **No `outline` variant exists** — using one renders unstyled.
- **`Input`** — labeled field with focus ring, helper/error.
- **`Card` / `FeatureCard`**, **`Pill`**, **`SectionHeading`** — see the bundle/source for props.

Compose with these components; don't recreate them from raw HTML. In Astro, either render them via
`@astrojs/react`, or reproduce their exact class+markup so the HTML output matches.

## Icons
Font Awesome 6 (CDN). Brand convention in this project: content/UI icons use **accent rose**
(`var(--color-accent)`); icons on the teal nav bar stay white for contrast; social glyphs use
brand-appropriate colors. Match existing usage — don't invent new icon colors.

## Project-specific patterns built on the system
- **Heart divider** (`.heart-divider`) — two faded hairlines flanking a centered rose heart icon,
  placed under select section titles. Defined in `site.css`, uses `--color-accent` +
  `--border-strong`. Reuse this class; don't re-implement.
- **White/accent CTA buttons** — `variant="accent"` with `style={{ background:'#fff' }}` and a
  leading icon. (The white background is the one intentional inline exception; keep it as the DS
  gains a dedicated variant.)
