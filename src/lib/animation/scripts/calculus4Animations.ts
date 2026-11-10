import { LessonAnimationEntry } from "@/lib/types/animationTypes";

// Flagship canvas explainer animation for Calculus IV. A curated set, not
// one animation per lesson.

export const calculus4Animations: LessonAnimationEntry[] = [
  {
    courseSlug: "calculus4",
    unitSlug: "series-solutions-and-numerical-methods",
    lessonSlug: "eulers-method",
    animations: [
      {
        animationSlug: "eulers-method-step-by-step",
        animationTitle: "Euler's Method: Approximating a Solution Step by Step",
        relatedTopicTag: "seriesSolutionsAndNumericalMethods",
        coordinatePlane: { xMin: -0.3, xMax: 2.5, yMin: -0.3, yMax: 2.5 },
        steps: [
          {
            stepNarration:
              "Euler's method approximates a solution to dy/dx = x (with y(0)=0) using small straight-line steps, without solving the equation symbolically.",
            drawCommands: [{ commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y" }],
          },
          {
            stepNarration: "Start at the initial condition (0, 0).",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y" },
              { commandType: "plotPoint", point: { x: 0, y: 0 }, label: "(0, 0)", color: "#0f172a" },
            ],
          },
          {
            stepNarration:
              "The slope at (0,0) is dy/dx = x = 0, so with step size h=0.5, we move to (0.5, 0 + 0.5×0) = (0.5, 0).",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y" },
              { commandType: "plotPoint", point: { x: 0, y: 0 }, color: "#0f172a" },
              { commandType: "drawLineSegment", fromPoint: { x: 0, y: 0 }, toPoint: { x: 0.5, y: 0 }, color: "#b91c1c" },
              { commandType: "plotPoint", point: { x: 0.5, y: 0 }, label: "(0.5, 0)", color: "#0f172a" },
            ],
          },
          {
            stepNarration:
              "Repeating: slope at (0.5,0) is 0.5, giving (1, 0.25); slope at (1,0.25) is 1, giving (1.5, 0.75).",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y" },
              { commandType: "plotPoint", point: { x: 0, y: 0 }, color: "#0f172a" },
              { commandType: "drawLineSegment", fromPoint: { x: 0, y: 0 }, toPoint: { x: 0.5, y: 0 }, color: "#b91c1c" },
              { commandType: "drawLineSegment", fromPoint: { x: 0.5, y: 0 }, toPoint: { x: 1, y: 0.25 }, color: "#b91c1c" },
              { commandType: "plotPoint", point: { x: 1, y: 0.25 }, label: "(1, 0.25)", color: "#0f172a" },
              { commandType: "drawLineSegment", fromPoint: { x: 1, y: 0.25 }, toPoint: { x: 1.5, y: 0.75 }, color: "#b91c1c" },
              { commandType: "plotPoint", point: { x: 1.5, y: 0.75 }, label: "(1.5, 0.75)", color: "#0f172a" },
            ],
          },
          {
            stepNarration:
              "One more step reaches (2, 1.5) - Euler's estimate. The true solution is y = x²/2 (shown as the smooth curve), where y(2) = 2 exactly. Euler's method underestimates here because it always uses the slope from the start of each step, missing how quickly the curve is still rising.",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y" },
              { commandType: "plotFunction", functionOfX: "x^2 / 2", color: "#2563eb" },
              { commandType: "drawLineSegment", fromPoint: { x: 0, y: 0 }, toPoint: { x: 0.5, y: 0 }, color: "#b91c1c" },
              { commandType: "drawLineSegment", fromPoint: { x: 0.5, y: 0 }, toPoint: { x: 1, y: 0.25 }, color: "#b91c1c" },
              { commandType: "drawLineSegment", fromPoint: { x: 1, y: 0.25 }, toPoint: { x: 1.5, y: 0.75 }, color: "#b91c1c" },
              { commandType: "drawLineSegment", fromPoint: { x: 1.5, y: 0.75 }, toPoint: { x: 2, y: 1.5 }, color: "#b91c1c" },
              { commandType: "plotPoint", point: { x: 2, y: 1.5 }, label: "Euler: (2, 1.5)", color: "#b91c1c" },
              { commandType: "plotPoint", point: { x: 2, y: 2 }, label: "True: (2, 2)", color: "#2563eb" },
            ],
          },
        ],
      },
    ],
  },
];
