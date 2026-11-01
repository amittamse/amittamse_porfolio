import React from 'react';
import { ExternalLink, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenDeployGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenDeployGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-sm font-bold text-white tracking-tight">
              Amit Tamse
            </div>
            <p className="text-slate-400 text-xs">
              Senior Engineering Leader & Computer Scientist at Adobe.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400">
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className="hover:text-white transition-colors"
            >
              Projects & Case Studies
            </button>
            <button
              onClick={() => onNavigate('blog')}
              className="hover:text-white transition-colors"
            >
              Engineering Blog
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-white transition-colors"
            >
              Contact
            </button>
            <button
              onClick={onOpenDeployGuide}
              className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
            >
              Hostinger & Vercel Guide
            </button>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/amittamse"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/amittamse"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://hireamittamse.com/"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="Original Portfolio"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Amit Tamse. All rights reserved. Built with Node.js, Express, Nodemailer, and React.
          </div>
          <div className="flex items-center gap-4">
            <span>Enterprise Systems Architecture</span>
            <span>·</span>
            <span>hireamittamse.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
