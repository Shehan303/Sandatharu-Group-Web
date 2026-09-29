import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const TOURS = [
  { t: 'Colombo Day Tour', duration: 'Day Tour', d: 'Explore Sri Lanka\'s capital — culture, food and city life.', img: 'https://images.unsplash.com/photo-1588598098709-24d2ec7b6e75?w=1200&q=85&auto=format&fit=crop' },
  { t: 'Kandy & Hill Country', duration: '2 Days', d: 'Temple of the Tooth, tea plantations and cool-climate roads.', img: 'https://images.unsplash.com/photo-1566296611299-4a1a0d8b1e10?w=1200&q=85&auto=format&fit=crop' },
  { t: 'Southern Coast Escape', duration: '3 Days', d: 'Galle, Mirissa and the southern coastline by private vehicle.', img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&q=85&auto=format&fit=crop' },
  { t: 'Wildlife Safari', duration: 'Day Tour', d: 'Yala or Udawalawe — Sri Lanka\'s wildlife and landscapes.', img: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=1200&q=85&auto=format&fit=crop' },
  { t: 'Cultural Triangle', duration: '4 Days', d: 'Sigiriya, Dambulla, Polonnaruwa — ancient heritage.', img: 'https://images.unsplash.com/photo-1588598098709-24d2ec7b6e75?w=1200&q=85&auto=format&fit=crop' },
  { t: 'Custom Journey', duration: 'Any Length', d: 'Design your own tour with our team based on your interests.', img: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1200&q=85&auto=format&fit=crop' }
];

export default function Tours() {
  return (
    <section className="t-section t-section--sand">
      <div className="t-container">
        <div className="t-tours__head">
          <div>
            <span className="t-kicker">Tours</span>
            <h2 className="t-display t-d-lg" style={{ marginTop: 12 }}>Journeys Designed <em style={{ color: 'var(--ocean)', fontStyle: 'normal' }}>for Discovery.</em></h2>
          </div>
          <Link to="/travels/tours" className="t-btn t-btn--outline">
            <span>All Tours</span>
            <svg className="t-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </Link>
        </div>
        <div className="t-tours__grid">
          {TOURS.map((t, i) => (
            <motion.article
              key={t.t}
              className="t-tour"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * .07, duration: .6 }}
            >
              <div className="t-tour__img">
                <img src={t.img} alt="" loading="lazy" />
                <span className="t-tour__duration">{t.duration}</span>
              </div>
              <div className="t-tour__body">
                <h3 className="t-tour__t">{t.t}</h3>
                <p className="t-tour__d">{t.d}</p>
                <div className="t-tour__meta">
                  <span>Route · Custom</span>
                  <Link to="/travels/contact" className="t-tour__link">
                    Enquire
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
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