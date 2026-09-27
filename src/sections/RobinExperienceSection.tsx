import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github } from 'lucide-react';
import { sounds } from '@/utils/sound';
import { RobinArtifactGallery } from '@/components/RobinArtifactGallery';

export const RobinExperienceSection: React.FC = () => {
  const [activeCaseTab, setActiveCaseTab] = useState<'overview' | 'problem' | 'architecture' | 'decisions' | 'results'>('overview');
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(true);

  const techStack = [
    'Python',
    'Ollama',
    'SpeechRecognition',
    'Edge-TTS',
    'CustomTkinter',
    'pywin32',
    'psutil',
    'pycaw',
  ];

  return (
    <section id="robin-experience" className="py-[120px] lg:py-[160px] relative z-10 border-t border-white/[0.08] bg-[#0B0B0B]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12 space-y-14">
        
        {/* Flagship Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8 mb-6">
          <div className="space-y-2 max-w-[760px]">
            <div className="font-mono font-medium text-[13px] text-[#2ED47A] uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2ED47A]" />
              <span>FLAGSHIP PRODUCT CASE STUDY</span>
            </div>
            <h2 className="text-[36px] sm:text-[44px] lg:text-[48px] font-heading font-semibold tracking-[-0.03em] leading-tight text-[#F3F3F0]">
              ROBIN — AI Virtual Assistant
            </h2>
            <p className="text-[17px] sm:text-[18px] leading-[1.7] font-sans text-[#A1A1A1] max-w-[640px]">
              Local-first desktop assistant engineered in Python for real-world constraints. Features an 8-stage hybrid intent pipeline operating strictly offline on 6GB RAM hardware.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="https://github.com/Himmat1608/ROBIN-AI"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sounds.playClick()}
              className="btn-secondary h-11 px-4 text-[15px]"
            >
              <Github className="w-4 h-4 text-[#A1A1A1]" />
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>

        {/* Technical Stack Tags (IBM Plex Mono 13px) */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-[6px] bg-[#151515] border border-white/[0.06] font-mono font-medium text-[13px] text-[#A1A1A1]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* 11. Mandatory Project Evidence System: Rotating Artifact Gallery */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="font-mono font-medium text-[13px] text-[#707070] uppercase tracking-wider">
              VERIFIED ENGINEERING ARTIFACTS
            </div>
            <div className="font-mono text-xs text-[#707070]">
              Press <kbd className="px-1.5 py-0.5 rounded bg-[#151515] border border-white/[0.08] text-[11px] text-[#A1A1A1]">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-[#151515] border border-white/[0.08] text-[11px] text-[#A1A1A1]">→</kbd> to cycle
            </div>
          </div>

          <RobinArtifactGallery />
        </div>

        {/* Evidence-Backed Technical Metric Cards (No Decorative Glowing Boxes) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-6 rounded-[14px] bg-[#111111] border border-white/[0.08] space-y-1">
            <div className="font-heading font-semibold text-3xl sm:text-4xl text-[#2ED47A]">
              45ms
            </div>
            <div className="font-sans font-medium text-[15px] text-[#F3F3F0]">Command Routing</div>
            <div className="text-[13px] font-sans text-[#707070]">Bypasses LLM for native Win32 C-bindings</div>
          </div>

          <div className="p-6 rounded-[14px] bg-[#111111] border border-white/[0.08] space-y-1">
            <div className="font-heading font-semibold text-3xl sm:text-4xl text-[#F3F3F0]">
              180MB
            </div>
            <div className="font-sans font-medium text-[15px] text-[#F3F3F0]">Memory Footprint</div>
            <div className="text-[13px] font-sans text-[#707070]">Quantized local execution cap</div>
          </div>

          <div className="p-6 rounded-[14px] bg-[#111111] border border-white/[0.08] space-y-1">
            <div className="font-heading font-semibold text-3xl sm:text-4xl text-[#F3F3F0]">
              100+
            </div>
            <div className="font-sans font-medium text-[15px] text-[#F3F3F0]">System Automation Tasks</div>
            <div className="text-[13px] font-sans text-[#707070]">Native operating system controls</div>
          </div>

          <div className="p-6 rounded-[14px] bg-[#111111] border border-white/[0.08] space-y-1">
            <div className="font-heading font-semibold text-3xl sm:text-4xl text-[#F3F3F0]">
              6GB RAM
            </div>
            <div className="font-sans font-medium text-[15px] text-[#F3F3F0]">Optimized Hardware Target</div>
            <div className="text-[13px] font-sans text-[#707070]">Zero background thread freezing</div>
          </div>
        </div>

        {/* Section 16: Expandable Technical Case Study Breakdown */}
        <div className="p-6 sm:p-8 rounded-[24px] bg-[#111111] border border-white/[0.08] space-y-6">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
            <div className="space-y-0.5">
              <h3 className="font-heading font-semibold text-xl text-[#F3F3F0]">
                Engineering Case Study Breakdown
              </h3>
              <p className="text-[13px] text-[#707070] font-sans">
                Deep architectural analysis of constraints, trade-offs, and production results.
              </p>
            </div>

            <button
              onClick={() => {
                sounds.playClick();
                setIsCaseStudyOpen(!isCaseStudyOpen);
              }}
              className="btn-secondary h-9 px-3.5 text-xs font-sans"
            >
              <span>{isCaseStudyOpen ? 'Collapse Details' : 'Expand Case Study'}</span>
            </button>
          </div>

          <AnimatePresence>
            {isCaseStudyOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-6 pt-2"
              >
                {/* Case Study Nav Tabs */}
                <div className="flex flex-wrap gap-2 font-mono text-[13px] border-b border-white/[0.06] pb-3">
                  {[
                    { id: 'overview', label: 'Overview' },
                    { id: 'problem', label: 'Problem' },
                    { id: 'architecture', label: 'Architecture' },
                    { id: 'decisions', label: 'Key Decisions' },
                    { id: 'results', label: 'Verified Results' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setActiveCaseTab(t.id as any)}
                      className={`px-3 py-1.5 rounded-[6px] transition-colors ${
                        activeCaseTab === t.id
                          ? 'bg-[#F3F3F0] text-[#0B0B0B] font-medium'
                          : 'bg-[#151515] text-[#A1A1A1] hover:text-[#F3F3F0]'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="p-6 rounded-[14px] bg-[#151515] border border-white/[0.04] text-[15px] font-sans text-[#A1A1A1] leading-relaxed space-y-3">
                  {activeCaseTab === 'overview' && (
                    <>
                      <div className="font-mono font-medium text-[13px] text-[#F3F3F0] uppercase">System Overview</div>
                      <p>
                        ROBIN is an open-source, local-first desktop assistant designed to execute computer controls and queries without calling expensive cloud APIs. By implementing an 8-stage hybrid intent engine in Python, routine system commands are resolved in 45ms using native Win32 C-bindings.
                      </p>
                    </>
                  )}

                  {activeCaseTab === 'problem' && (
                    <>
                      <div className="font-mono font-medium text-[13px] text-[#F3F3F0] uppercase">Problem Statement</div>
                      <p>
                        Most modern AI desktop tools depend on continuous network connectivity, introducing 2.5s+ latency for simple operating system tasks like muting audio or launching apps. The project required running strictly offline on consumer-grade laptops constrained to 6GB RAM without starving other developer tools.
                      </p>
                    </>
                  )}

                  {activeCaseTab === 'architecture' && (
                    <>
                      <div className="font-mono font-medium text-[13px] text-[#F3F3F0] uppercase">Routing Architecture</div>
                      <p>
                        A deterministic semantic router evaluates user input against high-confidence regex patterns before falling back to neural reasoning. System commands bypass the LLM entirely to execute native C-bindings in under 50ms, while complex reasoning queries route to quantized local models (qwen2.5:3b) capped at 180MB RAM.
                      </p>
                    </>
                  )}

                  {activeCaseTab === 'decisions' && (
                    <>
                      <div className="font-mono font-medium text-[13px] text-[#F3F3F0] uppercase">Resolving COM Thread Deadlocks</div>
                      <p>
                        Traditional Python TTS engines (like pyttsx3) lock the Windows COM threading apartment when fired concurrently with asynchronous microphone listener threads. To eliminate deadlocks, the audio output queue was refactored into isolated subprocess streams using Edge-TTS and PowerShell MediaPlayer.
                      </p>
                    </>
                  )}

                  {activeCaseTab === 'results' && (
                    <>
                      <div className="font-mono font-medium text-[13px] text-[#2ED47A] uppercase">Verified Outcomes</div>
                      <p>
                        Achieved 45ms command latency for system actions, capped background memory footprint to 180MB, and verified 100% offline stability on 6GB RAM consumer hardware. All metrics match verified CV performance benchmarks.
                      </p>
                    </>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
