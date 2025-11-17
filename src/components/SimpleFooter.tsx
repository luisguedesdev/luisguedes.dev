"use client";

import { useCallback } from "react";
import type { IconType } from "react-icons";
import {
  FiArrowRight,
  FiClock,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import { useLanguage } from "../contexts/LanguageContext";

type SupportedLanguage = "pt" | "en";

interface ContactItem {
  icon: IconType;
  title: Record<SupportedLanguage, string>;
  value: Record<SupportedLanguage, string>;
  helper: Record<SupportedLanguage, string>;
}

const FOOTER_COPY: Record<
  SupportedLanguage,
  {
    heading: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    highlight: string;
    infoTitle: string;
    quickLinksTitle: string;
    socialTitle: string;
    bottomText: string;
  }
> = {
  pt: {
    heading: "Vamos construir algo impactante?",
    subtitle:
      "Estou aberto a novos desafios, parcerias e oportunidades que valorizem qualidade de código, performance e UX.",
    primaryCta: "Enviar email",
    secondaryCta: "Perfil no LinkedIn",
    highlight: "Disponível para novos projetos",
    infoTitle: "Informações de contato",
    quickLinksTitle: "Navegação",
    socialTitle: "Conecte-se",
    bottomText: "Todos os direitos reservados.",
  },
  en: {
    heading: "Ready to build something impactful?",
    subtitle:
      "I am open to new challenges, partnerships and opportunities that value code quality, performance and UX.",
    primaryCta: "Send an email",
    secondaryCta: "LinkedIn profile",
    highlight: "Available for new projects",
    infoTitle: "Contact information",
    quickLinksTitle: "Navigation",
    socialTitle: "Connect",
    bottomText: "All rights reserved.",
  },
};

const CONTACT_ITEMS: ContactItem[] = [
  {
    icon: FiMail,
    title: { pt: "Email", en: "Email" },
    value: {
      pt: "luisguedes@email.com",
      en: "luisguedes@email.com",
    },
    helper: {
      pt: "Resposta em até 24 horas",
      en: "Reply within 24 hours",
    },
  },
  {
    icon: FiMapPin,
    title: { pt: "Localização", en: "Location" },
    value: { pt: "Brasil", en: "Brazil" },
    helper: {
      pt: "Atuação remota e híbrida",
      en: "Remote and hybrid work",
    },
  },
  {
    icon: FiClock,
    title: { pt: "Disponibilidade", en: "Availability" },
    value: {
      pt: "Seg - Sex, 9h às 18h",
      en: "Mon - Fri, 9am to 6pm",
    },
    helper: {
      pt: "Fuso horário BRT",
      en: "Timezone BRT",
    },
  },
];

const QUICK_LINKS: Array<{
  id: string;
  label: Record<SupportedLanguage, string>;
}> = [
  { id: "home", label: { pt: "Início", en: "Home" } },
  { id: "skills", label: { pt: "Habilidades", en: "Skills" } },
  { id: "projects", label: { pt: "Projetos", en: "Projects" } },
];

const SOCIAL_LINKS: Array<{ icon: IconType; label: string; href: string }> = [
  {
    icon: FiGithub,
    label: "GitHub",
    href: "https://github.com/luisguedesdev",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/luisguedes",
  },
];

export default function SimpleFooter() {
  const { language } = useLanguage();
  const copy = FOOTER_COPY[language as SupportedLanguage];
  const currentYear = new Date().getFullYear();

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-slate-900/5 py-24 transition-colors dark:bg-slate-950"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-orange-500/12 blur-3xl dark:bg-orange-500/15" />
        <div className="absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl dark:bg-amber-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(14,116,144,0.05),_transparent_55%)] dark:bg-[radial-gradient(circle_at_bottom,_rgba(255,255,255,0.03),_transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr),minmax(0,0.85fr)]">
          <div className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-xl shadow-slate-200/60 dark:border-white/10 dark:bg-slate-900/70 dark:shadow-slate-950/40">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-orange-600 dark:text-orange-200">
              <span className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_12px_rgba(190,242,100,0.8)]" />
              {copy.highlight}
            </span>
            <h2 className="mt-6 text-3xl font-semibold text-slate-900 transition-colors sm:text-4xl dark:text-white">
              {copy.heading}
            </h2>
            <p className="mt-4 text-base text-slate-600 transition-colors sm:text-lg dark:text-slate-300">
              {copy.subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:luisguedes@email.com"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <FiMail className="h-5 w-5" />
                {copy.primaryCta}
              </a>
              <a
                href="https://linkedin.com/in/luisguedes"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-slate-200/80 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-orange-500/30 hover:text-orange-600 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-orange-500/30 dark:hover:bg-white/10"
              >
                <FiLinkedin className="h-5 w-5" />
                {copy.secondaryCta}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <FiArrowRight className="h-4 w-4 text-orange-500 dark:text-orange-300" />
              <span className="text-slate-600 dark:text-slate-400">
                {language === "pt"
                  ? "Projetos sob medida, com comunicação clara do início ao fim."
                  : "Tailor-made projects with clear communication from start to finish."}
              </span>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-lg shadow-slate-200/50 dark:border-white/10 dark:bg-slate-900/60 dark:shadow-slate-950/40">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {copy.infoTitle}
              </h3>
              <ul className="mt-6 space-y-5">
                {CONTACT_ITEMS.map(({ icon: Icon, title, value, helper }) => (
                  <li key={title.en} className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-600 dark:text-orange-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        {title[language as SupportedLanguage]}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-200">
                        {value[language as SupportedLanguage]}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {helper[language as SupportedLanguage]}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-lg shadow-slate-200/50 dark:border-white/10 dark:bg-slate-900/60 dark:shadow-slate-950/40">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {copy.quickLinksTitle}
                </h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {QUICK_LINKS.map((link) => (
                    <button
                      key={link.id}
                      type="button"
                      onClick={() => scrollToSection(link.id)}
                      className="rounded-full border border-slate-200/70 px-4 py-2 text-xs font-semibold text-slate-600 transition-colors duration-200 hover:border-orange-500/30 hover:text-orange-600 dark:border-white/15 dark:text-slate-200 dark:hover:text-white"
                    >
                      {link.label[language as SupportedLanguage]}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-lg shadow-slate-200/50 dark:border-white/10 dark:bg-slate-900/60 dark:shadow-slate-950/40">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {copy.socialTitle}
                </h3>
                <div className="mt-4 flex gap-3">
                  {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200/70 bg-white text-slate-600 transition-colors duration-200 hover:border-orange-500/40 hover:text-orange-600 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:text-white"
                      aria-label={label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-200/70 pt-8 dark:border-white/10">
          <div className="flex flex-col gap-4 text-center text-sm text-slate-500 transition-colors md:flex-row md:items-center md:justify-between dark:text-slate-400">
            <p className="text-slate-600 dark:text-slate-400">
              © {currentYear} Luis Guedes. {copy.bottomText}
            </p>
            <div className="flex items-center justify-center gap-6">
              {QUICK_LINKS.map((link) => (
                <button
                  key={`bottom-${link.id}`}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className="transition-colors duration-200 hover:text-orange-600 dark:hover:text-white"
                >
                  {link.label[language as SupportedLanguage]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
