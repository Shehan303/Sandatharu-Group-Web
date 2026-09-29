import { useState } from 'react';
import { motion } from 'framer-motion';
import './gallery.css';

const IMGS = [
  { cat: 'coco',     src: 'https://images.unsplash.com/photo-1580984969071-a8da5656c2fb?w=900&q=80&auto=format&fit=crop', span: 2 },
  { cat: 'travels',  src: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=900&q=80&auto=format&fit=crop', span: 1 },
  { cat: 'it',       src: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=900&q=80&auto=format&fit=crop', span: 1 },
  { cat: 'group',    src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=80&auto=format&fit=crop', span: 1 },
  { cat: 'travels',  src: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=900&q=80&auto=format&fit=crop', span: 2 },
  { cat: 'coco',     src: 'https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?w=900&q=80&auto=format&fit=crop', span: 1 },
  { cat: 'it',       src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80&auto=format&fit=crop', span: 1 },
  { cat: 'group',    src: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=900&q=80&auto=format&fit=crop', span: 2 }
];

const FILTERS = [
  { k: 'all',      l: 'All' },
  { k: 'group',    l: 'Group' },
  { k: 'coco',     l: 'Coco' },
  { k: 'travels',  l: 'Travels' },
  { k: 'it',       l: 'IT' }
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const items = filter === 'all' ? IMGS : IMGS.filter(i => i.cat === filter);

  return (
    <section className="gl">
      <div className="container">
        <div className="gl__head">
          <span className="k">Gallery</span>
          <h2 className="d d-lg gl__title">A LOOK INSIDE SANDATHARU.</h2>
        </div>

        <div className="gl__filters">
          {FILTERS.map(f => (
            <button
              key={f.k}
              className={`gl__filter ${filter === f.k ? 'is-active' : ''}`}
              onClick={() => setFilter(f.k)}
            >
              {f.l}
            </button>
          ))}
        </div>

        <div className="gl__grid">
          {items.map((it, i) => (
            <motion.figure
              key={it.src + i}
              className="gl__item"
              data-span={it.span}
              layout
              initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: .5, delay: i * .04 }}
            >
              <img src={it.src} alt="" loading="lazy" />
              <figcaption className="gl__cap">{it.cat}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}