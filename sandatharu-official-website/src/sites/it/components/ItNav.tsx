import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const LINKS = [
  { to: '/it',             label: 'Home' },
  { to: '/it/about',       label: 'About' },
  { to: '/it/services',    label: 'Services' },
  { to: '/it/solutions',   label: 'Solutions' },
  { to: '/it/industries',  label: 'Industries' },
  { to: '/it/process',     label: 'Process' },
  { to: '/it/tech',        label: 'Technologies' },
  { to: '/it/projects',    label: 'Projects' },
  { to: '/it/contact',     label: 'Contact' }
];

export default function ITNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  // lock body scroll when drawer open (mobile)
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [open]);

  return (
    <>
      <header className={`it-nav ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="it-nav__inner">
          <Link to="/it" className="it-nav__brand">
            <img src="/logos/it-logo.svg" alt="Sandatharu IT Solutions" className="it-nav__brand-logo" />
          </Link>

          <nav className="it-nav__links">
            {LINKS.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`it-nav__link ${pathname === l.to ? 'is-active' : ''}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link to="/it/contact" className="it-nav__cta">
            <span>Start a Project</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </Link>

          <button
            className={`it-nav__burger ${open ? 'is-open' : ''}`}
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            <span />
          </button>
        </div>
      </header>

      {open && (
        <div className="it-nav__drawer">
          {LINKS.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`it-nav__drawer-link ${pathname === l.to ? 'is-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              <span>{l.label}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m9 6 6 6-6 6"/>
              </svg>
            </Link>
          ))}
          <Link to="/it/contact" className="it-btn it-btn--primary it-nav__drawer-cta" onClick={() => setOpen(false)}>
            <span>Start a Project</span>
            <svg className="it-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </Link>
        </div>
      )}
    </>
  );
}