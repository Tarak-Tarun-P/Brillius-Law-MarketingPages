import React from 'react';
import { Briefcase, FileText, BookOpen, Sparkles, Bookmark, IndianRupee, ArrowRight } from 'lucide-react';
import './PillarsOverview.css';

export const PillarsOverview: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Practice & Cases',
      desc: 'Clients, matters, hearings, and evidence organized in one unified practice hub.',
      icon: <Briefcase size={22} color="#091526" />,
      targetId: 'section-practice',
    },
    {
      num: '02',
      title: 'Documents & Drafting',
      desc: 'Create, redline, compare, and approve legal documents from first draft to final copy.',
      icon: <FileText size={22} color="#091526" />,
      targetId: 'section-documents',
    },
    {
      num: '03',
      title: 'Law Library',
      desc: 'Explore Bare Acts, read section provisions, and discover connected judgments.',
      icon: <BookOpen size={22} color="#091526" />,
      targetId: 'section-library',
    },
    {
      num: '04',
      title: 'AI Assistant',
      desc: 'Quickly analyze long documents, ask questions, and get help drafting legal materials.',
      icon: <Sparkles size={22} color="#C6A15B" />,
      targetId: 'section-intelligence',
    },
    {
      num: '05',
      title: 'My Journal',
      desc: 'Record your thoughts instead of typing, save observations, and bookmark useful laws.',
      icon: <Bookmark size={22} color="#C6A15B" />,
      targetId: 'section-journal',
    },
    {
      num: '06',
      title: 'Finance & Operations',
      desc: 'Track billable hours, invoices, retainers, and sync official court cause lists.',
      icon: <IndianRupee size={22} color="#091526" />,
      targetId: 'section-finance',
    },
  ];

  return (
    <section className="pillars-overview-section" aria-labelledby="pillars-heading">
      <div className="content-container">
        {/* Section Header */}
        <div className="pillars-header">
          <span className="pillars-eyebrow">ONE PLATFORM. COMPLETE LEGAL WORKFLOW.</span>
          <h2 id="pillars-heading" className="pillars-heading">
            Everything You Need in One Place
          </h2>
          <p className="pillars-subtext">
            From client onboarding and court hearings to drafting, exploring Indian laws, recording thoughts, and billing, BrilliusLaw keeps your legal work simple and organized.
          </p>
        </div>

        {/* 6 Product Pillars Cards */}
        <div className="pillars-grid" role="list">
          {pillars.map((pillar) => (
            <a key={pillar.num} href={`#${pillar.targetId}`} className="pillar-card">
              <div className="pillar-top">
                <div className="pillar-icon-box">{pillar.icon}</div>
                <span className="pillar-num">{pillar.num}</span>
              </div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.desc}</p>
              <div className="pillar-action">
                <span>Explore Feature</span>
                <ArrowRight size={14} className="pillar-arrow" aria-hidden="true" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
