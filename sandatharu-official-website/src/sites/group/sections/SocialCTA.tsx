import { motion } from 'framer-motion';
import './social.css';

const SOCIALS = [
  { name: 'Facebook',  color: '#1877F2', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-9h3l1-4h-4V6.5c0-1 .3-1.7 1.7-1.7H17V1.1C16.7 1.1 15.6 1 14.4 1 11.6 1 9.5 2.7 9.5 5.8V9H6v4h3.5v9z"/></svg> },
  { name: 'Instagram', color: '#E4405F', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/></svg> },
  { name: 'LinkedIn',  color: '#0A66C2', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3 9h3v12H3zM10 9h3v1.6c.6-1 1.8-1.9 3.6-1.9 3 0 4.4 2 4.4 5V21h-3v-5.4c0-1.6-.6-2.7-2-2.7-1.3 0-2 .9-2 2.7V21h-3z"/></svg> },
  { name: 'YouTube',   color: '#FF0000', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12s0-4-.5-5.8c-.3-1-1.2-1.8-2.2-2C18.5 4 12 4 12 4s-6.5 0-8.3.3c-1 .2-1.9.9-2.2 2C1 8 1 12 1 12s0 4 .5 5.8c.3 1 1.2 1.8 2.2 2C5.5 20 12 20 12 20s6.5 0 8.3-.3c1-.2 1.9-.9 2.2-2C23 16 23 12 23 12zM10 15V9l5 3z"/></svg> },
  { name: 'WhatsApp',  color: '#25D366', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4A10 10 0 0 0 4 16l-1 4 4-1a10 10 0 1 0 13-15zM9 8c.3 0 .7 0 1 .8l.6 1.3c.1.2.1.5 0 .7l-.4.4c-.1.2-.3.3-.2.6.1.3 1 1.6 2.2 2.6 1.5 1.3 2.6 1.4 2.9 1.5.3 0 .5 0 .7-.2l.6-.7c.2-.2.4-.2.6-.1l1.4.7c.2.1.4.3.4.5v.7c0 .7-.8 1.4-1.6 1.5-.5.1-1.1.1-3.5-.8-2.9-1.2-4.7-4-4.9-4.2-.1-.2-1.1-1.5-1.1-2.9 0-1.3.7-2 1-2.2.3-.3.6-.3.8-.3z"/></svg> }
];

export default function SocialCTA() {
  return (
    <section className="sc">
      <div className="container sc__inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: .7 }}
        >
          <span className="k">Community</span>
          <h2 className="d d-lg sc__title">FOLLOW THE<br />SANDATHARU JOURNEY.</h2>
          <p className="sc__lead">
            Discover our latest updates, projects, journeys, products and stories
            through our social channels.
          </p>
        </motion.div>

        <div className="sc__grid">
          {SOCIALS.map((s, i) => (
            <motion.a
              key={s.name}
              href="#"
              className="sc__card"
              style={{ '--c': s.color } as React.CSSProperties}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * .08, duration: .6 }}
            >
              <span className="sc__icon">{s.icon}</span>
              <span className="sc__name">{s.name}</span>
              <span className="sc__handle">@sandatharugroup</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}