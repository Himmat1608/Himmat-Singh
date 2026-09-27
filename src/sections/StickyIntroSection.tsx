import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu, HardDrive, Mic } from 'lucide-react';

export const StickyIntroSection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Opacity transforms for gradual scroll reveal
  const opacity1 = useTransform(scrollYProgress, [0, 0.25], [0.15, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.55], [0.15, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.85], [0.15, 1]);

  const scale1 = useTransform(scrollYProgress, [0, 0.25], [0.95, 1]);
  const scale2 = useTransform(scrollYProgress, [0.25, 0.55], [0.95, 1]);
  const scale3 = useTransform(scrollYProgress, [0.55, 0.85], [0.95, 1]);

  return (
    <section ref={targetRef} className="relative h-[250vh] bg-[#090909] z-10 border-t border-white/5">
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 overflow-hidden">
        <div className="max-w-5xl mx-auto w-full space-y-12 text-center">
          
          {/* Section Indicator */}
          <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>// SYSTEM MANIFESTO &amp; HARDWARE CONSTRAINTS</span>
          </div>

          {/* Gradual Reveal Sentences */}
          <div className="space-y-8">
            
            {/* Sentence 1 */}
            <motion.h2
              style={{ opacity: opacity1, scale: scale1 }}
              className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-[#F5F5F5] leading-tight"
            >
              I don&apos;t build AI demos.
            </motion.h2>

            {/* Sentence 2 */}
            <motion.h2
              style={{ opacity: opacity2, scale: scale2 }}
              className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-emerald-400 leading-tight"
            >
              I build AI systems that work on real hardware.
            </motion.h2>

          </div>

          {/* Reveal Highlights Cards */}
          <motion.div
            style={{ opacity: opacity3, scale: scale3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 max-w-4xl mx-auto font-mono text-xs"
          >
            <div className="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-2 text-left hover:border-emerald-500/40 transition-colors">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="text-xl font-bold text-white font-display">6GB RAM</div>
              <div className="text-[#8A8A8A] font-sans text-xs">
                Optimized execution memory footprint capped at 180MB for zero-lag background operation on standard consumer hardware.
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-2 text-left hover:border-emerald-500/40 transition-colors">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit">
                <HardDrive className="w-5 h-5" />
              </div>
              <div className="text-xl font-bold text-white font-display">Offline AI</div>
              <div className="text-[#8A8A8A] font-sans text-xs">
                Local model inference via Ollama (<code className="text-emerald-400 font-mono">qwen2.5:3b</code>). Zero cloud latency, 0 API bills, and 100% data privacy.
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#111111] border border-white/10 space-y-2 text-left hover:border-emerald-500/40 transition-colors">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit">
                <Mic className="w-5 h-5" />
              </div>
              <div className="text-xl font-bold text-white font-display">Voice Assistant</div>
              <div className="text-[#8A8A8A] font-sans text-xs">
                5-route deterministic intent router executing sub-50ms native Windows system commands, mic filtering, and voice synthesis.
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
