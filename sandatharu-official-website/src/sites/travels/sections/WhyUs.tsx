import { motion } from 'framer-motion';

const REASONS = [
  { n: '01', t: 'Comfortable Travel', d: 'Enjoy your journey with transportation selected around your travel needs.' },
  { n: '02', t: 'Flexible Journeys', d: 'Your journey doesn\'t always need to follow a fixed package. Build your trip around your plans.' },
  { n: '03', t: 'Local Experience', d: 'Discover Sri Lanka with an understanding of its destinations, roads, culture and experiences.' },
  { n: '04', t: 'Personal Service', d: 'We focus on understanding what each traveller actually needs.' },
  { n: '05', t: 'Different Travel Options', d: 'From private cars to group transportation, choose the option that fits your journey.' },
  { n: '06', t: 'One Travel Partner', d: 'From airport arrival to your final destination, we support different parts of your journey.' }
];

export default function WhyUs() {
  return (
    <section className="t-section t-section--sand">
      <div className="t-container">
        <div className="t-why__head">
          <span className="t-kicker">Why Sandatharu Travels</span>
          <h2 className="t-display t-d-lg" style={{ marginTop: 12 }}>Travel With <em style={{ color: 'var(--ocean)', fontStyle: 'normal' }}>Confidence.</em></h2>
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