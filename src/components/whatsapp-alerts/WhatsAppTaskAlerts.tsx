import React from 'react';
import { CheckSquare, CheckCircle2, MessageSquare } from 'lucide-react';
import './WhatsAppTaskAlerts.css';

export const WhatsAppTaskAlerts: React.FC = () => {
  const taskAlerts = [
    {
      badge: 'TASK DUE TODAY',
      badgeClass: 'badge-due',
      title: 'File Rejoinder Affidavit in Registry',
      matter: 'Matter: Apex Global vs CGSC',
      assignedTo: 'Assigned to: Arjun Kapoor',
    },
    {
      badge: 'OVERDUE TASK REMINDER',
      badgeClass: 'badge-overdue',
      title: 'Serve Notice Copy to Respondent No. 3',
      matter: 'Matter: W.P.(C) 4892/2023',
      assignedTo: 'Pending since yesterday',
    },
    {
      badge: 'IMPORTANT TASK REMINDER',
      badgeClass: 'badge-important',
      title: 'Prepare Case Law Compilation for Bench',
      matter: 'Matter: Comm. Appeal 142/2023',
      assignedTo: 'Assigned by: Senior Advocate S. K. Mehta',
    },
  ];

  return (
    <section className="wa-tasks-section" aria-labelledby="wa-tasks-heading">
      <div className="content-container">
        <div className="wa-tasks-grid">
          {/* Left Visual Feed Box */}
          <div className="wa-tasks-left">
            <div className="tasks-feed-box">
              <div className="feed-header">
                <CheckSquare size={15} color="#C6A15B" />
                <strong className="feed-title">Sample Task Reminders on WhatsApp</strong>
              </div>

              <div className="tasks-messages-list">
                {taskAlerts.map((task, idx) => (
                  <div key={idx} className="wa-task-card">
                    <div className="wa-card-badge-row">
                      <span className={`wa-task-badge ${task.badgeClass}`}>{task.badge}</span>
                      <MessageSquare size={12} color="#075E54" />
                    </div>
                    <strong className="wa-task-title">{task.title}</strong>
                    <span className="wa-task-matter">{task.matter}</span>
                    <span className="wa-task-assignee">{task.assignedTo}</span>
                  </div>
                ))}
              </div>

              <div className="feed-footer">
                <CheckCircle2 size={12} color="#C6A15B" />
                <span>Keep actionable chamber tasks top of mind across associates and litigation teams.</span>
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="wa-tasks-right">
            <div className="eyebrow-chip">
              <span className="eyebrow-text">DEADLINES &amp; ACTION ITEMS</span>
            </div>
            <h2 id="wa-tasks-heading" className="wa-tasks-title">
              Stay on Top of Important Tasks.
            </h2>
            <p className="wa-tasks-desc">
              Receive reminders when important tasks need your attention, helping you keep work moving across active matters.
            </p>

            <div className="wa-tasks-bullets">
              <div className="t-bullet-item">
                <CheckCircle2 size={16} color="#C6A15B" />
                <span>Reminders for tasks due today across assigned matters</span>
              </div>
              <div className="t-bullet-item">
                <CheckCircle2 size={16} color="#C6A15B" />
                <span>Overdue task nudges so pending filings are quickly resolved</span>
              </div>
              <div className="t-bullet-item">
                <CheckCircle2 size={16} color="#C6A15B" />
                <span>Direct matter references so you know exactly which file requires action</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
