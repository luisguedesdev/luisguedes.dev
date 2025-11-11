"use client";
import { useState, useEffect } from "react";

export default function ModernProjects() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("projects");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Sistema de Gestão Empresarial",
      description:
        "Plataforma completa para gestão de empresas com dashboard interativo, relatórios em tempo real e integração com APIs externas.",
      image: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"
            fill="currentColor"
          />
        </svg>
      ),
      technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"],
      category: "Full Stack",
      featured: true,
      demo: "#",
      github: "#",
    },
    {
      id: 2,
      title: "E-commerce Moderno",
      description:
        "Loja virtual responsiva com sistema de pagamentos integrado, painel administrativo e analytics avançado.",
      image: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 4V2C7 1.45 7.45 1 8 1h8c.55 0 1 .45 1 1v2h4c.55 0 1 .45 1 1s-.45 1-1 1v13c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c-.55 0-1-.45-1-1s.45-1 1-1h4zM9 3v1h6V3H9z"
            fill="currentColor"
          />
        </svg>
      ),
      technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind"],
      category: "E-commerce",
      featured: true,
      demo: "#",
      github: "#",
    },
    {
      id: 3,
      title: "App de Delivery",
      description:
        "Aplicativo mobile para delivery com geolocalização, notificações em tempo real e sistema de rastreamento.",
      image: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 7h-4V4c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h4v3h2V4h2v11h2V4h2V7z"
            fill="currentColor"
          />
        </svg>
      ),
      technologies: ["React Native", "Firebase", "Maps API"],
      category: "Mobile",
      featured: false,
      demo: "#",
      github: "#",
    },
    {
      id: 4,
      title: "Dashboard Analytics",
      description:
        "Painel de controle com visualizações de dados interativas, relatórios automatizados e exportação de dados.",
      image: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"
            fill="currentColor"
          />
        </svg>
      ),
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI"],
      category: "Data Viz",
      featured: false,
      demo: "#",
      github: "#",
    },
    {
      id: 5,
      title: "Rede Social para Profissionais",
      description:
        "Plataforma de networking profissional com sistema de mensagens, perfis personalizados e recomendações de conexões.",
      image: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63C19.68 7.55 18.92 7 18.09 7h-.09c-.92 0-1.68.55-1.97 1.37L13.5 16H11v6c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2zM5.5 7C4.67 7 4 7.67 4 8.5S4.67 10 5.5 10 7 9.33 7 8.5 6.33 7 5.5 7zM11 10H3v6c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-6z"
            fill="currentColor"
          />
        </svg>
      ),
      technologies: ["React", "Socket.io", "Redis", "AWS"],
      category: "Social",
      featured: false,
      demo: "#",
      github: "#",
    },
    {
      id: 6,
      title: "Sistema de Reservas",
      description:
        "Aplicação para reservas online com calendário interativo, confirmações automáticas e integração com calendários externos.",
      image: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"
            fill="currentColor"
          />
        </svg>
      ),
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Calendar API"],
      category: "Booking",
      featured: false,
      demo: "#",
      github: "#",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden"
    >
      {/* Background effects com cores azuis */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Meus{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Projetos
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Soluções criadas com paixão e dedicação para resolver problemas
            reais
          </p>
        </div>

        {/* Featured Projects */}
        <div
          className={`mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Projetos em Destaque
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects
              .filter((p) => p.featured)
              .map((project) => (
                <div
                  key={project.id}
                  className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl overflow-hidden`}
                  style={{
                    borderColor:
                      hoveredProject === project.id
                        ? "rgba(59, 130, 246, 0.5)"
                        : "",
                    boxShadow:
                      hoveredProject === project.id
                        ? "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
                        : "",
                  }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/10 to-blue-600/10`}
                  ></div>

                  <div className="absolute top-4 right-4 text-white px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-blue-500 to-blue-600">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="inline mr-1"
                    >
                      <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                        fill="currentColor"
                      />
                    </svg>
                    Destaque
                  </div>

                  {/* Project icon */}
                  <div className="text-6xl mb-6 text-center text-blue-500">
                    {project.image}
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3
                      className={`text-2xl font-bold text-white mb-3 transition-colors ${
                        hoveredProject === project.id ? "text-blue-400" : ""
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full bg-slate-700/50 text-blue-400 border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="text-sm font-semibold mb-6 text-blue-300">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="inline mr-1"
                      >
                        <path
                          d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"
                          fill="currentColor"
                        />
                      </svg>
                      {project.category}
                    </div>

                    <div className="flex gap-4">
                      <button className="flex-1 px-6 py-3 text-white font-bold rounded-lg hover:scale-105 transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-600">
                        Ver Projeto
                      </button>
                      <button className="px-6 py-3 bg-transparent font-bold rounded-lg transition-all duration-300 border-2 border-blue-500 text-blue-400">
                        GitHub
                      </button>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  {hoveredProject === project.id && (
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 animate-fade-in"></div>
                  )}
                </div>
              ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div
          className={`transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Todos os Projetos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <div
                  key={project.id}
                  className={`group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:border-blue-500/50 hover:shadow-blue-500/10`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl mb-4 text-blue-400">
                    {project.image}
                  </div>

                  {/* Content */}
                  <h4
                    className={`text-xl font-bold text-white mb-2 transition-colors ${
                      hoveredProject === project.id ? "text-blue-400" : ""
                    }`}
                  >
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-slate-700/50 text-blue-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-slate-700/50 text-gray-400 text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="text-xs font-semibold mb-4 text-blue-300">
                    {project.category}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2">
                    <button className="flex-1 px-4 py-2 text-white text-sm font-bold rounded-lg hover:scale-105 transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-600">
                      Ver
                    </button>
                    <button className="px-4 py-2 bg-transparent text-sm font-bold rounded-lg transition-all duration-300 border-2 border-blue-500 text-blue-400">
                      Code
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Tem um projeto em mente?
            </h3>
            <p className="text-gray-400 mb-6">
              Vamos transformar sua ideia em realidade. Estou sempre aberto a
              novos desafios!
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 text-white font-bold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg bg-gradient-to-r from-blue-500 to-blue-600"
            >
              Vamos Conversar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
