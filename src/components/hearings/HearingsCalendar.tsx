import React, { useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Scale, Clock, Check } from 'lucide-react';
import './HearingsCalendar.css';

export const HearingsCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<number>(15);

  const calendarDays = [
    { day: 14, weekday: 'Mon', active: false },
    { day: 15, weekday: 'Tue', active: true, hasDot: true, caseTitle: 'ABC Technologies vs. XYZ Ltd.', court: 'High Court of Delhi • Court No. 3', stage: 'Oral Arguments • Item No. 18' },
    { day: 16, weekday: 'Wed', active: false },
    { day: 17, weekday: 'Thu', active: false },
    { day: 18, weekday: 'Fri', active: false },
    { day: 21, weekday: 'Mon', active: false },
    { day: 22, weekday: 'Tue', active: true, hasDot: true, caseTitle: 'Property Title & Injunction Dispute', court: 'District Court, Saket • Court No. 2', stage: 'Interim Stay Application' },
    { day: 23, weekday: 'Wed', active: false },
    { day: 24, weekday: 'Thu', active: false },
    { day: 25, weekday: 'Fri', active: false },
  ];

  const currentSelected = calendarDays.find((d) => d.day === selectedDate) || calendarDays[1];

  return (
    <section className="hearings-cal-section" aria-labelledby="cal-heading">
      <div className="content-container">
        <div className="hearings-cal-header">
          <span className="cal-eyebrow">YOUR CALENDAR</span>
          <h2 id="cal-heading" className="cal-title">
            Keep Hearing Dates on Your Calendar.
          </h2>
          <p className="cal-desc">
            Hearing dates connected to your cases can be reflected on the platform calendar so upcoming dates are easier to keep track of.
          </p>
        </div>

        {/* Clean Calendar Visual */}
        <div className="cal-display-card">
          {/* Left: Interactive Month View */}
          <div className="cal-month-view">
            <div className="cal-month-topbar">
              <div className="cal-month-title-group">
                <CalendarIcon size={16} color="#C6A15B" />
                <strong className="cal-month-name">SEPTEMBER 2026</strong>
              </div>
              <div className="cal-nav-arrows">
                <span className="cal-arrow-btn"><ChevronLeft size={14} /></span>
                <span className="cal-arrow-btn"><ChevronRight size={14} /></span>
              </div>
            </div>

            <div className="cal-weekdays-grid">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
            </div>

            <div className="cal-days-grid">
              {calendarDays.slice(0, 5).map((d) => (
                <button
                  type="button"
                  key={d.day}
                  className={`cal-day-cell ${selectedDate === d.day ? 'selected-day' : ''} ${d.hasDot ? 'has-hearing' : ''}`}
                  onClick={() => setSelectedDate(d.day)}
                >
                  <span className="day-number">{d.day}</span>
                  {d.hasDot && <span className="day-dot" aria-hidden="true" />}
                </button>
              ))}
              {calendarDays.slice(5, 10).map((d) => (
                <button
                  type="button"
                  key={d.day}
                  className={`cal-day-cell ${selectedDate === d.day ? 'selected-day' : ''} ${d.hasDot ? 'has-hearing' : ''}`}
                  onClick={() => setSelectedDate(d.day)}
                >
                  <span className="day-number">{d.day}</span>
                  {d.hasDot && <span className="day-dot" aria-hidden="true" />}
                </button>
              ))}
            </div>

            <div className="cal-legend-row">
              <span className="legend-item">
                <span className="legend-dot" />
                <span>Hearing on record</span>
              </span>
              <span className="legend-note">Click a marked date to view scheduled matter</span>
            </div>
          </div>

          {/* Right: Selected Date Matter Detail */}
          <div className="cal-detail-pane">
            <div className="pane-date-header">
              <span className="pane-tag">SELECTED DATE</span>
              <h3 className="pane-selected-date">{selectedDate} September 2026</h3>
            </div>

            {currentSelected.hasDot ? (
              <div className="pane-matter-card">
                <div className="pane-matter-top">
                  <div className="pane-icon-wrap">
                    <Scale size={18} color="#091526" />
                  </div>
                  <span className="pane-badge-status">Scheduled Appearance</span>
                </div>

                <h4 className="pane-case-name">{currentSelected.caseTitle}</h4>
                <p className="pane-court-text">{currentSelected.court}</p>

                <div className="pane-stage-box">
                  <Clock size={14} color="#C6A15B" />
                  <span>{currentSelected.stage}</span>
                </div>

                <div className="pane-sync-confirm">
                  <Check size={12} color="#059669" />
                  <span>Reflected on platform master calendar</span>
                </div>
              </div>
            ) : (
              <div className="pane-empty-card">
                <p className="pane-empty-text">No court hearings scheduled for this date.</p>
                <span className="pane-empty-sub">Select 15 or 22 September to view hearing details.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
