import { Link } from 'react-router-dom';
import TravelsLayout from '../components/TravelsLayout';
import CustomJourney from '../sections/CustomJourney';

const STEPS = [
  { n: '01', t: 'Tell Us Your Plan', d: 'Destinations, dates, number of travellers, interests.' },
  { n: '02', t: 'Choose Your Transport', d: 'Vehicle type, driver option, comfort level.' },
  { n: '03', t: 'Customize Your Journey', d: 'Add stops, extend days, adjust the route.' },
  { n: '04', t: 'Confirm Your Travel', d: 'Final details, arrangements and confirmation.' },
  { n: '05', t: 'Enjoy Sri Lanka', d: 'Travel with confidence and support along the way.' }
];

export default function TravelsCustom() {
  return (
    <TravelsLayout>
      <section className="t-pagehero">
        <div className="t-pagehero__bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1566296611299-4a1a0d8b1e10?w=2000&q=85&auto=format&fit=crop)' }} />
        <div className="t-pagehero__veil" />
        <div className="t-pagehero__inner">
          <div className="t-pagehero__crumb">
            <Link to="/travels">Travels</Link> / Custom Journey
          </div>
          <h1 className="t-pagehero__title">
            Your Journey. <em>Your Rules.</em>
          </h1>
          <p className="t-pagehero__lead">
            Don&apos;t want a fixed tour? Tell us what you want to experience, where you want
            to go and how you want to travel — we&apos;ll build it with you.
          </p>
        </div>
      </section>

      {/* Planning steps */}
      <section className="t-section">
        <div className="t-container">
          <div style={{ maxWidth: 720, marginBottom: 60 }}>
            <span className="t-kicker">How It Works</span>
            <h2 className="t-display t-d-lg" style={{ marginTop: 12 }}>
              Five Steps to <em style={{ color: 'var(--ocean)', fontStyle: 'normal' }}>Your Perfect Trip.</em>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0 }}>
            {STEPS.map((s, i) => (
              <div key={s.n} style={{ padding: '32px 22px', borderTop: '2px solid var(--line)', position: 'relative' }}>
                <span style={{
                  display: 'inline-grid',
                  placeItems: 'center',
                  width: 52, height: 52,
                  borderRadius: '50%',
                  background: 'var(--ocean)',
                  color: '#fff',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.3rem',
                  marginBottom: 20,
                  position: 'relative',
                  top: -58,
                  marginTop: 0
                }}>{s.n}</span>
                <h3 className="t-alt" style={{ fontSize: '1.1rem', color: 'var(--navy)', marginBottom: 8 }}>{s.t}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', margin: 0, lineHeight: 1.6 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full custom journey form */}
      <CustomJourney />

      {/* Popular custom routes */}
      <section className="t-section">
        <div className="t-container">
          <div style={{ maxWidth: 720, marginBottom: 60 }}>
            <span className="t-kicker">Inspiration</span>
            <h2 className="t-display t-d-lg" style={{ marginTop: 12 }}>
              Popular <em style={{ color: 'var(--ocean)', fontStyle: 'normal' }}>Starting Points.</em>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
            {[
              { t: 'Honeymoon Escape', d: 'Beaches, boutique hotels and private moments.', tags: ['Couples', '7 Days', 'South Coast'] },
              { t: 'Family Adventure', d: 'Kid-friendly destinations and comfortable pace.', tags: ['Family', '8–10 Days', 'Island Circuit'] },
              { t: 'Photography Tour', d: 'Golden-hour spots, tea country and coastline.', tags: ['Photography', '6 Days', 'Hill Country + Coast'] }
            ].map((r, i) => (
              <div key={r.t} style={{ padding: 30, background: 'var(--sand)', borderRadius: 'var(--r-lg)' }}>
                <h3 className="t-alt" style={{ fontSize: '1.3rem', color: 'var(--navy)', marginBottom: 10 }}>{r.t}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', margin: '0 0 16px', lineHeight: 1.6 }}>{r.d}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {r.tags.map(t => (
                    <span key={t} style={{
                      padding: '4px 10px',
                      background: '#fff',
                      borderRadius: 'var(--r-pill)',
                      fontSize: '0.7rem',
                      color: 'var(--ocean)',
                      fontWeight: 500
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </TravelsLayout>
  );
}