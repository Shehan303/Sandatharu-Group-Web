import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './hero.css';

const SLIDES = [
  {
    tag: 'Coco Products',
    img: '../../../../public/images/hero/coco-banner.jpg',
    headline: ['ROOTED IN SRI LANKA.', 'GROWING WITH PURPOSE.'],
    sub: 'From natural resources to sustainable opportunities, Sandatharu connects Sri Lankan potential with wider possibilities.',
    color: '#33A852',
    route: '/coco'
  },
  {
    tag: 'Travels & Tours',
    img: '../../../../public/images/hero/travels-banner.jpg ',
    headline: ['DISCOVER. TRAVEL.', 'EXPERIENCE.'],
    sub: 'Creating memorable journeys across the beauty, culture and experiences of Sri Lanka.',
    color: '#0077CB',
    route: '/travels'
  },
  {
    tag: 'IT Solutions',
    img: '../../../../public/images/hero/it-banner.jpg',
    headline: ['IDEAS INTO', 'DIGITAL SOLUTIONS.'],
    sub: 'Helping businesses move forward through software, technology and creative digital solutions.',
    color: '#0A5FB4',
    route: '/it'
  },
  {
    tag: 'Sandatharu Group',
    img: '../../../../public/images/hero/travels-banner.jpg ',
    headline: ['ONE GROUP.', 'DIFFERENT POSSIBILITIES.'],
    sub: 'Sustainable products. Meaningful journeys. Digital innovation.',
    color: '#FFC107',
    route: '/businesses'
  }
];

const DURATION = 6000;

export default function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setI(v => (v + 1) % SLIDES.length), DURATION);
    return () => clearTimeout(t);
  }, [i]);

  const s = SLIDES[i];

  return (
    <section className="hero2">
      {/* Background image */}
      <div className="hero2__bg">
        <AnimatePresence mode="sync">
          <motion.div
            key={i}
            className="hero2__img"
            style={{ backgroundImage: `url(${s.img})` }}
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.1 }, scale: { duration: 7, ease: 'linear' } }}
          />
        </AnimatePresence>
        <div className="hero2__veil" />
        <div className="hero2__grid" />
      </div>

      {/* Vertical right rail — company tag */}
      <div className="hero2__rail">
        <span className="hero2__rail-label">Now Viewing</span>
        <span className="hero2__rail-tag" style={{ color: s.color }}>{s.tag}</span>
      </div>

      {/* Content */}
      <div className="hero2__inner">
        <div className="hero2__meta">
          <span className="hero2__num">0{i + 1}</span>
          <span className="hero2__slash">/</span>
          <span className="hero2__num">0{SLIDES.length}</span>
          <span className="hero2__meta-line" />
          <span className="hero2__meta-label">SANDATHARU GROUP · SRI LANKA</span>
        </div>

        <div className="hero2__head">
          <AnimatePresence mode="wait">
            <motion.h1
              key={i}
              className="d d-xl hero2__title"
              initial="h" animate="s" exit="e"
              variants={{
                s: { transition: { staggerChildren: 0.08 } },
                e: { opacity: 0, transition: { duration: .2 } }
              }}
            >
              {s.headline.map((line, idx) => (
                <span key={idx} className="hero2__line">
                  <motion.span
                    variants={{ h: { y: '115%' }, s: { y: 0 }, e: { y: '-115%' } }}
                    transition={{ duration: .9, ease: [.16,1,.3,1] }}
                  >{line}</motion.span>
                </span>
              ))}
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={i}
              className="hero2__sub"
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              transition={{ delay: .35, duration: .6 }}
            >
              {s.sub}
            </motion.p>
          </AnimatePresence>

          <motion.div
            className="hero2__ctas"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .55 }}
          >
            <Link to={s.route} className="btn btn-primary">
              <span>Explore {s.tag.split(' ')[0]}</span>
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
            <Link to="/businesses" className="btn btn-outline-light">
              <span>Discover Sandatharu</span>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="hero2__scroll">
        <span>SCROLL TO EXPLORE</span>
        <span className="hero2__scroll-line"><i /></span>
      </div>
    </section>
  );
}