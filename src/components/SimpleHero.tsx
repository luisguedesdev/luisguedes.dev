"use client";

import Image from "next/image";
import { useCallback } from "react";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiGithub,
  FiMail,
} from "react-icons/fi";
import { useLanguage } from "../contexts/LanguageContext";

type SupportedLanguage = "pt" | "en";

interface HeroCopy {
  intro: string;
  badge: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
  response: string;
  floatingTitle: string;
  floatingSubtitle: string;
  bottomCardTitle: string;
  bottomCardSubtitle: string;
}

const HERO_COPY: Record<SupportedLanguage, HeroCopy> = {
  pt: {
    intro: "Olá, eu sou Luis Guedes",
    badge: "Disponível para novos projetos",
    title: "Crio experiências digitais modernas, rápidas e acessíveis.",
    subtitle:
      "Desenvolvedor full stack com foco em interfaces encantadoras, performance e código escalável.",
    primaryCta: "Iniciar conversa",
    secondaryCta: "Ver portfólio",
    response: "Resposta em até 24 horas",
    floatingTitle: "Projeto mais recente",
    floatingSubtitle: "Dashboard de analytics v2",
    bottomCardTitle: "Entrego produtos prontos para crescer",
    bottomCardSubtitle:
      "Parcerias com equipes de marketing, produto e tecnologia.",
  },
  en: {
    intro: "Hi, I'm Luis Guedes",
    badge: "Available for new projects",
    title: "I craft modern, fast and accessible digital experiences.",
    subtitle:
      "Full stack developer focused on delightful interfaces, performance and scalable code.",
    primaryCta: "Start a conversation",
    secondaryCta: "View portfolio",
    response: "Reply within 24 hours",
    floatingTitle: "Latest project shipped",
    floatingSubtitle: "Analytics dashboard v2",
    bottomCardTitle: "Building products ready to scale",
    bottomCardSubtitle:
      "Collaborating with marketing, product and engineering teams.",
  },
};

const HERO_STATS: Record<
  SupportedLanguage,
  Array<{ value: string; label: string }>
> = {
  pt: [
    { value: "08+", label: "Projetos entregues" },
    { value: "03+", label: "Anos de experiência" },
    { value: "24h", label: "Tempo médio de resposta" },
  ],
  en: [
    { value: "08+", label: "Projects delivered" },
    { value: "03+", label: "Years of experience" },
    { value: "24h", label: "Average reply time" },
  ],
};

const HERO_HIGHLIGHTS: Record<SupportedLanguage, string[]> = {
  pt: [
    "UX focado em conversão",
    "Integrações modernas e automações",
    "Código testado e documentação clara",
    "Deploy monitorado e observabilidade",
  ],
  en: [
    "Conversion-driven UX",
    "Modern integrations and automations",
    "Tested code with clear documentation",
    "Monitored deploy and observability",
  ],
};

const TOOL_STACK = [
  "React 19",
  "Next.js 15",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "AWS",
];

export default function SimpleHero() {
  const { language } = useLanguage();
  const content = HERO_COPY[language as SupportedLanguage];
  const stats = HERO_STATS[language as SupportedLanguage];
  const highlights = HERO_HIGHLIGHTS[language as SupportedLanguage];

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-16 pb-28 text-slate-900 transition-colors sm:pt-20 dark:bg-slate-950 dark:text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-[15%] h-80 w-80 -translate-x-1/2 rounded-full bg-orange-500/15 blur-3xl dark:bg-orange-500/20" />
        <div className="absolute -bottom-36 right-[10%] h-96 w-96 rounded-full bg-amber-400/10 blur-3xl dark:bg-amber-500/15" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,116,144,0.05),_transparent_55%)] dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.04),_transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr),minmax(0,1.1fr)] lg:items-center">
          <div className="order-2 space-y-10 lg:order-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-orange-600 dark:text-orange-200">
              <span className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_12px_rgba(190,242,100,0.8)]" />
              {content.badge}
            </span>

            <div className="space-y-5">
              <p className="text-xs font-medium uppercase tracking-[0.4em] text-orange-500 dark:text-orange-200/90">
                {content.intro}
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
                <span className="bg-gradient-to-r from-orange-200 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                  {content.title}
                </span>
              </h1>
              <p className="max-w-2xl text-base text-slate-600 sm:text-lg dark:text-slate-200">
                {content.subtitle}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <FiMail className="h-5 w-5" />
                {content.primaryCta}
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="group inline-flex items-center justify-center gap-3 rounded-xl border border-slate-200/80 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-orange-500/30 hover:text-orange-600 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-orange-500/40 dark:hover:bg-white/10"
              >
                <span>{content.secondaryCta}</span>
                <FiArrowUpRight className="h-5 w-5 text-orange-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 dark:text-orange-300" />
              </button>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {content.response}
            </p>

            <ul className="grid gap-3 sm:grid-cols-2">
              {highlights.map((highlight, index) => (
                <li
                  key={`${highlight}-${index}`}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white/80 p-4 text-sm text-slate-600 shadow-sm shadow-slate-200/40 backdrop-blur dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-200 dark:shadow-slate-900/30"
                >
                  <FiCheckCircle className="mt-0.5 h-5 w-5 text-orange-500 dark:text-orange-400" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-3">
              {TOOL_STACK.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200/70 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md">
              <div className="absolute -inset-10 hidden rounded-[42px] bg-gradient-to-br from-orange-500/15 via-transparent to-amber-400/10 blur-3xl sm:block dark:from-orange-500/20 dark:to-amber-500/10" />

              <div className="relative aspect-[3/4] overflow-hidden rounded-[36px] border border-slate-200/80 bg-white shadow-2xl shadow-slate-200/60 dark:border-white/10 dark:bg-slate-900/60 dark:shadow-slate-950/40">
                <div className="absolute inset-0 rounded-[36px] border border-orange-500/10 bg-gradient-to-br from-orange-500/15 via-transparent to-amber-500/20 dark:border-white/10" />
                <div className="absolute inset-[14px] overflow-hidden rounded-[28px] border border-slate-200/70 bg-slate-900/5 dark:border-white/5 dark:bg-slate-950/80">
                  <Image
                    src="/profile.jpg"
                    alt="Luis Guedes"
                    fill
                    sizes="(max-width: 768px) 320px, (max-width: 1024px) 420px, 480px"
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>

                <div className="absolute left-6 top-6 hidden max-w-[210px] rounded-2xl border border-slate-200/70 bg-white/90 px-4 py-3 text-xs text-slate-600 shadow-lg shadow-slate-200/60 backdrop-blur sm:block dark:border-white/10 dark:bg-slate-950/80 dark:text-slate-200 dark:shadow-slate-950/40">
                  <div className="flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.4em] text-orange-500 dark:text-orange-200/80">
                    <FiGithub className="h-4 w-4" />
                    {content.floatingTitle}
                  </div>
                  <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                    {content.floatingSubtitle}
                  </p>
                </div>

                <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-slate-200/70 bg-white/90 p-4 text-sm text-slate-600 shadow-xl shadow-slate-200/60 backdrop-blur dark:border-white/10 dark:bg-slate-950/85 dark:text-slate-200 dark:shadow-slate-950/40">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {content.bottomCardTitle}
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {content.bottomCardSubtitle}
                  </p>
                </div>
              </div>

              <div className="absolute -right-24 top-16 hidden xl:flex flex-col gap-4">
                {stats.map((stat) => (
                  <div
                    key={`stat-desktop-${stat.label}`}
                    className="rounded-2xl border border-slate-200/70 bg-white/90 px-5 py-4 text-center shadow-lg shadow-slate-200/60 backdrop-blur dark:border-white/10 dark:bg-slate-950/80 dark:shadow-slate-950/40"
                  >
                    <span className="text-2xl font-semibold text-orange-500 dark:text-orange-200">
                      {stat.value}
                    </span>
                    <p className="mt-1 text-[0.6rem] uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3 xl:hidden">
              {stats.map((stat) => (
                <div
                  key={`stat-mobile-${stat.label}`}
                  className="rounded-2xl border border-slate-200/70 bg-white/90 p-4 text-center shadow-sm shadow-slate-200/40 dark:border-white/10 dark:bg-slate-900/60 dark:shadow-none"
                >
                  <span className="text-2xl font-semibold text-orange-500 dark:text-orange-200">
                    {stat.value}
                  </span>
                  <p className="mt-1 text-[0.65rem] uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
