import React from 'react';
import { TechOrbit } from '@/components/TechOrbit';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-[120px] lg:py-[160px] relative z-10 border-t border-white/[0.08] bg-[#0B0B0B]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2 mb-6 max-w-[640px]">
          <div className="font-mono font-medium text-[13px] text-[#707070] uppercase tracking-wider">
            TECHNICAL MATRIX
          </div>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-heading font-semibold tracking-[-0.03em] leading-tight text-[#F3F3F0]">
            Interactive Skill Orbit
          </h2>
          <p className="text-[17px] sm:text-[18px] leading-[1.7] font-sans text-[#A1A1A1]">
            A structured visual mapping of core languages, runtimes, and cloud platforms. Select any node to review verified production implementation details.
          </p>
        </div>

        {/* 60% Orbit / 40% Dynamic Detail Panel Container */}
        <div className="p-6 sm:p-8 rounded-[16px] bg-[#111111] border border-white/[0.08]">
          <TechOrbit />
        </div>

      </div>
    </section>
  );
};
