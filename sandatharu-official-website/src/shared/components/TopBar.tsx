import Marquee from './Marquee';
import './topbar.css';

const TICKER = [
  'SUSTAINABLE COCONUT PRODUCTS',
  'DISCOVER SRI LANKA WITH SANDATHARU TRAVELS',
  'DIGITAL SOLUTIONS FOR MODERN BUSINESSES',
  'ROOTED IN SRI LANKA · OPEN TO THE WORLD'
];

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar__left">
        <span className="topbar__label">SANDATHARU GROUP</span>
      </div>
      <div className="topbar__mid">
        <Marquee speed={50}><div className="topbar__track">
          {TICKER.map(t => <span key={t} className="topbar__item">{t}<i>◆</i></span>)}
        </div></Marquee>
      </div>
      <div className="topbar__right">
        <a href="#" aria-label="Facebook"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-9h3l1-4h-4V6.5c0-1 .3-1.7 1.7-1.7H17V1.1C16.7 1.1 15.6 1 14.4 1 11.6 1 9.5 2.7 9.5 5.8V9H6v4h3.5v9z"/></svg></a>
        <a href="#" aria-label="Instagram"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/></svg></a>
        <a href="#" aria-label="LinkedIn"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3 9h3v12H3zM10 9h3v1.6c.6-1 1.8-1.9 3.6-1.9 3 0 4.4 2 4.4 5V21h-3v-5.4c0-1.6-.6-2.7-2-2.7-1.3 0-2 .9-2 2.7V21h-3z"/></svg></a>
        <a href="#" aria-label="YouTube"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-4-.5-5.8c-.3-1-1.2-1.8-2.2-2C18.5 4 12 4 12 4s-6.5 0-8.3.3c-1 .2-1.9.9-2.2 2C1 8 1 12 1 12s0 4 .5 5.8c.3 1 1.2 1.8 2.2 2C5.5 20 12 20 12 20s6.5 0 8.3-.3c1-.2 1.9-.9 2.2-2C23 16 23 12 23 12zM10 15V9l5 3z"/></svg></a>
        <a href="#" aria-label="WhatsApp"><svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4A10 10 0 0 0 4 16l-1 4 4-1a10 10 0 1 0 13-15zM9 8c.3 0 .7 0 1 .8l.6 1.3c.1.2.1.5 0 .7l-.4.4c-.1.2-.3.3-.2.6.1.3 1 1.6 2.2 2.6 1.5 1.3 2.6 1.4 2.9 1.5.3 0 .5 0 .7-.2l.6-.7c.2-.2.4-.2.6-.1l1.4.7c.2.1.4.3.4.5v.7c0 .7-.8 1.4-1.6 1.5-.5.1-1.1.1-3.5-.8-2.9-1.2-4.7-4-4.9-4.2-.1-.2-1.1-1.5-1.1-2.9 0-1.3.7-2 1-2.2.3-.3.6-.3.8-.3z"/></svg></a>
      </div>
    </div>
  );
}