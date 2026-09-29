import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TravelsLayout from '../components/TravelsLayout';
import { DESTINATIONS } from '../data/travelsData';

const REGIONS = [
  { t: 'Colombo & West', d: 'Urban culture, business districts, coastal escapes.', img: 'https://images.unsplash.com/photo-1588598098709-24d2ec7b6e75?w=900&q=80&auto=format&fit=crop' },
  { t: 'Hill Country', d: 'Kandy, Nuwara Eliya, Ella — tea country and misty peaks.', img: 'https://images.unsplash.com/photo-1566296611299-4a1a0d8b1e10?w=900&q=80&auto=format&fit=crop' },
  { t: 'Cultural Triangle', d: 'Sigiriya, Dambulla, Polonnaruwa — ancient heritage.', img: 'https://images.unsplash.com/photo-1588598098709-24d2ec7b6e75?w=900&q=80&auto=format&fit=crop' },
  { t: 'Southern Coast', d: 'Galle, Mirissa, Unawatuna — beaches and coastal life.', img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=900&q=80&auto=format&fit=crop' },
  { t: 'Wildlife Parks', d: 'Yala, Udawalawe, Minneriya — safari adventures.', img: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=900&q=80&auto=format&fit=crop' },
  { t: 'East Coast', d: 'Trincomalee, Pasikuda, Arugam Bay.', img: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80&auto=format&fit=crop' }
];

export default function TravelsDestinations() {
  return (
    <TravelsLayout>
      <section className="t-pagehero">
        <div className="t-pagehero__bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=2000&q=85&auto=format&fit=crop)' }} />
        <div className="t-pagehero__veil" />
        <div className="t-pagehero__inner">
          <div className="t-pagehero__crumb">
            <Link to="/travels">Travels</Link> / Destinations
          </div>
          <h1 className="t-pagehero__title">
            One Island. <em>Thousands of Experiences.</em>
          </h1>
          <p className="t-pagehero__lead">
            From tropical beaches to misty mountains, ancient cities to wildlife parks — Sri
            Lanka has something for every kind of traveller.
          </p>
        </div>
      </section>

      {/* Regions grid */}
      <section className="t-section">
        <div className="t-container">
          <div className="t-dest__head">
            <span className="t-kicker">Explore by Region</span>
            <h2 className="t-display t-d-lg" style={{ marginTop: 12 }}>
              Where Do You Want <em style={{ color: 'var(--ocean)', fontStyle: 'normal' }}>to Go?</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {REGIONS.map((r, i) => (
              <motion.div
                key={r.t}
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
                <div style={{ aspectRatio: '16/10', overflow: 'hidden' }}>
                  <img src={r.img} alt={r.t} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '24px 22px 26px' }}>
                  <h3 className="t-alt" style={{ fontSize: '1.3rem', color: 'var(--navy)', margin: '0 0 8px' }}>{r.t}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.9rem', margin: '0 0 16px', lineHeight: 1.6 }}>{r.d}</p>
                  <Link to="/travels/tours" style={{
                    color: 'var(--ocean)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8
                  }}>
                    See Tours
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

      {/* Experience types */}
      <section className="t-section t-section--navy">
        <div className="t-container">
          <div style={{ maxWidth: 720, marginBottom: 60 }}>
            <span className="t-kicker">Explore by Category</span>
            <h2 className="t-display t-d-lg" style={{ marginTop: 12 }}>
              Six Ways to <em style={{ color: 'var(--sunset)', fontStyle: 'normal' }}>Experience Sri Lanka.</em>
            </h2>
          </div>
          <div className="t-dest__grid">
            {DESTINATIONS.map((d, i) => (
              <motion.div
                key={d.id}
                className="t-dest__card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * .08, duration: .6 }}
              >
                <img src={d.img} alt={d.title} loading="lazy" />
                <div className="t-dest__body">
                  <h3 className="t-dest__t">{d.title}</h3>
                  <p className="t-dest__d">{d.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="t-section" style={{ textAlign: 'center' }}>
        <div className="t-container" style={{ maxWidth: 780, margin: '0 auto' }}>
          <h2 className="t-display t-d-lg">Build Your <em style={{ color: 'var(--ocean)', fontStyle: 'normal' }}>Own Route.</em></h2>
          <p className="t-lead" style={{ margin: '20px auto 32px', textAlign: 'center' }}>
            Have a specific destination in mind? Or want to combine several? Let&apos;s plan it.
          </p>
          <Link to="/travels/custom" className="t-btn t-btn--sunset">
            <span>Start a Custom Journey</span>
            <svg className="t-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </Link>
        </div>
      </section>
    </TravelsLayout>
  );
}