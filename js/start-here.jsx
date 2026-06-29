/* Laura Capes Terry — Start Here: Find Your Best Next Step (/start-here)
   Interactive "compass" — select challenges, get routed recommendations. */
(function () {
  const { Button, Pill, Input } = window.LauraCapesTerryDesignSystem_1d8d61;
  const { useState } = React;

  /* Each option: id, icon, the challenge statement, and routed recommendations. */
  const OPTIONS = [
    { id: 'visibility', icon: 'fa-eye', text: "I need more visibility — people don't know my business exists.",
      recs: [['Brand Awareness', 'brand-awareness.html'], ['BeLocal Georgetown', 'belocal.html'], ['Social Media Marketing', 'brand-awareness.html']] },
    { id: 'customers', icon: 'fa-user-plus', text: "I need more customers — visibility isn't converting into business.",
      recs: [['Trust Building', 'about.html#trust'], ['Website Clarity Guide', 'resources-guides.html'], ['Marketing Strategy', 'marketing-strategy.html']] },
    { id: 'messaging', icon: 'fa-comment-dots', text: "I need better messaging — I can't explain what I do in a way that clicks.",
      recs: [['StoryBrand Approach', 'awards.html'], ['Website Clarity Guide', 'resources-guides.html'], ['Private Coaching', 'marketing-strategy.html']] },
    { id: 'social', icon: 'fa-share-nodes', text: "I need help with social media — it feels overwhelming and inconsistent.",
      recs: [['Social Media Marketing', 'brand-awareness.html'], ["\u201CDon't Wing It, Batch It\u201D Workshop", 'resources-workshops.html'], ['AI Consulting', 'marketing-strategy.html']] },
    { id: 'community', icon: 'fa-handshake', text: "I want to connect with the Georgetown community — I'm new or want deeper roots.",
      recs: [['Community Connections', 'community-connections.html'], ['BNI GTX', 'community-connections.html'], ['BeLocal Georgetown', 'belocal.html'], ["Let's Go Locals", 'brand-awareness.html']] },
    { id: 'strategy', icon: 'fa-chess', text: "I need a marketing strategy — I'm doing too many things without a clear plan.",
      recs: [['Fractional CMO', 'marketing-strategy.html'], ['Private Coaching', 'marketing-strategy.html'], ['AI Strategy Session', 'marketing-strategy.html']] },
    { id: 'belocal', icon: 'fa-star', text: "I want to explore BeLocal — I've heard about it and want to learn more.",
      recs: [['BeLocal Georgetown', 'belocal.html'], ['Book a Discovery Call', 'CALENDLY']] }];

  const CALENDLY = 'https://calendly.com/laura-terry/discovery-call';

  function StartHerePage() {
    const toast = window.useToast();
    const [sel, setSel] = useState({});
    const [shown, setShown] = useState(false);
    const toggle = (id) => { setSel((p) => ({ ...p, [id]: !p[id] })); setShown(false); };

    const chosen = OPTIONS.filter((o) => sel[o.id]);
    const recMap = {};
    chosen.forEach((o) => o.recs.forEach(([label, href]) => { recMap[label] = href; }));
    const recs = Object.entries(recMap);

    const submit = () => { if (chosen.length) setShown(true); };

    return (
      <div data-screen-label="Start Here">
        {/* Hero */}
        <section className="bg-tint section--sm" data-screen-label="Start Here hero">
          <window.Container>
            <div className="reveal" style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center', paddingTop: 24, paddingBottom: 16 }}>
              <Pill variant="soft" style={{ marginBottom: 16 }}>Start Here</Pill>
              <h1 className="h-display" style={{ fontSize: 'var(--fs-h1)', marginBottom: 16 }}>
                What's your biggest marketing <span className="jk-script" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--color-primary)' }}>challenge</span> right now?
              </h1>
              <p className="lead">Tell Laura what you're working on — and she'll point you toward exactly the right resource, service, or conversation for where you are today.</p>
              <p style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic', fontSize: 15, color: 'var(--text-muted)', margin: '12px 0 0' }}>This isn't a sales form. It's a compass.</p>
            </div>
          </window.Container>
        </section>

        {/* Questionnaire */}
        <section className="bg-page section" data-screen-label="Compass">
          <window.Container>
            <div style={{ maxWidth: 760, margin: '0 auto' }}>
              <h2 className="h-display reveal" style={{ fontSize: 'var(--fs-h3)', textAlign: 'center', marginBottom: 8 }}>What is your biggest marketing challenge?</h2>
              <p className="reveal" style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-muted)', textAlign: 'center', margin: '0 0 32px' }}>Select all that apply.</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {OPTIONS.map((o) => {
                  const on = !!sel[o.id];
                  return (
                    <button key={o.id} type="button" onClick={() => toggle(o.id)} className="sh-option reveal" aria-pressed={on}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 16, textAlign: 'left', cursor: 'pointer', width: '100%',
                        fontFamily: 'var(--font-body)', background: on ? 'var(--surface-tint)' : 'var(--surface-card)',
                        border: on ? '2px solid var(--color-primary)' : '1px solid var(--border-hairline)',
                        borderRadius: 12, padding: '16px 20px', transition: 'background .14s ease, border-color .14s ease'
                      }}>
                      <span style={{ flex: 'none', width: 42, height: 42, borderRadius: '50%', background: on ? 'var(--color-primary)' : 'var(--surface-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .14s ease' }}>
                        <i className={`fa-solid ${o.icon}`} style={{ color: on ? '#fff' : 'var(--color-primary)', fontSize: 17 }}></i>
                      </span>
                      <span style={{ flex: 1, fontSize: 16, lineHeight: 1.45, color: 'var(--text-heading)', fontWeight: on ? 600 : 500 }}>{o.text}</span>
                      <span style={{ flex: 'none', width: 24, height: 24, borderRadius: 6, border: on ? 'none' : '2px solid var(--border-hairline)', background: on ? 'var(--color-primary)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {on ? <i className="fa-solid fa-check" style={{ color: '#fff', fontSize: 12 }}></i> : null}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="reveal" style={{ textAlign: 'center', marginTop: 30 }}>
                <Button onClick={submit} size="large" disabled={!chosen.length} style={!chosen.length ? { opacity: 0.5, cursor: 'not-allowed' } : undefined}>
                  Show Me My Best Next Step →
                </Button>
              </div>

              {/* Results */}
              {shown ? (
                <div className="sh-results" style={{ marginTop: 36, background: 'var(--surface-card)', border: '1px solid var(--border-hairline)', borderRadius: 14, padding: 36, boxShadow: 'var(--shadow-md)' }}>
                  <div style={{ textAlign: 'center', marginBottom: 24 }}>
                    <span style={{ display: 'inline-flex', width: 56, height: 56, borderRadius: '50%', background: 'var(--surface-tint)', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                      <i className="fa-solid fa-compass" style={{ color: 'var(--color-primary)', fontSize: 26 }}></i>
                    </span>
                    <h3 className="ed-serif" style={{ fontSize: '25px', marginBottom: 6 }}>Your best next steps</h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-muted)', margin: 0 }}>Based on what you selected, start with these:</p>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
                    {recs.map(([label, href]) => {
                      const cal = href === 'CALENDLY';
                      return (
                        <a key={label} href={cal ? CALENDLY : href} target={cal ? '_blank' : undefined} rel="noopener"
                          style={{ display: 'inline-flex', alignItems: 'center', gap: 9, textDecoration: 'none', fontFamily: 'var(--font-subhead)', fontWeight: 600, fontSize: 15, color: cal ? '#fff' : 'var(--color-primary)', background: cal ? 'var(--color-accent)' : 'var(--surface-tint)', border: cal ? 'none' : '1px solid var(--surface-tint-strong)', borderRadius: 999, padding: '11px 20px' }}>
                          {label}<i className={`fa-solid ${cal ? 'fa-heart' : 'fa-arrow-right'}`} style={{ fontSize: 12, color: cal ? '#fff' : 'var(--color-accent)' }}></i>
                        </a>
                      );
                    })}
                  </div>
                </div>
              ) : null}
            </div>
          </window.Container>
        </section>

        {/* Contact form + info */}
        <section className="bg-card section" data-screen-label="Contact Laura">
          <window.Container>
            <window.SectionTitle title="Or just" script="say hello"
            sub="Prefer to skip the compass? Tell Laura what’s on your mind and she’ll personally point you in the right direction." />
            <div className="heart-divider" aria-hidden="true"><i className="fa-solid fa-heart"></i></div>
            <div className="split" style={{ alignItems: 'start', gridTemplateColumns: '1.15fr 0.85fr', marginTop: 48 }}>
              <div className="reveal card" style={{ boxShadow: 'var(--shadow-md)', padding: 40 }}>
                <h3 className="h-display" style={{ fontSize: 'var(--fs-h3)', margin: '0 0 8px' }}>Send Laura a message</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)', margin: '0 0 24px' }}>
                  Tell Laura a little about the business and what’s feeling unclear right now. She’ll personally follow up.
                </p>
                <form onSubmit={(e) => {e.preventDefault();toast('Thanks! Laura will reach out shortly.');}} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <Input placeholder="First name" aria-label="First name" required />
                    <Input placeholder="Last name" aria-label="Last name" required />
                  </div>
                  <Input placeholder="Email" type="email" aria-label="Email" required />
                  <Input placeholder="Company name" aria-label="Company name" />
                  <Input placeholder="Phone number" aria-label="Phone number" />
                  <Input placeholder="What’s feeling most unclear in the marketing right now?" aria-label="Message" />
                  <div style={{ marginTop: 6 }}><Button type="submit">Send message</Button></div>
                </form>
              </div>

              <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div className="card" style={{ padding: 28 }}>
                  <h3 className="h-display" style={{ fontSize: 'var(--fs-h4)', marginBottom: 6 }}>Prefer to talk?</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)', margin: '0 0 16px' }}>Book a free discovery call and get clarity on the next step.</p>
                  <window.BookButton fullWidth>Schedule a Discovery Call</window.BookButton>
                </div>
                {[
                ['fa-location-dot', 'Based in', 'Georgetown, Texas'],
                ['fa-envelope', 'Email', 'laura@lauracapesterry.com'],
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
                  <a href="https://www.linkedin.com/in/lauracapesterry/" target="_blank" rel="noopener" className="contact-soc" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </window.Container>
        </section>

        {/* What happens next */}
        <section className="bg-page section" data-screen-label="What happens next">
          <window.Container>
            <window.SectionTitle title="What happens" script="next" sub="Working with Laura always starts the same calm, intentional way." />
            <div className="heart-divider" aria-hidden="true"><i className="fa-solid fa-heart"></i></div>
            <div className="grid grid-3" style={{ marginTop: 48 }}>
              {[
              ['1', 'We talk', 'Laura listens to understand where the business is, what the owner is working toward, and what’s getting in the way.'],
              ['2', 'We find what matters', 'Together Laura and the owner surface quick wins, sources of overwhelm, and where AI or modern tools could help.'],
              ['3', 'A clear next step', 'Whether or not they work together, the owner leaves with direction and confidence about what to do next.']].
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

        {/* Discovery call + reassurance */}
        <section className="bg-dark section" data-screen-label="Reassurance">
          <window.Container>
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 660, margin: '0 auto' }}>
              <h2 className="h-display" style={{ fontSize: 'var(--fs-h2)', color: '#fff', marginBottom: 14 }}>Not sure which option fits? That's okay.</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lead)', lineHeight: 1.6, color: 'rgba(255,255,255,0.92)', margin: '0 0 28px' }}>
                Most business owners are dealing with more than one challenge at once. Book a free 30-minute Discovery Call and Laura will help you figure out the clearest path forward — no pressure, no pitch.
              </p>
              <window.BookButton size="large" variant="accent" style={{ background: '#fff' }}>Book a Discovery Call With Laura <i className="fa-solid fa-heart"></i></window.BookButton>
            </div>
          </window.Container>
        </section>
      </div>);
  }
  window.__pages = window.__pages || {};
  window.__pages.starthere = StartHerePage;
})();
