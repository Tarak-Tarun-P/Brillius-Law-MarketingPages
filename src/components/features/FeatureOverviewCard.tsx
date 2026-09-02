import React from 'react';
import { ArrowRight } from 'lucide-react';
import './FeatureOverview.css';

export interface FeatureOverviewCardProps {
  id: string;
  num: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  targetId: string;
}

export const FeatureOverviewCard: React.FC<FeatureOverviewCardProps> = ({
  num,
  title,
  description,
  icon,
  targetId,
}) => {
  return (
    <a href={`#${targetId}`} className="feat-overview-card">
      <div className="feat-card-top-row">
        <div className="feat-icon-box" aria-hidden="true">
          {icon}
        </div>
        <span className="feat-card-num">{num}</span>
      </div>

      <h3 className="feat-card-title">{title}</h3>
      <p className="feat-card-desc">{description}</p>

      <div className="feat-card-action">
        <span className="feat-action-text">Explore Capability</span>
        <ArrowRight size={15} className="feat-action-arrow" aria-hidden="true" />
      </div>
    </a>
  );
};
