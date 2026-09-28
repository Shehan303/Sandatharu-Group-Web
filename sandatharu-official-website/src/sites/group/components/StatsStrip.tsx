import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import './stats.css';

const STATS = [
  { n: 3,   suffix: '',  label: 'Businesses' },
  { n: 1,   suffix: '',  label: 'Vision' },
  { n: 25,  suffix: '+', label: 'Service Areas' },
  { n: 24,  suffix: '/7', label: 'Support' }
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0; const start = performance.now(); const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return <span ref={ref}>{val}{suffix}</span>;
}

export default function StatsStrip() {
  return (
    <section className="stats">
      <div className="container stats__grid">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            className="stats__item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: .6, delay: i * .1 }}
          >
            <div className="stats__num display display-md">
              <Counter to={s.n} suffix={s.suffix} />
            </div>
            <div className="stats__label">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}