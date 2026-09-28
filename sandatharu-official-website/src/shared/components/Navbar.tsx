import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { BUSINESSES } from '../data/businesses';
import './navbar.css';

const LINKS = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About' },
  { to: '/clients',  label: 'Clients' },
  { to: '/partners', label: 'Partners' },
  { to: '/news',     label: 'News' },
  { to: '/contact',  label: 'Contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [bizOpen, setBizOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); setBizOpen(false); }, [pathname]);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner container">
        <Link to="/" className="nav__logo" aria-label="Sandatharu Group home">
          <span className="nav__logo-mark">S</span>
          <span className="nav__logo-text">
            <strong>SANDATHARU</strong>
            <em>GROUP</em>
          </span>
        </Link>

        <nav className="nav__links">
          {LINKS.map(l => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}>
              {l.label}
            </NavLink>
          ))}
          <div className="nav__dropdown" onMouseEnter={() => setBizOpen(true)} onMouseLeave={() => setBizOpen(false)}>
            <button className="nav__link nav__link--btn">
              Businesses <span className="caret">▾</span>
            </button>
            {bizOpen && (
              <div className="nav__menu">
                {BUSINESSES.map(b => (
                  <Link key={b.key} to={b.route} className="nav__menu-item" style={{ '--accent': b.accent } as React.CSSProperties}>
                    <span className="nav__menu-emoji">{b.emoji}</span>
                    <span>
                      <strong>{b.name}</strong>
                      <em>{b.tagline}</em>
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <Link to="/contact" className="btn btn-primary nav__cta hide-md">Get in Touch →</Link>

        <button className="nav__burger" aria-label="Menu" onClick={() => setOpen(v => !v)}>
          <span className={open ? 'is-open' : ''} />
        </button>
      </div>

      {open && (
        <div className="nav__mobile">
          {LINKS.map(l => <NavLink key={l.to} to={l.to} className="nav__mobile-link">{l.label}</NavLink>)}
          <div className="nav__mobile-sub">
            <span className="kicker">Our Businesses</span>
            {BUSINESSES.map(b => (
              <Link key={b.key} to={b.route} className="nav__mobile-biz" style={{ '--accent': b.accent } as React.CSSProperties}>
                <span>{b.emoji}</span> {b.name}
              </Link>
            ))}
          </div>
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: 20 }}>Get in Touch →</Link>
        </div>
      )}
    </header>
  );
}