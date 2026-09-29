import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TravelsLayout from '../components/TravelsLayout';

const TOUR_CATS = ['All', 'Day Tours', 'Multi-Day', 'Private', 'Family', 'Group', 'Cultural', 'Beach', 'Wildlife', 'Hill Country'];

const TOURS = [
  { t: 'Colombo City Day Tour', cat: 'Day Tours', duration: '1 Day', d: 'Explore Sri Lanka\'s capital — city, culture, food and shopping.', img: 'https://images.unsplash.com/photo-1588598098709-24d2ec7b6e75?w=1200&q=85&auto=format&fit=crop', highlights: ['Gangaramaya Temple', 'Independence Square', 'Local Food', 'Pettah Market'] },
  { t: 'Galle & Southern Coast', cat: 'Day Tours', duration: '1 Day', d: 'Galle Fort, coastal towns and southern beaches in one full day.', img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&q=85&auto=format&fit=crop', highlights: ['Galle Fort', 'Unawatuna', 'Turtle Hatchery', 'Coastal Drive'] },
  { t: 'Kandy & Temple of the Tooth', cat: 'Cultural', duration: '1 Day', d: 'Sri Lanka\'s cultural capital and the sacred Temple of the Tooth.', img: 'https://images.unsplash.com/photo-1566296611299-4a1a0d8b1e10?w=1200&q=85&auto=format&fit=crop', highlights: ['Kandy Lake', 'Temple', 'Tea Factory', 'Cultural Show'] },
  { t: 'Sigiriya & Dambulla', cat: 'Cultural', duration: '1 Day', d: 'The iconic Sigiriya Rock Fortress and the Dambulla Cave Temple.', img: 'https://images.unsplash.com/photo-1588598098709-24d2ec7b6e75?w=1200&q=85&auto=format&fit=crop', highlights: ['Sigiriya', 'Dambulla Caves', 'Village Lunch'] },
  { t: 'Hill Country — Ella & Nuwara Eliya', cat: 'Hill Country', duration: '2 Days', d: 'Tea plantations, mountains and the scenic train route.', img: 'https://images.unsplash.com/photo-1566296611299-4a1a0d8b1e10?w=1200&q=85&auto=format&fit=crop', highlights: ['Nine Arches Bridge', 'Tea Factory', 'Little Adam\'s Peak', 'Train Ride'] },
  { t: 'Yala Wildlife Safari', cat: 'Wildlife', duration: '1–2 Days', d: 'Leopards, elephants and Sri Lanka\'s wild side.', img: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=1200&q=85&auto=format&fit=crop', highlights: ['Jeep Safari', 'Wildlife', 'Camping Available'] },
  { t: 'Southern Beach Escape', cat: 'Beach', duration: '3 Days', d: 'Mirissa, Weligama and the south coast at your own pace.', img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&q=85&auto=format&fit=crop', highlights: ['Whale Watching', 'Beaches', 'Surfing', 'Sunset'] },
  { t: 'Cultural Triangle Deep Dive', cat: 'Cultural', duration: '4 Days', d: 'Sigiriya, Polonnaruwa, Anuradhapura and Mihintale.', img: 'https://images.unsplash.com/photo-1588598098709-24d2ec7b6e75?w=1200&q=85&auto=format&fit=crop', highlights: ['Ancient Cities', 'Temples', 'Archaeology'] },
  { t: 'Complete Sri Lanka Circuit', cat: 'Multi-Day', duration: '7–10 Days', d: 'The full island — culture, hill country, wildlife and beaches.', img: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1200&q=85&auto=format&fit=crop', highlights: ['Full Island', 'All Highlights', 'Flexible Route'] }
];

export default function TravelsTours() {
  const [cat, setCat] = useState('All');
  const list = cat === 'All' ? TOURS : TOURS.filter(t => t.cat === cat);

  return (
    <TravelsLayout>
      <section className="t-pagehero">
        <div className="t-pagehero__bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=2000&q=85&auto=format&fit=crop)' }} />
        <div className="t-pagehero__veil" />
        <div className="t-pagehero__inner">
          <div className="t-pagehero__crumb">
            <Link to="/travels">Travels</Link> / Tours
          </div>
          <h1 className="t-pagehero__title">
            Journeys Designed <em>for Discovery.</em>
          </h1>
          <p className="t-pagehero__lead">
            Explore Sri Lanka through flexible travel experiences — from one-day trips to
            full island circuits. Every tour is customisable.
          </p>
        </div>
      </section>

      <section className="t-section" style={{ paddingBottom: 40 }}>
        <div className="t-container">
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {TOUR_CATS.map(c => (
              <button
                key={c}
                onClick={() => setCat(c)}
                style={{
                  padding: '10px 20px',
                  borderRadius: 'var(--r-pill)',
                  border: '1.5px solid ' + (cat === c ? 'var(--ocean)' : 'var(--line)'),
                  background: cat === c ? 'var(--ocean)' : 'transparent',
                  color: cat === c ? '#fff' : 'var(--muted)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.82rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all .25s'
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="t-section" style={{ paddingTop: 0 }}>
        <div className="t-container">
          <div className="t-tours__grid">
            {list.map((t, i) => (
              <motion.article
                key={t.t}
                className="t-tour"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * .06, duration: .6 }}
              >
                <div className="t-tour__img">
                  <img src={t.img} alt={t.t} loading="lazy" />
                  <span className="t-tour__duration">{t.duration}</span>
                </div>
                <div className="t-tour__body">
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    color: 'var(--ocean)',
                    fontWeight: 700
                  }}>{t.cat}</span>
                  <h3 className="t-tour__t">{t.t}</h3>
                  <p className="t-tour__d">{t.d}</p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {t.highlights.map(h => (
                      <span key={h} style={{
                        padding: '4px 10px',
                        background: 'var(--sand)',
                        borderRadius: 'var(--r-pill)',
                        fontSize: '0.7rem',
                        color: 'var(--navy)',
                        fontWeight: 500
                      }}>{h}</span>
                    ))}
                  </div>

                  <div className="t-tour__meta">
                    <span>Customisable</span>
                    <Link to="/travels/contact" className="t-tour__link">
                      Enquire
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M13 6l6 6-6 6"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {list.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: 60,
              color: 'var(--muted)',
              border: '1px dashed var(--line)',
              borderRadius: 'var(--r-md)'
            }}>
              No tours in this category yet.
            </div>
          )}
        </div>
      </section>

      <section className="t-section t-section--navy">
        <div className="t-container" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
          <h2 className="t-display t-d-lg" style={{ color: '#fff' }}>
            Don&apos;t See What You <em style={{ color: 'var(--sunset)', fontStyle: 'normal' }}>Want?</em>
          </h2>
          <p className="t-lead" style={{ color: 'rgba(255,255,255,.72)', margin: '20px auto 32px', textAlign: 'center' }}>
            Every journey we offer can be customised. Or we can build something new — just for you.
          </p>
          <Link to="/travels/custom" className="t-btn t-btn--sunset">
            <span>Build a Custom Journey</span>
            <svg className="t-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </Link>
        </div>
      </section>
    </TravelsLayout>
  );
}