import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { LawLibraryVisual } from '../visuals/LawLibraryVisual';
import './sections.css';

export const LawLibrarySection: React.FC = () => {
  return (
    <section id="section-library" className="workflow-section" aria-labelledby="library-heading">
      <div className="content-container">
        {/* Section Main Header */}
        <div className="workflow-section-header">
          <div className="section-eyebrow-pill">LAW LIBRARY</div>
          <h2 id="library-heading" className="workflow-section-title">
            Explore Indian Law More Easily.
          </h2>
          <p className="workflow-section-desc">
            Find Indian laws, sections, and related judgments in one organized place.
          </p>
        </div>

        {/* Feature Showcase Block */}
        <div className="workflow-sub-block layout-text-left">
          <div className="sub-text-col">
            <span className="sub-tag">01 // BARE ACTS & JUDGMENTS</span>
            <h3 className="sub-title">Everything You Need to Explore Indian Law</h3>
            <p className="sub-desc">
              Explore laws section by section, follow important references, and discover related judgments without jumping between different sources.
            </p>
            <ul className="sub-bullets">
              <li>
                <CheckCircle2 size={16} color="#C6A15B" />
                <span><strong>Explore Bare Acts:</strong> Read individual sections, provisions, explanations, and exceptions with ease.</span>
              </li>
              <li>
                <CheckCircle2 size={16} color="#C6A15B" />
                <span><strong>Helpful Footnotes:</strong> Understand statutory references, amendments, and legal nuances at a glance.</span>
              </li>
              <li>
                <CheckCircle2 size={16} color="#C6A15B" />
                <span><strong>Connected Judgments:</strong> Move seamlessly from any Bare Act section to the court decisions that interpret it.</span>
              </li>
              <li>
                <CheckCircle2 size={16} color="#C6A15B" />
                <span><strong>Bookmark for Later:</strong> Save important sections and judgments directly to your personal journal in one click.</span>
              </li>
            </ul>
          </div>
          <div className="sub-visual-col">
            <LawLibraryVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
