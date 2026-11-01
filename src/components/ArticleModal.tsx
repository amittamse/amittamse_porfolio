import React, { useEffect } from 'react';
import { X, Clock, Calendar, Bookmark, Share2, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { BlogPost } from '../types/portfolio';

interface ArticleModalProps {
  article: BlogPost | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="article-title"
      >
        {/* Top Control Bar */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between gap-4 bg-slate-950/70">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Engineering Blog</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? 'Link Copied' : 'Share'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Article Body */}
        <div className="px-6 sm:px-10 py-8 overflow-y-auto space-y-8 max-w-3xl mx-auto w-full">
          {/* Article Header */}
          <div className="space-y-4 border-b border-slate-800 pb-6">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-mono">
              <span className="text-cyan-400 font-medium">{article.category}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1 text-slate-300">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                {article.publishedDate}
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                {article.readTime}
              </span>
            </div>

            <h1 id="article-title" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {article.title}
            </h1>

            <p className="text-base text-slate-300 leading-relaxed font-normal">
              {article.excerpt}
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs text-slate-400">
              <span className="font-semibold text-slate-200">Written by Amit Tamse</span>
              <span>·</span>
              <span>Senior Computer Scientist at Adobe</span>
            </div>
          </div>

          {/* Key Takeaways Card */}
          <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <Bookmark className="w-4 h-4" />
              <span>Executive Architectural Takeaways</span>
            </div>
            <ul className="space-y-2">
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Sections */}
          <div className="space-y-8 text-slate-300 leading-relaxed text-sm sm:text-base">
            {article.content.map((sec, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-xl font-bold text-white tracking-tight">
                  {sec.sectionHeading}
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  {sec.text}
                </p>

                {sec.codeSnippet && (
                  <div className="space-y-2 my-4">
                    {sec.codeSnippet.caption && (
                      <div className="text-xs font-mono text-cyan-400">
                        {sec.codeSnippet.caption}
                      </div>
                    )}
                    <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm font-mono overflow-x-auto text-cyan-200 leading-relaxed shadow-inner">
                      <code>{sec.codeSnippet.code}</code>
                    </pre>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Article Footer Note */}
          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              <span>Have thoughts or questions on this architecture? Reach out via the </span>
              <span className="text-cyan-400">contact form</span>.
            </div>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shrink-0"
            >
              Done Reading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
