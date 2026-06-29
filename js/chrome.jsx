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
    columns: [
      { head: 'Meet Laura', links: [
        ['About Laura', 'about.html'],
        ["Laura’s Story", 'about.html#story'],
        ['Why Businesses Trust Laura', 'about.html#trust'],
        ['Why Laura Publishes BeLocal', 'belocal.html'],
      ] },
      { head: 'Recognition & Reach', links: [
        ['Awards & Certifications', 'about.html#awards'],
        ['In the Media / Press', 'about.html'],
        ['Speaking & Writing', 'about.html'],
        ['Video: StoryBrand Guide', 'about.html'],
      ] },
      { head: 'Proof & Community', links: [
        ['Client Reviews', 'reviews.html'],
        ['Giving Back', 'about.html'],
        ['BeLocal Georgetown', 'belocal.html'],
      ] },
    ],
    feature: {
      eyebrow: 'Meet your guide',
      title: '30+ years of marketing leadership, in your corner',
      cta: 'Read Laura’s story', href: 'about.html#story',
    },
  },
  {
    label: 'How I Help',
    href: 'services.html',
    columns: [
      { head: 'Brand Awareness', links: [
        ['BeLocal Georgetown', 'belocal.html'],
        ['Let’s Go Locals Directory', 'services.html'],
        ['Social Media Marketing', 'services.html'],
      ] },
      { head: 'Community Connections', links: [
        ['BNI GTX — Business by Referral', 'services.html'],
        ['BeLocal B2B', 'belocal.html'],
        ['Let’s Go Locals Events', 'services.html'],
      ] },
      { head: 'Strategy & Leadership', links: [
        ['Private & Group Coaching', 'services.html'],
        ['AI Consulting', 'services.html'],
        ['Fractional CMO', 'services.html'],
        ['Public Speaking & Workshops', 'services.html'],
      ] },
      { head: 'Education & Inspiration', links: [
        ['Be Locally Loved Podcast', 'podcast.html'],
        ['The Unbridled Creative', 'https://theunbridledcreative.com/'],
      ] },
    ],
    feature: {
      eyebrow: 'Not sure where to start?',
      title: 'Tell Laura your biggest marketing challenge',
      cta: 'Start here', href: 'start-here.html',
    },
  },
  {
    label: 'Resources',
    href: 'resources.html',
    columns: [
      { head: 'Ask & Read', links: [
        ['Ask Laura — FAQs', 'ask-laura.html'],
        ['Blog', 'blog.html'],
        ['Books', 'resources.html#books'],
      ] },
      { head: 'Learn', links: [
        ['Courses', 'resources.html#courses'],
        ['Workshops', 'resources.html#workshops'],
        ['Frameworks', 'resources.html#frameworks'],
      ] },
      { head: 'Free Guides', links: [
        ['The Ultimate ChatGPT Prompt', 'resources.html#guides'],
        ['Building Better Websites', 'resources.html#guides'],
        ['54 Ways to Get Noticed', 'resources.html#guides'],
      ] },
      { head: 'Watch & Listen', links: [
        ['Videos', 'resources.html#videos'],
        ['Podcasts', 'podcast.html'],
        ['Strategic Partners', 'resources.html#partners'],
      ] },
    ],
    feature: {
      eyebrow: 'Free download',
      title: 'Building Better Websites: Six Success Tips',
      cta: 'Get the checklist', href: 'resources.html#guides',
    },
  },
];
/* Flat list for active-state detection + footer/drawer reuse. */
const NAV = MEGA.map((m) => [m.label, m.href]);

/* ---------------- Tweaks ---------------- */
const TWEAK_DEFAULTS = {
  primaryColor: '#31738f',
  headingFont: 'Fira Sans',
  corners: 'Soft',
};
const COLOR_PRESETS = {
  '#31738f': ['#31738f', '#2a6377', '#245260'], // Brand teal
  '#28606f': ['#28606f', '#21505c', '#1a414b'], // Deep teal
  '#3b6f95': ['#3b6f95', '#335f80', '#294c66'], // Slate blue
  '#2f7d6e': ['#2f7d6e', '#286b5f', '#20564c'], // Pine
};
const FONT_STACKS = {
  'Fira Sans': "'Fira Sans', 'Helvetica Neue', Arial, sans-serif",
  'Poppins': "'Poppins', 'Helvetica Neue', Arial, sans-serif",
  'Libre Franklin': "'Libre Franklin', 'Helvetica Neue', Arial, sans-serif",
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
  const c = COLOR_PRESETS[t.primaryColor] || COLOR_PRESETS['#31738f'];
  r.setProperty('--color-primary', c[0]);
  r.setProperty('--color-primary-hover', c[1]);
  r.setProperty('--color-primary-active', c[2]);
  r.setProperty('--surface-dark', c[0]);
  r.setProperty('--font-heading', FONT_STACKS[t.headingFont] || FONT_STACKS['Fira Sans']);
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
      <TweakRadio label="Heading font" value={t.headingFont}
        options={Object.keys(FONT_STACKS)}
        onChange={(v) => setTweak('headingFont', v)} />
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
      <div className="site-header__bar">
        <Logo />
        <nav className="nav" aria-label="Primary">
          {MEGA.map((m) => (
            <div key={m.label} className={`nav__item ${mega === m.label ? 'is-open' : ''}`}
              onMouseEnter={() => openMega(m.label)}>
              <a className={`nav__top ${current === m.label ? 'is-active' : ''}`} href={m.href}
                aria-expanded={mega === m.label} aria-haspopup="true"
                onFocus={() => openMega(m.label)}>
                {m.label}<i className="fa-solid fa-chevron-down chev" aria-hidden="true"></i>
              </a>
            </div>
          ))}
          <span className="nav__social">
            <a href="https://www.facebook.com/lauracapesterry" target="_blank" rel="noopener" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/lauracapesterrymba/" target="_blank" rel="noopener" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
          </span>
          <DS.Button href="start-here.html" size="small">Start Here</DS.Button>
        </nav>
        <button className="hamburger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
          <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Desktop mega-menu panel */}
      <div className={`mega-panel ${active ? 'is-open' : ''}`}
        onMouseEnter={() => clearTimeout(closeTimer.current)} onMouseLeave={scheduleClose}>
        {active && (
          <div className="mega-inner">
            <div className="mega-cols">
              {active.columns.map((col) => (
                <div key={col.head} className="mega-col">
                  <p className="mega-col__head">{col.head}</p>
                  <div className="mega-links">
                    {col.links.map(([l, h]) => (
                      <a key={l} href={h} target={h.startsWith('http') ? '_blank' : undefined} rel="noopener">{l}</a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <a className="mega-feature" href={active.feature.href}
              target={active.feature.href.startsWith('http') ? '_blank' : undefined} rel="noopener">
              <div className="mega-feature__eyebrow">{active.feature.eyebrow}</div>
              <div className="mega-feature__title">{active.feature.title}</div>
              <span className="mega-feature__cta">{active.feature.cta}<i className="fa-solid fa-arrow-right" style={{ marginLeft: 8 }}></i></span>
            </a>
          </div>
        )}
      </div>

      {/* Mobile drawer — nested accordion */}
      <div className={`drawer ${open ? 'is-open' : ''}`}>
        {MEGA.map((m) => (
          <div key={m.label} className="drawer__group">
            <button className="drawer__top" aria-expanded={drawerSub === m.label}
              onClick={() => setDrawerSub((s) => (s === m.label ? null : m.label))}>
              {m.label}<i className={`fa-solid fa-chevron-${drawerSub === m.label ? 'up' : 'down'}`}></i>
            </button>
            <div className={`drawer__sub ${drawerSub === m.label ? 'is-open' : ''}`}>
              <a href={m.href} className="drawer__suboverview">All {m.label} →</a>
              {m.columns.flatMap((c) => c.links).map(([l, h]) => (
                <a key={l} href={h} target={h.startsWith('http') ? '_blank' : undefined} rel="noopener">{l}</a>
              ))}
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
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <Logo />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.65, color: 'var(--text-body)', margin: '20px 0 16px', maxWidth: 300 }}>
            Helping local business owners be seen, trusted, and chosen — blending modern tools with timeless wisdom. Georgetown, Texas.
          </p>
          <div className="footer-social">
            <a href="https://www.facebook.com/lauracapesterry" target="_blank" rel="noopener" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/lauracapesterrymba/" target="_blank" rel="noopener" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href={CALENDLY} target="_blank" rel="noopener" aria-label="Book a call"><i className="fa-solid fa-phone"></i></a>
          </div>
        </div>
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
      <div className="footer-bottom">© 2026 Laura Capes Terry, MBA · Grayson Media LLC · Be seen. Be trusted. Be chosen.</div>
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
