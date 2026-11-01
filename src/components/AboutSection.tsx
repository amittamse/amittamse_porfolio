import React from 'react';
import { Award, Briefcase, Sparkles, Database, ShieldCheck, ExternalLink } from 'lucide-react';
import { PROFILE_INFO, CERTIFICATIONS } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const skillsMatrix = [
    {
      category: 'CRM Platforms & Architecture',
      skills: ['Salesforce (Apex, LWC, Aura, Flow Builder)', 'Microsoft Dynamics 365 (C# .NET, Dataverse, Plugins)', 'Gainsight NXT', 'Sales/Service/Health Cloud'],
    },
    {
      category: 'Data Engineering & Analytics',
      skills: ['Azure Databricks', 'PySpark & Structured Streaming', 'Delta Lake Medallion', 'Unity Catalog', 'AWS S3', 'SQL & Lakehouse Modeling'],
    },
    {
      category: 'AI & Machine Learning',
      skills: ['Salesforce Agentforce', 'Retrieval-Augmented Generation (RAG)', 'Tool-Calling Orchestration', 'Generative AI Guardrails', 'Responsible AI Practices'],
    },
    {
      category: 'Languages & DevOps',
      skills: ['Python', 'TypeScript & Node.js', 'C# .NET', 'Java', 'Docker', 'Azure DevOps CI/CD', 'REST & SOAP APIs', 'OpenTelemetry'],
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 border-b border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            <span>Introduction & Leadership</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Engineering Leadership Grounded in 15+ Years of Distributed Systems Architecture
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            At Adobe, I lead engineering initiatives that unite disparate enterprise systems into
            reliable, real-time operating platforms. My focus is at the intersection of CRM scale,
            modern data lakehouses, and production-ready artificial intelligence.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROFILE_INFO.corePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center text-cyan-400 font-mono text-sm font-bold">
                0{idx + 1}
              </div>
              <h3 className="text-base font-semibold text-white">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Two-Column Deep Dive: Experience Story & Technical Skill Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Career Milestone Narrative */}
          <div className="lg:col-span-6 space-y-6 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <Briefcase className="w-4 h-4 text-cyan-400" />
              <span>Career Milestones & Philosophy</span>
            </div>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
              <p>
                Throughout my 15+ year software journey, I have managed engineering teams responsible for
                scaling sales operations and customer success infrastructure across global enterprise domains.
                My architectural philosophy centers on three immutable axioms:
              </p>
              <ul className="space-y-2 list-disc list-inside text-slate-300 pl-1 text-xs sm:text-sm">
                <li><strong className="text-white">Idempotency First:</strong> Never design point-to-point connections where an asynchronous decoupled queue can prevent cascaded failures.</li>
                <li><strong className="text-white">Data as a Product:</strong> CRM state and analytical lakehouses must speak the same schema language to empower predictive decision systems.</li>
                <li><strong className="text-white">People Over Process:</strong> Exceptional systems are built by empowered, psychologically safe engineers who own business outcomes, not just tickets.</li>
              </ul>
              <p className="text-slate-400 pt-2 border-t border-slate-800/60">
                Beyond day-to-day architecture, I actively mentor junior and mid-level engineers, contribute
                to open-source tooling, and write about CRM orchestration and Databricks scaling.
              </p>
            </div>
          </div>

          {/* Right Column: Skills Matrix */}
          <div className="lg:col-span-6 space-y-4 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-2 text-sm font-semibold text-white mb-2">
              <Database className="w-4 h-4 text-cyan-400" />
              <span>Core Technical Stack & Competencies</span>
            </div>

            <div className="space-y-4">
              {skillsMatrix.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                    {item.category}
                  </div>
                  {/* Zero-Pill Discipline: unboxed clean text with typographic separators */}
                  <div className="text-xs text-slate-300 flex flex-wrap gap-x-2 gap-y-1">
                    {item.skills.map((skill, sIdx) => (
                      <React.Fragment key={sIdx}>
                        <span className="hover:text-white transition-colors">{skill}</span>
                        {sIdx < item.skills.length - 1 && (
                          <span aria-hidden="true" className="text-slate-600">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Professional Industry Certifications</span>
            </div>
            <a
              href="https://hireamittamse.com/"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-slate-400 hover:text-cyan-400 flex items-center gap-1 transition-colors"
            >
              <span>Verify on hireamittamse.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between space-y-3"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>{cert.issuer}</span>
                    <span className="text-emerald-400">{cert.issuedYear}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white leading-snug">
                    {cert.title}
                  </h4>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Credential verified and active</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
