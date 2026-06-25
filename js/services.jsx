/* Laura Capes Terry — Services */
(function () {
  const { Button, Input, Pill } = window.LauraCapesTerryDesignSystem_1d8d61;

  function ServiceCard({ icon, title, tag, body, footer }) {
    return (
      <div className="reveal card" style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
          <window.SunIcon icon={icon} size={64} />
          <div>
            <h3 className="h-display" style={{ fontSize: 'var(--fs-h3)', marginTop: 4 }}>{title}</h3>
          </div>
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.65, color: 'var(--text-body)', margin: '0 0 16px', flex: 1 }}>{body}</p>
        {footer}
      </div>
    );
  }

  function ServicesPage() {
    const toast = window.useToast();
    const { BookButton } = window;
    return (
      <div>
        {/* Hero */}
        <section className="bg-dark section--sm" style={{ position: 'relative' }}>
          <window.Container>
            <div className="reveal" style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center', paddingTop: 28, paddingBottom: 28 }}>
              <Pill style={{ marginBottom: 18 }}>Services</Pill>
              <h1 className="h-display" style={{ fontSize: 'var(--fs-h1)', color: '#fff', marginBottom: 16 }}>
                Experienced marketing leadership, on your terms
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lead)', lineHeight: 1.6, color: 'rgba(255,255,255,0.92)', margin: 0 }}>
                Whether you’re ready to <strong>integrate AI into your marketing</strong>, clarify your message, or <strong>strengthen your local visibility</strong>, Laura meets you where you are — one strategic step at a time.
              </p>
            </div>
          </window.Container>
        </section>

        {/* Core services */}
        <section className="bg-page section">
          <window.Container>
            <window.SectionTitle overline="How Laura Helps" title="Ways to work together"
              sub="Every engagement is built on clarity and leadership — and tailored to where your business is now." />
            <div className="heart-divider" aria-hidden="true"><i className="fa-solid fa-heart"></i></div>
            <div className="grid grid-2" style={{ marginTop: 48 }}>
              <ServiceCard icon="fa-wand-magic-sparkles" tag="Clarity & AI" title="AI Strategy Sessions"
                body="A private, 90-minute strategic session to bring clarity to your marketing and confidence to your next decisions — especially in an AI-driven landscape. Together you’ll look at what’s working, what’s not, and where AI can actually help, without adding noise or losing your voice."
                footer={<BookButton size="small">Book a session</BookButton>} />
              <ServiceCard icon="fa-compass" tag="Ongoing Leadership" title="Fractional Marketing Leadership"
                body="Ongoing executive-level marketing leadership for business owners who want clarity, consistency, and momentum — without hiring a full-time CMO. Laura clarifies your message, guides strategic decisions, integrates AI wisely, and builds a marketing approach that supports long-term growth."
                footer={<BookButton size="small">Discuss a partnership</BookButton>} />
              <ServiceCard icon="fa-microphone-lines" tag="Training & Speaking" title="Workshops & Speaking"
                body="Keynotes and custom trainings focused on building brands with heart in the age of AI. Laura speaks to entrepreneurs, leadership teams, and organizations about clarity, confidence, trust-based marketing, and navigating AI without losing human connection."
                footer={<BookButton size="small">Invite Laura to speak</BookButton>} />
              <ServiceCard icon="fa-newspaper" tag="Local Media" title="BeLocal Georgetown"
                body="A trusted, multi-media marketing system that connects beloved local businesses with new homeowners at the exact moment they’re forming new habits and relationships — a yellow brick road for newcomers to the best Georgetown has to offer."
                footer={<Button size="small" href="belocal.html">Explore BeLocal</Button>} />
              <ServiceCard icon="fa-video" tag="Podcast & Community" title="The Unbridled Creative"
                body="A faith-centered video podcast and membership community for entrepreneurs, leaders, and creatives who sense they’re called to build differently — without fear, burnout, or striving. Where courage meets calling."
                footer={<Button size="small" href="https://theunbridledcreative.com/" target="_blank" rel="noopener">Visit the show</Button>} />
              <ServiceCard icon="fa-heart" tag="Podcast" title="Be Locally Loved"
                body="A limited-edition video podcast capturing the real, often unseen impact of BeLocal in communities across the country — preserving the story of a proactive, community-building system that welcomes new residents and strengthens local businesses."
                footer={<Button size="small" href="podcast.html">Listen now</Button>} />
            </div>
          </window.Container>
        </section>

        {/* Contact band */}
        <window.StartConversation sub="Not sure which path is right? Tell Laura where you are, and she’ll recommend a smart next step." />
      </div>
    );
  }
  window.__pages = window.__pages || {};
  window.__pages.services = ServicesPage;
})();
