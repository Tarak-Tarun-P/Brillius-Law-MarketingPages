import React from 'react';
import {
  Briefcase,
  FileCheck2,
  BookOpen,
  Sparkles,
  Layers,
  ArrowRight,
} from 'lucide-react';
import './LandingPageFeaturesOverview.css';

interface FeatureItem {
  id: string;
  name: string;
  path: string;
}

interface FeatureCategory {
  number: string;
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: FeatureItem[];
}

export const LandingPageFeaturesOverview: React.FC = () => {
  const categories: FeatureCategory[] = [
    {
      number: '01',
      id: 'practice',
      title: 'PRACTICE',
      description: 'Manage the matters and people at the heart of your practice.',
      icon: <Briefcase size={20} strokeWidth={1.6} />,
      features: [
        { id: 'clients', name: 'Clients', path: '/client-management' },
        { id: 'cases', name: 'Cases', path: '/cases' },
        { id: 'hearings', name: 'Hearings', path: '/hearings' },
        { id: 'evidence', name: 'Evidence', path: '/evidence' },
      ],
    },
    {
      number: '02',
      id: 'documents-drafting',
      title: 'DOCUMENTS & DRAFTING',
      description: 'Create, store, compare, and perfect legal documents seamlessly.',
      icon: <FileCheck2 size={20} strokeWidth={1.6} />,
      features: [
        { id: 'documents', name: 'Documents', path: '/document-storage' },
        { id: 'drafting-lab', name: 'Drafting Lab', path: '/drafting-lab' },
        { id: 'case-drafts', name: 'Case Drafts', path: '/case-drafts' },
        { id: 'compare-review', name: 'Compare & Review', path: '/compare-review' },
      ],
    },
    {
      number: '03',
      id: 'research-knowledge',
      title: 'RESEARCH & KNOWLEDGE',
      description: 'Indian jurisprudence, primary authorities, and personalized notes.',
      icon: <BookOpen size={20} strokeWidth={1.6} />,
      features: [
        { id: 'law-library', name: 'Law Library', path: '/law-library' },
        { id: 'legal-research', name: 'Legal Research', path: '/legal-research' },
        { id: 'my-journal', name: 'My Journal', path: '/my-journal' },
      ],
    },
    {
      number: '04',
      id: 'ai-assistance',
      title: 'AI ASSISTANCE',
      description: 'Jurisprudence-aware intelligence for analysis and everyday drafting.',
      icon: <Sparkles size={20} strokeWidth={1.6} />,
      features: [
        { id: 'ai-assistant', name: 'AI Assistant', path: '/ai-assistant' },
        { id: 'document-analyzer', name: 'Document Analyzer', path: '/document-analyzer' },
      ],
    },
    {
      number: '05',
      id: 'operations',
      title: 'OPERATIONS',
      description: 'Firm logistics, billing, court updates, and team notifications.',
      icon: <Layers size={20} strokeWidth={1.6} />,
      features: [
        { id: 'billing', name: 'Billing & Invoicing', path: '/billing-invoicing' },
        { id: 'firm-management', name: 'Firm Management', path: '/firm-management' },
        { id: 'ecourts', name: 'eCourts Sync', path: '/ecourts-sync' },
        { id: 'whatsapp', name: 'WhatsApp Alerts', path: '/whatsapp-alerts' },
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

        {/* 5 Refined Category Cards Row */}
        <div className="features-overview-cards" role="list">
          {categories.map((category) => (
            <article
              key={category.id}
              className="features-overview-card"
              role="listitem"
            >
              {/* Card Top Meta */}
              <div className="card-top-meta">
                <span className="card-number">{category.number}</span>
                <span className="card-icon" aria-hidden="true">
                  {category.icon}
                </span>
              </div>

              {/* Category Title */}
              <h3 className="card-title">{category.title}</h3>

              {/* Short Description */}
              <p className="card-description">{category.description}</p>

              {/* Subtle Feature List with clean inline links */}
              <div className="card-features-wrapper">
                <div className="card-features-tagline">Capabilities</div>
                <div className="card-features-list">
                  {category.features.map((feature, idx) => (
                    <React.Fragment key={feature.id}>
                      <a
                        href={feature.path}
                        className="card-feature-link"
                        title={`Explore ${feature.name}`}
                      >
                        {feature.name}
                      </a>
                      {idx < category.features.length - 1 && (
                        <span className="card-feature-sep" aria-hidden="true">
                          ·
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </article>
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
