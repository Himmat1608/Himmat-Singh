import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { sounds } from '@/utils/sound';

export const RealProofSection: React.FC = () => {
  const verifiedProjects = [
    {
      title: 'ROBIN',
      role: 'AI Virtual Assistant',
      metric: '45ms Router • 180MB RAM',
      href: '#robin-experience',
      tag: 'Flagship System',
    },
    {
      title: 'SGPA & CGPA Calculator',
      role: 'Web Application',
      metric: '<200ms DB Queries • Peer Adopted',
      href: '#projects',
      tag: 'Flask Backend',
    },
    {
      title: 'OrbitDesk',
      role: 'Currently Building',
      metric: 'LangGraph + Local Vector RAG',
      href: '#projects',
      tag: 'In Progress',
    },
  ];

  const technologies = [
    'Python',
    'Flask',
    'Ollama',
    'Google Cloud',
    'OCI',
    'Git',
    'Linux',
  ];

  return (
    <section className="py-[120px] lg:py-[140px] relative z-10 border-t border-white/[0.08] bg-[#0B0B0B]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div className="space-y-2 max-w-[640px]">
            <div className="font-mono font-medium text-[13px] text-[#707070] uppercase tracking-wider">
              VERIFIED SYSTEMS
            </div>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-heading font-semibold tracking-[-0.03em] leading-tight text-[#F3F3F0]">
              Built for Constraints, Backed by Production Code
            </h2>
          </div>
          <div className="font-mono font-medium text-[13px] text-[#707070]">
            Source: <span className="text-[#A1A1A1]">Verified CV Documentation</span>
          </div>
        </div>

        {/* 3 Technical Proof Cards (Editorial, 12px radius, no glowing numbers) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {verifiedProjects.map((p) => (
            <a
              key={p.title}
              href={p.href}
              onClick={() => sounds.playClick()}
              className="p-6 rounded-[12px] bg-[#111111] border border-white/[0.08] hover:border-white/[0.2] transition-colors flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-medium text-[13px] text-[#707070] uppercase">{p.tag}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#707070] group-hover:text-[#F3F3F0] transition-colors" />
                </div>
                <div className="font-heading font-semibold text-[22px] text-[#F3F3F0] group-hover:text-white transition-colors">
                  {p.title}
                </div>
                <div className="text-[15px] font-sans text-[#A1A1A1]">
                  {p.role}
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.06] font-mono font-medium text-[13px] text-[#2ED47A]">
                {p.metric}
              </div>
            </a>
          ))}
        </div>

        {/* Monochrome Technology Line (No Glowing Logos) */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="font-mono font-medium text-[13px] text-[#707070] uppercase">
            Technologies I Build With:
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-6 font-mono font-medium text-[13px] text-[#A1A1A1]">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="hover:text-[#F3F3F0] transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
