import { motion } from 'framer-motion';
import './future.css';

const WORDS = ['TODAY', 'GROW', 'CONNECT', 'INNOVATE', 'EXPAND'];

export default function Future() {
  return (
    <section className="fu">
      <div className="fu__bg">
        <img src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=2000&q=85&auto=format&fit=crop" alt="" />
        <div className="fu__veil" />
      </div>

      <div className="container fu__inner">
        <motion.span
          className="k fu__k"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        >
          Future Vision
        </motion.span>

        <motion.h2
          className="d d-xl fu__title"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: .9 }}
        >
          BUILDING<br />WHAT COMES NEXT.
        </motion.h2>

        <motion.p
          className="fu__lead"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: .2 }}
        >
          Sandatharu Group is continuously exploring new opportunities, partnerships and ideas
          for the future. Our vision is to strengthen our existing businesses while developing
          new opportunities that create sustainable value.
        </motion.p>

        <div className="fu__words">
          {WORDS.map((w, i) => (
            <motion.span
              key={w}
              className="fu__word"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: .1 + i * .15, duration: .6 }}
            >
              {w}
              {i < WORDS.length - 1 && <em>→</em>}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}