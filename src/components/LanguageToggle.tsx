"use client";
import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center rounded-lg border border-slate-200/70 bg-slate-100 p-1 shadow-sm dark:border-white/10 dark:bg-slate-800/80">
      <button
        onClick={() => setLanguage("pt")}
        className={`px-3 py-1 rounded text-sm font-medium transition-all ${
          language === "pt"
            ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white"
            : "text-slate-500 hover:text-slate-700 dark:text-slate-300 dark:hover:text-slate-100"
        }`}
      >
        PT
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 rounded text-sm font-medium transition-all ${
          language === "en"
            ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white"
            : "text-slate-500 hover:text-slate-700 dark:text-slate-300 dark:hover:text-slate-100"
        }`}
      >
        EN
      </button>
    </div>
  );
}
