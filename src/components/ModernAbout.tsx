"use client";
import Image from "next/image";
import { useLanguage } from '../contexts/LanguageContext';

export default function ModernAbout() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-turquesa font-semibold text-lg uppercase tracking-wider">{t('about.subtitle')}</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-4 mb-6">
            {t('about.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image and Stats */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto rounded-2xl overflow-hidden">
              <Image
                src="/src/app/assets/profile.jpg"
                alt="About Luis Guedes"
                width={320}
                height={320}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-marinho/50 to-transparent"></div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-black text-ciano mb-2">600+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">{t('about.projects')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-turquesa mb-2">50+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">{t('about.clients')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-azul mb-2">3+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">{t('about.experience')}</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('about.description1')}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('about.description2')}
            </p>
            
            {/* Info List */}
            <div className="space-y-4 py-6">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-ciano rounded-full mr-4"></div>
                <span className="text-gray-300">{t('about.formation')}</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-turquesa rounded-full mr-4"></div>
                <span className="text-gray-300">{t('about.location')}</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-azul rounded-full mr-4"></div>
                <span className="text-gray-300">{t('about.status')}</span>
              </div>
            </div>

            <button className="px-8 py-3 bg-transparent border-2 border-ciano text-ciano font-bold rounded-lg hover:bg-ciano hover:text-marinho transition-all duration-200">
              {t('about.download')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
