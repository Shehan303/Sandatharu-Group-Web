const REVIEWS = [
  { n: 'Daniel K.', c: 'UK', j: 'Family Trip', q: 'Fantastic tour — our driver knew every route and was so helpful with the kids. Highly recommend.' },
  { n: 'Ayumi T.', c: 'Japan', j: 'Private Hire', q: 'The vehicle was clean, the driver was punctual and the whole trip felt very smooth.' },
  { n: 'Marcus S.', c: 'Germany', j: 'Airport Transfer', q: 'Booked an airport transfer last minute — everything worked perfectly. Will book again.' }
];

export default function Testimonials() {
  return (
    <section className="t-section t-section--sand">
      <div className="t-container">
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 60px' }}>
          <span className="t-kicker" style={{ justifyContent: 'center' }}>Testimonials</span>
          <h2 className="t-display t-d-lg" style={{ marginTop: 12 }}>Stories From <em style={{ color: 'var(--ocean)', fontStyle: 'normal' }}>Our Travellers.</em></h2>
        </div>
        <div className="t-test__grid">
          {REVIEWS.map(r => (
            <div key={r.n} className="t-test">
              <div className="t-test__stars">★★★★★</div>
              <p className="t-test__q">"{r.q}"</p>
              <div className="t-test__author">
                <div className="t-test__avatar">{r.n.charAt(0)}</div>
                <div className="t-test__info">
                  <span className="t-test__name">{r.n}</span>
                  <span className="t-test__meta">{r.c} · {r.j}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}