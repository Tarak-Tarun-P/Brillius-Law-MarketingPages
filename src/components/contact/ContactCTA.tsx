import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import './ContactCTA.css';

export const ContactCTA: React.FC = () => {
  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="contact-cta-section" aria-labelledby="contact-cta-heading">
      <div className="content-container">
        <div className="contact-cta-box">
          {/* Subtle Ambient Halos */}
          <div className="cta-glow cta-glow-gold" aria-hidden="true" />
          <div className="cta-glow cta-glow-blue" aria-hidden="true" />

          <div className="contact-cta-content">
            <div className="contact-cta-badge">
              <Sparkles size={14} color="#C6A15B" />
              <span>COMMITTED TO EXCELLENCE</span>
            </div>

            <h2 id="contact-cta-heading" className="contact-cta-headline">
              Have a Question?
              <br />
              Let's Start There.
            </h2>

            <p className="contact-cta-subtext">
              We're building BrilliusLaw with the people who learn and practice law. Your questions and feedback help us build better.
            </p>

            <div className="contact-cta-actions">
              <a href="#contact-form-section" className="btn-contact-cta-gold" onClick={scrollToForm}>
                <span>Contact Us</span>
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
