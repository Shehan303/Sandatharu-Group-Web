import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TRUST = [
  { t: 'Sri Lankan Origin', d: 'Connected to Sri Lanka\'s coconut resources and supply network.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-7.6 8-13a8 8 0 1 0-16 0c0 5.4 8 13 8 13z"/><circle cx="12" cy="9" r="3"/></svg> },
  { t: 'Coconut Focused', d: 'Focused on coconut-based raw materials and products.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18"/></svg> },
  { t: 'Bulk Supply', d: 'Supporting business and bulk supply requirements.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M3 11h18"/></svg> },
  { t: 'Responsible Approach', d: 'Promoting better utilization of valuable natural resources.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22c-6 0-9-5-9-11 6 0 9 1 9 7"/><path d="M12 22c6 0 9-5 9-11-6 0-9 1-9 7"/></svg> }
];

export default function Intro() {
  return (
    <>
      {/* TRUST STRIP */}
      <section className="coco-trust">
        <div className="c-trust__grid coco-trust__grid c-container" style={{ padding: 0 }}>
          {TRUST.map((x, i) => (
            <motion.div
              key={x.t}
              className="coco-trust__item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * .08, duration: .6 }}
            >
              <div className="coco-trust__icon">{x.icon}</div>
              <h3 className="coco-trust__t">{x.t}</h3>
              <p className="coco-trust__d">{x.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="c-section coco-who">
        <span className="c-blob c-blob--moss" style={{ width: 400, height: 400, top: -100, right: -100 }} />
        <div className="c-container coco-who__grid">
          <motion.div
            className="coco-who__media"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .9, ease: [.16,1,.3,1] }}
          >
            <img src="https://images.unsplash.com/photo-1580984969071-a8da5656c2fb?w=1200&q=85&auto=format&fit=crop" alt="" />
            <div className="coco-who__stamp">
              <strong>Since LK</strong>
              <span>Sri Lankan Roots</span>
            </div>
          </motion.div>

          <div className="coco-who__content">
            <motion.span className="c-kicker" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              Who We Are
            </motion.span>
            <motion.h2
              className="c-display c-d-lg coco-who__title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .8 }}
            >
              Coconut Resources.<br /><em className="c-d-em">Connected Opportunities.</em>
            </motion.h2>
            <p className="c-lead">
              Sandatharu Coco Products is a Sri Lankan business focused on coconut-based resources
              and products. We work across sourcing, collection, sorting, processing and supply —
              creating connections between coconut resources and customers who require reliable
              products and materials.
            </p>
            <p className="c-lead">
              Our approach is built around responsible resource utilization, organized supply and
              long-term business relationships.
            </p>
            <div style={{ marginTop: 12 }}>
              <Link to="/coco/about" className="c-btn c-btn--primary">
                <span>Learn About Us</span>
                <svg className="c-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VISION / MISSION */}
      <section className="coco-vm">
        <div
          className="coco-vm__bg"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1591336462674-e0c5eb7a14b7?w=2000&q=80&auto=format&fit=crop)' }}
        />
        <div className="c-container">
          <div className="coco-vm__grid">
            <div className="coco-vm__block">
              <span className="c-kicker">Our Vision</span>
              <h2 className="c-display c-d-lg coco-vm__title">
                Building a trusted Sri Lankan <em>coconut-products business</em> that creates sustainable value.
              </h2>
              <p className="c-lead" style={{ color: 'rgba(255,255,255,.72)' }}>
                Connecting local potential with wider markets — through quality products,
                responsible practices and reliable supply.
              </p>
            </div>

            <div className="coco-vm__block">
              <span className="c-kicker">Our Mission</span>
              <p className="c-lead" style={{ color: 'rgba(255,255,255,.72)', marginBottom: 12 }}>
                To responsibly source, collect, process and supply coconut-based products while
                continuously improving our operations, quality and opportunities for growth.
              </p>
              <div className="coco-vm__steps">
                {[
                  ['01', 'Source'],
                  ['02', 'Add Value'],
                  ['03', 'Supply']
                ].map(([n, t]) => (
                  <div key={n} className="coco-vm__step">
                    <span className="coco-vm__step-num">{n}</span>
                    <span className="coco-vm__step-t">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}