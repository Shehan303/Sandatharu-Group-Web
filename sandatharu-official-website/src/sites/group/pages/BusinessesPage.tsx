import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../../../shared/components/PageHero';
import Businesses from '../sections/Businesses';
import { BUSINESSES } from '../../../shared/data/businesses';
import './businesses-page.css';

export default function BusinessesPage() {
  return (
    <>
      <PageHero
        num="03 / BUSINESSES"
        crumb="Businesses"
        kicker="Our Portfolio"
        title={<>THREE BUSINESSES.<br />ONE VISION.</>}
        lead="Different industries. Different capabilities. One Sandatharu identity — built around a shared commitment to quality and long-term value."
        image="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=2000&q=85&auto=format&fit=crop"
      />

      {/* Quick nav cards */}
      <section className="section bp-nav">
        <div className="container">
          <div className="bp-nav__grid">
            {BUSINESSES.map((b, i) => (
              <motion.div
                key={b.key}
                className="bp-nav__card"
                style={{ '--c': b.accent } as React.CSSProperties}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * .1, duration: .6 }}
              >
                <div className="bp-nav__img">
                  <img src={b.card} alt={b.name} loading="lazy" />
                  <span className="bp-nav__num d">0{i + 1}</span>
                </div>
                <div className="bp-nav__body">
                  <img src={b.logo} alt={b.name} className="bp-nav__logo" />
                  <h3 className="bp-nav__t">{b.tagline}</h3>
                  <p className="bp-nav__d">{b.desc}</p>
                  <Link to={b.route} className="bp-nav__link">
                    Explore {b.short}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reuse sticky stack from Home */}
      <Businesses />
    </>
  );
}