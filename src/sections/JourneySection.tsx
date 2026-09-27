import React from 'react';

export const JourneySection: React.FC = () => {
  const education = {
    institution: 'Poornima University',
    degree: 'B.Tech Computer Science & Engineering',
    period: '2024 – 2028',
    location: 'Kota, Rajasthan',
    coursework: [
      'Data Structures & Algorithms',
      'OOP',
      'Database Management',
      'Computer Networks',
      'Cloud Computing',
    ],
  };

  const milestones = [
    {
      year: '2024 – Present',
      title: 'Architect of ROBIN AI Assistant',
      detail: 'Built an offline desktop voice assistant featuring a 45ms semantic intent router operating within a 180MB RAM cap on 6GB RAM hardware.',
      tag: 'Flagship Project',
    },
    {
      year: '2025',
      title: 'Oracle Cloud & Google Cloud Certified',
      detail: 'Completed OCI Generative AI Professional and Google Cloud skill badges in Cloud Run, Dataplex, & Vertex AI Studio.',
      tag: 'Certifications',
    },
    {
      year: 'Active Research',
      title: 'LangGraph & Local Vector RAG Systems',
      detail: 'Researching stateful multi-agent customer support graphs (OrbitDesk) with local FAISS vector search over markdown documentation.',
      tag: 'Current Focus',
    },
  ];

  return (
    <section id="journey" className="py-[120px] lg:py-[160px] relative z-10 border-t border-white/[0.08] bg-[#0B0B0B]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12 space-y-12">
        
        {/* Section Header */}
        <div className="space-y-2 border-b border-white/[0.08] pb-8 mb-6 max-w-[640px]">
          <div className="font-mono font-medium text-[13px] text-[#707070] uppercase tracking-wider">
            JOURNEY &amp; ACADEMICS
          </div>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-heading font-semibold tracking-[-0.03em] leading-tight text-[#F3F3F0]">
            Education &amp; Engineering Track Record
          </h2>
        </div>

        {/* Clean Timeline Grid (No over-animation, calm presentation) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Education (Poornima University) */}
          <div className="lg:col-span-6 p-6 sm:p-7 rounded-[16px] bg-[#111111] border border-white/[0.08] space-y-5">
            <div className="flex items-center justify-between">
              <span className="font-mono font-medium text-[13px] text-[#2ED47A]">{education.period}</span>
              <span className="font-mono font-medium text-[13px] text-[#707070]">{education.location}</span>
            </div>

            <div className="space-y-1.5">
              <h3 className="font-heading font-semibold text-[22px] text-[#F3F3F0]">
                {education.institution}
              </h3>
              <p className="text-[15px] font-sans text-[#A1A1A1]">
                {education.degree}
              </p>
            </div>

            {/* Coursework */}
            <div className="space-y-2.5 pt-3 border-t border-white/[0.06]">
              <div className="font-mono font-medium text-[13px] text-[#707070] uppercase">
                Relevant Coursework:
              </div>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-2.5 py-1 rounded-[6px] bg-[#151515] border border-white/[0.06] font-mono font-medium text-[13px] text-[#A1A1A1]"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Milestones */}
          <div className="lg:col-span-6 space-y-4">
            {milestones.map((m) => (
              <div
                key={m.title}
                className="p-5 rounded-[12px] bg-[#111111] border border-white/[0.08] space-y-2"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#A1A1A1] font-medium">{m.year}</span>
                  <span className="text-[#707070] uppercase text-[10px]">{m.tag}</span>
                </div>

                <div className="font-heading font-medium text-base text-[#F3F3F0]">
                  {m.title}
                </div>

                <p className="text-xs font-sans text-[#A1A1A1] leading-relaxed">
                  {m.detail}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
