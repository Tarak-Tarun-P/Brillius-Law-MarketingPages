import React from 'react';
import { ShieldCheck, CalendarCheck, FileCheck, CheckCircle2 } from 'lucide-react';
import './HearingsLimitations.css';

export const HearingsLimitations: React.FC = () => {
  return (
    <section className="hearings-limitations-section" aria-labelledby="limitations-heading">
      <div className="content-container">
        <div className="hearings-limitations-card">
          <div className="limitations-top-row">
            <div className="limitations-badge">
              <ShieldCheck size={16} color="#C6A15B" />
              <span>PRACTICE GUIDELINES</span>
            </div>
            <span className="limitations-tag">Hearing Management Standards</span>
          </div>

          <h2 id="limitations-heading" className="limitations-title">
            Stay Informed, Stay Up to Date.
          </h2>

          <p className="limitations-desc">
            The platform helps organize the hearing information available to you. Important dates, hearing details, and recorded orders or verdicts should be reviewed and kept current.
          </p>

          <div className="limitations-points-grid">
            <div className="limitation-point">
              <CalendarCheck size={18} color="#C6A15B" />
              <div className="point-text">
                <strong className="point-title">Verify Daily Cause Lists</strong>
                <p className="point-desc">Always confirm item numbers and bench sittings against the official published court cause lists on the day of hearing.</p>
              </div>
            </div>

            <div className="limitation-point">
              <FileCheck size={18} color="#C6A15B" />
              <div className="point-text">
                <strong className="point-title">Attach Certified Copies</strong>
                <p className="point-desc">Upload signed daily orders and decrees after appearances to preserve an accurate historical case record.</p>
              </div>
            </div>

            <div className="limitation-point">
              <CheckCircle2 size={18} color="#C6A15B" />
              <div className="point-text">
                <strong className="point-title">You Retain Full Control</strong>
                <p className="point-desc">Practitioners maintain complete editorial authority over all hearing schedules, statuses, and matter associations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
