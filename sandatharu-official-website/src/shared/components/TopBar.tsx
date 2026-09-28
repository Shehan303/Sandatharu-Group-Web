import { useEffect, useState } from 'react';
import './topbar.css';

const ANNOUNCEMENTS = [
  '🌴 Now collecting coconut shells — island-wide pickup',
  '🚐 Kurunegala → Colombo daily service available',
  '💻 Free consultation for business websites this month'
];

export default function TopBar() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI(v => (v + 1) % ANNOUNCEMENTS.length), 4200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="topbar">
      <div className="topbar__inner container">
        <div className="topbar__ann">
          <span key={i} className="topbar__ann-item">{ANNOUNCEMENTS[i]}</span>
        </div>
        <div className="topbar__meta">
          <a href="tel:+94000000000">📞 +94 XX XXX XXXX</a>
          <span className="dot" />
          <a href="mailto:info@sandatharu.lk">✉️ info@sandatharu.lk</a>
          <span className="dot hide-sm" />
          <div className="topbar__socials hide-sm">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">ig</a>
            <a href="#" aria-label="LinkedIn">in</a>
          </div>
        </div>
      </div>
    </div>
  );
}