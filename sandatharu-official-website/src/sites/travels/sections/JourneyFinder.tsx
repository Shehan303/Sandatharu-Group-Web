export default function JourneyFinder() {
  return (
    <section className="t-finder">
      <div className="t-container">
        <div className="t-finder__card">
          <label className="t-finder__field">
            <span>I Need</span>
            <select defaultValue="">
              <option value="" disabled>What do you need?</option>
              <option>Airport Transfer</option>
              <option>Vehicle Hire</option>
              <option>Day Tour</option>
              <option>Multi-Day Tour</option>
              <option>Private Driver</option>
              <option>Group Transport</option>
              <option>Corporate Transport</option>
              <option>Custom Journey</option>
            </select>
          </label>

          <label className="t-finder__field">
            <span>Travelling With</span>
            <select defaultValue="">
              <option value="" disabled>Who's travelling?</option>
              <option>Solo</option>
              <option>Couple</option>
              <option>Family</option>
              <option>Friends</option>
              <option>Group</option>
              <option>Corporate</option>
            </select>
          </label>

          <label className="t-finder__field">
            <span>Travel Date</span>
            <input type="date" />
          </label>

          <button className="t-btn t-btn--sunset t-finder__btn">
            <span>Find My Journey</span>
            <svg className="t-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}