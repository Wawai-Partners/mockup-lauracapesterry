# Component & page map

This inventory mirrors the prototype so each page/section ports 1:1 to Astro. Page modules live in
`js/<name>.jsx`; each registers `window.__pages[pageKey]` and is mounted by `renderSite(pageKey)`
from the matching `<name>.html`.

## Navigation model (from `chrome.jsx` — move to `src/data/nav.ts`)
Top bar: **Home · About · How I Help · Podcast · Blog · Resources · Start Here (CTA)**.
Three groups have mega-menu dropdowns:

- **About** → About Laura · Awards & Certifications · Client Reviews · Giving Back · Why BeLocal
- **How I Help** → Brand Awareness · Community Connections · Marketing Strategy & Leadership ·
  Education & Inspiration
- **Podcast** → Be Locally Loved · The Unbridled Creative
- **Resources** → Ask Laura · Books · Courses · Frameworks · Guides · Strategic Partners · Videos ·
  Workshops

`TOP_FOR_PAGE` maps each pageKey to its active top item — preserve it for active-nav highlighting.

## Footer model (from `chrome.jsx` Footer)
- **Instagram strip** (`assets/moments/*`) linking to IG.
- **Three columns:** Short Links · Brand/logo + social row · Newsletter form *(GHL target)*.
- **"More About Laura"** explore band (overflow About links).
- **Bottom:** copyright (© 2026 Laura Capes Terry, MBA · Grayson Media LLC).
Social links: Facebook, Instagram, LinkedIn, Podcast, Book-a-call (Calendly *(GHL target)*).

## Pages
| HTML | pageKey | js module | Top-nav group |
|---|---|---|---|
| index.html | index | home.jsx | Home |
| start-here.html | starthere | start-here.jsx | Start Here |
| about.html | about | about.jsx | About |
| reviews.html | reviews | reviews.jsx | About |
| awards.html | awards | awards.jsx | About |
| giving-back.html | givingback | giving-back.jsx | About |
| laura-story.html | laurastory | laura-story.jsx | About |
| press.html | press | press.jsx | About |
| speaking-writing.html | speaking | speaking-writing.jsx | About |
| why-belocal.html | whybelocal | why-belocal.jsx | About |
| services.html | services | services.jsx | How I Help |
| belocal.html | belocal | belocal.jsx (+ belocal-checklist.jsx) | How I Help |
| brand-awareness.html | brandawareness | brand-awareness.jsx | How I Help |
| community-connections.html | community | community-connections.jsx | How I Help |
| marketing-strategy.html | marketingstrategy | marketing-strategy.jsx | How I Help |
| education-inspiration.html | education | education.jsx | How I Help |
| podcast.html | podcast | podcast.jsx | Podcast |
| the-unbridled-creative.html | — | the-unbridled-creative.jsx | Podcast |
| blog.html | blog | blog.jsx (+ blog-data.js) | Blog |
| post.html | post | post.jsx (+ blog-data.js) | Blog |
| resources.html | resources | resources.jsx | Resources |
| ask-laura.html | ask-laura | ask-laura.jsx | Resources *(GHL form)* |
| resources-guides.html | guides | resources-guides.jsx | Resources *(GHL lead-gen)* |
| resources-frameworks.html | frameworks | resources-frameworks.jsx | Resources |
| resources-videos.html | videos | resources-videos.jsx | Resources |
| resources-workshops.html | workshops | resources-workshops.jsx | Resources |
| resources-books.html | books | resources-books.jsx | Resources |
| strategic-partners.html | partners | strategic-partners.jsx | Resources |
| bootcamp.html | bootcamp | bootcamp.jsx | Resources |
| contact.html | — | contact.jsx | — *(GHL form)* |

(Verify the pageKey for any page by reading the `renderSite('…')` call at the bottom of its HTML.)

## Shared data arrays (move to `src/data/` or content collections)
- `MEGA` / `NAV_TOP` / `TOP_FOR_PAGE` — `chrome.jsx` → `nav.ts`.
- Blog posts — `js/blog-data.js` → `src/content/posts/` or `posts.ts`.
- Footer link groups (shortLinks, aboutMore, igPhotos, legal) — `chrome.jsx` Footer → `footer.ts`.
- Any per-page repeating arrays (services, mentors, reviews, podcast episodes, checklist items) —
  lift out of the page module into typed data.

## Reusable section patterns (candidates for `components/sections/`)
SectionHeading/`SectionTitle`, two-column text+image split, FeatureCard grid, hero, newsletter,
platform pills (podcast), review carousel, checklist, mosaic/IG strip, heart divider. Build these
once and reuse with props.
