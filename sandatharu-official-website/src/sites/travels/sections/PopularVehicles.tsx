import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { VEHICLES } from '../data/travelsData';

export default function PopularVehicles() {
  return (
    <section className="t-pop" id="popular-vehicles">
      <div className="t-container">
        <div className="t-pop__head">
          <div>
            <span className="t-kicker">Our Fleet</span>
            <h2 className="t-display t-d-lg" style={{ marginTop: 12 }}>
              Choose Your <em style={{ color: 'var(--orange)', fontStyle: 'normal' }}>Perfect Vehicle.</em>
            </h2>
          </div>
          <Link to="/travels/vehicles" className="t-btn t-btn--outline">
            <span>View All Vehicles</span>
            <svg className="t-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </Link>
        </div>

        <div className="t-pop__grid">
          {VEHICLES.map((v, i) => (
            <motion.article
              key={v.id}
              className="t-pop__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * .07, duration: .6 }}
              style={{ '--card-color': v.color } as React.CSSProperties}
            >
              <div className="t-pop__img">
                <span className="t-pop__cat">{v.category}</span>
                <img
                  src={v.img}
                  alt={v.name}
                  loading="lazy"
                  onError={e => {
                    (e.currentTarget as HTMLImageElement).style.opacity = '0';
                  }}
                />
              </div>
              <div className="t-pop__body">
                <h3 className="t-pop__name">{v.name}</h3>
                <div className="t-pop__specs">
                  <span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>
                    </svg>
                    {v.specs.passengers} seats
                  </span>
                  <span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="7" width="18" height="13" rx="2"/>
                    </svg>
                    {v.specs.luggage}
                  </span>
                  <span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2"/>
                    </svg>
                    {v.specs.ac === 'Yes' ? 'A/C' : '—'}
                  </span>
                </div>
                <div className="t-pop__foot">
                  <span className="t-pop__price">
                    <b>On request</b>
                    <em>per day</em>
                  </span>
                  <Link to="/travels/contact" className="t-pop__btn">
                    Hire
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M13 6l6 6-6 6"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}