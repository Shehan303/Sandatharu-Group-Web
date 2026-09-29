import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../../../shared/components/PageHero';
import './story-page.css';

const TIMELINE = [
  { n: '01', t: 'Vision',    y: 'The Beginning',  d: 'Sandatharu began with a simple idea — build businesses that create long-term value for Sri Lankan communities and global markets alike.', img: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=1200&q=80&auto=format&fit=crop' },
  { n: '02', t: 'Beginning', y: 'First Steps',    d: 'Our first operations focused on resources — collecting and processing Sri Lanka\'s natural coconut materials with a focus on quality.', img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&q=80&auto=format&fit=crop' },
  { n: '03', t: 'Growth',    y: 'Expanding',      d: 'As opportunities grew, we expanded into travel and tourism — bringing Sri Lanka\'s beauty to visitors from around the world.', img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80&auto=format&fit=crop' },
  { n: '04', t: 'Today',     y: 'Three Businesses', d: 'Today, Sandatharu brings together Coco Products, Travels & Tours, and IT Solutions — three focused business areas under one identity.', img: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=1200&q=80&auto=format&fit=crop' },
  { n: '05', t: 'Tomorrow',  y: 'The Journey Continues', d: 'Our vision extends toward wider markets, stronger partnerships, digital transformation and sustainable growth.', img: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1200&q=80&auto=format&fit=crop' }
];

export default function StoryPage() {
  return (
    <>
      <PageHero
        num="04 / STORY"
        crumb="Story"
        kicker="Our Journey"
        title={<>EVERY JOURNEY HAS A<br />BEGINNING.</>}
        lead="From a simple idea to three focused businesses — this is the Sandatharu story so far."
        image="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=2000&q=85&auto=format&fit=crop"
      />

      <section className="section sp-timeline">
        <div className="container">
          {TIMELINE.map((c, i) => (
            <motion.article
              key={c.n}
              className={`sp-row ${i % 2 === 1 ? 'sp-row--rev' : ''}`}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }} transition={{ duration: .8 }}
            >
              <div className="sp-row__img">
                <img src={c.img} alt={c.t} loading="lazy" />
                <span className="sp-row__num d">{c.n}</span>
              </div>
              <div className="sp-row__body">
                <span className="sp-row__year">{c.y}</span>
                <h3 className="d d-md sp-row__title">{c.t}</h3>
                <p className="sp-row__d">{c.d}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section sp-cta">
        <div className="container sp-cta__inner">
          <h2 className="d d-lg">BE PART OF THE NEXT CHAPTER.</h2>
          <div className="sp-cta__btns">
            <Link to="/contact" className="btn btn-primary">
              <span>Work With Us</span>
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
            <Link to="/businesses" className="btn btn-ghost">Explore Businesses</Link>
          </div>
        </div>
      </section>
    </>
  );
}