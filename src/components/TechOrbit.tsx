import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { sounds } from '@/utils/sound';

export interface SkillDetail {
  id: string;
  name: string;
  category: 'Inner Ring (Core)' | 'Middle Ring (Local AI & Win32)' | 'Outer Ring (Cloud & DevOps)';
  ring: 'inner' | 'middle' | 'outer';
  orbitRadius: number; // in SVG units
  angleDeg: number;
  icon: string;
  oneLiner: string;
  relatedProjects: { name: string; type: string; href: string }[];
  achievements: { metric: string; label: string }[];
  techStack: string[];
  primaryButton: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
}

export const SKILLS_DATA: SkillDetail[] = [
  // --- INNER RING: Core Engine Stack ---
  {
    id: 'python',
    name: 'PYTHON',
    category: 'Inner Ring (Core)',
    ring: 'inner',
    orbitRadius: 105,
    angleDeg: -90, // 12 o'clock
    icon: '🐍',
    oneLiner: 'Primary programming language used across local AI systems and backend architectures.',
    relatedProjects: [
      { name: 'ROBIN', type: 'AI Virtual Assistant', href: '#robin-experience' },
      { name: 'SGPA & CGPA Calculator', type: 'Flask Backend', href: '#projects' },
      { name: 'OrbitDesk', type: 'LangGraph Agent', href: '#projects' },
    ],
    achievements: [
      { metric: '45ms', label: 'Command routing latency bypassing neural inference' },
      { metric: '180MB', label: 'Memory footprint cap on 6GB RAM desktop hardware' },
      { metric: '100+', label: 'System automation tasks via native OS C-bindings' },
    ],
    techStack: ['pywin32', 'Ollama', 'psutil', 'Flask', 'CustomTkinter', 'Edge-TTS'],
    primaryButton: { text: 'View ROBIN', href: '#robin-experience' },
    secondaryButton: { text: 'View SGPA Calculator', href: '#projects' },
  },
  {
    id: 'flask',
    name: 'FLASK',
    category: 'Inner Ring (Core)',
    ring: 'inner',
    orbitRadius: 105,
    angleDeg: 30, // 4 o'clock
    icon: '⚡',
    oneLiner: 'Lightweight backend framework for credit-weighted calculation engines and REST APIs.',
    relatedProjects: [
      { name: 'SGPA & CGPA Calculator', type: 'Web App', href: '#projects' },
    ],
    achievements: [
      { metric: '<200ms', label: 'Database query response time under concurrent student traffic' },
      { metric: '100%', label: 'Mobile responsive calculation tool for university peers' },
    ],
    techStack: ['Python 3', 'SQL', 'B-Tree Indexes', 'REST Endpoints'],
    primaryButton: { text: 'View SGPA Calculator', href: '#projects' },
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'Inner Ring (Core)',
    ring: 'inner',
    orbitRadius: 105,
    angleDeg: 150, // 8 o'clock
    icon: '🗄️',
    oneLiner: 'Relational database schema design with composite indexes preventing lockups.',
    relatedProjects: [
      { name: 'SGPA & CGPA Calculator', type: 'Database Architecture', href: '#projects' },
    ],
    achievements: [
      { metric: '<200ms', label: 'Query latency via composite index optimization' },
      { metric: 'Zero Locks', label: 'Normalized tables preventing concurrent write stalls' },
    ],
    techStack: ['Composite Indexing', 'PostgreSQL', 'SQLite', 'Flask-SQLAlchemy'],
    primaryButton: { text: 'View Database Setup', href: '#projects' },
  },

  // --- MIDDLE RING: Local AI & Win32 Runtime ---
  {
    id: 'ollama',
    name: 'OLLAMA',
    category: 'Middle Ring (Local AI & Win32)',
    ring: 'middle',
    orbitRadius: 185,
    angleDeg: -45, // Top-Right
    icon: '🦙',
    oneLiner: 'Local offline LLM inference runtime operating quantized open-weights models.',
    relatedProjects: [
      { name: 'ROBIN', type: 'Local LLM Reasoning', href: '#robin-experience' },
    ],
    achievements: [
      { metric: '180MB', label: 'Strict RAM allocation ceiling on 6GB RAM hardware' },
      { metric: '100% Offline', label: 'Zero cloud latency, $0 API bill, total data privacy' },
    ],
    techStack: ['qwen2.5:3b', 'qwen2.5:1.5b', 'Subprocess Pipes', 'JSON Buffers'],
    primaryButton: { text: 'View ROBIN', href: '#robin-experience' },
  },
  {
    id: 'speechrecognition',
    name: 'SPEECHRECOGNITION',
    category: 'Middle Ring (Local AI & Win32)',
    ring: 'middle',
    orbitRadius: 185,
    angleDeg: 45, // Bottom-Right
    icon: '🎙️',
    oneLiner: 'Real-time microphone audio processing with dynamic threshold calibration.',
    relatedProjects: [
      { name: 'ROBIN', type: 'Voice Engine', href: '#robin-experience' },
    ],
    achievements: [
      { metric: '80 Units', label: 'Calibrated noise energy threshold filtering background audio' },
      { metric: '0 Deadlocks', label: 'Worker thread decoupled from GUI event loop' },
    ],
    techStack: ['PyAudio', 'Google Speech API', 'Local Whisper Fallback', 'Python Threads'],
    primaryButton: { text: 'View Voice Pipeline', href: '#robin-experience' },
  },
  {
    id: 'edge-tts',
    name: 'EDGE-TTS',
    category: 'Middle Ring (Local AI & Win32)',
    ring: 'middle',
    orbitRadius: 185,
    angleDeg: 135, // Bottom-Left
    icon: '🔊',
    oneLiner: 'Asynchronous voice synthesis engine resolving Windows COM threading deadlocks.',
    relatedProjects: [
      { name: 'ROBIN', type: 'Audio Queue', href: '#robin-experience' },
    ],
    achievements: [
      { metric: 'Non-Blocking', label: 'Replaced pyttsx3 to eliminate Windows COM thread deadlocks' },
      { metric: 'Async Queue', label: 'Streamed audio feedback via PowerShell MediaPlayer' },
    ],
    techStack: ['Edge-TTS', 'asyncio', 'PowerShell MediaPlayer', 'Python'],
    primaryButton: { text: 'View Audio Queue', href: '#robin-experience' },
  },
  {
    id: 'pywin32',
    name: 'PYWIN32',
    category: 'Middle Ring (Local AI & Win32)',
    ring: 'middle',
    orbitRadius: 185,
    angleDeg: -135, // Top-Left
    icon: '🪟',
    oneLiner: 'Native Windows C-bindings for sub-50ms desktop operating system dispatching.',
    relatedProjects: [
      { name: 'ROBIN', type: 'OS Automation', href: '#robin-experience' },
    ],
    achievements: [
      { metric: '45ms', label: 'Command execution bypassing neural inference entirely' },
      { metric: '100+', label: 'Supported native automation tasks (volume, process, terminal)' },
    ],
    techStack: ['Win32 API', 'pycaw', 'psutil', 'ShellExecute', 'COM Dispatch'],
    primaryButton: { text: 'View Win32 Router', href: '#robin-experience' },
  },

  // --- OUTER RING: Cloud & DevOps Infrastructure ---
  {
    id: 'google-cloud',
    name: 'GOOGLE CLOUD',
    category: 'Outer Ring (Cloud & DevOps)',
    ring: 'outer',
    orbitRadius: 265,
    angleDeg: -90, // Top
    icon: '☁️',
    oneLiner: 'Serverless container deployments, data governance, and multimodal prompt design.',
    relatedProjects: [
      { name: 'Cloud Run & Vertex AI', type: 'Skill Badges', href: '#certifications' },
    ],
    achievements: [
      { metric: 'Skill Badges', label: 'Verified Google Cloud Badges in Cloud Run, Dataplex, & Vertex AI' },
      { metric: 'Serverless', label: 'Auto-scaling container microservices deployed on Cloud Run' },
    ],
    techStack: ['Cloud Run', 'Dataplex', 'Vertex AI Studio', 'Cloud IAM', 'Docker'],
    primaryButton: { text: 'Verify Credential', href: '#certifications' },
  },
  {
    id: 'oci',
    name: 'OCI',
    category: 'Outer Ring (Cloud & DevOps)',
    ring: 'outer',
    orbitRadius: 265,
    angleDeg: -18, // Top-Right-Outer
    icon: '🔴',
    oneLiner: 'Oracle Cloud Infrastructure generative AI and high-performance computing clusters.',
    relatedProjects: [
      { name: 'OCI Generative AI', type: 'Professional Cert', href: '#certifications' },
    ],
    achievements: [
      { metric: 'Certified', label: 'Oracle Cloud Infrastructure Generative AI Professional (2025)' },
      { metric: 'Production RAG', label: 'Hands-on validation of vector retrieval & cluster deployments' },
    ],
    techStack: ['OCI GenAI', 'Vector DB', 'RAG Pipelines', 'OCI Compute', 'Oracle IAM'],
    primaryButton: { text: 'Verify Credly Record', href: '#certifications' },
  },
  {
    id: 'git',
    name: 'GIT',
    category: 'Outer Ring (Cloud & DevOps)',
    ring: 'outer',
    orbitRadius: 265,
    angleDeg: 54, // Bottom-Right-Outer
    icon: '🐙',
    oneLiner: 'Distributed version control with atomic commit hygiene and release branch management.',
    relatedProjects: [
      { name: 'ROBIN AI Repo', type: 'Open Source', href: 'https://github.com/Himmat1608/ROBIN-AI' },
      { name: 'SGPA Calculator Repo', type: 'Public', href: 'https://github.com/Himmat1608/SGPA-CGPA-Calculator' },
    ],
    achievements: [
      { metric: 'Verified', label: 'Active public repositories with transparent commit history' },
      { metric: 'Clean Git', label: 'Enforces semantic conventional commits & release tags' },
    ],
    techStack: ['Git CLI', 'GitHub', 'Rebase Workflows', 'Release Tags'],
    primaryButton: { text: 'View GitHub Activity', href: '#github' },
  },
  {
    id: 'linux',
    name: 'LINUX',
    category: 'Outer Ring (Cloud & DevOps)',
    ring: 'outer',
    orbitRadius: 265,
    angleDeg: 126, // Bottom-Left-Outer
    icon: '🐧',
    oneLiner: 'POSIX shell automation scripting, process monitoring, and server diagnostics.',
    relatedProjects: [
      { name: 'Linux Backend', type: 'Core OS', href: '#robin-experience' },
    ],
    achievements: [
      { metric: 'CLI Native', label: 'Automated POSIX shell scripts for process management & logs' },
      { metric: 'psutil', label: 'Memory & CPU daemon inspection in real-time execution' },
    ],
    techStack: ['Bash', 'POSIX Utilities', 'psutil', 'systemd', 'SSH'],
    primaryButton: { text: 'View System Logic', href: '#robin-experience' },
  },
  {
    id: 'github-actions',
    name: 'GITHUB ACTIONS',
    category: 'Outer Ring (Cloud & DevOps)',
    ring: 'outer',
    orbitRadius: 265,
    angleDeg: 198, // Left-Outer
    icon: '⚙️',
    oneLiner: 'Automated CI/CD pipelines for lint testing, TypeScript compilation, and releases.',
    relatedProjects: [
      { name: 'Portfolio CI', type: 'Production CI', href: '#github' },
    ],
    achievements: [
      { metric: '0 Errors', label: 'Strict TypeScript build passes with automated pipeline verification' },
      { metric: 'Automated', label: 'Automated Netlify deploys & test suites' },
    ],
    techStack: ['GitHub Workflows', 'YAML', 'npm scripts', 'TypeScript CLI'],
    primaryButton: { text: 'View GitHub Telemetry', href: '#github' },
  },
];

export const TechOrbit: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('python');

  const selectedSkill = SKILLS_DATA.find((s) => s.id === selectedId) || SKILLS_DATA[0];

  // Polar to Cartesian in SVG coordinate plane [-320, -320, 640, 640]
  const getCoordinates = (radius: number, angleDeg: number) => {
    const angleRad = (angleDeg * Math.PI) / 180;
    return {
      x: radius * Math.cos(angleRad),
      y: radius * Math.sin(angleRad),
    };
  };

  const selectedCoords = getCoordinates(selectedSkill.orbitRadius, selectedSkill.angleDeg);

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      
      {/* DESKTOP LEFT (60%): Technical, Precise Orbit */}
      <div className="lg:col-span-7 flex flex-col items-center justify-center relative select-none">
        
        {/* Caption */}
        <div className="w-full flex items-center justify-between text-[11px] font-mono text-[#707070] mb-2 px-2">
          <span>Click node to inspect verified evidence</span>
          <span className="text-[#A1A1A1]">
            Active: <strong className="text-[#F3F3F0] font-medium">{selectedSkill.name}</strong>
          </span>
        </div>

        <div className="relative w-full max-w-[480px] sm:max-w-[520px] aspect-square flex items-center justify-center">
          
          {/* Subtle 1px Gray Orbit Rings (rgba(255,255,255,0.06), No bright green lines) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="-320 -320 640 640">
            {/* Guide Rings */}
            <circle cx="0" cy="0" r="105" className="stroke-white/[0.06] fill-none" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="0" cy="0" r="185" className="stroke-white/[0.06] fill-none" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="0" cy="0" r="265" className="stroke-white/[0.04] fill-none" strokeWidth="1" strokeDasharray="3 3" />

            {/* Subtle Connection Line to Selected Node */}
            <line
              x1="0"
              y1="0"
              x2={selectedCoords.x}
              y2={selectedCoords.y}
              className="stroke-white/[0.15]"
              strokeWidth="1"
              strokeDasharray="2 2"
            />
          </svg>

          {/* Center Node: HS Himmat Singh */}
          <div className="z-20 w-20 h-20 sm:w-24 sm:h-24 rounded-[12px] bg-[#111111] border border-white/[0.1] flex flex-col items-center justify-center text-center p-2">
            <span className="font-heading font-semibold text-base sm:text-lg text-[#F3F3F0] tracking-wider">HS</span>
            <span className="text-[10px] font-mono text-[#A1A1A1] font-medium">Himmat Singh</span>
          </div>

          {/* Orbit Nodes */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {SKILLS_DATA.map((skill) => {
              const coords = getCoordinates(skill.orbitRadius, skill.angleDeg);
              const isSelected = skill.id === selectedId;

              const leftPercent = ((coords.x + 320) / 640) * 100;
              const topPercent = ((coords.y + 320) / 640) * 100;

              return (
                <div
                  key={skill.id}
                  style={{
                    position: 'absolute',
                    left: `${leftPercent}%`,
                    top: `${topPercent}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  className="pointer-events-auto"
                >
                  <button
                    onClick={() => {
                      sounds.playClick();
                      setSelectedId(skill.id);
                    }}
                    className={`relative rounded-[8px] flex items-center justify-center transition-all duration-150 cursor-pointer ${
                      isSelected
                        ? 'w-12 h-12 sm:w-13 sm:h-13 bg-[#151515] border border-[#2ED47A] z-30 shadow-none'
                        : 'w-10 h-10 sm:w-11 sm:h-11 bg-[#111111] border border-white/[0.08] hover:border-white/[0.2] hover:bg-[#151515] z-10'
                    }`}
                    title={`${skill.name} — Click to inspect`}
                    aria-label={`Select ${skill.name} skill for technical evidence`}
                  >
                    <span className="text-base sm:text-lg">
                      {skill.icon}
                    </span>

                    {/* Minimal active indicator dot */}
                    {isSelected && (
                      <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-[#2ED47A]" />
                    )}
                  </button>

                  {/* Clean Technical Label */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 text-[10px] font-mono whitespace-nowrap px-1 py-0.2 transition-colors ${
                      isSelected
                        ? 'text-[#F3F3F0] font-medium'
                        : 'text-[#707070]'
                    }`}
                  >
                    {skill.name}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* DESKTOP RIGHT (40%): Dynamic Detail Panel */}
      <div className="lg:col-span-5 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedSkill.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="w-full rounded-[16px] p-6 bg-[#111111] border border-white/[0.08] space-y-5"
          >
            {/* Header: Skill Name, Ring Category */}
            <div className="border-b border-white/[0.08] pb-4 space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl">{selectedSkill.icon}</span>
                  <h3 className="font-heading font-semibold text-xl text-[#F3F3F0]">
                    {selectedSkill.name}
                  </h3>
                </div>

                <span className="text-[10px] font-mono text-[#707070] uppercase">
                  {selectedSkill.category}
                </span>
              </div>

              {/* 1. One-line description */}
              <p className="text-xs text-[#A1A1A1] font-sans leading-relaxed pt-1">
                {selectedSkill.oneLiner}
              </p>
            </div>

            {/* 2. Relevant Evidence from CV */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono text-[#707070] uppercase tracking-wider">
                RELEVANT EVIDENCE
              </div>

              <div className="space-y-1.5">
                {selectedSkill.achievements.map((ach) => (
                  <div
                    key={ach.label}
                    className="p-2.5 rounded-[8px] bg-[#151515] border border-white/[0.04] flex items-baseline gap-2.5"
                  >
                    <span className="font-mono text-xs font-semibold text-[#2ED47A] shrink-0">
                      {ach.metric}
                    </span>
                    <span className="text-xs font-sans text-[#A1A1A1] leading-tight">
                      {ach.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Related Projects */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono text-[#707070] uppercase tracking-wider">
                RELATED PROJECTS
              </div>

              <div className="space-y-1.5">
                {selectedSkill.relatedProjects.map((proj) => (
                  <a
                    key={proj.name}
                    href={proj.href}
                    onClick={() => sounds.playClick()}
                    className="p-2.5 rounded-[8px] bg-[#151515] border border-white/[0.04] hover:border-white/[0.18] transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-sans font-medium text-xs text-[#F3F3F0]">
                        {proj.name}
                      </div>
                      <div className="text-[10px] font-mono text-[#707070]">
                        {proj.type}
                      </div>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#707070] group-hover:text-[#F3F3F0] transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* 4. Action Buttons (8px Radius, Rectangular) */}
            <div className="pt-2 border-t border-white/[0.08] flex flex-wrap gap-2">
              <a
                href={selectedSkill.primaryButton.href}
                onClick={() => sounds.playClick()}
                className="btn-primary flex-1 min-w-[140px]"
              >
                <span>{selectedSkill.primaryButton.text}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>

              {selectedSkill.secondaryButton && (
                <a
                  href={selectedSkill.secondaryButton.href}
                  onClick={() => sounds.playClick()}
                  className="btn-secondary flex-1 min-w-[140px]"
                >
                  <span>{selectedSkill.secondaryButton.text}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A1A1A1]" />
                </a>
              )}
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
};
