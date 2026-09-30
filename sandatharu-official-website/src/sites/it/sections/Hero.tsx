import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

/* ============================================================
   SLIDES — each with its OWN background AND robot PNG
   ============================================================ */
const SLIDES = [
  {
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=2000&q=85&auto=format&fit=crop',
    robot: '/it/robots/robot-1.png',
    eyebrow: 'Think Digital. Build Smart.',
    title: 'We Turn Complex Ideas Into Intelligent Systems.',
    sub: 'AI, software, cloud and product engineering — grounded in real business operations.',
    tags: ['Strategy', 'Product', 'Engineering'],
    primary: { label: 'Start a Project', to: '/it/contact' },
    secondary: { label: 'Explore Our Approach', to: '/it/process' }
  },
  {
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=2000&q=85&auto=format&fit=crop',
    robot: '/it/robots/robot-2.png',
    eyebrow: 'Custom Software',
    title: 'Software That Fits the Way You Work.',
    sub: 'Business systems, dashboards and internal tools designed around your processes — not the other way around.',
    tags: ['Design', 'Develop', 'Deploy'],
    primary: { label: 'See Our Work', to: '/it/projects' },
    secondary: { label: 'Explore Services', to: '/it/services' }
  },
  {
    img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=2000&q=85&auto=format&fit=crop',
    robot: '/it/robots/robot-3.png',
    eyebrow: 'UI/UX + Engineering',
    title: 'Design People Love. Built to Scale.',
    sub: 'Interfaces, systems and digital products — designed around real users, engineered for the long run.',
    tags: ['Research', 'Prototype', 'Launch'],
    primary: { label: 'Design Work', to: '/it/services' },
    secondary: { label: 'Talk to Us', to: '/it/contact' }
  }
];

const DURATION = 7000;

export default function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setI(v => (v + 1) % SLIDES.length), DURATION);
    return () => clearTimeout(t);
  }, [i]);

  const s = SLIDES[i];

  return (
    <section className="it-hero">

      {/* ---------- Background image (per slide) ---------- */}
      <div className="it-hero__bg">
        <AnimatePresence mode="sync">
          <motion.div
            key={`bg-${i}`}
            className="it-hero__slide"
            style={{ backgroundImage: `url(${s.img})` }}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.2 }, scale: { duration: 8, ease: 'linear' } }}
          />
        </AnimatePresence>
        <div className="it-hero__veil" />
        <div className="it-hero__grid" />
        <span className="it-hero__blob it-hero__blob--blue" />
        <span className="it-hero__blob it-hero__blob--cyan" />
      </div>

      {/* ---------- Giant ghost word (persistent) ---------- */}
      <div className="it-hero__ghost" aria-hidden>
        <span>SANDATHARU</span>
      </div>

      {/* ---------- Robot PNG (per slide, animated) ---------- */}
      <div className="it-hero__robotWrap" aria-hidden>
        <AnimatePresence mode="sync">
          <motion.div
            key={`robot-${i}`}
            className="it-hero__robot"
            initial={{ opacity: 0, x: 60, y: 30, scale: 0.94 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: -40, y: -20, scale: 0.96 }}
            transition={{ duration: 0.9, ease: [.16, 1, .3, 1] }}
          >
            <img
              src={s.robot}
              alt=""
              onError={(e) => {
                const el = e.currentTarget;
                el.style.opacity = '0';
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ---------- Main content ---------- */}
      <div className="it-hero__inner">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${i}`}
            className="it-hero__content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.65, ease: [.16, 1, .3, 1] }}
          >
            {/* Eyebrow */}
            <div className="it-hero__eyebrow">
              <span className="it-hero__eyebrow-line" />
              <span>{s.eyebrow}</span>
            </div>

            {/* Title */}
            <h1 className="it-hero__title">{s.title}</h1>

            {/* Sub */}
            <p className="it-hero__sub">{s.sub}</p>

            {/* Bottom bar */}
            <div className="it-hero__bar">
              <div className="it-hero__tags">
                {s.tags.map((t, idx) => (
                  <span key={t} className="it-hero__tag">
                    <i />
                    <b>0{idx + 1}</b>
                    <span>{t}</span>
                  </span>
                ))}
              </div>

              <div className="it-hero__ctas">
                <Link to={s.secondary.to} className="it-hero__link">
                  <span>{s.secondary.label}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M13 6l6 6-6 6"/>
                  </svg>
                </Link>
                <Link to={s.primary.to} className="it-hero__cta">
                  <span>{s.primary.label}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17 17 7M8 7h9v9"/>
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>


      {/* ---------- Slide picker ---------- */}
      <div className="it-hero__picker">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            className={`it-hero__pick ${idx === i ? 'is-active' : ''}`}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
          >
            <span className="it-hero__pick-fill" />
          </button>
        ))}
        <span className="it-hero__count">
          <b>{String(i + 1).padStart(2, '0')}</b>
          <em>/</em>
          {String(SLIDES.length).padStart(2, '0')}
        </span>
      </div>

    </section>
  );
}