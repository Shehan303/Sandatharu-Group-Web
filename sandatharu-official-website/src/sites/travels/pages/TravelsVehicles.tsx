import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TravelsLayout from '../components/TravelsLayout';
import VehicleShowcase from '../components/VehicleShowcase';
import { VEHICLES } from '../data/travelsData';

const OPTIONS = [
  { t: 'Self-Drive', d: 'Hire a suitable vehicle for your own journey (subject to availability).' },
  { t: 'With Driver', d: 'Travel comfortably with a professional driver supporting your journey.' },
  { t: 'Daily Hire', d: 'Flexible vehicle hire for individual days and short trips.' },
  { t: 'Multi-Day Hire', d: 'Vehicle solutions for longer journeys around Sri Lanka.' },
  { t: 'Airport Transfer', d: 'Convenient private transportation between the airport and your destination.' },
  { t: 'Corporate Hire', d: 'Transportation support for business meetings, events and corporate travel.' }
];

export default function TravelsVehicles() {
  return (
    <TravelsLayout>
      <section className="t-pagehero">
        <div className="t-pagehero__bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1502877338535-766e1452684a?w=2000&q=85&auto=format&fit=crop)' }} />
        <div className="t-pagehero__veil" />
        <div className="t-pagehero__inner">
          <div className="t-pagehero__crumb">
            <Link to="/travels">Travels</Link> / Vehicle Hire
          </div>
          <h1 className="t-pagehero__title">
            The Right Vehicle <em>for the Way You Travel.</em>
          </h1>
          <p className="t-pagehero__lead">
            Whether you are travelling alone, with family, with friends or as a group —
            choose the vehicle that fits your journey.
          </p>
        </div>
      </section>

      {/* ⭐ GAME SHOWROOM */}
      <VehicleShowcase />

      {/* Hire options */}
      <section className="t-section">
        <div className="t-container">
          <div style={{ maxWidth: 720, marginBottom: 60 }}>
            <span className="t-kicker">Hire Options</span>
            <h2 className="t-display t-d-lg" style={{ marginTop: 12 }}>
              How You <em style={{ color: 'var(--ocean)', fontStyle: 'normal' }}>Want to Travel.</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
            {OPTIONS.map((o, i) => (
              <motion.div
                key={o.t}
                className="t-serv__card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * .07, duration: .6 }}
              >
                <div className="t-serv__icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="9"/>
                    <path d="M12 7v5l3 3"/>
                  </svg>
                </div>
                <h3 className="t-serv__t">{o.t}</h3>
                <p className="t-serv__d">{o.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle details cards */}
      <section className="t-section t-section--sand">
        <div className="t-container">
          <div style={{ maxWidth: 720, marginBottom: 60 }}>
            <span className="t-kicker">Full Fleet</span>
            <h2 className="t-display t-d-lg" style={{ marginTop: 12 }}>
              Our <em style={{ color: 'var(--ocean)', fontStyle: 'normal' }}>Vehicle Range.</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
            {VEHICLES.map((v, i) => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * .07, duration: .6 }}
                style={{
                  background: '#fff',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--r-lg)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ aspectRatio: '16/10', background: 'var(--navy)', display: 'grid', placeItems: 'center', padding: 20 }}>
                  <img src={v.img} alt={v.name} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                    onError={e => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }} />
                </div>
                <div style={{ padding: '24px 22px 26px' }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'var(--ocean)',
                    fontWeight: 700,
                    display: 'block',
                    marginBottom: 8
                  }}>{v.category}</span>
                  <h3 className="t-alt" style={{ fontSize: '1.2rem', color: 'var(--navy)', margin: '0 0 14px' }}>{v.name}</h3>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 16px', marginBottom: 18 }}>
                    <div><span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.56rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 700, display: 'block' }}>Passengers</span><span style={{ fontSize: '0.86rem', color: 'var(--navy)', fontWeight: 500 }}>{v.specs.passengers}</span></div>
                    <div><span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.56rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 700, display: 'block' }}>Luggage</span><span style={{ fontSize: '0.86rem', color: 'var(--navy)', fontWeight: 500 }}>{v.specs.luggage}</span></div>
                    <div><span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.56rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 700, display: 'block' }}>Transmission</span><span style={{ fontSize: '0.86rem', color: 'var(--navy)', fontWeight: 500 }}>{v.specs.transmission}</span></div>
                    <div><span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.56rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 700, display: 'block' }}>Driver</span><span style={{ fontSize: '0.86rem', color: 'var(--navy)', fontWeight: 500 }}>{v.specs.driver}</span></div>
                  </div>

                  <Link to="/travels/contact" className="t-btn t-btn--sunset" style={{ padding: '11px 20px', fontSize: '0.78rem', width: '100%', justifyContent: 'center' }}>
                    <span>Request This Vehicle</span>
                    <svg className="t-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M13 6l6 6-6 6"/>
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="t-section">
        <div className="t-container" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
          <h2 className="t-display t-d-lg">Need a Vehicle <em style={{ color: 'var(--ocean)', fontStyle: 'normal' }}>for Your Journey?</em></h2>
          <p className="t-lead" style={{ margin: '20px auto 32px', textAlign: 'center' }}>
            Tell us where you are going, how many people are travelling and what type of
            vehicle you need.
          </p>
          <Link to="/travels/contact" className="t-btn t-btn--sunset">
            <span>Request Vehicle Hire</span>
            <svg className="t-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </Link>
        </div>
      </section>
    </TravelsLayout>
  );
}