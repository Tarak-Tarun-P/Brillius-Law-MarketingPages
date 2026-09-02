import React from 'react';
import { Briefcase, FolderOpen, BookOpen, Mic, Sparkles } from 'lucide-react';
import './SolutionsByWork.css';

export const SolutionsByWork: React.FC = () => {
  const blocks = [
    {
      num: '01',
      title: 'MANAGE YOUR PRACTICE',
      desc: 'Keep clients, cases, hearings, evidence, and important case dates organized in one unified workspace.',
      icon: <Briefcase size={22} color="#091526" />,
      tag: 'Practice Hub',
    },
    {
      num: '02',
      title: 'WORK WITH DOCUMENTS',
      desc: 'Store, find, review, and collaborate on important legal drafts, contracts, and court files more easily.',
      icon: <FolderOpen size={22} color="#091526" />,
      tag: 'Document Vault',
    },
    {
      num: '03',
      title: 'FIND THE LAW',
      desc: 'Explore Bare Acts, section provisions, footnotes, exceptions, and connected court decisions in the Law Library.',
      icon: <BookOpen size={22} color="#C6A15B" />,
      tag: 'Law Library',
      featured: true,
    },
    {
      num: '04',
      title: 'CAPTURE YOUR THOUGHTS',
      desc: 'Record notes, save observations without typing, and bookmark useful legal references in My Journal.',
      icon: <Mic size={22} color="#C6A15B" />,
      tag: 'My Journal',
      featured: true,
    },
    {
      num: '05',
      title: 'GET INTELLIGENT HELP',
      desc: 'Get help understanding lengthy agreements, discovering relevant information, and drafting faster with AI.',
      icon: <Sparkles size={22} color="#091526" />,
      tag: 'AI Assistant',
    },
  ];

  return (
    <section className="solutions-by-work-section" aria-labelledby="by-work-heading">
      <div className="content-container">
        <div className="by-work-header">
          <span className="by-work-eyebrow">MADE FOR THE WORK THAT MATTERS</span>
          <h2 id="by-work-heading" className="by-work-title">
            From Everyday Tasks to Important Decisions.
          </h2>
          <p className="by-work-desc">
            BrilliusLaw is organized around how legal work actually happens—connecting your daily routine with helpful tools that save time and reduce errors.
          </p>
        </div>

        <div className="by-work-grid" role="list">
          {blocks.map((block) => (
            <div key={block.num} className={`by-work-card ${block.featured ? 'featured-work-card' : ''}`}>
              <div className="by-work-card-top">
                <div className="by-work-icon-box">{block.icon}</div>
                <span className="by-work-num">{block.num}</span>
              </div>

              <div className="by-work-meta-row">
                <span className="by-work-tag">{block.tag}</span>
              </div>

              <h3 className="by-work-card-title">{block.title}</h3>
              <p className="by-work-card-desc">{block.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
