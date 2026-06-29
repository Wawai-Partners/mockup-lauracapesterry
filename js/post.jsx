/* Laura Capes Terry — Single blog post (detail) page.
   Reads ?p=<slug> from the URL and looks the post up in window.LCT_BLOG
   (defined in js/blog-data.js). Unknown slugs fall back to a graceful,
   on-brand default body built from the title/category query params. */
(function () {
  const { Button, Pill } = window.LauraCapesTerryDesignSystem_1d8d61;

  const slugify = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 60);

  const P = (children) => ({ type: 'p', children });
  const H = (children) => ({ type: 'h2', children });
  const Q = (children, cite) => ({ type: 'quote', children, cite });
  const L = (items) => ({ type: 'list', items });

  // Reusable, on-brand default article body (for slugs not in the library).
  function defaultBody(title, cat) {
    return [
      P(`If you run a local business, you already know the feeling: the marketing “almost” works, but it never feels effortless. ${cat ? `When it comes to ${cat.toLowerCase()}, t` : 'T'}he problem usually isn’t effort — it’s clarity. People can’t choose you if they can’t quickly understand who you help and why it matters.`),
      H('Start with the one thing people need to know'),
      P('Before you touch a tactic, get crystal clear on the single idea you want a customer to walk away with. When that idea is sharp, everything downstream — your homepage, your ads, your posts — gets easier to write and far more effective.'),
      Q('AI doesn’t replace heart — it amplifies it. The clearer you are, the more powerful every tool becomes.', 'Laura Capes Terry, MBA'),
      H('Make it easy to say yes'),
      P('Trust is built in small, consistent moments. Show up where your customers already are, speak plainly, and make the next step obvious.'),
      L(['Lead with the customer’s problem, not your features.', 'Use language your customer actually uses.', 'Give one clear next step on every page.', 'Be consistent enough that people remember you.']),
    ];
  }

  const ALL = (window.LCT_BLOG || []);
  const BY_SLUG = (window.LCT_BLOG_BY_SLUG || {});

  function PostPage() {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('p') || '';
    const qTitle = params.get('t') || '';
    const qCat = params.get('c') || '';
    const qImg = params.get('img') || '';

    const lib = BY_SLUG[slug];
    const title = (lib && lib.title) || qTitle || 'A note from Laura';
    const cat = (lib && lib.cat) || qCat || 'Marketing';
    const img = (lib && lib.img) || qImg || 'laura-office-writing.jpg';
    const read = (lib && lib.read) || '5 min read';
    const date = (lib && lib.date) || '';
    const tags = (lib && lib.tags) || [];
    const dek = (lib && lib.dek) || `Practical, grounded thinking on ${cat.toLowerCase()} — blending modern tools with timeless wisdom so your marketing feels clear, human, and effective.`;
    const body = (lib && lib.body) || defaultBody(title, cat);

    const RELATED = ALL.filter((p) => p.slug !== slug).slice(0, 3);
    const relHref = (p) => `post.html?p=${p.slug}`;

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
                {date ? <span className="bmeta__time">{date}</span> : null}
              </div>
              <h1 className="ed-serif post-title">{title}</h1>
              <p className="post-dek">{dek}</p>
              {tags.length ? (
                <div className="post-tags">
                  {tags.map((t) => <span key={t} className="post-tag">{t}</span>)}
                </div>
              ) : null}
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
                <h3 className="ed-serif" style={{ fontSize: 'var(--fs-h3)', color: '#fff', margin: '0 0 10px' }}>Building Better Websites: six clarity-first fixes</h3>
                <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.88)', lineHeight: 1.65, margin: 0, maxWidth: 460 }}>
                  Plus AI prompts to help you implement them faster — so visitors instantly know who you help and what to do next.
                </p>
              </div>
              <Button href="resources-guides.html" variant="accent" style={{ background: '#fff' }}>Get the free guide <i className="fa-solid fa-heart"></i></Button>
            </div>
          </window.Container>
        </section>

        {/* Keep reading */}
        <section className="bg-tint section">
          <window.Container>
            <window.SectionTitle align="left" overline="Keep reading" title="More from the blog" />
            <div className="grid grid-3" style={{ marginTop: 36 }}>
              {RELATED.map((p, idx) => (
                <a key={idx} className="bcard reveal" href={relHref(p)}>
                  <div className="bcard__media"><img src={`assets/${p.img}`} alt={p.title} /></div>
                  <div className="bcard__body">
                    <Pill variant="soft" style={{ alignSelf: 'flex-start' }}>{p.cat}</Pill>
                    <p className="bcard__title">{p.title}</p>
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
