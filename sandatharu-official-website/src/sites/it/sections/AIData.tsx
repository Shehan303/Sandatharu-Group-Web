import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ITEMS = [
  'AI-assisted workflows',
  'Document processing',
  'OCR & extraction',
  'Intelligent search',
  'Data analysis',
  'Chat interfaces',
  'Recommendations',
  'Automation'
];

export default function AIData() {
  return (
    <section className="it-section it-ai">
      <div className="it-container it-ai__grid">
        <div>
          <span className="it-kicker">AI & Data</span>
          <h2 className="it-display it-d-lg it-ai__title">
            Exploring the Next Generation of <em>Technology.</em>
          </h2>
          <p className="it-lead it-ai__lead">
            Artificial intelligence is changing how businesses work. We explore practical ways
            AI and intelligent automation can support digital products and business processes.
          </p>

          <div className="it-ai__list">
            {ITEMS.map((x, i) => (
              <motion.div
                key={x}
                className="it-ai__item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .05, duration: .4 }}
              >
                <span className="it-ai__dot" />
                {x}
              </motion.div>
            ))}
          </div>

          <div style={{ marginTop: 30 }}>
            <Link to="/it/contact" className="it-btn it-btn--blue">
              <span>Discuss an AI Idea</span>
              <svg className="it-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </Link>
          </div>
        </div>

        <div className="it-ai__visual">
          <div className="it-ai__ring" />
          <div className="it-ai__center">
            AI<br /><em>+ Data</em>
          </div>
        </div>
      </div>
    </section>
  );
}