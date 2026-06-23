/* Laura Capes Terry — Home (editorial redesign, June 2026)
   Structure & visual language adapted from an editorial creator
   homepage (montage hero · "I'M LAURA" intro · alternating feature
   cards · podcast band · latest list · success carousel · photo
   mosaic), rebuilt entirely on the LCT teal / Fira Sans brand. */
(function () {
  const { Button, Input } = window.LauraCapesTerryDesignSystem_1d8d61;
  const CALENDLY = 'https://calendly.com/laura-terry/discovery-call';

  /* ---- Montage hero ---- */
  const MONTAGE = [
  'assets/laura-candid.jpg',
  'assets/laura-headshot.jpg',
  'assets/laura-all-in-with-ai.png',
  'assets/laura-office-writing.jpg',
  'assets/belocal-georgetown-cover.jpg'];


  function Hero() {
    return (
      <section className="home-hero" data-screen-label="Hero">
        <div className="home-hero__montage" aria-hidden="true">
          {MONTAGE.map((src, i) => <img key={i} src={src} alt="" />)}
        </div>
        <div className="home-hero__scrim" aria-hidden="true"></div>
        <div className="home-hero__inner reveal">
          <p className="home-hero__eyebrow">Strategic marketing guidance · Georgetown, Texas</p>
          <h1>Be seen. Be trusted.<br />Be <span className="ed-em">chosen</span>.</h1>
          <p className="home-hero__sub">
            Helping local business owners build magnetic brands people love and trust —
            by blending modern tools with timeless wisdom.
          </p>
          <Button href={CALENDLY} target="_blank" rel="noopener" size="large">Work With Laura</Button>
        </div>
        <a className="home-scrolldown" href="#promo" aria-label="Scroll down"><i className="fa-solid fa-chevron-down"></i></a>
      </section>);

  }

  /* ---- Promo band ---- */
  function Promo() {
    return (
      <section className="home-promo section--sm" id="promo">
        <div className="container reveal" style={{ maxWidth: 720 }}>
          <span className="home-promo__badge"><i className="fa-solid fa-arrow-down-to-line"></i> Free guide</span>
          <h2 className="ed-serif" style={{ color: '#fff', fontSize: 'var(--fs-h2)', marginBottom: 12 }}>
            Get more clarity in your marketing, <span className="ed-em" style={{ color: 'var(--lct-sky-500)' }}>this week</span>
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.6, color: 'rgba(255,255,255,0.88)', margin: '0 auto 26px', maxWidth: 560 }}>
            Six clarity-first fixes for your homepage — plus AI prompts to help you implement them faster,
            so visitors instantly understand who you help, what you offer, and what to do next.
          </p>
          <Button href="resources.html#guides" variant="onDark" size="large">Get the free guide</Button>
        </div>
      </section>);

  }

  /* ---- "I'M LAURA" intro ---- */
  function Intro() {
    return (
      <section className="home-intro" data-screen-label="Meet Laura">
        <div className="home-intro__grid">
          <div className="home-intro__copy reveal">
            <p className="ed-eyebrow">Meet your guide</p>
            <h2 className="home-intro__lettering">I’m<span className="ed-em">Laura.</span></h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.7, color: 'var(--text-body)', margin: '0 0 16px' }}>
              After 30 years in media, branding, and marketing leadership, I’ve seen too many talented
              entrepreneurs burn out trying to keep up with constant change.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.7, color: 'var(--text-heading)', fontStyle: 'italic', fontWeight: 700, margin: '0 0 24px' }}>
              AI doesn’t replace heart — it amplifies it. And you don’t have to figure it out alone.
            </p>
            <Button href="about.html" variant="outline" style={{ border: '2px solid var(--color-primary)' }}>Learn more</Button>
          </div>
          <div className="home-intro__photo reveal">
            <img src="assets/laura-cutout.png" alt="Laura Capes Terry, MBA" />
          </div>
        </div>
      </section>);

  }

  /* ---- Recognition strip ---- */
  const AWARDS = [
  ['georgetowns-best-2025.png', 'Georgetown’s Best 2025 — Gold'],
  ['georgetowns-best-2024.png', 'Georgetown’s Best 2024 — Gold'],
  ['georgetowns-best-2023.png', 'Georgetown’s Best 2023 — Gold'],
  ['texas-downtown-award-winner.png', 'Texas Downtown Award Winner'],
  ['storybrand-certified-guide.png', 'StoryBrand Certified Guide'],
  ['fg-society-certified-marketer.png', 'FG Society Certified Marketer']];

  function Recognition() {
    return (
      <section className="home-recog section--sm">
        <div className="container">
          <p className="ed-eyebrow reveal" style={{ textAlign: 'center' }}>Recognized &amp; trusted across Georgetown and beyond</p>
          <div className="home-recog__row reveal" style={{ marginTop: 26 }}>
            {AWARDS.map(([f, alt]) => <img key={f} src={`assets/awards/${f}`} alt={alt} title={alt} />)}
          </div>
        </div>
      </section>);

  }

  /* ---- Newsletter ---- */
  function Newsletter() {
    const toast = window.useToast();
    return (
      <section className="bg-card section--sm">
        <div className="container">
          <div className="split" style={{ gridTemplateColumns: '0.6fr 1.4fr', alignItems: 'center' }}>
            <div className="reveal" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', alignSelf: 'flex-end' }}>
              <img src="assets/laura-belocal.png" alt="Laura Capes Terry holding BeLocal Georgetown" style={{ width: '100%', maxWidth: 320, height: 'auto', objectFit: 'contain', marginBottom: 'calc(var(--section-pad-y-sm) * -1)' }} />
            </div>
            <div className="reveal">
              <p className="ed-eyebrow">The weekly note</p>
              <h2 className="ed-serif" style={{ fontSize: 'var(--fs-h3)', marginBottom: 10 }}>
                Learn how to market with clarity and confidence
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'var(--text-body)', margin: '0 0 22px', maxWidth: 540 }}>
                Practical, human-first marketing guidance — and the smartest ways to use AI without losing your voice. No spam, ever.
              </p>
              <form className="home-news__form" onSubmit={(e) => {e.preventDefault();toast('You’re in! Watch your inbox for Laura’s next note.');}}>
                <Input placeholder="First name" aria-label="First name" required />
                <Input placeholder="Email address" type="email" aria-label="Email" required />
                <span><Button type="submit">Subscribe</Button></span>
              </form>
            </div>
          </div>
        </div>
      </section>);

  }

  /* ---- Feature card ---- */
  function Feature({ rev, book, eyebrow, title, em, body, cta, href, img, play, badge }) {
    const cls = `home-feature${rev ? ' home-feature--rev' : ''}${book ? ' home-feature--book' : ''}`;
    return (
      <div className={`${cls} reveal`}>
        <div className="home-feature__media">
          <img src={img} alt="" />
          {play && <button className="play-btn" aria-label="Play" onClick={() => {window.location.href = href;}}><i className="fa-solid fa-play"></i></button>}
          {badge && <div className="home-feature__badge"><b>{badge[0]}</b><span>{badge[1]}</span></div>}
        </div>
        <div className="home-feature__body">
          <p className="ed-eyebrow">{eyebrow}</p>
          <h3 className="ed-serif" style={{ fontSize: 'var(--fs-h2)', marginBottom: 14 }}>
            {title} {em && <span className="ed-em" style={{ color: 'var(--color-primary)' }}>{em}</span>}
          </h3>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, color: 'var(--text-body)', margin: '0 0 24px' }}>{body}</p>
          <Button href={href}>{cta}</Button>
        </div>
      </div>);

  }

  function Features() {
    return (
      <section className="bg-page section">
        <div className="container">
          <Feature
            rev
            eyebrow="Fractional CMO &amp; Strategy"
            title="Take back your time."
            em="Lead with clarity."
            body="Executive-level marketing leadership without the full-time cost. Laura helps you simplify your strategy, strengthen your message, and move forward with focus — one intentional step at a time."
            cta="See how Laura helps"
            href="services.html"
            img="assets/laura-office-writing.jpg" />
          
          <Feature
            eyebrow="Be Locally Loved"
            title="Get inspired by the podcast."
            body="Real conversations with the local owners, builders, and creatives behind Georgetown’s most-loved businesses — on authentic marketing, faith, and growth that lasts."
            cta="Listen now"
            href="podcast.html"
            img="assets/laura-headshot.jpg"
            play />
          
          <Feature
            rev book
            eyebrow="Award-winning local media"
            title="Be seen in BeLocal Georgetown."
            body="The community magazine that connects neighbors with the businesses they’ll come to love. Get your story in front of the people who matter most — right here at home."
            cta="Explore BeLocal"
            href="belocal.html"
            img="assets/belocal-georgetown-cover.jpg"
            badge={['#1', 'Local media']} />
          
        </div>
      </section>);

  }

  /* ---- Podcast band ---- */
  const PLATFORMS = [
  ['fa-brands fa-apple', 'Apple Podcasts'],
  ['fa-brands fa-spotify', 'Spotify'],
  ['fa-brands fa-youtube', 'YouTube'],
  ['fa-brands fa-amazon', 'Amazon Music']];

  function Podcast() {
    return (
      <section data-screen-label="Podcast">
        <div className="home-pod__hero">
          <video src="assets/podcast-hero.mp4" autoPlay loop muted playsInline
          poster="assets/laura-candid.jpg" aria-label="Laura recording the Be Locally Loved podcast" style={{ height: "700px" }}></video>
        </div>
        <div className="home-pod__panel section">
          <div className="container">
            <div className="home-pod__grid">
              <div className="reveal phone-mock">
                <div className="phone-mock__screen">
                  <div className="phone-mock__art">
                    <img src="assets/be-locally-loved-cover.jpg" alt="Be Locally Loved podcast cover" />
                  </div>
                  <div className="phone-mock__meta">
                    <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 15, color: 'var(--text-heading)', margin: '0 0 4px' }}>Be Locally Loved</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-muted)', margin: 0 }}>New episodes weekly</p>
                  </div>
                </div>
              </div>
              <div className="reveal">
                <p className="ed-eyebrow">The podcast</p>
                <h2 className="ed-serif" style={{ fontSize: 'var(--fs-h2)', marginBottom: 14 }}>The Be Locally Loved Podcast</h2>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.7, color: 'var(--text-body)', margin: 0, maxWidth: 560 }}>
                  Laura sits down with the people behind Georgetown’s most-loved businesses to talk honestly
                  about marketing, faith, and building something that lasts. Subscribe wherever you listen.
                </p>
                <div className="platform-row">
                  {PLATFORMS.map(([ic, name]) =>
                  <a key={name} className="platform-pill" href="podcast.html"><i className={ic}></i>{name}</a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>);

  }

  /* ---- The Latest ---- */
  const LATEST = [
  ['How to use AI in your marketing without losing your voice', 'Article · 6 min'],
  ['Five signs your homepage is confusing your visitors', 'Article · 5 min'],
  ['What “be seen, be trusted, be chosen” really means for local brands', 'Podcast · Ep. 24'],
  ['The one question every business owner should answer first', 'Article · 4 min'],
  ['How to stop reacting to trends and start leading with focus', 'Podcast · Ep. 23']];

  function Latest() {
    return (
      <section className="bg-card section">
        <div className="container">
          <div className="home-latest__grid">
            <img className="home-latest__photo reveal" src="assets/laura-all-in-with-ai.png" alt="Laura Capes Terry" />
            <div className="reveal">
              <p className="ed-eyebrow">The latest</p>
              <h2 className="ed-serif" style={{ fontSize: 'var(--fs-h2)', marginBottom: 18 }}>Fresh thinking, every week</h2>
              {LATEST.map(([t, m], i) =>
              <a key={i} className="latest-item" href="blog.html">
                  <span className="latest-item__play"><i className={`fa-solid ${m.startsWith('Podcast') ? 'fa-play' : 'fa-arrow-right'}`}></i></span>
                  <span style={{ flex: 1 }}>
                    <p className="latest-item__title">{t}</p>
                    <p className="latest-item__meta">{m}</p>
                  </span>
                </a>
              )}
              <div style={{ marginTop: 28 }}><Button variant="outline" href="blog.html">View all</Button></div>
            </div>
          </div>
        </div>
      </section>);

  }

  /* ---- Success carousel ---- */
  const STORIES = [
  ['Since partnering with Laura, she’s been an invaluable guide, helping us identify and implement the right strategies for our business. We only regret not reaching out to her sooner.', 'Wendy Del Rio', 'An Idea Front'],
  ['We had no experience in marketing and no idea where to start. Laura immediately understood our situation and clearly laid out the steps we needed to take. For the first time, we could see a clear path forward.', 'Wesley Heinige', 'Bowen Door'],
  ['From the moment I met Laura, I knew I was in good hands. She’s incredibly knowledgeable, genuinely cares about business owners, and leads with integrity — not pressure.', 'Terry Bingman', 'The AG Company']];

  function Success() {
    const [i, setI] = React.useState(0);
    const go = (d) => setI((p) => (p + d + STORIES.length) % STORIES.length);
    const [q, who, org] = STORIES[i];
    return (
      <section className="home-success section">
        <div className="container">
          <p className="ed-eyebrow reveal">Client stories</p>
          <h2 className="ed-serif reveal" style={{ fontSize: 'var(--fs-h2)' }}>
            Will you be the next <span className="ed-em" style={{ color: 'var(--color-primary)' }}>success story</span>?
          </h2>
          <div className="success-card">
            <p className="success-card__quote">“{q}”</p>
            <p className="success-card__who">{who}</p>
            <p className="success-card__org">{org}</p>
          </div>
          <div className="success-dots">
            {STORIES.map((_, k) => <span key={k} className={k === i ? 'on' : ''}></span>)}
          </div>
          <div className="success-nav">
            <button onClick={() => go(-1)} aria-label="Previous"><i className="fa-solid fa-arrow-left"></i></button>
            <button onClick={() => go(1)} aria-label="Next"><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div style={{ marginTop: 30 }}><Button href="reviews.html">Read more reviews</Button></div>
        </div>
      </section>);

  }

  /* ---- Photo mosaic (photo-guide layout) ---- */
  function Mosaic() {
    return (
      <section data-screen-label="Moments">
        <div className="photo-mosaic">
          <div className="pm-pool"><img src="assets/moments/pool-portrait.png" alt="Laura Capes Terry" /></div>
          <div className="pm-gala"><img src="assets/moments/gala.png" alt="Laura with friends at a gala" /></div>
          <div className="pm-award"><img src="assets/moments/award-couple.png" alt="Laura and team with awards" /></div>
          <div className="pm-belocal"><img src="assets/moments/belocal-group.png" alt="The BeLocal team" /></div>
          <div className="pm-cap home-mosaic__cap">
            <p className="ed-serif">Be seen.<br />Be trusted.<br />Be chosen.</p>
            <p>Georgetown, Texas</p>
          </div>
          <div className="pm-library"><img src="assets/moments/library-couple.png" alt="Laura recording at the library" /></div>
          <div className="pm-podcast"><img src="assets/moments/podcast.png" alt="Laura recording the podcast" /></div>
          <div className="pm-beach"><img src="assets/moments/beach-sunset.png" alt="Laura at the beach" /></div>
          <div className="pm-resort"><img src="assets/moments/resort.png" alt="Laura traveling" /></div>
        </div>
      </section>);

  }

  /* ---- Closing CTA ---- */
  function ClosingCTA() {
    const toast = window.useToast();
    return (
      <section className="bg-page section" id="contact">
        <div className="container">
          <div className="card reveal" style={{ maxWidth: 640, margin: '0 auto', boxShadow: 'var(--shadow-md)', padding: 40 }}>
            <p className="ed-eyebrow" style={{ textAlign: 'center' }}>Start here</p>
            <h2 className="ed-serif" style={{ fontSize: 'var(--fs-h2)', textAlign: 'center', margin: '0 0 12px' }}>Let’s start a conversation</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'var(--text-body)', textAlign: 'center', margin: '0 0 26px' }}>
              A short, intentional conversation to understand your goals, find quick wins, and recommend a smart next step.
            </p>
            <form onSubmit={(e) => {e.preventDefault();toast('Thanks! Laura will reach out shortly.');}} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Input placeholder="Name" aria-label="Name" required />
              <Input placeholder="Email" type="email" aria-label="Email" required />
              <Input placeholder="Company name" aria-label="Company name" />
              <Input placeholder="What’s feeling most unclear in your marketing right now?" aria-label="Message" />
              <div style={{ textAlign: 'center', marginTop: 6 }}><Button type="submit">Start a conversation</Button></div>
            </form>
          </div>
        </div>
      </section>);

  }

  function HomePage() {
    return (
      <div>
        <Hero />
        <Promo />
        <Intro />
        <Recognition />
        <Newsletter />
        <Features />
        <Podcast />
        <Latest />
        <Success />
        <Mosaic />
        <ClosingCTA />
      </div>);

  }

  window.__pages = window.__pages || {};
  window.__pages.index = HomePage;
})();