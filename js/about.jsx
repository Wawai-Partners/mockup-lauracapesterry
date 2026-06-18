/* Laura Capes Terry — About */
(function () {
  const { Button, SectionHeading } = window.LauraCapesTerryDesignSystem_1d8d61;

  function Check({ children }) {
    return (
      <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
        <i className="fa-solid fa-check" style={{ color: 'var(--color-primary)', marginTop: 4 }}></i>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'var(--text-body)' }}>{children}</span>
      </li>
    );
  }

  function AboutPage() {
    const { BookButton } = window;
    const experiences = [
      ['fa-circle-check', 'Make Confident Decisions', 'Clients stop wasting time and money on disconnected tactics. Instead, they gain steady leadership that helps every decision, dollar, and tool serve the bigger picture.'],
      ['fa-heart', 'Fall Back in Love With Your Business', 'Laura reconnects entrepreneurs to the heart behind their work so marketing feels aligned, energizing, and meaningful again.'],
      ['fa-briefcase', 'Executive-Level Leadership Without Agency Bloat', 'Clients get executive-level marketing leadership without unnecessary overhead — using AI and modern tools wisely while building trust.'],
      ['fa-wind', 'Quiet the Noise and Reduce Overwhelm', 'Fewer guesses, fewer pivots, fewer distractions. Laura helps entrepreneurs step out of reactive mode and into simple, repeatable marketing.'],
      ['fa-compass', 'Gain Strategic Clarity and Direction', 'Clear, grounded direction that aligns goals, messaging, and priorities — so clients know what to focus on, what to ignore, and why.'],
      ['fa-handshake-angle', 'Attract the Right Clients with Integrity', 'When messaging becomes clear and consistent, businesses naturally attract people who value what they offer — built on trust and warmth.'],
    ];
    return (
      <div>
        {/* Hero */}
        <section className="bg-tint section">
          <div className="container split">
            <div className="reveal">
              <div className="eyebrow" style={{ marginBottom: 12 }}>Meet Laura</div>
              <h1 className="h-display" style={{ fontSize: 'var(--fs-h1)', marginBottom: 8 }}>About Laura Capes Terry, MBA</h1>
              <p className="accent" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lead)', fontWeight: 700, margin: '0 0 18px' }}>Fractional CMO + AI Consultant</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.65, color: 'var(--text-body)', margin: '0 0 14px' }}>
                Laura Capes Terry provides strategic marketing leadership for entrepreneurs and local business owners who want clarity, confidence, and a smarter way to grow.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.65, color: 'var(--text-body)', margin: '0 0 26px' }}>
                Her work isn’t about doing more marketing. It’s about making the right decisions in a noisy, AI-driven world.
              </p>
              <BookButton>Schedule a Discovery Call</BookButton>
            </div>
            <img className="reveal img-card" src="assets/laura-headshot.jpg" alt="Laura Capes Terry" style={{ width: '100%' }} />
          </div>
        </section>

        {/* Strategic guidance */}
        <section id="story" className="bg-card section">
          <div className="container split">
            <img className="reveal img-card" src="assets/laura-office-writing.jpg" alt="Laura at work" style={{ width: '100%' }} />
            <div className="reveal">
              <h2 className="h-display" style={{ fontSize: 'var(--fs-h3)', marginBottom: 16 }}>Strategic guidance, not random tactics</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.65, color: 'var(--text-body)', margin: '0 0 16px' }}>Laura partners with you to:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <Check>Clarify your message so people understand what you do — and what to do next</Check>
                <Check>Choose the right tools and AI workflows, and quiet the ones that just add noise</Check>
                <Check>Build a simple, repeatable marketing system you can actually sustain</Check>
                <Check>Lead every decision with strategy, purpose, and heart</Check>
              </ul>
              <BookButton>Work With Laura</BookButton>
            </div>
          </div>
        </section>

        {/* What clients experience */}
        <section className="bg-page section">
          <window.Container>
            <window.SectionTitle title="What Clients Experience When They Work with Laura"
              sub="The shift isn’t just better marketing — it’s clarity, confidence, and a renewed love for the business you built." />
            <div className="grid grid-3" style={{ marginTop: 48 }}>
              {experiences.map(([ic, t, b]) => (
                <div key={t} className="reveal card" style={{ textAlign: 'left' }}>
                  <div style={{ width: 52, height: 52, marginBottom: 16, borderRadius: 12, background: 'var(--surface-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className={`fa-solid ${ic}`} style={{ color: 'var(--color-primary)', fontSize: 21 }}></i>
                  </div>
                  <h3 className="h-display" style={{ fontSize: 'var(--fs-h4)', marginBottom: 10 }}>{t}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)', margin: 0 }}>{b}</p>
                </div>
              ))}
            </div>
          </window.Container>
        </section>

        {/* Why trust Laura */}
        <section id="trust" className="bg-card section">
          <div className="container split">
            <div className="reveal">
              <h2 className="h-display" style={{ fontSize: 'var(--fs-h3)', marginBottom: 16 }}>Why Businesses Trust Laura</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.65, color: 'var(--text-body)', margin: '0 0 14px' }}>
                Businesses trust Laura because she brings calm, seasoned leadership to moments that feel noisy, overwhelming, or high-stakes — when clarity matters most.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.65, color: 'var(--text-body)', margin: '0 0 14px' }}>
                With over 30 years of real-world experience in marketing, branding, and business growth, Laura brings executive-level perspective — not just ideas — to every engagement.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.65, color: 'var(--text-heading)', fontStyle: 'italic', fontWeight: 700, margin: 0 }}>
                Grounded in wisdom, faith, and modern tools — guided by experienced marketing leadership.
              </p>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
              {[['30+', 'Years in marketing & media'], ['Hundreds', 'Of businesses guided'], ['StoryBrand', 'Certified Guide'], ['Georgetown', 'Texas-based & local']].map(([n, l]) => (
                <div key={l} style={{ textAlign: 'center', padding: '24px 12px', background: 'var(--surface-tint)', borderRadius: 'var(--radius-lg)' }}>
                  <div className="h-display accent" style={{ fontSize: 30, color: 'var(--color-primary)' }}>{n}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-body)', marginTop: 6 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards */}
        <section id="awards" className="bg-page section">
          <window.Container>
            <window.SectionTitle title="A Career Built on Results, Not Hype"
              sub="Recognition matters — but only when it reflects real impact, real leadership, and real results." />
            <div style={{ marginTop: 44, display: 'flex', gap: 32, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
              {['georgetowns-best-2025.png', 'texas-downtown-award-winner.png', 'georgetowns-best-2024.png', 'georgetowns-best-2023.png', 'fg-society-certified-marketer.png', 'storybrand-certified-guide.png'].map((f) => (
                <img key={f} src={`assets/awards/${f}`} alt="" style={{ height: 90, width: 'auto', objectFit: 'contain' }} />
              ))}
            </div>
          </window.Container>
        </section>

        {/* Big quote */}
        <section className="bg-dark section">
          <window.Container>
            <div className="reveal" style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
              <i className="fa-solid fa-quote-left" style={{ color: 'var(--lct-sky-500)', fontSize: 34, marginBottom: 18 }}></i>
              <p className="h-display" style={{ fontSize: 'var(--fs-h3)', color: '#fff', lineHeight: 1.3, margin: '0 0 18px' }}>
                “You are one of the best marketing executives I’ve ever worked with.”
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 700, color: 'var(--lct-sky-200)', margin: 0 }}>Guy Williams · PRECOR</p>
            </div>
          </window.Container>
        </section>

        {/* CTA */}
        <section className="bg-card section">
          <window.Container>
            <div className="reveal" style={{ textAlign: 'center' }}>
              <h2 className="h-display" style={{ fontSize: 'var(--fs-h2)', marginBottom: 14 }}>You don’t have to figure it out alone.</h2>
              <p className="lead" style={{ maxWidth: 600, margin: '0 auto 26px' }}>Laura meets you at the decision table and helps you move forward with confidence — one strategic step at a time.</p>
              <BookButton size="large" />
            </div>
          </window.Container>
        </section>
      </div>
    );
  }
  window.__pages = window.__pages || {};
  window.__pages.about = AboutPage;
})();
