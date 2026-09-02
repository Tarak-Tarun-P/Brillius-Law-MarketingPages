import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Hash, Plus, Type, Table } from 'lucide-react';
import './CompareReviewPanel.css';

export const CompareReviewPanel: React.FC = () => {
  const [activeChangeIndex, setActiveChangeIndex] = useState(1); // 0-indexed, default change 02

  const changeList = [
    {
      id: '01',
      type: 'NUMBER CHANGED',
      icon: <Hash size={15} color="#C6A15B" />,
      title: 'Agreement Duration Covenants',
      summary: 'Term changed from 12 months to 24 months in Section 4.1.',
      detailOld: 'The agreement shall remain valid for 12 months.',
      detailNew: 'The agreement shall remain valid for 24 months.',
    },
    {
      id: '02',
      type: 'TEXT ADDED',
      icon: <Plus size={15} color="#10B981" />,
      title: 'Intellectual Property Assignment Clause',
      summary: 'New paragraph inserted in Section 9 regarding corporate IP ownership.',
      detailOld: '[No prior covenant existed in Version 1]',
      detailNew: 'All intellectual property created during employment shall vest exclusively in the Company.',
    },
    {
      id: '03',
      type: 'FORMATTING CHANGED',
      icon: <Type size={15} color="#C6A15B" />,
      title: 'Breach Notification Header',
      summary: 'Changed header from mixed case to all-caps uppercase bold in Section 14.',
      detailOld: 'Important Notice',
      detailNew: 'IMPORTANT NOTICE',
    },
    {
      id: '04',
      type: 'ROW ADDED IN TABLE',
      icon: <Table size={15} color="#10B981" />,
      title: 'Schedule B — Retainer Milestones',
      summary: 'Added Senior Counsel Consultation line item for ₹15,000.',
      detailOld: '2 Schedule Rows (₹60,000 total)',
      detailNew: '3 Schedule Rows (+ ₹15,000 Consultation milestone)',
    },
  ];

  const handlePrev = () => {
    setActiveChangeIndex((prev) => (prev > 0 ? prev - 1 : changeList.length - 1));
  };

  const handleNext = () => {
    setActiveChangeIndex((prev) => (prev < changeList.length - 1 ? prev + 1 : 0));
  };

  const currentChange = changeList[activeChangeIndex];

  return (
    <section className="compare-review-section" aria-labelledby="review-heading">
      <div className="content-container">
        <div className="review-header">
          <span className="review-eyebrow">CHANGE LIST & NAVIGATION</span>
          <h2 id="review-heading" className="review-title">
            Review Changes One by One.
          </h2>
          <p className="review-desc">
            Move step-by-step through every difference in the document with an organized review panel.
          </p>
        </div>

        {/* Change Review Panel */}
        <div className="review-panel-card">
          {/* Panel Top Navigation Bar */}
          <div className="panel-nav-bar">
            <div className="panel-nav-left">
              <span className="panel-heading-badge">CHANGE NAVIGATOR</span>
              <span className="panel-counter">Change {activeChangeIndex + 1} of {changeList.length}</span>
            </div>

            <div className="panel-nav-actions">
              <button
                type="button"
                className="btn-nav-arrow"
                onClick={handlePrev}
                aria-label="Previous change"
              >
                <ChevronLeft size={16} />
                <span>Previous</span>
              </button>
              <button
                type="button"
                className="btn-nav-arrow"
                onClick={handleNext}
                aria-label="Next change"
              >
                <span>Next</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Active Change Focus Card */}
          <div className="active-change-focus">
            <div className="change-focus-top">
              <div className="change-type-pill">
                {currentChange.icon}
                <span>{currentChange.type}</span>
              </div>
              <span className="change-id-tag">ITEM #{currentChange.id}</span>
            </div>

            <h3 className="change-focus-title">{currentChange.title}</h3>
            <p className="change-focus-summary">{currentChange.summary}</p>

            <div className="change-comparison-preview">
              <div className="preview-box prev-side">
                <span className="preview-label">PREVIOUS STATE</span>
                <p className="preview-text-del">{currentChange.detailOld}</p>
              </div>
              <div className="preview-box curr-side">
                <span className="preview-label text-gold">REVISED STATE</span>
                <p className="preview-text-ins">{currentChange.detailNew}</p>
              </div>
            </div>
          </div>

          {/* Change List Sequence Bar */}
          <div className="change-list-sequence">
            {changeList.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                className={`sequence-item-btn ${idx === activeChangeIndex ? 'active' : ''}`}
                onClick={() => setActiveChangeIndex(idx)}
              >
                <span className="seq-num">0{idx + 1}</span>
                <div className="seq-text">
                  <span className="seq-type">{item.type}</span>
                  <span className="seq-title">{item.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
