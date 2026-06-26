/* Laura Capes Terry — Podcast (Be Locally Loved)
   Layout adapted from the Goal Digger podcast page rhythm (name-behind-photo
   hero → teal intro band → host intro w/ stats → latest episodes grid →
   cross-show CTA), carrying Laura's "Be Locally Loved" content. */
(function () {
  const { Button, Pill } = window.LauraCapesTerryDesignSystem_1d8d61;
  const FEED = 'https://app.kajabi.com/podcasts/2148067790/feed';

  function EpisodeCard({ n, title, date, len, desc }) {
    return (
      <div className="ep-card">
        <h3 className="ed-serif ep-card__title">{n} — {title}</h3>
        <p className="ep-card__date">{date}</p>
        <div className="ep-player">
          <img className="ep-player__art" src="assets/be-locally-loved-cover.jpg" alt="Be Locally Loved" />
          <div className="ep-player__body">
            <div className="ep-player__label">Be Locally Loved</div>
            <div className="ep-player__name">{n} — {title}</div>
            <div className="ep-player__bar">
              <button className="ep-player__play" aria-label={`Play episode ${n}`}><i className="fa-solid fa-play"></i></button>
              <span className="ep-player__time">0:00</span>
              <span className="ep-player__track"><span></span></span>
              <span className="ep-player__time">{len}</span>
            </div>
          </div>
        </div>
        <p className="ep-card__desc">{desc}</p>
        <Button variant="accent" size="small" href={FEED} target="_blank" rel="noopener">View Episode</Button>
      </div>);

  }

  const EPISODES = [
  ['018', 'Behind the Message: How Georgetown Builds Trust, Connection, and Community Through Communication', 'June 17, 2026', '44 min',
  'How clear, consistent communication builds the trust that turns a Georgetown business into a true community staple.'],
  ['017', 'Building Belonging: How Alison Scovie and Jason Evers Helmlich Are Helping Communities Thrive Through Connection', 'June 3, 2026', '47 min',
  'Alison Scovie and Jason Evers Helmlich on creating spaces where people genuinely belong — and why connection is the real growth strategy.'],
  ['016', 'Building Community From the Inside Out with Cat Phelps of the Georgetown Family YMCA', 'May 20, 2026', '42 min',
  'Cat Phelps of the Georgetown Family YMCA on building community from the inside out, one relationship at a time.'],
  ['015', 'How Marketing Works (Part 4 of 4): Marketing is a System, Not a Campaign', 'May 13, 2026', '31 min',
  'The finale of the marketing series: why marketing is a system you build, not a campaign you launch.'],
  ['014', 'How Marketing Works (Part 3 of 4) — The Real ROI of Marketing and Why Most Businesses Measure It Wrong', 'May 6, 2026', '34 min',
  'Most businesses measure marketing ROI wrong. Here’s the real way to think about return — and the long game it requires.'],
  ['013', 'How Marketing Works (Part 2 of 4): The Timeline of Marketing and Why People Quit Too Early', 'April 29, 2026', '33 min',
  'Marketing works on a timeline — and most people quit right before it pays off. Why patience is a strategy.'],
  ['012', 'How Marketing Works (Part 1 of 4): Why “More Leads” is the Wrong First Goal', 'April 22, 2026', '30 min',
  '“More leads” feels like the goal, but it’s usually the wrong first goal. What to focus on instead.'],
  ['011', 'The Power of Moments: How to Elevate Customer Experience Inspired by Disney', 'April 15, 2026', '36 min',
  'Lessons from Disney on designing moments that elevate the customer experience and make people feel genuinely cared for.'],
  ['010', 'Tori Clark — How Faith, Risk, and Surrender Shaped an Award-Winning Entrepreneur', 'April 8, 2026', '49 min',
  'Award-winning entrepreneur Tori Clark on how faith, risk, and surrender shaped her path in business.'],
  ['009', 'The Silent Threat to Every Beloved Local Brand', 'April 1, 2026', '28 min',
  'The quiet threat that erodes even the most beloved local brands — and how to protect against it.'],
  ['008', 'How Marketing Works (Overview): Reframing ROI, Trust, and What Actually Drives Growth', 'March 25, 2026', '35 min',
  'An overview of the marketing series: reframing ROI, trust, and what actually drives sustainable growth.'],
  ['007', 'How to Use AI Without Losing Your Voice', 'March 18, 2026', '32 min',
  'A grounded approach to using AI in your marketing without losing the voice that makes you, you.']];


  const STATS = [
  ['18+', 'Episodes & counting'],
  ['Weekly', 'New conversations'],
  ['Video + Audio', 'Listen anywhere']];


  function PodcastPage() {
    const [expanded, setExpanded] = React.useState(false);
    const [modalOpen, setModalOpen] = React.useState(false);
    const VISIBLE = 4;
    const shown = expanded ? EPISODES : EPISODES.slice(0, VISIBLE);
    return (
      <div className="home-jk">
        {/* Teal intro band — cover + subscribe */}
        <section className="bg-dark section" data-screen-label="The show" style={{ backgroundColor: "rgb(140, 199, 214)" }}>
          <div className="container pod-intro">
            <div className="reveal pod-intro__cover">
              <img src="assets/be-locally-loved-cover.jpg" alt="Be Locally Loved podcast cover" />
            </div>
            <div className="reveal">
              <h2 className="jk-h jk-h--md jk-on-dark" style={{ color: "var(--lct-navy)" }}>Be Locally <span className="jk-script jk-script--sky" style={{ color: "var(--color-primary)" }}>Loved</span></h2>
              <p className="pod-intro__host" style={{ color: "rgb(58, 61, 64)" }}>Hosted by: Laura Capes Terry</p>
              <p className="pod-intro__lead" style={{ color: "rgb(58, 61, 64)" }}>
                Hosted by Laura Capes Terry, Be Locally Loved spotlights beloved local businesses, community
                leaders, creative connectors who are building stronger communities through trust, connection,
                and serving others well. At…
              </p>
              <button type="button" className="pod-readmore" onClick={() => setModalOpen(true)}>Read More</button>
              <div className="pod-intro__btns">
                <a className="pod-icon" href={FEED} target="_blank" rel="noopener" aria-label="Apple Podcasts"><i className="fa-brands fa-apple" style={{ color: "var(--lct-navy)" }}></i></a>
                <a className="pod-icon" href={FEED} target="_blank" rel="noopener" aria-label="Spotify"><i className="fa-brands fa-spotify" style={{ color: "var(--lct-navy)" }}></i></a>
                <a className="pod-icon" href={FEED} target="_blank" rel="noopener" aria-label="Subscribe via RSS"><i className="fa-solid fa-rss" style={{ color: "var(--lct-navy)" }}></i></a>
              </div>
            </div>
          </div>
        </section>

        {/* Latest episodes */}
        <section className="bg-page section" data-screen-label="Latest episodes">
          <window.Container>
            <div className="jk-head reveal">
              <h2 className="jk-h jk-h--md">Latest <span className="jk-script">Episodes</span></h2>
              <p className="jk-head__lead">New conversations with the people building stronger, more connected communities.</p>
            </div>
            <div className="ep-list ep-list--grid">
              {shown.map((e) =>
              <EpisodeCard key={e[0]} n={e[0]} title={e[1]} date={e[2]} len={e[3]} desc={e[4]} />
              )}
            </div>
            {!expanded && EPISODES.length > VISIBLE &&
            <div className="reveal" style={{ textAlign: 'center', marginTop: 44 }}>
              <Button onClick={() => setExpanded(true)} size="large">View More Episodes</Button>
            </div>
            }
          </window.Container>
        </section>

        {modalOpen &&
        <div className="pod-modal" role="dialog" aria-modal="true" aria-label="About Be Locally Loved" onClick={() => setModalOpen(false)}>
          <div className="pod-modal__card" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="pod-modal__close" aria-label="Close" onClick={() => setModalOpen(false)}><i className="fa-solid fa-xmark"></i></button>
            <div className="pod-about">
              <h2 className="jk-h jk-h--md" style={{ textAlign: 'center' }}>Be Locally <span className="jk-script">Loved</span></h2>
              <p className="pod-about__p">
                Hosted by Laura Capes Terry, Be Locally Loved spotlights beloved local businesses, community
                leaders, creative connectors who are building stronger communities through trust, connection,
                and serving others well.
              </p>
              <p className="pod-about__p pod-about__p--em">At its core, Be Locally Loved is about connection.</p>
              <p className="pod-about__p">
                In a world where rapid growth can make communities feel more disconnected, Be Locally Loved
                shines a spotlight on the businesses, organizations, individuals, and places creating trust,
                belonging, and real human connection at the local level.
              </p>
              <p className="pod-about__p">
                Through podcast conversations, social storytelling, and local features, Be Locally Loved explores
                what it means to become known, trusted, and deeply rooted within a community — not through hype
                or self-promotion, but through service, relationships, authenticity, and showing up consistently
                over time.
              </p>
              <p className="pod-about__p">You’ll hear inspiring stories, practical insights, and thoughtful conversations about:</p>
              <ul className="pod-about__list">
                <li>Building businesses people know, love, and trust</li>
                <li>Strengthening community through relationships</li>
                <li>Helping communities grow without losing connection</li>
                <li>Leadership, visibility, and authentic marketing</li>
                <li>The hidden power of being locally loved</li>
              </ul>
              <p className="pod-about__p">
                Whether you’re a business owner, entrepreneur, community leader, creative connector, or someone
                who simply loves where they live, Be Locally Loved exists to celebrate the people and places
                making local life more connected, meaningful, and human.
              </p>
              <p className="pod-about__p pod-about__p--em">Because thriving communities don’t happen by accident.</p>
              <p className="pod-about__p">
                They happen when people choose to show up, serve well, build trust, and become locally loved.
              </p>
              <p className="pod-about__p">And we believe those stories deserve to be seen, shared, and celebrated.</p>
            </div>
          </div>
        </div>
        }
      </div>);

  }
  window.__pages = window.__pages || {};
  window.__pages.podcast = PodcastPage;
})();