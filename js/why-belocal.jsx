/* Laura Capes Terry — About: Why Laura Publishes BeLocal (/about/why-belocal) */
(function () {
  const { Pill, Button } = window.LauraCapesTerryDesignSystem_1d8d61;
  const para = { fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.75, color: 'var(--text-body)', margin: '0 0 16px' };

  function WhyBelocalPage() {
    const reasons = [
    ['fa-map-signs', 'A yellow brick road for newcomers', 'Georgetown grows every day. BeLocal guides new residents to the best places to go, things to do, and most trusted businesses in their new backyard — at the exact moment they\u2019re forming new habits.'],
    ['fa-shield-heart', 'Trust by association', 'BeLocal isn\u2019t transactional advertising. It\u2019s a curated community of beloved local brands, so being included signals credibility — businesses are trusted because of the company they keep.'],
    ['fa-layer-group', 'Multi-channel by design', 'Print, digital, mobile, and social work together as one ecosystem — helping trusted local brands stay visible and relevant as their market grows and changes.'],
    ['fa-people-roof', 'Relationships, not noise', 'BeLocal is built for community-minded businesses who want meaningful visibility and long-term relationships rooted in trust — not the loudest, cheapest impression.']];


    return (
      <div data-screen-label="Why Laura Publishes BeLocal">
        {/* Hero */}
        <section className="bg-tint section--sm" data-screen-label="Why BeLocal hero">
          <window.Container>
            <div className="reveal" style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center', paddingTop: 24, paddingBottom: 24 }}>
              <Pill variant="soft" style={{ marginBottom: 16 }}>About · Why Laura Publishes BeLocal</Pill>
              <h1 className="h-display" style={{ fontSize: 'var(--fs-h1)', marginBottom: 16 }}>
                Because the best businesses deserve to be <span className="jk-script" style={{ fontFamily: '"Cormorant Garamond"', fontWeight: 700, color: 'var(--lct-rose)' }}>found</span>
              </h1>
              <p className="lead">BeLocal Georgetown is more than a publication — it&rsquo;s Laura&rsquo;s answer to a real problem: trusted local businesses getting lost as the community grows. Here&rsquo;s why she publishes it.</p>
            </div>
          </window.Container>
        </section>

        {/* Story split */}
        <section className="bg-card section" data-screen-label="The why">
          <window.Container>
            <div className="split" style={{ alignItems: 'center' }}>
              <img className="reveal" src="assets/laura-belocal.png" alt="Laura Capes Terry holding BeLocal Georgetown" style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', display: 'block' }} />
              <div className="reveal">
                <h2 className="ed-serif" style={{ marginBottom: 16, fontSize: '34px', lineHeight: 1.15 }}>A specific problem, solved with heart</h2>
                <p style={{ ...para }}>As Georgetown grew, Laura watched new families arrive every week — and watched trusted, community-rooted businesses struggle to reach them. The newcomers wanted to belong. The businesses wanted to be found. Something was missing in the middle.</p>
                <p style={{ ...para }}>So Laura became the publisher of <strong>BeLocal Georgetown</strong>: a way to combine the power of print, the reach of digital, and the trust of community endorsement into lasting first impressions that turn into lasting relationships.</p>
                <p style={{ ...para, margin: 0 }}>It&rsquo;s the same belief that drives all of her work — that good businesses, made visible to the right people at the right moment, change a community for the better.</p>
              </div>
            </div>
          </window.Container>
        </section>

        {/* Pull quote */}
        <section className="bg-dark section" data-screen-label="Belief">
          <window.Container>
            <div className="reveal" style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
              <i className="fa-solid fa-quote-left" style={{ color: 'var(--color-accent)', fontSize: 30, marginBottom: 18 }}></i>
              <p className="ed-serif" style={{ fontSize: 'var(--fs-h2)', lineHeight: 1.3, color: '#fff', margin: 0 }}>
                BeLocal functions like a <span style={{ color: 'var(--lct-sand)' }}>yellow brick road</span> for newcomers — guiding them to the most trusted local businesses in their new backyard.
              </p>
            </div>
          </window.Container>
        </section>

        {/* Reasons */}
        <section className="bg-page section" data-screen-label="Reasons">
          <window.Container>
            <window.SectionTitle title="Why it" script="works"
            sub="Four convictions behind every issue of BeLocal Georgetown." />
            <div className="heart-divider" aria-hidden="true"><i className="fa-solid fa-heart"></i></div>
            <div className="grid grid-2" style={{ marginTop: 48 }}>
              {reasons.map(([ic, t, b]) =>
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

        {/* Award recognition */}
        <section className="bg-card section" data-screen-label="Recognition">
          <window.Container>
            <div className="split" style={{ alignItems: 'center' }}>
              <div className="reveal">
                <p style={{ fontFamily: 'var(--font-subhead)', fontSize: 13, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-primary)', margin: '0 0 12px' }}>Recognized work</p>
                <h2 className="ed-serif" style={{ marginBottom: 16, fontSize: '34px', lineHeight: 1.15 }}>Honored by the Texas Downtown Association</h2>
                <p style={{ ...para, margin: 0 }}>BeLocal Georgetown received the Texas Downtown Association President&rsquo;s Award — recognition that a community-first approach to local media doesn&rsquo;t just feel good; it strengthens the businesses and downtown it serves.</p>
              </div>
              <div className="reveal" style={{ display: 'flex', gap: 28, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                <img src="assets/awards/texas-downtown-award-winner.png" alt="Texas Downtown Association President's Award" style={{ height: 150, width: 'auto', objectFit: 'contain' }} />
                <img src="assets/belocal-georgetown-cover.jpg" alt="BeLocal Georgetown cover" style={{ height: 230, width: 'auto', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-md)' }} />
              </div>
            </div>
          </window.Container>
        </section>

        {/* CTA */}
        <section className="bg-dark section" data-screen-label="CTA">
          <window.Container>
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
              <h2 className="h-display" style={{ fontSize: 'var(--fs-h2)', color: '#fff', marginBottom: 14 }}>Want your business on the map?</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lead)', lineHeight: 1.6, color: 'rgba(255,255,255,0.92)', margin: '0 0 28px' }}>
                Learn how BeLocal Georgetown connects beloved local businesses with the people moving in next door.
              </p>
              <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button href="belocal.html" variant="accent" style={{ background: '#fff' }}>Explore BeLocal <i className="fa-solid fa-heart"></i></Button>
                <window.BookButton variant="onDark">Schedule a Discovery Call</window.BookButton>
              </div>
            </div>
          </window.Container>
        </section>
      </div>);

  }
  window.__pages = window.__pages || {};
  window.__pages.whybelocal = WhyBelocalPage;
})();
