import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Code2, Layers, Cpu, Cloud, Database, Terminal } from 'lucide-react';

interface SkillGroup {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

export const SkillsSection: React.FC = () => {
  const skillGroups: SkillGroup[] = [
    {
      title: 'Languages',
      icon: <Code2 className="w-4 h-4 text-emerald-400" />,
      skills: ['Python', 'JavaScript', 'HTML/CSS', 'SQL', 'C++ (DSA)'],
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Layers className="w-4 h-4 text-emerald-400" />,
      skills: ['Flask', 'CustomTkinter', 'SpeechRecognition', 'Edge-TTS', 'psutil', 'pycaw', 'pywin32'],
    },
    {
      title: 'AI & Automation',
      icon: <Cpu className="w-4 h-4 text-emerald-400" />,
      skills: [
        'Ollama (local LLM inference)',
        'Prompt Engineering',
        'Windows COM automation',
        'Voice I/O pipeline',
      ],
    },
    {
      title: 'Cloud Platforms',
      icon: <Cloud className="w-4 h-4 text-emerald-400" />,
      skills: [
        'Google Cloud Platform (Cloud Run, Vertex AI, Dataplex)',
        'Oracle Cloud Infrastructure (OCI)',
      ],
    },
    {
      title: 'Backend & Databases',
      icon: <Database className="w-4 h-4 text-emerald-400" />,
      skills: [
        'REST API design',
        'Flask web development',
        'SQL schema design',
        'JSON-based data storage',
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: <Terminal className="w-4 h-4 text-emerald-400" />,
      skills: [
        'Git',
        'GitHub',
        'VS Code',
        'Linux (CLI)',
        'GitHub Actions',
        'Multithreading & Async I/O',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 border-t border-zinc-800/80 bg-zinc-950/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
            <span className="text-zinc-600">//</span> technical stack &amp; capabilities
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-zinc-100 flex items-center gap-2">
            <span className="text-emerald-400">&gt;</span> technical_skills
          </h2>
          <p className="text-sm text-zinc-400 font-sans mt-2">
            Grouped technologies derived directly from hands-on software development and cloud certification labs.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <Card
              key={group.title}
              className="border-zinc-800/90 bg-zinc-950/80 hover:border-emerald-500/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all duration-300 flex flex-col justify-between group"
            >
              <CardHeader className="pb-3 border-b border-zinc-900">
                <CardTitle className="text-base flex items-center gap-2 font-mono group-hover:text-emerald-400 transition-colors">
                  <span className="p-1.5 rounded bg-zinc-900 border border-zinc-800 group-hover:border-emerald-500/40">
                    {group.icon}
                  </span>
                  <span>{group.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 flex-1">
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="default"
                      className="text-xs bg-zinc-900/90 text-zinc-300 border-zinc-800 hover:border-emerald-500/40 hover:text-emerald-300 font-mono py-1 px-2.5 transition-all"
                    >
                      <span className="text-emerald-500/60 mr-1.5">&gt;</span>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
