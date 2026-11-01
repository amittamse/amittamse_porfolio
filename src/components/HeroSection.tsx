import React, { useState } from 'react';
import { ArrowRight, Mail, Database, Cpu, Cloud, Layers, Activity, CheckCircle2 } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [activeSystemNode, setActiveSystemNode] = useState<number>(0);

  const systemNodes = [
    {
      id: 0,
      title: 'Salesforce & Agentforce',
      role: 'Autonomous Agent Orchestration & LWC',
      latency: '1.2s',
      status: 'Active · 99.99% SLA',
      icon: Cpu,
      color: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/20',
      description: 'LWC interfaces, Apex asynchronous batches, and Agentforce reasoning pipelines executing automated business workflows.',
    },
    {
      id: 1,
      title: 'Databricks Delta Lake',
      role: 'Petabyte Streaming & Telemetry Lakehouse',
      latency: '38min Batch',
      status: 'Ingesting 10M+ events/day',
      icon: Database,
      color: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/20',
      description: 'Bronze-Silver-Gold medallion architecture with PySpark streaming and Unity Catalog security governance.',
    },
    {
      id: 2,
      title: 'Dynamics 365 & Dataverse',
      role: 'Enterprise Operations & ERP Synchronization',
      latency: '< 4s Sync',
      status: 'Bidirectional CDC Validated',
      icon: Layers,
      color: 'text-blue-400 border-blue-500/30 bg-blue-950/20',
      description: 'C# .NET plugins, Dataverse event pipelines, and idempotent queues synchronizing accounts and billing states.',
    },
    {
      id: 3,
      title: 'Cloud DevOps & AWS S3',
      role: 'Multi-Region Infrastructure & Event Broker',
      latency: 'Zero Downtime',
      status: '14+ Deploys / Week',
      icon: Cloud,
      color: 'text-amber-400 border-amber-500/30 bg-amber-950/20',
      description: 'Decoupled event buffering, Terraform IaaC, automated canary rollouts, and OpenTelemetry instrumentation.',
    },
  ];

  return (
    <section id="hero" className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-900 overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-cyan-950/20 via-slate-900/10 to-transparent pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split-Screen Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Natural Editorial Kicker */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400 tracking-wide uppercase">
              <span className="text-cyan-400 font-semibold">Engineering Leadership</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Senior Computer Scientist at Adobe</span>
            </div>

            {/* Display Headline with balanced wrapping */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
              Architecting Resilient Enterprise Platforms, Cloud Lakehouses & Generative AI Systems
            </h1>

            {/* Lead Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              15+ years of engineering leadership guiding multidisciplinary software teams.
              Transforming complex multi-cloud CRM ecosystems, streaming high-throughput Databricks
              data pipelines, and productionizing Agentforce autonomous AI agents for global enterprise scale.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('projects')}
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm hover:shadow-cyan-500/20 transition-all cursor-pointer"
              >
                <span>View Enterprise Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-lg transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Amit</span>
              </button>

              <a
                href="https://hireamittamse.com/"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-slate-400 hover:text-slate-200 underline underline-offset-4 py-2 transition-colors ml-1"
              >
                hireamittamse.com ↗
              </a>
            </div>

            {/* Quiet Unboxed Metadata */}
            <div className="pt-4 flex flex-wrap items-center gap-3 text-xs text-slate-400 border-t border-slate-800/80">
              <span className="text-slate-300 font-medium">San Jose, California</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Adobe Sales & CS Platforms</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Available for Advisory & Speaking
              </span>
            </div>
          </div>

          {/* Right Column: Architectural Telemetry Visualizer */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-xl shadow-black/40 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 text-xs">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  <span className="font-semibold text-slate-200 uppercase tracking-wider">
                    Distributed Architecture Fabric
                  </span>
                </div>
                <span className="font-mono text-cyan-400 text-xs">SLA: 99.99%</span>
              </div>

              {/* Interactive Node Selector */}
              <div className="grid grid-cols-2 gap-2">
                {systemNodes.map((node) => {
                  const Icon = node.icon;
                  const isSelected = activeSystemNode === node.id;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setActiveSystemNode(node.id)}
                      className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-cyan-500/60 bg-slate-800/90 shadow-md ring-1 ring-cyan-500/30'
                          : 'border-slate-800/70 bg-slate-950/50 hover:bg-slate-800/40 text-slate-400'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`} />
                        <span className="font-mono text-[11px] text-slate-400">{node.latency}</span>
                      </div>
                      <div className={`text-xs font-semibold truncate ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                        {node.title}
                      </div>
                      <div className="text-[10px] text-slate-400 truncate mt-0.5">
                        {node.status}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Node Detail Card */}
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs space-y-2">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="font-medium text-cyan-300">
                    {systemNodes[activeSystemNode].role}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">
                    Operational
                  </span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {systemNodes[activeSystemNode].description}
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-slate-900 text-[11px] text-slate-400 font-mono">
                  <span>Throughput: Real-time event stream</span>
                  <span className="text-cyan-400">Audited Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Metric Strip Below Hero Split */}
        <div className="mt-16 pt-8 border-t border-slate-900 grid grid-cols-2 md:grid-cols-4 gap-6">
          {PROFILE_INFO.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-400 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
