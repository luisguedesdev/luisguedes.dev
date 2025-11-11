"use client";

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900">
      <div className="relative">
        {/* Spinner principal */}
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

        {/* Logo no centro */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">LG</span>
          </div>
        </div>
      </div>

      {/* Texto de carregamento */}
      <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2">
        <p className="text-blue-400 font-medium animate-pulse">Carregando...</p>
      </div>
    </div>
  );
}
