import { Link } from 'react-router-dom';

export default function ITFooter() {
  return (
    <footer className="itft">
      <div className="itft__inner">
        <div className="itft__top">
          <div>
            <img src="/logos/it-logo.svg" alt="Sandatharu IT Solutions" className="itft__logo" />
            <p className="itft__desc">
              We design and build digital solutions that help businesses, organizations
              and individuals turn ideas into useful technology.
            </p>
            <div className="itft__socials">
              <a href="#" aria-label="Facebook"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-9h3l1-4h-4V6.5c0-1 .3-1.7 1.7-1.7H17V1.1C16.7 1.1 15.6 1 14.4 1 11.6 1 9.5 2.7 9.5 5.8V9H6v4h3.5v9z"/></svg></a>
              <a href="#" aria-label="LinkedIn"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3 9h3v12H3zM10 9h3v1.6c.6-1 1.8-1.9 3.6-1.9 3 0 4.4 2 4.4 5V21h-3v-5.4c0-1.6-.6-2.7-2-2.7-1.3 0-2 .9-2 2.7V21h-3z"/></svg></a>
              <a href="#" aria-label="Instagram"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/></svg></a>
              <a href="#" aria-label="GitHub"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1 .1 1.6 1.1 1.6 1.1 1 1.6 2.5 1.2 3.1.9.1-.7.4-1.2.7-1.5-2.2-.2-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.8-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.7.7 1 1.6 1 2.7 0 3.9-2.4 4.8-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2z"/></svg></a>
            </div>
          </div>

          <div className="itft__col">
            <span className="itft__title">Services</span>
            <Link to="/it/services" className="itft__link">Software Development</Link>
            <Link to="/it/services" className="itft__link">Web Development</Link>
            <Link to="/it/services" className="itft__link">Mobile Apps</Link>
            <Link to="/it/services" className="itft__link">UI/UX Design</Link>
            <Link to="/it/services" className="itft__link">Automation</Link>
            <Link to="/it/services" className="itft__link">Cloud & Deployment</Link>
          </div>

          <div className="itft__col">
            <span className="itft__title">Solutions</span>
            <Link to="/it/solutions" className="itft__link">HR Systems</Link>
            <Link to="/it/solutions" className="itft__link">Inventory</Link>
            <Link to="/it/solutions" className="itft__link">Finance Systems</Link>
            <Link to="/it/solutions" className="itft__link">Document Mgmt</Link>
            <Link to="/it/solutions" className="itft__link">Workflow</Link>
            <Link to="/it/solutions" className="itft__link">Customer Mgmt</Link>
          </div>

          <div className="itft__col">
            <span className="itft__title">Company</span>
            <Link to="/it/about" className="itft__link">About</Link>
            <Link to="/it/process" className="itft__link">Process</Link>
            <Link to="/it/tech" className="itft__link">Technologies</Link>
            <Link to="/it/projects" className="itft__link">Projects</Link>
            <Link to="/it/industries" className="itft__link">Industries</Link>
            <Link to="/it/contact" className="itft__link">Contact</Link>
          </div>

          <div className="itft__col">
            <span className="itft__title">Contact</span>
            <p className="itft__link">Sri Lanka</p>
            <p className="itft__link">+94 XX XXX XXXX</p>
            <p className="itft__link">it@sandatharu.lk</p>
            <p className="itft__link" style={{ marginTop: 12, opacity: .55 }}>Mon–Sat · 9:00 – 18:00</p>
          </div>
        </div>

        <div className="itft__meta">
          <span>© {new Date().getFullYear()} Sandatharu IT Solutions. A Sandatharu Group Business.</span>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
            <Link to="/privacy" className="itft__link">Privacy</Link>
            <Link to="/terms" className="itft__link">Terms</Link>
            <Link to="/" className="itft__back">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M11 18l-6-6 6-6"/>
              </svg>
              Sandatharu Group
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}