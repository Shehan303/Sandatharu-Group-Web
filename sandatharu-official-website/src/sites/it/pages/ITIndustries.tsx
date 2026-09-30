import { Link } from 'react-router-dom';
import ITLayout from '../components/ItLayout';
import ITPageHero from '../components/ITPageHero';
import Industries from '../sections/Industries';

const SECTORS = [
  { t: 'Business & Enterprise', d: 'Digital systems for growing businesses — CRM, ERP, operations and internal tools.', tags: ['CRM', 'Operations', 'ERP', 'Internal Tools'] },
  { t: 'Healthcare', d: 'Digital workflows and information systems for clinics, hospitals and health services.', tags: ['Patient Records', 'Appointments', 'Billing'] },
  { t: 'Education', d: 'Student, staff, learning and administrative systems for schools, universities and academies.', tags: ['Student Mgmt', 'Attendance', 'LMS'] },
  { t: 'Travel & Tourism', d: 'Booking, transport, customer and travel management solutions for the travel industry.', tags: ['Bookings', 'Guest Mgmt', 'Tour Systems'] },
  { t: 'Agriculture & Environment', d: 'Data, monitoring and resource management solutions for agriculture and environmental work.', tags: ['Monitoring', 'Data', 'Reports'] },
  { t: 'Retail & Commerce', d: 'Digital customer, inventory and sales experiences for retail and commerce businesses.', tags: ['POS', 'Inventory', 'E-commerce'] },
  { t: 'Logistics & Transport', d: 'Tracking, dispatch and operational systems for logistics and transport companies.', tags: ['Tracking', 'Dispatch', 'Fleet'] },
  { t: 'Startups', d: 'Technology foundations, MVPs and product engineering for early-stage founders.', tags: ['MVP', 'Prototype', 'Scale'] }
];

export default function ITIndustries() {
  return (
    <ITLayout>
      <ITPageHero
        num="04 / INDUSTRIES"
        crumb="Industries"
        kicker="Sectors We Serve"
        title={<>Technology Across <em className="it-gradient-text" style={{ fontStyle: 'normal' }}>Different Industries.</em></>}
        lead="From business and education to healthcare, travel, agriculture and startups — we design digital solutions for the sectors where they matter most."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=2000&q=85&auto=format&fit=crop"
        stats={[
          { n: '8+', l: 'Industry Sectors' },
          { n: '50+', l: 'Solution Patterns' },
          { n: '100%', l: 'Adaptable' },
          { n: 'LK', l: 'Island-Wide' }
        ]}
      />

      {/* Reuse home Industries grid */}
      <Industries />

      {/* Sector detail rows */}
      <section className="it-section it-section--soft">
        <div className="it-container">
          <div style={{ maxWidth: 720, marginBottom: 50 }}>
            <span className="it-kicker">Deep Dive</span>
            <h2 className="it-display it-d-lg" style={{ marginTop: 14 }}>
              What We Build <em className="it-gradient-text" style={{ fontStyle: 'normal' }}>In Each Sector.</em>
            </h2>
          </div>
          <div className="it-sd">
            {SECTORS.map(s => (
              <article key={s.t} className="it-sd__item">
                <div className="it-sd__head"><h3 className="it-sd__t">{s.t}</h3></div>
                <p className="it-sd__d">{s.d}</p>
                <ul className="it-sd__list">
                  {s.tags.map(t => <li key={t}>{t}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="it-section it-section--dark">
        <div className="it-grid-bg" />
        <div className="it-container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 780, margin: '0 auto' }}>
          <h2 className="it-display it-d-lg" style={{ color: '#fff' }}>
            Don&apos;t See Your <em className="it-gradient-text" style={{ fontStyle: 'normal' }}>Industry?</em>
          </h2>
          <p className="it-lead" style={{ color: 'rgba(255,255,255,.72)', margin: '20px auto 30px', textAlign: 'center' }}>
            We work with all kinds of organizations — even niche ones. Let&apos;s talk about yours.
          </p>
          <Link to="/it/contact" className="it-btn it-btn--primary">
            <span>Talk to Us</span>
            <svg className="it-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </div>
      </section>
    </ITLayout>
  );
}