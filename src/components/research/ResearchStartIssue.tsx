import React from 'react';
import { Search, HelpCircle, ArrowRight, BookOpen } from 'lucide-react';
import './ResearchStartIssue.css';

export const ResearchStartIssue: React.FC = () => {
  return (
    <section className="research-start-section" aria-labelledby="start-issue-heading">
      <div className="content-container">
        <div className="start-header">
          <span className="start-eyebrow">START YOUR RESEARCH</span>
          <h2 id="start-issue-heading" className="start-title">
            Start With the Question You're Researching.
          </h2>
          <p className="start-desc">
            Enter the legal issue, statutory question, or specific terms you want to explore, without needing to formulate complex Boolean operators.
          </p>
        </div>

        {/* Realistic Issue Search Bar & Context Card */}
        <div className="start-search-card">
          <div className="start-topbar">
            <div className="start-topbar-left">
              <Search size={16} color="#C6A15B" />
              <strong className="start-topbar-title">Issue-Focused Search Entry</strong>
            </div>
            <span className="start-topbar-badge">Natural Legal Inquiry</span>
          </div>

          <div className="start-card-body">
            <div className="query-display-box">
              <HelpCircle size={18} color="#C6A15B" />
              <span className="active-issue-string">
                "Can an unregistered agreement to sell be admitted in evidence in a suit for specific performance?"
              </span>
              <span className="btn-search-simulate">
                <span>Search</span>
                <ArrowRight size={13} />
              </span>
            </div>

            <div className="statutory-preview-row">
              <span className="preview-label">STATUTORY SCOPE:</span>
              <span className="scope-tag"><BookOpen size={11} /> Registration Act, 1908 § 49 Proviso</span>
              <span className="scope-tag"><BookOpen size={11} /> Specific Relief Act, 1963 § 16</span>
              <span className="scope-tag"><BookOpen size={11} /> Transfer of Property Act § 53A</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
