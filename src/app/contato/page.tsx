export default function Contato() {
  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "seuemail@exemplo.com",
      link: "mailto:seuemail@exemplo.com",
      description: "Para oportunidades profissionais",
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/seuperfil",
      link: "https://linkedin.com/in/seuperfil",
      description: "Conecte-se comigo",
    },
    {
      icon: "🐙",
      title: "GitHub",
      value: "github.com/seuperfil",
      link: "https://github.com/seuperfil",
      description: "Veja meus projetos",
    },
    {
      icon: "📱",
      title: "WhatsApp",
      value: "+55 (11) 99999-9999",
      link: "https://wa.me/5511999999999",
      description: "Para conversas rápidas",
    },
  ];

  return (
    <main className="w-full bg-marinho min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="text-center mb-16">
          <span className="text-turquesa font-bold text-lg uppercase tracking-wider">
            Vamos Conversar
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-ciano mt-4 mb-8">
            Entre em <span className="text-white">Contato</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Estou sempre aberto a novas oportunidades, parcerias e projetos
            interessantes. Vamos construir algo incrível juntos!
          </p>
        </div>

        {/* Métodos de Contato */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target={method.link.startsWith("http") ? "_blank" : "_self"}
              className="bg-gray-900 border-2 border-gray-700 rounded-2xl p-8 hover:border-ciano transition-all duration-300 hover:scale-105 group block"
            >
              <div className="text-4xl mb-4">{method.icon}</div>
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-ciano transition">
                {method.title}
              </h2>
              <p className="text-turquesa font-semibold mb-2">{method.value}</p>
              <p className="text-gray-400 text-sm">{method.description}</p>
            </a>
          ))}
        </div>

        {/* Seção de Disponibilidade */}
        <div className="bg-gray-900 border-2 border-gray-700 rounded-2xl p-10 mb-16">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-ciano mb-6">
              Status de Disponibilidade
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-4 h-4 bg-ciano rounded-full animate-pulse"></div>
              <span className="text-lg font-semibold text-white">
                Disponível para novos projetos
              </span>
            </div>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Atualmente aceitando projetos de desenvolvimento full stack,
              consultoria técnica e oportunidades de trabalho remoto ou híbrido.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:seuemail@exemplo.com"
                className="px-8 py-3 rounded-lg bg-ciano text-marinho font-bold shadow-lg hover:bg-turquesa hover:scale-105 transition-all duration-200"
              >
                Enviar Email
              </a>
              <a
                href="/assets/cv.pdf"
                target="_blank"
                className="px-8 py-3 rounded-lg bg-transparent border-2 border-ciano text-ciano font-bold hover:bg-ciano hover:text-marinho transition-all duration-200"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Informações Adicionais */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-4">
            Resposta em até 24 horas
          </h3>
          <p className="text-gray-400">
            Geralmente respondo emails profissionais em algumas horas. Para
            projetos urgentes, prefira WhatsApp.
          </p>
        </div>
      </div>
    </main>
  );
}
