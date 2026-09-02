import React from 'react';
import { CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';
import './WhatsAppDraftAlerts.css';

export const WhatsAppDraftAlerts: React.FC = () => {
  const draftAlerts = [
    {
      badge: 'APPROVAL REQUESTED',
      badgeClass: 'badge-req',
      draftTitle: 'Commercial Written Statement & Counter-Claim (v2.1)',
      meta: 'Submitted by Associate Arjun Kapoor for Senior Review',
      matter: 'Matter: ABC Technologies vs XYZ Ltd',
    },
    {
      badge: 'REVISION REQUESTED',
      badgeClass: 'badge-rev',
      draftTitle: 'Section 11 Arbitration Petition (v1.4)',
      meta: 'Senior Advocate requested additions to limitation clauses',
      matter: 'Matter: Horizon Logistics vs Port Authority',
    },
    {
      badge: 'DRAFT APPROVED',
      badgeClass: 'badge-app',
      draftTitle: 'Special Leave Petition (Civil) v3.0',
      meta: 'Approved by Senior Partner S. K. Mehta for client sign-off',
      matter: 'Matter: Tech Infra vs State of Karnataka',
    },
  ];

  return (
    <section className="wa-drafts-section" aria-labelledby="wa-drafts-heading">
      <div className="content-container">
        <div className="wa-drafts-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">DRAFT REVIEW NOTIFICATIONS</span>
          </div>
          <h2 id="wa-drafts-heading" className="wa-drafts-title">
            Know When a Draft Needs Your Attention.
          </h2>
          <p className="wa-drafts-desc">
            Stay informed when an important draft is submitted for review or when its review status changes.
          </p>
        </div>

        {/* 3 Step Flow Diagram */}
        <div className="wa-draft-prog-row">
          <div className="prog-card">
            <span className="prog-step-num">01</span>
            <strong className="prog-title">Draft Submitted</strong>
            <span className="prog-sub">Associate finishes legal pleading</span>
          </div>
          <ArrowRight size={14} color="#C6A15B" />
          <div className="prog-card">
            <span className="prog-step-num">02</span>
            <strong className="prog-title">Review Requested</strong>
            <span className="prog-sub">Senior counsel assigned for review</span>
          </div>
          <ArrowRight size={14} color="#C6A15B" />
          <div className="prog-card active-prog-card">
            <span className="prog-step-num">03</span>
            <strong className="prog-title">WhatsApp Alert Delivered</strong>
            <span className="prog-sub">Prompt alert sent with matter context</span>
          </div>
        </div>

        {/* Sample Draft Alerts Grid */}
        <div className="draft-alerts-grid">
          {draftAlerts.map((d, idx) => (
            <div key={idx} className="draft-alert-bubble">
              <div className="bubble-head">
                <span className={`status-pill ${d.badgeClass}`}>{d.badge}</span>
                <MessageSquare size={12} color="#075E54" />
              </div>
              <strong className="d-title">{d.draftTitle}</strong>
              <p className="d-meta">{d.meta}</p>
              <span className="d-matter">{d.matter}</span>
            </div>
          ))}
        </div>

        <div className="drafts-section-footer">
          <CheckCircle2 size={13} color="#C6A15B" />
          <span>Keeps partners and associates aligned on document status without manual follow-up emails.</span>
        </div>
      </div>
    </section>
  );
};
