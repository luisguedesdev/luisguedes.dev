export default function Projetos() {
  const projects = [
    {
      title: "Sistema de Gestão de Tarefas",
      description:
        "Aplicação full stack para gerenciamento de tarefas, com autenticação, API REST e dashboard interativo.",
      stack: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
      image: "📋",
      link: "#",
    },
    {
      title: "E-commerce de Livros",
      description:
        "Loja virtual com catálogo, carrinho, pagamentos e painel administrativo.",
      stack: ["React", "Express", "MongoDB", "Stripe API"],
      image: "📚",
      link: "#",
    },
    {
      title: "Dashboard Analytics",
      description:
        "Painel de controle com gráficos interativos e relatórios em tempo real.",
      stack: ["Vue.js", "Python", "FastAPI", "Chart.js"],
      image: "📊",
      link: "#",
    },
    {
      title: "App Mobile de Delivery",
      description:
        "Aplicativo para pedidos online com geolocalização e pagamentos integrados.",
      stack: ["React Native", "Firebase", "Google Maps", "Stripe"],
      image: "🛵",
      link: "#",
    },
  ];

  return (
    <main className="w-full bg-marinho min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="text-center mb-16">
          <span className="text-turquesa font-bold text-lg uppercase tracking-wider">
            Meu Trabalho
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-ciano mt-4 mb-8">
            Projetos <span className="text-white">Realizados</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Aqui estão alguns dos projetos que desenvolvi, demonstrando minhas
            habilidades em diferentes tecnologias e áreas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 border-2 border-gray-700 rounded-2xl p-8 hover:border-ciano transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-4xl mb-4">{project.image}</div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-ciano transition">
                {project.title}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-marinho border border-turquesa text-turquesa font-semibold px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.link}
                  className="px-6 py-2 rounded-lg bg-ciano text-marinho font-bold hover:bg-turquesa transition"
                >
                  Ver Projeto
                </a>
                <a
                  href="#"
                  className="px-6 py-2 rounded-lg bg-transparent border border-ciano text-ciano font-bold hover:bg-ciano hover:text-marinho transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://github.com/seuperfil"
            target="_blank"
            className="px-8 py-3 rounded-lg bg-transparent border-2 border-ciano text-ciano font-bold hover:bg-ciano hover:text-marinho transition-all duration-200 inline-block"
          >
            Ver todos no GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
