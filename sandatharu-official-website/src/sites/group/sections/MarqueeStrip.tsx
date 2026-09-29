import Marquee from '../../../shared/components/Marquee';
import './marqueestrip.css';

const WORDS = ['SUSTAINABLE PRODUCTS', 'TRAVEL EXPERIENCES', 'DIGITAL SOLUTIONS', 'SRI LANKAN ROOTS'];

export default function MarqueeStrip() {
  return (
    <section className="ms">
      <Marquee speed={46}>
        <div className="ms__row">
          {WORDS.map(w => (
            <span key={w} className="ms__word">
              {w}
              <i className="ms__dot" />
            </span>
          ))}
        </div>
      </Marquee>
      <div className="ms__band" />
      <Marquee speed={58} reverse>
        <div className="ms__row ms__row--thin">
          {['Ceylon Coco', 'Sandatharu Travels', 'Sandatharu IT', 'Est. Sri Lanka'].map(w => (
            <span key={w} className="ms__word ms__word--thin">{w}<i className="ms__dot" /></span>
          ))}
        </div>
      </Marquee>
    </section>
  );
}