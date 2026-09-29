import Marquee from '../../../shared/components/Marquee';
import './clients.css';

const CLIENTS = [
  { name: 'CEYLON AGRO',      color: 'var(--green)' },
  { name: 'HILLTOP RESORTS',  color: 'var(--blue)' },
  { name: 'NORTHWAY LOGISTICS', color: 'var(--red)' },
  { name: 'KANDY HOTELS',     color: 'var(--yellow)' },
  { name: 'LANKA COCONUT',    color: 'var(--green)' },
  { name: 'AURORA TECH',      color: 'var(--blue)' },
  { name: 'ROYAL TOURS',      color: 'var(--yellow)' },
  { name: 'GREENFIELD EXPORTS', color: 'var(--green)' }
];

export default function ClientsMarquee() {
  return (
    <section className="section clients">
      <div className="container clients__head">
        <span className="kicker">Our Growing Client Network</span>
        <h2 className="display display-md clients__title">
          TRUSTED BY BUSINESSES ACROSS SRI LANKA.
        </h2>
      </div>

      <Marquee speed={42}>
        <div className="clients__row">
          {CLIENTS.map(c => (
            <div key={c.name} className="clients__chip" style={{ '--accent': c.color } as React.CSSProperties}>
              <span className="clients__bar" />
              {c.name}
            </div>
          ))}
        </div>
      </Marquee>

      <Marquee speed={52} reverse>
        <div className="clients__row">
          {CLIENTS.slice().reverse().map(c => (
            <div key={c.name + '2'} className="clients__chip clients__chip--soft">
              <span className="clients__bar" />
              {c.name}
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
}