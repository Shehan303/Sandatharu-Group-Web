import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section className="t-section">
      <div className="t-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          style={{ borderRadius: 24, overflow: 'hidden', aspectRatio: '4/5' }}
        >
          <img
            src="https://images.unsplash.com/photo-1566296611299-4a1a0d8b1e10?w=1200&q=85&auto=format&fit=crop"
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </motion.div>

        <div>
          <span className="t-kicker">Welcome</span>
          <h2 className="t-alt t-d-md" style={{ margin: '16px 0 24px' }}>
            Sri Lanka <em style={{ color: 'var(--ocean)', fontStyle: 'normal' }}>is waiting.</em>
          </h2>
          <p className="t-lead" style={{ marginBottom: 16 }}>
            Sri Lanka is more than a destination. It is a journey through beaches, mountains,
            forests, ancient cities, wildlife, food, culture and unforgettable people.
          </p>
          <p className="t-lead" style={{ marginBottom: 16 }}>
            Sandatharu Travels & Tours helps travellers experience Sri Lanka through comfortable
            transportation, flexible travel services and personalised journeys.
          </p>
          <p className="t-lead" style={{ marginBottom: 30 }}>
            Whether you need a simple airport transfer, a vehicle for your holiday, a private
            tour, group transportation or a completely customised journey — we help you travel
            your way.
          </p>
          <Link to="/travels/about" className="t-btn t-btn--sunset">
            <span>Discover Sandatharu</span>
            <svg className="t-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}