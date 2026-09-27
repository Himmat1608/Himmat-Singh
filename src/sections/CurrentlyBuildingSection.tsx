import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, Database, ShieldCheck, Sparkles, Terminal, Github } from 'lucide-react';
import { sounds } from '@/utils/sound';

export const CurrentlyBuildingSection: React.FC = () => {
  return (
    <section id="currently-building" className="py-24 relative z-10 border-t border-zinc-800/80 bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>// ACTIVE LABS &amp; R&amp;D IN PROGRESS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-white">
            Currently <span className="text-cyan-400">Building</span>
          </h2>
          <p className="text-zinc-400 font-sans text-sm sm:text-base max-w-2xl leading-relaxed">
            Active open-source research and engineering projects currently under design and development.
          </p>
        </div>

        {/* OrbitDesk Showcase Bento Box */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bento-card p-6 sm:p-8 space-y-8 border-cyan-500/30 crosshair-corner"
        >
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800/80 pb-5">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                    OrbitDesk — Local RAG Agent
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] font-mono text-amber-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    IN PROGRESS
                  </span>
                </div>
                <p className="text-xs text-zinc-400 font-sans mt-0.5">
                  Local-First Retrieval-Augmented Generation Customer Support System • 2025
                </p>
              </div>
            </div>

            <a
              href="https://github.com/Himmat1608"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sounds.playClick()}
              onMouseEnter={() => sounds.playHover()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 text-zinc-300 hover:text-white font-mono text-xs transition-all shrink-0"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>Track on GitHub</span>
            </a>
          </div>

          {/* Description & Architecture Pills */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-7 space-y-4 font-sans text-xs sm:text-sm text-zinc-300">
              <p className="leading-relaxed">
                Building a local-first RAG support agent designed to answer enterprise documentation queries with <strong>zero cloud data leakage</strong>. Uses <strong>LangGraph</strong> stateful multi-node agent orchestration paired with <strong>FAISS</strong> dense vector indexes and local <strong>Qwen2.5-1.5B</strong> model inference.
              </p>

              <div className="grid grid-cols-2 gap-3 font-mono text-xs pt-2">
                <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1">
                  <div className="text-zinc-500 text-[10px] uppercase flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-cyan-400" /> Orchestration
                  </div>
                  <div className="font-bold text-white text-sm">LangGraph</div>
                  <div className="text-[10px] text-zinc-400">Stateful Multi-Node Workflows</div>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1">
                  <div className="text-zinc-500 text-[10px] uppercase flex items-center gap-1">
                    <Database className="w-3.5 h-3.5 text-indigo-400" /> Vector Storage
                  </div>
                  <div className="font-bold text-white text-sm">FAISS DB</div>
                  <div className="text-[10px] text-zinc-400">Dense Embedding Search</div>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1">
                  <div className="text-zinc-500 text-[10px] uppercase flex items-center gap-1">
                    <Cpu className="w-3.5 h-3.5 text-emerald-400" /> Model Engine
                  </div>
                  <div className="font-bold text-white text-sm">Qwen2.5-1.5B</div>
                  <div className="text-[10px] text-zinc-400">Local Offline LLM</div>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1">
                  <div className="text-zinc-500 text-[10px] uppercase flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> Privacy
                  </div>
                  <div className="font-bold text-white text-sm">100% Offline</div>
                  <div className="text-[10px] text-zinc-400">Zero Cloud Data Exposure</div>
                </div>
              </div>
            </div>

            {/* Architecture Node Visual Widget */}
            <div className="lg:col-span-5 code-window p-4 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2 text-zinc-500 text-[11px]">
                <span className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>orbitdesk_graph_pipeline.py</span>
                </span>
                <span className="text-amber-400 text-[10px]">WIP</span>
              </div>

              <div className="p-3 bg-[#09090b] rounded-lg border border-zinc-800/60 text-zinc-300 leading-relaxed text-[11px]">
                <pre>
                  <span className="text-cyan-400">from</span> langgraph.graph <span className="text-cyan-400">import</span> StateGraph{"\n"}
                  <span className="text-cyan-400">from</span> faiss <span className="text-cyan-400">import</span> IndexFlatL2{"\n\n"}
                  <span className="text-zinc-500"># Node 1: Vector Search Chunk Lookup</span>{"\n"}
                  docs = vector_store.similarity_search(query, k=<span className="text-amber-300">3</span>){"\n\n"}
                  <span className="text-zinc-500"># Node 2: Local Qwen2.5 Context Generation</span>{"\n"}
                  answer = local_llm.generate(docs, query)
                </pre>
              </div>

              <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-[11px] text-cyan-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Target: Enterprise KB Q&amp;A automation without cloud costs.</span>
              </div>
            </div>

          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800/80">
            {['LangGraph', 'FAISS Vector DB', 'Qwen2.5-1.5B', 'Sentence-Transformers', 'Python', 'Vector DB Indexing'].map((tech) => (
              <span key={tech} className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400">
                {tech}
              </span>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
};
