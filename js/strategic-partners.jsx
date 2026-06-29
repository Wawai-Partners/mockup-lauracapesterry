/* Laura Capes Terry — Resources: Strategic Partners (/resources/strategic-partners) */
(function () {
  const { Button, Pill } = window.LauraCapesTerryDesignSystem_1d8d61;

  const partners = [
    ['fa-heart', 'Be Locally Loved', 'A media platform and podcast that spotlights beloved local businesses, charities, community leaders, and creative connectors who are helping communities thrive through trust, connection, and service.', null, 'assets/partners/be-locally-loved.png'],
    ['fa-star', 'BeLocal Georgetown', 'Laura\u2019s own award-winning local media company — connecting Georgetown businesses with residents through print, digital, mobile, social, and events.', 'belocal.html', 'assets/partners/belocal.png'],
    ['fa-briefcase', 'Grayson Media & Marketing', 'The parent company of BeLocal Georgetown and Laura\u2019s full-service marketing consulting firm — brand strategy, media placement, and marketing leadership.', null, 'assets/partners/grayson.png'],
    ['fa-print', 'Roberts Printing', 'A trusted Georgetown print partner — master printers for half a century, delivering high-quality printing for local businesses and organizations.', null, 'assets/partners/roberts-printing.jpeg'],
    ['fa-landmark', 'Downtown Georgetown Association', 'A nonprofit dedicated to preserving and promoting the historic Georgetown Square — supporting the local merchants, events, and small businesses that keep downtown vibrant and thriving.', null, 'assets/partners/downtown-georgetown-association-logo.png'],
    ['fa-map-location-dot', 'Let\u2019s Go Locals', 'Let\u2019s Go Locals is a free online platform that helps Georgetown residents discover local businesses, community events, and local stories while helping businesses promote, connect, and be seen.', null, 'assets/partners/lets-go-locals.jpg'],
    ['fa-pen-ruler', 'Moxie 360 Marketing', 'A trusted marketing partner offering world-class services in digital marketing, design, and brand strategy.', null, 'assets/partners/moxie360.png'],
    ['fa-gears', 'Santosha Solutions', 'A strategic partner offering specialized business consulting and digital marketing services.', null, 'assets/partners/santosha.png'],
    ['fa-shield-halved', 'TeamLogic IT', 'TeamLogic IT provides managed IT services, cybersecurity, cloud solutions, and tech support to help businesses stay secure, connected, and running smoothly.', null, 'assets/partners/teamlogic-it.webp'],
    ['fa-microphone-lines', 'The Unbridled Creative', 'A podcast for faith-driven creatives, entrepreneurs, and dreamers who want to pursue their calling with courage, creativity, and purpose.', null, 'assets/partners/unbridled-creative.jpg'],
    ['fa-building', 'Turner Commercial Properties', 'A Georgetown-based commercial real estate company helping businesses buy, sell, and lease improved and unimproved commercial properties throughout Central Texas.', null, 'assets/partners/turner-commercial.jpg'],
    ['fa-handshake-angle', 'Wawai Partners', 'A values-aligned business consulting and leadership firm serving entrepreneurs and organizations in Central Texas.', null, 'assets/partners/wawai.png'],
    ['fa-scale-balanced', 'West Short & Howell, PLLC', 'A law firm providing trusted legal counsel in civil litigation, estate planning, probate, real estate, and business matters.', null, 'assets/partners/west-short-howell.png'],
    ['fa-door-open', 'Hello Georgetown', 'Hello Georgetown is a local digital media platform that helps residents stay connected to Georgetown news, events, local businesses, and community happenings.', null, 'assets/partners/hello-georgetown.webp']];

  function PartnersPage() {
    return (
      <div data-screen-label="Resources — Strategic Partners">
        <section className="bg-dark section--sm" data-screen-label="Partners hero">
          <window.Container>
            <div className="reveal" style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', paddingTop: 30, paddingBottom: 10 }}>
              <Pill style={{ marginBottom: 18 }}>Resources · Strategic Partners</Pill>
              <h1 className="h-display" style={{ fontSize: 'var(--fs-h1)', color: '#fff', marginBottom: 16 }}>
                Trusted partners who share Laura’s values and standards
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lead)', lineHeight: 1.6, color: 'rgba(255,255,255,0.92)', margin: 0 }}>
                Laura doesn’t make referrals lightly. Every partner here has been vetted, trusted, and chosen because they deliver genuine value to local business owners.
              </p>
            </div>
          </window.Container>
        </section>

        <section className="bg-page section" data-screen-label="Our partners">
          <window.Container>
            <window.SectionTitle title="Our strategic" script="partners" />
            <div className="heart-divider" aria-hidden="true"><i className="fa-solid fa-heart"></i></div>
            <div className="grid grid-2" style={{ marginTop: 44 }}>
              {partners.map(([ic, t, b, href, logo]) => {
                const inner = (
                  <React.Fragment>
                    {logo
                      ? <span style={{ flex: 'none', width: 104, height: 72, borderRadius: 10, background: '#fff', border: '1px solid var(--surface-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                          <img src={logo} alt={`${t} logo`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                        </span>
                      : <span style={{ flex: 'none', width: 56, height: 56, borderRadius: '50%', background: 'var(--surface-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <i className={`fa-solid ${ic}`} style={{ color: 'var(--color-primary)', fontSize: 23 }}></i>
                        </span>}
                    <div>
                      <h3 className="ed-serif" style={{ marginBottom: 8, fontSize: '20px' }}>{t}{href ? <i className="fa-solid fa-arrow-right" style={{ marginLeft: 10, fontSize: 13, color: 'var(--color-accent)' }}></i> : null}</h3>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.65, color: 'var(--text-body)', margin: 0 }}>{b}</p>
                    </div>
                  </React.Fragment>);
                const base = { display: 'flex', gap: 20, textAlign: 'left', alignItems: 'flex-start' };
                return href
                  ? <a key={t} className="reveal card" href={href} style={{ ...base, textDecoration: 'none' }}>{inner}</a>
                  : <div key={t} className="reveal card" style={base}>{inner}</div>;
              })}
            </div>
          </window.Container>
        </section>

        <section className="bg-tint section">
          <window.Container>
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
              <h2 className="h-display" style={{ fontSize: 'var(--fs-h2)', marginBottom: 14 }}>Interested in a strategic partnership?</h2>
              <p className="lead" style={{ margin: '0 auto 26px' }}>Laura is selective — she only refers what she genuinely trusts. If there’s strong alignment between your work and the businesses Laura serves, reach out.</p>
              <Button href="contact.html" size="large">Inquire About Partnership</Button>
            </div>
          </window.Container>
        </section>
      </div>);
  }
  window.__pages = window.__pages || {};
  window.__pages.partners = PartnersPage;
})();
