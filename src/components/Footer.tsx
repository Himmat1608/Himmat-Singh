import React from 'react';
import { Github, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950/60 py-8 px-4 sm:px-6 font-mono text-xs text-zinc-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Column: Terminal Copyright & Status */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-zinc-400">&gt; status: open to remote internships</span>
          </div>
          <span className="hidden sm:inline text-zinc-700">|</span>
          <span>© {new Date().getFullYear()} Himmat Singh. Kota, Rajasthan.</span>
        </div>

        {/* Right Column: Links & Scroll to top */}
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/Himmat1608"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" />
            <span>github</span>
          </a>
          <a
            href="mailto:chimmatasingh59@gmail.com"
            className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>email</span>
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-1.5 rounded border border-zinc-800 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
