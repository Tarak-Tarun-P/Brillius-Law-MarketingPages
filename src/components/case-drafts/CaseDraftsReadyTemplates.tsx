import React, { useState } from 'react';
import { LayoutTemplate, FileText, CheckCircle2, Scale, Shield, PenLine } from 'lucide-react';
import './CaseDraftsReadyTemplates.css';

interface LegalTemplate {
  id: string;
  name: string;
  category: string;
  cpcRef: string;
  description: string;
  icon: React.ReactNode;
}

export const CaseDraftsReadyTemplates: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('ws');

  const templates: LegalTemplate[] = [
    {
      id: 'ws',
      name: 'Written Statement & Counter-Claim',
      category: 'Commercial & Civil Litigation',
      cpcRef: 'Order VIII Rule 1 CPC',
      description: 'Comprehensive defense draft with preliminary objections, paragraph-wise denials, and counter-claim clauses.',
      icon: <FileText size={18} />,
    },
    {
      id: 'plaint',
      name: 'Commercial Suit Plaint',
      category: 'Civil Pleading',
      cpcRef: 'Order VII Rule 1 CPC',
      description: 'Structured plaint format with statement of facts, cause of action timeline, valuation, and specific prayers.',
      icon: <Scale size={18} />,
    },
    {
      id: 'arb',
      name: 'Section 11 Arbitration Petition',
      category: 'Arbitration & Conciliation',
      cpcRef: 'Section 11(6) Arbitration Act',
      description: 'Petition for appointment of sole arbitrator before High Court incorporating arbitration clause extracts.',
      icon: <PenLine size={18} />,
    },
    {
      id: 'injunction',
      name: 'Interim Injunction Application',
      category: 'Interlocutory Relief',
      cpcRef: 'Order XXXIX Rules 1 & 2 CPC',
      description: 'Application for ad-interim ex-parte injunction establishing prima facie case, balance of convenience, and irreparable injury.',
      icon: <Shield size={18} />,
    },
  ];

  const active = templates.find((t) => t.id === selectedTemplate) || templates[0];

  return (
    <section className="ready-templates-section" aria-labelledby="ready-templates-heading">
      <div className="content-container">
        <div className="ready-templates-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">STANDARDIZED FRAMEWORKS</span>
          </div>
          <h2 id="ready-templates-heading" className="ready-templates-title">
            Start With the Right Structure.
          </h2>
          <p className="ready-templates-desc">
            Choose an available template based on the type of document and your matter, so you can begin with an appropriate structure instead of a blank page.
          </p>
        </div>

        {/* Template Selector Grid */}
        <div className="templates-selector-grid">
          {/* Left: Template Cards List */}
          <div className="templates-cards-list" role="tablist">
            {templates.map((tpl) => (
              <button
                key={tpl.id}
                type="button"
                role="tab"
                aria-selected={selectedTemplate === tpl.id}
                className={`tpl-card-btn ${selectedTemplate === tpl.id ? 'active-tpl' : ''}`}
                onClick={() => setSelectedTemplate(tpl.id)}
              >
                <div className="tpl-icon-box">{tpl.icon}</div>
                <div className="tpl-info-col">
                  <div className="tpl-name-row">
                    <strong className="tpl-name">{tpl.name}</strong>
                    <span className="tpl-cpc-pill">{tpl.cpcRef}</span>
                  </div>
                  <span className="tpl-cat">{tpl.category}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Selected Template Detail Preview */}
          <div className="template-detail-preview animate-fade-in" key={active.id}>
            <div className="preview-topbar">
              <div className="preview-title-group">
                <LayoutTemplate size={16} color="#C6A15B" />
                <strong className="preview-heading">{active.name}</strong>
              </div>
              <span className="preview-cpc-tag">{active.cpcRef}</span>
            </div>

            <div className="preview-body">
              <span className="p-cat-label">CATEGORY: {active.category}</span>
              <p className="p-desc-text">{active.description}</p>

              <div className="included-clauses-box">
                <span className="included-title">STANDARD SECTIONS INCLUDED:</span>
                <div className="clauses-tag-cloud">
                  <span className="clause-chip">Court Heading &amp; Preamble</span>
                  <span className="clause-chip">Preliminary Objections</span>
                  <span className="clause-chip">Limitation &amp; Jurisdiction</span>
                  <span className="clause-chip">Para-wise Reply on Merits</span>
                  <span className="clause-chip">Verification Affidavit</span>
                </div>
              </div>
            </div>

            <div className="preview-footer">
              <CheckCircle2 size={13} color="#C6A15B" />
              <span>Templates provide a legally structured foundation that is ready to be populated with case specifics.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
