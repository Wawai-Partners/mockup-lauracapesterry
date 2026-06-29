/* Laura Capes Terry — About: In the Media / Press (/about/press) */
(function () {
  const { Pill, Button } = window.LauraCapesTerryDesignSystem_1d8d61;
  const para = { fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, color: 'var(--text-body)', margin: '0 0 16px' };

  function PressPage() {
    const features = [
    ['fa-newspaper', 'FAST Company Magazine', 'Cover feature', 'Recognized on the cover for innovative marketing — a national spotlight on creative, results-driven brand work.'],
    ['fa-award', 'Texas Downtown Association', 'President\u2019s Award', 'BeLocal Georgetown honored for outstanding contribution to the vitality of a Texas downtown community.'],
    ['fa-medal', 'National Association of Printers & Lithographers', 'Benny Award', 'Awarded for innovative marketing that set a new standard in the industry.'],
    ['fa-trophy', 'Georgetown\u2019s Best', '2023 · 2024 · 2025', 'Repeatedly recognized by the Georgetown community as a best-in-class local marketing partner.']];


    const appearances = [
    ['fa-microphone-lines', 'BNI Featured Speaker Presentation', 'Keynote', 'A featured-speaker session on building trust-based marketing that compounds — delivered to a room of referral-driven business owners.', 'https://www.youtube.com/watch?v=TVNhz8bQdjI'],
    ['fa-comments', 'BNI Testimonials', 'Member spotlight', 'Fellow business leaders share what it&rsquo;s like to work alongside Laura and the BeLocal ecosystem.', 'https://www.youtube.com/watch?v=plaGFgImBPk'],
    ['fa-podcast', 'Be Locally Loved Podcast', 'Host', 'Laura&rsquo;s own podcast celebrating the people and stories behind Georgetown&rsquo;s most beloved local businesses.', 'podcast.html'],
    ['fa-headphones', 'The Unbridled Creative Podcast', 'Co-host', 'Conversations on creativity, courage, and building a meaningful business in a noisy, AI-driven world.', 'https://theunbridledcreative.com/']];


    return (
      <div data-screen-label="In the Media / Press">
        {/* Hero */}
        <section className="bg-tint section--sm" data-screen-label="Press hero">
          <window.Container>
            <div className="reveal" style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center', paddingTop: 24, paddingBottom: 24 }}>
              <Pill variant="soft" style={{ marginBottom: 16 }}>About · In the Media</Pill>
              <h1 className="h-display" style={{ fontSize: 'var(--fs-h1)', marginBottom: 16 }}>
                Recognized for marketing that earns <span className="jk-script" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--color-primary)' }}>trust</span>
              </h1>
              <p className="lead">From national magazine covers to local awards, podcast mics to keynote stages — Laura&rsquo;s work has been recognized for one consistent thing: clear, human marketing that delivers real results.</p>
            </div>
          </window.Container>
        </section>

        {/* As seen in — award logos */}
        <section className="bg-card section--sm" data-screen-label="As seen in">
          <window.Container>
            <p style={{ textAlign: 'center', fontFamily: 'var(--font-subhead)', fontSize: 13, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-primary)', margin: '0 0 32px' }}>
              Recognition &amp; honors
            </p>
            <div className="home-recog__row reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: 36, justifyContent: 'center', alignItems: 'center' }}>
              {['texas-downtown-award-winner.png', 'georgetowns-best-2025.png', 'georgetowns-best-2024.png', 'georgetowns-best-2023.png', 'fg-society-certified-marketer.png', 'storybrand-certified-guide.png'].map((f) =>
              <img key={f} src={`assets/awards/${f}`} alt="" style={{ height: 120, width: 'auto', objectFit: 'contain' }} />
              )}
            </div>
          </window.Container>
        </section>

        {/* Featured coverage */}
        <section className="bg-page section" data-screen-label="Featured coverage">
          <window.Container>
            <window.SectionTitle title="Featured" script="coverage"
            sub="Selected recognition for innovative, results-driven marketing across three decades." />
            <div className="heart-divider" aria-hidden="true"><i className="fa-solid fa-heart"></i></div>
            <div className="grid grid-2" style={{ marginTop: 48 }}>
              {features.map(([ic, t, tag, b]) =>
              <div key={t} className="reveal card" style={{ display: 'flex', gap: 20, textAlign: 'left', alignItems: 'flex-start' }}>
                  <span style={{ flex: 'none', width: 56, height: 56, borderRadius: '50%', background: 'var(--surface-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className={`fa-solid ${ic}`} style={{ color: 'var(--color-primary)', fontSize: 24 }}></i>
                  </span>
                  <div>
                    <p style={{ fontFamily: 'var(--font-subhead)', fontSize: 12.5, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-primary)', margin: '0 0 4px' }}>{tag}</p>
                    <h3 className="ed-serif" style={{ marginBottom: 8, fontSize: '20px' }}>{t}</h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.65, color: 'var(--text-body)', margin: 0 }}>{b}</p>
                  </div>
                </div>
              )}
            </div>
          </window.Container>
        </section>

        {/* Appearances */}
        <section className="bg-card section" data-screen-label="Appearances">
          <window.Container>
            <window.SectionTitle title="Talks &amp;" script="appearances"
            sub="Where you can see and hear Laura — on stage and behind the mic." />
            <div className="heart-divider" aria-hidden="true"><i className="fa-solid fa-heart"></i></div>
            <div className="grid grid-2" style={{ marginTop: 48 }}>
              {appearances.map(([ic, t, tag, b, href]) => {
                const ext = href.startsWith('http');
                return (
                  <a key={t} className="reveal card" href={href} target={ext ? '_blank' : undefined} rel={ext ? 'noopener' : undefined} style={{ display: 'flex', gap: 20, textAlign: 'left', alignItems: 'flex-start', textDecoration: 'none', color: 'inherit' }}>
                    <span style={{ flex: 'none', width: 56, height: 56, borderRadius: '50%', background: 'var(--surface-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className={`fa-solid ${ic}`} style={{ color: 'var(--color-primary)', fontSize: 24 }}></i>
                    </span>
                    <div>
                      <p style={{ fontFamily: 'var(--font-subhead)', fontSize: 12.5, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-primary)', margin: '0 0 4px' }}>{tag}</p>
                      <h3 className="ed-serif" style={{ marginBottom: 8, fontSize: '20px' }}>{t}</h3>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.65, color: 'var(--text-body)', margin: '0 0 10px' }} dangerouslySetInnerHTML={{ __html: b }}></p>
                      <span style={{ fontFamily: 'var(--font-subhead)', fontWeight: 600, fontSize: 14, color: 'var(--color-primary)' }}>Watch &amp; listen <i className="fa-solid fa-arrow-right" style={{ fontSize: 12 }}></i></span>
                    </div>
                  </a>);

              })}
            </div>
          </window.Container>
        </section>

        {/* Where Laura teaches */}
        <section className="bg-page section" data-screen-label="Where Laura teaches">
          <window.Container>
            <window.SectionTitle title="Where Laura" script="teaches"
            sub="Laura teaches marketing, media, branding, and AI for these organizations." />
            <div className="heart-divider" aria-hidden="true"><i className="fa-solid fa-heart"></i></div>
            <div className="grid grid-3" style={{ marginTop: 48 }}>
              {[
                ['fa-building', 'Georgetown Chamber of Commerce'],
                ['fa-store', 'Downtown Georgetown Association'],
                ['fa-people-group', 'Professional Women of Williamson County']
              ].map(([ic, name]) =>
              <div key={name} className="reveal card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
                  <span style={{ flex: 'none', width: 56, height: 56, borderRadius: '50%', background: 'var(--surface-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className={`fa-solid ${ic}`} style={{ color: 'var(--color-primary)', fontSize: 24 }}></i>
                  </span>
                  <h3 className="ed-serif" style={{ margin: 0, fontSize: '19px', lineHeight: 1.35 }}>{name}</h3>
                </div>
              )}
            </div>
          </window.Container>
        </section>

        {/* Media inquiry */}
        <section className="bg-dark section" data-screen-label="Media inquiry">
          <window.Container>
            <div className="split" style={{ alignItems: 'center' }}>
              <div className="reveal">
                <h2 className="h-display" style={{ fontSize: 'var(--fs-h2)', color: '#fff', marginBottom: 14 }}>Working on a story or booking a guest?</h2>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lead)', lineHeight: 1.6, color: 'rgba(255,255,255,0.92)', margin: '0 0 24px' }}>
                  Laura is available for interviews, panels, podcasts, and speaking engagements on local marketing, fractional CMO leadership, and using AI without losing the human heart of your brand.
                </p>
                <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                  <Button href="contact.html" variant="accent" style={{ background: '#fff' }}>Media Inquiry <i className="fa-solid fa-heart"></i></Button>
                  <Button href="speaking-writing.html" variant="onDark">Speaking &amp; Writing</Button>
                </div>
              </div>
              <img className="reveal" src="assets/laura-headshot.jpg" alt="Laura Capes Terry — press headshot" style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', display: 'block' }} />
            </div>
          </window.Container>
        </section>
      </div>);

  }
  window.__pages = window.__pages || {};
  window.__pages.press = PressPage;
})();
