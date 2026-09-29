export default function CustomJourney() {
  return (
    <section className="t-custom">
      <div
        className="t-custom__bg"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1566296611299-4a1a0d8b1e10?w=2000&q=85&auto=format&fit=crop)' }}
      />
      <div className="t-custom__inner">
        <span className="t-kicker" style={{ color: 'var(--sky)' }}>Custom Journey</span>
        <h2 className="t-display t-d-lg" style={{ marginTop: 12, color: '#fff' }}>
          Your Journey. <em style={{ color: 'var(--sunset)', fontStyle: 'normal' }}>Your Rules.</em>
        </h2>
        <p className="t-lead" style={{ color: 'rgba(255,255,255,.72)', margin: '20px auto 0', textAlign: 'center' }}>
          Tell us what you want to experience, where you want to go and how you want to travel.
        </p>

        <form className="t-custom__form" onSubmit={e => e.preventDefault()}>
          <div className="t-custom__row">
            <label className="t-custom__field"><span>Your Name</span><input type="text" placeholder="Full name" /></label>
            <label className="t-custom__field"><span>Email</span><input type="email" placeholder="you@email.com" /></label>
          </div>
          <div className="t-custom__row">
            <label className="t-custom__field"><span>Phone</span><input type="tel" placeholder="+94 ..." /></label>
            <label className="t-custom__field"><span>Travel Date</span><input type="date" /></label>
          </div>
          <div className="t-custom__row">
            <label className="t-custom__field"><span>Number of Travellers</span><input type="number" min={1} placeholder="2" /></label>
            <label className="t-custom__field">
              <span>Vehicle Preference</span>
              <select defaultValue="">
                <option value="" disabled>Select</option>
                <option>Sedan</option>
                <option>SUV</option>
                <option>Van</option>
                <option>Bus</option>
                <option>Luxury</option>
              </select>
            </label>
          </div>
          <div className="t-custom__row">
            <label className="t-custom__field"><span>Starting Location</span><input type="text" placeholder="Where from?" /></label>
            <label className="t-custom__field"><span>Destination</span><input type="text" placeholder="Where to?" /></label>
          </div>
          <div className="t-custom__row t-custom__row--full">
            <label className="t-custom__field"><span>Message</span><textarea rows={4} placeholder="Tell us about your journey..." /></label>
          </div>
          <button type="submit" className="t-btn t-btn--sunset t-custom__submit">
            <span>Create My Journey</span>
            <svg className="t-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}