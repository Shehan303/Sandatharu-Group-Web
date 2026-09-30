import { motion } from 'framer-motion';

const REASONS = [
  { n: '01', t: 'Business First',        d: 'We begin by understanding the business problem, not the technology.' },
  { n: '02', t: 'User Focused',          d: 'We design around real users and their actual workflows.' },
  { n: '03', t: 'Custom Solutions',      d: 'We don\'t force every business into the same template.' },
  { n: '04', t: 'Design + Technology',   d: 'We combine UI/UX thinking with engineering discipline.' },
  { n: '05', t: 'Scalable Thinking',     d: 'We consider how a solution can grow over time.' },
  { n: '06', t: 'Long-Term Support',     d: 'We can continue supporting and improving digital products.' }
];

export default function WhyUs() {
  return (
    <section className="it-section">
      <div className="it-container">
        <div className="it-why__head">
          <span className="it-kicker">Why Choose Us</span>
          <h2 className="it-display it-d-lg it-why__title">
            Why Build <em style={{ color: 'var(--blue)', fontStyle: 'normal' }}>With Us?</em>
          </h2>
        </div>

        <div className="it-why__grid">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.n}
              className="it-why__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * .07, duration: .5 }}
            >
              <span className="it-why__num">{r.n}</span>
              <h3 className="it-why__t">{r.t}</h3>
              <p className="it-why__d">{r.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}