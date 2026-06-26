/* Laura Capes Terry — Resources: Videos (/resources/videos) */
(function () {
  const { Button, Pill } = window.LauraCapesTerryDesignSystem_1d8d61;

  const videos = [
    ['BNI Featured Speaker Presentation', 'Laura delivers her signature presentation to BNI Georgetown — covering local marketing essentials, trust-building strategies, and the power of community connection.', 'https://www.youtube.com/watch?v=TVNhz8bQdjI', 'Watch on YouTube', 'assets/videos/bni-featured-speaker.jpg'],
    ['BNI Member Testimonials', 'Georgetown business owners share their experiences working with Laura — and the impact of her marketing guidance on their businesses.', 'https://www.youtube.com/watch?v=plaGFgImBPk', 'Watch on YouTube', 'assets/videos/bni-testimonials.jpg'],
    ['Teach ChatGPT to Sound Like You', 'A hands-on tutorial showing local business owners exactly how to train ChatGPT to write in their authentic voice — so AI-assisted content sounds like you.', 'https://drive.google.com/file/d/1tjgM5hZQigpMgeipVA6tHj01QsXXhtU-/view?usp=drive_link', 'Watch tutorial', 'assets/videos/teach-chatgpt.png']];

  function VideosPage() {
    return (
      <div data-screen-label="Resources — Videos">
        <section className="bg-dark section--sm" data-screen-label="Videos hero">
          <window.Container>
            <div className="reveal" style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center', paddingTop: 30, paddingBottom: 10 }}>
              <Pill style={{ marginBottom: 18 }}>Resources · Videos</Pill>
              <h1 className="h-display" style={{ fontSize: 'var(--fs-h1)', color: '#fff', marginBottom: 16 }}>See Laura in action</h1>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lead)', lineHeight: 1.6, color: 'rgba(255,255,255,0.92)', margin: 0 }}>
                From BNI presentations to hands-on AI tutorials — a closer look at how Laura teaches, speaks, and helps local business owners transform their marketing.
              </p>
            </div>
          </window.Container>
        </section>

        <section className="bg-page section" data-screen-label="Featured videos">
          <window.Container>
            <window.SectionTitle title="Featured" script="videos" />
            <div className="heart-divider" aria-hidden="true"><i className="fa-solid fa-heart"></i></div>
            <div className="grid grid-3" style={{ marginTop: 44 }}>
              {videos.map(([t, b, href, label, thumb]) => (
                <a key={t} className="reveal card" href={href} target="_blank" rel="noopener" style={{ textAlign: 'left', textDecoration: 'none', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ position: 'relative', borderRadius: 10, overflow: 'hidden', aspectRatio: '16 / 9', background: 'var(--lct-navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                    <img src={thumb} alt={t} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                    <span style={{ position: 'absolute', inset: 0, background: 'rgba(20,59,90,0.22)' }}></span>
                    <span style={{ position: 'relative', width: 58, height: 58, borderRadius: '50%', background: 'rgba(255,255,255,0.92)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 20px rgba(20,59,90,0.35)' }}>
                      <i className="fa-solid fa-play" style={{ color: 'var(--color-primary)', fontSize: 20, marginLeft: 4 }}></i>
                    </span>
                  </div>
                  <h3 className="ed-serif" style={{ fontSize: '20px', marginBottom: 8 }}>{t}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-body)', margin: 0 }}>{b}</p>
                  <span style={{ marginTop: 14, color: 'var(--color-primary)', fontSize: 13, fontWeight: 700, fontFamily: 'var(--font-body)' }}>{label}<i className="fa-solid fa-arrow-up-right-from-square" style={{ marginLeft: 7, fontSize: 11, color: 'var(--color-accent)' }}></i></span>
                </a>
              ))}
            </div>
          </window.Container>
        </section>

        <section className="bg-dark section">
          <window.Container>
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto' }}>
              <h2 className="h-display" style={{ fontSize: 'var(--fs-h2)', color: '#fff', marginBottom: 14 }}>More to come</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lead)', lineHeight: 1.6, color: 'rgba(255,255,255,0.92)', margin: '0 0 28px' }}>
                Podcast clips, workshop highlights, and client success stories are on the way. Subscribe to follow along.
              </p>
              <Button href="https://www.youtube.com/@BeLocallyLoved" target="_blank" rel="noopener" variant="accent" style={{ background: '#fff' }} size="large">Subscribe on YouTube <i className="fa-brands fa-youtube"></i></Button>
            </div>
          </window.Container>
        </section>
      </div>);
  }
  window.__pages = window.__pages || {};
  window.__pages.videos = VideosPage;
})();
