import { motion } from 'framer-motion';
import { TECH } from '../data/itData';

const GROUPS: { k: keyof typeof TECH; label: string }[] = [
  { k: 'frontend', label: 'Frontend' },
  { k: 'backend',  label: 'Backend' },
  { k: 'database', label: 'Databases' },
  { k: 'mobile',   label: 'Mobile' },
  { k: 'design',   label: 'Design' },
  { k: 'cloud',    label: 'Cloud & Deployment' }
];

export default function TechStack() {
  return (
    <section className="it-section" id="tech">
      <div className="it-container">
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 60px' }}>
          <span className="it-kicker">Technology Stack</span>
          <h2 className="it-display it-d-lg" style={{ marginTop: 14 }}>
            Technologies We <em className="it-gradient-text" style={{ fontStyle: 'normal' }}>Work With.</em>
          </h2>
        </div>

        <div className="it-tech__grid">
          {GROUPS.map((g, i) => (
            <motion.div
              key={g.k}
              className="it-tech__group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * .06, duration: .5 }}
            >
              <span className="it-tech__label">{g.label}</span>
              <div className="it-tech__list">
                {TECH[g.k].map(x => (
                  <span key={x} className="it-tech__chip">{x}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}