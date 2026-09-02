import React, { useState } from 'react';
import { Mail, MapPin, MessageSquare, ArrowRight, CheckCircle2, Clock, ShieldCheck, Scale, FileText } from 'lucide-react';
import './ContactFormSection.css';

export const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Lawyer / Advocate',
    topic: "I'd like to learn more about BrilliusLaw",
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Clean client-side simulation without inventing backend endpoints
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact-form-section" className="contact-form-section" aria-labelledby="contact-form-heading">
      <div className="content-container">
        <div className="contact-main-grid">
          {/* LEFT: Contact Form Card */}
          <div className="contact-form-card">
            <div className="form-card-header">
              <span className="contact-card-eyebrow">ONLINE INQUIRY</span>
              <h2 id="contact-form-heading" className="form-card-title">
                Let's Connect
              </h2>
              <p className="form-card-subtitle">
                Tell us a little about yourself and how we can help.
              </p>
            </div>

            {submitted ? (
              <div className="form-success-banner animate-fade-in" role="status" aria-live="polite">
                <div className="success-icon-circle">
                  <CheckCircle2 size={32} color="#C6A15B" />
                </div>
                <h3 className="success-title">Thank You for Reaching Out!</h3>
                <p className="success-text">
                  We've received your message and will get back to you shortly at <strong>{formData.email}</strong>.
                </p>
                <button
                  type="button"
                  className="btn-reset-form"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      role: 'Lawyer / Advocate',
                      topic: "I'd like to learn more about BrilliusLaw",
                      message: '',
                    });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-actual-form" onSubmit={handleSubmit}>
                {/* 1. Name Field */}
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    Your Name <span className="required-star">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Adv. Rajesh Sharma"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                {/* 2. Email Address */}
                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Email Address <span className="required-star">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="rajesh.sharma@lawchambers.in"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                {/* 3. Role Selector */}
                <div className="form-group">
                  <label htmlFor="contact-role" className="form-label">
                    I am a...
                  </label>
                  <select
                    id="contact-role"
                    className="form-select"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  >
                    <option value="Law Firm">Law Firm</option>
                    <option value="Lawyer / Advocate">Lawyer / Advocate</option>
                    <option value="Law Student">Law Student</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* 4. Topic Selector */}
                <div className="form-group">
                  <label htmlFor="contact-topic" className="form-label">
                    What can we help you with?
                  </label>
                  <select
                    id="contact-topic"
                    className="form-select"
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  >
                    <option value="I'd like to learn more about BrilliusLaw">
                      I'd like to learn more about BrilliusLaw
                    </option>
                    <option value="I'm interested in using BrilliusLaw for my firm">
                      I'm interested in using BrilliusLaw for my firm
                    </option>
                    <option value="I'm interested as a lawyer">
                      I'm interested as a lawyer
                    </option>
                    <option value="I'm interested as a student">
                      I'm interested as a student
                    </option>
                    <option value="I have a question">
                      I have a question
                    </option>
                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

                {/* 5. Message Field */}
                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    Message <span className="required-star">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Tell us about your practice or what you'd like to explore..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-contact-submit"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
              </form>
            )}
          </div>

          {/* RIGHT: Contact Information & Legal Visual Panel */}
          <div className="contact-info-panel">
            {/* Subtle internal background artwork */}
            <svg
              className="panel-bg-svg"
              viewBox="0 0 500 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <g stroke="#C6A15B" strokeWidth="1" opacity="0.08" fill="none">
                <circle cx="420" cy="180" r="160" />
                <circle cx="420" cy="180" r="240" strokeDasharray="4 6" />
                <path d="M 300 480 Q 400 420 480 480" strokeWidth="1.5" />
                <line x1="390" y1="400" x2="390" y2="560" strokeWidth="1.5" />
              </g>
            </svg>

            <div className="info-panel-content">
              <div className="info-panel-header">
                <span className="contact-card-eyebrow gold-eyebrow">DIRECT CONTACT</span>
                <h2 className="info-panel-title">We're Here to Help.</h2>
                <p className="info-panel-desc">
                  Whether you're exploring BrilliusLaw for your practice, your firm, or your legal studies, reach out and we'll be happy to help.
                </p>
              </div>

              {/* Direct Info Blocks */}
              <div className="info-blocks-list">
                {/* 1. Email */}
                <div className="info-block-item">
                  <div className="info-icon-box">
                    <Mail size={18} color="#C6A15B" />
                  </div>
                  <div className="info-block-text">
                    <span className="info-block-label">EMAIL</span>
                    <a href="mailto:contact@brilliuslaw.com" className="info-block-value link-gold">
                      contact@brilliuslaw.com
                    </a>
                  </div>
                </div>

                {/* 2. Location */}
                <div className="info-block-item">
                  <div className="info-icon-box">
                    <MapPin size={18} color="#C6A15B" />
                  </div>
                  <div className="info-block-text">
                    <span className="info-block-label">LOCATION</span>
                    <span className="info-block-value">India</span>
                  </div>
                </div>

                {/* 3. Support */}
                <div className="info-block-item">
                  <div className="info-icon-box">
                    <MessageSquare size={18} color="#C6A15B" />
                  </div>
                  <div className="info-block-text">
                    <span className="info-block-label">SUPPORT</span>
                    <span className="info-block-value">
                      Have a product or account question? We're happy to help.
                    </span>
                  </div>
                </div>
              </div>

              {/* Supporting Legal Decorative Composition & Privacy Guarantee */}
              <div className="info-legal-card">
                <div className="info-legal-top">
                  <div className="info-legal-badge">
                    <ShieldCheck size={14} color="#C6A15B" />
                    <span>Confidential & Secure</span>
                  </div>
                  <div className="info-legal-time">
                    <Clock size={13} color="#DFBF7E" />
                    <span>Prompt Response</span>
                  </div>
                </div>
                <h4 className="info-legal-title">Your Inquiries Are Safe With Us</h4>
                <p className="info-legal-text">
                  We respect the privacy of legal practitioners and teams. We never share your contact details or inquiries with any third party.
                </p>

                {/* Subtle Legal Visual Highlights */}
                <div className="info-legal-badges-grid">
                  <div className="legal-mini-pill">
                    <Scale size={12} color="#C6A15B" />
                    <span>Built for Indian Law</span>
                  </div>
                  <div className="legal-mini-pill">
                    <FileText size={12} color="#C6A15B" />
                    <span>Strict Privacy</span>
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
