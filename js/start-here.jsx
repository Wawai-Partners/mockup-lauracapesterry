/* Laura Capes Terry — Start Here (guided questionnaire) */
(function () {
  const { Button, Pill, Input } = window.LauraCapesTerryDesignSystem_1d8d61;
  const CALENDLY = 'https://calendly.com/laura-terry/discovery-call';

  /* Challenge → tailored recommendation map (PDF "Start Here" routing) */
  const CHALLENGES = [
    {
      id: 'visibility', icon: 'fa-eye', label: 'I need more visibility',
      pillar: 'Be Seen',
      rec: {
        title: 'Let’s get you seen by the right people',
        body: 'Visibility isn’t about shouting louder — it’s about showing up consistently where your future customers already are. Laura blends local media, smart social, and AI-assisted content so you stay in front of the right people without burning out.',
        steps: [['Explore BeLocal Georgetown', 'belocal.html'], ['Social Media Marketing', 'services.html']],
      },
    },
    {
      id: 'customers', icon: 'fa-users', label: 'I need more customers',
      pillar: 'Be Chosen',
      rec: {
        title: 'Turn attention into customers who choose you',
        body: 'More customers comes from being seen, trusted, and chosen — in that order. Laura helps you clarify your message and build a simple, repeatable system that moves people from “who’s that?” to “I’m calling them.”',
        steps: [['Marketing Strategy & Leadership', 'services.html'], ['Read the FAQs on getting chosen', 'ask-laura.html#chosen']],
      },
    },
    {
      id: 'messaging', icon: 'fa-comment-dots', label: 'I need better messaging',
      pillar: 'Be Trusted',
      rec: {
        title: 'Clarify your message so people get it instantly',
        body: 'If people are confused, they don’t buy. As a StoryBrand-certified guide, Laura helps you cut the jargon and say what you do — and what to do next — in words your customers actually use.',
        steps: [['Private & Group Coaching', 'services.html'], ['Building Better Websites guide', 'resources.html#guides']],
      },
    },
    {
      id: 'social', icon: 'fa-hashtag', label: 'I need help with social media',
      pillar: 'Be Seen',
      rec: {
        title: 'Show up on social without the overwhelm',
        body: 'You don’t need to be everywhere — you need a plan you can sustain. Laura helps you batch content, use AI wisely, and post with purpose so social actually supports your business instead of draining it.',
        steps: [['Social Media Marketing', 'services.html'], ['“CATCH” Attention guide', 'resources.html#guides']],
      },
    },
    {
      id: 'community', icon: 'fa-handshake', label: 'I want to connect with the Georgetown community',
      pillar: 'Community Connections',
      rec: {
        title: 'Become part of the fabric of Georgetown',
        body: 'Local reputation is built through real relationships. Laura connects you to the community through BeLocal, BNI GTX, and local events — so you become known, liked, and trusted close to home.',
        steps: [['Explore BeLocal Georgetown', 'belocal.html'], ['Community Connections', 'services.html']],
      },
    },
    {
      id: 'strategy', icon: 'fa-compass', label: 'I need a marketing strategy',
      pillar: 'Strategy & Leadership',
      rec: {
        title: 'Get a clear strategy — and a leader to guide it',
        body: 'Random tactics waste time and money. With 30+ years of experience, Laura brings executive-level marketing leadership — as a fractional CMO, AI consultant, or coach — so every decision serves the bigger picture.',
        steps: [['Fractional CMO & Consulting', 'services.html'], ['The Proven Path frameworks', 'resources.html#frameworks']],
      },
    },
    {
      id: 'belocal', icon: 'fa-map-location-dot', label: 'I want to explore BeLocal',
      pillar: 'Brand Awareness',
      rec: {
        title: 'See how BeLocal puts you in front of new neighbors',
        body: 'BeLocal Georgetown welcomes new homeowners and connects them with the businesses they’ll come to love — print, digital, mobile, social, and events working together. It’s a yellow brick road for newcomers to the best of Georgetown.',
        steps: [['Explore BeLocal Georgetown', 'belocal.html'], ['Be Locally Loved Podcast', 'podcast.html']],
      },
    },
  ];

  function StartHerePage() {
    const toast = window.useToast();
    const [picked, setPicked] = React.useState(null);
    const recRef = React.useRef(null);
    const choice = CHALLENGES.find((c) => c.id === picked);

    function pick(id) {
      setPicked(id);
      requestAnimationFrame(() => {
        const el = recRef.current;
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' });
      });
    }

    return (
      <div>
        {/* Hero */}
        <section className="bg-dark section--sm" style={{ position: 'relative' }}>
          <window.Container>
            <div className="reveal" style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center', paddingTop: 30, paddingBottom: 30 }}>
              <Pill style={{ marginBottom: 18 }}>Start Here</Pill>
              <h1 className="h-display" style={{ fontSize: 'var(--fs-h1)', color: '#fff', marginBottom: 16 }}>
                What’s your biggest marketing challenge?
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lead)', lineHeight: 1.6, color: 'rgba(255,255,255,0.92)', margin: 0 }}>
                Pick the one that feels most true right now. Laura will point you to a smart next step — no overwhelm, no pressure. You don’t have to figure it out alone.
              </p>
            </div>
          </window.Container>
        </section>

        {/* Step 1 — choose */}
        <section className="bg-page section">
          <window.Container>
            <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 40px' }}>
              <div className="eyebrow" style={{ marginBottom: 10 }}>Step 1 — Tell Laura</div>
              <h2 className="h-display" style={{ fontSize: 'var(--fs-h3)' }}>Choose what fits you best</h2>
            </div>
            <div className="grid grid-3" style={{ gap: 20 }}>
              {CHALLENGES.map((c) => {
                const on = picked === c.id;
                return (
                  <button key={c.id} onClick={() => pick(c.id)}
                    className="challenge-card" data-on={on ? 'true' : 'false'}>
                    <span className="challenge-card__icon"><i className={`fa-solid ${c.icon}`}></i></span>
                    <span className="challenge-card__label">{c.label}</span>
                    <span className="challenge-card__check"><i className="fa-solid fa-check"></i></span>
                  </button>
                );
              })}
            </div>
          </window.Container>
        </section>

        {/* Step 2 — recommendation */}
        <div ref={recRef}></div>
        {choice && (
          <section className="bg-card section" key={choice.id}>
            <window.Container>
              <div className="reveal is-in card" style={{ maxWidth: 860, margin: '0 auto', padding: 0, overflow: 'hidden', display: 'grid', gridTemplateColumns: '1fr', boxShadow: 'var(--shadow-md)' }}>
                <div style={{ background: 'var(--surface-tint)', padding: '22px 36px', display: 'flex', alignItems: 'center', gap: 14, borderBottom: '1px solid var(--border-subtle)' }}>
                  <span className="challenge-card__icon" style={{ margin: 0 }}><i className={`fa-solid ${choice.icon}`}></i></span>
                  <div>
                    <div className="eyebrow">Recommended for “{choice.label}”</div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--text-heading)', fontSize: 15 }}>{choice.pillar}</div>
                  </div>
                </div>
                <div style={{ padding: '34px 36px 38px' }}>
                  <h3 className="h-display" style={{ fontSize: 'var(--fs-h3)', marginBottom: 14 }}>{choice.rec.title}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 16.5, lineHeight: 1.65, color: 'var(--text-body)', margin: '0 0 24px' }}>{choice.rec.body}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 28 }}>
                    {choice.rec.steps.map(([l, h]) => (
                      <a key={l} href={h} className="rec-step">
                        <i className="fa-solid fa-arrow-right" style={{ fontSize: 12 }}></i>{l}
                      </a>
                    ))}
                  </div>
                  <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 24, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                    <Button href={CALENDLY} target="_blank" rel="noopener">Schedule a Discovery Call</Button>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'var(--text-muted)' }}>A free, no-pressure conversation about your next step.</span>
                  </div>
                </div>
              </div>
            </window.Container>
          </section>
        )}

        {/* Lead magnet */}
        <section className="bg-tint section">
          <window.Container>
            <div className="split reveal" style={{ alignItems: 'center' }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: 12 }}>Free download</div>
                <h2 className="h-display" style={{ fontSize: 'var(--fs-h2)', marginBottom: 14 }}>Building Better Websites: Six Success Tips</h2>
                <p className="lead" style={{ margin: '0 0 24px' }}>
                  A quick, practical checklist to make sure your website is actually working for you — turning visitors into leads. Grab it free and put it to work today.
                </p>
                <form onSubmit={(e) => { e.preventDefault(); toast('Thanks! Check your inbox — Laura is sending your checklist.'); }}
                  style={{ display: 'flex', gap: 12, flexWrap: 'wrap', maxWidth: 440 }}>
                  <div style={{ flex: 1, minWidth: 220 }}><Input placeholder="Your email" type="email" aria-label="Email" required /></div>
                  <Button type="submit">Send it to me</Button>
                </form>
              </div>
              <div className="card" style={{ background: 'var(--surface-card)', textAlign: 'center', padding: 40 }}>
                <i className="fa-solid fa-file-circle-check" style={{ fontSize: 46, color: 'var(--color-primary)', marginBottom: 18 }}></i>
                <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 19, color: 'var(--text-heading)', margin: '0 0 8px' }}>6 tips · 2-minute read</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-body)', margin: 0 }}>The fastest way to spot what’s costing you leads.</p>
              </div>
            </div>
          </window.Container>
        </section>

        {/* Connect band */}
        <section className="bg-page section">
          <window.Container>
            <div className="grid grid-2" style={{ gap: 40, alignItems: 'stretch' }}>
              <div className="card reveal" style={{ textAlign: 'center' }}>
                <i className="fa-solid fa-share-nodes" style={{ fontSize: 30, color: 'var(--color-primary)', marginBottom: 16 }}></i>
                <h3 className="h-display" style={{ fontSize: 'var(--fs-h4)', marginBottom: 10 }}>Follow along</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.6, color: 'var(--text-body)', margin: '0 0 20px' }}>Practical marketing wisdom, AI tips, and Georgetown community stories.</p>
                <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
                  <a className="contact-soc" href="https://www.instagram.com/lauracapesterrymba/" target="_blank" rel="noopener" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                  <a className="contact-soc" href="https://www.linkedin.com/in/lauracapesterry/" target="_blank" rel="noopener" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                  <a className="contact-soc" href="https://www.facebook.com/lauracapesterry" target="_blank" rel="noopener" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                </div>
              </div>
              <div className="card reveal" style={{ textAlign: 'center', background: 'var(--surface-dark)' }}>
                <i className="fa-solid fa-mug-hot" style={{ fontSize: 30, color: 'var(--lct-sky-200)', marginBottom: 16 }}></i>
                <h3 className="h-display" style={{ fontSize: 'var(--fs-h4)', marginBottom: 10, color: '#fff' }}>Rather just talk it through?</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', margin: '0 0 20px' }}>Book a free discovery call and Laura will meet you at the decision table.</p>
                <Button href={CALENDLY} target="_blank" rel="noopener" variant="onDark">Chat with Laura</Button>
              </div>
            </div>
          </window.Container>
        </section>
      </div>
    );
  }
  window.__pages = window.__pages || {};
  window.__pages['start-here'] = StartHerePage;
})();
