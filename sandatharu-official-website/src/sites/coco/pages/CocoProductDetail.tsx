import { useParams, Link, Navigate } from 'react-router-dom';
import CocoLayout from '../components/CocoLayout';
import { COCO_PRODUCTS } from '../data/cocoData';

export default function CocoProductDetail() {
  const { id } = useParams();
  const product = COCO_PRODUCTS.find(p => p.id === id);
  if (!product) return <Navigate to="/coco/products" replace />;

  return (
    <CocoLayout>
      <section className="coco-pagehero" style={{ minHeight: '50vh' }}>
        <div className="coco-pagehero__bg" style={{ backgroundImage: `url(${product.img})` }} />
        <div className="coco-pagehero__veil" />
        <div className="coco-pagehero__inner">
          <div className="coco-pagehero__crumb">
            <Link to="/coco">Coco</Link> / <Link to="/coco/products">Products</Link> / {product.name}
          </div>
          <h1 className="coco-pagehero__title">{product.name}</h1>
          <p className="coco-pagehero__lead">{product.short}</p>
        </div>
      </section>

      <section className="c-section">
        <div className="c-container" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 60 }}>
          <div className="c-photo c-photo--land">
            <img src={product.img} alt={product.name} />
          </div>

          <div>
            <span className="c-kicker">{product.tag}</span>
            <h2 className="c-display c-d-md" style={{ marginTop: 16 }}>{product.name}</h2>
            <p className="c-lead" style={{ marginTop: 20 }}>{product.desc}</p>

            <div style={{ marginTop: 30, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <div>
                <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--moss)', fontWeight: 600, margin: '0 0 12px' }}>Supply Formats</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {product.formats.map(f => (
                    <li key={f} style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>• {f}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--moss)', fontWeight: 600, margin: '0 0 12px' }}>Applications</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {product.applications.map(a => (
                    <li key={a} style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>• {a}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{ marginTop: 30, padding: '20px 24px', background: 'var(--moss-soft)', borderRadius: 'var(--r-md)', borderLeft: '3px solid var(--moss)' }}>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--forest)' }}>
                <strong>Technical specifications available upon request.</strong>
              </p>
            </div>

            <div style={{ marginTop: 30 }}>
              <Link to="/coco/contact" className="c-btn c-btn--primary">
                <span>Request This Product</span>
                <svg className="c-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </CocoLayout>
  );
}