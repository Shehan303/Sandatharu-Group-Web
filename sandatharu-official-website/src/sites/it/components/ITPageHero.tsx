import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Props {
  num: string;
  crumb: string;
  kicker: string;
  title: React.ReactNode;
  lead: string;
  image: string;
  stats?: { n: string; l: string }[];
}

export default function ITPageHero({ num, crumb, kicker, title, lead, image, stats }: Props) {
  return (
    <section className="it-phero">
      <div className="it-phero__bg" style={{ backgroundImage: `url(${image})` }} />
      <div className="it-phero__grid" />
      <span className="it-hero__blob it-hero__blob--blue" />
      <span className="it-hero__blob it-hero__blob--cyan" />
      <div className="it-phero__veil" />

      <div className="it-phero__inner it-container">
        <div className="it-phero__crumbs">
          <Link to="/it">IT Solutions</Link>
          <span>/</span>
          <span className="it-phero__crumb-active">{crumb}</span>
        </div>

        <div className="it-phero__row">
          <div>
            <motion.span
              className="it-phero__num"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}
            >{num}</motion.span>

            <motion.span
              className="it-phero__kicker"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }}
            >{kicker}</motion.span>

            <motion.h1
              className="it-display it-d-xxl it-phero__title"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2, duration: .7 }}
            >{title}</motion.h1>

            <motion.p
              className="it-phero__lead"
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35 }}
            >{lead}</motion.p>
          </div>

          {stats && stats.length > 0 && (
            <motion.div
              className="it-phero__stats"
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .4, duration: .7 }}
            >
              {stats.map(s => (
                <div key={s.l} className="it-phero__stat">
                  <span className="it-phero__stat-n it-gradient-text">{s.n}</span>
                  <span className="it-phero__stat-l">{s.l}</span>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}