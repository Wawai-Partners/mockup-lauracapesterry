/* Laura Capes Terry — About (redesign, June 2026)
   Editorial layout (oversized-name hero, overlaid quote card, portrait
   bands) carrying the full live About-page copy verbatim. */
(function () {
  const { Button } = window.LauraCapesTerryDesignSystem_1d8d61;
  const Input = window.LauraCapesTerryDesignSystem_1d8d61.Input;

  function Bullet({ children }) {
    return (
      <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
        <i className="fa-regular fa-circle-check" style={{ color: 'var(--color-primary)', marginTop: 5 }}></i>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'var(--text-body)' }}>{children}</span>
      </li>);

  }
  const para = { fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, color: 'var(--text-body)', margin: '0 0 16px' };

  function VideoPoster({ src, poster, title }) {
    const [playing, setPlaying] = React.useState(false);
    return (
      <div className="reveal video-frame" style={{ position: 'relative', width: '100%', aspectRatio: '16 / 10', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', background: '#000' }}>
        {playing ?
        <iframe
          src={src + '?autoplay=1'}
          title={title}
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ width: '100%', height: '100%', border: 0, display: 'block' }}>
          </iframe> :

        <button
          type="button"
          className="video-poster"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', padding: 0, border: 0, cursor: 'pointer', background: '#000' }}>
            <img src={poster} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <span className="video-poster__scrim" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(36,82,96,0.05), rgba(36,82,96,0.28))' }}></span>
            <span className="video-poster__play" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 78, height: 78, borderRadius: '50%', background: 'rgba(255,255,255,0.94)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 28px rgba(36,82,96,0.4)' }}>
              <i className="fa-solid fa-play" style={{ fontSize: 26, marginLeft: 4 }}></i>
            </span>
          </button>
        }
      </div>);

  }

  function AboutPage() {
    const { BookButton } = window;
    const toast = window.useToast();

    const experiences = [
    ['fa-circle-check', 'Make Confident Decisions', 'With Laura’s guidance, clients stop wasting time and money on disconnected tactics that don’t move the needle. Instead, they gain steady leadership that helps every decision, dollar, and tool serve a clear, strategic purpose—so growth is intentional, not accidental.'],
    ['fa-heart', 'Fall Back in Love With Your Business', 'Laura reconnects entrepreneurs to the heart behind their work so marketing feels aligned, energizing, and meaningful again. Her leadership brings clarity and confidence back into the picture—reminding business owners why they started and helping them move forward with renewed conviction.'],
    ['fa-briefcase', 'Executive-Level Leadership Without Agency Bloat', 'Clients value Laura’s ability to deliver executive-level marketing leadership without unnecessary overhead or complexity. She helps business owners use AI and modern tools wisely—building trust-based, sustainable marketing approaches that support long-term growth, not short-term noise.'],
    ['fa-wind', 'Quiet the Noise and Reduce Overwhelm', 'Working with Laura means fewer guesses, fewer pivots, and fewer distractions. She helps entrepreneurs step out of reactive mode, focus on what truly matters, and establish simple, repeatable marketing rhythms that fit real life—not hustle culture.'],
    ['fa-compass', 'Gain Strategic Clarity and Direction', 'Laura provides clear, grounded direction that aligns goals, messaging, and marketing priorities. Clients know what to focus on, what to ignore, and why it matters—turning scattered efforts into steady momentum and confident leadership decisions.'],
    ['fa-handshake-angle', 'Attract the Right Clients with Integrity', 'When messaging becomes clear and consistent, clients naturally attract people who value what they offer. Laura’s approach emphasizes trust, warmth, and integrity—helping businesses communicate clearly and build long-term relationships that support sustainable success.']];


    const judgment = [
    '30+ years in marketing, media, and brand leadership',
    'Founder of Grayson Media & Marketing',
    'Publisher of BeLocal Georgetown (recipient of the Texas Downtown Association President’s Award)',
    'MBA with advanced marketing and digital strategy certifications',
    'Community leader, educator, and co-host of The Unbridled Creative podcast and the Be Locally Loved podcast'];


    const mentors = [
    ['assets/mentors/donald-miller.png', 'Donald Miller', 'Laura studied directly with Donald Miller, learning how to simplify complex ideas and clarify messaging so it resonates and builds trust. While she no longer leads with any one framework, the principles of clarity, story, and customer-centered communication continue to inform her work.'],
    ['assets/mentors/brendon-burchard.png', 'Brendon Burchard', 'Laura trained with Brendon Burchard for more than a decade, learning how discipline, purpose, and consistency support long-term success. These principles influence her calm, steady leadership style and her ability to help clients move forward with confidence and intention.'],
    ['assets/mentors/ryan-deiss.png', 'Ryan Deiss', 'Laura completed advanced training with Ryan Deiss and DigitalMarketer, gaining a strong foundation in modern marketing systems, psychology, and measurement. This background allows her to evaluate tools and tactics wisely—without chasing trends or overcomplicating strategy.']];


    const careerAwards = [
    ['career-benny-napl.png', 'Benny Award for Innovative Marketing from the National Association of Printers and Lithographers'],
    ['career-life-fitness.png', 'Two-Time Award Winner for Innovative Marketing from Life Fitness'],
    ['career-leisure-fitness.png', 'Lifetime Achievement Award Winner in Innovative Marketing from Leisure Fitness'],
    ['career-fast-company.png', 'Appeared on Cover of FAST Company Magazine for Innovative Marketing'],
    ['career-rookie.png', '#2 Rookie of the Year Award from N2 Publishing'],
    ['career-qualified-expansion.png', '#2 in Qualified Expansion Sales Award from N2 Publishing']];


    return (
      <div>
        {/* Parallax: pinned hero + statement band that scrolls over it */}
        <div className="about-parallax">
        {/* Oversized-name hero */}
        <section className="about-hero" data-screen-label="About hero">
          <div className="about-hero__inner" style={{ height: "860px", fontSize: "11px" }}>
            <div className="about-hero__vecs" aria-hidden="true">
              {[1, 2, 3, 4, 5, 6, 7].map((n) =>
              <i key={`h${n}`} className={`fa-solid fa-heart about-hero__heart about-hero__heart--${n}`}></i>
              )}
            </div>
            <div className="about-hero__name" aria-hidden="true">Laura Capes<br />Terry</div>
            <img className="about-hero__photo reveal" src="assets/laura-cutout.png" alt="Laura Capes Terry, MBA" />
            <p className="about-hero__tag about-hero__tag--l">Be seen.<br />Be <span className="about-hero__tag-em">trusted</span>.</p>
            <p className="about-hero__tag about-hero__tag--r">Be <span className="about-hero__tag-em">chosen</span> —<br />without losing your heart.</p>
          </div>
        </section>
        <section className="about-strip">
          <div className="about-seal" aria-hidden="true">
            <svg className="about-seal__ring" viewBox="0 0 120 120">
              <defs><path id="about-seal-curve" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" /></defs>
              <text><textPath href="#about-seal-curve" startOffset="0">NICE TO MEET YOU · I’M LAURA · NICE TO MEET YOU · I’M LAURA · </textPath></text>
            </svg>
            <span className="about-seal__mono">L</span>
          </div>
          <div className="about-strip__inner reveal">
            <h2 className="about-strip__statement">About <span className="jk-script jk-script--lg">Laura</span> Capes Terry, MBA</h2>
            <p className="about-strip__role">Fractional CMO + AI Consultant</p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.65, color: 'rgba(255,255,255,0.85)', margin: '0 0 12px' }}>
              Laura Capes Terry provides strategic marketing leadership for entrepreneurs and local business owners who want clarity, confidence, and a smarter way to grow.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.65, color: 'rgba(255,255,255,0.85)', margin: '0 0 12px' }}>
              If your marketing feels scattered, overwhelming, or reactive, Laura helps you slow things down, focus on what actually matters, and make confident growth decisions—without chasing every new trend or tool.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.65, color: 'rgba(255,255,255,0.85)', fontStyle: 'italic', margin: '0 0 24px' }}>
              Her work isn’t about doing more marketing. It’s about making the right decisions in a noisy, AI-driven world.
            </p>
            <BookButton>Schedule a Discovery Call</BookButton>
          </div>
        </section>
        </div>

        {/* Strategic guidance */}
        <section id="story" className="bg-card section">
          <div className="container split">
            <VideoPoster
              src="https://drive.google.com/file/d/1Pfl5tSyuBT5ZXJ3YaF5OjBC5e0LB6fOb/preview"
              poster="assets/strategic-guidance-thumb.png"
              title="Strategic guidance with Laura Capes Terry" />
            <div className="reveal">
              <h2 className="ed-serif" style={{ marginBottom: 16, fontSize: "30px" }}>Strategic guidance, not random tactics</h2>
              <p style={{ ...para, marginBottom: 16 }}>Laura partners with you to:</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 18px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <Bullet>Clarify your message so people understand you quickly</Bullet>
                <Bullet>Prioritize marketing efforts that actually move the needle</Bullet>
                <Bullet>Use AI intentionally, not impulsively</Bullet>
                <Bullet>Identify low-hanging opportunities already within reach</Bullet>
                <Bullet>Build momentum without burning out</Bullet>
              </ul>
              <p style={{ ...para, margin: '0 0 24px' }}>This is leadership-level guidance designed to support your goals, your resources, and your stage of business.</p>
              <BookButton>Work With Laura</BookButton>
            </div>
          </div>
        </section>

        {/* Steady guide + Built from experience */}
        <section className="bg-tint section">
          <window.Container>
            <div className="about-two">
              <div className="reveal">
                <h2 className="ed-serif" style={{ marginBottom: 14, fontSize: "30px" }}>A steady guide when things feel unclear</h2>
                <p style={{ ...para }}>Clients work with Laura because she brings calm to complexity.</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 18px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <Bullet>She listens first.</Bullet>
                  <Bullet>She tells the truth.</Bullet>
                  <Bullet>She helps you see what’s actually working—and what’s quietly getting in the way.</Bullet>
                </ul>
                <p style={{ ...para, margin: 0 }}>Whether you’re navigating growth, change, or uncertainty, Laura helps you move forward with clarity and confidence, one smart step at a time.</p>
              </div>
              <div className="reveal">
                <h2 className="ed-serif" style={{ marginBottom: 14, fontSize: "30px" }}>Built from real-world experience</h2>
                <p style={{ ...para }}>Laura doesn’t teach theory. She leads from experience.</p>
                <p style={{ ...para }}>Every strategy she recommends has been tested and refined inside her own businesses—from publishing <strong>BeLocal Georgetown</strong>, to leading her fractional CMO practice at <strong>Grayson Media &amp; Marketing</strong>, to hosting <strong>The Unbridled Creative</strong> podcast.</p>
                <p style={{ ...para, margin: 0 }}>She understands what it’s like to make decisions with limited time, real budgets, and real people depending on the outcome—because she’s doing the work herself.</p>
              </div>
            </div>
          </window.Container>
        </section>

        {/* Full-bleed photo + overlaid quote card */}
        <section className="about-feature" data-screen-label="Philosophy">
          <img className="about-feature__img" src="assets/laura-all-in-with-ai.png" alt="Laura Capes Terry" />
          <div className="about-feature__card reveal">
            <i className="fa-solid fa-quote-left" style={{ color: 'var(--color-accent)', fontSize: 28, marginBottom: 14 }}></i>
            <p className="ed-serif" style={{ fontSize: 'var(--fs-h3)', lineHeight: 1.3, margin: '0 0 12px' }}>
              AI doesn’t replace heart — it <span className="ed-em" style={{ color: 'var(--color-primary)' }}>amplifies</span> it.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.65, color: 'var(--text-body)', margin: 0 }}>
              That’s why Laura guides faith-filled entrepreneurs in harnessing AI with wisdom, clarity, and purpose — blending modern tools with timeless wisdom.
            </p>
          </div>
        </section>

        {/* What clients experience */}
        <section className="bg-page section">
          <window.Container>
            <window.SectionTitle title="What Clients Experience When They Work with" script="Laura"
            sub="The shift isn’t just better marketing — it’s clarity, confidence, and a renewed love for the business you built." />
            <div className="heart-divider" aria-hidden="true"><i className="fa-solid fa-heart"></i></div>
            <div className="grid grid-3" style={{ marginTop: 48 }}>
              {experiences.map(([ic, t, b]) =>
              <div key={t} className="reveal card" style={{ textAlign: 'left' }}>
                  <window.SunIcon icon={ic} size={68} />
                  <h3 className="ed-serif" style={{ marginBottom: 10, marginTop: 14, fontSize: "23px" }}>{t}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-body)', margin: 0 }}>{b}</p>
                </div>
              )}
            </div>
            <div style={{ textAlign: 'center', marginTop: 44 }}><Button href="contact.html">Start a Conversation</Button></div>
          </window.Container>
        </section>

        {/* Why businesses trust Laura */}
        <section id="trust" className="bg-card section">
          <window.Container>
            <div className="about-trust__grid">
              <div className="about-trust__photo reveal">
                <img src="assets/laura-belocal.png" alt="Laura Capes Terry holding BeLocal Georgetown" />
              </div>
              <div className="reveal">
                <h2 className="ed-serif" style={{ marginBottom: 16, fontSize: "43px" }}>Why Businesses Trust Laura</h2>
                <p style={{ ...para }}>Businesses trust Laura because she brings calm, seasoned leadership to moments that feel noisy, overwhelming, or high-stakes—when clarity matters most.</p>
                <p style={{ ...para }}>With over 30 years of real-world experience in marketing, branding, and business growth, Laura Capes Terry brings executive-level perspective—not just ideas—to every engagement. She helps business owners see clearly, make confident decisions, and move forward with intention instead of reacting to trends or pressure.</p>
                <p style={{ ...para }}>Laura’s background spans corporate leadership, local business ownership, community publishing, and award-winning marketing innovation. That combination gives her a rare ability to bridge strategy and creativity while staying grounded in what actually works in the real world.</p>
                <p style={{ ...para, margin: 0 }}>Clients value Laura’s steady judgment, thoughtful restraint, and integrity-driven approach. She doesn’t oversell tactics, chase shiny tools, or push one-size-fits-all solutions. Instead, she guides businesses to simplify their message, strengthen their brand, and grow in ways that are sustainable, aligned, and human.</p>
              </div>
            </div>
            <div className="reveal" style={{ marginTop: 44, maxWidth: 820 }}>
              <ul className="about-explist">
                {judgment.map((j, i) =>
                <li key={i}><i className="fa-solid fa-heart"></i><span>{j}</span></li>
                )}
              </ul>
            </div>
          </window.Container>
        </section>

        {/* Recognition badges */}
        <section id="awards" className="bg-page section--sm">
          <window.Container>
            <div className="home-recog__row reveal">
              {['georgetowns-best-2025.png', 'texas-downtown-award-winner.png', 'fg-society-certified-marketer.png', 'georgetowns-best-2023.png', 'georgetowns-best-2024.png', 'storybrand-certified-guide.png'].map((f) =>
              <img key={f} src={`assets/awards/${f}`} alt="" style={{ height: 140, width: 'auto', objectFit: 'contain' }} />
              )}
            </div>
          </window.Container>
        </section>

        {/* Grounded in proven frameworks */}
        <section className="bg-card section">
          <window.Container>
            <window.SectionTitle title="Grounded in Proven" script="Frameworks" />
            <div className="heart-divider" aria-hidden="true"><i className="fa-solid fa-heart"></i></div>
            <div className="about-story reveal" style={{ marginTop: 20, textAlign: 'center' }}>
              <p style={{ ...para }}>Over three decades, Laura Capes Terry has invested deeply in learning from some of the most respected voices in business, marketing, and leadership.</p>
              <p style={{ ...para }}>But more importantly, she has spent years applying what works, discarding what doesn’t, and refining her judgment through real-world experience.</p>
              <p style={{ ...para, margin: 0 }}>Her approach reflects the best of what she’s learned—filtered through integrity, practicality, and a deep understanding of what business owners actually need.</p>
            </div>
            <div className="grid grid-3" style={{ marginTop: 48 }}>
              {mentors.map(([img, name, body]) =>
              <div key={name} className="reveal mentor-card">
                  <img className="mentor-card__img" src={img} alt={`Laura Capes Terry with ${name}`} />
                  <div className="mentor-card__body">
                    <p className="mentor-card__name">{name}</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.65, color: 'var(--text-body)', margin: 0 }}>{body}</p>
                  </div>
                </div>
              )}
            </div>
            <div className="reveal" style={{ textAlign: 'center', marginTop: 48, maxWidth: 820, marginLeft: 'auto', marginRight: 'auto' }}>
              <h3 className="ed-serif" style={{ marginBottom: 12, fontSize: "23px" }}>Additional Training &amp; Certifications</h3>
              <p style={{ ...para, margin: 0 }}>Laura is committed to ongoing learning and thoughtful application. Her continued education includes advanced programs with Tony Robbins and Dean Graziosi, strategic marketing certifications through The FG Society, The AI Advantage, The AI Business Summit, and foundational business training such as Keith Cunningham’s 4-Day MBA.</p>
            </div>
          </window.Container>
        </section>

        {/* Career built on results */}
        <section className="bg-tint section">
          <window.Container>
            <window.SectionTitle title="A Career Built on Results, Not" script="Hype"
            sub="Recognition matters—but only when it reflects real impact, real leadership, and real results." />
            <div className="heart-divider" aria-hidden="true"><i className="fa-solid fa-heart"></i></div>
            <div className="award-grid" style={{ marginTop: 44 }}>
              {careerAwards.map(([f, alt], i) =>
              <img key={i} className="reveal award-img" src={`assets/awards/${f}`} alt={alt} />
              )}
            </div>
            <div style={{ textAlign: 'center', marginTop: 44 }}><BookButton>Work With Laura</BookButton></div>
          </window.Container>
        </section>

        {/* Testimonial */}
        <section className="bg-dark section about-testi-band" data-screen-label="Testimonial">
          <window.Container>
            <window.SectionTitle title="What Clients Say About Working With" script="Laura"
            sub="Laura’s clients consistently describe her as a trusted guide, strategic thinker, and creative partner who brings both heart and clarity to their marketing." />
            <div className="heart-divider" aria-hidden="true"><i className="fa-solid fa-heart"></i></div>
            <div className="about-testi" style={{ marginTop: 48 }}>
              <div className="reveal">
                <p className="ed-serif" style={{ fontSize: 'var(--fs-h2)', lineHeight: 1.25, margin: '0 0 20px', color: '#fff' }}>
                  “You are one of the best marketing executives I’ve ever worked with.”
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15, color: 'var(--lct-sand)', margin: '0 0 26px' }}>Testimonial from Guy Williams, PRECOR</p>
                <Button href="contact.html" variant="accent" style={{ background: '#fff' }}>Start a Conversation <i className="fa-solid fa-heart"></i></Button>
              </div>
              <img className="about-testi__img reveal" src="assets/laura-candid.jpg" alt="Laura Capes Terry" />
            </div>
          </window.Container>
        </section>

        {/* Contact form */}
        <window.StartConversation sub="When you work with me, you will get a proven process for growing your business." />
      </div>);

  }
  window.__pages = window.__pages || {};
  window.__pages.about = AboutPage;
})();