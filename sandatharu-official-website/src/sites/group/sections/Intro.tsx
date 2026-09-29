import { motion } from 'framer-motion';
import './intro.css';

const NUMBERS = [
  { n: '03', label: 'Business Areas' },
  { n: 'LK', label: 'Sri Lankan Roots' },
  { n: '∞',  label: 'Growing Network' },
  { n: '01', label: 'Shared Vision' }
];

export default function Intro() {
  return (
    <section className="intro" id="about">
      <div className="rail with-rail--dark">
        <span className="rail__num">05 / WHO</span>
      </div>

      <div className="container intro__inner">
        <div className="intro__left">
          <motion.span
            className="k intro__k"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            Who is Sandatharu
          </motion.span>

          <motion.h2
            className="d d-lg intro__title"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }} transition={{ duration: .9, ease: [.16,1,.3,1] }}
          >
            MORE THAN A GROUP. <span className="intro__title-em">A GROWING VISION.</span>
          </motion.h2>

          <motion.p
            className="lead intro__lead"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: .15 }}
          >
            Sandatharu Group is a Sri Lankan business group built around a simple vision — to create
            meaningful value through different areas of business. Our journey brings together sustainable
            coconut-based products, travel and tourism experiences, and modern technology solutions.
          </motion.p>

          <motion.p
            className="lead intro__lead"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: .25 }}
          >
            While each business operates with its own identity and purpose, they are connected by
            common values: quality, creativity, responsibility and continuous growth.
          </motion.p>
        </div>

        <div className="intro__right">
          <div className="intro__numbers">
            {NUMBERS.map((n, i) => (
              <motion.div
                key={n.label}
                className="intro__cell"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * .1, duration: .6 }}
              >
                <span className="intro__num d">{n.n}</span>
                <span className="intro__label">{n.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="intro__img-wrap"
            initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 1, ease: [.16,1,.3,1] }}
          >
            <img
              src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=1600&q=85&auto=format&fit=crop"
              alt="Sri Lankan landscape"
            />
            <div className="intro__img-tag">
              <span>EST. SRI LANKA</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}