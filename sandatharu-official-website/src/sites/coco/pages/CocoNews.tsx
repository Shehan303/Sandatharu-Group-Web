import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CocoLayout from '../components/CocoLayout';
import { COCO_NEWS, NEWS_CATS } from '../data/cocoData';

export default function CocoNews() {
  const [cat, setCat] = useState('All');
  const list = cat === 'All' ? COCO_NEWS : COCO_NEWS.filter(n => n.cat === cat);
  const featured = list.find(n => n.featured) || list[0];
  const rest = list.filter(n => n.id !== featured?.id);

  return (
    <CocoLayout>
      <section className="coco-pagehero">
        <div
          className="coco-pagehero__bg"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?w=2000&q=85&auto=format&fit=crop)'
          }}
        />
        <div className="coco-pagehero__veil" />
        <div className="coco-pagehero__inner">
          <div className="coco-pagehero__crumb">
            <Link to="/coco">Coco</Link> / News
          </div>
          <h1 className="coco-pagehero__title">
            Coco Insights <em>&amp; Updates.</em>
          </h1>
          <p className="coco-pagehero__lead">
            Company news, product updates, industry news, sustainability stories and
            partnership announcements.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="c-section" style={{ paddingBottom: 30 }}>
        <div className="c-container">
          <div className="coco-cat__filters">
            {NEWS_CATS.map(c => (
              <button
                key={c}
                className={`coco-cat__filter ${cat === c ? 'is-active' : ''}`}
                onClick={() => setCat(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="c-section" style={{ paddingTop: 0 }}>
          <div className="c-container">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .7 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr',
                gap: 50,
                alignItems: 'center',
                background: 'var(--cream-2)',
                borderRadius: 'var(--r-xl)',
                overflow: 'hidden',
                border: '1px solid var(--line)'
              }}
            >
              <div style={{ aspectRatio: '4 / 3', overflow: 'hidden' }}>
                <img
                  src={featured.img}
                  alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '40px 40px 40px 0' }}>
                <div className="coco-news__meta" style={{ marginBottom: 16 }}>
                  <span className="coco-news__cat">{featured.cat}</span>
                  <span>{featured.date}</span>
                </div>
                <h2 className="c-display c-d-md" style={{ marginBottom: 20 }}>
                  {featured.t}
                </h2>
                <p className="c-lead" style={{ marginBottom: 26 }}>{featured.d}</p>
                <Link to="/coco/news" className="c-btn c-btn--primary">
                  <span>Read Full Story</span>
                  <svg className="c-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 6l6 6-6 6"/>
                  </svg>
                </Link>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* Grid */}
      <section className="c-section" style={{ paddingTop: 0 }}>
        <div className="c-container">
          <div className="coco-news__grid">
            {rest.map((p, i) => (
              <motion.article
                key={p.id}
                className="coco-news__card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * .07, duration: .6 }}
              >
                <div className="coco-news__img">
                  <img src={p.img} alt="" loading="lazy" />
                </div>
                <div className="coco-news__body">
                  <div className="coco-news__meta">
                    <span className="coco-news__cat">{p.cat}</span>
                    <span>{p.date}</span>
                  </div>
                  <h3 className="coco-news__t">{p.t}</h3>
                  <p className="coco-news__d">{p.d}</p>
                  <Link
                    to="/coco/news"
                    style={{
                      color: 'var(--moss)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6
                    }}
                  >
                    Read More
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M13 6l6 6-6 6"/>
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {rest.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: 60,
              color: 'var(--muted)',
              border: '1px dashed var(--line)',
              borderRadius: 'var(--r-md)'
            }}>
              No posts in this category yet.
            </div>
          )}
        </div>
      </section>
    </CocoLayout>
  );
}