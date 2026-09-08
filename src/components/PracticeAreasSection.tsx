'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Scale, Users, ShieldCheck, Landmark, Check, ArrowRight } from 'lucide-react';
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
      tagline: 'End-to-End Litigation & Court Preparation Tools',
      description:
        'BrilliusLaw brings case facts, hearings, exhibits, court dates, precedents, and pleading drafts into one connected litigation workspace.',
      keyPoints: [
        'Case Management & Timeline Tracking',
        'Client & Matter Management',
        'Hearings & Calendar Scheduling',
        'Evidence & Exhibits Repository',
        'Legal Research & Precedent Search',
        'Case Drafts & Legal Notice Preparation',
        'Document Storage & Management',
      ],
      ctaLink: '/cases',
      ctaText: 'Explore Litigation Workflows',
    },
    {
      id: 'internal-teams',
      tabLabel: 'Internal Legal Teams',
      title: 'Internal Legal Teams',
      icon: <Users size={20} className="practice-icon" />,
      tagline: 'Unified Workspace for Corporate Legal Operations',
      description:
        'Keep matters, contracts, documents, reviews, research, and approvals organized across your legal work with purpose-built collaboration tools.',
      keyPoints: [
        'Document Storage & Management',
        'Compare & Review Version Intelligence',
        'Document Approvals & Workflow Tracking',
        'Legal Research & Precedent Intelligence',
        'Document Analyzer for Instant Insights',
        'Drafting Lab & Standard Clause Library',
      ],
      ctaLink: '/compare-review',
      ctaText: 'Explore Legal Team Workflows',
    },
    {
      id: 'regulatory',
      tabLabel: 'Regulatory & Compliance',
      title: 'Regulatory & Compliance',
      icon: <ShieldCheck size={20} className="practice-icon" />,
      tagline: 'Statutory Intelligence & Compliance Organization',
      description:
        'Bring legal research, regulatory information, documents, and related work together in one organized workspace.',
      keyPoints: [
        'Legal Research for Case Precedents',
        'Law Library with Bare Acts & Statutes',
        'Document Storage & Management',
        'Document Analyzer for Fast Review',
      ],
      ctaLink: '/legal-research',
      ctaText: 'Explore Regulatory Workflows',
    },
    {
      id: 'chambers',
      tabLabel: 'Chambers & Practice Management',
      title: 'Chambers & Practice Management',
      icon: <Landmark size={20} className="practice-icon" />,
      tagline: 'Streamlined Chamber Operations & Team Coordination',
      description:
        'BrilliusLaw unifies your chamber practice with integrated client tracking, hearing schedules, fee management, and court updates.',
      keyPoints: [
        'Client Management & Contacts',
        'Case Management & Matter Tracking',
        'Firm & Team Management',
        'Billing & Invoicing',
        'Document Storage & Management',
        'Hearings & Daily Cause-List Tracking',
        'WhatsApp Alerts for Immediate Updates',
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
                <Link href={currentArea.ctaLink} className="practice-action-link">
                  <span>{currentArea.ctaText}</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
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
