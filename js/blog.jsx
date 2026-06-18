/* Laura Capes Terry — Blog */
(function () {
  const { Button, Pill, Input } = window.LauraCapesTerryDesignSystem_1d8d61;

  const POSTS = [
    ['Clarity', 'Does your homepage answer the three questions every visitor asks?', 'If your website feels “almost right” but not quite effective, it’s usually a clarity issue — not a design problem. Here’s the simple above-the-fold test.', 'laura-office-writing.jpg', '6 min read'],
    ['AI', 'All in with AI — without losing your voice', 'AI doesn’t replace heart — it amplifies it. A grounded framework for using modern tools with wisdom, clarity, and purpose.', 'laura-all-in-with-ai.png', '8 min read'],
    ['Local Marketing', 'Be the business new neighbors trust first', 'New movers choose their go-to businesses in their first few months. Here’s how to make a great first impression before they choose someone else.', 'belocal-georgetown-cover.jpg', '5 min read'],
  ];
  const MORE = [
    ['Branding', 'Magnetic brands are built on trust, not noise'],
    ['Strategy', 'Stop reacting to trends. Start leading with focus.'],
    ['Mindset', 'You don’t have to figure it out alone'],
    ['AI', 'Five AI prompts that sharpen your message'],
    ['Local Marketing', 'Why word-of-mouth still wins in a digital world'],
    ['Clarity', 'The one-sentence test for your marketing message'],
  ];

  function BlogPage() {
    const toast = window.useToast();
    const [feat, ...rest] = POSTS;
    return (
      <div>
        {/* Hero */}
        <section className="bg-tint section--sm">
          <window.Container>
            <div className="reveal" style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center', paddingTop: 24, paddingBottom: 24 }}>
              <Pill variant="soft" style={{ marginBottom: 16 }}>The Blog</Pill>
              <h1 className="h-display" style={{ fontSize: 'var(--fs-h1)', marginBottom: 14 }}>Clarity for the overwhelmed entrepreneur</h1>
              <p className="lead">Practical, grounded guidance on marketing, AI, and building a brand people trust — blending modern tools with timeless wisdom.</p>
            </div>
          </window.Container>
        </section>

        {/* Featured */}
        <section className="bg-page section">
          <window.Container>
            <a className="reveal card" href="#" onClick={(e) => e.preventDefault()} style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 0, overflow: 'hidden', padding: 0, textDecoration: 'none' }}>
              <div style={{ minHeight: 320, background: `var(--surface-tint) url(assets/${feat[3]}) no-repeat center/cover` }}></div>
              <div style={{ padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 14 }}>
                  <Pill variant="soft">{feat[0]}</Pill>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)' }}>{feat[4]}</span>
                </div>
                <h2 className="h-display" style={{ fontSize: 'var(--fs-h3)', marginBottom: 12 }}>{feat[1]}</h2>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'var(--text-body)', margin: '0 0 18px' }}>{feat[2]}</p>
                <span className="accent" style={{ fontFamily: 'var(--font-body)', fontWeight: 700 }}>Read article →</span>
              </div>
            </a>
          </window.Container>
        </section>

        {/* Recent grid */}
        <section className="bg-card section">
          <window.Container>
            <window.SectionTitle align="left" title="Recent articles" />
            <div className="grid grid-3" style={{ marginTop: 36 }}>
              {rest.concat([['AI', 'A simple weekly rhythm for marketing that sticks', 'Consistency beats intensity. Build a repeatable system you can actually sustain — even when you’re stretched thin.', 'laura-candid.jpg', '4 min read']]).map((p, i) => (
                <a key={i} className="reveal card" href="#" onClick={(e) => e.preventDefault()} style={{ padding: 0, overflow: 'hidden', textDecoration: 'none', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ height: 180, background: `var(--surface-tint) url(assets/${p[3]}) no-repeat center/cover` }}></div>
                  <div style={{ padding: 24, display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12 }}>
                      <Pill variant="soft">{p[0]}</Pill>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--text-muted)' }}>{p[4]}</span>
                    </div>
                    <h3 className="h-display" style={{ fontSize: 'var(--fs-h4)', marginBottom: 10 }}>{p[1]}</h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-body)', margin: '0 0 14px', flex: 1 }}>{p[2]}</p>
                    <span className="accent" style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14 }}>Read more →</span>
                  </div>
                </a>
              ))}
            </div>
          </window.Container>
        </section>

        {/* More titles */}
        <section className="bg-page section">
          <window.Container>
            <window.SectionTitle align="left" title="More from the blog" />
            <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 0, maxWidth: 860 }}>
              {MORE.map(([cat, title], i) => (
                <a key={i} href="#" onClick={(e) => e.preventDefault()} className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '20px 4px', borderBottom: '1px solid var(--border-subtle)', textDecoration: 'none' }}>
                  <Pill variant="soft" style={{ flex: 'none' }}>{cat}</Pill>
                  <span className="h-display" style={{ fontSize: 18, flex: 1 }}>{title}</span>
                  <i className="fa-solid fa-arrow-right" style={{ color: 'var(--color-primary)' }}></i>
                </a>
              ))}
            </div>
          </window.Container>
        </section>

        {/* Newsletter */}
        <section className="bg-dark section">
          <window.Container>
            <div className="reveal" style={{ maxWidth: 620, margin: '0 auto', textAlign: 'center', color: '#fff' }}>
              <h2 className="h-display" style={{ fontSize: 'var(--fs-h2)', color: '#fff', marginBottom: 12 }}>Get clarity in your inbox</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lead)', lineHeight: 1.6, color: 'rgba(255,255,255,0.92)', margin: '0 0 26px' }}>
                Occasional, practical notes on marketing, AI, and building a brand people trust. No spam — unsubscribe anytime.
              </p>
              <form onSubmit={(e) => { e.preventDefault(); toast('Thanks for subscribing!'); }} style={{ display: 'flex', gap: 12, maxWidth: 460, margin: '0 auto', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 220px' }}><Input placeholder="Your email" type="email" aria-label="Email" required /></div>
                <Button type="submit" variant="onDark">Subscribe</Button>
              </form>
            </div>
          </window.Container>
        </section>
      </div>
    );
  }
  window.__pages = window.__pages || {};
  window.__pages.blog = BlogPage;
})();
