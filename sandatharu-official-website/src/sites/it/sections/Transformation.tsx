import { motion } from 'framer-motion';

const BEFORE = ['Paper', 'Manual Entry', 'Spreadsheets', 'Phone Calls', 'Repeated Work', 'Difficult Reporting'];
const AFTER  = ['Digital Forms', 'Centralized Data', 'Automated Workflow', 'Real-time Tracking', 'Dashboards', 'Better Decisions'];

export default function Transformation() {
  return (
    <section className="it-section it-tr">
      <div className="it-container">
        <div className="it-tr__head">
          <span className="it-kicker">Digital Transformation</span>
          <h2 className="it-display it-d-lg it-tr__title">
            From Manual to <em style={{ color: 'var(--blue)', fontStyle: 'normal' }}>Digital.</em>
          </h2>
        </div>

        <div className="it-tr__grid">
          <motion.div
            className="it-tr__col it-tr__col--before"
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: .8 }}
          >
            <span className="it-tr__label">Before</span>
            {BEFORE.map(x => <div key={x} className="it-tr__step">{x}</div>)}
          </motion.div>

          <motion.div
            className="it-tr__arrow"
            initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: .6, delay: .5 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </motion.div>

          <motion.div
            className="it-tr__col it-tr__col--after"
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: .8 }}
          >
            <span className="it-tr__label">After</span>
            {AFTER.map(x => <div key={x} className="it-tr__step">{x}</div>)}
          </motion.div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 60, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
          <p className="it-alt" style={{ fontSize: '1.2rem', color: 'var(--navy)', lineHeight: 1.5 }}>
            We help organizations move from disconnected processes to connected digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}