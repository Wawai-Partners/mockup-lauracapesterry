/* Laura Capes Terry — BeLocal Georgetown */
(function () {
  const { Button, Input, Pill } = window.LauraCapesTerryDesignSystem_1d8d61;

  function BeLocalPage() {
    const toast = window.useToast();
    return (
      <div>
        {/* Hero */}
        <section className="bg-dark" style={{ position: 'relative', overflow: 'hidden' }}>
          <img src="assets/belocal-georgetown-cover.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.22 }} />
          <div className="container" style={{ position: 'relative', paddingTop: 96, paddingBottom: 96, textAlign: 'center', maxWidth: 820 }}>
            <div className="reveal">
              <Pill style={{ marginBottom: 18, background: 'rgba(255,255,255,0.14)', borderColor: 'rgba(255,255,255,0.25)' }}>BeLocal Georgetown</Pill>
              <h1 className="h-display" style={{ fontSize: 'var(--fs-display)', color: '#fff', marginBottom: 16 }}>Be the business new neighbors trust first</h1>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lead)', lineHeight: 1.6, color: 'rgba(255,255,255,0.92)', margin: '0 auto 28px', maxWidth: 560 }}>
                New homeowners are actively choosing who to work with. BeLocal helps make sure your name is one of the first they see.
              </p>
              <Button variant="accent" style={{ background: '#fff' }} size="large" href="#fit">See if we’re a fit <i className="fa-solid fa-clipboard-check"></i></Button>
            </div>
          </div>
        </section>

        {/* The problem */}
        <section className="bg-card section">
          <div className="container split">
            <div className="reveal">
              <h2 className="h-display" style={{ fontSize: 'var(--fs-h3)', marginBottom: 16 }}>Newcomers don’t know you exist — yet</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.65, color: 'var(--text-body)', margin: '0 0 20px' }}>
                Georgetown is growing quickly — and that creates two real challenges for local businesses.
              </p>
              {[
                ['Brand awareness dilution', 'As thousands of new residents arrive, even well-loved businesses get lost in the noise of a rapidly expanding market.'],
                ['A closing window', 'New movers form their habits — and choose their go-to businesses — in their very first months. Miss it, and you’re competing uphill later.'],
              ].map(([t, b], i) => (
                <div key={i} style={{ display: 'flex', gap: 14, marginBottom: 16 }}>
                  <span style={{ flex: 'none', width: 30, height: 30, borderRadius: '50%', background: 'var(--surface-tint)', color: 'var(--color-primary)', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-heading)' }}>{i + 1}</span>
                  <div>
                    <div className="h-display" style={{ fontSize: 18, marginBottom: 4 }}>{t}</div>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)', margin: 0 }}>{b}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="reveal card bg-tint" style={{ border: 'none' }}>
              <h3 className="h-display" style={{ fontSize: 'var(--fs-h4)', marginBottom: 14 }}>Make a great first impression — <em>before they choose someone else</em></h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.65, color: 'var(--text-body)', fontWeight: 700, margin: '0 0 14px' }}>BeLocal gives you something you can’t create on your own:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['Trusted introductions to new residents at the perfect moment', 'A premium print + digital presence among the area’s best businesses', 'Credibility by association with a curated local guide'].map((t) => (
                  <li key={t} style={{ display: 'flex', gap: 12 }}>
                    <i className="fa-solid fa-check" style={{ color: 'var(--color-accent)', marginTop: 4 }}></i>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.6, color: 'var(--text-body)' }}>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Why rely */}
        <section className="bg-page section">
          <window.Container>
            <window.SectionTitle title="Why local businesses rely on BeLocal"
              sub="BeLocal functions like a yellow brick road for newcomers — guiding them to the best places to go, the best things to do, and the most trusted businesses in their new backyard." />
            <div className="grid grid-3" style={{ marginTop: 48 }}>
              {[
                ['fa-map-location-dot', 'An essential resource for new movers', 'New movers rely on BeLocal because they don’t yet have word-of-mouth connections. It becomes a trusted starting point.'],
                ['fa-sack-dollar', 'A high-intent audience', 'New homeowners typically spend more in their first six months than in the following years. This is a critical buying window.'],
                ['fa-infinity', 'Long shelf life + digital reach', 'BeLocal combines the staying power of print with the reach of digital — extending visibility well beyond a single touchpoint.'],
              ].map(([ic, t, b]) => (
                <div key={t} className="reveal card" style={{ textAlign: 'left' }}>
                  <div style={{ width: 52, height: 52, marginBottom: 16, borderRadius: 12, background: 'var(--surface-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className={`fa-solid ${ic}`} style={{ color: 'var(--color-accent)', fontSize: 21 }}></i>
                  </div>
                  <h3 className="h-display" style={{ fontSize: 'var(--fs-h4)', marginBottom: 10 }}>{t}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)', margin: 0 }}>{b}</p>
                </div>
              ))}
            </div>
          </window.Container>
        </section>

        {/* How it works */}
        <section className="bg-card section">
          <window.Container>
            <window.SectionTitle title="Here’s how it works" sub="Getting into BeLocal is simple — and Laura’s team handles the heavy lifting." />
            <div className="grid grid-3" style={{ marginTop: 48 }}>
              {[
                ['Pick your size and position', 'Choose the placement that fits your goals and budget within the guide.'],
                ['We design your ad — or you provide it', 'Our team can craft a polished, on-brand ad for you, or place your own.'],
                ['Get in front of new neighbors', 'Your business reaches new movers in print and digital, right when they’re choosing.'],
              ].map(([t, b], i) => (
                <div key={t} className="reveal" style={{ textAlign: 'center' }}>
                  <div style={{ width: 54, height: 54, margin: '0 auto 18px', borderRadius: '50%', background: 'var(--surface-tint-strong)', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</div>
                  <h3 className="h-display" style={{ fontSize: 'var(--fs-h4)', marginBottom: 10 }}>{t}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)', margin: 0 }}>{b}</p>
                </div>
              ))}
            </div>
          </window.Container>
        </section>

        {/* Meet the publisher */}
        <section className="bg-tint section">
          <div className="container split">
            <img className="reveal img-card" src="assets/laura-headshot.jpg" alt="Laura Capes Terry" style={{ width: '100%' }} />
            <div className="reveal">
              <div className="eyebrow" style={{ marginBottom: 12 }}>Meet the Publisher</div>
              <h2 className="h-display" style={{ fontSize: 'var(--fs-h3)', marginBottom: 8 }}>Laura Capes Terry, MBA</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.65, color: 'var(--text-body)', margin: '0 0 16px' }}>
                Laura is a StoryBrand Certified Guide, award-winning strategic marketer, and the publisher of BeLocal Georgetown. With over 30 years of marketing experience, she has helped hundreds of businesses be seen, trusted, and chosen.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.65, color: 'var(--text-body)', margin: '0 0 24px' }}>
                BeLocal isn’t a magazine — it’s a proactive, community-building system that welcomes new residents and strengthens the local businesses they’ll come to love.
              </p>
              <Button variant="ghost" href="about.html">More about Laura</Button>
            </div>
          </div>
        </section>

        {/* Fit form */}
        <section className="bg-page section" id="fit">
          <window.Container>
            <div className="card reveal" style={{ maxWidth: 640, margin: '0 auto', boxShadow: 'var(--shadow-md)', padding: 40 }}>
              <h2 className="h-display" style={{ fontSize: 'var(--fs-h2)', textAlign: 'center', margin: '0 0 12px' }}>Let’s see if we’re a fit</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'var(--text-body)', textAlign: 'center', margin: '0 0 26px' }}>
                Tell us a little about your business, and we’ll follow up to explore partnership opportunities.
              </p>
              <form onSubmit={(e) => { e.preventDefault(); toast('Thanks! The BeLocal team will be in touch.'); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <Input placeholder="Name" aria-label="Name" required />
                <Input placeholder="Business name" aria-label="Business name" required />
                <Input placeholder="Email" type="email" aria-label="Email" required />
                <Input placeholder="Tell us about your business" aria-label="About" />
                <div style={{ textAlign: 'center', marginTop: 6 }}><Button type="submit">Request information</Button></div>
              </form>
            </div>
          </window.Container>
        </section>
      </div>
    );
  }
  window.__pages = window.__pages || {};
  window.__pages.belocal = BeLocalPage;
})();
