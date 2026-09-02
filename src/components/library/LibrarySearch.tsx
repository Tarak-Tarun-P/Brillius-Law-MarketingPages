import React from 'react';
import { Search, FileText, Scale, BookOpen, ArrowRight } from 'lucide-react';
import './LibrarySearch.css';

export const LibrarySearch: React.FC = () => {
  const searchResults = [
    {
      type: 'PROVISION',
      title: 'Section 10 — What agreements are contracts',
      sub: 'The Indian Contract Act, 1872 • Chapter II (Free Consent & Lawful Consideration)',
      icon: <FileText size={16} color="#C6A15B" />,
    },
    {
      type: 'CONNECTED JUDGMENT',
      title: 'Satyabrata Ghose v. Mugneeram Bangur & Co.',
      sub: '1954 SCR 310 • Supreme Court of India • Doctrine of Frustration under Section 56',
      icon: <Scale size={16} color="#091526" />,
    },
    {
      type: 'BARE ACT',
      title: 'The Indian Contract Act, 1872',
      sub: 'Central Act No. 09 of 1872 • 238 Sections across 11 Chapters',
      icon: <BookOpen size={16} color="#C6A15B" />,
    },
  ];

  return (
    <section className="library-search-section" aria-labelledby="search-heading">
      <div className="content-container">
        <div className="search-header">
          <span className="search-eyebrow">SEARCH</span>
          <h2 id="search-heading" className="search-title">
            Find What You Need Faster.
          </h2>
          <p className="search-desc">
            Search across available Bare Acts, individual sections, keywords, and landmark judicial decisions in one unified search bar.
          </p>
        </div>

        {/* Realistic Search Demonstration Card */}
        <div className="search-demo-box">
          <div className="search-input-wrapper">
            <Search size={18} color="#C6A15B" />
            <span className="search-active-query">Section 10 Indian Contract Act</span>
            <span className="search-count-pill">3 Matching Sources</span>
          </div>

          <div className="search-results-list">
            {searchResults.map((res, idx) => (
              <div key={idx} className="search-result-row">
                <div className="res-icon-wrapper">{res.icon}</div>
                <div className="res-info-col">
                  <span className="res-type-pill">{res.type}</span>
                  <strong className="res-title-text">{res.title}</strong>
                  <p className="res-sub-text">{res.sub}</p>
                </div>
                <div className="res-action-col">
                  <span className="btn-view-res">
                    <span>Open</span>
                    <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
