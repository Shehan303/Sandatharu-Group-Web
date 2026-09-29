export default function Contact() {
  return (
    <section className="t-contact" id="contact">
      <div className="t-contact__inner">
        <span className="t-kicker" style={{ color: 'var(--sky)' }}>Travel Inquiry</span>
        <h2 className="t-display t-d-lg" style={{ marginTop: 12, color: '#fff' }}>
          Ready to <em style={{ color: 'var(--sunset)', fontStyle: 'normal' }}>Start Your Journey?</em>
        </h2>
        <p className="t-lead" style={{ color: 'rgba(255,255,255,.72)', margin: '20px auto 0', textAlign: 'center' }}>
          Tell us where you want to go, how you want to travel and what you need. We&apos;ll help
          you plan the next step.
        </p>

        <form className="t-contact__form t-custom__form" onSubmit={e => e.preventDefault()}>
          <div className="t-custom__row">
            <label className="t-custom__field"><span>Full Name</span><input type="text" placeholder="Full name" /></label>
            <label className="t-custom__field"><span>Email</span><input type="email" placeholder="you@email.com" /></label>
          </div>
          <div className="t-custom__row">
            <label className="t-custom__field"><span>Phone / WhatsApp</span><input type="tel" placeholder="+94 ..." /></label>
            <label className="t-custom__field"><span>Country</span><input type="text" placeholder="Country" /></label>
          </div>
          <div className="t-custom__row">
            <label className="t-custom__field"><span>Travel Date</span><input type="date" /></label>
            <label className="t-custom__field"><span>Number of Travellers</span><input type="number" min={1} placeholder="2" /></label>
          </div>
          <div className="t-custom__row t-custom__row--full">
            <label className="t-custom__field">
              <span>Inquiry Type</span>
              <select defaultValue="">
                <option value="" disabled>What is this about?</option>
                <option>Vehicle Hire</option>
                <option>Airport Transfer</option>
                <option>Tour</option>
                <option>Custom Journey</option>
                <option>Group Transport</option>
                <option>Corporate Travel</option>
                <option>Other</option>
              </select>
            </label>
          </div>
          <div className="t-custom__row t-custom__row--full">
            <label className="t-custom__field"><span>Message</span><textarea rows={4} placeholder="Tell us about your journey..." /></label>
          </div>
          <button type="submit" className="t-btn t-btn--sunset t-custom__submit">
            <span>Send Travel Inquiry</span>
            <svg className="t-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}