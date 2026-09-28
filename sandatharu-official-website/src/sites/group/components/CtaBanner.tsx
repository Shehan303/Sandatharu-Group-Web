import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './cta.css';

export default function CtaBanner() {
  return (
    <section className="section cta">
      <div className="container cta__inner">
        <motion.span
          className="kicker cta__kicker"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        >
          Let's Build Something Together
        </motion.span>

        <motion.h2
          className="display display-xl cta__title"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }} transition={{ duration: .8 }}
        >
          COCONUT. TRAVEL.<br />TECHNOLOGY.
        </motion.h2>

        <motion.p
          className="cta__sub"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: .2 }}
        >
          Whichever direction you need — Sandatharu is ready. Let's talk about it.
        </motion.p>

        <motion.div
          className="cta__btns"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: .3 }}
        >
          <Link to="/contact" className="btn btn-primary">Contact Us →</Link>
          <a href="#businesses" className="btn btn-ghost">Explore Businesses</a>
        </motion.div>
      </div>
    </section>
  );
}