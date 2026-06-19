/* Laura Capes Terry — Single blog post (detail) page.
   Reads ?p=<slug>&c=<category>&img=<image>&t=<title> from the URL.
   A small LIBRARY holds full custom articles; any other slug falls
   back to a graceful, on-brand default body built from the title. */
(function () {
  const { Button, Pill } = window.LauraCapesTerryDesignSystem_1d8d61;

  const slugify = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60);

  const P = (children) => ({ type: 'p', children });
  const H = (children) => ({ type: 'h2', children });
  const Q = (children, cite) => ({ type: 'quote', children, cite });
  const L = (items) => ({ type: 'list', items });

  // Reusable, on-brand default article body.
  function defaultBody(title, cat) {
    return [
      P(`If you run a local business, you already know the feeling: the marketing “almost” works, but it never feels effortless. ${cat ? `When it comes to ${cat.toLowerCase()}, t` : 'T'}he problem usually isn’t effort — it’s clarity. People can’t choose you if they can’t quickly understand who you help and why it matters.`),
      H('Start with the one thing people need to know'),
      P('Before you touch a tactic, get crystal clear on the single idea you want a customer to walk away with. When that idea is sharp, everything downstream — your homepage, your ads, your posts — gets easier to write and far more effective.'),
      Q('AI doesn’t replace heart — it amplifies it. The clearer you are, the more powerful every tool becomes.', 'Laura Capes Terry, MBA'),
      H('Make it easy to say yes'),
      P('Trust is built in small, consistent moments. Show up where your customers already are, speak plainly, and make the next step obvious. You don’t need to be everywhere — you need to be clear, consistent, and genuinely helpful.'),
      L([
        'Lead with the customer’s problem, not your features.',
        'Use language your customer actually uses.',
        'Give one clear next step on every page.',
        'Be consistent enough that people remember you.',
      ]),
      H('Let the work compound'),
      P('Marketing that lasts is rarely about a single clever campaign. It’s a steady rhythm — clear message, helpful presence, real relationships — repeated until it becomes the reason people choose you first. That’s the work worth doing, and it’s exactly the kind of guidance I love helping business owners put into practice.'),
    ];
  }

  // Full custom articles, keyed by slug.
  const LIBRARY = {
    [slugify('Does your homepage answer the three questions every visitor asks?')]: {
      cat: 'Clarity', read: '6 min read', img: 'laura-office-writing.jpg',
      dek: 'If your website feels “almost right” but not quite effective, it’s usually a clarity issue — not a design problem. Here’s the simple above-the-fold test that helps visitors instantly understand who you help, what you offer, and what to do next.',
      body: [
        P('Most business owners assume a website that “looks nice” is doing its job. But beauty isn’t the same as clarity. Within five seconds of landing on your homepage, a visitor is quietly asking three questions — and if your site doesn’t answer them fast, they leave.'),
        H('The three questions every visitor asks'),
        L([
          'What do you offer? (Can I tell in one glance?)',
          'How will it make my life better? (What’s in it for me?)',
          'What do I do next? (Is the next step obvious?)',
        ]),
        P('That’s the whole test. If a stranger can answer all three in the time it takes to read a billboard from a moving car, your above-the-fold section is working. If they can’t, no amount of pretty design will fix the drop-off.'),
        Q('Clarity beats clever every single time. Confused visitors don’t buy — they bounce.', 'Laura Capes Terry, MBA'),
        H('The 10-second test'),
        P('Pull up your homepage on your phone and look only at what shows before you scroll. Hand it to someone who knows nothing about your business and ask them those three questions. Their hesitation tells you exactly what to fix.'),
        H('Fix the message before the design'),
        P('A clear one-liner, a benefit-led headline, and one obvious button will outperform a redesign almost every time. Start with the words. When the message is clear, the design has something true to dress up — and that’s when a website finally starts earning its keep.'),
      ],
    },
    [slugify('All in with AI — without losing your voice')]: {
      cat: 'AI', read: '8 min read', img: 'laura-all-in-with-ai.png',
      dek: 'AI doesn’t replace heart — it amplifies it. A grounded framework for using modern tools with wisdom, clarity, and purpose.',
      body: [
        P('There are two unhelpful camps when it comes to AI: the people who think it will do everything, and the people who refuse to touch it. The truth lives in the middle. Used well, AI is a force multiplier for clarity, consistency, and creativity — not a replacement for your judgment.'),
        H('Lead with your voice, not the tool'),
        P('AI is only as good as the direction you give it. The owners who get the best results are the ones who know their message cold, then use AI to move faster — drafting, reframing, and polishing — without ever handing over the wheel.'),
        Q('Teach the tool to sound like you. Your voice is the asset — AI just helps you use it more often.', 'Laura Capes Terry, MBA'),
        H('Where AI earns its keep'),
        L([
          'Turning one idea into a week of consistent content.',
          'Sharpening a clunky paragraph into a clear one.',
          'Brainstorming angles when you’re staring at a blank screen.',
          'Handling the repetitive work so you can do the human work.',
        ]),
        H('The work AI can’t replace'),
        P('Relationships. Trust. Discernment. Knowing your customer well enough to say the exact right thing at the exact right moment. Keep those firmly in your hands, let AI amplify the rest, and you get the best of both worlds — modern tools with timeless wisdom.'),
      ],
    },
  };

  function PostPage() {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('p') || '';
    const qTitle = params.get('t') || '';
    const qCat = params.get('c') || '';
    const qImg = params.get('img') || '';

    const lib = LIBRARY[slug];
    const title = (lib && lib.titleOverride) || qTitle || 'A note from Laura';
    const cat = (lib && lib.cat) || qCat || 'Marketing';
    const img = (lib && lib.img) || qImg || 'laura-office-writing.jpg';
    const read = (lib && lib.read) || '5 min read';
    const dek = (lib && lib.dek) || `Practical, grounded thinking on ${cat.toLowerCase()} — blending modern tools with timeless wisdom so your marketing feels clear, human, and effective.`;
    const body = (lib && lib.body) || defaultBody(title, cat);

    const RELATED = [
      ['Be the business new neighbors trust first', 'Local Marketing', 'belocal-georgetown-cover.jpg'],
      ['A grounded framework for using AI with wisdom', 'AI', 'laura-all-in-with-ai.png'],
      ['Magnetic brands are built on trust, not noise', 'Branding', 'laura-headshot.jpg'],
    ].filter(([t]) => slugify(t) !== slug);

    const relHref = (t, c, i) =>
      `post.html?p=${slugify(t)}&c=${encodeURIComponent(c)}&img=${encodeURIComponent(i)}&t=${encodeURIComponent(t)}`;

    const renderBlock = (b, i) => {
      if (b.type === 'p') return <p key={i}>{b.children}</p>;
      if (b.type === 'h2') return <h2 key={i} className="ed-serif">{b.children}</h2>;
      if (b.type === 'list') return <ul key={i}>{b.items.map((it, j) => <li key={j}>{it}</li>)}</ul>;
      if (b.type === 'quote') return (
        <blockquote key={i} className="post-quote">
          <p className="ed-serif">{b.children}</p>
          {b.cite && <cite>— {b.cite}</cite>}
        </blockquote>
      );
      return null;
    };

    return (
      <article data-screen-label="Blog post">
        {/* Header */}
        <section className="post-head section--sm bg-page">
          <window.Container>
            <div className="post-head__inner reveal">
              <nav className="post-crumb">
                <a href="blog.html">Blog</a><span>/</span><span>{cat}</span>
              </nav>
              <div className="bmeta" style={{ justifyContent: 'center' }}>
                <Pill variant="soft">{cat}</Pill>
                <span className="bmeta__time">{read}</span>
              </div>
              <h1 className="ed-serif post-title">{title}</h1>
              <p className="post-dek">{dek}</p>
              <div className="post-author">
                <img src="assets/laura-headshot.jpg" alt="Laura Capes Terry" />
                <div>
                  <span className="post-author__name">Laura Capes Terry, MBA</span>
                  <span className="post-author__meta">Strategic marketing guide · Georgetown, TX</span>
                </div>
              </div>
            </div>
          </window.Container>
        </section>

        {/* Feature image */}
        <div className="post-cover reveal">
          <img src={`assets/${img}`} alt={title} />
        </div>

        {/* Body */}
        <section className="section">
          <window.Container>
            <div className="post-body reveal">
              {body.map(renderBlock)}
              <div className="post-share">
                <span>Share</span>
                <a href="#" onClick={(e) => e.preventDefault()} aria-label="Share on Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" onClick={(e) => e.preventDefault()} aria-label="Share on LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#" onClick={(e) => e.preventDefault()} aria-label="Share by email"><i className="fa-solid fa-envelope"></i></a>
              </div>
            </div>
          </window.Container>
        </section>

        {/* CTA */}
        <section className="post-cta section">
          <window.Container>
            <div className="post-cta__card reveal">
              <div>
                <p className="ed-eyebrow" style={{ color: 'var(--lct-sky-500)', margin: '0 0 10px' }}>Free guide</p>
                <h3 className="ed-serif" style={{ fontSize: 'var(--fs-h3)', color: '#fff', margin: '0 0 10px' }}>Building Better Websites: six clarity-first fixes</h3>
                <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.88)', lineHeight: 1.65, margin: 0, maxWidth: 460 }}>
                  Plus AI prompts to help you implement them faster — so visitors instantly know who you help and what to do next.
                </p>
              </div>
              <Button href="resources.html#guides" variant="onDark">Get the free guide</Button>
            </div>
          </window.Container>
        </section>

        {/* Keep reading */}
        <section className="bg-tint section">
          <window.Container>
            <window.SectionTitle align="left" overline="Keep reading" title="More from the blog" />
            <div className="grid grid-3" style={{ marginTop: 36 }}>
              {RELATED.slice(0, 3).map(([t, c, i], idx) => (
                <a key={idx} className="bcard reveal" href={relHref(t, c, i)}>
                  <div className="bcard__media"><img src={`assets/${i}`} alt={t} /></div>
                  <div className="bcard__body">
                    <Pill variant="soft" style={{ alignSelf: 'flex-start' }}>{c}</Pill>
                    <p className="bcard__title">{t}</p>
                  </div>
                </a>
              ))}
            </div>
          </window.Container>
        </section>
      </article>
    );
  }

  window.__pages = window.__pages || {};
  window.__pages.post = PostPage;
})();
