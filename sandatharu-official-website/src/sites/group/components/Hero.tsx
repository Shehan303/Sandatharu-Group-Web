import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESSES } from '../../../shared/data/businesses';
import './hero.css';

const SLIDE_MS = 6000;

export default function Hero() {
  const [active, setActive] = useState(0);
  const current = BUSINESSES[active];

  useEffect(() => {
    const t = setTimeout(() => setActive(v => (v + 1) % BUSINESSES.length), SLIDE_MS);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <section className="hero2">
      {/* Decorative background layer */}
      <div className="hero2__bg" aria-hidden>
        <div className="hero2__dotgrid" />
        <motion.span
          className="hero2__shape hero2__shape--circle"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.span
          className="hero2__shape hero2__shape--triangle"
          animate={{ y: [0, 24, 0], rotate: [0, 12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.span
          className="hero2__shape hero2__shape--star"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox="0 0 60 60" width="60" height="60">
            <path
              d="M30 4 L34 22 L52 30 L34 38 L30 56 L26 38 L8 30 L26 22 Z"
              fill="none" stroke="var(--yellow)" strokeWidth="1.5"
            />
          </svg>
        </motion.span>
      </div>

      <div className="container hero2__inner">
        {/* LEFT — Copy */}
        <div className="hero2__copy">
          <motion.div
            className="hero2__badge"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            <span className="hero2__badge-dot" />
            <span>Sandatharu Group of Company · Sri Lanka</span>
          </motion.div>

          <h1 className="hero2__title">
            <span className="hero2__line"><motion.span
              initial={{ y: '110%' }} animate={{ y: 0 }}
              transition={{ duration: .9, ease: [.16,1,.3,1], delay: .15 }}
            >THREE COMPANIES.</motion.span></span>
            <span className="hero2__line"><motion.span
              initial={{ y: '110%' }} animate={{ y: 0 }}
              transition={{ duration: .9, ease: [.16,1,.3,1], delay: .28 }}
            >ONE GROUP.</motion.span></span>
            <span className="hero2__line hero2__line--stroke"><motion.span
              initial={{ y: '110%' }} animate={{ y: 0 }}
              transition={{ duration: .9, ease: [.16,1,.3,1], delay: .41 }}
            >ENDLESS POSSIBILITIES.</motion.span></span>
          </h1>

          <motion.p
            className="hero2__sub"
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .7 }}
          >
            From sustainable coconut products to travel and digital technology —
            Sandatharu brings different worlds together under one Sri Lankan identity.
          </motion.p>

          {/* Rotating current-company caption */}
          <motion.div
            className="hero2__current"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .9 }}
          >
            <span className="hero2__current-label">Now viewing</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={current.key}
                className="hero2__current-name"
                style={{ color: current.accent }}
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -16, opacity: 0 }}
                transition={{ duration: .35, ease: 'easeOut' }}
              >
                {current.name}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="hero2__ctas"
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05 }}
          >
            <a href="#businesses" className="btn btn-dark">
              Explore Our Businesses
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </a>
            <Link to="/contact" className="btn btn-ghost">Get in Touch</Link>
          </motion.div>
        </div>

        {/* RIGHT — Stacked banner cards */}
        <div className="hero2__stack">
          {BUSINESSES.map((b, i) => {
            const offset = i - active;
            const isActive = i === active;
            // Position math for the stack
            const config = {
              0: { x: 0, y: 0, rotate: 0, scale: 1, zIndex: 5, opacity: 1 },
              1: { x: 32, y: 40, rotate: 4, scale: 0.92, zIndex: 4, opacity: .95 },
              '-1': { x: -32, y: 40, rotate: -4, scale: 0.92, zIndex: 4, opacity: .95 },
              2: { x: 60, y: 80, rotate: 7, scale: 0.84, zIndex: 3, opacity: .75 },
              '-2': { x: -60, y: 80, rotate: -7, scale: 0.84, zIndex: 3, opacity: .75 }
            } as Record<number, any>;
            const c = config[offset] || config[2];

            return (
              <motion.div
                key={b.key}
                className={`hero2__card ${isActive ? 'is-active' : ''}`}
                style={{ '--accent': b.accent } as React.CSSProperties}
                animate={c}
                transition={{ duration: .8, ease: [.16,1,.3,1] }}
                onClick={() => setActive(i)}
              >
                <div className="hero2__card-media">
                  <img src={b.banner} alt={b.name} loading={i === 0 ? 'eager' : 'lazy'} />
                  <div className="hero2__card-tint" style={{ background: `linear-gradient(160deg, transparent 40%, ${b.accent}22)` }} />
                </div>
                <div className="hero2__card-bar" style={{ background: b.accent }} />
                <div className="hero2__card-foot">
                  <img src={b.logo} alt={b.short} />
                  <span className="hero2__card-arrow">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 17 17 7M9 7h8v8"/>
                    </svg>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom company indicators */}
      <div className="hero2__indicators container">
        {BUSINESSES.map((b, i) => (
          <button
            key={b.key}
            className={`hero2__ind ${i === active ? 'is-active' : ''}`}
            onClick={() => setActive(i)}
            style={{ '--accent': b.accent } as React.CSSProperties}
          >
            <span className="hero2__ind-num">0{i + 1}</span>
            <span className="hero2__ind-body">
              <span className="hero2__ind-label">{b.short}</span>
              <span className="hero2__ind-track">
                <span
                  className="hero2__ind-progress"
                  style={{ animationDuration: `${SLIDE_MS}ms` }}
                  key={`${b.key}-${active}`}
                />
              </span>
            </span>
          </button>
        ))}
      </div>

      {/* Massive outline text behind */}
      <div className="hero2__watermark" aria-hidden>
        <AnimatePresence mode="wait">
          <motion.span
            key={current.key}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: .5 }}
          >
            {current.short.toUpperCase()}
          </motion.span>
        </AnimatePresence>
      </div>
    </section>
  );
}