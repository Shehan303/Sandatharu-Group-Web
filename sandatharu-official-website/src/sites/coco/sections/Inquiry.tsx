import { motion } from 'framer-motion';
import { COCO_PRODUCTS } from '../data/cocoData';

export default function Inquiry() {
  return (
    <section className="coco-inq" id="inquiry">
      <div className="c-container">
        <div className="coco-inq__head">
          <span className="c-kicker">Business Inquiry</span>
          <h2 className="c-display c-d-lg coco-inq__title">
            Tell us what <em>you need.</em>
          </h2>
        </div>

        <motion.form
          className="coco-inq__form"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          onSubmit={e => e.preventDefault()}
        >
          <div className="coco-inq__row">
            <label className="coco-inq__field">
              <span>Full Name</span>
              <input type="text" placeholder="Your full name" />
            </label>
            <label className="coco-inq__field">
              <span>Company Name</span>
              <input type="text" placeholder="Company / organization" />
            </label>
          </div>

          <div className="coco-inq__row">
            <label className="coco-inq__field">
              <span>Country</span>
              <input type="text" placeholder="Country" />
            </label>
            <label className="coco-inq__field">
              <span>Email</span>
              <input type="email" placeholder="you@company.com" />
            </label>
          </div>

          <div className="coco-inq__row">
            <label className="coco-inq__field">
              <span>Phone / WhatsApp</span>
              <input type="tel" placeholder="+94 ..." />
            </label>
            <label className="coco-inq__field">
              <span>Product Interested In</span>
              <select defaultValue="">
                <option value="" disabled>Select product</option>
                {COCO_PRODUCTS.map(p => <option key={p.id}>{p.name}</option>)}
                <option>Other</option>
              </select>
            </label>
          </div>

          <div className="coco-inq__row">
            <label className="coco-inq__field">
              <span>Required Quantity</span>
              <input type="text" placeholder="e.g. 20 MT / month" />
            </label>
            <label className="coco-inq__field">
              <span>Supply Type</span>
              <select defaultValue="">
                <option value="" disabled>Select supply type</option>
                <option>One-Time</option>
                <option>Regular Supply</option>
                <option>Bulk Order</option>
              </select>
            </label>
          </div>

          <div className="coco-inq__row coco-inq__row--full">
            <label className="coco-inq__field">
              <span>Destination</span>
              <input type="text" placeholder="Port / city / country" />
            </label>
          </div>

          <div className="coco-inq__row coco-inq__row--full">
            <label className="coco-inq__field">
              <span>Message</span>
              <textarea rows={5} placeholder="Tell us about your requirements..." />
            </label>
          </div>

          <button type="submit" className="c-btn c-btn--primary coco-inq__submit">
            <span>Submit Business Inquiry</span>
            <svg className="c-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 6l6 6-6 6"/>
            </svg>
          </button>
        </motion.form>
      </div>
    </section>
  );
}