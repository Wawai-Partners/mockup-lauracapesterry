/* Laura Capes Terry — How I Help: Community Connections
   (/how-i-help/community-connections) */
(function () {
  const { Button, Pill } = window.LauraCapesTerryDesignSystem_1d8d61;
  const para = { fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, color: 'var(--text-body)', margin: '0 0 16px' };

  function CommunityPage() {
    const { BookButton } = window;

    const bni = [
      'Weekly structured networking meetings',
      'One-to-one relationship building with members',
      'A proven referral system that generates real business',
      'A community of professionals who actively promote your work'];


    return (
      <div data-screen-label="Community Connections">
        {/* Hero */}
        <section className="bg-tint section--sm" data-screen-label="Community hero">
          <window.Container>
            <div className="reveal" style={{ maxWidth: 880, margin: '0 auto', textAlign: 'center', paddingTop: 24, paddingBottom: 24 }}>
              <Pill variant="soft" style={{ marginBottom: 16 }}>How I Help · Community Connections</Pill>
              <h1 className="h-display" style={{ fontSize: 'var(--fs-h1)', marginBottom: 16 }}>
                The most powerful marketing isn't an ad — it's a <span className="jk-script" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--color-primary)' }}>relationship</span>
              </h1>
              <p className="lead">Laura helps Georgetown business owners plug into the right networks, build genuine relationships, and become trusted names in their community — the kind of business people recommend at dinner tables, not just on Google.</p>
              <div style={{ marginTop: 28 }}><BookButton size="large">Let's Talk Community <i className="fa-solid fa-heart"></i></BookButton></div>
            </div>
          </window.Container>
        </section>

        {/* BeLocal Georgetown */}
        <section className="bg-card section" data-screen-label="BeLocal community hub">
          <window.Container>
            <div className="split">
              <img className="reveal img-card" src="assets/laura-candid.jpg" alt="Laura connecting with the Georgetown community" style={{ width: '100%' }} />
              <div className="reveal">
                <Pill style={{ marginBottom: 14 }}>BeLocal Georgetown</Pill>
                <h2 className="ed-serif" style={{ marginBottom: 16, fontSize: '36px' }}>More than a media company — a community hub</h2>
                <p style={{ ...para }}>BeLocal Georgetown connects business owners with residents, with each other, and with the events and moments that matter most in Georgetown.</p>
                <p style={{ ...para, margin: 0 }}>As a BeLocal sponsor, you're not just buying an ad — you're joining a community of businesses that care about Georgetown.</p>
                <div style={{ marginTop: 28 }}><Button href="belocal.html" variant="accent">Explore BeLocal →</Button></div>
              </div>
            </div>
          </window.Container>
        </section>

        {/* BNI GTX */}
        <section className="bg-page section" data-screen-label="BNI GTX">
          <window.Container>
            <div className="split">
              <div className="reveal">
                <Pill style={{ marginBottom: 14 }}>BNI GTX</Pill>
                <h2 className="ed-serif" style={{ marginBottom: 16, fontSize: '33px' }}>Business by referral</h2>
                <p style={{ ...para }}>BNI (Business Network International) is the world's largest and most successful business networking organization. BNI GTX is Georgetown's premier chapter.</p>
                <p style={{ ...para }}>Laura is an active BNI member and can help you evaluate whether BNI is the right fit for your business — and how to get the most out of membership if you join.</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {bni.map((t) =>
                  <li key={t} style={{ display: 'flex', gap: 12 }}>
                      <i className="fa-regular fa-circle-check" style={{ color: 'var(--color-primary)', marginTop: 5 }}></i>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.6, color: 'var(--text-body)' }}>{t}</span>
                    </li>
                  )}
                </ul>
              </div>
              <div className="reveal card bg-tint" style={{ border: 'none', textAlign: 'center', alignSelf: 'center', padding: 48 }}>
                <window.SunIcon icon="fa-people-arrows" size={92} />
                <div className="h-display" style={{ fontSize: 25, marginTop: 18 }}>Georgetown's premier chapter</div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)', margin: '10px 0 0' }}>A proven referral system, built on real relationships.</p>
              </div>
            </div>
          </window.Container>
        </section>

        {/* BeLocal B2B + Let's Go Locals Events */}
        <section className="bg-card section" data-screen-label="More connections">
          <window.Container>
            <window.SectionTitle title="More ways to connect &amp;" script="grow together"
            sub="Beyond networking, Laura helps you build a referral-rich web of local businesses and real-world moments with your customers." />
            <div className="heart-divider" aria-hidden="true"><i className="fa-solid fa-heart"></i></div>
            <div className="grid grid-2" style={{ marginTop: 48 }}>
              {[
              ['fa-handshake', 'BeLocal B2B', "BeLocal B2B connects Georgetown business owners with each other — creating a referral-rich environment where local businesses work together, recommend each other, and grow together."],
              ['fa-champagne-glasses', "Let's Go Locals Events", "Let's Go Locals events bring the community together around shared experiences — giving businesses a platform to connect with customers in person, build brand recognition, and foster the relationships that turn into loyal, long-term clients."]].
              map(([ic, t, b]) =>
              <div key={t} className="reveal card" style={{ textAlign: 'left' }}>
                  <window.SunIcon icon={ic} size={72} />
                  <h3 className="ed-serif" style={{ marginBottom: 10, marginTop: 14, fontSize: '23px' }}>{t}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.65, color: 'var(--text-body)', margin: 0 }}>{b}</p>
                </div>
              )}
            </div>
          </window.Container>
        </section>

        {/* CTA */}
        <section className="bg-dark section" data-screen-label="CTA">
          <window.Container>
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto' }}>
              <h2 className="h-display" style={{ fontSize: 'var(--fs-h2)', color: '#fff', marginBottom: 14 }}>Become a name people recommend</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lead)', lineHeight: 1.6, color: 'rgba(255,255,255,0.92)', margin: '0 0 28px' }}>
                Let's find the right networks and connections for your business.
              </p>
              <BookButton size="large" variant="accent" style={{ background: '#fff' }}>Explore Community Connection Opportunities <i className="fa-solid fa-heart"></i></BookButton>
            </div>
          </window.Container>
        </section>
      </div>);

  }
  window.__pages = window.__pages || {};
  window.__pages.community = CommunityPage;
})();
