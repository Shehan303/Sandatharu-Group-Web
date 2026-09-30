import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const LINKS = [
  { to: '/travels',                label: 'Home' },
  { to: '/travels/about',          label: 'About' },
  { to: '/travels/destinations',   label: 'Destinations' },
  { to: '/travels/tours',          label: 'Tours' },
  { to: '/travels/vehicles',       label: 'Vehicle Hire' },
  { to: '/travels/services',       label: 'Services' },
  { to: '/travels/custom',         label: 'Custom Journey' },
  { to: '/travels/contact',        label: 'Contact' }
];

export default function TravelsNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const s = () => setScrolled(window.scrollY > 40);
    s();
    window.addEventListener('scroll', s, { passive: true });
    return () => window.removeEventListener('scroll', s);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className={`t-nav ${scrolled ? 'is-solid' : ''}`}>
      <div className="t-nav__inner">
        <Link to="/travels" className="t-nav__brand">
          <img src="/public/logos/sandatharu-travels-dark-nav.png" className="t-nav__brand-logo" />
        </Link>

        <nav className="t-nav__links">
          {LINKS.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`t-nav__link ${pathname === l.to ? 'is-active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link to="/travels/contact" className="t-nav__cta">
          <span>Plan Your Journey</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M13 6l6 6-6 6"/>
          </svg>
        </Link>

        <button
          className={`t-nav__burger ${open ? 'is-open' : ''}`}
          aria-label="Menu"
          onClick={() => setOpen(v => !v)}
        >
          <span />
        </button>
      </div>

      {open && (
        <div className="t-nav__drawer">
          {LINKS.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              className="t-nav__drawer-link"
              onClick={() => setOpen(false)}
            >
              <span className="t-nav__drawer-num">0{i + 1}</span>
              <span>{l.label}</span>
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}