import { motion } from 'framer-motion';
import { INDUSTRIES } from '../data/itData';

export default function Industries() {
  return (
    <section className="it-section">
      <div className="it-container">
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 60px' }}>
          <span className="it-kicker">Industries</span>
          <h2 className="it-display it-d-lg" style={{ marginTop: 14 }}>
            Technology Across <em className="it-gradient-text" style={{ fontStyle: 'normal' }}>Different Industries.</em>
          </h2>
        </div>

        <div className="it-dest__grid">
          {INDUSTRIES.map((x, i) => (
            <motion.div
              key={x.t}
              className="it-dest__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
            >
              <div className="it-dest__img">
                <img src={x.img} alt={x.t} loading="lazy" />
              </div>
              <div className="it-dest__body">
                <h3>{x.t}</h3>
                <p>{x.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
