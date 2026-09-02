import React from 'react';
import { Bold, Italic, Underline, AlignLeft, Type, MoveVertical } from 'lucide-react';
import './DraftingFormatting.css';

export const DraftingFormatting: React.FC = () => {
  const formatControls = [
    {
      name: 'Bold Weight',
      icon: <Bold size={18} color="#C6A15B" />,
      desc: 'Emphasize party names, defined terms, and core contractual obligations.',
      example: 'The Lessee shall pay all utility dues.',
    },
    {
      name: 'Italic Styling',
      icon: <Italic size={18} color="#091526" />,
      desc: 'Format statutory sections, precedent citations, and Latin legal maxims.',
      example: 'Sub-section (2) of Section 138 of the NI Act.',
    },
    {
      name: 'Underline Emphasis',
      icon: <Underline size={18} color="#C6A15B" />,
      desc: 'Draw unmistakable attention to payment deadlines and notice periods.',
      example: 'Within 15 days of receipt of formal notice.',
    },
    {
      name: 'Text Alignment',
      icon: <AlignLeft size={18} color="#091526" />,
      desc: 'Left-align standard clauses, center document headers, or right-align signatures.',
      example: 'IN WITNESS WHEREOF the parties have signed.',
    },
    {
      name: 'Font Size',
      icon: <Type size={18} color="#C6A15B" />,
      desc: 'Set proportional sizing for document titles, clause headings, and body text.',
      example: '14pt Headings • 12pt Standard Body',
    },
    {
      name: 'Line Spacing',
      icon: <MoveVertical size={18} color="#091526" />,
      desc: 'Adjust paragraph leading and spacing to comply with court filing formats.',
      example: '1.5 Line Spacing for Court Petitions',
    },
  ];

  return (
    <section className="drafting-formatting-section" aria-labelledby="formatting-heading">
      <div className="content-container">
        <div className="formatting-header">
          <span className="formatting-eyebrow">FAMILIAR TOOLBAR</span>
          <h2 id="formatting-heading" className="formatting-title">
            Format Your Document the Way You Want.
          </h2>
          <p className="formatting-desc">
            Use standard, familiar document-editing tools to make your agreements clear, professional, and easy to read.
          </p>
        </div>

        <div className="formatting-controls-grid">
          {formatControls.map((tool, idx) => (
            <div key={idx} className="format-tool-card">
              <div className="tool-card-top">
                <div className="tool-icon-box">{tool.icon}</div>
                <strong className="tool-name">{tool.name}</strong>
              </div>
              <p className="tool-desc">{tool.desc}</p>
              <div className="tool-example-box">
                <span className="example-label">PREVIEW</span>
                <span className="example-text">{tool.example}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
