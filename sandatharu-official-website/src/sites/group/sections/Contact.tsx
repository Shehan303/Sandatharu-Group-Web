import { motion } from 'framer-motion';
import './contact.css';

export default function Contact() {
  return (
    <section className="ct" id="contact">
      <div className="container">
        <div className="ct__head">
          <span className="k">Work With Us</span>
          <h2 className="d d-lg ct__title">
            LET'S BUILD SOMETHING<br /><em>TOGETHER.</em>
          </h2>
        </div>

        <div className="ct__grid">
          <motion.div
            className="ct__left"
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: .8 }}
          >
            <h3 className="ct__h">Have a question, business inquiry, partnership idea or service requirement?</h3>
            <p className="ct__p">
              Whether you're looking for a sustainable product supplier, planning a journey through Sri Lanka,
              or searching for a digital solution — we'd be happy to hear from you.
            </p>

            <ul className="ct__info">
              <li>
                <span className="ct__info-label">Location</span>
                <span className="ct__info-val">Sri Lanka</span>
              </li>
              <li>
                <span className="ct__info-label">Phone</span>
                <span className="ct__info-val">+94 XX XXX XXXX</span>
              </li>
              <li>
                <span className="ct__info-label">Email</span>
                <span className="ct__info-val">info@sandatharu.lk</span>
              </li>
              <li>
                <span className="ct__info-label">Website</span>
                <span className="ct__info-val">sandatharu.lk</span>
              </li>
            </ul>
          </motion.div>

          <motion.form
            className="ct__form"
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: .8, delay: .1 }}
            onSubmit={e => e.preventDefault()}
          >
            <div className="ct__row">
              <label className="ct__field">
                <span>Full Name</span>
                <input type="text" placeholder="John Perera" />
              </label>
              <label className="ct__field">
                <span>Email</span>
                <input type="email" placeholder="you@company.lk" />
              </label>
            </div>
            <div className="ct__row">
              <label className="ct__field">
                <span>Phone</span>
                <input type="tel" placeholder="+94 7X XXX XXXX" />
              </label>
              <label className="ct__field">
                <span>Company / Organization</span>
                <input type="text" placeholder="Company name" />
              </label>
            </div>
            <div className="ct__row">
              <label className="ct__field">
                <span>Inquiry Type</span>
                <select>
                  <option>General</option>
                  <option>Business Inquiry</option>
                  <option>Partnership</option>
                  <option>Service Requirement</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="ct__field">
                <span>Select Business</span>
                <select>
                  <option>Sandatharu Group</option>
                  <option>Coco Products</option>
                  <option>Travels & Tours</option>
                  <option>IT Solutions</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </label>
            </div>
            <label className="ct__field">
              <span>Message</span>
              <textarea rows={5} placeholder="Tell us about your requirement..." />
            </label>
            <button type="submit" className="btn btn-primary ct__submit">
              <span>Send Inquiry</span>
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}