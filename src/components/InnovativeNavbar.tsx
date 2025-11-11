"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "../contexts/LanguageContext";

export default function InnovativeNavbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    {
      id: "home",
      label: t("nav.home"),
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: "about",
      label: t("nav.about"),
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      id: "skills",
      label: t("nav.skills"),
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 2v11h3v9l7-12h-4l4-8z" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: "projects",
      label: t("nav.projects"),
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      id: "contact",
      label: t("nav.contact"),
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center space-x-2 group"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-white/10 backdrop-blur-sm border border-blue-500/30">
                <Image
                  src="/logo azul.png"
                  alt="Logo Luis Guedes"
                  width={40}
                  height={25}
                  className="h-6 w-auto object-contain filter drop-shadow-sm"
                  priority
                  quality={90}
                />
              </div>
              <span
                className={`text-white font-bold text-xl hidden sm:block transition-colors ${
                  isScrolled ? "text-blue-400" : ""
                }`}
              >
                Luis Guedes
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  <span className="flex items-center space-x-2">
                    <span className="text-sm">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </span>
                  <div
                    className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                    style={{
                      background:
                        "linear-gradient(to right, var(--primary), var(--secondary))",
                    }}
                  ></div>
                </button>
              ))}
            </div>
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <LanguageToggle />

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection("contact")}
              className="hidden sm:block px-6 py-2 text-white font-bold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg"
              style={{
                background:
                  "linear-gradient(to right, var(--primary), var(--secondary))",
              }}
            >
              Vamos Conversar
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-800/50 text-white hover:bg-slate-700/50 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
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

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-300"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
            <div className="pt-4 border-t border-slate-700/50">
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full px-4 py-3 text-white font-bold rounded-lg transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(to right, var(--primary), var(--secondary))",
                }}
              >
                Vamos Conversar
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
