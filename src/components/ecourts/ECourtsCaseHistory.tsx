import React from 'react';
import { History, FileText, CheckCircle2 } from 'lucide-react';
import './ECourtsCaseHistory.css';

export const ECourtsCaseHistory: React.FC = () => {
  const proceedingsHistory = [
    {
      date: '09 Oct 2023',
      bench: 'Hon’ble Justice R. S. Chauhan & Hon’ble Justice V. K. Iyer',
      stage: 'Arguments Part-Heard',
      business: 'Learned Senior Counsel for Appellant concluded submissions. Matter listed for Respondent reply on 24.10.2023.',
      orderAvailable: true,
      orderRef: 'Daily Order dated 09.10.2023 (3 Pages)',
    },
    {
      date: '21 Sep 2023',
      bench: 'Division Bench 02',
      stage: 'Pleadings Completion',
      business: 'Rejoinder affidavit filed by Appellant taken on record. Registry directed to place paper books on record.',
      orderAvailable: true,
      orderRef: 'Daily Order dated 21.09.2023 (2 Pages)',
    },
    {
      date: '04 Aug 2023',
      bench: 'Division Bench 02',
      stage: 'Interlocutory Application (Stay)',
      business: 'Interim protection granted on 14.02.2023 ordered to continue until the next date of hearing.',
      orderAvailable: true,
      orderRef: 'Interim Order dated 04.08.2023 (4 Pages)',
    },
    {
      date: '14 Feb 2023',
      bench: 'Court Hall 04 (Admission)',
      stage: 'First Listing / Admission',
      business: 'Notice issued to Respondents returnable in 4 weeks. Ad-interim stay granted against demand notice.',
      orderAvailable: true,
      orderRef: 'Admission Order dated 14.02.2023 (5 Pages)',
    },
  ];

  return (
    <section className="ecourts-history-section" aria-labelledby="history-heading">
      <div className="content-container">
        <div className="history-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">CHRONOLOGICAL PROCEEDINGS</span>
          </div>
          <h2 id="history-heading" className="history-title">
            Follow the Story of the Case.
          </h2>
          <p className="history-desc">
            Review past proceedings and available case history in chronological order, helping your team understand what has happened throughout the matter.
          </p>
        </div>

        {/* Timeline Visualization Card */}
        <div className="history-timeline-card">
          <div className="history-topbar">
            <div className="hist-top-title">
              <History size={16} color="#C6A15B" />
              <strong className="hist-heading">Proceedings &amp; Daily Orders Timeline</strong>
            </div>
            <span className="hist-meta-badge">4 Recorded Listings</span>
          </div>

          <div className="history-timeline-body">
            {proceedingsHistory.map((item, idx) => (
              <div key={idx} className="timeline-node-item">
                <div className="node-marker-col">
                  <div className={`node-marker ${idx === 0 ? 'current-node' : ''}`} />
                  {idx < proceedingsHistory.length - 1 && <div className="node-vertical-line" />}
                </div>

                <div className="node-content-card">
                  <div className="node-header-row">
                    <div className="node-date-stage">
                      <span className="node-date-str">{item.date}</span>
                      <span className="node-stage-pill">{item.stage}</span>
                    </div>
                    <span className="node-bench-str">{item.bench}</span>
                  </div>

                  <p className="node-business-text">{item.business}</p>

                  {item.orderAvailable && (
                    <div className="node-order-pill">
                      <FileText size={12} color="#C6A15B" />
                      <span>{item.orderRef}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="history-footer">
            <CheckCircle2 size={13} color="#C6A15B" />
            <span>Chronological proceedings clarify previous bench remarks and evidentiary orders at each stage.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
