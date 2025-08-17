"use client";
import { useLanguage } from '../contexts/LanguageContext';

export default function ModernContact() {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "seuemail@exemplo.com",
      link: "mailto:seuemail@exemplo.com",
      description: t('contact.email')
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/seuperfil",
      link: "https://linkedin.com/in/seuperfil",
      description: t('contact.linkedin')
    },
    {
      icon: "🐙",
      title: "GitHub",
      value: "github.com/seuperfil",
      link: "https://github.com/seuperfil",
      description: t('contact.github')
    },
    {
      icon: "📱",
      title: "WhatsApp",
      value: "+55 (11) 99999-9999",
      link: "https://wa.me/5511999999999",
      description: t('contact.whatsapp')
    }
  ];

  return (
    <section id="contact" className="py-20 bg-marinho">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-turquesa font-semibold text-lg uppercase tracking-wider">{t('contact.subtitle')}</span>
          <h2 className="text-4xl sm:text-5xl font-black text-ciano mt-4 mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target={method.link.startsWith('http') ? '_blank' : '_self'}
              className="group bg-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-ciano transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="text-4xl mb-4">{method.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-ciano transition-colors">
                {method.title}
              </h3>
              <p className="text-turquesa font-medium text-sm mb-2">
                {method.value}
              </p>
              <p className="text-gray-400 text-xs">
                {method.description}
              </p>
            </a>
          ))}
        </div>

        {/* Availability Status */}
        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700 text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-3 h-3 bg-ciano rounded-full animate-pulse mr-3"></div>
            <span className="text-lg font-semibold text-white">
              {t('contact.available')}
            </span>
          </div>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:seuemail@exemplo.com"
              className="px-8 py-3 bg-ciano text-marinho font-bold rounded-lg hover:bg-turquesa transition-colors"
            >
              {t('contact.sendemail')}
            </a>
            <a
              href="/assets/cv.pdf"
              target="_blank"
              className="px-8 py-3 bg-transparent border-2 border-ciano text-ciano font-bold rounded-lg hover:bg-ciano hover:text-marinho transition-all"
            >
              {t('about.download')}
            </a>
          </div>
        </div>

        {/* Response Time */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            {t('contact.response')}
          </h3>
          <p className="text-gray-400">
            Geralmente respondo emails profissionais em algumas horas.
          </p>
        </div>
      </div>
    </section>
  );
}
