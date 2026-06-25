/* Laura Capes Terry — Marketing Made Smarter Bootcamp (sales/landing page)
   Recreated from lauracapesterry.com/marketing-made-smarter-bootcamp. */
(function () {
  const { Button, Pill } = window.LauraCapesTerryDesignSystem_1d8d61;
  const ENROLL = 'https://www.lauracapesterry.com/marketing-made-smarter-bootcamp';

  const para = { fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.72, color: 'var(--text-body)', margin: '0 0 16px' };

  function EnrollBtn({ size, variant, style }) {
    return <Button href={ENROLL} target="_blank" rel="noopener" size={size} variant={variant} style={style}>Enroll Now</Button>;
  }

  function Check({ children }) {
    return (
      <li style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 14 }}>
        <i className="fa-solid fa-check" style={{ color: 'var(--color-primary)', marginTop: 4, fontSize: 15, flex: 'none' }}></i>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.6, color: 'var(--text-body)' }}>{children}</span>
      </li>);
  }

  const OUTCOMES = [
    ['Reimagined the definition of marketing so you can find and keep more customers',
     'Most marketers define marketing as the process of promoting a product or service. The magic comes when you reimagine marketing and align the organization behind the process of finding and keeping customers.'],
    ['Transformed your marketing plan so you can market your business with confidence',
     'Many local business owners rely on gut instinct to make marketing decisions and risk throwing hard-earned profits in the trash can. Learn how to put first-things-first in your marketing so you can pull more profit from your plan.'],
    ['Learned a proven framework for marketing a local business so you can make smarter decisions',
     'I\u2019ll introduce you to The Building Blocks for Marketing Success\u2122 — a proven framework I\u2019ve used to build dozens of brands and help hundreds of local business owners market their brand with confidence.'],
    ['Leveraged the power of the StoryBrand framework for your website homepage',
     'Your website is your #1 salesperson. It works 24/7 and never complains or asks for overtime. Learn how to apply the magic of StoryBrand to your home page design to attract and convert more customers.'],
    ['Discovered the power of your front lines and existing clients to grow without spending money',
     'Everyone knows it\u2019s cheaper and easier to keep the customers you have than to attract, engage, and convert new ones. Learn how to leverage this insight to gain traction in your organization.'],
    ['Mitigated the risk inherent in all advertising so you can make smarter media buys',
     'Whether the economy is crashing or booming, it\u2019s important to know how to mitigate risk anytime you\u2019re spending money on advertising. Learn the framework I use to find the no-brainers and low-hanging fruit for quick wins.']];

  const MODULES = [
    ['Module 1', 'Marketing Plans Made Smarter',
     'In this module, you\u2019ll lay the foundation for the transformation of your marketing plan so you can learn to market your business with confidence.',
     ['We\u2019ll lay a foundation for success so you can optimize your success.',
      'We\u2019ll get to know each other so we can walk this journey together.',
      'We\u2019ll discover where you are and where you need to go.']],
    ['Module 2', 'The Building Blocks for Marketing Success\u2122',
     'In this module, you\u2019ll learn the marketing framework that I used to take a local mom-and-pop from 1 retail store to 18 in 6 years.',
     ['You\u2019ll learn the importance of sequence so you can gain traction.',
      'You\u2019ll learn how to put first-things-first so you can make smarter decisions.',
      'You\u2019ll learn how to leverage your #1 salesperson to convert more clients.']],
    ['Module 3', 'Retain and Gain Ideal Clients',
     'In this module, you\u2019ll learn how to grow your business organically without spending a dime by doing the right things in the right sequence.',
     ['Learn the importance and power of client retention so you can grow your business.',
      'Learn the importance of building relationships so you can earn referrals.',
      'Learn how to attract and retain ideal clients.']],
    ['Module 4', 'Generating New Business',
     'In this module, you\u2019ll learn how to accelerate that growth incrementally by investing in carefully-chosen advertising opportunities.',
     ['Learn the right time to invest money in incremental growth.',
      'Learn to spot the no-brainers and low-hanging fruit.',
      'Learn how to mitigate risk so you make smart buying decisions.']]];

  const BONUSES = [
    ['fa-bullseye', 'The Grunt Test: StoryBrand Magic', 'Valued at $1,500',
     ['Learn the essential elements of great homepage design',
      'Learn how to pass \u201cthe grunt test\u201d to convert more website visitors',
      'Clarify your homepage messaging so visitors don\u2019t bounce']],
    ['fa-shield-halved', 'Media Buying: Mitigate Risk', 'Valued at $1,500',
     ['Learn the best times to buy (or not to buy) ads for your business',
      'Learn how to mitigate risk in every opportunity before you buy',
      'Learn how to find no-brainers and low-hanging fruit']],
    ['fa-comments', 'Direct Access to Me: Personal Coaching', 'Valued at $3,000',
     ['Email your questions directly to me so you feel supported',
      'I\u2019ll evaluate your homepage and see if it passes the grunt test',
      'I\u2019ll review your ideal client avatars to make sure they\u2019re on target']]];

  const TESTIMONIALS = [
    ['Jeff Kikel', 'T-Werx Coworking',
     'Laura is one of the most passionate and caring marketers that I know. Her years of experience in the \u201cCorporate World\u201d prepared her to take those skills to the small business community. She is innovative and an excellent community builder. If you are looking for a great marketing partner to help you grow your business, Laura should be your first call.'],
    ['Christina Trevino', 'The Zoo in You',
     'I want to thank you for the constructive enlightened energy you bring to this journey. You have spent a lifetime developing your talent, wisdom, and soul — and this project is one of the lucky recipients. I am profoundly grateful for you. It\u2019s been a great experience working with you, and I look forward to everything we will continue to create.'],
    ['Laura Bond Williams', 'Momentum PR',
     'We loved working with Laura. She demonstrates such depth and breadth of marketing experience and moves the pieces of her plan into place with enthusiasm and creativity. She understands how to balance demand generation marketing and brand awareness with communication that builds relationships and elevates reputations.']];

  const RECAP = [
    ['The Marketing Plans Made Smarter Bootcamp', '$5,000'],
    ['The StoryBrand Magic Bonus', '$2,500'],
    ['The Mitigate Risk in Media Bonus', '$1,500'],
    ['Direct Access to Me for Personal Coaching', '$3,000']];

  const FAQS = [
    ['I\u2019ve been trying to get new clients for a while now, and I just can\u2019t get any traction. What do you recommend?',
     'Traction almost always comes from sequence, not effort. Most owners chase new leads before they\u2019ve clarified their message, optimized their #1 salesperson (your website), and maximized the customers they already have. The Bootcamp walks you through the Building Blocks for Marketing Success in the right order — so you stop spinning your wheels and start gaining momentum.'],
    ['Can I just hire you to coach me? Or do I have to take the Bootcamp first?',
     'The Bootcamp is the fastest, most affordable way to get the full framework — and it includes direct access to me for personal coaching along the way. Many owners start here, then continue with one-on-one work once they\u2019ve built a smarter plan. Either way, the Bootcamp gives us a shared language and a strong foundation to build on.'],
    ['This seems like a lot of value for the price… can I really get all of this for $97?',
     'Yes. The full program — four modules, three bonuses, and direct access to me — is valued at over $10,000. I priced the Bootcamp at $97 because I\u2019m a local business owner too, and I believe every owner deserves access to proven marketing strategy without a five-figure consulting bill.'],
    ['How does the program work? When will I get access to the modules?',
     'It\u2019s a self-paced video program with a workbook \u201cdo-it\u201d kit. You get instant, lifetime access to all four modules and every bonus the moment you enroll, so you can move as quickly — or as thoughtfully — as you like, and revisit any lesson whenever you need it.'],
    ['What if I\u2019m not happy with the course? Can I get my money back?',
     'Absolutely. If after the first module you\u2019re not completely satisfied with the scope and goals of the course, email me with your completed pre-course assessment and I\u2019ll refund you. All I ask is that you show me you\u2019ve done the work up to that point.'],
    ['Can you remind me of everything I\u2019m getting when I sign up today?',
     'You get the full Marketing Plans Made Smarter Bootcamp (4 modules), plus the StoryBrand Magic bonus, the Mitigate Risk in Media bonus, and Direct Access to Me for personal coaching — a program valued at over $10,000 — all for a one-time $97.']];

  function FAQItem({ q, a }) {
    const [open, setOpen] = React.useState(false);
    return (
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <button type="button" onClick={() => setOpen((o) => !o)}
          style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, padding: '22px 26px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
          <span className="ed-serif" style={{ fontSize: 19, color: 'var(--lct-navy)', lineHeight: 1.4 }}>{q}</span>
          <i className={`fa-solid ${open ? 'fa-minus' : 'fa-plus'}`} style={{ color: 'var(--color-primary)', flex: 'none' }}></i>
        </button>
        {open &&
          <div style={{ padding: '0 26px 24px' }}>
            <p style={{ ...para, margin: 0 }}>{a}</p>
          </div>}
      </div>);
  }

  function BootcampPage() {
    return (
      <div data-screen-label="Marketing Made Smarter Bootcamp">
        {/* Hero */}
        <section data-screen-label="Bootcamp hero" style={{ position: 'relative', overflow: 'hidden' }}>
          <img src="assets/bootcamp/hero-thank-you.jpg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(20,59,90,0.55), rgba(20,59,90,0.68))' }}></div>
          <window.Container>
            <div className="reveal" style={{ position: 'relative', maxWidth: 760, margin: '0 auto', textAlign: 'center', padding: '110px 0' }}>
              <h1 className="h-display" style={{ fontSize: 'var(--fs-h1)', color: '#fff', marginBottom: 18, textShadow: '0 2px 18px rgba(20,59,90,0.5)' }}>
                Make Smarter Marketing Decisions to Get More From Your Marketing
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lead)', lineHeight: 1.6, color: 'rgba(255,255,255,0.95)', margin: '0 auto 28px', maxWidth: 600 }}>
                In just 4 weeks, you will learn how to market your business with confidence — without a big budget, highly-trained staff, or an expensive marketing consultant.
              </p>
              <EnrollBtn size="large" />
            </div>
          </window.Container>
        </section>

        {/* Value bar */}
        <section style={{ background: 'var(--lct-navy)' }}>
          <window.Container>
            <div className="bc-valuebar">
              {['Optimize Your Marketing Skills', 'Learn a Proven Framework for Success', 'Grow Your Business'].map((t) =>
                <div key={t} className="bc-valuebar__item"><i className="fa-solid fa-heart"></i><span>{t}</span></div>)}
            </div>
          </window.Container>
        </section>

        {/* Stop burning time */}
        <section className="bg-page section" data-screen-label="Stop burning time">
          <window.Container>
            <div className="split">
              <img className="reveal img-card" src="assets/bootcamp/owner-laptop.jpg" alt="Local business owner at a laptop" style={{ width: '100%' }} />
              <div className="reveal">
                <h2 className="ed-serif" style={{ fontSize: '40px', marginBottom: 18 }}>Stop burning time and money on marketing that doesn't work</h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 18px' }}>
                  <Check>Are you frustrated with marketing your local business?</Check>
                  <Check>Are you unsure about how to best reach your ideal clients?</Check>
                  <Check>Are you worried that you're throwing money in the trash can?</Check>
                </ul>
                <p style={{ ...para }}>In these economic times, it's more important than ever to stop relying on gut instinct and start relying on proven strategies developed by experts to grow your business.</p>
                <EnrollBtn />
              </div>
            </div>
          </window.Container>
        </section>

        {/* Work smarter, not harder */}
        <section className="bg-tint section" data-screen-label="Work smarter">
          <window.Container>
            <div className="split">
              <div className="reveal">
                <h2 className="ed-serif" style={{ fontSize: '38px', marginBottom: 18, lineHeight: 1.2 }}>
                  If you're a local business owner looking to grow without a big staff or budget, you already know you need to work smarter — not harder.
                </h2>
                <p style={{ ...para }}>If you're reading this, then you've survived 2020 and are already ahead of the game. You've pivoted. You've innovated. You've gotten scrappy when you had to. The important thing is you've survived and you're ready to thrive.</p>
                <p style={{ ...para }}>The <strong>Marketing Plans Made Smarter Bootcamp</strong> is for fighters — just like you — and will give you the strategies and tools you need to get more from your marketing.</p>
                <p style={{ ...para, margin: 0 }}>I get what's at stake. I'm a local business owner, too. You deserve more from your marketing, and I want to show you how to get it by sharing the framework I've used to build dozens of brands, help hundreds of local business owners, and grow a local mom-and-pop from 1 store to 18 in 6 years. It can help you too.</p>
              </div>
              <img className="reveal img-card" src="assets/bootcamp/opening-door.png" alt="Business owner welcoming a customer" style={{ width: '100%' }} />
            </div>
          </window.Container>
        </section>

        {/* Outcomes */}
        <section className="bg-page section" data-screen-label="By the end">
          <window.Container>
            <div className="reveal card" style={{ maxWidth: 880, margin: '0 auto', padding: '48px 52px' }}>
              <h2 className="h-display" style={{ fontSize: 'var(--fs-h2)', marginBottom: 32 }}>By the end of this program, you will have:</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {OUTCOMES.map(([t, b], i) =>
                  <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <i className="fa-solid fa-check" style={{ color: 'var(--color-primary)', fontSize: 18, marginTop: 5, flex: 'none' }}></i>
                    <div>
                      <h3 className="ed-serif" style={{ fontSize: 21, marginBottom: 6, lineHeight: 1.35 }}>{t}</h3>
                      <p style={{ ...para, margin: 0, fontSize: 15 }}>{b}</p>
                    </div>
                  </div>)}
              </div>
            </div>
          </window.Container>
        </section>

        {/* Featured testimonial */}
        <section className="bg-tint section" data-screen-label="Featured testimonial">
          <window.Container>
            <div className="split" style={{ alignItems: 'center' }}>
              <img className="reveal img-card" src="assets/bootcamp/laura-storybrand.jpg" alt="Laura Capes Terry, StoryBrand Certified Guide" style={{ width: '100%' }} />
              <div className="reveal">
                <h2 className="ed-serif" style={{ fontSize: '34px', marginBottom: 18 }}>“I learned what to place emphasis on…”</h2>
                <p style={{ ...para }}>“This BootCamp laid a fantastic foundation on a number of topics, but I think the most important thing I learned was what to place the most emphasis on. I've been too focused on getting new members and not enough on making sure that current members were getting the maximum value out of their experience.”</p>
                <p style={{ fontFamily: 'var(--font-subhead)', fontWeight: 700, color: 'var(--lct-navy)', margin: 0 }}>Justin Kessel</p>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', margin: 0 }}>Owner of Networking in Action, Austin, Texas</p>
              </div>
            </div>
          </window.Container>
        </section>

        {/* Pricing #1 */}
        <PricingCard />

        {/* Testimonials row */}
        <section className="bg-tint section" data-screen-label="Testimonials">
          <window.Container>
            <div className="grid grid-3">
              {TESTIMONIALS.map(([name, role, quote]) =>
                <div key={name} className="reveal card" style={{ textAlign: 'center' }}>
                  <i className="fa-solid fa-quote-right" style={{ color: 'var(--color-primary)', fontSize: 26, marginBottom: 14 }}></i>
                  <h3 className="ed-serif" style={{ fontSize: 20, marginBottom: 2 }}>{name}</h3>
                  <p style={{ fontFamily: 'var(--font-subhead)', fontSize: 13, fontWeight: 700, letterSpacing: '0.04em', color: 'var(--color-primary)', margin: '0 0 14px' }}>{role}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.65, color: 'var(--text-body)', margin: 0 }}>“{quote}”</p>
                </div>)}
            </div>
          </window.Container>
        </section>

        {/* What's inside */}
        <section className="bg-page section" data-screen-label="Whats inside">
          <window.Container>
            <window.SectionTitle title="What's inside the" script="Bootcamp"
              sub="Four focused modules that take you from gut-instinct guessing to a clear, confident marketing plan." />
            <div className="heart-divider" aria-hidden="true"><i className="fa-solid fa-heart"></i></div>
            <div className="grid grid-2" style={{ marginTop: 44 }}>
              {MODULES.map(([n, t, b, hi]) =>
                <div key={n} className="reveal card" style={{ textAlign: 'left' }}>
                  <span style={{ display: 'inline-block', fontFamily: 'var(--font-subhead)', fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 8 }}>{n}</span>
                  <h3 className="ed-serif" style={{ fontSize: 25, marginBottom: 10 }}>{t}</h3>
                  <p style={{ ...para, fontSize: 15 }}>{b}</p>
                  <p style={{ fontFamily: 'var(--font-subhead)', fontWeight: 700, fontSize: 13.5, color: 'var(--lct-navy)', margin: '0 0 12px' }}>Module Highlights:</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {hi.map((h, i) => <Check key={i}>{h}</Check>)}
                  </ul>
                </div>)}
            </div>
          </window.Container>
        </section>

        {/* Bonuses */}
        <section className="bg-tint section" data-screen-label="Bonuses">
          <window.Container>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 8 }}>
              <h2 className="h-display" style={{ fontSize: 'var(--fs-h2)' }}>Plus, you'll get these bonuses!</h2>
            </div>
            <div className="grid grid-3" style={{ marginTop: 36 }}>
              {BONUSES.map(([ic, t, val, items]) =>
                <div key={t} className="reveal card" style={{ textAlign: 'left' }}>
                  <window.SunIcon icon={ic} size={62} />
                  <h3 className="ed-serif" style={{ fontSize: 22, margin: '14px 0 4px', lineHeight: 1.3 }}>{t}</h3>
                  <p style={{ fontFamily: 'var(--font-subhead)', fontSize: 13, fontWeight: 700, color: 'var(--color-accent)', margin: '0 0 16px' }}>{val}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {items.map((h, i) => <Check key={i}>{h}</Check>)}
                  </ul>
                </div>)}
            </div>
          </window.Container>
        </section>

        {/* Recap */}
        <section className="bg-page section" data-screen-label="Recap">
          <window.Container>
            <div className="reveal card" style={{ maxWidth: 720, margin: '0 auto', padding: '48px 52px', textAlign: 'center' }}>
              <h2 className="h-display" style={{ fontSize: 'var(--fs-h2)', marginBottom: 28 }}>Here's a recap of what you're getting when you enroll today</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', textAlign: 'left' }}>
                {RECAP.map(([t, v]) =>
                  <li key={t} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, padding: '14px 0', borderBottom: '1px solid var(--surface-tint)' }}>
                    <span style={{ display: 'flex', gap: 12 }}><i className="fa-solid fa-check" style={{ color: 'var(--color-primary)', marginTop: 4 }}></i><span style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, color: 'var(--text-body)' }}>{t}</span></span>
                    <span style={{ fontFamily: 'var(--font-subhead)', fontWeight: 700, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>Valued at {v}</span>
                  </li>)}
              </ul>
              <p className="ed-serif" style={{ fontSize: 24, color: 'var(--lct-navy)', margin: '0 0 4px' }}>The entire program is valued at over $10,000.</p>
              <p className="h-display" style={{ fontSize: 40, color: 'var(--color-primary)', margin: '0 0 24px' }}>Enroll now for only $97</p>
              <EnrollBtn size="large" />
            </div>
          </window.Container>
        </section>

        {/* Guarantee */}
        <section className="bg-tint section" data-screen-label="Guarantee">
          <window.Container>
            <div className="split" style={{ alignItems: 'center' }}>
              <div className="reveal" style={{ textAlign: 'center' }}>
                <img src="assets/bootcamp/satisfaction-guarantee.png" alt="Satisfaction guarantee" style={{ width: '100%', maxWidth: 300 }} />
              </div>
              <div className="reveal">
                <h2 className="ed-serif" style={{ fontSize: '36px', marginBottom: 16 }}>Risk-Free Guarantee</h2>
                <p style={{ ...para }}>If after moving through the first module you are not completely satisfied with the scope and goals for the course, then you can email me for your money back. All I ask is that you show me you've done the work up to that point.</p>
                <p style={{ ...para }}>By the end of the first module, you should be clear about the gap between where you are and where you want to go with your marketing — and you should feel ready to walk the path to transformation.</p>
                <p style={{ ...para, margin: 0, fontStyle: 'italic', color: 'var(--text-muted)', fontSize: 14.5 }}>Note: If you've already moved into Module 2 where I introduce The Building Blocks for Marketing Success, you will not be eligible for a refund. But I am confident you'll love this course and that it will transform the way you market your business.</p>
              </div>
            </div>
          </window.Container>
        </section>

        {/* FAQ */}
        <section className="bg-page section" data-screen-label="FAQ">
          <window.Container>
            <window.SectionTitle title="Still thinking" script="about it?" />
            <div className="heart-divider" aria-hidden="true"><i className="fa-solid fa-heart"></i></div>
            <div style={{ maxWidth: 820, margin: '44px auto 0', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {FAQS.map((f, i) => <FAQItem key={i} q={f[0]} a={f[1]} />)}
            </div>
            <div className="reveal" style={{ textAlign: 'center', marginTop: 40 }}><EnrollBtn size="large" /></div>
          </window.Container>
        </section>

        {/* Final CTA */}
        <section className="bg-dark section" data-screen-label="Final CTA">
          <window.Container>
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
              <h2 className="h-display" style={{ fontSize: 'var(--fs-h2)', color: '#fff', marginBottom: 14 }}>Ready to build a smarter marketing plan?</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lead)', lineHeight: 1.6, color: 'rgba(255,255,255,0.92)', margin: '0 0 28px' }}>
                Join the Marketing Plans Made Smarter Bootcamp today and start marketing your business with confidence — for a one-time $97.
              </p>
              <EnrollBtn size="large" variant="accent" style={{ background: '#fff' }} />
            </div>
          </window.Container>
        </section>
      </div>);
  }

  function PricingCard() {
    return (
      <section className="bg-page section" data-screen-label="Pricing">
        <window.Container>
          <div className="reveal card" style={{ maxWidth: 640, margin: '0 auto', padding: '48px 52px', textAlign: 'center' }}>
            <h2 className="ed-serif" style={{ fontSize: 28, color: 'var(--color-primary)', marginBottom: 8, lineHeight: 1.3 }}>Marketing Plans Made Smarter — a Bootcamp for Local Business Owners</h2>
            <p className="h-display" style={{ fontSize: 52, margin: '8px 0 2px' }}>Only $97</p>
            <p style={{ fontFamily: 'var(--font-subhead)', fontWeight: 700, color: 'var(--color-accent)', letterSpacing: '0.06em', margin: '0 0 28px' }}>Valued at $10,000+</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', textAlign: 'left' }}>
              <Check>Avoid throwing thousands of dollars in the trash can by making poor marketing decisions</Check>
              <Check>No need to hire a highly-paid marketing consultant to help you write a smarter marketing plan</Check>
              <Check>Stop worrying about how you're going to move the needle without a big marketing budget</Check>
              <Check>Stop relying on gut instinct or advice from marketers who've never had to make payroll</Check>
              <Check>Stop wondering if your marketing staff is making good decisions for your business</Check>
              <Check>Learn a proven framework for local marketing success so you can market with confidence</Check>
            </ul>
            <EnrollBtn size="large" />
          </div>
        </window.Container>
      </section>);
  }

  window.__pages = window.__pages || {};
  window.__pages.bootcamp = BootcampPage;
})();
