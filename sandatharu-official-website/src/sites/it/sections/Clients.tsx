const CLIENTS = ['Innovate Co', 'Growth Labs', 'Harbor Group', 'Agro Link', 'BlueWave', 'NextGen'];
const PARTNERS = ['AWS', 'Vercel', 'Figma', 'GitHub', 'MongoDB', 'Firebase'];

export default function Clients() {
  return (
    <section className="it-section">
      <div className="it-container">
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 50px' }}>
          <span className="it-kicker">Clients & Partners</span>
          <h2 className="it-display it-d-lg" style={{ marginTop: 14 }}>
            Built Through <em className="it-gradient-text" style={{ fontStyle: 'normal' }}>Collaboration.</em>
          </h2>
        </div>
      </div>

      <div style={{ overflow: 'hidden', marginBottom: 16 }}>
        <div style={{ display: 'flex', gap: 16, width: 'max-content', animation: 'itMarquee 38s linear infinite' }}>
          {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((c, i) => (
            <div key={i} style={{
              padding: '20px 30px', background: '#fff', border: '1px solid var(--line)',
              borderRadius: 'var(--r-md)', whiteSpace: 'nowrap',
              fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 600, color: 'var(--ink)'
            }}>{c}</div>
          ))}
        </div>
      </div>

      <div style={{ overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: 12, width: 'max-content', animation: 'itMarquee 48s linear infinite reverse' }}>
          {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((c, i) => (
            <div key={i} style={{
              padding: '14px 26px', background: 'var(--bg-2)', border: '1px dashed var(--line-2)',
              borderRadius: 'var(--r-md)', whiteSpace: 'nowrap',
              fontFamily: 'var(--font-mono)', fontSize: '0.82rem', letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'var(--muted)'
            }}>{c}</div>
          ))}
        </div>
      </div>
    </section>
  );
}