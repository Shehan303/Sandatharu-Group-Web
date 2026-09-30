import { Link } from 'react-router-dom';
import ITLayout from '../components/ItLayout';
import ITPageHero from '../components/ITPageHero';
import TechStack from '../sections/TechStack';

const TECH_DETAILS = [
  {
    label: 'Frontend',
    items: [
      { n: 'React', d: 'Component-based UI library' },
      { n: 'Vite', d: 'Modern build tool' },
      { n: 'TypeScript', d: 'Type-safe JavaScript' },
      { n: 'HTML5', d: 'Semantic markup' },
      { n: 'CSS3', d: 'Modern styling' },
      { n: 'Tailwind / Custom CSS', d: 'Design systems' }
    ]
  },
  {
    label: 'Backend',
    items: [
      { n: 'Node.js', d: 'Server-side JavaScript' },
      { n: 'Express', d: 'Minimal web framework' },
      { n: 'PHP', d: 'Server-side scripting' },
      { n: 'Java', d: 'Enterprise applications' },
      { n: 'REST APIs', d: 'Service architecture' },
      { n: 'Webhooks', d: 'Event-driven flows' }
    ]
  },
  {
    label: 'Databases',
    items: [
      { n: 'MySQL', d: 'Relational database' },
      { n: 'PostgreSQL', d: 'Advanced SQL' },
      { n: 'MongoDB', d: 'Document database' },
      { n: 'Firebase', d: 'Realtime + auth' },
      { n: 'Redis', d: 'Caching layer' }
    ]
  },
  {
    label: 'Mobile',
    items: [
      { n: 'React Native', d: 'Cross-platform apps' },
      { n: 'Expo', d: 'RN toolchain' },
      { n: 'Android', d: 'Native Android' },
      { n: 'iOS', d: 'Native iOS' }
    ]
  },
  {
    label: 'Design',
    items: [
      { n: 'Figma', d: 'UI + prototyping' },
      { n: 'Design Systems', d: 'Consistent UI' },
      { n: 'Wireframes', d: 'Structure first' },
      { n: 'Prototypes', d: 'Interactive demos' }
    ]
  },
  {
    label: 'Cloud & DevOps',
    items: [
      { n: 'Vercel', d: 'Frontend hosting' },
      { n: 'Netlify', d: 'Static deploys' },
      { n: 'AWS', d: 'Scalable infra' },
      { n: 'VPS', d: 'Full control servers' },
      { n: 'GitHub Actions', d: 'CI/CD' },
      { n: 'Monitoring', d: 'Uptime + logs' }
    ]
  }
];

export default function ITTechnologies() {
  return (
    <ITLayout>
      <ITPageHero
        num="06 / TECHNOLOGIES"
        crumb="Technologies"
        kicker="Our Stack"
        title={<>The Tools We <em className="it-gradient-text" style={{ fontStyle: 'normal' }}>Build With.</em></>}
        lead="A modern, reliable stack for building web, mobile, backend and cloud solutions — chosen for performance, community and long-term support."
        image="https://images.unsplash.com/photo-1518770660439-4636190af475?w=2000&q=85&auto=format&fit=crop"
        stats={[
          { n: '20+', l: 'Technologies' },
          { n: '6', l: 'Stack Layers' },
          { n: '∞', l: 'Scalability' },
          { n: '24/7', l: 'Monitoring' }
        ]}
      />

      {/* Reuse home TechStack */}
      <TechStack />

      {/* Deep detail */}
      <section className="it-section it-section--soft">
        <div className="it-container">
          <div style={{ maxWidth: 720, marginBottom: 50 }}>
            <span className="it-kicker">In Depth</span>
            <h2 className="it-display it-d-lg" style={{ marginTop: 14 }}>
              What We Use <em className="it-gradient-text" style={{ fontStyle: 'normal' }}>and Why.</em>
            </h2>
          </div>

          <div className="it-td__grid">
            {TECH_DETAILS.map(group => (
              <div key={group.label} className="it-td__card">
                <div className="it-td__head">
                  <span className="it-td__dot" />
                  <span className="it-td__label">{group.label}</span>
                </div>
                <div className="it-td__list">
                  {group.items.map(i => (
                    <div key={i.n} className="it-td__item">
                      <span>{i.n}</span>
                      <span>{i.d}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="it-section it-section--dark">
        <div className="it-grid-bg" />
        <div className="it-container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 780, margin: '0 auto' }}>
          <h2 className="it-display it-d-lg" style={{ color: '#fff' }}>
            Have a Tech <em className="it-gradient-text" style={{ fontStyle: 'normal' }}>Requirement?</em>
          </h2>
          <p className="it-lead" style={{ color: 'rgba(255,255,255,.72)', margin: '20px auto 30px', textAlign: 'center' }}>
            Specific stack, existing system or something new? We can adapt to your setup.
          </p>
          <Link to="/it/contact" className="it-btn it-btn--primary">
            <span>Talk Tech With Us</span>
            <svg className="it-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </div>
      </section>
    </ITLayout>
  );
}