const ITEMS = [
  { label: 'Software', icon: 'M4 4h16v16H4z M9 9h6v6H9z' },
  { label: 'Website',  icon: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20' },
  { label: 'Mobile App', icon: 'M7 2h10v20H7z M11 18h2' },
  { label: 'UI/UX',    icon: 'M12 19l7-7 3 3-7 7-3-3z M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z' },
  { label: 'Business System', icon: 'M3 3h18v4H3z M3 10h18v4H3z M3 17h18v4H3z' },
  { label: 'Automation', icon: 'M12 2v4M12 18v4M2 12h4M18 12h4' },
  { label: 'Cloud',    icon: 'M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z' },
  { label: 'API',      icon: 'M12 2v20M2 12h20' }
];

export default function QuickNav() {
  return (
    <section className="it-qnav">
      <div className="it-container">
        <div className="it-qnav__card">
          <div className="it-qnav__head">
            <h2 className="it-qnav__title">What do <span>you need?</span></h2>
            <span className="it-qnav__hint">Quick Links</span>
          </div>
          <div className="it-qnav__grid">
            {ITEMS.map(x => (
              <a key={x.label} href="#services" className="it-qnav__item">
                <span className="it-qnav__icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d={x.icon}/>
                  </svg>
                </span>
                <span className="it-qnav__label">{x.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}