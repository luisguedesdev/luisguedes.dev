import Link from "next/link";

export default function TopBar() {
  return (
    <header className="w-full flex items-center justify-between px-8 py-4 bg-marinho border-b-2 border-ciano shadow-lg fixed top-0 left-0 z-50">
      <div className="flex items-center gap-2">
        <span className="w-4 h-4 rounded-full bg-ciano inline-block mr-2"></span>
        <span className="text-ciano font-bold text-xl tracking-widest">
          LuisGuedes.dev
        </span>
      </div>
      <nav className="hidden md:flex gap-8">
        <Link
          href="/"
          className="text-turquesa font-semibold hover:text-ciano transition"
        >
          Home
        </Link>
        <Link
          href="/sobre"
          className="text-turquesa font-semibold hover:text-ciano transition"
        >
          Sobre
        </Link>
        <Link
          href="/projetos"
          className="text-turquesa font-semibold hover:text-ciano transition"
        >
          Projetos
        </Link>
        <Link
          href="/habilidades"
          className="text-turquesa font-semibold hover:text-ciano transition"
        >
          Habilidades
        </Link>
        <Link
          href="/experiencia"
          className="text-turquesa font-semibold hover:text-ciano transition"
        >
          Experiência
        </Link>
        <Link
          href="/contato"
          className="text-turquesa font-semibold hover:text-ciano transition"
        >
          Contato
        </Link>
      </nav>
      <a
        href="mailto:seuemail@exemplo.com"
        className="px-5 py-2 rounded-lg bg-ciano text-marinho font-bold shadow-md hover:bg-turquesa transition hidden md:inline-block"
      >
        Fale comigo
      </a>
    </header>
  );
}
