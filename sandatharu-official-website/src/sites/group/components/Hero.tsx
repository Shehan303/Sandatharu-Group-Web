import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESSES } from '../../../shared/data/businesses';
import './hero.css';

const SLIDE_MS = 5200;

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setActive(v => (v + 1) % BUSINESSES.length), SLIDE_MS);
    return () => clearTimeout(t);
  }, [active]);

  const current = BUSINESSES[active];

  return (
    <section className="hero">
      {/* Background slides */}
      <div className="hero__bg">
        <AnimatePresence mode="sync">
          <motion.div
            key={current.key}
            className="hero__bg-slide"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.1 }, scale: { duration: 6, ease: 'linear' } }}
            style={{ backgroundImage: `url(${current.hero})` }}
          />
        </AnimatePresence>
        <div className="hero__veil" />
        <div className="hero__grain" />
      </div>

      {/* Content */}
      <div className="container hero__inner">
        <motion.span
          className="kicker hero__kicker"
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 }}
        >
          Sandatharu Group · Sri Lanka
        </motion.span>

        <motion.h1
          className="display display-xl hero__title"
          initial="hidden" animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12, delayChildren: .25 } } }}
        >
          <motion.span variants={{ hidden: { y: '110%' }, show: { y: 0 } }} transition={{ duration: .9, ease: [.16,1,.3,1] }}>GROWING</motion.span>
          <motion.span variants={{ hidden: { y: '110%' }, show: { y: 0 } }} transition={{ duration: .9, ease: [.16,1,.3,1] }}>BUSINESSES.</motion.span>
          <motion.span variants={{ hidden: { y: '110%' }, show: { y: 0 } }} transition={{ duration: .9, ease: [.16,1,.3,1] }} className="hero__title-accent">CREATING SOLUTIONS.</motion.span>
        </motion.h1>

        <motion.p
          className="hero__sub"
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .8 }}
        >
          Three companies. One identity. From sustainable coconut products to travel
          and digital technology — Sandatharu connects possibilities.
        </motion.p>

        <motion.div
          className="hero__ctas"
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
        >
          <a href="#businesses" className="btn btn-primary">Explore Our Businesses →</a>
          <Link to="/contact" className="btn btn-outline-light">Get in Touch</Link>
        </motion.div>
      </div>

      {/* Business tabs (auto-advance) */}
      <div className="hero__tabs container">
        {BUSINESSES.map((b, i) => (
          <button
            key={b.key}
            className={`hero__tab ${i === active ? 'is-active' : ''}`}
            onClick={() => setActive(i)}
            style={{ '--accent': b.accent } as React.CSSProperties}
          >
            <span className="hero__tab-num">0{i + 1}</span>
            <span className="hero__tab-body">
              <span className="hero__tab-label">{b.emoji} {b.short}</span>
              <span className="hero__tab-line">
                <span className="hero__tab-progress" style={{ animationDuration: `${SLIDE_MS}ms` }} key={`${b.key}-${active}`} />
              </span>
            </span>
          </button>
        ))}
      </div>

      {/* Scroll cue */}
      <div className="hero__scroll">SCROLL <span /></div>
    </section>
  );
}