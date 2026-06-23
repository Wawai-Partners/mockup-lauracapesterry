/* Laura Capes Terry — Ask Laura (FAQ hub) */
(function () {
  const { Button, Pill } = window.LauraCapesTerryDesignSystem_1d8d61;
  const CALENDLY = 'https://calendly.com/laura-terry/discovery-call';

  const CATS = [
    {
      id: 'seen', icon: 'fa-eye', label: 'Be Seen', sub: 'Visibility',
      items: [
        ['How do I get people to know who I am?', 'Visibility starts with showing up consistently where your future customers already are — then staying there long enough to be remembered. Laura helps you combine local media, social, and AI-assisted content into a rhythm you can actually sustain, so you go from invisible to familiar.'],
        ['How do I get more customers in Georgetown, Texas?', 'Local growth comes from becoming a trusted, familiar name close to home. Through BeLocal, BNI, and genuine community connections, Laura helps you get in front of the right neighbors at the moments that matter most.'],
        ['What is the best way to market a local business in Georgetown?', 'There’s no single magic channel — it’s the right mix of local media, word-of-mouth, and a clear message working together. Laura helps you build that mix around your goals instead of chasing every shiny tactic.'],
        ['How can I increase awareness of my business without wasting money?', 'Start with clarity, not spend. When your message is sharp and your channels are focused, every dollar works harder — and Laura helps you cut the noise that’s quietly draining your budget.'],
        ['What marketing channels work best for local businesses?', 'The ones where your customers actually are — usually a blend of local print and media, search, social, and referrals. Laura helps you prioritize the few that move the needle, not all of them at once.'],
        ['Is social media enough to grow my business?', 'Rarely on its own. Social builds familiarity, but trust and conversion usually need more — a clear website, real relationships, and consistent follow-through.'],
        ['How do I consistently stay in front of potential customers?', 'Consistency beats intensity. Laura helps you batch your content and build simple systems so you stay visible without it taking over your week.'],
        ['How do I stand out without being salesy?', 'Lead with value and clarity, not pressure. When you genuinely help people understand and decide, standing out feels like service — and that’s exactly what earns trust.'],
      ],
    },
    {
      id: 'trusted', icon: 'fa-shield-heart', label: 'Be Trusted', sub: 'Credibility',
      items: [
        ['How do I build trust?', 'Trust is built through consistency, clarity, and proof. Show up reliably, say what you do plainly, and let real results and reviews speak for you.'],
        ['What makes customers trust a business?', 'Familiarity, social proof, and a message that’s clear and honest. People trust businesses that feel known, recommended, and easy to understand.'],
        ['How do I make my business stand out from competitors?', 'Get clear on the specific transformation you create and who you create it for. Clarity — not cleverness — is what makes you memorable.'],
        ['Why isn’t my website generating leads?', 'Usually because it talks about you instead of your customer, or it doesn’t make the next step obvious. Laura’s StoryBrand approach fixes both.'],
        ['What should every local business website include?', 'A clear headline, an obvious next step, proof you can be trusted, and an easy way to get in touch. Laura’s website checklist walks through each one.'],
        ['How do I clarify my marketing message?', 'Start with your customer’s problem, then show how you solve it and what to do next. As a StoryBrand-certified guide, Laura helps you say it simply and powerfully.'],
        ['How do I become known, liked, and trusted in my community?', 'Show up, give value, and build genuine relationships over time. BeLocal, BNI, and local events make that far easier and faster.'],
      ],
    },
    {
      id: 'chosen', icon: 'fa-award', label: 'Be Chosen', sub: 'Conversion',
      items: [
        ['How do I become the business people recommend?', 'Be remarkable in the small things and easy to refer. When your message is clear and your experience is consistent, recommending you feels safe and natural.'],
        ['How do I get referrals?', 'Earn them by delivering well, then make them easy to give. A strong network like BNI and a clear “who I help” message turn happy clients into advocates.'],
        ['Why are people choosing my competitors?', 'Often it isn’t price — it’s clarity. If a competitor is easier to understand and trust, they win, even when what you offer is better.'],
        ['How do I attract better customers instead of bargain shoppers?', 'Speak to value, not discounts. Clear positioning attracts people who care about results — and gently repels the ones who only shop on price.'],
        ['How do I stop competing on price?', 'Compete on clarity, trust, and outcomes instead. When people understand the value you create, price becomes one factor among many — not the only one.'],
        ['What makes customers choose one business over another?', 'Trust and clarity, more than features. People choose the business they understand and believe will actually deliver.'],
        ['How do I turn visibility into actual customers?', 'Connect every bit of attention to a clear next step. Visibility without a path to “yes” just creates awareness — Laura helps you close the loop.'],
        ['What marketing mistakes are costing me business?', 'The big ones: an unclear message, an inconsistent presence, and no obvious next step. Laura helps you find and fix those leaks quickly.'],
      ],
    },
    {
      id: 'community', icon: 'fa-people-group', label: 'Community Connections', sub: 'Local Influence',
      items: [
        ['How do I become part of the fabric of this community?', 'Show up generously and consistently. Sponsor, serve, and connect — and let people experience your business as a good neighbor, not just a vendor.'],
        ['How do I connect my business to the Georgetown community?', 'Through local media, organizations, and events where your neighbors already gather. BeLocal and BNI GTX are two of the fastest on-ramps.'],
        ['What is the fastest way to build a local reputation?', 'Combine consistent visibility with real relationships and visible proof. Reputation compounds when people keep seeing — and hearing — good things about you.'],
        ['How important are referrals and word-of-mouth marketing?', 'Hugely — they’re the most trusted form of marketing there is. A referral arrives pre-trusted, which is why Laura helps you become genuinely referable.'],
        ['What local partnerships can help grow my business?', 'Partners who serve the same customers without competing — other trusted local businesses, media, and networks. Laura can help you find and nurture the right ones.'],
        ['How do I get more involved in the community?', 'Start with one or two organizations or causes you genuinely care about, and show up consistently. Depth beats spreading yourself thin.'],
        ['How do I meet the right people?', 'Be intentional about the rooms you’re in. Networks like BNI and local events put you in front of the right people on a regular basis.'],
      ],
    },
    {
      id: 'strategy', icon: 'fa-compass', label: 'Strategy & Leadership', sub: 'Executive Thinking',
      items: [
        ['How do I find someone I can trust to help me with my marketing?', 'Look for experience, clarity, and genuine care — someone who explains their thinking, not just their tactics. Laura brings 30+ years of leadership and a calm, honest approach.'],
        ['Who is the best person in Georgetown to help me grow my business?', 'You want someone local, experienced, and invested in the community — exactly the gap Laura fills as a fractional CMO and the publisher of BeLocal Georgetown.'],
        ['How do I get my name out there?', 'Through a clear message and a consistent presence across the channels your customers actually use. Laura helps you do it with intention, not exhaustion.'],
        ['How much should I spend on marketing?', 'Enough to stay consistent, focused on what’s working — often a sensible percentage of revenue, guided by your goals. Laura helps you invest where it actually pays off.'],
        ['Do I need a marketing coach, consultant, agency, or fractional CMO?', 'It depends on whether you need guidance, a specific project, hands-on execution, or ongoing leadership. Laura helps you figure out the right fit — and is often that fractional-CMO fit herself.'],
        ['What is the best next step for growing my business right now?', 'Start with clarity: your message, your customer, and your one most important goal. From there the next step usually becomes obvious — and the Start Here page can help you find it.'],
        ['Should I advertise — and how much should I spend on it?', 'Advertising works when your message is clear and you can sustain consistency. Start small, measure, and scale what works — Laura helps you avoid spending before you’re ready.'],
        ['Should I hire a marketing person — and what should I pay?', 'Hire when you have a clear strategy for someone to execute, not before. A fractional CMO can give you executive leadership now for far less than a full-time hire.'],
        ['Should I build a website — and how much should it cost?', 'Almost certainly yes; it’s your most controllable asset. Spend enough to be clear, credible, and lead-generating — Laura’s website framework helps you scope it wisely.'],
        ['Should I run social media — and what should it cost?', 'Yes, if you can be consistent and strategic about it. Whether you do it in-house or hire help, the key is a plan you can actually sustain.'],
        ['Should I use AI — and how can it save time and make more money?', 'Yes, used wisely. AI can speed up your content and free you to focus on relationships — Laura helps you adopt it without losing your voice.'],
        ['Should I sponsor an event — and how can events attract customers?', 'Events are powerful when they put you in front of the right people with a clear follow-up plan. Laura helps you choose and leverage them well.'],
        ['Should I start a podcast — and how can it build my authority?', 'A podcast can build deep trust and authority over time, if you stay consistent. Laura hosts two shows and can help you decide whether it fits your goals.'],
        ['Should I invest in SEO and AEO — and how do they help?', 'Being findable on search and AI answer engines matters more every year. Laura helps you show up where your ideal customers are already looking.'],
        ['Should I join BNI — and how can it help me grow?', 'If referrals matter to your business, a strong referral network like BNI GTX can be transformative. Laura is an active member and can tell you what to expect.'],
        ['Should I hire an agency — and how can one help me grow?', 'Agencies are great for execution and scale once your strategy is clear. Laura helps you lead them well so you get results, not just deliverables.'],
        ['Should I do BeLocal — and how can it help me grow?', 'If you want to reach new Georgetown residents at the moment they’re choosing local businesses, BeLocal is built for exactly that. Explore it on the BeLocal page.'],
        ['Should I create content — and how do I do it without burning out?', 'Content builds trust at scale, but only if it’s sustainable. Laura helps you batch and systemize it so it energizes you instead of draining you.'],
        ['Should I niche down — and how do I niche profitably?', 'Clarity about who you serve usually makes marketing easier and more profitable. Laura helps you niche in a way that grows your business, not shrinks it.'],
        ['Should I join the Chamber — and how can it help me grow?', 'Local organizations like the Chamber build relationships and visibility close to home. They’re one of several community on-ramps Laura can help you weigh.'],
        ['Should I raise prices?', 'Often, yes — especially once your value is clear and your positioning is strong. Laura helps you build the trust and clarity that make higher prices feel worth it.'],
      ],
    },
  ];

  function FaqItem({ q, a, openKey, setOpenKey, ikey }) {
    const on = openKey === ikey;
    const innerRef = React.useRef(null);
    return (
      <div className="faq-item" data-on={on ? 'true' : 'false'}>
        <button className="faq-q" aria-expanded={on} onClick={() => setOpenKey(on ? null : ikey)}>
          <span>{q}</span>
          <i className="fa-solid fa-chevron-down"></i>
        </button>
        <div className="faq-a" style={{ maxHeight: on ? (innerRef.current ? innerRef.current.scrollHeight + 4 : 600) : 0 }}>
          <div className="faq-a__inner" ref={innerRef}>{a}</div>
        </div>
      </div>
    );
  }

  function AskLauraPage() {
    const [openKey, setOpenKey] = React.useState('seen-0');
    return (
      <div>
        {/* Hero */}
        <section className="bg-dark section--sm" style={{ position: 'relative' }}>
          <window.Container>
            <div className="reveal" style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', paddingTop: 30, paddingBottom: 8 }}>
              <Pill style={{ marginBottom: 18 }}>Ask Laura</Pill>
              <h1 className="h-display" style={{ fontSize: 'var(--fs-h1)', color: '#fff', marginBottom: 16 }}>
                The questions local business owners ask most
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lead)', lineHeight: 1.6, color: 'rgba(255,255,255,0.92)', margin: '0 0 30px' }}>
                Honest, practical answers — organized around being seen, trusted, and chosen. Can’t find yours? Laura would love to talk it through.
              </p>
              <div className="faq-jump" style={{ justifyContent: 'center' }}>
                {CATS.map((c) => (
                  <a key={c.id} href={`#${c.id}`} style={{ background: 'rgba(255,255,255,0.10)', borderColor: 'rgba(255,255,255,0.25)', color: '#fff' }}>{c.label}</a>
                ))}
              </div>
            </div>
          </window.Container>
        </section>

        {CATS.map((c, i) => (
          <section key={c.id} id={c.id} className={i % 2 === 0 ? 'bg-page section' : 'bg-card section'}>
            <window.Container>
              <div className="reveal" style={{ maxWidth: 820, margin: '0 auto' }}>
                <div className="faq-cat__head">
                  <span className="faq-cat__icon"><i className={`fa-solid ${c.icon}`}></i></span>
                  <div>
                    <div className="eyebrow">{c.sub}</div>
                    <h2 className="h-display" style={{ fontSize: 'var(--fs-h3)', marginTop: 2 }}>{c.label}</h2>
                  </div>
                </div>
                <div style={{ marginTop: 8 }}>
                  {c.items.map(([q, a], qi) => (
                    <FaqItem key={qi} q={q} a={a} ikey={`${c.id}-${qi}`} openKey={openKey} setOpenKey={setOpenKey} />
                  ))}
                </div>
              </div>
            </window.Container>
          </section>
        ))}

        {/* CTA */}
        <section className="bg-tint section">
          <window.Container>
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
              <h2 className="h-display" style={{ fontSize: 'var(--fs-h2)', marginBottom: 14 }}>Still have a question?</h2>
              <p className="lead" style={{ margin: '0 auto 26px' }}>You don’t have to figure it out alone. Book a free discovery call and Laura will meet you at the decision table — one strategic step at a time.</p>
              <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button href={CALENDLY} target="_blank" rel="noopener" size="large">Schedule a Discovery Call</Button>
                <Button href="start-here.html" variant="ghost" size="large">Start Here</Button>
              </div>
            </div>
          </window.Container>
        </section>
      </div>
    );
  }
  window.__pages = window.__pages || {};
  window.__pages['ask-laura'] = AskLauraPage;
})();
