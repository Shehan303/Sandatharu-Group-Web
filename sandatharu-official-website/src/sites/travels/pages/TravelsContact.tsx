import { Link } from 'react-router-dom';
import TravelsLayout from '../components/TravelsLayout';
import Contact from '../sections/Contact';
import FinalCTA from '../sections/FinalCTA';

const CONTACT_BLOCKS = [
  {
    label: 'Call Us',
    val: '+94 XX XXX XXXX',
    sub: 'Mon–Sat · 8:30–18:00',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>
      </svg>
    )
  },
  {
    label: 'WhatsApp',
    val: '+94 XX XXX XXXX',
    sub: 'Quick replies',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4A10 10 0 0 0 4 16l-1 4 4-1a10 10 0 1 0 13-15zM9 8c.3 0 .7 0 1 .8l.6 1.3c.1.2.1.5 0 .7l-.4.4c-.1.2-.3.3-.2.6.1.3 1 1.6 2.2 2.6 1.5 1.3 2.6 1.4 2.9 1.5.3 0 .5 0 .7-.2l.6-.7c.2-.2.4-.2.6-.1l1.4.7c.2.1.4.3.4.5v.7c0 .7-.8 1.4-1.6 1.5-.5.1-1.1.1-3.5-.8-2.9-1.2-4.7-4-4.9-4.2-.1-.2-1.1-1.5-1.1-2.9 0-1.3.7-2 1-2.2.3-.3.6-.3.8-.3z"/>
      </svg>
    )
  },
  {
    label: 'Email',
    val: 'travels@sandatharu.lk',
    sub: 'Inquiries & bookings',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="5" width="18" height="14" rx="2"/>
        <path d="m3 7 9 6 9-6"/>
      </svg>
    )
  },
  {
    label: 'Based In',
    val: 'Sri Lanka',
    sub: 'Island-wide operations',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-7.6 8-13a8 8 0 1 0-16 0c0 5.4 8 13 8 13z"/>
        <circle cx="12" cy="9" r="3"/>
      </svg>
    )
  }
];

export default function TravelsContact() {
  return (
    <TravelsLayout>
      <section className="t-pagehero">
        <div className="t-pagehero__bg" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1502877338535-766e1452684a?w=2000&q=85&auto=format&fit=crop")' }} />
        <div className="t-pagehero__veil" />
        <div className="t-pagehero__inner">
          <div className="t-pagehero__crumb">
            <Link to="/travels">Travels</Link> / Contact
          </div>
          <h1 className="t-pagehero__title">
            Ready to <em>Start Your Journey?</em>
          </h1>
          <p className="t-pagehero__lead">
            Tell us where you want to go, how you want to travel and what you need — we&apos;ll
            help you plan the next step.
          </p>
        </div>
      </section>

      {/* Contact info blocks */}
      <section className="t-section" style={{ paddingBottom: 40 }}>
        <div className="t-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {CONTACT_BLOCKS.map(block => (
              <div
                key={block.label}
                style={{
                  padding: '28px 26px',
                  background: 'var(--sand)',
                  borderRadius: 'var(--r-lg)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12
                }}
              >
                <div style={{
                  width: 44, height: 44,
                  borderRadius: 12,
                  background: 'rgba(0,102,204,.12)',
                  color: 'var(--ocean)',
                  display: 'grid',
                  placeItems: 'center'
                }}>{block.icon}</div>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  fontWeight: 700
                }}>{block.label}</span>
                <span style={{
                  fontFamily: 'var(--font-alt)',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: 'var(--navy)'
                }}>{block.val}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{block.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form (reused) */}
      <Contact />

      {/* Final CTA */}
      <FinalCTA />
    </TravelsLayout>
  );
}