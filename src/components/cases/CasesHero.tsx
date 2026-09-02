import React from 'react';
import { ArrowRight, ArrowDown, Search, Plus, Scale, CheckCircle2 } from 'lucide-react';
import './CasesHero.css';

export const CasesHero: React.FC = () => {
  const scrollToHowItWorks = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('cases-how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sampleCases = [
    {
      title: 'ABC Technologies vs. XYZ Ltd.',
      client: 'ABC Technologies Pvt. Ltd.',
      court: 'High Court of Delhi',
      caseNo: 'CS (COMM) 142/2026',
      status: 'Active',
      priority: 'High',
    },
    {
      title: 'Property Title & Injunction Dispute',
      client: 'Ravi Kumar',
      court: 'District Court, Chandigarh',
      caseNo: 'Civil Suit 88/2025',
      status: 'Pending',
      priority: 'Medium',
    },
    {
      title: 'Commercial Supply Contract Matter',
      client: 'XYZ Industries Ltd.',
      court: 'Commercial Court, Mumbai',
      caseNo: 'Comm. Suit 312/2026',
      status: 'Active',
      priority: 'High',
    },
  ];

  return (
    <section className="cases-hero-section" aria-label="Case Management Hero">
      {/* Ambient background glows */}
      <div className="cases-hero-glow glow-gold" aria-hidden="true" />
      <div className="cases-hero-glow glow-navy" aria-hidden="true" />

      <div className="content-container">
        <div className="cases-hero-grid">
          {/* LEFT: Headline & Value Proposition */}
          <div className="cases-hero-left animate-fade-in-up">
            <div className="cases-hero-eyebrow-wrapper">
              <span className="cases-hero-eyebrow">CASE MANAGEMENT</span>
              <span className="cases-hero-eyebrow-line" aria-hidden="true" />
            </div>

            <h1 className="cases-hero-headline">
              Keep Your Cases
              <br />
              Organized.
            </h1>

            <p className="cases-hero-description">
              Keep case details, clients, hearings, and important information together so you can stay clear on every matter.
            </p>

            <div className="cases-hero-actions">
              <a href="#get-started" className="btn-cases-primary">
                <span>Explore Case Management</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href="#cases-how-it-works" className="btn-cases-secondary" onClick={scrollToHowItWorks}>
                <span>See How It Works</span>
                <ArrowDown size={15} aria-hidden="true" />
              </a>
            </div>

            {/* Quick trust reassurance */}
            <div className="cases-trust-pills">
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Connected to Clients</span>
              </span>
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Hearings & Timelines</span>
              </span>
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>All Courts & Forums</span>
              </span>
            </div>
          </div>

          {/* RIGHT: Realistic Case Directory Mockup */}
          <div className="cases-hero-right animate-fade-in">
            <div className="cases-directory-card">
              {/* Window Header */}
              <div className="cases-window-header">
                <div className="cases-window-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <span className="cases-window-title">BrilliusLaw // Cases Hub</span>
                <span className="cases-window-badge">Matter Directory</span>
              </div>

              {/* Toolbar Area */}
              <div className="cases-toolbar">
                <div className="cases-search-box">
                  <Search size={14} color="#94A3B8" />
                  <span className="search-placeholder">Search cases by title, court, or client...</span>
                </div>
                <button type="button" className="btn-add-case-demo" tabIndex={-1}>
                  <Plus size={14} />
                  <span>New Case</span>
                </button>
              </div>

              {/* Filter Tabs */}
              <div className="cases-filter-tabs">
                <span className="cases-tab active-tab">All Cases (18)</span>
                <span className="cases-tab">Active (14)</span>
                <span className="cases-tab">Pending (3)</span>
                <span className="cases-tab">Closed (1)</span>
              </div>

              {/* Case Items List */}
              <div className="cases-list-container">
                {sampleCases.map((cs, idx) => (
                  <div key={idx} className="case-row-item">
                    <div className="case-main-info">
                      <div className="case-icon-box">
                        <Scale size={16} color="#091526" />
                      </div>
                      <div className="case-text-block">
                        <strong className="case-title-text">{cs.title}</strong>
                        <div className="case-meta-line">
                          <span className="meta-client">Client: {cs.client}</span>
                          <span className="meta-dot">•</span>
                          <span className="meta-court">{cs.court}</span>
                        </div>
                      </div>
                    </div>

                    <div className="case-status-block">
                      <span className={`case-priority-pill priority-${cs.priority.toLowerCase()}`}>
                        {cs.priority}
                      </span>
                      <span className={`case-state-pill state-${cs.status.toLowerCase()}`}>
                        {cs.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
