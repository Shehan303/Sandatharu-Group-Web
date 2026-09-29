import { motion } from 'framer-motion';
import './values.css';

const VALUES = [
  { t: 'Integrity',     d: 'We value honesty, transparency and responsible business relationships.', img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1000&q=80&auto=format&fit=crop' },
  { t: 'Quality',       d: 'We deliver consistent value through our products and services.', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&q=80&auto=format&fit=crop' },
  { t: 'Innovation',    d: 'We welcome new ideas, technologies and better ways of working.', img: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=1000&q=80&auto=format&fit=crop' },
  { t: 'Responsibility',d: 'We consider the impact of our actions on customers, communities and the environment.', img: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1000&q=80&auto=format&fit=crop' },
  { t: 'Growth',        d: 'We believe growth comes from learning, collaboration and continuous improvement.', img: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1000&q=80&auto=format&fit=crop' }
];

export default function Values() {
  return (
    <section className="vl">
      <div className="rail">
        <span className="rail__num">16 / VALUES</span>
      </div>
      <div className="container with-rail">
        <div className="vl__head">
          <span className="k">Our Values</span>
          <h2 className="d d-lg vl__title">WHAT WE STAND FOR.</h2>
        </div>

        <div className="vl__list">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.t}
              className="vl__row"
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }} transition={{ duration: .7 }}
            >
              <span className="vl__num">0{i + 1}</span>
              <h3 className="vl__name d">{v.t}</h3>
              <p className="vl__desc">{v.d}</p>
              <div className="vl__img" style={{ backgroundImage: `url(${v.img})` }} />
              <span className="vl__arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}