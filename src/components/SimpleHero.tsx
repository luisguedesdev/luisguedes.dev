"use client";

import Image from "next/image";

export default function SimpleHero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="pt-16 min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-10 w-96 h-96 border border-orange-500/20 rounded-full"></div>
        <div className="absolute top-1/4 right-20 w-80 h-80 border border-orange-500/10 rounded-full"></div>
        <div className="absolute bottom-1/4 left-10 opacity-10">
          <svg
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="absolute top-1/2 left-20 opacity-10">
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L3 7l9 5 9-5-9-5z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 12l9 5 9-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 17l9 5 9-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[90vh] py-12">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Hello<span className="text-orange-500">.</span>
              </h1>
              <div className="border-l-4 border-orange-500 pl-6 mb-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light">
                  I&apos;m Luis
                </h2>
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
                Software Developer
              </h3>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 bg-orange-500 text-white font-semibold rounded-none hover:bg-orange-600 transition-colors"
              >
                Got a project?
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-4 border-2 border-gray-400 text-gray-300 font-semibold rounded-none hover:border-orange-500 hover:text-orange-500 transition-colors"
              >
                My resume
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Orange circle background */}
              <div className="w-96 h-96 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center relative">
                <div className="w-80 h-80 rounded-full overflow-hidden">
                  <Image
                    src="/profile.jpg"
                    alt="Luis Guedes - Software Developer"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Decorative bracket elements */}
              <div className="absolute -top-8 -left-8 text-orange-500/30">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="absolute -bottom-8 -right-8 text-orange-500/30">
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack - Bottom */}
        <div className="pb-12">
          <div className="flex justify-center lg:justify-start items-center gap-12 flex-wrap text-gray-500">
            <span className="text-lg font-medium">HTML5</span>
            <span className="text-lg font-medium">CSS</span>
            <span className="text-lg font-medium">Javascript</span>
            <span className="text-lg font-medium">Node.js</span>
            <span className="text-lg font-medium">React</span>
            <span className="text-lg font-medium">Git</span>
            <span className="text-lg font-medium">Github</span>
          </div>
        </div>
      </div>
    </section>
  );
}
