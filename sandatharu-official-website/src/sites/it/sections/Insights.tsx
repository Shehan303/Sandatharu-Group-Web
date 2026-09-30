import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const POSTS = [
  { cat: 'Software', date: 'Feb 20, 2026', t: 'Why custom software beats off-the-shelf for growing businesses', d: 'The case for building systems that fit your workflow, not the other way around.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop' },
  { cat: 'UI/UX',    date: 'Feb 08, 2026', t: 'Design systems that scale with your product', d: 'How a well-structured design system saves time and improves consistency.', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80&auto=format&fit=crop' },
  { cat: 'AI',       date: 'Jan 28, 2026', t: 'Practical AI: where to start in a real business', d: 'Small AI use cases that actually deliver value in day-to-day operations.', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80&auto=format&fit=crop' }
];

export default function Insights() {
  return (
    <section className="it-section">
      <div className="it-container">
        <div className="it-ins__head">
          <div>
            <span className="it-kicker">Insights</span>
            <h2 className="it-display it-d-lg it-ins__title">
              Ideas, Technology <em style={{ color: 'var(--blue)', fontStyle: 'normal' }}>&amp; Insights.</em>
            </h2>
          </div>
          <Link to="/it/insights" className="it-btn it-btn--outline">
            <span>All Insights</span>
            <svg className="it-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </Link>
        </div>

        <div className="it-ins__grid">
          {POSTS.map((p, i) => (
            <motion.article
              key={p.t}
              className="it-ins__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * .08, duration: .6 }}
            >
              <div className="it-ins__img">
                <img src={p.img} alt={p.t} loading="lazy" />
              </div>
              <div className="it-ins__body">
                <div className="it-ins__meta">
                  <span className="it-ins__cat">{p.cat}</span>
                  <span>{p.date}</span>
                </div>
                <h3 className="it-ins__t">{p.t}</h3>
                <p className="it-ins__d">{p.d}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}