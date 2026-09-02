import React from 'react';
import { PlusCircle, FileText, ArrowRight, PenTool } from 'lucide-react';
import './DraftingCreate.css';

export const DraftingCreate: React.FC = () => {
  return (
    <section className="drafting-create-section" aria-labelledby="create-doc-heading">
      <div className="content-container">
        <div className="create-header">
          <span className="create-eyebrow">CREATE</span>
          <h2 id="create-doc-heading" className="create-title">
            Start a New Document.
          </h2>
          <p className="create-desc">
            Create a fresh document with a single click and start writing in a clean, distraction-free legal workspace.
          </p>
        </div>

        {/* Realistic Create Document Visual Card */}
        <div className="create-doc-card">
          <div className="create-doc-topbar">
            <div className="create-topbar-left">
              <PlusCircle size={16} color="#C6A15B" />
              <strong className="create-topbar-title">New Document Initiation</strong>
            </div>
            <span className="create-topbar-badge">Blank Canvas</span>
          </div>

          <div className="create-form-body">
            <div className="input-group-row">
              <label className="input-field-label">DOCUMENT TITLE</label>
              <div className="mock-input-box">
                <FileText size={16} color="#091526" />
                <span className="mock-input-text">Service Provider &amp; Consultancy Agreement</span>
              </div>
            </div>

            <div className="input-fields-split">
              <div className="input-group-col">
                <label className="input-field-label">DOCUMENT CATEGORY</label>
                <div className="mock-select-box">
                  <span>Commercial Agreements</span>
                </div>
              </div>

              <div className="input-group-col">
                <label className="input-field-label">INITIAL TEMPLATE (OPTIONAL)</label>
                <div className="mock-select-box">
                  <span>Blank Document</span>
                </div>
              </div>
            </div>

            <div className="create-action-row">
              <span className="btn-start-writing-demo">
                <PenTool size={14} />
                <span>Start Writing...</span>
                <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
