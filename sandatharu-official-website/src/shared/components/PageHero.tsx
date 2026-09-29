import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './pagehero.css';

interface Props {
  num: string;
  kicker: string;
  title: React.ReactNode;
  lead?: string;
  image: string;
  crumb: string;
}

export default function PageHero({ num, kicker, title, lead, image, crumb }: Props) {
  return (
    <section className="ph hero-pull">
      <div className="ph__bg">
        <img src={image} alt="" />
        <div className="ph__veil" />
      </div>

      <div className="ph__inner container">
        <div className="ph__crumbs">
          <Link to="/">Home</Link>
          <span>/</span>
          <span className="ph__crumb-active">{crumb}</span>
        </div>

        <motion.span
          className="ph__num"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .6 }}
        >{num}</motion.span>

        <motion.span
          className="ph__kicker"
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 }}
        >{kicker}</motion.span>

        <h1 className="d d-xl ph__title">
          <motion.span
            initial={{ y: '110%' }} animate={{ y: 0 }}
            transition={{ duration: 1, ease: [.16,1,.3,1], delay: .25 }}
          >{title}</motion.span>
        </h1>

        {lead && (
          <motion.p
            className="ph__lead"
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .55 }}
          >{lead}</motion.p>
        )}
      </div>

      <div className="ph__scroll">
        <span>SCROLL</span>
        <span className="ph__scroll-line"><i /></span>
      </div>
    </section>
  );
}