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
  activePage?: 'home' | 'features' | 'solutions' | 'about' | 'contact';
  onNavigate?: (page: 'home' | 'features' | 'solutions' | 'about' | 'contact') => void;
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
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const featureCategories: FeatureCategory[] = [
    {
      title: 'PRACTICE',
      items: [
        {
          name: 'Clients',
          desc: 'Manage your client information.',
          href: '#/features/clients',
          icon: <Users size={16} />,
        },
        {
          name: 'Cases',
          desc: 'Keep your cases organized.',
          href: '#/features/cases',
          icon: <Briefcase size={16} />,
        },
        {
          name: 'Hearings',
          desc: 'Stay on top of important dates.',
          href: '#/features/hearings',
          icon: <Calendar size={16} />,
        },
        {
          name: 'Evidence',
          desc: 'Keep your evidence within reach.',
          href: '#/features/evidence',
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
          href: '#/features/documents',
          icon: <FileText size={16} />,
        },
        {
          name: 'Drafting Lab',
          desc: 'Create and refine legal documents.',
          href: '#/features/drafting-lab',
          icon: <PenLine size={16} />,
        },
        {
          name: 'Case Drafts',
          desc: 'Keep your case drafts organized.',
          href: '#/features/case-drafts',
          icon: <FileCheck size={16} />,
        },
        {
          name: 'Compare & Review',
          desc: 'See exactly what changed.',
          href: '#/features/compare-review',
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
          href: '#/features/law-library',
          icon: <BookOpen size={16} />,
        },
        {
          name: 'Legal Research',
          desc: 'Find useful legal information.',
          href: '#/features/legal-research',
          icon: <Search size={16} />,
        },
        {
          name: 'My Journal',
          desc: 'Record notes and save important references.',
          href: '#/features/my-journal',
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
          href: '#/features/ai-assistant',
          icon: <Sparkles size={16} />,
        },
        {
          name: 'Document Analyzer',
          desc: 'Understand important info in documents.',
          href: '#/features/document-analyzer',
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
          href: '#/features/billing',
          icon: <Receipt size={16} />,
        },
        {
          name: 'Firm Management',
          desc: 'Manage your team and workspace.',
          href: '#/features/firm-management',
          icon: <Building2 size={16} />,
        },
        {
          name: 'eCourts Updates',
          desc: 'Keep track of relevant case updates.',
          href: '#/features/ecourts-sync',
          icon: <Landmark size={16} />,
        },
        {
          name: 'WhatsApp Alerts',
          desc: 'Stay informed about important updates.',
          href: '#/features/whatsapp-alerts',
          icon: <MessageSquare size={16} />,
        },
      ],
    },
  ];

  // Close dropdown on click outside or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setFeaturesDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setFeaturesDropdownOpen(false);
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
    setFeaturesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setFeaturesDropdownOpen(false);
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
    }
  };

  const handleFeatureItemClick = (
    e: React.MouseEvent,
    href: string
  ) => {
    setFeaturesDropdownOpen(false);
    setMobileMenuOpen(false);

    if (onNavigate) {
      e.preventDefault();
      if (href === '#/features/clients') {
        onNavigate('clients' as any);
        window.location.hash = '/features/clients';
        return;
      }
      if (href === '#/features/cases') {
        onNavigate('cases' as any);
        window.location.hash = '/features/cases';
        return;
      }
      if (href === '#/features/hearings') {
        onNavigate('hearings' as any);
        window.location.hash = '/features/hearings';
        return;
      }
      if (href === '#/features/evidence') {
        onNavigate('evidence' as any);
        window.location.hash = '/features/evidence';
        return;
      }
      if (href === '#/features/compare-review') {
        onNavigate('compare-review' as any);
        window.location.hash = '/features/compare-review';
        return;
      }
      if (href === '#/features/documents' || href === '#/features/document-storage') {
        onNavigate('document-storage' as any);
        window.location.hash = '/features/documents';
        return;
      }
      if (href === '#/features/drafting-lab') {
        onNavigate('drafting-lab' as any);
        window.location.hash = '/features/drafting-lab';
        return;
      }
      if (href === '#/features/case-drafts' || href === '#/features/drafts') {
        onNavigate('case-drafts' as any);
        window.location.hash = '/features/case-drafts';
        return;
      }
      if (href === '#/features/law-library') {
        onNavigate('law-library' as any);
        window.location.hash = '/features/law-library';
        return;
      }
      if (href === '#/features/my-journal') {
        onNavigate('my-journal' as any);
        window.location.hash = '/features/my-journal';
        return;
      }
      if (href === '#/features/legal-research') {
        onNavigate('legal-research' as any);
        window.location.hash = '/features/legal-research';
        return;
      }
      if (href === '#/features/firm-management') {
        onNavigate('firm-management' as any);
        window.location.hash = '/features/firm-management';
        return;
      }
      if (href === '#/features/billing') {
        onNavigate('billing' as any);
        window.location.hash = '/features/billing';
        return;
      }
      if (href === '#/features/ecourts-sync' || href === '#/features/ecourts') {
        onNavigate('ecourts' as any);
        window.location.hash = '/features/ecourts-sync';
        return;
      }
      if (href === '#/features/whatsapp-alerts' || href === '#/features/whatsapp') {
        onNavigate('whatsapp-alerts' as any);
        window.location.hash = '/features/whatsapp-alerts';
        return;
      }
      if (href === '#/features/document-analyzer') {
        onNavigate('document-analyzer' as any);
        window.location.hash = '/features/document-analyzer';
        return;
      }
      if (href === '#/features/ai-assistant') {
        onNavigate('ai-assistant' as any);
        window.location.hash = '/features/ai-assistant';
        return;
      }
      onNavigate('features');
      const hashPart = href.includes('#') ? href.substring(href.indexOf('#')) : '';
      if (hashPart) {
        window.location.hash = hashPart.replace('#/', '/');
        // Smooth scroll if element exists
        const anchorId = hashPart.split('#')[2] || hashPart.split('#')[1];
        if (anchorId) {
          setTimeout(() => {
            const el = document.getElementById(anchorId);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }
      }
    }
  };

  return (
    <header className="navbar-container animate-fade-in-down" ref={dropdownRef}>
      <nav className="navbar-inner" aria-label="Main Navigation">
        {/* Left: Logo */}
        <div className="navbar-logo-wrapper">
          <a
            href="#/"
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
                href="#/features"
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
                    href="#/features"
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
                    href="#/features"
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

          {/* 2. SOLUTIONS */}
          <li className="navbar-item">
            <a
              href="#/solutions"
              className={`navbar-link ${activePage === 'solutions' ? 'active-nav-item' : ''}`}
              aria-current={activePage === 'solutions' ? 'page' : undefined}
              onClick={(e) => handleLinkClick(e, 'solutions')}
            >
              Solutions
              {activePage === 'solutions' && (
                <span className="active-gold-indicator" aria-hidden="true" />
              )}
            </a>
          </li>

          {/* 3. ABOUT US */}
          <li className="navbar-item">
            <a
              href="#/about"
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
              href="#/contact"
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
                  href="#/features"
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
                    href="#/features"
                    className="mobile-view-all-features"
                    onClick={(e) => handleLinkClick(e, 'features')}
                  >
                    <span>View All Features</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              )}
            </li>

            {/* Mobile Solutions */}
            <li className="navbar-mobile-item">
              <a
                href="#/solutions"
                className={`navbar-mobile-link ${activePage === 'solutions' ? 'active-mobile-item' : ''}`}
                onClick={(e) => handleLinkClick(e, 'solutions')}
              >
                Solutions
              </a>
            </li>

            {/* Mobile About Us */}
            <li className="navbar-mobile-item">
              <a
                href="#/about"
                className={`navbar-mobile-link ${activePage === 'about' ? 'active-mobile-item' : ''}`}
                onClick={(e) => handleLinkClick(e, 'about')}
              >
                About Us
              </a>
            </li>

            {/* Mobile Contact */}
            <li className="navbar-mobile-item">
              <a
                href="#/contact"
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
