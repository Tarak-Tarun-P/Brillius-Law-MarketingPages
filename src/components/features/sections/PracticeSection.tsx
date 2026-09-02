import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ClientManagementVisual } from '../visuals/ClientManagementVisual';
import { CaseManagementVisual } from '../visuals/CaseManagementVisual';
import { HearingsCalendarVisual } from '../visuals/HearingsCalendarVisual';
import { EvidenceStorageVisual } from '../visuals/EvidenceStorageVisual';
import { CaseDraftsVisual } from '../visuals/CaseDraftsVisual';
import './sections.css';

export const PracticeSection: React.FC = () => {
  return (
    <section id="section-practice" className="workflow-section" aria-labelledby="practice-heading">
      <div className="content-container">
        {/* Section Main Header */}
        <div className="workflow-section-header">
          <div className="section-eyebrow-pill">PRACTICE & CASES</div>
          <h2 id="practice-heading" className="workflow-section-title">
            Keep Every Matter Organized
          </h2>
          <p className="workflow-section-desc">
            Manage clients, cases, hearings, tasks, and evidence without losing track of the details that matter.
          </p>
        </div>

        {/* 1. Client Management */}
        <div className="workflow-sub-block layout-text-left">
          <div className="sub-text-col">
            <span className="sub-tag">01 // CLIENT RELATIONSHIPS</span>
            <h3 className="sub-title">Client Management</h3>
            <p className="sub-desc">
              Keep client information, relationships, matters, and important details organized in one place.
            </p>
            <ul className="sub-bullets">
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Complete client profiles with active retainer accounts and matter directories</span></li>
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Direct visibility into pending actions, documents, and client communications</span></li>
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Verified KYC and corporate entity relationship mapping</span></li>
            </ul>
          </div>
          <div className="sub-visual-col">
            <ClientManagementVisual />
          </div>
        </div>

        <div className="section-divider" aria-hidden="true" />

        {/* 2. Case Management */}
        <div className="workflow-sub-block layout-visual-left">
          <div className="sub-text-col">
            <span className="sub-tag">02 // MATTER LIFECYCLE</span>
            <h3 className="sub-title">Case Management</h3>
            <p className="sub-desc">
              Stay on top of every matter with organized case information, important dates, priorities, related parties, and case history.
            </p>
            <ul className="sub-bullets">
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Milestone tracking from petition filing to final court decree</span></li>
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Task allocation across partners, briefing counsel, and associates</span></li>
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Real-time priority alerts for urgent limitation dates and filing windows</span></li>
            </ul>
          </div>
          <div className="sub-visual-col">
            <CaseManagementVisual />
          </div>
        </div>

        <div className="section-divider" aria-hidden="true" />

        {/* 3. Hearings & Calendar */}
        <div className="workflow-sub-block layout-text-left">
          <div className="sub-text-col">
            <span className="sub-tag">03 // CAUSE LIST & COURT DATES</span>
            <h3 className="sub-title">Hearings & Calendar</h3>
            <p className="sub-desc">
              Keep upcoming hearings and important case dates organized with a clear view of what is coming next.
            </p>
            <ul className="sub-bullets">
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Weekly cause list schedule covering Supreme Court, High Courts, and Tribunals</span></li>
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Courtroom, bench, and item number details attached to every appearance</span></li>
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Automated hearing reminders for lead advocates and briefing associates</span></li>
            </ul>
          </div>
          <div className="sub-visual-col">
            <HearingsCalendarVisual />
          </div>
        </div>

        <div className="section-divider" aria-hidden="true" />

        {/* 4. Evidence & Exhibits */}
        <div className="workflow-sub-block layout-visual-left">
          <div className="sub-text-col">
            <span className="sub-tag">04 // EVIDENCE INTEGRITY</span>
            <h3 className="sub-title">Evidence & Exhibits</h3>
            <p className="sub-desc">
              Keep your evidence within reach. Organize exhibits, documents, and records connected to the matters they belong to, so important information is easy to find when you need it.
            </p>
            <ul className="sub-bullets">
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Structured digital repository for affidavits, financial statements, and exhibits</span></li>
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Section 65B Indian Evidence Act admissibility compliance records</span></li>
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Direct cross-linking of exhibit annexures to active case drafts</span></li>
            </ul>
          </div>
          <div className="sub-visual-col">
            <EvidenceStorageVisual />
          </div>
        </div>

        <div className="section-divider" aria-hidden="true" />

        {/* 5. Case Drafts */}
        <div className="workflow-sub-block layout-text-left">
          <div className="sub-text-col">
            <span className="sub-tag">05 // VERSION REGISTRY</span>
            <h3 className="sub-title">Case Drafts</h3>
            <p className="sub-desc">
              Keep drafts related to each matter organized from the first version through the final document.
            </p>
            <ul className="sub-bullets">
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Clear version progression from associate draft to senior partner sign-off</span></li>
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Final certified court filing copies segregated from working internal revisions</span></li>
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Full chronological revision history preserving all matter contributions</span></li>
            </ul>
          </div>
          <div className="sub-visual-col">
            <CaseDraftsVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
