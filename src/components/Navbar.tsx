import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, FileText, Github } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '> about', href: '#about' },
    { name: '> skills', href: '#skills' },
    { name: '> projects', href: '#projects' },
    { name: '> certifications', href: '#certifications' },
    { name: '> contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="font-mono text-sm font-bold text-zinc-100 flex items-center gap-2 group hover:text-emerald-400 transition-colors"
        >
          <span className="p-1 rounded bg-zinc-900 border border-zinc-800 group-hover:border-emerald-500/50 text-emerald-400">
            <Terminal className="w-4 h-4" />
          </span>
          <span className="text-emerald-400">&gt;</span> Himmat Singh
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 font-mono text-xs text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-emerald-400 transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href="https://github.com/Himmat1608"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <Button variant="ghost" size="sm" className="px-2">
              <Github className="w-4 h-4 text-zinc-400 hover:text-emerald-400" />
            </Button>
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="terminal" size="sm">
              <FileText className="w-3.5 h-3.5 mr-1" />
              Resume
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-zinc-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-emerald-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 px-4 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3 font-mono text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-zinc-300 hover:text-emerald-400 py-1.5 transition-colors border-b border-zinc-900"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col space-y-2">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button variant="terminal" size="md" className="w-full justify-center">
                <FileText className="w-4 h-4 mr-2" />
                Download Resume (PDF)
              </Button>
            </a>
            <a href="https://github.com/Himmat1608" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button variant="secondary" size="md" className="w-full justify-center">
                <Github className="w-4 h-4 mr-2" />
                GitHub Profile
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
