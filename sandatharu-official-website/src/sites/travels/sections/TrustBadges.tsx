export default function TrustBadges() {
  return (
    <section className="t-trust">
      <div className="t-container">
        <div className="t-trust__grid">
          {[
            {
              t: 'Best Price Guarantee',
              d: 'Competitive rates — no hidden fees, no surprises.',
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2 4 5v6c0 5 3.4 9 8 10 4.6-1 8-5 8-10V5z"/><path d="m9 12 2 2 4-4"/></svg>
            },
            {
              t: 'Free Cancellation',
              d: 'Cancel or reschedule your booking anytime.',
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>
            },
            {
              t: 'Wide Vehicle Range',
              d: 'Sedans, SUVs, vans, buses and luxury vehicles.',
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 13h14l-1.5-5h-11z"/><circle cx="8" cy="17" r="2"/><circle cx="16" cy="17" r="2"/></svg>
            },
            {
              t: '24/7 Support',
              d: 'Reach us any time before or during your trip.',
              icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 15a2 2 0 0 1-2 2h-1v-3h3zM3 15a2 2 0 0 0 2 2h1v-3H3z"/><path d="M3 14a9 9 0 0 1 18 0"/></svg>
            }
          ].map(x => (
            <div key={x.t} className="t-trust__item">
              <div className="t-trust__icon">{x.icon}</div>
              <div>
                <h3 className="t-trust__t">{x.t}</h3>
                <p className="t-trust__d">{x.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}