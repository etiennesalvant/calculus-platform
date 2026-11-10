import { LessonAnimationEntry } from "@/lib/types/animationTypes";

// Flagship canvas explainer animations for Algebra I & II (Calculus-Focused).
// A curated set, not one animation per lesson - see docs/ROADMAP.md for the
// reasoning. Each animation is grounded in a real lesson's content.

export const algebraCalcFocusedAnimations: LessonAnimationEntry[] = [
  {
    courseSlug: "algebraCalcFocused",
    unitSlug: "graphing-lines-and-function-basics",
    lessonSlug: "graphing-linear-equations",
    animations: [
      {
        animationSlug: "slope-and-graphing-a-line",
        animationTitle: "Slope and Graphing a Line",
        relatedTopicTag: "graphingLinesAndSlope",
        coordinatePlane: { xMin: -6, xMax: 6, yMin: -6, yMax: 6 },
        steps: [
          {
            stepNarration:
              "Let's graph the line y = 2x - 1 by understanding what slope means: how steeply the line rises as x increases.",
            drawCommands: [{ commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y", showGridLines: true }],
          },
          {
            stepNarration:
              "Start at the y-intercept, the point where the line crosses the y-axis. Here, when x = 0, y = -1, so we mark (0, -1).",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y", showGridLines: true },
              { commandType: "plotPoint", point: { x: 0, y: -1 }, label: "(0, -1)", color: "#0f172a" },
            ],
          },
          {
            stepNarration:
              "The slope is 2, which means rise over run = 2/1. From the y-intercept, move 1 unit right (the 'run') and 2 units up (the 'rise') to land on another point on the line: (1, 1).",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y", showGridLines: true },
              { commandType: "plotPoint", point: { x: 0, y: -1 }, label: "(0, -1)", color: "#0f172a" },
              {
                commandType: "drawLineSegment",
                fromPoint: { x: 0, y: -1 },
                toPoint: { x: 1, y: -1 },
                color: "#b91c1c",
                dashed: true,
              },
              { commandType: "writeLabel", point: { x: 0.15, y: -1.5 }, text: "run = 1", color: "#b91c1c" },
              {
                commandType: "drawLineSegment",
                fromPoint: { x: 1, y: -1 },
                toPoint: { x: 1, y: 1 },
                color: "#b91c1c",
                dashed: true,
              },
              { commandType: "writeLabel", point: { x: 1.15, y: 0 }, text: "rise = 2", color: "#b91c1c" },
              { commandType: "plotPoint", point: { x: 1, y: 1 }, label: "(1, 1)", color: "#0f172a" },
            ],
          },
          {
            stepNarration:
              "Connecting these points - and continuing the same rise-over-run pattern in both directions - draws the full line.",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y", showGridLines: true },
              { commandType: "plotFunction", functionOfX: "2*x - 1", color: "#2563eb" },
              { commandType: "plotPoint", point: { x: 0, y: -1 }, color: "#0f172a" },
              { commandType: "plotPoint", point: { x: 1, y: 1 }, color: "#0f172a" },
            ],
          },
          {
            stepNarration:
              "Every line has this form: y = (slope)x + (y-intercept). Here, slope = 2 and y-intercept = -1, matching y = 2x - 1 exactly.",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y", showGridLines: true },
              { commandType: "plotFunction", functionOfX: "2*x - 1", color: "#2563eb" },
              { commandType: "highlightPointWithRing", point: { x: 0, y: -1 }, color: "#f59e0b" },
              { commandType: "writeLabel", point: { x: -5.5, y: 5.3 }, text: "y = 2x - 1 (slope 2, y-intercept -1)", color: "#1e3a8a" },
            ],
          },
        ],
      },
    ],
  },
];
