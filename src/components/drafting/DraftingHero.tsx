import React from 'react';
import { ArrowRight, ArrowDown, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, Highlighter, Palette, MessageSquare, CheckCircle2 } from 'lucide-react';
import './DraftingHero.css';

export const DraftingHero: React.FC = () => {
  const scrollToHowItWorks = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('drafting-how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="drafting-hero-section" aria-label="Drafting Lab Hero">
      {/* Ambient background glows */}
      <div className="drafting-hero-glow glow-gold" aria-hidden="true" />
      <div className="drafting-hero-glow glow-navy" aria-hidden="true" />

      <div className="content-container">
        <div className="drafting-hero-grid">
          {/* LEFT: Headline & Value Proposition */}
          <div className="drafting-hero-left animate-fade-in-up">
            <div className="drafting-hero-eyebrow-wrapper">
              <span className="drafting-hero-eyebrow">DRAFTING LAB</span>
              <span className="drafting-hero-eyebrow-line" aria-hidden="true" />
            </div>

            <h1 className="drafting-hero-headline">
              Create, Edit &amp;
              <br />
              Refine Your Documents.
            </h1>

            <p className="drafting-hero-description">
              Create documents, make changes, and format your work using familiar editing tools in one focused workspace.
            </p>

            <div className="drafting-hero-actions">
              <a href="#get-started" className="btn-drafting-primary">
                <span>Explore Drafting Lab</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href="#drafting-how-it-works" className="btn-drafting-secondary" onClick={scrollToHowItWorks}>
                <span>See How It Works</span>
                <ArrowDown size={15} aria-hidden="true" />
              </a>
            </div>

            {/* Trust Pills */}
            <div className="drafting-trust-pills">
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Familiar Word Processing</span>
              </span>
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Text Colors &amp; Highlights</span>
              </span>
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Personal Annotations</span>
              </span>
            </div>
          </div>

          {/* RIGHT: Large Realistic Drafting Lab Document Editor Mockup */}
          <div className="drafting-hero-right animate-fade-in">
            <div className="drafting-editor-mockup">
              {/* Window Header */}
              <div className="editor-window-bar">
                <div className="editor-window-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <span className="editor-doc-name">Commercial Lease Agreement.docx</span>
                <span className="editor-status-pill">Saved to Workspace</span>
              </div>

              {/* Realistic Word-Processing Toolbar */}
              <div className="editor-toolbar-row">
                <div className="toolbar-group">
                  <button type="button" className="tool-btn active-tool" title="Bold"><Bold size={14} /></button>
                  <button type="button" className="tool-btn" title="Italic"><Italic size={14} /></button>
                  <button type="button" className="tool-btn active-tool" title="Underline"><Underline size={14} /></button>
                </div>

                <div className="toolbar-divider" />

                <div className="toolbar-group">
                  <button type="button" className="tool-btn" title="Align Left"><AlignLeft size={14} /></button>
                  <button type="button" className="tool-btn" title="Align Center"><AlignCenter size={14} /></button>
                  <button type="button" className="tool-btn" title="Align Right"><AlignRight size={14} /></button>
                </div>

                <div className="toolbar-divider" />

                <div className="toolbar-group">
                  <span className="tool-pill highlight-pill" title="Highlight">
                    <Highlighter size={13} color="#C6A15B" />
                    <span>Highlight</span>
                  </span>
                  <span className="tool-pill color-pill" title="Text Color">
                    <Palette size={13} color="#091526" />
                    <span>Color</span>
                  </span>
                </div>
              </div>

              {/* Document Page Canvas */}
              <div className="editor-page-canvas">
                <h2 className="canvas-doc-title">COMMERCIAL LEASE AGREEMENT</h2>
                <p className="canvas-p lead-p">
                  This Commercial Lease Agreement (the <strong>"Agreement"</strong>) is entered into as of this 1st day of September, 2026, by and between the Lessor and the Lessee.
                </p>

                <div className="canvas-clause-block">
                  <h3 className="clause-subhead">1. DEMISE AND PREMISES</h3>
                  <p className="canvas-p">
                    The Lessor hereby demises and leases unto the Lessee, and the Lessee hereby leases from the Lessor, the commercial office space situated at <strong>Plot No. 42, Cyber City, Gurugram</strong>.
                  </p>
                </div>

                <div className="canvas-clause-block highlighted-clause">
                  <h3 className="clause-subhead">2. RENT &amp; SECURITY DEPOSIT</h3>
                  <p className="canvas-p">
                    The Lessee shall remit a monthly rent of <span className="text-highlighted">₹2,50,000 (Rupees Two Lakh Fifty Thousand)</span> payable in advance on or before the 5th day of each English calendar month. <u>Time is of the essence</u> for all rental remittances.
                  </p>
                  
                  {/* Floating User Annotation Note */}
                  <div className="floating-annotation-card">
                    <div className="annotation-header">
                      <MessageSquare size={12} color="#C6A15B" />
                      <span>Note by Advocate Verma</span>
                    </div>
                    <p className="annotation-text">
                      "Confirm whether GST is inclusive or payable additionally before sending for final execution."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
