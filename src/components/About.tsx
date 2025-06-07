import React from 'react';

const About: React.FC = () => {
  const skills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue'],
    backend: ['Java', 'Node.js', 'Express', 'Spring Boot'],
    database: ['MySQL', 'Database Design'],
    mobile: ['Kotlin', 'Jetpack Compose'],
    tools: ['Git', 'GitLab', 'OOP', 'TailwindCSS']
  };

  return (
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Over <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">mij</span>
            </h1>
            <p className="text-xl text-gray-400">Leer meer over mijn achtergrond en passie voor development</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-1 rounded-2xl">
                <div className="bg-slate-900 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Persoonlijke Info</h2>
                  <div className="space-y-4">
                    <div>
                      <span className="text-blue-400 font-medium">Naam:</span>
                      <span className="text-gray-300 ml-2">Yusuf Topal</span>
                    </div>
                    <div>
                      <span className="text-blue-400 font-medium">Leeftijd:</span>
                      <span className="text-gray-300 ml-2">19 jaar</span>
                    </div>
                    <div>
                      <span className="text-blue-400 font-medium">Locatie:</span>
                      <span className="text-gray-300 ml-2">Amsterdam-Noord</span>
                    </div>
                    <div>
                      <span className="text-blue-400 font-medium">Opleiding:</span>
                      <span className="text-gray-300 ml-2">HBO-ICT Software Engineering (HvA)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Mijn Verhaal</h2>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>
                  Als 19-jarige developer ben ik gepassioneerd over het creëren van innovatieve
                  digitale oplossingen. Momenteel studeer ik HBO-ICT Software Engineering aan
                  de Hogeschool van Amsterdam, waar ik mijn technische vaardigheden verder ontwikkel.
                </p>
                <p>
                  Mijn reis in de programmeerwereld begon met nieuwsgierigheid naar hoe websites
                  en applicaties werken. Sindsdien heb ik mezelf ontwikkeld tot een fullstack
                  developer die zowel frontend als backend technologieën beheerst.
                </p>
                <p>
                  Ik hou van uitdagingen en het oplossen van complexe problemen door middel van
                  code. Elke dag leer ik iets nieuws en streef ik ernaar om betere, efficiëntere
                  oplossingen te bouwen.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-slate-800/50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Technische Vaardigheden</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category} className="bg-slate-900/50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-400 mb-4 capitalize">
                      {category === 'frontend' ? 'Frontend' :
                          category === 'backend' ? 'Backend' :
                              category === 'database' ? 'Database' :
                                  category === 'mobile' ? 'Mobile' : 'Tools'}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                          <span
                              key={skill}
                              className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30"
                          >
                      {skill}
                    </span>
                      ))}
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default About;