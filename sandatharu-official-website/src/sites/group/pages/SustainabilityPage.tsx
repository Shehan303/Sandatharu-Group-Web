import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../../../shared/components/PageHero';
import Sustainability from '../sections/Sustainability';
import './sustainability-page.css';

const PILLARS = [
  { n: '01', t: 'Responsible Sourcing', d: 'We source from local communities and work with suppliers who share our commitment to quality and fairness.', c: 'var(--green)', img: 'https://images.unsplash.com/photo-1580984969071-a8da5656c2fb?w=900&q=80&auto=format&fit=crop' },
  { n: '02', t: 'Value from Materials',  d: 'We turn materials that might otherwise go unused into valuable, useful products for local and global markets.', c: 'var(--blue)', img: 'https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?w=900&q=80&auto=format&fit=crop' },
  { n: '03', t: 'Community Impact',      d: 'We create opportunities for local families, small businesses and entrepreneurs across Sri Lanka.', c: 'var(--yellow)', img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=80&auto=format&fit=crop' },
  { n: '04', t: 'Responsible Growth',    d: 'We grow carefully and thoughtfully — respecting the people, places and resources that make our work possible.', c: 'var(--red)', img: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=900&q=80&auto=format&fit=crop' }
];

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        num="06 / SUSTAINABILITY"
        crumb="Sustainability"
        kicker="Responsibility"
        title={<>GROWTH WITH<br />RESPONSIBILITY.</>}
        lead="At Sandatharu, growth is not only about business. We believe sustainable thinking and respect for communities and the environment are essential for long-term success."
        image="https://images.unsplash.com/photo-1580984969071-a8da5656c2fb?w=2000&q=85&auto=format&fit=crop"
      />

      <Sustainability />

      <section className="section sp2-pillars">
        <div className="container">
          <div className="sp2-pillars__head">
            <span className="k">Our Approach</span>
            <h2 className="d d-lg sp2-pillars__title">FOUR COMMITMENTS.</h2>
          </div>
          <div className="sp2-pillars__grid">
            {PILLARS.map((p, i) => (
              <motion.article
                key={p.n}
                className="sp2-cell"
                style={{ '--c': p.c } as React.CSSProperties}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * .1, duration: .7 }}
              >
                <div className="sp2-cell__img">
                  <img src={p.img} alt={p.t} loading="lazy" />
                  <span className="sp2-cell__num d">{p.n}</span>
                </div>
                <h3 className="sp2-cell__t">{p.t}</h3>
                <p className="sp2-cell__d">{p.d}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sp2-cta">
        <div className="container sp2-cta__inner">
          <h2 className="d d-lg">BUILDING FOR TOMORROW.</h2>
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: 32 }}>
            <span>Get in Touch</span>
            <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </div>
      </section>
    </>
  );
}