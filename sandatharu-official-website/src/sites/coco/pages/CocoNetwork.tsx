import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CocoLayout from '../components/CocoLayout';
import Partners from '../sections/Partners';

const NODES = [
  { n: '01', t: 'Coconut Collectors', d: 'Local families and small businesses who collect coconut shells and husks.', c: 'var(--moss)' },
  { n: '02', t: 'Sorting Partners',   d: 'Partners who help organize and prepare materials for processing.', c: 'var(--leaf)' },
  { n: '03', t: 'Processing Units',   d: 'Facilities that transform raw resources into finished products.', c: 'var(--forest)' },
  { n: '04', t: 'Logistics Partners', d: 'Providers that handle transport, storage and dispatch.', c: 'var(--moss-2)' },
  { n: '05', t: 'Business Clients',   d: 'Local and international businesses requiring coconut-based products.', c: 'var(--forest-2)' }
];

export default function CocoNetwork() {
  return (
    <CocoLayout>
      <section className="coco-pagehero">
        <div
          className="coco-pagehero__bg"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=2000&q=85&auto=format&fit=crop)'
          }}
        />
        <div className="coco-pagehero__veil" />
        <div className="coco-pagehero__inner">
          <div className="coco-pagehero__crumb">
            <Link to="/coco">Coco</Link> / Network
          </div>
          <h1 className="coco-pagehero__title">
            A Network Built From <em>Relationships.</em>
          </h1>
          <p className="coco-pagehero__lead">
            Reliable products begin with reliable supply relationships. Our network connects
            coconut resource providers with organized collection, processing and supply.
          </p>
        </div>
      </section>

      {/* Network nodes */}
      <section className="c-section">
        <div className="c-container">
          <div style={{ maxWidth: 720, marginBottom: 60 }}>
            <span className="c-kicker">Network Map</span>
            <h2 className="c-display c-d-lg" style={{ marginTop: 16 }}>
              Five links, <em className="c-d-em">one chain.</em>
            </h2>
          </div>

          <div style={{ position: 'relative' }}>
            {NODES.map((x, i) => (
              <motion.div
                key={x.n}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: .7 }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 24,
                  padding: '28px 0',
                  borderBottom: '1px solid var(--line)'
                }}
              >
                <div style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  background: x.c,
                  color: '#fff',
                  display: 'grid',
                  placeItems: 'center',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  flexShrink: 0
                }}>{x.n}</div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.4rem',
                    fontWeight: 500,
                    color: 'var(--forest)',
                    margin: '0 0 8px'
                  }}>{x.t}</h3>
                  <p style={{
                    color: 'var(--muted)',
                    fontSize: '0.95rem',
                    margin: 0,
                    lineHeight: 1.65,
                    maxWidth: '52ch'
                  }}>{x.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reuse Partners (suppliers + clients marquees) */}
      <Partners />

      {/* Become a partner */}
      <section className="c-section c-section--dark">
        <div className="c-container" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
          <span className="c-kicker" style={{ color: 'var(--moss-2)' }}>
            Join the Network
          </span>
          <h2 className="c-display c-d-lg" style={{ color: '#fff', marginTop: 16 }}>
            Become a <em className="c-d-em">supply partner.</em>
          </h2>
          <p className="c-lead" style={{ color: 'rgba(255,255,255,.7)', margin: '20px auto 30px' }}>
            If you collect, process or transport coconut resources — we want to hear from you.
          </p>
          <Link to="/coco/contact" className="c-btn c-btn--primary">
            <span>Get in Touch</span>
            <svg className="c-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </Link>
        </div>
      </section>
    </CocoLayout>
  );
}