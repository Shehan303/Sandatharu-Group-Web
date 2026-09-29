import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './cta.css';

export default function CtaBanner() {
  return (
    <section className="section cta">
      <div className="cta__bg" aria-hidden>
        <span className="cta__blob cta__blob--blue" />
        <span className="cta__blob cta__blob--green" />
        <span className="cta__blob cta__blob--yellow" />
      </div>
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
          COCONUT.<br />TRAVEL.<br /><span>TECHNOLOGY.</span>
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
          <Link to="/contact" className="btn btn-primary">
            Contact Us
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
          <a href="#businesses" className="btn btn-ghost">Explore Businesses</a>
        </motion.div>
      </div>
    </section>
  );
}