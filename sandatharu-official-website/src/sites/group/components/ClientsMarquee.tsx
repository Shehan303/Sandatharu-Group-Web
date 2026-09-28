import Marquee from '../../../shared/components/Marquee';
import './clients.css';

const CLIENTS = [
  'CEYLON AGRO', 'HILLTOP RESORTS', 'NORTHWAY LOGISTICS', 'KANDY HOTELS',
  'LANKA COCONUT', 'AURORA TECH', 'ROYAL TOURS', 'GREENFIELD EXPORTS'
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

      <Marquee speed={40}>
        <div className="clients__row">
          {CLIENTS.map(c => (
            <div key={c} className="clients__chip">{c}</div>
          ))}
        </div>
      </Marquee>

      <Marquee speed={48} reverse>
        <div className="clients__row clients__row--alt">
          {CLIENTS.slice().reverse().map(c => (
            <div key={c + '2'} className="clients__chip clients__chip--soft">{c}</div>
          ))}
        </div>
      </Marquee>
    </section>
  );
}