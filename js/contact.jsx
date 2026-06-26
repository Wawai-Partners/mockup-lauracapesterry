/* Laura Capes Terry — Contact */
(function () {
  const { Button, Input, Pill } = window.LauraCapesTerryDesignSystem_1d8d61;
  const CALENDLY = 'https://calendly.com/laura-terry/discovery-call';

  function ContactPage() {
    const toast = window.useToast();
    return (
      <div>
        {/* Hero */}
        <section className="bg-tint section--sm">
          <window.Container>
            <div className="reveal" style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center', paddingTop: 24, paddingBottom: 24 }}>
              <Pill variant="soft" style={{ marginBottom: 16 }}>Contact</Pill>
              <h1 className="h-display" style={{ fontSize: 'var(--fs-h1)', marginBottom: 14 }}>Let’s start a conversation</h1>
              <p className="lead">A short, intentional conversation to understand your goals, find low-hanging opportunities, and recommend a smart next step. No pressure — just clarity.</p>
            </div>
          </window.Container>
        </section>

        {/* Form + info */}
        <section className="bg-page section">
          <div className="container split" style={{ alignItems: 'start', gridTemplateColumns: '1.15fr 0.85fr' }}>
            <div className="reveal card" style={{ boxShadow: 'var(--shadow-md)', padding: 40 }}>
              <h2 className="h-display" style={{ fontSize: 'var(--fs-h3)', margin: '0 0 8px' }}>Send Laura a message</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)', margin: '0 0 24px' }}>
                Tell Laura a little about your business and what’s feeling unclear right now. She’ll personally follow up.
              </p>
              <form onSubmit={(e) => {e.preventDefault();toast('Thanks! Laura will reach out shortly.');}} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <Input placeholder="First name" aria-label="First name" required />
                  <Input placeholder="Last name" aria-label="Last name" required />
                </div>
                <Input placeholder="Email" type="email" aria-label="Email" required />
                <Input placeholder="Company name" aria-label="Company name" />
                <Input placeholder="Phone number" aria-label="Phone number" />
                <Input placeholder="What’s feeling most unclear in your marketing right now?" aria-label="Message" />
                <div style={{ marginTop: 6 }}><Button type="submit">Send message</Button></div>
              </form>
            </div>

            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div className="card" style={{ padding: 28 }}>
                <h3 className="h-display" style={{ fontSize: 'var(--fs-h4)', marginBottom: 6 }}>Prefer to talk?</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)', margin: '0 0 16px' }}>Book a free discovery call and get clarity on your next step.</p>
                <Button href={CALENDLY} target="_blank" rel="noopener" fullWidth>Schedule a Discovery Call</Button>
              </div>
              {[
              ['fa-location-dot', 'Based in', 'Georgetown, Texas'],
              ['fa-envelope', 'Email', 'hello@lauracapesterry.com'],
              ['fa-clock', 'Response time', 'Usually within one business day']].
              map(([ic, label, val]) =>
              <div key={label} style={{ display: 'flex', gap: 16, alignItems: 'center', padding: '4px 4px' }}>
                  <div style={{ width: 46, height: 46, flex: 'none', borderRadius: 12, background: 'var(--surface-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className={`fa-solid ${ic}`} style={{ color: 'var(--color-accent)', fontSize: 18 }}></i>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-primary)' }}>{label}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--text-heading)', marginTop: 2 }}>{val}</div>
                  </div>
                </div>
              )}
              <div style={{ display: 'flex', gap: 10, paddingLeft: 4 }}>
                <a href="https://www.facebook.com/lauracapesterry" target="_blank" rel="noopener" className="contact-soc" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/lauracapesterrymba/" target="_blank" rel="noopener" className="contact-soc" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </section>

        {/* What happens next */}
        <section className="bg-card section">
          <window.Container>
            <window.SectionTitle title="What happens next" sub="Working with Laura always starts the same calm, intentional way." />
            <div className="grid grid-3" style={{ marginTop: 48 }}>
              {[
              ['1', 'We talk', 'Laura listens to understand where you are, what you’re working toward, and what’s getting in the way.'],
              ['2', 'We find what matters', 'Together you’ll surface quick wins, sources of overwhelm, and where AI or modern tools could help.'],
              ['3', 'You get a clear next step', 'Whether or not you work together, you’ll leave with direction and confidence about what to do next.']].
              map(([n, t, b]) =>
              <div key={n} className="reveal" style={{ textAlign: 'center' }}>
                  <div style={{ width: 54, height: 54, margin: '0 auto 18px', borderRadius: '50%', background: 'var(--surface-tint-strong)', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{n}</div>
                  <h3 className="h-display" style={{ marginBottom: 10, fontSize: "23px" }}>{t}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)', margin: 0 }}>{b}</p>
                </div>
              )}
            </div>
          </window.Container>
        </section>
      </div>);

  }
  window.__pages = window.__pages || {};
  window.__pages.contact = ContactPage;
})();