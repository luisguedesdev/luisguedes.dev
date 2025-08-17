import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Lado esquerdo - Foto e stats */}
          <div className="flex-1 relative">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-ciano mx-auto">
                <Image
                  src="/src/app/assets/profile.jpg"
                  alt="Sobre Luis Guedes"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-ciano text-marinho font-bold px-6 py-2 rounded-full">
                Desenvolvedor Sênior
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 text-center">
              <div>
                <div className="text-3xl font-black text-ciano">600+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">
                  Projetos Concluídos
                </div>
              </div>
              <div>
                <div className="text-3xl font-black text-turquesa">50+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">
                  Clientes Satisfeitos
                </div>
              </div>
              <div>
                <div className="text-3xl font-black text-azul">3+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">
                  Anos de Experiência
                </div>
              </div>
            </div>
          </div>

          {/* Lado direito - Conteúdo */}
          <div className="flex-1">
            <span className="text-turquesa font-bold text-lg uppercase tracking-wider">
              Sobre Mim
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6">
              Quem é <span className="text-ciano">Luis Guedes</span>?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Sou um engenheiro de computação apaixonado por criar soluções
              digitais inovadoras. Com mais de 3 anos de experiência,
              especializo-me em desenvolvimento full stack, criando desde
              interfaces elegantes até arquiteturas robustas de backend.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Minha missão é transformar ideias complexas em experiências
              digitais simples e eficazes, sempre mantendo o foco na qualidade e
              performance.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <span className="w-3 h-3 bg-ciano rounded-full"></span>
                <span className="text-white font-semibold">Formação:</span>
                <span className="text-turquesa">Engenharia de Computação</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-3 h-3 bg-turquesa rounded-full"></span>
                <span className="text-white font-semibold">Localização:</span>
                <span className="text-gray-300">Brasil</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-3 h-3 bg-azul rounded-full"></span>
                <span className="text-white font-semibold">Status:</span>
                <span className="text-ciano">Disponível para projetos</span>
              </div>
            </div>

            <button className="px-8 py-3 rounded-lg bg-transparent border-2 border-ciano text-ciano font-bold hover:bg-ciano hover:text-marinho transition-all duration-200">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
