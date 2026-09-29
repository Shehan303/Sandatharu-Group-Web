import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { ADMIN_TOOLS } from '../data/adminConfig';
import { useAuth } from '../context/AuthContext';
import HeroEditor from '../components/HeroEditor';
import NewsEditor from '../components/NewsEditor';
import '../admin.css';

type Tab = 'hero' | 'news';

export default function AdminDashboard() {
  const { user, tool, setTool, logout } = useAuth();
  const [tab, setTab] = useState<Tab>('hero');
  const nav = useNavigate();

  if (!user || !tool) return <Navigate to="/admin" replace />;

  const activeTool = ADMIN_TOOLS.find(t => t.key === tool) || ADMIN_TOOLS[0];

  const handleLogout = () => { logout(); nav('/admin'); };

  return (
    <div className="dash" style={{ ['--c' as any]: activeTool.color }}>
      {/* Sidebar */}
      <aside className="dash__side">
        <div className="dash__brand">
          <img src="/logos/sandatharu-logo-white.svg" alt="Sandatharu" />
          <span>Admin</span>
        </div>

        <div className="dash__label">Manage Tool</div>
        <nav className="dash__tools">
          {ADMIN_TOOLS.map(t => (
            <button
              key={t.key}
              className={`dash__tool ${t.key === tool ? 'is-active' : ''}`}
              style={{ ['--tc' as any]: t.color }}
              onClick={() => setTool(t.key)}
            >
              <span className="dash__tool-bar" />
              <img src={t.logo} alt={t.name} />
            </button>
          ))}
        </nav>

        <div className="dash__user">
          <div className="dash__user-avatar">{user.charAt(0).toUpperCase()}</div>
          <div className="dash__user-info">
            <strong>{user}</strong>
            <span>Administrator</span>
          </div>
          <button className="dash__logout" onClick={handleLogout} aria-label="Logout">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/>
            </svg>
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="dash__main">
        <header className="dash__top">
          <div>
            <span className="dash__crumbs">Admin / {activeTool.short}</span>
            <h1 className="dash__title">{activeTool.name}</h1>
          </div>
          <a href="/" target="_blank" rel="noreferrer" className="dash__view">
            <span>View Site</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17 17 7M8 7h9v9"/>
            </svg>
          </a>
        </header>

        <div className="dash__tabs">
          <button className={`dash__tab ${tab === 'hero' ? 'is-active' : ''}`} onClick={() => setTab('hero')}>Hero Editor</button>
          <button className={`dash__tab ${tab === 'news' ? 'is-active' : ''}`} onClick={() => setTab('news')}>News Editor</button>
        </div>

        <div className="dash__panel">
          {tab === 'hero' ? <HeroEditor tool={tool} /> : <NewsEditor tool={tool} />}
        </div>
      </main>
    </div>
  );
}