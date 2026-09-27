import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';
import { sounds } from '@/utils/sound';
import { SgpaArtifactViewer, OrbitDeskArtifactViewer } from '@/components/ProjectArtifacts';

export const ProjectsSection: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string | null>(null);

  const projects = [
    {
      id: '01',
      projectId: 'sgpa-calculator',
      title: 'SGPA & CGPA Calculator',
      subtitle: 'Academic grade calculation engine adopted by university peers',
      badge: 'Production Web App',
      description:
        'Engineered a credit-weighted algorithm engine in Flask and SQL for computing semester SGPA and cumulative CGPA. Optimized database schemas with composite indexes (idx_student_sem) ensuring sub-200ms query performance under heavy concurrent student usage during exam result releases.',
      metrics: [
        { label: 'Query Latency', value: '<200ms' },
        { label: 'Uptime', value: '99.9%' },
        { label: 'UI Score', value: '100% Mobile' },
        { label: 'Adoption', value: 'Active Peers' },
      ],
      tags: ['Python', 'Flask', 'SQL', 'Composite Indexing', 'HTML5/CSS3', 'JavaScript'],
      github: 'https://github.com/Himmat1608/SGPA-CGPA-Calculator',
      artifactComponent: <SgpaArtifactViewer />,
      caseStudy: {
        problem: 'Students lacked a fast, reliable portal to compute semester grades across varying credit weighting schemes during result release periods.',
        approach: 'Built a lightweight Flask backend with normalized SQL schemas and composite indexes on course codes to avoid lock contention.',
        results: 'Adopted across Poornima University student groups, achieving sub-200ms average query latency during result drops.',
      },
    },
    {
      id: '02',
      projectId: 'orbitdesk',
      title: 'OrbitDesk — Support Automation',
      subtitle: 'Stateful LangGraph agent & local vector RAG knowledge pipeline',
      badge: 'IN PROGRESS // ACTIVE RESEARCH',
      description:
        'Building a multi-agent customer support automation platform. Utilizes LangGraph to coordinate intent classification, FAISS vector search across local markdown knowledge bases, and automatic ticket generation. Strictly in active development.',
      metrics: [
        { label: 'Agent Engine', value: 'LangGraph' },
        { label: 'Vector Index', value: 'FAISS Local' },
        { label: 'Model Target', value: 'qwen2.5:1.5b' },
        { label: 'Target Latency', value: '<500ms' },
      ],
      tags: ['Python', 'LangGraph', 'FAISS', 'Ollama', 'FastAPI', 'Vector RAG'],
      github: 'https://github.com/Himmat1608',
      artifactComponent: <OrbitDeskArtifactViewer />,
      caseStudy: {
        problem: 'SaaS customer support workflows suffer from repetitive Level-1 ticket queues and slow human resolution times.',
        approach: 'Designed a stateful graph using LangGraph with FAISS vector indices for sub-second context retrieval over local markdown files.',
        results: 'In active engineering phase with target 90% resolution rate for Level-1 support tickets.',
      },
    },
  ];

  return (
    <section id="projects" className="py-[120px] lg:py-[160px] relative z-10 border-t border-white/[0.08] bg-[#0B0B0B]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12 space-y-14">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.08] pb-8 mb-6">
          <div className="space-y-2 max-w-[640px]">
            <div className="font-mono font-medium text-[13px] text-[#707070] uppercase tracking-wider">
              PRODUCTION SYSTEMS &amp; RESEARCH
            </div>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-heading font-semibold tracking-[-0.03em] leading-tight text-[#F3F3F0]">
              Engineered Projects
            </h2>
            <p className="text-[17px] sm:text-[18px] leading-[1.7] font-sans text-[#A1A1A1]">
              Real software systems built for constraints, featuring verified source code, database blueprints, and engineering roadmaps.
            </p>
          </div>
          <div className="font-mono font-medium text-[13px] text-[#707070]">
            Flagship ROBIN AI featured above ↑
          </div>
        </div>

        {/* Editorial Full-Width Project Sections */}
        <div className="space-y-12">
          {projects.map((p) => {
            const isCaseOpen = selectedCaseStudy === p.projectId;
            const isInProgress = p.badge.includes('IN PROGRESS');

            return (
              <div
                key={p.id}
                className="p-6 sm:p-10 rounded-[24px] bg-[#111111] border border-white/[0.08] hover:border-white/[0.16] transition-colors space-y-8"
              >
                {/* Project Header Bar */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-white/[0.06] pb-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono font-medium text-[13px] text-[#707070]">{p.id}</span>
                      <span className="text-[#707070]">•</span>
                      <span className={`font-mono font-medium text-[13px] uppercase tracking-wider px-2 py-0.5 rounded-[4px] border ${
                        isInProgress
                          ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                          : 'bg-[#151515] border-white/[0.08] text-[#2ED47A]'
                      }`}>
                        {p.badge}
                      </span>
                    </div>

                    <h3 className="text-[26px] sm:text-[34px] lg:text-[40px] font-heading font-semibold tracking-[-0.02em] leading-snug text-[#F3F3F0]">
                      {p.title}
                    </h3>
                    <p className="text-[16px] font-sans text-[#A1A1A1]">
                      {p.subtitle}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sounds.playClick()}
                      className="btn-secondary h-10 px-3.5 text-[15px]"
                    >
                      <Github className="w-3.5 h-3.5 text-[#A1A1A1]" />
                      <span>GitHub</span>
                    </a>

                    <button
                      onClick={() => {
                        sounds.playClick();
                        setSelectedCaseStudy(isCaseOpen ? null : p.projectId);
                      }}
                      className="btn-secondary h-10 px-3.5 text-[15px]"
                    >
                      <span>{isCaseOpen ? 'Close Case' : 'Case Study'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#707070]" />
                    </button>
                  </div>
                </div>

                {/* Evidence Artifact Viewer (Mandatory Project Evidence System) */}
                <div className="space-y-2">
                  <div className="font-mono font-medium text-[13px] text-[#707070] uppercase tracking-wider">
                    PROJECT ARTIFACT VIEWER
                  </div>
                  {p.artifactComponent}
                </div>

                {/* Plain Typography Metrics Grid (No Glowing Numbers) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {p.metrics.map((m) => (
                    <div key={m.label} className="p-4 rounded-[10px] bg-[#151515] border border-white/[0.04] space-y-1">
                      <div className="text-[11px] font-mono font-medium text-[#707070] uppercase">{m.label}</div>
                      <div className="font-heading font-semibold text-lg text-[#F3F3F0]">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Narrative Description (Inter 17-18px, Line Height 1.7, max-w-[640px], mb-4) */}
                <p className="text-[17px] sm:text-[18px] leading-[1.7] font-normal font-sans text-[#A1A1A1] max-w-[640px] mb-4">
                  {p.description}
                </p>

                {/* Technology Badges (IBM Plex Mono 13px) */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.04]">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-[4px] bg-[#151515] border border-white/[0.04] font-mono font-medium text-[13px] text-[#A1A1A1]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Expandable Case Study Drawer */}
                <AnimatePresence>
                  {isCaseOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pt-4 border-t border-white/[0.06] space-y-3 font-sans text-xs"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="p-4 rounded-[10px] bg-[#151515] border border-white/[0.04] space-y-1.5">
                          <div className="font-mono font-medium text-[13px] text-[#F3F3F0] uppercase">Problem</div>
                          <p className="text-[14px] text-[#A1A1A1] leading-relaxed">{p.caseStudy.problem}</p>
                        </div>
                        <div className="p-4 rounded-[10px] bg-[#151515] border border-white/[0.04] space-y-1.5">
                          <div className="font-mono font-medium text-[13px] text-[#F3F3F0] uppercase">Approach</div>
                          <p className="text-[14px] text-[#A1A1A1] leading-relaxed">{p.caseStudy.approach}</p>
                        </div>
                        <div className="p-4 rounded-[10px] bg-[#151515] border border-white/[0.04] space-y-1.5">
                          <div className="font-mono font-medium text-[13px] text-[#2ED47A] uppercase">Results</div>
                          <p className="text-[14px] text-[#A1A1A1] leading-relaxed">{p.caseStudy.results}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
