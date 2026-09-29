import { motion } from 'framer-motion';
import { EXPERIENCES } from '../data/travelsData';

export default function Experiences() {
  return (
    <section className="t-section t-section--navy">
      <div className="t-container">
        <div style={{ maxWidth: 720, marginBottom: 60 }}>
          <span className="t-kicker">Travel by Experience</span>
          <h2 className="t-display t-d-lg" style={{ marginTop: 12 }}>Choose Your <em style={{ color: 'var(--sunset)', fontStyle: 'normal' }}>Experience.</em></h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
          {EXPERIENCES.map((e, i) => (
            <motion.div
              key={e.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * .06, duration: .5 }}
              style={{
                padding: '26px 24px',
                background: 'rgba(255,255,255,.04)',
                border: '1px solid rgba(255,255,255,.1)',
                borderRadius: 'var(--r-lg)',
                borderLeft: '3px solid var(--sunset)'
              }}
            >
              <h3 className="t-alt" style={{ color: '#fff', fontSize: '1.1rem', marginBottom: 8 }}>{e.t}</h3>
              <p style={{ color: 'rgba(255,255,255,.65)', fontSize: '0.86rem', margin: 0, lineHeight: 1.6 }}>{e.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}