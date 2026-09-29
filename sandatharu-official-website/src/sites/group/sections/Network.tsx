import { motion } from 'framer-motion';
import { BUSINESSES } from '../../../shared/data/businesses';
import './network.css';

export default function Network() {
  return (
    <section className="nw">
      <div className="container">
        <div className="nw__head">
          <span className="k nw__k">Business Network</span>
          <h2 className="d d-lg nw__title">
            INDEPENDENT BUSINESSES.<br /><em>SHARED FOUNDATION.</em>
          </h2>
          <p className="nw__lead">
            Our businesses operate independently while sharing a common foundation of relationships,
            knowledge, resources and opportunities.
          </p>
        </div>

        <div className="nw__chart">
          <svg viewBox="0 0 1200 600" className="nw__svg" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="nwLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#0077CB" stopOpacity=".4"/>
                <stop offset="1" stopColor="#33A852" stopOpacity=".4"/>
              </linearGradient>
            </defs>
            {[
              'M600,300 C400,300 350,150 220,150',
              'M600,300 C400,300 350,450 220,450',
              'M600,300 C800,300 850,150 980,150',
              'M600,300 C800,300 850,450 980,450'
            ].map((d, i) => (
              <motion.path
                key={i} d={d}
                fill="none" stroke="url(#nwLine)" strokeWidth="1.5"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                viewport={{ once: true }} transition={{ duration: 1.8, delay: i * .15, ease: 'easeInOut' }}
              />
            ))}
          </svg>

          <div className="nw__center">
            <img src="/logos/sandatharu-logo-white.svg" alt="Sandatharu Group" />
          </div>

          <div className="nw__node nw__node--tl" style={{ '--c': '#33A852' } as React.CSSProperties}>
            <span className="nw__node-label">Resources</span>
            <span className="nw__node-sub">Coconut products</span>
          </div>
          <div className="nw__node nw__node--bl" style={{ '--c': '#FFC107' } as React.CSSProperties}>
            <span className="nw__node-label">Partners</span>
            <span className="nw__node-sub">Suppliers & collaborators</span>
          </div>
          <div className="nw__node nw__node--tr" style={{ '--c': '#0077CB' } as React.CSSProperties}>
            <span className="nw__node-label">Mobility</span>
            <span className="nw__node-sub">Travel & transport</span>
          </div>
          <div className="nw__node nw__node--br" style={{ '--c': '#B70000' } as React.CSSProperties}>
            <span className="nw__node-label">Clients</span>
            <span className="nw__node-sub">Businesses we serve</span>
          </div>

          <div className="nw__list">
            {BUSINESSES.map(b => (
              <span key={b.key} className="nw__list-item" style={{ '--c': b.accent } as React.CSSProperties}>
                <i />
                {b.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}