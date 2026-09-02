import React, { useState } from 'react';
import { Building2, Briefcase, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';
import './ChooseYourJourney.css';

export const ChooseYourJourney: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'firm' | 'lawyer' | 'student'>('lawyer');

  const journeyData = {
    firm: {
      role: 'For Law Firms & Legal Teams',
      title: 'Keep Your Firm Organized & Connected',
      desc: 'Bring your partners, associates, cases, and client billing together into one secure workspace that helps your team get more done.',
      highlights: [
        'Easy setup and simple team onboarding',
        'Clear team permissions for partners and associates',
        'Simple billing, invoices, and payment tracking',
      ],
      primaryCTA: 'Schedule a Firm Demo',
      primaryLink: '#get-started',
      secondaryCTA: 'View All Features',
      secondaryLink: '#/features',
    },
    lawyer: {
      role: 'For Lawyers & Advocates',
      title: 'Save Time on Your Everyday Legal Work',
      desc: 'Keep all your cases organized in one place, receive automated court date alerts, draft documents faster, and find legal answers in seconds.',
      highlights: [
        'Simple case tracker and personal matter list',
        'Automatic court updates and hearing reminders',
        'Easy drafting tools with ready-to-use Indian legal clauses',
      ],
      primaryCTA: 'Start Free Lawyer Trial',
      primaryLink: '#get-started',
      secondaryCTA: 'Explore Drafting Lab',
      secondaryLink: '#/features',
    },
    student: {
      role: 'For Law Students & Researchers',
      title: 'Learn & Research Indian Law Faster',
      desc: 'Understand landmark court decisions with simple summaries, explore Indian laws in plain English, and prepare winning moot briefs and assignments.',
      highlights: [
        'Special student-friendly access and pricing',
        'Search Indian laws and Bare Acts in plain language',
        'Evidence storage for moot court exhibits and research documents',
        'Reliable case summaries with verified source citations',
      ],
      primaryCTA: 'Explore Student Access',
      primaryLink: '#get-started',
      secondaryCTA: 'Browse Research Tools',
      secondaryLink: '#/features',
    },
  };

  const current = journeyData[activeTab];

  return (
    <section className="journey-section" aria-labelledby="journey-heading">
      <div className="content-container">
        <div className="journey-card">
          <div className="journey-header">
            <span className="journey-eyebrow">GET STARTED WITH BRILLIUSLAW</span>
            <h2 id="journey-heading" className="journey-title">
              Choose Your Journey
            </h2>
            <p className="journey-sub">
              Pick the option that fits you best to see how BrilliusLaw can help.
            </p>
          </div>

          {/* 3 Interactive Journey Selector Tabs */}
          <div className="journey-tabs-row" role="tablist" aria-label="Select your role">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'firm'}
              className={`journey-tab-btn ${activeTab === 'firm' ? 'active' : ''}`}
              onClick={() => setActiveTab('firm')}
            >
              <Building2 size={18} />
              <span>[ FIRM ]</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'lawyer'}
              className={`journey-tab-btn ${activeTab === 'lawyer' ? 'active' : ''}`}
              onClick={() => setActiveTab('lawyer')}
            >
              <Briefcase size={18} />
              <span>[ LAWYER ]</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'student'}
              className={`journey-tab-btn ${activeTab === 'student' ? 'active' : ''}`}
              onClick={() => setActiveTab('student')}
            >
              <GraduationCap size={18} />
              <span>[ STUDENT ]</span>
            </button>
          </div>

          {/* Active Tab Showcase Box */}
          <div className="journey-content-box animate-fade-in" key={activeTab}>
            <div className="journey-content-left">
              <span className="journey-role-badge">{current.role}</span>
              <h3 className="journey-box-title">{current.title}</h3>
              <p className="journey-box-desc">{current.desc}</p>

              <ul className="journey-highlights-list">
                {current.highlights.map((h, idx) => (
                  <li key={idx} className="journey-highlight-item">
                    <CheckCircle2 size={16} color="#C6A15B" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="journey-buttons-row">
                <a href={current.primaryLink} className="btn-journey-primary">
                  <span>{current.primaryCTA}</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </a>

                <a href={current.secondaryLink} className="btn-journey-secondary">
                  <span>{current.secondaryCTA}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
