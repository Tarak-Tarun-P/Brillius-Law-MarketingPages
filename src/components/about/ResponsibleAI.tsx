import React from 'react';
import { Shield, Sparkles, Lock, FileSearch } from 'lucide-react';
import './ResponsibleAI.css';

export const ResponsibleAI: React.FC = () => {
  return (
    <section className="resp-ai-section" aria-labelledby="resp-ai-heading">
      <div className="content-container">
        <div className="resp-ai-card">
          <div className="resp-ai-header">
            <div className="resp-ai-pill">
              <Shield size={14} color="#C6A15B" />
              <span>RESPONSIBLE & SAFE</span>
            </div>
            <h2 id="resp-ai-heading" className="resp-ai-title">
              AI You Can Work With
            </h2>
            <p className="resp-ai-desc">
              In legal work, mistakes and made-up citations are unacceptable. We designed our AI with strict safety checks so you can use it with confidence.
            </p>
          </div>

          <div className="resp-ai-grid">
            <div className="resp-ai-feature">
              <div className="resp-feature-icon">
                <FileSearch size={22} color="#C6A15B" />
              </div>
              <h3 className="resp-feature-title">Reliable Information</h3>
              <p className="resp-feature-text">
                Every summary, answer, and legal insight points directly to the real document, section, or court decision it came from.
              </p>
            </div>

            <div className="resp-ai-feature">
              <div className="resp-feature-icon">
                <Lock size={22} color="#C6A15B" />
              </div>
              <h3 className="resp-feature-title">Your Data Stays Yours</h3>
              <p className="resp-feature-text">
                Your private documents and client details are completely confidential. We never use your data to train public AI models.
              </p>
            </div>

            <div className="resp-ai-feature">
              <div className="resp-feature-icon">
                <Sparkles size={22} color="#C6A15B" />
              </div>
              <h3 className="resp-feature-title">You Stay in Control</h3>
              <p className="resp-feature-text">
                AI helps you draft, search, and review faster, but you always make the final decisions on your work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
