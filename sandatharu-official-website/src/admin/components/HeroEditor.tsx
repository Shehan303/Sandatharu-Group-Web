import { useEffect, useState } from 'react';
import { ADMIN_TOOLS } from '../data/adminConfig';

export interface HeroSlide {
  id: string;
  headline: string;
  sub: string;
  image: string;
  cta: string;
}

const STORAGE = (tool: string) => `sandatharu_hero_${tool}`;

export default function HeroEditor({ tool }: { tool: string }) {
  const toolConf = ADMIN_TOOLS.find(t => t.key === tool);
  const [slides, setSlides] = useState<HeroSlide[]>([]);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE(tool));
      if (raw) setSlides(JSON.parse(raw));
      else setSlides(defaultSlides(tool));
    } catch { setSlides(defaultSlides(tool)); }
    setSaved(false);
  }, [tool]);

  const update = (id: string, patch: Partial<HeroSlide>) =>
    setSlides(s => s.map(x => x.id === id ? { ...x, ...patch } : x));

  const add = () =>
    setSlides(s => [...s, {
      id: `s-${Date.now()}`,
      headline: 'New Slide Headline',
      sub: 'Short supporting text goes here.',
      image: toolConf?.heroImage || '',
      cta: 'Explore'
    }]);

  const remove = (id: string) => setSlides(s => s.filter(x => x.id !== id));

  const save = () => {
    localStorage.setItem(STORAGE(tool), JSON.stringify(slides));
    setSaved(true);
    setTimeout(() => setSaved(false), 2200);
  };

  return (
    <div className="ed">
      <div className="ed__head">
        <div>
          <span className="ed__kicker">Hero Section</span>
          <h2 className="ed__title">Hero Slides</h2>
          <p className="ed__sub">Change images and text for the hero slider on the {toolConf?.name} homepage.</p>
        </div>
        <div className="ed__actions">
          <button className="ed__btn ed__btn--ghost" onClick={add}>+ Add Slide</button>
          <button className="ed__btn ed__btn--primary" onClick={save}>
            {saved ? '✓ Saved' : 'Save Changes'}
          </button>
        </div>
      </div>

      <div className="ed__list">
        {slides.map((s, i) => (
          <div key={s.id} className="hero-card">
            <div className="hero-card__preview" style={{ backgroundImage: `url(${s.image})` }}>
              <span className="hero-card__num">0{i + 1}</span>
            </div>
            <div className="hero-card__fields">
              <label className="ed__field">
                <span>Headline</span>
                <input value={s.headline} onChange={e => update(s.id, { headline: e.target.value })} />
              </label>
              <label className="ed__field">
                <span>Subtext</span>
                <textarea rows={2} value={s.sub} onChange={e => update(s.id, { sub: e.target.value })} />
              </label>
              <label className="ed__field">
                <span>Image URL</span>
                <input value={s.image} onChange={e => update(s.id, { image: e.target.value })} />
              </label>
              <label className="ed__field">
                <span>CTA Label</span>
                <input value={s.cta} onChange={e => update(s.id, { cta: e.target.value })} />
              </label>
            </div>
            <button className="hero-card__remove" onClick={() => remove(s.id)} aria-label="Remove slide">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M8 6v14a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6M10 11v6M14 11v6"/>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function defaultSlides(tool: string): HeroSlide[] {
  const toolConf = ADMIN_TOOLS.find(t => t.key === tool);
  if (tool === 'group') {
    return [
      { id: '1', headline: 'ROOTED IN SRI LANKA.', sub: 'From natural resources to sustainable opportunities.', image: 'https://images.unsplash.com/photo-1550985616-10810253b84d?w=1600&q=80&auto=format&fit=crop', cta: 'Explore Coco' },
      { id: '2', headline: 'DISCOVER. TRAVEL.', sub: 'Memorable journeys across the beauty of Sri Lanka.', image: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=1600&q=80&auto=format&fit=crop', cta: 'Explore Travels' },
      { id: '3', headline: 'IDEAS INTO DIGITAL.', sub: 'Software, web and digital solutions for modern businesses.', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80&auto=format&fit=crop', cta: 'Explore IT' },
      { id: '4', headline: 'ONE GROUP.', sub: 'Sustainable products. Meaningful journeys. Digital innovation.', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=80&auto=format&fit=crop', cta: 'Discover Sandatharu' }
    ];
  }
  return [{
    id: '1',
    headline: `${toolConf?.name.toUpperCase()}.`,
    sub: toolConf?.tag || '',
    image: toolConf?.heroImage || '',
    cta: 'Learn More'
  }];
}