import { Link } from 'react-router-dom';
import { BUSINESSES } from '../data/businesses';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="nav__logo-mark">S</span>
              <span className="nav__logo-text"><strong>SANDATHARU</strong><em>GROUP</em></span>
            </div>
            <p className="footer__desc">
              A growing Sri Lankan business group — sustainable coconut products, travel & tours, and digital solutions, under one identity.
            </p>
            <div className="footer__socials">
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
              <a href="#">WhatsApp</a>
            </div>
          </div>

          <div className="footer__col">
            <span className="footer__col-title">Our Businesses</span>
            {BUSINESSES.map(b => (
              <Link key={b.key} to={b.route} className="footer__link footer__link--biz" style={{ '--accent': b.accent } as React.CSSProperties}>
                <span className="footer__dot" /> {b.name}
              </Link>
            ))}
          </div>

          <div className="footer__col">
            <span className="footer__col-title">Quick Links</span>
            <Link to="/about"    className="footer__link">About</Link>
            <Link to="/clients"  className="footer__link">Clients</Link>
            <Link to="/partners" className="footer__link">Partners</Link>
            <Link to="/news"     className="footer__link">News</Link>
            <Link to="/contact"  className="footer__link">Contact</Link>
          </div>

          <div className="footer__col">
            <span className="footer__col-title">Contact</span>
            <p className="footer__text">📍 Kurunegala, Sri Lanka</p>
            <p className="footer__text">📞 +94 XX XXX XXXX</p>
            <p className="footer__text">✉️ info@sandatharu.lk</p>
            <p className="footer__text footer__text--muted">Mon–Sat · 8:30 AM – 6:00 PM</p>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Sandatharu Group. All rights reserved.</span>
          <Link to="/admin" className="footer__admin">Admin Portal</Link>
        </div>
      </div>
    </footer>
  );
}