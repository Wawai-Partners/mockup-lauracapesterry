/* Laura Capes Terry — Resources: Books (/resources/books) */
(function () {
  const { Button, Pill } = window.LauraCapesTerryDesignSystem_1d8d61;

  const byLaura = [
    ['assets/books/courage-plant-seed.png', 'The Courage to Plant a Seed', 'Available now',
      'A reflection on the faith, courage, and tenacity it takes to start something new — and the beautiful growth that becomes possible when you do. For entrepreneurs, dreamers, and anyone called to build something meaningful.',
      'Read / Download', '#'],
    ['assets/books/courage-find-voice.png', 'The Courage to Find My Voice', 'Coming soon',
      'Laura\u2019s upcoming book on rediscovering your authentic brand voice — and using it with confidence in your marketing, your business, and your life.',
      'Join the waitlist', 'contact.html'],
    ['assets/books/be-seen-trusted-chosen.png', 'Be Seen. Be Trusted. Be Chosen.', 'Coming someday',
      'The full-length book version of Laura\u2019s signature marketing framework — the ultimate guide for local business owners who want to become the business their community loves and recommends.',
      'Follow for updates', 'contact.html']];

  function BooksPage() {
    return (
      <div data-screen-label="Resources — Books">
        <section className="bg-tint section--sm" data-screen-label="Books hero">
          <window.Container>
            <div className="reveal" style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center', paddingTop: 24, paddingBottom: 24 }}>
              <Pill variant="soft" style={{ marginBottom: 16 }}>Resources · Books</Pill>
              <h1 className="h-display" style={{ fontSize: 'var(--fs-h1)', marginBottom: 16 }}>
                Go deeper — Laura’s reading list and <span className="jk-script" style={{ fontFamily: '"Cormorant Garamond"', fontWeight: 700, color: 'var(--lct-rose)' }}>authored works</span>
              </h1>
              <p className="lead">Stories and strategies for entrepreneurs building brands with courage and heart.</p>
            </div>
          </window.Container>
        </section>

        <section className="bg-card section" data-screen-label="Books by Laura">
          <window.Container>
            <window.SectionTitle title="Books by" script="Laura" />
            <div className="heart-divider" aria-hidden="true"><i className="fa-solid fa-heart"></i></div>
            <div className="grid grid-3" style={{ marginTop: 44, alignItems: 'start' }}>
              {byLaura.map(([img, t, status, b, label, href]) => (
                <div key={t} className="reveal card" style={{ textAlign: 'left' }}>
                  <img src={img} alt={`${t} — book cover`} style={{ width: '100%', borderRadius: 8, boxShadow: 'var(--shadow-md)', marginBottom: 18, display: 'block', aspectRatio: '2 / 3', objectFit: 'cover' }} />
                  <span style={{ display: 'inline-block', fontFamily: 'var(--font-subhead)', fontSize: 11.5, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 8 }}>{status}</span>
                  <h3 className="ed-serif" style={{ fontSize: '25px', marginBottom: 10 }}>{t}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--text-body)', margin: '0 0 16px' }}>{b}</p>
                  <Button href={href} variant="accent" size="small">{label}</Button>
                </div>
              ))}
            </div>
          </window.Container>
        </section>

        <section className="bg-page section" data-screen-label="Recommended reading">
          <window.Container>
            <window.SectionTitle title="Recommended" script="reading" />
            <div className="heart-divider" aria-hidden="true"><i className="fa-solid fa-heart"></i></div>
            <div className="split" style={{ marginTop: 44, maxWidth: 920, marginLeft: 'auto', marginRight: 'auto' }}>
              <div className="reveal" style={{ alignSelf: 'center', textAlign: 'center' }}>
                <img src="assets/books/rockstar-entrepreneur.jpg" alt="Rockstar Entrepreneur — book cover" style={{ width: '100%', maxWidth: 320, borderRadius: 8, boxShadow: 'var(--shadow-md)', display: 'block', margin: '0 auto' }} />
              </div>
              <div className="reveal" style={{ alignSelf: 'center' }}>
                <h3 className="ed-serif" style={{ fontSize: '30px', marginBottom: 14 }}>For entrepreneurs who want to do good</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, color: 'var(--text-body)', margin: '0 0 24px' }}>
                  A book for entrepreneurs who believe business can be a force for positive change — and who want to build something they’re proud of while making a real difference in the world.
                </p>
                <Button href="https://www.amazon.com/Rockstar-Entrepreneur-entrepreneurs-change-world/dp/1452837252" target="_blank" rel="noopener">Find on Amazon <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: 12 }}></i></Button>
              </div>
            </div>
          </window.Container>
        </section>
      </div>);
  }
  window.__pages = window.__pages || {};
  window.__pages.books = BooksPage;
})();
