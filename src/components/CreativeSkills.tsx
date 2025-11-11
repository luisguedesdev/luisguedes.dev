"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaHtml5,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiGraphql,
  SiFigma,
  SiLinux,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

export default function CreativeSkills() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("skills");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const translations = {
    pt: {
      title: "Minhas",
      titleHighlight: "Habilidades",
      subtitle:
        "Tecnologias e ferramentas que domino para criar soluções incríveis",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Ferramentas",
      funFact: "Sempre aprendendo algo novo todos os dias!",
    },
    en: {
      title: "My",
      titleHighlight: "Skills",
      subtitle: "Technologies and tools I master to create amazing solutions",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools",
      funFact: "Always learning something new every day!",
    },
  };

  const t = translations[language as keyof typeof translations];

  const skillCategories = {
    frontend: {
      title: t.frontend,
      icon: (
        <svg
          width="20"
          height="20"
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
      color: "var(--primary-blue)",
      skills: [
        {
          name: "React",
          level: 90,
          icon: <FaReact className="text-blue-400" />,
        },
        {
          name: "Next.js",
          level: 85,
          icon: <SiNextdotjs className="text-gray-800 dark:text-white" />,
        },
        {
          name: "TypeScript",
          level: 80,
          icon: <SiTypescript className="text-blue-600" />,
        },
        {
          name: "Tailwind CSS",
          level: 95,
          icon: <SiTailwindcss className="text-cyan-400" />,
        },
        {
          name: "JavaScript",
          level: 90,
          icon: <FaJs className="text-yellow-400" />,
        },
        {
          name: "HTML/CSS",
          level: 95,
          icon: <FaHtml5 className="text-orange-600" />,
        },
      ],
    },
    backend: {
      title: t.backend,
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H19V9Z"
            fill="currentColor"
          />
        </svg>
      ),
      color: "var(--secondary-blue)",
      skills: [
        {
          name: "Node.js",
          level: 85,
          icon: <FaNodeJs className="text-green-600" />,
        },
        {
          name: "Express",
          level: 80,
          icon: <SiExpress className="text-gray-700 dark:text-gray-300" />,
        },
        {
          name: "PostgreSQL",
          level: 75,
          icon: <SiPostgresql className="text-blue-700" />,
        },
        {
          name: "MongoDB",
          level: 70,
          icon: <SiMongodb className="text-green-500" />,
        },
        {
          name: "Python",
          level: 75,
          icon: <FaPython className="text-blue-500" />,
        },
        {
          name: "GraphQL",
          level: 65,
          icon: <SiGraphql className="text-pink-500" />,
        },
      ],
    },
    tools: {
      title: t.tools,
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"
            fill="currentColor"
          />
        </svg>
      ),
      color: "var(--accent-blue)",
      skills: [
        {
          name: "Git",
          level: 85,
          icon: <FaGitAlt className="text-orange-600" />,
        },
        {
          name: "Docker",
          level: 70,
          icon: <FaDocker className="text-blue-500" />,
        },
        { name: "AWS", level: 60, icon: <FaAws className="text-orange-400" /> },
        {
          name: "Figma",
          level: 75,
          icon: <SiFigma className="text-purple-500" />,
        },
        {
          name: "VS Code",
          level: 95,
          icon: <VscCode className="text-blue-600" />,
        },
        {
          name: "Linux",
          level: 80,
          icon: <SiLinux className="text-gray-800 dark:text-yellow-400" />,
        },
      ],
    },
  };

  return (
    <section
      id="skills"
      className="py-20 bg-slate-900 relative overflow-hidden"
    >
      {/* Background effects com cores azuis */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            {t.title}{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              {t.titleHighlight}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className={`flex justify-center mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-2 border border-slate-700">
            <div className="flex space-x-2">
              {Object.entries(skillCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                    activeCategory === key
                      ? `text-white shadow-lg bg-gradient-to-r from-blue-500 to-blue-600`
                      : "text-gray-400 hover:text-white hover:bg-slate-700/50"
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div
          className={`transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories[
              activeCategory as keyof typeof skillCategories
            ].skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Skill Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{skill.icon}</div>
                    <div>
                      <h3 className="text-white font-bold text-lg">
                        {skill.name}
                      </h3>
                      <div className="text-gray-400 text-sm">
                        {skill.level}%
                      </div>
                    </div>
                  </div>
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform bg-gradient-to-r from-blue-500 to-blue-600`}
                  >
                    {skill.level}%
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-1000 ease-out bg-gradient-to-r from-blue-400 to-blue-600`}
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        animationDelay: `${index * 200}ms`,
                      }}
                    ></div>
                  </div>
                </div>

                {/* Animated dots */}
                <div className="flex justify-center mt-4 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all duration-300`}
                      style={{
                        animationDelay: `${index * 100 + i * 50}ms`,
                        backgroundColor:
                          i < Math.floor(skill.level / 20)
                            ? "#3b82f6"
                            : "rgb(71 85 105)",
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fun fact */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full backdrop-blur-sm bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30">
            <span className="mr-2 text-blue-400">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H19V9Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="text-gray-300">{t.funFact}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
