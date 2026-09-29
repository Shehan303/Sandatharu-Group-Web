import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { COCO_PRODUCTS } from '../data/cocoData';

export default function Products() {
  return (
    <section className="coco-pp">
      <div className="coco-pp__head">
        <div>
          <span className="c-kicker" style={{ color: 'var(--moss-2)' }}>Product Portfolio</span>
          <h2 className="c-display c-d-lg coco-pp__title">
            Our Coconut<br /><em>Product Range.</em>
          </h2>
        </div>
        <p className="c-lead" style={{ color: 'rgba(255,255,255,.7)', maxWidth: '40ch' }}>
          Exploring the value within Sri Lanka&apos;s coconut resources.
        </p>
      </div>

      <div className="coco-pp__track">
        {COCO_PRODUCTS.map((p, i) => (
          <motion.article
            key={p.id}
            className="coco-pp__card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * .08, duration: .6 }}
          >
            <div className="coco-pp__card-img">
              <img src={p.img} alt={p.name} loading="lazy" />
              <span className="coco-pp__card-tag">{p.tag}</span>
            </div>
            <div className="coco-pp__card-body">
              <h3 className="coco-pp__card-t">{p.name}</h3>
              <p className="coco-pp__card-d">{p.short}</p>
              <Link to={`/coco/products/${p.id}`} className="coco-pp__card-link">
                <span>View Product</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="coco-pp__foot">
        <Link to="/coco/products" className="c-btn c-btn--outline-light">
          <span>View Full Catalogue</span>
          <svg className="c-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </Link>
      </div>
    </section>
  );
}