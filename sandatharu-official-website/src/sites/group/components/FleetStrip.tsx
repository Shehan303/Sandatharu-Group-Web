import { motion } from 'framer-motion';
import './fleet.css';

const VEHICLES = [
  {
    name: 'Toyota Prius',
    tag: 'Comfort Sedan',
    img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1000&q=80&auto=format&fit=crop'
  },
  {
    name: 'Rosa Bus',
    tag: 'Group Travel',
    img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1000&q=80&auto=format&fit=crop'
  },
  {
    name: 'KDH Van',
    tag: 'Tour Transport',
    img: 'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=1000&q=80&auto=format&fit=crop'
  }
];

export default function FleetStrip() {
  return (
    <section className="section fleet diag-left">
      <div className="container">
        <div className="fleet__head">
          <div>
            <span className="kicker">On the Road</span>
            <h2 className="display display-lg fleet__title">
              A FLEET THAT <span>MOVES YOU.</span>
            </h2>
          </div>
          <p className="fleet__lead">
            From airport pickups to island tours — Sandatharu Travels runs a
            modern, comfortable fleet across Sri Lanka.
          </p>
        </div>

        <div className="fleet__grid">
          {VEHICLES.map((v, i) => (
            <motion.div
              key={v.name}
              className="fleet__card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * .12, duration: .7 }}
            >
              <div className="fleet__img">
                <img src={v.img} alt={v.name} loading="lazy" />
              </div>
              <div className="fleet__meta">
                <span className="fleet__tag">{v.tag}</span>
                <h3 className="fleet__name">{v.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}