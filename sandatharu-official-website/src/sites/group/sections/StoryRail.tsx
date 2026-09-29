import { motion } from 'framer-motion';
import './storyrail.css';

const CHAPTERS = [
  { n: '01', t: 'Vision',     d: 'Every business begins with an idea. Sandatharu began with the vision of building opportunities through practical businesses with long-term value.', img: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&q=80&auto=format&fit=crop' },
  { n: '02', t: 'Beginning',  d: 'The first businesses were established with a focus on quality, relationships and a hands-on approach to serving customers.', img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80&auto=format&fit=crop' },
  { n: '03', t: 'Growth',     d: 'As opportunities expanded, Sandatharu developed different business areas while maintaining a common commitment to quality.', img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80&auto=format&fit=crop' },
  { n: '04', t: 'Today',      d: 'Today, Sandatharu brings together three focused business areas — Coco Products, Travels & Tours, and IT Solutions.', img: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=1200&q=80&auto=format&fit=crop' },
  { n: '05', t: 'Tomorrow',   d: 'Our journey continues toward wider markets, stronger partnerships, digital transformation and sustainable growth.', img: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1200&q=80&auto=format&fit=crop' }
];

export default function StoryRail() {
  return (
    <section className="sr" id="story">
      <div className="sr__head container">
        <span className="k">Our Journey</span>
        <h2 className="d d-lg sr__title">EVERY JOURNEY HAS A<br />BEGINNING. OURS IS SRI LANKAN.</h2>
      </div>

      <div className="sr__scroll-wrap">
        <div className="sr__scroll">
          {CHAPTERS.map((c, i) => (
            <motion.article
              key={c.n}
              className="sr__card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: .7, delay: i * .08 }}
            >
              <div className="sr__card-img">
                <img src={c.img} alt={c.t} loading="lazy" />
                <span className="sr__card-num d">{c.n}</span>
              </div>
              <div className="sr__card-body">
                <h3 className="sr__card-title d d-sm">{c.t}</h3>
                <p className="sr__card-desc">{c.d}</p>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="sr__scroll-hint">
          <span>DRAG / SCROLL →</span>
        </div>
      </div>
    </section>
  );
}