import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, FileText, Github, Terminal as TerminalIcon, CheckCircle2 } from 'lucide-react';
import { sounds } from '@/utils/sound';

export const HeroSection: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    'Python Developer',
    'AI Systems Builder',
    'Backend Engineer',
  ];

  // Rotating roles timer for terminal
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] pt-36 sm:pt-44 pb-28 sm:pb-36 flex items-center justify-center z-10 px-4 sm:px-6 md:px-12 bg-[#0B0B0B]"
    >
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT SIDE: Identity, Supporting Line, Terminal, 8px Buttons (Max Hero Width 760px) */}
          <div className="lg:col-span-7 max-w-[760px]">
            
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#111111] border border-white/[0.08] font-mono font-medium text-[13px] text-[#A1A1A1] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2ED47A]" />
              <span>Himmat Singh</span>
              <span className="text-[#707070]">•</span>
              <span className="text-[#F3F3F0]">Open to Remote Internships</span>
            </div>

            {/* General Sans Hero Name: 600 weight, 72-96px, tracking -0.04em, line-height 0.95, mb-6 */}
            <h1 className="text-[54px] sm:text-[76px] lg:text-[88px] xl:text-[96px] font-heading font-semibold tracking-[-0.04em] text-[#F3F3F0] uppercase leading-[0.95] mb-6">
              HIMMAT SINGH
            </h1>

            {/* General Sans Hero Statement: 500 weight, 48-64px, tracking -0.03em, line-height 1.0, mb-6 */}
            <div className="text-[28px] sm:text-[42px] lg:text-[48px] xl:text-[54px] font-heading font-medium text-[#A1A1A1] tracking-[-0.03em] leading-[1.0] mb-6 max-w-[680px]">
              Building local-first AI systems and backend software for real-world constraints.
            </div>

            {/* Technical Positioning (IBM Plex Mono 13px Weight 500) */}
            <div className="flex flex-wrap items-center gap-2 font-mono font-medium text-[13px] text-[#707070] mb-6">
              <span className="text-[#F3F3F0]">Python</span>
              <span>•</span>
              <span className="text-[#F3F3F0]">AI</span>
              <span>•</span>
              <span className="text-[#F3F3F0]">Backend</span>
              <span>•</span>
              <span className="text-[#F3F3F0]">Cloud</span>
            </div>

            {/* Terminal (Clean, Minimal, Fast, No Green Glow) */}
            <div className="p-3.5 rounded-[8px] bg-[#111111] border border-white/[0.08] font-mono text-[13px] text-[#A1A1A1] space-y-2 max-w-[640px] mb-6">
              <div className="flex items-center gap-1.5 border-b border-white/[0.06] pb-2 text-[11px] text-[#707070]">
                <span className="w-2 h-2 rounded-full bg-white/20" />
                <span className="w-2 h-2 rounded-full bg-white/20" />
                <span className="w-2 h-2 rounded-full bg-white/20" />
                <span className="ml-2 font-mono text-[#707070]">terminal</span>
              </div>

              {/* Command 1: > whoami */}
              <div className="space-y-0.5">
                <div className="text-[#F3F3F0] font-mono text-[13px]">
                  <span>&gt; whoami</span>
                </div>

                <div className="h-5 flex items-center font-mono text-[13px] text-[#2ED47A] pl-3">
                  <span className="text-[#707070] mr-2">$</span>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={roles[roleIndex]}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      {roles[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                  <span className="w-1.5 h-3 bg-[#2ED47A] ml-1 inline-block" />
                </div>
              </div>

              {/* Command 2: > latest_project */}
              <div className="pt-1.5 border-t border-white/[0.04] space-y-0.5">
                <div className="text-[#F3F3F0] font-mono text-[13px]">
                  <span>&gt; latest_project</span>
                </div>
                <div className="text-[#A1A1A1] font-mono text-[13px] pl-3 flex items-center gap-2">
                  <span className="text-[#707070]">$</span>
                  <span className="text-[#F3F3F0]">ROBIN AI Assistant</span>
                  <span className="text-[#707070]">(45ms Router • 180MB RAM)</span>
                </div>
              </div>
            </div>

            {/* Redesigned Button System: 8px Radius, 44-48px Height, Inter 15px Medium */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#robin-experience"
                onClick={() => sounds.playClick()}
                className="btn-primary"
              >
                <TerminalIcon className="w-4 h-4" />
                <span>Explore ROBIN</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.playClick()}
                className="btn-secondary"
              >
                <FileText className="w-4 h-4 text-[#A1A1A1]" />
                <span>Resume PDF</span>
              </a>

              <a
                href="https://github.com/Himmat1608"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.playClick()}
                className="btn-secondary"
              >
                <Github className="w-4 h-4 text-[#A1A1A1]" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* RIGHT SIDE: Engineering Snapshot (24px Radius, Clean Evidence) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="w-full max-w-md rounded-[24px] p-6 sm:p-7 bg-[#111111] border border-white/[0.08] hover:border-white/[0.16] transition-colors space-y-5">
              
              {/* Header */}
              <div className="border-b border-white/[0.08] pb-4 space-y-1">
                <div className="flex items-center justify-between">
                  <h2 className="font-mono font-medium text-[13px] uppercase tracking-wider text-[#A1A1A1]">
                    ENGINEERING SNAPSHOT
                  </h2>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2ED47A]" />
                </div>
                <p className="text-[13px] font-sans text-[#707070]">
                  &quot;What I build, backed by real work.&quot;
                </p>
              </div>

              {/* Currently Focused On */}
              <div className="space-y-1.5">
                <div className="font-mono font-medium text-[13px] text-[#707070] uppercase">
                  Currently focused on
                </div>
                <div className="flex flex-wrap gap-1.5 font-sans text-xs text-[#F3F3F0]">
                  <span className="px-2.5 py-1 rounded-[6px] bg-[#151515] border border-white/[0.06]">AI Systems</span>
                  <span className="px-2.5 py-1 rounded-[6px] bg-[#151515] border border-white/[0.06]">Backend Engineering</span>
                  <span className="px-2.5 py-1 rounded-[6px] bg-[#151515] border border-white/[0.06]">Cloud Infrastructure</span>
                </div>
              </div>

              {/* Compact Evidence Cards */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <div className="p-3 rounded-[8px] bg-[#151515] border border-white/[0.06] space-y-0.5">
                  <div className="font-heading font-semibold text-sm text-[#F3F3F0]">ROBIN</div>
                  <div className="text-[11px] font-sans text-[#A1A1A1]">Local AI Assistant</div>
                </div>

                <div className="p-3 rounded-[8px] bg-[#151515] border border-white/[0.06] space-y-0.5">
                  <div className="font-heading font-semibold text-sm text-[#2ED47A]">45ms</div>
                  <div className="text-[11px] font-sans text-[#A1A1A1]">Command routing</div>
                </div>

                <div className="p-3 rounded-[8px] bg-[#151515] border border-white/[0.06] space-y-0.5">
                  <div className="font-heading font-semibold text-sm text-[#F3F3F0]">180MB</div>
                  <div className="text-[11px] font-sans text-[#A1A1A1]">Memory footprint</div>
                </div>

                <div className="p-3 rounded-[8px] bg-[#151515] border border-white/[0.06] space-y-0.5">
                  <div className="font-heading font-semibold text-sm text-[#F3F3F0]">6GB</div>
                  <div className="text-[11px] font-sans text-[#A1A1A1]">Optimized system target</div>
                </div>
              </div>

              {/* Featured Work Navigation Rows */}
              <div className="pt-2 border-t border-white/[0.08] space-y-2">
                <div className="font-mono font-medium text-[13px] text-[#707070] uppercase">
                  Featured Work
                </div>

                <a
                  href="#robin-experience"
                  onClick={() => sounds.playClick()}
                  className="p-2.5 rounded-[8px] bg-[#151515] border border-white/[0.06] hover:border-white/[0.18] transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2ED47A] shrink-0" />
                    <span className="font-sans font-medium text-xs text-[#F3F3F0]">ROBIN</span>
                    <span className="text-[11px] font-sans text-[#707070]">— Flagship Project</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#707070] group-hover:text-[#F3F3F0] transition-colors" />
                </a>

                <a
                  href="#projects"
                  onClick={() => sounds.playClick()}
                  className="p-2.5 rounded-[8px] bg-[#151515] border border-white/[0.06] hover:border-white/[0.18] transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2ED47A] shrink-0" />
                    <span className="font-sans font-medium text-xs text-[#F3F3F0]">SGPA Calculator</span>
                    <span className="text-[11px] font-sans text-[#707070]">— Flask Web App</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#707070] group-hover:text-[#F3F3F0] transition-colors" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
