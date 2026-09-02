import React from 'react';
import { Briefcase, Landmark, Users, Scale, FileText, CheckCircle2 } from 'lucide-react';
import './CaseDraftsCaseAware.css';

export const CaseDraftsCaseAware: React.FC = () => {
  const caseContextPoints = [
    {
      title: 'Court & Jurisdiction Details',
      val: 'Principal City Civil Court, Bengaluru (Commercial Division)',
      icon: <Landmark size={18} />,
    },
    {
      title: 'Identified Parties & Representation',
      val: 'ABC Technologies (Plaintiff) vs XYZ Infrastructure Ltd (Defendant)',
      icon: <Users size={18} />,
    },
    {
      title: 'Disputed Facts & Transaction History',
      val: 'Commercial Master Agreement dated 12.03.2022; default notices exchanged',
      icon: <FileText size={18} />,
    },
    {
      title: 'Framed Legal Issues & Applicable Law',
      val: 'Section 55 Indian Contract Act; Order VIII Rule 1 CPC Limitation',
      icon: <Scale size={18} />,
    },
  ];

  return (
    <section id="case-aware-section" className="case-aware-section" aria-labelledby="case-aware-heading">
      <div className="content-container">
        <div className="case-aware-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">CONTEXTUAL COMMENCEMENT</span>
          </div>
          <h2 id="case-aware-heading" className="case-aware-title">
            Start With Your Case.
          </h2>
          <p className="case-aware-desc">
            Select a case and bring its relevant information into the drafting process, giving you a stronger starting point for your document.
          </p>
        </div>

        {/* Case-Aware Connection Workspace Grid */}
        <div className="case-aware-grid">
          {/* Left Context Box */}
          <div className="case-info-box">
            <div className="box-top-tag">
              <Briefcase size={15} color="#C6A15B" />
              <strong className="box-tag-txt">ACTIVE MATTER PROFILE</strong>
            </div>

            <div className="matter-summary-header">
              <strong className="m-title">Commercial Suit No. 482 of 2023</strong>
              <span className="m-sub">ABC Technologies vs XYZ Infrastructure Ltd</span>
            </div>

            <div className="matter-data-list">
              {caseContextPoints.map((item, idx) => (
                <div key={idx} className="matter-data-item">
                  <div className="data-icon-wrap">{item.icon}</div>
                  <div className="data-text-col">
                    <span className="data-lbl">{item.title}</span>
                    <strong className="data-val">{item.val}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Auto-Populated Draft Starting Point */}
          <div className="draft-populate-box">
            <div className="populate-topbar">
              <span className="pop-status-badge">Auto-Populated Draft Starting Point</span>
              <span className="pop-format-text">Order VIII CPC Format</span>
            </div>

            <div className="populate-doc-paper">
              <div className="paper-title-area">
                <span className="paper-preamble">BEFORE THE HON’BLE CITY CIVIL JUDGE AT BENGALURU</span>
                <span className="paper-suit-no">COMMERCIAL SUIT NO. 482 / 2023</span>
              </div>

              <div className="paper-clause-block">
                <span className="clause-highlight">PRELIMINARY OBJECTION AS TO LIMITATION:</span>
                <p className="clause-text">
                  “The Defendant respectfully submits that the Plaintiff’s claim arising from the Agreement dated 12.03.2022 is barred by limitation and does not disclose a continuous cause of action under Section 55 of the Indian Contract Act...”
                </p>
              </div>

              <div className="paper-clause-block">
                <span className="clause-highlight">PRAYER / RELIEF SOUGHT:</span>
                <p className="clause-text">
                  “Wherefore, it is prayed that this Hon’ble Court be pleased to dismiss the suit with exemplary costs under Section 35A of the CPC...”
                </p>
              </div>
            </div>

            <div className="populate-footer">
              <CheckCircle2 size={13} color="#C6A15B" />
              <span>Your case information becomes the structured starting point for your draft.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
