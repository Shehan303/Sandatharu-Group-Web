import { Link } from 'react-router-dom';
import CocoLayout from '../components/CocoLayout';
import Inquiry from '../sections/Inquiry';
import Contact from '../sections/Contact';
import FinalCTA from '../sections/FinalCTA';

export default function CocoContact() {
  return (
    <CocoLayout>
      <section className="coco-pagehero">
        <div
          className="coco-pagehero__bg"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1550985616-10810253b84d?w=2000&q=85&auto=format&fit=crop)'
          }}
        />
        <div className="coco-pagehero__veil" />
        <div className="coco-pagehero__inner">
          <div className="coco-pagehero__crumb">
            <Link to="/coco">Coco</Link> / Contact
          </div>
          <h1 className="coco-pagehero__title">
            Let&apos;s Talk <em>Coconut Business.</em>
          </h1>
          <p className="coco-pagehero__lead">
            Whether you are looking for a product, exploring a supply relationship or
            interested in working with Sandatharu Coco Products, our team is ready to hear
            from you.
          </p>
        </div>
      </section>

      <Contact />
      <Inquiry />
      <FinalCTA />
    </CocoLayout>
  );
}