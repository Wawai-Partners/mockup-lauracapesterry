/* Laura Capes Terry — Podcast (Be Locally Loved) */
(function () {
  const { Button, Pill } = window.LauraCapesTerryDesignSystem_1d8d61;

  function PlayRow({ n, title, len }) {
    return (
      <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 18, padding: '18px 22px', background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xs)' }}>
        <div style={{ width: 46, height: 46, flex: 'none', borderRadius: '50%', background: 'var(--surface-tint)', color: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>
          <i className="fa-solid fa-play"></i>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-primary)' }}>Episode {n}</div>
          <div className="h-display" style={{ fontSize: 18, marginTop: 3 }}>{title}</div>
        </div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-muted)' }}>{len}</div>
      </div>
    );
  }

  function EpisodeCard({ n, title, date, len, desc }) {
    return (
      <div className="reveal ep-card">
        <h3 className="ed-serif ep-card__title">{n} — {title}</h3>
        <p className="ep-card__date">{date}</p>
        <div className="ep-player">
          <img className="ep-player__art" src="assets/be-locally-loved-cover.jpg" alt="Be Locally Loved" />
          <div className="ep-player__body">
            <div className="ep-player__label">Be Locally Loved</div>
            <div className="ep-player__name">{n} — {title}</div>
            <div className="ep-player__bar">
              <button className="ep-player__play" aria-label={`Play episode ${n}`}><i className="fa-solid fa-play"></i></button>
              <span className="ep-player__time">0:00</span>
              <span className="ep-player__track"><span></span></span>
              <span className="ep-player__time">{len}</span>
            </div>
          </div>
        </div>
        <p className="ep-card__desc">{desc}</p>
        <Button variant="ghost" size="small" href="https://app.kajabi.com/podcasts/2148067790/feed" target="_blank" rel="noopener">View Episode</Button>
      </div>
    );
  }

  const EPISODES = [
    ['018', 'Behind the Message: How Georgetown Builds Trust, Connection, and Community Through Communication', 'June 17, 2026', '44 min',
      'How clear, consistent communication builds the trust that turns a Georgetown business into a true community staple.'],
    ['017', 'Building Belonging: How Alison Scovie and Jason Evers Helmlich Are Helping Communities Thrive Through Connection', 'June 3, 2026', '47 min',
      'Alison Scovie and Jason Evers Helmlich on creating spaces where people genuinely belong — and why connection is the real growth strategy.'],
    ['016', 'Building Community From the Inside Out with Cat Phelps of the Georgetown Family YMCA', 'May 20, 2026', '42 min',
      'Cat Phelps of the Georgetown Family YMCA on building community from the inside out, one relationship at a time.'],
    ['015', 'How Marketing Works (Part 4 of 4): Marketing is a System, Not a Campaign', 'May 13, 2026', '31 min',
      'The finale of the marketing series: why marketing is a system you build, not a campaign you launch.'],
    ['014', 'How Marketing Works (Part 3 of 4) — The Real ROI of Marketing and Why Most Businesses Measure It Wrong', 'May 6, 2026', '34 min',
      'Most businesses measure marketing ROI wrong. Here’s the real way to think about return — and the long game it requires.'],
    ['013', 'How Marketing Works (Part 2 of 4): The Timeline of Marketing and Why People Quit Too Early', 'April 29, 2026', '33 min',
      'Marketing works on a timeline — and most people quit right before it pays off. Why patience is a strategy.'],
    ['012', 'How Marketing Works (Part 1 of 4): Why “More Leads” is the Wrong First Goal', 'April 22, 2026', '30 min',
      '“More leads” feels like the goal, but it’s usually the wrong first goal. What to focus on instead.'],
    ['011', 'The Power of Moments: How to Elevate Customer Experience Inspired by Disney', 'April 15, 2026', '36 min',
      'Lessons from Disney on designing moments that elevate the customer experience and make people feel genuinely cared for.'],
    ['010', 'Tori Clark — How Faith, Risk, and Surrender Shaped an Award-Winning Entrepreneur', 'April 8, 2026', '49 min',
      'Award-winning entrepreneur Tori Clark on how faith, risk, and surrender shaped her path in business.'],
    ['009', 'The Silent Threat to Every Beloved Local Brand', 'April 1, 2026', '28 min',
      'The quiet threat that erodes even the most beloved local brands — and how to protect against it.'],
    ['008', 'How Marketing Works (Overview): Reframing ROI, Trust, and What Actually Drives Growth', 'March 25, 2026', '35 min',
      'An overview of the marketing series: reframing ROI, trust, and what actually drives sustainable growth.'],
    ['007', 'How to Use AI Without Losing Your Voice', 'March 18, 2026', '32 min',
      'A grounded approach to using AI in your marketing without losing the voice that makes you, you.'],
  ];

  function PodcastPage() {
    const { BookButton } = window;
    return (
      <div>
        {/* Hero */}
        <section className="bg-dark" style={{ position: 'relative', overflow: 'hidden' }}>
          <img src="assets/laura-candid.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.18 }} />
          <div className="container split" style={{ position: 'relative', paddingTop: 72, paddingBottom: 72 }}>
            <div className="reveal" style={{ color: '#fff' }}>
              <Pill style={{ marginBottom: 18, background: 'rgba(255,255,255,0.14)', borderColor: 'rgba(255,255,255,0.25)' }}>The Podcast</Pill>
              <h1 className="h-display" style={{ fontSize: 'var(--fs-h1)', color: '#fff', marginBottom: 8 }}>Be Locally Loved</h1>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--lct-sky-200)', margin: '0 0 18px' }}>Hosted by Laura Capes Terry</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lead)', lineHeight: 1.6, color: 'rgba(255,255,255,0.92)', margin: '0 0 26px', maxWidth: 460 }}>
                Be Locally Loved spotlights beloved local businesses, community leaders, and creative connectors building stronger communities through trust, connection, and service. At its core, it’s a show about connection.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Button variant="accent" style={{ background: '#fff' }} href="https://app.kajabi.com/podcasts/2148067790/feed" target="_blank" rel="noopener">Subscribe via RSS <i className="fa-solid fa-rss"></i></Button>
                <Button variant="accent" style={{ background: '#fff' }}>Apple Podcasts <i className="fa-brands fa-apple"></i></Button>
                <Button variant="accent" style={{ background: '#fff' }}>Spotify <i className="fa-brands fa-spotify"></i></Button>
              </div>
            </div>
            <div className="reveal" style={{ alignSelf: 'center' }}>
              <div style={{ aspectRatio: '1 / 1', maxWidth: 360, marginLeft: 'auto', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', background: '#fff' }}>
                <img src="assets/be-locally-loved-cover.jpg" alt="Be Locally Loved podcast cover" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
              </div>
            </div>
          </div>
        </section>

        {/* About the show */}
        <section className="bg-card section">
          <window.Container>
            <window.SectionTitle title="A show about connection"
              sub="In a world that’s becoming faster, louder, and more automated, Be Locally Loved slows down to celebrate the people and businesses that make a community feel like home." />
            <div className="heart-divider" aria-hidden="true"><i className="fa-solid fa-heart"></i></div>
            <div className="grid grid-3" style={{ marginTop: 48 }}>
              {[
                ['fa-store', 'Beloved local businesses', 'The makers, shop owners, and service providers who show up for their neighbors every day.'],
                ['fa-people-group', 'Community leaders', 'The connectors and organizers quietly strengthening the places we live and work.'],
                ['fa-seedling', 'Stories that build trust', 'Honest conversations about growing a business with heart — and being chosen for the right reasons.'],
              ].map(([ic, t, b]) => (
                <div key={t} className="reveal" style={{ textAlign: 'center' }}>
                  <div style={{ width: 60, height: 60, margin: '0 auto 18px', borderRadius: 14, background: 'var(--surface-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className={`fa-solid ${ic}`} style={{ color: 'var(--color-accent)', fontSize: 24 }}></i>
                  </div>
                  <h3 className="h-display" style={{ fontSize: 'var(--fs-h4)', marginBottom: 10 }}>{t}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)', margin: 0 }}>{b}</p>
                </div>
              ))}
            </div>
          </window.Container>
        </section>

        {/* Episodes */}
        <section className="bg-page section">
          <window.Container>
            <window.SectionTitle align="left" title="All episodes"
              sub="New conversations with the people building stronger, more connected communities." />
            <div className="ep-list">
              {EPISODES.map((e) => (
                <EpisodeCard key={e[0]} n={e[0]} title={e[1]} date={e[2]} len={e[3]} desc={e[4]} />
              ))}
            </div>
            <div style={{ marginTop: 36 }}>
              <Button variant="ghost" href="https://app.kajabi.com/podcasts/2148067790/feed" target="_blank" rel="noopener">Subscribe for new episodes</Button>
            </div>
          </window.Container>
        </section>

        {/* Other show CTA */}
        <section className="bg-tint section">
          <window.Container>
            <div className="reveal card" style={{ maxWidth: 760, margin: '0 auto', display: 'grid', gridTemplateColumns: '56px 1fr auto', gap: 20, alignItems: 'center', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ width: 56, height: 56, borderRadius: 14, background: 'var(--surface-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="fa-solid fa-video" style={{ color: 'var(--color-accent)', fontSize: 22 }}></i>
              </div>
              <div>
                <h3 className="h-display" style={{ fontSize: 'var(--fs-h4)', marginBottom: 4 }}>Also from Laura: The Unbridled Creative</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.55, color: 'var(--text-body)', margin: 0 }}>A faith-centered video podcast for entrepreneurs and creatives called to build differently.</p>
              </div>
              <Button variant="ghost" size="small" href="https://theunbridledcreative.com/" target="_blank" rel="noopener">Visit</Button>
            </div>
          </window.Container>
        </section>
      </div>
    );
  }
  window.__pages = window.__pages || {};
  window.__pages.podcast = PodcastPage;
})();
