import React, { useState, useEffect } from 'react';
import { Terminal, Command, Volume2, VolumeX, Menu, X, FileText } from 'lucide-react';
import { sounds } from '@/utils/sound';

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCommandPalette,
  onOpenTerminal,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(sounds.getMuted());
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const sectionIds = ['hero', 'projects', 'skills', 'journey', 'github', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleToggleSound = () => {
    const muted = sounds.toggleMute();
    setIsMuted(muted);
  };

  const navLinks = [
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Journey', href: '#journey', id: 'journey' },
    { name: 'GitHub', href: '#github', id: 'github' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 transition-all duration-200 pointer-events-none">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Brand Logo HS */}
        <a
          href="#hero"
          onClick={() => {
            sounds.playClick();
            setMobileMenuOpen(false);
          }}
          className="flex items-center gap-3 group"
          aria-label="Himmat Singh Homepage"
        >
          <div className="w-9 h-9 rounded-[8px] bg-[#111111] border border-white/[0.08] flex items-center justify-center group-hover:border-white/[0.2] transition-colors">
            <span className="font-mono text-xs font-semibold text-[#F3F3F0]">HS</span>
          </div>
          <div className="hidden sm:block">
            <div className="font-heading font-medium text-xs tracking-tight text-[#F3F3F0]">
              HIMMAT SINGH
            </div>
            <div className="font-mono text-[10px] text-[#707070]">AI &amp; Backend Engineer</div>
          </div>
        </a>

        {/* Floating Navigation (12px radius, #111111 surface, 1px border, Inter 15px Medium) */}
        <nav
          aria-label="Main Navigation"
          className={`hidden md:flex items-center gap-1 px-3 py-1.5 rounded-[12px] bg-[#111111] border border-white/[0.08] ${
            scrolled ? 'shadow-lg shadow-black/40' : ''
          }`}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => sounds.playClick()}
                className={`relative px-3.5 py-1.5 rounded-[6px] text-[15px] font-sans font-medium transition-colors ${
                  isActive
                    ? 'text-[#F3F3F0]'
                    : 'text-[#A1A1A1] hover:text-[#F3F3F0]'
                }`}
              >
                <span>{link.name}</span>
                {/* Active indicator: tiny subtle 3px dot, no bright green capsule */}
                {isActive && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#2ED47A]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action Bar */}
        <div className="flex items-center gap-2">
          {/* Mute Audio Button */}
          <button
            onClick={handleToggleSound}
            className="w-9 h-9 rounded-[8px] bg-[#111111] border border-white/[0.08] hover:border-white/[0.2] text-[#A1A1A1] hover:text-[#F3F3F0] flex items-center justify-center transition-colors"
            aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
            title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-[#707070]" /> : <Volume2 className="w-3.5 h-3.5 text-[#A1A1A1]" />}
          </button>

          {/* Command Palette Trigger */}
          <button
            onClick={() => {
              sounds.playClick();
              onOpenCommandPalette();
            }}
            className="hidden sm:flex items-center gap-1.5 h-9 px-2.5 rounded-[8px] bg-[#111111] border border-white/[0.08] hover:border-white/[0.2] text-xs font-mono text-[#A1A1A1] hover:text-[#F3F3F0] transition-colors"
            aria-label="Open Command Palette"
          >
            <Command className="w-3 h-3 text-[#707070]" />
            <span className="text-[11px]">⌘K</span>
          </button>

          {/* Terminal Trigger */}
          <button
            onClick={() => {
              sounds.playClick();
              onOpenTerminal();
            }}
            className="hidden sm:flex items-center gap-1.5 h-9 px-3 rounded-[8px] bg-[#151515] border border-white/[0.08] hover:border-white/[0.2] text-xs font-mono text-[#A1A1A1] hover:text-[#F3F3F0] transition-colors"
            aria-label="Launch CLI Terminal"
          >
            <Terminal className="w-3 h-3 text-[#2ED47A]" />
            <span className="text-[11px]">Terminal</span>
          </button>

          {/* Resume Button: 8px Radius, Inter 15px Medium */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sounds.playClick()}
            className="flex items-center gap-1.5 h-9 px-3.5 rounded-[8px] border border-white/[0.15] hover:border-white/[0.3] bg-transparent text-[#F3F3F0] font-sans font-medium text-[15px] transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-[#A1A1A1]" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              sounds.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden w-9 h-9 rounded-[8px] bg-[#111111] border border-white/[0.08] text-[#F3F3F0] flex items-center justify-center"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden pt-3 pointer-events-auto">
          <div className="p-3 rounded-[12px] bg-[#111111] border border-white/[0.08] space-y-1 font-mono text-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  sounds.playClick();
                  setMobileMenuOpen(false);
                }}
                className="block p-2 rounded-[6px] text-[#A1A1A1] hover:text-[#F3F3F0] hover:bg-[#151515] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
