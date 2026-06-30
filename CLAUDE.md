# Laura Capes Terry — Claude Code guardrails

This repo is the **design prototype** for the Laura Capes Terry marketing site (multi-page
HTML + React-via-Babel + a bound design system). It is being rebuilt in **Astro**, and will be
**integrated with GoHighLevel (GHL)** for forms, scheduling, and CRM.

> **Golden rule: the prototype is the visual source of truth. Do not redesign it.**
> Your job is to port it faithfully to Astro, not to "improve" layout, color, type, or copy.
> If you think something should change visually, propose it — don't apply it.

## Read these first (in order)
1. `docs/ARCHITECTURE.md` — how the current prototype is built (shell, chrome, page modules).
2. `docs/ASTRO_MIGRATION.md` — target Astro structure and the rules for porting.
3. `docs/DESIGN_SYSTEM.md` — how to consume the bound design system (tokens + components).
4. `docs/COMPONENT_MAP.md` — every page, its sections, the nav/footer model, and data arrays.
5. `docs/GHL_INTEGRATION.md` — how GoHighLevel plugs in without disturbing the design.

## Hard constraints (do not violate)
- **No invented design values.** Colors, fonts, spacing, radii, shadows come **only** from the
  design-system token files (`var(--*)`). Never hardcode a hex, px font-size, or font family that
  isn't already a token. The token files are the single source of truth — if a value looks wrong,
  fix the token in the design system, not the consuming code.
- **Do not edit anything under `_ds/`** — it is a bundled snapshot of the design system. The live
  source is a separate project; treat `_ds/` as read-only vendored output.
- **Preserve all copy verbatim.** Headlines, body, CTA labels, eyebrows — port text exactly.
- **Preserve structure.** Section order, layout, and component composition stay 1:1 unless the
  design system explicitly requires otherwise.
- **Keep using the design-system components** (`Button`, `Input`, `Card`, …). Don't restyle raw
  HTML to imitate them.

## What "done" means for a ported page
- Renders identically to the prototype (same sections, order, spacing, colors, type, copy).
- Uses tokens + DS components, no hardcoded design values, no console errors.
- Interactive bits are isolated as Astro islands or small vanilla scripts (see migration doc).
- Any GHL-backed form/calendar is wired through the integration layer, not inline secrets.
