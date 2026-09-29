import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function FinalCTA() {
  return (
    <section className="coco-fcta">
      <div
        className="coco-fcta__bg"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1591336462674-e0c5eb7a14b7?w=2000&q=85&auto=format&fit=crop)'
        }}
      />
      <div className="coco-fcta__veil" />
      <div className="coco-fcta__inner">
        <motion.h2
          className="coco-fcta__title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >
          From Coconut Resources
          <br />
          to <em>New Possibilities.</em>
        </motion.h2>

        <motion.p
          className="coco-fcta__sub"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .3, duration: .6 }}
        >
          Let&apos;s create value together
        </motion.p>

        <div className="coco-fcta__ctas">
          <Link to="/coco/products" className="c-btn c-btn--primary">
            <span>Explore Products</span>
            <svg className="c-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </Link>
          <Link to="/coco/contact" className="c-btn c-btn--outline-light">
            <span>Start an Inquiry</span>
          </Link>
        </div>
      </div>
    </section>
  );
}