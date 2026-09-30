import { Link } from 'react-router-dom';
import ITLayout from '../components/ItLayout';
import ITPageHero from '../components/ITPageHero';
import Contact from '../sections/Contact';
import FinalCTA from '../sections/FinalCTA';

const CONTACTS = [
  {
    label: 'Phone',
    val: '+94 XX XXX XXXX',
    sub: 'Mon–Sat · 9:00–18:00',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>
  },
  {
    label: 'WhatsApp',
    val: '+94 XX XXX XXXX',
    sub: 'Quick replies',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4A10 10 0 0 0 4 16l-1 4 4-1a10 10 0 1 0 13-15zM9 8c.3 0 .7 0 1 .8l.6 1.3c.1.2.1.5 0 .7l-.4.4c-.1.2-.3.3-.2.6.1.3 1 1.6 2.2 2.6 1.5 1.3 2.6 1.4 2.9 1.5.3 0 .5 0 .7-.2l.6-.7c.2-.2.4-.2.6-.1l1.4.7c.2.1.4.3.4.5v.7c0 .7-.8 1.4-1.6 1.5-.5.1-1.1.1-3.5-.8-2.9-1.2-4.7-4-4.9-4.2-.1-.2-1.1-1.5-1.1-2.9 0-1.3.7-2 1-2.2.3-.3.6-.3.8-.3z"/></svg>
  },
  {
    label: 'Email',
    val: 'it@sandatharu.lk',
    sub: 'Project inquiries',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
  },
  {
    label: 'Location',
    val: 'Sri Lanka',
    sub: 'Island-wide · Remote OK',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 22s8-7.6 8-13a8 8 0 1 0-16 0c0 5.4 8 13 8 13z"/><circle cx="12" cy="9" r="3"/></svg>
  }
];

export default function ITContact() {
  return (
    <ITLayout>
      <ITPageHero
        num="08 / CONTACT"
        crumb="Contact"
        kicker="Start a Project"
        title={<>Let&apos;s Build <em className="it-gradient-text" style={{ fontStyle: 'normal' }}>Something Useful.</em></>}
        lead="Have an idea, business problem or digital project? Tell us what you're thinking — we'll help you turn it into something real."
        image="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=2000&q=85&auto=format&fit=crop"
      />

      {/* Contact blocks */}
      <section className="it-section" style={{ paddingBottom: 40 }}>
        <div className="it-container">
          <div className="it-ci__grid">
            {CONTACTS.map(c => (
              <div key={c.label} className="it-ci__card">
                <div className="it-ci__icon">{c.icon}</div>
                <span className="it-ci__label">{c.label}</span>
                <span className="it-ci__val">{c.val}</span>
                <p className="it-ci__sub">{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reuse home Contact form */}
      <Contact />

      {/* Final CTA */}
      <FinalCTA />

      {/* Back to home link */}
      <section className="it-section it-section--soft" style={{ paddingTop: 30, paddingBottom: 30, textAlign: 'center' }}>
        <Link to="/it" className="it-btn it-btn--outline">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M11 18l-6-6 6-6"/>
          </svg>
          <span>Back to IT Home</span>
        </Link>
      </section>
    </ITLayout>
  );
}