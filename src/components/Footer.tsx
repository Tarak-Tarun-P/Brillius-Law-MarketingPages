import React from 'react';
import './Footer.css';

interface FooterProps {
  onNavigate?: (page: 'home' | 'features' | 'solutions' | 'about' | 'contact' | 'legal-research' | 'ai-assistant' | 'document-analyzer' | 'ecourts' | 'law-library' | 'my-journal' | 'partners' | 'support') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (
    e: React.MouseEvent,
    page: 'home' | 'features' | 'solutions' | 'about' | 'contact' | 'legal-research' | 'ai-assistant' | 'document-analyzer' | 'ecourts' | 'law-library' | 'my-journal' | 'partners' | 'support'
  ) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(page);
    }
  };

  return (
    <footer className="footer-section" role="contentinfo">
      <div className="content-container">
        <div className="footer-inner">
          {/* Left Brand Area */}
          <div className="footer-brand">
            <a href="/" onClick={(e) => handleNav(e, 'home')}>
              <img
                src="/assets/brilliuslaw-logo.png"
                alt="BrilliusLaw"
                className="footer-logo"
                width="135"
                height="30"
              />
            </a>
            <p className="footer-tagline">
              Modern Legal Intelligence. Built for Indian Jurisprudence &amp; Enterprise Law.
            </p>
          </div>

          {/* 4 Balanced Navigation Columns */}
          <div className="footer-links-group">
            {/* 1. PRODUCT */}
            <div className="footer-links-col">
              <span className="footer-col-title">Product</span>
              <a href="/features" onClick={(e) => handleNav(e, 'features')}>
                Features
              </a>
              <a href="/solutions" onClick={(e) => handleNav(e, 'solutions')}>
                Solutions
              </a>
              <a href="/legal-research" onClick={(e) => handleNav(e, 'legal-research')}>
                Legal Research
              </a>
              <a href="/ai-assistant" onClick={(e) => handleNav(e, 'ai-assistant')}>
                AI Assistant
              </a>
              <a href="/document-analyzer" onClick={(e) => handleNav(e, 'document-analyzer')}>
                Document Analyzer
              </a>
              <a href="/ecourts-sync" onClick={(e) => handleNav(e, 'ecourts')}>
                eCourts Sync
              </a>
            </div>

            {/* 2. COMPANY */}
            <div className="footer-links-col">
              <span className="footer-col-title">Company</span>
              <a href="/about" onClick={(e) => handleNav(e, 'about')}>
                About Us
              </a>
              <a href="/partners" onClick={(e) => handleNav(e, 'partners')}>
                Partners
              </a>
              <a href="/contact" onClick={(e) => handleNav(e, 'contact')}>
                Contact
              </a>
            </div>

            {/* 3. RESOURCES */}
            <div className="footer-links-col">
              <span className="footer-col-title">Resources</span>
              <a href="/law-library" onClick={(e) => handleNav(e, 'law-library')}>
                Law Library
              </a>
              <a href="/my-journal" onClick={(e) => handleNav(e, 'my-journal')}>
                My Journal
              </a>
              <a href="/support" onClick={(e) => handleNav(e, 'support')}>
                Support
              </a>
            </div>

            {/* 4. LEGAL & SECURITY */}
            <div className="footer-links-col">
              <span className="footer-col-title">Legal &amp; Security</span>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#security">Security &amp; Compliance</a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Heritage */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} BrilliusLaw Technologies Pvt. Ltd. All rights reserved.
          </p>
          <p className="footer-heritage">
            Honouring India's Constitutional Heritage with Modern Legal Technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

