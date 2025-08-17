import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/projetos", label: "Projetos" },
  { href: "/habilidades", label: "Habilidades" },
  { href: "/experiencia", label: "Experiência" },
  { href: "/contato", label: "Contato" },
];

export default function NavBar() {
  return (
    <nav className="w-full flex justify-center py-6 mb-8 bg-[var(--background)] shadow-lg sticky top-0 z-50">
      <ul className="flex gap-6">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-lg font-semibold px-3 py-2 rounded-lg transition-colors duration-200 hover:bg-[var(--azul)] hover:text-[var(--ciano)] focus:outline-none focus:ring-2 focus:ring-[var(--ciano)]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
