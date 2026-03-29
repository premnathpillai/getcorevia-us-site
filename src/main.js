import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="page-shell">
    <header class="site-header">
      <a class="brand" href="#top" aria-label="Corevia home">
        <span class="brand-mark">C</span>
        <span class="brand-text">Corevia</span>
      </a>
      <nav class="site-nav" aria-label="Primary">
        <a href="#services">Services</a>
        <a href="#why-it-matters">Why It Matters</a>
        <a href="#contact">Contact</a>
      </nav>
      <a class="button button-secondary header-cta" href="#contact">Get in Touch</a>
    </header>

    <main id="top">
      <section class="hero section">
        <div class="hero-copy">
          <p class="eyebrow">AI-powered digital growth for small businesses</p>
          <h1>Improve your website, grow your visibility, and show up where customers search — including AI.</h1>
          <p class="hero-text">
            Corevia helps small businesses improve their digital presence with AI-powered solutions for websites, SEO,
            digital commerce, and visibility across both search engines and emerging AI platforms.
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="#contact">Book a Call</a>
            <a class="button button-secondary" href="mailto:info@getcorevia.us">Get in Touch</a>
          </div>
          <ul class="hero-points" aria-label="Corevia benefits">
            <li>Website optimization</li>
            <li>SEO and search visibility</li>
            <li>AI chat and discovery readiness</li>
          </ul>
        </div>

        <aside class="hero-card" aria-label="Corevia focus areas">
          <p class="card-label">What Corevia helps improve</p>
          <div class="metric-card">
            <span class="metric-title">Digital Presence</span>
            <strong>Sharper websites</strong>
            <p>Improve structure, messaging, performance, and credibility.</p>
          </div>
          <div class="metric-card">
            <span class="metric-title">Search Visibility</span>
            <strong>Better discovery</strong>
            <p>Show up more effectively in traditional search and AI-driven answers.</p>
          </div>
          <div class="metric-card">
            <span class="metric-title">Digital Commerce</span>
            <strong>Smarter conversion paths</strong>
            <p>Create clearer online customer journeys that support leads and sales.</p>
          </div>
        </aside>
      </section>

      <section class="section intro">
        <div class="section-heading">
          <p class="eyebrow">A smarter digital partner for growing businesses</p>
          <h2>Modern systems, practical AI, and a digital presence built to perform.</h2>
        </div>
        <p class="section-copy intro-copy">
          Small businesses need more than a website — they need a digital presence that helps customers find them,
          trust them, and take action. Corevia uses AI and modern technology to improve websites, strengthen SEO,
          support digital commerce, and position businesses to be discovered in the next generation of search experiences.
        </p>
      </section>

      <section class="section" id="services">
        <div class="section-heading">
          <p class="eyebrow">Services</p>
          <h2>What Corevia helps you improve</h2>
        </div>
        <div class="service-grid">
          <article class="service-card">
            <h3>Website Optimization</h3>
            <p>
              Improve website structure, messaging, performance, and user experience so your business looks credible,
              converts better, and supports growth.
            </p>
          </article>
          <article class="service-card">
            <h3>SEO & Search Visibility</h3>
            <p>
              Help your business rank more effectively in traditional search through stronger content, site structure,
              metadata, and optimization strategy.
            </p>
          </article>
          <article class="service-card">
            <h3>AI Search & Chat Visibility</h3>
            <p>
              Prepare your business for the future of discovery by improving how it appears in AI-powered search tools,
              chat experiences, and recommendation environments.
            </p>
          </article>
          <article class="service-card">
            <h3>Digital Commerce Support</h3>
            <p>
              Strengthen the digital side of selling with clearer offers, better customer flow, and conversion-focused
              online experiences.
            </p>
          </article>
        </div>
      </section>

      <section class="section split-section" id="why-it-matters">
        <div class="section-heading split-copy">
          <p class="eyebrow">Why it matters</p>
          <h2>Search is changing. Your business should be ready.</h2>
          <p class="section-copy">
            Customers are no longer only finding businesses through traditional search engines. They’re increasingly
            discovering products, services, and recommendations through AI-powered tools and chat interfaces. Corevia
            helps small businesses stay visible in both worlds — today’s search landscape and tomorrow’s AI-driven
            discovery.
          </p>
        </div>
        <div class="insight-panel">
          <div class="insight-item">
            <span class="insight-number">01</span>
            <p>Improve the quality and clarity of your website so customers trust what they find.</p>
          </div>
          <div class="insight-item">
            <span class="insight-number">02</span>
            <p>Strengthen how your business appears in search with better structure and content.</p>
          </div>
          <div class="insight-item">
            <span class="insight-number">03</span>
            <p>Make your business easier for AI systems to surface, understand, and recommend.</p>
          </div>
        </div>
      </section>

      <section class="section two-column">
        <div>
          <div class="section-heading">
            <p class="eyebrow">Why Corevia</p>
            <h2>Practical AI, not hype.</h2>
          </div>
          <ul class="bullet-list">
            <li>Modern digital strategy with real business value</li>
            <li>Clear improvements to websites, search visibility, and customer discovery</li>
            <li>Built for small businesses, not enterprise complexity</li>
            <li>Focused on growth, clarity, and long-term digital relevance</li>
          </ul>
        </div>
        <div>
          <div class="section-heading">
            <p class="eyebrow">Who we work with</p>
            <h2>Built for businesses that want to grow without added complexity.</h2>
          </div>
          <ul class="bullet-list">
            <li>Your website feels outdated or underperforming</li>
            <li>Your business isn’t showing up well in search</li>
            <li>You want better visibility online but aren’t sure where to start</li>
            <li>You want to understand how AI is changing customer discovery</li>
            <li>You need practical digital improvements, not vague consulting</li>
          </ul>
        </div>
      </section>

      <section class="section cta-section" id="contact">
        <div class="cta-copy">
          <p class="eyebrow">Contact</p>
          <h2>Let’s make your business easier to find — and easier to choose.</h2>
          <p class="section-copy">
            Whether you want to improve your website, strengthen SEO, or prepare your business for AI-driven discovery,
            Corevia can help you take the next step.
          </p>
        </div>
        <div class="contact-card">
          <a class="button button-primary button-wide" href="mailto:info@getcorevia.us?subject=Corevia%20Inquiry">
            Book a Call
          </a>
          <a class="button button-secondary button-wide" href="mailto:info@getcorevia.us">
            Get in Touch
          </a>
          <p class="contact-note">Or email directly at <a href="mailto:info@getcorevia.us">info@getcorevia.us</a></p>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div>
        <span class="brand-mark small">C</span>
        <span class="footer-brand">Corevia</span>
      </div>
      <p>AI-powered digital growth for small businesses.</p>
    </footer>
  </div>
`
