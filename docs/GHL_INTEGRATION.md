# GoHighLevel (GHL) integration plan

The site will integrate with **GoHighLevel** for lead capture, scheduling, and CRM. This doc sets
guardrails so the integration is added **without disturbing the design**. Treat it as forward
planning — don't wire GHL until the Astro port exists and credentials are provided.

> Principle: GHL is the **backend for forms/booking**, not a styling authority. The site's look
> stays governed by the design system. Where GHL must render its own UI, wrap and constrain it so
> it visually matches; where we own the UI, post data to GHL via API/webhook.

## Integration points (already marked in COMPONENT_MAP.md)
| Surface | Current behavior | GHL target |
|---|---|---|
| Footer newsletter form | demo `toast()` | GHL contact/opt-in (tag: newsletter) |
| Contact page form | demo | GHL form → contact + notification |
| Ask Laura form | demo | GHL form → contact (tag: ask-laura) |
| Resources/Guides lead-gen | demo | GHL form → deliver lead magnet (tag per asset) |
| "Schedule a Discovery Call" / Calendly links | external Calendly | GHL **calendar** embed |
| Book-a-call / phone CTAs | Calendly/`CALENDLY` const | GHL calendar or click-to-call |

When migrating, replace the `CALENDLY` constant in the nav/footer/CTAs with a single configurable
booking URL (see env below) so there's one place to switch Calendly → GHL.

## Two integration styles — prefer (A), fall back to (B)
**A. Own-the-UI, post to GHL (preferred for forms).**
- Keep the design-system `Input` + `Button` form markup exactly as designed.
- On submit, POST to a GHL **inbound webhook** or the GHL Forms/Contacts API from a server endpoint
  (Astro API route / serverless function), then show the existing success state (toast/section).
- Benefits: zero visual compromise, full token styling, no third-party CSS leaking in.
- Add spam protection (honeypot + GHL-side validation) and a hidden source/tag field per surface.

**B. Embed GHL's own form/calendar (when A isn't feasible, e.g. native scheduling).**
- Use GHL's embed (iframe or their embed script) inside a wrapper component
  (`components/islands/GhlForm.astro` / `GhlCalendar.astro`).
- Constrain it: fixed max-width matching the design, `loading="lazy"`, and a token-styled container
  (heading, spacing, border/radius from `--radius-*`/`--border-strong`). Do **not** let GHL's
  embed restyle the surrounding page.
- Hydrate as an island (`client:visible`) so it doesn't block static rendering.

## Configuration & secrets (never hardcode)
Put all GHL specifics in environment variables (`.env`, surfaced via `import.meta.env`):
```
PUBLIC_GHL_BOOKING_URL=     # calendar embed/booking link (safe to expose)
PUBLIC_GHL_FORM_ID_NEWSLETTER=
PUBLIC_GHL_FORM_ID_CONTACT=
PUBLIC_GHL_FORM_ID_ASKLAURA=
GHL_API_KEY=                # server-only — NEVER prefix PUBLIC_, never ship to client
GHL_LOCATION_ID=
GHL_WEBHOOK_URL=            # server-only inbound webhook for style-A submissions
```
- `PUBLIC_*` = safe for the browser. Anything secret (API key, webhook) must be **server-only** and
  used only from an Astro endpoint / serverless function.
- Centralize in `src/lib/ghl.ts` (a thin client + a typed `submitLead({form, fields, tags})`).
  Components call that helper; they never touch keys directly.

## Tracking / pixels
If GHL tracking or a chat widget is required, load it via a single configurable snippet in
`BaseLayout` gated behind an env flag and (ideally) consent — not sprinkled per page.

## Guardrails checklist for any GHL change
- [ ] No secret in client code or committed `.env`; secrets are server-only.
- [ ] Design unchanged — DS components/tokens still drive all visible styling.
- [ ] One source of truth for booking URL + form IDs (env), no scattered literals.
- [ ] Each form sends a **source/tag** so leads are attributable in GHL.
- [ ] Embeds are lazy, width-constrained, and island-hydrated; they don't shift layout.
- [ ] Success/error states reuse the existing toast/section patterns.
