import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-[120px] lg:py-[160px] relative z-10 border-t border-white/[0.08] bg-[#0B0B0B]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12 space-y-12">
        
        {/* Editorial Statement */}
        <div className="space-y-6 max-w-[760px]">
          
          <div className="font-mono font-medium text-[13px] text-[#707070] uppercase tracking-wider">
            ENGINEERING PHILOSOPHY
          </div>

          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-heading font-semibold text-[#F3F3F0] tracking-[-0.03em] leading-tight mb-6">
            I optimize software for constraints.
          </h2>

          {/* Statement Columns (Offline, Lightweight, Practical) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-5 rounded-[12px] bg-[#111111] border border-white/[0.08] space-y-2">
              <div className="font-mono font-medium text-[13px] text-[#2ED47A]">01</div>
              <div className="font-heading font-semibold text-lg text-[#F3F3F0]">Offline</div>
              <p className="text-[14px] font-sans text-[#A1A1A1] leading-relaxed">
                Zero third-party cloud API dependencies for desktop controls. Execution runs locally on system hardware, guaranteeing absolute privacy.
              </p>
            </div>

            <div className="p-5 rounded-[12px] bg-[#111111] border border-white/[0.08] space-y-2">
              <div className="font-mono font-medium text-[13px] text-[#2ED47A]">02</div>
              <div className="font-heading font-semibold text-lg text-[#F3F3F0]">Lightweight</div>
              <p className="text-[14px] font-sans text-[#A1A1A1] leading-relaxed">
                180MB RAM allocation ceiling. Engineered to operate smoothly on 6GB RAM hardware without freezing background threads or stalling execution.
              </p>
            </div>

            <div className="p-5 rounded-[12px] bg-[#111111] border border-white/[0.08] space-y-2">
              <div className="font-mono font-medium text-[13px] text-[#2ED47A]">03</div>
              <div className="font-heading font-semibold text-lg text-[#F3F3F0]">Practical</div>
              <p className="text-[14px] font-sans text-[#A1A1A1] leading-relaxed">
                Deterministic 45ms system intent router bypassing expensive neural inference when native Win32 C-bindings execute faster.
              </p>
            </div>
          </div>

          {/* Supporting Paragraph (Inter 17-18px, Line Height 1.7, max-w-[640px], mb-4) */}
          <p className="text-[17px] sm:text-[18px] leading-[1.7] font-normal font-sans text-[#A1A1A1] max-w-[640px] pt-4 mb-4">
            Most AI projects today are simple wrappers around external cloud APIs with 2.5s+ latency. I focus on low-level systems engineering—optimizing Python runtimes, non-blocking I/O queues, composite database indexes, and serverless container deployments.
          </p>

        </div>

      </div>
    </section>
  );
};
