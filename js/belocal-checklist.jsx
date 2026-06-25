/* Laura Capes Terry — Website Checklist for BeLocal Sponsors
   Interactive above-the-fold checklist. Progress persists in localStorage. */
(function () {
  const { Button } = window.LauraCapesTerryDesignSystem_1d8d61;
  const CALENDLY = 'https://calendly.com/laura-terry/discovery-call';
  const STORE = 'lct-belocal-checklist';

  const ITEMS = [
    ['fa-heading', 'Clear, benefit-driven headline', 'One sentence that explains what you do and who you help.'],
    ['fa-align-left', 'Supporting subhead', 'Adds context or highlights the transformation or result you provide.'],
    ['fa-bullseye', 'One strong call to action (CTA) button', 'Make it visually obvious and action-oriented — e.g., “Book a Call” or “Download the Guide.”'],
    ['fa-image', 'High-quality visual or image', 'Should reflect your audience, your work, or the success they’re seeking.'],
    ['fa-star', 'Early trust signal', 'A testimonial, a “5 stars” badge, or “Trusted by” logos can go a long way.'],
    ['fa-bars', 'Simple navigation', 'Stick to 3–5 key links. Don’t overwhelm visitors with options.'],
    ['fa-ban', 'Avoid distractions', 'No sliders, autoplay videos, or too many competing elements.'],
    ['fa-comment', 'Brand voice is clear and confident', 'Speak directly to your ideal customer’s needs and goals.'],
    ['fa-mobile-screen', 'Mobile-friendly design', 'Ensure your site loads quickly, looks great, and works seamlessly on phones and tablets.'],
  ];

  function ChecklistPage() {
    const toast = window.useToast();
    const [done, setDone] = React.useState(() => {
      try { return JSON.parse(localStorage.getItem(STORE)) || {}; } catch (e) { return {}; }
    });
    const toggle = (i) => {
      setDone((prev) => {
        const next = { ...prev, [i]: !prev[i] };
        try { localStorage.setItem(STORE, JSON.stringify(next)); } catch (e) {}
        return next;
      });
    };
    const count = ITEMS.filter((_, i) => done[i]).length;
    const pct = Math.round((count / ITEMS.length) * 100);

    return (
      <div>
        {/* Hero */}
        <section className="bg-dark section" data-screen-label="Checklist hero">
          <window.Container>
            <div className="reveal" style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center', color: '#fff' }}>
              <h1 className="ed-serif" style={{ fontSize: 'var(--fs-h1)', color: '#fff', margin: '0 0 16px' }}>
                Websites: the key to turning curiosity into <span className="ed-em" style={{ color: 'var(--lct-sky-500)' }}>action</span>
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.65, color: 'rgba(255,255,255,0.92)', margin: '0 0 10px' }}>
                When people see your business in BeLocal, they want to learn more — and the first place they go is your website.
                Most visitors decide in just a few seconds whether to stay or leave.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(255,255,255,0.7)', margin: 0 }}>
                A guide for local business owners by Laura Capes Terry, MBA
              </p>
            </div>
          </window.Container>
        </section>

        {/* Intro + progress */}
        <section className="bg-page section">
          <window.Container>
            <div className="reveal" style={{ maxWidth: 760, margin: '0 auto 36px', textAlign: 'center' }}>
              <p className="lead" style={{ margin: 0 }}>
                This checklist helps you make sure the most important part of your website — the
                <strong className="accent"> above-the-fold section</strong> — grabs attention, builds trust,
                and invites action, so you can turn curiosity into new business.
              </p>
            </div>

            <div className="chk-progress reveal">
              <div className="chk-progress__row">
                <span className="chk-progress__label">Your above-the-fold score</span>
                <span className="chk-progress__count">{count} / {ITEMS.length}</span>
              </div>
              <div className="chk-progress__track"><div className="chk-progress__fill" style={{ width: `${pct}%` }}></div></div>
            </div>

            <div className="chk-list" style={{ marginTop: 28 }}>
              {ITEMS.map(([ic, title, body], i) => (
                <button key={i} className="chk-item" data-on={!!done[i]} onClick={() => toggle(i)} aria-pressed={!!done[i]}>
                  <span className="chk-box"><i className="fa-solid fa-check"></i></span>
                  <span style={{ flex: 1 }}>
                    <span className="chk-item__title"><i className={`fa-solid ${ic}`} style={{ color: 'var(--color-accent)', marginRight: 10 }}></i>{title}</span>
                    <span className="chk-item__body">{body}</span>
                  </span>
                </button>
              ))}
            </div>
          </window.Container>
        </section>

        {/* Pro tip */}
        <section className="bg-card section--sm">
          <window.Container>
            <div className="protip reveal">
              <div className="protip__tag"><i className="fa-solid fa-lightbulb"></i> Pro tip</div>
              <p className="protip__lead">Ask someone who doesn’t know your business to visit your site for 10 seconds, then answer:</p>
              <div className="protip__qs">
                <span>What do I offer?</span>
                <span>Who is it for?</span>
                <span>What should I do next?</span>
              </div>
              <p className="protip__note">If the answers aren’t instantly clear, revisit this checklist and make updates until your homepage is clear, compelling, and action-oriented.</p>
            </div>
          </window.Container>
        </section>

        {/* Closing CTA */}
        <section className="bg-page section">
          <window.Container>
            <div className="reveal" style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
              <h2 className="ed-serif" style={{ fontSize: 'var(--fs-h2)', marginBottom: 14 }}>You don’t have long to make a great first impression.</h2>
              <p className="lead" style={{ margin: '0 auto 26px' }}>
                But when you get it right, you open the door to more leads, more customers, and more growth.
                If you’d like expert help making your website shine, Laura is here for you.
              </p>
              <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button href={CALENDLY} target="_blank" rel="noopener" size="large">Work With Laura</Button>
                <Button href="resources.html#guides" variant="accent" size="large">More marketing tips</Button>
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)', marginTop: 32 }}>
                © 2025 Laura Capes Terry · Grayson Media &amp; Marketing
              </p>
            </div>
          </window.Container>
        </section>
      </div>
    );
  }
  window.__pages = window.__pages || {};
  window.__pages['belocal-checklist'] = ChecklistPage;
})();
