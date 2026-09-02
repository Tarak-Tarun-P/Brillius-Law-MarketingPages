import React from 'react';
import { ShieldCheck, UserCheck, Lock, CheckCircle2 } from 'lucide-react';
import './JournalLimitations.css';

export const JournalLimitations: React.FC = () => {
  return (
    <section className="journal-limitations-section" aria-labelledby="limitations-heading">
      <div className="content-container">
        <div className="journal-limitations-card">
          <div className="limitations-top-row">
            <div className="limitations-badge">
              <ShieldCheck size={16} color="#C6A15B" />
              <span>PRACTICE NOTICE</span>
            </div>
            <span className="limitations-tag">Personal Journal Usage</span>
          </div>

          <h2 id="limitations-heading" className="limitations-title">
            Your Journal, Your Notes.
          </h2>

          <p className="limitations-desc">
            My Journal provides a focused, personal place to save, record, and organize the thoughts and legal references you choose to keep. It is a working aid for your research and drafting, and does not substitute for your own independent legal judgment.
          </p>

          <div className="limitations-points-grid">
            <div className="limitation-point">
              <UserCheck size={18} color="#C6A15B" />
              <div className="point-text">
                <strong className="point-title">Personal Editorial Space</strong>
                <p className="point-desc">All journal notes, spoken observations, and saved points represent your own working analysis.</p>
              </div>
            </div>

            <div className="limitation-point">
              <Lock size={18} color="#C6A15B" />
              <div className="point-text">
                <strong className="point-title">Strictly Private Notes</strong>
                <p className="point-desc">Your journal entries and recorded voice thoughts remain private to your individual user workspace.</p>
              </div>
            </div>

            <div className="limitation-point">
              <CheckCircle2 size={18} color="#C6A15B" />
              <div className="point-text">
                <strong className="point-title">Source Verification</strong>
                <p className="point-desc">Always confirm final statutory text and precedent validity before relying on saved points in court.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
