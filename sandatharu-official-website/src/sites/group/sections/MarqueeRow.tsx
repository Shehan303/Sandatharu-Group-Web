import Marquee from '../../../shared/components/Marquee';
import './marqueerow.css';

const CLIENTS = [
  'CEYLON AGRO', 'HILLTOP RESORTS', 'NORTHWAY LOGISTICS', 'KANDY HOTELS',
  'LANKA COCONUT', 'AURORA TECH', 'ROYAL TOURS', 'GREENFIELD EXPORTS'
];

const PARTNERS = [
  'PORT AUTHORITY', 'SL TOURISM', 'AGRO SUPPLY CO', 'DIGITAL CEYLON',
  'COLOMBO FREIGHT', 'HILL COUNTRY HOTELS', 'NATIONAL LOGISTICS', 'EXPORT HUB'
];

export default function MarqueeRow({ variant }: { variant: 'clients' | 'partners' }) {
  const isClients = variant === 'clients';
  const items = isClients ? CLIENTS : PARTNERS;
  const kicker = isClients ? 'Built Through Relationships' : 'Growing Together';
  const heading = isClients
    ? 'A GROWING NETWORK OF CLIENTS AND CUSTOMERS.'
    : 'STRONG PARTNERSHIPS. STRONGER OPPORTUNITIES.';
  const desc = isClients
    ? 'From customers and business partners to suppliers and service providers, every relationship contributes to the Sandatharu journey.'
    : 'We work with suppliers, collaborators, service providers and business partners to build reliable connections across our different business areas.';
  const accent = isClients ? 'var(--green)' : 'var(--blue)';

  return (
    <section className={`mrw ${isClients ? 'mrw--clients' : 'mrw--partners'}`}>
      <div className="container mrw__head">
        <div>
          <span className="k" style={{ color: accent }}>{kicker}</span>
          <h2 className="d d-lg mrw__title">{heading}</h2>
        </div>
        <p className="mrw__desc">{desc}</p>
      </div>

      {isClients ? (
        <>
          <Marquee speed={44}>
            <div className="mrw__row">
              {items.map((it, i) => (
                <div key={it} className={`mrw__chip mrw__chip--${i % 4}`}>{it}</div>
              ))}
            </div>
          </Marquee>
          <Marquee speed={56} reverse>
            <div className="mrw__row">
              {items.slice().reverse().map((it, i) => (
                <div key={it + 'b'} className={`mrw__chip mrw__chip--alt mrw__chip--${i % 4}`}>{it}</div>
              ))}
            </div>
          </Marquee>
        </>
      ) : (
        <Marquee speed={48}>
          <div className="mrw__row mrw__row--partners">
            {items.map(it => (
              <div key={it} className="mrw__partner">
                <span className="mrw__partner-bar" />
                <span>{it}</span>
              </div>
            ))}
          </div>
        </Marquee>
      )}
    </section>
  );
}