/* Laura Capes Terry — Reviews / Testimonials */
(function () {
  const { Button, Pill } = window.LauraCapesTerryDesignSystem_1d8d61;

  const FEATURED = [
    ['Since partnering with Laura, she’s been an invaluable guide, helping us identify and implement the right strategies for our business. We only regret not reaching out to her sooner.', 'Wendy Del Rio', 'An Idea Front'],
    ['We had no experience in marketing and no idea where to start. Laura immediately understood our situation and clearly laid out the steps we needed to take. For the first time, we could see a clear path forward.', 'Wesley Heinige', 'Bowen Door'],
    ['From the moment I met Laura, I knew I was in good hands. She’s incredibly knowledgeable, genuinely cares about business owners, and leads with integrity — not pressure.', 'Terry Bingman', 'The AG Company'],
  ];

  const WALL = [
    'One of the best marketing executives I’ve ever worked with!',
    'Working with Laura has been a game-changer.',
    'Laura isn’t here to sell you something you don’t need. She is here to serve you, and does so very generously.',
    'Laura is the real deal.',
    'My only regret is I did not contact Laura sooner.',
    'Laura knew exactly what steps to lay out for us to start building an online footprint for our company.',
    'Laura simplifies the process and makes it well worth the investment.',
    'Her caring nature moves it from a good experience to a great experience.',
    'Laura completely transformed the way I talk about my business.',
    'Because of Laura, we now have a clear understanding of our ideal client.',
    'Laura holds herself to the highest standards and deeply cares.',
    'Laura has a sixth sense for distinguishing result-driven opportunities from passing fads.',
  ];

  function ReviewsPage() {
    const { BookButton } = window;
    return (
      <div>
        {/* Hero */}
        <section className="bg-tint section--sm">
          <window.Container>
            <div className="reveal" style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center', paddingTop: 24, paddingBottom: 24 }}>
              <Pill variant="soft" style={{ marginBottom: 16 }}>Reviews</Pill>
              <h1 className="h-display" style={{ fontSize: 'var(--fs-h1)', marginBottom: 14 }}>What clients say about working with Laura</h1>
              <p className="lead">Clients consistently describe Laura as a trusted guide, strategic thinker, and creative partner who brings both heart and clarity to their marketing.</p>
            </div>
          </window.Container>
        </section>

        {/* Featured */}
        <section className="bg-page section">
          <window.Container>
            <div className="grid grid-3">
              {FEATURED.map(([q, who, org], i) => (
                <div key={i} className="reveal card" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ color: 'var(--color-accent)', marginBottom: 12 }}>
                    {[0, 1, 2, 3, 4].map((s) => <i key={s} className="fa-solid fa-star" style={{ fontSize: 14, marginRight: 3 }}></i>)}
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.7, color: 'var(--text-body)', fontStyle: 'italic', margin: '0 0 16px', flex: 1 }}>{q}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 700, color: 'var(--text-heading)', margin: 0 }}>{who}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)', margin: '2px 0 0' }}>{org}</p>
                </div>
              ))}
            </div>
          </window.Container>
        </section>

        {/* Wall */}
        <section className="bg-card section">
          <window.Container>
            <window.SectionTitle title="In their own words"
              sub="A few more of the many kind words from business owners and leaders Laura has guided over the years." />
            <div style={{ marginTop: 44, columns: '3 280px', columnGap: 24 }}>
              {WALL.map((q, i) => (
                <div key={i} className="reveal" style={{ breakInside: 'avoid', marginBottom: 24, background: 'var(--surface-tint)', borderRadius: 'var(--radius-lg)', padding: '24px 26px' }}>
                  <i className="fa-solid fa-quote-right" style={{ color: 'var(--color-accent)', fontSize: 20, marginBottom: 12, display: 'block' }}></i>
                  <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18, lineHeight: 1.35, color: 'var(--text-heading)', margin: '0 0 14px' }}>{q}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-primary)', margin: 0 }}>
                    <i className="fa-solid fa-circle-check" style={{ marginRight: 6 }}></i>Verified client review
                  </p>
                </div>
              ))}
            </div>
          </window.Container>
        </section>

        {/* CTA */}
        <section className="bg-dark section">
          <window.Container>
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto' }}>
              <h2 className="h-display" style={{ fontSize: 'var(--fs-h2)', color: '#fff', marginBottom: 14 }}>Ready to be the next success story?</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lead)', lineHeight: 1.6, color: 'rgba(255,255,255,0.92)', margin: '0 0 28px' }}>
                Start with a short, no-pressure conversation about where you are and where you want to go.
              </p>
              <BookButton size="large" variant="accent" style={{ background: '#fff' }}>Work With Laura <i className="fa-solid fa-calendar-check"></i></BookButton>
            </div>
          </window.Container>
        </section>
      </div>
    );
  }
  window.__pages = window.__pages || {};
  window.__pages.reviews = ReviewsPage;
})();
