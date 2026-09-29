import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CARDS = [
  { t: 'Source Control', d: 'Careful attention to sourcing and collection.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-7.6 8-13a8 8 0 1 0-16 0c0 5.4 8 13 8 13z"/><circle cx="12" cy="9" r="3"/></svg> },
  { t: 'Product Preparation', d: 'Proper handling and preparation before supply.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 7l-8-4-8 4v10l8 4 8-4z"/><path d="M4 7l8 4 8-4M12 11v10"/></svg> },
  { t: 'Consistency', d: 'Working toward consistent product quality.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m5 12 5 5L20 7"/></svg> },
  { t: 'Customer Requirements', d: 'Understanding specifications and requirements before supply.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg> }
];

export default function Quality() {
  return (
    <section className="c-section c-section--soft">
      <div className="c-container">
        <div className="coco-q__head">
          <span className="c-kicker">Quality & Consistency</span>
          <h2 className="c-display c-d-lg coco-q__title">
            Quality starts <em className="c-d-em">at the source.</em>
          </h2>
          <p className="c-lead" style={{ marginTop: 20 }}>
            We understand that consistent sourcing, careful handling and organized processing are
            important for reliable product supply. Our focus is to improve consistency across
            sourcing, preparation, processing, packaging and delivery.
          </p>
        </div>

        <div className="coco-q__grid">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.t}
              className="coco-q__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * .08, duration: .6 }}
            >
              <div className="coco-q__icon">{c.icon}</div>
              <h3 className="coco-q__t">{c.t}</h3>
              <p className="coco-q__d">{c.d}</p>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 50 }}>
          <Link to="/coco/contact" className="c-btn c-btn--primary">
            <span>Discuss Your Requirements</span>
            <svg className="c-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}