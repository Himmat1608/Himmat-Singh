import React from 'react';
import { sounds } from '@/utils/sound';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/[0.08] bg-[#0B0B0B] relative z-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        
        {/* Left: Identity & Core Domains */}
        <div className="space-y-1">
          <div className="font-heading font-semibold text-[16px] text-[#F3F3F0]">
            Himmat Singh
          </div>
          <div className="font-mono font-medium text-[13px] text-[#707070] flex items-center gap-2">
            <span>Python</span>
            <span>•</span>
            <span>AI</span>
            <span>•</span>
            <span>Backend</span>
            <span>•</span>
            <span>Cloud</span>
          </div>
        </div>

        {/* Right: Direct Navigation Links */}
        <div className="flex items-center gap-6 font-sans font-medium text-[15px] text-[#A1A1A1]">
          <a
            href="https://github.com/Himmat1608"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sounds.playClick()}
            onMouseEnter={() => sounds.playHover()}
            className="hover:text-[#F3F3F0] transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:chimmatasingh59@gmail.com"
            onClick={() => sounds.playClick()}
            onMouseEnter={() => sounds.playHover()}
            className="hover:text-[#F3F3F0] transition-colors"
          >
            Email
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sounds.playClick()}
            onMouseEnter={() => sounds.playHover()}
            className="hover:text-[#F3F3F0] transition-colors"
          >
            Resume
          </a>
          <a
            href="#hero"
            onClick={() => sounds.playClick()}
            onMouseEnter={() => sounds.playHover()}
            className="text-[#707070] hover:text-[#F3F3F0] transition-colors"
          >
            &uarr; Top
          </a>
        </div>

      </div>
    </footer>
  );
};
