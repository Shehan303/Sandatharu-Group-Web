import { motion } from 'framer-motion';
import { DESTINATIONS } from '../data/travelsData';

export default function Destinations() {
  return (
    <section className="t-section">
      <div className="t-container">
        <div className="t-dest__head">
          <span className="t-kicker">Explore Sri Lanka</span>
          <h2 className="t-display t-d-lg" style={{ marginTop: 12 }}>One Island.<br /><em style={{ color: 'var(--ocean)', fontStyle: 'normal' }}>Thousands of Experiences.</em></h2>
        </div>
        <div className="t-dest__grid">
          {DESTINATIONS.map((d, i) => (
            <motion.div
              key={d.id}
              className="t-dest__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * .08, duration: .6 }}
            >
              <img src={d.img} alt={d.title} loading="lazy" />
              <div className="t-dest__body">
                <h3 className="t-dest__t">{d.title}</h3>
                <p className="t-dest__d">{d.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}