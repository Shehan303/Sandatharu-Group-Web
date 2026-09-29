import { useEffect, useState } from 'react';
import { ADMIN_TOOLS } from '../data/adminConfig';

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
}

const STORAGE = (tool: string) => `sandatharu_news_${tool}`;
const CATS = ['Company', 'Products', 'Travel', 'Partnerships', 'Events'];

export default function NewsEditor({ tool }: { tool: string }) {
  const toolConf = ADMIN_TOOLS.find(t => t.key === tool);
  const [items, setItems] = useState<NewsItem[]>([]);
  const [editing, setEditing] = useState<NewsItem | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE(tool));
      setItems(raw ? JSON.parse(raw) : seedNews(tool));
    } catch { setItems(seedNews(tool)); }
    setEditing(null);
    setSaved(false);
  }, [tool]);

  const persist = (list: NewsItem[]) => {
    setItems(list);
    localStorage.setItem(STORAGE(tool), JSON.stringify(list));
    setSaved(true);
    setTimeout(() => setSaved(false), 2200);
  };

  const startNew = () => setEditing({
    id: `n-${Date.now()}`,
    title: '',
    category: 'Company',
    date: new Date().toISOString().slice(0, 10),
    excerpt: '',
    image: toolConf?.heroImage || ''
  });

  const save = () => {
    if (!editing) return;
    const exists = items.find(i => i.id === editing.id);
    const next = exists
      ? items.map(i => i.id === editing.id ? editing : i)
      : [editing, ...items];
    persist(next);
    setEditing(null);
  };

  const remove = (id: string) => persist(items.filter(i => i.id !== id));

  return (
    <div className="ed">
      <div className="ed__head">
        <div>
          <span className="ed__kicker">News & Updates</span>
          <h2 className="ed__title">Manage News</h2>
          <p className="ed__sub">Create, edit and remove news posts for {toolConf?.name}.</p>
        </div>
        <div className="ed__actions">
          <button className="ed__btn ed__btn--primary" onClick={startNew}>+ New Post</button>
        </div>
      </div>

      {saved && <div className="ed__toast">✓ Saved</div>}

      {editing && (
        <div className="news-editor">
          <h3 className="news-editor__title">{items.find(i => i.id === editing.id) ? 'Edit Post' : 'New Post'}</h3>
          <div className="news-editor__grid">
            <label className="ed__field">
              <span>Title</span>
              <input value={editing.title} onChange={e => setEditing({ ...editing, title: e.target.value })} placeholder="Post title" />
            </label>
            <label className="ed__field">
              <span>Category</span>
              <select value={editing.category} onChange={e => setEditing({ ...editing, category: e.target.value })}>
                {CATS.map(c => <option key={c}>{c}</option>)}
              </select>
            </label>
            <label className="ed__field">
              <span>Date</span>
              <input type="date" value={editing.date} onChange={e => setEditing({ ...editing, date: e.target.value })} />
            </label>
            <label className="ed__field">
              <span>Image URL</span>
              <input value={editing.image} onChange={e => setEditing({ ...editing, image: e.target.value })} placeholder="https://..." />
            </label>
            <label className="ed__field ed__field--full">
              <span>Excerpt / Description</span>
              <textarea rows={3} value={editing.excerpt} onChange={e => setEditing({ ...editing, excerpt: e.target.value })} placeholder="Short summary..." />
            </label>
          </div>
          <div className="news-editor__actions">
            <button className="ed__btn ed__btn--ghost" onClick={() => setEditing(null)}>Cancel</button>
            <button className="ed__btn ed__btn--primary" onClick={save}>Save Post</button>
          </div>
        </div>
      )}

      <div className="news-list">
        {items.length === 0 && <div className="news-empty">No posts yet. Click "New Post" to create one.</div>}
        {items.map(n => (
          <div key={n.id} className="news-row">
            <div className="news-row__img" style={{ backgroundImage: `url(${n.image})` }} />
            <div className="news-row__body">
              <div className="news-row__meta">
                <span className="news-row__cat">{n.category}</span>
                <span>{n.date}</span>
              </div>
              <h4 className="news-row__title">{n.title || '(untitled)'}</h4>
              <p className="news-row__excerpt">{n.excerpt || 'No description yet.'}</p>
            </div>
            <div className="news-row__actions">
              <button className="news-row__btn" onClick={() => setEditing(n)}>Edit</button>
              <button className="news-row__btn news-row__btn--danger" onClick={() => remove(n.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function seedNews(tool: string): NewsItem[] {
  const name = ADMIN_TOOLS.find(t => t.key === tool)?.name || 'Sandatharu';
  return [
    { id: '1', title: `${name} expands operations`, category: 'Company', date: '2026-02-12', excerpt: 'New services and partnerships launching this quarter.', image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=80&auto=format&fit=crop' }
  ];
}