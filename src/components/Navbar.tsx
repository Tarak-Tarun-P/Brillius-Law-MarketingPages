'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ChevronDown,
  Users,
  Briefcase,
  Calendar,
  Archive,
  FileText,
  PenLine,
  FileCheck,
  GitCompare,
  BookOpen,
  Search,
  Mic,
  Sparkles,
  FileSearch,
  Receipt,
  Building2,
  Landmark,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import './Navbar.css';

interface FeatureItem {
  name: string;
  desc: string;
  href: string;
  icon: React.ReactNode;
}

interface FeatureCategory {
  title: string;
  items: FeatureItem[];
}

const FEATURE_PATHS = [
  '/features', '/client-management', '/cases', '/hearings', '/evidence',
  '/compare-review', '/drafting-lab', '/case-drafts', '/document-storage',
  '/law-library', '/my-journal', '/legal-research', '/firm-management',
  '/billing-invoicing', '/ecourts-sync', '/whatsapp-alerts',
  '/document-analyzer', '/ai-assistant',
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const activePage = pathname === '/platform'
    ? 'platform'
    : FEATURE_PATHS.includes(pathname)
    ? 'features'
    : pathname === '/about'
    ? 'about'
    : pathname.startsWith('/blog')
    ? 'blog'
    : pathname === '/contact'
    ? 'contact'
    : pathname === '/partners'
    ? 'partners'
    : pathname === '/support'
    ? 'support'
    : 'home';

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [platformDropdownOpen, setPlatformDropdownOpen] = useState(false);
  const [mobilePlatformExpanded, setMobilePlatformExpanded] = useState(false);
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);
  const [mobileFeaturesExpanded, setMobileFeaturesExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const platformTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const featureCategories: FeatureCategory[] = [
    {
      title: 'PRACTICE',
      items: [
        {
          name: 'Clients',
          desc: 'Manage your client information.',
          href: '/client-management',
          icon: <Users size={16} />,
        },
        {
          name: 'Cases',
          desc: 'Keep your cases organized.',
          href: '/cases',
          icon: <Briefcase size={16} />,
        },
        {
          name: 'Hearings',
          desc: 'Stay on top of important dates.',
          href: '/hearings',
          icon: <Calendar size={16} />,
        },
        {
          name: 'Evidence',
          desc: 'Keep your evidence within reach.',
          href: '/evidence',
          icon: <Archive size={16} />,
        },
      ],
    },
    {
      title: 'DOCUMENTS & DRAFTING',
      items: [
        {
          name: 'Documents',
          desc: 'Store your documents securely.',
          href: '/document-storage',
          icon: <FileText size={16} />,
        },
        {
          name: 'Drafting Lab',
          desc: 'Draft with standard clauses.',
          href: '/drafting-lab',
          icon: <PenLine size={16} />,
        },
        {
          name: 'Case Drafts',
          desc: 'Track drafts through every stage.',
          href: '/case-drafts',
          icon: <FileCheck size={16} />,
        },
        {
          name: 'Compare & Review',
          desc: 'Spot changes between versions.',
          href: '/compare-review',
          icon: <GitCompare size={16} />,
        },
      ],
    },
    {
      title: 'RESEARCH & KNOWLEDGE',
      items: [
        {
          name: 'Law Library',
          desc: 'Read Bare Acts and judgments.',
          href: '/law-library',
          icon: <BookOpen size={16} />,
        },
        {
          name: 'Legal Research',
          desc: 'Find the right case law fast.',
          href: '/legal-research',
          icon: <Search size={16} />,
        },
        {
          name: 'My Journal',
          desc: 'Save your thoughts and bookmarks.',
          href: '/my-journal',
          icon: <Mic size={16} />,
        },
      ],
    },
    {
      title: 'AI ASSISTANCE',
      items: [
        {
          name: 'AI Assistant',
          desc: 'Ask questions and find answers.',
          href: '/ai-assistant',
          icon: <Sparkles size={16} />,
        },
        {
          name: 'Document Analyzer',
          desc: 'Understand long files faster.',
          href: '/document-analyzer',
          icon: <FileSearch size={16} />,
        },
      ],
    },
    {
      title: 'OPERATIONS',
      items: [
        {
          name: 'Billing & Invoicing',
          desc: 'Track fees and create invoices.',
          href: '/billing-invoicing',
          icon: <Receipt size={16} />,
        },
        {
          name: 'Firm Management',
          desc: 'Manage your team and roles.',
          href: '/firm-management',
          icon: <Building2 size={16} />,
        },
        {
          name: 'eCourts Sync',
          desc: 'Track public case updates.',
          href: '/ecourts-sync',
          icon: <Landmark size={16} />,
        },
        {
          name: 'WhatsApp Alerts',
          desc: 'Receive important updates.',
          href: '/whatsapp-alerts',
          icon: <MessageSquare size={16} />,
        },
      ],
    },
  ];

  // Platform features organized by user roles
  const platformCategories: FeatureCategory[] = [
    {
      title: 'STUDENTS',
      items: [
        { name: 'Law Library', desc: '', href: '/law-library', icon: <BookOpen size={16} /> },
        { name: 'Legal Research', desc: '', href: '/legal-research', icon: <Search size={16} /> },
        { name: 'AI Assistant', desc: '', href: '/ai-assistant', icon: <Sparkles size={16} /> },
        { name: 'Document Analyzer', desc: '', href: '/document-analyzer', icon: <FileSearch size={16} /> },
        { name: 'My Journal', desc: '', href: '/my-journal', icon: <Mic size={16} /> },
        { name: 'Drafting Lab', desc: '', href: '/drafting-lab', icon: <PenLine size={16} /> },
        { name: 'Compare & Review', desc: '', href: '/compare-review', icon: <GitCompare size={16} /> },
      ],
    },
    {
      title: 'ADVOCATES / LAWYERS',
      items: [
        { name: 'Client Management', desc: '', href: '/client-management', icon: <Users size={16} /> },
        { name: 'Case Management', desc: '', href: '/cases', icon: <Briefcase size={16} /> },
        { name: 'Hearings', desc: '', href: '/hearings', icon: <Calendar size={16} /> },
        { name: 'Evidence', desc: '', href: '/evidence', icon: <Archive size={16} /> },
        { name: 'Document Storage', desc: '', href: '/document-storage', icon: <FileText size={16} /> },
        { name: 'Case Drafts', desc: '', href: '/case-drafts', icon: <FileCheck size={16} /> },
        { name: 'Legal Research', desc: '', href: '/legal-research', icon: <Search size={16} /> },
        { name: 'AI Assistant', desc: '', href: '/ai-assistant', icon: <Sparkles size={16} /> },
        { name: 'Document Analyzer', desc: '', href: '/document-analyzer', icon: <FileSearch size={16} /> },
        { name: 'eCourts Sync', desc: '', href: '/ecourts-sync', icon: <Landmark size={16} /> },
        { name: 'WhatsApp Alerts', desc: '', href: '/whatsapp-alerts', icon: <MessageSquare size={16} /> },
        { name: 'My Journal', desc: '', href: '/my-journal', icon: <Mic size={16} /> },
      ],
    },
    {
      title: 'FIRMS',
      items: [
        { name: 'Client Management', desc: '', href: '/client-management', icon: <Users size={16} /> },
        { name: 'Case Management', desc: '', href: '/cases', icon: <Briefcase size={16} /> },
        { name: 'Hearings', desc: '', href: '/hearings', icon: <Calendar size={16} /> },
        { name: 'Evidence', desc: '', href: '/evidence', icon: <Archive size={16} /> },
        { name: 'Document Storage', desc: '', href: '/document-storage', icon: <FileText size={16} /> },
        { name: 'Case Drafts', desc: '', href: '/case-drafts', icon: <FileCheck size={16} /> },
        { name: 'Compare & Review', desc: '', href: '/compare-review', icon: <GitCompare size={16} /> },
        { name: 'Legal Research', desc: '', href: '/legal-research', icon: <Search size={16} /> },
        { name: 'AI Assistant', desc: '', href: '/ai-assistant', icon: <Sparkles size={16} /> },
        { name: 'Document Analyzer', desc: '', href: '/document-analyzer', icon: <FileSearch size={16} /> },
        { name: 'Firm Management', desc: '', href: '/firm-management', icon: <Building2 size={16} /> },
        { name: 'Billing & Invoicing', desc: '', href: '/billing-invoicing', icon: <Receipt size={16} /> },
        { name: 'eCourts Sync', desc: '', href: '/ecourts-sync', icon: <Landmark size={16} /> },
        { name: 'WhatsApp Alerts', desc: '', href: '/whatsapp-alerts', icon: <MessageSquare size={16} /> },
        { name: 'My Journal', desc: '', href: '/my-journal', icon: <Mic size={16} /> },
      ],
    },
  ];

  // Close dropdowns on click outside or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setFeaturesDropdownOpen(false);
        setPlatformDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setFeaturesDropdownOpen(false);
        setPlatformDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setPlatformDropdownOpen(false);
    setFeaturesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setFeaturesDropdownOpen(false);
    }, 150);
  };

  const handlePlatformMouseEnter = () => {
    if (platformTimeoutRef.current) {
      clearTimeout(platformTimeoutRef.current);
    }
    setFeaturesDropdownOpen(false);
    setPlatformDropdownOpen(true);
  };

  const handlePlatformMouseLeave = () => {
    platformTimeoutRef.current = setTimeout(() => {
      setPlatformDropdownOpen(false);
    }, 150);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setFeaturesDropdownOpen(false);
    setPlatformDropdownOpen(false);
  };

  const handleFeatureItemClick = () => {
    setFeaturesDropdownOpen(false);
    setPlatformDropdownOpen(false);
    setMobileMenuOpen(false);
    setMobileFeaturesExpanded(false);
    setMobilePlatformExpanded(false);
  };

  return (
    <header className="navbar-container animate-fade-in-down" ref={dropdownRef}>
      <nav className="navbar-inner" aria-label="Main Navigation">
        {/* Left: Logo */}
        <div className="navbar-logo-wrapper">
          <Link
            href="/"
            className="navbar-logo-link"
            aria-label="BrilliusLaw Home"
            onClick={handleLinkClick}
          >
            <img
              src="/assets/brilliuslaw-logo.png"
              alt="BrilliusLaw Logo"
              className="navbar-logo-img"
              width="165"
              height="36"
            />
          </Link>
        </div>

        {/* Center: Desktop Navigation Links in Requested Order:
            1. Platform | 2. Features | 3. About Us | 4. Blog | 5. Contact Us */}
        <ul className="navbar-links" role="list">
          {/* 1. PLATFORM (With Role Dropdown) */}
          <li
            className={`navbar-item dropdown-parent ${activePage === 'platform' ? 'active-parent' : ''}`}
            onMouseEnter={handlePlatformMouseEnter}
            onMouseLeave={handlePlatformMouseLeave}
          >
            <div className="features-nav-btn-group">
              <Link
                href="/platform"
                className={`navbar-link ${activePage === 'platform' ? 'active-nav-item' : ''}`}
                aria-current={activePage === 'platform' ? 'page' : undefined}
                onClick={handleLinkClick}
              >
                Platform
                {activePage === 'platform' && (
                  <span className="active-gold-indicator" aria-hidden="true" />
                )}
              </Link>
              <button
                type="button"
                className={`dropdown-chevron-btn ${platformDropdownOpen ? 'rotate-chevron' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setFeaturesDropdownOpen(false);
                  setPlatformDropdownOpen(!platformDropdownOpen);
                }}
                aria-expanded={platformDropdownOpen}
                aria-label="Toggle Platform Menu"
              >
                <ChevronDown size={14} />
              </button>
            </div>

            {/* Desktop Platform Dropdown */}
            {platformDropdownOpen && (
              <div
                className="features-mega-dropdown solutions-mega-dropdown animate-fade-in"
                role="region"
                aria-label="Platform by Role"
              >
                <div className="mega-dropdown-header">
                  <div className="mega-header-text">
                    <span className="mega-eyebrow">PLATFORM BY ROLE</span>
                    <h3 className="mega-title">Find the right BrilliusLaw tools for how you work.</h3>
                  </div>
                  <Link
                    href="/platform"
                    className="mega-view-all-link"
                    onClick={handleLinkClick}
                  >
                    <span>View Platform Overview</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>

                <div className="mega-dropdown-columns solutions-dropdown-columns">
                  {platformCategories.map((cat, catIdx) => (
                    <div key={catIdx} className="mega-category-column">
                      <span className="mega-column-title">{cat.title}</span>
                      <div className="solutions-items-list" role="list">
                        {cat.items.map((item, itemIdx) => (
                          <Link
                            key={itemIdx}
                            href={item.href}
                            className="solutions-feature-item"
                            onClick={handleFeatureItemClick}
                          >
                            <span className="solutions-item-icon">{item.icon}</span>
                            <span className="solutions-item-name">{item.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mega-dropdown-footer">
                  <span className="mega-footer-tag">One platform organized around how you actually practice.</span>
                  <Link
                    href="/platform"
                    className="mega-footer-cta"
                    onClick={handleLinkClick}
                  >
                    <span>Explore Platform Overview</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            )}
          </li>

          {/* 2. FEATURES (With Mega-Dropdown) */}
          <li
            className={`navbar-item dropdown-parent ${activePage === 'features' ? 'active-parent' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="features-nav-btn-group">
              <Link
                href="/features"
                className={`navbar-link ${activePage === 'features' ? 'active-nav-item' : ''}`}
                aria-current={activePage === 'features' ? 'page' : undefined}
                onClick={handleLinkClick}
              >
                Features
                {activePage === 'features' && (
                  <span className="active-gold-indicator" aria-hidden="true" />
                )}
              </Link>
              <button
                type="button"
                className={`dropdown-chevron-btn ${featuresDropdownOpen ? 'rotate-chevron' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setPlatformDropdownOpen(false);
                  setFeaturesDropdownOpen(!featuresDropdownOpen);
                }}
                aria-expanded={featuresDropdownOpen}
                aria-label="Toggle Features Menu"
              >
                <ChevronDown size={14} />
              </button>
            </div>

            {/* Desktop Mega-Dropdown */}
            {featuresDropdownOpen && (
              <div
                className="features-mega-dropdown animate-fade-in"
                role="region"
                aria-label="Features Directory"
              >
                <div className="mega-dropdown-header">
                  <div className="mega-header-text">
                    <span className="mega-eyebrow">FEATURES DIRECTORY</span>
                    <h3 className="mega-title">Explore everything BrilliusLaw can help you do.</h3>
                  </div>
                  <Link
                    href="/features"
                    className="mega-view-all-link"
                    onClick={handleLinkClick}
                  >
                    <span>View All Features</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>

                <div className="mega-dropdown-columns">
                  {featureCategories.map((cat, catIdx) => (
                    <div key={catIdx} className="mega-category-column">
                      <span className="mega-column-title">{cat.title}</span>
                      <div className="mega-items-list" role="list">
                        {cat.items.map((item, itemIdx) => (
                          <Link
                            key={itemIdx}
                            href={item.href}
                            className="mega-feature-item"
                            onClick={handleFeatureItemClick}
                          >
                            <div className="mega-item-icon-box">{item.icon}</div>
                            <div className="mega-item-text">
                              <span className="mega-item-name">{item.name}</span>
                              <span className="mega-item-desc">{item.desc}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mega-dropdown-footer">
                  <span className="mega-footer-tag">All-in-one legal technology built for India.</span>
                  <Link
                    href="/features"
                    className="mega-footer-cta"
                    onClick={handleLinkClick}
                  >
                    <span>Explore Full Features Suite</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            )}
          </li>

          {/* 3. ABOUT US */}
          <li className="navbar-item">
            <Link
              href="/about"
              className={`navbar-link ${activePage === 'about' ? 'active-nav-item' : ''}`}
              aria-current={activePage === 'about' ? 'page' : undefined}
              onClick={handleLinkClick}
            >
              About Us
              {activePage === 'about' && (
                <span className="active-gold-indicator" aria-hidden="true" />
              )}
            </Link>
          </li>

          {/* 4. BLOG */}
          <li className="navbar-item">
            <Link
              href="/blog"
              className={`navbar-link ${activePage === 'blog' ? 'active-nav-item' : ''}`}
              aria-current={activePage === 'blog' ? 'page' : undefined}
              onClick={handleLinkClick}
            >
              Blog
              {activePage === 'blog' && (
                <span className="active-gold-indicator" aria-hidden="true" />
              )}
            </Link>
          </li>

          {/* 5. CONTACT US */}
          <li className="navbar-item">
            <Link
              href="/contact"
              className={`navbar-link ${activePage === 'contact' ? 'active-nav-item' : ''}`}
              aria-current={activePage === 'contact' ? 'page' : undefined}
              onClick={handleLinkClick}
            >
              Contact Us
              {activePage === 'contact' && (
                <span className="active-gold-indicator" aria-hidden="true" />
              )}
            </Link>
          </li>
        </ul>

        {/* Right: Get Started CTA Button */}
        <div className="navbar-actions">
          <a href="#get-started" className="navbar-cta-button">
            <span>Get Started</span>
            <span className="navbar-cta-arrow" aria-hidden="true">→</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="navbar-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="navbar-mobile-drawer animate-fade-in">
          <ul className="navbar-mobile-links" role="list">
            {/* 1. Mobile Platform with Expandable Submenu */}
            <li className="navbar-mobile-item mobile-features-item">
              <div className="mobile-features-header">
                <Link
                  href="/platform"
                  className={`navbar-mobile-link ${activePage === 'platform' ? 'active-mobile-item' : ''}`}
                  onClick={handleLinkClick}
                >
                  Platform
                </Link>
                <button
                  type="button"
                  className="mobile-expand-btn"
                  onClick={() => setMobilePlatformExpanded(!mobilePlatformExpanded)}
                  aria-expanded={mobilePlatformExpanded}
                  aria-label="Expand Platform List"
                >
                  <ChevronDown
                    size={16}
                    className={`mobile-chevron ${mobilePlatformExpanded ? 'rotate-open' : ''}`}
                  />
                </button>
              </div>

              {mobilePlatformExpanded && (
                <div className="mobile-features-accordion animate-fade-in">
                  {platformCategories.map((cat, idx) => (
                    <div key={idx} className="mobile-cat-group">
                      <span className="mobile-cat-title">{cat.title}</span>
                      <div className="mobile-cat-items">
                        {cat.items.map((item, itemIdx) => (
                          <Link
                            key={itemIdx}
                            href={item.href}
                            className="mobile-feature-sublink"
                            onClick={handleFeatureItemClick}
                          >
                            <span className="mobile-sublink-icon">{item.icon}</span>
                            <span className="mobile-sublink-name">{item.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <Link
                    href="/platform"
                    className="mobile-view-all-features"
                    onClick={handleLinkClick}
                  >
                    <span>View Platform Overview</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              )}
            </li>

            {/* 2. Mobile Features with Expandable Submenu */}
            <li className="navbar-mobile-item mobile-features-item">
              <div className="mobile-features-header">
                <Link
                  href="/features"
                  className={`navbar-mobile-link ${activePage === 'features' ? 'active-mobile-item' : ''}`}
                  onClick={handleLinkClick}
                >
                  Features
                </Link>
                <button
                  type="button"
                  className="mobile-expand-btn"
                  onClick={() => setMobileFeaturesExpanded(!mobileFeaturesExpanded)}
                  aria-expanded={mobileFeaturesExpanded}
                  aria-label="Expand Features List"
                >
                  <ChevronDown
                    size={16}
                    className={`mobile-chevron ${mobileFeaturesExpanded ? 'rotate-open' : ''}`}
                  />
                </button>
              </div>

              {mobileFeaturesExpanded && (
                <div className="mobile-features-accordion animate-fade-in">
                  {featureCategories.map((cat, idx) => (
                    <div key={idx} className="mobile-cat-group">
                      <span className="mobile-cat-title">{cat.title}</span>
                      <div className="mobile-cat-items">
                        {cat.items.map((item, itemIdx) => (
                          <Link
                            key={itemIdx}
                            href={item.href}
                            className="mobile-feature-sublink"
                            onClick={handleFeatureItemClick}
                          >
                            <span className="mobile-sublink-icon">{item.icon}</span>
                            <span className="mobile-sublink-name">{item.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <Link
                    href="/features"
                    className="mobile-view-all-features"
                    onClick={handleLinkClick}
                  >
                    <span>View All Features</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              )}
            </li>

            {/* 3. Mobile About Us */}
            <li className="navbar-mobile-item">
              <Link
                href="/about"
                className={`navbar-mobile-link ${activePage === 'about' ? 'active-mobile-item' : ''}`}
                onClick={handleLinkClick}
              >
                About Us
              </Link>
            </li>

            {/* 4. Mobile Blog */}
            <li className="navbar-mobile-item">
              <Link
                href="/blog"
                className={`navbar-mobile-link ${activePage === 'blog' ? 'active-mobile-item' : ''}`}
                onClick={handleLinkClick}
              >
                Blog
              </Link>
            </li>

            {/* 5. Mobile Contact Us */}
            <li className="navbar-mobile-item">
              <Link
                href="/contact"
                className={`navbar-mobile-link ${activePage === 'contact' ? 'active-mobile-item' : ''}`}
                onClick={handleLinkClick}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="navbar-mobile-cta">
            <a
              href="#get-started"
              className="navbar-cta-button navbar-mobile-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Get Started</span>
              <span className="navbar-cta-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
