import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../../../shared/components/PageHero';
import './partners-page.css';

const PARTNERS = [
  { name: 'Ceylon Cargo',     type: 'Logistics',  accent: 'var(--blue)' },
  { name: 'Hilltop Group',    type: 'Hospitality', accent: 'var(--yellow)' },
  { name: 'Aurora Cloud',     type: 'Technology',  accent: 'var(--blue)' },
  { name: 'GreenFields Coop', type: 'Supplier',    accent: 'var(--green)' },
  { name: 'Metro Finance',    type: 'Finance',     accent: 'var(--red)' },
  { name: 'NorthStar Media',  type: 'Marketing',   accent: 'var(--yellow)' }
];

const REASONS = [
  { n: '01', t: 'Shared Standards', d: 'We partner only with businesses that match our commitment to quality and reliability.' },
  { n: '02', t: 'Local Network',    d: 'Deep roots across Sri Lanka — supplier, distributor and service networks ready to go.' },
  { n: '03', t: 'Cross-Sector',     d: 'Three industries under one group means flexible, multi-angle partnerships.' }
];

export default function Partners() {
  return (
    <>
      <PageHero
        kicker="Our Partners"
        title="STRONGER TOGETHER."
        subtitle="Collaboration is at the heart of how Sandatharu operates. Meet some of the partners we work with."
        image="/images/pages/partners-hero.jpg"
        accent="var(--yellow)"
      />

      {/* Partner grid */}
      <section className="section pp__grid-sec">
        <div className="container">
          <div className="pp__g-head">
            <span className="kicker">Collaborators</span>
            <h2 className="display display-lg">OUR PARTNER NETWORK.</h2>
          </div>

          <div className="pp__grid">
            {PARTNERS.map((p, i) => (
              <motion.div
                key={p.name}
                className="pp__card"
                style={{ '--accent': p.accent } as React.CSSProperties}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: (i % 3) * .1, duration: .6 }}
              >
                <div className="pp__logo">
                  <span className="pp__logo-mark" />
                  <span className="pp__logo-text">{p.name}</span>
                </div>
                <div className="pp__meta">
                  <span className="pp__type">{p.type}</span>
                  <span className="pp__status">
                    <span className="pp__status-dot" />
                    Active Partner
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why partner */}
      <section className="section pp__why">
        <div className="container">
          <div className="pp__w-head">
            <span className="kicker">Why Partner With Us</span>
            <h2 className="display display-lg">A PARTNERSHIP YOU CAN BUILD ON.</h2>
          </div>
          <div className="pp__w-grid">
            {REASONS.map((r, i) => (
              <motion.div
                key={r.n}
                className="pp__reason"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .1, duration: .6 }}
              >
                <span className="pp__reason-num display">{r.n}</span>
                <h3>{r.t}</h3>
                <p>{r.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section pp__cta">
        <div className="container pp__cta-inner">
          <h2 className="display display-xl">LET'S WORK TOGETHER.</h2>
          <p className="lead" style={{ margin: '16px auto 26px' }}>
            Whether you're a supplier, distributor or service provider — we'd like to hear from you.
          </p>
          <Link to="/contact" className="btn btn-dark">
            Become a Partner
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}