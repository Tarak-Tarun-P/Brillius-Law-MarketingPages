import React from 'react';
import { FileText, HelpCircle, BookOpen, Clock, Tag } from 'lucide-react';
import './JournalPersonalNotes.css';

export const JournalPersonalNotes: React.FC = () => {
  const notes = [
    {
      category: 'RESEARCH QUESTION',
      title: 'Exception 1 Goodwill Proof Requirement',
      body: 'Check whether the purchaser must actively demonstrate continuation of the goodwill business within local limits to enforce the covenant under Section 27.',
      date: 'Added Today at 02:15 PM',
      icon: <HelpCircle size={16} color="#C6A15B" />,
      tag: 'Contract Law',
    },
    {
      category: 'COMPARATIVE RESEARCH',
      title: 'Free Consent vs Vitiating Factors',
      body: 'Cross-reference Section 10 valid consent against Section 14 definitions of coercion (§ 15), undue influence (§ 16), fraud (§ 17), and misrepresentation (§ 18).',
      date: 'Added Yesterday',
      icon: <BookOpen size={16} color="#091526" />,
      tag: 'Statute Study',
    },
    {
      category: 'HEARING REMINDER',
      title: 'Oral Submissions on Frustration',
      body: 'Review Mukherjea J.\'s observations in Satyabrata Ghose (1954) on supervening impossibility prior to conference with senior counsel.',
      date: 'Added 3 days ago',
      icon: <FileText size={16} color="#C6A15B" />,
      tag: 'Court Prep',
    },
  ];

  return (
    <section className="journal-notes-section" aria-labelledby="notes-heading">
      <div className="content-container">
        <div className="notes-header">
          <span className="notes-eyebrow">MY NOTES</span>
          <h2 id="notes-heading" className="notes-title">
            Keep Your Own Notes Close.
          </h2>
          <p className="notes-desc">
            Write down ideas, reminders, comparative observations, and questions you want to remember during client advisory or litigation preparation.
          </p>
        </div>

        <div className="notes-cards-grid">
          {notes.map((n, idx) => (
            <div key={idx} className="personal-note-card">
              <div className="p-note-top">
                <div className="p-note-icon-wrap">{n.icon}</div>
                <span className="p-note-cat">{n.category}</span>
                <span className="p-note-tag-pill">
                  <Tag size={10} />
                  <span>{n.tag}</span>
                </span>
              </div>

              <h3 className="p-note-title">{n.title}</h3>
              <p className="p-note-body">{n.body}</p>

              <div className="p-note-footer">
                <span className="p-note-date"><Clock size={11} /> {n.date}</span>
                <span className="p-note-status">Private Note</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
