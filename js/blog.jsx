/* Laura Capes Terry — Blog index. Lists the real posts from
   window.LCT_BLOG (js/blog-data.js): featured hero + filterable list
   with a category sidebar that mirrors the live site. */
(function () {
  const { Button, Pill, Input } = window.LauraCapesTerryDesignSystem_1d8d61;
  const { useState } = React;

  const ALL = (window.LCT_BLOG || []).slice().sort((a, b) => b.sort - a.sort);

  // Category list mirroring the live Kajabi blog sidebar.
  const CATEGORIES = [
    '#2021review', '#2022', '#Ad-Design', '#Belocal', '#Belocalgeorgetown', '#Bootcamp',
    '#Georgetownchamber', '#Graysonmediagirls', '#Gtxnewcomers', '#Hellogeorgetown',
    '#Inspiration', '#Lauracapesterry', '#Lauracapesterrymba', '#Marketingmadesmarter',
    '#Marketingplansmadesmarter', '#Onlinecourse', '#Podcastepisode', '#Storybrand',
    '#Storybrandlivestream', '#Storybrandmarketingworkshop', '#Theunbridledcreative',
    '#Vipcoaching', '#Whenopportunityknocks', 'Austin Hidden Gems', 'Grayson Media & Marketing',
    'Laura Capes Terry', 'Voyage Austin'];

  const postHref = (p) => `post.html?p=${p.slug}`;
  const PER_PAGE = 5;

  function BlogPage() {
    const [cat, setCatState] = useState('All Categories');
    const [page, setPage] = useState(1);
    const featured = ALL[0];
    const setCat = (c) => { setCatState(c); setPage(1); };

    const matches = (p) => cat === 'All Categories' || (p.tags || []).indexOf(cat) !== -1;
    const list = ALL.filter((p) => p !== featured).filter(matches);
    const featuredShown = matches(featured);

    const totalPages = Math.max(1, Math.ceil(list.length / PER_PAGE));
    const current = Math.min(page, totalPages);
    const paged = list.slice((current - 1) * PER_PAGE, current * PER_PAGE);
    const goTo = (n) => {
      setPage(n);
      const el = document.querySelector('.blog-main');
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' });
    };

    return (
      <div data-screen-label="Blog">
        {/* Featured hero */}
        <section className="blog-hero section" data-screen-label="Blog hero">
          <window.Container>
            <div className="blog-hero__grid">
              <div className="reveal">
                <div className="bmeta" style={{ marginBottom: 16 }}>
                  <Pill>{featured.cat}</Pill>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{featured.date} · {featured.read}</span>
                </div>
                <h1 className="ed-serif" style={{ fontSize: 'var(--fs-h1)', color: '#fff', margin: '0 0 16px' }}>{featured.title}</h1>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.65, color: 'rgba(255,255,255,0.9)', margin: '0 0 24px', maxWidth: 540 }}>{featured.dek}</p>
                <Button href={postHref(featured)} variant="accent" style={{ background: '#fff' }}>Read article <i className="fa-solid fa-heart"></i></Button>
              </div>
              <a className="blog-hero__media reveal" href={postHref(featured)}>
                <img src={`assets/${featured.img}`} alt={featured.title} />
              </a>
            </div>
          </window.Container>
        </section>

        {/* List + sidebar */}
        <section className="bg-page section">
          <window.Container>
            <div className="blog-main">
              <div>
                <window.SectionTitle align="left" title={cat === 'All Categories' ? 'All articles' : cat} />
                <div className="recent-list" style={{ marginTop: 28 }}>
                  {paged.length ? paged.map((p, i) => (
                    <a key={i} className="recent-row reveal" href={postHref(p)}>
                      <div className="recent-row__media"><img src={`assets/${p.img}`} alt={p.title} /></div>
                      <div className="recent-row__body">
                        <div className="bmeta">
                          <Pill variant="soft">{p.cat}</Pill>
                          <span className="bmeta__time">{p.date}</span>
                          <span className="bmeta__time">{p.read}</span>
                        </div>
                        <h3 className="ed-serif" style={{ fontSize: 'var(--fs-h4)', margin: '0 0 10px' }}>{p.title}</h3>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-body)', margin: '0 0 12px' }}>{p.dek}</p>
                        <div className="post-tags" style={{ marginBottom: 0 }}>
                          {(p.tags || []).slice(0, 4).map((t) => <span key={t} className="post-tag">{t}</span>)}
                        </div>
                      </div>
                    </a>
                  )) : (
                    <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', padding: '24px 0' }}>
                      No articles in this category yet{featuredShown ? ' — see the featured article above.' : '.'} <a href="#" onClick={(e) => { e.preventDefault(); setCat('All Categories'); }} style={{ color: 'var(--color-primary)', fontWeight: 700 }}>View all articles →</a>
                    </p>
                  )}
                </div>

                {totalPages > 1 ? (
                  <nav className="blog-pager" aria-label="Blog pagination">
                    <button type="button" className="blog-pager__edge" onClick={() => goTo(current - 1)} disabled={current === 1} aria-label="Previous page">
                      <i className="fa-solid fa-arrow-left"></i> Prev
                    </button>
                    <div className="blog-pager__nums">
                      {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((n) => (
                        <button key={n} type="button" className={`blog-pager__num ${n === current ? 'is-active' : ''}`} onClick={() => goTo(n)} aria-current={n === current ? 'page' : undefined}>{n}</button>
                      ))}
                    </div>
                    <button type="button" className="blog-pager__edge" onClick={() => goTo(current + 1)} disabled={current === totalPages} aria-label="Next page">
                      Next <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </nav>
                ) : null}
              </div>

              <aside className="blog-side">
                <div className="side-card reveal" style={{ background: 'var(--surface-tint)' }}>
                  <h3 style={{ color: 'var(--text-heading)' }}>Building Better Websites: six clarity-first fixes</h3>
                  <p style={{ color: 'var(--text-body)' }}>Plus AI prompts to help you implement them faster — so visitors instantly know who you help and what to do next.</p>
                  <Button href="resources-guides.html" fullWidth>Get the free guide <i className="fa-solid fa-heart"></i></Button>
                </div>

                <div className="blog-cats reveal">
                  <p className="blog-cats__head">Categories</p>
                  <button type="button" className={`blog-cat ${cat === 'All Categories' ? 'is-active' : ''}`} onClick={() => setCat('All Categories')}>All Categories</button>
                  {CATEGORIES.map((c) => (
                    <button key={c} type="button" className={`blog-cat ${cat === c ? 'is-active' : ''}`} onClick={() => setCat(c)}>{c}</button>
                  ))}
                </div>

                <div className="blog-follow reveal">
                  <p className="blog-cats__head">Follow Us</p>
                  <div className="blog-follow__row">
                    <a href="https://www.facebook.com/lauracapesterrymba" target="_blank" rel="noopener" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/lauracapesterrymba/" target="_blank" rel="noopener" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                  </div>
                </div>
              </aside>
            </div>
          </window.Container>
        </section>
      </div>
    );
  }
  window.__pages = window.__pages || {};
  window.__pages.blog = BlogPage;
})();
