import React from 'react';
import { FileEdit, Repeat, LayoutTemplate, GitBranch } from 'lucide-react';
import './CaseDraftsProblem.css';

export const CaseDraftsProblem: React.FC = () => {
  const problems = [
    {
      num: '01',
      title: 'Starting From Scratch',
      desc: 'Spend less time rebuilding the same document structure for every matter.',
      icon: <FileEdit size={22} />,
    },
    {
      num: '02',
      title: 'Repeating Case Details',
      desc: 'Use information already available in your case instead of entering the same details repeatedly.',
      icon: <Repeat size={22} />,
    },
    {
      num: '03',
      title: 'Finding the Right Format',
      desc: 'Work from available templates suited to the type of document you are preparing.',
      icon: <LayoutTemplate size={22} />,
    },
    {
      num: '04',
      title: 'Managing Revisions',
      desc: 'Keep track of different versions as a draft is edited and reviewed.',
      icon: <GitBranch size={22} />,
    },
  ];

  return (
    <section className="casedrafts-problem-section" aria-labelledby="problem-heading">
      <div className="content-container">
        <div className="problem-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">DRAFTING BOTTLENECKS</span>
          </div>
          <h2 id="problem-heading" className="problem-title">
            Legal Drafting Takes More Than Just Writing.
          </h2>
          <p className="problem-desc">
            Starting every document from a blank page means repeatedly gathering case details, finding the right format, and checking previous versions. Case Drafts brings these steps together into a more organized drafting workflow.
          </p>
        </div>

        <div className="problem-grid">
          {problems.map((p, idx) => (
            <div key={idx} className="problem-draft-card">
              <div className="draft-card-top">
                <span className="draft-index-pill">{p.num}</span>
                <div className="draft-icon-wrap">{p.icon}</div>
              </div>
              <h3 className="draft-card-title">{p.title}</h3>
              <p className="draft-card-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
