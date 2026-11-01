import React, { useState } from 'react';
import { Layers, ArrowUpRight, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { Project } from '../types/portfolio';
import { PROJECTS } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'CRM Architecture',
    'Data Lakehouse',
    'Enterprise AI',
    'Cloud & DevOps',
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header and Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
              <span>Work & Case Studies</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Enterprise Systems & Platform Architectures
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Selected production systems highlighting large-scale data throughput, cross-cloud CRM synchronization, and autonomous AI automation.
            </p>
          </div>

          {/* Interactive Filter Controls: Allowed button tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-auto">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-6 sm:p-8 transition-all flex flex-col justify-between space-y-6 shadow-sm hover:shadow-lg hover:shadow-cyan-950/20"
            >
              <div className="space-y-4">
                {/* Zero-Pill Metadata */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-mono">
                  <span className="text-cyan-400 font-medium">{project.category}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{project.organization}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{project.period}</span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.summary}
                </p>

                {/* Key Metrics Highlight Strip */}
                <div className="grid grid-cols-3 gap-2 p-3 bg-slate-950/70 border border-slate-800/80 rounded-xl">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-base sm:text-lg font-bold font-mono text-cyan-400">{m.value}</div>
                      <div className="text-[10px] text-slate-400 font-medium truncate">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack - Unboxed Text */}
                <div className="space-y-1.5 pt-2">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Core Technologies
                  </div>
                  <div className="text-xs text-slate-300 flex flex-wrap gap-x-2 gap-y-1">
                    {project.techStack.map((tech, idx) => (
                      <React.Fragment key={idx}>
                        <span className="text-slate-300 font-mono">{tech}</span>
                        {idx < project.techStack.length - 1 && (
                          <span aria-hidden="true" className="text-slate-600">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Role: <span className="text-slate-200">{project.role}</span>
                </span>
                <button
                  onClick={() => onSelectProject(project)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all cursor-pointer"
                >
                  <span>Explore Case Study</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
