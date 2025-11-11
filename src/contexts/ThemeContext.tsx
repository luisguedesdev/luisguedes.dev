"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Theme = "light" | "dark" | "system";
type ThemeContextType = {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  toggleTheme: () => void;
  setSystemTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = (localStorage.getItem("theme") as Theme) || "system";
    setTheme(initialTheme);

    const applyTheme = (themeValue: Theme) => {
      let effectiveTheme: "light" | "dark";
      if (themeValue === "dark") {
        effectiveTheme = "dark";
        root.classList.add("dark");
      } else if (themeValue === "light") {
        effectiveTheme = "light";
        root.classList.remove("dark");
      } else {
        const isDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        effectiveTheme = isDark ? "dark" : "light";
        if (isDark) {
          root.classList.add("dark");
        } else {
          root.classList.remove("dark");
        }
      }
      setResolvedTheme(effectiveTheme);
    };

    applyTheme(initialTheme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(() => {
      const newTheme = resolvedTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const setSystemTheme = () => {
    setTheme("system");
    localStorage.setItem("theme", "system");
  };

  return (
    <ThemeContext.Provider
      value={{ theme, resolvedTheme, toggleTheme, setSystemTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}
