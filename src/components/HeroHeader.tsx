import Image from "next/image";

export default function HeroHeader() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-marinho relative overflow-hidden px-8 py-20">
      {/* Efeito de fundo blur */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-ciano/10 to-turquesa/10 rounded-full blur-3xl" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
        {/* Lado esquerdo - Foto e informações pessoais */}
        <div className="flex flex-col items-center lg:items-start gap-6">
          <div className="rounded-full overflow-hidden border-4 border-ciano shadow-2xl w-48 h-48 lg:w-56 lg:h-56 bg-marinho">
            <Image
              src="/src/app/assets/profile.jpg"
              alt="Foto de perfil de Luis Guedes"
              width={224}
              height={224}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <span className="bg-ciano text-marinho font-bold px-4 py-2 rounded-full text-sm uppercase tracking-wider">
            Disponível para trabalho
          </span>
        </div>

        {/* Lado direito - Nome, título e ações */}
        <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
          <div>
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-4 leading-tight">
              Eu sou <span className="text-ciano">Luis Guedes</span>,
            </h1>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
              Engenheiro de Computação &
            </h2>
            <h2 className="text-2xl lg:text-3xl font-bold text-turquesa mb-6">
              Desenvolvedor Full Stack
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mb-8">
              Especialista em desenvolvimento web moderno com 3+ anos de
              experiência criando soluções escaláveis e inovadoras.
            </p>
          </div>

          {/* Tags de tecnologias */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
            <span className="bg-ciano text-marinho font-bold px-4 py-2 rounded-full text-sm shadow-lg">
              React
            </span>
            <span className="bg-turquesa text-marinho font-bold px-4 py-2 rounded-full text-sm shadow-lg">
              Node.js
            </span>
            <span className="bg-azul text-white font-bold px-4 py-2 rounded-full text-sm shadow-lg">
              Next.js
            </span>
            <span className="bg-marinho border-2 border-ciano text-ciano font-bold px-4 py-2 rounded-full text-sm shadow-lg">
              TypeScript
            </span>
            <span className="bg-gray-800 text-turquesa font-bold px-4 py-2 rounded-full text-sm shadow-lg">
              AWS
            </span>
          </div>

          {/* Botões de ação */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="mailto:seuemail@exemplo.com"
              className="px-8 py-3 rounded-lg bg-ciano text-marinho font-bold shadow-lg hover:bg-turquesa hover:scale-105 transition-all duration-200"
            >
              Entre em contato
            </a>
            <a
              href="/projetos"
              className="px-8 py-3 rounded-lg bg-transparent border-2 border-ciano text-ciano font-bold shadow-lg hover:bg-ciano hover:text-marinho transition-all duration-200"
            >
              Ver projetos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
