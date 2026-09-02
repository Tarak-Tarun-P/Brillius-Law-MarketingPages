import React from 'react';
import {
  Search,
  Compass,
  FileCheck,
  Scale,
  FolderOpen,
  HelpCircle,
  BookOpenCheck,
  Award,
} from 'lucide-react';
import './ResearchHowItWorks.css';

export const ResearchHowItWorks: React.FC = () => {
  const part1Steps = [
    {
      num: '01',
      title: 'SEARCH',
      desc: 'Search by keyword, party name, reporter citation, judge, or statutory section.',
      icon: <Search size={16} />,
    },
    {
      num: '02',
      title: 'EXPLORE',
      desc: 'Review available judgments and authoritative precedents from Indian courts.',
      icon: <Compass size={16} />,
    },
    {
      num: '03',
      title: 'UNDERSTAND',
      desc: 'Review summaries, legal principles, key issues, arguments, and treatment status.',
      icon: <FileCheck size={16} />,
    },
    {
      num: '04',
      title: 'VERIFY',
      desc: 'Open and review the underlying primary judgment text for full judicial context.',
      icon: <Scale size={16} />,
    },
  ];

  const part2Steps = [
    {
      num: '01',
      title: 'CHOOSE YOUR CASE',
      desc: 'Open the specific matter and active case documents you are working on.',
      icon: <FolderOpen size={16} />,
    },
    {
      num: '02',
      title: 'ASK',
      desc: 'Ask questions about pleadings, evidence, claim weaknesses, or applicable laws.',
      icon: <HelpCircle size={16} />,
    },
    {
      num: '03',
      title: 'REVIEW',
      desc: 'Read structured answers grounded directly in case documents and source page citations.',
      icon: <BookOpenCheck size={16} />,
    },
    {
      num: '04',
      title: 'DECIDE',
      desc: 'Use your own independent legal judgment to determine what matters for your strategy.',
      icon: <Award size={16} />,
    },
  ];

  return (
    <section id="research-how-it-works" className="research-how-it-works-section" aria-labelledby="how-it-works-heading">
      <div className="content-container">
        {/* Header */}
        <div className="how-it-works-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">STRUCTURED WORKFLOW</span>
          </div>
          <h2 id="how-it-works-heading" className="how-it-works-title">
            Two Ways to Research.
          </h2>
          <p className="how-it-works-desc">
            A clear, dependable methodology whether researching external authorities across Indian jurisprudence or exploring facts within your own case documents.
          </p>
        </div>

        {/* Dual Workflow Layout */}
        <div className="workflows-dual-grid">
          {/* Part 1: Research the Law */}
          <div className="workflow-column-card">
            <div className="workflow-col-header">
              <span className="part-tag">PART 1</span>
              <h3 className="part-title">RESEARCH THE LAW</h3>
              <p className="part-subtitle">Search external court judgments, citations, and precedents.</p>
            </div>

            <div className="workflow-steps-list">
              {part1Steps.map((s, idx) => (
                <div key={idx} className="workflow-step-row">
                  <div className="step-num-circle">
                    <span className="step-index-str">{s.num}</span>
                  </div>
                  <div className="step-body-content">
                    <div className="step-title-group">
                      <div className="step-icon-wrap">{s.icon}</div>
                      <h4 className="step-name">{s.title}</h4>
                    </div>
                    <p className="step-explanation">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Part 2: Research Your Case */}
          <div className="workflow-column-card matter-workflow-card">
            <div className="workflow-col-header">
              <span className="part-tag gold-part-tag">PART 2</span>
              <h3 className="part-title">RESEARCH YOUR CASE</h3>
              <p className="part-subtitle">Ask questions grounded in your matter documents and evidence.</p>
            </div>

            <div className="workflow-steps-list">
              {part2Steps.map((s, idx) => (
                <div key={idx} className="workflow-step-row">
                  <div className="step-num-circle gold-circle">
                    <span className="step-index-str">{s.num}</span>
                  </div>
                  <div className="step-body-content">
                    <div className="step-title-group">
                      <div className="step-icon-wrap gold-icon-wrap">{s.icon}</div>
                      <h4 className="step-name">{s.title}</h4>
                    </div>
                    <p className="step-explanation">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
