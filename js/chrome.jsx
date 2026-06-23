/* Laura Capes Terry — site chrome: Header, Footer, layout helpers,
   tweak wiring, scroll reveal, toast, and page mount.
   Loaded on every page after the DS bundle + tweaks-panel.jsx. */

const DS = window.LauraCapesTerryDesignSystem_1d8d61;
const CALENDLY = 'https://calendly.com/laura-terry/discovery-call';

/* ---------------- Navigation model ----------------
   New IA per the June 2026 redesign: three mega-menus
   (About · How I Help · Resources) + a Start Here CTA. */
const MEGA = [
  {
    label: 'About',
    href: 'about.html',
    items: [
      { label: 'About Laura', href: 'about.html' },
      { label: 'Awards & Certifications', href: 'about.html#awards' },
      { label: 'Client Reviews', href: 'reviews.html' },
      { label: 'Giving Back', kids: [
        { label: 'ROCK Ride on Center for Kids', href: 'about.html' },
        { label: 'The Horseshoe Club', href: 'about.html' },
        { label: 'Downtown Georgetown Association', href: 'about.html' },
        { label: 'Georgetown Chamber of Commerce', href: 'about.html' },
        { label: 'Professional Women of Williamson County', href: 'about.html' },
        { label: 'N2 Gives - Fighting Human Trafficking', href: 'about.html' },
        { label: 'BNI GTX - Business by Referral', href: 'about.html' },
        { label: 'East View High School Patriots Band', href: 'about.html' },
      ] },
      { label: 'Laura’s Story', href: 'about.html#story' },
      { label: 'In the Media / Press', href: 'about.html' },
      { label: 'Speaking & Writing', href: 'about.html' },
      { label: 'Video: StoryBrand Guide', href: 'https://drive.google.com/file/d/16UoXlUX214Gdj5NkHwORo9feKo90q3gI/view?usp=drive_link' },
      { label: 'Video: Meet Our Publisher', href: 'https://drive.google.com/file/d/1NE92p4MA9_qbFrXTbq7CZQlpG_GQDHIP/view?usp=drive_link' },
      { label: 'Why Businesses Trust Laura', href: 'about.html#trust' },
      { label: 'Why Laura Publishes BeLocal', href: 'belocal.html' },
    ],
  },
  {
    label: 'How I Help',
    href: 'services.html',
    items: [
      { label: 'Brand Awareness', kids: [
        { label: 'BeLocal Georgetown', href: 'belocal.html', kids: [
          { label: 'Print', href: 'belocal.html' },
          { label: 'Digital', href: 'belocal.html' },
          { label: 'Mobile', href: 'belocal.html' },
          { label: 'Social', href: 'belocal.html' },
          { label: 'Events', href: 'belocal.html' },
        ] },
        { label: 'Let’s Go Locals Directory & Stories', href: 'services.html' },
        { label: 'Social Media Marketing', href: 'services.html' },
      ] },
      { label: 'Community Connections', kids: [
        { label: 'BeLocal Georgetown', href: 'belocal.html' },
        { label: 'BNI GTX - Business by Referral', href: 'services.html' },
        { label: 'BeLocal B2B', href: 'belocal.html' },
        { label: 'Let’s Go Locals Events', href: 'services.html' },
      ] },
      { label: 'Marketing Strategy & Leadership', kids: [
        { label: 'Private Coaching', href: 'services.html' },
        { label: 'Group Coaching', href: 'services.html' },
        { label: 'AI Consulting', href: 'services.html' },
        { label: 'Fractional CMO', href: 'services.html' },
        { label: 'Public Speaking', href: 'services.html' },
        { label: 'Workshops', href: 'services.html' },
      ] },
      { label: 'Education & Inspiration', kids: [
        { label: 'Podcasting', kids: [
          { label: 'Be Locally Loved Podcast', href: 'podcast.html', kids: [
            { label: 'Apple', href: 'https://podcasts.apple.com/us/podcast/be-locally-loved/id1877734623' },
            { label: 'Spotify', href: 'https://open.spotify.com/show/0Udm3hNFpfE5xTQ8pX1j76' },
            { label: 'YouTube', href: 'https://www.youtube.com/@BeLocallyLoved' },
          ] },
          { label: 'The Unbridled Creative Podcast', href: 'https://theunbridledcreative.com/', kids: [
            { label: 'Apple', href: 'https://podcasts.apple.com/us/podcast/the-unbridled-creative-podcast/id1851005801' },
            { label: 'Spotify', href: 'https://open.spotify.com/show/46yq7TDKXnGsc5ZSjMgEto' },
            { label: 'YouTube', href: 'https://www.youtube.com/channel/UCmataK4SiM0uZ44Kxm0N6QA' },
          ] },
        ] },
      ] },
    ],
  },
  {
    label: 'Resources',
    href: 'resources.html',
    items: [
      { label: 'Ask Laura', kids: [
        { label: 'AI Coach (coming soon)', href: 'ask-laura.html' },
        { label: 'FAQs', href: 'ask-laura.html', kids: [
          { label: 'Be Seen (Visibility)', href: 'ask-laura.html' },
          { label: 'Be Trusted (Credibility)', href: 'ask-laura.html' },
          { label: 'Be Chosen (Preferred)', href: 'ask-laura.html' },
          { label: 'Community Connections (Local Influence)', href: 'ask-laura.html' },
          { label: 'Strategy & Leadership (Executive Thinking)', href: 'ask-laura.html' },
        ] },
        { label: 'BeLocal', kids: [
          { label: 'Website Checklist for BeLocal Sponsors', href: 'belocal-checklist.html' },
          { label: 'Advertising: The Key to Sustainable Business Growth', href: 'https://drive.google.com/file/d/1BlKo7PzZXrSk-no2hq8pWlSnLbcj9zVU/view?usp=drive_link' },
          { label: '5 Steps to Creating a Great Ad', href: 'https://drive.google.com/file/d/1DEwKfFXPQUboTLJb6rlI6DVk1HB-k8nr/view?usp=drive_link' },
        ] },
      ] },
      { label: 'Blog', href: 'blog.html', kids: [
        { label: 'BeLocal', href: 'blog.html' },
        { label: 'Georgetown', href: 'blog.html' },
        { label: 'Local Marketing', href: 'blog.html' },
        { label: 'AI', href: 'blog.html' },
        { label: 'Branding', href: 'blog.html' },
        { label: 'Community Connection', href: 'blog.html' },
        { label: 'Business Growth', href: 'blog.html' },
        { label: 'Visibility', href: 'blog.html' },
        { label: 'Trust Building', href: 'blog.html' },
      ] },
      { label: 'Books', href: 'resources.html#books', kids: [
        { label: 'Rockstar Entrepreneur', href: 'https://www.amazon.com/Rockstar-Entrepreneur-entrepreneurs-change-world/dp/1452837252' },
        { label: 'The Courage to Plant a Seed', href: 'resources.html#books' },
        { label: 'The Courage to Find My Voice (coming soon)', href: 'resources.html#books' },
        { label: 'Be Seen. Be Trusted. Be Chosen. (coming someday)', href: 'resources.html#books' },
      ] },
      { label: 'Courses', href: 'resources.html#courses', kids: [
        { label: 'Marketing Made Smarter Bootcamp', href: 'https://www.lauracapesterry.com/marketing-made-smarter-bootcamp' },
      ] },
      { label: 'Frameworks', href: 'resources.html#frameworks', kids: [
        { label: 'Building Blocks for Marketing Success', href: 'resources.html#frameworks' },
        { label: 'The Proven Path to Marketing Success', href: 'resources.html#frameworks' },
        { label: 'The Trust Funnel', href: 'resources.html#frameworks' },
        { label: 'Circular Viralocity', href: 'resources.html#frameworks' },
        { label: 'Return on Impact (ROI)', href: 'resources.html#frameworks' },
        { label: 'Website Success Framework', href: 'resources.html#frameworks' },
        { label: 'Great Print Ad Framework', href: 'resources.html#frameworks' },
      ] },
      { label: 'Guides', href: 'resources.html#guides', kids: [
        { label: 'The Ultimate ChatGPT Prompt', href: 'https://drive.google.com/file/d/1VgOIwupLGPjjCxyW5NleRn1l1xDzcG1C/view?usp=drive_link' },
        { label: 'Building Better Websites: Checklist', href: 'https://drive.google.com/file/d/1rVWqwn3h2nMXmiMCjAl_nrQLUq5_al9r/view?usp=drive_link' },
        { label: '12 Secrets to Great Ad Design', href: 'https://drive.google.com/file/d/1CBTvm-sDA7-0l5NFOOYaivKdn5dUxUH9/view?usp=drive_link' },
        { label: '“CATCH” Attention on Social Media', href: 'https://drive.google.com/file/d/1QU1UHXJMALm6WwbShjqHtvS5mcq7ymEO/view?usp=drive_link' },
        { label: 'Building a Sustainable Business', href: 'https://drive.google.com/file/d/1Z2CMq6s7mlUHX67_EB56SuL1o11SVQ80/view?usp=drive_link' },
        { label: '54 Ways to Get Noticed', href: 'https://drive.google.com/file/d/1GLEtPE0k2VBz8eNVaWFdyzYtZURvQcGb/view?usp=drive_link' },
        { label: 'The Voice Blueprint', href: 'https://drive.google.com/file/d/1Qgp2iiPO5O7Ps5ujPaUHCnCkquWpMpH2/view?usp=drive_link' },
      ] },
      { label: 'Podcasts', kids: [
        { label: 'Be Locally Loved Podcast', href: 'podcast.html', kids: [
          { label: 'Apple', href: 'https://podcasts.apple.com/us/podcast/be-locally-loved/id1877734623' },
          { label: 'Spotify', href: 'https://open.spotify.com/show/0Udm3hNFpfE5xTQ8pX1j76' },
          { label: 'YouTube', href: 'https://www.youtube.com/@BeLocallyLoved' },
        ] },
        { label: 'The Unbridled Creative Podcast', href: 'https://theunbridledcreative.com/', kids: [
          { label: 'Apple', href: 'https://podcasts.apple.com/us/podcast/the-unbridled-creative-podcast/id1851005801' },
          { label: 'Spotify', href: 'https://open.spotify.com/show/46yq7TDKXnGsc5ZSjMgEto' },
          { label: 'YouTube', href: 'https://www.youtube.com/channel/UCmataK4SiM0uZ44Kxm0N6QA' },
        ] },
      ] },
      { label: 'Strategic Partners', href: 'resources.html#partners', kids: [
        { label: 'Anchor Media', href: 'resources.html#partners' },
        { label: 'BeLocal Georgetown', href: 'belocal.html' },
        { label: 'Grayson Media & Marketing', href: 'resources.html#partners' },
        { label: 'Hello Georgetown', href: 'resources.html#partners' },
        { label: 'Let’s Go Locals', href: 'resources.html#partners' },
        { label: 'Moxie 360 Marketing', href: 'resources.html#partners' },
        { label: 'Santosha Solutions', href: 'resources.html#partners' },
        { label: 'Wawai Partners', href: 'resources.html#partners' },
      ] },
      { label: 'Videos', href: 'resources.html#videos', kids: [
        { label: 'BNI Featured Speaker Presentation', href: 'https://www.youtube.com/watch?v=TVNhz8bQdjI' },
        { label: 'BNI Testimonials', href: 'https://www.youtube.com/watch?v=plaGFgImBPk' },
        { label: 'Teach ChatGPT to Sound Like You', href: 'https://drive.google.com/file/d/1tjgM5hZQigpMgeipVA6tHj01QsXXhtU-/view?usp=drive_link' },
      ] },
      { label: 'Workshops', href: 'resources.html#workshops', kids: [
        { label: 'The Path to Marketing Success', href: 'https://drive.google.com/file/d/1DYMKOXXS4QfZTUbplC_RkhMJicqBrAvV/view?usp=drive_link' },
        { label: 'AI in Marketing', href: 'https://drive.google.com/file/d/1sUXsE0bQ-WTi7_Rw5G_H9wtjrkO5mTJ6/view?usp=drive_link' },
        { label: 'Don’t Wing It - Batch It', href: 'https://drive.google.com/file/d/1pRSlM6GKFX8S1u3Uf3ZR5GODyA_TFsbX/view?usp=drive_link' },
        { label: 'From Blank Screen to Brilliant Strategy', href: 'https://drive.google.com/file/d/1lQgMYgtdceqeIN4nIM6InzSKPfyBn75x/view?usp=drive_link' },
        { label: 'Navigating The Trust Recession', href: 'https://drive.google.com/file/d/1QqQMBoFGRjV-sojg4o_WRtm9n_BMZh61/view?usp=drive_link' },
      ] },
    ],
  },
];
/* Flat list for active-state detection + footer/drawer reuse. */
const NAV = MEGA.map((m) => [m.label, m.href]);

/* Recursive renderer for nested mega-menu items (desktop). */
function MegaItem({ node }) {
  const ext = node.href && node.href.startsWith('http');
  const hasKids = node.kids && node.kids.length;
  if (!hasKids) {
    return <a className="mega-link" href={node.href || '#'} target={ext ? '_blank' : undefined} rel={ext ? 'noopener' : undefined}>{node.label}</a>;
  }
  const Label = node.href
    ? <a className="mega-node__label" href={node.href} target={ext ? '_blank' : undefined} rel={ext ? 'noopener' : undefined}>{node.label}</a>
    : <span className="mega-node__label">{node.label}</span>;
  return (
    <div className="mega-node">
      {Label}
      <div className="mega-node__kids">
        {node.kids.map((k, i) => <MegaItem key={k.label + i} node={k} />)}
      </div>
    </div>
  );
}

/* Recursive renderer for cascading dropdown menus (desktop).
   Each submenu flips left when it would overflow the viewport's right edge. */
function DropItem({ node }) {
  const ext = node.href && node.href.startsWith('http');
  const hasKids = node.kids && node.kids.length;
  const [flip, setFlip] = React.useState(false);
  const flyRef = React.useRef(null);
  const onEnter = () => {
    if (!hasKids) return;
    requestAnimationFrame(() => {
      const el = flyRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      if (!flip && r.right > window.innerWidth - 12) setFlip(true);
      else if (flip && r.left < 12) setFlip(false);
    });
  };
  const inner = (
    <React.Fragment>
      <span>{node.label}</span>
      {hasKids && <i className="fa-solid fa-chevron-right drop__chev" aria-hidden="true"></i>}
    </React.Fragment>
  );
  return (
    <li className={`drop__item ${hasKids ? 'has-sub' : ''}`} onMouseEnter={onEnter}>
      {node.href
        ? <a className="drop__link" href={node.href} target={ext ? '_blank' : undefined} rel={ext ? 'noopener' : undefined}>{inner}</a>
        : <span className="drop__link drop__link--parent">{inner}</span>}
      {hasKids && (
        <ul ref={flyRef} className={`drop__menu drop__flyout ${flip ? 'drop__flyout--left' : ''}`}>
          {node.kids.map((k, i) => <DropItem key={k.label + i} node={k} />)}
        </ul>
      )}
    </li>
  );
}

/* Recursive renderer for the mobile drawer (indented). */
function DrawerItem({ node, depth }) {
  const ext = node.href && node.href.startsWith('http');
  const hasKids = node.kids && node.kids.length;
  if (!hasKids) {
    return <a className="drawer__leaf" href={node.href || '#'} target={ext ? '_blank' : undefined} rel={ext ? 'noopener' : undefined} style={{ paddingLeft: 14 + depth * 14 }}>{node.label}</a>;
  }
  return (
    <React.Fragment>
      {node.href
        ? <a className="drawer__leaf drawer__leaf--parent" href={node.href} target={ext ? '_blank' : undefined} rel={ext ? 'noopener' : undefined} style={{ paddingLeft: 14 + depth * 14 }}>{node.label}</a>
        : <span className="drawer__leaf drawer__leaf--parent" style={{ paddingLeft: 14 + depth * 14 }}>{node.label}</span>}
      {node.kids.map((k, i) => <DrawerItem key={k.label + i} node={k} depth={depth + 1} />)}
    </React.Fragment>
  );
}

/* ---------------- Tweaks ---------------- */
const TWEAK_DEFAULTS = {
  primaryColor: '#2D8FA2',
  corners: 'Soft',
};
const COLOR_PRESETS = {
  '#2D8FA2': ['#2D8FA2', '#25788a', '#1e6373'], // Signature teal (brand)
  '#143B5A': ['#143B5A', '#0f2e47', '#0a2236'], // Deep navy
  '#1e6373': ['#1e6373', '#185360', '#13434e'], // Deep teal
};
const CORNERS = {
  Soft: ['4px', '14px'],
  Sharp: ['2px', '6px'],
  Round: ['8px', '22px'],
};
const TWEAK_KEY = 'lct-site-tweaks';

function loadTweaks() {
  try {
    const raw = localStorage.getItem(TWEAK_KEY);
    if (raw) return { ...TWEAK_DEFAULTS, ...JSON.parse(raw) };
  } catch (e) { /* ignore */ }
  return { ...TWEAK_DEFAULTS };
}
function applyTweaks(t) {
  const r = document.documentElement.style;
  const c = COLOR_PRESETS[t.primaryColor] || COLOR_PRESETS['#2D8FA2'];
  r.setProperty('--color-primary', c[0]);
  r.setProperty('--color-primary-hover', c[1]);
  r.setProperty('--color-primary-active', c[2]);
  const cor = CORNERS[t.corners] || CORNERS.Soft;
  r.setProperty('--radius-sm', cor[0]);
  r.setProperty('--radius-lg', cor[1]);
}
// Apply immediately on load to avoid a flash.
applyTweaks(loadTweaks());

function SiteTweaks() {
  const { TweaksPanel, TweakSection, TweakColor, TweakRadio } = window;
  const [t, setRaw] = window.useTweaks(loadTweaks());
  function setTweak(k, v) {
    setRaw(k, v);
    const next = { ...t, [k]: v };
    try { localStorage.setItem(TWEAK_KEY, JSON.stringify(next)); } catch (e) {}
    applyTweaks(next);
  }
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Brand" />
      <TweakColor label="Accent" value={t.primaryColor}
        options={Object.keys(COLOR_PRESETS)}
        onChange={(v) => setTweak('primaryColor', v)} />
      <TweakSection label="Shape" />
      <TweakRadio label="Corners" value={t.corners}
        options={Object.keys(CORNERS)}
        onChange={(v) => setTweak('corners', v)} />
    </TweaksPanel>
  );
}

/* ---------------- Layout helpers ---------------- */
function Container({ children, style }) {
  return <div className="container" style={style}>{children}</div>;
}
function Section({ children, bg = 'page', sm = false, style, id }) {
  return (
    <section id={id} className={`bg-${bg} ${sm ? 'section--sm' : 'section'}`} style={style}>
      <Container>{children}</Container>
    </section>
  );
}
function SectionTitle({ overline, title, sub, align = 'center', max = 760 }) {
  return (
    <div style={{ textAlign: align, maxWidth: align === 'center' ? max : 'none', margin: align === 'center' ? '0 auto' : 0 }}>
      {overline && <div className="eyebrow" style={{ marginBottom: 12 }}>{overline}</div>}
      <h2 className="h-display" style={{ fontSize: 'var(--fs-h2)' }}>{title}</h2>
      {sub && <p className="lead" style={{ margin: '14px 0 0' }}>{sub}</p>}
    </div>
  );
}
window.Container = Container;
window.Section = Section;
window.SectionTitle = SectionTitle;

/* CTA helpers via context */
const SiteCtx = React.createContext({ toast: () => {} });
window.SiteCtx = SiteCtx;
function useToast() { return React.useContext(SiteCtx).toast; }
window.useToast = useToast;

/* A primary CTA that books the real Calendly call */
function BookButton({ children = 'Work With Laura', ...props }) {
  return <DS.Button href={CALENDLY} target="_blank" rel="noopener" {...props}>{children}</DS.Button>;
}
window.BookButton = BookButton;

/* ---------------- Header ---------------- */
function Logo({ knockout = false }) {
  return (
    <a className={`logo ${knockout ? 'logo--knockout' : ''}`} href="index.html" aria-label="Laura Capes Terry — strategic marketing guidance">
      <img className="logo__img" src={(window.__resources && window.__resources.logo) || 'assets/logo-horizontal.png'} alt="Laura Capes Terry — strategic marketing guidance" />
    </a>
  );
}
function Header({ current }) {
  const [open, setOpen] = React.useState(false);      // mobile drawer
  const [mega, setMega] = React.useState(null);        // open mega-menu label
  const [drawerSub, setDrawerSub] = React.useState(null);
  const [search, setSearch] = React.useState(false);   // search field
  const closeTimer = React.useRef(null);

  function openMega(label) {
    clearTimeout(closeTimer.current);
    setMega(label);
  }
  function scheduleClose() {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMega(null), 140);
  }
  const active = MEGA.find((m) => m.label === mega);

  return (
    <header className="site-header" onMouseLeave={scheduleClose}>
      {/* Tier 1 — utility / brand bar */}
      <div className="topbar">
        <div className="topbar__inner">
          <span className="topbar__tag">Be seen. Be trusted. Be chosen.</span>
          <a className="topbar__logo" href="index.html" aria-label="Laura Capes Terry — home">
            <img src={(window.__resources && window.__resources.logo) || 'assets/logo-horizontal.png'} alt="Laura Capes Terry, MBA" />
          </a>
          <div className="topbar__right">
            <a className="topbar__login" href="#member-login" title="Client portal — coming soon">
              <i className="fa-regular fa-user"></i> Member Login
            </a>
            <span className="topbar__social">
              <a href="https://www.facebook.com/lauracapesterry" target="_blank" rel="noopener" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/lauracapesterrymba/" target="_blank" rel="noopener" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            </span>
          </div>
        </div>
      </div>

      {/* Tier 2 — navigation bar */}
      <div className="navbar">
        <div className="navbar__inner">
          <a className="navbar__mark" href="index.html" aria-label="Laura Capes Terry — home">
            <img src="assets/favicon-growth-logo.png" alt="" />
          </a>
          <a className="navbar__logo-mobile" href="index.html" aria-label="Laura Capes Terry — home">
            <img src={(window.__resources && window.__resources.logo) || 'assets/logo-horizontal.png'} alt="Laura Capes Terry, MBA" />
          </a>
          <nav className="nav" aria-label="Primary">
            {MEGA.map((m) => (
                <div key={m.label} className={`nav__item ${mega === m.label ? 'is-open' : ''}`}
                  onMouseEnter={() => openMega(m.label)} onMouseLeave={scheduleClose}>
                  <a className={`nav__top ${current === m.label ? 'is-active' : ''}`} href={m.href}
                    aria-expanded={mega === m.label} aria-haspopup="true"
                    onFocus={() => openMega(m.label)}>
                    {m.label}<i className="fa-solid fa-chevron-down chev" aria-hidden="true"></i>
                  </a>
                  <div className={`dropdown ${mega === m.label ? 'is-open' : ''}`}
                    onMouseEnter={() => clearTimeout(closeTimer.current)}>
                    <a className="drop__all" href={m.href}>All {m.label} →</a>
                    <ul className="drop__menu drop__root">
                      {m.items.map((node, i) => (
                        <DropItem key={node.label + i} node={node} />
                      ))}
                    </ul>
                  </div>
                </div>
            ))}
          </nav>
          <div className="navbar__right">
            <span className="navbar__start">
              <DS.Button href="start-here.html" size="small">Start Here</DS.Button>
            </span>
            <button className="navbar__search" aria-label="Search" onClick={() => setSearch((s) => !s)}>
              <i className={`fa-solid ${search ? 'fa-xmark' : 'fa-magnifying-glass'}`}></i>
            </button>
            <button className="hamburger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
              <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
        <div className={`navbar-search ${search ? 'is-open' : ''}`}>
          <div className="navbar-search__inner">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="search" placeholder="Search the site…" aria-label="Search the site"
              onKeyDown={(e) => { if (e.key === 'Escape') setSearch(false); }} />
          </div>
        </div>
      </div>

      {/* Mobile drawer — nested accordion */}
      <div className={`drawer ${open ? 'is-open' : ''}`}>
        <a className="drawer__login" href="#member-login"><i className="fa-regular fa-user"></i> Member Login</a>
        {MEGA.map((m) => (
          <div key={m.label} className="drawer__group">
            <button className="drawer__top" aria-expanded={drawerSub === m.label}
              onClick={() => setDrawerSub((s) => (s === m.label ? null : m.label))}>
              {m.label}<i className={`fa-solid fa-chevron-${drawerSub === m.label ? 'up' : 'down'}`}></i>
            </button>
            <div className={`drawer__sub ${drawerSub === m.label ? 'is-open' : ''}`}>
              <a href={m.href} className="drawer__suboverview">All {m.label} →</a>
              {m.items.map((node, i) => <DrawerItem key={node.label + i} node={node} depth={0} />)}
            </div>
          </div>
        ))}
        <a className="drawer__cta" href="start-here.html">Start Here →</a>
      </div>
    </header>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  const toast = useToast();
  const explore = [
    ['About Laura', 'about.html'], ['How I Help', 'services.html'], ['Client Reviews', 'reviews.html'],
    ['Start Here', 'start-here.html'], ['Contact', 'contact.html'],
  ];
  const resources = [
    ['Ask Laura — FAQs', 'ask-laura.html'], ['Resources Hub', 'resources.html'],
    ['Blog', 'blog.html'], ['Frameworks & Guides', 'resources.html#frameworks'],
  ];
  const more = [
    ['BeLocal Georgetown', 'belocal.html'],
    ['Be Locally Loved Podcast', 'podcast.html'],
    ['The Unbridled Creative', 'https://theunbridledcreative.com/'],
  ];
  const legal = [
    ['Terms', 'contact.html'], ['Privacy', 'contact.html'],
    ['Cookie Policy', 'contact.html'], ['Support', 'contact.html'],
  ];
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        {/* Left — brand + newsletter */}
        <div className="footer-lead">
          <Logo />
          <p className="footer-col__head" style={{ marginTop: 24 }}>Join the list</p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.65, color: 'var(--text-body)', margin: '0 0 18px', maxWidth: 380 }}>
            Practical, human-first marketing guidance — and the smartest ways to use AI without losing your voice. No spam, ever.
          </p>
          <form className="footer-form" onSubmit={(e) => { e.preventDefault(); toast('You’re in! Watch your inbox for Laura’s next note.'); }}>
            <DS.Input placeholder="First name" aria-label="First name" required />
            <DS.Input placeholder="Email address" type="email" aria-label="Email" required />
            <DS.Button type="submit" fullWidth>Subscribe</DS.Button>
          </form>
          <div className="footer-social" style={{ marginTop: 22 }}>
            <a href="https://www.facebook.com/lauracapesterry" target="_blank" rel="noopener" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/lauracapesterrymba/" target="_blank" rel="noopener" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href={CALENDLY} target="_blank" rel="noopener" aria-label="Book a call"><i className="fa-solid fa-phone"></i></a>
          </div>
        </div>

        {/* Right — link columns */}
        <div className="footer-cols">
          <div>
            <p className="footer-col__head">Explore</p>
            <div className="footer-links">
              {explore.map(([l, h]) => <a key={l} href={h}>{l}</a>)}
            </div>
          </div>
          <div>
            <p className="footer-col__head">Resources</p>
            <div className="footer-links">
              {resources.map(([l, h]) => <a key={l} href={h}>{l}</a>)}
            </div>
          </div>
          <div>
            <p className="footer-col__head">Brands &amp; Shows</p>
            <div className="footer-links">
              {more.map(([l, h]) => <a key={l} href={h} target={h.startsWith('http') ? '_blank' : undefined} rel="noopener">{l}</a>)}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-legal">
          {legal.map(([l, h]) => <a key={l} href={h}>{l}</a>)}
        </div>
        <span className="footer-copy">© 2026 Laura Capes Terry, MBA · Grayson Media LLC</span>
      </div>
    </footer>
  );
}

/* ---------------- Scroll reveal ---------------- */
function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((e) => e.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  });
}

/* ---------------- App shell ---------------- */
function App({ pageKey, Page }) {
  const [toast, setToast] = React.useState('');
  const TOP_FOR_PAGE = {
    about: 'About', reviews: 'About',
    services: 'How I Help', belocal: 'How I Help',
    resources: 'Resources', 'ask-laura': 'Resources', blog: 'Resources', podcast: 'Resources',
  };
  const current = TOP_FOR_PAGE[pageKey] || '';
  useReveal();
  const showToast = React.useCallback((msg) => {
    setToast(msg || 'Thanks — this demo form would send to Laura. Booking opens her Calendly.');
    clearTimeout(window.__lctT);
    window.__lctT = setTimeout(() => setToast(''), 3200);
  }, []);
  return (
    <SiteCtx.Provider value={{ toast: showToast }}>
      <Header current={current} />
      <main><Page /></main>
      <Footer />
      <SiteTweaks />
      <div className={`toast ${toast ? 'is-show' : ''}`}>{toast}</div>
    </SiteCtx.Provider>
  );
}

window.renderSite = function (pageKey) {
  const Page = (window.__pages || {})[pageKey];
  if (!Page) { console.error('No page registered for', pageKey); return; }
  ReactDOM.createRoot(document.getElementById('root')).render(<App pageKey={pageKey} Page={Page} />);
};
