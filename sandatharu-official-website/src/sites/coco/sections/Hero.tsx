import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const SLIDES = [
  {
    img: 'https://images.unsplash.com/photo-1591336462674-e0c5eb7a14b7?w=2000&q=85&auto=format&fit=crop',
    eyebrow: 'The Source',
    title: <>From the Heart of Sri Lanka&apos;s <em>Coconut Industry.</em></>,
    sub: 'We connect valuable coconut resources with responsible collection, processing and supply opportunities.',
    ctaLabel: 'Explore Our Products',
    ctaTo: '/coco/products'
  },
  {
    img: 'https://images.unsplash.com/photo-1580984969071-a8da5656c2fb?w=2000&q=85&auto=format&fit=crop',
    eyebrow: 'The Resource',
    title: <>Turning Coconut Resources <em>Into Value.</em></>,
    sub: 'From collection to processing and supply, we work to create practical value from Sri Lanka\'s coconut resources.',
    ctaLabel: 'Learn More',
    ctaTo: '/coco/about'
  },
  {
    img: 'https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?w=2000&q=85&auto=format&fit=crop',
    eyebrow: 'Charcoal',
    title: <>Coconut Shell <em>Charcoal.</em></>,
    sub: 'Carefully sourced coconut shell resources transformed into valuable charcoal products for supply opportunities.',
    ctaLabel: 'Explore Charcoal',
    ctaTo: '/coco/products/charcoal'
  },
  {
    img: 'https://images.unsplash.com/photo-1602015569562-2a83f29e5b52?w=2000&q=85&auto=format&fit=crop',
    eyebrow: 'Briquettes',
    title: <>Natural Resources. <em>Valuable Products.</em></>,
    sub: 'Exploring value-added coconut charcoal products for bulk and B2B requirements.',
    ctaLabel: 'View Briquettes',
    ctaTo: '/coco/products/briquettes'
  },
  {
    img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=2000&q=85&auto=format&fit=crop',
    eyebrow: 'Global Supply',
    title: <>From Sri Lanka <em>to Wider Markets.</em></>,
    sub: 'Building reliable supply connections for customers seeking coconut-based products and resources.',
    ctaLabel: 'Start a Business Inquiry',
    ctaTo: '/coco/contact'
  }
];

const DURATION = 6200;

export default function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setI(v => (v + 1) % SLIDES.length), DURATION);
    return () => clearTimeout(t);
  }, [i]);

  const s = SLIDES[i];

  return (
    <section className="coco-hero">
      <div className="coco-hero__bg">
        <AnimatePresence mode="sync">
          <motion.div
            key={i}
            className="coco-hero__slide is-active"
            style={{ backgroundImage: `url(${s.img})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.3 }}
          />
        </AnimatePresence>
        <div className="coco-hero__veil" />
        <div className="coco-hero__grain" />
      </div>

      <div className="coco-hero__inner">
        <motion.span
          key={`eyebrow-${i}`}
          className="coco-hero__eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
        >
          {s.eyebrow}
        </motion.span>

        <h1 className="coco-hero__title">
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
          className="coco-hero__sub"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6, delay: .25 }}
        >
          {s.sub}
        </motion.p>

        <motion.div
          className="coco-hero__ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6, delay: .45 }}
        >
          <Link to={s.ctaTo} className="c-btn c-btn--primary">
            <span>{s.ctaLabel}</span>
            <svg className="c-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </Link>
          <Link to="/coco/contact" className="c-btn c-btn--outline-light">
            <span>Talk to Us</span>
          </Link>
        </motion.div>
      </div>

      <div className="coco-hero__progress">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            className={`coco-hero__tick ${idx === i ? 'is-active' : ''} ${idx < i ? 'is-passed' : ''}`}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      <div className="coco-hero__scroll">
        <span>Scroll to discover</span>
        <span className="coco-hero__scroll-track" />
      </div>
    </section>
  );
}