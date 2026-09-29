import { Link } from 'react-router-dom';
import { BUSINESSES } from '../data/businesses';
import './footer.css';

export default function Footer() {
  return (
    <footer className="ft">
      <div className="ft__top">
        <div className="ft__col ft__col--brand">
          <img src="../../../public/logos/sandatharu-logo-white.png" />
          <p className="ft__desc">
            A Sri Lankan business group bringing together sustainable products, travel experiences
            and technology solutions — under one identity.
          </p>
          <div className="ft__socials">
            <a href="#" aria-label="Facebook"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-9h3l1-4h-4V6.5c0-1 .3-1.7 1.7-1.7H17V1.1C16.7 1.1 15.6 1 14.4 1 11.6 1 9.5 2.7 9.5 5.8V9H6v4h3.5v9z"/></svg></a>
            <a href="#" aria-label="Instagram"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/></svg></a>
            <a href="#" aria-label="LinkedIn"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3 9h3v12H3zM10 9h3v1.6c.6-1 1.8-1.9 3.6-1.9 3 0 4.4 2 4.4 5V21h-3v-5.4c0-1.6-.6-2.7-2-2.7-1.3 0-2 .9-2 2.7V21h-3z"/></svg></a>
            <a href="#" aria-label="YouTube"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-4-.5-5.8c-.3-1-1.2-1.8-2.2-2C18.5 4 12 4 12 4s-6.5 0-8.3.3c-1 .2-1.9.9-2.2 2C1 8 1 12 1 12s0 4 .5 5.8c.3 1 1.2 1.8 2.2 2C5.5 20 12 20 12 20s6.5 0 8.3-.3c1-.2 1.9-.9 2.2-2C23 16 23 12 23 12zM10 15V9l5 3z"/></svg></a>
            <a href="#" aria-label="WhatsApp"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4A10 10 0 0 0 4 16l-1 4 4-1a10 10 0 1 0 13-15zM9 8c.3 0 .7 0 1 .8l.6 1.3c.1.2.1.5 0 .7l-.4.4c-.1.2-.3.3-.2.6.1.3 1 1.6 2.2 2.6 1.5 1.3 2.6 1.4 2.9 1.5.3 0 .5 0 .7-.2l.6-.7c.2-.2.4-.2.6-.1l1.4.7c.2.1.4.3.4.5v.7c0 .7-.8 1.4-1.6 1.5-.5.1-1.1.1-3.5-.8-2.9-1.2-4.7-4-4.9-4.2-.1-.2-1.1-1.5-1.1-2.9 0-1.3.7-2 1-2.2.3-.3.6-.3.8-.3z"/></svg></a>
          </div>
        </div>

        <div className="ft__col ft__col--links">
          <span className="ft__title">Sandatharu Group</span>
          <Link to="/about"          className="ft__link">About Us</Link>
          <Link to="/story"          className="ft__link">Our Story</Link>
          <Link to="/businesses"     className="ft__link">Our Businesses</Link>
          <Link to="/sustainability" className="ft__link">Sustainability</Link>
          <Link to="/news"           className="ft__link">News & Updates</Link>
          <Link to="/contact"        className="ft__link">Contact</Link>
        </div>

        <div className="ft__col ft__col--biz">
          <span className="ft__title">Our Businesses</span>
          {BUSINESSES.map(b => (
            <div key={b.key} className="ft__biz" style={{ '--c': b.accent } as React.CSSProperties}>
              <Link to={b.route} className="ft__biz-head">
                <span className="ft__biz-bar" />
                <span>{b.name}</span>
              </Link>
              <ul className="ft__biz-list">
                {b.bullets.slice(0, 4).map(x => (
                  <li key={x}><Link to={b.route}>{x}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="ft__col ft__col--contact">
          <span className="ft__title">Contact</span>
          <p>Sri Lanka</p>
          <p>+94 XX XXX XXXX</p>
          <p>info@sandatharu.lk</p>
          <p className="ft__sub">Business Inquiries</p>
          <p>business@sandatharu.lk</p>
          <p className="ft__sub">Mon–Sat · 8:30 – 18:00</p>
        </div>
      </div>

      <div className="ft__meta">
        <div className="ft__meta-inner">
          <span>© {new Date().getFullYear()} Sandatharu Group. All Rights Reserved.</span>
          <div className="ft__meta-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span>·</span>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
          <Link to="/admin" className="ft__admin">
            Admin Portal
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}