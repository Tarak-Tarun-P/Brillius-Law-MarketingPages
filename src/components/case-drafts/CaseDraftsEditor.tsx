import React, { useState } from 'react';
import { Edit3, CheckCircle2, Save, Undo2, Redo2, Bold, Italic, ListOrdered } from 'lucide-react';
import './CaseDraftsEditor.css';

export const CaseDraftsEditor: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'objections' | 'merits' | 'prayer'>('objections');

  return (
    <section className="casedrafts-editor-section" aria-labelledby="editor-heading">
      <div className="content-container">
        <div className="editor-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">LIVE REFINEMENT ENVIRONMENT</span>
          </div>
          <h2 id="editor-heading" className="editor-title">
            Make the Draft Your Own.
          </h2>
          <p className="editor-desc">
            Review the generated draft, make changes, add your own instructions, and refine the document before it is finalized.
          </p>
        </div>

        {/* Realistic Legal Editor Interface */}
        <div className="casedrafts-editor-card">
          {/* Editor Toolbar */}
          <div className="editor-toolbar">
            <div className="toolbar-left-group">
              <span className="editor-doc-title">Written_Statement_Draft_v2.docx</span>
              <div className="toolbar-divider" aria-hidden="true" />
              <button type="button" className="tool-btn" aria-label="Undo"><Undo2 size={13} /></button>
              <button type="button" className="tool-btn" aria-label="Redo"><Redo2 size={13} /></button>
              <div className="toolbar-divider" aria-hidden="true" />
              <button type="button" className="tool-btn" aria-label="Bold"><Bold size={13} /></button>
              <button type="button" className="tool-btn" aria-label="Italic"><Italic size={13} /></button>
              <button type="button" className="tool-btn" aria-label="Numbered List"><ListOrdered size={13} /></button>
            </div>

            <div className="toolbar-right-group">
              <button type="button" className="btn-editor-save">
                <Save size={13} />
                <span>Save Changes</span>
              </button>
            </div>
          </div>

          {/* Editor Clause Navigation Tabs */}
          <div className="editor-clause-tabs" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'objections'}
              className={`clause-tab ${activeTab === 'objections' ? 'active-tab' : ''}`}
              onClick={() => setActiveTab('objections')}
            >
              Preliminary Objections
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'merits'}
              className={`clause-tab ${activeTab === 'merits' ? 'active-tab' : ''}`}
              onClick={() => setActiveTab('merits')}
            >
              Para-wise Reply on Merits
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'prayer'}
              className={`clause-tab ${activeTab === 'prayer' ? 'active-tab' : ''}`}
              onClick={() => setActiveTab('prayer')}
            >
              Specific Prayer &amp; Relief
            </button>
          </div>

          {/* Document Content Workspace */}
          <div className="editor-content-area">
            {activeTab === 'objections' && (
              <div className="clause-edit-block animate-fade-in">
                <strong className="block-clause-title">I. PRELIMINARY OBJECTIONS:</strong>
                <p className="editable-text-para">
                  <span className="para-badge">Para 2</span>
                  “That the suit as framed is wholly barred by the provisions of Section 55 and Section 73 of the Indian Contract Act, 1872. The Plaintiff, having defaulted in its own reciprocal obligations of milestone handover by 15.01.2023, cannot seek specific performance or damages against the Defendant.”
                </p>
                <div className="lawyer-annotation-note">
                  <Edit3 size={12} color="#C6A15B" />
                  <span>Counsel Note: Added reference to notice dated 18.01.2023 as Exhibit D-2.</span>
                </div>
              </div>
            )}

            {activeTab === 'merits' && (
              <div className="clause-edit-block animate-fade-in">
                <strong className="block-clause-title">II. PARA-WISE REPLY ON MERITS:</strong>
                <p className="editable-text-para">
                  <span className="para-badge">Para 5</span>
                  “The contents of Paragraph 5 of the Plaint are specifically denied. It is denied that any sum of ₹1,45,00,000/- is due or payable to the Plaintiff. The invoices relied upon were rejected under written communication dated 02.02.2023 on grounds of defective delivery.”
                </p>
              </div>
            )}

            {activeTab === 'prayer' && (
              <div className="clause-edit-block animate-fade-in">
                <strong className="block-clause-title">III. PRAYER:</strong>
                <p className="editable-text-para">
                  <span className="para-badge">Prayer (a)</span>
                  “In the premises aforesaid, it is most respectfully prayed that this Hon’ble Court may be pleased to dismiss the Commercial Suit No. 482/2023 with exemplary costs under Section 35A CPC.”
                </p>
              </div>
            )}
          </div>

          {/* Editor Footer */}
          <div className="editor-footer">
            <CheckCircle2 size={13} color="#C6A15B" />
            <span>Lawyers retain complete authority over every argument, factual assertion, and statutory citation.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
