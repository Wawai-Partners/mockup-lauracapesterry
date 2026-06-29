/* Laura Capes Terry — About: Laura's Story (/about/laura-story) */
(function () {
  const { Pill } = window.LauraCapesTerryDesignSystem_1d8d61;
  const para = { fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.75, color: 'var(--text-body)', margin: '0 0 16px' };

  function Chapter({ no, kicker, title, img, alt, rev, children }) {
    return (
      <div className={`split ${rev ? 'split--rev-mobile' : ''}`} style={{ alignItems: 'center' }}>
        {rev ?
        <img className="reveal" src={img} alt={alt} style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', display: 'block' }} /> : null}
        <div className="reveal">
          <p style={{ fontFamily: 'var(--font-subhead)', fontSize: 13, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-primary)', margin: '0 0 10px' }}>
            Chapter {no} · {kicker}
          </p>
          <h2 className="ed-serif" style={{ marginBottom: 16, fontSize: '28px', lineHeight: 1.15 }}>{title}</h2>
          {children}
        </div>
        {!rev ?
        <img className="reveal" src={img} alt={alt} style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', display: 'block' }} /> : null}
      </div>);

  }

  function LauraStoryPage() {
    const milestones = [
    ['Corporate marketing leadership', 'Three decades building brands and leading marketing for national companies — earning recognition for innovative, results-driven work.'],
    ['Founder, Grayson Media & Marketing', 'Trading a corporate seat for an entrepreneur\u2019s chair, Laura built a fractional CMO practice rooted in clarity, trust, and timeless principles.'],
    ['Publisher, BeLocal Georgetown', 'A curated, multi-channel media company connecting beloved local businesses with new residents — and a recipient of the Texas Downtown Association President\u2019s Award.'],
    ['Author & podcaster', 'From Rockstar Entrepreneur to The Courage to Plant a Seed, and co-hosting the Be Locally Loved and The Unbridled Creative podcasts.']];


    return (
      <div data-screen-label="Laura's Story">
        {/* Hero */}
        <section className="bg-tint section--sm" data-screen-label="Laura's Story hero">
          <window.Container>
            <div className="reveal" style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center', paddingTop: 24, paddingBottom: 24 }}>
              <Pill variant="soft" style={{ marginBottom: 16 }}>About · Laura&rsquo;s Story</Pill>
              <h1 className="h-display" style={{ fontSize: 'var(--fs-h1)', marginBottom: 16 }}>
                A story about courage, clarity, and a deep love for <span className="jk-script" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--color-primary)' }}>local business</span>
              </h1>
              <p className="lead">Thirty years of marketing taught Laura one thing above all: tools change, but trust never goes out of style. This is how a corporate marketer became Georgetown&rsquo;s steady guide for faith-filled entrepreneurs.</p>
            </div>
          </window.Container>
        </section>

        {/* Portrait band */}
        <section className="bg-card section--sm" data-screen-label="Portrait">
          <window.Container>
            <img className="reveal" src="assets/laura-office-writing.jpg" alt="Laura Capes Terry writing at her desk" style={{ width: '100%', maxHeight: 520, objectFit: 'cover', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', display: 'block' }} />
          </window.Container>
        </section>

        {/* Chapters */}
        <section className="bg-card section" data-screen-label="The journey">
          <window.Container>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 72 }}>
              <Chapter no="One" kicker="The beginning" title="It started with a love of telling the truth, beautifully" img="assets/laura-story-beginning.jpg" alt="Laura Capes Terry">
                <p style={{ ...para }}>Long before AI and algorithms, Laura learned that great marketing is really just clear, honest communication — helping good businesses be understood by the people who need them. That conviction shaped a 30-year career in marketing, media, and brand leadership.</p>
                <p style={{ ...para, margin: 0 }}>Along the way she earned national recognition for innovative work, including a Benny Award and a FAST Company cover. But the awards were never the point. The point was always the people on the other side of the message.</p>
              </Chapter>

              <Chapter no="Two" kicker="The leap" title="Choosing the entrepreneur&rsquo;s chair" img="assets/laura-all-in-with-ai.png" alt="Laura Capes Terry" rev>
                <p style={{ ...para }}>Laura knows what it&rsquo;s like to make decisions with limited time, real budgets, and real people depending on the outcome — because she does the work herself. She founded <strong>Grayson Media &amp; Marketing</strong> to bring executive-level marketing leadership to local business owners, without the agency bloat.</p>
                <p style={{ ...para, margin: 0 }}>It took courage to plant that seed. It&rsquo;s a theme she&rsquo;s returned to ever since — in her work, her writing, and the entrepreneurs she now guides.</p>
              </Chapter>

              <Chapter no="Three" kicker="The mission" title="Building a yellow brick road for her own community" img="assets/laura-story-mission.jpg" alt="Laura Capes Terry holding BeLocal Georgetown">
                <p style={{ ...para }}>As Georgetown grew, Laura saw new residents arriving every day — and trusted local businesses struggling to be seen. So she became the publisher of <strong>BeLocal Georgetown</strong>, a curated print, digital, mobile, and social ecosystem that welcomes newcomers and connects them to the best the city has to offer.</p>
                <p style={{ ...para, margin: 0 }}>It earned the Texas Downtown Association President&rsquo;s Award — but more importantly, it built relationships rooted in trust, not noise.</p>
              </Chapter>
            </div>
          </window.Container>
        </section>

        {/* Pull quote */}
        <section className="bg-dark section" data-screen-label="Belief">
          <window.Container>
            <div className="reveal" style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
              <i className="fa-solid fa-quote-left" style={{ color: 'var(--color-accent)', fontSize: 30, marginBottom: 18 }}></i>
              <p className="ed-serif" style={{ fontSize: 'var(--fs-h2)', lineHeight: 1.3, color: '#fff', margin: '0 0 18px' }}>
                AI doesn&rsquo;t replace heart — it <span style={{ color: 'var(--lct-sand)' }}>amplifies</span> it.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lead)', lineHeight: 1.65, color: 'rgba(255,255,255,0.9)', margin: 0 }}>
                Today, Laura guides faith-filled entrepreneurs in harnessing AI with wisdom, clarity, and purpose — blending modern tools with timeless wisdom so growth stays human.
              </p>
            </div>
          </window.Container>
        </section>

        {/* Milestones */}
        <section className="bg-page section" data-screen-label="Milestones">
          <window.Container>
            <window.SectionTitle title="The road" script="so far"
            sub="A few of the chapters that shaped how Laura leads, teaches, and shows up for her community." />
            <div className="heart-divider" aria-hidden="true"><i className="fa-solid fa-heart"></i></div>
            <div className="grid grid-2" style={{ marginTop: 48 }}>
              {milestones.map(([t, b], i) =>
              <div key={t} className="reveal card" style={{ textAlign: 'left' }}>
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 22, color: 'var(--color-primary)' }}>{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="ed-serif" style={{ marginBottom: 8, marginTop: 6, fontSize: '20px' }}>{t}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.65, color: 'var(--text-body)', margin: 0 }}>{b}</p>
                </div>
              )}
            </div>
            <div style={{ textAlign: 'center', marginTop: 44, display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <window.BookButton>Work With Laura</window.BookButton>
              <window.LauraCapesTerryDesignSystem_1d8d61.Button href="about.html" variant="accent">Meet Laura</window.LauraCapesTerryDesignSystem_1d8d61.Button>
            </div>
          </window.Container>
        </section>

        <window.StartConversation sub="Every business has a story worth telling clearly. Let&rsquo;s talk about yours." />
      </div>);

  }
  window.__pages = window.__pages || {};
  window.__pages.laurastory = LauraStoryPage;
})();
