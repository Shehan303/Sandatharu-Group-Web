import { Link } from 'react-router-dom';

export default function CocoFooter() {
  return (
    <footer className="cft">

      {/* Organic wave transition */}
      <div className="cft__wave" aria-hidden>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,60 C180,110 360,20 540,50 C720,80 900,10 1080,40 C1260,70 1350,25 1440,55 L1440,0 L0,0 Z"
            fill="#FAF6EE"
          />
        </svg>
      </div>

      {/* Newsletter ribbon */}
      <div className="cft__ribbon">
        <div className="cft__ribbon-inner">
          <div className="cft__ribbon-text">
            <span className="cft__ribbon-kicker">Field Notes</span>
            <h3 className="cft__ribbon-title">
              Monthly supply updates, <em>straight to your inbox.</em>
            </h3>
          </div>
          <form
            className="cft__ribbon-form"
            onSubmit={e => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="you@company.com"
              aria-label="Email address"
            />
            <button type="submit">
              <span>Subscribe</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Split canvas */}
      <div className="cft__canvas">

        {/* Left — dark forest brand panel */}
        <div className="cft__brand">
          <div className="cft__brand-inner">
            <img
              src="/logos/coco-logo.svg"
              alt="Sandatharu Coco Products"
              className="cft__logo"
            />

            <p className="cft__brand-desc">
              Sri Lankan coconut-based products and resource supply — connecting local
              resources with wider markets through responsible sourcing and reliable
              supply.
            </p>

            <div className="cft__brand-meta">
              <div className="cft__meta-row">
                <span className="cft__meta-label">Origin</span>
                <span className="cft__meta-val">Sri Lanka</span>
              </div>
              <div className="cft__meta-row">
                <span className="cft__meta-label">Est.</span>
                <span className="cft__meta-val">Sandatharu Group</span>
              </div>
            </div>

            <div className="cft__socials">
              <a href="#" aria-label="Facebook" className="cft__social">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 22v-9h3l1-4h-4V6.5c0-1 .3-1.7 1.7-1.7H17V1.1C16.7 1.1 15.6 1 14.4 1 11.6 1 9.5 2.7 9.5 5.8V9H6v4h3.5v9z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="cft__social">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="cft__social">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3 9h3v12H3zM10 9h3v1.6c.6-1 1.8-1.9 3.6-1.9 3 0 4.4 2 4.4 5V21h-3v-5.4c0-1.6-.6-2.7-2-2.7-1.3 0-2 .9-2 2.7V21h-3z"/>
                </svg>
              </a>
              <a href="#" aria-label="WhatsApp" className="cft__social">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4A10 10 0 0 0 4 16l-1 4 4-1a10 10 0 1 0 13-15zM9 8c.3 0 .7 0 1 .8l.6 1.3c.1.2.1.5 0 .7l-.4.4c-.1.2-.3.3-.2.6.1.3 1 1.6 2.2 2.6 1.5 1.3 2.6 1.4 2.9 1.5.3 0 .5 0 .7-.2l.6-.7c.2-.2.4-.2.6-.1l1.4.7c.2.1.4.3.4.5v.7c0 .7-.8 1.4-1.6 1.5-.5.1-1.1.1-3.5-.8-2.9-1.2-4.7-4-4.9-4.2-.1-.2-1.1-1.5-1.1-2.9 0-1.3.7-2 1-2.2.3-.3.6-.3.8-.3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Seal — rotating text ring */}
          <div className="cft__seal" aria-hidden>
            <svg viewBox="0 0 200 200" width="140" height="140">
              <defs>
                <path
                  id="cft-circle"
                  d="M 100, 100 m -72, 0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
                  fill="none"
                />
              </defs>
              <text
                className="cft__seal-text"
                fill="currentColor"
                fontSize="11"
                letterSpacing="4"
                fontFamily="Space Mono"
              >
                <textPath href="#cft-circle" startOffset="0%">
                  SANDATHARU COCO · SRI LANKAN COCONUT RESOURCES · SINCE · LK ·
                </textPath>
              </text>
              <circle cx="100" cy="100" r="44" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
              <text
                x="100"
                y="94"
                textAnchor="middle"
                fill="currentColor"
                fontFamily="Cormorant Garamond"
                fontStyle="italic"
                fontSize="20"
                fontWeight="500"
              >
                From
              </text>
              <text
                x="100"
                y="118"
                textAnchor="middle"
                fill="currentColor"
                fontFamily="Cormorant Garamond"
                fontSize="18"
                fontWeight="600"
              >
                SRI LANKA
              </text>
            </svg>
          </div>
        </div>

        {/* Right — cream links panel */}
        <div className="cft__links">
          <div className="cft__col">
            <span className="cft__col-title">
              <span className="cft__col-dot" />
              Products
            </span>
            <Link to="/coco/products/shells" className="cft__link">Coconut Shells</Link>
            <Link to="/coco/products/husk" className="cft__link">Coconut Husk</Link>
            <Link to="/coco/products/charcoal" className="cft__link">Coconut Charcoal</Link>
            <Link to="/coco/products/briquettes" className="cft__link">Charcoal Briquettes</Link>
            <Link to="/coco/products/materials" className="cft__link">Other Materials</Link>
          </div>

          <div className="cft__col">
            <span className="cft__col-title">
              <span className="cft__col-dot" />
              Business
            </span>
            <Link to="/coco/about" className="cft__link">About</Link>
            <Link to="/coco/process" className="cft__link">Our Process</Link>
            <Link to="/coco/network" className="cft__link">Supply Network</Link>
            <Link to="/coco/sustainability" className="cft__link">Sustainability</Link>
            <Link to="/coco/global" className="cft__link">Global Supply</Link>
          </div>

          <div className="cft__col">
            <span className="cft__col-title">
              <span className="cft__col-dot" />
              Company
            </span>
            <Link to="/coco/news" className="cft__link">News & Updates</Link>
            <Link to="/coco/products" className="cft__link">Catalogue</Link>
            <Link to="/coco/contact" className="cft__link">B2B Inquiries</Link>
            <Link to="/coco/contact" className="cft__link">Partnerships</Link>
            <Link to="/coco/contact" className="cft__link">Contact</Link>
          </div>

          <div className="cft__col cft__col--contact">
            <span className="cft__col-title">
              <span className="cft__col-dot" />
              Direct
            </span>
            <div className="cft__contact-item">
              <span className="cft__contact-label">Origin</span>
              <span className="cft__contact-val">Sri Lanka</span>
            </div>
            <div className="cft__contact-item">
              <span className="cft__contact-label">Phone</span>
              <span className="cft__contact-val">+94 XX XXX XXXX</span>
            </div>
            <div className="cft__contact-item">
              <span className="cft__contact-label">Email</span>
              <span className="cft__contact-val">coco@sandatharu.lk</span>
            </div>
            <div className="cft__contact-item">
              <span className="cft__contact-label">Hours</span>
              <span className="cft__contact-val">Mon–Sat · 8:30–18:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Giant wordmark strip */}
      <div className="cft__wordmark" aria-hidden>
        <span>SANDATHARU COCO</span>
      </div>

      {/* Bottom bar */}
      <div className="cft__bottom">
        <div className="cft__bottom-inner">
          <div className="cft__bottom-left">
            <span>© {new Date().getFullYear()} Sandatharu Coco Products</span>
            <span className="cft__bottom-sep">·</span>
            <span className="cft__bottom-muted">Part of Sandatharu Group</span>
          </div>

          <div className="cft__bottom-center">
            <Link to="/privacy">Privacy</Link>
            <span>·</span>
            <Link to="/terms">Terms</Link>
          </div>

          <Link to="/" className="cft__back">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M11 18l-6-6 6-6"/>
            </svg>
            <span>Sandatharu Group</span>
          </Link>
        </div>
      </div>

    </footer>
  );
}