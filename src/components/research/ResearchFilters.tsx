import React from 'react';
import { Filter, Calendar, Building2, BookOpen, Check } from 'lucide-react';
import './ResearchFilters.css';

export const ResearchFilters: React.FC = () => {
  return (
    <section className="research-filters-section" aria-labelledby="filters-heading">
      <div className="content-container">
        <div className="filters-header">
          <span className="filters-eyebrow">TARGETED DISCOVERY</span>
          <h2 id="filters-heading" className="filters-title">
            Narrow Your Search.
          </h2>
          <p className="filters-desc">
            Focus on specific jurisdictions, courts, date ranges, and statutory sections to pinpoint relevant case law quickly.
          </p>
        </div>

        {/* Realistic Filter Controls Mockup */}
        <div className="filters-card-wrapper">
          <div className="filters-topbar">
            <div className="f-topbar-left">
              <Filter size={16} color="#C6A15B" />
              <strong className="f-topbar-title">Search &amp; Refinement Options</strong>
            </div>
            <span className="f-topbar-badge">4 Active Criteria</span>
          </div>

          <div className="filters-grid">
            {/* Filter 1: Forum / Court */}
            <div className="filter-group-box">
              <div className="filter-group-top">
                <Building2 size={15} color="#C6A15B" />
                <span className="filter-group-label">COURT / FORUM</span>
              </div>
              <div className="filter-options-list">
                <span className="filter-pill active"><Check size={11} /> Supreme Court of India</span>
                <span className="filter-pill">Delhi High Court</span>
                <span className="filter-pill">Bombay High Court</span>
                <span className="filter-pill">NCLAT / Tribunals</span>
              </div>
            </div>

            {/* Filter 2: Decision Date Range */}
            <div className="filter-group-box">
              <div className="filter-group-top">
                <Calendar size={15} color="#C6A15B" />
                <span className="filter-group-label">DECISION TIMELINE</span>
              </div>
              <div className="filter-options-list">
                <span className="filter-pill">All Years</span>
                <span className="filter-pill active"><Check size={11} /> Last 10 Years (2016–2026)</span>
                <span className="filter-pill">Constitution Bench Precedents</span>
              </div>
            </div>

            {/* Filter 3: Statutory Section */}
            <div className="filter-group-box">
              <div className="filter-group-top">
                <BookOpen size={15} color="#C6A15B" />
                <span className="filter-group-label">SPECIFIC STATUTE / SECTION</span>
              </div>
              <div className="filter-options-list">
                <span className="filter-pill active"><Check size={11} /> Registration Act § 49</span>
                <span className="filter-pill">Specific Relief Act § 16</span>
                <span className="filter-pill">Arbitration Act § 34</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
