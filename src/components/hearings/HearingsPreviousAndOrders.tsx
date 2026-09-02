import React from 'react';
import { FileText, CheckCircle2, Eye } from 'lucide-react';
import './HearingsPreviousAndOrders.css';

export const HearingsPreviousAndOrders: React.FC = () => {
  const previousList = [
    {
      date: '12 August 2026',
      status: 'Hearing completed',
      detail: 'Interim stay order granted; notice returnable in 4 weeks',
      hasOrder: true,
      orderType: 'Interim Order / Injunction',
    },
    {
      date: '24 July 2026',
      status: 'Hearing completed',
      detail: 'Rejoinder affidavit taken on record; defect cure confirmed',
      hasOrder: true,
      orderType: 'Daily Order',
    },
    {
      date: '10 June 2026',
      status: 'Hearing completed',
      detail: 'Matter admitted; notice issued to contesting respondents',
      hasOrder: false,
      orderType: 'Notice Issued',
    },
  ];

  return (
    <section className="hearings-prev-section" aria-labelledby="prev-heading">
      <div className="content-container">
        <div className="prev-header">
          <span className="prev-eyebrow">PREVIOUS HEARINGS & OUTCOMES</span>
          <h2 id="prev-heading" className="prev-title">
            Look Back at Earlier Hearings.
          </h2>
          <p className="prev-desc">
            Previous hearings remain available with the case, and recorded orders or verdicts can be viewed whenever you need to look back.
          </p>
        </div>

        <div className="prev-dual-grid">
          {/* LEFT: Previous Hearings List */}
          <div className="prev-card-box">
            <div className="prev-card-header">
              <span className="prev-card-tag">CHRONOLOGICAL HISTORY</span>
              <h3 className="prev-card-title">Completed Hearings</h3>
            </div>

            <div className="prev-items-list">
              {previousList.map((p, idx) => (
                <div key={idx} className="prev-row-item">
                  <div className="prev-status-dot">
                    <CheckCircle2 size={14} color="#10B981" />
                  </div>
                  <div className="prev-text-col">
                    <div className="prev-meta-top">
                      <strong className="prev-date">{p.date}</strong>
                      <span className="prev-badge">{p.status}</span>
                    </div>
                    <p className="prev-desc-line">{p.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Order & Verdict Record Box */}
          <div className="prev-card-box featured-order-box">
            <div className="prev-card-header">
              <span className="prev-card-tag">ORDERS & VERDICTS</span>
              <h3 className="prev-card-title">Keep Earlier Orders Close to the Case</h3>
            </div>

            <p className="order-box-desc">
              Where an order or verdict has been recorded for a previous hearing, it can be accessed directly from the case record.
            </p>

            <div className="order-sample-card">
              <div className="sample-top">
                <span className="sample-hearing-label">PREVIOUS HEARING RECORD</span>
                <span className="sample-avail-pill">Order Available</span>
              </div>

              <div className="sample-hearing-date">12 August 2026</div>
              <div className="sample-status-text">Hearing completed • Hon'ble Court No. 3</div>

              <div className="sample-order-bar">
                <div className="order-title-group">
                  <FileText size={16} color="#C6A15B" />
                  <div>
                    <strong className="order-doc-title">Interim Injunction Order.pdf</strong>
                    <span className="order-doc-size">Signed Certified Copy • 4 Pages</span>
                  </div>
                </div>

                <span className="btn-view-order-demo">
                  <Eye size={13} />
                  <span>View</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
