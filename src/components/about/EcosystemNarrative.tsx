import React from 'react';
import { Users, FolderOpen, Briefcase, PenLine, Scale, Archive, Calendar, Bot, IndianRupee } from 'lucide-react';
import './EcosystemNarrative.css';

export const EcosystemNarrative: React.FC = () => {
  const nodes = [
    { title: 'Clients', icon: <Users size={20} color="#091526" />, desc: 'Client details & updates' },
    { title: 'Cases', icon: <Briefcase size={20} color="#091526" />, desc: 'Matter tracking & timelines' },
    { title: 'Documents', icon: <FolderOpen size={20} color="#C6A15B" />, desc: 'Safe & organized files' },
    { title: 'Drafting Lab', icon: <PenLine size={20} color="#C6A15B" />, desc: 'Easy document writing' },
    { title: 'Legal Research', icon: <Scale size={20} color="#091526" />, desc: 'Cases & Indian laws' },
    { title: 'Evidence', icon: <Archive size={20} color="#C6A15B" />, desc: 'Organized case materials' },
    { title: 'Hearings', icon: <Calendar size={20} color="#091526" />, desc: 'Court dates & schedules' },
    { title: 'AI Assistant', icon: <Bot size={20} color="#C6A15B" />, desc: 'Quick answers & insights' },
    { title: 'Finance', icon: <IndianRupee size={20} color="#091526" />, desc: 'Invoices & billing overview' },
  ];

  return (
    <section className="eco-narrative-section" aria-labelledby="eco-heading">
      <div className="content-container">
        <div className="eco-narrative-header">
          <span className="eco-narrative-eyebrow">HOW IT WORKS TOGETHER</span>
          <h2 id="eco-heading" className="eco-narrative-title">
            The BrilliusLaw Ecosystem
          </h2>
          <p className="eco-narrative-desc">
            Everything in BrilliusLaw works together. When a court date changes, your calendar updates, your team is notified, and the right draft is ready for you.
          </p>
        </div>

        <div className="eco-narrative-grid" role="list">
          {nodes.map((n, i) => (
            <div key={i} className="eco-narrative-card">
              <div className="eco-card-icon-box">{n.icon}</div>
              <h4 className="eco-card-title">{n.title}</h4>
              <p className="eco-card-desc">{n.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
