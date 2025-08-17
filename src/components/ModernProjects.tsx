"use client";
import { useLanguage } from '../contexts/LanguageContext';

export default function ModernProjects() {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: "Sistema de Gestão de Tarefas",
      titleEn: "Task Management System",
      description: "Aplicação full stack para gerenciamento de tarefas, com autenticação, API REST e dashboard interativo.",
      descriptionEn: "Full stack application for task management, with authentication, REST API and interactive dashboard.",
      image: "🏗️",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "E-commerce de Livros",
      titleEn: "Book E-commerce",
      description: "Loja virtual com catálogo, carrinho, pagamentos e painel administrativo.",
      descriptionEn: "Virtual store with catalog, cart, payments and administrative panel.",
      image: "📚",
      technologies: ["React", "Express", "MongoDB", "Stripe"],
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Dashboard Analytics",
      titleEn: "Analytics Dashboard",
      description: "Painel de controle com gráficos interativos e relatórios em tempo real.",
      descriptionEn: "Control panel with interactive charts and real-time reports.",
      image: "📊",
      technologies: ["Vue.js", "Python", "FastAPI", "Chart.js"],
      link: "#",
      github: "#"
    },
    {
      id: 4,
      title: "App Mobile Delivery",
      titleEn: "Mobile Delivery App",
      description: "Aplicativo para pedidos online com geolocalização e pagamentos integrados.",
      descriptionEn: "App for online orders with geolocation and integrated payments.",
      image: "🚚",
      technologies: ["React Native", "Firebase", "Maps API"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-marinho">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-turquesa font-semibold text-lg uppercase tracking-wider">{t('projects.subtitle')}</span>
          <h2 className="text-4xl sm:text-5xl font-black text-ciano mt-4 mb-6">
            {t('projects.title')}
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            {t('projects.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <div key={project.id} className="group bg-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-ciano transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-4xl mb-4">{project.image}</div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-ciano transition-colors">
                {t('language') === 'en' ? project.titleEn : project.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {t('language') === 'en' ? project.descriptionEn : project.description}
              </p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-marinho border border-turquesa text-turquesa text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <a 
                  href={project.link}
                  className="px-6 py-2 bg-ciano text-marinho font-semibold rounded-lg hover:bg-turquesa transition-colors"
                >
                  {t('projects.viewproject')}
                </a>
                <a 
                  href={project.github}
                  className="px-6 py-2 bg-transparent border border-ciano text-ciano font-semibold rounded-lg hover:bg-ciano hover:text-marinho transition-all"
                >
                  {t('projects.github')}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://github.com/seuperfil" 
            target="_blank"
            className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-ciano text-ciano font-bold rounded-lg hover:bg-ciano hover:text-marinho transition-all duration-200"
          >
            {t('projects.viewall')}
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
