import React from 'react';
import './FeatureCard.css';

export interface FeatureCardProps {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <article className="feature-card">
      <div className="feature-icon-wrapper" aria-hidden="true">
        {icon}
      </div>
      <h3 className="feature-card-title">{title}</h3>
      <p className="feature-card-description">{description}</p>
    </article>
  );
};
