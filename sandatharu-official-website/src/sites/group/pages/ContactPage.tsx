import { motion } from 'framer-motion';
import PageHero from '../../../shared/components/PageHero';
import Contact from '../sections/Contact';
import './contact-page.css';

const OFFICES = [
  { c: 'Kurunegala', l: 'Head Office', a: 'Kurunegala, Sri Lanka', p: '+94 XX XXX XXXX', e: 'info@sandatharu.lk' },
  { c: 'Colombo',    l: 'Business Office', a: 'Colombo, Sri Lanka', p: '+94 XX XXX XXXX', e: 'business@sandatharu.lk' },
  { c: 'Coco',       l: 'Coco Operations', a: 'North Western Province', p: '+94 XX XXX XXXX', e: 'coco@sandatharu.lk' },
  { c: 'IT',         l: 'IT Solutions',   a: 'Remote / Colombo', p: '+94 XX XXX XXXX', e: 'it@sandatharu.lk' }
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        num="08 / CONTACT"
        crumb="Contact"
        kicker="Get in Touch"
        title={<>LET'S START A<br />CONVERSATION.</>}
        lead="Have a question, business inquiry, partnership idea or service requirement? We would be happy to hear from you."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=2000&q=85&auto=format&fit=crop"
      />

      <section className="section cp-offices">
        <div className="container">
          <div className="cp-offices__head">
            <span className="k">Reach Us</span>
            <h2 className="d d-lg cp-offices__title">MULTIPLE WAYS TO CONNECT.</h2>
          </div>
          <div className="cp-offices__grid">
            {OFFICES.map((o, i) => (
              <motion.div
                key={o.c}
                className="cp-office"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * .08, duration: .6 }}
              >
                <span className="cp-office__label">{o.l}</span>
                <h3 className="cp-office__city d d-sm">{o.c}</h3>
                <ul>
                  <li>{o.a}</li>
                  <li>{o.p}</li>
                  <li>{o.e}</li>
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}