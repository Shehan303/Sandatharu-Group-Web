import { type CSSProperties, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Prism from '../components/Prism';
import LoginModal from '../components/LoginModal';
import { ADMIN_TOOLS } from '../data/adminConfig';
import { useAuth } from '../context/AuthContext';
import '../admin.css';

export default function AdminPortal() {
  const [active, setActive] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const nav = useNavigate();
  const { setTool } = useAuth();

  const handleSuccess = () => {
    setTool(ADMIN_TOOLS[active].key);
    setModalOpen(false);
    nav('/admin/dashboard');
  };

  return (
    <div className="portal">
      <Prism
        activeIndex={active}
        onSelect={setActive}
        onOpenLogin={() => setModalOpen(true)}
      />

      <div className="portal__vignette" />

      <div className="portal__head">
        <img src="/public/logos/sandatharu-logo-white.png" alt="Sandatharu Group" />
        <span className="portal__tag">Admin Portal</span>
      </div>

      <div className="portal__foot">
        <button className="portal__nav" onClick={() => setActive((active - 1 + 4) % 4)} aria-label="Previous">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 6-6 6 6 6"/></svg>
        </button>

        <div className="portal__dots">
          {ADMIN_TOOLS.map((t, i) => (
            <button
              key={t.key}
              className={`portal__dot ${i === active ? 'is-active' : ''}`}
              style={{ ['--c' as any]: t.color }}
              onClick={() => setActive(i)}
            >
              <span className="portal__dot-bar" />
              <span>{t.short}</span>
            </button>
          ))}
        </div>

        <button className="portal__nav" onClick={() => setActive((active + 1) % 4)} aria-label="Next">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 6 6 6-6 6"/></svg>
        </button>
      </div>

      <LoginModal
        open={modalOpen}
        toolIndex={active}
        onClose={() => setModalOpen(false)}
        onSuccess={handleSuccess}
      />
    </div>
  );
}