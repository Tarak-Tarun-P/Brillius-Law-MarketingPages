import React from 'react';
import { ArrowRight, ArrowDown, Sparkles, User, CheckCircle2 } from 'lucide-react';
import './AIAssistantHero.css';

export const AIAssistantHero: React.FC = () => {
  const scrollToHowItWorks = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('assistant-how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="assistant-hero-section" aria-label="AI Assistant Hero">
      {/* Ambient background glows */}
      <div className="assistant-hero-glow glow-gold" aria-hidden="true" />
      <div className="assistant-hero-glow glow-navy" aria-hidden="true" />

      <div className="content-container">
        <div className="assistant-hero-grid">
          {/* LEFT: Headline & Value Proposition */}
          <div className="assistant-hero-left animate-fade-in-up">
            <div className="assistant-hero-eyebrow-wrapper">
              <span className="assistant-hero-eyebrow">AI ASSISTANT</span>
              <span className="assistant-hero-eyebrow-line" aria-hidden="true" />
            </div>

            <h1 className="assistant-hero-headline">
              Your Assistant for
              <br />
              Legal Work and Learning.
            </h1>

            <p className="assistant-hero-description">
              Ask questions, explore legal issues, understand legal concepts, and get a clearer starting point for your next step.
            </p>

            <div className="assistant-hero-actions">
              <a href="#get-started" className="btn-assistant-primary">
                <span>Try AI Assistant</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href="#assistant-how-it-works" className="btn-assistant-secondary" onClick={scrollToHowItWorks}>
                <span>See How It Works</span>
                <ArrowDown size={15} aria-hidden="true" />
              </a>
            </div>

            {/* Quick trust reassurance */}
            <div className="assistant-trust-pills">
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>For Legal Work & Study</span>
              </span>
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>Understand Legal Concepts</span>
              </span>
              <span className="trust-pill">
                <CheckCircle2 size={13} color="#C6A15B" />
                <span>You Retain Final Judgment</span>
              </span>
            </div>
          </div>

          {/* RIGHT: Realistic Multi-Turn Conversation Product Representation */}
          <div className="assistant-hero-right animate-fade-in">
            <div className="assistant-mockup-window">
              <div className="mockup-window-header">
                <div className="mockup-window-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <span className="mockup-window-title">BrilliusLaw Legal Assistant</span>
                <span className="mockup-window-badge">Active Conversation</span>
              </div>

              <div className="assistant-chat-body">
                {/* 1. Initial User Query */}
                <div className="chat-msg user-msg">
                  <div className="msg-avatar user-avatar">
                    <User size={14} color="#091526" />
                  </div>
                  <div className="msg-bubble user-bubble">
                    <span className="msg-author">Advocate / Researcher</span>
                    <p className="msg-text">
                      "I'm preparing a matter involving a dispute over a property agreement. What areas of law should I look into?"
                    </p>
                  </div>
                </div>

                {/* 2. Initial Assistant Response */}
                <div className="chat-msg bot-msg">
                  <div className="msg-avatar bot-avatar">
                    <Sparkles size={14} color="#C6A15B" />
                  </div>
                  <div className="msg-bubble bot-bubble">
                    <div className="bot-header">
                      <span className="bot-name">Brillius Assistant</span>
                      <span className="bot-tag">Exploratory Starting Points</span>
                    </div>

                    <p className="bot-intro">
                      Based on the situation you've described, you may want to explore these areas and statutory provisions:
                    </p>

                    <ul className="bot-points">
                      <li>
                        <strong>Specific Relief Act, 1963 (§ 10):</strong> Specific performance of contracts.
                      </li>
                      <li>
                        <strong>Transfer of Property Act, 1882 (§ 53A):</strong> Doctrine of part-performance.
                      </li>
                      <li>
                        <strong>Indian Contract Act, 1872 (§ 73):</strong> Compensation for breach of contract.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 3. User Follow-Up Query */}
                <div className="chat-msg user-msg follow-up-msg">
                  <div className="msg-avatar user-avatar">
                    <User size={14} color="#091526" />
                  </div>
                  <div className="msg-bubble user-bubble">
                    <span className="msg-author">Follow-Up Question</span>
                    <p className="msg-text">
                      "Why might the part-performance provision be relevant?"
                    </p>
                  </div>
                </div>

                {/* 4. Assistant Clarification */}
                <div className="chat-msg bot-msg">
                  <div className="msg-avatar bot-avatar">
                    <Sparkles size={14} color="#C6A15B" />
                  </div>
                  <div className="msg-bubble bot-bubble">
                    <p className="bot-clarification">
                      If possession was handed over under the agreement and part consideration was paid, Section 53A can help protect the transferee's possession against unlawful dispossession while you investigate the claim.
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
