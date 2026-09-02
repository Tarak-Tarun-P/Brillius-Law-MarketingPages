import React from 'react';
import './visuals.css';
import { FileCheck, CheckCircle2, Clock, User, ArrowRight } from 'lucide-react';

export const DocumentApprovalsVisual: React.FC = () => {
  return (
    <div className="visual-card approvals-visual-card">
      <div className="visual-window-header">
        <div className="visual-window-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="visual-window-title">Document Sign-off // Share Purchase Agreement</span>
        <span className="visual-badge-shield">Ready for Approval</span>
      </div>

      <div className="approvals-body">
        {/* Step Progress Flow */}
        <div className="approval-stages-row">
          <div className="approval-stage-node done">
            <div className="stage-circle done"><CheckCircle2 size={13} color="#FFFFFF" /></div>
            <span className="stage-name">1. Draft Prepared</span>
          </div>
          <div className="approval-arrow"><ArrowRight size={14} color="#C6A15B" /></div>
          <div className="approval-stage-node done">
            <div className="stage-circle done"><CheckCircle2 size={13} color="#FFFFFF" /></div>
            <span className="stage-name">2. Partner Review</span>
          </div>
          <div className="approval-arrow"><ArrowRight size={14} color="#C6A15B" /></div>
          <div className="approval-stage-node active-gold">
            <div className="stage-circle active-gold"><Clock size={13} color="#091526" /></div>
            <span className="stage-name font-bold text-gold-dark">3. Client Approval</span>
          </div>
          <div className="approval-arrow"><ArrowRight size={14} color="#94A3B8" /></div>
          <div className="approval-stage-node pending">
            <div className="stage-circle pending"><FileCheck size={13} color="#94A3B8" /></div>
            <span className="stage-name">4. Final Execution</span>
          </div>
        </div>

        {/* Current Approval Action Card */}
        <div className="approval-action-box">
          <div className="approval-actor-info">
            <div className="actor-avatar">
              <User size={16} color="#C6A15B" />
            </div>
            <div className="actor-text">
              <span className="actor-title">Awaiting Client Sign-off from General Counsel</span>
              <span className="actor-meta">Sent to anil.mehta@apextechnologies.com • 2 Reviewers remaining</span>
            </div>
          </div>
          <div className="approval-btns-row">
            <button type="button" className="btn-approve">
              <CheckCircle2 size={14} />
              <span>Approve & Finalize Document</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
