/* Laura Capes Terry — How I Help: Brand Awareness
   (/how-i-help/brand-awareness) */
(function () {
  const { Button, Pill } = window.LauraCapesTerryDesignSystem_1d8d61;
  const para = { fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, color: 'var(--text-body)', margin: '0 0 16px' };

  function BrandAwarenessPage() {
    const { BookButton } = window;

    const channels = [
      ['fa-newspaper', 'Print', "BeLocal Georgetown's beautifully designed print magazine reaches new and established residents. A sponsor's business is presented in a trusted, curated format readers actually save and reference."],
      ['fa-laptop', 'Digital', "A sponsor's business listing and story reaches BeLocal's online audience through the website, email newsletters, and digital content — extending print presence into the digital world."],
      ['fa-mobile-screen', 'Mobile', 'Georgetown residents access BeLocal on their phones every day. Mobile-optimized content ensures a business is easy to find, share, and act on — wherever its customers are.'],
      ['fa-share-nodes', 'Social', "BeLocal amplifies sponsor stories across social platforms, putting a business in front of followers who trust BeLocal's recommendations and engage with local content."],
      ['fa-calendar-day', 'Events', 'BeLocal hosts and participates in local events that bring business owners and community members face-to-face. Event sponsorship puts a business in front of a live, engaged audience.']];


    const social = [
      'Platform strategy — which channels to prioritize',
      'Content planning and scheduling',
      'AI-assisted content creation',
      'Engagement and community-building guidance'];


    return (
      <div data-screen-label="Brand Awareness">
        {/* Hero */}
        <section className="bg-tint section--sm" data-screen-label="Brand Awareness hero">
          <window.Container>
            <div className="reveal" style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center', paddingTop: 24, paddingBottom: 24 }}>
              <Pill variant="soft" style={{ marginBottom: 16 }}>How I Help · Brand Awareness</Pill>
              <h1 className="h-display" style={{ fontSize: 'var(--fs-h1)', marginBottom: 16 }}>
                If people don't know a business exists, they can't <span className="jk-script" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--color-primary)' }}>choose it</span>
              </h1>
              <p className="lead">Laura helps local Georgetown businesses build consistent, compelling visibility across print, digital, mobile, social, and events — so their ideal customers see them everywhere they look.</p>
              <div style={{ marginTop: 28 }}><BookButton size="large">Explore Brand Awareness Options <i className="fa-solid fa-heart"></i></BookButton></div>
            </div>
          </window.Container>
        </section>

        {/* BeLocal Georgetown intro */}
        <section className="bg-card section" data-screen-label="BeLocal Georgetown">
          <window.Container>
            <div className="split">
              <div className="reveal">
                <Pill style={{ marginBottom: 14 }}>BeLocal Georgetown</Pill>
                <h2 className="ed-serif" style={{ marginBottom: 16, fontSize: '36px' }}>Laura's award-winning local media company</h2>
                <p style={{ ...para }}>BeLocal Georgetown is a trusted resource that Georgetown residents and newcomers turn to for discovering the best local businesses.</p>
                <p style={{ ...para, margin: 0 }}>Being featured in BeLocal means a business is introduced to a highly engaged local audience that's actively looking for trusted recommendations — not just scrolling past ads.</p>
                <div style={{ marginTop: 28 }}><Button href="belocal.html" variant="accent">How BeLocal works →</Button></div>
              </div>
              <img className="reveal img-card" src="assets/belocal-newcomer-booth.jpeg" alt="The BeLocal Georgetown team at a newcomer event" style={{ width: '100%' }} />
            </div>
          </window.Container>
        </section>

        {/* Five channels */}
        <section className="bg-page section" data-screen-label="BeLocal channels">
          <window.Container>
            <window.SectionTitle title="One trusted brand, five ways to be" script="seen"
            sub="A BeLocal partnership puts a business in front of the right local audience across every place they look." />
            <div className="heart-divider" aria-hidden="true"><i className="fa-solid fa-heart"></i></div>
            <div className="grid grid-3" style={{ marginTop: 48 }}>
              {channels.map(([ic, t, b]) =>
              <div key={t} className="reveal card" style={{ textAlign: 'left' }}>
                  <window.SunIcon icon={ic} size={68} />
                  <h3 className="ed-serif" style={{ marginBottom: 10, marginTop: 14, fontSize: '21px' }}>{t}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.65, color: 'var(--text-body)', margin: 0 }}>{b}</p>
                </div>
              )}
            </div>
          </window.Container>
        </section>

        {/* Let's Go Locals */}
        <section className="bg-tint section" data-screen-label="Lets Go Locals">
          <window.Container>
            <div className="split">
              <div className="reveal card bg-card" style={{ textAlign: 'center', padding: 48 }}>
                <img src="assets/partners/lets-go-locals-logo.png" alt="Let's Go Locals" style={{ width: '100%', maxWidth: 280, height: 'auto', margin: '0 auto', display: 'block' }} />
              </div>
              <div className="reveal">
                <Pill style={{ marginBottom: 14 }}>Directory &amp; Stories</Pill>
                <h2 className="ed-serif" style={{ marginBottom: 16, fontSize: '33px' }}>Discovered, supported, and recommended — local first</h2>
                <p style={{ ...para }}>Let's Go Locals is a curated directory of Georgetown's best local businesses — designed to help residents and visitors discover, support, and recommend local over national chains.</p>
                <p style={{ ...para, margin: 0 }}>Being listed places a business in a community-first platform that celebrates what makes Georgetown unique.</p>
              </div>
            </div>
          </window.Container>
        </section>

        {/* Social media marketing */}
        <section className="bg-card section" data-screen-label="Social media marketing">
          <window.Container>
            <div className="split">
              <div className="reveal">
                <Pill style={{ marginBottom: 14 }}>Social Media Marketing</Pill>
                <h2 className="ed-serif" style={{ marginBottom: 16, fontSize: '33px' }}>Strategic, consistent, and authentically theirs</h2>
                <p style={{ ...para }}>Social media works best when it builds real relationships — not just follower counts. From content strategy to platform guidance to AI-powered batch creation, Laura helps business owners show up consistently without burning out.</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {social.map((t) =>
                  <li key={t} style={{ display: 'flex', gap: 12 }}>
                      <i className="fa-regular fa-circle-check" style={{ color: 'var(--color-primary)', marginTop: 5 }}></i>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.6, color: 'var(--text-body)' }}>{t}</span>
                    </li>
                  )}
                </ul>
              </div>
              <img className="reveal img-card" src="assets/laura-social-media.jpg" alt="Capturing a moment at a local event" style={{ width: '100%' }} />
            </div>
          </window.Container>
        </section>

        {/* CTA */}
        <section className="bg-dark section" data-screen-label="CTA">
          <window.Container>
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto' }}>
              <h2 className="h-display" style={{ fontSize: 'var(--fs-h2)', color: '#fff', marginBottom: 14 }}>Ready to be seen everywhere customers look?</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lead)', lineHeight: 1.6, color: 'rgba(255,255,255,0.92)', margin: '0 0 28px' }}>
                Book a discovery call to talk through the right mix of visibility for a business.
              </p>
              <BookButton size="large" variant="accent" style={{ background: '#fff' }}>Book a Discovery Call <i className="fa-solid fa-heart"></i></BookButton>
            </div>
          </window.Container>
        </section>
      </div>);

  }
  window.__pages = window.__pages || {};
  window.__pages.brandawareness = BrandAwarenessPage;
})();
