import { Link } from 'react-router-dom';

export default function TravelsFooter() {
  return (
    <footer className="tft">
      <div className="tft__inner">
        <div className="tft__top">
          <div>
            <img src="/public/logos/sandatharu-travels-white-nav.png" className="tft__logo" />
            <p className="tft__desc">
              Travel, tours, transportation and vehicle-hire services designed around your journey
              across Sri Lanka.
            </p>
            <div className="tft__socials">
              <a href="#" aria-label="Facebook">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 22v-9h3l1-4h-4V6.5c0-1 .3-1.7 1.7-1.7H17V1.1C16.7 1.1 15.6 1 14.4 1 11.6 1 9.5 2.7 9.5 5.8V9H6v4h3.5v9z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 12s0-4-.5-5.8c-.3-1-1.2-1.8-2.2-2C18.5 4 12 4 12 4s-6.5 0-8.3.3c-1 .2-1.9.9-2.2 2C1 8 1 12 1 12s0 4 .5 5.8c.3 1 1.2 1.8 2.2 2C5.5 20 12 20 12 20s6.5 0 8.3-.3c1-.2 1.9-.9 2.2-2C23 16 23 12 23 12zM10 15V9l5 3z"/>
                </svg>
              </a>
              <a href="#" aria-label="WhatsApp">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4A10 10 0 0 0 4 16l-1 4 4-1a10 10 0 1 0 13-15z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="tft__col">
            <span className="tft__title">Explore</span>
            <Link to="/travels" className="tft__link">Home</Link>
            <Link to="/travels/about" className="tft__link">About</Link>
            <Link to="/travels/destinations" className="tft__link">Destinations</Link>
            <Link to="/travels/tours" className="tft__link">Tours</Link>
            <Link to="/travels/gallery" className="tft__link">Gallery</Link>
            <Link to="/travels/stories" className="tft__link">Travel Stories</Link>
          </div>

          <div className="tft__col">
            <span className="tft__title">Services</span>
            <Link to="/travels/vehicles" className="tft__link">Vehicle Hire</Link>
            <Link to="/travels/services" className="tft__link">Airport Transfers</Link>
            <Link to="/travels/services" className="tft__link">Private Transport</Link>
            <Link to="/travels/services" className="tft__link">Group Transportation</Link>
            <Link to="/travels/services" className="tft__link">Corporate Travel</Link>
            <Link to="/travels/custom" className="tft__link">Custom Journeys</Link>
          </div>

          <div className="tft__col">
            <span className="tft__title">Contact</span>
            <p className="tft__link">Sri Lanka</p>
            <p className="tft__link">+94 XX XXX XXXX</p>
            <p className="tft__link">travels@sandatharu.lk</p>
            <p className="tft__link" style={{ marginTop: 12, opacity: .6 }}>Mon–Sat · 8:30 – 18:00</p>
          </div>
        </div>

        <div className="tft__meta">
          <span>© {new Date().getFullYear()} Sandatharu Travels & Tours. All Rights Reserved.</span>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
            <Link to="/privacy" className="tft__link">Privacy</Link>
            <Link to="/terms" className="tft__link">Terms</Link>
            <Link to="/" className="tft__back">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M11 18l-6-6 6-6"/>
              </svg>
              Sandatharu Group
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}