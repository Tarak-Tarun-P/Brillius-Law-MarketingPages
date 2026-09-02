import React from 'react';
import { Scale, Calendar, Clock, FileText, Check } from 'lucide-react';
import './HearingsCaseConnection.css';

export const HearingsCaseConnection: React.FC = () => {
  return (
    <section className="hearings-connection-section" aria-labelledby="connection-heading">
      <div className="content-container">
        <div className="connection-header">
          <span className="connection-eyebrow">CASE INTEGRATION</span>
          <h2 id="connection-heading" className="connection-title">
            Hearings Stay Connected to the Case.
          </h2>
          <p className="connection-desc">
            Each hearing can be understood in the context of the case it belongs to — linking upcoming dates, previous hearings, and recorded orders in one place.
          </p>
        </div>

        {/* Master Case-Hearing Unified Flow Visual */}
        <div className="connection-master-card">
          {/* Top: Master Case Entity */}
          <div className="case-header-node">
            <div className="node-icon-box">
              <Scale size={22} color="#C6A15B" />
            </div>
            <div className="node-text-col">
              <span className="node-eyebrow-tag">MASTER CASE RECORD</span>
              <h3 className="node-case-title">ABC Technologies vs. XYZ Ltd.</h3>
              <p className="node-court-meta">CS (COMM) 142/2026 • High Court of Delhi • Commercial Division</p>
            </div>
          </div>

          {/* Connected Grid: Upcoming vs Previous */}
          <div className="connection-subgrid">
            {/* Upcoming Block */}
            <div className="conn-block upcoming-block">
              <div className="conn-block-header">
                <div className="conn-badge">
                  <Calendar size={14} color="#C6A15B" />
                  <span>UPCOMING HEARING</span>
                </div>
                <span className="conn-cal-status">
                  <Check size={11} strokeWidth={2.5} />
                  <span>On Calendar</span>
                </span>
              </div>

              <div className="conn-main-date">15 September 2026</div>
              <p className="conn-bench-text">High Court of Delhi • Courtroom No. 3</p>
              <div className="conn-stage-pill">Interim Injunction & Oral Arguments</div>
            </div>

            {/* Previous Block */}
            <div className="conn-block history-block">
              <div className="conn-block-header">
                <div className="conn-badge">
                  <Clock size={14} color="#091526" />
                  <span>PREVIOUS HEARINGS</span>
                </div>
                <span className="conn-count-badge">2 Past Dates</span>
              </div>

              <div className="conn-past-items">
                <div className="conn-past-row">
                  <div>
                    <strong>12 August 2026</strong>
                    <p>Hearing completed</p>
                  </div>
                  <span className="conn-order-tag">
                    <FileText size={11} />
                    <span>Order Available</span>
                  </span>
                </div>

                <div className="conn-past-row">
                  <div>
                    <strong>24 July 2026</strong>
                    <p>Hearing completed</p>
                  </div>
                  <span className="conn-order-tag">
                    <FileText size={11} />
                    <span>Order Available</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
