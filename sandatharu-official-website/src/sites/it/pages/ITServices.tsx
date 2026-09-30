import { Link } from 'react-router-dom';
import ITLayout from '../components/ItLayout';
import ITPageHero from '../components/ITPageHero';
import Services from '../sections/Services';

const DETAIL_SERVICES = [
  { n: '01', t: 'Software Development', d: 'Custom software designed around your organization\'s processes, users and goals.',
    items: ['Business Mgmt Systems', 'HR Systems', 'Inventory', 'Finance Systems', 'Document Mgmt', 'Workflow Systems', 'Internal Portals', 'Management Dashboards'] },
  { n: '02', t: 'Web Development', d: 'Responsive websites and web applications built for performance, usability and modern visual design.',
    items: ['Corporate Sites', 'Web Applications', 'Customer Portals', 'Admin Dashboards', 'Landing Pages', 'Booking Systems', 'E-commerce Platforms'] },
  { n: '03', t: 'Mobile Applications', d: 'Mobile experiences that connect businesses with customers, employees and users.',
    items: ['Android Apps', 'iOS Apps', 'Cross-platform', 'Business Apps', 'Customer Apps', 'Employee Apps', 'Service Apps'] },
  { n: '04', t: 'UI/UX Design', d: 'Interfaces people love to use — designed around real users and real needs.',
    items: ['UX Research', 'User Flows', 'Wireframes', 'Prototypes', 'Design Systems', 'Dashboard Design', 'Usability Improvements'] },
  { n: '05', t: 'Business Systems', d: 'Digital systems that replace spreadsheets, paper forms and disconnected tools.',
    items: ['HR & Payroll', 'Inventory', 'Finance', 'Document Management', 'Workflow Automation', 'Project Management'] },
  { n: '06', t: 'Automation & Workflows', d: 'Let technology handle repetitive work and keep processes consistent.',
    items: ['Automated Approvals', 'Notifications', 'Data Processing', 'Form Workflows', 'Email Workflows', 'Report Generation'] },
  { n: '07', t: 'API & Integrations', d: 'Connect your systems so information moves between them efficiently.',
    items: ['REST APIs', 'Third-party Integrations', 'Payment Gateways', 'Authentication', 'Data Exchange', 'Service Integrations'] },
  { n: '08', t: 'Cloud & Deployment', d: 'From development to production — hosting, deployment, monitoring and growth.',
    items: ['Web Deployment', 'Cloud Hosting', 'Server Configuration', 'Domain Setup', 'SSL', 'Database Deployment', 'Monitoring'] }
];

export default function ITServices() {
  return (
    <ITLayout>
      <ITPageHero
        num="02 / SERVICES"
        crumb="Services"
        kicker="What We Offer"
        title={<>From Idea to <em className="it-gradient-text" style={{ fontStyle: 'normal' }}>Digital Reality.</em></>}
        lead="Software, web, mobile, UI/UX, business systems, automation, integrations and cloud — a full-stack service offering for modern businesses."
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=2000&q=85&auto=format&fit=crop"
        stats={[
          { n: '8', l: 'Service Areas' },
          { n: '50+', l: 'Technologies' },
          { n: '100%', l: 'Custom Built' },
          { n: '24/7', l: 'Support Window' }
        ]}
      />

      {/* Detail Grid */}
      <section className="it-section">
        <div className="it-container">
          <div style={{ maxWidth: 720, marginBottom: 50 }}>
            <span className="it-kicker">All Services</span>
            <h2 className="it-display it-d-lg" style={{ marginTop: 14 }}>
              Everything You Need Under <em className="it-gradient-text" style={{ fontStyle: 'normal' }}>One Roof.</em>
            </h2>
          </div>

          <div className="it-sd">
            {DETAIL_SERVICES.map(s => (
              <article key={s.n} className="it-sd__item">
                <div className="it-sd__head">
                  <div className="it-sd__icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <rect x="3" y="3" width="18" height="18" rx="3"/>
                      <path d="M9 9h6v6H9z"/>
                    </svg>
                  </div>
                  <span className="it-sd__num it-gradient-text" style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 600 }}>{s.n}</span>
                  <h3 className="it-sd__t">{s.t}</h3>
                </div>
                <p className="it-sd__d">{s.d}</p>
                <ul className="it-sd__list">
                  {s.items.map(x => <li key={x}>{x}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reuse home Services (4 big cards) */}
      <Services />

      {/* CTA */}
      <section className="it-section it-section--dark">
        <div className="it-grid-bg" />
        <div className="it-container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 780, margin: '0 auto' }}>
          <h2 className="it-display it-d-lg" style={{ color: '#fff' }}>
            Have a Project <em className="it-gradient-text" style={{ fontStyle: 'normal' }}>in Mind?</em>
          </h2>
          <p className="it-lead" style={{ color: 'rgba(255,255,255,.72)', margin: '20px auto 30px', textAlign: 'center' }}>
            Tell us what you&apos;re trying to build or solve. We&apos;ll take it from there.
          </p>
          <Link to="/it/contact" className="it-btn it-btn--primary">
            <span>Start a Project</span>
            <svg className="it-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </div>
      </section>
    </ITLayout>
  );
}