"use client";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme, setSystemTheme } = useTheme();

  return (
    <div className="flex gap-2 items-center">
      <button
        className="p-2 rounded bg-gray-200 dark:bg-gray-700"
        onClick={toggleTheme}
        aria-label="Alternar tema"
        type="button"
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
      <button
        className="text-xs underline"
        onClick={setSystemTheme}
        type="button"
      >
        Sistema
      </button>
    </div>
  );
}
