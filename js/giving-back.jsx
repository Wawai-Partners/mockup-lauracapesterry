/* Laura Capes Terry — About: Giving Back (/about/giving-back) */
(function () {
  const { Pill } = window.LauraCapesTerryDesignSystem_1d8d61;

  function GivingBackPage() {
    const orgs = [
      ['fa-horse', 'ROCK — Ride On Center for Kids', 'ROCK uses therapeutic horseback riding and equine-assisted activities to help children and adults with disabilities experience confidence, healing, and growth. Laura proudly supports ROCK\u2019s mission to transform lives through the power of horses.'],
      ['fa-users', 'The Horseshoe Club', 'A Georgetown institution that brings together local leaders, business owners, and community members to strengthen the social and civic fabric of the city.'],
      ['fa-store', 'Downtown Georgetown Association', "Laura actively supports the businesses and events that make Georgetown's historic downtown square one of the most beloved destinations in Central Texas."],
      ['fa-building-columns', 'Georgetown Chamber of Commerce', "A proud member and supporter of the Chamber's work to advocate for local businesses and drive economic vitality in Georgetown."],
      ['fa-people-group', 'Professional Women of Williamson County', 'Laura is committed to empowering women in business through mentorship, networking, and professional development in Williamson County.'],
      ['fa-hand-holding-heart', 'N2 Gives — Fighting Human Trafficking', 'Through her work with The N2 Company, Laura participates in N2 Gives — a national initiative that donates a portion of revenue to organizations fighting human trafficking. Every partnership matters.'],
      ['fa-handshake', 'BNI GTX — Business by Referral', 'Laura is an active member of BNI GTX, a premier business networking organization that helps members grow through structured referral-based relationships.'],
      ['fa-music', 'East View High School Patriots Band', 'Laura supports the next generation of Georgetown leaders by investing in youth arts and education — including the East View High School Patriots Band.']];


    return (
      <div data-screen-label="Giving Back">
        {/* Hero */}
        <section className="bg-tint section--sm" data-screen-label="Giving Back hero">
          <window.Container>
            <div className="reveal" style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center', paddingTop: 24, paddingBottom: 24 }}>
              <Pill variant="soft" style={{ marginBottom: 16 }}>About · Giving Back</Pill>
              <h1 className="h-display" style={{ fontSize: 'var(--fs-h1)', marginBottom: 16 }}>
                Business is better when it serves more than the <span className="jk-script" style={{ fontFamily: '"Cormorant Garamond"', fontWeight: 700, color: 'var(--lct-rose)' }}>bottom line</span>
              </h1>
              <p className="lead">Laura believes the best businesses are rooted in community — giving back, showing up, and investing in the people and places that make Georgetown, Texas, such a special place to live and do business.</p>
            </div>
          </window.Container>
        </section>

        {/* Organizations */}
        <section className="bg-card section" data-screen-label="Organizations">
          <window.Container>
            <window.SectionTitle title="Organizations Laura" script="supports"
            sub="A few of the causes and communities Laura is proud to stand behind." />
            <div className="heart-divider" aria-hidden="true"><i className="fa-solid fa-heart"></i></div>
            <div className="grid grid-2" style={{ marginTop: 48 }}>
              {orgs.map(([ic, t, b]) =>
              <div key={t} className="reveal card" style={{ display: 'flex', gap: 20, textAlign: 'left', alignItems: 'flex-start' }}>
                  <span style={{ flex: 'none', width: 56, height: 56, borderRadius: '50%', background: 'var(--surface-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className={`fa-solid ${ic}`} style={{ color: 'var(--color-primary)', fontSize: 24 }}></i>
                  </span>
                  <div>
                    <h3 className="ed-serif" style={{ marginBottom: 8, fontSize: '24px' }}>{t}</h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.65, color: 'var(--text-body)', margin: 0 }}>{b}</p>
                  </div>
                </div>
              )}
            </div>
          </window.Container>
        </section>

        {/* Join Laura */}
        <section className="bg-dark section" data-screen-label="CTA">
          <window.Container>
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto' }}>
              <h2 className="h-display" style={{ fontSize: 'var(--fs-h2)', color: '#fff', marginBottom: 14 }}>Join Laura in giving back</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lead)', lineHeight: 1.6, color: 'rgba(255,255,255,0.92)', margin: '0 0 28px' }}>
                Want to learn more about how your business can serve the Georgetown community? Let's talk.
              </p>
              <window.BookButton size="large" variant="accent" style={{ background: '#fff' }}>Start a Conversation <i className="fa-solid fa-heart"></i></window.BookButton>
            </div>
          </window.Container>
        </section>
      </div>);

  }
  window.__pages = window.__pages || {};
  window.__pages.givingback = GivingBackPage;
})();
