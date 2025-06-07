
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900/50 border-t border-purple-500/20 py-8">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-4">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            Yusuf Topal
          </h3>
          <p className="text-gray-400">Fullstack Developer uit Amsterdam-Noord</p>
        </div>
        
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://gitlab.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            GitLab
          </a>
        </div>
        
        <div className="text-gray-500 text-sm">
          <p>&copy; 2024 Yusuf Topal. Alle rechten voorbehouden.</p>
          <p className="mt-1">Gebouwd met TypeScript, React en Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
