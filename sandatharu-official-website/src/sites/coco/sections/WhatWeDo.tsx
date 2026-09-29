import { motion } from 'framer-motion';

const SERVICES = [
  { n: '01', t: 'Coconut Shell Collection', d: 'We support the organized collection and sourcing of coconut shells from relevant supply networks.' },
  { n: '02', t: 'Coconut Husk & Raw Materials', d: 'We work with coconut-based raw materials and resources for suitable supply and processing opportunities.' },
  { n: '03', t: 'Coconut Shell Products', d: 'We explore value-added applications and supply opportunities for coconut shell-based products.' },
  { n: '04', t: 'Coconut Charcoal', d: 'Coconut shell charcoal forms an important part of our product portfolio and supply activities.' },
  { n: '05', t: 'Charcoal Briquettes', d: 'We support the supply of coconut charcoal briquette products for suitable business requirements.' },
  { n: '06', t: 'Bulk & B2B Supply', d: 'We work with businesses and buyers looking for coconut-based products and resources at commercial quantities.' }
];

export default function WhatWeDo() {
  return (
    <section className="c-section c-section--soft">
      <div className="c-container">
        <div className="coco-wwd__head">
          <div>
            <span className="c-kicker">What We Do</span>
            <h2 className="c-display c-d-lg coco-wwd__title">
              From coconut resources<br />to <em className="c-d-em">reliable supply.</em>
            </h2>
          </div>
          <p className="c-lead">
            We operate across the coconut value chain — sourcing, collection, processing and supply.
          </p>
        </div>

        <div className="coco-wwd__grid">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.n}
              className="coco-wwd__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * .06, duration: .6 }}
            >
              <span className="coco-wwd__num">{s.n}</span>
              <h3 className="coco-wwd__t">{s.t}</h3>
              <p className="coco-wwd__d">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}