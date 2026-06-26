/* Laura Capes Terry — How I Help: Education & Inspiration (/education-inspiration) */
(function () {
  const { Pill, Button } = window.LauraCapesTerryDesignSystem_1d8d61;
  const para = { fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, color: 'var(--text-body)', margin: '0 0 16px' };

  function PlatformLink({ icon, label, href }) {
    return (
      <a href={href} target="_blank" rel="noopener" style={{ display: 'inline-flex', alignItems: 'center', gap: 9, padding: '9px 16px', borderRadius: 999, border: '1px solid var(--border-strong)', textDecoration: 'none', fontFamily: 'var(--font-subhead)', fontWeight: 600, fontSize: 13.5, color: 'var(--color-primary)', background: 'var(--surface-card)' }}>
        <i className={icon} aria-hidden="true"></i>{label}
      </a>);

  }

  function ShowCard({ title, host, desc, cover, coverFit, slotId, mainHref, links }) {
    return (
      <div className="reveal card" style={{ textAlign: 'left', padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div style={{ aspectRatio: '16 / 9', background: 'var(--lct-navy)' }}>
          {slotId ?
          <image-slot id={slotId} shape="rect" fit="cover" placeholder="Drop the podcast cover art" style={{ display: 'block', width: '100%', height: '100%' }}></image-slot> :
          <img src={cover} alt={`${title} cover`} style={{ width: '100%', height: '100%', objectFit: coverFit || 'cover', background: '#fff', display: 'block' }} />}
        </div>
        <div style={{ padding: 28, display: 'flex', flexDirection: 'column', flex: 1 }}>
          <p style={{ fontFamily: 'var(--font-subhead)', fontSize: 12, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-primary)', margin: '0 0 6px' }}>{host}</p>
          <h3 className="ed-serif" style={{ fontSize: '21px', marginBottom: 10 }}>{title}</h3>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.65, color: 'var(--text-body)', margin: '0 0 20px' }}>{desc}</p>
          <p style={{ fontFamily: 'var(--font-subhead)', fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', margin: '0 0 12px' }}>Listen on</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 22 }}>
            {links.map((l) => <PlatformLink key={l.label} {...l} />)}
          </div>
          <div style={{ marginTop: 'auto' }}>
            <Button href={mainHref} target={mainHref.startsWith('http') ? '_blank' : undefined} rel={mainHref.startsWith('http') ? 'noopener' : undefined} variant="accent" size="small">Explore the show</Button>
          </div>
        </div>
      </div>);

  }

  function EducationPage() {
    return (
      <div data-screen-label="Education & Inspiration">
        {/* Hero */}
        <section className="bg-tint section--sm" data-screen-label="Education hero">
          <window.Container>
            <div className="reveal" style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center', paddingTop: 24, paddingBottom: 24 }}>
              <Pill variant="soft" style={{ marginBottom: 16 }}>How I Help · Education &amp; Inspiration</Pill>
              <h1 className="h-display" style={{ fontSize: 'var(--fs-h1)', marginBottom: 16 }}>
                Learning that leaves you <span className="jk-script" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--color-primary)' }}>inspired</span>
              </h1>
              <p className="lead">Laura believes the best marketing comes from clarity, courage, and connection. Through her podcasts, she shares the conversations, stories, and ideas that help local business owners grow — and remember why they started.</p>
            </div>
          </window.Container>
        </section>

        {/* Podcasting */}
        <section className="bg-card section" data-screen-label="Podcasting">
          <window.Container>
            <window.SectionTitle title="" script="Podcasting"
            sub="Two shows, one belief — that thriving communities are built on trust, creativity, and showing up well." />
            <div className="heart-divider" aria-hidden="true"><i className="fa-solid fa-heart"></i></div>
            <div className="grid grid-2" style={{ marginTop: 48 }}>
              <ShowCard
                title="Be Locally Loved Podcast"
                host="Hosted by Laura Capes Terry"
                desc="Spotlighting beloved local businesses, community leaders, and creative connectors who are building stronger communities through trust, connection, and serving others well."
                cover="assets/be-locally-loved-thumb.png"
                coverFit="contain"
                mainHref="podcast.html"
                links={[
                  { icon: 'fa-brands fa-apple', label: 'Apple', href: 'https://podcasts.apple.com/us/podcast/be-locally-loved/id1877734623' },
                  { icon: 'fa-brands fa-spotify', label: 'Spotify', href: 'https://open.spotify.com/show/0Udm3hNFpfE5xTQ8pX1j76' },
                  { icon: 'fa-brands fa-youtube', label: 'YouTube', href: 'https://www.youtube.com/@BeLocallyLoved' }]
                } />
              <ShowCard
                title="The Unbridled Creative Podcast"
                host="Co-hosted by Laura Capes Terry"
                desc="Honest conversations on creativity, courage, and building a meaningful business in a noisy, AI-driven world — for the entrepreneur who refuses to lose their voice."
                slotId="unbridled-cover"
                mainHref="https://theunbridledcreative.com/"
                links={[
                  { icon: 'fa-brands fa-apple', label: 'Apple', href: 'https://podcasts.apple.com/us/podcast/the-unbridled-creative-podcast/id1851005801' },
                  { icon: 'fa-brands fa-spotify', label: 'Spotify', href: 'https://open.spotify.com/show/46yq7TDKXnGsc5ZSjMgEto' },
                  { icon: 'fa-brands fa-youtube', label: 'YouTube', href: 'https://www.youtube.com/channel/UCmataK4SiM0uZ44Kxm0N6QA' }]
                } />
            </div>
          </window.Container>
        </section>

        {/* CTA */}
        <section className="bg-dark section" data-screen-label="CTA">
          <window.Container>
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto' }}>
              <h2 className="h-display" style={{ fontSize: 'var(--fs-h2)', color: '#fff', marginBottom: 14 }}>Never miss an episode</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lead)', lineHeight: 1.6, color: 'rgba(255,255,255,0.92)', margin: '0 0 28px' }}>
                Follow along for new conversations, practical insights, and inspiring stories from Georgetown and beyond.
              </p>
              <Button href="https://www.youtube.com/@BeLocallyLoved" target="_blank" rel="noopener" variant="accent" style={{ background: '#fff' }} size="large">Subscribe on YouTube <i className="fa-brands fa-youtube"></i></Button>
            </div>
          </window.Container>
        </section>
      </div>);

  }
  window.__pages = window.__pages || {};
  window.__pages.education = EducationPage;
})();
