"use client";
import { useState } from "react";

export default function ModernFooter() {
  const [email, setEmail] = useState("");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    alert("Obrigado por se inscrever! Em breve você receberá novidades.");
    setEmail("");
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/luisguedesdev",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/luisguedesdev",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      url: "https://twitter.com/luisguedesdev",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://instagram.com/luisguedesdev",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  const quickLinks = [
    { name: "Sobre", action: () => scrollToSection("about") },
    { name: "Habilidades", action: () => scrollToSection("skills") },
    { name: "Projetos", action: () => scrollToSection("projects") },
    { name: "Contato", action: () => scrollToSection("contact") },
  ];

  return (
    <footer
      id="contact"
      className="bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div
          className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(220, 38, 38, 0.05)" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(185, 28, 28, 0.05)" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="text-4xl font-black text-white mb-6">
              Vamos{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  background:
                    "linear-gradient(to right, var(--primary), var(--secondary))",
                }}
              >
                conversar
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Estou sempre interessado em novos projetos e oportunidades. Vamos
              transformar suas ideias em realidade!
            </p>

            {/* Contact Methods */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(to right, var(--primary), var(--secondary))",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-gray-400">luisguedesdev@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(to right, var(--secondary), var(--accent))",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">LinkedIn</div>
                  <div className="text-gray-400">
                    linkedin.com/in/luisguedesdev
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(to right, var(--accent), var(--primary))",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold">Localização</div>
                  <div className="text-gray-400">Brasil</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">
                Me siga nas redes
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:transform hover:scale-110"
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Newsletter & Quick Links */}
          <div>
            {/* Newsletter */}
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Fique por dentro das novidades
              </h3>
              <p className="text-gray-400 mb-6">
                Receba dicas de desenvolvimento, projetos interessantes e
                oportunidades.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor email"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-400/50 focus:ring-2 focus:ring-red-400/20 transition-all duration-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-white font-bold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg"
                  style={{
                    background:
                      "linear-gradient(to right, var(--primary), var(--secondary))",
                  }}
                >
                  Inscrever-se
                </button>
              </form>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
              <div className="grid grid-cols-2 gap-4">
                {quickLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={link.action}
                    className="text-left p-3 bg-slate-800/30 hover:bg-slate-700/50 border border-slate-700/50 rounded-lg text-gray-400 hover:text-white transition-all duration-300"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Luis Guedes. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Feito com ❤️ e muito ☕</span>
              <div className="flex items-center space-x-2">
                <span>Powered by</span>
                <span
                  className="bg-clip-text text-transparent font-semibold"
                  style={{
                    background:
                      "linear-gradient(to right, var(--primary), var(--secondary))",
                  }}
                >
                  Next.js
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
