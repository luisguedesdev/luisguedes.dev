export default function Habilidades() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Vue.js",
        "Angular",
      ],
      color: "text-ciano",
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "NestJS", "Python", "FastAPI", "PHP"],
      color: "text-turquesa",
    },
    {
      title: "Banco de Dados",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma", "Mongoose"],
      color: "text-azul",
    },
    {
      title: "DevOps & Cloud",
      skills: ["Docker", "AWS", "Azure", "CI/CD", "Kubernetes", "Terraform"],
      color: "text-ciano",
    },
    {
      title: "Ferramentas",
      skills: ["Git", "GitHub", "VSCode", "Figma", "Postman", "Jest"],
      color: "text-turquesa",
    },
    {
      title: "Mobile",
      skills: ["React Native", "Expo", "Flutter", "PWA", "Responsive Design"],
      color: "text-azul",
    },
  ];

  return (
    <main className="w-full bg-marinho min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="text-center mb-16">
          <span className="text-turquesa font-bold text-lg uppercase tracking-wider">
            Minhas Competências
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-ciano mt-4 mb-8">
            Habilidades <span className="text-white">Técnicas</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções completas e
            escaláveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900 border-2 border-gray-700 rounded-2xl p-8 hover:border-ciano transition-all duration-300 hover:scale-105"
            >
              <h2
                className={`text-xl md:text-2xl font-bold ${category.color} mb-6`}
              >
                {category.title}
              </h2>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full bg-current ${category.color}`}
                    ></div>
                    <span className="text-white font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Seção de níveis */}
        <div className="bg-gray-900 border-2 border-gray-700 rounded-2xl p-10 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-ciano mb-8 text-center">
            Nível de Proficiência
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-turquesa mb-4">Avançado</h3>
              <div className="space-y-2">
                <span className="text-gray-300">
                  JavaScript, TypeScript, React, Node.js
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-azul mb-4">
                Intermediário
              </h3>
              <div className="space-y-2">
                <span className="text-gray-300">
                  Python, Docker, AWS, Vue.js
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/projetos"
            className="px-8 py-3 rounded-lg bg-ciano text-marinho font-bold shadow-lg hover:bg-turquesa hover:scale-105 transition-all duration-200 inline-block"
          >
            Ver Projetos
          </a>
        </div>
      </div>
    </main>
  );
}
