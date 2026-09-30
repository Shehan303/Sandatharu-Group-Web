import { Link } from 'react-router-dom';
import ITLayout from '../components/ItLayout';
import ITPageHero from '../components/ITPageHero';
import { PROCESS } from '../data/itData';

export default function ITProcess() {
  return (
    <ITLayout>
      <ITPageHero
        num="05 / PROCESS"
        crumb="Process"
        kicker="How We Build"
        title={<>A Process <em className="it-gradient-text" style={{ fontStyle: 'normal' }}>You Can Trust.</em></>}
        lead="Seven clear stages from first conversation to long-term support — so you always know what's happening and why."
        image="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=2000&q=85&auto=format&fit=crop"
        stats={[
          { n: '7', l: 'Clear Stages' },
          { n: '100%', l: 'Transparent' },
          { n: '1', l: 'Dedicated Team' },
          { n: '∞', l: 'Post-Launch Support' }
        ]}
      />

      {/* Vertical process detail */}
      <section className="it-section">
        <div className="it-container">
          <div style={{ maxWidth: 720, marginBottom: 50 }}>
            <span className="it-kicker">Step by Step</span>
            <h2 className="it-display it-d-lg" style={{ marginTop: 14 }}>
              Seven Stages. <em className="it-gradient-text" style={{ fontStyle: 'normal' }}>One Journey.</em>
            </h2>
          </div>

          <div className="it-pv">
            {PROCESS.map((p, i) => (
              <div key={p.n} className="it-pv__row">
                <span className="it-pv__num">{p.n}</span>
                <h3 className="it-pv__t">{p.t}</h3>
                <p className="it-pv__d">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why this process */}
      <section className="it-section it-section--dark">
        <div className="it-grid-bg" />
        <div className="it-container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: 720, marginBottom: 50 }}>
            <span className="it-kicker" style={{ color: 'var(--cyan-2)' }}>Why It Works</span>
            <h2 className="it-display it-d-lg" style={{ marginTop: 14, color: '#fff' }}>
              Clarity at <em className="it-gradient-text" style={{ fontStyle: 'normal' }}>Every Step.</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
            {[
              { t: 'No Surprises', d: 'You always know what stage we\'re in, what\'s next, and what we need from you.' },
              { t: 'Realistic Timelines', d: 'We plan scope carefully so timelines are honest, not optimistic.' },
              { t: 'Ongoing Communication', d: 'Regular updates, shared documents and open questions throughout.' },
              { t: 'Design Before Code', d: 'We prototype and get alignment before writing production code.' },
              { t: 'Built to Maintain', d: 'Clean code, documented systems, ready for future development.' },
              { t: 'Support After Launch', d: 'The relationship continues — bug fixes, updates and new features.' }
            ].map((x, i) => (
              <div key={x.t} style={{
                padding: '26px 24px',
                background: 'rgba(255,255,255,.04)',
                border: '1px solid rgba(96,165,250,.14)',
                borderRadius: 'var(--r-lg)'
              }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600, color: '#fff', margin: '0 0 8px' }}>{x.t}</h3>
                <p style={{ color: 'rgba(255,255,255,.65)', fontSize: '0.88rem', margin: 0, lineHeight: 1.6 }}>{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="it-section">
        <div className="it-container" style={{ textAlign: 'center', maxWidth: 780, margin: '0 auto' }}>
          <h2 className="it-display it-d-lg">
            Start With <em className="it-gradient-text" style={{ fontStyle: 'normal' }}>a Conversation.</em>
          </h2>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 30 }}>
            <Link to="/it/contact" className="it-btn it-btn--primary">
              <span>Start a Project</span>
              <svg className="it-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
            <Link to="/it/services" className="it-btn it-btn--outline"><span>View Services</span></Link>
          </div>
        </div>
      </section>
    </ITLayout>
  );
}