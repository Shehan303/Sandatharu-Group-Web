import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CONTACTS = [
  {
    label: 'Location',
    value: 'Sri Lanka',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-7.6 8-13a8 8 0 1 0-16 0c0 5.4 8 13 8 13z"/>
        <circle cx="12" cy="9" r="3"/>
      </svg>
    )
  },
  {
    label: 'Phone',
    value: '+94 XX XXX XXXX',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>
      </svg>
    )
  },
  {
    label: 'WhatsApp',
    value: '+94 XX XXX XXXX',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4A10 10 0 0 0 4 16l-1 4 4-1a10 10 0 1 0 13-15zM9 8c.3 0 .7 0 1 .8l.6 1.3c.1.2.1.5 0 .7l-.4.4c-.1.2-.3.3-.2.6.1.3 1 1.6 2.2 2.6 1.5 1.3 2.6 1.4 2.9 1.5.3 0 .5 0 .7-.2l.6-.7c.2-.2.4-.2.6-.1l1.4.7c.2.1.4.3.4.5v.7c0 .7-.8 1.4-1.6 1.5-.5.1-1.1.1-3.5-.8-2.9-1.2-4.7-4-4.9-4.2-.1-.2-1.1-1.5-1.1-2.9 0-1.3.7-2 1-2.2.3-.3.6-.3.8-.3z"/>
      </svg>
    )
  },
  {
    label: 'Email',
    value: 'coco@sandatharu.lk',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="5" width="18" height="14" rx="2"/>
        <path d="m3 7 9 6 9-6"/>
      </svg>
    )
  }
];

export default function Contact() {
  return (
    <section className="coco-contact">
      <div
        className="coco-contact__bg"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1591336462674-e0c5eb7a14b7?w=2000&q=85&auto=format&fit=crop)'
        }}
      />
      <div className="coco-contact__veil" />

      <div className="coco-contact__inner">
        <div className="coco-contact__head">
          <span className="c-kicker" style={{ color: 'var(--moss-2)' }}>
            Get in Touch
          </span>
          <h2 className="c-display c-d-lg coco-contact__title">
            Let&apos;s talk <em>coconut business.</em>
          </h2>
          <p className="c-lead" style={{ color: 'rgba(255,255,255,.75)', marginTop: 20 }}>
            Whether you are looking for a product, exploring a supply relationship or
            interested in working with Sandatharu Coco Products, our team is ready to hear
            from you.
          </p>
        </div>

        <div className="coco-contact__grid">
          {CONTACTS.map((c, i) => (
            <motion.div
              key={c.label}
              className="coco-contact__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * .08, duration: .6 }}
            >
              <div className="coco-contact__icon">{c.icon}</div>
              <span className="coco-contact__label">{c.label}</span>
              <span className="coco-contact__value">{c.value}</span>
            </motion.div>
          ))}
        </div>

        <div className="coco-contact__ctas">
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="c-btn c-btn--primary"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4A10 10 0 0 0 4 16l-1 4 4-1a10 10 0 1 0 13-15z"/>
            </svg>
            <span>WhatsApp Us</span>
          </a>
          <a href="mailto:coco@sandatharu.lk" className="c-btn c-btn--outline-light">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="5" width="18" height="14" rx="2"/>
              <path d="m3 7 9 6 9-6"/>
            </svg>
            <span>Send Email</span>
          </a>
          <Link to="/coco/contact" className="c-btn c-btn--outline-light">
            <span>Request Inquiry</span>
            <svg className="c-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}