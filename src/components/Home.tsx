
import React, { useState, useEffect } from 'react';

interface HomeProps {
  onNavigate: (page: 'home' | 'about' | 'projects' | 'contact') => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Fullstack Developer';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;
      if (index >= fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Hi, ik ben{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Yusuf Topal
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            {displayText}
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            19-jarige developer uit Amsterdam-Noord, gepassioneerd over het bouwen van 
            moderne web applicaties met cutting-edge technologieën zoals TypeScript, 
            Java, Node.js en Vue.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => onNavigate('projects')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            Bekijk mijn projecten
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Neem contact op
          </button>
        </div>

        {/* Tech Stack Icons */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-2xl mx-auto">
          {[
            { name: 'TypeScript', icon: '🚀' },
            { name: 'Java', icon: '☕' },
            { name: 'Node.js', icon: '🟢' },
            { name: 'Vue', icon: '💚' },
            { name: 'MySQL', icon: '🗄️' },
            { name: 'Spring Boot', icon: '🍃' },
          ].map((tech) => (
            <div
              key={tech.name}
              className="bg-slate-800/50 rounded-lg p-4 text-center hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-2xl mb-2">{tech.icon}</div>
              <div className="text-sm text-gray-400">{tech.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
