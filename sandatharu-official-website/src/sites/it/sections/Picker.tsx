import { Link } from 'react-router-dom';

const ITEMS = [
  { t: 'Software',    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M8 6 2 12l6 6M16 6l6 6-6 6M14 4l-4 16"/></svg> },
  { t: 'Website',     icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg> },
  { t: 'Mobile App',  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M12 18h.01"/></svg> },
  { t: 'UI/UX',       icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16v12H4z"/><path d="M8 20h8"/></svg> },
  { t: 'System',      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg> },
  { t: 'Automation',  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3"/></svg> },
  { t: 'Cloud',       icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 18a4 4 0 0 0 0-8 6 6 0 0 0-11.6 2A3.5 3.5 0 0 0 6 18z"/></svg> },
  { t: 'API',         icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 12h16M12 4v16M6 6l12 12M18 6 6 18"/></svg> }
];

export default function Picker() {
  return (
    <section className="it-picker">
      <div className="it-container">
        <div className="it-picker__card">
          <span className="it-picker__label">What do you need?</span>
          <div className="it-picker__grid">
            {ITEMS.map(x => (
              <Link key={x.t} to="/it/contact" className="it-picker__item">
                <span className="it-picker__icon">{x.icon}</span>
                <span className="it-picker__t">{x.t}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}