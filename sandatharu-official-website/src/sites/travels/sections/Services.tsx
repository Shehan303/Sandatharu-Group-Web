import { motion } from 'framer-motion';

const SERVICES = [
  { t: 'Airport Transfers',     d: 'Convenient private transfers between the airport and your destination.' },
  { t: 'Vehicle Hire',           d: 'Cars, SUVs, vans and group vehicles for any journey.' },
  { t: 'Private Car Travel',     d: 'Freedom to travel around Sri Lanka on your own schedule.' },
  { t: 'Driver Services',        d: 'Professional drivers for comfortable, safe journeys.' },
  { t: 'Group Transportation',   d: 'Comfortable transport for families, groups and events.' },
  { t: 'Corporate Transportation', d: 'Reliable travel support for business needs.' },
  { t: 'Event Transportation',   d: 'Weddings, conferences and special events.' },
  { t: 'Long-Distance Transfers',d: 'Comfortable inter-city and cross-country journeys.' }
];

export default function Services() {
  return (
    <section className="t-section">
      <div className="t-container">
        <div className="t-serv__head">
          <span className="t-kicker">Our Services</span>
          <h2 className="t-display t-d-lg" style={{ marginTop: 12 }}>Transportation, <em style={{ color: 'var(--ocean)', fontStyle: 'normal' }}>Your Way.</em></h2>
        </div>
        <div className="t-serv__grid">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.t}
              className="t-serv__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * .05, duration: .5 }}
            >
              <div className="t-serv__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="9"/>
                  <path d="M12 7v5l3 3"/>
                </svg>
              </div>
              <h3 className="t-serv__t">{s.t}</h3>
              <p className="t-serv__d">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}