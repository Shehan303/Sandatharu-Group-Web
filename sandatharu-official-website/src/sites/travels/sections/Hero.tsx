import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const SLIDES = [
  {
    img: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=2000&q=85&auto=format&fit=crop',
    eyebrow: 'Sri Lanka · Vehicle Hire',
    title: <>Find the Perfect Car<br /><em>for Every Journey.</em></>,
    sub: 'Sedans, SUVs, vans and group vehicles — hire the right ride for your Sri Lankan adventure. Airport transfers, daily hire and multi-day trips.',
    primary: { label: 'Browse Vehicles', to: '#vehicle-hire' },
    secondary: { label: 'Request a Vehicle', to: '/travels/contact' }
  },
  {
    img: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=2000&q=85&auto=format&fit=crop',
    eyebrow: 'Long-Distance Comfort',
    title: <>Comfortable Vehicles.<br /><em>Any Distance.</em></>,
    sub: 'Kurunegala to Colombo. Airport to Ella. Whatever the route, choose a vehicle built for comfort and long drives.',
    primary: { label: 'View Fleet', to: '/travels/vehicles' },
    secondary: { label: 'Get a Quote', to: '/travels/contact' }
  },
  {
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=2000&q=85&auto=format&fit=crop',
    eyebrow: 'Airport Transfers',
    title: <>Land in Sri Lanka.<br /><em>Ride in Comfort.</em></>,
    sub: 'Arrive at BIA and step into a clean, air-conditioned vehicle with a professional driver. Available 24/7.',
    primary: { label: 'Book Transfer', to: '/travels/contact' },
    secondary: { label: 'View Options', to: '#vehicle-hire' }
  },
  {
    img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=2000&q=85&auto=format&fit=crop',
    eyebrow: 'Groups & Events',
    title: <>Travel Together.<br /><em>Comfortably.</em></>,
    sub: 'Vans and group vehicles for families, corporate events, weddings and tour groups across Sri Lanka.',
    primary: { label: 'Group Vehicles', to: '#vehicle-hire' },
    secondary: { label: 'Corporate Inquiry', to: '/travels/contact' }
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
    <section className="t-hero">
      <div className="t-hero__bg">
        <AnimatePresence mode="sync">
          <motion.div
            key={i}
            className="t-hero__slide is-active"
            style={{ backgroundImage: `url(${s.img})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.3 }}
          />
        </AnimatePresence>
        <div className="t-hero__veil" />
        <div className="t-hero__grain" />
      </div>

      <div className="t-hero__inner">
        <motion.span
          key={`eyebrow-${i}`}
          className="t-hero__eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .5 }}
        >
          {s.eyebrow}
        </motion.span>

        <h1 className="t-hero__title">
          <AnimatePresence mode="wait">
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: .4 }}
            >
              {s.title}
            </motion.span>
          </AnimatePresence>
        </h1>

        <motion.p
          key={`sub-${i}`}
          className="t-hero__sub"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6, delay: .25 }}
        >
          {s.sub}
        </motion.p>

        <motion.div
          className="t-hero__ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6, delay: .45 }}
        >
          <a href={s.primary.to} className="t-btn t-btn--sunset">
            <span>{s.primary.label}</span>
            <svg className="t-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </a>
          <Link to={s.secondary.to} className="t-btn t-btn--outline-light">
            <span>{s.secondary.label}</span>
          </Link>
        </motion.div>
      </div>

      <div className="t-hero__picker">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            className={`t-hero__pick ${idx === i ? 'is-active' : ''}`}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
        <span className="t-hero__count">
          <b>{String(i + 1).padStart(2, '0')}</b> / {String(SLIDES.length).padStart(2, '0')}
        </span>
      </div>

      <div className="t-hero__scroll">
        <span>Scroll to explore</span>
        <span className="t-hero__scroll-track" />
      </div>
    </section>
  );
}