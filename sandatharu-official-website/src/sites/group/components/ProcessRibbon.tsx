import { motion } from 'framer-motion';
import './process.css';

const STEPS = [
  { n: '01', t: 'Discover',    d: 'We listen — understanding your business, needs and goals.' },
  { n: '02', t: 'Plan',        d: 'Clear scope, timeline and deliverables set with you.' },
  { n: '03', t: 'Deliver',     d: 'Execution with consistent quality and open communication.' },
  { n: '04', t: 'Support',     d: 'Long-term support and continuous improvement.' }
];

export default function ProcessRibbon() {
  return (
    <section className="section process ribbon">
      <div className="container">
        <div className="process__head">
          <span className="kicker">How We Work</span>
          <h2 className="display display-lg process__title">
            A PROCESS YOU CAN <span>COUNT ON.</span>
          </h2>
        </div>

        <div className="process__grid">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              className="process__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * .1, duration: .6 }}
            >
              <span className="process__num display">{s.n}</span>
              <h3 className="process__t">{s.t}</h3>
              <p className="process__d">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}