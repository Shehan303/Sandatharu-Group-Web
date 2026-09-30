import { useEffect, useState } from 'react';

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const [nudge, setNudge] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setNudge(true), 4000);
    const t2 = setTimeout(() => setNudge(false), 10000);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    if (nudge && !open) setOpen(true);
  }, [nudge]);

  const phone = '94770000000'; // ← replace with real number
  const message = encodeURIComponent("Hi Sandatharu IT, I'd like to discuss a project.");

  return (
    <>
      {open && (
        <div className="it-float__panel">
          <div className="it-float__panel-head">
            <div className="it-float__panel-avatar">S</div>
            <div>
              <p className="it-float__panel-name">Sandatharu IT</p>
              <p className="it-float__panel-sub">● Online now</p>
            </div>
          </div>
          <div className="it-float__panel-msg">
            Hi there 👋 Have an idea or project in mind? Let&apos;s talk.
          </div>
          <div className="it-float__panel-actions">
            <a
              href={`https://wa.me/${phone}?text=${message}`}
              target="_blank"
              rel="noreferrer"
              className="it-float__panel-btn"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4A10 10 0 0 0 4 16l-1 4 4-1a10 10 0 1 0 13-15z"/>
              </svg>
              Start Chat
            </a>
          </div>
        </div>
      )}

      <button
        className="it-float__btn it-float__btn--wa"
        onClick={() => setOpen(v => !v)}
        aria-label="WhatsApp"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4A10 10 0 0 0 4 16l-1 4 4-1a10 10 0 1 0 13-15zM9 8c.3 0 .7 0 1 .8l.6 1.3c.1.2.1.5 0 .7l-.4.4c-.1.2-.3.3-.2.6.1.3 1 1.6 2.2 2.6 1.5 1.3 2.6 1.4 2.9 1.5.3 0 .5 0 .7-.2l.6-.7c.2-.2.4-.2.6-.1l1.4.7c.2.1.4.3.4.5v.7c0 .7-.8 1.4-1.6 1.5-.5.1-1.1.1-3.5-.8-2.9-1.2-4.7-4-4.9-4.2-.1-.2-1.1-1.5-1.1-2.9 0-1.3.7-2 1-2.2.3-.3.6-.3.8-.3z"/>
        </svg>
      </button>
    </>
  );
}