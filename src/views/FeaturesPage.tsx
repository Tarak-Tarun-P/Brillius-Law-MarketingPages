import React from 'react';
import { FeaturesHero } from '../components/features/FeaturesHero';
import { FeaturesRoadmap } from '../components/features/FeaturesRoadmap';
import { FeatureMatrixSummary } from '../components/features/FeatureMatrixSummary';
import { FinalCTA } from '../components/features/FinalCTA';

export const FeaturesPage: React.FC = () => {
  return (
    <main className="features-page-main">
      {/* 01. Hero with Large Product Ecosystem */}
      <FeaturesHero />

      {/* 02. Legal Workflow Roadmap (Connected Milestones from Client Intake to Firm Operations) */}
      <FeaturesRoadmap />

      {/* 03. Complete Feature Matrix Summary */}
      <FeatureMatrixSummary />

      {/* 04. Final Call to Action */}
      <FinalCTA />
    </main>
  );
};

