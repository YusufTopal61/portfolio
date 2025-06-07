import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1000);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2.9-.3 2-.4 3-.4s2.1.1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6C20.6 21.8 24 17.3 24 12c0-6.6-5.4-12-12-12z"/>
          </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8.5 8h3.5v2.2h.05c.5-.9 1.7-2.2 3.45-2.2 3.7 0 4.5 2.4 4.5 5.6V24h-4v-7c0-1.7 0-3.9-2.4-3.9s-2.8 1.9-2.8 3.8V24h-4V8z"/>
          </svg>
      )
    }
  ];

  return (
      <div className="min-h-screen py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Neem <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Contact</span> op
            </h1>
            <p className="text-xl text-gray-400">Heb je een vraag of wil je samenwerken? Ik hoor graag van je!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulier */}
            <div className="bg-slate-800/50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Stuur een bericht</h2>

              {submitStatus === 'success' && (
                  <div className="bg-green-500/20 border border-green-500/30 text-green-300 p-4 rounded-lg mb-6">
                    Bedankt voor je bericht! Ik neem zo snel mogelijk contact met je op.
                  </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Je naam"
                    className="w-full bg-slate-900/50 border border-slate-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="je@email.com"
                    className="w-full bg-slate-900/50 border border-slate-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500"
                />
                <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Je bericht..."
                    className="w-full bg-slate-900/50 border border-slate-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 resize-none"
                />
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-lg font-semibold transition-transform duration-300 hover:scale-105"
                >
                  {isSubmitting ? 'Verzenden...' : 'Verstuur bericht'}
                </button>
              </form>
            </div>

            {/* Contactgegevens */}
            <div className="space-y-8">
              <div className="bg-slate-800/50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Laten we verbinden</h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Ik sta altijd open voor nieuwe projecten of samenwerkingen. Neem gerust contact op!
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">📍</div>
                    <span>Amsterdam-Noord, Nederland</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">🎓</div>
                    <span>HBO-ICT Software Engineering (HvA)</span>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="bg-slate-800/50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Volg me online</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                      <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 hover:text-white rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-110"
                      >
                        {social.icon}
                      </a>
                  ))}
                </div>
              </div>

              {/* CV */}
              <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/30 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Mijn CV</h3>
                <p className="text-gray-400 mb-4">Download mijn CV voor een volledig overzicht van mijn ervaring en skills.</p>
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-transform duration-300 hover:scale-105 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Contact;