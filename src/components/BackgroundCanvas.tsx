import React from 'react';

export const BackgroundCanvas: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 bg-[#0B0B0B] bg-tech-grid opacity-75"
    />
  );
};
