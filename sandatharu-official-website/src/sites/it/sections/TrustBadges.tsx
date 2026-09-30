export default function TrustBadges() {
  return (
    <section className="it-trust">
      <div className="it-container">
        <div className="it-trust__grid">
          {[
            { t: 'Business First', d: 'We solve business problems, not just build features.',
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 21V7l9-4 9 4v14M9 21V12h6v9"/></svg> },
            { t: 'Design + Code', d: 'UI/UX thinking and engineering under one roof.',
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/></svg> },
            { t: 'Custom Solutions', d: 'Built around your workflow — not a template.',
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 0 1 0 2.8 2 2 0 0 1-2.8 0l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 0 1-2.8 0 2 2 0 0 1 0-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 0 1 0-2.8 2 2 0 0 1 2.8 0l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1A1.7 1.7 0 0 0 15 4.6a1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 0 1 2.8 0 2 2 0 0 1 0 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg> },
            { t: 'Long-Term Support', d: 'We don\'t stop at launch — we keep improving.',
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 11.1V12a10 10 0 1 1-5.9-9.1M22 4l-10 10-3-3"/></svg> }
          ].map(x => (
            <div key={x.t} className="it-trust__item">
              <div className="it-trust__icon">{x.icon}</div>
              <div>
                <h3 className="it-trust__t">{x.t}</h3>
                <p className="it-trust__d">{x.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}