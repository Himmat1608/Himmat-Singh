import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { BookOpen, GraduationCap, Server } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const coursework = [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (OOP)',
    'Database Management Systems (DBMS)',
    'Computer Networks',
    'Cloud Computing',
  ];

  return (
    <section id="about" className="py-20 border-t border-zinc-800/80 bg-zinc-950/40 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
            <span className="text-zinc-600">//</span> background &amp; education
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-zinc-100 flex items-center gap-2">
            <span className="text-emerald-400">&gt;</span> about_me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <Card className="border-zinc-800/90 bg-zinc-950/90 hover:border-zinc-700/80">
              <CardContent className="p-6 space-y-4 text-zinc-300 font-sans leading-relaxed text-sm sm:text-base">
                <p>
                  I am a 3rd-year B.Tech Computer Science student at Poornima University (2024–2028), focusing on backend systems, Python development, local AI architectures, and cloud-native solutions.
                </p>
                <p>
                  My engineering experience centers on building production-ready CLI and desktop automation tools. I architected <strong className="text-emerald-400 font-mono font-medium">ROBIN</strong>, a fully offline local AI assistant with voice I/O, multithreaded task execution, and a hybrid semantic routing engine that cuts command latency to 45ms while running within 180MB RAM on 6GB RAM hardware.
                </p>
                <p>
                  Certified in Oracle Cloud Infrastructure (Generative AI Professional) and Google Cloud (Cloud Run, Dataplex, Vertex AI), I am seeking a Python development, backend engineering, or cloud engineering internship.
                </p>
              </CardContent>
            </Card>

            {/* Quick Metrics / Key Strengths */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
              <div className="p-3 rounded-md bg-zinc-900/80 border border-zinc-800/80 text-center hover:border-emerald-500/40 transition-colors">
                <div className="text-emerald-400 font-bold text-lg">45ms</div>
                <div className="text-zinc-400 text-[11px] mt-0.5">Command Latency</div>
              </div>
              <div className="p-3 rounded-md bg-zinc-900/80 border border-zinc-800/80 text-center hover:border-emerald-500/40 transition-colors">
                <div className="text-emerald-400 font-bold text-lg">180MB</div>
                <div className="text-zinc-400 text-[11px] mt-0.5">Local LLM RAM</div>
              </div>
              <div className="p-3 rounded-md bg-zinc-900/80 border border-zinc-800/80 text-center col-span-2 sm:col-span-1 hover:border-emerald-500/40 transition-colors">
                <div className="text-emerald-400 font-bold text-lg">4 Badges</div>
                <div className="text-zinc-400 text-[11px] mt-0.5">OCI &amp; GCP Certs</div>
              </div>
            </div>
          </motion.div>

          {/* Education & Academic Context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* University Card */}
            <Card className="border-zinc-800/90 bg-zinc-950/90">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-mono font-bold text-zinc-100 text-base">Poornima University</h3>
                    <p className="text-xs font-mono text-emerald-400">B.Tech Computer Science</p>
                    <p className="text-xs text-zinc-400 mt-1">2024 – 2028 (Expected) • 3rd Year</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-800/80 space-y-2">
                  <div className="text-xs font-mono text-zinc-300 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Relevant Coursework:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {coursework.map((course) => (
                      <Badge key={course} variant="subtle" className="text-[11px]">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Core Focus Card */}
            <Card className="border-zinc-800/90 bg-zinc-950/90 font-mono text-xs">
              <CardContent className="p-5 space-y-3">
                <div className="text-emerald-400 font-bold flex items-center gap-2">
                  <Server className="w-4 h-4" />
                  <span>Engineering Principles</span>
                </div>
                <ul className="space-y-2 text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">&gt;</span>
                    <span>Local-first, privacy-preserving AI inference</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">&gt;</span>
                    <span>Bypassing heavy LLM calls with deterministic intent routing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">&gt;</span>
                    <span>Cloud serverless automation with GCP &amp; OCI</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
