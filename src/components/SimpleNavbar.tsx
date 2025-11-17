"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

type SupportedLanguage = "pt" | "en";

interface MenuItem {
  id: string;
  label: Record<SupportedLanguage, string>;
}

const MENU_ITEMS: MenuItem[] = [
  { id: "home", label: { pt: "Início", en: "Home" } },
  { id: "skills", label: { pt: "Habilidades", en: "Skills" } },
  { id: "projects", label: { pt: "Projetos", en: "Projects" } },
  { id: "contact", label: { pt: "Contato", en: "Contact" } },
];

export default function SimpleNavbar() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = useCallback((sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/80 shadow-sm backdrop-blur-lg transition-colors dark:border-white/10 dark:bg-slate-950/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 text-slate-900 transition-colors sm:px-6 lg:px-8 dark:text-white">
        <button
          type="button"
          onClick={() => handleNavigate("home")}
          className="flex items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950"
        >
          <div className="relative h-11 w-11 overflow-hidden rounded-xl border border-white/15 bg-slate-950/60 shadow-lg shadow-slate-950/50 backdrop-blur">
            <Image
              src="/logo vermelha.png"
              alt="Luis Guedes"
              fill
              sizes="44px"
              className="object-contain"
              priority
            />
          </div>
          <span className="flex flex-col">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500 dark:text-orange-300">
              Luis Guedes
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-300">
              {language === "pt"
                ? "Desenvolvedor Full Stack"
                : "Full Stack Developer"}
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {MENU_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavigate(item.id)}
              className="group relative text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
            >
              {item.label[language as SupportedLanguage]}
              <span className="pointer-events-none absolute inset-x-0 -bottom-2 h-px scale-x-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 transition duration-200 group-hover:scale-x-100 group-hover:opacity-100" />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-xl border border-slate-200/70 p-2 text-slate-600 transition-colors duration-200 hover:border-orange-500/60 hover:text-slate-900 md:hidden dark:border-white/10 dark:text-slate-200 dark:hover:text-white"
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            aria-label={
              isOpen
                ? language === "pt"
                  ? "Fechar menu"
                  : "Close menu"
                : language === "pt"
                ? "Abrir menu"
                : "Open menu"
            }
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="primary-navigation"
        className={`overflow-hidden transition-[max-height,opacity] duration-300 md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 mb-4 rounded-2xl border border-slate-200/70 bg-white/90 p-4 shadow-xl shadow-slate-200/60 backdrop-blur dark:border-white/10 dark:bg-slate-900/95 dark:shadow-slate-900/40">
          <div className="space-y-2">
            {MENU_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigate(item.id)}
                className="w-full rounded-xl px-3 py-2 text-left text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800/80"
              >
                {item.label[language as SupportedLanguage]}
              </button>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => handleNavigate("contact")}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-500/25"
            >
              {language === "pt" ? "Vamos conversar" : "Let's talk"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
