import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CaseStudy() {
  return (
    <section className="it-section it-cs">
      <div className="it-container it-cs__grid">
        <motion.div
          className="it-cs__media"
          initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: .9 }}
        >
          <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1400&q=85&auto=format&fit=crop" alt="Case study" />
        </motion.div>

        <div>
          <span className="it-kicker">Featured Case Study</span>
          <h2 className="it-display it-d-lg it-cs__title">
            A Solution Built <em style={{ color: 'var(--blue)', fontStyle: 'normal' }}>Around a Real Problem.</em>
          </h2>
          <p className="it-lead">
            We replaced a manual, spreadsheet-heavy workflow with a centralized digital system —
            improving visibility, cutting repetitive tasks and giving managers real-time data
            they could act on.
          </p>

          <div className="it-cs__stats">
            <div className="it-cs__stat"><b>-60%</b><span>Manual Work</span></div>
            <div className="it-cs__stat"><b>3×</b><span>Faster Reporting</span></div>
            <div className="it-cs__stat"><b>100%</b><span>Digital Records</span></div>
            <div className="it-cs__stat"><b>24/7</b><span>Visibility</span></div>
          </div>

          <div style={{ marginTop: 30 }}>
            <Link to="/it/projects" className="it-btn it-btn--blue">
              <span>Read Full Case Study</span>
              <svg className="it-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}