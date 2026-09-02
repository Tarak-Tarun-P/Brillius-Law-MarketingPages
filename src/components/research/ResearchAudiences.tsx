import React from 'react';
import { Briefcase, Building2, GraduationCap, CheckCircle2 } from 'lucide-react';
import './ResearchAudiences.css';

export const ResearchAudiences: React.FC = () => {
  const audiences = [
    {
      eyebrow: 'FOR LAWYERS & ADVOCATES',
      headline: 'Research Before You Build Your Argument.',
      desc: 'Find judgments, understand the key points, check available treatment information, and ask questions about your own case.',
      icon: <Briefcase size={22} />,
      points: [
        'Search by issue, party name, citation, judge, or section',
        'Review ratio decidendi, arguments, and summaries',
        'Check available treatment status and similar precedents',
        'Ask questions grounded in your specific case record',
      ],
    },
    {
      eyebrow: 'FOR LAW FIRMS & LEGAL TEAMS',
      headline: 'Bring Research Closer to the Matter.',
      desc: 'Research external authorities and connect useful findings with the cases your team is working on.',
      icon: <Building2 size={22} />,
      points: [
        'Save useful judgments directly to active matter files',
        'Create structured legal research notes for team collaboration',
        'Review matter pleadings and evidence through targeted queries',
        'Keep source document references organized across filings',
      ],
      featured: true,
    },
    {
      eyebrow: 'FOR LAW STUDENTS',
      headline: 'Learn by Exploring the Decisions.',
      desc: 'Search judgments by issue, party, citation, judge, or section, then read the decisions and explore the legal principles and issues discussed in them.',
      icon: <GraduationCap size={22} />,
      points: [
        'Explore landmark Supreme Court and High Court jurisprudence',
        'Examine how courts frame key issues and analyze submissions',
        'Trace precedential treatment across subsequent benches',
        'Study statutory interpretation in direct context',
      ],
    },
  ];

  return (
    <section className="research-audiences-section" aria-labelledby="audiences-heading">
      <div className="content-container">
        <div className="audiences-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">TAILORED PRACTICE VALUE</span>
          </div>
          <h2 id="audiences-heading" className="audiences-title">
            Built for How Legal Minds Work.
          </h2>
          <p className="audiences-desc">
            Whether arguing before a bench, collaborating on complex matters in a firm, or studying judicial reasoning, Legal Research supports your workflow.
          </p>
        </div>

        <div className="audiences-grid">
          {audiences.map((aud, idx) => (
            <div
              key={idx}
              className={`audience-card ${aud.featured ? 'featured-audience-card' : ''}`}
            >
              <div className="audience-card-top">
                <div className="aud-icon-box">{aud.icon}</div>
                <span className="aud-eyebrow-text">{aud.eyebrow}</span>
              </div>

              <h3 className="aud-headline">{aud.headline}</h3>
              <p className="aud-desc">{aud.desc}</p>

              <div className="aud-points-list">
                {aud.points.map((pt, pIdx) => (
                  <div key={pIdx} className="aud-point-item">
                    <CheckCircle2 size={14} color="#C6A15B" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
