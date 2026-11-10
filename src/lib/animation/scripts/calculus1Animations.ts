import { LessonAnimationEntry } from "@/lib/types/animationTypes";

// Flagship canvas explainer animations for Calculus I. A curated set, not
// one animation per lesson.

export const calculus1Animations: LessonAnimationEntry[] = [
  {
    courseSlug: "calculus1",
    unitSlug: "derivative-definition-and-rules",
    lessonSlug: "the-derivative-as-a-limit",
    animations: [
      {
        animationSlug: "tangent-line-as-limit-of-secant-lines",
        animationTitle: "The Tangent Line as a Limit of Secant Lines",
        relatedTopicTag: "derivativeDefinitionAndRules",
        coordinatePlane: { xMin: -1, xMax: 3.5, yMin: -1, yMax: 6 },
        steps: [
          {
            stepNarration:
              "Consider f(x) = x² and the point (1, 1) on its graph. We want the slope of the tangent line at this exact point - but a single point alone doesn't define a slope.",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y", showGridLines: true },
              { commandType: "plotFunction", functionOfX: "x^2", color: "#2563eb" },
              { commandType: "plotPoint", point: { x: 1, y: 1 }, label: "(1, 1)", color: "#0f172a" },
            ],
          },
          {
            stepNarration:
              "Start with a secant line through (1,1) and a nearby point (2,4), where h=1. Its slope is (4-1)/(2-1) = 3 - close to the tangent slope, but not exact.",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y", showGridLines: true },
              { commandType: "plotFunction", functionOfX: "x^2", color: "#2563eb" },
              { commandType: "plotPoint", point: { x: 1, y: 1 }, label: "(1,1)", color: "#0f172a" },
              { commandType: "plotPoint", point: { x: 2, y: 4 }, label: "(2,4)", color: "#0f172a" },
              {
                commandType: "drawLineSegment",
                fromPoint: { x: 0.4, y: -0.8 },
                toPoint: { x: 1.6, y: 2.8 },
                color: "#b91c1c",
              },
              { commandType: "writeLabel", point: { x: -0.9, y: 5.5 }, text: "h=1, slope=3", color: "#b91c1c" },
            ],
          },
          {
            stepNarration:
              "Move the second point closer: h=0.5 gives the point (1.5, 2.25). This secant's slope is (2.25-1)/0.5 = 2.5 - already a better estimate.",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y", showGridLines: true },
              { commandType: "plotFunction", functionOfX: "x^2", color: "#2563eb" },
              { commandType: "plotPoint", point: { x: 1, y: 1 }, label: "(1,1)", color: "#0f172a" },
              { commandType: "plotPoint", point: { x: 1.5, y: 2.25 }, label: "(1.5,2.25)", color: "#0f172a" },
              {
                commandType: "drawLineSegment",
                fromPoint: { x: 0.4, y: -0.5 },
                toPoint: { x: 1.6, y: 2.5 },
                color: "#b91c1c",
              },
              { commandType: "writeLabel", point: { x: -0.9, y: 5.5 }, text: "h=0.5, slope=2.5", color: "#b91c1c" },
            ],
          },
          {
            stepNarration:
              "Move even closer: h=0.25 gives slope (1.5625-1)/0.25 = 2.25. As h keeps shrinking toward 0, the secant slope keeps approaching a fixed number.",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y", showGridLines: true },
              { commandType: "plotFunction", functionOfX: "x^2", color: "#2563eb" },
              { commandType: "plotPoint", point: { x: 1, y: 1 }, label: "(1,1)", color: "#0f172a" },
              { commandType: "plotPoint", point: { x: 1.25, y: 1.5625 }, label: "(1.25,1.5625)", color: "#0f172a" },
              {
                commandType: "drawLineSegment",
                fromPoint: { x: 0.4, y: -0.35 },
                toPoint: { x: 1.6, y: 2.35 },
                color: "#b91c1c",
              },
              { commandType: "writeLabel", point: { x: -0.9, y: 5.5 }, text: "h=0.25, slope=2.25", color: "#b91c1c" },
            ],
          },
          {
            stepNarration:
              "In the limit as h approaches 0, the secant line becomes the tangent line, with slope exactly 2. This is the derivative: f'(1) = lim(h→0) [f(1+h) - f(1)]/h = 2.",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y", showGridLines: true },
              { commandType: "plotFunction", functionOfX: "x^2", color: "#2563eb" },
              { commandType: "plotPoint", point: { x: 1, y: 1 }, label: "(1,1)", color: "#0f172a" },
              {
                commandType: "drawLineSegment",
                fromPoint: { x: 0.4, y: -0.2 },
                toPoint: { x: 1.6, y: 2.2 },
                color: "#15803d",
              },
              { commandType: "writeLabel", point: { x: -0.9, y: 5.5 }, text: "f'(1) = 2 (tangent line)", color: "#15803d" },
            ],
          },
        ],
      },
    ],
  },
  {
    courseSlug: "calculus1",
    unitSlug: "definite-integrals-and-ftc",
    lessonSlug: "riemann-sums",
    animations: [
      {
        animationSlug: "riemann-sums-filling-in-the-area",
        animationTitle: "Riemann Sums Filling In the Area",
        relatedTopicTag: "integrationBasics",
        coordinatePlane: { xMin: -0.3, xMax: 2.5, yMin: -0.3, yMax: 4.5 },
        steps: [
          {
            stepNarration:
              "We want the area under f(x) = x² between x=0 and x=2. Riemann sums approximate this area using rectangles.",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y" },
              { commandType: "plotFunction", functionOfX: "x^2", color: "#2563eb" },
            ],
          },
          {
            stepNarration:
              "Split [0,2] into 4 strips of width 0.5. The first rectangle spans x=0 to 0.5, using the function's height at the right edge, f(0.5)=0.25, as its height.",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y" },
              { commandType: "plotFunction", functionOfX: "x^2", color: "#2563eb" },
              {
                commandType: "shadeRegionBetweenCurves",
                polygonPoints: [
                  { x: 0, y: 0 },
                  { x: 0.5, y: 0 },
                  { x: 0.5, y: 0.25 },
                  { x: 0, y: 0.25 },
                ],
                color: "#f59e0b",
              },
            ],
          },
          {
            stepNarration: "The second rectangle spans x=0.5 to 1, height f(1)=1.",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y" },
              { commandType: "plotFunction", functionOfX: "x^2", color: "#2563eb" },
              {
                commandType: "shadeRegionBetweenCurves",
                polygonPoints: [
                  { x: 0, y: 0 },
                  { x: 0.5, y: 0 },
                  { x: 0.5, y: 0.25 },
                  { x: 0, y: 0.25 },
                ],
                color: "#f59e0b",
              },
              {
                commandType: "shadeRegionBetweenCurves",
                polygonPoints: [
                  { x: 0.5, y: 0 },
                  { x: 1, y: 0 },
                  { x: 1, y: 1 },
                  { x: 0.5, y: 1 },
                ],
                color: "#f59e0b",
              },
            ],
          },
          {
            stepNarration: "The third spans x=1 to 1.5, height f(1.5)=2.25.",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y" },
              { commandType: "plotFunction", functionOfX: "x^2", color: "#2563eb" },
              {
                commandType: "shadeRegionBetweenCurves",
                polygonPoints: [
                  { x: 0, y: 0 },
                  { x: 0.5, y: 0 },
                  { x: 0.5, y: 0.25 },
                  { x: 0, y: 0.25 },
                ],
                color: "#f59e0b",
              },
              {
                commandType: "shadeRegionBetweenCurves",
                polygonPoints: [
                  { x: 0.5, y: 0 },
                  { x: 1, y: 0 },
                  { x: 1, y: 1 },
                  { x: 0.5, y: 1 },
                ],
                color: "#f59e0b",
              },
              {
                commandType: "shadeRegionBetweenCurves",
                polygonPoints: [
                  { x: 1, y: 0 },
                  { x: 1.5, y: 0 },
                  { x: 1.5, y: 2.25 },
                  { x: 1, y: 2.25 },
                ],
                color: "#f59e0b",
              },
            ],
          },
          {
            stepNarration:
              "The fourth spans x=1.5 to 2, height f(2)=4. Adding up all four rectangles' areas gives an estimate: 3.75. Using more, thinner rectangles makes this estimate converge to the exact area - which is exactly what the definite integral computes: the limit of a Riemann sum as the number of rectangles goes to infinity.",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y" },
              { commandType: "plotFunction", functionOfX: "x^2", color: "#2563eb" },
              {
                commandType: "shadeRegionBetweenCurves",
                polygonPoints: [
                  { x: 0, y: 0 },
                  { x: 0.5, y: 0 },
                  { x: 0.5, y: 0.25 },
                  { x: 0, y: 0.25 },
                ],
                color: "#f59e0b",
              },
              {
                commandType: "shadeRegionBetweenCurves",
                polygonPoints: [
                  { x: 0.5, y: 0 },
                  { x: 1, y: 0 },
                  { x: 1, y: 1 },
                  { x: 0.5, y: 1 },
                ],
                color: "#f59e0b",
              },
              {
                commandType: "shadeRegionBetweenCurves",
                polygonPoints: [
                  { x: 1, y: 0 },
                  { x: 1.5, y: 0 },
                  { x: 1.5, y: 2.25 },
                  { x: 1, y: 2.25 },
                ],
                color: "#f59e0b",
              },
              {
                commandType: "shadeRegionBetweenCurves",
                polygonPoints: [
                  { x: 1.5, y: 0 },
                  { x: 2, y: 0 },
                  { x: 2, y: 4 },
                  { x: 1.5, y: 4 },
                ],
                color: "#f59e0b",
              },
              { commandType: "writeLabel", point: { x: 0, y: 4.3 }, text: "Estimate ≈ 3.75", color: "#1e3a8a" },
            ],
          },
        ],
      },
    ],
  },
];
