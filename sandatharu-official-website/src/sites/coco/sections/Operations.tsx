import { motion } from 'framer-motion';

const STEPS = ['Collection', 'Transportation', 'Sorting', 'Processing', 'Storage', 'Packaging', 'Dispatch'];

const PEOPLE = [
  { t: 'Collection Network', d: 'Local collectors and suppliers across Sri Lanka.' },
  { t: 'Operations Team', d: 'Handling sorting, processing and quality checks.' },
  { t: 'Supply Team', d: 'Coordinating logistics, packaging and dispatch.' },
  { t: 'Customer Support', d: 'Working directly with our business partners.' }
];

export default function Operations() {
  return (
    <>
      {/* OPERATIONS */}
      <section className="c-section c-section--shell">
        <div className="c-container">
          <div style={{ maxWidth: 800, marginBottom: 50 }}>
            <span className="c-kicker">Operations</span>
            <h2 className="c-display c-d-lg" style={{ marginTop: 16 }}>
              Behind the <em className="c-d-em">supply.</em>
            </h2>
            <p className="c-lead" style={{ marginTop: 20 }}>
              Our operations connect sourcing, handling, processing, storage and supply into one
              organized workflow.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${STEPS.length}, 1fr)`,
            gap: 10,
            overflowX: 'auto',
            paddingBottom: 12
          }}>
            {STEPS.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .08, duration: .5 }}
                style={{
                  minWidth: 140,
                  padding: '20px 16px',
                  background: 'var(--cream-2)',
                  borderRadius: 'var(--r-md)',
                  border: '1px solid var(--line)',
                  position: 'relative'
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.22em',
                  color: 'var(--moss)',
                  fontWeight: 600,
                  display: 'block',
                  marginBottom: 10
                }}>0{i + 1}</span>
                <span style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: 'var(--forest)',
                  display: 'block'
                }}>{s}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PEOPLE */}
      <section className="c-section">
        <div className="c-container">
          <div style={{ maxWidth: 800, marginBottom: 50 }}>
            <span className="c-kicker">People</span>
            <h2 className="c-display c-d-lg" style={{ marginTop: 16 }}>
              People make the <em className="c-d-em">supply chain possible.</em>
            </h2>
            <p className="c-lead" style={{ marginTop: 20 }}>
              From resource collectors and suppliers to processing teams and business partners,
              people are at the center of the Sandatharu Coco supply network.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {PEOPLE.map((p, i) => (
              <motion.div
                key={p.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * .08, duration: .6 }}
                style={{
                  padding: '28px 24px',
                  background: 'var(--cream-2)',
                  borderRadius: 'var(--r-lg)',
                  border: '1px solid var(--line)',
                  borderLeft: '3px solid var(--moss)'
                }}
              >
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.15rem',
                  fontWeight: 500,
                  color: 'var(--forest)',
                  margin: '0 0 10px'
                }}>{p.t}</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.88rem', margin: 0, lineHeight: 1.6 }}>{p.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RESPONSIBLE BUSINESS */}
      <section className="c-section c-section--soft">
        <div className="c-container">
          <div style={{ maxWidth: 800, marginBottom: 50 }}>
            <span className="c-kicker">Responsible Business</span>
            <h2 className="c-display c-d-lg" style={{ marginTop: 16 }}>
              Business with <em className="c-d-em">purpose.</em>
            </h2>
            <p className="c-lead" style={{ marginTop: 20 }}>
              We believe a successful business should create value not only for customers, but
              also for the people, suppliers and communities connected to it.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
            {['People', 'Resources', 'Long-Term Value'].map((x, i) => (
              <motion.div
                key={x}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .1, duration: .6 }}
                style={{
                  padding: '36px 30px',
                  background: 'var(--cream-2)',
                  borderRadius: 'var(--r-lg)',
                  border: '1px solid var(--line)',
                  textAlign: 'center'
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: 'var(--moss)',
                  fontStyle: 'italic'
                }}>{x}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}