import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BUSINESSES } from '../../../shared/data/businesses';
import './showcase.css';

export default function BusinessShowcase() {
  return (
    <section className="section showcase" id="businesses">
      <div className="container showcase__head">
        <motion.span className="kicker" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Our Businesses
        </motion.span>
        <motion.h2
          className="display display-lg showcase__title"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: .8 }}
        >
          THREE COMPANIES.<br />ONE STANDARD.
        </motion.h2>
      </div>

      {BUSINESSES.map((b, i) => (
        <motion.article
          key={b.key}
          className={`show ${i % 2 === 1 ? 'show--reverse' : ''}`}
          style={{ '--accent': b.accent, '--soft': b.soft } as React.CSSProperties}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: .9, ease: [.16,1,.3,1] }}
        >
          <div className="show__inner container">
            <div className="show__media">
              <img src={b.card} alt={b.name} loading="lazy" />
              <span className="show__num display">0{i + 1}</span>
              <span className="show__accent" />
            </div>
            <div className="show__body">
              <div className="show__logo">
                <img src={b.logo} alt={b.name} />
              </div>
              <h3 className="display display-md show__title">{b.headline}</h3>
              <p className="show__desc">{b.desc}</p>
              <ul className="show__bullets">
                {b.bullets.map(x => (
                  <li key={x}>
                    <span className="show__bullet-mark" />
                    {x}
                  </li>
                ))}
              </ul>
              <Link to={b.route} className="btn btn-dark show__cta">
                Visit {b.short}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            </div>
          </div>
        </motion.article>
      ))}
    </section>
  );
}