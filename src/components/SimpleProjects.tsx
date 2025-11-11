"use client";

export default function SimpleProjects() {
  const projects = [
    {
      title: "Sistema de Gestão Empresarial",
      description:
        "Plataforma completa para gestão de empresas com dashboard interativo e relatórios em tempo real.",
      technologies: ["React", "Node.js", "PostgreSQL", "TypeScript"],
      category: "Full Stack",
      demo: "#",
      github: "#",
    },
    {
      title: "E-commerce Moderno",
      description:
        "Loja virtual responsiva com sistema de pagamentos integrado e painel administrativo.",
      technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind"],
      category: "E-commerce",
      demo: "#",
      github: "#",
    },
    {
      title: "App de Delivery",
      description:
        "Aplicativo mobile para delivery com geolocalização e notificações em tempo real.",
      technologies: ["React Native", "Firebase", "Maps API"],
      category: "Mobile",
      demo: "#",
      github: "#",
    },
    {
      title: "Dashboard Analytics",
      description:
        "Painel de controle com visualizações de dados interativas e relatórios automatizados.",
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI"],
      category: "Data Viz",
      demo: "#",
      github: "#",
    },
    {
      title: "Rede Social Profissional",
      description:
        "Plataforma de networking com sistema de mensagens e perfis personalizados.",
      technologies: ["React", "Socket.io", "Redis", "AWS"],
      category: "Social",
      demo: "#",
      github: "#",
    },
    {
      title: "Sistema de Reservas",
      description:
        "Aplicação para reservas online com calendário interativo e confirmações automáticas.",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Calendar API"],
      category: "Booking",
      demo: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-orange-500">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Soluções criadas com paixão e dedicação para resolver problemas
            reais
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-lg p-6 hover:bg-slate-750 transition-colors"
            >
              {/* Category */}
              <div className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full mb-4">
                {project.category}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-slate-700 text-blue-400 text-sm rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.demo}
                  className="flex-1 px-4 py-2 bg-orange-600 text-white text-center rounded hover:bg-orange-700 transition-colors"
                >
                  Ver Demo
                </a>
                <a
                  href={project.github}
                  className="px-4 py-2 border border-orange-600 text-orange-400 rounded hover:bg-orange-600 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-slate-800 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Tem um projeto em mente?
            </h3>
            <p className="text-gray-400 mb-6">
              Vamos transformar sua ideia em realidade. Estou sempre aberto a
              novos desafios!
            </p>
            <button className="px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
              Vamos Conversar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
