import React from 'react';
import { AlertCircle, CheckCircle2, Clock, FileX2 } from 'lucide-react';
import './WhyWeBuilt.css';

export const WhyWeBuilt: React.FC = () => {
  return (
    <section className="why-built-section" aria-labelledby="why-heading">
      <div className="content-container">
        <div className="why-built-header">
          <span className="why-built-eyebrow">WHY WE BUILT BRILLIUSLAW</span>
          <h2 id="why-heading" className="why-built-title">
            Why We Started BrilliusLaw
          </h2>
          <p className="why-built-desc">
            Legal work is important, but lawyers often spend hours searching for files, checking court lists manually, and managing scattered updates across apps.
          </p>
        </div>

        <div className="why-comparison-grid">
          {/* Left: The Problem */}
          <div className="why-col old-way-card">
            <div className="why-col-header">
              <span className="col-status-tag tag-old">HOW WORK GETS SCATTERED</span>
              <h3 className="col-heading">The Problem</h3>
            </div>

            <ul className="why-points-list">
              <li>
                <FileX2 size={18} className="point-icon text-red" />
                <div>
                  <strong>Scattered Files:</strong> Important documents, notes, and evidence spread across WhatsApp chats, emails, and desktop folders.
                </div>
              </li>
              <li>
                <Clock size={18} className="point-icon text-red" />
                <div>
                  <strong>Manual Court Tracking:</strong> Spending hours every morning checking daily court lists to see when cases are called.
                </div>
              </li>
              <li>
                <AlertCircle size={18} className="point-icon text-red" />
                <div>
                  <strong>Version Confusion:</strong> Multiple document copies floating around without knowing which one is final.
                </div>
              </li>
            </ul>
          </div>

          {/* Right: A Simpler Way to Work */}
          <div className="why-col new-way-card">
            <div className="why-col-header">
              <span className="col-status-tag tag-new">THE BRILLIUSLAW WAY</span>
              <h3 className="col-heading">A Simpler Way to Work</h3>
            </div>

            <ul className="why-points-list">
              <li>
                <CheckCircle2 size={18} className="point-icon text-gold" />
                <div>
                  <strong>One Central Hub:</strong> Every client, case, document, and note stored safely in one place.
                </div>
              </li>
              <li>
                <CheckCircle2 size={18} className="point-icon text-gold" />
                <div>
                  <strong>Automatic Court Updates:</strong> Stay on top of your hearing dates and court schedules effortlessly.
                </div>
              </li>
              <li>
                <CheckCircle2 size={18} className="point-icon text-gold" />
                <div>
                  <strong>Helpful AI & Easy Drafting:</strong> Understand documents faster, compare versions side by side, and draft with confidence.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
