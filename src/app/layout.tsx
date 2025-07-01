import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import type { ReactNode } from "react";

export const metadata = {
  title: "Portfólio Luis Guedes Dev",
  description: "Portfólio criado em Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
