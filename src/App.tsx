import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { CommandPalette } from './components/CommandPalette';
import { TerminalModal } from './components/TerminalModal';
import { HeroSection } from './sections/HeroSection';
import { RealProofSection } from './sections/RealProofSection';
import { RobinExperienceSection } from './sections/RobinExperienceSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { JourneySection } from './sections/JourneySection';
import { CertificationsSection } from './sections/CertificationsSection';
import { GitHubSection } from './sections/GitHubSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Initialize Smooth Lenis Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F3F3F0] selection:bg-[#2ED47A]/20 selection:text-[#F3F3F0] font-sans relative overflow-x-hidden">
      
      {/* Background Canvas Effect */}
      <BackgroundCanvas />

      {/* Custom Fluid Cursor */}
      <CustomCursor />

      {/* Header Bar */}
      <Navbar
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Global Modals */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      {/* Main Content Flow Following Production Editorial Rhythm */}
      <main className="relative z-10">
        {/* 1. Split-Screen Hero with Engineering Snapshot */}
        <HeroSection />

        {/* 2. Real Proof Section (Verified Evidence & Tech Strip) - 140px spacing */}
        <RealProofSection />

        {/* 3. ROBIN Flagship Case Study & Evidence Gallery - 180px pacing */}
        <RobinExperienceSection />

        {/* 4. Other Projects (SGPA Calculator & OrbitDesk In Progress) */}
        <ProjectsSection />

        {/* 5. Editorial Philosophy (Offline -> Lightweight -> Practical) */}
        <AboutSection />

        {/* 6. Tech Stack Orbit - 120px pacing */}
        <SkillsSection />

        {/* 7. Journey & Education (Poornima University) - 160px pacing */}
        <JourneySection />

        {/* 8. Certifications (OCI & GCP) */}
        <CertificationsSection />

        {/* 9. GitHub Activity */}
        <GitHubSection />

        {/* 10. Contact Section - 140px pacing */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
