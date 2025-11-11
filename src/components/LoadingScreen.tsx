"use client";
import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900 flex items-center justify-center">
      <div className="text-center">
        {/* Logo Animation */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-4">
            <div className="w-full h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center animate-pulse">
              <span className="text-3xl font-bold text-white animate-bounce">
                LG
              </span>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Luis Guedes</h1>
          <p className="text-cyan-300">Desenvolvedor Full Stack</p>
        </div>

        {/* Loading Animation */}
        <div className="mb-8">
          <div className="flex justify-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-100"></div>
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce delay-200"></div>
          </div>

          {/* Progress Bar */}
          <div className="w-64 mx-auto bg-slate-700 rounded-full h-2 mb-4">
            <div
              className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <p className="text-gray-400 text-sm">{progress}%</p>
        </div>

        {/* Loading Text */}
        <div className="text-gray-500 text-sm animate-pulse">
          Carregando experiências incríveis...
        </div>
      </div>
    </div>
  );
}
