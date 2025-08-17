export default function Sobre() {
  return (
    <main className="w-full bg-marinho min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="text-center mb-16">
          <span className="text-turquesa font-bold text-lg uppercase tracking-wider">
            Sobre Mim
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-ciano mt-4 mb-8">
            Minha <span className="text-white">História</span>
          </h1>
        </div>

        <div className="bg-gray-900 border-2 border-gray-700 rounded-2xl p-10 mb-8">
          <p className="text-lg text-white leading-relaxed mb-6">
            Sou engenheiro de computação e desenvolvedor full stack apaixonado
            por tecnologia, inovação e resolução de problemas. Minha jornada
            começou na universidade, onde descobri o poder da programação para
            transformar ideias em realidade.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Tenho experiência sólida em desenvolvimento web, backend, cloud e
            integração de sistemas. Busco sempre aprender e aplicar as melhores
            práticas do mercado, mantendo-me atualizado com as tecnologias mais
            modernas.
          </p>
          <div className="border-l-4 border-ciano pl-6">
            <p className="text-base text-turquesa font-semibold mb-2">
              Formação: Engenharia de Computação
            </p>
            <p className="text-base text-azul">
              Stack Principal: JavaScript, TypeScript, React, Node.js, Next.js,
              SQL, Docker, Azure, AWS
            </p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/contato"
            className="px-8 py-3 rounded-lg bg-ciano text-marinho font-bold shadow-lg hover:bg-turquesa hover:scale-105 transition-all duration-200 inline-block"
          >
            Vamos trabalhar juntos
          </a>
        </div>
      </div>
    </main>
  );
}
