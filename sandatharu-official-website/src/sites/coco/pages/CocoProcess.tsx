import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CocoLayout from '../components/CocoLayout';
import Process from '../sections/Process';
import { SUPPLY_PROCESS } from '../data/cocoData';

const OPERATIONS_SEQ = [
  { t: 'Collection',     d: 'Sourcing coconut resources through our supplier network.' },
  { t: 'Transportation', d: 'Moving materials to processing and sorting locations.' },
  { t: 'Sorting',        d: 'Separating materials according to intended use.' },
  { t: 'Processing',     d: 'Converting suitable materials into finished products.' },
  { t: 'Storage',        d: 'Prepared storage prior to packaging and dispatch.' },
  { t: 'Packaging',      d: 'Customized to product type and customer requirements.' },
  { t: 'Dispatch',       d: 'Coordinated delivery to customers and shipping points.' }
];

export default function CocoProcess() {
  return (
    <CocoLayout>
      <section className="coco-pagehero">
        <div
          className="coco-pagehero__bg"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?w=2000&q=85&auto=format&fit=crop)'
          }}
        />
        <div className="coco-pagehero__veil" />
        <div className="coco-pagehero__inner">
          <div className="coco-pagehero__crumb">
            <Link to="/coco">Coco</Link> / Process
          </div>
          <h1 className="coco-pagehero__title">
            From Source to <em>Supply.</em>
          </h1>
          <p className="coco-pagehero__lead">
            Every product begins long before it reaches a customer. Explore the seven-step
            process behind our coconut supply chain.
          </p>
        </div>
      </section>

      {/* Reuse home Process sections */}
      <Process />

      {/* Operations sequence — extra depth */}
      <section className="c-section c-section--dark">
        <div className="c-container">
          <div style={{ maxWidth: 720, marginBottom: 60 }}>
            <span className="c-kicker" style={{ color: 'var(--moss-2)' }}>
              Behind the Supply
            </span>
            <h2 className="c-display c-d-lg" style={{ color: '#fff', marginTop: 16 }}>
              Every step <em className="c-d-em">matters.</em>
            </h2>
            <p className="c-lead" style={{ color: 'rgba(255,255,255,.7)', marginTop: 20 }}>
              Our operations connect sourcing, handling, processing, storage and supply into
              one organized workflow.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 16
          }}>
            {OPERATIONS_SEQ.map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * .07, duration: .6 }}
                style={{
                  padding: '26px 24px',
                  background: 'rgba(255,255,255,.04)',
                  border: '1px solid rgba(255,255,255,.1)',
                  borderLeft: '3px solid var(--moss-2)',
                  borderRadius: 'var(--r-md)'
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.22em',
                  color: 'var(--moss-2)',
                  display: 'block',
                  marginBottom: 12,
                  fontWeight: 600
                }}>0{i + 1}</span>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.2rem',
                  fontWeight: 500,
                  color: '#fff',
                  margin: '0 0 8px'
                }}>{s.t}</h3>
                <p style={{
                  color: 'rgba(255,255,255,.65)',
                  fontSize: '0.88rem',
                  margin: 0,
                  lineHeight: 1.6
                }}>{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7-step summary bar */}
      <section className="c-section c-section--soft">
        <div className="c-container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="c-kicker">At a Glance</span>
            <h2 className="c-display c-d-md" style={{ marginTop: 12 }}>
              Seven steps, <em className="c-d-em">one supply chain.</em>
            </h2>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 10,
            flexWrap: 'wrap'
          }}>
            {SUPPLY_PROCESS.map((s, i) => (
              <div
                key={s.n}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '12px 18px',
                  background: 'var(--cream-2)',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--r-pill)',
                  fontSize: '0.86rem',
                  color: 'var(--forest)'
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  color: 'var(--moss)',
                  fontWeight: 600
                }}>{s.n}</span>
                {s.t}
              </div>
            ))}
          </div>
        </div>
      </section>
    </CocoLayout>
  );
}