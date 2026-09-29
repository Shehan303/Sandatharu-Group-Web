import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BUSINESSES } from '../data/businesses';
import './navbar.css';

const LINKS = [
  { to: '/',              label: 'Home' },
  { to: '/about',         label: 'About' },
  { to: '/businesses',    label: 'Businesses' },
  { to: '/story',         label: 'Story' },
  { to: '/network',       label: 'Network' },
  { to: '/sustainability',label: 'Sustainability' },
  { to: '/news',          label: 'News' },
  { to: '/contact',       label: 'Contact' }
];

/* Routes that have a dark hero at the top → navbar starts transparent */
const HERO_ROUTES = ['/', '/coco', '/travels', '/it'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const isHero = HERO_ROUTES.includes(pathname);
  const isTransparent = isHero && !scrolled;

  const navClass = [
    'nav',
    isTransparent && 'nav--hero',
    scrolled && 'nav--scrolled'
  ].filter(Boolean).join(' ');

  return (
    <>
      <header className={navClass}>
        <div className="nav__inner">
          <Link to="/" className="nav__brand" aria-label="Sandatharu Group">
            <img src="../../../public/logos/sandatharu-logo-darck-nav.png" alt="Sandatharu Group" className="nav__logo-color" />
            <img src="../../../public/logos/sandatharu-logo-white nav.png" alt="" className="nav__logo-white" aria-hidden />
          </Link>

          <nav className="nav__links" aria-label="Main">
            {LINKS.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`nav__link ${pathname === l.to ? 'is-active' : ''}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link to="/contact" className="nav__cta">
            <span>Start a Conversation</span>
            <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </Link>

          <button
            className={`nav__burger ${open ? 'is-open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            <span />
          </button>
        </div>
      </header>

      {open && (
        <div className="nav__drawer">
          <div className="nav__drawer-links">
            {LINKS.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                className="nav__drawer-link"
                style={{ animationDelay: `${i * 0.05}s` }}
                onClick={() => setOpen(false)}
              >
                <span className="nav__drawer-num">0{i + 1}</span>
                <span>{l.label}</span>
              </Link>
            ))}
          </div>

          <div className="nav__drawer-biz">
            <span className="k">Our Businesses</span>
            {BUSINESSES.map(b => (
              <Link
                key={b.key}
                to={b.route}
                className="nav__drawer-biz-item"
                style={{ '--c': b.accent } as React.CSSProperties}
                onClick={() => setOpen(false)}
              >
                <span className="nav__drawer-biz-bar" />
                <img src={b.logo} alt={b.name} />
              </Link>
            ))}
          </div>

          <Link
            to="/contact"
            className="btn btn-primary"
            style={{ marginTop: 24, alignSelf: 'flex-start' }}
            onClick={() => setOpen(false)}
          >
            <span>Start a Conversation</span>
            <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </Link>
        </div>
      )}
    </>
  );
}