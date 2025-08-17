export default function Experiencia() {
  const experiences = [
    {
      position: "Desenvolvedor Full Stack",
      company: "Tech Solutions",
      period: "2023 - Atual",
      description:
        "Desenvolvimento de aplicações web escaláveis, APIs REST e integrações cloud. Responsável por arquitetura de sistemas e mentoria de desenvolvedores júnior.",
      technologies: ["React", "Node.js", "AWS", "PostgreSQL"],
      type: "Trabalho",
    },
    {
      position: "Estagiário em Engenharia de Software",
      company: "InovaTech",
      period: "2022 - 2023",
      description:
        "Participação em projetos de automação e análise de dados. Desenvolvimento de dashboards e scripts para otimização de processos.",
      technologies: ["Python", "Vue.js", "MySQL", "Docker"],
      type: "Estágio",
    },
    {
      position: "Freelancer Frontend",
      company: "Projetos Independentes",
      period: "2021 - 2022",
      description:
        "Desenvolvimento de websites responsivos e landing pages para pequenas empresas. Foco em performance e SEO.",
      technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
      type: "Freelance",
    },
  ];

  const education = [
    {
      degree: "Engenharia de Computação",
      institution: "Universidade Federal",
      period: "2020 - 2024",
      description:
        "Formação completa em ciência da computação, algoritmos, estruturas de dados e engenharia de software.",
      status: "Concluído",
    },
    {
      degree: "Certificação AWS Solutions Architect",
      institution: "Amazon Web Services",
      period: "2023",
      description: "Certificação em arquitetura de soluções na nuvem AWS.",
      status: "Certificado",
    },
  ];

  return (
    <main className="w-full bg-marinho min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="text-center mb-16">
          <span className="text-turquesa font-bold text-lg uppercase tracking-wider">
            Minha Jornada
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-ciano mt-4 mb-8">
            Experiência <span className="text-white">Profissional</span>
          </h1>
        </div>

        {/* Experiência Profissional */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            💼 Experiência de Trabalho
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-900 border-2 border-gray-700 rounded-2xl p-8 hover:border-ciano transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-ciano mb-1">
                      {exp.position}
                    </h3>
                    <p className="text-turquesa font-semibold">
                      {exp.company} •{" "}
                      <span className="text-azul">{exp.period}</span>
                    </p>
                  </div>
                  <span className="bg-ciano text-marinho font-bold px-4 py-1 rounded-full text-sm mt-2 md:mt-0 self-start">
                    {exp.type}
                  </span>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-marinho border border-turquesa text-turquesa font-semibold px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formação Acadêmica */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            🎓 Formação & Certificações
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-900 border-2 border-gray-700 rounded-2xl p-8 hover:border-ciano transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-ciano mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-turquesa font-semibold">
                      {edu.institution} •{" "}
                      <span className="text-azul">{edu.period}</span>
                    </p>
                  </div>
                  <span className="bg-turquesa text-marinho font-bold px-4 py-1 rounded-full text-sm mt-2 md:mt-0 self-start">
                    {edu.status}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="/contato"
            className="px-8 py-3 rounded-lg bg-ciano text-marinho font-bold shadow-lg hover:bg-turquesa hover:scale-105 transition-all duration-200 inline-block"
          >
            Vamos conversar
          </a>
        </div>
      </div>
    </main>
  );
}
