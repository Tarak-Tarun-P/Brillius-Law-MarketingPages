import React from 'react';
import { Briefcase, Bell, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';
import './WhatsAppHowItHelps.css';

export const WhatsAppHowItHelps: React.FC = () => {
  const flowNodes = [
    {
      step: '01',
      title: 'Activity in BrilliusLaw',
      desc: 'Hearings scheduled, tasks assigned, or drafts submitted for review.',
      icon: <Briefcase size={20} />,
    },
    {
      step: '02',
      title: 'Important Update Identified',
      desc: 'The system recognizes relevant action items needing your attention.',
      icon: <Bell size={20} />,
    },
    {
      step: '03',
      title: 'WhatsApp Alert Delivered',
      desc: 'A clear, concise update reaches you directly on WhatsApp.',
      icon: <MessageSquare size={20} />,
      featured: true,
    },
    {
      step: '04',
      title: 'User Stays Informed',
      desc: 'Know what is happening and open BrilliusLaw only when you need to act.',
      icon: <CheckCircle2 size={20} />,
    },
  ];

  return (
    <section id="whatsapp-how-it-helps" className="wa-how-section" aria-labelledby="how-heading">
      <div className="content-container">
        <div className="wa-how-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">HOW IT WORKS</span>
          </div>
          <h2 id="how-heading" className="wa-how-title">
            Stay Updated Without the Extra Checking
          </h2>
          <p className="wa-how-desc">
            WhatsApp Alerts brings selected important updates from your legal workspace directly to WhatsApp, helping you stay aware while you focus on your work.
          </p>
        </div>

        {/* 4-Step Horizontal Connected Flow */}
        <div className="wa-flow-container">
          <div className="wa-flow-grid">
            {flowNodes.map((node, idx) => (
              <React.Fragment key={idx}>
                <div className={`wa-flow-card ${node.featured ? 'featured-flow-card' : ''}`}>
                  <div className="flow-card-top">
                    <span className="flow-step-num">{node.step}</span>
                    <div className="flow-icon-circle">{node.icon}</div>
                  </div>
                  <strong className="flow-node-title">{node.title}</strong>
                  <p className="flow-node-desc">{node.desc}</p>
                </div>

                {idx < flowNodes.length - 1 && (
                  <div className="flow-arrow-box" aria-hidden="true">
                    <ArrowRight size={16} color="#C6A15B" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="wa-flow-footer">
            <CheckCircle2 size={13} color="#C6A15B" />
            <span>Keeps you informed throughout the day without interrupting your active courtroom or client focus.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
