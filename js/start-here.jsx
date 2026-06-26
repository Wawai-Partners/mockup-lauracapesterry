/* Laura Capes Terry — Start Here: Find Your Best Next Step (/start-here)
   Interactive "compass" — select challenges, get routed recommendations. */
(function () {
  const { Button, Pill } = window.LauraCapesTerryDesignSystem_1d8d61;
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
