const ITEMS = [
  'Bug fixing', 'Updates', 'Feature improvements', 'Performance',
  'Security updates', 'Content changes', 'Technical support', 'Future development'
];

export default function Support() {
  return (
    <section className="it-section it-section--soft">
      <div className="it-container it-sup__grid">
        <div>
          <span className="it-kicker">Support</span>
          <h2 className="it-display it-d-lg it-sup__title">
            We Don&apos;t Stop <em style={{ color: 'var(--blue)', fontStyle: 'normal' }}>at Launch.</em>
          </h2>
          <p className="it-lead">
            A digital product needs ongoing care. We can support improvements, updates, fixes and
            future development based on the project requirements.
          </p>
        </div>

        <div className="it-sup__list">
          {ITEMS.map(x => (
            <div key={x} className="it-sup__item">
              <span className="it-sup__check">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="m5 12 5 5L20 7"/>
                </svg>
              </span>
              {x}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}