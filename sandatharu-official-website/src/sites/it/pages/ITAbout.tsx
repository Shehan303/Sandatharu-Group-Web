import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ITLayout from '../components/ItLayout';
import ITPageHero from '../components/ITPageHero';

const VALUES = [
  { n: '01', t: 'Business First', d: 'We start with the problem — not the technology. Understanding the business is the first step.' },
  { n: '02', t: 'Craft + Care', d: 'We sweat the details in design and code, because quality shows in every interaction.' },
  { n: '03', t: 'Custom, Not Templates', d: 'Every business is different. Every solution we build is designed around its users.' },
  { n: '04', t: 'Design + Engineering', d: 'UI/UX thinking and technical execution work together — never one without the other.' },
  { n: '05', t: 'Long-Term Thinking', d: 'We build systems that can grow, adapt and be maintained for years.' },
  { n: '06', t: 'Partnership', d: 'We work with our clients, not just for them — clarity, honesty and open communication.' }
];

const TEAM = [
  { n: 'Engineering', r: 'Software · Web · Mobile', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80&auto=format&fit=crop' },
  { n: 'Design', r: 'UI/UX · Product Design', img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80&auto=format&fit=crop' },
  { n: 'Product', r: 'Strategy · Delivery', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&auto=format&fit=crop' },
  { n: 'Support', r: 'Maintenance · Growth', img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80&auto=format&fit=crop' }
];

export default function ITAbout() {
  return (
    <ITLayout>
      <ITPageHero
        num="01 / ABOUT"
        crumb="About"
        kicker="Who We Are"
        title={<>We Build the <em className="it-gradient-text" style={{ fontStyle: 'normal' }}>Digital Layer</em> of Your Business.</>}
        lead="Sandatharu IT Solutions is a technology-focused team that helps organizations turn ideas, challenges and business requirements into practical digital solutions."
        image="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=2000&q=85&auto=format&fit=crop"
        stats={[
          { n: '5+', l: 'Service Areas' },
          { n: 'LK', l: 'Sri Lankan Roots' },
          { n: '100%', l: 'Custom Built' },
          { n: '∞', l: 'Long-Term Support' }
        ]}
      />

      {/* Story */}
      <section className="it-section">
        <div className="it-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 60, alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: .8 }}
            className="it-imgcard" style={{ aspectRatio: '4/5' }}
          >
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=85&auto=format&fit=crop" alt="" />
          </motion.div>
          <div>
            <span className="it-kicker">Our Story</span>
            <h2 className="it-display it-d-lg" style={{ marginTop: 14, marginBottom: 24 }}>
              Built From <em className="it-gradient-text" style={{ fontStyle: 'normal' }}>Real Problems.</em>
            </h2>
            <p className="it-lead" style={{ marginBottom: 16 }}>
              Sandatharu IT Solutions began with a simple observation — many businesses still run on
              disconnected tools, spreadsheets, paper forms and manual processes. Not because they
              want to. Because nothing was designed for their specific workflow.
            </p>
            <p className="it-lead" style={{ marginBottom: 16 }}>
              We build software, web applications, mobile apps and internal systems that fit the way
              a business actually works. Not the other way around.
            </p>
            <p className="it-lead" style={{ marginBottom: 30 }}>
              As part of the Sandatharu Group, we also build technology for our own sister companies —
              Coco Products and Travels & Tours — which keeps our engineering grounded in real,
              operational business needs.
            </p>
            <Link to="/it/process" className="it-btn it-btn--primary">
              <span>See Our Process</span>
              <svg className="it-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="it-section it-section--dark">
        <div className="it-grid-bg" />
        <div className="it-container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6 }}>
              <span className="it-kicker" style={{ color: 'var(--cyan-2)' }}>Our Mission</span>
              <h2 className="it-display it-d-md" style={{ marginTop: 14, color: '#fff' }}>
                Turn ideas into useful, working digital products.
              </h2>
              <p className="it-lead" style={{ color: 'rgba(255,255,255,.7)', marginTop: 18 }}>
                To design and build technology that solves real problems — clearly, reliably and
                with long-term thinking. Every solution we build should make someone&apos;s work
                easier, faster or clearer.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .15, duration: .6 }}>
              <span className="it-kicker" style={{ color: 'var(--cyan-2)' }}>Our Vision</span>
              <h2 className="it-display it-d-md" style={{ marginTop: 14, color: '#fff' }}>
                A more digital, more capable Sri Lanka.
              </h2>
              <p className="it-lead" style={{ color: 'rgba(255,255,255,.7)', marginTop: 18 }}>
                To help Sri Lankan businesses, organizations and startups adopt modern technology
                with confidence — building systems that create lasting value for their people,
                their customers and their communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="it-section it-section--soft">
        <div className="it-container">
          <div style={{ maxWidth: 720, marginBottom: 50 }}>
            <span className="it-kicker">What We Stand For</span>
            <h2 className="it-display it-d-lg" style={{ marginTop: 14 }}>
              Six Principles. <em className="it-gradient-text" style={{ fontStyle: 'normal' }}>Zero Compromises.</em>
            </h2>
          </div>
          <div className="it-why__grid">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.n}
                className="it-why__card"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }} transition={{ delay: i * .06, duration: .6 }}
              >
                <span className="it-why__num">{v.n}</span>
                <h3 className="it-why__t">{v.t}</h3>
                <p className="it-why__d">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="it-section">
        <div className="it-container">
          <div style={{ maxWidth: 720, marginBottom: 50 }}>
            <span className="it-kicker">Our Team</span>
            <h2 className="it-display it-d-lg" style={{ marginTop: 14 }}>
              Design + Engineering <em className="it-gradient-text" style={{ fontStyle: 'normal' }}>Under One Roof.</em>
            </h2>
          </div>
          <div className="it-team__grid">
            {TEAM.map((t, i) => (
              <motion.div
                key={t.n}
                className="it-team__card"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }} transition={{ delay: i * .08, duration: .6 }}
              >
                <div className="it-team__img"><img src={t.img} alt={t.n} loading="lazy" /></div>
                <div className="it-team__body">
                  <h3 className="it-team__name">{t.n}</h3>
                  <span className="it-team__role">{t.r}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="it-section it-section--dark">
        <div className="it-container" style={{ textAlign: 'center', maxWidth: 780, margin: '0 auto' }}>
          <h2 className="it-display it-d-lg" style={{ color: '#fff' }}>
            Ready to <em className="it-gradient-text" style={{ fontStyle: 'normal' }}>Build Together?</em>
          </h2>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 30 }}>
            <Link to="/it/contact" className="it-btn it-btn--primary">
              <span>Start a Project</span>
              <svg className="it-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
            <Link to="/it/services" className="it-btn it-btn--outline-light"><span>Explore Services</span></Link>
          </div>
        </div>
      </section>
    </ITLayout>
  );
}