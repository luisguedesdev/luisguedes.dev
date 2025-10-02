"use client";
import { useState } from "react";

export default function ProfessionalProjects() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "TechStart - Plataforma Fintech",
      category: "fintech",
      description:
        "MVP desenvolvido em 4 semanas que gerou R$ 200k em receita nos primeiros 3 meses",
      businessResult: "R$ 200k em receita",
      metrics: ["180% ROI", "15k usuários", "4.8/5 avaliação"],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      image: "/project1.jpg",
      link: "#",
      testimonial:
        "Luis entregou além das expectativas. O sistema é robusto e escalável.",
      clientName: "Carlos Silva, CEO",
    },
    {
      id: 2,
      title: "Fashion Online - E-commerce",
      category: "ecommerce",
      description:
        "Loja online que aumentou as vendas em 300% e reduziu abandono de carrinho em 65%",
      businessResult: "+300% vendas",
      metrics: ["65% menos abandono", "R$ 80k/mês", "2.5s carregamento"],
      technologies: ["Next.js", "Shopify API", "Stripe", "Vercel"],
      image: "/project2.jpg",
      link: "#",
      testimonial:
        "Site rápido e conversões incríveis. Melhor investimento que fizemos.",
      clientName: "Ana Costa, Diretora",
    },
    {
      id: 3,
      title: "AgriTech - Sistema de Gestão",
      category: "saas",
      description:
        "Automatização que economizou R$ 120k/ano em processos manuais",
      businessResult: "R$ 120k/ano economizados",
      metrics: ["70% menos tempo", "95% precisão", "24/7 monitoramento"],
      technologies: ["Vue.js", "Python", "Django", "Docker"],
      image: "/project3.jpg",
      link: "#",
      testimonial:
        "Revolucionou nossa operação. Sistema intuitivo e confiável.",
      clientName: "Pedro Santos, Fundador",
    },
    {
      id: 4,
      title: "HealthCorp - App Mobile",
      category: "mobile",
      description:
        "App de telemedicina com 50k downloads e 4.8 estrelas na loja",
      businessResult: "50k downloads",
      metrics: ["4.8★ rating", "85% retenção", "3M+ consultas"],
      technologies: ["React Native", "Firebase", "WebRTC", "AWS"],
      image: "/project4.jpg",
      link: "#",
      testimonial: "App robusto e seguro. Usuários adoram a experiência.",
      clientName: "Dr. Maria Silva",
    },
    {
      id: 5,
      title: "EduPlatform - Learning Management",
      category: "saas",
      description:
        "Plataforma de educação online com 10k alunos ativos mensalmente",
      businessResult: "10k alunos ativos",
      metrics: ["92% conclusão", "R$ 150k MRR", "99.9% uptime"],
      technologies: ["React", "Express", "MongoDB", "Redis"],
      image: "/project5.jpg",
      link: "#",
      testimonial: "Plataforma estável e escalável. Suporte excepcional.",
      clientName: "Prof. João Costa",
    },
    {
      id: 6,
      title: "LogisTech - Dashboard Analytics",
      category: "analytics",
      description:
        "Dashboard que otimizou rotas e reduziu custos logísticos em 40%",
      businessResult: "40% redução custos",
      metrics: ["Real-time data", "30% + eficiência", "R$ 90k economia"],
      technologies: ["D3.js", "Python", "FastAPI", "ClickHouse"],
      image: "/project6.jpg",
      link: "#",
      testimonial:
        "Visibilidade total da operação. Decisões baseadas em dados.",
      clientName: "Roberto Lima, COO",
    },
  ];

  const categories = [
    { id: "all", name: "Todos os Projetos" },
    { id: "fintech", name: "Fintech" },
    { id: "ecommerce", name: "E-commerce" },
    { id: "saas", name: "SaaS" },
    { id: "mobile", name: "Mobile" },
    { id: "analytics", name: "Analytics" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-900 to-marinho"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Cases de <span className="text-ciano">sucesso</span> que{" "}
            <span className="text-turquesa">geram resultados</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Projetos reais que transformaram negócios e geraram retorno
            significativo para meus clientes
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? "bg-ciano text-marinho"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-ciano"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden hover:border-ciano/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-to-br from-ciano/20 to-turquesa/20 flex items-center justify-center">
                <div className="text-6xl opacity-20">🚀</div>
                <div className="absolute top-4 right-4 bg-ciano text-marinho px-3 py-1 rounded-full text-sm font-bold">
                  {project.category.toUpperCase()}
                </div>
              </div>

              <div className="p-6">
                {/* Project Title & Description */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* Business Result Highlight */}
                <div className="bg-ciano/10 border border-ciano/20 rounded-lg p-4 mb-4">
                  <div className="text-ciano font-bold text-sm mb-1">
                    RESULTADO DE NEGÓCIO
                  </div>
                  <div className="text-white text-xl font-bold">
                    {project.businessResult}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {project.metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="text-turquesa font-bold text-sm">
                        {metric}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="bg-gray-700/30 border-l-4 border-turquesa p-4 mb-4">
                  <p className="text-gray-300 text-sm italic mb-2">
                    {project.testimonial}
                  </p>
                  <p className="text-turquesa text-xs font-bold">
                    — {project.clientName}
                  </p>
                </div>

                {/* Action Button */}
                <button className="w-full py-3 bg-transparent border-2 border-ciano text-ciano font-bold rounded-lg hover:bg-ciano hover:text-marinho transition-all duration-200">
                  Ver detalhes do projeto
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-ciano/10 to-turquesa/10 border border-ciano/20 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Seu projeto pode ser o próximo case de sucesso
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Vamos transformar sua ideia em uma solução que gera resultados
              reais
            </p>
            <button className="px-8 py-4 bg-ciano text-marinho font-bold rounded-lg hover:bg-turquesa transform hover:scale-105 transition-all duration-200 shadow-lg text-lg">
              Começar meu projeto agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
