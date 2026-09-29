import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CocoLayout from '../components/CocoLayout';
import Sustainability from '../sections/Sustainability';

const PILLARS = [
  {
    t: 'Responsible Sourcing',
    d: 'We work with local collectors and suppliers who share our commitment to quality, fairness and responsible resource utilization.',
    icon: '🌱'
  },
  {
    t: 'Value From Materials',
    d: 'We turn materials that might otherwise go underutilized into valuable, useful products for local and global markets.',
    icon: '♻️'
  },
  {
    t: 'Community Impact',
    d: 'We create opportunities for local families, small businesses and entrepreneurs across Sri Lanka\'s coconut-growing regions.',
    icon: '🤝'
  },
  {
    t: 'Long-Term Thinking',
    d: 'We build business practices with future opportunities in mind — for our business, our partners and Sri Lanka\'s coconut industry.',
    icon: '🌍'
  }
];

export default function CocoSustainability() {
  return (
    <CocoLayout>
      <section className="coco-pagehero">
        <div
          className="coco-pagehero__bg"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1550985616-10810253b84d?w=2000&q=85&auto=format&fit=crop)'
          }}
        />
        <div className="coco-pagehero__veil" />
        <div className="coco-pagehero__inner">
          <div className="coco-pagehero__crumb">
            <Link to="/coco">Coco</Link> / Sustainability
          </div>
          <h1 className="coco-pagehero__title">
            Growth With <em>Responsibility.</em>
          </h1>
          <p className="coco-pagehero__lead">
            Coconut is one of Sri Lanka&apos;s most valuable natural resources. Every part of
            the coconut can have potential value when responsibly collected, processed and
            utilized.
          </p>
        </div>
      </section>

      {/* Reuse home Sustainability section */}
      <Sustainability />

      {/* Four pillars */}
      <section className="c-section c-section--soft">
        <div className="c-container">
          <div style={{ maxWidth: 720, marginBottom: 60 }}>
            <span className="c-kicker">Our Approach</span>
            <h2 className="c-display c-d-lg" style={{ marginTop: 16 }}>
              Four <em className="c-d-em">commitments.</em>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 24
          }}>
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * .08, duration: .6 }}
                style={{
                  padding: '34px 30px',
                  background: 'var(--cream-2)',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--r-lg)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 14
                }}
              >
                <span style={{ fontSize: '2rem' }}>{p.icon}</span>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.3rem',
                  fontWeight: 500,
                  color: 'var(--forest)',
                  margin: 0
                }}>{p.t}</h3>
                <p style={{
                  color: 'var(--muted)',
                  fontSize: '0.92rem',
                  margin: 0,
                  lineHeight: 1.65
                }}>{p.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="c-section c-section--dark">
        <div className="c-container" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
          <h2 className="c-display c-d-lg" style={{ color: '#fff' }}>
            Build with <em className="c-d-em">purpose.</em>
          </h2>
          <p className="c-lead" style={{ color: 'rgba(255,255,255,.7)', margin: '20px auto 30px' }}>
            Partner with us to create sustainable value from Sri Lanka&apos;s coconut resources.
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