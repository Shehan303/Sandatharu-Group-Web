import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/itData';

export default function Projects() {
  return (
    <section className="it-section it-section--soft" id="projects">
      <div className="it-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 30, marginBottom: 50, flexWrap: 'wrap' }}>
          <div>
            <span className="it-kicker">Projects</span>
            <h2 className="it-display it-d-lg" style={{ marginTop: 14 }}>
              Things We&apos;ve <em className="it-gradient-text" style={{ fontStyle: 'normal' }}>Built.</em>
            </h2>
          </div>
          <Link to="/it/projects" className="it-btn it-btn--outline">
            <span>All Projects</span>
            <svg className="it-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </div>

        <div className="it-proj__grid">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.t}
              className="it-proj__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * .06, duration: .6 }}
            >
              <div className="it-proj__img">
                <img src={p.img} alt={p.t} loading="lazy" />
              </div>
              <div className="it-proj__body">
                <span className="it-proj__cat">{p.cat}</span>
                <h3 className="it-proj__t">{p.t}</h3>
                <span className="it-proj__tech">{p.tech}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}