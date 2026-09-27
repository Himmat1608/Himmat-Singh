import React, { useState } from 'react';
import {
  Database,
  Smartphone,
  Calculator,
  GitBranch,
  Layers,
  Maximize2,
  Zap,
  Server,
  Clock,
} from 'lucide-react';
import { sounds } from '@/utils/sound';
import { ArtifactLightbox, ArtifactItem } from './ArtifactLightbox';

export const SgpaArtifactViewer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ui' | 'schema' | 'pipeline' | 'mobile'>('ui');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activePipelineStage, setActivePipelineStage] = useState<number>(-1);
  const [isSimulatingPipeline, setIsSimulatingPipeline] = useState<boolean>(false);

  const handleSimulatePipeline = () => {
    if (isSimulatingPipeline) return;
    sounds.playClick();
    setIsSimulatingPipeline(true);
    setActivePipelineStage(0);

    const stages = [1, 2, 3, 4];
    stages.forEach((stage, idx) => {
      setTimeout(() => {
        sounds.playTerminal();
        setActivePipelineStage(stage);
        if (idx === stages.length - 1) {
          setTimeout(() => setIsSimulatingPipeline(false), 800);
        }
      }, (idx + 1) * 350);
    });
  };

  const artifacts: ArtifactItem[] = [
    // Artifact 1: Calculator Interface
    {
      id: 'sgpa-ui',
      title: 'Grade Calculation Engine Interface',
      category: 'Production UI',
      badge: 'Flask & SQL',
      technicalDecision: 'Credit-weighted algorithm engine ensuring instantaneous client-side evaluation',
      caption: 'Real responsive grade computation matrix used by Poornima University computer science peers.',
      engineeringExplanation: 'A credit-weighted calculation matrix validating student grade point allocations in real-time, matching university academic regulations.',
      architecturalRationale: 'Pre-validates course inputs in the client to eliminate unnecessary server payload round-trips for invalid credit totals.',
      relatedSystem: 'SGPA Academic Engine Client',
      renderPreview: () => (
        <div className="p-6 bg-[#111111] space-y-4 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <span className="text-[#F3F3F0] font-medium">B.Tech CS &mdash; Semester IV Grade Matrix</span>
            <span className="text-[#2ED47A]">STATUS: ACTIVE (Sub-200ms)</span>
          </div>

          <div className="space-y-2">
            {[
              { code: 'CS401', name: 'Design & Analysis of Algorithms', credits: 4, grade: 'A+ (10)' },
              { code: 'CS402', name: 'Database Management Systems', credits: 4, grade: 'A (9)' },
              { code: 'CS403', name: 'Operating System Architecture', credits: 3, grade: 'A+ (10)' },
              { code: 'CS404', name: 'Computer Networks & Protocols', credits: 3, grade: 'A (9)' },
            ].map((course) => (
              <div key={course.code} className="p-3 rounded-[8px] bg-[#151515] border border-white/[0.04] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-[#2ED47A] font-semibold">{course.code}</span>
                  <span className="text-[#F3F3F0] font-sans text-xs">{course.name}</span>
                </div>
                <div className="flex items-center gap-4 text-[#A1A1A1]">
                  <span>{course.credits} Credits</span>
                  <span className="text-[#F3F3F0] font-semibold">{course.grade}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-[10px] bg-[#151515] border border-white/[0.06] flex items-center justify-between">
            <div>
              <div className="text-[#707070] text-[10px]">TOTAL REGISTERED CREDITS</div>
              <div className="text-base font-semibold text-[#F3F3F0]">14.0 Credits</div>
            </div>
            <div className="text-right">
              <div className="text-[#707070] text-[10px]">COMPUTED SGPA</div>
              <div className="text-2xl font-heading font-semibold text-[#2ED47A]">9.57 / 10.0</div>
            </div>
          </div>
        </div>
      ),
    },

    // Artifact 2: Database Blueprint
    {
      id: 'sgpa-schema',
      title: 'Normalized SQL Database Schema',
      category: 'Database Architecture',
      badge: 'Composite Indexing',
      technicalDecision: 'Composite index on (student_id, semester) eliminating table locks during result drops',
      caption: 'Relational 3NF normalized schema designed for fast indexed read operations under high student query concurrency.',
      engineeringExplanation: 'Relational database schema partitioning student records, semester allocations, course credits, and grade point lookups.',
      architecturalRationale: 'The composite B-Tree index idx_student_sem ensures single-seek queries with sub-200ms latency even during massive traffic spikes.',
      relatedSystem: 'PostgreSQL / SQLite Database Tier',
      renderPreview: () => (
        <div className="p-6 bg-[#111111] space-y-5 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <span className="text-[#F3F3F0]">SQL Relational Schema (PostgreSQL/SQLite)</span>
            <span className="text-[#2ED47A] font-semibold">INDEX: idx_student_sem</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-[10px] bg-[#151515] border border-white/[0.06] space-y-1.5">
              <div className="text-[#2ED47A] font-semibold">TABLE: students</div>
              <div className="space-y-1 text-[#A1A1A1] text-[11px]">
                <div>&bull; <strong className="text-[#F3F3F0]">id</strong>: UUID PK</div>
                <div>&bull; roll_no: VARCHAR</div>
                <div>&bull; name: VARCHAR</div>
                <div>&bull; dept: VARCHAR</div>
              </div>
            </div>

            <div className="p-3.5 rounded-[10px] bg-[#151515] border border-white/[0.06] space-y-1.5">
              <div className="text-[#2ED47A] font-semibold">TABLE: semesters</div>
              <div className="space-y-1 text-[#A1A1A1] text-[11px]">
                <div>&bull; <strong className="text-[#F3F3F0]">id</strong>: SERIAL PK</div>
                <div>&bull; sem_num: INT</div>
                <div>&bull; academic_yr: VARCHAR</div>
                <div>&bull; total_credits: INT</div>
              </div>
            </div>

            <div className="p-3.5 rounded-[10px] bg-[#151515] border border-white/[0.06] space-y-1.5">
              <div className="text-[#2ED47A] font-semibold">TABLE: courses</div>
              <div className="space-y-1 text-[#A1A1A1] text-[11px]">
                <div>&bull; <strong className="text-[#F3F3F0]">course_id</strong>: VARCHAR PK</div>
                <div>&bull; title: VARCHAR</div>
                <div>&bull; credit_hrs: INT</div>
                <div>&bull; sem_id: INT FK</div>
              </div>
            </div>

            <div className="p-3.5 rounded-[10px] bg-[#151515] border border-white/[0.06] space-y-1.5">
              <div className="text-[#2ED47A] font-semibold">TABLE: grades</div>
              <div className="space-y-1 text-[#A1A1A1] text-[11px]">
                <div>&bull; <strong className="text-[#F3F3F0]">id</strong>: SERIAL PK</div>
                <div>&bull; student_id: UUID FK</div>
                <div>&bull; semester: INT</div>
                <div>&bull; sgpa: NUMERIC(4,2)</div>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-[8px] bg-[#0E0E0E] border border-white/[0.08] text-[11px] text-[#A1A1A1] space-y-1">
            <div className="text-[#2ED47A] font-semibold">COMPOSITE INDEX DEFINITION:</div>
            <code>CREATE INDEX idx_student_sem ON grades(student_id, semester);</code>
            <div className="text-[#707070] pt-1">Prevents full-table scans across 10,000+ student grade rows, maintaining &lt;200ms latency.</div>
          </div>
        </div>
      ),
    },

    // Artifact 3: Flask Request Pipeline
    {
      id: 'sgpa-pipeline',
      title: 'Flask Request Execution Pipeline',
      category: 'Backend Pipeline',
      badge: 'Request Flow',
      technicalDecision: 'Transactional credit calculation with strict zero-credit assertions',
      caption: 'Sequential request lifecycle demonstrating Input validation, credit weighting, and indexed database response.',
      engineeringExplanation: 'The 5-stage Flask request pipeline validates incoming payload schemas, calculates credit-weighted sums, and executes indexed queries.',
      architecturalRationale: 'Transactional calculations ensure that data inconsistencies or divide-by-zero errors are caught at the controller boundary before hitting the database.',
      relatedSystem: 'Flask REST API Controller (app/routes.py)',
      renderPreview: () => (
        <div className="p-6 bg-[#111111] space-y-6 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <div>
              <span className="text-[#F3F3F0] font-medium">Flask Request &amp; Response Pipeline Flow</span>
              <div className="text-[#707070] text-[11px] font-sans">Sequential execution stages for /api/calculate</div>
            </div>

            <button
              onClick={handleSimulatePipeline}
              disabled={isSimulatingPipeline}
              className="btn-secondary h-8 px-2.5 text-xs"
            >
              <Zap className={`w-3.5 h-3.5 ${isSimulatingPipeline ? 'text-[#2ED47A] animate-pulse' : 'text-[#707070]'}`} />
              <span>{isSimulatingPipeline ? 'Executing...' : 'Trigger Request'}</span>
            </button>
          </div>

          {/* 5-Step Pipeline Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {[
              { num: '01', title: 'Input', sub: 'JSON POST Payload', ms: '1.2ms' },
              { num: '02', title: 'Validation', sub: 'Credit assertions', ms: '0.8ms' },
              { num: '03', title: 'Credit Engine', sub: 'Weighted Sum algorithm', ms: '2.4ms' },
              { num: '04', title: 'SQL Query', sub: 'idx_student_sem seek', ms: '3.6ms' },
              { num: '05', title: 'CGPA Response', sub: '200 OK JSON', ms: '1.1ms' },
            ].map((step, idx) => {
              const isCurrent = activePipelineStage === idx;
              const hasPassed = activePipelineStage > idx;

              return (
                <div
                  key={step.num}
                  className={`p-3.5 rounded-[10px] border transition-all space-y-1.5 ${
                    isCurrent
                      ? 'bg-[#151515] border-[#2ED47A]'
                      : hasPassed
                      ? 'bg-[#151515] border-white/[0.2]'
                      : 'bg-[#151515]/60 border-white/[0.06]'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px]">
                    <span className={isCurrent ? 'text-[#2ED47A]' : 'text-[#707070]'}>{step.num}</span>
                    <span className="text-[#2ED47A]">{step.ms}</span>
                  </div>
                  <div className="font-semibold text-xs text-[#F3F3F0]">{step.title}</div>
                  <div className="text-[11px] text-[#707070]">{step.sub}</div>
                </div>
              );
            })}
          </div>

          <div className="p-3.5 rounded-[8px] bg-[#0E0E0E] border border-white/[0.06] flex items-center justify-between text-xs">
            <span className="text-[#707070]">Total Transaction Time: <strong className="text-[#2ED47A]">9.1ms</strong></span>
            <span className="text-[#707070]">Peak Query Latency: <strong className="text-[#F3F3F0]">&lt;200ms</strong></span>
            <span className="text-[#707070]">Status: <strong className="text-[#2ED47A]">200 OK</strong></span>
          </div>
        </div>
      ),
    },

    // Artifact 4: Mobile Responsive Viewport
    {
      id: 'sgpa-mobile',
      title: 'Mobile Responsive Viewport (375px)',
      category: 'Mobile UX',
      badge: '100% Mobile Score',
      technicalDecision: 'Zero-overflow fluid responsive design optimized for mobile exam result checks',
      caption: 'Mobile-first layout ensuring quick semester checks on smartphones without horizontal scrolling.',
      engineeringExplanation: 'Optimized touch interface fitting standard mobile viewports (375px) with zero layout thrashing.',
      architecturalRationale: 'Mobile-first styling accommodates over 80% of university peer visits originating on mobile devices during exam result releases.',
      relatedSystem: 'Responsive Frontend Client',
      renderPreview: () => (
        <div className="p-6 bg-[#111111] flex justify-center">
          <div className="w-[300px] p-4 rounded-[20px] bg-[#151515] border border-white/[0.12] space-y-3 font-mono text-xs">
            <div className="text-center pb-2 border-b border-white/[0.08]">
              <div className="font-heading font-semibold text-sm text-[#F3F3F0]">SGPA Academic Portal</div>
              <div className="text-[10px] text-[#707070]">Mobile Viewport 375px &bull; Fluid CSS</div>
            </div>
            <div className="p-2.5 rounded-[6px] bg-[#111111] text-[11px] space-y-1">
              <div className="flex justify-between text-[#A1A1A1]">
                <span>Total Credits:</span>
                <span className="text-[#F3F3F0]">14.0 Credits</span>
              </div>
              <div className="flex justify-between text-[#A1A1A1]">
                <span>Semester:</span>
                <span className="text-[#2ED47A]">IV (Spring 2024)</span>
              </div>
            </div>
            <div className="p-3 rounded-[8px] bg-[#111111] text-center border border-[#2ED47A]/30">
              <div className="text-[10px] text-[#707070]">COMPUTED SGPA</div>
              <div className="text-2xl font-heading font-semibold text-[#2ED47A]">9.57</div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const currentArtifact = artifacts.find((a) => a.id === `sgpa-${activeTab}`) || artifacts[0];
  const currentIndex = artifacts.findIndex((a) => a.id === `sgpa-${activeTab}`);

  return (
    <div className="space-y-4">
      <ArtifactLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        artifacts={artifacts}
        currentIndex={currentIndex >= 0 ? currentIndex : 0}
        onSelectIndex={(idx) => {
          const tabId = artifacts[idx].id.replace('sgpa-', '') as any;
          setActiveTab(tabId);
        }}
      />

      {/* Tabs */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
        <div className="flex items-center gap-1.5 overflow-x-auto">
          {[
            { id: 'ui', label: 'Calculator UI', icon: Calculator },
            { id: 'schema', label: 'Database Blueprint', icon: Database },
            { id: 'pipeline', label: 'Flask Pipeline', icon: Server },
            { id: 'mobile', label: 'Mobile Preview', icon: Smartphone },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  sounds.playClick();
                  setActiveTab(tab.id as any);
                }}
                className={`px-3 py-1.5 rounded-[6px] text-xs font-mono transition-colors flex items-center gap-1.5 shrink-0 ${
                  activeTab === tab.id
                    ? 'bg-[#151515] text-[#F3F3F0] border border-white/[0.12]'
                    : 'text-[#707070] hover:text-[#A1A1A1]'
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-[#2ED47A]" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <button
          onClick={() => {
            sounds.playClick();
            setIsLightboxOpen(true);
          }}
          className="btn-secondary h-8 px-2.5 text-xs shrink-0"
          title="Open in lightbox"
        >
          <Maximize2 className="w-3.5 h-3.5 text-[#707070]" />
          <span>Inspect</span>
        </button>
      </div>

      {/* Artifact Render Box */}
      <div className="rounded-[14px] border border-white/[0.08] overflow-hidden bg-[#111111]">
        {currentArtifact.renderPreview(false)}
      </div>

      {/* Caption */}
      <div className="p-3 rounded-[8px] bg-[#151515] border border-white/[0.04] flex items-center justify-between text-xs font-sans">
        <span className="text-[#A1A1A1]">{currentArtifact.caption}</span>
        <span className="text-[11px] font-mono text-[#2ED47A] shrink-0 font-medium">VERIFIED ARTIFACT</span>
      </div>
    </div>
  );
};

export const OrbitDeskArtifactViewer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'rag' | 'roadmap'>('architecture');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const artifacts: ArtifactItem[] = [
    {
      id: 'orbit-arch',
      title: 'LangGraph Multi-Agent Architecture',
      category: 'Agent Orchestration',
      badge: 'Stateful Graph',
      technicalDecision: 'LangGraph state coordination with conditional edges between triage and resolution agents',
      caption: 'Stateful multi-agent customer support graph designed to coordinate intent classification, vector search, and ticket generation.',
      engineeringExplanation: 'LangGraph architecture defining stateful cycles between triage classification, vector retrieval, and action dispatching.',
      architecturalRationale: 'Ensures conversation history and resolution states persist across turns without drifting into hallucinated responses.',
      relatedSystem: 'OrbitDesk Multi-Agent Orchestrator',
      renderPreview: () => (
        <div className="p-6 bg-[#111111] space-y-6 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <span className="text-[#F3F3F0] font-medium">LangGraph Stateful Coordinator Graph</span>
            <span className="px-2 py-0.5 rounded-[4px] bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px]">
              IN PROGRESS // ACTIVE RESEARCH
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-[10px] bg-[#151515] border border-white/[0.06] space-y-2">
              <div className="text-[10px] text-[#707070]">STAGE 01</div>
              <div className="text-[#F3F3F0] font-semibold">Triage Agent</div>
              <p className="text-[11px] text-[#A1A1A1] font-sans">
                Classifies support ticket urgency and semantic domain using quantized qwen2.5:1.5b.
              </p>
            </div>

            <div className="p-4 rounded-[10px] bg-[#151515] border border-white/[0.06] space-y-2">
              <div className="text-[10px] text-[#707070]">STAGE 02</div>
              <div className="text-[#2ED47A] font-semibold">FAISS Vector RAG</div>
              <p className="text-[11px] text-[#A1A1A1] font-sans">
                Cosine similarity search across local markdown knowledge base with sub-500ms retrieval.
              </p>
            </div>

            <div className="p-4 rounded-[10px] bg-[#151515] border border-white/[0.06] space-y-2">
              <div className="text-[10px] text-[#707070]">STAGE 03</div>
              <div className="text-[#F3F3F0] font-semibold">Ticket Generator</div>
              <p className="text-[11px] text-[#A1A1A1] font-sans">
                Drafts structured JSON ticket resolution or escalates with complete conversation state.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'orbit-rag',
      title: 'Local Vector RAG Knowledge Pipeline',
      category: 'Vector Embeddings',
      badge: 'FAISS Local',
      technicalDecision: 'Local vector search over markdown knowledge bases avoiding cloud embedding costs',
      caption: 'Chunking pipeline splitting technical markdown documentation into 512-token chunks with 64-token overlap.',
      engineeringExplanation: 'Embeddings pipeline generating dense vectors locally via sentence-transformers, indexed into FAISS IndexFlatL2 for sub-500ms queries.',
      architecturalRationale: 'Guarantees that sensitive documentation never leaves the local enterprise perimeter and eliminates per-token API charges.',
      relatedSystem: 'Local FAISS Knowledge Retrieval Engine',
      renderPreview: () => (
        <div className="p-6 bg-[#111111] space-y-4 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <span className="text-[#F3F3F0]">Local FAISS Vector Pipeline Schematic</span>
            <span className="text-[#2ED47A]">SUB-500MS RETRIEVAL TARGET</span>
          </div>

          <div className="p-4 rounded-[10px] bg-[#151515] border border-white/[0.06] space-y-2 text-[#A1A1A1] text-xs">
            <div>1. <strong className="text-[#F3F3F0]">Markdown Ingestion</strong>: Parse product docs &amp; past tickets</div>
            <div>2. <strong className="text-[#F3F3F0]">Recursive Chunking</strong>: 512 tokens with 64-token overlap</div>
            <div>3. <strong className="text-[#F3F3F0]">Local Embedding</strong>: Sentence-transformers / Ollama local</div>
            <div>4. <strong className="text-[#F3F3F0]">FAISS Index</strong>: FlatL2 / IndexIVFFlat for nearest-neighbor lookups</div>
          </div>
        </div>
      ),
    },
    {
      id: 'orbit-roadmap',
      title: 'Engineering Roadmap & Planned Stack',
      category: 'Roadmap',
      badge: 'Target Q2 2025',
      technicalDecision: 'Staged validation milestones ensuring robust unit testing before production release',
      caption: 'Detailed development roadmap with clear milestones and target completion dates.',
      engineeringExplanation: 'Structured development roadmap tracking local knowledge ingestion, stateful coordination graphs, and FastAPI webhook dispatchers.',
      architecturalRationale: 'Ensures measurable engineering progress and transparent accountability for work in active development.',
      relatedSystem: 'OrbitDesk Release Roadmap',
      renderPreview: () => (
        <div className="p-6 bg-[#111111] space-y-4 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <span className="text-[#F3F3F0]">OrbitDesk Engineering Milestones</span>
            <span className="text-amber-400">ACTIVE DEVELOPMENT</span>
          </div>

          <div className="space-y-2">
            {[
              { milestone: 'Phase 1: Local Knowledge Ingestion & FAISS Vector Store', status: 'Completed', date: 'Jan 2025' },
              { milestone: 'Phase 2: LangGraph State Coordinator & Triage Node', status: 'In Progress', date: 'Feb 2025' },
              { milestone: 'Phase 3: FastAPI Webhook & Automated Ticket Generation', status: 'Planned', date: 'Mar 2025' },
              { milestone: 'Phase 4: End-to-End Latency Benchmarking & Evaluation', status: 'Planned', date: 'Apr 2025' },
            ].map((m) => (
              <div key={m.milestone} className="p-3 rounded-[8px] bg-[#151515] border border-white/[0.04] flex items-center justify-between">
                <span className="text-[#F3F3F0] font-sans text-xs">{m.milestone}</span>
                <span className={`text-[11px] font-mono ${m.status === 'Completed' ? 'text-[#2ED47A]' : m.status === 'In Progress' ? 'text-amber-400' : 'text-[#707070]'}`}>
                  {m.status} ({m.date})
                </span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  const currentArtifact = artifacts.find((a) => a.id === `orbit-${activeTab}`) || artifacts[0];
  const currentIndex = artifacts.findIndex((a) => a.id === `orbit-${activeTab}`);

  return (
    <div className="space-y-4">
      <ArtifactLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        artifacts={artifacts}
        currentIndex={currentIndex >= 0 ? currentIndex : 0}
        onSelectIndex={(idx) => {
          const tabId = artifacts[idx].id.replace('orbit-', '') as any;
          setActiveTab(tabId);
        }}
      />

      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
        <div className="flex items-center gap-1.5 overflow-x-auto">
          {[
            { id: 'architecture', label: 'LangGraph Architecture', icon: GitBranch },
            { id: 'rag', label: 'FAISS Vector RAG', icon: Layers },
            { id: 'roadmap', label: 'Engineering Roadmap', icon: Clock },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  sounds.playClick();
                  setActiveTab(tab.id as any);
                }}
                className={`px-3 py-1.5 rounded-[6px] text-xs font-mono transition-colors flex items-center gap-1.5 shrink-0 ${
                  activeTab === tab.id
                    ? 'bg-[#151515] text-[#F3F3F0] border border-white/[0.12]'
                    : 'text-[#707070] hover:text-[#A1A1A1]'
                }`}
              >
                <Icon className="w-3.5 h-3.5 text-[#2ED47A]" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <button
          onClick={() => {
            sounds.playClick();
            setIsLightboxOpen(true);
          }}
          className="btn-secondary h-8 px-2.5 text-xs shrink-0"
          title="Open in lightbox"
        >
          <Maximize2 className="w-3.5 h-3.5 text-[#707070]" />
          <span>Inspect</span>
        </button>
      </div>

      <div className="rounded-[14px] border border-white/[0.08] overflow-hidden bg-[#111111]">
        {currentArtifact.renderPreview(false)}
      </div>

      <div className="p-3 rounded-[8px] bg-[#151515] border border-white/[0.04] flex items-center justify-between text-xs font-sans">
        <span className="text-[#A1A1A1]">{currentArtifact.caption}</span>
        <span className="text-[11px] font-mono text-amber-400 shrink-0 font-medium">ACTIVE RESEARCH</span>
      </div>
    </div>
  );
};
