"use client";
import React from "react";

export default function ServicesSection() {
  const services = [
    {
      icon: "�",
      title: "MVP & Startups",
      description: "Validação rápida de ideias com desenvolvimento ágil",
      features: [
        "MVP em 4-6 semanas",
        "Arquitetura escalável",
        "Testes com usuários reais",
        "Deploy automático",
        "Suporte pós-lançamento",
      ],
      price: "A partir de R$ 15.000",
      timeline: "4-6 semanas",
      popular: false,
    },
    {
      icon: "💼",
      title: "Sistemas Corporativos",
      description: "Soluções robustas para automatizar processos empresariais",
      features: [
        "Análise de processos",
        "Sistema personalizado",
        "Integração com APIs",
        "Dashboard gerencial",
        "Treinamento da equipe",
        "Manutenção inclusa (3 meses)",
      ],
      price: "A partir de R$ 25.000",
      timeline: "6-10 semanas",
      popular: true,
    },
    {
      icon: "�",
      title: "E-commerce Premium",
      description: "Lojas online otimizadas para máxima conversão",
      features: [
        "Design responsivo",
        "Gateway de pagamento",
        "SEO otimizado",
        "Analytics avançado",
        "Gestão de estoque",
        "Marketing automation",
      ],
      price: "A partir de R$ 20.000",
      timeline: "5-8 semanas",
      popular: false,
    },
  ];

  const additionalServices = [
    {
      icon: "⚡",
      title: "Otimização de Performance",
      description: "Acelere seu site e melhore conversões",
      price: "R$ 3.000 - R$ 8.000",
    },
    {
      icon: "🔧",
      title: "Manutenção & Suporte",
      description: "Mantenha seu sistema sempre atualizado",
      price: "R$ 800/mês - R$ 2.500/mês",
    },
    {
      icon: "📱",
      title: "Apps Mobile",
      description: "React Native para iOS e Android",
      price: "R$ 18.000 - R$ 35.000",
    },
    {
      icon: "☁️",
      title: "Migração para Cloud",
      description: "AWS, Azure ou Google Cloud",
      price: "R$ 5.000 - R$ 15.000",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-marinho to-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Serviços que <span className="text-ciano">geram resultados</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluções completas de desenvolvimento focadas no crescimento do seu
            negócio
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-gray-800/50 border rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 ${
                service.popular
                  ? "border-ciano bg-gradient-to-b from-ciano/5 to-transparent"
                  : "border-gray-700 hover:border-ciano/50"
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-ciano text-marinho px-4 py-2 rounded-full text-sm font-bold">
                    MAIS POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.description}</p>
              </div>

              <div className="mb-6">
                <div className="text-3xl font-bold text-ciano mb-1">
                  {service.price}
                </div>
                <div className="text-sm text-gray-400">
                  Prazo: {service.timeline}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-300"
                  >
                    <span className="text-ciano mr-3">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 font-bold rounded-lg transition-all duration-200 ${
                  service.popular
                    ? "bg-ciano text-marinho hover:bg-turquesa"
                    : "bg-transparent border-2 border-ciano text-ciano hover:bg-ciano hover:text-marinho"
                }`}
              >
                Solicitar orçamento
              </button>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Outros serviços disponíveis
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800/30 border border-gray-700 rounded-xl p-6 text-center hover:border-ciano/50 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h4 className="text-white font-bold mb-2">{service.title}</h4>
                <p className="text-gray-300 text-sm mb-3">
                  {service.description}
                </p>
                <div className="text-ciano font-bold">{service.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Como funciona nosso processo
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-ciano/20 border-2 border-ciano rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-ciano font-bold text-xl">1</span>
              </div>
              <h4 className="text-white font-bold mb-2">Descoberta</h4>
              <p className="text-gray-300 text-sm">
                Entendemos seu negócio e objetivos
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-ciano/20 border-2 border-ciano rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-ciano font-bold text-xl">2</span>
              </div>
              <h4 className="text-white font-bold mb-2">Planejamento</h4>
              <p className="text-gray-300 text-sm">
                Criamos estratégia e cronograma
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-ciano/20 border-2 border-ciano rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-ciano font-bold text-xl">3</span>
              </div>
              <h4 className="text-white font-bold mb-2">Desenvolvimento</h4>
              <p className="text-gray-300 text-sm">
                Construímos com atualizações semanais
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-ciano/20 border-2 border-ciano rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-ciano font-bold text-xl">4</span>
              </div>
              <h4 className="text-white font-bold mb-2">Lançamento</h4>
              <p className="text-gray-300 text-sm">
                Deploy e suporte pós-lançamento
              </p>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-4">
            Não encontrou o que precisa?
          </h3>
          <p className="text-gray-300 mb-6">
            Cada projeto é único. Vamos conversar sobre suas necessidades
            específicas.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-ciano to-turquesa text-marinho font-bold rounded-lg hover:from-turquesa hover:to-ciano transform hover:scale-105 transition-all duration-200 shadow-lg">
            Falar com especialista
          </button>
        </div>
      </div>
    </section>
  );
}
