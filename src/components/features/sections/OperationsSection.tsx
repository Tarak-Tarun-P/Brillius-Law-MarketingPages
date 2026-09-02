import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ECourtsMonitoringVisual } from '../visuals/ECourtsMonitoringVisual';
import { TeamManagementVisual } from '../visuals/TeamManagementVisual';
import { WhatsAppAlertsVisual } from '../visuals/WhatsAppAlertsVisual';
import './sections.css';

export const OperationsSection: React.FC = () => {
  return (
    <section id="section-operations" className="workflow-section" aria-labelledby="operations-heading">
      <div className="content-container">
        {/* Section Main Header */}
        <div className="workflow-section-header">
          <div className="section-eyebrow-pill">FIRM OPERATIONS</div>
          <h2 id="operations-heading" className="workflow-section-title">
            Keep Your Entire Firm Connected
          </h2>
          <p className="workflow-section-desc">
            Manage your team, permissions, case information, and important firm activity from one organized workspace.
          </p>
        </div>

        {/* 1. eCourts Case Monitoring */}
        <div className="workflow-sub-block layout-text-left">
          <div className="sub-text-col">
            <span className="sub-tag">01 // PUBLIC REGISTRY CONNECTION</span>
            <h3 className="sub-title">eCourts Case Monitoring</h3>
            <p className="sub-desc">
              Keep track of relevant public case information and connect it with the matters you manage in BrilliusLaw.
            </p>
            <ul className="sub-bullets">
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Automatic updates from Supreme Court, High Courts, and NCLT listings</span></li>
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Next listing dates and court orders matched directly with internal client files</span></li>
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Keep upcoming hearing and cause list information easier to track</span></li>
            </ul>
          </div>
          <div className="sub-visual-col">
            <ECourtsMonitoringVisual />
          </div>
        </div>

        <div className="section-divider" aria-hidden="true" />

        {/* 2. Firm & Team Management */}
        <div className="workflow-sub-block layout-visual-left">
          <div className="sub-text-col">
            <span className="sub-tag">02 // ROLES & SECURITY</span>
            <h3 className="sub-title">Firm & Team Management</h3>
            <p className="sub-desc">
              Organize your firm's team, roles, permissions, and workspace settings in one place.
            </p>
            <ul className="sub-bullets">
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Custom roles for senior partners, briefing counsel, associates, and finance</span></li>
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Matter-level access boundaries protect sensitive client secrets and documents</span></li>
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Complete activity logs maintain firm-wide accountability and visibility</span></li>
            </ul>
          </div>
          <div className="sub-visual-col">
            <TeamManagementVisual />
          </div>
        </div>

        <div className="section-divider" aria-hidden="true" />

        {/* 3. WhatsApp Alerts */}
        <div className="workflow-sub-block layout-text-left">
          <div className="sub-text-col">
            <span className="sub-tag">03 // INSTANT ALERTS &amp; REMINDERS</span>
            <h3 className="sub-title">WhatsApp Alerts</h3>
            <p className="sub-desc">
              Stay informed about important case activities, tasks, hearings, and document updates through WhatsApp alerts.
            </p>
            <ul className="sub-bullets">
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Stay informed about upcoming and same-day court listings with bench details</span></li>
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Receive timely reminders for overdue tasks and important filing deadlines</span></li>
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Get instant notifications for draft review requests, revisions, and document approvals</span></li>
            </ul>
          </div>
          <div className="sub-visual-col">
            <WhatsAppAlertsVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

