
const SUPPLIERS = [
  'Ceylon Coconut Collective', 'West Coast Growers', 'Highland Harvesters',
  'North Western Processors', 'South Coast Supply Co', 'Central Sorters',
  'Kurunegala Shell Network', 'Coastal Collectors Co'
];

const CLIENTS = [
  'Global Charcoal Buyers', 'Industrial Suppliers', 'Export Partners',
  'Hospitality Sector', 'Agricultural Distributors', 'Manufacturing Partners',
  'Energy Sector Buyers', 'Retail Distributors'
];

export default function Partners() {
  return (
    <section className="coco-partners">
      <div className="coco-partners__head">
        <span className="c-kicker">Supply Relationships</span>
        <h2 className="c-display c-d-lg coco-partners__title">
          Built from <em className="c-d-em">strong supply relationships.</em>
        </h2>
        <p className="c-lead" style={{ margin: '20px auto 0', textAlign: 'center' }}>
          Reliable products begin with reliable supply relationships. We aim to develop long-term
          connections with coconut resource collectors, suppliers and business partners.
        </p>
      </div>

      {/* Suppliers marquee (left) */}
      <div style={{ overflow: 'hidden', marginBottom: 20 }}>
        <div className="coco-partners__row">
          {[...SUPPLIERS, ...SUPPLIERS].map((s, i) => (
            <div key={i} className="coco-partners__chip">
              <span className="coco-partners__dot" />
              {s}
            </div>
          ))}
        </div>
      </div>

      {/* Clients marquee (right) */}
      <div style={{ overflow: 'hidden' }}>
        <div className="coco-partners__row is-rev">
          {[...CLIENTS, ...CLIENTS].map((c, i) => (
            <div key={i} className="coco-partners__chip" style={{ background: 'var(--shell)' }}>
              <span className="coco-partners__dot" style={{ background: 'var(--forest)' }} />
              {c}
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '50px 20px 0', color: 'var(--muted)', fontSize: '0.82rem' }}>
        <em>Actual partner and client logos can be added as relationships are confirmed.</em>
      </div>
    </section>
  );
}