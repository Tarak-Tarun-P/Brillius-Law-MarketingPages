import React from 'react';
import { Landmark, Shield, CheckCircle2 } from 'lucide-react';
import './ResearchCourtCoverage.css';

interface CourtItem {
  name: string;
  jurisdiction: string;
  status: string;
  tag: string;
}

export const ResearchCourtCoverage: React.FC = () => {
  const courts: CourtItem[] = [
    {
      name: 'Supreme Court of India',
      jurisdiction: 'Apex Judicial Authority',
      status: 'Constitutional & Appellate Judgments',
      tag: 'Apex Court',
    },
    {
      name: 'High Court of Delhi',
      jurisdiction: 'Principal Commercial & Writ Jurisdiction',
      status: 'Civil, Criminal, Commercial & IP Decisions',
      tag: 'High Court',
    },
    {
      name: 'High Court of Bombay',
      jurisdiction: 'Maharashtra & Goa Jurisdiction',
      status: 'Corporate, Commercial & Appellate Orders',
      tag: 'High Court',
    },
    {
      name: 'High Court of Madras',
      jurisdiction: 'Charter High Court Jurisdiction',
      status: 'Civil, Maritime & Constitutional Rulings',
      tag: 'High Court',
    },
    {
      name: 'High Court of Karnataka',
      jurisdiction: 'Bengaluru Commercial & Appellate Division',
      status: 'Corporate, Tech Dispute & Tax Precedents',
      tag: 'High Court',
    },
    {
      name: 'High Court of Judicature at Allahabad',
      jurisdiction: 'Largest High Court Bench Coverage',
      status: 'Civil, Criminal & Revenue Judgments',
      tag: 'High Court',
    },
    {
      name: 'High Court at Calcutta',
      jurisdiction: 'Oldest High Court in India',
      status: 'Original, Appellate & Commercial Benches',
      tag: 'High Court',
    },
  ];

  return (
    <section className="court-coverage-section" aria-labelledby="court-coverage-heading">
      <div className="content-container">
        <div className="coverage-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">JURISDICTIONAL COVERAGE</span>
          </div>
          <h2 id="court-coverage-heading" className="coverage-title">
            Search Across Indian Courts.
          </h2>
          <p className="coverage-desc">
            Explore available judgments from the Supreme Court of India and High Courts available in the platform.
          </p>
        </div>

        {/* Court Cards Grid */}
        <div className="courts-cards-grid">
          {courts.map((court, idx) => (
            <div key={idx} className={`court-card ${idx === 0 ? 'apex-court-card' : ''}`}>
              <div className="court-card-top">
                <div className="court-icon-wrap">
                  {idx === 0 ? <Shield size={18} /> : <Landmark size={18} />}
                </div>
                <span className="court-tag-pill">{court.tag}</span>
              </div>
              <h3 className="court-name-h3">{court.name}</h3>
              <span className="court-jur-text">{court.jurisdiction}</span>
              <div className="court-status-row">
                <CheckCircle2 size={12} color="#C6A15B" />
                <span className="court-status-text">{court.status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Clarifying Coverage Note */}
        <div className="coverage-notice-banner">
          <p className="coverage-notice-text">
            <strong>Platform Scope Note:</strong> Legal Research provides access to selected historical and recent judgments available in the platform from the Supreme Court and major High Courts. Content coverage continues to expand.
          </p>
        </div>
      </div>
    </section>
  );
};
