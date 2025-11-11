import "./globals.css";
import { ThemeProvider } from "../contexts/ThemeContext";
import { LanguageProvider } from "../contexts/LanguageContext";
import LoadingScreen from "../components/LoadingScreen";
import type { ReactNode } from "react";

export const metadata = {
  title: "Luis Guedes - Desenvolvedor Full Stack",
  description:
    "Portfólio de Luis Guedes - Desenvolvedor Full Stack especializado em React, Node.js e soluções modernas",
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
            <LoadingScreen />
            <div
              style={{ minHeight: "100vh", background: "var(--background)" }}
            >
              {children}
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
