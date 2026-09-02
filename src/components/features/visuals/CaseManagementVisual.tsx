import React from 'react';
import './visuals.css';
import { Calendar, CheckCircle2, Clock } from 'lucide-react';

export const CaseManagementVisual: React.FC = () => {
  return (
    <div className="visual-card case-visual-card">
      <div className="visual-window-header">
        <div className="visual-window-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="visual-window-title">Matter Timeline // SLP (Civil) No. 4412 / 2026</span>
        <span className="visual-badge-court">Supreme Court of India</span>
      </div>

      <div className="case-body">
        {/* Case Info Header */}
        <div className="case-header-bar">
          <div className="case-header-title">
            <h4>Apex Technologies vs. Union of India & Ors.</h4>
            <p>Court No. 3 • Hon'ble Justice Bench • Senior Lead: Adv. M. Iyer</p>
          </div>
          <div className="case-stage-pill">Stage: Final Arguments</div>
        </div>

        {/* Milestone Timeline */}
        <div className="case-timeline">
          {/* Step 1: Completed */}
          <div className="timeline-item completed">
            <div className="timeline-icon-col">
              <div className="timeline-node done">
                <CheckCircle2 size={13} color="#FFFFFF" />
              </div>
              <div className="timeline-line done" />
            </div>
            <div className="timeline-content">
              <div className="timeline-heading-row">
                <span className="timeline-title">SLP Lodged & Diary Number Allocated</span>
                <span className="timeline-date">10 Jun 2026</span>
              </div>
              <p className="timeline-desc">All defects cleared with Supreme Court registry in record 48 hours.</p>
            </div>
          </div>

          {/* Step 2: Completed */}
          <div className="timeline-item completed">
            <div className="timeline-icon-col">
              <div className="timeline-node done">
                <CheckCircle2 size={13} color="#FFFFFF" />
              </div>
              <div className="timeline-line done" />
            </div>
            <div className="timeline-content">
              <div className="timeline-heading-row">
                <span className="timeline-title">Pleadings & Counter-Affidavits Exchanged</span>
                <span className="timeline-date">28 Jul 2026</span>
              </div>
              <p className="timeline-desc">Rejoinder affidavit compiled via Drafting Lab & verified in Evidence Vault.</p>
            </div>
          </div>

          {/* Step 3: UPCOMING (Gold Highlighted) */}
          <div className="timeline-item upcoming-gold">
            <div className="timeline-icon-col">
              <div className="timeline-node active-gold">
                <Clock size={13} color="#091526" />
              </div>
              <div className="timeline-line pending" />
            </div>
            <div className="timeline-content gold-box">
              <div className="timeline-heading-row">
                <span className="timeline-title text-gold-dark">Oral Arguments & Interim Stay Hearing</span>
                <span className="timeline-badge-urgent">In 4 Days • 10:30 AM</span>
              </div>
              <p className="timeline-desc">Item No. 18 on Daily Cause List. Senior Advocate bench brief prepared.</p>
            </div>
          </div>

          {/* Step 4: Scheduled */}
          <div className="timeline-item scheduled">
            <div className="timeline-icon-col">
              <div className="timeline-node pending">
                <Calendar size={13} color="#738091" />
              </div>
            </div>
            <div className="timeline-content">
              <div className="timeline-heading-row">
                <span className="timeline-title text-muted">Written Submissions & Final Decree</span>
                <span className="timeline-date">Scheduled Post-Hearing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
