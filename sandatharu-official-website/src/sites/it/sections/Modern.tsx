import { motion } from 'framer-motion';

const CARDS = [
  {
    t: 'Automation & Smart Workflows',
    d: 'Repetitive manual tasks consume time and increase error. We design digital workflows that automate suitable processes.',
    chips: ['Approvals', 'Notifications', 'Data Processing', 'Reports'],
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3"/></svg>
  },
  {
    t: 'API & System Integration',
    d: 'Businesses use multiple systems. We connect applications and services so information can move between them efficiently.',
    chips: ['REST APIs', 'Payment', 'Auth', 'Data Exchange'],
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 12h16M12 4v16M6 6l12 12M18 6 6 18"/></svg>
  },
  {
    t: 'Cloud & Deployment',
    d: 'Building software is only part of the journey. We help prepare applications for deployment and ongoing operation.',
    chips: ['Hosting', 'Domain', 'SSL', 'Monitoring'],
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 18a4 4 0 0 0 0-8 6 6 0 0 0-11.6 2A3.5 3.5 0 0 0 6 18z"/></svg>
  },
  {
    t: 'Security by Design',
    d: 'Security should not be an afterthought. We consider access, data handling and application security throughout development.',
    chips: ['Auth', 'RBAC', 'Secure API', 'Data Protection'],
    icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-7.6 8-13a8 8 0 1 0-16 0c0 5.4 8 13 8 13z"/><path d="m9 12 2 2 4-4"/></svg>
  }
];

export default function Modern() {
  return (
    <section className="it-section it-modern">
      <div className="it-glow it-glow--blue" style={{ width: 500, height: 500, top: -150, left: -150 }} />
      <div className="it-glow it-glow--cyan" style={{ width: 500, height: 500, bottom: -150, right: -150 }} />

      <div className="it-container">
        <div className="it-modern__head">
          <span className="it-kicker">Modern Stack</span>
          <h2 className="it-display it-d-lg" style={{ color: '#fff', marginTop: 16 }}>
            The Engine <em style={{ color: 'var(--cyan-2)', fontStyle: 'normal' }}>Behind the Solution.</em>
          </h2>
          <p className="it-lead" style={{ color: 'rgba(255,255,255,.7)', margin: '20px auto 0', textAlign: 'center' }}>
            Beyond features, we handle the technical foundation — automation, integration,
            deployment and security — so the product works reliably.
          </p>
        </div>

        <div className="it-modern__grid">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.t}
              className="it-modern__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * .1, duration: .6 }}
            >
              <div className="it-modern__icon">{c.icon}</div>
              <h3 className="it-modern__t">{c.t}</h3>
              <p className="it-modern__d">{c.d}</p>
              <div className="it-modern__chips">
                {c.chips.map(x => <span key={x} className="it-modern__chip">{x}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}