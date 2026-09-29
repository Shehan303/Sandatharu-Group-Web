import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../../../shared/components/PageHero';
import './news-page.css';

const CATS = ['All', 'Company', 'Travel', 'Products', 'Partnerships', 'Events'];

const POSTS = [
  { cat: 'Company',      date: '12 Feb 2026', t: 'Sandatharu expands Coco operations into new regions',    d: 'New collection points and processing partnerships across the coconut belt.', img: 'https://images.unsplash.com/photo-1580984969071-a8da5656c2fb?w=900&q=80&auto=format&fit=crop', featured: true },
  { cat: 'Travel',       date: '04 Feb 2026', t: 'New Kurunegala → Colombo daily service now available',  d: 'Comfortable private hire available for daily commuters and travellers.', img: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=900&q=80&auto=format&fit=crop' },
  { cat: 'Products',     date: '28 Jan 2026', t: 'Sandatharu Coco launches new briquette product line',  d: 'Higher density, longer burn, ideal for export and industrial use.', img: 'https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?w=900&q=80&auto=format&fit=crop' },
  { cat: 'Partnerships', date: '19 Jan 2026', t: 'Partnering with local coconut farmers across the island', d: 'A new supplier network to strengthen collection and processing.', img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=80&auto=format&fit=crop' },
  { cat: 'Events',       date: '08 Jan 2026', t: 'Sandatharu Group at the Sri Lanka Export Expo',        d: 'Showcasing Coco products and travel services to global buyers.', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80&auto=format&fit=crop' },
  { cat: 'Company',      date: '22 Dec 2025', t: 'Building a bigger digital footprint with Sandatharu IT', d: 'New web and software services launched for business clients.', img: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=900&q=80&auto=format&fit=crop' }
];

export default function NewsPage() {
  return (
    <>
      <PageHero
        num="07 / NEWS"
        crumb="News"
        kicker="News & Updates"
        title={<>WHAT'S HAPPENING<br />AT SANDATHARU.</>}
        lead="Company updates, product launches, partnerships, travel services and everything in between."
        image="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=2000&q=85&auto=format&fit=crop"
      />

      <section className="section np-filters">
        <div className="container">
          <div className="np-filters__row">
            {CATS.map(c => (
              <button key={c} className={`np-filter ${c === 'All' ? 'is-active' : ''}`}>{c}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="section np-list">
        <div className="container">
          {/* Featured */}
          <motion.article
            className="np-featured"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: .8 }}
          >
            <div className="np-featured__img">
              <img src={POSTS[0].img} alt="" />
            </div>
            <div className="np-featured__body">
              <div className="np-meta">
                <span className="np-cat">{POSTS[0].cat}</span>
                <span>{POSTS[0].date}</span>
              </div>
              <h2 className="d d-md np-featured__t">{POSTS[0].t}</h2>
              <p className="np-featured__d">{POSTS[0].d}</p>
              <Link to="/news" className="np-link">
                Read Full Story
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            </div>
          </motion.article>

          {/* Grid */}
          <div className="np-grid">
            {POSTS.slice(1).map((p, i) => (
              <motion.article
                key={p.t}
                className="np-card"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }} transition={{ delay: i * .07, duration: .6 }}
              >
                <div className="np-card__img">
                  <img src={p.img} alt="" loading="lazy" />
                </div>
                <div className="np-card__body">
                  <div className="np-meta">
                    <span className="np-cat">{p.cat}</span>
                    <span>{p.date}</span>
                  </div>
                  <h3 className="np-card__t">{p.t}</h3>
                  <p className="np-card__d">{p.d}</p>
                  <Link to="/news" className="np-link">
                    Read More
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}