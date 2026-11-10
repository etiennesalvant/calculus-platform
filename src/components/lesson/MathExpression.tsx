"use client";

import { useEffect, useRef } from "react";
import katex from "katex";

// Renders a LaTeX-style math expression (e.g. "x^2 + 3x - 4") using KaTeX.
// Kept as its own small component so every place that shows math - lessons,
// practice problems, the diagnostic - renders it identically.
export function MathExpression({ expression }: { expression: string }) {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    try {
      katex.render(expression, containerRef.current, {
        throwOnError: false,
        displayMode: true,
      });
    } catch {
      if (containerRef.current) containerRef.current.textContent = expression;
    }
  }, [expression]);

  return <span ref={containerRef} className="math-expression-block block my-2" />;
}
