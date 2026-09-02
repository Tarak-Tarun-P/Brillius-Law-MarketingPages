import React from 'react';
import { Layers, Search, UserCheck, TrendingUp } from 'lucide-react';
import './WhyOnePlatform.css';

export const WhyOnePlatform: React.FC = () => {
  const blocks = [
    {
      icon: <Layers size={24} color="#C6A15B" />,
      title: 'ONE PLACE',
      desc: 'Keep clients, cases, drafts, court dates, and notes unified in a single home.',
    },
    {
      icon: <Search size={24} color="#091526" />,
      title: 'EASY TO FIND',
      desc: 'Spend less time searching through emails and folders; find what you need in seconds.',
    },
    {
      icon: <UserCheck size={24} color="#C6A15B" />,
      title: 'BUILT FOR YOUR ROLE',
      desc: 'Different needs, one platform—whether you run a firm, practice solo, or study law.',
    },
    {
      icon: <TrendingUp size={24} color="#091526" />,
      title: 'GROWS WITH YOU',
      desc: 'Start with simple case notes and scale to full team management as your practice expands.',
    },
  ];

  return (
    <section className="why-one-platform-section" aria-labelledby="why-platform-heading">
      <div className="content-container">
        <div className="why-platform-header">
          <span className="why-platform-eyebrow">WHY BRILLIUSLAW</span>
          <h2 id="why-platform-heading" className="why-platform-title">
            Less Switching. More Doing.
          </h2>
          <p className="why-platform-desc">
            Your legal work shouldn't require you to move between countless tools and scattered information. BrilliusLaw brings the important parts together so you can focus on the work itself.
          </p>
        </div>

        <div className="why-platform-grid">
          {blocks.map((b, i) => (
            <div key={i} className="why-platform-card">
              <div className="why-card-icon-box">{b.icon}</div>
              <h3 className="why-card-title">{b.title}</h3>
              <p className="why-card-desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
