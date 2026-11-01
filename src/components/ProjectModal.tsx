import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Database } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-800 flex items-start justify-between gap-4 bg-slate-950/60">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span>{project.category}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">{project.period}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">{project.organization}</span>
            </div>
            <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="px-6 py-6 overflow-y-auto space-y-6 text-sm">
          {/* Key Metrics Banner */}
          <div className="grid grid-cols-3 gap-3 p-4 bg-slate-950/80 border border-slate-800 rounded-xl">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="text-center space-y-0.5">
                <div className="text-lg sm:text-xl font-bold font-mono text-cyan-400">{m.value}</div>
                <div className="text-[11px] text-slate-400 font-medium">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Business Summary */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Executive Context & Role
            </h4>
            <div className="text-xs text-slate-400 font-mono mb-1">
              Role: <span className="text-slate-200">{project.role}</span>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm">
              {project.summary}
            </p>
          </div>

          {/* Architecture Deep Dive */}
          <div className="space-y-2 p-4 bg-slate-950/60 border border-slate-800/80 rounded-xl">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              <span>Architectural Strategy & Design</span>
            </h4>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              {project.architectureOverview}
            </p>
          </div>

          {/* Key Measured Outcomes */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Measured Engineering Wins
            </h4>
            <ul className="space-y-2">
              {project.keyOutcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Stack List */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Technology Stack
            </h4>
            <div className="text-xs text-slate-300 flex flex-wrap gap-x-2 gap-y-1">
              {project.techStack.map((tech, idx) => (
                <React.Fragment key={idx}>
                  <span className="text-slate-200 font-mono">{tech}</span>
                  {idx < project.techStack.length - 1 && (
                    <span aria-hidden="true" className="text-slate-600">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}
            {project.externalLink && (
              <a
                href={project.externalLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Portfolio Details</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            Close Case Study
          </button>
        </div>
      </div>
    </div>
  );
};
