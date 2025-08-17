"use client";
import Image from "next/image";
import { useLanguage } from '../contexts/LanguageContext';

export default function ModernHero() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-marinho via-gray-900 to-marinho relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-ciano/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-turquesa/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-ciano/10 border border-ciano/20 mb-6">
              <span className="w-2 h-2 bg-ciano rounded-full mr-2 animate-pulse"></span>
              <span className="text-ciano text-sm font-medium">{t('hero.available')}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
              <span className="text-gray-300">{t('hero.greeting')}</span><br />
              <span className="text-ciano">{t('hero.name')}</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-turquesa mb-2">
              {t('hero.title')}
            </h2>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6">
              {t('hero.subtitle')}
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              {t('hero.description')}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              {['React', 'Next.js', 'Node.js', 'TypeScript', 'AWS'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm font-medium text-gray-300">
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-ciano text-marinho font-bold rounded-lg hover:bg-turquesa transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                {t('hero.contact')}
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-transparent border-2 border-ciano text-ciano font-bold rounded-lg hover:bg-ciano hover:text-marinho transition-all duration-200"
              >
                {t('hero.projects')}
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-ciano shadow-2xl relative">
                <Image
                  src="/profile.jpg"
                  alt="Luis Guedes"
                  width={384}
                  height={384}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-gray-900 border border-ciano rounded-lg p-3 shadow-lg">
                <div className="text-ciano font-bold text-sm">3+</div>
                <div className="text-gray-400 text-xs">Anos</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gray-900 border border-turquesa rounded-lg p-3 shadow-lg">
                <div className="text-turquesa font-bold text-sm">50+</div>
                <div className="text-gray-400 text-xs">Projetos</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-ciano rounded-full flex justify-center">
          <div className="w-1 h-3 bg-ciano rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
