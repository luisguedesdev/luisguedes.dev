import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "../contexts/LanguageContext";
import type { ReactNode } from "react";

export const metadata = {
  title: "Portfólio Luis Guedes Dev",
  description: "Portfólio criado em Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <body
        style={{
          background: "var(--background)",
          color: "var(--foreground)",
          minHeight: "100vh",
        }}
      >
        <ThemeProvider>
          <LanguageProvider>
            <div style={{ minHeight: "100vh", background: "var(--background)" }}>
              {children}
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
