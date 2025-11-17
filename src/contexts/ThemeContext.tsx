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
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      const stored = localStorage.getItem("theme") as Theme | null;
      if (stored === "light" || stored === "dark") {
        setTheme(stored);
      } else {
        setTheme("system");
      }
    } catch {
      setTheme("system");
    }
  }, []);

  const applyTheme = React.useCallback((preference: Theme) => {
    if (typeof window === "undefined") {
      return;
    }

    const root = window.document.documentElement;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const effectiveTheme: "light" | "dark" =
      preference === "system" ? (prefersDark ? "dark" : "light") : preference;

    if (effectiveTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    setResolvedTheme(effectiveTheme);
  }, []);

  useEffect(() => {
    applyTheme(theme);

    if (typeof window === "undefined") {
      return;
    }

    try {
      if (theme === "system") {
        localStorage.removeItem("theme");
      } else {
        localStorage.setItem("theme", theme);
      }
    } catch {}
  }, [theme, applyTheme]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (theme !== "system") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => applyTheme("system");

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme, applyTheme]);

  const toggleTheme = () => {
    setTheme((current) => {
      if (current === "system") {
        return resolvedTheme === "dark" ? "light" : "dark";
      }
      if (current === "light") {
        return "dark";
      }
      return "system";
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}
