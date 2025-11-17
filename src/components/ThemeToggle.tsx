"use client";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, resolvedTheme, toggleTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const label = (() => {
    if (theme === "system") {
      return isDark ? "Forçar tema claro" : "Forçar tema escuro";
    }
    if (theme === "light") {
      return "Ativar tema escuro";
    }
    return "Voltar para tema automático";
  })();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/70 bg-white/70 text-slate-600 transition-colors duration-200 hover:border-orange-500/40 hover:text-orange-500 dark:border-white/10 dark:bg-slate-900/40 dark:text-slate-200 dark:hover:text-white"
    >
      {isDark ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
      {theme === "system" && (
        <span
          className="absolute -bottom-1 right-1 inline-flex h-2 w-2 items-center justify-center rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(74,222,128,0.8)]"
          aria-hidden="true"
        />
      )}
    </button>
  );
}
