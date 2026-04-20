import React from 'react';
import { Globe, ChevronDown, Network } from 'lucide-react';
import './App.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo-container">
      <div className="logo-icon">A</div>
      <div className="logo-text">
        <span className="logo-title">KFINTECH</span>
        <span className="logo-subtitle">Experience Transformation</span>
      </div>
    </div>
    
    <ul className="nav-links">
      <li className="nav-link">Solutions</li>
      <li className="nav-link">Products</li>
      <li className="nav-link">About Us</li>
      <li className="nav-link">Portfolio Companies</li>
    </ul>

    <div className="secondary-links">
      <span className="secondary-link">Careers</span>
      <span className="secondary-link">Blogs</span>
      <span className="secondary-link">Shareholder Relations</span>
      <span className="secondary-link">Contact Us</span>
      
      <div className="lang-selector">
        <Globe size={18} color="#fff" />
        <ChevronDown size={16} color="#fff" />
      </div>
    </div>
  </nav>
);

const TriangleGraphic1 = () => (
  <div className="graphic-half">
    <svg viewBox="0 0 100 100" className="triangle-graphic">
      <defs>
        <linearGradient id="cyanBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="100%" stopColor="#0055FF" />
        </linearGradient>
      </defs>
      <polygon points="50,10 90,90 10,90" fill="none" stroke="url(#cyanBlue)" strokeWidth="4" strokeLinejoin="round" />
      <polygon points="53,20 86,85 20,85" fill="none" stroke="#00A3FF" strokeWidth="2" strokeLinejoin="round" />
    </svg>
    <div className="floating-icon">
      <Network size={64} color="#00A3FF" strokeWidth={1.5} />
    </div>
  </div>
);

const TriangleGraphic2 = () => (
  <div className="graphic-half">
    <svg viewBox="0 0 100 100" className="triangle-graphic">
      <defs>
        <linearGradient id="blueDark" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0055FF" />
          <stop offset="100%" stopColor="#00E5FF" />
        </linearGradient>
      </defs>
      <polygon points="50,10 90,90 10,90" fill="none" stroke="url(#blueDark)" strokeWidth="6" strokeLinejoin="round" style={{ transformOrigin: 'center', transform: 'rotate(180deg)' }} />
    </svg>
    <div className="floating-icon">
      <div style={{ color: '#00A3FF', fontSize: '2rem', fontWeight: 'bold' }}>_ _ _</div>
    </div>
  </div>
);

function App() {
  return (
    <div className="app">
      <Navbar />
      
      <div className="container">
        {/* Section 1 */}
        <div className="split-section">
          <div className="content-half">
            <h1 className="section-topic">Why KFintech?</h1>
            <h2 className="section-title">Secure Hyperscale Platform</h2>
            <p className="section-desc">
              KFintech's asset management platforms are the leading investor and Issuer servicing platforms. Our platforms are highly resilient, secure and scalable even as they are built on mobile-first micro services architecture driven and cloud-ready frameworks. KFintech has country specific platforms for asset classes of Mutual Funds, ETFs, Alternatives and Pensions for investor servicing & equities and bonds for issuer servicing. KFintech platforms and data are hosted in Tier IV data centers.
            </p>
          </div>
          <TriangleGraphic1 />
        </div>

        {/* Section 2 */}
        <div className="split-section reverse">
          <div className="content-half">
            <h2 className="section-title">XAAS - Everything as a Service</h2>
            <p className="section-desc">
              KFintech's vision is to be the most preferred and proactive solutions provider for investment managers and intermediaries enabling differentiated growth. Leveraging software and services model, KFintech delivers to all the services an asset manager needs – Fund accounting & administration, Investor servicing (Transfer Agency), Digital stack (mobility, analytics, social & cloud for infrastructure), CRM solution, Compliance, physical infrastructure (branches) amongst others. With a comprehensive array of services delivered end to end by KFintech, the asset managers can focus and outperform markets through superior investment management.
            </p>
          </div>
          <TriangleGraphic2 />
        </div>
      </div>
    </div>
  );
}

export default App;
