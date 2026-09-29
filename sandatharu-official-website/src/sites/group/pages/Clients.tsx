import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../../../shared/components/PageHero';
import Marquee from '../../../shared/components/Marquee';
import './clients-page.css';

const CLIENTS = [
  { name: 'CEYLON AGRO',         sector: 'Agriculture',    accent: 'var(--green)' },
  { name: 'HILLTOP RESORTS',     sector: 'Hospitality',    accent: 'var(--blue)' },
  { name: 'NORTHWAY LOGISTICS',  sector: 'Logistics',      accent: 'var(--red)' },
  { name: 'KANDY HOTELS',        sector: 'Tourism',        accent: 'var(--yellow)' },
  { name: 'LANKA COCONUT',       sector: 'Export',         accent: 'var(--green)' },
  { name: 'AURORA TECH',         sector: 'Technology',     accent: 'var(--blue)' },
  { name: 'ROYAL TOURS',         sector: 'Travel',         accent: 'var(--yellow)' },
  { name: 'GREENFIELD EXPORTS',  sector: 'Agro Export',    accent: 'var(--green)' },
  { name: 'METRO RETAIL',        sector: 'Retail',         accent: 'var(--blue)' },
  { name: 'SEAVIEW HOTELS',      sector: 'Hospitality',    accent: 'var(--yellow)' }
];

const STATS = [
  { n: '40+', l: 'Active Clients' },
  { n: '12',  l: 'Industries' },
  { n: '98%', l: 'Retention' },
  { n: '5',   l: 'Years' }
];

export default function Clients() {
  return (
    <>
      <PageHero
        kicker="Our Clients"
        title="TRUSTED BY BUSINESSES ACROSS SRI LANKA."
        subtitle="From coconut exporters to hotels, tech startups and logistics companies — our growing client network spans industries and cities."
        image="/images/pages/clients-hero.jpg"
        accent="var(--green)"
      />

      {/* Stats */}
      <section className="cp__stats">
        <div className="container cp__stats-grid">
          {STATS.map((s, i) => (
            <motion.div
              key={s.l}
              className="cp__stat"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * .08 }}
            >
              <strong>{s.n}</strong>
              <span>{s.l}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Logo marquee */}
      <section className="section cp__marquee">
        <div className="container cp__m-head">
          <span className="kicker">Client Logos</span>
          <h2 className="display display-lg">A GROWING NETWORK.</h2>
        </div>
        <Marquee speed={44}>
          <div className="cp__m-row">
            {CLIENTS.map(c => (
              <div key={c.name} className="cp__chip" style={{ '--accent': c.accent } as React.CSSProperties}>
                <span className="cp__chip-bar" />
                <span>{c.name}</span>
              </div>
            ))}
          </div>
        </Marquee>
        <Marquee speed={56} reverse>
          <div className="cp__m-row">
            {CLIENTS.slice().reverse().map(c => (
              <div key={c.name + '2'} className="cp__chip cp__chip--soft">
                <span className="cp__chip-bar" />
                <span>{c.name}</span>
              </div>
            ))}
          </div>
        </Marquee>
      </section>

      {/* Client grid */}
      <section className="section cp__grid-sec">
        <div className="container">
          <div className="cp__g-head">
            <span className="kicker">Directory</span>
            <h2 className="display display-lg">WHO WE WORK WITH.</h2>
          </div>
          <div className="cp__grid">
            {CLIENTS.map((c, i) => (
              <motion.div
                key={c.name}
                className="cp__gitem"
                style={{ '--accent': c.accent } as React.CSSProperties}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * .08 }}
              >
                <div className="cp__gmark" />
                <strong>{c.name}</strong>
                <em>{c.sector}</em>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cp__cta">
        <div className="container cp__cta-inner">
          <h2 className="display display-lg">WANT TO BE NEXT?</h2>
          <p className="lead">Let's talk about what Sandatharu can do for your business.</p>
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: 12 }}>
            Become a Client
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}