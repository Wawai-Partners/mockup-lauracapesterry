/* Laura Capes Terry — Resources hub */
(function () {
  const { Button, Pill } = window.LauraCapesTerryDesignSystem_1d8d61;

  /* Each section: id, eyebrow, title, blurb, icon, tiles[{name, meta, href}] */
  const SECTIONS = [
    {
      id: 'guides', icon: 'fa-file-arrow-down', eyebrow: 'Free guides',
      title: 'Practical guides you can use today',
      blurb: 'Short, no-fluff downloads to help you market smarter — most read in under five minutes.',
      tiles: [
        ['The Ultimate ChatGPT Prompt', 'Free · AI', '#'],
        ['Building Better Websites: Checklist', 'Free · Website', 'contact.html'],
        ['12 Secrets to Great Ad Design', 'Free · Advertising', '#'],
        ['“CATCH” Attention on Social Media', 'Free · Social', '#'],
        ['Building a Sustainable Business', 'Free · Growth', '#'],
        ['54 Ways to Get Noticed', 'Free · Visibility', '#'],
        ['The Voice Blueprint', 'Free · Branding', '#'],
      ],
    },
    {
      id: 'frameworks', icon: 'fa-diagram-project', eyebrow: 'Frameworks',
      title: 'The frameworks behind the work',
      blurb: 'The proven models Laura uses to bring clarity and structure to marketing decisions.',
      tiles: [
        ['Building Blocks for Marketing Success', 'Framework', '#'],
        ['The Proven Path to Marketing Success', 'Framework', '#'],
        ['The Trust Funnel', 'Framework', '#'],
        ['Circular Viralocity', 'Framework', '#'],
        ['Return on Impact (ROI)', 'Framework', '#'],
        ['Website Success Framework', 'Framework', '#'],
        ['Great Print Ad Framework', 'Framework', '#'],
      ],
    },
    {
      id: 'books', icon: 'fa-book-open', eyebrow: 'Books',
      title: 'Books by &amp; featuring Laura',
      blurb: 'Stories and strategies for entrepreneurs building brands with courage and heart.',
      tiles: [
        ['Rockstar Entrepreneur', 'Available now', '#'],
        ['The Courage to Plant a Seed', 'Available now', '#'],
        ['The Courage to Find My Voice', 'Coming soon', '#'],
        ['Be Seen. Be Trusted. Be Chosen.', 'Coming someday', '#'],
      ],
    },
    {
      id: 'courses', icon: 'fa-graduation-cap', eyebrow: 'Courses',
      title: 'Go deeper, at any pace',
      blurb: 'Self-paced learning to build real marketing skill and confidence.',
      tiles: [
        ['Marketing Made Smarter Bootcamp', 'Course', '#'],
      ],
    },
    {
      id: 'workshops', icon: 'fa-chalkboard-user', eyebrow: 'Workshops',
      title: 'Live workshops &amp; trainings',
      blurb: 'Hands-on sessions for teams and groups ready to move from ideas to action.',
      tiles: [
        ['The Path to Marketing Success', 'Workshop', '#'],
        ['AI in Marketing', 'Workshop', '#'],
        ['Don’t Wing It — Batch It', 'Workshop', '#'],
        ['From Blank Screen to Brilliant Strategy', 'Workshop', '#'],
        ['Navigating the Trust Recession', 'Workshop', '#'],
      ],
    },
    {
      id: 'videos', icon: 'fa-play', eyebrow: 'Videos',
      title: 'Watch &amp; learn',
      blurb: 'Talks, testimonials, and quick how-tos from Laura and the BeLocal community.',
      tiles: [
        ['BNI Featured Speaker Presentation', 'Video', '#'],
        ['BNI Testimonials', 'Video', '#'],
        ['Teach ChatGPT to Sound Like You', 'Video · AI', '#'],
      ],
    },
    {
      id: 'partners', icon: 'fa-handshake-simple', eyebrow: 'Strategic partners',
      title: 'People Laura trusts',
      blurb: 'A network of trusted local and marketing partners Laura recommends and collaborates with.',
      tiles: [
        ['Anchor Media', 'Partner', '#'],
        ['BeLocal Georgetown', 'Partner', 'belocal.html'],
        ['Grayson Media & Marketing', 'Partner', '#'],
        ['Hello Georgetown', 'Partner', '#'],
        ['Let’s Go Locals', 'Partner', '#'],
        ['Moxie 360 Marketing', 'Partner', '#'],
        ['Santosha Solutions', 'Partner', '#'],
        ['Wawai Partners', 'Partner', '#'],
      ],
    },
  ];

  function ResourcesPage() {
    return (
      <div>
        {/* Hero */}
        <section className="bg-dark section--sm" style={{ position: 'relative' }}>
          <window.Container>
            <div className="reveal" style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', paddingTop: 30, paddingBottom: 8 }}>
              <Pill style={{ marginBottom: 18 }}>Resources</Pill>
              <h1 className="h-display" style={{ fontSize: 'var(--fs-h1)', color: '#fff', marginBottom: 16 }}>
                Wisdom, tools, and templates — all in one place
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lead)', lineHeight: 1.6, color: 'rgba(255,255,255,0.92)', margin: '0 0 30px' }}>
                Free guides, proven frameworks, books, courses, and more — built to help local business owners be seen, trusted, and chosen.
              </p>
              <div className="faq-jump" style={{ justifyContent: 'center' }}>
                {[['Ask Laura — FAQs', 'ask-laura.html'], ['Blog', 'blog.html'], ['Podcasts', 'podcast.html'], ['Free Guides', '#guides'], ['Frameworks', '#frameworks']].map(([l, h]) => (
                  <a key={l} href={h} style={{ background: 'rgba(255,255,255,0.10)', borderColor: 'rgba(255,255,255,0.25)', color: '#fff' }}>{l}</a>
                ))}
              </div>
            </div>
          </window.Container>
        </section>

        {SECTIONS.map((s, i) => (
          <section key={s.id} id={s.id} className={i % 2 === 0 ? 'bg-page section' : 'bg-card section'}>
            <window.Container>
              <div className="reveal" style={{ maxWidth: 700, marginBottom: 36 }}>
                <div className="faq-cat__head">
                  <span className="faq-cat__icon"><window.SunIcon icon={s.icon} size={58} /></span>
                  <div>
                    <h2 className="h-display" style={{ fontSize: 'var(--fs-h3)', marginTop: 2 }} dangerouslySetInnerHTML={{ __html: s.title }}></h2>
                  </div>
                </div>
                <p className="lead" style={{ margin: 0 }}>{s.blurb}</p>
              </div>
              <div className="grid grid-3" style={{ gap: 18 }}>
                {s.tiles.map(([name, meta, href]) => (
                  <a key={name} className="res-tile reveal" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener">
                    <span className="res-tile__meta">{meta}</span>
                    <span className="res-tile__name">{name}</span>
                    <span style={{ marginTop: 6, color: 'var(--color-primary)', fontSize: 13, fontWeight: 700, fontFamily: 'var(--font-body)' }}>
                      {href === '#' ? 'Coming soon' : <>View<i className="fa-solid fa-arrow-right" style={{ marginLeft: 7, fontSize: 11, color: 'var(--color-accent)' }}></i></>}
                    </span>
                  </a>
                ))}
              </div>
            </window.Container>
          </section>
        ))}

        {/* CTA */}
        <section className="bg-tint section">
          <window.Container>
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
              <h2 className="h-display" style={{ fontSize: 'var(--fs-h2)', marginBottom: 14 }}>Not sure which resource is right?</h2>
              <p className="lead" style={{ margin: '0 auto 26px' }}>Tell Laura the biggest marketing challenge and she’ll point to the right next step.</p>
              <Button href="contact.html" size="large">Start Here</Button>
            </div>
          </window.Container>
        </section>
      </div>
    );
  }
  window.__pages = window.__pages || {};
  window.__pages.resources = ResourcesPage;
})();
