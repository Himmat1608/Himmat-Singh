import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, CheckCircle2, Cpu, Server } from 'lucide-react';
import { sounds } from '@/utils/sound';

export interface ArtifactItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  caption: string;
  technicalDecision: string;
  engineeringExplanation?: string;
  architecturalRationale?: string;
  relatedSystem?: string;
  renderPreview: (isExpanded?: boolean) => React.ReactNode;
}

interface ArtifactLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  artifacts: ArtifactItem[];
  currentIndex: number;
  onSelectIndex: (index: number) => void;
}

export const ArtifactLightbox: React.FC<ArtifactLightboxProps> = ({
  isOpen,
  onClose,
  artifacts,
  currentIndex,
  onSelectIndex,
}) => {
  const current = artifacts[currentIndex] || artifacts[0];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        sounds.playClick();
        onSelectIndex((currentIndex + 1) % artifacts.length);
      } else if (e.key === 'ArrowLeft') {
        sounds.playClick();
        onSelectIndex((currentIndex - 1 + artifacts.length) % artifacts.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, artifacts.length, onClose, onSelectIndex]);

  if (!current) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-5 lg:p-8 select-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/92 backdrop-blur-md"
          />

          {/* Full-Screen Engineering Viewer Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="relative w-full max-w-7xl bg-[#111111] border border-white/[0.12] rounded-[24px] shadow-2xl overflow-hidden flex flex-col max-h-[94vh]"
          >
            {/* Top Bar: Progress and System Context */}
            <div className="flex items-center justify-between px-6 py-3.5 border-b border-white/[0.08] bg-[#151515]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-[8px] bg-[#111111] border border-white/[0.08] flex items-center justify-center font-mono text-xs text-[#F3F3F0]">
                  {currentIndex + 1}/{artifacts.length}
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] text-[#707070] uppercase">
                    ENGINEERING SPECIFICATION &bull;
                  </span>
                  <span className="font-mono text-[11px] text-[#2ED47A] font-medium">
                    {current.badge}
                  </span>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-[8px] bg-[#111111] border border-white/[0.08] hover:border-white/[0.2] text-[#A1A1A1] hover:text-[#F3F3F0] flex items-center justify-center transition-colors"
                aria-label="Close Lightbox"
                title="Close (ESC)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Main Split Layout: Left Artifact (65%), Right Documentation (35%) */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 min-h-0 overflow-y-auto lg:overflow-hidden">
              {/* Left Column: Artifact Canvas */}
              <div className="lg:col-span-8 p-4 sm:p-6 bg-[#0B0B0B] border-b lg:border-b-0 lg:border-r border-white/[0.08] flex flex-col justify-center overflow-y-auto">
                <div className="rounded-[14px] overflow-hidden border border-white/[0.08] bg-[#111111] shadow-inner">
                  {current.renderPreview(true)}
                </div>
              </div>

              {/* Right Column: Engineering Documentation Review Panel */}
              <div className="lg:col-span-4 p-6 sm:p-7 bg-[#111111] flex flex-col justify-between overflow-y-auto space-y-6">
                <div className="space-y-6">
                  {/* Title & Category */}
                  <div className="space-y-2 border-b border-white/[0.08] pb-5">
                    <div className="font-mono text-[11px] text-[#707070] uppercase tracking-wider">
                      {current.category}
                    </div>
                    <h2 className="text-xl sm:text-2xl font-heading font-semibold text-[#F3F3F0] leading-snug">
                      {current.title}
                    </h2>
                    <div className="text-xs text-[#2ED47A] font-mono flex items-center gap-1.5 pt-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{current.technicalDecision}</span>
                    </div>
                  </div>

                  {/* Engineering Explanation */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 font-mono text-[11px] text-[#707070] uppercase tracking-wider">
                      <Cpu className="w-3.5 h-3.5 text-[#2ED47A]" />
                      <span>ENGINEERING EXPLANATION</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#A1A1A1] font-sans leading-relaxed">
                      {current.engineeringExplanation || current.caption}
                    </p>
                  </div>

                  {/* Architectural Rationale */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 font-mono text-[11px] text-[#707070] uppercase tracking-wider">
                      <Server className="w-3.5 h-3.5 text-[#2ED47A]" />
                      <span>ARCHITECTURAL RATIONALE</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#A1A1A1] font-sans leading-relaxed">
                      {current.architecturalRationale || current.caption}
                    </p>
                  </div>

                  {/* Related System */}
                  <div className="p-3 rounded-[8px] bg-[#151515] border border-white/[0.06] space-y-1">
                    <div className="font-mono text-[10px] text-[#707070] uppercase">
                      RELATED SYSTEM
                    </div>
                    <div className="font-mono text-xs text-[#F3F3F0]">
                      {current.relatedSystem || 'ROBIN-AI Core Engine'}
                    </div>
                  </div>
                </div>

                {/* Verified Caption Callout */}
                <div className="p-3.5 rounded-[10px] bg-[#151515] border-l-2 border-[#2ED47A] text-xs font-sans text-[#F3F3F0] italic">
                  &ldquo;{current.caption}&rdquo;
                </div>
              </div>
            </div>

            {/* Bottom Bar: Navigation Controls */}
            <div className="px-6 py-3.5 border-t border-white/[0.08] bg-[#151515] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    sounds.playClick();
                    onSelectIndex((currentIndex - 1 + artifacts.length) % artifacts.length);
                  }}
                  className="btn-secondary h-9 px-3 text-xs"
                  aria-label="Previous Artifact"
                >
                  <ChevronLeft className="w-3.5 h-3.5 mr-1" />
                  <span>Previous</span>
                </button>

                <button
                  onClick={() => {
                    sounds.playClick();
                    onSelectIndex((currentIndex + 1) % artifacts.length);
                  }}
                  className="btn-secondary h-9 px-3 text-xs"
                  aria-label="Next Artifact"
                >
                  <span>Next</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>

              <div className="hidden sm:flex items-center gap-3 font-mono text-[11px] text-[#707070]">
                <span>
                  <kbd className="px-1.5 py-0.5 rounded bg-[#111111] border border-white/[0.08] text-[#A1A1A1]">←</kbd>{' '}
                  <kbd className="px-1.5 py-0.5 rounded bg-[#111111] border border-white/[0.08] text-[#A1A1A1]">→</kbd>{' '}
                  to navigate
                </span>
                <span>&bull;</span>
                <span>
                  <kbd className="px-1.5 py-0.5 rounded bg-[#111111] border border-white/[0.08] text-[#A1A1A1]">ESC</kbd>{' '}
                  to close
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
