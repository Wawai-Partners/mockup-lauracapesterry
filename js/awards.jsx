/* Laura Capes Terry — Awards & Certifications (/about/awards)
   Built from 03-Awards-Certifications copy, composed from the DS
   components and the site's shared section vocabulary. */
(function () {
  const { Button, Pill } = window.LauraCapesTerryDesignSystem_1d8d61;
  const para = { fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, color: 'var(--text-body)', margin: '0 0 16px' };

  function AwardsPage() {
    const { BookButton } = window;

    /* Headline recognition badges */
    const badges = [
      'georgetowns-best-2025.png',
      'texas-downtown-award-winner.png',
      'storybrand-certified-guide.png',
      'fg-society-certified-marketer.png',
      'georgetowns-best-2024.png',
      'georgetowns-best-2023.png'];


    /* Certifications */
    const certs = [
      ['fa-bullseye', 'StoryBrand Certified Guide',
      'Certified in the StoryBrand framework — the industry-leading methodology for clarifying brand messaging so customers listen, engage, and take action. Laura uses StoryBrand principles with every client to cut through the noise and make their marketing crystal clear.'],
      ['fa-graduation-cap', 'MBA — Master of Business Administration',
      'Laura holds an MBA, giving her a strategic business foundation that goes beyond marketing tactics — helping clients think like executives, not just marketers.'],
      ['fa-microchip', 'AI in Marketing',
      'Certified in practical AI applications for marketing, helping business owners use tools like ChatGPT and other AI platforms with strategy, clarity, and confidence.']];


    /* Career recognition (real names from Laura's record) */
    const careerAwards = [
      ['career-benny-napl.png', 'Benny Award for Innovative Marketing from the National Association of Printers and Lithographers'],
      ['career-life-fitness.png', 'Two-Time Award Winner for Innovative Marketing from Life Fitness'],
      ['career-leisure-fitness.png', 'Lifetime Achievement Award Winner in Innovative Marketing from Leisure Fitness'],
      ['career-fast-company.png', 'Appeared on the Cover of FAST Company Magazine for Innovative Marketing'],
      ['career-rookie.png', '#2 Rookie of the Year Award from N2 Publishing'],
      ['career-qualified-expansion.png', '#2 in Qualified Expansion Sales Award from N2 Publishing']];


    const affiliations = [
      ['fa-building-columns', 'Georgetown Chamber of Commerce'],
      ['fa-people-group', 'Professional Women of Williamson County'],
      ['fa-handshake', 'BNI GTX — Business Network International'],
      ['fa-store', 'Downtown Georgetown Association']];


    return (
      <div data-screen-label="Awards & Certifications">
        {/* Hero */}
        <section className="bg-tint section--sm" data-screen-label="Awards hero">
          <window.Container>
            <div className="reveal" style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center', paddingTop: 24, paddingBottom: 24 }}>
              <Pill variant="soft" style={{ marginBottom: 16 }}>Awards & Certifications</Pill>
              <h1 className="h-display" style={{ fontSize: 'var(--fs-h1)', marginBottom: 16 }}>
                Recognized for excellence in local marketing, media, and business <span className="jk-script" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--color-primary)' }}>leadership</span>
              </h1>
              <p className="lead">Laura's work has been honored locally and nationally — but what matters most is the real-world results she delivers for the business owners she serves.</p>
            </div>
          </window.Container>
        </section>

        {/* Recognition badges */}
        <section className="bg-page section--sm" data-screen-label="Recognition badges">
          <window.Container>
            <div className="home-recog__row reveal">
              {badges.map((f) =>
              <img key={f} src={`assets/awards/${f}`} alt="" style={{ height: 140, width: 'auto', objectFit: 'contain' }} />
              )}
            </div>
          </window.Container>
        </section>

        {/* Awards — BeLocal Georgetown */}
        <section className="bg-card section" data-screen-label="Awards">
          <window.Container>
            <div className="about-trust__grid">
              <div className="about-trust__photo reveal">
                <img src="assets/awards/texas-downtown-award-winner.png" alt="Texas Downtown Association Award Winner — BeLocal Georgetown" style={{ background: 'var(--surface-tint)' }} />
              </div>
              <div className="reveal">
                <Pill style={{ marginBottom: 14 }}>Awards</Pill>
                <h2 className="ed-serif" style={{ marginBottom: 16, fontSize: '36px' }}>BeLocal Georgetown — an award-winning local media company</h2>
                <p style={{ ...para }}>BeLocal Georgetown has received multiple awards for excellence in local media, community impact, and advertising quality — recognized by the National Association of Local Media and regional business organizations.</p>
                <p style={{ ...para, margin: 0 }}>Most recently, BeLocal Georgetown received the <strong>Texas Downtown Association President's Award</strong> and has been named one of <strong>Georgetown's Best</strong> three years running.</p>
                <div style={{ marginTop: 28 }}><Button href="belocal.html" variant="accent">Why Laura publishes BeLocal →</Button></div>
              </div>
            </div>
          </window.Container>
        </section>

        {/* Certifications */}
        <section className="bg-page section" data-screen-label="Certifications">
          <window.Container>
            <window.SectionTitle title="Certifications &" script="Credentials"
            sub="Training and credentials that ground Laura's guidance in proven frameworks — and keep it sharp for an AI-driven world." />
            <div className="heart-divider" aria-hidden="true"><i className="fa-solid fa-heart"></i></div>
            <div className="grid grid-3" style={{ marginTop: 48 }}>
              {certs.map(([ic, t, b]) =>
              <div key={t} className="reveal card" style={{ textAlign: 'left' }}>
                  <window.SunIcon icon={ic} size={68} />
                  <h3 className="ed-serif" style={{ marginBottom: 10, marginTop: 14, fontSize: '21px' }}>{t}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.65, color: 'var(--text-body)', margin: 0 }}>{b}</p>
                </div>
              )}
            </div>
            <div className="reveal" style={{ textAlign: 'center', marginTop: 44, maxWidth: 820, marginLeft: 'auto', marginRight: 'auto' }}>
              <p style={{ ...para, margin: 0 }}>Laura's continued education also includes advanced programs with Tony Robbins and Dean Graziosi, strategic marketing certifications through The FG Society, The AI Advantage, and The AI Business Summit, and foundational business training such as Keith Cunningham's 4-Day MBA.</p>
            </div>
          </window.Container>
        </section>

        {/* Career recognition grid */}
        <section className="bg-tint section" data-screen-label="Career recognition">
          <window.Container>
            <window.SectionTitle title="A Career Built on Results, Not" script="Hype"
            sub="Recognition matters — but only when it reflects real impact, real leadership, and real results." />
            <div className="heart-divider" aria-hidden="true"><i className="fa-solid fa-heart"></i></div>
            <div className="award-grid" style={{ marginTop: 44 }}>
              {careerAwards.map(([f, alt], i) =>
              <img key={i} className="reveal award-img" src={`assets/awards/${f}`} alt={alt} />
              )}
            </div>
          </window.Container>
        </section>

        {/* Industry affiliations */}
        <section className="bg-card section" data-screen-label="Industry affiliations">
          <window.Container>
            <window.SectionTitle title="Industry" script="Affiliations"
            sub="Laura stays rooted in the communities and professional networks that local business depends on." />
            <div className="heart-divider" aria-hidden="true"><i className="fa-solid fa-heart"></i></div>
            <div className="grid grid-2" style={{ marginTop: 48, maxWidth: 920, marginLeft: 'auto', marginRight: 'auto' }}>
              {affiliations.map(([ic, label]) =>
              <div key={label} className="reveal card" style={{ display: 'flex', alignItems: 'center', gap: 18, textAlign: 'left' }}>
                  <span style={{ flex: 'none', width: 52, height: 52, borderRadius: '50%', background: 'var(--surface-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className={`fa-solid ${ic}`} style={{ color: 'var(--color-primary)', fontSize: 22 }}></i>
                  </span>
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 19, lineHeight: 1.3, color: 'var(--text-heading)' }}>{label}</span>
                </div>
              )}
            </div>
          </window.Container>
        </section>

        {/* CTA */}
        <section className="bg-dark section" data-screen-label="CTA">
          <window.Container>
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto' }}>
              <h2 className="h-display" style={{ fontSize: 'var(--fs-h2)', color: '#fff', marginBottom: 14 }}>Let's put that experience to work for you</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lead)', lineHeight: 1.6, color: 'rgba(255,255,255,0.92)', margin: '0 0 28px' }}>
                Start with a short, no-pressure conversation about where you are and where you want to go.
              </p>
              <BookButton size="large" variant="accent" style={{ background: '#fff' }}>Work With Laura <i className="fa-solid fa-heart"></i></BookButton>
            </div>
          </window.Container>
        </section>
      </div>);

  }
  window.__pages = window.__pages || {};
  window.__pages.awards = AwardsPage;
})();
