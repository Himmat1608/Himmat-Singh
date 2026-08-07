import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

interface CertificationItem {
  id: string;
  title: string;
  issuer: 'Oracle Cloud' | 'Google Cloud';
  issueDate: string;
  skillsCovered: string;
  verificationUrl: string;
  badgeLogo: string;
  isPublicCheckRequired?: boolean;
}

export const CertificationsSection: React.FC = () => {
  const certifications: CertificationItem[] = [
    {
      id: 'oci-genai-prof',
      title: 'Oracle Cloud Infrastructure (OCI) — Generative AI Professional',
      issuer: 'Oracle Cloud',
      issueDate: '2025',
      skillsCovered: 'Completed hands-on labs in LLM fundamentals, prompt engineering, RAG, and generative AI deployment.',
      // TODO: HIMMAT_FILL — paste individual OCI Generative AI Professional Credly badge link
      verificationUrl: 'https://www.credly.com/users/himmat-singh.94c1a0fd/badges/credly',
      badgeLogo: 'https://images.credly.com/images/40960d70-349f-4318-ae22-1d5d1c4c8106/image.png',
      isPublicCheckRequired: true,
    },
    {
      id: 'gcp-cloud-run',
      title: 'Google Cloud — Cloud Run Skill Badge',
      issuer: 'Google Cloud',
      issueDate: '2025',
      skillsCovered: 'Deployed auto-scaling serverless container applications on Google Cloud Run.',
      // TODO: HIMMAT_FILL — paste individual Cloud Run Credly badge link
      verificationUrl: 'https://www.credly.com/users/himmat-singh.94c1a0fd/badges/credly',
      badgeLogo: 'https://images.credly.com/images/be009260-84a1-43af-8d26-f76c3e9a7e04/image.png',
      isPublicCheckRequired: true,
    },
    {
      id: 'gcp-dataplex',
      title: 'Google Cloud — Dataplex Skill Badge',
      issuer: 'Google Cloud',
      issueDate: '2025',
      skillsCovered: 'Data cataloging, governance, and metadata management on Google Cloud Dataplex.',
      // TODO: HIMMAT_FILL — paste individual Dataplex Credly badge link
      verificationUrl: 'https://www.credly.com/users/himmat-singh.94c1a0fd/badges/credly',
      badgeLogo: 'https://images.credly.com/images/c0d753c1-b0db-4e14-aa25-e510842db13e/image.png',
      isPublicCheckRequired: true,
    },
    {
      id: 'gcp-vertex-prompt',
      title: 'Google Cloud — Vertex AI Prompt Design Skill Badge',
      issuer: 'Google Cloud',
      issueDate: '2025',
      skillsCovered: 'LLM prompt engineering strategies, zero-shot/few-shot tuning, and Vertex AI multimodal workflows.',
      // TODO: HIMMAT_FILL — paste individual Vertex AI Prompt Design Credly badge link
      verificationUrl: 'https://www.credly.com/users/himmat-singh.94c1a0fd/badges/credly',
      badgeLogo: 'https://images.credly.com/images/2b7e5104-e570-49c0-827d-08b5e28ff798/image.png',
      isPublicCheckRequired: true,
    },
  ];

  return (
    <section id="certifications" className="py-20 border-t border-zinc-800/80 bg-zinc-950/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
            <span className="text-zinc-600">//</span> verified credentials
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-zinc-100 flex items-center gap-2">
            <span className="text-emerald-400">&gt;</span> industry_certifications
          </h2>
          <p className="text-sm text-zinc-400 font-sans mt-2">
            Verifiable badges issued by Oracle Cloud Infrastructure &amp; Google Cloud for Generative AI and Cloud Engineering.
          </p>
        </div>

        {/* Public Credly Notice Alert */}
        <div className="mb-8 p-4 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-start gap-3 font-mono text-xs text-zinc-300">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="text-emerald-400 font-bold">Verifiable Credly Credentials</p>
            <p className="text-zinc-400 font-sans text-xs">
              Every badge below links directly to live Credly verification. 
              <span className="text-amber-400 font-mono"> Note for Himmat:</span> Ensure all 4 badges are set to &quot;Public&quot; in Credly settings so recruiters can verify credentials.
            </p>
          </div>
        </div>

        {/* Badges Grid (4 columns desktop, 2 tablet, 1 mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <Card
              key={cert.id}
              className="border-zinc-800 bg-zinc-950/90 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300 flex flex-col justify-between group"
            >
              <CardHeader className="pb-3 text-center">
                {/* Badge Image / Icon Wrapper inside Dark Container */}
                <div className="mx-auto mb-3 w-20 h-20 rounded-xl bg-zinc-900 border border-zinc-800 p-2.5 flex items-center justify-center group-hover:border-emerald-500/40 transition-colors">
                  <Award className="w-10 h-10 text-emerald-400 group-hover:scale-110 transition-transform duration-200" />
                </div>
                
                <div className="flex justify-center mb-2">
                  <Badge variant="emerald" className="text-[10px]">
                    {cert.issuer} • {cert.issueDate}
                  </Badge>
                </div>

                <CardTitle className="text-sm font-mono text-zinc-100 font-bold leading-snug group-hover:text-emerald-400 transition-colors min-h-[2.5rem] flex items-center justify-center">
                  {cert.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0 pb-4 text-center font-sans text-xs text-zinc-400 flex-1 flex flex-col justify-between">
                <p className="line-clamp-3 leading-relaxed">
                  {cert.skillsCovered}
                </p>

                {/* TODO Notice */}
                <div className="mt-3 pt-2 border-t border-zinc-900 text-[10px] font-mono text-zinc-500">
                  <span>// TODO: HIMMAT_FILL (Credly share URL)</span>
                </div>
              </CardContent>

              <CardFooter className="pt-3 justify-center border-t border-zinc-800/80">
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="terminal" size="sm" className="w-full text-xs justify-center">
                    Verify on Credly
                    <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Credly Profile Direct CTA */}
        <div className="mt-8 text-center">
          <a
            href="https://www.credly.com/users/himmat-singh.94c1a0fd/badges/credly"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            <span>View complete Credly Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
