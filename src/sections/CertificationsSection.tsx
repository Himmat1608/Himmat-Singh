import React from 'react';
import { ExternalLink } from 'lucide-react';
import { sounds } from '@/utils/sound';

interface CertCard {
  id: string;
  title: string;
  issuer: 'Oracle Cloud' | 'Google Cloud';
  issueDate: string;
  verificationUrl: string;
  skills: string;
  badgeNumber: string;
}

export const CertificationsSection: React.FC = () => {
  const certifications: CertCard[] = [
    {
      id: 'oci-genai',
      title: 'Oracle Cloud Infrastructure — Generative AI Professional',
      issuer: 'Oracle Cloud',
      issueDate: '2025',
      verificationUrl: 'https://www.credly.com/users/himmat-singh.94c1a0fd/badges/credly',
      skills: 'LLM Fine-tuning, Prompt Engineering, RAG Pipelines, OCI Cluster Deployment',
      badgeNumber: 'OCI-GENAI-2025',
    },
    {
      id: 'gcp-cloud-run',
      title: 'Google Cloud — Cloud Run Serverless Deployments',
      issuer: 'Google Cloud',
      issueDate: '2025',
      verificationUrl: 'https://www.credly.com/users/himmat-singh.94c1a0fd/badges/credly',
      skills: 'Serverless Container Applications, Auto-Scaling Deployments, Cloud Infrastructure',
      badgeNumber: 'GCP-RUN-2025',
    },
    {
      id: 'gcp-dataplex',
      title: 'Google Cloud — Dataplex Data Governance',
      issuer: 'Google Cloud',
      issueDate: '2025',
      verificationUrl: 'https://www.credly.com/users/himmat-singh.94c1a0fd/badges/credly',
      skills: 'Data Cataloging, Metadata Governance, Distributed Data Lake Management',
      badgeNumber: 'GCP-DATA-2025',
    },
    {
      id: 'gcp-vertex-ai',
      title: 'Google Cloud — Vertex AI Prompt Design',
      issuer: 'Google Cloud',
      issueDate: '2025',
      verificationUrl: 'https://www.credly.com/users/himmat-singh.94c1a0fd/badges/credly',
      skills: 'Vertex AI Studio, Multimodal Prompt Tuning, Few-Shot Engineering Strategies',
      badgeNumber: 'GCP-VTX-2025',
    },
  ];

  return (
    <section id="certifications" className="py-[120px] lg:py-[160px] relative z-10 border-t border-white/[0.08] bg-[#0B0B0B]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-12 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.08] pb-8 mb-6">
          <div className="space-y-2 max-w-[640px]">
            <div className="font-mono font-medium text-[13px] text-[#707070] uppercase tracking-wider">
              CREDENTIALS &amp; VALIDATION
            </div>
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-heading font-semibold tracking-[-0.03em] leading-tight text-[#F3F3F0]">
              Cloud &amp; AI Certifications
            </h2>
            <p className="text-[17px] sm:text-[18px] leading-[1.7] font-sans text-[#A1A1A1]">
              Official industry certifications and skill badges issued by Oracle Cloud Infrastructure and Google Cloud.
            </p>
          </div>

          <a
            href="https://www.credly.com/users/himmat-singh.94c1a0fd/badges/credly"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sounds.playClick()}
            className="btn-secondary h-10 px-3.5 text-[15px] shrink-0"
          >
            <span>Verify Credly Profile</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#707070]" />
          </a>
        </div>

        {/* Certification Cards Grid (No Neon, 12px radius, subtle hover) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-5 rounded-[12px] bg-[#111111] border border-white/[0.08] hover:border-white/[0.18] transition-colors flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-[#707070]">
                  <span>{cert.issuer}</span>
                  <span>{cert.issueDate}</span>
                </div>

                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-[#707070] uppercase">
                    {cert.badgeNumber}
                  </div>
                  <h3 className="font-heading font-medium text-base text-[#F3F3F0] leading-snug">
                    {cert.title}
                  </h3>
                </div>

                <p className="text-xs font-sans text-[#A1A1A1] leading-relaxed line-clamp-3">
                  {cert.skills}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06]">
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sounds.playClick()}
                  className="inline-flex items-center gap-1.5 text-xs font-sans text-[#F3F3F0] hover:text-[#2ED47A] transition-colors"
                >
                  <span>Verify Record</span>
                  <ExternalLink className="w-3 h-3 text-[#707070]" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
