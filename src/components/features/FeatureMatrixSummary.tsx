import React from 'react';
import { Briefcase, FileText, BookOpen, Sparkles, Bookmark, IndianRupee, Check } from 'lucide-react';
import './FeatureMatrixSummary.css';

export const FeatureMatrixSummary: React.FC = () => {
  const matrix = [
    {
      category: 'PRACTICE & CASES',
      icon: <Briefcase size={20} color="#C6A15B" />,
      items: [
        'Client Profiles & Contact Details',
        'Case Lifecycles & Milestones',
        'Court Hearings & Cause Lists',
        'Evidence Vault & Organized Logs',
        'Case-Specific Draft Folders',
      ],
    },
    {
      category: 'DOCUMENTS & DRAFTING',
      icon: <FileText size={20} color="#C6A15B" />,
      items: [
        'Encrypted File Storage & Search',
        'Document Review & Client Approvals',
        'Drafting Lab & Standard Clauses',
        'Side-by-Side Version Comparison',
        'Clean Court Export Formats',
      ],
    },
    {
      category: 'LAW LIBRARY',
      icon: <BookOpen size={20} color="#C6A15B" />,
      items: [
        'Bare Acts with Section Breakdowns',
        'Helpful Explanations & Footnotes',
        'Connected Court Judgments',
        'Direct Section-to-Case Linking',
        'One-Click Save to My Journal',
      ],
    },
    {
      category: 'AI ASSISTANT',
      icon: <Sparkles size={20} color="#C6A15B" />,
      items: [
        'Intelligent Document Analyzer',
        'Plain-Language Legal Answers',
        'Smart Drafting Assistance',
        'Verifiable Case Law Citations',
        '100% Private & Confidential',
      ],
    },
    {
      category: 'MY JOURNAL',
      icon: <Bookmark size={20} color="#C6A15B" />,
      items: [
        'Record Thoughts Instead of Typing',
        'Save Important Legal Observations',
        'Bookmark Acts, Sections & Cases',
        'Organize Notes by Matter & Client',
        'Personal, Encrypted Notebook',
      ],
    },
    {
      category: 'FINANCE & OPS',
      icon: <IndianRupee size={20} color="#C6A15B" />,
      items: [
        'Matter Billing & Time Records',
        'Retainer Tranches & Invoices',
        'eCourts Case Monitoring Sync',
        'Partner, Advocate & Student Roles',
        'Complete Firm Access Oversight',
      ],
    },
  ];

  return (
    <section className="matrix-summary-section" aria-labelledby="matrix-heading">
      <div className="content-container">
        <div className="matrix-header">
          <span className="matrix-eyebrow">COMPLETE CAPABILITY OVERVIEW</span>
          <h2 id="matrix-heading" className="matrix-title">
            One Simple Platform.
            <br />
            Every Tool You Need.
          </h2>
          <p className="matrix-sub">
            Say goodbye to scattered tools and disorganized files. BrilliusLaw keeps your practice, documents, Indian laws, research, notes, and billing connected in one easy workspace.
          </p>
        </div>

        <div className="matrix-grid" role="list">
          {matrix.map((col) => (
            <div key={col.category} className="matrix-card">
              <div className="matrix-card-header">
                <div className="matrix-icon-circle">{col.icon}</div>
                <h3 className="matrix-cat-title">{col.category}</h3>
              </div>

              <ul className="matrix-items-list">
                {col.items.map((item, idx) => (
                  <li key={idx} className="matrix-list-item">
                    <Check size={14} className="matrix-check" color="#C6A15B" />
                    <span>{item}</span>
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
