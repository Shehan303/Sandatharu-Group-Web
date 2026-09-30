import { useEffect, useState } from 'react';

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  const [waOpen, setWaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="it-fab">
      {/* WhatsApp panel */}
      <div className={`it-fab__panel ${waOpen ? 'is-open' : ''}`}>
        <div className="it-fab__panel-head">
          <div className="it-fab__panel-avatar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
              <path d="M20 4A10 10 0 0 0 4 16l-1 4 4-1a10 10 0 1 0 13-15zM9 8c.3 0 .7 0 1 .8l.6 1.3c.1.2.1.5 0 .7l-.4.4c-.1.2-.3.3-.2.6.1.3 1 1.6 2.2 2.6 1.5 1.3 2.6 1.4 2.9 1.5.3 0 .5 0 .7-.2l.6-.7c.2-.2.4-.2.6-.1l1.4.7c.2.1.4.3.4.5v.7c0 .7-.8 1.4-1.6 1.5-.5.1-1.1.1-3.5-.8-2.9-1.2-4.7-4-4.9-4.2-.1-.2-1.1-1.5-1.1-2.9 0-1.3.7-2 1-2.2.3-.3.6-.3.8-.3z"/>
            </svg>
          </div>
          <div className="it-fab__panel-meta">
            <strong>Sandatharu IT Solutions</strong>
            <span>Typically replies in a few hours</span>
          </div>
        </div>

        <div className="it-fab__panel-body">
          <div className="it-fab__panel-msg">
            Hi 👋 — have a project in mind?<br />
            Tell us what <em>you want to build</em> and we&apos;ll get back to you.
          </div>
          <a
            href="https://wa.me/940000000000?text=Hi%20Sandatharu%20IT%20Solutions%2C%20I%27d%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noreferrer"
            className="it-fab__panel-cta"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4A10 10 0 0 0 4 16l-1 4 4-1a10 10 0 1 0 13-15z"/>
            </svg>
            Open WhatsApp
          </a>
        </div>
      </div>

      {/* Back to top */}
      <button
        className={`it-fab__btn it-fab__btn--top ${showTop ? 'is-visible' : ''}`}
        onClick={scrollTop}
        aria-label="Back to top"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
      </button>

      {/* WhatsApp toggle */}
      <button
        className="it-fab__btn it-fab__btn--wa"
        onClick={() => setWaOpen(v => !v)}
        aria-label="Contact on WhatsApp"
        aria-expanded={waOpen}
      >
        {waOpen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M6 6l12 12M18 6L6 18"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4A10 10 0 0 0 4 16l-1 4 4-1a10 10 0 1 0 13-15zM9 8c.3 0 .7 0 1 .8l.6 1.3c.1.2.1.5 0 .7l-.4.4c-.1.2-.3.3-.2.6.1.3 1 1.6 2.2 2.6 1.5 1.3 2.6 1.4 2.9 1.5.3 0 .5 0 .7-.2l.6-.7c.2-.2.4-.2.6-.1l1.4.7c.2.1.4.3.4.5v.7c0 .7-.8 1.4-1.6 1.5-.5.1-1.1.1-3.5-.8-2.9-1.2-4.7-4-4.9-4.2-.1-.2-1.1-1.5-1.1-2.9 0-1.3.7-2 1-2.2.3-.3.6-.3.8-.3z"/>
          </svg>
        )}
      </button>
    </div>
  );
}