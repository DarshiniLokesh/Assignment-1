import React from 'react';
import { Globe, ChevronDown, Network, Phone, MessageCircle, Mail, MessageSquare } from 'lucide-react';
import { FaXTwitter, FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa6';
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
      
      <Footer />
      <ChatWidget />
    </div>
  );
}

const Footer = () => (
  <footer className="footer">
    <div className="footer-top">
      <div className="footer-col brand-col">
        <img src="https://kfintech.com/new-assets/images/logo/kfintech-white-tagline.svg" alt="KFintech Logo" className="footer-logo" />
        <p className="footer-desc">
          KFintech serves the mission-critical needs of asset managers with clients spanning mutual funds, AIFs (alternative investments), pension, wealth managers and corporates in India and abroad. The company provides SaaS based end-to-end transaction management, channel management, compliance solutions, data analytics and various other digital services to asset managers across segments, as well as outsourcing services for global players.
        </p>
      </div>

      <div className="footer-col">
        <h4 className="footer-heading">ABOUT US</h4>
        <ul className="footer-links">
          <li>About KFintech</li>
          <li>Careers</li>
          <li>Contact Us</li>
        </ul>
        <h4 className="footer-heading">MUTUAL FUND SOLUTIONS</h4>
        <ul className="footer-links">
          <li>Distributor Solutions</li>
          <li>Channel Partner Solutions</li>
          <li>Mutual Fund Investor Solutions</li>
          <li>Korp Connect</li>
          <li>RIA Solutions</li>
          <li>AMC Solutions</li>
          <li>Financial Solutions</li>
        </ul>
      </div>

      <div className="footer-col">
        <h4 className="footer-heading">CORPORATE REGISTRY</h4>
        <ul className="footer-links">
          <li>Karisma</li>
          <li>Evoting</li>
          <li>Fintrak</li>
          <li>Kprism</li>
          <li>Kreation</li>
        </ul>
        <h4 className="footer-heading">NATIONAL PENSION SYSTEM</h4>
        <ul className="footer-links">
          <li>NPS</li>
          <li>CRA Login</li>
        </ul>
        <h4 className="footer-heading">GLOBAL BUSINESS SOLUTIONS</h4>
        <ul className="footer-links">
          <li>Mortgage Solutions</li>
          <li>Investors Solutions</li>
          <li>Legal Solutions</li>
          <li>Finance & Accounting Solutions</li>
        </ul>
      </div>

      <div className="footer-col">
        <h4 className="footer-heading">OTHER SOLUTIONS</h4>
        <ul className="footer-links">
          <li>GFS</li>
          <li>PWM</li>
          <li>PMS</li>
          <li>AIF</li>
        </ul>
        <h4 className="footer-heading">LEGAL & PRIVACY</h4>
        <ul className="footer-links">
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>QRTA SEBI Guidelines</li>
          <li>Disclosures</li>
        </ul>
        <h4 className="footer-heading">GET IN TOUCH</h4>
        <ul className="footer-contact">
          <li><Phone size={14} /> +91-40-67162222/+91-40-7961 1000</li>
          <li><MessageCircle size={14} /> 91000 94099</li>
          <li><Mail size={14} /> einward.ris@kfintech.com</li>
          <li><Mail size={14} /> investorsupport.mfs@kfintech.com</li>
          <li><Mail size={14} /> kfinkart.support@kfintech.com</li>
          <li><Mail size={14} /> kfinkart.distsupport@kfintech.com</li>
        </ul>
      </div>
    </div>
    
    <div className="footer-bottom">
      <div className="footer-copyright">
        © Copyright KFintech 2026 | All Rights Reserved.
      </div>
      <div className="footer-social">
        <span className="social-text">CONNECT WITH US</span>
        <div className="social-icons">
          <span className="icon-box"><FaXTwitter size={14} /></span>
          <span className="icon-box"><FaInstagram size={14} /></span>
          <span className="icon-box"><FaFacebookF size={14} /></span>
          <span className="icon-box"><FaLinkedinIn size={14} /></span>
          <span className="icon-box"><FaYoutube size={14} /></span>
        </div>
      </div>
    </div>
  </footer>
);

const ChatWidget = () => (
  <div className="chat-widget">
    <div className="chat-bubble">
      <span className="chat-title">We're Online!</span>
      <span className="chat-text">How may I help you today?</span>
    </div>
    <div className="chat-icon">
      <MessageSquare size={24} color="#fff" />
    </div>
  </div>
);

export default App;
