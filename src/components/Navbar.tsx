import React, { useState, useRef, useEffect } from 'react';
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

interface NavbarProps {
  activePage?: 'home' | 'features' | 'solutions' | 'about' | 'contact' | 'partners' | 'support';
  onNavigate?: (page: 'home' | 'features' | 'solutions' | 'about' | 'contact' | 'partners' | 'support') => void;
}

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

export const Navbar: React.FC<NavbarProps> = ({
  activePage = 'home',
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);
  const [mobileFeaturesExpanded, setMobileFeaturesExpanded] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [mobileSolutionsExpanded, setMobileSolutionsExpanded] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const solutionsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
          desc: 'Find your important documents easily.',
          href: '/document-storage',
          icon: <FileText size={16} />,
        },
        {
          name: 'Drafting Lab',
          desc: 'Create and refine legal documents.',
          href: '/drafting-lab',
          icon: <PenLine size={16} />,
        },
        {
          name: 'Case Drafts',
          desc: 'Keep your case drafts organized.',
          href: '/case-drafts',
          icon: <FileCheck size={16} />,
        },
        {
          name: 'Compare & Review',
          desc: 'See exactly what changed.',
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
          desc: 'Explore Indian laws and judgments.',
          href: '/law-library',
          icon: <BookOpen size={16} />,
        },
        {
          name: 'Legal Research',
          desc: 'Find useful legal information.',
          href: '/legal-research',
          icon: <Search size={16} />,
        },
        {
          name: 'My Journal',
          desc: 'Record notes and save important references.',
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
          desc: 'Get help with everyday legal work.',
          href: '/ai-assistant',
          icon: <Sparkles size={16} />,
        },
        {
          name: 'Document Analyzer',
          desc: 'Understand important info in documents.',
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
          desc: 'Keep billing and invoices organized.',
          href: '/billing-invoicing',
          icon: <Receipt size={16} />,
        },
        {
          name: 'Firm Management',
          desc: 'Manage your team and workspace.',
          href: '/firm-management',
          icon: <Building2 size={16} />,
        },
        {
          name: 'eCourts Updates',
          desc: 'Keep track of relevant case updates.',
          href: '/ecourts-sync',
          icon: <Landmark size={16} />,
        },
        {
          name: 'WhatsApp Alerts',
          desc: 'Stay informed about important updates.',
          href: '/whatsapp-alerts',
          icon: <MessageSquare size={16} />,
        },
      ],
    },
  ];

  // Existing features organized by who they are most relevant to. Every
  // entry links to its existing individual feature page — no new pages.
  const solutionCategories: FeatureCategory[] = [
    {
      title: 'FIRMS',
      items: [
        { name: 'Client Management', desc: '', href: '/client-management', icon: <Users size={16} /> },
        { name: 'Case Management', desc: '', href: '/cases', icon: <Briefcase size={16} /> },
        { name: 'Hearings', desc: '', href: '/hearings', icon: <Calendar size={16} /> },
        { name: 'Evidence', desc: '', href: '/evidence', icon: <Archive size={16} /> },
        { name: 'Document Storage', desc: '', href: '/document-storage', icon: <FileText size={16} /> },
        { name: 'Compare & Review', desc: '', href: '/compare-review', icon: <GitCompare size={16} /> },
        { name: 'Drafting Lab', desc: '', href: '/drafting-lab', icon: <PenLine size={16} /> },
        { name: 'Legal Research', desc: '', href: '/legal-research', icon: <Search size={16} /> },
        { name: 'Firm Management', desc: '', href: '/firm-management', icon: <Building2 size={16} /> },
        { name: 'Billing & Invoicing', desc: '', href: '/billing-invoicing', icon: <Receipt size={16} /> },
        { name: 'eCourts Sync', desc: '', href: '/ecourts-sync', icon: <Landmark size={16} /> },
        { name: 'WhatsApp Alerts', desc: '', href: '/whatsapp-alerts', icon: <MessageSquare size={16} /> },
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
        { name: 'Drafting Lab', desc: '', href: '/drafting-lab', icon: <PenLine size={16} /> },
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
  ];

  // Close dropdowns on click outside or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setFeaturesDropdownOpen(false);
        setSolutionsDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setFeaturesDropdownOpen(false);
        setSolutionsDropdownOpen(false);
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
    setSolutionsDropdownOpen(false);
    setFeaturesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setFeaturesDropdownOpen(false);
    }, 150);
  };

  const handleSolutionsMouseEnter = () => {
    if (solutionsTimeoutRef.current) {
      clearTimeout(solutionsTimeoutRef.current);
    }
    setFeaturesDropdownOpen(false);
    setSolutionsDropdownOpen(true);
  };

  const handleSolutionsMouseLeave = () => {
    solutionsTimeoutRef.current = setTimeout(() => {
      setSolutionsDropdownOpen(false);
    }, 150);
  };

  const handleLinkClick = (
    e: React.MouseEvent,
    id: 'home' | 'features' | 'solutions' | 'about' | 'contact'
  ) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(id);
      setMobileMenuOpen(false);
      setFeaturesDropdownOpen(false);
      setSolutionsDropdownOpen(false);
    }
  };

  const handleFeatureItemClick = (
    e: React.MouseEvent,
    href: string
  ) => {
    setFeaturesDropdownOpen(false);
    setSolutionsDropdownOpen(false);
    setMobileMenuOpen(false);
    setMobileFeaturesExpanded(false);
    setMobileSolutionsExpanded(false);

    if (onNavigate) {
      e.preventDefault();
      if (href === '/client-management') {
        onNavigate('clients' as any);
        return;
      }
      if (href === '/cases') {
        onNavigate('cases' as any);
        return;
      }
      if (href === '/hearings') {
        onNavigate('hearings' as any);
        return;
      }
      if (href === '/evidence') {
        onNavigate('evidence' as any);
        return;
      }
      if (href === '/compare-review') {
        onNavigate('compare-review' as any);
        return;
      }
      if (href === '/document-storage') {
        onNavigate('document-storage' as any);
        return;
      }
      if (href === '/drafting-lab') {
        onNavigate('drafting-lab' as any);
        return;
      }
      if (href === '/case-drafts') {
        onNavigate('case-drafts' as any);
        return;
      }
      if (href === '/law-library') {
        onNavigate('law-library' as any);
        return;
      }
      if (href === '/my-journal') {
        onNavigate('my-journal' as any);
        return;
      }
      if (href === '/legal-research') {
        onNavigate('legal-research' as any);
        return;
      }
      if (href === '/firm-management') {
        onNavigate('firm-management' as any);
        return;
      }
      if (href === '/billing-invoicing') {
        onNavigate('billing' as any);
        return;
      }
      if (href === '/ecourts-sync') {
        onNavigate('ecourts' as any);
        return;
      }
      if (href === '/whatsapp-alerts') {
        onNavigate('whatsapp-alerts' as any);
        return;
      }
      if (href === '/document-analyzer') {
        onNavigate('document-analyzer' as any);
        return;
      }
      if (href === '/ai-assistant') {
        onNavigate('ai-assistant' as any);
        return;
      }
      onNavigate('features');
    }
  };

  return (
    <header className="navbar-container animate-fade-in-down" ref={dropdownRef}>
      <nav className="navbar-inner" aria-label="Main Navigation">
        {/* Left: Logo */}
        <div className="navbar-logo-wrapper">
          <a
            href="/"
            className="navbar-logo-link"
            aria-label="BrilliusLaw Home"
            onClick={(e) => handleLinkClick(e, 'home')}
          >
            <img
              src="/assets/brilliuslaw-logo.png"
              alt="BrilliusLaw Logo"
              className="navbar-logo-img"
              width="165"
              height="36"
            />
          </a>
        </div>

        {/* Center: Desktop Navigation Links */}
        <ul className="navbar-links" role="list">
          {/* 1. FEATURES (With Mega-Dropdown) */}
          <li
            className={`navbar-item dropdown-parent ${activePage === 'features' ? 'active-parent' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="features-nav-btn-group">
              <a
                href="/features"
                className={`navbar-link ${activePage === 'features' ? 'active-nav-item' : ''}`}
                aria-current={activePage === 'features' ? 'page' : undefined}
                onClick={(e) => handleLinkClick(e, 'features')}
              >
                Features
                {activePage === 'features' && (
                  <span className="active-gold-indicator" aria-hidden="true" />
                )}
              </a>
              <button
                type="button"
                className={`dropdown-chevron-btn ${featuresDropdownOpen ? 'rotate-chevron' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSolutionsDropdownOpen(false);
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
                  <a
                    href="/features"
                    className="mega-view-all-link"
                    onClick={(e) => handleLinkClick(e, 'features')}
                  >
                    <span>View All Features</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </a>
                </div>

                <div className="mega-dropdown-columns">
                  {featureCategories.map((cat, catIdx) => (
                    <div key={catIdx} className="mega-category-column">
                      <span className="mega-column-title">{cat.title}</span>
                      <div className="mega-items-list" role="list">
                        {cat.items.map((item, itemIdx) => (
                          <a
                            key={itemIdx}
                            href={item.href}
                            className="mega-feature-item"
                            onClick={(e) => handleFeatureItemClick(e, item.href)}
                          >
                            <div className="mega-item-icon-box">{item.icon}</div>
                            <div className="mega-item-text">
                              <span className="mega-item-name">{item.name}</span>
                              <span className="mega-item-desc">{item.desc}</span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mega-dropdown-footer">
                  <span className="mega-footer-tag">All-in-one legal technology built for India.</span>
                  <a
                    href="/features"
                    className="mega-footer-cta"
                    onClick={(e) => handleLinkClick(e, 'features')}
                  >
                    <span>Explore Full Features Suite</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </a>
                </div>
              </div>
            )}
          </li>

          {/* 2. SOLUTIONS (With Category Dropdown) */}
          <li
            className={`navbar-item dropdown-parent ${activePage === 'solutions' ? 'active-parent' : ''}`}
            onMouseEnter={handleSolutionsMouseEnter}
            onMouseLeave={handleSolutionsMouseLeave}
          >
            <div className="features-nav-btn-group">
              <a
                href="/solutions"
                className={`navbar-link ${activePage === 'solutions' ? 'active-nav-item' : ''}`}
                aria-current={activePage === 'solutions' ? 'page' : undefined}
                onClick={(e) => handleLinkClick(e, 'solutions')}
              >
                Solutions
                {activePage === 'solutions' && (
                  <span className="active-gold-indicator" aria-hidden="true" />
                )}
              </a>
              <button
                type="button"
                className={`dropdown-chevron-btn ${solutionsDropdownOpen ? 'rotate-chevron' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setFeaturesDropdownOpen(false);
                  setSolutionsDropdownOpen(!solutionsDropdownOpen);
                }}
                aria-expanded={solutionsDropdownOpen}
                aria-label="Toggle Solutions Menu"
              >
                <ChevronDown size={14} />
              </button>
            </div>

            {/* Desktop Solutions Dropdown (reuses the Features mega-dropdown shell) */}
            {solutionsDropdownOpen && (
              <div
                className="features-mega-dropdown solutions-mega-dropdown animate-fade-in"
                role="region"
                aria-label="Solutions by Role"
              >
                <div className="mega-dropdown-header">
                  <div className="mega-header-text">
                    <span className="mega-eyebrow">SOLUTIONS BY ROLE</span>
                    <h3 className="mega-title">Find the right BrilliusLaw tools for how you work.</h3>
                  </div>
                  <a
                    href="/solutions"
                    className="mega-view-all-link"
                    onClick={(e) => handleLinkClick(e, 'solutions')}
                  >
                    <span>View All Solutions</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </a>
                </div>

                <div className="mega-dropdown-columns solutions-dropdown-columns">
                  {solutionCategories.map((cat, catIdx) => (
                    <div key={catIdx} className="mega-category-column">
                      <span className="mega-column-title">{cat.title}</span>
                      <div className="solutions-items-list" role="list">
                        {cat.items.map((item, itemIdx) => (
                          <a
                            key={itemIdx}
                            href={item.href}
                            className="solutions-feature-item"
                            onClick={(e) => handleFeatureItemClick(e, item.href)}
                          >
                            <span className="solutions-item-icon">{item.icon}</span>
                            <span className="solutions-item-name">{item.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mega-dropdown-footer">
                  <span className="mega-footer-tag">Solutions organized around how you actually practice.</span>
                  <a
                    href="/solutions"
                    className="mega-footer-cta"
                    onClick={(e) => handleLinkClick(e, 'solutions')}
                  >
                    <span>Explore Solutions Overview</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </a>
                </div>
              </div>
            )}
          </li>

          {/* 3. ABOUT US */}
          <li className="navbar-item">
            <a
              href="/about"
              className={`navbar-link ${activePage === 'about' ? 'active-nav-item' : ''}`}
              aria-current={activePage === 'about' ? 'page' : undefined}
              onClick={(e) => handleLinkClick(e, 'about')}
            >
              About Us
              {activePage === 'about' && (
                <span className="active-gold-indicator" aria-hidden="true" />
              )}
            </a>
          </li>

          {/* 4. CONTACT */}
          <li className="navbar-item">
            <a
              href="/contact"
              className={`navbar-link ${activePage === 'contact' ? 'active-nav-item' : ''}`}
              aria-current={activePage === 'contact' ? 'page' : undefined}
              onClick={(e) => handleLinkClick(e, 'contact')}
            >
              Contact
              {activePage === 'contact' && (
                <span className="active-gold-indicator" aria-hidden="true" />
              )}
            </a>
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
            {/* Mobile Features with Expandable Submenu */}
            <li className="navbar-mobile-item mobile-features-item">
              <div className="mobile-features-header">
                <a
                  href="/features"
                  className={`navbar-mobile-link ${activePage === 'features' ? 'active-mobile-item' : ''}`}
                  onClick={(e) => handleLinkClick(e, 'features')}
                >
                  Features
                </a>
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
                          <a
                            key={itemIdx}
                            href={item.href}
                            className="mobile-feature-sublink"
                            onClick={(e) => handleFeatureItemClick(e, item.href)}
                          >
                            <span className="mobile-sublink-icon">{item.icon}</span>
                            <span className="mobile-sublink-name">{item.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                  <a
                    href="/features"
                    className="mobile-view-all-features"
                    onClick={(e) => handleLinkClick(e, 'features')}
                  >
                    <span>View All Features</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              )}
            </li>

            {/* Mobile Solutions with Expandable Submenu */}
            <li className="navbar-mobile-item mobile-features-item">
              <div className="mobile-features-header">
                <a
                  href="/solutions"
                  className={`navbar-mobile-link ${activePage === 'solutions' ? 'active-mobile-item' : ''}`}
                  onClick={(e) => handleLinkClick(e, 'solutions')}
                >
                  Solutions
                </a>
                <button
                  type="button"
                  className="mobile-expand-btn"
                  onClick={() => setMobileSolutionsExpanded(!mobileSolutionsExpanded)}
                  aria-expanded={mobileSolutionsExpanded}
                  aria-label="Expand Solutions List"
                >
                  <ChevronDown
                    size={16}
                    className={`mobile-chevron ${mobileSolutionsExpanded ? 'rotate-open' : ''}`}
                  />
                </button>
              </div>

              {mobileSolutionsExpanded && (
                <div className="mobile-features-accordion animate-fade-in">
                  {solutionCategories.map((cat, idx) => (
                    <div key={idx} className="mobile-cat-group">
                      <span className="mobile-cat-title">{cat.title}</span>
                      <div className="mobile-cat-items">
                        {cat.items.map((item, itemIdx) => (
                          <a
                            key={itemIdx}
                            href={item.href}
                            className="mobile-feature-sublink"
                            onClick={(e) => handleFeatureItemClick(e, item.href)}
                          >
                            <span className="mobile-sublink-icon">{item.icon}</span>
                            <span className="mobile-sublink-name">{item.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                  <a
                    href="/solutions"
                    className="mobile-view-all-features"
                    onClick={(e) => handleLinkClick(e, 'solutions')}
                  >
                    <span>View All Solutions</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              )}
            </li>

            {/* Mobile About Us */}
            <li className="navbar-mobile-item">
              <a
                href="/about"
                className={`navbar-mobile-link ${activePage === 'about' ? 'active-mobile-item' : ''}`}
                onClick={(e) => handleLinkClick(e, 'about')}
              >
                About Us
              </a>
            </li>

            {/* Mobile Contact */}
            <li className="navbar-mobile-item">
              <a
                href="/contact"
                className={`navbar-mobile-link ${activePage === 'contact' ? 'active-mobile-item' : ''}`}
                onClick={(e) => handleLinkClick(e, 'contact')}
              >
                Contact
              </a>
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
