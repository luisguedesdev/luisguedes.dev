"use client";
import { useState } from "react";
import ThemeToggle from "./components/ThemeToggle";
import LanguageSelect from "./components/LanguageSelect";

const texts = {
  pt: {
    title: "Bem-vindo ao Meu Portfólio!",
    description:
      "Veja meus projetos e conheça meu trabalho como desenvolvedor.",
    button: "Ver Portfólio",
  },
  en: {
    title: "Welcome to My Portfolio!",
    description:
      "Check out my projects and get to know my work as a developer.",
    button: "View Portfolio",
  },
};

export default function Home() {
  const [language, setLanguage] = useState<"pt" | "en">("pt");
  const t = texts[language];

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-black transition-colors duration-300">
      <div className="absolute top-6 right-6 flex gap-4">
        <LanguageSelect language={language} setLanguage={setLanguage} />
        <ThemeToggle />
      </div>
      <div className="p-8 rounded-xl shadow-lg bg-gray-100 dark:bg-gray-900 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          {t.title}
        </h1>
        <p className="mb-6 text-gray-800 dark:text-gray-300">{t.description}</p>
        <a
          href="/projetos"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-800 transition"
        >
          {t.button}
        </a>
      </div>
    </main>
  );
}
