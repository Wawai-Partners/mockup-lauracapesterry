/* Laura Capes Terry — Home (June 2026, "Jenna-energy" redesign)
   Bold alternating color-block sections, oversized Cormorant display
   type with Brittany Signature script accents, pill buttons, and
   full-bleed photography — all on the LCT teal / navy / cream brand.
   Content mirrors the prior homepage. */
(function () {
  const { Button, Input } = window.LauraCapesTerryDesignSystem_1d8d61;
  const CALENDLY = 'https://calendly.com/laura-terry/discovery-call';

  /* ---- Brand motifs (used sparingly for warmth) ---- */
  function HeartRule() {
    return (
      <div className="motif-rule" aria-hidden="true">
        <span className="motif-rule__line"></span>
        <svg viewBox="0 0 24 22" className="motif-rule__heart"><path d="M12 21S2 14.5 2 7.8C2 4.6 4.5 2 7.6 2 9.6 2 11.3 3.1 12 4.6 12.7 3.1 14.4 2 16.4 2 19.5 2 22 4.6 22 7.8 22 14.5 12 21 12 21Z" fill="var(--lct-rose)" /></svg>
        <span className="motif-rule__line"></span>
      </div>);

  }
  function Sunburst() {
    const rays = [];
    for (let i = 0; i < 16; i++) {
      const a = i / 16 * Math.PI * 2;
      const long = i % 2 === 0;
      const r1 = 20,r2 = long ? 34 : 28;
      rays.push(<line key={i} x1={50 + Math.cos(a) * r1} y1={50 + Math.sin(a) * r1}
      x2={50 + Math.cos(a) * r2} y2={50 + Math.sin(a) * r2}
      stroke="var(--lct-sand)" strokeWidth="2" strokeLinecap="round" />);
    }
    return (
      <svg viewBox="0 0 100 100" className="motif-sun" aria-hidden="true">
        <circle cx="50" cy="50" r="12" fill="none" stroke="var(--lct-sand)" strokeWidth="2.4" />
        {rays}
      </svg>);

  }
  function SprigArt({ className }) {
    return (
      <svg className={className} viewBox="0 0 80 230" fill="none" aria-hidden="true">
        <g stroke="#6BBCBC" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          {/* central stem */}
          <path d="M40 228 C40 188 40 120 40 56" />
          {/* branch fork near the top */}
          <path d="M40 56 C39 44 33 35 25 28" />
          <path d="M40 56 C41 44 47 35 55 28" />
          {/* symmetric oval leaves along the stem */}
          <ellipse cx="25" cy="196" rx="12" ry="5" transform="rotate(30 25 196)" />
          <ellipse cx="55" cy="196" rx="12" ry="5" transform="rotate(-30 55 196)" />
          <ellipse cx="24" cy="166" rx="12" ry="5" transform="rotate(30 24 166)" />
          <ellipse cx="56" cy="166" rx="12" ry="5" transform="rotate(-30 56 166)" />
          <ellipse cx="25" cy="136" rx="11" ry="4.6" transform="rotate(30 25 136)" />
          <ellipse cx="55" cy="136" rx="11" ry="4.6" transform="rotate(-30 55 136)" />
          <ellipse cx="26" cy="108" rx="10" ry="4.4" transform="rotate(30 26 108)" />
          <ellipse cx="54" cy="108" rx="10" ry="4.4" transform="rotate(-30 54 108)" />
          <ellipse cx="27" cy="83" rx="9" ry="4" transform="rotate(32 27 83)" />
          <ellipse cx="53" cy="83" rx="9" ry="4" transform="rotate(-32 53 83)" />
          {/* small leaves on the branch fork */}
          <ellipse cx="20" cy="34" rx="7" ry="3.2" transform="rotate(40 20 34)" />
          <ellipse cx="60" cy="34" rx="7" ry="3.2" transform="rotate(-40 60 34)" />
        </g>
        {/* dot accents around the upper portion */}
        <g fill="#6BBCBC">
          <circle cx="40" cy="20" r="2" />
          <circle cx="17" cy="22" r="1.7" />
          <circle cx="63" cy="22" r="1.7" />
        </g>
      </svg>);

  }

  /* ---- Banner hero ---- */
  function Hero() {
    return (
      <section className="home-hero" data-screen-label="Hero">
        <div className="home-hero__inner">
          <div className="home-hero__copy reveal" style={{ maxWidth: "586px" }}>
            <div className="home-hero__rule" aria-hidden="true">
              <span className="home-hero__rule-line"></span>
              <i className="fa-solid fa-heart"></i>
              <span className="home-hero__rule-line"></span>
            </div>
            <h1>
              Be <span className="jk-ink-teal">seen</span>.<br />
              Be <span className="jk-script">trusted</span>.<br />
              Be <span className="jk-ink-rose">chosen</span>.
            </h1>
            <p className="home-hero__sub">
              Helping local business owners build magnetic brands people love and trust —
              by blending modern tools with timeless wisdom.
            </p>
            <p className="home-hero__expertise">
              Local Marketing &amp; Media Expert <span>|</span> AI Consultant <span>|</span> Podcaster
            </p>
            <Button href={CALENDLY} target="_blank" rel="noopener" size="large">Work With Laura</Button>
          </div>
          <div className="home-hero__figure reveal">
            <img className="home-hero__brush" src="assets/hero-brushstroke-cool.png" alt="" aria-hidden="true" />
            <img className="home-hero__photo" src="assets/laura-hero-podium.png" alt="Laura Capes Terry, MBA — strategic marketing guidance" style={{ maxWidth: "580px", width: "100%", height: "auto" }} />
          </div>
        </div>
      </section>);

  }

  /* ---- Navy phrase band ---- */
  const PHRASES = ['Clarity in an AI-Driven World', 'Authentic, Human Marketing', 'Confident, Sustainable Growth'];
  function PhraseBand() {
    return (
      <section className="phrase-band" aria-label="Brand themes" style={{ backgroundColor: "var(--lct-navy)" }}>
<<<<<<< HEAD
        <div className="phrase-band__inner" style={{ padding: "22px 20px" }}>
=======
        <div className="phrase-band__inner" style={{  padding: "22px 20px" }}>
>>>>>>> 48099230d9b689b38a576329e2eabf76e1c90339
          {PHRASES.map((p, i) =>
          <React.Fragment key={p}>
              {i > 0 && <i className="fa-solid fa-heart phrase-band__sep" aria-hidden="true" style={{ color: "rgb(192, 100, 120)" }}></i>}
              <span className="phrase-band__item">{p}</span>
            </React.Fragment>
          )}
        </div>
      </section>);

  }

  /* ---- Problem: "AI is changing everything" ---- */
  const PAINS = [
  ['They’re on the edge of their expertise', '—unsure which AI tools, trends, and tactics actually support their goals, and which ones just add noise.'],
  ['They’re out of time', '—juggling too many roles to slow down, think strategically, and create marketing that truly reflects their voice and values.'],
  ['They’re feeling disconnected', '—craving authentic, human connection in a world that’s becoming faster, louder, and more automated by the day.']];

  function Problem() {
    return (
      <section className="jk-levelup" data-screen-label="The problem">
        <div className="jk-levelup__inner">
          <div className="jk-levelup__copy reveal">
            <h2 className="jk-h">AI is changing <span className="jk-ink-rose">everything.</span></h2>
            <p className="jk-lead-em">And most business owners are drowning in distraction and overwhelm.</p>
            <p className="jk-p">Most business owners know marketing matters, but:</p>
            <ol className="problem-list">
              {PAINS.map(([lead, rest], i) =>
              <li key={i}>
                  <span className="problem-list__num">{i + 1}</span>
                  <span className="problem-list__text"><strong>{lead}</strong>{rest}</span>
                </li>
              )}
            </ol>
            <p className="jk-p" style={{ marginTop: 22 }}>
              AI was supposed to make things easier. But without clear guidance and experienced marketing
              leadership, it often does the opposite — amplifying confusion, diluting the message, and
              pulling attention in too many directions at once.
            </p>
            <p className="jk-levelup__tag">They don’t have to figure it out alone</p>
            <div><Button href={CALENDLY} target="_blank" rel="noopener" size="large" className="jk-levelup__cta">Work With Laura</Button></div>
          </div>
        </div>
        <div className="jk-levelup__photo reveal">
          <image-slot id="home-problem-photo" shape="rect" fit="cover"
          placeholder="Drop a photo — an overwhelmed business owner"
          src="assets/laura-speaking-mic.png"></image-slot>
        </div>
      </section>);

  }

  /* ---- Meet Laura ---- */
  function MeetLaura() {
    return (
      <section className="jk-meet jk-field--linen section" data-screen-label="Meet Laura">
        <div className="container">
          <div className="jk-meet__grid">
            <div className="reveal jk-meet__media">
              <span className="offset-photo__block" aria-hidden="true"></span>
              <img src="assets/laura-all-in-with-ai.png" alt="Laura Capes Terry wearing an All in with AI shirt" />
            </div>
            <div className="reveal">
              <h2 className="jk-h jk-h--md">Meet <span className="jk-script jk-script--lg">Laura</span> Capes Terry, MBA</h2>
              <p className="jk-meet__role">Fractional CMO + Media Consultant</p>
              <p className="jk-p">
                After 30 years in media, branding, and marketing leadership, Laura has seen too many talented
                entrepreneurs burn out trying to keep up with marketing trends and constant change.
              </p>
              <p className="jk-p">
                She believes there’s a better way — one that blends wisdom, faith, and modern tools, guided by
                experienced marketing leadership.
              </p>
              <p className="jk-p">
                That’s why Laura guides faith-filled entrepreneurs in harnessing AI with wisdom, clarity, and
                purpose. Her goal is to help business owners simplify their marketing, strengthen their message, and scale
                their business with confidence.
              </p>
              <p className="jk-p jk-p--em">
                AI doesn’t replace heart — it amplifies it. And no one has to figure it out alone.
              </p>
              <p className="jk-p">
                Whether a business needs clarity, consistency, or a complete refresh, Laura meets owners at the decision
                table and helps them move forward with confidence — one strategic step at a time.
              </p>
              <div style={{ marginTop: 26 }}>
                <Button href={CALENDLY} target="_blank" rel="noopener" size="large">Schedule a Discovery Call</Button>
              </div>
            </div>
          </div>
        </div>
      </section>);

  }

  /* ---- Recognition strip ---- */
  const AWARDS = [
  ['georgetowns-best-2025.png', 'Georgetown’s Best 2025 — Gold'],
  ['georgetowns-best-2024.png', 'Georgetown’s Best 2024 — Gold'],
  ['georgetowns-best-2023.png', 'Georgetown’s Best 2023 — Gold'],
  ['texas-downtown-award-winner.png', 'Texas Downtown Award Winner'],
  ['storybrand-certified-guide.png', 'StoryBrand Certified Guide'],
  ['fg-society-certified-marketer.png', 'FG Society Certified Marketer']];

  function Recognition() {
    return (
      <section className="home-recog section--sm">
        <div className="container">
          <div className="home-recog__row reveal">
            {AWARDS.map(([f, alt]) => <img key={f} src={`assets/awards/${f}`} alt={alt} title={alt} />)}
          </div>
        </div>
      </section>);

  }

  function HeartSun({ icon }) {
    return (
      <span className="heart-sun" style={{ display: 'inline-flex', width: 64, height: 64, borderRadius: '50%', background: 'var(--surface-tint)', alignItems: 'center', justifyContent: 'center' }}>
        <i className={`fa-solid ${icon}`} style={{ color: 'var(--color-primary)', fontSize: 28 }} aria-hidden="true"></i>
      </span>);

  }

  /* ---- How We Can Work Together ---- */
  const WAYS = [
  {
    icon: 'fa-chart-line', title: 'AI Strategy Sessions',
    body: 'Private 90-minute consultation to evaluate a business\u2019s marketing strategy and identify what\u2019s working, what\u2019s not, and where AI can support the strategy, save time, and amplify the message.',
    ideal: 'Ideal for solopreneurs and business owners ready to simplify their marketing and move forward with direction and peace of mind.'
  },
  {
    icon: 'fa-handshake', title: 'Fractional Strategy & Mentorship',
    body: 'Ongoing strategic partnership for growing businesses ready to scale with clarity and consistency. Includes executive-level guidance, AI integration, and a proven system for sustainable growth — without the full-time executive cost.',
    ideal: 'Ideal for growing teams who want consistent guidance, accountability, and long-term growth.'
  },
  {
    icon: 'fa-microphone-lines', title: 'Leadership Training & Speaking',
    body: 'Leadership training for entrepreneurs and teams navigating growth, AI, and constant change — with clarity and confidence. Laura equips leaders with the clarity, discernment, and confidence to lead more responsibly, without losing their voice, values, or human connection.',
    ideal: 'Ideal for business owners and leadership teams who want to bring authentic human connection and trust back to their marketing in the age of AI.'
  }];

  function HowWeWork() {
    return (
      <section className="jk-work jk-field--linen section" data-screen-label="How we work together">
        <div className="container">
          <div className="jk-head reveal">
            <HeartRule />
            <h2 className="jk-h jk-h--md">How We Can <span className="jk-script" style={{ color: "var(--lct-navy)", fontWeight: "700", fontFamily: 'var(--font-heading)' }}>Work</span> Together</h2>
            <p className="jk-head__lead">
              Every partnership begins with clarity and leadership. Laura helps faith-filled entrepreneurs use
              <strong> modern marketing and AI with strategy, purpose, and heart</strong> — so they can stop
              reacting to trends and start leading with focus and confidence.
            </p>
          </div>
          <div className="work-grid">
            {WAYS.map((w) =>
            <div key={w.title} className="work-card reveal">
                <span className="work-card__icon"><HeartSun icon={w.icon} /></span>
                <h3 className="h-display" style={{ margin: '0 0 12px', fontSize: "23px" }}>{w.title}</h3>
                <p className="work-card__body">{w.body}</p>
                <p className="work-card__ideal">{w.ideal}</p>
              </div>
            )}
          </div>
        </div>
      </section>);

  }

  /* ---- How to Get Started ---- */
  const STEPS = [
  ['Start a Conversation', 'Laura begins by understanding where a business owner is, what they’re working toward, and what’s currently getting in the way.', 'This is a focused, intentional conversation — not a sales pitch.'],
  ['Identify What Matters Most', 'Together, Laura and the client surface quick wins, areas of unnecessary complexity, and where AI or modern tools could help — or where they’re adding noise.', 'They leave with clearer priorities and a recommended next step.'],
  ['Decide the Right Path Forward', 'If it makes sense to go deeper, Laura will outline what that could look like.', 'If not, they’ll still walk away with clarity, direction, and confidence about what to do next.']];

  const STEP_TABS = ['var(--lct-teal-500)', 'var(--lct-sky-500)', 'var(--lct-navy-500)'];
  function HowToStart() {
    return (
      <section className="jk-steps section" data-screen-label="How to get started">
        <div className="container">
          <div className="jk-head reveal">
            <HeartRule />
            <h2 className="jk-h jk-h--md">How to Get <span className="jk-script" style={{ fontFamily: 'var(--font-heading)', color: "var(--lct-navy)", fontWeight: "700" }}>Started</span></h2>
            <p className="jk-head__lead">
              Here’s how Laura helps business owners simplify their strategy, save time, and grow with confidence.
            </p>
          </div>
          <div className="folder-stack">
            {STEPS.map(([t, a, b], i) =>
            <article key={t} className="folder-card" style={{ '--i': i }}>
                <div className="folder-card__tab" style={{ background: STEP_TABS[i] }}>
                  <span className="folder-card__tablabel">How to Get Started</span>
                </div>
                <div className="folder-card__body">
                  <span className="folder-card__num" style={{ color: STEP_TABS[i] }}>{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="folder-card__title">{t}</h3>
                  <p className="folder-card__p">{a}</p>
                  <p className="folder-card__p folder-card__p--muted">{b}</p>
                </div>
              </article>
            )}
          </div>
          <div className="reveal" style={{ textAlign: 'center', marginTop: 48 }}>
            <Button href={CALENDLY} target="_blank" rel="noopener" size="large">Work With Laura</Button>
          </div>
        </div>
      </section>);

  }

  /* ---- What Clients Say ---- */
  const STORIES = [
  ['Having been a client, a vendor partner, and a friend throughout your journey I can say that you are one of the best marketing executives I have ever worked with! Your path should inspire women who wish to be successful in a male-dominated industry and for men who want to understand what working with a pro who commands respect and is amazing at their craft can do for the bottom line!', 'Guy Williams', ''],
  ['Working with Laura has been a game-changer. Already having an established, successful small business, we initially thought we could manage the transition to an online presence and development of a marketing strategy ourselves. However, we’ve realized just how challenging and complex that process is — and how much we didn’t know. Since partnering with Laura, she’s been an invaluable guide, helping us identify and implement the right strategies for our needs. We only regret not reaching out to her sooner.', 'Wendy Del Re', ''],
  ['Since the very moment I met Laura, I knew I was in good hands. Not only is she incredibly knowledgeable on all things marketing, media, story-branding, and beyond, more importantly—she genuinely cares for business owners, and people. I have witnessed her interact with countless individuals, where she fully engages and empathizes with them. Laura isn’t here to sell you something you don’t need. She is here to serve you, and she does so very generously. If you need assistance with any marketing at all, Laura is my top recommendation!', 'Terry Wilkie', '']];

  function ClientsSay() {
    return (
      <section className="jk-quotes jk-field--sky-soft section" data-screen-label="What clients say">
        <span className="jk-quotes__leaf jk-quotes__leaf--tl" aria-hidden="true"></span>
        <span className="jk-quotes__leaf jk-quotes__leaf--br" aria-hidden="true"></span>
        <div className="container">
          <div className="jk-head reveal">
            <HeartRule />
            <h2 className="jk-h jk-h--md">What Clients <span className="jk-script" style={{ fontFamily: 'var(--font-heading)', color: "var(--lct-navy)", fontWeight: "700" }}>Say</span></h2>
            <p className="jk-head__lead">Here’s what business owners and leaders say about working with Laura.</p>
            <a className="link-strong" href="reviews.html">Read testimonials.</a>
          </div>
          <div className="quotes-grid">
            {STORIES.map(([q, who, org]) =>
            <figure key={who} className="quote-card reveal">
                <i className="fa-solid fa-quote-left quote-card__mark" aria-hidden="true"></i>
                <blockquote>{q}</blockquote>
                <figcaption><span>{who}</span>{org}</figcaption>
              </figure>
            )}
          </div>
          <div className="reveal" style={{ textAlign: 'center', marginTop: 48 }}>
            <Button href={CALENDLY} target="_blank" rel="noopener" size="large">Start a Conversation</Button>
          </div>
        </div>
      </section>);

  }

  /* ---- Photo mosaic ---- */
  function Mosaic() {
    return (
      <section data-screen-label="Moments">
        <div className="photo-mosaic">
          <div className="pm-pool"><img src="assets/moments/pool-portrait.png" alt="Laura Capes Terry" /></div>
          <div className="pm-gala"><img src="assets/moments/mosaic-gala.png" alt="Laura with friends at a gala" /></div>
          <div className="pm-award"><img src="assets/moments/award-couple.png" alt="Laura and team with awards" /></div>
          <div className="pm-belocal"><img src="assets/moments/belocal-group.png" alt="The BeLocal team" /></div>
          <div className="pm-cap home-mosaic__cap">
            <p className="ed-serif">Be seen.<br />Be trusted.<br />Be chosen.</p>
            <p>Georgetown, Texas</p>
          </div>
          <div className="pm-library"><img src="assets/moments/mosaic-library-couple.png" alt="Laura recording at the library" /></div>
          <div className="pm-podcast"><img src="assets/moments/podcast.png" alt="Laura recording the podcast" /></div>
          <div className="pm-beach"><img src="assets/moments/pwow-podium.jpeg" alt="Laura speaking at Professional Women of Williamson County" /></div>
          <div className="pm-resort"><img src="assets/moments/laura-horse.jpeg" alt="Laura with the horse she sponsors" /></div>
        </div>
      </section>);

  }

  /* ---- Website guide band ---- */
  const GUIDE_GETS = ['Who they help', 'What they offer', 'And what to do next'];
  function WebsiteGuide() {
    const toast = window.useToast();
    return (
      <section className="guide-band" data-screen-label="Website guide">
        <div className="container">
          <div className="guide-grid">
            <div className="guide-form-card reveal">
              <p className="guide-form-card__tag">Free Guide</p>
              <h3 className="h-display" style={{ fontSize: 'var(--fs-h3)', margin: '0 0 12px' }}>
                Does a business website clearly explain what the company does — and what to do next?
              </h3>
              <p className="guide-form-card__desc">
                This clarity-first guide helps business owners identify what’s working, what’s confusing, and how to make
                simple homepage improvements that actually help visitors take action.
              </p>
              <form onSubmit={(e) => {e.preventDefault();toast('On its way! Check your inbox for the Website Clarity Guide.');}}
              style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <Input placeholder="Name" aria-label="Name" required />
                <Input placeholder="Email" type="email" aria-label="Email" required />
                <Input placeholder="Company Name" aria-label="Company name" />
                <Input placeholder="Website" aria-label="Website" />
                <Button type="submit" fullWidth>Get the Website Clarity Guide</Button>
              </form>
              <p className="guide-form-card__fine">We won’t send spam. Unsubscribe at any time.</p>
            </div>
            <div className="guide-copy reveal">
              <h2 className="jk-h jk-h--md jk-on-dark" style={{ margin: '0 0 10px' }}>Building Better Websites</h2>
              <p className="guide-copy__sub" style={{ color: "rgb(255, 255, 255)" }}>Six clarity-first website fixes — plus AI prompts to help business owners implement them faster.</p>
              <p className="guide-copy__p">
                If a website feels “almost right” but not quite effective, it’s often a clarity issue — not a design problem.
              </p>
              <p className="guide-copy__p">
                This free guide walks business owners through six simple, high-impact fixes focused on the homepage above the
                fold so visitors can quickly understand:
              </p>
              <ul className="guide-copy__list">
                {GUIDE_GETS.map((g) => <li key={g}><i className="fa-regular fa-circle-check" style={{ color: "rgb(255, 255, 255)" }}></i>{g}</li>)}
              </ul>
              <p className="guide-copy__p">
                It also includes optional AI prompts to use as a thinking partner for evaluating and
                improving a site faster — without losing the business’s voice or overcomplicating the process.
              </p>
            </div>
          </div>
        </div>
      </section>);

  }

  /* ---- Start a conversation ---- */
  function StartConversation() {
    const toast = window.useToast();
    return (
      <section className="jk-contact jk-field--cream section" id="contact" data-screen-label="Start a conversation">
        <div className="container">
          <div className="card reveal" style={{ maxWidth: 640, margin: '0 auto', boxShadow: 'var(--shadow-md)', padding: 40 }}>
            <Sunburst />
            <h2 className="jk-h jk-h--md" style={{ textAlign: 'center', margin: '0 0 12px' }}>Let’s Start a <span className="jk-script" style={{ fontFamily: 'var(--font-heading)', fontWeight: "700", color: "var(--lct-navy)" }}>Conversation</span></h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'var(--text-body)', textAlign: 'center', margin: '0 auto 26px', maxWidth: 480 }}>
              This is a short, intentional conversation to understand a business’s goals, identify low-hanging
              opportunities, and recommend a smart next step.
            </p>
            <form onSubmit={(e) => {e.preventDefault();toast('Thanks! Laura will reach out shortly.');}} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Input placeholder="Name" aria-label="Name" required />
              <Input placeholder="Email" type="email" aria-label="Email" required />
              <Input placeholder="Company Name" aria-label="Company name" />
              <Input placeholder="Phone Number" type="tel" aria-label="Phone number" />
              <Input placeholder="What’s feeling most unclear in the marketing right now?" aria-label="Message" />
              <div style={{ textAlign: 'center', marginTop: 6 }}><Button type="submit" size="large">Start a Conversation</Button></div>
            </form>
          </div>
        </div>
      </section>);

  }

  function HomePage() {
    return (
      <div className="home-jk">
        <Hero />
        <PhraseBand />
        <Problem />
        <MeetLaura />
        <Recognition />
        <Mosaic />
        <HowWeWork />
        <HowToStart />
        <ClientsSay />
        <WebsiteGuide />
        <StartConversation />
      </div>);

  }

  window.__pages = window.__pages || {};
  window.__pages.index = HomePage;
})();
