/* Laura Capes Terry — Blog (index redesign, June 2026)
   Layout adapted from an editorial creator blog: featured hero,
   "Most Recent" + sidebar, browse-by-topic rows, and search. */
(function () {
  const { Button, Pill, Input } = window.LauraCapesTerryDesignSystem_1d8d61;

  const FEATURED = {
    cat: 'Clarity', time: '6 min read',
    title: 'Does your homepage answer the three questions every visitor asks?',
    excerpt: 'If your website feels “almost right” but not quite effective, it’s usually a clarity issue — not a design problem. Here’s the simple above-the-fold test that helps visitors instantly understand who you help, what you offer, and what to do next.',
    img: 'laura-office-writing.jpg',
  };

  const RECENT = [
    ['AI', '8 min read', 'All in with AI — without losing your voice', 'AI doesn’t replace heart — it amplifies it. A grounded framework for using modern tools with wisdom, clarity, and purpose.', 'laura-all-in-with-ai.png'],
    ['Local Marketing', '5 min read', 'Be the business new neighbors trust first', 'New movers choose their go-to businesses in their first few months. Make a great first impression before they choose someone else.', 'belocal-georgetown-cover.jpg'],
    ['Strategy', '6 min read', 'Stop reacting to trends. Start leading with focus.', 'A calmer, more confident way to run your marketing — one that puts your goals ahead of the algorithm’s.', 'laura-candid.jpg'],
    ['Mindset', '4 min read', 'You don’t have to figure it out alone', 'Why the most successful local owners lean on experienced guidance instead of carrying the weight by themselves.', 'laura-headshot.jpg'],
  ];

  const PICKS = [
    ['The one-sentence test for your marketing message', 'Clarity'],
    ['Five AI prompts that sharpen your message', 'AI'],
    ['Magnetic brands are built on trust, not noise', 'Branding'],
    ['Why word-of-mouth still wins in a digital world', 'Local Marketing'],
    ['A simple weekly rhythm for marketing that sticks', 'Strategy'],
  ];

  const TOPICS = [
    ['BeLocal', [
      ['How BeLocal connects you with your community', 'moments/belocal-group.png'],
      ['Why new neighbors trust BeLocal businesses first', 'belocal-georgetown-cover.jpg'],
      ['Getting featured in BeLocal Georgetown', 'moments/award-couple.png'],
      ['The story behind why Laura publishes BeLocal', 'moments/gala.png'],
    ]],
    ['Georgetown', [
      ['Marketing that fits the Georgetown community', 'moments/library-couple.png'],
      ['Be the local business Georgetown recommends', 'belocal-georgetown-cover.jpg'],
      ['Connecting with new Georgetown movers', 'moments/belocal-group.png'],
      ['Showing up at Georgetown events that matter', 'moments/gala.png'],
    ]],
    ['Local Marketing', [
      ['Be the business new neighbors trust first', 'belocal-georgetown-cover.jpg'],
      ['Word-of-mouth still wins in a digital world', 'moments/award-couple.png'],
      ['Show up where your customers already are', 'laura-headshot.jpg'],
      ['A simple weekly rhythm for local marketing', 'laura-office-writing.jpg'],
    ]],
    ['AI', [
      ['A grounded framework for using AI with wisdom', 'laura-all-in-with-ai.png'],
      ['Five prompts that sharpen your marketing message', 'moments/gala.png'],
      ['How to sound like you — not a robot — with AI', 'laura-candid.jpg'],
      ['The human work AI can’t replace', 'moments/beach-sunset.png'],
    ]],
    ['Branding', [
      ['Magnetic brands are built on trust, not noise', 'laura-headshot.jpg'],
      ['Why clear beats clever every time', 'moments/podcast.png'],
      ['The three questions your brand must answer', 'moments/library-couple.png'],
      ['Make a great first impression before they choose', 'moments/resort.png'],
    ]],
    ['Community Connection', [
      ['How connection builds a referable business', 'moments/belocal-group.png'],
      ['Giving back as a marketing strategy that lasts', 'moments/award-couple.png'],
      ['Building relationships before you need them', 'moments/gala.png'],
      ['Why local partnerships outperform ads', 'moments/library-couple.png'],
    ]],
    ['Business Growth', [
      ['Stop reacting to trends. Start leading with focus.', 'laura-candid.jpg'],
      ['What a fractional CMO does for your business', 'moments/pool-portrait.png'],
      ['Advertising as the engine of sustainable growth', 'laura-office-writing.jpg'],
      ['Lead your marketing instead of letting it lead you', 'moments/resort.png'],
    ]],
    ['Visibility', [
      ['Be seen, be trusted, be chosen', 'moments/resort.png'],
      ['54 ways to get noticed in your market', 'moments/beach-sunset.png'],
      ['Show up consistently without burning out', 'laura-headshot.jpg'],
      ['The above-the-fold test for instant clarity', 'laura-office-writing.jpg'],
    ]],
  ];

  const TAGS = ['Clarity', 'AI', 'Local Marketing', 'Branding', 'Strategy', 'Mindset'];

  const CATEGORIES = ['BeLocal', 'Georgetown', 'Local Marketing', 'AI', 'Branding', 'Community Connection', 'Business Growth', 'Visibility'];

  const stop = (e) => e.preventDefault();

  const slugify = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60);
  const postHref = (o) =>
    `post.html?p=${slugify(o.title)}&c=${encodeURIComponent(o.cat || '')}` +
    `&img=${encodeURIComponent(o.img || '')}&t=${encodeURIComponent(o.title)}`;

  function BlogPage() {
    const toast = window.useToast();
    return (
      <div>
        {/* Featured hero */}
        <section className="blog-hero section" data-screen-label="Blog hero">
          <window.Container>
            <div className="blog-hero__grid">
              <div className="reveal">
                <p className="ed-eyebrow ed-eyebrow--light" style={{ color: 'var(--lct-sky-500)' }}>The Blog · Featured</p>
                <h1 className="ed-serif" style={{ fontSize: 'var(--fs-h1)', color: '#fff', margin: '0 0 16px' }}>{FEATURED.title}</h1>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.65, color: 'rgba(255,255,255,0.9)', margin: '0 0 24px', maxWidth: 540 }}>{FEATURED.excerpt}</p>
                <div className="bmeta" style={{ marginBottom: 24 }}>
                  <Pill>{FEATURED.cat}</Pill>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{FEATURED.time}</span>
                </div>
                <Button href={postHref(FEATURED)} variant="onDark">Read article</Button>
              </div>
              <a className="blog-hero__media reveal" href={postHref(FEATURED)}>
                <img src={`assets/${FEATURED.img}`} alt={FEATURED.title} />
              </a>
            </div>
          </window.Container>
        </section>

        {/* Most recent + sidebar */}
        <section className="bg-page section">
          <window.Container>
            <div className="blog-main">
              <div>
                <window.SectionTitle align="left" title="Most recent" />
                <div className="recent-list" style={{ marginTop: 28 }}>
                  {RECENT.map(([cat, time, title, excerpt, img], i) => (
                    <a key={i} className="recent-row reveal" href={postHref({ title, cat, img })}>
                      <div className="recent-row__media"><img src={`assets/${img}`} alt={title} /></div>
                      <div className="recent-row__body">
                        <div className="bmeta">
                          <Pill variant="soft">{cat}</Pill>
                          <span className="bmeta__time">{time}</span>
                        </div>
                        <h3 className="ed-serif" style={{ fontSize: 'var(--fs-h4)', margin: '0 0 10px' }}>{title}</h3>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-body)', margin: '0 0 14px' }}>{excerpt}</p>
                        <span className="accent" style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14 }}>Read more →</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <aside className="blog-side">
                <div className="side-card reveal">
                  <div className="ed-eyebrow" style={{ color: 'var(--lct-sky-500)', margin: 0 }}>Free guide</div>
                  <h3>Building Better Websites: six clarity-first fixes</h3>
                  <p>Plus AI prompts to help you implement them faster — so visitors instantly know who you help and what to do next.</p>
                  <Button href="resources.html#guides" variant="onDark" fullWidth>Get the free guide</Button>
                </div>
                <div className="side-picks reveal">
                  <p className="side-picks__head">Top picks</p>
                  {PICKS.map(([title, cat], i) => (
                    <a key={i} className="pick" href={postHref({ title, cat })}>
                      <span className="pick__n">{i + 1}</span>
                      <span>
                        <span className="pick__title">{title}</span>
                        <span className="pick__cat" style={{ display: 'block' }}>{cat}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </aside>
            </div>
          </window.Container>
        </section>

        {/* Browse by topic */}
        <section className="bg-tint section">
          <window.Container>
            <window.SectionTitle align="left" overline="Browse" title="Find your next read by topic" />
            <div style={{ marginTop: 40 }}>
              {TOPICS.map(([name, posts], ti) => (
                <div key={ti} className="topic">
                  <div className="topic-head">
                    <h3 className="ed-serif" style={{ fontSize: 'var(--fs-h3)' }}>{name}</h3>
                    <a className="topic-head__see" href="#" onClick={stop}>See all →</a>
                  </div>
                  <div className="grid grid-4">
                    {posts.map(([title, img], i) => (
                      <a key={i} className="bcard reveal" href={postHref({ title, cat: name, img })}>
                        <div className="bcard__media"><img src={`assets/${img}`} alt={title} /></div>
                        <div className="bcard__body">
                          <Pill variant="soft" style={{ alignSelf: 'flex-start' }}>{name}</Pill>
                          <p className="bcard__title">{title}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </window.Container>
        </section>
      </div>
    );
  }
  window.__pages = window.__pages || {};
  window.__pages.blog = BlogPage;
})();
