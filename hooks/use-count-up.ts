"use client";

import { useEffect, useRef, useState } from "react";

import { viewportOnce } from "@/lib/motion";

type UseCountUpOptions = {
  end: number;
  duration?: number;
  enabled?: boolean;
};

function useCountUp({ end, duration = 1800, enabled = true }: UseCountUpOptions) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: viewportOnce.amount, rootMargin: viewportOnce.margin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [enabled, hasStarted]);

  useEffect(() => {
    if (!hasStarted || !enabled) return;

    let startTime: number | null = null;
    let frameId = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [hasStarted, end, duration, enabled]);

  return { count, ref, hasStarted };
}

function parseStatValue(value: string): number {
  return Number(value.replace(/,/g, "")) || 0;
}

function formatStatValue(count: number, original: string): string {
  if (original.includes(",")) {
    return count.toLocaleString("en-US");
  }
  return String(count);
}

export { useCountUp, parseStatValue, formatStatValue };
