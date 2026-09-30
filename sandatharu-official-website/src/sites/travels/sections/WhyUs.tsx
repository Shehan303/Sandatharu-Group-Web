import { motion } from 'framer-motion';

const REASONS = [
  { n: '01', t: 'Wide Vehicle Range', d: 'Sedans, SUVs, vans, buses and luxury cars — pick the right vehicle for your trip.' },
  { n: '02', t: 'Driver Optional', d: 'Hire with a professional driver or self-drive (subject to availability).' },
  { n: '03', t: 'Airport Pickup', d: 'Met at Bandaranaike International Airport and driven to your destination.' },
  { n: '04', t: 'Transparent Rates', d: 'Clear pricing — no hidden charges, no unexpected fees at the end.' },
  { n: '05', t: 'Well-Maintained Fleet', d: 'Clean, serviced and air-conditioned vehicles on every booking.' },
  { n: '06', t: 'Island-Wide Reach', d: 'From Colombo to Jaffna, Kandy to Galle — we cover Sri Lanka.' }
];

export default function WhyUs() {
  return (
    <section className="t-section t-section--soft">
      <div className="t-container">
        <div className="t-why__head">
          <span className="t-kicker">Why Rent With Us</span>
          <h2 className="t-display t-d-lg" style={{ marginTop: 12 }}>
            Hire With <em style={{ color: 'var(--orange)', fontStyle: 'normal' }}>Confidence.</em>
          </h2>
        </div>
        <div className="t-why__grid">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.n}
              className="t-why__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * .07, duration: .6 }}
            >
              <span className="t-why__num">{r.n}</span>
              <h3 className="t-why__t">{r.t}</h3>
              <p className="t-why__d">{r.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}