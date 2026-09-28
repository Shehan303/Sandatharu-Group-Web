import { motion } from 'framer-motion';
import './values.css';

const VALUES = [
  { icon: '🌱', title: 'Sustainability', desc: 'Responsible sourcing and resource-friendly operations in everything we do.' },
  { icon: '🤝', title: 'Reliability',    desc: 'We deliver on our word — with consistent quality and dependable service.' },
  { icon: '💡', title: 'Innovation',     desc: 'Modern tools and creative thinking to move businesses forward.' },
  { icon: '🇱🇰', title: 'Local Roots',   desc: 'Built in Sri Lanka, for Sri Lankan businesses and their communities.' }
];

export default function ValuesGrid() {
  return (
    <section className="section values">
      <div className="container">
        <div className="values__head">
          <span className="kicker">Why Sandatharu</span>
          <h2 className="display display-md values__title">BUILT ON FOUR PRINCIPLES.</h2>
        </div>
        <div className="values__grid">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              className="value"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }} transition={{ delay: i * .1, duration: .6 }}
            >
              <span className="value__icon">{v.icon}</span>
              <h3 className="value__title">{v.title}</h3>
              <p className="value__desc">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}