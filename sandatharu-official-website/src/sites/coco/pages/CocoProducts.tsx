import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CocoLayout from '../components/CocoLayout';
import { COCO_PRODUCTS } from '../data/cocoData';

const FILTERS = [
  { k: 'all', l: 'All Products' },
  { k: 'shells', l: 'Coconut Shell' },
  { k: 'husk', l: 'Coconut Husk' },
  { k: 'charcoal', l: 'Charcoal' },
  { k: 'briquettes', l: 'Briquettes' },
  { k: 'materials', l: 'Other Materials' }
];

export default function CocoProducts() {
  const [filter, setFilter] = useState('all');
  const list = filter === 'all' ? COCO_PRODUCTS : COCO_PRODUCTS.filter(p => p.id === filter);

  return (
    <CocoLayout>
      <section className="coco-pagehero">
        <div className="coco-pagehero__bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1580984969071-a8da5656c2fb?w=2000&q=85&auto=format&fit=crop)' }} />
        <div className="coco-pagehero__veil" />
        <div className="coco-pagehero__inner">
          <div className="coco-pagehero__crumb"><Link to="/coco">Coco</Link> / Products</div>
          <h1 className="coco-pagehero__title">
            Our Coconut <em>Product Range.</em>
          </h1>
          <p className="coco-pagehero__lead">
            Product specifications available upon inquiry. Explore our range of coconut-based
            resources and value-added products.
          </p>
        </div>
      </section>

      <section className="c-section">
        <div className="c-container">
          <div className="coco-cat__filters">
            {FILTERS.map(f => (
              <button
                key={f.k}
                className={`coco-cat__filter ${filter === f.k ? 'is-active' : ''}`}
                onClick={() => setFilter(f.k)}
              >
                {f.l}
              </button>
            ))}
          </div>

          <div className="coco-cat__grid">
            {list.map((p, i) => (
              <motion.article
                key={p.id}
                className="coco-cat__card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .06, duration: .6 }}
              >
                <div className="coco-cat__img">
                  <img src={p.img} alt={p.name} loading="lazy" />
                  <span className="coco-cat__tag">{p.tag}</span>
                </div>
                <div className="coco-cat__body">
                  <h3 className="coco-cat__t">{p.name}</h3>
                  <p className="coco-cat__d">{p.short}</p>
                  <div className="coco-cat__meta">Available for Bulk / B2B</div>
                  <Link to={`/coco/products/${p.id}`} className="coco-cat__link">
                    View Details
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </CocoLayout>
  );
}