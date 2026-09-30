import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ITLayout from '../components/ItLayout';
import ITPageHero from '../components/ITPageHero';
import { PROJECTS } from '../data/itData';

const FILTERS = ['All', 'Web Application', 'Business System', 'Mobile App', 'Dashboard', 'Web Platform', 'Web App'];

export default function ITProjects() {
  const [filter, setFilter] = useState('All');
  const list = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.cat === filter);

  return (
    <ITLayout>
      <ITPageHero
        num="07 / PROJECTS"
        crumb="Projects"
        kicker="Portfolio"
        title={<>Things We&apos;ve <em className="it-gradient-text" style={{ fontStyle: 'normal' }}>Built.</em></>}
        lead="A selection of the digital products, platforms and systems we've designed and engineered — across web, mobile, business systems and UI/UX."
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=2000&q=85&auto=format&fit=crop"
        stats={[
          { n: '6+', l: 'Featured Projects' },
          { n: '5', l: 'Categories' },
          { n: '100%', l: 'Custom Built' },
          { n: '∞', l: 'Growing Portfolio' }
        ]}
      />

      <section className="it-section">
        <div className="it-container">
          <div className="it-pf">
            {FILTERS.map(f => (
              <button
                key={f}
                className={`it-pf__btn ${filter === f ? 'is-active' : ''}`}
                onClick={() => setFilter(f)}
              >{f}</button>
            ))}
          </div>

          <div className="it-proj__grid">
            {list.map((p, i) => (
              <motion.article
                key={p.t}
                className="it-proj__card"
                layout
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

          {list.length === 0 && (
            <div style={{
              padding: 60, textAlign: 'center', color: 'var(--muted)',
              border: '1px dashed var(--line)', borderRadius: 'var(--r-md)'
            }}>
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="it-section it-section--dark">
        <div className="it-grid-bg" />
        <div className="it-container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 780, margin: '0 auto' }}>
          <h2 className="it-display it-d-lg" style={{ color: '#fff' }}>
            Want to See Your Project <em className="it-gradient-text" style={{ fontStyle: 'normal' }}>Here?</em>
          </h2>
          <p className="it-lead" style={{ color: 'rgba(255,255,255,.72)', margin: '20px auto 30px', textAlign: 'center' }}>
            Let&apos;s build something you&apos;re proud of.
          </p>
          <Link to="/it/contact" className="it-btn it-btn--primary">
            <span>Start a Project</span>
            <svg className="it-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </div>
      </section>
    </ITLayout>
  );
}