import React, { useState } from 'react';
import { Search, CheckCircle2, Landmark, ArrowRight } from 'lucide-react';
import './ECourtsCnrLookup.css';

export const ECourtsCnrLookup: React.FC = () => {
  const [cnrInput, setCnrInput] = useState('DLHC010048922023');
  const [isRetrieved, setIsRetrieved] = useState(true);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRetrieved(true);
  };

  return (
    <section id="ecourts-cnr-section" className="ecourts-cnr-section" aria-labelledby="cnr-heading">
      <div className="content-container">
        <div className="cnr-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">CASE NAVIGATION RECORD</span>
          </div>
          <h2 id="cnr-heading" className="cnr-title">
            Start With a CNR Number.
          </h2>
          <p className="cnr-desc">
            Enter the Case Navigation Record (CNR) number and bring the available court case information into your matter.
          </p>
        </div>

        {/* 3 Step Mini Progression Bar */}
        <div className="cnr-step-progression">
          <div className="cnr-prog-step active">
            <span className="step-num">01</span>
            <span className="step-txt">Enter CNR</span>
          </div>
          <ArrowRight size={14} color="#C6A15B" />
          <div className="cnr-prog-step active">
            <span className="step-num">02</span>
            <span className="step-txt">Retrieve Case Information</span>
          </div>
          <ArrowRight size={14} color="#C6A15B" />
          <div className="cnr-prog-step active">
            <span className="step-num">03</span>
            <span className="step-txt">Review Your Matter</span>
          </div>
        </div>

        {/* CNR Entry Interactive Search Box */}
        <div className="cnr-interactive-card">
          <form className="cnr-search-bar" onSubmit={handleSearch}>
            <div className="input-group">
              <Landmark size={18} color="#C6A15B" />
              <input
                type="text"
                value={cnrInput}
                onChange={(e) => setCnrInput(e.target.value)}
                placeholder="Enter 16-character CNR (e.g. DLHC010048922023)"
                className="cnr-text-input"
                aria-label="CNR Number input"
              />
            </div>
            <button type="submit" className="btn-retrieve-cnr">
              <Search size={15} />
              <span>Retrieve Case Details</span>
            </button>
          </form>

          {/* Populated Case Preview */}
          {isRetrieved && (
            <div className="cnr-populated-result animate-fade-in">
              <div className="result-top-status">
                <div className="court-badge-group">
                  <span className="cnr-court-badge">High Court of Delhi</span>
                  <span className="cnr-matched-tag">Matched Official Record</span>
                </div>
                <span className="cnr-code-display">{cnrInput}</span>
              </div>

              <div className="result-meta-grid">
                <div className="meta-card-block">
                  <span className="block-lbl">CASE TYPE &amp; NUMBER</span>
                  <strong className="block-val">W.P.(C) 4892/2023</strong>
                  <span className="block-sub">Filing Date: 12 Jan 2023</span>
                </div>

                <div className="meta-card-block">
                  <span className="block-lbl">CURRENT STAGE</span>
                  <strong className="block-val">Notice Issued / Counter Pending</strong>
                  <span className="block-sub">Next Listing: 18 Nov 2023</span>
                </div>

                <div className="meta-card-block">
                  <span className="block-lbl">PETITIONER</span>
                  <strong className="block-val">M/s Delta Global Technologies Ltd.</strong>
                  <span className="block-sub">Advocate: S. K. Mehta</span>
                </div>

                <div className="meta-card-block">
                  <span className="block-lbl">RESPONDENT</span>
                  <strong className="block-val">Union of India &amp; Anr.</strong>
                  <span className="block-sub">Advocate: Standing Counsel CGSC</span>
                </div>
              </div>

              <div className="result-footer-sync">
                <CheckCircle2 size={14} color="#C6A15B" />
                <span>Case information retrieved from official court records and ready to link with your matter.</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
