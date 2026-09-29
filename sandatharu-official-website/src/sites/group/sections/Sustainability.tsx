import { motion } from 'framer-motion';
import './sustainability.css';

const PILLARS = [
  { n: '01', t: 'Responsible Resources', d: 'Making better use of available natural resources.', c: 'var(--green)' },
  { n: '02', t: 'Value From Materials',  d: 'Creating useful products from materials that may otherwise be underutilized.', c: 'var(--blue)' },
  { n: '03', t: 'Responsible Growth',    d: 'Building businesses that create value for customers, partners and communities.', c: 'var(--yellow)' }
];

export default function Sustainability() {
  return (
    <section className="su" id="sustainability">
      <div className="su__bg">
        <img
          src="https://images.unsplash.com/photo-1580984969071-a8da5656c2fb?w=2000&q=85&auto=format&fit=crop"
          alt=""
        />
        <div className="su__veil" />
      </div>

      <div className="container su__inner">
        <div className="su__left">
          <motion.span
            className="k su__k"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            Sustainability
          </motion.span>
          <motion.h2
            className="d d-lg su__title"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: .9 }}
          >
            GROWTH WITH<br /><em>RESPONSIBILITY.</em>
          </motion.h2>
          <motion.p
            className="su__lead"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: .15 }}
          >
            At Sandatharu, growth is not only about business. We believe sustainable thinking,
            responsible resource utilization and respect for communities and the environment
            are important parts of long-term success.
          </motion.p>
        </div>

        <div className="su__right">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.n}
              className="su__card"
              style={{ '--c': p.c } as React.CSSProperties}
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }} transition={{ delay: i * .12, duration: .7 }}
            >
              <div className="su__card-top">
                <span className="su__num d">{p.n}</span>
                <span className="su__bar" />
              </div>
              <h3 className="su__card-t">{p.t}</h3>
              <p className="su__card-d">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}