import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './final.css';

export default function FinalCTA() {
  return (
    <section className="fc">
      <div className="fc__bg">
        <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=2000&q=85&auto=format&fit=crop" alt="" />
        <div className="fc__veil" />
      </div>

      <div className="fc__inner container">
        <motion.h2
          className="d d-xl fc__title"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: .9 }}
        >
          ONE GROUP.<br />MANY <em>POSSIBILITIES.</em>
        </motion.h2>

        <motion.p
          className="fc__sub"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: .2 }}
        >
          Explore the Sandatharu journey.
        </motion.p>

        <motion.div
          className="fc__ctas"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: .35 }}
        >
          <Link to="/businesses" className="btn btn-primary">
            <span>Our Businesses</span>
            <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
          <Link to="/contact" className="btn btn-outline-light"><span>Contact Us</span></Link>
        </motion.div>
      </div>
    </section>
  );
}