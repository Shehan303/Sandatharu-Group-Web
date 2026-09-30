import { Link } from 'react-router-dom';

export default function VehicleSearch() {
  return (
    <section className="t-vsearch">
      <div className="t-container">
        <div className="t-vsearch__card">
          {/* Tabs */}
          <div className="t-vsearch__tabs">
            <button className="t-vsearch__tab is-active">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 13h14l-1.5-5h-11z"/><circle cx="8" cy="17" r="2"/><circle cx="16" cy="17" r="2"/>
              </svg>
              <span>Daily Hire</span>
            </button>
            <button className="t-vsearch__tab">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>
              </svg>
              <span>Multi-Day</span>
            </button>
            <button className="t-vsearch__tab">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>
              </svg>
              <span>Airport Transfer</span>
            </button>
            <button className="t-vsearch__tab">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h.01M15 9h.01M9 13h.01M15 13h.01M9 17h.01M15 17h.01"/>
              </svg>
              <span>Corporate</span>
            </button>
          </div>

          {/* Fields */}
          <div className="t-vsearch__fields">
            <label className="t-vsearch__field">
              <span>Pickup Location</span>
              <div className="t-vsearch__input">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-7.6 8-13a8 8 0 1 0-16 0c0 5.4 8 13 8 13z"/><circle cx="12" cy="9" r="3"/>
                </svg>
                <input type="text" placeholder="Airport, city or hotel" />
              </div>
            </label>

            <label className="t-vsearch__field">
              <span>Pickup Date</span>
              <div className="t-vsearch__input">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>
                </svg>
                <input type="date" />
              </div>
            </label>

            <label className="t-vsearch__field">
              <span>Drop-off Date</span>
              <div className="t-vsearch__input">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>
                </svg>
                <input type="date" />
              </div>
            </label>

            <label className="t-vsearch__field">
              <span>Vehicle Type</span>
              <div className="t-vsearch__input t-vsearch__input--select">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 13h14l-1.5-5h-11z"/><circle cx="8" cy="17" r="2"/><circle cx="16" cy="17" r="2"/>
                </svg>
                <select defaultValue="">
                  <option value="" disabled>Any vehicle</option>
                  <option>Sedan</option>
                  <option>SUV</option>
                  <option>Van</option>
                  <option>Bus</option>
                  <option>Luxury</option>
                </select>
              </div>
            </label>

            <Link to="/travels/vehicles" className="t-btn t-btn--sunset t-vsearch__btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>
              </svg>
              <span>Search</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}