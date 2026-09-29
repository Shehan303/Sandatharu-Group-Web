import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CocoLayout from '../components/CocoLayout';
import { COCO_PRODUCTS } from '../data/cocoData';

const REGIONS = [
  { r: 'South Asia',        d: 'Regional supply across South Asian markets.' },
  { r: 'Middle East',       d: 'Charcoal and briquette demand for hospitality and fuel.' },
  { r: 'Europe',            d: 'Sustainable product sourcing for European businesses.' },
  { r: 'Asia Pacific',      d: 'Industrial raw materials and value-added products.' },
  { r: 'North America',     d: 'Growing demand for sustainable coconut products.' },
  { r: 'Other Regions',     d: 'Custom supply arrangements based on requirements.' }
];

export default function CocoGlobal() {
  return (
    <CocoLayout>
      <section className="coco-pagehero">
        <div
          className="coco-pagehero__bg"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=2000&q=85&auto=format&fit=crop)'
          }}
        />
        <div className="coco-pagehero__veil" />
        <div className="coco-pagehero__inner">
          <div className="coco-pagehero__crumb">
            <Link to="/coco">Coco</Link> / Global Supply
          </div>
          <h1 className="coco-pagehero__title">
            From Sri Lanka <em>to the World.</em>
          </h1>
          <p className="coco-pagehero__lead">
            Sri Lanka has a strong connection with coconut cultivation and coconut-based
            industries. We aim to connect this natural resource base with wider business and
            supply opportunities.
          </p>
        </div>
      </section>

      {/* Route visual */}
      <section className="c-section c-section--dark">
        <div className="c-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <div>
              <span className="c-kicker" style={{ color: 'var(--moss-2)' }}>
                Export Route
              </span>
              <h2 className="c-display c-d-lg" style={{ color: '#fff', marginTop: 16 }}>
                Origin to <em className="c-d-em">destination.</em>
              </h2>
              <p className="c-lead" style={{ color: 'rgba(255,255,255,.7)', marginTop: 20 }}>
                We coordinate from Sri Lankan sourcing to packaging and shipping, connecting
                coconut-based products with customers worldwide.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { t: 'Sri Lanka', s: 'Origin & Sourcing' },
                { t: 'Sandatharu Coco', s: 'Processing & Packaging' },
                { t: 'Port of Loading', s: 'Logistics & Documentation' },
                { t: 'Global Customer', s: 'Delivery & Support' }
              ].map((x, i) => (
                <motion.div
                  key={x.t}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * .12, duration: .6 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    padding: '18px 22px',
                    background: 'rgba(255,255,255,.04)',
                    border: '1px solid rgba(255,255,255,.1)',
                    borderLeft: '3px solid var(--moss-2)',
                    borderRadius: 'var(--r-md)'
                  }}
                >
                  <span style={{
                    width: 34,
                    height: 34,
                    borderRadius: '50%',
                    background: 'var(--moss)',
                    color: '#fff',
                    display: 'grid',
                    placeItems: 'center',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    flexShrink: 0
                  }}>0{i + 1}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 500, color: '#fff' }}>{x.t}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--moss-2)', marginTop: 4 }}>{x.s}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product availability */}
      <section className="c-section">
        <div className="c-container">
          <div style={{ maxWidth: 720, marginBottom: 50 }}>
            <span className="c-kicker">Available Products</span>
            <h2 className="c-display c-d-lg" style={{ marginTop: 16 }}>
              Ready for <em className="c-d-em">global supply.</em>
            </h2>
          </div>

          <div className="coco-cat__grid">
            {COCO_PRODUCTS.map((p, i) => (
              <motion.article
                key={p.id}
                className="coco-cat__card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .07, duration: .6 }}
              >
                <div className="coco-cat__img">
                  <img src={p.img} alt={p.name} loading="lazy" />
                  <span className="coco-cat__tag">{p.tag}</span>
                </div>
                <div className="coco-cat__body">
                  <h3 className="coco-cat__t">{p.name}</h3>
                  <p className="coco-cat__d">{p.short}</p>
                  <Link to={`/coco/products/${p.id}`} className="coco-cat__link">
                    View Details
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M13 6l6 6-6 6"/>
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Regions served */}
      <section className="c-section c-section--soft">
        <div className="c-container">
          <div style={{ maxWidth: 720, marginBottom: 50 }}>
            <span className="c-kicker">Regions</span>
            <h2 className="c-display c-d-lg" style={{ marginTop: 16 }}>
              Supply <em className="c-d-em">opportunities.</em>
            </h2>
            <p className="c-lead" style={{ marginTop: 16, fontSize: '0.86rem' }}>
              Regions listed are indicative. Actual supply availability is discussed based on
              product, quantity, destination and logistics.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {REGIONS.map((x, i) => (
              <motion.div
                key={x.r}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .06, duration: .5 }}
                style={{
                  padding: '26px 24px',
                  background: 'var(--cream-2)',
                  borderRadius: 'var(--r-md)',
                  border: '1px solid var(--line)'
                }}
              >
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.2rem',
                  fontWeight: 500,
                  color: 'var(--forest)',
                  margin: '0 0 8px'
                }}>{x.r}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.88rem', margin: 0, lineHeight: 1.6 }}>{x.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="c-section c-section--dark">
        <div className="c-container" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
          <h2 className="c-display c-d-lg" style={{ color: '#fff' }}>
            Discuss <em className="c-d-em">global supply.</em>
          </h2>
          <Link to="/coco/contact" className="c-btn c-btn--primary" style={{ marginTop: 30 }}>
            <span>Start an Inquiry</span>
            <svg className="c-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </Link>
        </div>
      </section>
    </CocoLayout>
  );
}