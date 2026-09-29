import { motion } from 'framer-motion';
import './process.css';

const STEPS = [
  { n: '01', t: 'Understand', d: 'We listen to needs, challenges and opportunities.' },
  { n: '02', t: 'Plan',       d: 'We identify practical ways to move forward.' },
  { n: '03', t: 'Build',      d: 'We develop products, services and solutions.' },
  { n: '04', t: 'Deliver',    d: 'We focus on reliable delivery and customer experience.' },
  { n: '05', t: 'Improve',    d: 'We learn, adapt and continuously improve.' }
];

export default function Process() {
  return (
    <section className="pr">
      <div className="container">
        <div className="pr__head">
          <span className="k">How We Work</span>
          <h2 className="d d-lg pr__title">FROM IDEA<br /><em>TO IMPACT.</em></h2>
        </div>

        <div className="pr__rail">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              className="pr__step"
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }} transition={{ delay: i * .08, duration: .7 }}
            >
              <div className="pr__step-top">
                <span className="pr__num d">{s.n}</span>
                <span className="pr__dot" />
              </div>
              <h3 className="pr__t">{s.t}</h3>
              <p className="pr__d">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}