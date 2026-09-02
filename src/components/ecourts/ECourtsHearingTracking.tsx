import React from 'react';
import { Calendar, Landmark, CheckCircle2 } from 'lucide-react';
import './ECourtsHearingTracking.css';

export const ECourtsHearingTracking: React.FC = () => {
  const hearingList = [
    {
      date: '24 Oct 2023',
      time: '10:30 AM',
      caseNumber: 'Commercial Appeal #142/2023',
      parties: 'Bengaluru Urban Tech Infra vs State of Karnataka',
      court: 'High Court of Karnataka • Court Hall 04 (Item #14)',
      purpose: 'Final Arguments',
      status: 'Listed',
      statusClass: 'status-listed',
    },
    {
      date: '28 Oct 2023',
      time: '02:00 PM',
      caseNumber: 'ARB.P. 84/2023',
      parties: 'Horizon Logistics vs Port Authority of India',
      court: 'High Court of Bombay • Court Room 12 (Item #08)',
      purpose: 'Section 11 Appointment',
      status: 'Listed',
      statusClass: 'status-listed',
    },
    {
      date: '03 Nov 2023',
      time: '11:00 AM',
      caseNumber: 'Company Petition #54/2023',
      parties: 'Apex Global vs Insolvency Resolution Desk',
      court: 'NCLT New Delhi Bench • Court 02 (Item #22)',
      purpose: 'Interim Reply',
      status: 'Listed',
      statusClass: 'status-listed',
    },
  ];

  return (
    <section className="ecourts-hearings-section" aria-labelledby="hearings-heading">
      <div className="content-container">
        <div className="hearings-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">CAUSE LIST &amp; LISTING SYNC</span>
          </div>
          <h2 id="hearings-heading" className="hearings-title">
            Keep Upcoming Hearings in View.
          </h2>
          <p className="hearings-desc">
            Stay aware of upcoming court dates by bringing available hearing information into your case workspace and calendar.
          </p>
        </div>

        {/* Realistic Calendar & Listings Board */}
        <div className="hearings-board-card">
          <div className="board-topbar">
            <div className="board-title-group">
              <Calendar size={16} color="#C6A15B" />
              <strong className="board-heading">Upcoming Court Listings &amp; Cause List Tracking</strong>
            </div>
            <span className="board-badge">Synchronized Listings</span>
          </div>

          <div className="hearings-list-wrap">
            {hearingList.map((h, idx) => (
              <div key={idx} className="hearing-entry-row">
                <div className="hearing-date-box">
                  <span className="h-day">{h.date.split(' ')[0]}</span>
                  <span className="h-month">{h.date.split(' ')[1]}</span>
                  <span className="h-time">{h.time}</span>
                </div>

                <div className="hearing-details-col">
                  <div className="h-case-line">
                    <strong className="h-case-num">{h.caseNumber}</strong>
                    <span className="h-purpose-tag">{h.purpose}</span>
                  </div>
                  <span className="h-parties-str">{h.parties}</span>
                  <div className="h-court-row">
                    <Landmark size={12} color="#C6A15B" />
                    <span className="h-court-text">{h.court}</span>
                  </div>
                </div>

                <div className="hearing-status-col">
                  <span className={`h-status-pill ${h.statusClass}`}>{h.status}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="board-footer">
            <CheckCircle2 size={13} color="#C6A15B" />
            <span>Keep upcoming hearings easier to track with automated sync into your firm calendar and daily cause board.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
