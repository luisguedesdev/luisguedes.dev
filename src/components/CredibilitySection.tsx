"use client";
import React from "react";

export default function CredibilitySection() {
  const metrics = [
    {
      number: "R$ 2,1M+",
      description: "Em vendas geradas para clientes",
      icon: "💰",
    },
    {
      number: "50+",
      description: "Projetos entregues com sucesso",
      icon: "🎯",
    },
    {
      number: "98%",
      description: "Taxa de satisfação dos clientes",
      icon: "⭐",
    },
    {
      number: "300%+",
      description: "ROI médio dos projetos",
      icon: "📈",
    },
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "CEO da TechStart",
      company: "Startup de Fintech",
      text: "Luis entregou nosso MVP em 4 semanas e já estamos gerando R$ 50k/mês em receita. O investimento se pagou em 2 meses.",
      result: "R$ 50k/mês em receita",
      avatar: "👨‍💼",
    },
    {
      name: "Ana Costa",
      role: "Diretora de E-commerce",
      company: "Loja Fashion Online",
      text: "O novo site aumentou nossas conversões em 180% e reduziu o tempo de carregamento em 70%. Fantástico!",
      result: "+180% conversões",
      avatar: "👩‍💼",
    },
    {
      name: "Pedro Santos",
      role: "Fundador",
      company: "AgriTech Solutions",
      text: "Sistema personalizado que automatizou nossos processos e economizou R$ 120k/ano em operações manuais.",
      result: "R$ 120k/ano economizados",
      avatar: "👨‍🌾",
    },
  ];

  const companies = [
    { name: "TechStart", logo: "🚀" },
    { name: "E-Fashion", logo: "👗" },
    { name: "AgriTech", logo: "🌱" },
    { name: "FinanceApp", logo: "💳" },
    { name: "HealthCorp", logo: "🏥" },
    { name: "EduPlatform", logo: "📚" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-marinho">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Resultados que <span className="text-ciano">falam por si</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mais de 5 anos transformando ideias em soluções digitais que geram
            receita real para meus clientes
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{metric.icon}</div>
              <div className="text-3xl sm:text-4xl font-bold text-ciano mb-2">
                {metric.number}
              </div>
              <div className="text-gray-300 text-sm">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            O que meus clientes estão dizendo
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-ciano/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-ciano text-xs">{testimonial.company}</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="bg-ciano/10 border border-ciano/20 rounded-lg p-3">
                  <div className="text-ciano font-bold text-sm">Resultado:</div>
                  <div className="text-white font-bold">
                    {testimonial.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Companies Worked With */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Empresas que confiaram no meu trabalho
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-800/30 border border-gray-700 rounded-lg px-6 py-3"
              >
                <span className="text-2xl mr-3">{company.logo}</span>
                <span className="text-gray-300 font-medium">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-ciano/10 to-turquesa/10 border border-ciano/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pronto para ser o próximo case de sucesso?
            </h3>
            <p className="text-gray-300 mb-6">
              Vamos conversar sobre como posso ajudar a transformar seu negócio
            </p>
            <button className="px-8 py-4 bg-ciano text-marinho font-bold rounded-lg hover:bg-turquesa transform hover:scale-105 transition-all duration-200 shadow-lg">
              Quero meu projeto agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
