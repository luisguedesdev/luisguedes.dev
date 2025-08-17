export default function ServicesSection() {
  const services = [
    {
      icon: "💻",
      title: "UI/UX Design",
      description:
        "Crio interfaces intuitivas e experiências de usuário excepcionais, focando em usabilidade e design moderno.",
    },
    {
      icon: "📱",
      title: "Desenvolvimento Mobile",
      description:
        "Desenvolvimento de aplicações mobile responsivas e performáticas usando React Native e tecnologias modernas.",
    },
    {
      icon: "🌐",
      title: "Desenvolvimento Web",
      description:
        "Construo websites e aplicações web completas, desde o front-end até APIs robustas e escaláveis.",
    },
  ];

  return (
    <section className="w-full bg-marinho py-20">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="text-turquesa font-bold text-lg uppercase tracking-wider">
            Minha Especialização
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-ciano mt-4 mb-6">
            Serviços <span className="text-white">que Ofereço</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 border-2 border-gray-700 rounded-2xl p-8 hover:border-ciano transition-all duration-300 hover:scale-105"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-turquesa mb-4">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
              <button className="mt-6 text-ciano font-bold hover:text-turquesa transition">
                Saiba mais →
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-3 rounded-lg bg-ciano text-marinho font-bold shadow-lg hover:bg-turquesa hover:scale-105 transition-all duration-200">
            Ver todos os serviços
          </button>
        </div>
      </div>
    </section>
  );
}
