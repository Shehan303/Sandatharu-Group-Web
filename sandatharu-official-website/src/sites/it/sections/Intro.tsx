import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Intro() {
  return (
    <section className="it-section">
      <div className="it-grid-bg" />
      <div className="it-container" style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 60, alignItems: 'center' }}>
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .8 }}>
          <span className="it-kicker">About Sandatharu IT</span>
          <h2 className="it-display it-d-lg" style={{ marginTop: 14, marginBottom: 24 }}>
            Technology should solve problems. <em className="it-gradient-text" style={{ fontStyle: 'normal' }}>Not create more.</em>
          </h2>
          <p className="it-lead" style={{ marginBottom: 16 }}>
            Sandatharu IT Solutions is a technology-focused business that helps organizations turn ideas, challenges and business requirements into practical digital solutions.
          </p>
          <p className="it-lead" style={{ marginBottom: 30 }}>
            We work across software development, web applications, mobile apps, UI/UX design, business systems, automation, integrations and cloud deployment.
          </p>
          <Link to="/it/about" className="it-btn it-btn--primary">
            <span>Learn About Us</span>
            <svg className="it-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .8 }}
          style={{ position: 'relative' }}>
          <div className="it-imgcard" style={{ aspectRatio: '4/5' }}>
            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=85&auto=format&fit=crop" alt="Team at work" />
          </div>
          <div style={{
            position: 'absolute', bottom: -20, left: -20, padding: '20px 24px',
            background: '#fff', borderRadius: 'var(--r-lg)', boxShadow: 'var(--sh-lg)',
            border: '1px solid var(--line)'
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--blue)', fontWeight: 700 }}>Approach</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 600, marginTop: 6 }}>Understand → Design → Build</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}