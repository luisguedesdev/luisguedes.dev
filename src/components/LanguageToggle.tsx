"use client";
import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center bg-gray-800 rounded-lg p-1">
      <button
        onClick={() => setLanguage("pt")}
        className={`px-3 py-1 rounded text-sm font-medium transition-all ${
          language === "pt" ? "text-white" : "text-gray-400 hover:text-white"
        }`}
        style={language === "pt" ? { backgroundColor: "var(--primary)" } : {}}
      >
        PT
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 rounded text-sm font-medium transition-all ${
          language === "en" ? "text-white" : "text-gray-400 hover:text-white"
        }`}
        style={language === "en" ? { backgroundColor: "var(--primary)" } : {}}
      >
        EN
      </button>
    </div>
  );
}
