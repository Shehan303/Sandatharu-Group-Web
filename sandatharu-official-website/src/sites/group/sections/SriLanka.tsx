import { motion } from 'framer-motion';
import './srilanka.css';

const WAYPOINTS = [
  'Coconut Resources',
  'Sri Lankan Operations',
  'Travel Experiences',
  'Technology & Innovation',
  'Global Opportunities'
];

export default function SriLanka() {
  return (
    <section className="sl">
      <div className="container">
        <div className="sl__head">
          <span className="k">Sri Lanka → World</span>
          <h2 className="d d-lg sl__title">PROUDLY SRI LANKAN.<br /><em>OPEN TO THE WORLD.</em></h2>
          <p className="sl__lead">
            Sri Lanka is at the heart of Sandatharu. From its natural resources and beautiful
            landscapes to its people, creativity and entrepreneurial spirit, the country provides
            the foundation for our journey.
          </p>
        </div>

        <div className="sl__grid">
          <div className="sl__map">
            <svg viewBox="0 0 300 500" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M140,10 C160,15 180,40 190,80 C200,120 210,160 215,200 C220,240 215,290 200,340 C185,390 165,430 145,460 C130,480 115,490 105,480 C90,460 75,410 65,350 C55,290 55,230 70,170 C85,110 105,60 120,30 Z"
                fill="none" stroke="#0077CB" strokeWidth="2" strokeDasharray="4 6"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                viewport={{ once: true }} transition={{ duration: 2.4, ease: 'easeInOut' }}
              />
              <motion.circle
                cx="140" cy="290" r="6" fill="#FFC107"
                initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                viewport={{ once: true }} transition={{ delay: 1.6 }}
              />
              <motion.circle
                cx="140" cy="290" r="14" fill="none" stroke="#FFC107" strokeWidth="1"
                initial={{ scale: 0, opacity: 1 }} whileInView={{ scale: 3, opacity: 0 }}
                viewport={{ once: true }} transition={{ delay: 1.8, duration: 2, repeat: Infinity }}
              />
              <text x="150" y="295" fill="#FFC107" fontFamily="Space Grotesk" fontSize="12" letterSpacing="3">SRI LANKA</text>
            </svg>
          </div>

          <div className="sl__steps">
            {WAYPOINTS.map((w, i) => (
              <motion.div
                key={w}
                className="sl__step"
                initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }} transition={{ delay: i * .1, duration: .6 }}
              >
                <span className="sl__step-num">0{i + 1}</span>
                <span className="sl__step-label">{w}</span>
                {i < WAYPOINTS.length - 1 && <span className="sl__step-arrow">↓</span>}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}