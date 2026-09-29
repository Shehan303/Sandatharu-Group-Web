import { Link } from 'react-router-dom';
import CocoLayout from '../components/CocoLayout';

export default function CocoAbout() {
  return (
    <CocoLayout>
      <section className="coco-pagehero">
        <div className="coco-pagehero__bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1591336462674-e0c5eb7a14b7?w=2000&q=85&auto=format&fit=crop)' }} />
        <div className="coco-pagehero__veil" />
        <div className="coco-pagehero__inner">
          <div className="coco-pagehero__crumb"><Link to="/coco">Coco</Link> / About</div>
          <h1 className="coco-pagehero__title">Coconut Resources.<br /><em>Connected Opportunities.</em></h1>
          <p className="coco-pagehero__lead">
            Sandatharu Coco Products is a Sri Lankan business focused on coconut-based resources
            and products — connecting local potential with wider markets.
          </p>
        </div>
      </section>

      <section className="c-section">
        <div className="c-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 60, alignItems: 'center' }}>
            <div className="c-photo c-photo--tall">
              <img src="https://images.unsplash.com/photo-1580984969071-a8da5656c2fb?w=1200&q=85&auto=format&fit=crop" alt="" />
            </div>
            <div>
              <span className="c-kicker">Our Story</span>
              <h2 className="c-display c-d-lg" style={{ marginTop: 16 }}>Built on Sri Lankan <em className="c-d-em">coconut resources.</em></h2>
              <p className="c-lead" style={{ marginTop: 20 }}>
                We work across sourcing, collection, sorting, processing and supply — creating
                connections between coconut resources and customers who require reliable products
                and materials.
              </p>
              <p className="c-lead" style={{ marginTop: 16 }}>
                Our approach is built around responsible resource utilization, organized supply
                and long-term business relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="c-section c-section--dark">
        <div className="c-container" style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
          <span className="c-kicker" style={{ color: 'var(--moss-2)' }}>Get Started</span>
          <h2 className="c-display c-d-lg" style={{ color: '#fff', marginTop: 16 }}>
            Let&apos;s create value <em className="c-d-em">together.</em>
          </h2>
          <div style={{ marginTop: 30 }}>
            <Link to="/coco/contact" className="c-btn c-btn--primary">
              <span>Contact Us</span>
              <svg className="c-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </CocoLayout>
  );
}