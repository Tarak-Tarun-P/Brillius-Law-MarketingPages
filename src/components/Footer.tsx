import React from 'react';
import Link from 'next/link';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer-section" role="contentinfo">
      <div className="content-container">
        <div className="footer-inner">
          {/* Left Brand Area */}
          <div className="footer-brand">
            <Link href="/">
              <img
                src="/assets/BrilliusLaw%20-%20White-JPG.jpg"
                alt="BrilliusLaw"
                className="footer-logo"
                width="155"
                height="72"
              />
            </Link>
            <p className="footer-tagline">
              Modern Legal Intelligence. Built for Indian Jurisprudence &amp; Enterprise Law.
            </p>
          </div>

          {/* 4 Balanced Navigation Columns */}
          <div className="footer-links-group">
            {/* 1. PRODUCT */}
            <div className="footer-links-col">
              <span className="footer-col-title">Product</span>
              <Link href="/features">Features</Link>
              <Link href="/solutions">Solutions</Link>
              <Link href="/legal-research">Legal Research</Link>
              <Link href="/ai-assistant">AI Assistant</Link>
              <Link href="/document-analyzer">Document Analyzer</Link>
              <Link href="/ecourts-sync">eCourts Sync</Link>
            </div>

            {/* 2. COMPANY */}
            <div className="footer-links-col">
              <span className="footer-col-title">Company</span>
              <Link href="/about">About Us</Link>
              <Link href="/partners">Partners</Link>
              <Link href="/contact">Contact</Link>
            </div>

            {/* 3. RESOURCES */}
            <div className="footer-links-col">
              <span className="footer-col-title">Resources</span>
              <Link href="/law-library">Law Library</Link>
              <Link href="/my-journal">My Journal</Link>
              <Link href="/support">Support</Link>
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
            Honouring India&apos;s Constitutional Heritage with Modern Legal Technology.
          </p>
        </div>
      </div>
    </footer>
  );
};
