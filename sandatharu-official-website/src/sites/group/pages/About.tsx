import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHero from '../../../shared/components/PageHero';
import './about.css';

const PRINCIPLES = [
  { n: '01', t: 'Quality',        d: 'We deliver consistent value through every product and service we create.' },
  { n: '02', t: 'Creativity',     d: 'We approach every challenge with fresh thinking and modern tools.' },
  { n: '03', t: 'Responsibility', d: 'We respect people, communities and the environment in every decision.' },
  { n: '04', t: 'Growth',         d: 'We keep learning, adapting and improving as one group.' }
];

export default function About() {
  return (
    <>
      <PageHero
        num="02 / ABOUT"
        crumb="About"
        kicker="Who We Are"
        title={<>MORE THAN A GROUP.<br />A GROWING VISION.</>}
        lead="Sandatharu Group is a Sri Lankan business group bringing together diverse businesses under one identity — built on quality, creativity, responsibility and continuous growth."
        image="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=2000&q=85&auto=format&fit=crop"
      />

      {/* Intro split */}
      <section className="section ab-intro">
        <div className="container ab-intro__grid">
          <div>
            <motion.span className="k" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              Our Purpose
            </motion.span>
            <motion.h2
              className="d d-lg ab-intro__title"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: .8 }}
            >
              BUILDING MEANINGFUL VALUE ACROSS INDUSTRIES.
            </motion.h2>
            <p className="lead">
              Sandatharu was created to bring together different business areas under one
              shared vision — sustainable coconut products, travel and tourism, and modern
              technology solutions.
            </p>
            <p className="lead">
              While each business operates with its own identity, they share common values
              that guide how we work with customers, partners and communities.
            </p>
          </div>
          <motion.div
            className="ab-intro__imgs"
            initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 1 }}
          >
            <img src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=900&q=80&auto=format&fit=crop" alt="" />
            <img src="https://images.unsplash.com/photo-1580984969071-a8da5656c2fb?w=900&q=80&auto=format&fit=crop" alt="" />
            <img src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=900&q=80&auto=format&fit=crop" alt="" />
          </motion.div>
        </div>
      </section>

      {/* Numbers */}
      <section className="section ab-nums">
        <div className="container ab-nums__grid">
          {[
            { n: '03', l: 'Business Areas', s: 'Coco · Travels · IT' },
            { n: 'LK', l: 'Sri Lankan Roots', s: 'Based in Sri Lanka' },
            { n: '∞',  l: 'Growing Network',  s: 'Clients & partners' },
            { n: '01', l: 'Shared Vision',    s: 'Quality & responsibility' }
          ].map((x, i) => (
            <motion.div
              key={x.l}
              className="ab-nums__cell"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * .1, duration: .6 }}
            >
              <span className="d ab-nums__n">{x.n}</span>
              <span className="ab-nums__l">{x.l}</span>
              <span className="ab-nums__s">{x.s}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className="section ab-pr">
        <div className="container">
          <div className="ab-pr__head">
            <span className="k">Principles</span>
            <h2 className="d d-lg ab-pr__title">WHAT GUIDES US.</h2>
          </div>
          <div className="ab-pr__grid">
            {PRINCIPLES.map((p, i) => (
              <motion.div
                key={p.n}
                className="ab-pr__cell"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * .08, duration: .6 }}
              >
                <span className="ab-pr__num d">{p.n}</span>
                <h3 className="ab-pr__t">{p.t}</h3>
                <p className="ab-pr__d">{p.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section ab-cta">
        <div className="container ab-cta__inner">
          <h2 className="d d-lg">READY TO START A CONVERSATION?</h2>
          <div className="ab-cta__btns">
            <Link to="/contact" className="btn btn-primary">
              <span>Contact Us</span>
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
            <Link to="/businesses" className="btn btn-ghost">Our Businesses</Link>
          </div>
        </div>
      </section>
    </>
  );
}