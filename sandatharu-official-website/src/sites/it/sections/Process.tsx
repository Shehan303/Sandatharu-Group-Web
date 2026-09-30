import { motion } from 'framer-motion';
import { PROCESS } from '../data/itData';

export default function Process() {
  return (
    <section className="it-section it-section--soft">
      <div className="it-container">
        <div style={{ maxWidth: 720, marginBottom: 50 }}>
          <span className="it-kicker">Our Process</span>
          <h2 className="it-display it-d-lg" style={{ marginTop: 14 }}>
            How We <em className="it-gradient-text" style={{ fontStyle: 'normal' }}>Build.</em>
          </h2>
        </div>

        <div className="it-proc__track">
          {PROCESS.map((s, i) => (
            <motion.div
              key={s.n}
              className="it-proc__step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * .06, duration: .5 }}
            >
              <span className="it-proc__num">{s.n}</span>
              <h3 className="it-proc__t">{s.t}</h3>
              <p className="it-proc__d">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}