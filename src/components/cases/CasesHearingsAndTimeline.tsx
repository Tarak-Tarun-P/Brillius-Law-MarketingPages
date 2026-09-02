import React from 'react';
import { Calendar, CheckCircle2, FileText, Check } from 'lucide-react';
import './CasesHearingsAndTimeline.css';

export const CasesHearingsAndTimeline: React.FC = () => {
  const previousHearings = [
    {
      date: '12 August 2026',
      status: 'Hearing completed',
      detail: 'Order / verdict available',
      hasOrder: true,
    },
    {
      date: '24 July 2026',
      status: 'Hearing completed',
      detail: 'Order / verdict available',
      hasOrder: true,
    },
    {
      date: '10 June 2026',
      status: 'Hearing completed',
      detail: 'Pleadings instituted on record',
      hasOrder: false,
    },
  ];

  return (
    <section className="cases-hearings-timeline-section" aria-labelledby="hearings-timeline-heading">
      <div className="content-container">
        {/* Header */}
        <div className="ht-header">
          <span className="ht-eyebrow">HEARINGS & CASE DATES</span>
          <h2 id="hearings-timeline-heading" className="ht-title">
            Stay on Top of Important Dates.
          </h2>
          <p className="ht-desc">
            Hearings connected to a case can be added to the platform calendar, making upcoming dates easier to keep track of.
          </p>
        </div>

        {/* Compact, Light Two-Column Card */}
        <div className="ht-light-container">
          {/* LEFT: Upcoming Hearing Linked with Calendar */}
          <div className="ht-sub-card">
            <div className="ht-sub-header">
              <span className="ht-section-tag">UPCOMING HEARING</span>
              <span className="calendar-synced-pill">
                <Check size={12} strokeWidth={2.5} />
                <span>Added to Calendar</span>
              </span>
            </div>

            <div className="ht-case-preview-box">
              <span className="preview-case-label">CASE</span>
              <h3 className="preview-case-title">ABC Technologies vs. XYZ Ltd.</h3>

              <div className="preview-hearing-meta">
                <div className="preview-date-row">
                  <Calendar size={16} color="#C6A15B" />
                  <strong>15 September 2026</strong>
                </div>
                <span className="preview-court-text">High Court of Delhi • Court No. 3</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Previous Hearings Record */}
          <div className="ht-sub-card">
            <div className="ht-sub-header">
              <span className="ht-section-tag">PREVIOUS HEARINGS</span>
              <span className="ht-counter-tag">3 Records</span>
            </div>

            <div className="previous-hearings-list">
              {previousHearings.map((item, idx) => (
                <div key={idx} className="prev-hearing-item">
                  <div className="prev-dot-col">
                    <CheckCircle2 size={13} color="#10B981" />
                  </div>
                  <div className="prev-content-col">
                    <div className="prev-top-line">
                      <strong className="prev-date-text">{item.date}</strong>
                      <span className="prev-status-text">{item.status}</span>
                    </div>
                    <div className="prev-detail-row">
                      {item.hasOrder && <FileText size={12} color="#C6A15B" />}
                      <span className="prev-detail-text">{item.detail}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
