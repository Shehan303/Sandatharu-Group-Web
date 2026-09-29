import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const LINKS = [
  { to: '/coco',                 label: 'Home' },
  { to: '/coco/about',           label: 'About' },
  { to: '/coco/products',        label: 'Products' },
  { to: '/coco/process',         label: 'Process' },
  { to: '/coco/sustainability',  label: 'Sustainability' },
  { to: '/coco/network',         label: 'Network' },
  { to: '/coco/global',          label: 'Global Supply' },
  { to: '/coco/news',            label: 'News' },
  { to: '/coco/contact',         label: 'Contact' }
];

const TICKER = [
  'Sri Lankan Coconut-Based Products & Resources',
  'Bulk & B2B Supply Opportunities',
  'Building Sustainable Value From Coconut Resources',
  'Connect With Sandatharu Coco Products'
];

export default function CocoNav() {
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

  const isHome = pathname === '/coco';
  const solid = scrolled || !isHome;

  return (
    <>
      <div className="coco-topbar">
        <div className="coco-topbar__track">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="coco-topbar__item">{t}</span>
          ))}
        </div>
      </div>

      <header className={`coco-nav ${solid ? 'is-solid' : ''}`}>
        <div className="coco-nav__inner">
          <Link to="/coco" className="coco-nav__brand">
            <img src="/logos/coco-logo.svg" alt="Sandatharu Coco Products" />
          </Link>

          <nav className="coco-nav__links">
            {LINKS.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`coco-nav__link ${pathname === l.to ? 'is-active' : ''}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link to="/coco/contact" className="coco-nav__cta">
            <span>Request Inquiry</span>
            <svg className="c-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </Link>

          <button
            className={`coco-nav__burger ${open ? 'is-open' : ''}`}
            aria-label="Menu"
            onClick={() => setOpen(v => !v)}
          >
            <span />
          </button>
        </div>

        {open && (
          <div className="coco-nav__drawer">
            {LINKS.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                className="coco-nav__drawer-link"
                onClick={() => setOpen(false)}
              >
                <span className="coco-nav__drawer-num">0{i + 1}</span>
                <span>{l.label}</span>
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
}