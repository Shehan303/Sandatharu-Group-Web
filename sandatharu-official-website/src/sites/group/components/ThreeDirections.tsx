import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BUSINESSES } from '../../../shared/data/businesses';
import './directions.css';

const NODE = {
  coco:    { emoji: '🌴', label: 'Products',   sub: 'Natural & sustainable' },
  travels: { emoji: '🚐', label: 'Mobility',   sub: 'Travel & transport' },
  it:      { emoji: '💻', label: 'Technology', sub: 'Software & digital' }
} as const;

export default function ThreeDirections() {
  return (
    <section className="directions chevron-up">
      <div className="container">
        <div className="directions__head">
          <motion.span className="kicker directions__kicker" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            One Group · Three Directions
          </motion.span>
          <motion.h2
            className="display display-lg directions__title"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: .8 }}
          >
            DIFFERENT WORLDS.<br />ONE VISION.
          </motion.h2>
        </div>

        <div className="directions__chart">
          <div className="directions__root">
            <span className="directions__root-pulse" />
            SANDATHARU
          </div>

          <svg className="directions__lines" viewBox="0 0 1000 200" preserveAspectRatio="none" aria-hidden>
            <motion.path
              d="M500 0 V40 M500 40 H160 V150 M500 40 H500 V150 M500 40 H840 V150"
              fill="none" stroke="rgba(255,255,255,.22)" strokeWidth="2"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
              viewport={{ once: true }} transition={{ duration: 1.6, ease: 'easeInOut' }}
            />
            <motion.path
              d="M160 150 V180 H840 V180 H160"
              fill="none" stroke="rgba(255,255,255,.22)" strokeWidth="2"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
              viewport={{ once: true }} transition={{ duration: 1.6, delay: .9, ease: 'easeInOut' }}
            />
          </svg>

          <div className="directions__nodes">
            {BUSINESSES.map((b, i) => {
              const n = NODE[b.key];
              return (
                <motion.div
                  key={b.key}
                  className="directions__node"
                  style={{ '--accent': b.accent } as React.CSSProperties}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }} transition={{ delay: .3 + i * .18, duration: .6 }}
                >
                  <span className="directions__ring"><span>{n.emoji}</span></span>
                  <strong>{n.label}</strong>
                  <em>{n.sub}</em>
                  <Link to={b.route} className="directions__link">Enter →</Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="directions__foot"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 1.2 }}
          >
            GROWING TOGETHER
          </motion.div>
        </div>
      </div>
    </section>
  );
}