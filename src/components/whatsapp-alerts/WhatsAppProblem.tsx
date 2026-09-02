import React from 'react';
import { Bell, Clock, FileCheck, Users } from 'lucide-react';
import './WhatsAppProblem.css';

export const WhatsAppProblem: React.FC = () => {
  const problems = [
    {
      num: '01',
      title: 'Too Many Things to Track',
      desc: 'Stay informed when important activities need your attention.',
      icon: <Bell size={22} />,
    },
    {
      num: '02',
      title: 'Important Reminders',
      desc: 'Receive useful reminders about upcoming or pending work.',
      icon: <Clock size={22} />,
    },
    {
      num: '03',
      title: 'Approval Updates',
      desc: 'Know when drafts or documents need review or have been updated.',
      icon: <FileCheck size={22} />,
    },
    {
      num: '04',
      title: 'Team Awareness',
      desc: 'Help your team stay informed about important changes and actions.',
      icon: <Users size={22} />,
    },
  ];

  return (
    <section className="wa-problem-section" aria-labelledby="wa-problem-heading">
      <div className="content-container">
        <div className="wa-problem-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">COMMUNICATION CHALLENGES</span>
          </div>
          <h2 id="wa-problem-heading" className="wa-problem-title">
            You Shouldn’t Have to Keep Checking.
          </h2>
          <p className="wa-problem-desc">
            Legal work involves hearings, deadlines, reviews, approvals, and other important activities. WhatsApp Alerts helps bring important updates to you so you can stay aware without repeatedly opening the platform.
          </p>
        </div>

        <div className="wa-problem-grid">
          {problems.map((p, idx) => (
            <div key={idx} className="problem-wa-card">
              <div className="wa-card-top">
                <span className="wa-index-pill">{p.num}</span>
                <div className="wa-icon-wrap">{p.icon}</div>
              </div>
              <h3 className="wa-card-title">{p.title}</h3>
              <p className="wa-card-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
