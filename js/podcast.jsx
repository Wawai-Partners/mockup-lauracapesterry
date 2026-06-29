/* Laura Capes Terry — Podcast (Be Locally Loved) */
(function () {
  const { Button, Pill } = window.LauraCapesTerryDesignSystem_1d8d61;

  function PlayRow({ n, title, len }) {
    return (
      <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 18, padding: '18px 22px', background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xs)' }}>
        <div style={{ width: 46, height: 46, flex: 'none', borderRadius: '50%', background: 'var(--color-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>
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
                <Button variant="onDark" href="https://app.kajabi.com/podcasts/2148067790/feed" target="_blank" rel="noopener"><i className="fa-solid fa-rss"></i>&nbsp; Subscribe via RSS</Button>
                <Button variant="onDark"><i className="fa-brands fa-apple"></i>&nbsp; Apple Podcasts</Button>
                <Button variant="onDark"><i className="fa-brands fa-spotify"></i>&nbsp; Spotify</Button>
              </div>
            </div>
            <div className="reveal" style={{ alignSelf: 'center' }}>
              <div style={{ aspectRatio: '1 / 1', maxWidth: 360, marginLeft: 'auto', borderRadius: 'var(--radius-lg)', background: 'linear-gradient(150deg, var(--color-primary), var(--color-primary-active))', boxShadow: 'var(--shadow-lg)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff', textAlign: 'center', padding: 36 }}>
                <i className="fa-solid fa-microphone-lines" style={{ fontSize: 44, marginBottom: 18, opacity: 0.9 }}></i>
                <div className="h-display" style={{ fontSize: 'var(--fs-h3)', color: '#fff', lineHeight: 1.15 }}>Be Locally Loved</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 13, letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: 14, color: 'var(--lct-sky-200)' }}>A BeLocal Georgetown Show</div>
              </div>
            </div>
          </div>
        </section>

        {/* About the show */}
        <section className="bg-card section">
          <window.Container>
            <window.SectionTitle title="A show about connection"
              sub="In a world that’s becoming faster, louder, and more automated, Be Locally Loved slows down to celebrate the people and businesses that make a community feel like home." />
            <div className="grid grid-3" style={{ marginTop: 48 }}>
              {[
                ['fa-store', 'Beloved local businesses', 'The makers, shop owners, and service providers who show up for their neighbors every day.'],
                ['fa-people-group', 'Community leaders', 'The connectors and organizers quietly strengthening the places we live and work.'],
                ['fa-seedling', 'Stories that build trust', 'Honest conversations about growing a business with heart — and being chosen for the right reasons.'],
              ].map(([ic, t, b]) => (
                <div key={t} className="reveal" style={{ textAlign: 'center' }}>
                  <div style={{ width: 60, height: 60, margin: '0 auto 18px', borderRadius: 14, background: 'var(--surface-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className={`fa-solid ${ic}`} style={{ color: 'var(--color-primary)', fontSize: 24 }}></i>
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
            <window.SectionTitle align="left" title="Latest episodes"
              sub="New conversations with the people building stronger, more connected communities." />
            <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 820 }}>
              <PlayRow n="03" title="Why being chosen starts with being trusted" len="38 min" />
              <PlayRow n="02" title="The first 90 days: welcoming new neighbors well" len="41 min" />
              <PlayRow n="01" title="Welcome to Be Locally Loved" len="29 min" />
            </div>
            <div style={{ marginTop: 32 }}>
              <Button variant="outline" href="https://app.kajabi.com/podcasts/2148067790/feed" target="_blank" rel="noopener">See all episodes</Button>
            </div>
          </window.Container>
        </section>

        {/* Other show CTA */}
        <section className="bg-tint section">
          <window.Container>
            <div className="reveal card" style={{ maxWidth: 760, margin: '0 auto', display: 'grid', gridTemplateColumns: '56px 1fr auto', gap: 20, alignItems: 'center', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ width: 56, height: 56, borderRadius: 14, background: 'var(--surface-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="fa-solid fa-video" style={{ color: 'var(--color-primary)', fontSize: 22 }}></i>
              </div>
              <div>
                <h3 className="h-display" style={{ fontSize: 'var(--fs-h4)', marginBottom: 4 }}>Also from Laura: The Unbridled Creative</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.55, color: 'var(--text-body)', margin: 0 }}>A faith-centered video podcast for entrepreneurs and creatives called to build differently.</p>
              </div>
              <Button variant="outline" size="small" href="https://theunbridledcreative.com/" target="_blank" rel="noopener">Visit</Button>
            </div>
          </window.Container>
        </section>
      </div>
    );
  }
  window.__pages = window.__pages || {};
  window.__pages.podcast = PodcastPage;
})();
