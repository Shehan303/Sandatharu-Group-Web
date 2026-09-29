import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FAQS } from '../data/cocoData';

const POSTS = [
  { cat: 'Company News', date: 'Feb 12, 2026', t: 'Expanding collection network into new regions', d: 'New collection points and processing partnerships across the coconut belt.', img: 'https://images.unsplash.com/photo-1580984969071-a8da5656c2fb?w=900&q=85&auto=format&fit=crop' },
  { cat: 'Product Update', date: 'Jan 28, 2026', t: 'New briquette line introduced', d: 'Higher density briquettes ideal for export and industrial use.', img: 'https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?w=900&q=85&auto=format&fit=crop' },
  { cat: 'Sustainability', date: 'Jan 15, 2026', t: 'Waste-to-value: a closer look', d: 'How coconut resources are finding new productive uses.', img: 'https://images.unsplash.com/photo-1550985616-10810253b84d?w=900&q=85&auto=format&fit=crop' }
];

const GALLERY = [
  { src: 'https://images.unsplash.com/photo-1580984969071-a8da5656c2fb?w=1200&q=85&auto=format&fit=crop', span: 2 },
  { src: 'https://images.unsplash.com/photo-1550985616-10810253b84d?w=1200&q=85&auto=format&fit=crop', span: 1 },
  { src: 'https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?w=1200&q=85&auto=format&fit=crop', span: 1 },
  { src: 'https://images.unsplash.com/photo-1602015569562-2a83f29e5b52?w=1200&q=85&auto=format&fit=crop', span: 1 },
  { src: 'https://images.unsplash.com/photo-1591336462674-e0c5eb7a14b7?w=1200&q=85&auto=format&fit=crop', span: 2 }
];

export default function News() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* NEWS */}
      <section className="c-section">
        <div className="c-container">
          <div className="coco-news__head">
            <div>
              <span className="c-kicker">News & Updates</span>
              <h2 className="c-display c-d-lg coco-news__title">
                Coco insights <em className="c-d-em">and industry updates.</em>
              </h2>
            </div>
            <Link to="/coco/news" className="c-btn c-btn--outline">
              <span>All Updates</span>
              <svg className="c-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          </div>

          <div className="coco-news__grid">
            {POSTS.map((p, i) => (
              <motion.article
                key={p.t}
                className="coco-news__card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * .1, duration: .6 }}
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
                  <Link to="/coco/news" style={{ color: 'var(--moss)', fontSize: '0.82rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    Read More
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="c-section c-section--soft">
        <div className="c-container">
          <div className="coco-gal__head">
            <span className="c-kicker">Gallery</span>
            <h2 className="c-display c-d-lg coco-gal__title">
              A look inside <em className="c-d-em">our operations.</em>
            </h2>
          </div>

          <div className="coco-gal__grid">
            {GALLERY.map((g, i) => (
              <motion.figure
                key={i}
                className="coco-gal__item"
                data-span={g.span}
                initial={{ opacity: 0, scale: .96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * .06, duration: .6 }}
              >
                <img src={g.src} alt="" loading="lazy" />
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="c-section coco-faq">
        <div className="c-container">
          <div className="coco-faq__head">
            <span className="c-kicker">Common Questions</span>
            <h2 className="c-display c-d-lg coco-faq__title">
              Frequently <em className="c-d-em">asked.</em>
            </h2>
          </div>

          <div className="coco-faq__list">
            {FAQS.map((f, i) => (
              <div key={f.q} className={`coco-faq__item ${openFaq === i ? 'is-open' : ''}`}>
                <button className="coco-faq__q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{f.q}</span>
                  <span className="coco-faq__icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 5v14M5 12h14"/>
                    </svg>
                  </span>
                </button>
                <div className="coco-faq__a">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}