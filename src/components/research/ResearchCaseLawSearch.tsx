import React, { useState } from 'react';
import {
  Search,
  Users,
  FileCode2,
  Scale,
  BookOpen,
  CheckCircle2,
} from 'lucide-react';
import './ResearchCaseLawSearch.css';

interface SearchMethod {
  id: string;
  name: string;
  category: string;
  description: string;
  queryExample: string;
  icon: React.ReactNode;
  resultPreview: {
    title: string;
    court: string;
    citation: string;
    bench: string;
    holding: string;
  };
}

export const ResearchCaseLawSearch: React.FC = () => {
  const [activeMethodId, setActiveMethodId] = useState<string>('keyword');

  const methods: SearchMethod[] = [
    {
      id: 'keyword',
      name: 'KEYWORD',
      category: 'Legal Issue or Subject',
      description: 'Search by legal issue or terms that describe your question.',
      queryExample: 'anticipatory bail in PMLA matters',
      icon: <Search size={18} />,
      resultPreview: {
        title: 'Vijay Madanlal Choudhary & Ors. v. Union of India',
        court: 'Supreme Court of India',
        citation: '(2023) 5 SCC 123',
        bench: 'A.M. Khanwilkar, Dinesh Maheshwari, C.T. Ravikumar, JJ.',
        holding: 'Elucidates constitutional safeguards and threshold standards governing anticipatory bail applications in proceedings under the PMLA.',
      },
    },
    {
      id: 'party',
      name: 'PARTY NAME',
      category: 'Petitioner / Respondent',
      description: 'Find judgments involving a petitioner or respondent entity or individual.',
      queryExample: 'Union of India',
      icon: <Users size={18} />,
      resultPreview: {
        title: 'K.S. Puttaswamy v. Union of India',
        court: 'Supreme Court of India',
        citation: '(2017) 10 SCC 1',
        bench: '9-Judge Constitution Bench',
        holding: 'Landmark decision affirming the fundamental right to privacy under Article 21 of the Constitution of India.',
      },
    },
    {
      id: 'citation',
      name: 'CITATION',
      category: 'Law Reporter Lookup',
      description: 'Look up a judgment directly using its standard legal citation.',
      queryExample: '(2023) 5 SCC 123',
      icon: <FileCode2 size={18} />,
      resultPreview: {
        title: 'Maneka Gandhi v. Union of India',
        court: 'Supreme Court of India',
        citation: '(1978) 1 SCC 248',
        bench: '7-Judge Constitution Bench',
        holding: 'Direct hit citation resolving to procedural fairness, natural justice, and substantive due process requirements.',
      },
    },
    {
      id: 'judge',
      name: 'JUDGE',
      category: 'Judicial Authorship',
      description: 'Find judgments authored by or associated with a particular judge.',
      queryExample: 'Hon’ble Mr. Justice D.Y. Chandrachud',
      icon: <Scale size={18} />,
      resultPreview: {
        title: 'Navtej Singh Johar & Ors. v. Union of India',
        court: 'Supreme Court of India',
        citation: '(2018) 10 SCC 1',
        bench: '5-Judge Constitution Bench',
        holding: 'Concurring opinion establishing transformative constitutionalism and individual dignity principles.',
      },
    },
    {
      id: 'section',
      name: 'STATUTORY SECTION',
      category: 'Act & Section Index',
      description: 'Find cases discussing and applying a particular Act or statutory section.',
      queryExample: 'Section 138 Negotiable Instruments Act',
      icon: <BookOpen size={18} />,
      resultPreview: {
        title: 'Kishan Rao v. Shankargouda',
        court: 'Supreme Court of India',
        citation: '(2018) 8 SCC 165',
        bench: 'R.K. Agrawal, Mohan M. Shantanagoudar, JJ.',
        holding: 'Presumption under Section 139 of the Negotiable Instruments Act and standards required for rebuttal by the accused.',
      },
    },
  ];

  const activeMethod = methods.find((m) => m.id === activeMethodId) || methods[0];

  return (
    <section className="case-law-search-section" aria-labelledby="case-law-search-title">
      <div className="content-container">
        {/* Section Header */}
        <div className="case-law-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">CASE LAW &amp; PRECEDENTS</span>
          </div>
          <h2 id="case-law-search-title" className="case-law-title">
            Search the Cases That Matter.
          </h2>
          <p className="case-law-desc">
            Search available court judgments and precedents using the way you already know the case or issue.
          </p>
        </div>

        {/* 5 Search Methods Grid / Tabs */}
        <div className="search-methods-wrapper">
          <div className="search-methods-nav" role="tablist" aria-label="Search Methods">
            {methods.map((method) => (
              <button
                key={method.id}
                type="button"
                role="tab"
                aria-selected={activeMethodId === method.id}
                className={`search-method-tab ${activeMethodId === method.id ? 'active-tab' : ''}`}
                onClick={() => setActiveMethodId(method.id)}
              >
                <div className="tab-icon-box">{method.icon}</div>
                <div className="tab-text-box">
                  <span className="tab-method-name">{method.name}</span>
                  <span className="tab-method-cat">{method.category}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Interactive Method Preview Display */}
          <div className="search-method-preview-panel animate-fade-in" key={activeMethod.id}>
            <div className="method-preview-top">
              <div className="method-badge-group">
                <span className="method-type-pill">{activeMethod.name} SEARCH</span>
                <span className="method-desc-str">{activeMethod.description}</span>
              </div>
            </div>

            {/* Input Bar Simulation */}
            <div className="method-search-bar-sim">
              <div className="sim-search-left">
                <Search size={16} color="#C6A15B" />
                <span className="sim-query-text">"{activeMethod.queryExample}"</span>
              </div>
              <span className="sim-badge">Supported Search Mode</span>
            </div>

            {/* Result Preview Box */}
            <div className="method-result-card">
              <div className="res-card-header">
                <div className="res-court-pill">{activeMethod.resultPreview.court}</div>
                <span className="res-citation-text">{activeMethod.resultPreview.citation}</span>
              </div>
              <h3 className="res-case-headline">{activeMethod.resultPreview.title}</h3>
              <span className="res-bench-caption">Bench: {activeMethod.resultPreview.bench}</span>
              <p className="res-holding-summary">{activeMethod.resultPreview.holding}</p>
              
              <div className="res-footer-note">
                <CheckCircle2 size={13} color="#059669" />
                <span>Available with full text, ratio decidendi, and precedent treatment.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
