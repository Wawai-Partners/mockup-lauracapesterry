/* Laura Capes Terry — How I Help: Marketing Strategy & Leadership
   (/how-i-help/marketing-strategy) */
(function () {
  const { Button, Pill } = window.LauraCapesTerryDesignSystem_1d8d61;
  const para = { fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.65, color: 'var(--text-body)', margin: '0 0 14px' };
  const whoStyle = { fontFamily: 'var(--font-body)', fontSize: 13.5, lineHeight: 1.55, color: 'var(--text-muted)', margin: '0 0 14px' };

  const services = [
    {
      icon: 'fa-user-tie', title: 'Private Coaching', cta: ['Inquire About Private Coaching', 'contact.html', false],
      what: "One-on-one marketing coaching tailored to your specific business, goals, and challenges. Not a generic program — a custom strategic partnership designed around you.",
      who: "Business owners who want personalized guidance, accountability, and expert marketing thinking applied directly to their business.",
      list: ['Regular strategy sessions with Laura', 'Personalized marketing plan and priorities', 'AI integration guidance and implementation support', 'Messaging and brand clarity work', 'Accountability and consistent forward momentum']
    },
    {
      icon: 'fa-users-rectangle', title: 'Group Coaching', cta: ['Join the Waitlist', 'contact.html', false],
      what: "A collaborative coaching experience with a small group of like-minded Georgetown business owners — sharing insights, getting expert guidance, and learning from each other's wins and challenges.",
      who: "Owners who want marketing guidance in a community setting — and the energy that comes from learning alongside other motivated entrepreneurs.",
      list: null
    },
    {
      icon: 'fa-microchip', title: 'AI Consulting', cta: ['Book an AI Strategy Session', null, true],
      what: "Practical, hands-on guidance for integrating AI into your marketing — without the overwhelm, the hype, or the risk of losing your authentic voice.",
      who: "Owners who know AI can help but don't know where to start — or who started and feel lost, scattered, or unsure they're using it well.",
      list: ['Which AI tools are right for YOUR business', 'How to train AI to sound like you (not a robot)', 'Content creation workflows using AI', 'AI for email, social media, and customer communication', 'Ethical and strategic use of AI in your brand']
    },
    {
      icon: 'fa-chess-king', title: 'Fractional CMO', cta: ['Explore Fractional CMO Services', null, true],
      what: "Executive-level marketing leadership on a part-time, flexible basis. Laura becomes your strategic marketing leader — attending key meetings, guiding your team, and driving marketing forward — without the full-time salary.",
      who: "Growing businesses with a team (or building one) that need consistent, senior-level marketing direction to scale with clarity and confidence.",
      list: ['Monthly strategic marketing leadership', 'Team guidance and marketing system development', 'AI and technology integration', 'Brand strategy and messaging oversight', 'KPI setting and accountability']
    }];

  const speakingTopics = [
    'Be Seen. Be Trusted. Be Chosen. — A Framework for Local Marketing Success',
    'AI Without Fear: How to Use Modern Tools Without Losing Your Voice',
    'The Trust Recession: Why Trust Is Your Most Valuable Marketing Asset',
    'Navigating the Noise: A Clarity-First Approach to Marketing in the Digital Age'];

  const workshopTopics = [
    'The Path to Marketing Success',
    'AI in Marketing: Practical Applications for Local Business',
    "Don't Wing It — Batch It (Content Creation Made Simple)",
    'From Blank Screen to Brilliant Strategy',
    'Navigating the Trust Recession'];

  function MarketingStrategyPage() {
    const { BookButton } = window;
    return (
      <div data-screen-label="Marketing Strategy & Leadership">
        {/* Hero */}
        <section className="bg-tint section--sm" data-screen-label="Strategy hero">
          <window.Container>
            <div className="reveal" style={{ maxWidth: 880, margin: '0 auto', textAlign: 'center', paddingTop: 24, paddingBottom: 24 }}>
              <Pill variant="soft" style={{ marginBottom: 16 }}>How I Help · Marketing Strategy & Leadership</Pill>
              <h1 className="h-display" style={{ fontSize: 'var(--fs-h1)', marginBottom: 16 }}>
                Stop reacting to trends. Start leading with <span className="jk-script" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--color-primary)' }}>strategy</span>
              </h1>
              <p className="lead">Laura provides the marketing leadership, strategic clarity, and expert guidance that growing businesses need — without the cost of a full-time CMO.</p>
              <div style={{ marginTop: 28 }}><BookButton size="large">Book a Discovery Call <i className="fa-solid fa-heart"></i></BookButton></div>
            </div>
          </window.Container>
        </section>

        {/* Core services */}
        <section className="bg-card section" data-screen-label="Services">
          <window.Container>
            <window.SectionTitle title="Ways to work" script="together"
              sub="From hands-on coaching to executive marketing leadership — choose the level of partnership that fits where you are." />
            <div className="heart-divider" aria-hidden="true"><i className="fa-solid fa-heart"></i></div>
            <div className="grid grid-2" style={{ marginTop: 44 }}>
              {services.map((s) => (
                <div key={s.title} className="reveal card" style={{ textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
                  <window.SunIcon icon={s.icon} size={64} />
                  <h3 className="ed-serif" style={{ fontSize: '23px', marginTop: 14, marginBottom: 12 }}>{s.title}</h3>
                  <p style={para}>{s.what}</p>
                  <p style={whoStyle}><strong style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-subhead)', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Who it's for · </strong>{s.who}</p>
                  {s.list ? (
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: 9 }}>
                      {s.list.map((t) => (
                        <li key={t} style={{ display: 'flex', gap: 11 }}>
                          <i className="fa-regular fa-circle-check" style={{ color: 'var(--color-primary)', marginTop: 4, fontSize: 12 }}></i>
                          <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.55, color: 'var(--text-body)' }}>{t}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <div style={{ marginTop: 'auto' }}>
                    {s.cta[2]
                      ? <BookButton variant="accent" size="small">{s.cta[0]}</BookButton>
                      : <Button href={s.cta[1]} variant="accent" size="small">{s.cta[0]}</Button>}
                  </div>
                </div>
              ))}
            </div>
          </window.Container>
        </section>

        {/* Public speaking */}
        <section className="bg-page section" data-screen-label="Public speaking">
          <window.Container>
            <div className="split" style={{ alignItems: 'center' }}>
              <div className="reveal">
                <Pill style={{ marginBottom: 14 }}>Public Speaking</Pill>
                <h2 className="ed-serif" style={{ marginBottom: 16, fontSize: '33px' }}>Energy and expertise on every stage</h2>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, color: 'var(--text-body)', margin: '0 0 24px' }}>
                  Laura brings energy, expertise, and real-world experience to every stage she steps on — speaking on local marketing, AI in business, brand building, and leadership in ways that are practical, inspiring, and immediately actionable.
                </p>
                <BookButton>Book Laura to Speak <i className="fa-solid fa-heart"></i></BookButton>
              </div>
              <div className="reveal card bg-tint" style={{ border: 'none' }}>
                <h3 className="h-display" style={{ fontSize: 'var(--fs-h4)', marginBottom: 16 }}>Popular topics</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {speakingTopics.map((t) => (
                    <li key={t} style={{ display: 'flex', gap: 12 }}>
                      <i className="fa-solid fa-microphone-lines" style={{ color: 'var(--color-primary)', marginTop: 4 }}></i>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.5, color: 'var(--text-body)' }}>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </window.Container>
        </section>

        {/* Workshops */}
        <section className="bg-card section" data-screen-label="Workshops">
          <window.Container>
            <window.SectionTitle title="Hands-on" script="workshops"
              sub="Practical sessions designed to give business owners real tools they can use immediately — not just theory." />
            <div className="heart-divider" aria-hidden="true"><i className="fa-solid fa-heart"></i></div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', maxWidth: 880, margin: '40px auto 0' }}>
              {workshopTopics.map((t) => (
                <span key={t} className="reveal" style={{ fontFamily: 'var(--font-subhead)', fontWeight: 600, fontSize: 15, color: 'var(--text-heading)', background: 'var(--surface-tint)', border: '1px solid var(--surface-tint-strong)', borderRadius: 999, padding: '12px 22px' }}>{t}</span>
              ))}
            </div>
            <div className="reveal" style={{ textAlign: 'center', marginTop: 36 }}>
              <Button href="resources-workshops.html" variant="accent">Register for an Upcoming Workshop →</Button>
            </div>
          </window.Container>
        </section>

        {/* CTA */}
        <section className="bg-dark section" data-screen-label="CTA">
          <window.Container>
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto' }}>
              <h2 className="h-display" style={{ fontSize: 'var(--fs-h2)', color: '#fff', marginBottom: 14 }}>Lead your marketing with clarity</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lead)', lineHeight: 1.6, color: 'rgba(255,255,255,0.92)', margin: '0 0 28px' }}>
                Start with a short, no-pressure conversation about where you are and where you want to go.
              </p>
              <BookButton size="large" variant="accent" style={{ background: '#fff' }}>Book a Discovery Call <i className="fa-solid fa-heart"></i></BookButton>
            </div>
          </window.Container>
        </section>
      </div>);
  }
  window.__pages = window.__pages || {};
  window.__pages.marketingstrategy = MarketingStrategyPage;
})();
