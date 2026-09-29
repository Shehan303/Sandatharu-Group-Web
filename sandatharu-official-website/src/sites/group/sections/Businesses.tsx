import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BUSINESSES } from '../../../shared/data/businesses';
import './businesses.css';

function BizPanel({ b, i }: { b: typeof BUSINESSES[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const scale = useTransform(scrollYProgress, [0, .5, 1], [1.08, 1, 1.08]);

  return (
    <div ref={ref} className="bp" style={{ '--c': b.accent, '--cd': b.accentDark } as React.CSSProperties}>
      <div className="bp__sticky">
        <motion.div className="bp__bg" style={{ y, scale }}>
          <img src={b.hero} alt={b.name} />
        </motion.div>
        <div className="bp__veil" />
        <div className="bp__accent-bar" />

        <div className="bp__inner">
          <div className="bp__left">
            <div className="bp__head">
              <span className="bp__num">0{i + 1}</span>
              <span className="bp__kicker">{b.kicker}</span>
            </div>
            <div className="bp__logo-wrap">
              <img src={b.logo} alt={b.name} className="bp__logo" />
            </div>
            <h2 className="d d-lg bp__headline">{b.headline}</h2>
            <p className="bp__tagline">{b.tagline}</p>
            <p className="bp__desc">{b.desc}</p>
            <Link to={b.route} className="btn btn-primary bp__cta">
              <span>Explore {b.short}</span>
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          </div>

          <div className="bp__right">
            <ul className="bp__bullets">
              {b.bullets.map((x, idx) => (
                <li key={x} style={{ transitionDelay: `${idx * 40}ms` }}>
                  <span className="bp__bullet-mark" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <div className="bp__gallery">
              <img src={b.gallery[0]} alt="" loading="lazy" />
              <img src={b.gallery[1]} alt="" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Businesses() {
  return (
    <section className="bps" id="businesses">
      <div className="bps__head container">
        <span className="k">Our Businesses</span>
        <h2 className="d d-lg bps__title">
          THREE BUSINESSES.<br />ONE VISION.
        </h2>
        <p className="bps__sub">Different industries. Different capabilities. One Sandatharu identity.</p>
      </div>

      {BUSINESSES.map((b, i) => (
        <BizPanel key={b.key} b={b} i={i} />
      ))}
    </section>
  );
}