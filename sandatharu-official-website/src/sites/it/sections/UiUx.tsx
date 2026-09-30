import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FLOW = ['Research', 'Understand Users', 'User Flow', 'Wireframe', 'Prototype', 'Visual Design', 'Usability', 'Development'];

export default function UiUx() {
  return (
    <section className="it-section it-ux">
      <div className="it-container it-ux__grid">
        <div>
          <span className="it-kicker it-ux__kicker">UI/UX Design</span>
          <h2 className="it-display it-d-lg it-ux__title">
            Beautiful Interfaces. <em>Better Experiences.</em>
          </h2>
          <p className="it-lead it-ux__lead">
            Great technology should be easy to understand and enjoyable to use. Our UI/UX
            process focuses on the people who will actually use the product.
          </p>

          <div className="it-ux__flow">
            {FLOW.map((f, i) => (
              <motion.div
                key={f}
                className="it-ux__step"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .06, duration: .5 }}
              >
                <span className="it-ux__step-num">0{i + 1}</span>
                <span className="it-ux__step-t">{f}</span>
              </motion.div>
            ))}
          </div>

          <div style={{ marginTop: 30 }}>
            <Link to="/it/services" className="it-btn it-btn--blue">
              <span>See Design Approach</span>
              <svg className="it-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </Link>
          </div>
        </div>

        <div className="it-ux__visual">
          <motion.div
            className="it-ux__card it-ux__card--1"
            style={{ '--r': '-4deg' } as React.CSSProperties}
            initial={{ opacity: 0, scale: .9 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: .8 }}
          >
            <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80&auto=format&fit=crop" alt="" />
          </motion.div>
          <motion.div
            className="it-ux__card it-ux__card--2"
            style={{ '--r': '3deg' } as React.CSSProperties}
            initial={{ opacity: 0, scale: .9 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: .8, delay: .2 }}
          >
            <img src="https://images.unsplash.com/photo-1618788372246-79faff0c3742?w=800&q=80&auto=format&fit=crop" alt="" />
          </motion.div>
          <motion.div
            className="it-ux__card it-ux__card--3"
            style={{ '--r': '-2deg' } as React.CSSProperties}
            initial={{ opacity: 0, scale: .9 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: .8, delay: .4 }}
          >
            <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80&auto=format&fit=crop" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}