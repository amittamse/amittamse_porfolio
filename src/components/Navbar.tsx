import React, { useState } from 'react';
import { Menu, X, Rocket, Terminal } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenDeployGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenDeployGuide,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects & Work' },
    { id: 'blog', label: 'Engineering Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('hero');
          }}
          className="text-lg font-bold tracking-tight text-white hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xs font-mono font-bold shadow-sm">
            AT
          </span>
          <span className="font-semibold text-slate-100">Amit Tamse</span>
        </a>

        {/* Zone 2: 4-5 Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 relative py-1 text-sm ${
                  isActive
                    ? 'text-cyan-400 font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action + Deployment Info trigger */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenDeployGuide}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 rounded-lg hover:border-slate-700 hover:text-white transition-colors whitespace-nowrap shrink-0"
            title="Hostinger & Vercel deployment guide"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Deploy Guide</span>
          </button>

          <button
            onClick={() => handleLinkClick('contact')}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm hover:shadow-cyan-500/20 transition-all whitespace-nowrap shrink-0"
          >
            <span>Get in Touch</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenDeployGuide}
            className="p-2 text-slate-400 hover:text-white"
            aria-label="Deployment guide"
          >
            <Rocket className="w-5 h-5 text-cyan-400" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-lg"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950 px-4 pt-3 pb-5 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-900 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenDeployGuide();
                setMobileMenuOpen(false);
              }}
              className="w-full text-center py-2 text-sm text-slate-300 bg-slate-900 border border-slate-800 rounded-lg font-medium"
            >
              Hostinger & Vercel Guide
            </button>
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full text-center py-2 text-sm text-slate-950 bg-cyan-400 font-semibold rounded-lg"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
