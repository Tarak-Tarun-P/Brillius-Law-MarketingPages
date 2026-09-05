import React from 'react';
import { Compass, FolderCog, MessageCircleQuestion } from 'lucide-react';
import './SupportGettingStarted.css';

export const SupportGettingStarted: React.FC = () => {
  const steps = [
    {
      title: 'EXPLORE THE PLATFORM',
      desc: "Get familiar with BrilliusLaw's features, from case and client management to legal research and drafting.",
      icon: <Compass size={22} color="#C6A15B" />,
    },
    {
      title: 'SET UP YOUR WORK',
      desc: 'Add your clients, cases, and documents to start organizing your day-to-day legal work in one place.',
      icon: <FolderCog size={22} color="#091526" />,
    },
    {
      title: 'ASK FOR HELP ANYTIME',
      desc: "If something is unclear, reach out to the BrilliusLaw team and we'll help you find your way.",
      icon: <MessageCircleQuestion size={22} color="#C6A15B" />,
    },
  ];

  return (
    <section className="getting-started-section" aria-labelledby="getting-started-heading">
      <div className="content-container">
        <div className="getting-started-header">
          <span className="getting-started-eyebrow">GETTING STARTED</span>
          <h2 id="getting-started-heading" className="getting-started-title">
            New to BrilliusLaw?
          </h2>
          <p className="getting-started-desc">
            A few simple steps to help you get comfortable with the platform.
          </p>
        </div>

        <div className="getting-started-grid">
          {steps.map((s, idx) => (
            <div key={idx} className="getting-started-card">
              <div className="getting-started-icon-wrap">{s.icon}</div>
              <h3 className="getting-started-card-title">{s.title}</h3>
              <p className="getting-started-card-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
