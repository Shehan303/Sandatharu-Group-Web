import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../../../shared/components/PageHero';
import Network from '../sections/Network';
import MarqueeRow from '../sections/MarqueeRow';
import './network-page.css';

const CATEGORIES = [
  { n: '01', t: 'Suppliers',     d: 'Local coconut collectors, material processors and resource partners.', c: 'var(--green)' },
  { n: '02', t: 'Clients',       d: 'Businesses, brands and organizations we serve across industries.', c: 'var(--blue)' },
  { n: '03', t: 'Partners',      d: 'Travel operators, logistics providers and technology collaborators.', c: 'var(--yellow)' },
  { n: '04', t: 'Communities',   d: 'Local communities, families and entrepreneurs we work with every day.', c: 'var(--red)' }
];

export default function NetworkPage() {
  return (
    <>
      <PageHero
        num="05 / NETWORK"
        crumb="Network"
        kicker="Our Network"
        title={<>INDEPENDENT BUSINESSES.<br />SHARED FOUNDATION.</>}
        lead="Our businesses operate independently while sharing a common foundation of relationships, knowledge, resources and opportunities."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=2000&q=85&auto=format&fit=crop"
      />

      <Network />

      <section className="section np-cats">
        <div className="container">
          <div className="np-cats__head">
            <span className="k">Who We Work With</span>
            <h2 className="d d-lg np-cats__title">CONNECTED ACROSS THE ISLAND.</h2>
          </div>
          <div className="np-cats__grid">
            {CATEGORIES.map((c, i) => (
              <motion.div
                key={c.n}
                className="np-cats__cell"
                style={{ '--c': c.c } as React.CSSProperties}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * .08, duration: .6 }}
              >
                <span className="np-cats__num d">{c.n}</span>
                <h3 className="np-cats__t">{c.t}</h3>
                <p className="np-cats__d">{c.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MarqueeRow variant="clients" />
      <MarqueeRow variant="partners" />

      <section className="section np-cta">
        <div className="container np-cta__inner">
          <h2 className="d d-lg">BECOME A PARTNER.</h2>
          <p className="lead" style={{ margin: '24px auto 32px', textAlign: 'center' }}>
            We're always looking for reliable partners, suppliers and collaborators across Sri Lanka.
          </p>
          <Link to="/contact" className="btn btn-primary">
            <span>Get in Touch</span>
            <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </div>
      </section>
    </>
  );
}