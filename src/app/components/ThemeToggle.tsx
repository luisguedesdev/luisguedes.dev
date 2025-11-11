"use client";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { resolvedTheme, toggleTheme, setSystemTheme } = useTheme();

  return (
    <div className="flex gap-2 items-center">
      <button
        className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors text-lg"
        onClick={toggleTheme}
        aria-label="Alternar tema"
        title={
          resolvedTheme === "dark" ? "Mudar para claro" : "Mudar para escuro"
        }
        type="button"
      >
        {resolvedTheme === "dark" ? "☀️" : "🌙"}
      </button>
      <button
        className="text-xs text-gray-400 hover:text-gray-300 transition-colors"
        onClick={setSystemTheme}
        title="Usar tema do sistema"
        type="button"
      >
        Sistema
      </button>
    </div>
  );
}
