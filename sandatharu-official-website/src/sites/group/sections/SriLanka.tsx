import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './srilanka.css';

/* ---------- Waypoints — each with its own image ---------- */
const WAYPOINTS = [
  {
    n: '01',
    t: 'Coconut Resources',
    d: 'Sri Lanka\'s natural coconut belt — the origin of our Coco Products business.',
    img: '/public/coco/Coconut Resources.jpg',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" /><path d="M12 3v18M3 12h18" />
      </svg>
    )
  },
  {
    n: '02',
    t: 'Sri Lankan Operations',
    d: 'Collections, processing, sorting and supply operations across the island.',
    img: '/public/coco/coconut  Operations.jpg',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 21V7l9-4 9 4v14M9 21V12h6v9" />
      </svg>
    )
  },
  {
    n: '03',
    t: 'Travel Experiences',
    d: 'From Colombo to the coast and hill country — journeys across Sri Lanka.',
    img: '/public/coco/Travel Experiences.jpg',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 13h14l-1.5-5h-11z" /><circle cx="8" cy="17" r="2" /><circle cx="16" cy="17" r="2" />
      </svg>
    )
  },
  {
    n: '04',
    t: 'Technology & Innovation',
    d: 'Digital systems, software and platforms built from Sri Lanka.',
    img: '/public/coco/Technology & Innovation.jpg',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="4" width="20" height="14" rx="2" /><path d="M8 21h8M12 18v3" />
      </svg>
    )
  },
  {
    n: '05',
    t: 'Global Opportunities',
    d: 'Connecting Sri Lankan products and services with wider markets.',
    img: '/public/coco/Global Opportunities.jpg',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
      </svg>
    )
  }
];

export default function SriLanka() {
  const [active, setActive] = useState(0);

  /* Auto-cycle every 4 seconds */
  useEffect(() => {
    const t = setInterval(() => setActive(v => (v + 1) % WAYPOINTS.length), 4000);
    return () => clearInterval(t);
  }, []);

  const current = WAYPOINTS[active];

  return (
    <section className="sl">
      <div className="sl__blob sl__blob--1" aria-hidden />
      <div className="sl__blob sl__blob--2" aria-hidden />

      <div className="container">
        {/* ---------- Head ---------- */}
        <div className="sl__head">
          <motion.span
            className="k"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Sri Lanka → World
          </motion.span>
          <motion.h2
            className="d d-lg sl__title"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: .8 }}
          >
            PROUDLY SRI LANKAN.<br /><em>OPEN TO THE WORLD.</em>
          </motion.h2>
          <motion.p
            className="sl__lead"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: .15 }}
          >
            Sri Lanka is at the heart of Sandatharu. From its natural resources and
            beautiful landscapes to its people, creativity and entrepreneurial spirit —
            the country provides the foundation for our journey.
          </motion.p>
        </div>

        {/* ---------- Main grid ---------- */}
        <div className="sl__grid">

          {/* LEFT — Image changes per waypoint */}
          <motion.div
            className="sl__visual"
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: .9, ease: [.16, 1, .3, 1] }}
          >
            <div className="sl__visual-frame">

              {/* Crossfade between waypoint images */}
              <AnimatePresence mode="sync">
                <motion.img
                  key={`img-${active}`}
                  className="sl__visual-img"
                  src={current.img}
                  alt={current.t}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ opacity: { duration: .9 }, scale: { duration: 5, ease: 'linear' } }}
                />
              </AnimatePresence>

              <div className="sl__visual-veil" />

              {/* Floating active waypoint label */}
              <motion.div
                key={`label-${current.n}`}
                className="sl__visual-label"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .5 }}
              >
                <span className="sl__visual-label-num">{current.n}</span>
                <span className="sl__visual-label-t">{current.t}</span>
              </motion.div>

              {/* Bottom-left stamp */}
              <div className="sl__visual-stamp">
                <span>SRI LANKA</span>
                <span>· 07°N 81°E ·</span>
              </div>

              {/* Progress bar for autoplay */}
              <div className="sl__visual-progress" aria-hidden>
                {WAYPOINTS.map((_, i) => (
                  <span key={i} className={`sl__visual-progress-bar ${i === active ? 'is-active' : ''}`}>
                    <span className="sl__visual-progress-fill" />
                  </span>
                ))}
              </div>

              {/* Clickable dot indicators */}
              <div className="sl__visual-dots" aria-hidden>
                {WAYPOINTS.map((_, i) => (
                  <button
                    key={i}
                    className={`sl__visual-dot ${i === active ? 'is-active' : ''}`}
                    onClick={() => setActive(i)}
                    aria-label={`Go to waypoint ${i + 1}`}
                  />
                ))}
              </div>

            </div>
          </motion.div>

          {/* RIGHT — Waypoint Cards */}
          <div className="sl__right">
            <motion.p
              className="sl__right-eyebrow"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Five Directions · One Foundation
            </motion.p>

            <div className="sl__steps">
              {WAYPOINTS.map((w, i) => (
                <motion.button
                  key={w.n}
                  className={`sl__step ${i === active ? 'is-active' : ''}`}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: i * .08, duration: .55 }}
                >
                  <span className="sl__step-num">{w.n}</span>
                  <span className="sl__step-icon">{w.icon}</span>
                  <span className="sl__step-body">
                    <span className="sl__step-label">{w.t}</span>
                    <span className="sl__step-desc">{w.d}</span>
                  </span>
                  <span className="sl__step-arrow" aria-hidden>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </motion.button>
              ))}
            </div>

            <motion.div
              className="sl__right-footer"
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ delay: .6 }}
            >
              <span className="sl__dot" />
              <span>Built in Sri Lanka · Serving the world</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}