import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { VEHICLES } from '../data/travelsData';

export default function VehicleShowcase() {
  const [idx, setIdx] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const v = VEHICLES[idx];

  const go = (n: number, dir: 'left' | 'right') => {
    setDirection(dir);
    setIdx((n + VEHICLES.length) % VEHICLES.length);
  };

  const next = () => go(idx + 1, 'right');
  const prev = () => go(idx - 1, 'left');

  // keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  return (
    <section
      className="showroom"
      id="vehicle-hire"
      style={{ ['--car-color' as any]: v.color }}
    >
      <div className="showroom__grid" aria-hidden />
      <div className="showroom__glow showroom__glow--l" aria-hidden />
      <div className="showroom__glow showroom__glow--r" aria-hidden />

      <div className="showroom__inner">
        {/* Header */}
        <div className="showroom__head">
          <div className="showroom__title-block">
            <span className="t-kicker">Vehicle Hire · Showroom</span>
            <h2 className="showroom__title">
              Pick Your <em>Ride.</em>
            </h2>
          </div>
          <div className="showroom__counter">
            <span className="showroom__counter-num">
              {String(idx + 1).padStart(2, '0')}
            </span>
            <span className="showroom__counter-total">
              / {String(VEHICLES.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Stage */}
        <div className="showroom__stage">
          <div className="showroom__display">
            <div className="showroom__ghost" aria-hidden>{v.name}</div>
            <div className="showroom__spotlight" />
            <div className="showroom__platform" />

            <div
              key={v.id}
              className={`showroom__car-wrap entering-${direction}`}
            >
              <img
                src={v.img}
                alt={v.name}
                className="showroom__car"
                onError={e => {
                  (e.currentTarget as HTMLImageElement).src =
                    'https://via.placeholder.com/900x500/0A1B3D/4DA3FF?text=' +
                    encodeURIComponent(v.name);
                }}
              />
            </div>

            <button
              className="showroom__arrow showroom__arrow--prev"
              onClick={prev}
              aria-label="Previous vehicle"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m15 6-6 6 6 6"/>
              </svg>
            </button>
            <button
              className="showroom__arrow showroom__arrow--next"
              onClick={next}
              aria-label="Next vehicle"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="m9 6 6 6-6 6"/>
              </svg>
            </button>
          </div>

          {/* Spec panel */}
          <aside className="showroom__spec">
            <span className="showroom__cat">{v.category}</span>
            <h3 className="showroom__name">{v.name}</h3>
            <p className="showroom__tagline">{v.tagline}</p>

            <div className="showroom__specs">
              <div className="showroom__spec-row">
                <span className="showroom__spec-label">Passengers</span>
                <span className="showroom__spec-val">{v.specs.passengers}</span>
              </div>
              <div className="showroom__spec-row">
                <span className="showroom__spec-label">Luggage</span>
                <span className="showroom__spec-val">{v.specs.luggage}</span>
              </div>
              <div className="showroom__spec-row">
                <span className="showroom__spec-label">Transmission</span>
                <span className="showroom__spec-val">{v.specs.transmission}</span>
              </div>
              <div className="showroom__spec-row">
                <span className="showroom__spec-label">Fuel</span>
                <span className="showroom__spec-val">{v.specs.fuel}</span>
              </div>
              <div className="showroom__spec-row">
                <span className="showroom__spec-label">A/C</span>
                <span className="showroom__spec-val">{v.specs.ac}</span>
              </div>
              <div className="showroom__spec-row">
                <span className="showroom__spec-label">Driver</span>
                <span className="showroom__spec-val">{v.specs.driver}</span>
              </div>
            </div>

            <div className="showroom__best">
              {v.bestFor.map(b => (
                <span key={b} className="showroom__best-chip">{b}</span>
              ))}
            </div>

            <div className="showroom__ctas">
              <Link to="/travels/contact" className="t-btn t-btn--sunset" style={{ padding: '12px 22px', fontSize: '0.8rem' }}>
                <span>Request This Vehicle</span>
                <svg className="t-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </Link>
            </div>
          </aside>
        </div>

        {/* Tile selector */}
        <div className="showroom__tiles">
          {VEHICLES.map((x, i) => (
            <button
              key={x.id}
              className={`showroom__tile ${i === idx ? 'is-active' : ''}`}
              style={{ ['--tile-color' as any]: x.color }}
              onClick={() => go(i, i > idx ? 'right' : 'left')}
            >
              <span className="showroom__tile-num">0{i + 1}</span>
              <span className="showroom__tile-name">{x.name}</span>
              <span className="showroom__tile-cat">{x.category}</span>
            </button>
          ))}
        </div>

        {/* dots */}
        <div className="showroom__dots">
          {VEHICLES.map((_, i) => (
            <button
              key={i}
              className={`showroom__dot ${i === idx ? 'is-active' : ''}`}
              onClick={() => go(i, i > idx ? 'right' : 'left')}
              aria-label={`Go to vehicle ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}