import React from 'react';
import { Layers, Sparkles, ShieldCheck } from 'lucide-react';
import './WhatIsBrilliusLaw.css';

export const WhatIsBrilliusLaw: React.FC = () => {
  return (
    <section className="what-is-section" aria-labelledby="what-is-heading">
      <div className="content-container">
        <div className="what-is-card">
          <div className="what-is-header">
            <span className="what-is-eyebrow">WHAT IS BRILLIUSLAW?</span>
            <h2 id="what-is-heading" className="what-is-title">
              A Simpler, Smarter Way to Handle Legal Work
            </h2>
            <p className="what-is-desc">
              BrilliusLaw brings your everyday legal work together—from managing clients and tracking court dates to drafting documents, organizing evidence, and finding answers with AI.
            </p>
          </div>

          <div className="what-is-grid">
            <div className="what-is-feature-card">
              <div className="what-is-icon-box">
                <Layers size={22} color="#091526" />
              </div>
              <h3 className="what-is-feature-title">Everything in One Place</h3>
              <p className="what-is-feature-text">
                Stop switching between scattered apps. Manage clients, court dates, documents, and drafts in one organized workspace.
              </p>
            </div>

            <div className="what-is-feature-card featured-gold">
              <div className="what-is-icon-box gold">
                <Sparkles size={22} color="#C6A15B" />
              </div>
              <h3 className="what-is-feature-title">Smarter Legal Help</h3>
              <p className="what-is-feature-text">
                Quickly review long documents, find key points, and get clear answers backed by real legal sources.
              </p>
            </div>

            <div className="what-is-feature-card">
              <div className="what-is-icon-box">
                <ShieldCheck size={22} color="#091526" />
              </div>
              <h3 className="what-is-feature-title">Built for India</h3>
              <p className="what-is-feature-text">
                Designed specifically for how courts and legal work operate in India, with strict privacy and secure data protection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
