import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TravelsLayout from '../components/TravelsLayout';

const SERVICES = [
  { t: 'Airport Transfers', d: 'Convenient private transfers between the airport and your destination.', img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=85&auto=format&fit=crop' },
  { t: 'Vehicle Hire', d: 'Cars, SUVs, vans and group vehicles for any journey.', img: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200&q=85&auto=format&fit=crop' },
  { t: 'Private Car Travel', d: 'Freedom to travel around Sri Lanka on your own schedule.', img: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=1200&q=85&auto=format&fit=crop' },
  { t: 'Group Transportation', d: 'Comfortable transport for families, groups and events.', img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&q=85&auto=format&fit=crop' },
  { t: 'Corporate Travel', d: 'Reliable travel support for business needs.', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=85&auto=format&fit=crop' },
  { t: 'Event Transportation', d: 'Weddings, conferences and special events.', img: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=1200&q=85&auto=format&fit=crop' },
  { t: 'Long-Distance Transfers', d: 'Comfortable inter-city and cross-country journeys.', img: 'https://images.unsplash.com/photo-1566296611299-4a1a0d8b1e10?w=1200&q=85&auto=format&fit=crop' },
  { t: 'Custom Transportation', d: 'Build your own travel solution with our team.', img: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1200&q=85&auto=format&fit=crop' }
];

export default function TravelsServices() {
  return (
    <TravelsLayout>
      <section className="t-pagehero">
        <div className="t-pagehero__bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=2000&q=85&auto=format&fit=crop)' }} />
        <div className="t-pagehero__veil" />
        <div className="t-pagehero__inner">
          <div className="t-pagehero__crumb">
            <Link to="/travels">Travels</Link> / Services
          </div>
          <h1 className="t-pagehero__title">
            Transportation, <em>Your Way.</em>
          </h1>
          <p className="t-pagehero__lead">
            From airport arrivals to full island journeys — a complete set of travel and
            transportation services across Sri Lanka.
          </p>
        </div>
      </section>

      <section className="t-section">
        <div className="t-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * .06, duration: .6 }}
                style={{
                  background: '#fff',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--r-lg)',
                  overflow: 'hidden',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  alignItems: 'center'
                }}
              >
                <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                  <img src={s.img} alt={s.t} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '26px 24px' }}>
                  <h3 className="t-alt" style={{ fontSize: '1.25rem', color: 'var(--navy)', margin: '0 0 10px' }}>{s.t}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.9rem', margin: '0 0 18px', lineHeight: 1.6 }}>{s.d}</p>
                  <Link to="/travels/contact" style={{
                    color: 'var(--ocean)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8
                  }}>
                    Enquire
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M13 6l6 6-6 6"/>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Airport transfers highlight */}
      <section className="t-section t-section--navy">
        <div className="t-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div>
            <span className="t-kicker" style={{ color: 'var(--sky)' }}>Featured Service</span>
            <h2 className="t-display t-d-lg" style={{ marginTop: 12, color: '#fff' }}>
              Start Your Journey the Moment <em style={{ color: 'var(--sunset)', fontStyle: 'normal' }}>You Arrive.</em>
            </h2>
            <p className="t-lead" style={{ color: 'rgba(255,255,255,.72)', marginTop: 20 }}>
              Arriving in Sri Lanka? Arrange a convenient transfer from the airport to your
              hotel, destination or next stop. Available for solo travellers, families and groups.
            </p>
            <div style={{ display: 'flex', gap: 14, marginTop: 30, flexWrap: 'wrap' }}>
              <Link to="/travels/contact" className="t-btn t-btn--sunset">
                <span>Book Your Transfer</span>
                <svg className="t-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </Link>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: .9 }}
            style={{ borderRadius: 24, overflow: 'hidden', aspectRatio: '4/3' }}
          >
            <img
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=85&auto=format&fit=crop"
              alt="Airport transfer"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>
        </div>
      </section>

      {/* Corporate highlight */}
      <section className="t-section">
        <div className="t-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: .9 }}
            style={{ borderRadius: 24, overflow: 'hidden', aspectRatio: '4/3' }}
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=85&auto=format&fit=crop"
              alt="Corporate travel"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>
          <div>
            <span className="t-kicker">For Business</span>
            <h2 className="t-display t-d-lg" style={{ marginTop: 12 }}>
              Travel Solutions <em style={{ color: 'var(--ocean)', fontStyle: 'normal' }}>for Businesses.</em>
            </h2>
            <p className="t-lead" style={{ marginTop: 20 }}>
              Businesses need reliable transportation for meetings, events, conferences, staff
              movements and visiting guests. We provide flexible corporate travel arrangements.
            </p>
            <div style={{ display: 'flex', gap: 14, marginTop: 30, flexWrap: 'wrap' }}>
              <Link to="/travels/contact" className="t-btn t-btn--sunset">
                <span>Corporate Inquiry</span>
                <svg className="t-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </TravelsLayout>
  );
}