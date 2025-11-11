"use client";
import { useTheme } from "../contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme, setSystemTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <button
        className="p-2 rounded bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white"
        onClick={toggleTheme}
        aria-label="Alternar tema"
        type="button"
        title={theme === "dark" ? "Mudar para claro" : "Mudar para escuro"}
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
      <button
        className="text-xs underline text-gray-600 dark:text-gray-300"
        onClick={setSystemTheme}
        type="button"
        title="Usar tema do sistema"
      >
        Sistema
      </button>
    </div>
  );
}
