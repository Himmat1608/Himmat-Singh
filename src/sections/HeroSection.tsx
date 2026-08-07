import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Github, FileText, Mail, ArrowDown, ShieldCheck, MapPin, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { TerminalTyping } from '@/components/TerminalTyping';

export const HeroSection: React.FC = () => {
  const terminalPhrases = [
    'python3 main.py --role backend-ai',
    'robin --mode offline --latency 45ms',
    'gcp cloud-run deploy --serverless',
    'oci genai --rag-inference',
  ];

  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Subtle Background Grid & Glow Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Core Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col text-left space-y-6"
          >
            
            {/* Animated Terminal Badge */}
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-mono text-emerald-400 backdrop-blur-sm shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <TerminalTyping phrases={terminalPhrases} className="text-xs" />
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-4xl sm:text-6xl font-bold font-mono text-zinc-100 tracking-tight leading-tight">
                Himmat Singh
              </h1>
              <p className="text-lg sm:text-xl font-mono text-emerald-400 mt-2 font-medium">
                B.Tech CS Student • Python, Backend &amp; Cloud Engineer
              </p>
            </div>

            {/* One-Line Identity */}
            <p className="text-base sm:text-lg text-zinc-300 font-sans leading-relaxed max-w-2xl">
              Building production-ready Python tools, local LLM inference engines, and cloud-native architectures. Developer of ROBIN — an offline 45ms-latency local AI assistant optimized for 6GB RAM systems.
            </p>

            {/* Location & Status Bar */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 pt-1">
              <div className="flex items-center gap-1.5 bg-zinc-900/90 border border-zinc-800 px-3 py-1.5 rounded-md">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Kota, Rajasthan (Open to Remote)</span>
              </div>
              <div className="flex items-center gap-1.5 bg-zinc-900/90 border border-zinc-800 px-3 py-1.5 rounded-md">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>OCI &amp; GCP Certifications</span>
              </div>
            </div>

            {/* Call To Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a href="#projects">
                <Button variant="primary" size="lg">
                  <Terminal className="w-4 h-4 mr-2" />
                  View Projects
                </Button>
              </a>

              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button variant="terminal" size="lg">
                  <FileText className="w-4 h-4 mr-2" />
                  Resume (PDF)
                </Button>
              </a>

              <a href="https://github.com/Himmat1608" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <Button variant="secondary" size="lg" className="px-3">
                  <Github className="w-5 h-5 text-zinc-300 hover:text-emerald-400" />
                </Button>
              </a>

              <a href="mailto:chimmatasingh59@gmail.com" aria-label="Send Email">
                <Button variant="secondary" size="lg" className="px-3">
                  <Mail className="w-5 h-5 text-zinc-300 hover:text-emerald-400" />
                </Button>
              </a>
            </div>

          </motion.div>

          {/* Right Column: Hero Profile Image & Interactive Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Decorative Border Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500/30 to-emerald-500/10 blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative rounded-xl border border-zinc-800 bg-zinc-950/90 p-4 shadow-2xl backdrop-blur-md">
                
                {/* Profile Photo Wrapper */}
                <div className="relative aspect-square w-full rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900 group">
                  {/* TODO: HIMMAT_FILL — add photo.jpg to /src/assets instead */}
                  <img
                    src="/src/assets/photo.jpg"
                    alt="Himmat Singh"
                    className="w-full h-full object-cover object-center filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = '/src/assets/photo-placeholder.svg';
                    }}
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-zinc-950/80 backdrop-blur-sm border border-zinc-800 rounded px-2.5 py-1 font-mono text-[10px] text-zinc-400 flex items-center justify-between">
                    <span>himmat_singh.jpg</span>
                    <span className="text-emerald-400">2024-2028</span>
                  </div>
                </div>

                {/* System Specs Snippet */}
                <div className="mt-4 pt-3 border-t border-zinc-800/80 font-mono text-xs text-zinc-400 space-y-1.5">
                  <div className="flex items-center justify-between text-zinc-300">
                    <span className="flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Poornima Univ B.Tech CS</span>
                    </span>
                    <span className="text-emerald-400 font-bold">3rd Year</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-zinc-500">
                    <span>Target Role:</span>
                    <span className="text-zinc-300">Python / Backend / AI Intern</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a href="#about" className="inline-flex items-center gap-2 font-mono text-xs text-zinc-500 hover:text-emerald-400 transition-colors">
            <span>scroll for context</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
