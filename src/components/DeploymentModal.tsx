import React, { useState } from 'react';
import { X, Server, Globe, Github, Terminal, Copy, Check, CheckCircle2 } from 'lucide-react';

interface DeploymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeploymentModal: React.FC<DeploymentModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'hostinger' | 'vercel'>('hostinger');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedCode(id);
      setTimeout(() => setCopiedCode(null), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="deploy-guide-title"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/70">
          <div className="flex items-center gap-2">
            <Server className="w-5 h-5 text-cyan-400" />
            <h3 id="deploy-guide-title" className="text-lg font-bold text-white tracking-tight">
              Deployment & Hosting Configuration
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="px-6 pt-4 border-b border-slate-800/80 bg-slate-950/40 flex items-center gap-4">
          <button
            onClick={() => setActiveTab('hostinger')}
            className={`pb-3 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === 'hostinger'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Github className="w-4 h-4" />
            <span>Hostinger + GitHub Connection</span>
          </button>

          <button
            onClick={() => setActiveTab('vercel')}
            className={`pb-3 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 transition-colors ${
              activeTab === 'vercel'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>Vercel Serverless Deployment</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="px-6 py-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-300">
          {activeTab === 'hostinger' ? (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="text-xs font-semibold text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Hostinger Node.js & GitHub Ready</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  The repository is fully configured with an Express entrypoint (<code className="text-cyan-300 font-mono">server.ts</code>),
                  a PM2 process manager configuration (<code className="text-cyan-300 font-mono">ecosystem.config.cjs</code>), and full-stack Vite production bundling.
                </p>
              </div>

              {/* Step 1 */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center justify-center text-xs font-mono">1</span>
                  <span>Push Code to GitHub Repository</span>
                </h4>
                <p className="text-xs text-slate-400">
                  Ensure all files (including <code className="text-slate-300 font-mono">package.json</code>, <code className="text-slate-300 font-mono">server.ts</code>, <code className="text-slate-300 font-mono">ecosystem.config.cjs</code>) are committed to your GitHub repository (e.g. <code className="text-slate-300 font-mono">github.com/amittamse/portfolio</code>).
                </p>
              </div>

              {/* Step 2 */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center justify-center text-xs font-mono">2</span>
                  <span>Connect GitHub in Hostinger hPanel</span>
                </h4>
                <ol className="list-decimal list-inside space-y-1.5 text-xs text-slate-400 pl-1">
                  <li>Log in to your <strong>Hostinger hPanel</strong> and navigate to <strong>Git</strong> or <strong>Node.js</strong> section.</li>
                  <li>In the <strong>Git Repository</strong> field, paste your GitHub repository URL: <code className="text-cyan-300 font-mono">https://github.com/amittamse/portfolio.git</code>.</li>
                  <li>Set the Branch to <code className="text-slate-200 font-mono">main</code>.</li>
                  <li>Enable <strong>Auto-Deployment / Webhook</strong> so Hostinger automatically pulls and redeploys when you push to GitHub.</li>
                </ol>
              </div>

              {/* Step 3 */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center justify-center text-xs font-mono">3</span>
                  <span>Configure Node.js Application Settings</span>
                </h4>
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs space-y-1.5">
                  <div><strong>Node.js version:</strong> <span className="text-cyan-300">20.x or 22.x</span></div>
                  <div><strong>Application Root:</strong> <span className="text-cyan-300">/home/u123456/domains/hireamittamse.com/public_html</span></div>
                  <div><strong>Application Startup file:</strong> <span className="text-cyan-300">server.ts</span> or <span className="text-cyan-300">ecosystem.config.cjs</span></div>
                  <div><strong>Application mode:</strong> <span className="text-cyan-300">Production</span></div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800 flex items-center justify-center text-xs font-mono">4</span>
                  <span>Build & Start Commands</span>
                </h4>
                <div className="relative p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-cyan-200">
                  <code>npm install &amp;&amp; npm run build &amp;&amp; pm2 start ecosystem.config.cjs</code>
                  <button
                    onClick={() => copyToClipboard('npm install && npm run build && pm2 start ecosystem.config.cjs', 'build')}
                    className="absolute right-3 top-2.5 p-1 text-slate-400 hover:text-white"
                  >
                    {copiedCode === 'build' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="text-xs font-semibold text-cyan-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Vercel Serverless Ready with vercel.json</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  The application includes a root <code className="text-cyan-300 font-mono">vercel.json</code> routing configuration and a dedicated <code className="text-cyan-300 font-mono">api/index.ts</code> serverless entry point for Express API routes.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white">Deploying to Vercel</h4>
                <ol className="list-decimal list-inside space-y-1.5 text-xs text-slate-400 pl-1">
                  <li>Push your repository to GitHub.</li>
                  <li>Go to <strong>Vercel Dashboard</strong> &rarr; <strong>New Project</strong> &rarr; Import your GitHub repo.</li>
                  <li>Framework Preset: <strong>Vite</strong>.</li>
                  <li>Root Directory: <code className="text-slate-300 font-mono">./</code>.</li>
                  <li>Build Command: <code className="text-slate-300 font-mono">npm run build</code>.</li>
                  <li>Output Directory: <code className="text-slate-300 font-mono">dist</code>.</li>
                </ol>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white">Environment Variables in Vercel</h4>
                <p className="text-xs text-slate-400">
                  Add the following environment variables in the Vercel Settings &rarr; Environment Variables:
                </p>
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs space-y-1 text-slate-300">
                  <div>SMTP_HOST = smtp.gmail.com</div>
                  <div>SMTP_PORT = 465</div>
                  <div>SMTP_SECURE = true</div>
                  <div>SMTP_USER = amitktamse@gmail.com</div>
                  <div>SMTP_PASS = [your-google-app-password]</div>
                  <div>CONTACT_RECEIVER_EMAIL = amitktamse@gmail.com</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-950/80 border-t border-slate-800 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
