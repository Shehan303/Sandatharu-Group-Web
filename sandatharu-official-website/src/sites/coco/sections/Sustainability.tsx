import { motion } from 'framer-motion';

const CARDS = [
  { t: 'Resource Utilization', d: 'Making better use of coconut-based materials.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22c-6 0-9-5-9-11 6 0 9 1 9 7"/><path d="M12 22c6 0 9-5 9-11-6 0-9 1-9 7"/></svg> },
  { t: 'Waste-to-Value Thinking', d: 'Finding productive uses for materials that might otherwise be underutilized.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 12a9 9 0 0 1 9-9 9 9 0 0 1 6.7 3M21 12a9 9 0 0 1-9 9 9 9 0 0 1-6.7-3"/><path d="M3 4v5h5M21 20v-5h-5"/></svg> },
  { t: 'Local Supply Networks', d: 'Supporting relationships with resource collectors and suppliers.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M7 7l3 3M17 7l-3 3M7 17l3-3M17 17l-3-3"/></svg> },
  { t: 'Long-Term Thinking', d: 'Building business practices with future opportunities in mind.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg> }
];

const CYCLE = [
  'Coconut', 'Collection', 'Sorting', 'Processing', 'Value', 'Supply', 'New Opportunity'
];

export default function Sustainability() {
  return (
    <>
      <section className="coco-sus">
        <div
          className="coco-sus__bg"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1550985616-10810253b84d?w=2000&q=80&auto=format&fit=crop)' }}
        />
        <div className="coco-sus__veil" />
        <div className="coco-sus__inner">
          <div className="coco-sus__head">
            <span className="c-kicker" style={{ color: 'var(--moss-2)' }}>Sustainability</span>
            <h2 className="c-display c-d-lg coco-sus__title">
              Better use of <em>natural resources.</em>
            </h2>
            <p className="c-lead" style={{ color: 'rgba(255,255,255,.72)', marginTop: 20 }}>
              Coconut is one of Sri Lanka&apos;s most valuable natural resources. Every part of the
              coconut can have potential value when it is responsibly collected, processed and
              utilized. Our work supports turning underutilized coconut resources into useful
              products and economic opportunities.
            </p>
          </div>

          <div className="coco-sus__grid">
            {CARDS.map((c, i) => (
              <motion.div
                key={c.t}
                className="coco-sus__card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * .08, duration: .6 }}
              >
                <div className="coco-sus__icon">{c.icon}</div>
                <h3 className="coco-sus__t">{c.t}</h3>
                <p className="coco-sus__d">{c.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COCONUT CYCLE */}
      <section className="coco-cycle">
        <div className="c-container">
          <div className="coco-cycle__head">
            <span className="c-kicker">The Coconut Cycle</span>
            <h2 className="c-display c-d-lg coco-cycle__title">
              Turning resources into <em>opportunities.</em>
            </h2>
          </div>

          {/* Desktop circular */}
          <div className="coco-cycle__stage">
            <div className="coco-cycle__ring" />
            <div className="coco-cycle__ring-inner" />

            <div className="coco-cycle__center">
              <div className="coco-cycle__center-text">
                Turning resources<br />into <em>opportunities.</em>
              </div>
            </div>

            {CYCLE.map((c, i) => (
              <div key={c} className={`coco-cycle__node coco-cycle__node--${i + 1}`}>
                <span>{c}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', opacity: .5 }}>0{i + 1}</span>
              </div>
            ))}
          </div>

          {/* Mobile list */}
          <div className="coco-cycle__mobile">
            {CYCLE.map((c, i) => (
              <div key={c} className="coco-cycle__mobile-node">
                <span>0{i + 1}</span>
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}