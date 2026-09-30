import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="it-section it-contact" id="contact">
      <div className="it-container" style={{ textAlign: 'center' }}>
        <span className="it-kicker">Start a Project</span>
        <h2 className="it-display it-d-lg" style={{ marginTop: 14, color: '#fff' }}>
          Let&apos;s Build <em style={{ fontStyle: 'normal', background: 'linear-gradient(135deg,#22D3EE,#60A5FA)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>Something Useful.</em>
        </h2>
        <p className="it-lead" style={{ margin: '20px auto 0', textAlign: 'center', color: 'rgba(255,255,255,.7)' }}>
          Have an idea, business problem or digital project? Tell us what you&apos;re thinking.
        </p>

        <motion.form
          className="it-contact__form"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          onSubmit={e => e.preventDefault()}
        >
          <div className="it-contact__row">
            <label className="it-contact__field"><span>Full Name *</span><input type="text" placeholder="Your name" required /></label>
            <label className="it-contact__field"><span>Email *</span><input type="email" placeholder="you@company.com" required /></label>
          </div>
          <div className="it-contact__row">
            <label className="it-contact__field"><span>Phone / WhatsApp</span><input type="tel" placeholder="+94 ..." /></label>
            <label className="it-contact__field"><span>Company / Organization</span><input type="text" placeholder="Company" /></label>
          </div>
          <div className="it-contact__row">
            <label className="it-contact__field">
              <span>Project Type *</span>
              <select defaultValue="" required>
                <option value="" disabled>Select type</option>
                <option>Software</option>
                <option>Website</option>
                <option>Mobile App</option>
                <option>UI/UX</option>
                <option>Business System</option>
                <option>Automation</option>
                <option>API / Integration</option>
                <option>Cloud / Deployment</option>
                <option>AI / Data</option>
                <option>Other</option>
              </select>
            </label>
            <label className="it-contact__field">
              <span>Project Stage *</span>
              <select defaultValue="" required>
                <option value="" disabled>Select stage</option>
                <option>Just an Idea</option>
                <option>Planning</option>
                <option>Design Needed</option>
                <option>Development Needed</option>
                <option>Existing System Improvement</option>
              </select>
            </label>
          </div>
          <div className="it-contact__row">
            <label className="it-contact__field"><span>Budget Range (optional)</span><input type="text" placeholder="e.g. LKR 500k – 1M" /></label>
            <label className="it-contact__field"><span>Timeline (optional)</span><input type="text" placeholder="e.g. 2–3 months" /></label>
          </div>
          <div className="it-contact__row it-contact__row--full">
            <label className="it-contact__field"><span>Tell Us About Your Project</span><textarea rows={5} placeholder="Describe your project..." /></label>
          </div>
          <button type="submit" className="it-btn it-btn--primary it-contact__submit">
            <span>Send Project Inquiry</span>
            <svg className="it-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </button>
        </motion.form>
      </div>
    </section>
  );
}