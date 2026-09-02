import React from 'react';
import { RefreshCw, CheckCircle2, XCircle } from 'lucide-react';
import './WhatsAppComparison.css';

export const WhatsAppComparison: React.FC = () => {
  return (
    <section className="wa-comp-section" aria-labelledby="wa-comp-heading">
      <div className="content-container">
        <div className="wa-comp-header">
          <div className="eyebrow-chip">
            <span className="eyebrow-text">WORKFLOW COMPARISON</span>
          </div>
          <h2 id="wa-comp-heading" className="wa-comp-title">
            Keep Working. Stay Informed.
          </h2>
          <p className="wa-comp-desc">
            You do not need to constantly open your workspace just to check whether something important has changed. Relevant WhatsApp alerts help bring important updates to your attention.
          </p>
        </div>

        {/* Side-by-Side Comparison */}
        <div className="wa-comp-grid">
          {/* Without Alerts */}
          <div className="comp-card without-card">
            <div className="comp-card-topbar">
              <span className="comp-tag without-tag">WITHOUT ALERTS</span>
              <strong className="comp-heading">Constant Manual Checking</strong>
            </div>

            <div className="comp-steps-flow">
              <div className="c-step-item">
                <span className="c-step-badge">1</span>
                <span className="c-step-txt">Open &amp; check platform repeatedly</span>
              </div>
              <div className="c-step-item">
                <span className="c-step-badge">2</span>
                <span className="c-step-txt">Manually review hearing calendars</span>
              </div>
              <div className="c-step-item">
                <span className="c-step-badge">3</span>
                <span className="c-step-txt">Check pending task deadlines across tabs</span>
              </div>
              <div className="c-step-item">
                <span className="c-step-badge">4</span>
                <span className="c-step-txt">Ask associates if drafts are submitted</span>
              </div>
              <div className="c-step-item repeat-step">
                <RefreshCw size={13} />
                <span className="c-step-txt">Repeat throughout the workday</span>
              </div>
            </div>

            <div className="comp-card-footer without-footer">
              <XCircle size={13} color="#EF4444" />
              <span>Frequent interruptions and risk of missing urgent updates</span>
            </div>
          </div>

          {/* With WhatsApp Alerts */}
          <div className="comp-card with-card">
            <div className="comp-card-topbar with-topbar">
              <span className="comp-tag with-tag">WITH WHATSAPP ALERTS</span>
              <strong className="comp-heading">Targeted Awareness</strong>
            </div>

            <div className="comp-steps-flow">
              <div className="c-step-item with-step">
                <span className="c-step-badge with-badge">1</span>
                <span className="c-step-txt">An important activity happens in the matter</span>
              </div>
              <div className="c-step-item with-step">
                <span className="c-step-badge with-badge">2</span>
                <span className="c-step-txt">Receive a clear WhatsApp alert with matter context</span>
              </div>
              <div className="c-step-item with-step">
                <span className="c-step-badge with-badge">3</span>
                <span className="c-step-txt">Stay focused on client work or court arguments</span>
              </div>
              <div className="c-step-item with-step">
                <span className="c-step-badge with-badge">4</span>
                <span className="c-step-txt">Open BrilliusLaw to review details and take action</span>
              </div>
            </div>

            <div className="comp-card-footer with-footer">
              <CheckCircle2 size={13} color="#C6A15B" />
              <span>Stay informed on what matters while keeping your day uninterrupted</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
