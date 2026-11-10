import { LessonAnimationEntry } from "@/lib/types/animationTypes";

// Flagship canvas explainer animation for Calculus V. A curated set, not
// one animation per lesson.

export const calculus5Animations: LessonAnimationEntry[] = [
  {
    courseSlug: "calculus5",
    unitSlug: "linear-transformations",
    lessonSlug: "geometric-linear-transformations",
    animations: [
      {
        animationSlug: "geometric-linear-transformation-shear",
        animationTitle: "Geometric Linear Transformations",
        relatedTopicTag: "linearTransformations",
        coordinatePlane: { xMin: -0.5, xMax: 3, yMin: -0.5, yMax: 2 },
        steps: [
          {
            stepNarration: "Start with the unit square - corners at (0,0), (1,0), (1,1), and (0,1).",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y", showGridLines: true },
              {
                commandType: "shadeRegionBetweenCurves",
                polygonPoints: [
                  { x: 0, y: 0 },
                  { x: 1, y: 0 },
                  { x: 1, y: 1 },
                  { x: 0, y: 1 },
                ],
                color: "#2563eb",
                opacityFromZeroToOne: 0.3,
              },
            ],
          },
          {
            stepNarration:
              "Apply the linear transformation A = [[1, 1], [0, 1]] to every point. This is a 'shear': it shifts each point right by an amount equal to its height.",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y", showGridLines: true },
              {
                commandType: "shadeRegionBetweenCurves",
                polygonPoints: [
                  { x: 0, y: 0 },
                  { x: 1, y: 0 },
                  { x: 1, y: 1 },
                  { x: 0, y: 1 },
                ],
                color: "#2563eb",
                opacityFromZeroToOne: 0.3,
              },
              { commandType: "writeLabel", point: { x: -0.4, y: 1.85 }, text: "A = [[1, 1], [0, 1]]", color: "#1e3a8a" },
            ],
          },
          {
            stepNarration:
              "Points along the x-axis don't move (their height is 0), but points higher up shift further right - e.g., (0,1) moves to (1,1), and (1,1) moves to (2,1).",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y", showGridLines: true },
              {
                commandType: "shadeRegionBetweenCurves",
                polygonPoints: [
                  { x: 0, y: 0 },
                  { x: 1, y: 0 },
                  { x: 1, y: 1 },
                  { x: 0, y: 1 },
                ],
                color: "#2563eb",
                opacityFromZeroToOne: 0.3,
              },
              { commandType: "plotPoint", point: { x: 0, y: 1 }, label: "(0,1)", color: "#0f172a" },
              { commandType: "plotPoint", point: { x: 1, y: 1 }, label: "(1,1)", color: "#0f172a" },
              {
                commandType: "drawVectorArrow",
                fromPoint: { x: 0, y: 1 },
                toPoint: { x: 1, y: 1 },
                color: "#b91c1c",
                label: "→ (1,1)",
              },
              {
                commandType: "drawVectorArrow",
                fromPoint: { x: 1, y: 1 },
                toPoint: { x: 2, y: 1 },
                color: "#b91c1c",
                label: "→ (2,1)",
              },
            ],
          },
          {
            stepNarration:
              "Connecting the transformed corners shows the image: the unit square becomes a slanted parallelogram - straight lines and evenly spaced points stay straight and evenly spaced, a hallmark of every linear transformation.",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y", showGridLines: true },
              {
                commandType: "shadeRegionBetweenCurves",
                polygonPoints: [
                  { x: 0, y: 0 },
                  { x: 1, y: 0 },
                  { x: 1, y: 1 },
                  { x: 0, y: 1 },
                ],
                color: "#2563eb",
                opacityFromZeroToOne: 0.15,
              },
              {
                commandType: "shadeRegionBetweenCurves",
                polygonPoints: [
                  { x: 0, y: 0 },
                  { x: 1, y: 0 },
                  { x: 2, y: 1 },
                  { x: 1, y: 1 },
                ],
                color: "#f59e0b",
                opacityFromZeroToOne: 0.4,
              },
            ],
          },
          {
            stepNarration:
              "Notice the parallelogram has the same area as the original square: 1. That's because det(A) = (1)(1) - (1)(0) = 1, and the determinant measures exactly how a linear transformation scales area.",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y", showGridLines: true },
              {
                commandType: "shadeRegionBetweenCurves",
                polygonPoints: [
                  { x: 0, y: 0 },
                  { x: 1, y: 0 },
                  { x: 1, y: 1 },
                  { x: 0, y: 1 },
                ],
                color: "#2563eb",
                opacityFromZeroToOne: 0.15,
              },
              {
                commandType: "shadeRegionBetweenCurves",
                polygonPoints: [
                  { x: 0, y: 0 },
                  { x: 1, y: 0 },
                  { x: 2, y: 1 },
                  { x: 1, y: 1 },
                ],
                color: "#f59e0b",
                opacityFromZeroToOne: 0.4,
              },
              { commandType: "writeLabel", point: { x: -0.4, y: 1.85 }, text: "det(A) = 1, so area is preserved", color: "#1e3a8a" },
            ],
          },
        ],
      },
    ],
  },
];
