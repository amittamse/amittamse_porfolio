import React, { useState } from 'react';
import { Search, Clock, Calendar, ArrowUpRight, BookOpen } from 'lucide-react';
import { BlogPost } from '../types/portfolio';
import { BLOG_POSTS } from '../data/portfolioData';

interface BlogSectionProps {
  onSelectArticle: (article: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectArticle }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'System Architecture',
    'Data Engineering',
    'Generative AI',
    'Engineering Leadership',
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blog" className="py-16 md:py-24 border-b border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
              <span>Articles & Insights</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Engineering Thought Leadership & Technical Monographs
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              In-depth articles covering multi-cloud CRM architecture, Databricks streaming patterns, agentic AI guardrails, and engineering management.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles & topics..."
              className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>
        </div>

        {/* Filter Controls (Segmented Tabs) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl self-start w-fit">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
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

        {/* Articles Grid */}
        {filteredPosts.length === 0 ? (
          <div className="py-12 text-center space-y-3 bg-slate-900/40 rounded-2xl border border-slate-800">
            <BookOpen className="w-8 h-8 text-slate-500 mx-auto" />
            <h3 className="text-base font-semibold text-white">No articles match your query</h3>
            <p className="text-xs text-slate-400">
              Try adjusting your search terms or clearing the active category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-3 py-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 underline"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => onSelectArticle(post)}
                className="group p-6 sm:p-7 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-slate-700/80 transition-all flex flex-col justify-between space-y-5 cursor-pointer shadow-sm hover:shadow-lg hover:shadow-cyan-950/20"
              >
                <div className="space-y-3">
                  {/* Zero-Pill Metadata */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-mono">
                    <span className="text-cyan-400 font-medium">{post.category}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      {post.publishedDate}
                    </span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <Clock className="w-3 h-3 text-slate-500" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug tracking-tight">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400 group-hover:text-slate-200 transition-colors">
                    Read Full Article
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-800 group-hover:bg-cyan-500/20 text-slate-400 group-hover:text-cyan-400 flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
