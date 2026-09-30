import { useState } from 'react';
import { FAQS } from '../data/itData';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="it-section it-faq">
      <div className="it-container">
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
          <span className="it-kicker">FAQ</span>
          <h2 className="it-display it-d-lg" style={{ marginTop: 14 }}>
            Clear Answers <em className="it-gradient-text" style={{ fontStyle: 'normal' }}>Before We Start.</em>
          </h2>
        </div>

        <div className="it-faq__list">
          {FAQS.map((f, i) => (
            <div key={f.q} className={`it-faq__item ${open === i ? 'is-open' : ''}`}>
              <button className="it-faq__q" onClick={() => setOpen(open === i ? null : i)}>
                <span>{f.q}</span>
                <span className="it-faq__icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </span>
              </button>
              <div className="it-faq__a">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}