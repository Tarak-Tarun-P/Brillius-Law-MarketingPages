import React, { useState } from 'react';
import { HelpCircle, FileText, Sparkles, CheckCircle2 } from 'lucide-react';
import './ResearchCaseSpecificAI.css';

interface CaseQuestionPreset {
  id: string;
  question: string;
  category: string;
  answerSummary: string;
  sources: { doc: string; page: string }[];
}

export const ResearchCaseSpecificAI: React.FC = () => {
  const [selectedPresetId, setSelectedPresetId] = useState<string>('weak-points');

  const presets: CaseQuestionPreset[] = [
    {
      id: 'weak-points',
      question: "What are the risks or weak points in the plaintiff's claim?",
      category: 'Claim Analysis & Risk Evaluation',
      answerSummary:
        "Based on the available case documents, the plaintiff's claim reveals two primary vulnerabilities: (1) Absence of written milestone acceptance certificates required under Clause 8.2 of the Master Service Agreement prior to invoice generation, and (2) An unresolved 6-month delay notice issued by defendant in November 2022 that was never refuted.",
      sources: [
        { doc: 'Plaint & Accompanying Affidavit', page: 'Page 12' },
        { doc: 'Master Agreement Ex. P-3', page: 'Page 4' },
        { doc: 'Email Correspondence Ex. D-7', page: 'Page 19' },
      ],
    },
    {
      id: 'limitation-laws',
      question: 'Which laws and limitation periods apply to this suit?',
      category: 'Applicable Provisions & Limitation',
      answerSummary:
        'The suit is governed by the Commercial Courts Act, 2015, the Specific Relief Act, 1963, and the Limitation Act, 1963 (Article 54). The cause of action arose on 14th June 2021 when the performance refusal was communicated; the three-year limitation period expired prior to institution, subject to pre-institution mediation tolling.',
      sources: [
        { doc: 'Commercial Plaint (Valuation Section)', page: 'Page 6' },
        { doc: 'Legal Notice Response', page: 'Page 14' },
        { doc: 'DLSA Non-Starter Report', page: 'Page 2' },
      ],
    },
    {
      id: 'next-steps',
      question: 'What should be our next procedural step before the next hearing?',
      category: 'Procedural Next Actions',
      answerSummary:
        'The next hearing is scheduled for Admission & Framing of Issues. Recommended procedural priorities from case records: (1) File Statement of Admission/Denial of Documents in Form 4 within 15 days, (2) Finalize proposed draft issues on limitation and breach, and (3) Complete physical inspection of original documents.',
      sources: [
        { doc: 'Order Sheet dated 12th Jan', page: 'Page 3' },
        { doc: 'Notice of Inspection Ex. D-12', page: 'Page 8' },
      ],
    },
  ];

  const activePreset = presets.find((p) => p.id === selectedPresetId) || presets[0];

  return (
    <section className="case-specific-ai-section" aria-labelledby="case-ai-heading">
      <div className="content-container">
        {/* Section Header */}
        <div className="case-ai-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">RESEARCH YOUR CASE</span>
          </div>
          <h2 id="case-ai-heading" className="case-ai-title">
            Ask Questions About Your Case.
          </h2>
          <p className="case-ai-desc">
            When working on a matter, ask questions using the documents, pleadings, orders, evidence, and other case material connected to that case.
          </p>
        </div>

        {/* Interactive Case Research Visual */}
        <div className="case-ai-workspace-card">
          {/* Active Matter Top Banner */}
          <div className="matter-active-header">
            <div className="matter-meta-group">
              <span className="matter-pill-tag">MATTER FILE</span>
              <strong className="matter-title-text">ABC Technologies vs XYZ Ltd</strong>
              <span className="matter-court-text">Suit No. OS 482/2023 • Commercial Court</span>
            </div>
            <span className="matter-badge-status">14 Case Documents Connected</span>
          </div>

          {/* Preset Question Picker Row */}
          <div className="preset-questions-bar">
            <span className="preset-bar-label">QUESTIONS YOU CAN ASK:</span>
            <div className="preset-chips-list" role="tablist">
              {presets.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  role="tab"
                  aria-selected={selectedPresetId === p.id}
                  className={`preset-chip-btn ${selectedPresetId === p.id ? 'active-preset' : ''}`}
                  onClick={() => setSelectedPresetId(p.id)}
                >
                  <HelpCircle size={13} />
                  <span>{p.question}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Question & Answer Card */}
          <div className="case-qa-container animate-fade-in" key={activePreset.id}>
            {/* User Inquiry Box */}
            <div className="case-inquiry-box">
              <div className="inquiry-header-row">
                <span className="inquiry-label">YOUR QUESTION</span>
                <span className="inquiry-category">{activePreset.category}</span>
              </div>
              <p className="inquiry-text">"{activePreset.question}"</p>
            </div>

            {/* Answer Display */}
            <div className="case-response-box">
              <div className="response-header-row">
                <div className="response-title-group">
                  <Sparkles size={15} color="#C6A15B" />
                  <span className="response-badge-title">Grounded in Case Documents</span>
                </div>
                <span className="response-conf-label">Based on available case record</span>
              </div>

              <p className="response-text-body">{activePreset.answerSummary}</p>

              {/* Source Document References */}
              <div className="response-sources-block">
                <span className="sources-block-heading">SOURCES CITED IN ANSWER:</span>
                <div className="sources-pills-row">
                  {activePreset.sources.map((s, idx) => (
                    <div key={idx} className="source-citation-chip">
                      <FileText size={12} color="#C6A15B" />
                      <span className="source-doc-name">{s.doc}</span>
                      <span className="source-page-tag">{s.page}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Responsible Practice Note */}
          <div className="case-ai-footer-note">
            <CheckCircle2 size={13} color="#C6A15B" />
            <span>
              Case answers are grounded in the specific documents uploaded to the matter. Always verify the source pages and apply your independent professional judgment.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
