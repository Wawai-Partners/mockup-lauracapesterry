/* Laura Capes Terry — Home (full long-form landing) */
(function () {
  const { Button, Input } = window.LauraCapesTerryDesignSystem_1d8d61;
  const T = (t) => <span className="accent">{t}</span>;

  function HomePage() {
    const toast = window.useToast();
    const { BookButton } = window;
    return (
      <div>
        {/* Hero */}
        <section style={{ background: 'var(--surface-card)' }}>
          <div className="hero-bg" style={{ background: '#e9e9ea url(assets/hero-laura-full.png) no-repeat right center / cover' }}>
            <div className="container" style={{ paddingTop: 88, paddingBottom: 88, minHeight: 740, display: 'flex', alignItems: 'center' }}>
              <div className="reveal" style={{ maxWidth: 520 }}>
                <h1 className="h-display" style={{ fontSize: 'var(--fs-display)', marginBottom: 20 }}>
                  Be seen. Be trusted. Be chosen.
                </h1>
                <p className="lead" style={{ marginBottom: 28 }}>
                  Helping {T('local business owners')} build magnetic brands people love and trust by blending {T('modern tools')} with {T('timeless wisdom')}.
                </p>
                <BookButton size="large" />
              </div>
            </div>
          </div>
        </section>

        {/* Pills band */}
        <section className="bg-dark">
          <div className="container" style={{ paddingTop: 22, paddingBottom: 22, display: 'flex', gap: 24, justifyContent: 'space-between', flexWrap: 'wrap' }}>
            {['Clarity in an AI-Driven World', 'Authentic, Human Marketing', 'Confident, Sustainable Growth'].map((t) => (
              <span key={t} style={{ flex: '1 1 240px', textAlign: 'center', fontFamily: 'var(--font-heading)', fontWeight: 500, fontSize: 18, color: '#fff' }}>{t}</span>
            ))}
          </div>
        </section>

        {/* AI is changing everything */}
        <section className="bg-card section">
          <div className="container split" style={{ alignItems: 'start' }}>
            <div className="reveal">
              <h2 className="h-display" style={{ fontSize: 'var(--fs-h2)', marginBottom: 10 }}>AI is changing everything.</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lead)', fontWeight: 700, fontStyle: 'italic', color: 'var(--text-heading)', margin: '0 0 18px' }}>
                And most business owners are drowning in distraction and overwhelm.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.65, color: 'var(--text-body)', margin: '0 0 16px' }}>You know marketing matters, but:</p>
              <ol style={{ listStyle: 'none', padding: 0, margin: '0 0 18px', display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  ['You’re on the edge of your expertise', '—unsure which AI tools, trends, and tactics actually support your goals, and which ones just add noise.'],
                  ['You’re out of time', '—juggling too many roles to slow down, think strategically, and create marketing that truly reflects your voice and values.'],
                  ['You’re feeling disconnected', '—craving authentic, human connection in a world that’s becoming faster, louder, and more automated by the day.'],
                ].map(([h, b], i) => (
                  <li key={i} style={{ display: 'flex', gap: 12 }}>
                    <span style={{ flex: 'none', width: 26, height: 26, borderRadius: '50%', background: 'var(--surface-tint)', color: 'var(--color-primary)', fontWeight: 700, fontSize: 14, fontFamily: 'var(--font-body)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1 }}>{i + 1}</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'var(--text-body)' }}>
                      <strong className="accent">{h}</strong>{b}
                    </span>
                  </li>
                ))}
              </ol>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.65, color: 'var(--text-body)', margin: '0 0 24px' }}>
                AI was supposed to make things easier. But without clear guidance and experienced marketing leadership, it often does the opposite—amplifying confusion, diluting your message, and pulling your attention in too many directions at once.
              </p>
              <BookButton />
            </div>
            <div className="reveal" style={{ alignSelf: 'start' }}>
              <img src="assets/overwhelm-its-not-working.png" alt="It's not working" className="img-soft" style={{ width: '100%' }} />
            </div>
          </div>
        </section>

        {/* Meet Laura */}
        <section className="bg-tint section">
          <div className="container split" style={{ gridTemplateColumns: '1fr 1.12fr' }}>
            <img className="reveal img-card" src="assets/laura-all-in-with-ai.png" alt="Laura Capes Terry" style={{ width: '100%' }} />
            <div className="reveal">
              <h2 className="h-display" style={{ fontSize: 'var(--fs-h3)', lineHeight: 1.2, marginBottom: 18 }}>
                Meet Laura Capes Terry, MBA—<br />Fractional CMO + Media Consultant
              </h2>
              {[
                'After 30 years in media, branding, and marketing leadership, Laura has seen too many talented entrepreneurs burn out trying to keep up with marketing trends and constant change.',
                'She believes there’s a better way — one that blends wisdom, faith, and modern tools, guided by experienced marketing leadership.',
                'That’s why Laura guides faith-filled entrepreneurs in harnessing AI with wisdom, clarity, and purpose. Her goal is to help you simplify your marketing, strengthen your message, and scale your business with confidence.',
              ].map((p, i) => (
                <p key={i} style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.65, color: 'var(--text-body)', margin: '0 0 14px' }}>{p}</p>
              ))}
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.65, color: 'var(--text-heading)', fontStyle: 'italic', fontWeight: 700, margin: '0 0 14px' }}>
                AI doesn’t replace heart — it amplifies it. And you don’t have to figure it out alone.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.65, color: 'var(--text-body)', margin: '0 0 26px' }}>
                Whether you need clarity, consistency, or a complete refresh, Laura meets you at the decision table and helps you move forward with confidence — one strategic step at a time.
              </p>
              <BookButton>Schedule a Discovery Call</BookButton>
            </div>
          </div>
        </section>

        {/* Awards */}
        <section className="bg-card section--sm">
          <div className="container" style={{ display: 'flex', gap: 32, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            {[
              ['georgetowns-best-2025.png', 'Georgetown’s Best 2025 — Gold'],
              ['texas-downtown-award-winner.png', 'Texas Downtown Award Winner'],
              ['georgetowns-best-2024.png', 'Georgetown’s Best 2024 — Gold'],
              ['georgetowns-best-2023.png', 'Georgetown’s Best 2023 — Gold'],
              ['fg-society-certified-marketer.png', 'FG Society Certified Marketer'],
              ['storybrand-certified-guide.png', 'StoryBrand Certified Guide'],
            ].map(([f, alt]) => (
              <img key={f} src={`assets/awards/${f}`} alt={alt} title={alt} style={{ height: 88, width: 'auto', objectFit: 'contain' }} />
            ))}
          </div>
        </section>

        {/* How We Can Work Together */}
        <section className="bg-page section">
          <Container>
            <window.SectionTitle title="How We Can Work Together"
              sub={<>Every partnership begins with clarity and leadership. Laura helps faith-filled entrepreneurs use <strong>modern marketing</strong> and <strong>AI with strategy, purpose, and heart</strong>—so you can stop reacting to trends and start leading with focus and confidence.</>} />
            <div className="grid grid-3" style={{ marginTop: 48 }}>
              {[
                ['fa-comments', 'AI Strategy Sessions', 'A private 90-minute consultation to evaluate your marketing and identify what’s working, what’s not, and where AI can save time and amplify your message.', 'Ideal for solopreneurs ready to simplify and move forward with peace of mind.'],
                ['fa-compass', 'Fractional Strategy & Mentorship', 'Ongoing strategic partnership for growing businesses ready to scale with clarity and consistency — executive-level guidance without the full-time cost.', 'Ideal for growing teams that want guidance, accountability, and long-term growth.'],
                ['fa-microphone-lines', 'Leadership Training & Speaking', 'Training for entrepreneurs and teams navigating growth, AI, and change — with the clarity and confidence to use modern tools without losing their voice.', 'Ideal for leaders who want to bring human connection and trust back to their marketing.'],
              ].map(([ic, t, b, ideal]) => (
                <div key={t} className="reveal" style={{ textAlign: 'center' }}>
                  <div style={{ width: 60, height: 60, margin: '0 auto 18px', borderRadius: 14, background: 'var(--surface-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className={`fa-solid ${ic}`} style={{ color: 'var(--color-primary)', fontSize: 24 }}></i>
                  </div>
                  <h3 className="h-display" style={{ fontSize: 'var(--fs-h4)', marginBottom: 12 }}>{t}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)', margin: '0 0 12px' }}>{b}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--text-heading)', fontWeight: 700, margin: 0 }}>{ideal}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 44 }}>
              <Button variant="outline" size="large" href="services.html">See all services</Button>
            </div>
          </Container>
        </section>

        {/* How to Get Started */}
        <section className="bg-card section">
          <Container>
            <window.SectionTitle title="How to Get Started"
              sub="Here’s how Laura helps business owners simplify their strategy, save time, and grow with confidence." />
            <div className="grid grid-3" style={{ marginTop: 48, marginBottom: 44 }}>
              {[
                ['1', 'Start a Conversation', 'Laura begins by understanding where you are, what you’re working toward, and what’s currently getting in the way.', 'This is a focused, intentional conversation — not a sales pitch.'],
                ['2', 'Identify What Matters Most', 'Together you’ll surface quick wins, areas of unnecessary complexity, and where AI or modern tools could help — or where they’re adding noise.', 'You’ll leave with clearer priorities and a recommended next step.'],
                ['3', 'Decide the Right Path Forward', 'If it makes sense to go deeper, Laura will outline what that could look like.', 'If not, you’ll still walk away with clarity, direction, and confidence about what to do next.'],
              ].map(([n, t, b, b2]) => (
                <div key={n} className="reveal" style={{ textAlign: 'center' }}>
                  <div style={{ width: 54, height: 54, margin: '0 auto 18px', borderRadius: '50%', background: 'var(--surface-tint-strong)', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{n}</div>
                  <h3 className="h-display" style={{ fontSize: 'var(--fs-h4)', marginBottom: 12 }}>{t}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)', margin: '0 0 10px' }}>{b}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)', margin: 0 }}>{b2}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center' }}><BookButton /></div>
          </Container>
        </section>

        {/* What Clients Say */}
        <section className="bg-page section">
          <Container>
            <window.SectionTitle title="What Clients Say"
              sub={<>Here’s what business owners and leaders say about working with Laura. <a href="reviews.html" className="accent">Read all testimonials →</a></>} />
            <div className="grid grid-3" style={{ marginTop: 44, marginBottom: 44 }}>
              {[
                ['Since partnering with Laura, she’s been an invaluable guide, helping us identify and implement the right strategies for our business. We only regret not reaching out to her sooner.', 'Wendy Del Rio', 'An Idea Front'],
                ['We had no experience in marketing and no idea where to start. Laura immediately understood our situation and clearly laid out the steps we needed to take. For the first time, we could see a clear path forward.', 'Wesley Heinige', 'Bowen Door'],
                ['From the moment I met Laura, I knew I was in good hands. She’s incredibly knowledgeable, genuinely cares about business owners, and leads with integrity — not pressure.', 'Terry Bingman', 'The AG Company'],
              ].map(([q, who, org], i) => (
                <div key={i} className="reveal card" style={{ display: 'flex', flexDirection: 'column' }}>
                  <i className="fa-solid fa-quote-right" style={{ color: 'var(--color-accent)', fontSize: 26, marginBottom: 14 }}></i>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.7, color: 'var(--text-body)', fontStyle: 'italic', margin: '0 0 16px', flex: 1 }}>{q}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 700, color: 'var(--text-heading)', margin: 0 }}>{who}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)', margin: '2px 0 0' }}>{org}</p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center' }}><Button href="reviews.html">Read the reviews</Button></div>
          </Container>
        </section>

        {/* Building Better Websites — free guide */}
        <section style={{ position: 'relative', background: 'var(--surface-dark)', overflow: 'hidden' }}>
          <img src="assets/laura-office-writing.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.16 }} />
          <div className="container split" style={{ position: 'relative', gridTemplateColumns: '0.92fr 1.08fr', paddingTop: 72, paddingBottom: 72 }}>
            <div className="reveal card" style={{ boxShadow: 'var(--shadow-lg)' }}>
              <div className="eyebrow" style={{ textAlign: 'center', marginBottom: 12 }}>Free Guide</div>
              <h3 className="h-display" style={{ fontSize: 'var(--fs-h4)', textAlign: 'center', margin: '0 0 12px', lineHeight: 1.25 }}>
                Does your website clearly explain what you do—and what to do next?
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--text-body)', textAlign: 'center', margin: '0 0 18px' }}>
                Download this clarity-first guide to find what’s working, what’s confusing, and how simple homepage improvements can help visitors take action.
              </p>
              <form onSubmit={(e) => { e.preventDefault(); toast('Thanks! The Website Clarity Guide is on its way.'); }} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <Input placeholder="Name" aria-label="Name" required />
                <Input placeholder="Email" type="email" aria-label="Email" required />
                <Input placeholder="Company name" aria-label="Company name" />
                <Input placeholder="Website" aria-label="Website" />
                <Button type="submit" fullWidth>Get the Website Clarity Guide</Button>
              </form>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-muted)', textAlign: 'center', margin: '12px 0 0' }}>We won’t send spam. Unsubscribe at any time.</p>
            </div>
            <div className="reveal" style={{ color: '#fff' }}>
              <h2 className="h-display" style={{ fontSize: 'var(--fs-h2)', color: '#fff', margin: '0 0 10px' }}>Building Better Websites</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lead)', fontStyle: 'italic', color: 'var(--lct-sky-200)', margin: '0 0 20px' }}>
                Six clarity-first website fixes — plus AI prompts to help you implement them faster.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.65, color: 'rgba(255,255,255,0.92)', margin: '0 0 14px' }}>
                If your website feels “almost right” but not quite effective, it’s often a clarity issue — not a design problem.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.65, color: 'rgba(255,255,255,0.92)', margin: '0 0 12px' }}>
                This free guide walks you through six simple, high-impact fixes focused on your homepage above the fold so visitors can quickly understand:
              </p>
              <ul style={{ margin: '0 0 14px', paddingLeft: 22, color: '#fff', fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.9 }}>
                <li>Who you help</li>
                <li>What you offer</li>
                <li>And what to do next</li>
              </ul>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.65, color: 'rgba(255,255,255,0.92)', margin: 0 }}>
                You’ll also find optional AI prompts to use as a thinking partner — to evaluate and improve your site faster, without losing your voice.
              </p>
            </div>
          </div>
        </section>

        {/* Let's Start a Conversation */}
        <section className="bg-page section" id="contact">
          <Container>
            <div className="card reveal" style={{ maxWidth: 640, margin: '0 auto', boxShadow: 'var(--shadow-md)', padding: 40 }}>
              <h2 className="h-display" style={{ fontSize: 'var(--fs-h2)', textAlign: 'center', margin: '0 0 12px' }}>Let’s Start a Conversation</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'var(--text-body)', textAlign: 'center', margin: '0 0 26px' }}>
                A short, intentional conversation to understand your goals, find low-hanging opportunities, and recommend a smart next step.
              </p>
              <form onSubmit={(e) => { e.preventDefault(); toast('Thanks! Laura will reach out shortly.'); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <Input placeholder="Name" aria-label="Name" required />
                <Input placeholder="Email" type="email" aria-label="Email" required />
                <Input placeholder="Company name" aria-label="Company name" />
                <Input placeholder="Phone number" aria-label="Phone number" />
                <Input placeholder="What’s feeling most unclear in your marketing right now?" aria-label="Message" />
                <div style={{ textAlign: 'center', marginTop: 6 }}><Button type="submit">Start a Conversation</Button></div>
              </form>
            </div>
          </Container>
        </section>
      </div>
    );
  }

  window.__pages = window.__pages || {};
  window.__pages.index = HomePage;
})();
