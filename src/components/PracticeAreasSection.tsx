import React, { useState } from 'react';
import { Scale, FileSpreadsheet, ShieldCheck, Landmark, Check, ArrowRight } from 'lucide-react';
import './PracticeAreasSection.css';

interface PracticeArea {
  id: string;
  tabLabel: string;
  title: string;
  icon: React.ReactNode;
  tagline: string;
  description: string;
  keyPoints: string[];
  ctaLink: string;
  ctaText: string;
}

export const PracticeAreasSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('litigation');

  const practiceAreas: PracticeArea[] = [
    {
      id: 'litigation',
      tabLabel: 'Litigation & Dispute Resolution',
      title: 'Litigation & Dispute Resolution',
      icon: <Scale size={20} className="practice-icon" />,
      tagline: 'Precision litigation workflow & court preparation',
      description:
        'Research case law and precedents, review case facts chronologically, manage hearings and matters, and prepare legal notices and drafts.',
      keyPoints: [
        'Case-law and precedent research',
        'Chronological case and fact review',
        'Hearing and matter tracking',
        'Legal notice and document drafting',
      ],
      ctaLink: '/cases',
      ctaText: 'Explore Litigation Workflows',
    },
    {
      id: 'corporate',
      tabLabel: 'Corporate & M&A',
      title: 'Corporate & M&A',
      icon: <FileSpreadsheet size={20} className="practice-icon" />,
      tagline: 'Structured contract review & transaction workspaces',
      description:
        'Review contracts, identify important clauses, organize transaction documents, and support due-diligence work in one place.',
      keyPoints: [
        'Contract review',
        'Clause issue identification',
        'Document comparison',
        'Due-diligence support',
      ],
      ctaLink: '/compare-review',
      ctaText: 'Explore Corporate & M&A Tools',
    },
    {
      id: 'regulatory',
      tabLabel: 'Regulatory & Compliance',
      title: 'Regulatory & Compliance',
      icon: <ShieldCheck size={20} className="practice-icon" />,
      tagline: 'Statutory awareness & tribunal tracking',
      description:
        'Keep track of relevant statutory, regulatory, and tribunal developments and organize the legal work needed to respond.',
      keyPoints: [
        'Statutory research',
        'Regulatory updates',
        'Notifications',
        'Tribunal developments',
      ],
      ctaLink: '/legal-research',
      ctaText: 'Explore Regulatory Workflows',
    },
    {
      id: 'chambers',
      tabLabel: 'Chambers & Practice Management',
      title: 'Chambers & Practice Management',
      icon: <Landmark size={20} className="practice-icon" />,
      tagline: 'Unified chamber operations & cause-list clarity',
      description:
        'Keep daily chamber work organized with case tracking, cause-list updates, evidence, documents, and client matters.',
      keyPoints: [
        'Cause-list tracking',
        'Evidence organization',
        'Client matter tracking',
        'Case and document management',
      ],
      ctaLink: '/firm-management',
      ctaText: 'Explore Chambers Management',
    },
  ];

  const currentArea = practiceAreas.find((item) => item.id === activeTab) || practiceAreas[0];

  return (
    <section className="practice-areas-section" aria-labelledby="practice-areas-heading">
      <div className="content-container">
        {/* Section Header */}
        <div className="practice-header">
          <div className="practice-eyebrow-wrapper">
            <span className="practice-eyebrow">PRACTICE AREA WORKSPACES</span>
            <span className="practice-eyebrow-line" aria-hidden="true" />
          </div>
          <h2 id="practice-areas-heading" className="practice-heading">
            Built Around the Way You Practice.
          </h2>
          <p className="practice-subtext">
            Whether you handle litigation, transactions, compliance, or chamber work, BrilliusLaw brings the tools you need into one legal workspace.
          </p>
        </div>

        {/* Tab Selector Row */}
        <div className="practice-tabs-container" role="tablist" aria-label="Practice Area Selector">
          <div className="practice-tabs-track">
            {practiceAreas.map((area) => {
              const isSelected = activeTab === area.id;
              return (
                <button
                  key={area.id}
                  id={`tab-${area.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`panel-${area.id}`}
                  className={`practice-tab-btn ${isSelected ? 'active' : ''}`}
                  onClick={() => setActiveTab(area.id)}
                >
                  <span className="tab-icon-wrapper" aria-hidden="true">
                    {area.icon}
                  </span>
                  <span className="tab-label-text">{area.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Practice Content Panel */}
        <div
          key={currentArea.id}
          id={`panel-${currentArea.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${currentArea.id}`}
          className="practice-content-panel"
        >
          <div className="practice-panel-grid">
            {/* Left Content Column */}
            <div className="practice-panel-left">
              <div className="practice-panel-badge">
                <span className="practice-badge-dot" aria-hidden="true" />
                <span className="practice-badge-text">{currentArea.tagline}</span>
              </div>

              <h3 className="practice-panel-title">{currentArea.title}</h3>
              <p className="practice-panel-desc">{currentArea.description}</p>

              <div className="practice-panel-action">
                <a href={currentArea.ctaLink} className="practice-action-link">
                  <span>{currentArea.ctaText}</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Right Capabilities Column */}
            <div className="practice-panel-right">
              <div className="practice-capabilities-card">
                <div className="practice-capabilities-header">
                  <span className="capabilities-label">CORE CAPABILITIES</span>
                  <span className="capabilities-accent" aria-hidden="true">◇</span>
                </div>

                <ul className="practice-capabilities-list">
                  {currentArea.keyPoints.map((point, index) => (
                    <li key={index} className="practice-capability-item">
                      <div className="capability-check-icon" aria-hidden="true">
                        <Check size={14} strokeWidth={2.5} />
                      </div>
                      <span className="capability-text">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
