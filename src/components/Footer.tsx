import React from 'react';
import './Footer.css';

interface FooterProps {
  onNavigate?: (page: 'home' | 'features' | 'solutions' | 'about' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (
    e: React.MouseEvent,
    page: 'home' | 'features' | 'solutions' | 'about' | 'contact'
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
          <div className="footer-brand">
            <a href="#/" onClick={(e) => handleNav(e, 'home')}>
              <img
                src="/assets/brilliuslaw-logo.png"
                alt="BrilliusLaw"
                className="footer-logo"
                width="135"
                height="30"
              />
            </a>
            <p className="footer-tagline">
              Modern Legal Intelligence. Built for Indian Jurisprudence & Enterprise Law.
            </p>
          </div>

          <div className="footer-links-group">
            <div className="footer-links-col">
              <span className="footer-col-title">Product</span>
              <a href="#/features" onClick={(e) => handleNav(e, 'features')}>
                Features Overview
              </a>
              <a href="#/solutions" onClick={(e) => handleNav(e, 'solutions')}>
                Solutions
              </a>
              <a href="#/features/clients" onClick={(e) => handleNav(e, 'clients' as any)}>
                Clients Management
              </a>
              <a href="#/features/cases" onClick={(e) => handleNav(e, 'cases' as any)}>
                Case Management
              </a>
              <a href="#/features/hearings" onClick={(e) => handleNav(e, 'hearings' as any)}>
                Hearings
              </a>
              <a href="#/features/evidence" onClick={(e) => handleNav(e, 'evidence' as any)}>
                Evidence Storage
              </a>
              <a href="#/features/compare-review" onClick={(e) => handleNav(e, 'compare-review' as any)}>
                Compare & Review
              </a>
              <a href="#/features/drafting-lab" onClick={(e) => handleNav(e, 'drafting-lab' as any)}>
                Drafting Lab
              </a>
              <a href="#/features/law-library" onClick={(e) => handleNav(e, 'law-library' as any)}>
                Law Library
              </a>
              <a href="#/features/my-journal" onClick={(e) => handleNav(e, 'my-journal' as any)}>
                My Journal
              </a>
              <a href="#/features/legal-research" onClick={(e) => handleNav(e, 'legal-research' as any)}>
                Legal Research
              </a>
              <a href="#/features/document-analyzer" onClick={(e) => handleNav(e, 'document-analyzer' as any)}>
                Document Analyzer
              </a>
              <a href="#/features/ai-assistant" onClick={(e) => handleNav(e, 'ai-assistant' as any)}>
                AI Assistant
              </a>
            </div>
            <div className="footer-links-col">
              <span className="footer-col-title">Company</span>
              <a href="#/about" onClick={(e) => handleNav(e, 'about')}>About Us</a>
              <a href="#/contact" onClick={(e) => handleNav(e, 'contact')}>Contact</a>
            </div>
            <div className="footer-links-col">
              <span className="footer-col-title">Legal & Security</span>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#security">Security & Compliance</a>
            </div>
          </div>
        </div>

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
