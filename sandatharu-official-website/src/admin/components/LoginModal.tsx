import { useEffect, useRef, useState } from 'react';
import { ADMIN_TOOLS } from '../data/adminConfig';
import { useAuth } from '../context/AuthContext';

interface Props {
  open: boolean;
  toolIndex: number;
  onClose: () => void;
  onSuccess: () => void;
}

export default function LoginModal({ open, toolIndex, onClose, onSuccess }: Props) {
  const tool = ADMIN_TOOLS[toolIndex];
  const { login } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setUsername(''); setPassword(''); setError('');
      setTimeout(() => inputRef.current?.focus(), 260);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const ok = login(username.trim(), password, tool.key);
    if (ok) onSuccess();
    else setError('Invalid credentials. Please try again.');
  };

  return (
    <div className="lm-back" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="lm" style={{ ['--c' as any]: tool.color, ['--cd' as any]: tool.colorDark }}>
        <button className="lm-close" onClick={onClose} aria-label="Close">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6L6 18"/>
          </svg>
        </button>

        <div className="lm-head">
          <div className="lm-logo">
            <img src={tool.logo} alt={tool.name} />
          </div>
          <span className="lm-kicker">Admin Portal</span>
          <h2 className="lm-title">Sign in to {tool.short}</h2>
          <p className="lm-sub">{tool.name}</p>
        </div>

        <form onSubmit={submit} className="lm-form">
          <label className="lm-field">
            <span>Username</span>
            <input
              ref={inputRef}
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="admin"
              autoComplete="username"
              required
            />
          </label>
          <label className="lm-field">
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
          </label>

          {error && <div className="lm-error">{error}</div>}

          <div className="lm-row">
            <label className="lm-check">
              <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} />
              <span>Remember me</span>
            </label>
            <button type="button" className="lm-link">Forgot?</button>
          </div>

          <button type="submit" className="lm-submit">
            <span>Sign In</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </button>
        </form>

        <div className="lm-hint">
          Demo · <b>admin</b> / <b>sandatharu2026</b>
        </div>
      </div>
    </div>
  );
}