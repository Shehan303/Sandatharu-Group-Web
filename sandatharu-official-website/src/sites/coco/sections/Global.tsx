import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const B2B = [
  { t: 'Bulk Orders', d: 'For commercial quantity requirements.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M3 11h18M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg> },
  { t: 'Regular Supply', d: 'For businesses looking for ongoing supply relationships.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 12a9 9 0 0 1 9-9 9 9 0 0 1 6.7 3M21 12a9 9 0 0 1-9 9 9 9 0 0 1-6.7-3"/><path d="M3 4v5h5M21 20v-5h-5"/></svg> },
  { t: 'Custom Requirements', d: 'Discuss specific product, packaging or supply requirements with our team.',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1"/></svg> }
];

const WHY = [
  { n: '01', t: 'Sri Lankan Sourcing', d: 'Connected to Sri Lanka\'s coconut resource environment.' },
  { n: '02', t: 'Product Focus', d: 'Dedicated to coconut-based materials and products.' },
  { n: '03', t: 'Supply Network', d: 'Building relationships across sourcing and supply.' },
  { n: '04', t: 'Business Mindset', d: 'Focused on reliable long-term relationships.' },
  { n: '05', t: 'Flexible Communication', d: 'We listen to customer requirements and supply needs.' },
  { n: '06', t: 'Growth-Oriented', d: 'Continuously exploring new products and opportunities.' }
];

const INDUSTRIES = [
  'Energy & Fuel Applications',
  'Industrial Raw Materials',
  'Agriculture',
  'Horticulture',
  'Environmental Applications',
  'Manufacturing',
  'Retail / Consumer Products',
  'Other Coconut-Based Industries'
];

export default function Global() {
  return (
    <>
      {/* GLOBAL SUPPLY */}
      <section className="coco-global">
        <span className="c-blob c-blob--moss" style={{ width: 500, height: 500, top: -100, right: -150, opacity: .3 }} />
        <div className="c-container coco-global__grid">
          <div>
            <span className="c-kicker" style={{ color: 'var(--moss-2)' }}>Global Supply</span>
            <h2 className="c-display c-d-lg coco-global__title">
              From Sri Lanka <em>to the world.</em>
            </h2>
            <p className="c-lead" style={{ color: 'rgba(255,255,255,.72)', marginTop: 22 }}>
              Sri Lanka has a strong connection with coconut cultivation and coconut-based
              industries. Sandatharu Coco Products aims to connect this natural resource base with
              wider business and supply opportunities.
            </p>
            <div style={{ marginTop: 30 }}>
              <Link to="/coco/contact" className="c-btn c-btn--primary">
                <span>Discuss Global Supply</span>
                <svg className="c-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            </div>
          </div>

          <div className="coco-global__visual">
            <svg viewBox="0 0 400 500" className="coco-global__svg" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="gLine" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0" stopColor="#4FA85C" stopOpacity=".9"/>
                  <stop offset="1" stopColor="#4FA85C" stopOpacity=".1"/>
                </linearGradient>
              </defs>

              {/* Rising arrows through layers */}
              <motion.line
                x1="200" y1="450" x2="200" y2="70"
                stroke="url(#gLine)" strokeWidth="2"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                viewport={{ once: true }} transition={{ duration: 2 }}
              />
              <motion.path
                d="M180 90 L200 60 L220 90"
                fill="none" stroke="#4FA85C" strokeWidth="2"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                viewport={{ once: true }} transition={{ delay: 1.6, duration: .5 }}
              />

              {/* Layer labels */}
              {[
                { y: 440, label: 'Sri Lanka', sub: 'Origin' },
                { y: 340, label: 'Sandatharu Coco', sub: 'Operations' },
                { y: 240, label: 'Export & Supply', sub: 'Logistics' },
                { y: 140, label: 'Global Market', sub: 'Destination' }
              ].map((x, i) => (
                <motion.g
                  key={x.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * .3, duration: .6 }}
                >
                  <circle cx="100" cy={x.y} r="6" fill="#4FA85C" />
                  <text x="120" y={x.y - 4} fill="#fff" fontFamily="Fraunces" fontSize="16" fontWeight="500">
                    {x.label}
                  </text>
                  <text x="120" y={x.y + 14} fill="#4FA85C" fontFamily="JetBrains Mono" fontSize="10" letterSpacing="2">
                    {x.sub.toUpperCase()}
                  </text>
                </motion.g>
              ))}
            </svg>
          </div>
        </div>
      </section>

      {/* B2B */}
      <section className="coco-b2b">
        <div className="c-container">
          <div className="coco-b2b__head">
            <span className="c-kicker" style={{ color: 'var(--moss-2)' }}>B2B & Bulk Supply</span>
            <h2 className="c-display c-d-lg coco-b2b__title">
              Looking for coconut-based <em className="c-d-em">products?</em>
            </h2>
            <p className="c-lead" style={{ color: 'rgba(255,255,255,.72)', marginTop: 20 }}>
              Whether you require coconut shell materials, charcoal, briquettes or other
              coconut-based products, we welcome business and bulk supply inquiries.
            </p>
          </div>

          <div className="coco-b2b__grid">
            {B2B.map((x, i) => (
              <motion.div
                key={x.t}
                className="coco-b2b__card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * .1, duration: .6 }}
              >
                <div className="coco-b2b__badge">{x.icon}</div>
                <h3 className="coco-b2b__t">{x.t}</h3>
                <p className="coco-b2b__d">{x.d}</p>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 50 }}>
            <Link to="/coco/contact" className="c-btn c-btn--primary">
              <span>Request a Supply Inquiry</span>
              <svg className="c-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="c-section">
        <div className="c-container">
          <div className="coco-why__head">
            <span className="c-kicker">Why Sandatharu Coco</span>
            <h2 className="c-display c-d-lg coco-q__title" style={{ marginTop: 16 }}>
              Six reasons to <em className="c-d-em">work with us.</em>
            </h2>
          </div>
          <div className="coco-why__grid">
            {WHY.map((x, i) => (
              <motion.div
                key={x.n}
                className="coco-why__card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * .06, duration: .5 }}
              >
                <span className="coco-why__num">{x.n}</span>
                <h3 className="coco-why__t">{x.t}</h3>
                <p className="coco-why__d">{x.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="coco-ind">
        <div className="c-container">
          <div className="coco-ind__head">
            <span className="c-kicker">Industries & Applications</span>
            <h2 className="c-display c-d-lg" style={{ marginTop: 16 }}>
              Where coconut products <em className="c-d-em">create value.</em>
            </h2>
            <p className="c-lead" style={{ marginTop: 16, fontSize: '0.86rem' }}>
              Product applications depend on product specifications and customer requirements.
            </p>
          </div>

          <div className="coco-ind__grid">
            {INDUSTRIES.map((x, i) => (
              <motion.div
                key={x}
                className="coco-ind__cell"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .05, duration: .5 }}
              >
                {x}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGING */}
      <section className="c-section">
        <div className="c-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 60, alignItems: 'center' }}>
            <motion.div
              className="c-photo c-photo--land"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .8 }}
            >
              <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=85&auto=format&fit=crop" alt="" />
            </motion.div>

            <div>
              <span className="c-kicker">Packaging & Supply</span>
              <h2 className="c-display c-d-lg" style={{ marginTop: 16 }}>
                Prepared for <em className="c-d-em">supply.</em>
              </h2>
              <p className="c-lead" style={{ marginTop: 20 }}>
                Packaging and delivery arrangements can be discussed according to product type,
                quantity, destination and customer requirements.
              </p>

              <div style={{ marginTop: 30, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {['Bulk Supply', 'Bagged Products', 'Commercial Packaging', 'Custom Requirements'].map(x => (
                  <div key={x} style={{
                    padding: '16px 18px',
                    background: 'var(--moss-soft)',
                    borderRadius: 'var(--r-md)',
                    fontFamily: 'var(--font-serif)',
                    fontSize: '0.95rem',
                    color: 'var(--forest)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10
                  }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--moss)' }} />
                    {x}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}