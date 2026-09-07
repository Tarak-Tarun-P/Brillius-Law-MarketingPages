import React from 'react';
import {
  Users,
  Briefcase,
  Calendar,
  FileQuestion,
  FileText,
  Pen,
  ArrowUpRight,
  BookOpen,
  Zap,
  Sparkles,
  FileSearch,
  IndianRupee,
  Landmark,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import './LandingPageFeaturesOverview.css';

interface Feature {
  id: string;
  name: string;
  icon: React.ReactNode;
  path: string;
}

interface FeatureCategory {
  id: string;
  label: string;
  features: Feature[];
}

export const LandingPageFeaturesOverview: React.FC = () => {
  const categories: FeatureCategory[] = [
    {
      id: 'practice',
      label: 'PRACTICE',
      features: [
        {
          id: 'clients',
          name: 'Clients',
          icon: <Users size={20} strokeWidth={1.5} />,
          path: '/client-management',
        },
        {
          id: 'cases',
          name: 'Cases',
          icon: <Briefcase size={20} strokeWidth={1.5} />,
          path: '/cases',
        },
        {
          id: 'hearings',
          name: 'Hearings',
          icon: <Calendar size={20} strokeWidth={1.5} />,
          path: '/hearings',
        },
        {
          id: 'evidence',
          name: 'Evidence',
          icon: <FileQuestion size={20} strokeWidth={1.5} />,
          path: '/evidence',
        },
      ],
    },
    {
      id: 'documents',
      label: 'DOCUMENTS & DRAFTING',
      features: [
        {
          id: 'documents',
          name: 'Documents',
          icon: <FileText size={20} strokeWidth={1.5} />,
          path: '/document-storage',
        },
        {
          id: 'drafting-lab',
          name: 'Drafting Lab',
          icon: <Pen size={20} strokeWidth={1.5} />,
          path: '/drafting-lab',
        },
        {
          id: 'case-drafts',
          name: 'Case Drafts',
          icon: <ArrowUpRight size={20} strokeWidth={1.5} />,
          path: '/case-drafts',
        },
        {
          id: 'compare-review',
          name: 'Compare & Review',
          icon: <FileText size={20} strokeWidth={1.5} />,
          path: '/compare-review',
        },
      ],
    },
    {
      id: 'research',
      label: 'RESEARCH & KNOWLEDGE',
      features: [
        {
          id: 'law-library',
          name: 'Law Library',
          icon: <BookOpen size={20} strokeWidth={1.5} />,
          path: '/law-library',
        },
        {
          id: 'legal-research',
          name: 'Legal Research',
          icon: <Zap size={20} strokeWidth={1.5} />,
          path: '/legal-research',
        },
        {
          id: 'my-journal',
          name: 'My Journal',
          icon: <FileText size={20} strokeWidth={1.5} />,
          path: '/my-journal',
        },
      ],
    },
    {
      id: 'intelligence',
      label: 'AI ASSISTANCE',
      features: [
        {
          id: 'ai-assistant',
          name: 'AI Assistant',
          icon: <Sparkles size={20} strokeWidth={1.5} />,
          path: '/ai-assistant',
        },
        {
          id: 'document-analyzer',
          name: 'Document Analyzer',
          icon: <FileSearch size={20} strokeWidth={1.5} />,
          path: '/document-analyzer',
        },
      ],
    },
    {
      id: 'operations',
      label: 'OPERATIONS',
      features: [
        {
          id: 'billing',
          name: 'Billing & Invoicing',
          icon: <IndianRupee size={20} strokeWidth={1.5} />,
          path: '/billing-invoicing',
        },
        {
          id: 'firm-management',
          name: 'Firm Management',
          icon: <Landmark size={20} strokeWidth={1.5} />,
          path: '/firm-management',
        },
        {
          id: 'ecourts',
          name: 'eCourts Sync',
          icon: <Zap size={20} strokeWidth={1.5} />,
          path: '/ecourts-sync',
        },
        {
          id: 'whatsapp',
          name: 'WhatsApp Alerts',
          icon: <MessageCircle size={20} strokeWidth={1.5} />,
          path: '/whatsapp-alerts',
        },
      ],
    },
  ];

  return (
    <section
      className="landing-features-overview"
      aria-labelledby="features-overview-heading"
    >
      <div className="content-container">
        {/* Section Header */}
        <div className="features-overview-header">
          <div className="features-overview-eyebrow-wrapper">
            <span className="features-overview-eyebrow">FEATURES OVERVIEW</span>
            <span className="features-overview-eyebrow-line" aria-hidden="true" />
          </div>
          <h2 id="features-overview-heading" className="features-overview-heading">
            Everything You Need for Modern Legal Work
          </h2>
          <p className="features-overview-subtext">
            Explore the tools BrilliusLaw brings together for legal research, documents, case management, drafting, and everyday legal workflows.
          </p>
        </div>

        {/* Feature Categories Grid */}
        <div className="features-categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="feature-category">
              <h3 className="category-label">{category.label}</h3>
              <ul className="category-features">
                {category.features.map((feature) => (
                  <li key={feature.id}>
                    <a href={feature.path} className="feature-link">
                      <span className="feature-icon-box" aria-hidden="true">
                        {feature.icon}
                      </span>
                      <span className="feature-name">{feature.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* View All Features CTA */}
        <div className="features-overview-cta-wrapper">
          <a href="/features" className="features-overview-cta">
            <span>View All Features</span>
            <ArrowRight size={16} aria-hidden="true" className="cta-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
};
