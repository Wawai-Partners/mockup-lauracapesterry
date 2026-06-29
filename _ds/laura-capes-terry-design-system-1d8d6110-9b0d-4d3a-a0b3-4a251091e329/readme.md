# Laura Capes Terry — Design System

A brand & UI design system for **Laura Capes Terry, MBA** — a local marketing and media expert, fractional CMO, AI consultant, and podcaster based in **Georgetown, Texas**.

> **Be seen. Be trusted. Be chosen.**

Laura helps local business owners build magnetic brands people love and trust by blending **modern tools with timeless wisdom**. Her work centers on guiding faith-filled entrepreneurs to harness AI with clarity and purpose — without losing the human heart of their marketing.

This system distills her live brand into reusable tokens, components, specimen cards, and a full marketing-website UI kit so any agent can design on-brand artifacts (slides, mocks, prototypes) or production UI.

---

## Sources

This system was reverse-engineered from Laura's live website, captured as an offline mirror:

- **GitHub:** [`Wawai-Partners/lauracapesterry`](https://github.com/Wawai-Partners/lauracapesterry) — subtree `existing-website/LauraCapesTerry/` (an HTTrack mirror of `www.lauracapesterry.com`, a Kajabi "Encore" theme storefront).

Explore that repo for the original page HTML, copy, and imagery if you want to deepen or correct anything here. Colors, type, button styles, and copy below were lifted directly from the site's inline styles and content. Brand photography and graphics were copied into `assets/`.

---

## The brand at a glance

| | |
|---|---|
| **Who** | Laura Capes Terry, MBA — Fractional CMO + Media Consultant |
| **Where** | Georgetown, Texas |
| **Tagline** | Be seen. Be trusted. Be chosen. |
| **Promise** | Magnetic brands built by blending modern tools with timeless wisdom |
| **Sub-brands** | **BeLocal Georgetown** (award-winning local media co.), **BeLocally Loved** (podcast), **The Unbridled Creative** (podcast) |
| **Themes** | Clarity in an AI-driven world · Authentic, human marketing · All in with AI |
| **CTAs** | "Work With Laura" · "Schedule a Discovery Call" |

---

## CONTENT FUNDAMENTALS — how the brand writes

**Voice:** Warm, wise, and steadying — an experienced mentor who has "seen it all" across 30 years and wants to take the overwhelm off your plate. Confident but never cold; faith-informed but never preachy. The reader is a capable local business owner who is stretched thin.

**Point of view:** Speaks directly to **"you"** (the business owner) and refers to Laura in the **third person** ("Laura guides…", "After 30 years…"). First-person "I" is rare. This keeps the focus on the client's transformation, not Laura's résumé.

**Casing:** Sentence case for headings and body. The tagline uses three short declarative sentences with periods ("Be seen. Be trusted. Be chosen."). Eyebrows/labels are UPPERCASE and letter-spaced.

**Sentence rhythm:** Short, punchy promise lines paired with longer, reassuring explanatory sentences. Frequent **em-dashes** for warmth and asides ("AI doesn't replace heart — it amplifies it."). Light use of *italics* and **bold** to emphasize the emotional turn in a paragraph.

**Signature phrases & framing:**
- "Be seen, be trusted, and be chosen."
- "Blending modern tools with timeless wisdom."
- "AI doesn't replace heart — it amplifies it."
- "You don't have to figure it out alone."
- "Meet you at the decision table… one strategic step at a time."
- Names a relatable pain ("drowning in distraction and overwhelm") then offers calm, expert guidance.

**Faith & values:** Faith is present and explicit ("faith-filled entrepreneurs", "wisdom, faith, and modern tools") but framed as a source of grounding and integrity, not exclusion.

**Emoji:** **Not used.** The brand reads as polished and professional. Do not add emoji. (A checkmark "✓" appears only as a small functional UI affordance, never decoratively.)

**Vibe in one line:** Calm expertise for the overwhelmed local entrepreneur — human-first, AI-fluent, faith-grounded.

---

## VISUAL FOUNDATIONS

**Color.** The palette pairs a confident **Deep Navy (`#1F4A6B`, `--lct-navy`)** with a **Signature Teal (`#3D7E9A`, `--lct-teal-500`)**. Navy carries the wordmark, the secondary button, and dark fields; teal is the primary action color and links. **Sky Blue (`#8CC7D6`)** and its faint tints (`#e9f3f6`, `#cfe7ee`) provide gentle banded backgrounds. A single warm accent, **Rose Berry (`#C06478`, `--lct-rose`)**, powers the accent button and the heart motif. Neutrals are **warm**: an off-white page (`#F7F8F9`), warm cream (`#F7F1E7`), soft linen (`#EDE4D6`), and golden sand (`#E6D6B3`) for warm highlights and rules. Text is **near-black charcoal (`#1A1A1A`)**, never pure black; muted body sits around `#3A3D40`. Avoid purple gradients entirely — off-brand.

**Type.** Self-hosted in `assets/fonts/`: **Montserrat** is the brand sans — **Bold** for modern, confident headlines (in charcoal `#3A3A3A`), SemiBold for subheads/navigation (lightly tracked), and Regular for body (1.65 line-height). **Brittany Signature** is a handwritten accent script used sparingly for warm personal touches in rose. Eyebrows are Montserrated) and body copy (Regular, 1.65 line-height), and **Brittany Signature** as an accent script used sparingly for warm personal touches (sign-offs, single-word emphasis) in rose. Eyebrows are Montserrat **SemiBold, uppercase, 0.16em tracking, teal**.

**Spacing & layout.** Roomy and unhurried. Sections breathe with **~90px vertical padding** on desktop; content sits in a **1260px max-width** container with 40px gutters. Two-column splits (text + image) are the workhorse layout. Generous whitespace signals calm and premium care.

**Backgrounds.** Solid color fields — alternating **cream → white → soft sky tint → deep teal** to create rhythm. No noise, no grain, no heavy gradients. Occasional full-width teal bands carry short thematic phrases. Imagery is photographic, not illustrative.

**Imagery.** Warm, bright, **natural-light** professional photography of Laura — in her office, on stage, candid in local Georgetown spots. Teal/blue wardrobe accents tie portraits to the palette. Images use soft **14px rounded corners** and a gentle shadow; a signature treatment offsets a portrait over a solid teal block behind it. Color grade is warm and optimistic.

**Borders, cards & shadows.** Cards are white with a **1px warm hairline border (`#e6e0d6`)**, **14px radius**, and a **soft, low, navy-tinted shadow** (`0 8px 24px rgba(20,59,90,.10)`). Nothing is harsh or high-contrast. Buttons and inputs use a smaller **4px radius**. Pills/labels are fully rounded.

**Animation.** Restrained and gentle. Cards lift ~4px with a softened shadow on hover; buttons darken (teal-500 → teal-600) and nudge **1px down** on press. Transitions are short (140–240ms) on an ease-out curve (`cubic-bezier(0.25,0.46,0.45,0.94)`). No bounces, no parallax, no looping decorative motion.

**Hover / press states.** Hover = darken (solid) or tint-fill (outline/ghost) + subtle lift on cards. Press = 1px downward translate. Links underline on hover. Focused inputs get a teal border plus a 3px soft sky focus ring.

**Transparency & blur.** Used sparingly — the soft sky tint band is effectively the teal accent at low opacity over white. No glassmorphism or backdrop blur.

**Corner radii summary.** Buttons/inputs/images `4px` · medium `8px` · cards `14px` · pills `999px`.

---

## ICONOGRAPHY

The brand is **photography-led and nearly icon-free** — it leans on portraits, type, and color rather than an icon system. Observed usage:

- **Brand mark:** a simple **teal upward double-chevron "growth" mark** (`assets/favicon-growth-logo.png`) — used as the favicon and pairs with the "Laura Capes Terry" Fira Sans wordmark to form the logo lockup. The full horizontal logo with tagline from the live site was **not present in the captured mirror** (see Caveats).
- **Social icons:** the live site uses **Font Awesome 5** (`fab fa-facebook-f`, `fab fa-instagram`) in the header, rendered as teal round/inline icons. For new work, **link Font Awesome 5/6 from CDN** and use the brand teal — this matches the source. (No icon font binaries were bundled here.)
- **Decorative icons / emoji:** essentially none. Do **not** introduce an icon-heavy UI or emoji; it would read off-brand. When a small affordance is needed (a checkmark, an arrow), keep it minimal and teal, e.g. a `→` after "Learn more".
- **Bullets:** simple teal dots, not iconographic glyphs.

**Recommendation for new artifacts:** prefer real photography from `assets/` and confident type. If you must use UI icons (e.g. in an app mock), use **Font Awesome** or a clean line set (Lucide/Heroicons) at a light-to-regular weight, always in teal or ink — and flag it as an extension of the source.

---

## Index — what's in this system

**Root**
- `styles.css` — the single entry point consumers link. `@import`s everything below.
- `tokens/` — `fonts.css` (self-hosted @font-face), `colors.css`, `typography.css`, `spacing.css`, `base.css`.
- `assets/` — brand photography, the growth-mark logo, theme pill graphics, and `fonts/` (Cormorant Garamond, Montserrat, Brittany Signature).
- `SKILL.md` — Agent-Skills-compatible entry for using this system in Claude Code.

**Components** (`components/…`) — React primitives, mounted from the compiled bundle as `window.LauraCapesTerryDesignSystem_1d8d61.<Name>`:
- `buttons/Button` — brand CTA (primary teal · secondary navy · accent rose outline · ghost · onDark; 3 sizes).
- `content/Pill` — rounded teal label / eyebrow tag.
- `content/SectionHeading` — overline + heading + lead block.
- `content/FeatureCard` — soft card with optional image, hover lift (light · tint · dark).
- `forms/Input` — labeled text field with teal focus ring + helper/error.

**UI kit** (`ui_kits/website/`) — `index.html` is an interactive recreation of Laura's marketing site (Home · Services · Blog) composed from the components above.

**Specimen cards** (`guidelines/*.html`) — small swatches/specimens that populate the Design System tab: Colors (brand core, warm neutrals, accent & ink), Type (headings, subheads & body, overline, accent script), Spacing (scale, radii & shadows), Brand (logo, tagline, elements, photography).

---

## Using this system

- **Colors / type / spacing:** reference the CSS custom properties (`var(--color-primary)`, `var(--font-heading)`, `var(--space-6)`, …). Don't hard-code hexes.
- **Components:** in an HTML file, link `styles.css`, load `_ds_bundle.js`, then `const { Button } = window.LauraCapesTerryDesignSystem_1d8d61`.
- **Throwaway artifacts (slides/mocks):** copy assets out of `assets/` and write static HTML using the tokens.
- **Tone:** write like Laura — warm, direct, "you"-focused, no emoji. Lead with the client's transformation.
