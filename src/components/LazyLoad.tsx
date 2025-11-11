"use client";
import { useState, useEffect, useRef, ReactNode } from "react";

interface LazyLoadProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
  fallback?: ReactNode;
}

export default function LazyLoad({
  children,
  threshold = 0.1,
  rootMargin = "50px",
  fallback = (
    <div className="w-full h-64 flex items-center justify-center bg-slate-800/30 rounded-lg">
      <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  ),
}: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true);
          setHasLoaded(true);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, hasLoaded]);

  return (
    <div ref={ref} className="w-full">
      {isVisible ? children : fallback}
    </div>
  );
}
