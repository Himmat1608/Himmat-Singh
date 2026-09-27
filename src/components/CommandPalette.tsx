import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Terminal,
  FileText,
  Github,
  Mail,
  Award,
  Zap,
  Volume2,
  VolumeX,
  Code,
  User,
  ArrowRight,
} from 'lucide-react';
import { sounds } from '@/utils/sound';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTerminal: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenTerminal,
}) => {
  const [query, setQuery] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isMuted, setIsMuted] = useState(sounds.getMuted());

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        sounds.playClick();
        if (isOpen) onClose();
        else {
          setQuery('');
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleNavigate = (id: string) => {
    sounds.playClick();
    onClose();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyEmail = () => {
    sounds.playClick();
    navigator.clipboard.writeText('chimmatasingh59@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleToggleSound = () => {
    const muted = sounds.toggleMute();
    setIsMuted(muted);
  };

  const commands = [
    {
      id: 'robin-architecture',
      title: 'ROBIN AI — Architecture & Benchmarks',
      category: 'Flagship System',
      icon: <Zap className="w-4 h-4 text-[#F3F3F0]" />,
      action: () => handleNavigate('robin-experience'),
    },
    {
      id: 'projects',
      title: 'View Projects Showcase',
      category: 'Navigation',
      icon: <Code className="w-4 h-4 text-[#A1A1A1]" />,
      action: () => handleNavigate('projects'),
    },
    {
      id: 'about',
      title: 'About Himmat & Academic Story',
      category: 'Navigation',
      icon: <User className="w-4 h-4 text-[#A1A1A1]" />,
      action: () => handleNavigate('about'),
    },
    {
      id: 'certifications',
      title: 'Verified OCI & GCP Certifications',
      category: 'Navigation',
      icon: <Award className="w-4 h-4 text-[#A1A1A1]" />,
      action: () => handleNavigate('certifications'),
    },
    {
      id: 'github',
      title: 'GitHub Repositories & Telemetry',
      category: 'Navigation',
      icon: <Github className="w-4 h-4 text-[#A1A1A1]" />,
      action: () => handleNavigate('github'),
    },
    {
      id: 'terminal',
      title: 'Launch Interactive CLI Terminal Mode',
      category: 'Interactive',
      icon: <Terminal className="w-4 h-4 text-[#2ED47A]" />,
      action: () => {
        onClose();
        onOpenTerminal();
      },
    },
    {
      id: 'resume',
      title: 'Download Official Resume (PDF)',
      category: 'Document',
      icon: <FileText className="w-4 h-4 text-[#A1A1A1]" />,
      action: () => {
        sounds.playClick();
        window.open('/resume.pdf', '_blank');
      },
    },
    {
      id: 'email',
      title: copiedEmail ? 'Copied to Clipboard!' : 'Copy Email (chimmatasingh59@gmail.com)',
      category: 'Contact',
      icon: <Mail className="w-4 h-4 text-[#2ED47A]" />,
      action: handleCopyEmail,
    },
    {
      id: 'sound',
      title: isMuted ? 'Unmute Sound Effects' : 'Mute Sound Effects',
      category: 'Preferences',
      icon: isMuted ? <VolumeX className="w-4 h-4 text-[#707070]" /> : <Volume2 className="w-4 h-4 text-[#A1A1A1]" />,
      action: handleToggleSound,
    },
  ];

  const filteredCommands = commands.filter(
    (c) =>
      c.title.toLowerCase().includes(query.toLowerCase()) ||
      c.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-start justify-center pt-20 sm:pt-28 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Palette Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -6 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="relative w-full max-w-2xl bg-[#111111] border border-white/[0.12] rounded-[16px] shadow-2xl overflow-hidden"
          >
            {/* Search Input */}
            <div className="flex items-center px-4 py-3.5 border-b border-white/[0.08] bg-[#151515]">
              <Search className="w-4 h-4 text-[#707070] mr-3 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or navigate to a section..."
                className="w-full bg-transparent text-[#F3F3F0] placeholder-[#707070] font-sans text-sm focus:outline-none"
                autoFocus
              />
              <kbd className="hidden sm:inline-flex items-center gap-1 font-mono text-[10px] text-[#707070] bg-[#111111] border border-white/[0.08] px-2 py-0.5 rounded-[4px]">
                ESC
              </kbd>
            </div>

            {/* Command List */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              {filteredCommands.length === 0 ? (
                <div className="py-8 text-center text-xs font-mono text-[#707070]">
                  No matching commands found.
                </div>
              ) : (
                filteredCommands.map((cmd) => (
                  <button
                    key={cmd.id}
                    onClick={cmd.action}
                    onMouseEnter={() => sounds.playHover()}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-[8px] text-left hover:bg-[#151515] transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-[6px] bg-[#151515] border border-white/[0.06] group-hover:border-white/[0.14] transition-colors">
                        {cmd.icon}
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-medium text-[#F3F3F0] font-sans">
                          {cmd.title}
                        </div>
                        <div className="text-[10px] font-mono text-[#707070] uppercase tracking-wider">
                          {cmd.category}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#707070] group-hover:text-[#F3F3F0] opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                  </button>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2.5 border-t border-white/[0.08] bg-[#151515] flex items-center justify-between text-[11px] font-mono text-[#707070]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2ED47A]" />
                <span>Command Palette</span>
              </div>
              <div className="flex items-center gap-3">
                <span>Navigate &uarr;&darr;</span>
                <span>Select &crarr;</span>
                <span>Close ESC</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
