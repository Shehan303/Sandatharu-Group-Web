import { motion } from 'framer-motion';
import './why.css';

const REASONS = [
  { n: '01', t: 'Sri Lankan Foundation', d: 'Proudly connected to Sri Lanka and its people, resources and opportunities.', c: 'var(--green)' },
  { n: '02', t: 'Diverse Capabilities',  d: 'Three business areas allow us to serve different needs while creating new opportunities.', c: 'var(--blue)' },
  { n: '03', t: 'Customer Focus',        d: 'We build long-term relationships through reliability, communication and value.', c: 'var(--yellow)' },
  { n: '04', t: 'Continuous Growth',     d: 'We continuously look for new ideas, technologies and opportunities to improve.', c: 'var(--red)' },
  { n: '05', t: 'Responsible Approach',  d: 'We create value while respecting people, communities and the environment.', c: 'var(--green)' },
  { n: '06', t: 'Future Focused',        d: 'We are building businesses with tomorrow\'s opportunities in mind.', c: 'var(--blue)' }
];

export default function WhyGrid() {
  return (
    <section className="wg">
      <div className="rail">
        <span className="rail__num">09 / WHY</span>
      </div>
      <div className="container with-rail">
        <div className="wg__head">
          <span className="k">Why Sandatharu</span>
          <h2 className="d d-lg wg__title">
            BUILT ON <em>PRACTICAL</em> IDEAS<br />AND LONG-TERM RELATIONSHIPS.
          </h2>
        </div>

        <div className="wg__grid">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.n}
              className="wg__cell"
              style={{ '--c': r.c } as React.CSSProperties}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }} transition={{ delay: i * .07, duration: .6 }}
            >
              <div className="wg__cell-top">
                <span className="wg__num d">{r.n}</span>
                <span className="wg__bar" />
              </div>
              <h3 className="wg__t">{r.t}</h3>
              <p className="wg__d">{r.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}