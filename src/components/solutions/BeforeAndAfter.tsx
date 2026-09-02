import React from 'react';
import { CheckCircle2, FileX, Clock, Search, FolderSync } from 'lucide-react';
import './BeforeAndAfter.css';

export const BeforeAndAfter: React.FC = () => {
  const oldWayPoints = [
    {
      icon: <FileX size={18} className="text-red" />,
      title: 'Files in Different Places',
      text: 'Important case documents and evidence spread across emails, folders, and chat apps.',
    },
    {
      icon: <Clock size={18} className="text-red" />,
      title: 'Notes Scattered Everywhere',
      text: 'Meeting notes and hearing thoughts written on loose paper or scattered note apps.',
    },
    {
      icon: <Search size={18} className="text-red" />,
      title: 'Difficult to Find Old Information',
      text: 'Spending hours searching for previous drafts, section references, or past client files.',
    },
    {
      icon: <FolderSync size={18} className="text-red" />,
      title: 'Switching Between Different Resources',
      text: 'Juggling multiple physical books, web tabs, and tools just to research a single section.',
    },
  ];

  const newWayPoints = [
    {
      icon: <CheckCircle2 size={18} color="#C6A15B" />,
      title: 'Your Work in One Place',
      text: 'Clients, active cases, court dates, and files organized in a single connected workspace.',
    },
    {
      icon: <CheckCircle2 size={18} color="#C6A15B" />,
      title: 'Organized Cases & Documents',
      text: 'Secure document storage with version history, client review approvals, and instant search.',
    },
    {
      icon: <CheckCircle2 size={18} color="#C6A15B" />,
      title: 'Easier Legal Research',
      text: 'Explore Bare Acts, section provisions, and connected court decisions in the Law Library.',
    },
    {
      icon: <CheckCircle2 size={18} color="#C6A15B" />,
      title: 'Personal Notes & Helpful AI',
      text: 'Record thoughts without typing in My Journal and get assistance reviewing long documents.',
    },
  ];

  return (
    <section className="before-after-section" aria-labelledby="before-after-heading">
      <div className="content-container">
        <div className="before-after-header">
          <span className="before-after-eyebrow">A CLEARER PATH FORWARD</span>
          <h2 id="before-after-heading" className="before-after-title">
            Legal Work Doesn't Have to Feel Scattered.
          </h2>
          <p className="before-after-desc">
            See the difference when your practice, documents, research, and personal notes come together in one simple system.
          </p>
        </div>

        <div className="before-after-grid">
          {/* LEFT: The Old Way */}
          <div className="comparison-col old-way-col">
            <div className="comparison-col-header">
              <span className="comparison-tag tag-old">THE OLD WAY</span>
              <h3 className="comparison-heading">Fragmented Tools & Daily Friction</h3>
            </div>

            <ul className="comparison-list">
              {oldWayPoints.map((item, idx) => (
                <li key={idx} className="comparison-item">
                  <div className="comp-icon-box">{item.icon}</div>
                  <div className="comp-text">
                    <strong className="comp-title">{item.title}</strong>
                    <p className="comp-desc">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: With BrilliusLaw */}
          <div className="comparison-col new-way-col">
            <div className="comparison-col-header">
              <span className="comparison-tag tag-new">WITH BRILLIUSLAW</span>
              <h3 className="comparison-heading">Connected, Organized & Calm</h3>
            </div>

            <ul className="comparison-list">
              {newWayPoints.map((item, idx) => (
                <li key={idx} className="comparison-item">
                  <div className="comp-icon-box">{item.icon}</div>
                  <div className="comp-text">
                    <strong className="comp-title text-gold-dark">{item.title}</strong>
                    <p className="comp-desc">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
