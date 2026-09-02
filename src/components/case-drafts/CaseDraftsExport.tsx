import React from 'react';
import { Download, Copy, FileText, Printer } from 'lucide-react';
import './CaseDraftsExport.css';

export const CaseDraftsExport: React.FC = () => {
  const exportFormats = [
    {
      title: 'Download DOCX',
      sub: 'Standard Microsoft Word file preserving clause headings and paragraph numbering.',
      icon: <FileText size={20} />,
      btnText: 'Export Word (.docx)',
      primary: true,
    },
    {
      title: 'Download PDF',
      sub: 'Clean, print-ready document formatted to court margin requirements.',
      icon: <Download size={20} />,
      btnText: 'Export PDF (.pdf)',
    },
    {
      title: 'Copy Formatted Text',
      sub: 'Instantly copy formatted draft content to clipboard for quick pasting.',
      icon: <Copy size={20} />,
      btnText: 'Copy to Clipboard',
    },
    {
      title: 'Print-Ready Layout',
      sub: 'Generate a clean physical filing layout complete with verification footers.',
      icon: <Printer size={20} />,
      btnText: 'Print Preview',
    },
  ];

  return (
    <section className="casedrafts-export-section" aria-labelledby="export-heading">
      <div className="content-container">
        <div className="export-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">OUTPUT &amp; FINALIZATION</span>
          </div>
          <h2 id="export-heading" className="export-title">
            Take the Final Draft With You.
          </h2>
          <p className="export-desc">
            When your draft is ready, keep a final copy in a format that works for your next step.
          </p>
        </div>

        <div className="export-cards-grid">
          {exportFormats.map((item, idx) => (
            <div key={idx} className={`export-item-card ${item.primary ? 'primary-export-card' : ''}`}>
              <div className="export-icon-box">{item.icon}</div>
              <h3 className="export-card-title">{item.title}</h3>
              <p className="export-card-sub">{item.sub}</p>
              <button type="button" className={`btn-export-action ${item.primary ? 'btn-primary-act' : ''}`}>
                <span>{item.btnText}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
