import { Link } from 'react-router-dom';
import ITLayout from '../components/ItLayout';
import ITPageHero from '../components/ITPageHero';
import Solutions from '../sections/Solutions';

const SOLUTION_DETAILS = [
  { t: 'HR & Employee Systems', d: 'Manage employee information, workflows, approvals and organizational processes digitally.',
    items: ['Employee Records', 'Leave Management', 'Attendance', 'Approvals', 'Reports', 'Payroll Integration'] },
  { t: 'Finance & Payment Systems', d: 'Simplify requests, approvals, records and financial workflows.',
    items: ['Payment Requests', 'Vouchers', 'Approval Workflows', 'Reports', 'Reconciliation'] },
  { t: 'Document Management', d: 'Organize, search and manage important organizational documents.',
    items: ['Digital Files', 'Full-text Search', 'Categories', 'Access Control', 'Approval Workflow'] },
  { t: 'Customer Management', d: 'Connect customer information, interactions and services.',
    items: ['Customer Profiles', 'Interaction History', 'Support Tickets', 'Service Requests', 'Reports'] },
  { t: 'Inventory & Operations', d: 'Improve visibility over products, stock and operational activities.',
    items: ['Product Catalog', 'Stock Tracking', 'Suppliers', 'Transactions', 'Reports'] },
  { t: 'Project Management', d: 'Manage projects, tasks, teams and progress in one digital environment.',
    items: ['Tasks', 'Teams', 'Progress Tracking', 'Time Logging', 'Reporting'] },
  { t: 'Booking & Reservation', d: 'Build booking systems around your business model.',
    items: ['Availability', 'Bookings', 'Payments', 'Notifications', 'Admin Dashboard'] },
  { t: 'Service Management', d: 'Manage service requests, queues, appointments and customer workflows.',
    items: ['Requests', 'Queue Management', 'Appointments', 'Status Tracking', 'Customer Portal'] }
];

export default function ITSolutions() {
  return (
    <ITLayout>
      <ITPageHero
        num="03 / SOLUTIONS"
        crumb="Solutions"
        kicker="Business Solutions"
        title={<>Solutions Built Around <em className="it-gradient-text" style={{ fontStyle: 'normal' }}>Real Problems.</em></>}
        lead="Ready-made digital solution patterns for common business needs — HR, finance, inventory, documents, projects and customer management."
        image="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=2000&q=85&auto=format&fit=crop"
        stats={[
          { n: '8', l: 'Solution Areas' },
          { n: '40+', l: 'Sub-modules' },
          { n: '∞', l: 'Custom Workflows' },
          { n: '24/7', l: 'Accessible' }
        ]}
      />

      {/* Reuse home Solutions (dark grid) */}
      <Solutions />

      {/* Detail rows */}
      <section className="it-section">
        <div className="it-container">
          <div style={{ maxWidth: 720, marginBottom: 50 }}>
            <span className="it-kicker">In Detail</span>
            <h2 className="it-display it-d-lg" style={{ marginTop: 14 }}>
              What Each Solution <em className="it-gradient-text" style={{ fontStyle: 'normal' }}>Includes.</em>
            </h2>
          </div>

          <div className="it-sd">
            {SOLUTION_DETAILS.map(s => (
              <article key={s.t} className="it-sd__item">
                <div className="it-sd__head">
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

      {/* CTA */}
      <section className="it-section it-section--soft">
        <div className="it-container" style={{ textAlign: 'center', maxWidth: 780, margin: '0 auto' }}>
          <h2 className="it-display it-d-lg">
            Need Something <em className="it-gradient-text" style={{ fontStyle: 'normal' }}>Custom?</em>
          </h2>
          <p className="it-lead" style={{ margin: '20px auto 30px', textAlign: 'center' }}>
            Every business has unique needs. We can build a solution shaped around yours.
          </p>
          <Link to="/it/contact" className="it-btn it-btn--primary">
            <span>Discuss a Custom Solution</span>
            <svg className="it-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </Link>
        </div>
      </section>
    </ITLayout>
  );
}