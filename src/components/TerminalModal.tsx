import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';
import { sounds } from '@/utils/sound';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: 'init-1',
      command: 'system --init',
      output: (
        <div className="space-y-1 text-[#A1A1A1]">
          <div>[OK] HIMMAT_SINGH_ENGINEERING_CLI initialized.</div>
          <div>[INFO] B.Tech CS Student @ Poornima University (2024-2028).</div>
          <div>[INFO] Type <span className="text-[#F3F3F0] font-medium">&apos;help&apos;</span> to list available commands.</div>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs, isOpen]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    sounds.playTerminal();
    const newLogId = Date.now().toString();

    let responseNode: React.ReactNode = null;
    const lower = trimmed.toLowerCase();

    if (lower === 'help') {
      responseNode = (
        <div className="space-y-1 text-[#A1A1A1]">
          <div className="text-[#F3F3F0]">Available commands:</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 pt-1 text-xs">
            <div><span className="text-[#F3F3F0] font-mono font-medium">robin</span> : Run ROBIN AI intent router simulation</div>
            <div><span className="text-[#F3F3F0] font-mono font-medium">metrics</span> : View 45ms latency &amp; 180MB RAM benchmarks</div>
            <div><span className="text-[#F3F3F0] font-mono font-medium">skills</span> : Output engineering stack</div>
            <div><span className="text-[#F3F3F0] font-mono font-medium">certs</span> : List OCI &amp; GCP cloud certifications</div>
            <div><span className="text-[#F3F3F0] font-mono font-medium">contact</span> : Show email, GitHub, Credly details</div>
            <div><span className="text-[#707070] font-mono font-medium">clear</span> : Clear terminal scrollback</div>
          </div>
        </div>
      );
    } else if (lower === 'robin') {
      responseNode = (
        <div className="space-y-1.5 border-l-2 border-[#2ED47A] pl-3 my-1">
          <div className="text-[#F3F3F0] font-medium">[ROBIN INTENT ROUTER SIMULATION]</div>
          <div className="text-xs text-[#A1A1A1]">&gt; Input: &quot;open calculator and optimize memory&quot;</div>
          <div className="text-xs text-[#F3F3F0]">&gt; Intent Router: Executing System Command Route (Bypasses LLM)</div>
          <div className="text-xs text-[#2ED47A]">&gt; Latency: 45ms (Native pywin32 C-bindings)</div>
          <div className="text-xs text-[#A1A1A1]">&gt; RAM Allocated: 180MB (Ollama qwen2.5:3b)</div>
        </div>
      );
    } else if (lower === 'metrics') {
      responseNode = (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono text-xs">
          <div className="p-2 rounded-[6px] bg-[#151515] border border-white/[0.06]">
            <div className="text-[#707070] text-[10px]">Command Latency</div>
            <div className="text-[#F3F3F0] text-base font-medium">45ms</div>
          </div>
          <div className="p-2 rounded-[6px] bg-[#151515] border border-white/[0.06]">
            <div className="text-[#707070] text-[10px]">RAM Footprint</div>
            <div className="text-[#F3F3F0] text-base font-medium">180MB</div>
          </div>
          <div className="p-2 rounded-[6px] bg-[#151515] border border-white/[0.06]">
            <div className="text-[#707070] text-[10px]">Target Hardware</div>
            <div className="text-[#F3F3F0] text-base font-medium">6GB RAM</div>
          </div>
          <div className="p-2 rounded-[6px] bg-[#151515] border border-white/[0.06]">
            <div className="text-[#707070] text-[10px]">Query Response</div>
            <div className="text-[#F3F3F0] text-base font-medium">&lt;200ms</div>
          </div>
        </div>
      );
    } else if (lower === 'skills') {
      responseNode = (
        <div className="space-y-1 text-xs text-[#A1A1A1]">
          <div className="text-[#F3F3F0] font-medium">ENGINEERING STACK:</div>
          <div>• Languages: Python, SQL, C++, JavaScript, TypeScript</div>
          <div>• AI &amp; Local Inference: Ollama (qwen2.5), SpeechRecognition, Edge-TTS, LangGraph, FAISS</div>
          <div>• Frameworks &amp; OS: Flask, CustomTkinter, pywin32, psutil, pycaw</div>
          <div>• Cloud: Google Cloud (Cloud Run, Dataplex, Vertex AI), OCI (GenAI Professional)</div>
        </div>
      );
    } else if (lower === 'certs') {
      responseNode = (
        <div className="space-y-1 text-xs text-[#A1A1A1]">
          <div className="text-[#F3F3F0] font-medium">VERIFIED CLOUD CERTIFICATIONS:</div>
          <div>1. Oracle Cloud Infrastructure — Generative AI Professional (2025)</div>
          <div>2. Google Cloud — Cloud Run Serverless Deployments (2025)</div>
          <div>3. Google Cloud — Dataplex Data Governance (2025)</div>
          <div>4. Google Cloud — Vertex AI Prompt Design (2025)</div>
        </div>
      );
    } else if (lower === 'contact') {
      responseNode = (
        <div className="space-y-1 text-xs text-[#A1A1A1]">
          <div><span className="text-[#707070]">Email:</span> chimmatasingh59@gmail.com</div>
          <div><span className="text-[#707070]">GitHub:</span> github.com/Himmat1608</div>
          <div><span className="text-[#707070]">Location:</span> Kota, Rajasthan (Available for Remote)</div>
        </div>
      );
    } else if (lower === 'clear') {
      setLogs([]);
      setInput('');
      return;
    } else {
      responseNode = (
        <div className="text-[#A1A1A1] text-xs">
          Command not recognized: &apos;{trimmed}&apos;. Type <span className="text-[#F3F3F0] font-medium">&apos;help&apos;</span> for list of commands.
        </div>
      );
    }

    setLogs((prev) => [...prev, { id: newLogId, command: trimmed, output: responseNode }]);
    setInput('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            className={`relative w-full ${
              isFullscreen ? 'h-full max-w-none' : 'max-w-3xl h-[520px]'
            } bg-[#0B0B0B] border border-white/[0.12] rounded-[16px] shadow-2xl overflow-hidden flex flex-col font-mono`}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#111111] border-b border-white/[0.08] select-none">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-white/20 cursor-pointer hover:bg-white/40" onClick={onClose} />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20 cursor-pointer hover:bg-white/40" onClick={() => setInput('')} />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20 cursor-pointer hover:bg-white/40" onClick={() => setIsFullscreen(!isFullscreen)} />
                <div className="ml-3 flex items-center gap-2 text-xs text-[#707070]">
                  <TerminalIcon className="w-3.5 h-3.5 text-[#F3F3F0]" />
                  <span>himmat_cli.sh</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[#707070]">
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="p-1 hover:text-[#F3F3F0] transition-colors"
                >
                  {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                </button>
                <button onClick={onClose} className="p-1 hover:text-[#F3F3F0] transition-colors">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Scrollback */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs sm:text-sm">
              {logs.map((log) => (
                <div key={log.id} className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[#707070]">
                    <span className="text-[#2ED47A]">himmat@cli:~$</span>
                    <span className="text-[#F3F3F0] font-medium">{log.command}</span>
                  </div>
                  <div className="pl-4 text-[#A1A1A1]">{log.output}</div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input Prompt */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCommand(input);
              }}
              className="p-3 bg-[#111111] border-t border-white/[0.08] flex items-center gap-2"
            >
              <span className="text-[#2ED47A] text-xs sm:text-sm">himmat@cli:~$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type command ('help', 'robin', 'metrics', 'certs')..."
                className="flex-1 bg-transparent text-[#F3F3F0] font-mono text-xs sm:text-sm focus:outline-none placeholder-[#707070]"
                autoFocus
              />
              <button
                type="submit"
                className="p-1.5 rounded-[4px] bg-[#151515] text-[#A1A1A1] border border-white/[0.08] hover:text-[#F3F3F0] transition-colors"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
