"use client";

import { useCallback } from "react";
import { FiExternalLink, FiGithub, FiTag } from "react-icons/fi";
import { useLanguage } from "../contexts/LanguageContext";

type SupportedLanguage = "pt" | "en";

interface ProjectCopy {
  title: Record<SupportedLanguage, string>;
  description: Record<SupportedLanguage, string>;
  category: Record<SupportedLanguage, string>;
  technologies: string[];
  demo: string;
  github: string;
}

const PROJECTS: ProjectCopy[] = [
  {
    title: {
      pt: "Sistema de Gestão Empresarial",
      en: "Business Management System",
    },
    description: {
      pt: "Plataforma completa para gestão de empresas com dashboard interativo e relatórios em tempo real.",
      en: "Complete business management platform with interactive dashboards and real-time reports.",
    },
    category: { pt: "Full Stack", en: "Full Stack" },
    technologies: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    demo: "#",
    github: "#",
  },
  {
    title: { pt: "E-commerce Moderno", en: "Modern E-commerce" },
    description: {
      pt: "Loja virtual responsiva com sistema de pagamentos integrado e painel administrativo.",
      en: "Responsive online store with integrated payments and an admin dashboard.",
    },
    category: { pt: "E-commerce", en: "E-commerce" },
    technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind"],
    demo: "#",
    github: "#",
  },
  {
    title: { pt: "App de Delivery", en: "Delivery App" },
    description: {
      pt: "Aplicativo mobile para delivery com geolocalização e notificações em tempo real.",
      en: "Mobile delivery app featuring geolocation and real-time notifications.",
    },
    category: { pt: "Mobile", en: "Mobile" },
    technologies: ["React Native", "Firebase", "Maps API"],
    demo: "#",
    github: "#",
  },
  {
    title: { pt: "Dashboard Analytics", en: "Analytics Dashboard" },
    description: {
      pt: "Painel de controle com visualizações de dados interativas e relatórios automatizados.",
      en: "Control panel with interactive data visualizations and automated reports.",
    },
    category: { pt: "Data Viz", en: "Data Viz" },
    technologies: ["Vue.js", "D3.js", "Python", "FastAPI"],
    demo: "#",
    github: "#",
  },
  {
    title: {
      pt: "Rede Social Profissional",
      en: "Professional Social Network",
    },
    description: {
      pt: "Plataforma de networking com sistema de mensagens e perfis personalizados.",
      en: "Networking platform with messaging system and customizable profiles.",
    },
    category: { pt: "Social", en: "Social" },
    technologies: ["React", "Socket.io", "Redis", "AWS"],
    demo: "#",
    github: "#",
  },
  {
    title: { pt: "Sistema de Reservas", en: "Booking System" },
    description: {
      pt: "Aplicação para reservas online com calendário interativo e confirmações automáticas.",
      en: "Online booking application with interactive calendar and automated confirmations.",
    },
    category: { pt: "Booking", en: "Booking" },
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Calendar API"],
    demo: "#",
    github: "#",
  },
];

const PROJECT_COPY: Record<
  SupportedLanguage,
  {
    badge: string;
    title: string;
    subtitle: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
  }
> = {
  pt: {
    badge: "Projetos em destaque",
    title: "Soluções que entregam valor real",
    subtitle:
      "Cada projeto é construído com foco em experiência, performance e resultados mensuráveis.",
    ctaTitle: "Gostou do que viu?",
    ctaSubtitle:
      "Vamos entender suas necessidades e planejar a próxima entrega juntos.",
    ctaButton: "Iniciar conversa",
  },
  en: {
    badge: "Featured projects",
    title: "Solutions that deliver real value",
    subtitle:
      "Every project is crafted with a focus on experience, performance and measurable results.",
    ctaTitle: "Like what you see?",
    ctaSubtitle:
      "Let's understand your needs and plan the next delivery together.",
    ctaButton: "Start a conversation",
  },
};

export default function SimpleProjects() {
  const { language } = useLanguage();
  const copy = PROJECT_COPY[language as SupportedLanguage];

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white py-24 transition-colors dark:bg-slate-950"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-0 h-72 w-72 rounded-full bg-orange-500/12 blur-3xl dark:bg-orange-500/15" />
        <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl dark:bg-amber-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,116,144,0.05),_transparent_55%)] dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.03),_transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-orange-600 dark:text-orange-200">
            <FiTag className="h-3.5 w-3.5" />
            {copy.badge}
          </span>
          <h2 className="mt-6 text-3xl font-semibold text-slate-900 transition-colors sm:text-4xl dark:text-white">
            {copy.title}
          </h2>
          <p className="mt-4 text-base text-slate-600 transition-colors sm:text-lg dark:text-slate-300">
            {copy.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <article
              key={`${project.title.en}-${index}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-6 shadow-lg shadow-slate-200/40 transition-transform duration-200 hover:-translate-y-1 hover:border-orange-500/30 dark:border-white/10 dark:bg-slate-900/60 dark:shadow-slate-950/40"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-200">
                  {project.category[language as SupportedLanguage]}
                </span>
                <span className="text-[0.65rem] uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">
                {project.title[language as SupportedLanguage]}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {project.description[language as SupportedLanguage]}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={`${project.title.en}-${tech}`}
                    className="rounded-full border border-slate-200/70 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-slate-800/70 dark:text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between pt-6">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 transition-colors duration-200 hover:text-orange-600 dark:text-orange-300 dark:hover:text-white"
                >
                  {language === "pt" ? "Ver demo" : "View demo"}
                  <FiExternalLink className="h-4 w-4" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 px-3 py-1.5 text-xs font-semibold text-slate-600 transition-colors duration-200 hover:border-orange-500/40 hover:text-orange-600 dark:border-white/10 dark:text-slate-200 dark:hover:text-white"
                >
                  <FiGithub className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <div className="w-full max-w-3xl rounded-3xl border border-slate-200/70 bg-white p-8 text-center shadow-xl shadow-slate-200/50 dark:border-white/10 dark:bg-slate-900/70 dark:shadow-slate-950/40">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
              {copy.ctaTitle}
            </h3>
            <p className="mt-3 text-sm text-slate-600 sm:text-base dark:text-slate-300">
              {copy.ctaSubtitle}
            </p>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-transform duration-200 hover:-translate-y-0.5"
            >
              {copy.ctaButton}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
