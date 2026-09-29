const ITEMS = [
  { t: 'Respect Local Culture', d: 'Travel with awareness of local traditions and customs.' },
  { t: 'Support Local Businesses', d: 'Choose suppliers and partners who share our values.' },
  { t: 'Reduce Waste', d: 'Avoid unnecessary waste during journeys.' },
  { t: 'Respect Wildlife', d: 'Follow responsible wildlife viewing practices.' },
  { t: 'Protect Environments', d: 'Help protect the natural places we visit.' },
  { t: 'Travel Responsibly', d: 'Every journey is a chance to do better.' }
];

export default function Responsible() {
  return (
    <section className="t-section">
      <div className="t-container">
        <div style={{ maxWidth: 720, marginBottom: 60 }}>
          <span className="t-kicker">Responsible Travel</span>
          <h2 className="t-display t-d-lg" style={{ marginTop: 12 }}>Travel With <em style={{ color: 'var(--ocean)', fontStyle: 'normal' }}>Respect.</em></h2>
          <p className="t-lead" style={{ marginTop: 20 }}>
            Travelling responsibly means respecting the environment, local communities, culture
            and places we visit.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {ITEMS.map(x => (
            <div key={x.t} style={{ padding: '26px 24px', background: 'var(--sand)', borderRadius: 'var(--r-lg)', borderLeft: '3px solid var(--ocean)' }}>
              <h3 className="t-alt" style={{ fontSize: '1.05rem', color: 'var(--navy)', marginBottom: 8 }}>{x.t}</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--muted)', margin: 0, lineHeight: 1.6 }}>{x.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}