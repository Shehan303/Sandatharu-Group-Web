import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const STEPS = ['Idea', 'Discussion', 'Research', 'Prototype', 'MVP', 'Launch', 'Growth'];

export default function Startup() {
  return (
    <section className="it-section it-startup">
      <div className="it-glow it-glow--blue" style={{ width: 500, height: 500, top: -150, left: -100, opacity: .4 }} />
      <div className="it-container it-startup__grid">
        <div>
          <span className="it-kicker" style={{ color: 'var(--cyan-2)' }}>Startup Support</span>
          <h2 className="it-display it-d-lg it-startup__title">
            Have an Idea? <em>Let&apos;s Build It.</em>
          </h2>
          <p className="it-lead it-startup__lead">
            You don&apos;t need to have everything figured out before starting. If you have an idea
            for an application, platform or digital business, we can help turn the idea into a
            structured product.
          </p>

          <div className="it-startup__flow">
            {STEPS.map(s => <span key={s} className="it-startup__step">{s}</span>)}
          </div>

          <div style={{ marginTop: 30 }}>
            <Link to="/it/contact" className="it-btn it-btn--blue">
              <span>Discuss My Idea</span>
              <svg className="it-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </Link>
          </div>
        </div>

        <motion.div
          className="it-startup__media"
          initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: .9 }}
        >
          <img src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=1200&q=85&auto=format&fit=crop" alt="Startup" />
        </motion.div>
      </div>
    </section>
  );
}