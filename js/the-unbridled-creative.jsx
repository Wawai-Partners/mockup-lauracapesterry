/* Laura Capes Terry — The Unbridled Creative (podcast co-hosted with Trent Soles)
   Mirrors the Be Locally Loved podcast page rhythm (teal intro band → latest
   episodes grid → "who is an unbridled creative" → meet the hosts → CTA),
   carrying the live theunbridledcreative.com / Apple Podcasts content. */
(function () {
  const { Button, Pill } = window.LauraCapesTerryDesignSystem_1d8d61;

  const SHOW = 'https://podcasts.apple.com/us/podcast/the-unbridled-creative-podcast/id1851005801';
  const SPOTIFY = 'https://open.spotify.com/show/46yq7TDKXnGsc5ZSjMgEto';
  const YOUTUBE = 'https://youtube.com/@TheUnbridledCreativePodcast';
  const SITE = 'https://theunbridledcreative.com/';
  const COVER = 'https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/06/bc/49/06bc49fa-8a55-398f-6a5b-11eacc7394e8/mza_14271718186543736044.jpeg/1200x1200bf-60.jpg';

  function EpisodeCard({ n, title, date, len, desc }) {
    return (
      <div className="ep-card">
        <h3 className="ed-serif ep-card__title">{title}</h3>
        <p className="ep-card__date">{date} · {len}</p>
        <div className="ep-player">
          <img className="ep-player__art" src={COVER} alt="The Unbridled Creative Podcast" />
          <div className="ep-player__body">
            <div className="ep-player__label">The Unbridled Creative</div>
            <div className="ep-player__name">{title}</div>
            <div className="ep-player__bar">
              <button className="ep-player__play" aria-label={`Play: ${title}`}><i className="fa-solid fa-play"></i></button>
              <span className="ep-player__time">0:00</span>
              <span className="ep-player__track"><span></span></span>
              <span className="ep-player__time">{len}</span>
            </div>
          </div>
        </div>
        <p className="ep-card__desc">{desc}</p>
        <Button variant="accent" size="small" href={SHOW} target="_blank" rel="noopener">View Episode</Button>
      </div>);

  }

  const EPISODES = [
  ['Revealing the Hidden Pain in Babies: A New Approach to Lifelong Health', 'May 12', '1h 8m',
  'Author Ken Moench on his book Every Baby Hurts — how hidden, early-life tension shapes lifelong health, and the gentle invitation to seek the wholeness God intended.'],
  ['Don’t Judge the Cover: From Tech CEO to Faith-Led Publisher with Lisa Marie Garcia', 'May 5', '1h 6m',
  'Former tech CEO Lisa Marie Garcia traces a winding road from control to surrender — and what it looks like to step into a calling without a perfect plan.'],
  ['How Marketing Works: Marketing Is a System, Not a Campaign', 'Apr 28', '13 min',
  'The finale of the marketing series — moving from scattered, reactive efforts to a steady system that builds real momentum over time.'],
  ['What to Measure in Your Marketing: Redefining ROI as Return on Impact', 'Apr 21', '26 min',
  'Why measuring only sales misses the quiet work beneath the surface — and how to shift from return on investment to return on impact.'],
  ['The Timeline of Marketing and Why People Quit Too Early', 'Apr 14', '18 min',
  'Marketing isn’t instant — it’s a process of planting, watering, and trusting. Why most people quit right before it pays off.'],
  ['Why More Leads Is the Wrong First Goal', 'Apr 7', '22 min',
  'Chasing leads without clarity stalls growth. A reset on awareness, connection, and trust — and serving the right people first.'],
  ['The Power of Moments: How to Elevate Customer Experience Inspired by Disney', 'Mar 31', '43 min',
  'Lessons from Disney on designing memorable moments — elevation, insight, pride, and connection — that make people feel genuinely cared for.'],
  ['Marketing Isn’t Magic: Reframing ROI, Trust, and What Actually Drives Growth', 'Mar 24', '25 min',
  'Pulling back the curtain on what marketing really is — awareness and trust built over time, a faith walk of showing up consistently.']];


  const PILLARS = [
  ['fa-mountain-sun', 'Renew your mindset', 'Lead with peace and clarity instead of fear, burnout, or comparison.'],
  ['fa-compass', 'Align your strategy', 'Build a business strategy rooted in your values, your faith, and your calling.'],
  ['fa-heart', 'Market with heart', 'Communicate your message in a way that’s authentic, ethical, and effective.']];


  function UnbridledPage() {
    const [expanded, setExpanded] = React.useState(false);
    const [modalOpen, setModalOpen] = React.useState(false);
    const VISIBLE = 4;
    const shown = expanded ? EPISODES : EPISODES.slice(0, VISIBLE);
    return (
      <div className="home-jk">
        {/* Teal intro band — cover + subscribe */}
        <section className="bg-dark section" data-screen-label="The show" style={{ backgroundColor: 'rgb(140, 199, 214)' }}>
          <div className="container pod-intro">
            <div className="reveal pod-intro__cover">
              <img src={COVER} alt="The Unbridled Creative Podcast cover" />
            </div>
            <div className="reveal">
              <h2 className="jk-h jk-h--md jk-on-dark" style={{ color: 'var(--lct-navy)' }}>The Unbridled <span className="jk-script jk-script--sky" style={{ color: 'var(--color-primary)' }}>Creative</span></h2>
              <p className="pod-intro__host" style={{ color: 'rgb(58, 61, 64)' }}>Hosted by: Laura Capes Terry &amp; Trent Soles</p>
              <p className="pod-intro__lead" style={{ color: 'rgb(58, 61, 64)' }}>
                Where courage meets calling. A podcast for faith-filled entrepreneurs who believe true freedom
                comes from aligning passion with purpose — blending real stories, timeless truth, and practical
                wisdom to help people build a thriving business without losing their faith, purpose, or peace. At…
              </p>
              <button type="button" className="pod-readmore" onClick={() => setModalOpen(true)}>Read More</button>
              <div className="pod-intro__btns">
                <a className="pod-icon" href={SHOW} target="_blank" rel="noopener" aria-label="Apple Podcasts"><i className="fa-brands fa-apple" style={{ color: 'var(--lct-navy)' }}></i></a>
                <a className="pod-icon" href={SPOTIFY} target="_blank" rel="noopener" aria-label="Spotify"><i className="fa-brands fa-spotify" style={{ color: 'var(--lct-navy)' }}></i></a>
                <a className="pod-icon" href={YOUTUBE} target="_blank" rel="noopener" aria-label="YouTube"><i className="fa-brands fa-youtube" style={{ color: 'var(--lct-navy)' }}></i></a>
                <a className="pod-icon" href={SITE} target="_blank" rel="noopener" aria-label="Show website"><i className="fa-solid fa-globe" style={{ color: 'var(--lct-navy)' }}></i></a>
              </div>
            </div>
          </div>
        </section>

        {/* Our focus — three pillars */}
        <section className="bg-page section" data-screen-label="Our focus">
          <window.Container>
            <div className="jk-head reveal">
              <h2 className="jk-h jk-h--md">Be bold. Break free. <span className="jk-script">Live unbridled.</span></h2>
              <p className="jk-head__lead">
                The Unbridled Creative doesn’t just talk about business — it talks about the beliefs that drive it.
                Because how you think determines how you build, and how you market reveals what you believe.
              </p>
            </div>
            <div className="grid grid-3" style={{ marginTop: 44 }}>
              {PILLARS.map(([ic, t, b]) => (
                <div key={t} className="reveal card" style={{ textAlign: 'center' }}>
                  <window.SunIcon icon={ic} size={84} />
                  <h3 className="ed-serif" style={{ fontSize: 21, margin: '16px 0 8px' }}>{t}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--text-body)', margin: 0 }}>{b}</p>
                </div>
              ))}
            </div>
          </window.Container>
        </section>

        {/* Latest episodes */}
        <section className="bg-tint section" data-screen-label="Latest episodes">
          <window.Container>
            <div className="jk-head reveal">
              <h2 className="jk-h jk-h--md">Latest <span className="jk-script">Episodes</span></h2>
              <p className="jk-head__lead">Real God-stories from faith-filled entrepreneurs, paired with practical takeaways to grow your faith, your business, and your life.</p>
            </div>
            <div className="ep-list ep-list--grid">
              {shown.map((e) =>
              <EpisodeCard key={e[0]} title={e[0]} date={e[1]} len={e[2]} desc={e[3]} />
              )}
            </div>
            <div className="reveal" style={{ textAlign: 'center', marginTop: 44 }}>
              {!expanded && EPISODES.length > VISIBLE ?
              <Button onClick={() => setExpanded(true)} size="large">View More Episodes</Button> :
              <Button href={SHOW} target="_blank" rel="noopener" size="large">See All Episodes</Button>
              }
            </div>
          </window.Container>
        </section>

        {/* Who is an unbridled creative */}
        <section className="bg-dark section" data-screen-label="Who is an Unbridled Creative">
          <window.Container>
            <div className="reveal" style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
              <Pill style={{ marginBottom: 18 }}>The movement</Pill>
              <h2 className="h-display" style={{ fontSize: 'var(--fs-h2)', color: '#fff', marginBottom: 18 }}>Who is an Unbridled Creative?</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lead)', lineHeight: 1.7, color: 'rgba(255,255,255,0.92)', margin: '0 0 16px' }}>
                A dreamer, doer, and difference-maker who senses there’s more — more purpose, more freedom, more of
                God’s plan waiting to be lived out through their work, creativity, and everyday choices.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16.5, lineHeight: 1.7, color: 'rgba(255,255,255,0.82)', margin: 0 }}>
                They’ve chosen to jump the fence — to break free from fear, burnout, and perfectionism, and pursue the
                life and calling God uniquely designed for them. They live boldly, create fearlessly, and lead with peace.
              </p>
            </div>
          </window.Container>
        </section>

        {/* Meet the hosts */}
        <section className="bg-page section" data-screen-label="Meet the hosts">
          <window.Container>
            <div className="jk-head reveal">
              <h2 className="jk-h jk-h--md">Meet the <span className="jk-script">Hosts</span></h2>
            </div>
            <div className="grid grid-2" style={{ marginTop: 44, gap: 40 }}>
              <div className="reveal" style={{ display: 'flex', gap: 22, alignItems: 'flex-start' }}>
                <img src="assets/laura-candid.jpg" alt="Laura Capes Terry" style={{ flex: 'none', width: 132, height: 132, borderRadius: '50%', objectFit: 'cover', boxShadow: 'var(--shadow-sm)' }} />
                <div>
                  <h3 className="ed-serif" style={{ fontSize: 23, marginBottom: 4 }}>Laura Capes Terry</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13.5, letterSpacing: '0.04em', color: 'var(--color-primary)', margin: '0 0 12px', textTransform: 'uppercase' }}>Co-host · Marketing &amp; Media Guide</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.65, color: 'var(--text-body)', margin: 0 }}>
                    A nationally recognized marketing coach, media strategist, and founder of Grayson Media &amp; Marketing.
                    Laura helps business owners market with clarity, confidence, and connection — and believes great
                    marketing doesn’t start with a product, it starts with a story.
                  </p>
                </div>
              </div>
              <div className="reveal" style={{ display: 'flex', gap: 22, alignItems: 'flex-start' }}>
                <img src="https://assets.cdn.filesafe.space/q2Ht7ex2eJ7Qvs2FRhAP/media/68b6ddda6fff79bbb6da868d.jpeg" alt="Trent Soles" style={{ flex: 'none', width: 132, height: 132, borderRadius: '50%', objectFit: 'cover', boxShadow: 'var(--shadow-sm)' }} />
                <div>
                  <h3 className="ed-serif" style={{ fontSize: 23, marginBottom: 4 }}>Trent Soles</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13.5, letterSpacing: '0.04em', color: 'var(--color-primary)', margin: '0 0 12px', textTransform: 'uppercase' }}>Co-host · Bridge Builder &amp; Creative</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.65, color: 'var(--text-body)', margin: 0 }}>
                    Entrepreneur, artist, musician, and family man with 35+ years in branding and strategic partnerships.
                    The creative mind behind Local Lead Capture, Trent believes the most powerful growth happens when
                    people are free to run in their purpose.
                  </p>
                </div>
              </div>
            </div>
          </window.Container>
        </section>

        {/* CTA */}
        <section className="bg-tint section" data-screen-label="Listen CTA">
          <window.Container>
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto' }}>
              <h2 className="h-display" style={{ fontSize: 'var(--fs-h2)', marginBottom: 14 }}>Ready to live unbridled?</h2>
              <p className="lead" style={{ margin: '0 auto 26px' }}>Subscribe wherever you listen — new conversations to help faith-driven entrepreneurs create with purpose, market with integrity, and lead with peace.</p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
                <Button href={SHOW} target="_blank" rel="noopener" size="large">Listen on Apple</Button>
                <Button href={SPOTIFY} target="_blank" rel="noopener" variant="secondary" size="large">Listen on Spotify</Button>
              </div>
            </div>
          </window.Container>
        </section>

        {modalOpen &&
        <div className="pod-modal" role="dialog" aria-modal="true" aria-label="About The Unbridled Creative" onClick={() => setModalOpen(false)}>
          <div className="pod-modal__card" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="pod-modal__close" aria-label="Close" onClick={() => setModalOpen(false)}><i className="fa-solid fa-xmark"></i></button>
            <div className="pod-about">
              <h2 className="jk-h jk-h--md" style={{ textAlign: 'center' }}>The Unbridled <span className="jk-script">Creative</span></h2>
              <p className="pod-about__p">
                Hosted by Laura Capes Terry and Trent Soles, The Unbridled Creative exists to tell real, raw, and
                redemptive stories of people who have broken free — from corporate jobs, fears, limiting beliefs,
                physical limitations, time constraints, or financial barriers.
              </p>
              <p className="pod-about__p pod-about__p--em">Where courage meets calling.</p>
              <p className="pod-about__p">
                These are the Unbridled Creatives — people who once felt fenced in, but chose courage, faith, and
                clarity to leap into a life they designed on their own terms. The podcast is equal parts inspiration
                and action, blending faith and practical business wisdom.
              </p>
              <p className="pod-about__p">Each episode delivers:</p>
              <ul className="pod-about__list">
                <li>Stories of breakthrough — trading constraint for creativity and fear for freedom</li>
                <li>Faith-fueled encouragement — reminders that your calling is real and your gifts matter</li>
                <li>Practical guidance — strategies in marketing, media, and the entrepreneurial mindset</li>
                <li>The Break Free Blueprint — a simple, actionable reflection at the end of every episode</li>
              </ul>
              <p className="pod-about__p">
                Whether someone is sitting at a desk dreaming of something more, or has already taken their first steps
                into freedom, The Unbridled Creative exists to inspire, empower, and equip them to jump the fence and
                run unbridled toward the life they were made for.
              </p>
              <p className="pod-about__p pod-about__p--em">Be bold. Break free. Live unbridled.</p>
            </div>
          </div>
        </div>
        }
      </div>);

  }
  window.__pages = window.__pages || {};
  window.__pages.unbridled = UnbridledPage;
})();
