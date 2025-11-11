"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";
import { FaReact, FaNodeJs, FaJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

export default function InnovativeHero() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Otimização: usar requestAnimationFrame para melhor performance
    const handleAnimations = () => {
      setIsVisible(true);
    };

    requestAnimationFrame(handleAnimations);

    const handleMouseMove = (e: MouseEvent) => {
      // Throttle mouse movement para melhor performance
      requestAnimationFrame(() => {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 20,
          y: (e.clientY / window.innerHeight - 0.5) * 20,
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const techIcons = [
    { icon: FaReact, color: "#61DAFB", name: "React", delay: "0s" },
    { icon: SiNextdotjs, color: "#000000", name: "Next.js", delay: "0.2s" },
    { icon: FaNodeJs, color: "#339933", name: "Node.js", delay: "0.4s" },
    { icon: SiTypescript, color: "#3178C6", name: "TypeScript", delay: "0.6s" },
    { icon: FaJs, color: "#F7DF1E", name: "JavaScript", delay: "0.8s" },
    { icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind", delay: "1s" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10 dark:opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, var(--primary) 2px, transparent 0), 
                              radial-gradient(circle at 75px 75px, var(--secondary) 1px, transparent 0)`,
            backgroundSize: "100px 100px",
          }}
        />

        {/* Floating Orbs */}
        <div
          className="absolute top-20 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{
            background:
              "linear-gradient(135deg, var(--primary), var(--secondary))",
            transform: `translate(${mousePosition.x * 0.3}px, ${
              mousePosition.y * 0.3
            }px)`,
            animationDuration: "4s",
          }}
        />
        <div
          className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-15 animate-pulse"
          style={{
            background:
              "linear-gradient(225deg, var(--secondary), var(--accent))",
            transform: `translate(${mousePosition.x * -0.2}px, ${
              mousePosition.y * -0.2
            }px)`,
            animationDuration: "6s",
            animationDelay: "1s",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="w-full">
          {/* Hero Content with Profile Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left">
              {/* Status Badge */}
              <div
                className={`inline-flex items-center px-6 py-3 rounded-full mb-8 backdrop-blur-sm border transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  background: "rgba(59, 130, 246, 0.1)",
                  borderColor: "rgba(59, 130, 246, 0.3)",
                }}
              >
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse" />
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {t("hero.badge.available")}
                </span>
              </div>

              {/* Main Headline */}
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6 transition-all duration-1000 delay-200 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <span className="text-gray-800 dark:text-gray-200">
                  {t("hero.greeting")}
                </span>
                <br />
                <span
                  className="bg-clip-text text-transparent font-extrabold"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, var(--primary), var(--secondary), var(--accent))",
                    backgroundSize: "200% 200%",
                    animation: "gradient-x 4s ease infinite",
                    textDecoration: "none",
                  }}
                >
                  {t("hero.name")}
                </span>
                <br />
                <span className="text-gray-700 dark:text-gray-300 text-3xl md:text-4xl lg:text-5xl">
                  {t("hero.title")} & {t("hero.subtitle")}
                </span>
              </h1>

              {/* Subtitle */}
              <p
                className={`text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed transition-all duration-1000 delay-400 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {t("hero.description")}
              </p>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-4 lg:justify-start justify-center items-center mb-8 transition-all duration-1000 delay-600 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <button
                  onClick={() => scrollToSection("projects")}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <span className="flex items-center">
                    {t("hero.projects")}
                    <svg
                      className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </button>

                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-bold rounded-xl hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300"
                >
                  {t("hero.contact")}
                </button>
              </div>
            </div>

            {/* Right Side - Profile Image */}
            <div
              className={`flex flex-col items-center space-y-8 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-95"
              }`}
            >
              {/* Profile Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl">
                  <Image
                    src="/profile.jpg"
                    alt="Luis Guedes - Full Stack Developer"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover object-center"
                    priority
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </div>
                {/* Floating badges around profile */}
                <div className="absolute -top-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                  Full Stack
                </div>
                <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce delay-500">
                  2+ Anos
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack Icons */}
          <div
            className={`flex justify-center items-center gap-8 flex-wrap mt-16 transition-all duration-1000 delay-800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {techIcons.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                  style={{ animationDelay: tech.delay }}
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:shadow-xl">
                    <IconComponent
                      size={32}
                      color={tech.color}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  {/* Tooltip */}
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap">
                      {tech.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats Section */}
          <div
            className={`mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
              <div className="text-4xl font-black text-blue-600 dark:text-blue-400 mb-2">
                8+
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {t("about.projects")}
              </div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
              <div className="text-4xl font-black text-blue-600 dark:text-blue-400 mb-2">
                2+
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {t("about.experience")}
              </div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
              <div className="text-4xl font-black text-blue-600 dark:text-blue-400 mb-2">
                100%
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {t("cred.metrics.satisfaction")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-600 dark:border-blue-400 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
