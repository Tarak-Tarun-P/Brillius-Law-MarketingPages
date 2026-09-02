import React from 'react';
import { HelpCircle, Lightbulb, Search, CheckCircle2 } from 'lucide-react';
import './AIAssistantFollowUp.css';

export const AIAssistantFollowUp: React.FC = () => {
  const followUps = [
    {
      q: 'Why might this provision be relevant?',
      a: 'The provision establishes the statutory baseline for whether time was treated as the essence of contract, determining whether rescission is immediately permitted.',
      icon: <HelpCircle size={20} color="#C6A15B" />,
    },
    {
      q: 'Can you explain this in simpler terms?',
      a: 'In simple terms: if the deadline was strictly agreed in writing, missing it allows the non-defaulting party to cancel and claim damages; otherwise, reasonable time is granted.',
      icon: <Lightbulb size={20} color="#091526" />,
    },
    {
      q: 'What other issues should I consider?',
      a: 'Consider checking whether any extension letters were signed, whether partial payments were accepted, and whether a formal cure notice was served before filing.',
      icon: <Search size={20} color="#C6A15B" />,
    },
    {
      q: 'What should I research next?',
      a: 'Review judicial precedents on Section 55 and Section 73 of the Indian Contract Act to examine how courts assess liquidated damages in similar commercial contracts.',
      icon: <CheckCircle2 size={20} color="#091526" />,
    },
  ];

  return (
    <section className="assistant-followup-section" aria-labelledby="followup-heading">
      <div className="content-container">
        <div className="assistant-followup-header">
          <span className="followup-eyebrow">CONVERSATIONAL CLARITY</span>
          <h2 id="followup-heading" className="followup-title">
            Ask Follow-Up Questions.
          </h2>
          <p className="followup-desc">
            Once you receive an initial response, continue the dialogue to unpack subtle nuances, simplify technical phrasing, or plan your next research step.
          </p>
        </div>

        <div className="followup-cards-grid">
          {followUps.map((item, idx) => (
            <div key={idx} className="followup-card">
              <div className="followup-card-top">
                <div className="followup-icon-box">{item.icon}</div>
                <span className="followup-tag">Follow-Up Query</span>
              </div>

              <h3 className="followup-query-text">"{item.q}"</h3>
              <p className="followup-answer-text">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
