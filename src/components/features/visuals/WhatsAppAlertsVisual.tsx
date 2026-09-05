import React from 'react';
import { MessageSquare, Calendar, CheckSquare, FileCheck2, ArrowRight } from 'lucide-react';
import './visuals.css';

export const WhatsAppAlertsVisual: React.FC = () => {
  return (
    <div className="feature-visual-card wa-feature-visual">
      <div className="visual-top-bar">
        <div className="vis-tag-group">
          <MessageSquare size={13} color="#C6A15B" />
          <span className="vis-title">WhatsApp Alerts &amp; Notifications</span>
        </div>
        <span className="vis-badge">Live Channel</span>
      </div>

      <div className="vis-wa-stream">
        <div className="vis-wa-item">
          <div className="vis-wa-badge-row">
            <Calendar size={10} color="#C6A15B" />
            <span className="vis-wa-tag">HEARING TODAY</span>
          </div>
          <strong className="vis-wa-title">Comm. Appeal No. 142/2023</strong>
          <span className="vis-wa-sub">High Court of Karnataka • Court Hall 04 (Item #14)</span>
        </div>

        <div className="vis-wa-item">
          <div className="vis-wa-badge-row">
            <FileCheck2 size={10} color="#C6A15B" />
            <span className="vis-wa-tag">DRAFT APPROVAL REQUEST</span>
          </div>
          <strong className="vis-wa-title">Written Statement &amp; Counter-Claim (v2.1)</strong>
          <span className="vis-wa-sub">Submitted by Associate Arjun Kapoor for review</span>
        </div>

        <div className="vis-wa-item">
          <div className="vis-wa-badge-row">
            <CheckSquare size={10} color="#C6A15B" />
            <span className="vis-wa-tag">TASK REMINDER</span>
          </div>
          <strong className="vis-wa-title">Rejoinder Affidavit Filing</strong>
          <span className="vis-wa-sub">Due in Registry today • Apex Global vs CGSC</span>
        </div>
      </div>

      <div className="vis-footer-row">
        <a href="/whatsapp-alerts" className="vis-link-btn">
          <span>Explore WhatsApp Alerts</span>
          <ArrowRight size={13} />
        </a>
      </div>
    </div>
  );
};
