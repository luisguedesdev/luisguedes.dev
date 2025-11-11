import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuração básica e limpa
  images: {
    formats: ["image/webp"],
    deviceSizes: [640, 828, 1200, 1920],
  },
};
export default nextConfig;
