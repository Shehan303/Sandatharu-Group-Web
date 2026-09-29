import { useState } from 'react';
import { FAQS } from '../data/travelsData';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="t-section t-faq">
      <div className="t-container">
        <div className="t-faq__head">
          <span className="t-kicker" style={{ justifyContent: 'center' }}>FAQ</span>
          <h2 className="t-display t-d-lg" style={{ marginTop: 12 }}>Common <em style={{ color: 'var(--ocean)', fontStyle: 'normal' }}>Questions.</em></h2>
        </div>
        <div className="t-faq__list">
          {FAQS.map((f, i) => (
            <div key={f.q} className={`t-faq__item ${open === i ? 'is-open' : ''}`}>
              <button className="t-faq__q" onClick={() => setOpen(open === i ? null : i)}>
                <span>{f.q}</span>
                <span className="t-faq__icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 5v14M5 12h14"/>
                  </svg>
                </span>
              </button>
              <div className="t-faq__a">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}