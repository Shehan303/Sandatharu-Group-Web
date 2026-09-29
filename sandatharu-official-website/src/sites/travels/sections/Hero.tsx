import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const SLIDES = [
  {
    img: 'https://images.unsplash.com/photo-1566296611299-4a1a0d8b1e10?w=2000&q=85&auto=format&fit=crop',
    eyebrow: 'Discover Sri Lanka',
    title: <>Your Journey. <em>Our Roads.</em></>,
    sub: 'Travel through the beauty, culture and unforgettable experiences of Sri Lanka with Sandatharu Travels & Tours.',
    primary: { label: 'Explore Sri Lanka', to: '/travels/destinations' },
    secondary: { label: 'Plan Your Journey', to: '/travels/custom' }
  },
  {
    img: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=2000&q=85&auto=format&fit=crop',
    eyebrow: 'Travel Your Way',
    title: <>Comfortable Vehicles.<br /><em>Flexible Journeys.</em></>,
    sub: 'Choose the right vehicle for your journey — private car, family transport, group transportation or a vehicle for your next trip.',
    primary: { label: 'View Vehicle Hire', to: '/travels/vehicles' },
    secondary: { label: 'Request a Vehicle', to: '/travels/contact' }
  },
  {
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=2000&q=85&auto=format&fit=crop',
    eyebrow: 'Airport Transfer',
    title: <>From the Airport<br /><em>to Your Journey.</em></>,
    sub: 'Start your Sri Lankan experience with convenient airport transfers and reliable private transportation.',
    primary: { label: 'Book Your Transfer', to: '/travels/contact' },
    secondary: { label: 'Learn More', to: '/travels/services' }
  },
  {
    img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=2000&q=85&auto=format&fit=crop',
    eyebrow: 'Explore Tours',
    title: <>See More. <em>Experience More.</em></>,
    sub: 'Discover beaches, mountains, wildlife, heritage, food and culture through personalised Sri Lankan journeys.',
    primary: { label: 'Explore Tours', to: '/travels/tours' },
    secondary: { label: 'Talk to Us', to: '/travels/contact' }
  },
  {
    img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=2000&q=85&auto=format&fit=crop',
    eyebrow: 'Group Travel',
    title: <>Travel <em>Together.</em></>,
    sub: 'Comfortable transportation solutions for families, groups, events and corporate journeys.',
    primary: { label: 'Group Transportation', to: '/travels/services' },
    secondary: { label: 'Contact Us', to: '/travels/contact' }
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
          <Link to={s.primary.to} className="t-btn t-btn--sunset">
            <span>{s.primary.label}</span>
            <svg className="t-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </Link>
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