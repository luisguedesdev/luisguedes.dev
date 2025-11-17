"use client";

import type { IconType } from "react-icons";
import { FiCode, FiDatabase, FiTool, FiTrendingUp } from "react-icons/fi";
import { useLanguage } from "../contexts/LanguageContext";

type SupportedLanguage = "pt" | "en";

interface SkillItem {
  name: string;
  level: number;
}

interface SkillGroup {
  id: string;
  icon: IconType;
  label: Record<SupportedLanguage, string>;
  items: SkillItem[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "frontend",
    icon: FiCode,
    label: { pt: "Frontend", en: "Frontend" },
    items: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    id: "backend",
    icon: FiDatabase,
    label: { pt: "Backend", en: "Backend" },
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "Python", level: 65 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    id: "tooling",
    icon: FiTool,
    label: { pt: "Ferramentas", en: "Tooling" },
    items: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 60 },
      { name: "Figma", level: 75 },
      { name: "VS Code", level: 95 },
      { name: "Linux", level: 80 },
    ],
  },
];

const COPY: Record<SupportedLanguage, { heading: string; subtitle: string }> = {
  pt: {
    heading: "Stack técnico sempre atualizado",
    subtitle:
      "Metodologias, ferramentas e tecnologias que utilizo para entregar produtos robustos do frontend ao backend.",
  },
  en: {
    heading: "A future-proof technical stack",
    subtitle:
      "Methodologies, tools and technologies I use to deliver robust products from frontend to backend.",
  },
};

const SKILL_STATS: Record<
  SupportedLanguage,
  Array<{ value: string; label: string; icon: IconType }>
> = {
  pt: [
    { value: "08+", label: "Projetos entregues", icon: FiTrendingUp },
    { value: "4.8/5", label: "Avaliação dos clientes", icon: FiCode },
    { value: "100%", label: "Compromisso com prazos", icon: FiTool },
  ],
  en: [
    { value: "08+", label: "Projects delivered", icon: FiTrendingUp },
    { value: "4.8/5", label: "Client rating", icon: FiCode },
    { value: "100%", label: "Deadline commitment", icon: FiTool },
  ],
};

export default function SimpleSkills() {
  const { language } = useLanguage();
  const copy = COPY[language as SupportedLanguage];
  const stats = SKILL_STATS[language as SupportedLanguage];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-50 py-24 transition-colors dark:bg-slate-950/95"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-1/3 h-72 w-72 rounded-full bg-orange-500/15 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl dark:bg-amber-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(14,116,144,0.04),_transparent_60%)] dark:bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03),_transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-orange-600 dark:text-orange-200">
            Skills
          </span>
          <h2 className="mt-6 text-3xl font-semibold text-slate-900 transition-colors sm:text-4xl dark:text-white">
            {copy.heading}
          </h2>
          <p className="mt-4 text-base text-slate-600 transition-colors sm:text-lg dark:text-slate-300">
            {copy.subtitle}
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {SKILL_GROUPS.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.id}
                className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-6 shadow-lg shadow-slate-200/40 transition-transform duration-200 hover:-translate-y-1 dark:border-white/10 dark:bg-slate-900/40 dark:shadow-slate-950/30"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500/20 via-orange-500/10 to-amber-400/10 text-orange-600 dark:text-orange-300">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {group.label[language as SupportedLanguage]}
                  </h3>
                </div>

                <div className="mt-6 space-y-4">
                  {group.items.map((skill) => (
                    <div
                      key={`${group.id}-${skill.name}`}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-200">
                        <span className="font-medium text-slate-900 dark:text-white">
                          {skill.name}
                        </span>
                        <span className="text-xs text-slate-400 dark:text-slate-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800/80">
                        <span
                          className="block h-full rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {stats.map(({ value, label, icon: StatIcon }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 rounded-3xl border border-slate-200/70 bg-white p-6 text-center shadow-lg shadow-slate-200/40 dark:border-white/10 dark:bg-slate-900/50 dark:shadow-slate-950/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-600 dark:text-orange-300">
                <StatIcon className="h-6 w-6" />
              </span>
              <span className="text-3xl font-semibold text-orange-500 dark:text-orange-300">
                {value}
              </span>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
