import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BUSINESSES } from '../../../shared/data/businesses';
import './panels.css';

export default function BusinessPanels() {
  return (
    <section className="section panels" id="businesses">
      <div className="container">
        <div className="panels__head">
          <motion.span className="kicker" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Our Businesses
          </motion.span>
          <motion.h2
            className="display display-lg panels__title"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }} transition={{ duration: .8 }}
          >
            THREE COMPANIES.<br />ONE STANDARD.
          </motion.h2>
        </div>
      </div>

      {BUSINESSES.map((b, i) => (
        <motion.article
          key={b.key}
          className={`panel ${i % 2 === 1 ? 'panel--reverse' : ''}`}
          style={{ '--accent': b.accent, '--soft': b.soft } as React.CSSProperties}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: .8, ease: [.16,1,.3,1] }}
        >
          <div className="panel__inner container">
            <div className="panel__media">
              <img src={b.card} alt={b.name} loading="lazy" />
              <span className="panel__num display">0{i + 1}</span>
            </div>
            <div className="panel__body">
              <span className="panel__kicker kicker" style={{ color: b.accent }}>{b.emoji} {b.short}</span>
              <h3 className="display display-md panel__title">{b.tagline}</h3>
              <p className="panel__desc">{b.desc}</p>
              <ul className="panel__bullets">
                {b.bullets.map(x => <li key={x}>{x}</li>)}
              </ul>
              <Link to={b.route} className="btn btn-dark panel__cta">Visit {b.short} →</Link>
            </div>
          </div>
        </motion.article>
      ))}
    </section>
  );
}