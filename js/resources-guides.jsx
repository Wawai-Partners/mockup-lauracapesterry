/* Laura Capes Terry — Resources: Guides & Downloads (/resources/guides) */
(function () {
  const { Button, Pill } = window.LauraCapesTerryDesignSystem_1d8d61;

  const free = [
    ['Building Better Websites: Six Success Tips', 'Free · Website', 'Is a website losing customers because visitors can\u2019t tell what the business does or what to do next? Six homepage fixes — plus optional AI prompts to implement them faster.', 'https://drive.google.com/file/d/1rVWqwn3h2nMXmiMCjAl_nrQLUq5_al9r/view?usp=drive_link'],
    ['The Ultimate ChatGPT Prompt for Local Business', 'Free · AI', 'Stop generic AI output. Teach ChatGPT to write in a brand’s voice, for its audience, with its business context — so content sounds human, not robotic.', 'https://drive.google.com/file/d/1VgOIwupLGPjjCxyW5NleRn1l1xDzcG1C/view?usp=drive_link'],
    ['\u201CCATCH\u201D Attention on Social Media', 'Free · Social', 'A simple five-step framework for creating social content that stops the scroll and starts conversations — built for local business owners.', 'https://drive.google.com/file/d/1QU1UHXJMALm6WwbShjqHtvS5mcq7ymEO/view?usp=drive_link'],
    ['Building a Sustainable Business', 'Free · Growth', 'Tactics are temporary; sustainability is strategic. Think beyond the next campaign and build a business that grows consistently over time.', 'https://drive.google.com/file/d/1Z2CMq6s7mlUHX67_EB56SuL1o11SVQ80/view?usp=drive_link'],
    ['54 Ways to Get Noticed', 'Free · Visibility', 'A comprehensive idea list for increasing local visibility — digital, print, community, and word-of-mouth. A brainstorm tool and a checklist.', 'https://drive.google.com/file/d/1GLEtPE0k2VBz8eNVaWFdyzYtZURvQcGb/view?usp=drive_link'],
    ['The Voice Blueprint', 'Free · Branding', 'A business’s marketing should sound like the business — not every other company in its industry. Define a brand voice so everything feels consistent and human.', 'https://drive.google.com/file/d/1Qgp2iiPO5O7Ps5ujPaUHCnCkquWpMpH2/view?usp=drive_link'],
    ['12 Secrets to Great Ad Design', 'Free · Advertising', 'Great ads aren\u2019t just pretty — they work. The 12 design and messaging principles behind ads that get noticed, build trust, and drive action.', 'https://drive.google.com/file/d/1CBTvm-sDA7-0l5NFOOYaivKdn5dUxUH9/view?usp=drive_link'],
    ['Meet Your AI Co-Pilot', 'Free · AI', 'A practical handout for partnering with AI as a trusted co-pilot — gaining clarity, building confidence, overcoming excuses, and taking real steps toward the dream or message a business owner feels called to bring to life.', 'assets/guides/meet-your-ai-co-pilot.pdf']];

  const sponsor = [
    ['Website Checklist for BeLocal Sponsors', 'Sponsor resource', 'Before a BeLocal ad sends people to a site — make sure it\u2019s ready to convert. Everything a sponsor needs to maximize their investment.', 'belocal-checklist.html'],
    ['Advertising: The Key to Sustainable Growth', 'Sponsor resource', 'Why advertising still matters — and how to do it in a way that builds long-term brand equity, not just short-term clicks.', 'https://drive.google.com/file/d/1BlKo7PzZXrSk-no2hq8pWlSnLbcj9zVU/view?usp=drive_link'],
    ['5 Steps to Creating a Great Ad', 'Sponsor resource', 'A step-by-step framework for ads that represent a brand well, communicate clearly, and motivate action.', 'https://drive.google.com/file/d/1DEwKfFXPQUboTLJb6rlI6DVk1HB-k8nr/view?usp=drive_link']];

  function Tile({ name, meta, blurb, href, label }) {
    const ext = href.startsWith('http');
    return (
      <a className="res-tile reveal" href={href} target={ext ? '_blank' : undefined} rel="noopener" style={{ minHeight: 200 }}>
        <span className="res-tile__meta">{meta}</span>
        <span className="res-tile__name">{name}</span>
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, lineHeight: 1.55, color: 'var(--text-body)', margin: '8px 0 0', display: 'block' }}>{blurb}</span>
        <span style={{ marginTop: 'auto', paddingTop: 12, color: 'var(--color-primary)', fontSize: 13, fontWeight: 700, fontFamily: 'var(--font-body)' }}>
          {label}<i className="fa-solid fa-arrow-down" style={{ marginLeft: 7, fontSize: 11, color: 'var(--color-accent)' }}></i>
        </span>
      </a>);
  }

  function GuidesPage() {
    return (
      <div data-screen-label="Resources — Guides">
        <section className="bg-dark section--sm" data-screen-label="Guides hero">
          <window.Container>
            <div className="reveal" style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center', paddingTop: 30, paddingBottom: 10 }}>
              <Pill style={{ marginBottom: 18 }}>Resources · Guides</Pill>
              <h1 className="h-display" style={{ fontSize: 'var(--fs-h1)', color: '#fff', marginBottom: 16 }}>
                Practical marketing resources — free from Laura’s desk
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lead)', lineHeight: 1.6, color: 'rgba(255,255,255,0.92)', margin: 0 }}>
                Guides, checklists, and frameworks built to give Georgetown business owners real, actionable tools — without the overwhelm.
              </p>
            </div>
          </window.Container>
        </section>

        <section className="bg-page section" data-screen-label="Free guides">
          <window.Container>
            <window.SectionTitle title="Free" script="guides"
              sub="Short, no-fluff downloads that help business owners market smarter — most read in under five minutes." />
            <div className="heart-divider" aria-hidden="true"><i className="fa-solid fa-heart"></i></div>
            <div className="grid grid-3" style={{ gap: 18, marginTop: 44 }}>
              {free.map((g) => <Tile key={g[0]} name={g[0]} meta={g[1]} blurb={g[2]} href={g[3]} label="Download free" />)}
            </div>
          </window.Container>
        </section>

        <section className="bg-card section" data-screen-label="BeLocal sponsor resources">
          <window.Container>
            <window.SectionTitle title="BeLocal sponsor" script="resources"
              sub="Tools to help BeLocal sponsors get the most from their investment." />
            <div className="heart-divider" aria-hidden="true"><i className="fa-solid fa-heart"></i></div>
            <div className="grid grid-3" style={{ gap: 18, marginTop: 44 }}>
              {sponsor.map((g) => <Tile key={g[0]} name={g[0]} meta={g[1]} blurb={g[2]} href={g[3]} label="Download" />)}
            </div>
          </window.Container>
        </section>

        <section className="bg-tint section">
          <window.Container>
            <div className="reveal" style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto' }}>
              <h2 className="h-display" style={{ fontSize: 'var(--fs-h2)', marginBottom: 14 }}>Want help applying these?</h2>
              <p className="lead" style={{ margin: '0 auto 26px' }}>Tell Laura the biggest challenge and she’ll point to the right next step.</p>
              <Button href="start-here.html" size="large">Start Here</Button>
            </div>
          </window.Container>
        </section>
      </div>);
  }
  window.__pages = window.__pages || {};
  window.__pages.guides = GuidesPage;
})();
