import { motion } from 'framer-motion';
import { BUSINESS_SYSTEMS } from '../data/itData';

const ICONS = [
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>,
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M3 11h18"/></svg>,
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>,
  <svg key="4" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>,
  <svg key="5" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>,
  <svg key="6" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>,
  <svg key="7" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 18a4 4 0 0 0 0-8 6 6 0 0 0-11.6 2A3.5 3.5 0 0 0 6 18z"/></svg>,
  <svg key="8" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>
];

export default function Systems() {
  return (
    <section className="it-section">
      <div className="it-container">
        <div className="it-sys__head">
          <span className="it-kicker">Business Systems</span>
          <h2 className="it-display it-d-lg it-sys__title">
            Digital Systems for <em style={{ color: 'var(--blue)', fontStyle: 'normal' }}>the Way Your Business Works.</em>
          </h2>
          <p className="it-lead" style={{ marginTop: 20 }}>
            Many businesses still depend on spreadsheets, paper forms, disconnected applications
            and manual communication. We help transform those processes into connected digital systems.
          </p>
        </div>
<motion.div
  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
  viewport={{ once: true }} transition={{ duration: 1 }}
  style={{
    aspectRatio: '21/9',
    borderRadius: 'var(--r-xl)',
    overflow: 'hidden',
    marginBottom: 50,
    position: 'relative',
    boxShadow: 'var(--sh-lg)'
  }}
>
  <img
    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=2000&q=80&auto=format&fit=crop"
    alt=""
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />
  <div style={{
    position: 'absolute', inset: 0,
    background: 'linear-gradient(135deg, rgba(7,20,38,.85) 0%, rgba(37,99,235,.55) 100%)',
    display: 'grid',
    placeItems: 'center',
    padding: 40,
    textAlign: 'center',
    color: '#fff'
  }}>
    <div>
      <span className="it-kicker" style={{ color: 'var(--cyan-2)' }}>Our Work</span>
      <p className="it-display it-d-md" style={{ color: '#fff', marginTop: 16, maxWidth: '18ch' }}>
        Real Systems. <em className="it-serif-em" style={{ color: 'var(--cyan-2)' }}>Real Impact.</em>
      </p>
    </div>
  </div>
</motion.div>
        <div className="it-sys__grid">
          {BUSINESS_SYSTEMS.map((s, i) => (
            <motion.div
              key={s.t}
              className="it-sys__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * .06, duration: .5 }}
            >
              <div className="it-sys__icon">{ICONS[i]}</div>
              <h3 className="it-sys__t">{s.t}</h3>
              <p className="it-sys__d">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}