import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="t-final">
      <div
        className="t-final__bg"
        style={{ backgroundImage: 'url("/public/Travals/cta background.jpg")' }}
      />
      <div className="t-final__veil" />
      <div className="t-final__inner">
        <motion.h2
          className="t-final__title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >
          The Road <em>Is Waiting.</em>
        </motion.h2>
        <motion.p
          className="t-final__sub"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .3, duration: .6 }}
        >
          Where will your journey take you?
        </motion.p>
        <div className="t-final__ctas">
          <Link to="/travels/tours" className="t-btn t-btn--sunset">
            <span>Explore Tours</span>
            <svg className="t-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </Link>
          <Link to="/travels/vehicles" className="t-btn t-btn--outline-light">
            <span>Hire a Vehicle</span>
          </Link>
          <Link to="/travels/contact" className="t-btn t-btn--outline-light">
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </section>
  );
}