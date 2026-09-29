import { motion } from 'framer-motion';
import './ourstory.css';

const TIMELINE = [
  { k: '01', label: 'Our Beginning',  color: 'var(--blue)' },
  { k: '02', label: 'Our Growth',     color: 'var(--green)' },
  { k: '03', label: 'Our Businesses', color: 'var(--yellow)' },
  { k: '04', label: 'Our Future',     color: 'var(--red)' }
];

const IMGS = [
  'https://images.unsplash.com/photo-1580984969071-a8da5656c2fb?w=900&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=900&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=900&q=80&auto=format&fit=crop'
];

export default function OurStory() {
  return (
    <section className="section story slant-top">
      <div className="container story__grid">
        <div className="story__left">
          <motion.span className="kicker" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Our Story
          </motion.span>
          <motion.h2
            className="display display-lg story__title"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }} transition={{ duration: .8 }}
          >
            FROM NATURAL RESOURCES TO MODERN SOLUTIONS.
          </motion.h2>
          <motion.p
            className="lead"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: .15 }}
          >
            Sandatharu brings different services together under one growing Sri Lankan
            business group — from sustainable coconut products to modern travel and
            digital technology.
          </motion.p>

          <div className="story__timeline">
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.k}
                className="story__node"
                style={{ '--accent': t.color } as React.CSSProperties}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }} transition={{ delay: i * .1 }}
              >
                <span className="story__node-ring">{t.k}</span>
                <span className="story__node-label">{t.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="story__right">
          {IMGS.map((src, i) => (
            <motion.div
              key={i}
              className={`story__img story__img--${i}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0, rotate: [-5, 3, -2][i] }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: .9, delay: i * .15, ease: [.16,1,.3,1] }}
            >
              <img src={src} alt="" loading="lazy" />
            </motion.div>
          ))}
          <div className="story__stamp">
            <span>SINCE</span>
            <strong>20XX</strong>
          </div>
        </div>
      </div>
    </section>
  );
}