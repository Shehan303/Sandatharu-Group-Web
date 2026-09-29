import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TravelsLayout from '../components/TravelsLayout';

const VALUES = [
  { n: '01', t: 'Local Knowledge', d: 'We know Sri Lankan roads, destinations, seasons and the experiences that matter.' },
  { n: '02', t: 'Personal Service', d: 'Every journey is built around the traveller — not a fixed package.' },
  { n: '03', t: 'Comfortable Travel', d: 'Well-maintained vehicles, professional drivers and reliable timing.' },
  { n: '04', t: 'Reliability', d: 'When you book with us, we deliver. Consistent service, every trip.' },
  { n: '05', t: 'Flexible Journeys', d: 'Change plans, add stops, extend days — travel adapts to you.' },
  { n: '06', t: 'Responsible Travel', d: 'We respect local communities, cultures and environments we visit.' }
];

export default function TravelsAbout() {
  return (
    <TravelsLayout>
      <section className="t-pagehero">
        <div className="t-pagehero__bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1566296611299-4a1a0d8b1e10?w=2000&q=85&auto=format&fit=crop)' }} />
        <div className="t-pagehero__veil" />
        <div className="t-pagehero__inner">
          <div className="t-pagehero__crumb">
            <Link to="/travels">Travels</Link> / About
          </div>
          <h1 className="t-pagehero__title">
            Your Journey. <em>Our Roads.</em>
          </h1>
          <p className="t-pagehero__lead">
            Sandatharu Travels & Tours helps travellers experience Sri Lanka through comfortable
            transportation, flexible travel services and personalised journeys.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="t-section">
        <div className="t-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: .9, ease: [.16, 1, .3, 1] }}
            style={{ borderRadius: 24, overflow: 'hidden', aspectRatio: '4/5' }}
          >
            <img
              src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=1200&q=85&auto=format&fit=crop"
              alt="Sri Lanka"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </motion.div>

          <div>
            <span className="t-kicker">Our Story</span>
            <h2 className="t-display t-d-lg" style={{ marginTop: 12, marginBottom: 24 }}>
              Born From <em style={{ color: 'var(--ocean)', fontStyle: 'normal' }}>Sri Lankan Roads.</em>
            </h2>
            <p className="t-lead" style={{ marginBottom: 16 }}>
              Sandatharu Travels & Tours grew out of Sandatharu Group — a Sri Lankan business
              group with roots in sustainable products, technology and travel.
            </p>
            <p className="t-lead" style={{ marginBottom: 16 }}>
              We started with a simple idea: travel through Sri Lanka should be comfortable,
              flexible and personal. Not a fixed tour bus schedule. Not a generic package. A
              journey designed around you.
            </p>
            <p className="t-lead" style={{ marginBottom: 30 }}>
              Today, we operate across vehicle hire, airport transfers, private transport,
              group travel and custom journeys — with one promise: whatever your journey is,
              we help you get there.
            </p>
            <Link to="/travels/contact" className="t-btn t-btn--sunset">
              <span>Talk to Our Team</span>
              <svg className="t-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Numbers strip */}
      <section className="t-section t-section--navy">
        <div className="t-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 30 }}>
            {[
              { n: '5+', l: 'Vehicle Categories', s: 'Sedan · SUV · Van · Bus · Luxury' },
              { n: 'LK', l: 'Sri Lankan Roots', s: 'Island-wide operations' },
              { n: '25+', l: 'Destinations', s: 'Beaches to hill country' },
              { n: '24/7', l: 'Travel Support', s: 'We\'re reachable' }
            ].map((x, i) => (
              <motion.div
                key={x.l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .1, duration: .6 }}
                style={{ paddingTop: 24, borderTop: '1px solid rgba(255,255,255,.12)' }}
              >
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.4rem, 4.4vw, 3.6rem)',
                  color: 'var(--sunset)',
                  lineHeight: 1,
                  letterSpacing: '0.01em',
                  display: 'block',
                  marginBottom: 10
                }}>{x.n}</span>
                <span style={{
                  fontFamily: 'var(--font-alt)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#fff',
                  display: 'block',
                  marginBottom: 6
                }}>{x.l}</span>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.66rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,.5)'
                }}>{x.s}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="t-section t-section--sand">
        <div className="t-container">
          <div style={{ maxWidth: 720, marginBottom: 60 }}>
            <span className="t-kicker">What We Stand For</span>
            <h2 className="t-display t-d-lg" style={{ marginTop: 12 }}>
              Six Things That <em style={{ color: 'var(--ocean)', fontStyle: 'normal' }}>Never Change.</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
            {VALUES.map((v, i) => (
              <motion.div
                key={v.n}
                className="t-why__card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * .07, duration: .6 }}
              >
                <span className="t-why__num">{v.n}</span>
                <h3 className="t-why__t">{v.t}</h3>
                <p className="t-why__d">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="t-section" style={{ textAlign: 'center' }}>
        <div className="t-container" style={{ maxWidth: 780, margin: '0 auto' }}>
          <h2 className="t-display t-d-lg">Ready to <em style={{ color: 'var(--ocean)', fontStyle: 'normal' }}>Travel?</em></h2>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32 }}>
            <Link to="/travels/vehicles" className="t-btn t-btn--sunset">
              <span>View Vehicles</span>
              <svg className="t-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </Link>
            <Link to="/travels/contact" className="t-btn t-btn--outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </TravelsLayout>
  );
}