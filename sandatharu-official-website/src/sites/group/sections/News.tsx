import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './news.css';

const POSTS = [
  { cat: 'Company News',    date: '12 Feb 2026', t: 'Sandatharu expands Coco operations into new regions', img: 'https://images.unsplash.com/photo-1580984969071-a8da5656c2fb?w=900&q=80&auto=format&fit=crop' },
  { cat: 'Travel Updates',  date: '04 Feb 2026', t: 'New Kurunegala → Colombo daily service now available', img: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=900&q=80&auto=format&fit=crop' },
  { cat: 'Product Updates', date: '28 Jan 2026', t: 'Sandatharu Coco launches new briquette line', img: 'https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?w=900&q=80&auto=format&fit=crop' }
];

export default function News() {
  return (
    <section className="nw2">
      <div className="container">
        <div className="nw2__head">
          <div>
            <span className="k">News & Updates</span>
            <h2 className="d d-lg nw2__title">WHAT'S HAPPENING AT SANDATHARU.</h2>
          </div>
          <Link to="/news" className="btn btn-ghost nw2__all">
            <span>All Updates</span>
            <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </div>

        <div className="nw2__grid">
          {POSTS.map((p, i) => (
            <motion.article
              key={i}
              className="nw2__card"
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }} transition={{ delay: i * .1, duration: .7 }}
            >
              <div className="nw2__img">
                <img src={p.img} alt={p.t} loading="lazy" />
              </div>
              <div className="nw2__meta">
                <span className="nw2__cat">{p.cat}</span>
                <span className="nw2__date">{p.date}</span>
              </div>
              <h3 className="nw2__t">{p.t}</h3>
              <Link to="/news" className="nw2__link">
                Read More
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}