import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data/itData';

const IMGS = [
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80&auto=format&fit=crop'
];

export default function Services() {
  return (
    <section className="it-section it-section--soft" id="services">
      <div className="it-container">
        <div className="it-serv__head">
          <span className="it-kicker">What We Do</span>
          <h2 className="it-display it-d-lg" style={{ marginTop: 14 }}>
            From Idea to <em className="it-gradient-text" style={{ fontStyle: 'normal' }}>Digital Reality.</em>
          </h2>
        </div>

        <div className="it-serv__grid">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.key}
              className="it-serv__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * .08, duration: .6 }}
            >
              <div className="it-serv__img">
                <img src={IMGS[i]} alt="" loading="lazy" />
              </div>
              <div className="it-serv__body">
                <span className="it-serv__n">{s.n}</span>
                <h3 className="it-serv__t">{s.t}</h3>
                <p className="it-serv__d">{s.d}</p>
                <ul className="it-serv__list">
                  {s.items.slice(0, 6).map(x => <li key={x}>{x}</li>)}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}