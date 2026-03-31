import './style.css'

const heelQuikPage = `
  <a class="skip-link" href="#main-content">Skip to main content</a>
  <div class="page-shell prospect-shell">
    <header class="site-header">
      <a class="brand" href="/" aria-label="Corevia home">
        <span class="brand-mark" aria-hidden="true">C</span>
        <span class="brand-text">Corevia</span>
      </a>
      <nav class="site-nav" aria-label="Prospect page">
        <a href="#audit">Audit</a>
        <a href="#outreach">Outreach</a>
        <a href="#offer">Offer</a>
      </nav>
      <a class="button button-secondary header-cta" href="mailto:info@getcorevia.us?subject=Heel%20Quik%20Growth%20Plan" aria-label="Email Corevia about Heel Quik">
        Request This Plan
      </a>
    </header>

    <main id="main-content" tabindex="-1">
      <section class="hero section prospect-hero" id="top" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow">Prospect snapshot · Heel Quik · Atlanta, GA</p>
          <h1 id="hero-title">A sharper growth page for Heel Quik, built to turn local traffic into calls and walk-ins.</h1>
          <p class="hero-text">
            This page packages the core opportunities for Heel Quik into one clean prospect view: quick site audit,
            outreach angle, and a conversion-focused offer tailored for a local shoe and leather repair business.
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="#offer" aria-label="Jump to the proposed offer">View the Offer</a>
            <a class="button button-secondary" href="https://heel-quik-shoe-repair.pages.dev" target="_blank" rel="noreferrer" aria-label="Open the Heel Quik website in a new tab">Visit Current Site</a>
          </div>
          <ul class="hero-points" aria-label="Growth focus areas">
            <li>More calls</li>
            <li>More walk-ins</li>
            <li>Better local visibility</li>
          </ul>
        </div>

        <aside class="hero-card" aria-labelledby="focus-areas-title">
          <h2 class="card-heading" id="focus-areas-title">Business details</h2>
          <div class="metric-card">
            <span class="metric-title">Business</span>
            <strong>Heel Quik</strong>
            <p>Fine shoe and leather repair positioned around craftsmanship, convenience, and trusted local service.</p>
          </div>
          <div class="metric-card">
            <span class="metric-title">Location</span>
            <strong>Atlanta, GA</strong>
            <p>Inside Lenox Square, which creates a strong local convenience angle for nearby and mall traffic.</p>
          </div>
          <div class="metric-card">
            <span class="metric-title">Website</span>
            <strong>Current live site</strong>
            <p><a class="inline-link" href="https://heel-quik-shoe-repair.pages.dev" target="_blank" rel="noreferrer">heel-quik-shoe-repair.pages.dev</a></p>
          </div>
        </aside>
      </section>

      <section class="section intro" aria-labelledby="intro-title">
        <div class="section-heading">
          <p class="eyebrow">Positioning</p>
          <h2 id="intro-title">A local service business with a clear value prop and obvious conversion upside.</h2>
        </div>
        <p class="section-copy intro-copy">
          Heel Quik is already positioned around quality repair, convenience, and in-store trust. The fastest wins are not
          about reinventing the brand — they are about making the website clearer, more conversion-focused, and more visible
          for high-intent Atlanta search traffic.
        </p>
      </section>

      <section class="section" id="audit" aria-labelledby="audit-title">
        <div class="section-heading">
          <p class="eyebrow">Website audit</p>
          <h2 id="audit-title">What is working, what is weak, and what should get fixed first.</h2>
        </div>
        <div class="service-grid prospect-grid">
          <article class="service-card" aria-labelledby="working-title">
            <h3 id="working-title">What’s working</h3>
            <ul class="bullet-list compact-list">
              <li>Clear local positioning around Atlanta and Lenox Square</li>
              <li>Strong service coverage across shoes, boots, leather, and restoration</li>
              <li>Trust-oriented copy centered on craftsmanship and quality</li>
              <li>Phone number and walk-in messaging are easy to find</li>
            </ul>
          </article>
          <article class="service-card" aria-labelledby="issues-title">
            <h3 id="issues-title">What needs attention</h3>
            <ul class="bullet-list compact-list">
              <li>Sitemap still points to an old Netlify domain instead of the active site</li>
              <li>Homepage copy is polished but too dense for fast local visitors</li>
              <li>Primary CTAs could push harder toward call, directions, and in-store visits</li>
              <li>Trust signals need stronger proof like review counts, ratings, and photos</li>
            </ul>
          </article>
          <article class="service-card" aria-labelledby="seo-title">
            <h3 id="seo-title">SEO opportunity</h3>
            <p>
              Heel Quik has a natural chance to compete for high-intent local searches such as shoe repair Atlanta,
              heel repair Atlanta, leather repair Atlanta, and shoe repair near Lenox Square. The current site can be
              tightened to support those terms more directly.
            </p>
          </article>
          <article class="service-card" aria-labelledby="fixes-title">
            <h3 id="fixes-title">Best immediate fixes</h3>
            <ul class="bullet-list compact-list">
              <li>Update sitemap and technical SEO references</li>
              <li>Clarify the hero message for speed, services, and location</li>
              <li>Add stronger CTA buttons for call and directions</li>
              <li>Layer in reviews, before-and-after proof, and local trust signals</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="section split-section" id="outreach" aria-labelledby="outreach-title">
        <div class="section-heading split-copy">
          <p class="eyebrow">Outreach angle</p>
          <h2 id="outreach-title">Lead with practical wins, not a fluffy redesign pitch.</h2>
          <p class="section-copy">
            The strongest message for this business is simple: more calls, more walk-ins, and better visibility in local
            search. That framing keeps the conversation tied to outcomes instead of aesthetics.
          </p>
        </div>
        <div class="quote-card">
          <p class="quote-label">Suggested outreach</p>
          <blockquote>
            Hey — I took a look at Heel Quik’s website. The foundation is solid, but there are a few easy wins that could
            help convert more Atlanta visitors into calls and walk-ins. A few things stood out: stronger mobile CTA placement,
            clearer quote intent flow, better local SEO targeting, and stronger trust-building elements. Nothing massive —
            just practical improvements that could make the site work harder for the business.
          </blockquote>
        </div>
      </section>

      <section class="section two-column" id="offer" aria-labelledby="offer-title">
        <div>
          <div class="section-heading">
            <p class="eyebrow">Offer</p>
            <h2 id="offer-title">Local conversion + SEO tune-up for Heel Quik.</h2>
          </div>
          <p class="section-copy">
            The goal is to turn the current site from mostly informational into something more conversion-focused for local
            customers who are ready to call, visit, or request help.
          </p>
          <ul class="bullet-list">
            <li>Tighten homepage messaging and conversion flow</li>
            <li>Improve mobile CTA visibility and action paths</li>
            <li>Strengthen local SEO targeting for Atlanta and Lenox Square intent</li>
            <li>Add trust and proof elements that support premium repair positioning</li>
            <li>Clean up technical SEO issues like sitemap/domain consistency</li>
          </ul>
        </div>
        <div>
          <div class="section-heading">
            <p class="eyebrow">Expected outcome</p>
            <h2 id="outcome-title">A site that helps win more local business.</h2>
          </div>
          <ul class="bullet-list" aria-labelledby="outcome-title">
            <li>More high-intent visitors turning into calls</li>
            <li>More direction clicks and walk-in visits</li>
            <li>Better visibility in local search</li>
            <li>Stronger credibility for premium shoe and leather repair work</li>
            <li>A cleaner path from discovery to action</li>
          </ul>
        </div>
      </section>

      <section class="section cta-section" aria-labelledby="contact-title">
        <div class="cta-copy">
          <p class="eyebrow">Next step</p>
          <h2 id="contact-title">Turn this into a conversion-focused local growth page.</h2>
          <p class="section-copy">
            This prospect page is designed to make the opportunity obvious at a glance. From here, the next move would be
            implementation: homepage messaging, local SEO, CTA improvement, and trust positioning.
          </p>
        </div>
        <address class="contact-card">
          <a class="button button-primary button-wide" href="mailto:info@getcorevia.us?subject=Heel%20Quik%20Growth%20Plan" aria-label="Email Corevia about the Heel Quik plan">
            Request This Plan
          </a>
          <a class="button button-secondary button-wide" href="/" aria-label="Return to the Corevia homepage">
            Back to Corevia
          </a>
          <p class="contact-note">Built as a prospect page inside the Corevia dev environment.</p>
        </address>
      </section>
    </main>

    <footer class="site-footer">
      <div>
        <span class="brand-mark small" aria-hidden="true">C</span>
        <span class="footer-brand">Corevia</span>
      </div>
      <p>Prospect page for Heel Quik · Atlanta, GA</p>
      <a class="footer-link" href="https://heel-quik-shoe-repair.pages.dev" target="_blank" rel="noreferrer">Visit current Heel Quik site</a>
    </footer>
  </div>
`

const homePage = `
  <a class="skip-link" href="#main-content">Skip to main content</a>
  <div class="page-shell">
    <header class="site-header">
      <a class="brand" href="#top" aria-label="Corevia home">
        <span class="brand-mark" aria-hidden="true">C</span>
        <span class="brand-text">Corevia</span>
      </a>
      <nav class="site-nav" aria-label="Primary">
        <a href="#services">Services</a>
        <a href="#why-it-matters">Why It Matters</a>
        <a href="#contact">Contact</a>
      </nav>
      <a class="button button-secondary header-cta" href="#contact" aria-label="Jump to contact section">
        Get in Touch
      </a>
    </header>

    <main id="main-content" tabindex="-1">
      <section class="hero section" id="top" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow">AI-powered digital growth for small businesses</p>
          <h1 id="hero-title">Improve your website, grow your visibility, and show up where customers search — including AI.</h1>
          <p class="hero-text">
            Corevia helps small businesses improve their digital presence with AI-powered solutions for websites, SEO,
            digital commerce, and visibility across both search engines and emerging AI platforms.
          </p>
          <div class="hero-actions">
            <a class="button button-primary" href="#contact" aria-label="Jump to contact section to book a call">Book a Call</a>
            <a class="button button-secondary" href="mailto:info@getcorevia.us?subject=Corevia%20Inquiry" aria-label="Email Corevia at info@getcorevia.us">Get in Touch</a>
          </div>
          <ul class="hero-points" aria-label="Corevia benefits">
            <li>Website optimization</li>
            <li>SEO and search visibility</li>
            <li>AI chat and discovery readiness</li>
          </ul>
        </div>

        <aside class="hero-card" aria-labelledby="focus-areas-title">
          <h2 class="card-heading" id="focus-areas-title">What Corevia helps improve</h2>
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

      <section class="section intro" aria-labelledby="intro-title">
        <div class="section-heading">
          <p class="eyebrow">A smarter digital partner for growing businesses</p>
          <h2 id="intro-title">Modern systems, practical AI, and a digital presence built to perform.</h2>
        </div>
        <p class="section-copy intro-copy">
          Small businesses need more than a website — they need a digital presence that helps customers find them,
          trust them, and take action. Corevia uses AI and modern technology to improve websites, strengthen SEO,
          support digital commerce, and position businesses to be discovered in the next generation of search experiences.
        </p>
      </section>

      <section class="section" id="services" aria-labelledby="services-title">
        <div class="section-heading">
          <p class="eyebrow">Services</p>
          <h2 id="services-title">What Corevia helps you improve</h2>
        </div>
        <div class="service-grid">
          <article class="service-card" aria-labelledby="service-website-title">
            <h3 id="service-website-title">Website Optimization</h3>
            <p>
              Improve website structure, messaging, performance, and user experience so your business looks credible,
              converts better, and supports growth.
            </p>
          </article>
          <article class="service-card" aria-labelledby="service-seo-title">
            <h3 id="service-seo-title">SEO & Search Visibility</h3>
            <p>
              Help your business rank more effectively in traditional search through stronger content, site structure,
              metadata, and optimization strategy.
            </p>
          </article>
          <article class="service-card" aria-labelledby="service-ai-title">
            <h3 id="service-ai-title">AI Search & Chat Visibility</h3>
            <p>
              Prepare your business for the future of discovery by improving how it appears in AI-powered search tools,
              chat experiences, and recommendation environments.
            </p>
          </article>
          <article class="service-card" aria-labelledby="service-commerce-title">
            <h3 id="service-commerce-title">Digital Commerce Support</h3>
            <p>
              Strengthen the digital side of selling with clearer offers, better customer flow, and conversion-focused
              online experiences.
            </p>
          </article>
        </div>
      </section>

      <section class="section split-section" id="why-it-matters" aria-labelledby="why-it-matters-title">
        <div class="section-heading split-copy">
          <p class="eyebrow">Why it matters</p>
          <h2 id="why-it-matters-title">Search is changing. Your business should be ready.</h2>
          <p class="section-copy">
            Customers are no longer only finding businesses through traditional search engines. They’re increasingly
            discovering products, services, and recommendations through AI-powered tools and chat interfaces. Corevia
            helps small businesses stay visible in both worlds — today’s search landscape and tomorrow’s AI-driven
            discovery.
          </p>
        </div>
        <ol class="insight-panel" aria-label="Three reasons this matters">
          <li class="insight-item">
            <span class="insight-number" aria-hidden="true">01</span>
            <p>Improve the quality and clarity of your website so customers trust what they find.</p>
          </li>
          <li class="insight-item">
            <span class="insight-number" aria-hidden="true">02</span>
            <p>Strengthen how your business appears in search with better structure and content.</p>
          </li>
          <li class="insight-item">
            <span class="insight-number" aria-hidden="true">03</span>
            <p>Make your business easier for AI systems to surface, understand, and recommend.</p>
          </li>
        </ol>
      </section>

      <section class="section two-column" aria-labelledby="why-corevia-title">
        <div>
          <div class="section-heading">
            <p class="eyebrow">Why Corevia</p>
            <h2 id="why-corevia-title">Practical AI, not hype.</h2>
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
            <h2 id="who-we-work-with-title">Built for businesses that want to grow without added complexity.</h2>
          </div>
          <ul class="bullet-list" aria-labelledby="who-we-work-with-title">
            <li>Your website feels outdated or underperforming</li>
            <li>Your business isn’t showing up well in search</li>
            <li>You want better visibility online but aren’t sure where to start</li>
            <li>You want to understand how AI is changing customer discovery</li>
            <li>You need practical digital improvements, not vague consulting</li>
          </ul>
        </div>
      </section>

      <section class="section cta-section" id="contact" aria-labelledby="contact-title">
        <div class="cta-copy">
          <p class="eyebrow">Contact</p>
          <h2 id="contact-title">Let’s make your business easier to find — and easier to choose.</h2>
          <p class="section-copy">
            Whether you want to improve your website, strengthen SEO, or prepare your business for AI-driven discovery,
            Corevia can help you take the next step.
          </p>
        </div>
        <address class="contact-card">
          <a class="button button-primary button-wide" href="mailto:info@getcorevia.us?subject=Corevia%20Inquiry" aria-label="Email Corevia to book a call">
            Book a Call
          </a>
          <a class="button button-secondary button-wide" href="mailto:info@getcorevia.us?subject=Corevia%20Inquiry" aria-label="Email Corevia for more information">
            Get in Touch
          </a>
          <p class="contact-note">Or email directly at <a href="mailto:info@getcorevia.us">info@getcorevia.us</a></p>
        </address>
      </section>
    </main>

    <footer class="site-footer">
      <div>
        <span class="brand-mark small" aria-hidden="true">C</span>
        <span class="footer-brand">Corevia</span>
      </div>
      <p>AI-powered digital growth for small businesses.</p>
      <a class="footer-link" href="mailto:info@getcorevia.us?subject=Corevia%20Inquiry">Contact Corevia</a>
    </footer>
  </div>
`

const isHeelQuikPage = window.location.pathname.replace(/\/$/, '') === '/heel-quik'

document.querySelector('#app').innerHTML = isHeelQuikPage ? heelQuikPage : homePage
