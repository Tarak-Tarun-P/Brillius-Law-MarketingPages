import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { DocumentStorageVisual } from '../visuals/DocumentStorageVisual';
import { DocumentApprovalsVisual } from '../visuals/DocumentApprovalsVisual';
import { DraftingLabVisual } from '../visuals/DraftingLabVisual';
import { VersionCompareVisual } from '../visuals/VersionCompareVisual';
import './sections.css';

export const DocumentsSection: React.FC = () => {
  return (
    <section id="section-documents" className="workflow-section bg-surface-alt" aria-labelledby="documents-heading">
      <div className="content-container">
        {/* Section Main Header */}
        <div className="workflow-section-header">
          <div className="section-eyebrow-pill">DOCUMENTS & DRAFTING</div>
          <h2 id="documents-heading" className="workflow-section-title">
            From First Draft to Final Document
          </h2>
          <p className="workflow-section-desc">
            Create, organize, review, and manage your legal documents throughout their entire journey.
          </p>
        </div>

        {/* 1. Document Management */}
        <div className="workflow-sub-block layout-text-left">
          <div className="sub-text-col">
            <span className="sub-tag">01 // CENTRALIZED VAULT</span>
            <h3 className="sub-title">Document Management</h3>
            <p className="sub-desc">
              Keep contracts, templates, case documents, client documents, and other important files organized and easy to access.
            </p>
            <ul className="sub-bullets">
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Fast optical search across thousands of case files, petitions, and deeds</span></li>
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Structured folders categorized by court, client, and practice domain</span></li>
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Strict confidentiality with matter-level document permission locks</span></li>
            </ul>
          </div>
          <div className="sub-visual-col">
            <DocumentStorageVisual />
          </div>
        </div>

        <div className="section-divider" aria-hidden="true" />

        {/* 2. Document Approvals */}
        <div className="workflow-sub-block layout-visual-left">
          <div className="sub-text-col">
            <span className="sub-tag">02 // REVIEW & SIGN-OFF</span>
            <h3 className="sub-title">Document Approvals</h3>
            <p className="sub-desc">
              Send documents through a clear review process so the right people can review and approve them before they are finalized.
            </p>
            <ul className="sub-bullets">
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Step-by-step sign-off workflows for associates, partners, and corporate clients</span></li>
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Automated notifications when review comments or approvals are requested</span></li>
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Digital verification and approval records for compliance and peace of mind</span></li>
            </ul>
          </div>
          <div className="sub-visual-col">
            <DocumentApprovalsVisual />
          </div>
        </div>

        <div className="section-divider" aria-hidden="true" />

        {/* 3. Drafting Lab */}
        <div className="workflow-sub-block layout-text-left">
          <div className="sub-text-col">
            <span className="sub-tag">03 // DRAFTING WORKSPACE</span>
            <h3 className="sub-title">Drafting Lab</h3>
            <p className="sub-desc">
              A focused workspace for creating, editing, reviewing, and refining legal documents.
            </p>
            <ul className="sub-bullets">
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Standard clause library tailored for Indian commercial and litigation practice</span></li>
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Smart clause suggestions to prevent ambiguous wording and unneeded risk</span></li>
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Distraction-free environment with formatting tools built specifically for legal drafts</span></li>
            </ul>
          </div>
          <div className="sub-visual-col">
            <DraftingLabVisual />
          </div>
        </div>

        <div className="section-divider" aria-hidden="true" />

        {/* 4. Compare & Review */}
        <div className="workflow-sub-block layout-visual-left">
          <div className="sub-text-col">
            <span className="sub-tag">04 // REDLINE COMPARISON</span>
            <h3 className="sub-title">Compare & Review</h3>
            <p className="sub-desc">
              See what changed between different versions of a document, making it easier to review additions, removals, and revisions.
            </p>
            <ul className="sub-bullets">
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Side-by-side visual redlines highlighting additions and removals instantly</span></li>
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Identifies modified liability caps, indemnity terms, and statutory references</span></li>
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Export comprehensive redline reports ready for opposing counsel negotiation</span></li>
            </ul>
          </div>
          <div className="sub-visual-col">
            <VersionCompareVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
