import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Github, Cpu, Calculator, Bot, Zap, Clock, HardDrive, Shield, AlertCircle } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 border-t border-zinc-800/80 bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
            <span className="text-zinc-600">//</span> verified production work
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-zinc-100 flex items-center gap-2">
            <span className="text-emerald-400">&gt;</span> featured_projects
          </h2>
          <p className="text-sm text-zinc-400 font-sans mt-2">
            Real implementations from CV — featuring local LLM architectures, multithreaded systems, and database web applications.
          </p>
        </motion.div>

        <div className="space-y-8">
          
          {/* Project 1: ROBIN - Featured Flagship Bento Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-zinc-800 bg-zinc-950/90 hover:border-emerald-500/50 transition-all duration-300 relative overflow-hidden group">
              {/* Background Glow Effect */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/10 transition-all" />

              <CardHeader className="pb-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                      <Bot className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-xl sm:text-2xl text-zinc-100 font-mono">
                          ROBIN — AI Virtual Assistant
                        </CardTitle>
                        <Badge variant="emerald" className="font-mono text-[11px]">
                          Open Source
                        </Badge>
                      </div>
                      <CardDescription className="font-mono text-xs text-zinc-400 mt-1">
                        2024–Present • Python, Ollama (qwen2.5:3b), CustomTkinter, pywin32, Edge-TTS
                      </CardDescription>
                    </div>
                  </div>

                  <a
                    href="https://github.com/Himmat1608/ROBIN-AI"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="terminal" size="sm">
                      <Github className="w-4 h-4 mr-2" />
                      github.com/Himmat1608/ROBIN-AI
                    </Button>
                  </a>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Highlight Metrics Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
                  <div className="p-3 rounded-md bg-zinc-900/90 border border-zinc-800 flex flex-col justify-between hover:border-emerald-500/40 transition-colors">
                    <span className="text-zinc-500 flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-emerald-400" /> Latency:
                    </span>
                    <span className="text-emerald-400 text-lg font-bold mt-1">45ms</span>
                    <span className="text-[10px] text-zinc-400">Bypasses LLM for commands</span>
                  </div>
                  <div className="p-3 rounded-md bg-zinc-900/90 border border-zinc-800 flex flex-col justify-between hover:border-emerald-500/40 transition-colors">
                    <span className="text-zinc-500 flex items-center gap-1">
                      <HardDrive className="w-3.5 h-3.5 text-emerald-400" /> Memory Footprint:
                    </span>
                    <span className="text-emerald-400 text-lg font-bold mt-1">180MB</span>
                    <span className="text-[10px] text-zinc-400">Optimized for 6GB RAM</span>
                  </div>
                  <div className="p-3 rounded-md bg-zinc-900/90 border border-zinc-800 flex flex-col justify-between hover:border-emerald-500/40 transition-colors">
                    <span className="text-zinc-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" /> Multithreading:
                    </span>
                    <span className="text-emerald-400 text-lg font-bold mt-1">Async I/O</span>
                    <span className="text-[10px] text-zinc-400">Prevents UI freezes</span>
                  </div>
                  <div className="p-3 rounded-md bg-zinc-900/90 border border-zinc-800 flex flex-col justify-between hover:border-emerald-500/40 transition-colors">
                    <span className="text-zinc-500 flex items-center gap-1">
                      <Shield className="w-3.5 h-3.5 text-emerald-400" /> Privacy &amp; Cost:
                    </span>
                    <span className="text-emerald-400 text-lg font-bold mt-1">100% Offline</span>
                    <span className="text-[10px] text-zinc-400">Zero external API costs</span>
                  </div>
                </div>

                {/* Detailed Architecture Bullets */}
                <div className="space-y-2.5 font-sans text-sm text-zinc-300">
                  <div className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-mono font-bold mt-0.5">&gt;</span>
                    <p>
                      <strong className="text-zinc-100 font-mono">Hybrid Semantic Router:</strong> Architected a 5-route deterministic intent layer (greetings, memory retrieval, memory extraction, system commands, AI reasoning) reducing average response latency from 2.8s to 45ms by executing direct system API calls instead of unnecessary LLM inference.
                    </p>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-mono font-bold mt-0.5">&gt;</span>
                    <p>
                      <strong className="text-zinc-100 font-mono">6GB RAM Optimization:</strong> Deployed Ollama with <code className="text-emerald-400 bg-zinc-900 px-1 py-0.5 rounded font-mono text-xs">qwen2.5:3b</code> for local inference, capping total RAM consumption at 180MB for fully offline desktop automation.
                    </p>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-mono font-bold mt-0.5">&gt;</span>
                    <p>
                      <strong className="text-zinc-100 font-mono">Voice I/O &amp; Thread Safety:</strong> Engineered a robust voice pipeline (SpeechRecognition with 80-threshold mic calibration, Edge-TTS, PowerShell MediaPlayer) resolving Windows COM threading deadlocks that broke pyttsx3 under multithreaded loads.
                    </p>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-mono font-bold mt-0.5">&gt;</span>
                    <p>
                      <strong className="text-zinc-100 font-mono">Persistent Memory System:</strong> Built JSON-based persistent memory tracking user continuity, presence detection, meta-intent parsing (CANCEL/SIMPLIFY/CONTINUE/CLARIFY), and 100+ Windows automation tasks (<code className="text-zinc-400 bg-zinc-900 px-1 py-0.5 rounded font-mono text-xs">pywin32</code>, <code className="text-zinc-400 bg-zinc-900 px-1 py-0.5 rounded font-mono text-xs">psutil</code>, <code className="text-zinc-400 bg-zinc-900 px-1 py-0.5 rounded font-mono text-xs">pycaw</code>).
                    </p>
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-800/80">
                  {['Python', 'Ollama (qwen2.5:3b)', 'SpeechRecognition', 'Edge-TTS', 'CustomTkinter', 'pywin32', 'psutil', 'pycaw', 'Async I/O', 'Git'].map((tech) => (
                    <Badge key={tech} variant="subtle" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Project 2 & 3 Side by Side Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Project 2: SGPA & CGPA Calculator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex"
            >
              <Card className="w-full border-zinc-800 bg-zinc-950/90 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between">
                <CardHeader>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        <Calculator className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-lg font-mono text-zinc-100">
                        SGPA &amp; CGPA Calculator
                      </CardTitle>
                    </div>
                    <Badge variant="outline" className="text-[11px] font-mono">
                      2024
                    </Badge>
                  </div>
                  <CardDescription className="font-mono text-xs text-zinc-400">
                    Web Application • Adopted by Poornima University Students
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 font-sans text-sm text-zinc-300 flex-1">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-400 font-mono font-bold">&gt;</span>
                      <p>
                        Flask web application implementing credit-weighted grade algorithms for SGPA/CGPA calculation, actively adopted by university peers.
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-400 font-mono font-bold">&gt;</span>
                      <p>
                        SQL database schema with indexed queries maintaining <strong className="text-emerald-400 font-mono">sub-200ms</strong> response times under classroom usage loads.
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-400 font-mono font-bold">&gt;</span>
                      <p>
                        Fully responsive interface rendering correctly across desktop, tablet, and mobile screens.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/80">
                    {['Python', 'Flask', 'SQL', 'HTML5', 'CSS3', 'JavaScript'].map((tech) => (
                      <Badge key={tech} variant="subtle" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="justify-between pt-4">
                  <span className="text-xs font-mono text-zinc-500">github.com/Himmat1608/SGPA-CGPA-Calculator</span>
                  <a
                    href="https://github.com/Himmat1608/SGPA-CGPA-Calculator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="terminal" size="sm">
                      <Github className="w-3.5 h-3.5 mr-1.5" />
                      Code
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Project 3: OrbitDesk (In Progress) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex"
            >
              <Card className="w-full border-zinc-800/90 bg-zinc-950/80 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between">
                <CardHeader>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-lg font-mono text-zinc-100">
                        OrbitDesk — RAG Agent
                      </CardTitle>
                    </div>
                    <Badge variant="outline" className="text-[11px] font-mono border-amber-500/40 text-amber-400 bg-amber-500/10">
                      Currently Building
                    </Badge>
                  </div>
                  <CardDescription className="font-mono text-xs text-zinc-400">
                    Local-First RAG Support Agent • Active AI Engineer Internship Assignment
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 font-sans text-sm text-zinc-300 flex-1">
                  <div className="p-3 rounded-md bg-amber-500/5 border border-amber-500/20 text-xs font-mono text-amber-300/90 flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
                    <span>
                      In active development as part of an AI Engineer assignment. Detailed benchmarks and repository link will be updated upon publication.
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-amber-400 font-mono font-bold">&gt;</span>
                      <p>
                        Building a local-first Retrieval-Augmented Generation (RAG) agent utilizing <code className="text-zinc-200 font-mono">LangGraph</code> for stateful workflow orchestration.
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-amber-400 font-mono font-bold">&gt;</span>
                      <p>
                        Leveraging <code className="text-zinc-200 font-mono">FAISS</code> vector indexes with <code className="text-zinc-200 font-mono">Sentence-Transformers</code> embeddings and local inference using <code className="text-zinc-200 font-mono">Qwen2.5-1.5B-Instruct</code>.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/80">
                    {['LangGraph', 'Qwen2.5-1.5B-Instruct', 'Sentence-Transformers', 'FAISS'].map((tech) => (
                      <Badge key={tech} variant="subtle" className="text-xs text-amber-300/80 border-amber-500/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="justify-between pt-4">
                  <span className="text-xs font-mono text-zinc-500">// TODO: HIMMAT_FILL (In Progress)</span>
                  <Button variant="secondary" size="sm" disabled className="opacity-60 cursor-not-allowed">
                    Building...
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
