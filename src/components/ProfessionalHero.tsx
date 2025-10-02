"use client";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";

export default function ModernHero() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-marinho via-gray-900 to-marinho relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-ciano/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-turquesa/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge de disponibilidade */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-green-400 text-sm font-medium">
                Disponível para novos projetos
              </span>
            </div>

            {/* Headline focado no cliente */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
              <span className="text-gray-300">Transformo suas</span>
              <br />
              <span className="text-ciano">ideias digitais</span>
              <br />
              <span className="text-gray-300">em</span>{" "}
              <span className="text-turquesa">resultados reais</span>
            </h1>

            {/* Subtitle focado em valor */}
            <p className="text-xl sm:text-2xl text-gray-300 mb-6 font-medium">
              Desenvolvedor Full Stack especializado em soluções que{" "}
              <span className="text-ciano font-bold">geram receita</span> e{" "}
              <span className="text-turquesa font-bold">reduzem custos</span>{" "}
              para seu negócio
            </p>

            {/* Value proposition */}
            <p className="text-lg text-gray-400 mb-8 max-w-xl">
              Mais de 50 projetos entregues • ROI médio de 300% • Prazo médio
              reduzido em 40%
            </p>

            {/* Resultados impressionantes */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-ciano">
                  R$ 2M+
                </div>
                <div className="text-sm text-gray-400">Em vendas geradas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-turquesa">
                  50+
                </div>
                <div className="text-sm text-gray-400">Projetos entregues</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-400">
                  98%
                </div>
                <div className="text-sm text-gray-400">
                  Clientes satisfeitos
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 bg-ciano text-marinho font-bold rounded-lg hover:bg-turquesa transform hover:scale-105 transition-all duration-200 shadow-lg text-lg"
              >
                Começar meu projeto agora
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-4 bg-transparent border-2 border-ciano text-ciano font-bold rounded-lg hover:bg-ciano hover:text-marinho transition-all duration-200 text-lg"
              >
                Ver cases de sucesso
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image + Trust Elements */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-ciano shadow-2xl relative">
                <Image
                  src="/profile.jpg"
                  alt="Luis Guedes"
                  width={384}
                  height={384}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              {/* Trust badges flutuantes */}
              <div className="absolute -top-4 -right-4 bg-marinho border border-ciano rounded-lg p-3 shadow-lg">
                <div className="text-ciano font-bold text-sm">5+ anos</div>
                <div className="text-gray-400 text-xs">Experiência</div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-marinho border border-green-400 rounded-lg p-3 shadow-lg">
                <div className="text-green-400 font-bold text-sm">⚡ 24h</div>
                <div className="text-gray-400 text-xs">Resposta</div>
              </div>

              <div className="absolute top-1/2 -left-6 bg-marinho border border-turquesa rounded-lg p-3 shadow-lg transform -translate-y-1/2">
                <div className="text-turquesa font-bold text-sm">🏆 Top 1%</div>
                <div className="text-gray-400 text-xs">Freelancer</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-ciano rounded-full flex justify-center">
          <div className="w-1 h-3 bg-ciano rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
