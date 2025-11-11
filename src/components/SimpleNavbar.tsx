"use client";
import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

export default function SimpleNavbar() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "home", name: "Início", nameEn: "Home" },
    { id: "skills", name: "Habilidades", nameEn: "Skills" },
    { id: "projects", name: "Projetos", nameEn: "Projects" },
    { id: "contact", name: "Contato", nameEn: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/logo azul.png"
              alt="Luis Guedes"
              width={48}
              height={48}
              className="filter brightness-0 invert"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-200 font-medium"
                >
                  {language === "pt" ? item.name : item.nameEn}
                </button>
              ))}
            </div>
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            <LanguageToggle />
            <ThemeToggle />

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 rounded-lg mt-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsOpen(false);
                  }}
                  className="text-gray-300 hover:text-orange-500 block px-3 py-2 text-base font-medium transition-colors duration-200 w-full text-left"
                >
                  {language === "pt" ? item.name : item.nameEn}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
