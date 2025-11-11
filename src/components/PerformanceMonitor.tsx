"use client";
import { useEffect } from "react";

export default function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Web Vitals
    if (typeof window !== "undefined" && "performance" in window) {
      // DOM Content Loaded e Load metrics
      window.addEventListener("DOMContentLoaded", () => {
        console.log("📊 DOM Content Loaded:", `${performance.now()}ms`);
      });

      window.addEventListener("load", () => {
        console.log("✅ Page Load Complete:", `${performance.now()}ms`);

        // Navegação timing
        const navigation = performance.getEntriesByType(
          "navigation"
        )[0] as PerformanceNavigationTiming;
        if (navigation) {
          console.log("🚀 Performance Metrics:", {
            "DNS Lookup": `${
              navigation.domainLookupEnd - navigation.domainLookupStart
            }ms`,
            Connection: `${navigation.connectEnd - navigation.connectStart}ms`,
            Request: `${navigation.responseStart - navigation.requestStart}ms`,
            Response: `${navigation.responseEnd - navigation.responseStart}ms`,
            "DOM Processing": `${
              navigation.domComplete - navigation.domInteractive
            }ms`,
          });
        }
      });

      // LCP (Largest Contentful Paint)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log(
          "🎯 LCP (Largest Contentful Paint):",
          `${Math.round(lastEntry.startTime)}ms`
        );
      });

      try {
        lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });
      } catch {
        console.log("LCP not supported");
      }

      return () => {
        lcpObserver.disconnect();
      };
    }
  }, []);

  return null; // Componente invisível
}
