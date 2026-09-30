import { motion } from 'framer-motion';
import { SOLUTIONS } from '../data/itData';

const ICONS: Record<string, JSX.Element> = {
  users:    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="9" cy="8" r="3"/><path d="M3 21a6 6 0 0 1 12 0M16 11a3 3 0 1 0 0-6M22 21a6 6 0 0 0-5-5.9"/></svg>,
  wallet:   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="6" width="18" height="14" rx="2"/><path d="M3 10h18"/></svg>,
  file:     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h4"/></svg>,
  heart:    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 1 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/></svg>,
  box:      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 7l9-4 9 4v10l-9 4-9-4z"/><path d="M3 7l9 4 9-4M12 11v10"/></svg>,
  kanban:   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="6" height="16"/><rect x="10" y="4" width="6" height="10"/><rect x="17" y="4" width="4" height="13"/></svg>,
  calendar: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>,
  bell:     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8M10 21a2 2 0 0 0 4 0"/></svg>
};

export default function Solutions() {
  return (
    <section className="it-section it-section--dark" id="solutions">
      <div className="it-grid-bg" />
      <div className="it-container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 60px' }}>
          <span className="it-kicker">Our Solutions</span>
          <h2 className="it-display it-d-lg" style={{ marginTop: 14, color: '#fff' }}>
            Solutions Built Around <em style={{ fontStyle: 'normal', background: 'linear-gradient(135deg,#22D3EE,#60A5FA)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Real Problems.</em>
          </h2>
        </div>

        <div className="it-sol__grid">
          {SOLUTIONS.map((s, i) => (
            <motion.div
              key={s.key}
              className="it-sol__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * .06, duration: .6 }}
            >
              <div className="it-sol__icon">{ICONS[s.icon]}</div>
              <h3 className="it-sol__t">{s.t}</h3>
              <p className="it-sol__d">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}