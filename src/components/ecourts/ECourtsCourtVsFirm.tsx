import React from 'react';
import { Landmark, Briefcase, CheckCircle2, Lock } from 'lucide-react';
import './ECourtsCourtVsFirm.css';

export const ECourtsCourtVsFirm: React.FC = () => {
  return (
    <section className="ecourts-vs-section" aria-labelledby="vs-heading">
      <div className="content-container">
        <div className="vs-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">DUAL REPOSITORY MODEL</span>
          </div>
          <h2 id="vs-heading" className="vs-title">
            Keep Court Updates Separate From Your Own Work.
          </h2>
          <p className="vs-desc">
            Court information and your firm's own notes serve different purposes. Keep official case information available while preserving the internal notes, annotations, and matter information your team has added.
          </p>
        </div>

        {/* Dual Side-by-Side Comparison Workspace */}
        <div className="vs-workspace-grid">
          {/* Left Column: Official Court Record */}
          <div className="vs-panel-card official-panel">
            <div className="panel-topbar">
              <div className="panel-title-group">
                <Landmark size={16} color="#C6A15B" />
                <strong className="panel-title">OFFICIAL COURT INFORMATION</strong>
              </div>
              <span className="panel-status-tag official-tag">Read-Only Court Record</span>
            </div>

            <div className="panel-body">
              <div className="panel-item-box">
                <span className="p-lbl">OFFICIAL CNR &amp; STAGE:</span>
                <strong className="p-val">DLHC010048922023 • Arguments Part-Heard</strong>
              </div>

              <div className="panel-item-box">
                <span className="p-lbl">LISTING DATE &amp; COURT HALL:</span>
                <strong className="p-val">24.10.2023 • Court Hall 04 (Item #14)</strong>
              </div>

              <div className="panel-item-box">
                <span className="p-lbl">OFFICIAL DAILY ORDERS:</span>
                <span className="p-val">Daily Order dated 09.10.2023 (PDF Synced)</span>
              </div>

              <div className="panel-item-box">
                <span className="p-lbl">RECORD SOURCE:</span>
                <span className="p-val">Synchronized with official eCourts registry</span>
              </div>
            </div>

            <div className="panel-footer">
              <CheckCircle2 size={12} color="#C6A15B" />
              <span>Official dates and orders update without altering your private workspace.</span>
            </div>
          </div>

          {/* Right Column: Your Firm's Private Work */}
          <div className="vs-panel-card firm-panel">
            <div className="panel-topbar firm-topbar">
              <div className="panel-title-group">
                <Briefcase size={16} color="#C6A15B" />
                <strong className="panel-title">YOUR FIRM'S PRIVATE WORK</strong>
              </div>
              <span className="panel-status-tag firm-tag">Confidential Chamber Data</span>
            </div>

            <div className="panel-body">
              <div className="panel-item-box">
                <span className="p-lbl">INTERNAL ADVOCATE ASSIGNMENT:</span>
                <strong className="p-val">Lead: S. K. Mehta • Research: Arjun Kapoor</strong>
              </div>

              <div className="panel-item-box">
                <span className="p-lbl">CHAMBERS LITIGATION STRATEGY:</span>
                <p className="p-val-italic">
                  “Prepare compilation of 3 Supreme Court precedents on Section 34 limitation for the 24th hearing.”
                </p>
              </div>

              <div className="panel-item-box">
                <span className="p-lbl">INTERNAL WORKSPACE DRAFTS:</span>
                <span className="p-val">Rejoinder Affidavit v4 (Drafting Lab)</span>
              </div>

              <div className="panel-item-box">
                <span className="p-lbl">CONFIDENTIALITY STATUS:</span>
                <span className="p-val"><Lock size={11} /> Accessible only to designated team members</span>
              </div>
            </div>

            <div className="panel-footer">
              <CheckCircle2 size={12} color="#C6A15B" />
              <span>Your private research, annotations, and client notes remain strictly protected.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
