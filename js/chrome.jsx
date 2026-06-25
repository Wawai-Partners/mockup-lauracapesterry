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
  { label: 'Awards & Certifications', href: 'awards.html' },
  { label: 'Client Reviews', href: 'reviews.html' },
  { label: 'Giving Back', href: 'giving-back.html' },
  { label: 'Laura’s Story', href: 'laura-story.html' },
  { label: 'In the Media / Press', href: 'press.html' },
  { label: 'Speaking & Writing', href: 'speaking-writing.html' },
  { label: 'Video: StoryBrand Guide', href: 'https://drive.google.com/file/d/16UoXlUX214Gdj5NkHwORo9feKo90q3gI/view?usp=drive_link' },
  { label: 'Video: Meet Our Publisher', href: 'https://drive.google.com/file/d/1NE92p4MA9_qbFrXTbq7CZQlpG_GQDHIP/view?usp=drive_link' },
  { label: 'Why Businesses Trust Laura', href: 'about.html#trust' },
  { label: 'Why Laura Publishes BeLocal', href: 'why-belocal.html' }]

},
{
  label: 'How I Help',
  href: 'services.html',
  items: [
  { label: 'Brand Awareness', href: 'brand-awareness.html' },
  { label: 'Community Connections', href: 'community-connections.html' },
  { label: 'Marketing Strategy & Leadership', href: 'marketing-strategy.html' },
  { label: 'Education & Inspiration', href: 'education-inspiration.html' }]

},
{
  label: 'Resources',
  href: 'resources.html',
  items: [
  { label: 'Ask Laura', href: 'ask-laura.html' },
  { label: 'Blog', href: 'blog.html' },
  { label: 'Books', href: 'resources-books.html' },
  { label: 'Courses', href: 'bootcamp.html' },
  { label: 'Frameworks', href: 'resources-frameworks.html' },
  { label: 'Guides', href: 'resources-guides.html' },
  { label: 'Podcasts', href: 'podcast.html' },
  { label: 'Strategic Partners', href: 'strategic-partners.html' },
  { label: 'Videos', href: 'resources-videos.html' },
  { label: 'Workshops', href: 'resources-workshops.html' }]

}];

/* Flat list for active-state detection + footer/drawer reuse. */
const NAV = MEGA.map((m) => [m.label, m.href]);

/* Top-bar menu model (June 2026 header redesign): a flat row of links —
   Home · About · How I Help · Podcast · Blog · Resources · Start Here.
   About / How I Help / Resources keep their mega-menu dropdowns. */
const MEGA_BY = {};
MEGA.forEach((m) => {MEGA_BY[m.label] = m;});
const NAV_TOP = [
{ label: 'Home', href: 'index.html' },
MEGA_BY['About'],
MEGA_BY['How I Help'],
{ label: 'Podcast', href: 'podcast.html' },
{ label: 'Blog', href: 'blog.html' },
MEGA_BY['Resources'],
{ label: 'Start Here', href: 'start-here.html' }];


/* Recursive renderer for nested mega-menu items (desktop). */
function MegaItem({ node }) {
  const ext = node.href && node.href.startsWith('http');
  const hasKids = node.kids && node.kids.length;
  if (!hasKids) {
    return <a className="mega-link" href={node.href || '#'} target={ext ? '_blank' : undefined} rel={ext ? 'noopener' : undefined}>{node.label}</a>;
  }
  const Label = node.href ?
  <a className="mega-node__label" href={node.href} target={ext ? '_blank' : undefined} rel={ext ? 'noopener' : undefined}>{node.label}</a> :
  <span className="mega-node__label">{node.label}</span>;
  return (
    <div className="mega-node">
      {Label}
      <div className="mega-node__kids">
        {node.kids.map((k, i) => <MegaItem key={k.label + i} node={k} />)}
      </div>
    </div>);

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
      if (!flip && r.right > window.innerWidth - 12) setFlip(true);else
      if (flip && r.left < 12) setFlip(false);
    });
  };
  const inner =
  <React.Fragment>
      <span>{node.label}</span>
      {hasKids && <i className="fa-solid fa-chevron-right drop__chev" aria-hidden="true"></i>}
    </React.Fragment>;

  return (
    <li className={`drop__item ${hasKids ? 'has-sub' : ''}`} onMouseEnter={onEnter}>
      {node.href ?
      <a className="drop__link" href={node.href} target={ext ? '_blank' : undefined} rel={ext ? 'noopener' : undefined}>{inner}</a> :
      <span className="drop__link drop__link--parent">{inner}</span>}
      {hasKids &&
      <ul ref={flyRef} className={`drop__menu drop__flyout ${flip ? 'drop__flyout--left' : ''}`}>
          {node.kids.map((k, i) => <DropItem key={k.label + i} node={k} />)}
        </ul>
      }
    </li>);

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
      {node.href ?
      <a className="drawer__leaf drawer__leaf--parent" href={node.href} target={ext ? '_blank' : undefined} rel={ext ? 'noopener' : undefined} style={{ paddingLeft: 14 + depth * 14 }}>{node.label}</a> :
      <span className="drawer__leaf drawer__leaf--parent" style={{ paddingLeft: 14 + depth * 14 }}>{node.label}</span>}
      {node.kids.map((k, i) => <DrawerItem key={k.label + i} node={k} depth={depth + 1} />)}
    </React.Fragment>);

}

/* ---------------- Tweaks ---------------- */
const TWEAK_DEFAULTS = {
  primaryColor: '#2D8FA2',
  corners: 'Soft'
};
const COLOR_PRESETS = {
  '#2D8FA2': ['#2D8FA2', '#25788a', '#1e6373'], // Signature teal (brand)
  '#143B5A': ['#143B5A', '#0f2e47', '#0a2236'], // Deep navy
  '#1e6373': ['#1e6373', '#185360', '#13434e'] // Deep teal
};
const CORNERS = {
  Soft: ['4px', '14px'],
  Sharp: ['2px', '6px'],
  Round: ['8px', '22px']
};
const TWEAK_KEY = 'lct-site-tweaks';

function loadTweaks() {
  try {
    const raw = localStorage.getItem(TWEAK_KEY);
    if (raw) return { ...TWEAK_DEFAULTS, ...JSON.parse(raw) };
  } catch (e) {/* ignore */}
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
    try {localStorage.setItem(TWEAK_KEY, JSON.stringify(next));} catch (e) {}
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
    </TweaksPanel>);

}

/* ---------------- Layout helpers ---------------- */
function Container({ children, style }) {
  return <div className="container" style={style}>{children}</div>;
}
function Section({ children, bg = 'page', sm = false, style, id }) {
  return (
    <section id={id} className={`bg-${bg} ${sm ? 'section--sm' : 'section'}`} style={style}>
      <Container>{children}</Container>
    </section>);

}
function SectionTitle({ overline, title, sub, script, align = 'center', max = 780 }) {
  return (
    <div style={{ textAlign: align, maxWidth: align === 'center' ? max : 'none', margin: align === 'center' ? '0 auto' : 0 }}>
      <h2 className="h-display jk-h--md">{title}{script ? <> <span className="jk-script" style={{ fontFamily: "\"Cormorant Garamond\"", fontWeight: "700", color: "var(--lct-rose)" }}>{script}</span></> : null}</h2>
      {sub && <p className="jk-head__lead" style={{ margin: align === 'center' ? '14px auto 0' : '14px 0 0' }}>{sub}</p>}
    </div>);

}
window.Container = Container;
window.Section = Section;
window.SectionTitle = SectionTitle;

/* CTA helpers via context */
const SiteCtx = React.createContext({ toast: () => {} });
window.SiteCtx = SiteCtx;
function useToast() {return React.useContext(SiteCtx).toast;}
window.useToast = useToast;

/* Sunburst brand motif */
function Sunburst() {
  const rays = [];
  for (let i = 0; i < 16; i++) {
    const a = i / 16 * Math.PI * 2;
    const long = i % 2 === 0;
    const r1 = 20,r2 = long ? 34 : 28;
    rays.push(React.createElement('line', {
      key: i, x1: 50 + Math.cos(a) * r1, y1: 50 + Math.sin(a) * r1,
      x2: 50 + Math.cos(a) * r2, y2: 50 + Math.sin(a) * r2,
      stroke: 'var(--lct-sand)', strokeWidth: 2, strokeLinecap: 'round' }));
  }
  return (
    <svg viewBox="0 0 100 100" className="motif-sun" aria-hidden="true">
      <circle cx="50" cy="50" r="12" fill="none" stroke="var(--lct-sand)" strokeWidth="2.4" />
      {rays}
    </svg>);

}
window.Sunburst = Sunburst;

/* Teal icon inside sand sunburst rays — shared card/section icon */
function SunIcon({ icon, size = 76 }) {
  const rays = [];
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
    const r1 = 30, r2 = i % 2 === 0 ? 44 : 39;
    rays.push(React.createElement('line', {
      key: i, x1: 50 + Math.cos(a) * r1, y1: 50 + Math.sin(a) * r1,
      x2: 50 + Math.cos(a) * r2, y2: 50 + Math.sin(a) * r2,
      stroke: 'var(--lct-sand)', strokeWidth: 2.4, strokeLinecap: 'round' }));
  }
  return (
    <span className="sun-icon" style={{ width: size, height: size, fontSize: size }}>
      <svg viewBox="0 0 100 100" className="sun-icon__rays" aria-hidden="true">{rays}</svg>
      <i className={`fa-solid ${icon} sun-icon__glyph`} aria-hidden="true"></i>
    </span>);

}
window.SunIcon = SunIcon;

/* Canonical "Let's Start a Conversation" form — cream botanical band */
function StartConversation({ sub, id = 'contact' }) {
  const toast = useToast();
  return (
    <section className="jk-contact jk-field--cream section" id={id} data-screen-label="Start a conversation">
      <div className="container">
        <div className="card reveal" style={{ maxWidth: 640, margin: '0 auto', padding: 40 }}>
          <Sunburst />
          <h2 className="jk-h jk-h--md" style={{ textAlign: 'center', margin: '0 0 12px' }}>Let’s Start a <span className="jk-script" style={{ fontFamily: "\"Cormorant Garamond\"", color: "rgb(20, 59, 90)", fontWeight: "700" }}>Conversation</span></h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'var(--text-body)', textAlign: 'center', margin: '0 auto 26px', maxWidth: 480 }}>
            {sub || 'This is a short, intentional conversation to understand your goals, identify low-hanging opportunities, and recommend a smart next step.'}
          </p>
          <form onSubmit={(e) => {e.preventDefault();toast('Thanks! Laura will reach out shortly.');}} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <DS.Input placeholder="Name" aria-label="Name" required />
            <DS.Input placeholder="Email" type="email" aria-label="Email" required />
            <DS.Input placeholder="Company Name" aria-label="Company name" />
            <DS.Input placeholder="Phone Number" type="tel" aria-label="Phone number" />
            <DS.Input placeholder="What’s feeling most unclear in your marketing now?" aria-label="Message" />
            <div style={{ textAlign: 'center', marginTop: 6 }}><DS.Button type="submit" size="large">Start a Conversation</DS.Button></div>
          </form>
        </div>
      </div>
    </section>);

}
window.StartConversation = StartConversation;

/* A primary CTA that books the real Calendly call */
function BookButton({ children = 'Work With Laura', ...props }) {
  return <DS.Button href={CALENDLY} target="_blank" rel="noopener" {...props}>{children}</DS.Button>;
}
window.BookButton = BookButton;

/* ---------------- Header ---------------- */
function Logo({ knockout = false }) {
  return (
    <a className={`logo ${knockout ? 'logo--knockout' : ''}`} href="index.html" aria-label="Laura Capes Terry — strategic marketing guidance">
      <img className="logo__img" src={window.__resources && window.__resources.logo || 'assets/logo-horizontal.png'} alt="Laura Capes Terry — strategic marketing guidance" />
    </a>);

}
function Header({ current }) {
  const [open, setOpen] = React.useState(false); // mobile drawer
  const [mega, setMega] = React.useState(null); // open mega-menu label
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

  return (
    <header className="site-header" onMouseLeave={scheduleClose}>
      <div className="navbar">
        <div className="navbar__inner">
          <a className="navbar__logo" href="index.html" aria-label="Laura Capes Terry — home">
            <img src={window.__resources && window.__resources.logo || 'assets/logo-horizontal.png'} alt="Laura Capes Terry, MBA" />
          </a>

          <nav className="nav" aria-label="Primary">
            {NAV_TOP.map((m) => {
              const hasMenu = Array.isArray(m.items) && m.items.length > 0;
              if (!hasMenu) {
                return (
                  <div key={m.label} className="nav__item">
                    <a className={`nav__top ${current === m.label ? 'is-active' : ''}`} href={m.href}>{m.label}</a>
                  </div>);

              }
              return (
                <div key={m.label} className={`nav__item ${mega === m.label ? 'is-open' : ''}`}
                onMouseEnter={() => openMega(m.label)} onMouseLeave={scheduleClose}>
                  <a className={`nav__top ${current === m.label ? 'is-active' : ''}`} href={m.href}
                  aria-expanded={mega === m.label} aria-haspopup="true"
                  onFocus={() => openMega(m.label)}>
                    {m.label}<i className="fa-solid fa-chevron-down chev" aria-hidden="true"></i>
                  </a>
                  <div className={`dropdown ${mega === m.label ? 'is-open' : ''}`}
                  onMouseEnter={() => clearTimeout(closeTimer.current)}>
                    <ul className="drop__menu drop__root">
                      {m.items.map((node, i) => <DropItem key={node.label + i} node={node} />)}
                    </ul>
                  </div>
                </div>);

            })}
          </nav>

          <div className="navbar__right">
            <span className="navbar__social">
              <a href="https://www.facebook.com/lauracapesterry" target="_blank" rel="noopener" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/lauracapesterrymba/" target="_blank" rel="noopener" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            </span>
            <span className="navbar__cta">
              <DS.Button href="contact.html" variant="primary" size="small">Contact</DS.Button>
            </span>
            <button className="hamburger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
              <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer — nested accordion */}
      <div className={`drawer ${open ? 'is-open' : ''}`}>
        {NAV_TOP.map((m) => {
          const hasMenu = Array.isArray(m.items) && m.items.length > 0;
          if (!hasMenu) {
            return <a key={m.label} className="drawer__link" href={m.href}>{m.label}</a>;
          }
          return (
            <div key={m.label} className="drawer__group">
              <button className="drawer__top" aria-expanded={drawerSub === m.label}
              onClick={() => setDrawerSub((s) => s === m.label ? null : m.label)}>
                {m.label}<i className={`fa-solid fa-chevron-${drawerSub === m.label ? 'up' : 'down'}`}></i>
              </button>
              <div className={`drawer__sub ${drawerSub === m.label ? 'is-open' : ''}`}>
                <a href={m.href} className="drawer__suboverview">All {m.label} →</a>
                {m.items.map((node, i) => <DrawerItem key={node.label + i} node={node} depth={0} />)}
              </div>
            </div>);

        })}
        <a className="drawer__cta" href="contact.html">Contact →</a>
      </div>
    </header>);

}

/* ---------------- Footer ---------------- */
function Footer() {
  const toast = useToast();
  const IG_URL = 'https://www.instagram.com/lauracapesterrymba/';
  const shortLinks = [
  ['Home', 'index.html'], ['About', 'about.html'], ['How I Help', 'services.html'],
  ['Podcast', 'podcast.html'], ['Blog', 'blog.html'], ['Resources', 'resources.html']];

  const igPhotos = [
  'pool-portrait.png', 'gala.png', 'award-couple.png', 'belocal-group.png',
  'library-couple.png', 'podcast.png', 'beach-sunset.png', 'resort.png'];

  const legal = [
  ['Terms', 'contact.html'], ['Privacy', 'contact.html'],
  ['Cookie Policy', 'contact.html'], ['Support', 'contact.html']];

  return (
    <footer className="site-footer">
      {/* Instagram strip */}
      <div className="ig-strip">
        <a className="ig-strip__tag" href={IG_URL} target="_blank" rel="noopener">@lauracapesterrymba</a>
        <div className="ig-strip__row">
          {igPhotos.map((f, i) =>
          <a key={i} className="ig-strip__cell" href={IG_URL} target="_blank" rel="noopener" aria-label="View on Instagram">
              <img src={`assets/moments/${f}`} alt="" loading="lazy" />
              <span className="ig-strip__icon"><i className="fa-brands fa-instagram"></i></span>
            </a>
          )}
        </div>
      </div>

      {/* Three-column body */}
      <div className="footer-main">
        <div className="footer-col footer-col--links">
          <div className="footer-arch">
            <h3 className="footer-head">Short Links</h3>
            <nav className="footer-shortlinks" aria-label="Footer">
              {shortLinks.map(([l, h]) => <a key={l} href={h}>{l}</a>)}
            </nav>
            <span className="footer-arch__base" aria-hidden="true"></span>
          </div>
        </div>

        <div className="footer-col footer-col--brand">
          <a className="footer-logo" href="index.html" aria-label="Laura Capes Terry — home">
            <img src={window.__resources && window.__resources.logo || 'assets/logo-horizontal.png'} alt="Laura Capes Terry, MBA" />
          </a>
          <p className="footer-connect">Let’s stay connected</p>
          <div className="footer-social footer-social--lg">
            <a href="https://www.facebook.com/lauracapesterry" target="_blank" rel="noopener" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
            <a href={IG_URL} target="_blank" rel="noopener" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            <a href="podcast.html" aria-label="Podcast"><i className="fa-solid fa-microphone-lines"></i></a>
            <a href={CALENDLY} target="_blank" rel="noopener" aria-label="Book a call"><i className="fa-solid fa-phone"></i></a>
          </div>
        </div>

        <div className="footer-col footer-col--news">
          <h3 className="footer-head">Join the Newsletter</h3>
          <p className="footer-news__desc">
            Practical, human-first marketing guidance — and the smartest ways to use AI without losing your voice. No spam, ever.
          </p>
          <form className="footer-form" onSubmit={(e) => {e.preventDefault();toast('You’re in! Watch your inbox for Laura’s next note.');}}>
            <DS.Input placeholder="First name" aria-label="First name" required />
            <DS.Input placeholder="Email address" type="email" aria-label="Email" required />
            <DS.Button type="submit" fullWidth>Join Now</DS.Button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">© 2026 Laura Capes Terry, MBA · Grayson Media LLC</span>
      </div>
    </footer>);

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
      entries.forEach((en) => {if (en.isIntersecting) {en.target.classList.add('is-in');io.unobserve(en.target);}});
    }, { threshold: 0.12 });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  });
}

/* ---------------- App shell ---------------- */
function App({ pageKey, Page }) {
  const [toast, setToast] = React.useState('');
  const TOP_FOR_PAGE = {
    index: 'Home',
    starthere: 'Start Here',
    about: 'About', reviews: 'About', awards: 'About', givingback: 'About', laurastory: 'About', press: 'About', speaking: 'About', whybelocal: 'About',
    services: 'How I Help', belocal: 'How I Help', brandawareness: 'How I Help', community: 'How I Help', marketingstrategy: 'How I Help', education: 'How I Help',
    podcast: 'Podcast',
    blog: 'Blog', post: 'Blog',
    resources: 'Resources', 'ask-laura': 'Resources', guides: 'Resources', frameworks: 'Resources', videos: 'Resources', workshops: 'Resources', books: 'Resources', partners: 'Resources', bootcamp: 'Resources'
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
    </SiteCtx.Provider>);

}

window.renderSite = function (pageKey) {
  const Page = (window.__pages || {})[pageKey];
  if (!Page) {console.error('No page registered for', pageKey);return;}
  ReactDOM.createRoot(document.getElementById('root')).render(<App pageKey={pageKey} Page={Page} />);
};