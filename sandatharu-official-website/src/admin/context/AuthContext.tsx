import { createContext, useContext, useEffect, useState } from 'react';
import { ADMIN_CREDENTIALS } from '../data/adminConfig';

interface AuthState {
  user: string | null;
  tool: string | null;
  login: (u: string, p: string, toolKey: string) => boolean;
  logout: () => void;
  setTool: (toolKey: string) => void;
}

const Ctx = createContext<AuthState | null>(null);
const KEY = 'sandatharu_admin_session';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<string | null>(null);
  const [tool, setToolState] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setUser(parsed.user || null);
        setToolState(parsed.tool || null);
      }
    } catch {}
  }, []);

  const login = (u: string, p: string, toolKey: string) => {
    if (u === ADMIN_CREDENTIALS.username && p === ADMIN_CREDENTIALS.password) {
      setUser(u);
      setToolState(toolKey);
      localStorage.setItem(KEY, JSON.stringify({ user: u, tool: toolKey }));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setToolState(null);
    localStorage.removeItem(KEY);
  };

  const setTool = (toolKey: string) => {
    setToolState(toolKey);
    if (user) localStorage.setItem(KEY, JSON.stringify({ user, tool: toolKey }));
  };

  return (
    <Ctx.Provider value={{ user, tool, login, logout, setTool }}>
      {children}
    </Ctx.Provider>
  );
}

export function useAuth() {
  const c = useContext(Ctx);
  if (!c) throw new Error('useAuth outside provider');
  return c;
}