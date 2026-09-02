import React from 'react';
import { Calendar, Landmark, CheckCircle2, MessageSquare } from 'lucide-react';
import './WhatsAppHearingAlerts.css';

export const WhatsAppHearingAlerts: React.FC = () => {
  const hearingAlerts = [
    {
      type: 'HEARING TODAY',
      caseNo: 'Commercial Appeal No. 142/2023',
      parties: 'Bengaluru Urban Tech vs State of Karnataka',
      court: 'High Court of Karnataka • Court Hall 04 (Item #14)',
      purpose: 'Final Arguments',
    },
    {
      type: 'HEARING TOMORROW',
      caseNo: 'ARB.P. 84/2023',
      parties: 'Horizon Logistics vs Port Authority of India',
      court: 'High Court of Bombay • Court Room 12 (Item #08)',
      purpose: 'Section 11 Appointment',
    },
    {
      type: 'HEARING FOLLOW-UP',
      caseNo: 'Company Petition No. 54/2023',
      parties: 'Apex Global vs Insolvency Resolution Desk',
      court: 'NCLT New Delhi Bench • Court 02',
      purpose: 'Record hearing outcome & update next listing date',
    },
  ];

  return (
    <section className="wa-hearings-section" aria-labelledby="wa-hearings-heading">
      <div className="content-container">
        <div className="wa-hearings-grid">
          {/* Left Text */}
          <div className="wa-hearings-left">
            <div className="eyebrow-chip">
              <span className="eyebrow-text">CAUSE LIST &amp; COURT UPDATES</span>
            </div>
            <h2 id="wa-hearings-heading" className="wa-hearings-title">
              Keep Hearings on Your Radar.
            </h2>
            <p className="wa-hearings-desc">
              Stay informed about important hearing-related updates so upcoming or changing court activities are easier to keep track of.
            </p>

            <div className="wa-hearings-bullets">
              <div className="h-bullet-item">
                <CheckCircle2 size={16} color="#C6A15B" />
                <span>Hearings listed for today with item numbers and court halls</span>
              </div>
              <div className="h-bullet-item">
                <CheckCircle2 size={16} color="#C6A15B" />
                <span>Advance alerts for upcoming listings scheduled for tomorrow</span>
              </div>
              <div className="h-bullet-item">
                <CheckCircle2 size={16} color="#C6A15B" />
                <span>Post-hearing prompts to record outcomes and next bench dates</span>
              </div>
            </div>
          </div>

          {/* Right WhatsApp Alert Card Stack */}
          <div className="wa-hearings-right">
            <div className="wa-alert-feed-box">
              <div className="feed-header">
                <Calendar size={15} color="#C6A15B" />
                <strong className="feed-title">Sample Hearing Alerts on WhatsApp</strong>
              </div>

              <div className="feed-messages-list">
                {hearingAlerts.map((alert, idx) => (
                  <div key={idx} className="wa-hearing-card">
                    <div className="wa-card-badge-row">
                      <span className="wa-alert-badge">{alert.type}</span>
                      <MessageSquare size={12} color="#075E54" />
                    </div>
                    <strong className="wa-case-title">{alert.caseNo}</strong>
                    <span className="wa-parties">{alert.parties}</span>
                    <div className="wa-court-line">
                      <Landmark size={12} color="#C6A15B" />
                      <span>{alert.court}</span>
                    </div>
                    <span className="wa-purpose-line">Stage: {alert.purpose}</span>
                  </div>
                ))}
              </div>

              <div className="feed-footer">
                <CheckCircle2 size={12} color="#C6A15B" />
                <span>Stay informed about important hearing updates across all active chamber listings.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
