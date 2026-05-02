import SiteScripts from "@/components/SiteScripts";

export default function Home() {
  return (
    <>
      {/* Decorative page glow background */}
      <div className="page-glow page-glow-left" aria-hidden="true"></div>
      <div className="page-glow page-glow-right" aria-hidden="true"></div>

      {/* Main site wrapper */}
      <div className="site-shell">
        {/* Header / Navigation */}
        <header className="site-header" id="top">
          <a href="#top" className="brand" aria-label="Kavi home">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M12 3.4 20.6 12 12 20.6 3.4 12 12 3.4Z"></path>
                <path d="M12 7.2 16.8 12 12 16.8 7.2 12 12 7.2Z"></path>
              </svg>
            </span>
            <span className="brand-name">Kavi</span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#how-it-works">How it Works</a>
            <a href="#features">Features</a>
            <a href="#use-cases">Use Cases</a>
            <a href="#pricing">Pricing</a>
            <a href="#blog">Blog</a>
          </nav>

          <div className="header-actions">
            <a href="#cta" className="btn btn-primary btn-small">Get Started</a>
            <button className="menu-toggle" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          <nav className="mobile-nav" id="mobile-menu" aria-label="Mobile navigation">
            <a href="#how-it-works">How it Works</a>
            <a href="#features">Features</a>
            <a href="#use-cases">Use Cases</a>
            <a href="#pricing">Pricing</a>
            <a href="#blog">Blog</a>
            <a href="#cta" className="btn btn-primary btn-full">Get Started</a>
          </nav>
        </header>

        <main>
          {/* ===================== Hero Section ===================== */}
          <section className="section hero-section reveal" id="hero">
            <div className="hero-grid">
              <div className="hero-copy">
                <p className="eyebrow">AI-powered site templates</p>
                <h1>
                  Design <span className="gradient-text">Smarter.</span><br />
                  Build Faster.
                </h1>
                <p className="lead">
                  AI-powered, high-converting site templates for fast-moving founders.
                </p>

                <div className="hero-actions">
                  <a href="#pricing" className="btn btn-primary">Get Started</a>
                  <a href="#features" className="btn btn-secondary">See in Action</a>
                </div>

                <div className="customer-row">
                  <div className="avatars" aria-label="Happy customers">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Customer avatar" loading="lazy" />
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Customer avatar" loading="lazy" />
                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Customer avatar" loading="lazy" />
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80" alt="Customer avatar" loading="lazy" />
                  </div>
                  <span><strong>100+</strong> Happy Customers</span>
                </div>
              </div>

              <div className="hero-visual" aria-hidden="true">
                <div className="ui-card ui-card-top">
                  <div className="ui-card-icon">✦</div>
                  <div>
                    <span>Background</span>
                    <span>Border</span>
                  </div>
                  <div className="swatches">
                    <span className="swatch filled"></span>
                    <span className="swatch"></span>
                  </div>
                </div>

                <div className="gradient-orb">
                  <div className="orb-core"></div>
                </div>

                <div className="floating-note note-left">
                  <span className="note-avatar"></span>
                  <div>
                    <strong>Change the theme color</strong>
                    <small>to purple #A252F3</small>
                  </div>
                </div>

                <div className="floating-note note-bottom">
                  <span className="spark">✺</span>
                  <div>
                    <strong>Changing color now...</strong>
                  </div>
                </div>

                <div className="floating-note note-right">
                  <span className="spark">✦</span>
                  <div>
                    <strong>Generating Homepage</strong>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ===================== How It Works ===================== */}
          <section className="section reveal" id="how-it-works">
            <div className="section-head two-col-head">
              <div>
                <p className="eyebrow">How it works</p>
                <h2>Launch in Minutes —<br />Not Weeks.</h2>
              </div>
              <p>
                Get your SaaS site live with zero friction. This template is designed for speed
                and simplicity, so you can focus on your product — not your website.
              </p>
            </div>

            <div className="card-grid three-up">
              <article className="feature-card gradient-outline">
                <div className="mini-ui mini-ui-type"></div>
                <h3>Remix The Template</h3>
                <p>Choose the layout that fits your vision and make it yours in a click.</p>
              </article>

              <article className="feature-card gradient-outline">
                <div className="mini-ui mini-ui-align"></div>
                <h3>Customize Instantly</h3>
                <p>Add your content, adjust styles, and tweak components — no code needed.</p>
              </article>

              <article className="feature-card gradient-outline">
                <div className="mini-ui mini-ui-publish"></div>
                <h3>Go Live</h3>
                <p>Publish with one click and start sharing your site with the world.</p>
              </article>
            </div>
          </section>

          {/* ===================== Features ===================== */}
          <section className="section reveal" id="features">
            <div className="section-head two-col-head">
              <div>
                <p className="eyebrow">Features</p>
                <h2>Everything You Need.<br />Nothing You Don't.</h2>
              </div>
              <p>
                This template comes packed with modern features and clean layouts tailored for AI
                products, dev tools, and fast-growing SaaS platforms.
              </p>
            </div>

            <div className="feature-grid">
              <article className="panel-card">
                <div className="panel-visual panel-upload"></div>
                <div className="panel-meta">✧ AI-Ready Design</div>
                <h3>Smart Layouts for smart products</h3>
                <p>Pre-built sections for AI tools and SaaS startups — just plug in your content and go live.</p>
              </article>

              <article className="panel-card">
                <div className="panel-visual panel-gauge"></div>
                <div className="panel-meta">⚡ Built for Speed</div>
                <h3>Optimized for performance</h3>
                <p>Clean structure, global styles, and fast loading ensure your site delivers a seamless experience on any device.</p>
              </article>

              <article className="panel-card">
                <div className="panel-visual panel-controls"></div>
                <div className="panel-meta">✦ Easy Customization</div>
                <h3>No-code. No compromise.</h3>
                <p>Make edits fast with reusable components and symbols — everything is structured for scalability and simplicity.</p>
              </article>

              <article className="panel-card">
                <div className="panel-visual panel-devices"></div>
                <div className="panel-meta">▣ Responsive by Default</div>
                <h3>Looks great on every screen</h3>
                <p>Fully responsive layouts ensure your site is beautiful and functional on desktop, tablet, and mobile.</p>
              </article>

              <article className="panel-card">
                <div className="panel-visual panel-structure"></div>
                <div className="panel-meta">✓ Built with Best Practices</div>
                <h3>Design meets structure</h3>
                <p>Modern UX patterns, accessibility, and semantic layers — so you impress users and search engines alike.</p>
              </article>

              <article className="panel-card">
                <div className="panel-visual panel-pages"></div>
                <div className="panel-meta">□ Ready-to-Launch Pages</div>
                <h3>Skip the setup. Ship faster.</h3>
                <p>Landing pages, pricing sections, contact forms, and more — just customize and publish in minutes.</p>
              </article>
            </div>
          </section>

          {/* ===================== Use Cases ===================== */}
          <section className="section reveal" id="use-cases">
            <div className="section-head centered-head">
              <p className="eyebrow">Use Cases</p>
              <h2>Designed for Any SaaS, Built to Convert.</h2>
              <p>
                Whether you're launching an AI tool, developer platform, or marketing service —
                this template adapts to your vision with ease.
              </p>
            </div>

            <div className="use-cases-grid">
              <div className="tab-buttons" role="tablist" aria-label="Use cases">
                <button className="tab-button active" role="tab" aria-selected="true" data-tab="ai-tools">AI Tools</button>
                <button className="tab-button" role="tab" aria-selected="false" data-tab="developer-platforms">Developer Platforms</button>
                <button className="tab-button" role="tab" aria-selected="false" data-tab="productivity-startups">Productivity Startups</button>
                <button className="tab-button" role="tab" aria-selected="false" data-tab="marketing-tools">Marketing Tools</button>
              </div>

              <div className="tab-panels">
                <article className="tab-panel active" id="ai-tools" role="tabpanel">
                  <span className="pill">AI-ready</span>
                  <h3>AI Tools</h3>
                  <p>
                    Crafted for modern AI products that need a premium landing experience with
                    clarity, trust, and fast iteration.
                  </p>
                  <ul>
                    <li>Built for speed and scale</li>
                    <li>Clean, focused layout</li>
                    <li>Smart animations</li>
                    <li>Easy customization</li>
                  </ul>
                </article>

                <article className="tab-panel" id="developer-platforms" role="tabpanel">
                  <span className="pill">Technical</span>
                  <h3>Developer Platforms</h3>
                  <p>
                    Ideal for APIs, SDK tools, infrastructure products, and platforms that need a
                    polished product-first story.
                  </p>
                  <ul>
                    <li>Documentation-friendly layout</li>
                    <li>Feature comparison patterns</li>
                    <li>Flexible pricing blocks</li>
                    <li>Clear call-to-actions</li>
                  </ul>
                </article>

                <article className="tab-panel" id="productivity-startups" role="tabpanel">
                  <span className="pill">Product-led</span>
                  <h3>Productivity Startups</h3>
                  <p>
                    Keep your message crisp and conversion-focused with layouts that spotlight real
                    workflows, time-saving benefits, and social proof.
                  </p>
                  <ul>
                    <li>Strong value proposition sections</li>
                    <li>Elegant testimonials</li>
                    <li>Streamlined onboarding message</li>
                    <li>Mobile-ready by default</li>
                  </ul>
                </article>

                <article className="tab-panel" id="marketing-tools" role="tabpanel">
                  <span className="pill">Growth</span>
                  <h3>Marketing Tools</h3>
                  <p>
                    Built for analytics, growth, CRM, and campaign products that need clean
                    positioning and high-converting visuals.
                  </p>
                  <ul>
                    <li>Conversion-driven page flow</li>
                    <li>Hero and CTA emphasis</li>
                    <li>Polished cards and badges</li>
                    <li>Easy content replacement</li>
                  </ul>
                </article>
              </div>
            </div>
          </section>

          {/* ===================== Ready-Made Pages Showcase ===================== */}
          <section className="section showcase-section reveal" id="showcase">
            <div className="showcase-inner">
              <h2>Ready-Made, Beautifully Designed Pages.</h2>
              <p className="showcase-desc">
                From landing pages to pricing and blog layouts, every page is crafted to impress
                and optimized for performance.
              </p>
              <a href="#pricing" className="btn btn-primary">Get Started</a>

              <div className="showcase-preview" aria-hidden="true">
                <div className="preview-browser">
                  <div className="browser-dots">
                    <span></span><span></span><span></span>
                  </div>
                  <div className="browser-bar"></div>
                </div>
                <div className="preview-content">
                  <div className="preview-hero-block">
                    <div className="preview-text-lines">
                      <span className="line-lg"></span>
                      <span className="line-md"></span>
                      <span className="line-sm"></span>
                    </div>
                    <div className="preview-orb-mini"></div>
                  </div>
                  <div className="preview-cards-row">
                    <div className="preview-mini-card"></div>
                    <div className="preview-mini-card"></div>
                    <div className="preview-mini-card"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ===================== Pricing ===================== */}
          <section className="section reveal" id="pricing">
            <div className="section-head centered-head pricing-head">
              <p className="eyebrow">Pricing</p>
              <h2>Affordable Plans For Everyone.</h2>
              <p>
                Get the features you need without breaking the bank. Flexible plans for solo founders,
                teams, and companies.
              </p>

              <div className="pricing-toggle" role="group" aria-label="Billing period toggle">
                <button className="toggle-option active" data-billing="monthly">Monthly</button>
                <button className="toggle-option" data-billing="yearly">Yearly <span>20% Off</span></button>
              </div>
            </div>

            <div className="pricing-grid">
              <article className="price-card">
                <span className="plan-label">STARTUP</span>
                <h3>Free</h3>
                <div className="price"><span className="currency">$</span><span className="amount" data-monthly="0" data-yearly="0">0</span><span className="term">/user/month</span></div>
                <p>For individuals getting started.</p>
                <a href="#cta" className="btn btn-secondary btn-full">Get Started</a>
                <ul>
                  <li>Access to core features</li>
                  <li>Up to 5 users included</li>
                  <li>10GB cloud storage</li>
                  <li>Standard email support</li>
                </ul>
              </article>

              <article className="price-card featured">
                <span className="badge">Most Popular</span>
                <span className="plan-label">COMMERCIAL</span>
                <h3>Premium</h3>
                <div className="price"><span className="currency">$</span><span className="amount" data-monthly="45" data-yearly="36">45</span><span className="term">/user/month</span></div>
                <p>Best for small teams and growing products.</p>
                <a href="#cta" className="btn btn-primary btn-full">Get Started</a>
                <ul>
                  <li>Everything in free</li>
                  <li>Up to 50 users</li>
                  <li>100GB cloud storage</li>
                  <li>Priority support with chat</li>
                  <li>Access to advanced integrations</li>
                </ul>
              </article>

              <article className="price-card">
                <span className="plan-label">ENTERPRISE</span>
                <h3>Platinum</h3>
                <div className="price"><span className="currency">$</span><span className="amount" data-monthly="75" data-yearly="60">75</span><span className="term">/user/month</span></div>
                <p>Designed for larger teams and companies.</p>
                <a href="#cta" className="btn btn-secondary btn-full">Get Started</a>
                <ul>
                  <li>Everything in premium</li>
                  <li>Unlimited users</li>
                  <li>Custom storage options</li>
                  <li>Dedicated account manager</li>
                </ul>
              </article>
            </div>
          </section>

          {/* ===================== Testimonials ===================== */}
          <section className="section reveal" id="testimonials">
            <div className="section-head centered-head">
              <p className="eyebrow">Testimonials</p>
              <h2>Loved by Makers and Founders Alike.</h2>
              <p>See how teams are using the template to move faster, stand out, and launch with confidence.</p>
            </div>

            <div className="testimonials-marquee">
              {/* Row 1 scrolls left */}
              <div className="marquee-track marquee-left">
                <div className="marquee-content">
                  <article className="testimonial-card">
                    <div className="testimonial-author">
                      <img src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=160&q=80" alt="John Doe" loading="lazy" />
                      <div>
                        <h4>John Doe</h4>
                        <span>Founder</span>
                      </div>
                    </div>
                    <p>Using this template has transformed our workflow! We've seen a 30% increase in project speed, and our designs have never looked better.</p>
                  </article>

                  <article className="testimonial-card">
                    <div className="testimonial-author">
                      <img src="https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=160&q=80" alt="Elon John" loading="lazy" />
                      <div>
                        <h4>Elon John</h4>
                        <span>Startup Founder</span>
                      </div>
                    </div>
                    <p>It gave us structure without boxing us in. We kept our brand intact while benefiting from a clean, high-converting flow.</p>
                  </article>

                  <article className="testimonial-card">
                    <div className="testimonial-author">
                      <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=160&q=80" alt="Rami Sam" loading="lazy" />
                      <div>
                        <h4>Rami Sam</h4>
                        <span>Founder</span>
                      </div>
                    </div>
                    <p>I launched my product page in under 48 hours. The responsiveness, spacing, and subtle animation details were all spot on.</p>
                  </article>

                  <article className="testimonial-card">
                    <div className="testimonial-author">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80" alt="Mark Sl." loading="lazy" />
                      <div>
                        <h4>Mark Sl.</h4>
                        <span>Product Lead</span>
                      </div>
                    </div>
                    <p>This design system helped us move 2x faster and present our product in the best possible light. Total game changer.</p>
                  </article>

                  <article className="testimonial-card">
                    <div className="testimonial-author">
                      <img src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=160&q=80" alt="James Hart" loading="lazy" />
                      <div>
                        <h4>James Hart</h4>
                        <span>Founder</span>
                      </div>
                    </div>
                    <p>Hands down one of the best design investments we made during our early launch. It helped our MVP look trustworthy from day one.</p>
                  </article>
                </div>
                {/* Duplicate for seamless loop */}
                <div className="marquee-content" aria-hidden="true">
                  <article className="testimonial-card">
                    <div className="testimonial-author">
                      <img src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=160&q=80" alt="John Doe" loading="lazy" />
                      <div>
                        <h4>John Doe</h4>
                        <span>Founder</span>
                      </div>
                    </div>
                    <p>Using this template has transformed our workflow! We've seen a 30% increase in project speed, and our designs have never looked better.</p>
                  </article>

                  <article className="testimonial-card">
                    <div className="testimonial-author">
                      <img src="https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=160&q=80" alt="Elon John" loading="lazy" />
                      <div>
                        <h4>Elon John</h4>
                        <span>Startup Founder</span>
                      </div>
                    </div>
                    <p>It gave us structure without boxing us in. We kept our brand intact while benefiting from a clean, high-converting flow.</p>
                  </article>

                  <article className="testimonial-card">
                    <div className="testimonial-author">
                      <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=160&q=80" alt="Rami Sam" loading="lazy" />
                      <div>
                        <h4>Rami Sam</h4>
                        <span>Founder</span>
                      </div>
                    </div>
                    <p>I launched my product page in under 48 hours. The responsiveness, spacing, and subtle animation details were all spot on.</p>
                  </article>

                  <article className="testimonial-card">
                    <div className="testimonial-author">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80" alt="Mark Sl." loading="lazy" />
                      <div>
                        <h4>Mark Sl.</h4>
                        <span>Product Lead</span>
                      </div>
                    </div>
                    <p>This design system helped us move 2x faster and present our product in the best possible light. Total game changer.</p>
                  </article>

                  <article className="testimonial-card">
                    <div className="testimonial-author">
                      <img src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=160&q=80" alt="James Hart" loading="lazy" />
                      <div>
                        <h4>James Hart</h4>
                        <span>Founder</span>
                      </div>
                    </div>
                    <p>Hands down one of the best design investments we made during our early launch. It helped our MVP look trustworthy from day one.</p>
                  </article>
                </div>
              </div>

              <div className="marquee-track marquee-right">
                <div className="marquee-content">
                  <article className="testimonial-card">
                    <div className="testimonial-author">
                      <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&q=80" alt="Chris O" loading="lazy" />
                      <div>
                        <h4>Chris O</h4>
                        <span>Founder</span>
                      </div>
                    </div>
                    <p>This template made our MVP feel like a full-scale product. We were able to showcase features, tell our story, and guide visitors through our value.</p>
                  </article>

                  <article className="testimonial-card">
                    <div className="testimonial-author">
                      <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=160&q=80" alt="Tom Nguyen" loading="lazy" />
                      <div>
                        <h4>Tom Nguyen</h4>
                        <span>CEO</span>
                      </div>
                    </div>
                    <p>We cut our build time by half. The layout is clean, flexible, and just works for SaaS.</p>
                  </article>

                  <article className="testimonial-card">
                    <div className="testimonial-author">
                      <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=160&q=80" alt="Tom Alex" loading="lazy" />
                      <div>
                        <h4>Tom Alex</h4>
                        <span>Founder</span>
                      </div>
                    </div>
                    <p>We used this template as the foundation for our pitch deck site and it helped us raise our pre-seed round. The design built instant trust.</p>
                  </article>

                  <article className="testimonial-card">
                    <div className="testimonial-author">
                      <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=160&q=80" alt="John Lee" loading="lazy" />
                      <div>
                        <h4>John Lee</h4>
                        <span>Founder</span>
                      </div>
                    </div>
                    <p>We were blown away by how easy it was to build with this. Everything felt thoughtfully designed for SaaS: conversion-focused sections, subtle animations, premium feel.</p>
                  </article>
                </div>
                {/* Duplicate for seamless loop */}
                <div className="marquee-content" aria-hidden="true">
                  <article className="testimonial-card">
                    <div className="testimonial-author">
                      <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&q=80" alt="Chris O" loading="lazy" />
                      <div>
                        <h4>Chris O</h4>
                        <span>Founder</span>
                      </div>
                    </div>
                    <p>This template made our MVP feel like a full-scale product. We were able to showcase features, tell our story, and guide visitors through our value.</p>
                  </article>

                  <article className="testimonial-card">
                    <div className="testimonial-author">
                      <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=160&q=80" alt="Tom Nguyen" loading="lazy" />
                      <div>
                        <h4>Tom Nguyen</h4>
                        <span>CEO</span>
                      </div>
                    </div>
                    <p>We cut our build time by half. The layout is clean, flexible, and just works for SaaS.</p>
                  </article>

                  <article className="testimonial-card">
                    <div className="testimonial-author">
                      <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=160&q=80" alt="Tom Alex" loading="lazy" />
                      <div>
                        <h4>Tom Alex</h4>
                        <span>Founder</span>
                      </div>
                    </div>
                    <p>We used this template as the foundation for our pitch deck site and it helped us raise our pre-seed round. The design built instant trust.</p>
                  </article>

                  <article className="testimonial-card">
                    <div className="testimonial-author">
                      <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=160&q=80" alt="John Lee" loading="lazy" />
                      <div>
                        <h4>John Lee</h4>
                        <span>Founder</span>
                      </div>
                    </div>
                    <p>We were blown away by how easy it was to build with this. Everything felt thoughtfully designed for SaaS: conversion-focused sections, subtle animations, premium feel.</p>
                  </article>
                </div>
              </div>
            </div>
          </section>

          {/* ===================== FAQ ===================== */}
          <section className="section faq-section reveal" id="faq">
            <div className="faq-grid">
              <div className="faq-intro">
                <p className="eyebrow">FAQ</p>
                <h2>Got Questions?</h2>
                <p>We've got answers — here's everything you need to know before getting started.</p>
                <div className="question-art" aria-hidden="true">?</div>
              </div>

              <div className="accordion-list">
                <article className="accordion-item">
                  <button className="accordion-trigger" aria-expanded="false">
                    <span>Can I use it with a free plan?</span>
                    <span className="accordion-icon">+</span>
                  </button>
                  <div className="accordion-panel">
                    <p>Yes. This front-end version works locally with no platform lock-in, and the layout can be adapted to a free hosting setup.</p>
                  </div>
                </article>

                <article className="accordion-item active">
                  <button className="accordion-trigger" aria-expanded="true">
                    <span>Can I customize it without code?</span>
                    <span className="accordion-icon">−</span>
                  </button>
                  <div className="accordion-panel">
                    <p>Yes. Most content can be edited directly in the HTML, and colors, spacing, and typography are centralized in the CSS variables for quick changes.</p>
                  </div>
                </article>

                <article className="accordion-item">
                  <button className="accordion-trigger" aria-expanded="false">
                    <span>Is it mobile responsive?</span>
                    <span className="accordion-icon">+</span>
                  </button>
                  <div className="accordion-panel">
                    <p>Absolutely. The layout scales across desktop, tablet, and mobile breakpoints with stacked grids and resized typography.</p>
                  </div>
                </article>

                <article className="accordion-item">
                  <button className="accordion-trigger" aria-expanded="false">
                    <span>Can I use it for client work?</span>
                    <span className="accordion-icon">+</span>
                  </button>
                  <div className="accordion-panel">
                    <p>Yes. You can reuse this code base as a starting point for client-facing landing pages, product sites, and SaaS marketing websites.</p>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* ===================== Blog ===================== */}
          <section className="section reveal" id="blog">
            <div className="section-head two-col-head">
              <div>
                <p className="eyebrow">Blog</p>
                <h2>Insights, Tips, and<br />Product Updates.</h2>
              </div>
              <p>
                Stay ahead with practical advice, behind-the-scenes updates, and the latest in SaaS and AI.
                Everything you need to grow — right here.
              </p>
            </div>

            <div className="blog-grid">
              <article className="blog-card">
                <img src="https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=900&q=80" alt="Designers working on AI interface" loading="lazy" />
                <div className="blog-card-body">
                  <span className="blog-tag">Design</span>
                  <h3>How Can Designers Prepare for the Future?</h3>
                  <p>Designing for AI means blending logic with human insight, focusing on UX maturity, and solving real user needs.</p>
                  <a href="#" className="inline-link">Read more</a>
                </div>
              </article>

              <article className="blog-card">
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80" alt="Landing page strategy" loading="lazy" />
                <div className="blog-card-body">
                  <span className="blog-tag">Growth</span>
                  <h3>Create a Landing Page That Performs Great</h3>
                  <p>A focused page with a clear CTA, clean hierarchy, and strong social proof can dramatically improve conversion.</p>
                  <a href="#" className="inline-link">Read more</a>
                </div>
              </article>

              <article className="blog-card">
                <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80" alt="Professional office website team" loading="lazy" />
                <div className="blog-card-body">
                  <span className="blog-tag">Business</span>
                  <h3>Why Every Business Needs a Professional Website</h3>
                  <p>Your website is often the first impression. Premium presentation builds trust before the first sales call ever happens.</p>
                  <a href="#" className="inline-link">Read more</a>
                </div>
              </article>
            </div>
          </section>

          {/* ===================== CTA ===================== */}
          <section className="section cta-section reveal" id="cta">
            <div className="cta-grid">
              <div>
                <p className="eyebrow">Get started</p>
                <h2>Your SaaS Deserves<br /><span className="gradient-text">Better Design</span></h2>
                <p>Start building with a template designed to convert.</p>
                <a href="#pricing" className="btn btn-primary">Get Started</a>
              </div>
              <div className="cta-orb-wrap" aria-hidden="true">
                <div className="gradient-orb small-orb"></div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="site-footer reveal">
          <div className="newsletter-box">
            <div>
              <h2>Need more free templates like this?</h2>
              <p>Submit your email and we'll let you know.</p>
            </div>
            <form className="newsletter-form">
              <label className="sr-only" htmlFor="email">Email address</label>
              <input id="email" type="email" placeholder="Enter your email" />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>

          <div className="footer-grid">
            <div>
              <a href="#top" className="brand footer-brand">
                <span className="brand-mark" aria-hidden="true">
                  <svg viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M12 3.4 20.6 12 12 20.6 3.4 12 12 3.4Z"></path>
                    <path d="M12 7.2 16.8 12 12 16.8 7.2 12 12 7.2Z"></path>
                  </svg>
                </span>
                <span className="brand-name">Kavi</span>
              </a>
              <p className="footer-copy">A bold, conversion-focused SaaS template built for AI startups looking to launch fast and scale smarter.</p>
            </div>

            <div>
              <h3>Information</h3>
              <ul>
                <li><a href="#how-it-works">How it Works</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#use-cases">Use Cases</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#blog">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3>More Templates</h3>
              <ul>
                <li><a href="#">NajmAI</a></li>
                <li><a href="#">Revo</a></li>
                <li><a href="#">Bayt</a></li>
                <li><a href="#">Sawad</a></li>
              </ul>
            </div>

            <div>
              <h3>Contact</h3>
              <ul>
                <li><a href="mailto:hello@example.com">hello@example.com</a></li>
                <li><a href="#cta">Get Template</a></li>
                <li><a href="#pricing">Get Started</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
      <SiteScripts />
    </>
  );
}

