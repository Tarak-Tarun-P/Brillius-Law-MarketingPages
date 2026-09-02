import React from 'react';
import { Star, Bookmark, Mic, Clock, ArrowRight } from 'lucide-react';
import './JournalHowItWorks.css';

export const JournalHowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'SAVE',
      desc: 'Save a key statutory point or write down your own notes.',
      icon: <Star size={18} color="#091526" />,
    },
    {
      num: '02',
      title: 'BOOKMARK',
      desc: 'Bookmark useful provisions, Acts, and court decisions to revisit.',
      icon: <Bookmark size={18} color="#091526" />,
    },
    {
      num: '03',
      title: 'CAPTURE',
      desc: 'Record a spoken thought when you don\'t want to stop and type.',
      icon: <Mic size={18} color="#C6A15B" />,
      featured: true,
    },
    {
      num: '04',
      title: 'RETURN',
      desc: 'Come back to your saved information and resume right where you left off.',
      icon: <Clock size={18} color="#091526" />,
    },
  ];

  return (
    <section id="journal-how-it-works" className="journal-works-section" aria-labelledby="how-it-works-heading">
      <div className="content-container">
        <div className="works-header">
          <span className="works-eyebrow">SIMPLE 4-STEP WORKFLOW</span>
          <h2 id="how-it-works-heading" className="works-title">
            A Simple Place to Keep What Matters.
          </h2>
          <p className="works-desc">
            A personal, distraction-free environment to preserve what you learn and organize what you think.
          </p>
        </div>

        <div className="works-steps-row">
          {steps.map((s, idx) => (
            <React.Fragment key={idx}>
              <div className={`works-step-box ${s.featured ? 'featured-work-box' : ''}`}>
                <div className="works-step-top">
                  <span className="step-num-pill">0{idx + 1}</span>
                  <div className="works-icon-circle">{s.icon}</div>
                </div>
                <h3 className="works-step-title">{s.title}</h3>
                <p className="works-step-desc">{s.desc}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="works-step-arrow" aria-hidden="true">
                  <ArrowRight size={14} color="#C6A15B" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
