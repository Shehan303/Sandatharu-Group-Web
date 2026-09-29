import { motion } from 'framer-motion';
import { SUPPLY_PROCESS } from '../data/cocoData';

export default function Process() {
  return (
    <>
      {/* COLLECTION NETWORK */}
      <section className="c-section">
        <span className="c-blob c-blob--leaf" style={{ width: 500, height: 500, top: -150, left: -150 }} />
        <div className="c-container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: 800, marginBottom: 60 }}>
            <span className="c-kicker">Collection Network</span>
            <h2 className="c-display c-d-lg" style={{ marginTop: 16 }}>
              From Coconut Shell to <em className="c-d-em">Supply Chain.</em>
            </h2>
            <p className="c-lead" style={{ marginTop: 20 }}>
              Coconut shells are valuable resources that can become part of a wider product and
              supply chain. Our collection network helps connect coconut resource providers with
              organized collection and processing opportunities.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 12, alignItems: 'center' }}>
            {['Coconut Sources', 'Collection', 'Transport', 'Sorting', 'Processing', 'Product', 'Supply'].map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .1, duration: .5 }}
                style={{
                  padding: '16px 14px',
                  background: 'var(--cream-2)',
                  borderRadius: 'var(--r-md)',
                  border: '1px solid var(--line)',
                  textAlign: 'center',
                  position: 'relative'
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  color: 'var(--moss)',
                  display: 'block',
                  marginBottom: 6
                }}>0{i + 1}</span>
                <span style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: 'var(--forest)'
                }}>{step}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCE TO VALUE */}
      <section className="c-section c-section--shell">
        <div className="c-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 60, alignItems: 'center' }}>
            <div>
              <span className="c-kicker">From Resource to Value</span>
              <h2 className="c-display c-d-lg" style={{ marginTop: 16 }}>
                The value is <em className="c-d-em">inside the resource.</em>
              </h2>
              <p className="c-lead" style={{ marginTop: 20 }}>
                Our objective is to improve the value of coconut resources through organized
                sourcing, processing and supply. Every step is designed to unlock more value from
                what Sri Lanka already has.
              </p>

              <div style={{ marginTop: 34, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Coconut', 'Shell / Husk', 'Collection', 'Processing', 'Products', 'Customer'].map((step, i) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * .08, duration: .5 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                      padding: '14px 18px',
                      background: 'var(--cream-2)',
                      borderRadius: 'var(--r-md)',
                      border: '1px solid var(--line)'
                    }}
                  >
                    <span style={{
                      width: 32, height: 32,
                      borderRadius: '50%',
                      background: 'var(--moss)',
                      color: '#fff',
                      display: 'grid',
                      placeItems: 'center',
                      fontFamily: 'var(--font-serif)',
                      fontSize: '0.86rem',
                      fontWeight: 600,
                      flexShrink: 0
                    }}>{i + 1}</span>
                    <span style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.05rem',
                      fontWeight: 500,
                      color: 'var(--forest)'
                    }}>{step}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="c-photo c-photo--tall"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .9 }}
            >
              <img src="https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?w=1200&q=85&auto=format&fit=crop" alt="" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SUPPLY PROCESS */}
      <section className="c-section">
        <div className="c-container coco-proc__head">
          <span className="c-kicker">Our Supply Process</span>
          <h2 className="c-display c-d-lg coco-proc__title">
            Seven steps from <em>source to supply.</em>
          </h2>
        </div>

        <div className="coco-proc__track">
          {SUPPLY_PROCESS.map((s, i) => (
            <motion.div
              key={s.n}
              className="coco-proc__step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * .06, duration: .5 }}
            >
              <span className="coco-proc__step-num">{s.n}</span>
              <h3 className="coco-proc__step-t">{s.t}</h3>
              <p className="coco-proc__step-d">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}