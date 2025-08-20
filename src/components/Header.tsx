import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60 bg-white/80 dark:bg-slate-900/70 border-b border-white/40 dark:border-slate-800/60 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link
            to="/"
            className="flex items-center space-x-3 text-slate-900 dark:text-slate-100 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
          >
            <div className="rounded-xl p-3 border border-slate-200/60 dark:border-slate-700/60 bg-white/70 dark:bg-slate-800/60">
              <svg
                className="w-8 h-8 text-brand-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-wide heading-gradient">
                BlogSphere
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Share Your Story
              </span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 ml-auto">
            <Link
              to="/"
              className="text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/posts"
              className="text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors font-medium"
            >
              All Posts
            </Link>
          </nav>
          <div className="flex items-center gap-2 md:gap-4">
            <div className="md:hidden">
              <button
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Open menu"
                onClick={() => setMenuOpen((open) => !open)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="md:hidden animate-fade-in">
            <nav className="flex flex-col gap-2 py-4 px-4 bg-white dark:bg-slate-900 rounded-xl shadow-lg mt-2">
              <Link
                to="/"
                className="text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/posts"
                className="text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors font-medium py-2"
                onClick={() => setMenuOpen(false)}
              >
                All Posts
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
