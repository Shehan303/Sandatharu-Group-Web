import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="it-final">
      <div className="it-final__bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=2000&q=85&auto=format&fit=crop)' }} />
      <div className="it-final__veil" />
      <div className="it-final__inner">
        <motion.h2
          className="it-final__title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >
          Don&apos;t just imagine it. <em>Build it.</em>
        </motion.h2>
        <motion.p
          className="it-final__sub"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .3, duration: .6 }}
        >
          Your next digital solution starts with a conversation.
        </motion.p>
        <div className="it-final__ctas">
          <Link to="/it/contact" className="it-btn it-btn--primary">
            <span>Start a Project</span>
            <svg className="it-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
          <Link to="/it/services" className="it-btn it-btn--outline-light">
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </section>
  );
}