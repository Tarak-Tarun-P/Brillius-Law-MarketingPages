import React from 'react';
import { Bookmark, BookOpen, Scale, FileText, ArrowRight, ExternalLink } from 'lucide-react';
import './JournalBookmarks.css';

export const JournalBookmarks: React.FC = () => {
  const bookmarks = [
    {
      category: 'BARE ACT PROVISION',
      title: 'The Indian Contract Act, 1872 // Section 10',
      desc: 'Saved essential requirements for valid contract formation and free consent.',
      icon: <BookOpen size={18} color="#C6A15B" />,
      date: 'Bookmarked Yesterday',
    },
    {
      category: 'MANDATORY STATUTE',
      title: 'The Commercial Courts Act, 2015 // Section 12A',
      desc: 'Pre-institution mediation and settlement procedures required prior to civil suit institution.',
      icon: <FileText size={18} color="#091526" />,
      date: 'Bookmarked 2 days ago',
    },
    {
      category: 'LANDMARK JUDGMENT',
      title: 'Satyabrata Ghose v. Mugneeram Bangur & Co. (1954 SCR 310)',
      desc: 'Authoritative ruling on the doctrine of frustration and impossibility of performance.',
      icon: <Scale size={18} color="#C6A15B" />,
      date: 'Bookmarked 4 days ago',
    },
  ];

  return (
    <section className="journal-bm-section" aria-labelledby="bm-heading">
      <div className="content-container">
        <div className="bm-header">
          <span className="bm-eyebrow">BOOKMARKS</span>
          <h2 id="bm-heading" className="bm-title">
            Save Something You Want to Revisit.
          </h2>
          <p className="bm-desc">
            Bookmark useful Acts, individual provisions, and landmark judgments while reading so you can effortlessly find them again in your Journal.
          </p>
        </div>

        {/* 3-Step Bookmark Flow Banner */}
        <div className="bm-flow-strip">
          <div className="bm-flow-step">
            <span className="flow-num">01</span>
            <span className="flow-text">READ THE STATUTE OR RULING</span>
          </div>
          <ArrowRight size={14} color="#C6A15B" className="flow-arrow" />
          <div className="bm-flow-step">
            <span className="flow-num">02</span>
            <span className="flow-text">TAP THE BOOKMARK ICON</span>
          </div>
          <ArrowRight size={14} color="#C6A15B" className="flow-arrow" />
          <div className="bm-flow-step">
            <span className="flow-num">03</span>
            <span className="flow-text">RETURN LATER IN YOUR JOURNAL</span>
          </div>
        </div>

        {/* Bookmarks Grid */}
        <div className="bm-cards-grid">
          {bookmarks.map((b, idx) => (
            <div key={idx} className="bm-item-card">
              <div className="bm-card-top">
                <div className="bm-icon-box">{b.icon}</div>
                <span className="bm-cat-pill">{b.category}</span>
                <Bookmark size={15} color="#C6A15B" fill="#C6A15B" className="bm-saved-icon" />
              </div>

              <h3 className="bm-card-title">{b.title}</h3>
              <p className="bm-card-desc">{b.desc}</p>

              <div className="bm-card-footer">
                <span className="bm-date-str">{b.date}</span>
                <span className="btn-open-bm">
                  <span>Open</span>
                  <ExternalLink size={11} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
