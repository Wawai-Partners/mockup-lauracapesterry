/* Laura Capes Terry — Resources: Workshops (/resources/workshops) */
(function () {
  const { Button, Pill } = window.LauraCapesTerryDesignSystem_1d8d61;

  const workshops = [
    ['fa-route', 'The Path to Marketing Success', 'A step-by-step overview of Laura\u2019s proven marketing framework — ideal for owners who want a clear, structured approach without reinventing the wheel.', 'Half-day workshop · Groups & organizations'],
    ['fa-microchip', 'AI in Marketing: Practical Applications', 'Cut through the AI noise and learn which tools to use, how to train them, and how to integrate AI into your workflow — without losing your human voice.', 'Half- or full-day · Groups & organizations'],
    ['fa-layer-group', 'Don\u2019t Wing It — Batch It', 'A content system for owners tired of staring at a blank screen. Create a month\u2019s worth of content in one focused session — with help from AI.', '2\u20133 hour workshop · In-person or virtual'],
    ['fa-lightbulb', 'From Blank Screen to Brilliant Strategy', 'For owners who tried to figure out marketing alone and ended up overwhelmed. Go from scattered and stuck to clear and confident.', 'Half-day workshop · In-person'],
    ['fa-shield-heart', 'Navigating the Trust Recession', 'Trust in business and advertising is at an all-time low. Learn to build authentic, community-rooted trust that makes a business the obvious choice.', 'Keynote or half-day · In-person'],
    ['fa-robot', 'Meet Your AI Co-Pilot', 'Partner with AI as a trusted co-pilot to gain clarity, build confidence, overcome excuses, and take practical steps toward the dream or message they feel called to bring to life.', 'Half-day workshop · In-person or virtual']];

  function WorkshopsPage() {
    return (
      <div data-screen-label="Resources — Workshops">
        <section className="bg-tint section--sm" data-screen-label="Workshops hero">
          <window.Container>
            <div className="reveal" style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center', paddingTop: 24, paddingBottom: 24 }}>
              <Pill variant="soft" style={{ marginBottom: 16 }}>Resources · Workshops</Pill>
              <h1 className="h-display" style={{ fontSize: 'var(--fs-h1)', marginBottom: 16 }}>
                Hands-on learning that actually changes how businesses <span className="jk-script" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--color-primary)' }}>market</span>
              </h1>
              <p className="lead">Laura’s workshops are practical, engaging, and built for real business owners — not academics. Walk in with a challenge. Walk out with tools they can use today.</p>
            </div>
          </window.Container>
        </section>

        <section className="bg-card section" data-screen-label="Available workshops">
          <window.Container>
            <window.SectionTitle title="Available" script="workshops" />
            <div className="heart-divider" aria-hidden="true"><i className="fa-solid fa-heart"></i></div>
            <div className="grid grid-2" style={{ marginTop: 44 }}>
              {workshops.map(([ic, t, b, fmt]) => (
                <div key={t} className="reveal card" style={{ display: 'flex', gap: 20, textAlign: 'left', alignItems: 'flex-start' }}>
                  <span style={{ flex: 'none', width: 56, height: 56, borderRadius: '50%', background: 'var(--surface-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className={`fa-solid ${ic}`} style={{ color: 'var(--color-primary)', fontSize: 24 }}></i>
                  </span>
                  <div>
                    <h3 className="ed-serif" style={{ marginBottom: 8, fontSize: '21px' }}>{t}</h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.65, color: 'var(--text-body)', margin: '0 0 12px' }}>{b}</p>
                    <span style={{ display: 'inline-block', fontFamily: 'var(--font-subhead)', fontSize: 12.5, fontWeight: 600, letterSpacing: '0.04em', color: 'var(--color-primary)', background: 'var(--surface-tint)', borderRadius: 999, padding: '6px 14px' }}>{fmt}</span>
                  </div>
                </div>
              ))}
            </div>
          </window.Container>
        </section>

        <section className="bg-dark section">
          <window.Container>
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
              <h2 className="h-display" style={{ fontSize: 'var(--fs-h2)', color: '#fff', marginBottom: 14 }}>Bring a workshop to an organization</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lead)', lineHeight: 1.6, color: 'rgba(255,255,255,0.92)', margin: '0 0 28px' }}>
                Available for Chambers of Commerce, BNI chapters, business associations, leadership groups, and corporate teams throughout Central Texas.
              </p>
              <window.BookButton size="large" variant="accent" style={{ background: '#fff' }}>Inquire About Booking a Workshop <i className="fa-solid fa-heart"></i></window.BookButton>
            </div>
          </window.Container>
        </section>
      </div>);
  }
  window.__pages = window.__pages || {};
  window.__pages.workshops = WorkshopsPage;
})();
