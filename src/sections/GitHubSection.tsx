import React from 'react';
import { GitHubShowcase } from '@/components/GitHubShowcase';

export const GitHubSection: React.FC = () => {
  return (
    <section id="github" className="py-[120px] lg:py-[160px] relative z-10 border-t border-white/[0.08] bg-[#0B0B0B]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2 border-b border-white/[0.08] pb-8 mb-6 max-w-[640px]">
          <div className="font-mono font-medium text-[13px] text-[#707070] uppercase tracking-wider">
            OPEN SOURCE &amp; TELEMETRY
          </div>
          <h2 className="text-[32px] sm:text-[38px] lg:text-[42px] font-heading font-semibold tracking-[-0.02em] leading-tight text-[#F3F3F0]">
            GitHub Activity
          </h2>
          <p className="text-[17px] sm:text-[18px] leading-[1.7] font-sans text-[#A1A1A1]">
            Real codebase commits, repositories, and open-source system architectures hosted on GitHub.
          </p>
        </div>

        {/* GitHub Component */}
        <GitHubShowcase />

      </div>
    </section>
  );
};
