import React from 'react';
import { Briefcase, Building2, GraduationCap, CheckCircle2 } from 'lucide-react';
import './AIAssistantAudiences.css';

export const AIAssistantAudiences: React.FC = () => {
  const audienceBlocks = [
    {
      badge: 'FOR LAWYERS & ADVOCATES',
      icon: <Briefcase size={26} color="#091526" />,
      headline: 'A Clearer Starting Point for Legal Research.',
      desc: 'Ask about a matter, explore potentially relevant provisions, organize the issues you need to consider, and continue your research from there.',
      points: [
        'Explore legal issues across civil, commercial, and criminal matters',
        'Identify statutory provisions and sections worth deeper investigation',
        'Organize key questions and potential grounds before drafting petitions',
        'Ask follow-up questions to break down complex procedural provisions',
      ],
      featured: true,
    },
    {
      badge: 'FOR LAW FIRMS & TEAMS',
      icon: <Building2 size={26} color="#C6A15B" />,
      headline: 'Help Your Team Think Through Legal Work.',
      desc: 'Use the Assistant to explore issues, organize information, and support research across matters for partners and associates.',
      points: [
        'Help junior associates structure initial thinking on new client briefs',
        'Prepare structured research checklists for complex commercial transactions',
        'Quickly explore cross-practice statutory questions across teams',
        'Standardize exploratory research workflows across the firm',
      ],
    },
    {
      badge: 'FOR LAW STUDENTS',
      icon: <GraduationCap size={26} color="#C6A15B" />,
      headline: 'Learn by Asking Questions.',
      desc: 'Explore legal concepts, understand provisions, and work through legal situations while building your understanding of the law.',
      points: [
        'Understand difficult Bare Act provisions through plain-language breakdowns',
        'Compare legal doctrines and statutory exceptions when studying for exams',
        'Explore hypothetical problem questions and identify issues for moot briefs',
        'Build structured research habits for your future legal career',
      ],
    },
  ];

  return (
    <section className="assistant-audiences-section" aria-labelledby="assistant-audiences-heading">
      <div className="content-container">
        <div className="assistant-audiences-header">
          <span className="audiences-eyebrow">DESIGNED FOR PRACTICE & STUDY</span>
          <h2 id="assistant-audiences-heading" className="audiences-title">
            Built for the Way Legal Professionals Work.
          </h2>
          <p className="audiences-desc">
            Tailored assistance designed specifically for the professional workflow of advocates, the multi-practice needs of firms, and the study goals of law scholars.
          </p>
        </div>

        <div className="audiences-cards-grid">
          {audienceBlocks.map((aud, idx) => (
            <div key={idx} className={`aud-card-box ${aud.featured ? 'featured-aud-box' : ''}`}>
              <div className="aud-box-top">
                <div className="aud-icon-wrap">{aud.icon}</div>
                <span className="aud-badge-label">{aud.badge}</span>
              </div>

              <h3 className="aud-box-headline">{aud.headline}</h3>
              <p className="aud-box-desc">{aud.desc}</p>

              <div className="aud-box-divider" aria-hidden="true" />

              <ul className="aud-box-points">
                {aud.points.map((pt, pIdx) => (
                  <li key={pIdx}>
                    <CheckCircle2 size={15} color="#C6A15B" className="point-check" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
