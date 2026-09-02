import React from 'react';
import './visuals.css';
import { Clock, MapPin, UserCheck } from 'lucide-react';

export const HearingsCalendarVisual: React.FC = () => {
  return (
    <div className="visual-card hearings-visual-card">
      <div className="visual-window-header">
        <div className="visual-window-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="visual-window-title">Hearings & Court Dates // Cause List Sync</span>
        <span className="visual-badge-court">Upcoming Cause List</span>
      </div>

      <div className="hearings-body">
        <div className="hearings-month-header">
          <div className="hearings-title-group">
            <span className="hearings-subtitle">Litigation Schedule</span>
            <h4 className="hearings-month-name">This Week's Hearings</h4>
          </div>
          <div className="hearings-badge-counter">4 Court Appearances</div>
        </div>

        {/* Priority Hearing Card */}
        <div className="hearing-entry-card priority-hearing">
          <div className="hearing-time-col">
            <span className="hearing-day">THU</span>
            <span className="hearing-date">03 SEP</span>
            <span className="hearing-time"><Clock size={11} /> 10:30 AM</span>
          </div>

          <div className="hearing-info-col">
            <div className="hearing-top-row">
              <span className="hearing-court"><MapPin size={12} color="#C6A15B" /> Supreme Court of India • Courtroom 3</span>
              <span className="hearing-item-badge">Item No. 14</span>
            </div>
            <h5 className="hearing-case-name">Apex Global vs. Union of India & Ors.</h5>
            <p className="hearing-details">Interim Injunction Hearing • Hon'ble Justice Bench</p>
            <div className="hearing-counsel-row">
              <UserCheck size={13} color="#091526" />
              <span>Lead: Adv. R. K. Sharma • Briefing Associate: Priya M.</span>
            </div>
          </div>
        </div>

        {/* Regular Hearing Card */}
        <div className="hearing-entry-card">
          <div className="hearing-time-col">
            <span className="hearing-day">FRI</span>
            <span className="hearing-date">04 SEP</span>
            <span className="hearing-time"><Clock size={11} /> 02:00 PM</span>
          </div>

          <div className="hearing-info-col">
            <div className="hearing-top-row">
              <span className="hearing-court"><MapPin size={12} color="#738091" /> Delhi High Court • Court No. 12</span>
              <span className="hearing-item-badge neutral">Item No. 28</span>
            </div>
            <h5 className="hearing-case-name">Vanguard Logistics Arbitration Execution</h5>
            <p className="hearing-details">Framing of Issues • Commercial Division</p>
          </div>
        </div>
      </div>
    </div>
  );
};
