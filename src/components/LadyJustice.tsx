import React from 'react';
import './LadyJustice.css';

export const LadyJustice: React.FC = () => {
  return (
    <div className="lady-justice-wrapper animate-fade-in">
      <div className="lady-justice-halo" aria-hidden="true" />
      <img
        src="/assets/lady_justice.png"
        alt="Indian Lady Justice representing constitutional justice"
        className="lady-justice-img"
        width="620"
        height="680"
        loading="eager"
      />
    </div>
  );
};
