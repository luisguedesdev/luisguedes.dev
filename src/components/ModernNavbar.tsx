"use client";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

export default function ModernNavbar() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-marinho/95 backdrop-blur-md border-b border-ciano/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-ciano">LG</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-300 hover:text-ciano px-3 py-2 text-sm font-medium transition-colors"
              >
                {t("nav.home")}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-ciano px-3 py-2 text-sm font-medium transition-colors"
              >
                {t("nav.about")}
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-300 hover:text-ciano px-3 py-2 text-sm font-medium transition-colors"
              >
                {t("nav.projects")}
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-300 hover:text-ciano px-3 py-2 text-sm font-medium transition-colors"
              >
                {t("nav.skills")}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-ciano px-3 py-2 text-sm font-medium transition-colors"
              >
                {t("nav.contact")}
              </button>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <LanguageToggle />
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-ciano text-marinho px-4 py-2 rounded-lg text-sm font-medium hover:bg-turquesa transition-colors"
            >
              {t("nav.hireme")}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
