import { motion } from 'framer-motion';
import './values.css';

const VALUES = [
  { key: 'green',  title: 'Sustainability', desc: 'Responsible sourcing and resource-friendly operations in everything we do.' },
  { key: 'blue',   title: 'Reliability',    desc: 'We deliver on our word — consistent quality and dependable service.' },
  { key: 'yellow', title: 'Innovation',     desc: 'Modern tools and creative thinking to move businesses forward.' },
  { key: 'red',    title: 'Local Roots',    desc: 'Built in Sri Lanka, for Sri Lankan businesses and their communities.' }
];

function Icon({ k }: { k: string }) {
  const stroke = 'currentColor';
  if (k === 'green') return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c-6 0-9-5-9-11 6 0 9 1 9 7"/><path d="M12 22c6 0 9-5 9-11-6 0-9 1-9 7"/>
    </svg>
  );
  if (k === 'blue') return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6z"/><path d="m9 12 2 2 4-4"/>
    </svg>
  );
  if (k === 'yellow') return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/>
    </svg>
  );
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="9"/>
    </svg>
  );
}

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
              className={`value value--${v.key}`}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }} transition={{ delay: i * .1, duration: .6 }}
            >
              <span className="value__icon"><Icon k={v.key} /></span>
              <h3 className="value__title">{v.title}</h3>
              <p className="value__desc">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}