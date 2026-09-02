import React from 'react';
import { Scale, FileSearch, Briefcase, Sparkles, BookOpen, Cpu } from 'lucide-react';
import { FeatureCard, FeatureCardProps } from './FeatureCard';
import './FeatureSection.css';

export const FeatureSection: React.FC = () => {
  const features: FeatureCardProps[] = [
    {
      id: 1,
      title: 'Legal Research',
      description: 'Access accurate case law, statutes, judgments, and commentary.',
      icon: <Scale size={24} strokeWidth={1.8} />,
    },
    {
      id: 2,
      title: 'Document Intelligence',
      description: 'AI-powered document analysis, summarization, and clause extraction.',
      icon: <FileSearch size={24} strokeWidth={1.8} />,
    },
    {
      id: 3,
      title: 'Case Management',
      description: 'Organize matters, track deadlines, manage tasks, and streamline workflows.',
      icon: <Briefcase size={24} strokeWidth={1.8} />,
    },
    {
      id: 4,
      title: 'AI-Powered Insights',
      description: 'Generate intelligent insights and build stronger legal strategies.',
      icon: <Sparkles size={24} strokeWidth={1.8} />,
    },
    {
      id: 5,
      title: 'Legal Knowledge',
      description: 'Centralized knowledge repository for your firm or organization.',
      icon: <BookOpen size={24} strokeWidth={1.8} />,
    },
    {
      id: 6,
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks and improve productivity across your practice.',
      icon: <Cpu size={24} strokeWidth={1.8} />,
    },
  ];

  return (
    <section id="features" className="feature-section" aria-labelledby="features-heading">
      <div className="content-container">
        {/* Section Header */}
        <div className="feature-header">
          <div className="feature-header-left">
            <span className="feature-eyebrow">POWERFUL. SECURE. INTELLIGENT.</span>
            <h2 id="features-heading" className="feature-heading">
              Everything You Need to Work Smarter in Law
            </h2>
          </div>
          <div className="feature-header-right">
            <p className="feature-subtext">
              Engineered specifically for Indian jurisprudence and enterprise legal teams seeking accuracy, depth, and speed.
            </p>
          </div>
        </div>

        {/* Feature Cards Grid (6 items) */}
        <div className="feature-grid" role="list">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              id={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
