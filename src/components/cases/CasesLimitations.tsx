import React from 'react';
import { ShieldCheck, RefreshCw, CalendarCheck, CheckCircle2 } from 'lucide-react';
import './CasesLimitations.css';

export const CasesLimitations: React.FC = () => {
  return (
    <section className="cases-limitations-section" aria-labelledby="limitations-heading">
      <div className="content-container">
        <div className="cases-limitations-card">
          <div className="limitations-top-row">
            <div className="limitations-badge">
              <ShieldCheck size={16} color="#C6A15B" />
              <span>PRACTICE STANDARDS</span>
            </div>
            <span className="limitations-tag">Matter Management Best Practices</span>
          </div>

          <h2 id="limitations-heading" className="limitations-title">
            Good Case Management Still Needs Good Information.
          </h2>

          <p className="limitations-desc">
            The system helps organize the information you provide. Important case details, dates, and status information should be kept up to date.
          </p>

          <div className="limitations-points-grid">
            <div className="limitation-point">
              <RefreshCw size={18} color="#C6A15B" />
              <div className="point-text">
                <strong className="point-title">Keep Case Particulars Current</strong>
                <p className="point-desc">Update case numbers, opposing counsels, and stage classifications whenever fresh notices or pleadings are exchanged.</p>
              </div>
            </div>

            <div className="limitation-point">
              <CalendarCheck size={18} color="#C6A15B" />
              <div className="point-text">
                <strong className="point-title">Record Hearing Outcomes Promptly</strong>
                <p className="point-desc">Log orders, next hearing dates, and interim directions after every court appearance to keep the timeline clear.</p>
              </div>
            </div>

            <div className="limitation-point">
              <CheckCircle2 size={18} color="#C6A15B" />
              <div className="point-text">
                <strong className="point-title">Full Editorial Control</strong>
                <p className="point-desc">You and your team retain complete control over all matter records, priorities, and status updates.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
