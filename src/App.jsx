import React from 'react';
import { Globe, ChevronDown, Network } from 'lucide-react';
import './App.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="left-nav">
      <div className="logo-container">
        <img src="https://kfintech.com/new-assets/images/logo/kfintech-white-tagline.svg" alt="KFintech Logo" className="logo-img" />
      </div>

      <ul className="nav-links">
        <li className="nav-link">Solutions</li>
        <li className="nav-link">Products</li>
        <li className="nav-link">About Us</li>
        <li className="nav-link">Portfolio Companies</li>
      </ul>
    </div>

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
    <img src="https://kfintech.com/new-assets/images/logo-shape.svg" alt="Triangle Graphic" className="triangle-graphic" />
    <div className="floating-icon">
      <Network size={54} color="#00A3FF" strokeWidth={2} />
    </div>
  </div>
);

const TriangleGraphic2 = () => (
  <div className="graphic-half">
    <img src="https://kfintech.com/new-assets/images/logo-shape.svg" alt="Triangle Graphic" className="triangle-graphic" />
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
