import { LessonAnimationEntry } from "@/lib/types/animationTypes";

// Flagship canvas explainer animations for Calculus II. A curated set, not
// one animation per lesson.

export const calculus2Animations: LessonAnimationEntry[] = [
  {
    courseSlug: "calculus2",
    unitSlug: "area-between-curves",
    lessonSlug: "area-between-two-curves-integrating-with-respect-to-x",
    animations: [
      {
        animationSlug: "area-between-two-curves",
        animationTitle: "The Area Between Two Curves",
        relatedTopicTag: "areaBetweenCurves",
        coordinatePlane: { xMin: -2, xMax: 3, yMin: -1, yMax: 5 },
        steps: [
          {
            stepNarration:
              "Consider the region between y = x+2 and y = x². First, find where they intersect.",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y" },
              { commandType: "plotFunction", functionOfX: "x + 2", color: "#2563eb" },
              { commandType: "plotFunction", functionOfX: "x^2", color: "#b91c1c" },
            ],
          },
          {
            stepNarration:
              "Setting x+2 = x² gives x²-x-2=0, which factors as (x-2)(x+1)=0, so the curves meet at x=-1 and x=2.",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y" },
              { commandType: "plotFunction", functionOfX: "x + 2", color: "#2563eb" },
              { commandType: "plotFunction", functionOfX: "x^2", color: "#b91c1c" },
              { commandType: "plotPoint", point: { x: -1, y: 1 }, label: "(-1, 1)", color: "#0f172a" },
              { commandType: "plotPoint", point: { x: 2, y: 4 }, label: "(2, 4)", color: "#0f172a" },
            ],
          },
          {
            stepNarration:
              "The area between the curves, from x=-1 to x=2, is the region where the top curve (x+2) sits above the bottom curve (x²).",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y" },
              { commandType: "plotFunction", functionOfX: "x + 2", color: "#2563eb" },
              { commandType: "plotFunction", functionOfX: "x^2", color: "#b91c1c" },
              {
                commandType: "shadeRegionBetweenCurves",
                polygonPoints: [
                  { x: -1, y: 1 },
                  { x: -0.5, y: 1.5 },
                  { x: 0, y: 2 },
                  { x: 0.5, y: 2.5 },
                  { x: 1, y: 3 },
                  { x: 1.5, y: 3.5 },
                  { x: 2, y: 4 },
                  { x: 1.5, y: 2.25 },
                  { x: 1, y: 1 },
                  { x: 0.5, y: 0.25 },
                  { x: 0, y: 0 },
                  { x: -0.5, y: 0.25 },
                  { x: -1, y: 1 },
                ],
                color: "#f59e0b",
                opacityFromZeroToOne: 0.35,
              },
            ],
          },
          {
            stepNarration:
              "The area equals the integral of (top - bottom) dx from -1 to 2: ∫(x+2 - x²)dx.",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y" },
              { commandType: "plotFunction", functionOfX: "x + 2", color: "#2563eb" },
              { commandType: "plotFunction", functionOfX: "x^2", color: "#b91c1c" },
              {
                commandType: "shadeRegionBetweenCurves",
                polygonPoints: [
                  { x: -1, y: 1 },
                  { x: -0.5, y: 1.5 },
                  { x: 0, y: 2 },
                  { x: 0.5, y: 2.5 },
                  { x: 1, y: 3 },
                  { x: 1.5, y: 3.5 },
                  { x: 2, y: 4 },
                  { x: 1.5, y: 2.25 },
                  { x: 1, y: 1 },
                  { x: 0.5, y: 0.25 },
                  { x: 0, y: 0 },
                  { x: -0.5, y: 0.25 },
                  { x: -1, y: 1 },
                ],
                color: "#f59e0b",
                opacityFromZeroToOne: 0.35,
              },
              { commandType: "writeLabel", point: { x: -1.9, y: 4.7 }, text: "Area = ∫[-1,2] (x+2 - x²) dx", color: "#1e3a8a" },
            ],
          },
          {
            stepNarration:
              "Evaluating: [x²/2 + 2x - x³/3] from -1 to 2 = 10/3 - (-7/6) = 9/2 = 4.5 square units.",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y" },
              { commandType: "plotFunction", functionOfX: "x + 2", color: "#2563eb" },
              { commandType: "plotFunction", functionOfX: "x^2", color: "#b91c1c" },
              {
                commandType: "shadeRegionBetweenCurves",
                polygonPoints: [
                  { x: -1, y: 1 },
                  { x: -0.5, y: 1.5 },
                  { x: 0, y: 2 },
                  { x: 0.5, y: 2.5 },
                  { x: 1, y: 3 },
                  { x: 1.5, y: 3.5 },
                  { x: 2, y: 4 },
                  { x: 1.5, y: 2.25 },
                  { x: 1, y: 1 },
                  { x: 0.5, y: 0.25 },
                  { x: 0, y: 0 },
                  { x: -0.5, y: 0.25 },
                  { x: -1, y: 1 },
                ],
                color: "#f59e0b",
                opacityFromZeroToOne: 0.35,
              },
              { commandType: "writeLabel", point: { x: -1.9, y: 4.7 }, text: "Area = 9/2 = 4.5", color: "#1e3a8a" },
            ],
          },
        ],
      },
    ],
  },
  {
    courseSlug: "calculus2",
    unitSlug: "volumes-of-revolution",
    lessonSlug: "volumes-by-disks-and-washers",
    animations: [
      {
        animationSlug: "disk-and-washer-cross-sections",
        animationTitle: "Disk and Washer Cross-Sections",
        relatedTopicTag: "volumesOfRevolution",
        coordinatePlane: { xMin: -0.5, xMax: 4.5, yMin: -2.5, yMax: 2.5 },
        steps: [
          {
            stepNarration:
              "Consider the curve y = √x on [0, 4], rotated around the x-axis to sweep out a solid horn-like shape.",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y" },
              { commandType: "plotFunction", functionOfX: "sqrt(x)", color: "#2563eb" },
            ],
          },
          {
            stepNarration:
              "Viewed edge-on, revolving the curve around the x-axis traces both the curve and its mirror image below the axis - together outlining the solid's silhouette.",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y" },
              { commandType: "plotFunction", functionOfX: "sqrt(x)", color: "#2563eb" },
              { commandType: "plotFunction", functionOfX: "-sqrt(x)", color: "#2563eb", dashed: true },
            ],
          },
          {
            stepNarration:
              "Slice the solid at x=2. That slice is a disk of radius f(2) = √2 ≈ 1.414, shown edge-on here as a thin vertical strip.",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y" },
              { commandType: "plotFunction", functionOfX: "sqrt(x)", color: "#2563eb" },
              { commandType: "plotFunction", functionOfX: "-sqrt(x)", color: "#2563eb", dashed: true },
              {
                commandType: "shadeRegionBetweenCurves",
                polygonPoints: [
                  { x: 1.9, y: -1.414 },
                  { x: 2.1, y: -1.414 },
                  { x: 2.1, y: 1.414 },
                  { x: 1.9, y: 1.414 },
                ],
                color: "#f59e0b",
                opacityFromZeroToOne: 0.6,
              },
            ],
          },
          {
            stepNarration: "Each disk's area is π·r² = π(√x)² = πx. At x=2, that's π(2) = 2π.",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y" },
              { commandType: "plotFunction", functionOfX: "sqrt(x)", color: "#2563eb" },
              { commandType: "plotFunction", functionOfX: "-sqrt(x)", color: "#2563eb", dashed: true },
              {
                commandType: "shadeRegionBetweenCurves",
                polygonPoints: [
                  { x: 1.9, y: -1.414 },
                  { x: 2.1, y: -1.414 },
                  { x: 2.1, y: 1.414 },
                  { x: 1.9, y: 1.414 },
                ],
                color: "#f59e0b",
                opacityFromZeroToOne: 0.6,
              },
              { commandType: "highlightPointWithRing", point: { x: 2, y: 1.414 }, color: "#f59e0b" },
              { commandType: "writeLabel", point: { x: -0.4, y: 2.3 }, text: "Disk area = π·x = 2π at x=2", color: "#1e3a8a" },
            ],
          },
          {
            stepNarration:
              "Stacking (integrating) every disk's area from x=0 to x=4 gives the total volume: ∫₀⁴ πx dx = π[x²/2]₀⁴ = 8π.",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y" },
              { commandType: "plotFunction", functionOfX: "sqrt(x)", color: "#2563eb" },
              { commandType: "plotFunction", functionOfX: "-sqrt(x)", color: "#2563eb", dashed: true },
              { commandType: "writeLabel", point: { x: -0.4, y: 2.3 }, text: "Volume = ∫₀⁴ πx dx = 8π", color: "#1e3a8a" },
            ],
          },
        ],
      },
    ],
  },
];
