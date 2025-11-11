"use client";
import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function CredibilitySection() {
  const { t } = useLanguage();
  const metrics = [
    // numbers are fixed; descriptions are localized via t()

    {
      number: "R$ 2,1M+",
      description: t("cred.metrics.sales"),
      icon: "💰",
    },
    {
      number: "50+",
      description: t("cred.metrics.projects"),
      icon: "🎯",
    },
    {
      number: "98%",
      description: t("cred.metrics.satisfaction"),
      icon: "⭐",
    },
    {
      number: "300%+",
      description: t("cred.metrics.roi"),
      icon: "📈",
    },
  ];

  const testimonials = [
    // text/role localized via t()

    {
      name: "Carlos Silva",
      role: t("cred.testimonials.1.role"),
      company: "Startup de Fintech",
      text: t("cred.testimonials.1.text"),
      result: "R$ 50k/mês em receita",
      avatar: "👨‍💼",
    },
    {
      name: "Ana Costa",
      role: t("cred.testimonials.2.role"),
      company: "Loja Fashion Online",
      text: t("cred.testimonials.2.text"),
      result: "+180% conversões",
      avatar: "👩‍💼",
    },
    {
      name: "Pedro Santos",
      role: t("cred.testimonials.3.role"),
      company: "AgriTech Solutions",
      text: t("cred.testimonials.3.text"),
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
            {t("cred.title")}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("cred.description")}
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
            {t("cred.testimonials.title")}
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
                  {testimonial.text}
                </p>

                <div className="bg-ciano/10 border border-ciano/20 rounded-lg p-3">
                  <div className="text-ciano font-bold text-sm">
                    {t("cred.testimonials.result")}
                  </div>
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
            {t("cred.companies.title")}
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
              {t("cred.cta.title")}
            </h3>
            <p className="text-gray-300 mb-6">{t("cred.cta.subtitle")}</p>
            <button className="px-8 py-4 bg-ciano text-marinho font-bold rounded-lg hover:bg-turquesa transform hover:scale-105 transition-all duration-200 shadow-lg">
              {t("cred.cta.button")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
