/* Laura Capes Terry — About: Speaking & Writing (/about/speaking-writing) */
(function () {
  const { Pill, Button } = window.LauraCapesTerryDesignSystem_1d8d61;
  const para = { fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, color: 'var(--text-body)', margin: '0 0 16px' };

  function SpeakingWritingPage() {
    const topics = [
    ['fa-compass', 'Marketing with clarity in an AI-driven world', 'How local business owners can cut through the noise, focus on what moves the needle, and use AI intentionally — not impulsively.'],
    ['fa-heart', 'Be seen, be trusted, be chosen', 'A practical framework for building a magnetic local brand that people love and trust, grounded in timeless wisdom.'],
    ['fa-handshake', 'Trust-based marketing & referrals', 'Why relationships still outperform algorithms, and how to build a marketing rhythm that compounds over time.'],
    ['fa-seedling', 'The courage to grow', 'An encouraging keynote for entrepreneurs facing overwhelm — on planting seeds, finding your voice, and leading with conviction.']];


    const talks = [
    ['The Path to Marketing Success', 'A clear, step-by-step walk-through of the proven path from scattered tactics to steady, strategic growth.', 'https://drive.google.com/file/d/1DYMKOXXS4QfZTUbplC_RkhMJicqBrAvV/view?usp=drive_link'],
    ['AI in Marketing', 'How to harness AI with wisdom and purpose — amplifying the human voice instead of replacing it.', 'https://drive.google.com/file/d/1sUXsE0bQ-WTi7_Rw5G_H9wtjrkO5mTJ6/view?usp=drive_link'],
    ['Don\u2019t Wing It — Batch It', 'A practical workshop on building simple, repeatable content rhythms that fit real life.', 'https://drive.google.com/file/d/1pRSlM6GKFX8S1u3Uf3ZR5GODyA_TFsbX/view?usp=drive_link'],
    ['From Blank Screen to Brilliant Strategy', 'Turning the intimidating blank page into a confident, clear marketing plan.', 'https://drive.google.com/file/d/1lQgMYgtdceqeIN4nIM6InzSKPfyBn75x/view?usp=drive_link'],
    ['Navigating the Trust Recession', 'Why trust is the scarcest resource in marketing today — and how to earn it back.', 'https://drive.google.com/file/d/1QqQMBoFGRjV-sojg4o_WRtm9n_BMZh61/view?usp=drive_link']];


    const books = [
    ['books/rockstar-entrepreneur.jpg', 'Rockstar Entrepreneur', 'Available now', 'https://www.amazon.com/Rockstar-Entrepreneur-entrepreneurs-change-world/dp/1452837252'],
    ['books/courage-plant-seed.png', 'The Courage to Plant a Seed', 'Available now', 'resources-books.html'],
    ['books/courage-find-voice.png', 'The Courage to Find My Voice', 'Coming soon', 'resources-books.html'],
    ['books/be-seen-trusted-chosen.png', 'Be Seen. Be Trusted. Be Chosen.', 'Coming someday', 'resources-books.html']];


    return (
      <div data-screen-label="Speaking & Writing">
        {/* Hero */}
        <section className="bg-tint section--sm" data-screen-label="Speaking hero">
          <window.Container>
            <div className="reveal" style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center', paddingTop: 24, paddingBottom: 24 }}>
              <Pill variant="soft" style={{ marginBottom: 16 }}>About · Speaking &amp; Writing</Pill>
              <h1 className="h-display" style={{ fontSize: 'var(--fs-h1)', marginBottom: 16 }}>
                Ideas worth sharing — on the page and from the <span className="jk-script" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--color-primary)' }}>stage</span>
              </h1>
              <p className="lead">Laura speaks and writes for the overwhelmed local entrepreneur — bringing calm, clarity, and practical wisdom to marketing in a fast-moving, AI-driven world.</p>
            </div>
          </window.Container>
        </section>

        {/* Intro split */}
        <section className="bg-card section" data-screen-label="Invite Laura">
          <window.Container>
            <div className="split" style={{ alignItems: 'center' }}>
              <img className="reveal" src="assets/laura-speaking-socialproof.jpg" alt="Laura Capes Terry speaking" style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', display: 'block' }} />
              <div className="reveal">
                <h2 className="ed-serif" style={{ marginBottom: 16, fontSize: '28px', lineHeight: 1.15 }}>A speaker who leads from experience</h2>
                <p style={{ ...para }}>Laura doesn&rsquo;t teach theory — she leads from experience. As a featured BNI speaker, workshop facilitator, and podcast host, she meets audiences where they are: stretched thin, surrounded by noise, and ready for a steadier way forward.</p>
                <p style={{ ...para, margin: '0 0 24px' }}>Every talk blends modern tools with timeless wisdom, leaving business owners with clarity they can act on — not just inspiration that fades by Monday.</p>
                <Button href="contact.html">Invite Laura to Speak</Button>
              </div>
            </div>
          </window.Container>
        </section>

        {/* Speaking topics */}
        <section className="bg-page section" data-screen-label="Speaking topics">
          <window.Container>
            <window.SectionTitle title="Signature" script="topics"
            sub="Keynotes and workshops Laura tailors to an audience of local business owners and entrepreneurs." />
            <div className="heart-divider" aria-hidden="true"><i className="fa-solid fa-heart"></i></div>
            <div className="grid grid-2" style={{ marginTop: 48 }}>
              {topics.map(([ic, t, b]) =>
              <div key={t} className="reveal card" style={{ display: 'flex', gap: 20, textAlign: 'left', alignItems: 'flex-start' }}>
                  <span style={{ flex: 'none', width: 56, height: 56, borderRadius: '50%', background: 'var(--surface-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className={`fa-solid ${ic}`} style={{ color: 'var(--color-primary)', fontSize: 24 }}></i>
                  </span>
                  <div>
                    <h3 className="ed-serif" style={{ marginBottom: 8, fontSize: '20px' }}>{t}</h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.65, color: 'var(--text-body)', margin: 0 }}>{b}</p>
                  </div>
                </div>
              )}
            </div>
          </window.Container>
        </section>

        {/* Talks & workshops list */}
        <section className="bg-card section" data-screen-label="Talks & workshops">
          <window.Container>
            <window.SectionTitle title="Recent talks &amp;" script="workshops"
            sub="A sampling of sessions Laura has delivered — available to watch or bring to a group." />
            <div className="heart-divider" aria-hidden="true"><i className="fa-solid fa-heart"></i></div>
            <div className="reveal" style={{ maxWidth: 860, margin: '40px auto 0', display: 'flex', flexDirection: 'column', gap: 0 }}>
              {talks.map(([t, b, href], i) =>
              <a key={t} href={href} target="_blank" rel="noopener" style={{ display: 'flex', gap: 20, alignItems: 'flex-start', padding: '22px 4px', borderTop: i === 0 ? '1px solid var(--border-subtle)' : 'none', borderBottom: '1px solid var(--border-subtle)', textDecoration: 'none', color: 'inherit' }}>
                  <i className="fa-solid fa-play" style={{ color: 'var(--color-primary)', fontSize: 16, marginTop: 6, flex: 'none' }}></i>
                  <div style={{ flex: 1 }}>
                    <h3 className="ed-serif" style={{ marginBottom: 4, fontSize: '18px' }}>{t}</h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-body)', margin: 0 }}>{b}</p>
                  </div>
                  <i className="fa-solid fa-arrow-right" style={{ color: 'var(--color-primary)', fontSize: 14, marginTop: 8, flex: 'none' }}></i>
                </a>
              )}
            </div>
          </window.Container>
        </section>

        {/* Books / writing */}
        <section className="bg-tint section" data-screen-label="Books">
          <window.Container>
            <window.SectionTitle title="Books &amp;" script="writing"
            sub="Laura writes the same way she speaks — warm, honest, and rooted in the courage it takes to build something that matters." />
            <div className="heart-divider" aria-hidden="true"><i className="fa-solid fa-heart"></i></div>
            <div className="grid grid-4" style={{ marginTop: 48 }}>
              {books.map(([img, t, tag, href]) => {
                const ext = href.startsWith('http');
                return (
                  <a key={t} className="reveal card" href={href} target={ext ? '_blank' : undefined} rel={ext ? 'noopener' : undefined} style={{ textAlign: 'center', textDecoration: 'none', color: 'inherit', padding: 20 }}>
                    <img src={`assets/${img}`} alt={t} style={{ width: '100%', maxWidth: 180, margin: '0 auto 16px', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-sm)', display: 'block' }} />
                    <p style={{ fontFamily: 'var(--font-subhead)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-primary)', margin: '0 0 6px' }}>{tag}</p>
                    <h3 className="ed-serif" style={{ fontSize: '16px', margin: 0, lineHeight: 1.25 }}>{t}</h3>
                  </a>);

              })}
            </div>
            <div style={{ textAlign: 'center', marginTop: 44 }}>
              <Button href="blog.html" variant="accent">Read Laura&rsquo;s articles</Button>
            </div>
          </window.Container>
        </section>

        <window.StartConversation sub="Looking for a speaker who brings clarity and heart to an audience? Let&rsquo;s talk." />
      </div>);

  }
  window.__pages = window.__pages || {};
  window.__pages.speaking = SpeakingWritingPage;
})();
