"use client";
import { useState } from "react";

export default function ProfessionalContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    project: "",
    message: "",
    urgency: "normal",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de envio do formulário
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: "📱",
      title: "WhatsApp",
      value: "+55 (11) 99999-9999",
      link: "https://wa.me/5511999999999",
      description: "Resposta em até 2 horas",
      highlight: "Mais rápido",
    },
    {
      icon: "📧",
      title: "Email Profissional",
      value: "contato@luisguedes.dev",
      link: "mailto:contato@luisguedes.dev",
      description: "Resposta em até 24 horas",
      highlight: "Mais detalhado",
    },
    {
      icon: "📅",
      title: "Agendar Reunião",
      value: "Calendly",
      link: "#",
      description: "Conversa de 30 minutos grátis",
      highlight: "Mais completo",
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/luisguedes",
      link: "https://linkedin.com/in/luisguedes",
      description: "Rede profissional",
      highlight: "",
    },
  ];

  const budgetRanges = [
    "R$ 5.000 - R$ 15.000",
    "R$ 15.000 - R$ 30.000",
    "R$ 30.000 - R$ 50.000",
    "R$ 50.000+",
    "Quero uma cotação",
  ];

  const projectTypes = [
    "Website/Landing Page",
    "E-commerce",
    "Sistema Web",
    "App Mobile",
    "MVP/Startup",
    "Consultoria",
    "Outro",
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-marinho to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Vamos transformar sua <span className="text-ciano">ideia</span> em{" "}
            <span className="text-turquesa">realidade</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pronto para começar seu projeto? Entre em contato agora e receba uma
            proposta personalizada em até 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Conte-me sobre seu projeto
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-ciano"
                    placeholder="Seu nome"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-ciano"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Empresa/Projeto
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-ciano"
                  placeholder="Nome da empresa ou projeto"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Tipo de projeto *
                  </label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-ciano"
                    required
                  >
                    <option value="">Selecione...</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Orçamento estimado
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-ciano"
                  >
                    <option value="">Selecione...</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Urgência
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="urgency"
                      value="normal"
                      checked={formData.urgency === "normal"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span className="text-gray-300">Normal (4-8 semanas)</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="urgency"
                      value="urgent"
                      checked={formData.urgency === "urgent"}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span className="text-gray-300">Urgente (2-4 semanas)</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Descreva seu projeto *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-ciano resize-none"
                  placeholder="Conte-me sobre seu projeto, objetivos, funcionalidades desejadas, prazo, etc."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-ciano to-turquesa text-marinho font-bold rounded-lg hover:from-turquesa hover:to-ciano transform hover:scale-105 transition-all duration-200 shadow-lg text-lg"
              >
                Enviar proposta → Receba cotação em 24h
              </button>
            </form>
          </div>

          {/* Contact Methods & Info */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Outras formas de contato
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    className="block bg-gray-800/30 border border-gray-700 rounded-xl p-4 hover:border-ciano/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="flex items-center">
                      <div className="text-2xl mr-4">{method.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="text-white font-bold">
                            {method.title}
                          </h4>
                          {method.highlight && (
                            <span className="px-2 py-1 bg-ciano/20 text-ciano text-xs rounded-full">
                              {method.highlight}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-400 text-sm">
                          {method.description}
                        </p>
                        <p className="text-turquesa font-medium">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                Perguntas frequentes
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-ciano font-medium mb-1">
                    Quanto tempo leva para começar?
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Após aprovação da proposta, início em até 1 semana.
                  </p>
                </div>
                <div>
                  <h4 className="text-ciano font-medium mb-1">
                    Como funciona o pagamento?
                  </h4>
                  <p className="text-gray-300 text-sm">
                    50% para iniciar + 50% na entrega. Parcelamento disponível.
                  </p>
                </div>
                <div>
                  <h4 className="text-ciano font-medium mb-1">
                    Oferece suporte pós-entrega?
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Sim! 30 dias de suporte gratuito + planos de manutenção.
                  </p>
                </div>
              </div>
            </div>

            {/* Guarantees */}
            <div className="bg-gradient-to-r from-ciano/10 to-turquesa/10 border border-ciano/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                🏆 Garantias
              </h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center">
                  <span className="text-ciano mr-2">✓</span>
                  Entrega no prazo acordado
                </li>
                <li className="flex items-center">
                  <span className="text-ciano mr-2">✓</span>
                  Código limpo e documentado
                </li>
                <li className="flex items-center">
                  <span className="text-ciano mr-2">✓</span>
                  Revisões ilimitadas até aprovação
                </li>
                <li className="flex items-center">
                  <span className="text-ciano mr-2">✓</span>
                  Suporte técnico incluso
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
