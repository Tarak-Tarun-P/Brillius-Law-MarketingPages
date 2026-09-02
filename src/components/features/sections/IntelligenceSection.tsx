import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { DocumentAnalyzerVisual } from '../visuals/DocumentAnalyzerVisual';
import { AIAssistantVisual } from '../visuals/AIAssistantVisual';
import { AIDraftingVisual } from '../visuals/AIDraftingVisual';
import { LegalResearchVisual } from '../visuals/LegalResearchVisual';
import './sections.css';

export const IntelligenceSection: React.FC = () => {
  return (
    <section id="section-intelligence" className="workflow-section" aria-labelledby="intelligence-heading">
      <div className="content-container">
        {/* Section Main Header */}
        <div className="workflow-section-header">
          <div className="section-eyebrow-pill">LEGAL INTELLIGENCE</div>
          <h2 id="intelligence-heading" className="workflow-section-title">
            Work Through Legal Information Faster
          </h2>
          <p className="workflow-section-desc">
            Find information, understand documents, research legal materials, and get intelligent assistance while you work.
          </p>
        </div>

        {/* 1. Intelligent Document Analyzer */}
        <div className="workflow-sub-block layout-text-left">
          <div className="sub-text-col">
            <span className="sub-tag">01 // DOCUMENT UNDERSTANDING</span>
            <h3 className="sub-title">Intelligent Document Analyzer</h3>
            <p className="sub-desc">
              Understand complex legal documents faster. Identify important clauses, obligations, risks, and relevant information without reading everything from scratch.
            </p>
            <ul className="sub-bullets">
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Analyzes lengthy agreements and highlights crucial liabilities and obligations</span></li>
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Every conclusion is grounded with exact paragraph and page citations</span></li>
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Quickly cross-references definitions with schedules and annexures</span></li>
            </ul>
          </div>
          <div className="sub-visual-col">
            <DocumentAnalyzerVisual />
          </div>
        </div>

        <div className="section-divider" aria-hidden="true" />

        {/* 2. AI Assistant */}
        <div className="workflow-sub-block layout-visual-left">
          <div className="sub-text-col">
            <span className="sub-tag">02 // JURISPRUDENCE COMPANION</span>
            <h3 className="sub-title">AI Assistant</h3>
            <p className="sub-desc">
              Get help understanding information, finding relevant details, and working through everyday legal tasks with an intelligent assistant.
            </p>
            <ul className="sub-bullets">
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Ask plain-language questions and receive structured legal overviews</span></li>
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Evaluates statutory limitation periods, procedural thresholds, and grounds</span></li>
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Provides direct citations to relevant landmark Indian Supreme Court judgments</span></li>
            </ul>
          </div>
          <div className="sub-visual-col">
            <AIAssistantVisual />
          </div>
        </div>

        <div className="section-divider" aria-hidden="true" />

        {/* 3. AI Drafting Assistant */}
        <div className="workflow-sub-block layout-text-left">
          <div className="sub-text-col">
            <span className="sub-tag">03 // DRAFTING ACCELERATION</span>
            <h3 className="sub-title">AI Drafting Assistant</h3>
            <p className="sub-desc">
              Get help creating and refining legal documents, from contracts and petitions to briefs and other legal drafts.
            </p>
            <ul className="sub-bullets">
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Draft specialized clauses tailored to your matter instructions and client needs</span></li>
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Checks statutory alignment with Indian contract and procedural laws</span></li>
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Empowers advocates to draft faster while keeping full editorial control</span></li>
            </ul>
          </div>
          <div className="sub-visual-col">
            <AIDraftingVisual />
          </div>
        </div>

        <div className="section-divider" aria-hidden="true" />

        {/* 4. Legal Research & Precedents */}
        <div className="workflow-sub-block layout-visual-left">
          <div className="sub-text-col">
            <span className="sub-tag">04 // CASE LAW & STATUTES</span>
            <h3 className="sub-title">Legal Research & Precedents</h3>
            <p className="sub-desc">
              Find relevant case law, judgments, and legal provisions using natural-language questions and an intuitive research experience.
            </p>
            <ul className="sub-bullets">
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Search Supreme Court, High Courts, and Tribunals using legal questions</span></li>
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Explore organized Bare Acts, statutory sections, and legal provisions</span></li>
              <li><CheckCircle2 size={16} color="#C6A15B" /><span>Pinpoint headnotes, judicial ratios, and citation references in seconds</span></li>
            </ul>
          </div>
          <div className="sub-visual-col">
            <LegalResearchVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
