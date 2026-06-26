/* Laura Capes Terry — Resources: Marketing Frameworks (/resources/frameworks) */
(function () {
  const { Button, Pill } = window.LauraCapesTerryDesignSystem_1d8d61;

  const others = [
    ['fa-route', 'The Proven Path to Marketing Success', 'A step-by-step roadmap that takes local businesses from confusion and scattered effort to strategic clarity and sustainable growth. The framework Laura uses to onboard every new client.'],
    ['fa-filter', 'The Trust Funnel', 'A visual model for how local customers move from \u201Cnever heard of you\u201D to \u201Cloyal advocate\u201D — and what marketing actions accelerate each stage of the journey.'],
    ['fa-arrows-spin', 'Circular Viralocity', 'Laura\u2019s proprietary framework for turning community connections, local media, and word-of-mouth into a self-reinforcing growth engine. The more you invest in community, the more momentum builds — exponentially.'],
    ['fa-heart-circle-check', 'Return on Impact (ROI)', 'A reframe on traditional ROI — shifting focus from return on investment to return on impact: how your marketing builds relationships, reputation, and long-term business equity.'],
    ['fa-laptop-code', 'Website Success Framework', 'Six critical elements every local business website needs to generate leads, build trust, and convert visitors — with specific guidance for above-the-fold clarity.'],
    ['fa-rectangle-ad', 'Great Print Ad Framework', 'The anatomy of a high-performing print ad — headline, visual, body copy, call to action, and brand consistency — designed specifically for local media like BeLocal Georgetown.']];

  /* Building Blocks pyramid */
  const tiers = [
    { cls: 'bb-cap', blocks: [['Sustainable Growth', 'Be Chosen']] },
    { cls: 'bb-mid', blocks: [['Conversion', null], ['Loyalty & Referrals', null]] },
    { cls: 'bb-mid', blocks: [['Trust & Reputation', 'Be Trusted'], ['Consistent Action', null], ['Community Roots', null]] },
    { cls: 'bb-base', blocks: [['Clear Message', 'Be Seen'], ['Visible Presence', null], ['Right Audience', null], ['Brand Identity', null]] }];

  function BuildingBlocks() {
    return (
      <div className="bb-diagram" data-om-raster role="img" aria-label="Building Blocks for Marketing Success — a pyramid from a strategy foundation up through clear message, trust, and conversion to sustainable growth.">
        {tiers.map((t, i) => (
          <div key={i} className={`bb-row ${t.cls}`}>
            {t.blocks.map(([label, tag]) => (
              <div key={label} className="bb-block">
                {tag ? <span className="bb-tag">{tag}</span> : null}
                <span className="bb-label">{label}</span>
              </div>
            ))}
          </div>
        ))}
        <div className="bb-foundation">Marketing Strategy Foundation</div>
      </div>);
  }

  function FrameworksPage() {
    return (
      <div data-screen-label="Resources — Frameworks">
        <section className="bg-dark section--sm" data-screen-label="Frameworks hero">
          <window.Container>
            <div className="reveal" style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', paddingTop: 30, paddingBottom: 10 }}>
              <Pill style={{ marginBottom: 18 }}>Resources · Frameworks</Pill>
              <h1 className="h-display" style={{ fontSize: 'var(--fs-h1)', color: '#fff', marginBottom: 16 }}>
                The frameworks behind Laura’s marketing approach
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lead)', lineHeight: 1.6, color: 'rgba(255,255,255,0.92)', margin: 0 }}>
                The strategic scaffolding Laura uses with every client — a clear way to think about your marketing, and a repeatable system for growth.
              </p>
            </div>
          </window.Container>
        </section>

        {/* Building Blocks feature */}
        <section className="bg-page section" data-screen-label="Building Blocks">
          <window.Container>
            <div className="split" style={{ alignItems: 'center' }}>
              <div className="reveal">
                <Pill style={{ marginBottom: 14 }}>Foundational framework</Pill>
                <h2 className="ed-serif" style={{ marginBottom: 16, fontSize: '33px' }}>Building Blocks for Marketing Success</h2>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, color: 'var(--text-body)', margin: '0 0 16px' }}>
                  A foundational overview of the core elements every local business needs in place for their marketing to work. If any block is missing or weak, the whole structure suffers.
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, color: 'var(--text-body)', margin: 0 }}>
                  Each layer builds on the one below it — from a clear strategic foundation, up through being seen and trusted, to becoming the business your community chooses.
                </p>
              </div>
              <div className="reveal"><BuildingBlocks /></div>
            </div>
          </window.Container>
        </section>

        {/* Other frameworks */}
        <section className="bg-card section" data-screen-label="More frameworks">
          <window.Container>
            <window.SectionTitle title="More frameworks Laura builds" script="on"
              sub="Repeatable models that bring clarity and structure to every marketing decision." />
            <div className="heart-divider" aria-hidden="true"><i className="fa-solid fa-heart"></i></div>
            <div className="grid grid-3" style={{ marginTop: 44 }}>
              {others.map(([ic, t, b]) => (
                <div key={t} className="reveal card" style={{ textAlign: 'left' }}>
                  <window.SunIcon icon={ic} size={64} />
                  <h3 className="ed-serif" style={{ fontSize: '19px', marginTop: 14, marginBottom: 10 }}>{t}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--text-body)', margin: 0 }}>{b}</p>
                </div>
              ))}
            </div>
          </window.Container>
        </section>

        <section className="bg-dark section">
          <window.Container>
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto' }}>
              <h2 className="h-display" style={{ fontSize: 'var(--fs-h2)', color: '#fff', marginBottom: 14 }}>Want to apply these to your business?</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lead)', lineHeight: 1.6, color: 'rgba(255,255,255,0.92)', margin: '0 0 28px' }}>
                Book a session and Laura will map the right frameworks to where your business is today.
              </p>
              <window.BookButton size="large" variant="accent" style={{ background: '#fff' }}>Book a Session <i className="fa-solid fa-heart"></i></window.BookButton>
            </div>
          </window.Container>
        </section>
      </div>);
  }
  window.__pages = window.__pages || {};
  window.__pages.frameworks = FrameworksPage;
})();
