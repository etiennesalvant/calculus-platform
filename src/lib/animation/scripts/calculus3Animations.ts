import { LessonAnimationEntry } from "@/lib/types/animationTypes";

// Flagship canvas explainer animation for Calculus III. A curated set, not
// one animation per lesson.

export const calculus3Animations: LessonAnimationEntry[] = [
  {
    courseSlug: "calculus3",
    unitSlug: "vector-valued-functions",
    lessonSlug: "vector-valued-functions-and-space-curves",
    animations: [
      {
        animationSlug: "vector-valued-function-tracing-a-circle",
        animationTitle: "A Vector-Valued Function Tracing a Circle",
        relatedTopicTag: "vectorValuedFunctions",
        coordinatePlane: { xMin: -1.5, xMax: 1.5, yMin: -1.5, yMax: 1.5 },
        steps: [
          {
            stepNarration:
              "A vector-valued function like r(t) = (cos t, sin t) traces a curve in the plane as t varies - here, the unit circle.",
            drawCommands: [{ commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y" }],
          },
          {
            stepNarration: "As t sweeps from 0 to 2π, the point (cos t, sin t) travels once around the unit circle.",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y" },
              { commandType: "drawLineSegment", fromPoint: { x: 1, y: 0 }, toPoint: { x: 0.866, y: 0.5 }, color: "#2563eb" },
              { commandType: "drawLineSegment", fromPoint: { x: 0.866, y: 0.5 }, toPoint: { x: 0.5, y: 0.866 }, color: "#2563eb" },
              { commandType: "drawLineSegment", fromPoint: { x: 0.5, y: 0.866 }, toPoint: { x: 0, y: 1 }, color: "#2563eb" },
              { commandType: "drawLineSegment", fromPoint: { x: 0, y: 1 }, toPoint: { x: -0.5, y: 0.866 }, color: "#2563eb" },
              { commandType: "drawLineSegment", fromPoint: { x: -0.5, y: 0.866 }, toPoint: { x: -0.866, y: 0.5 }, color: "#2563eb" },
              { commandType: "drawLineSegment", fromPoint: { x: -0.866, y: 0.5 }, toPoint: { x: -1, y: 0 }, color: "#2563eb" },
              { commandType: "drawLineSegment", fromPoint: { x: -1, y: 0 }, toPoint: { x: -0.866, y: -0.5 }, color: "#2563eb" },
              { commandType: "drawLineSegment", fromPoint: { x: -0.866, y: -0.5 }, toPoint: { x: -0.5, y: -0.866 }, color: "#2563eb" },
              { commandType: "drawLineSegment", fromPoint: { x: -0.5, y: -0.866 }, toPoint: { x: 0, y: -1 }, color: "#2563eb" },
              { commandType: "drawLineSegment", fromPoint: { x: 0, y: -1 }, toPoint: { x: 0.5, y: -0.866 }, color: "#2563eb" },
              { commandType: "drawLineSegment", fromPoint: { x: 0.5, y: -0.866 }, toPoint: { x: 0.866, y: -0.5 }, color: "#2563eb" },
              { commandType: "drawLineSegment", fromPoint: { x: 0.866, y: -0.5 }, toPoint: { x: 1, y: 0 }, color: "#2563eb" },
            ],
          },
          {
            stepNarration: "At t=0, r(0) = (cos 0, sin 0) = (1, 0).",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y" },
              { commandType: "drawLineSegment", fromPoint: { x: 1, y: 0 }, toPoint: { x: 0.866, y: 0.5 }, color: "#93c5fd" },
              { commandType: "drawLineSegment", fromPoint: { x: 0.866, y: 0.5 }, toPoint: { x: 0.5, y: 0.866 }, color: "#93c5fd" },
              { commandType: "drawLineSegment", fromPoint: { x: 0.5, y: 0.866 }, toPoint: { x: 0, y: 1 }, color: "#93c5fd" },
              { commandType: "drawLineSegment", fromPoint: { x: 0, y: 1 }, toPoint: { x: -0.5, y: 0.866 }, color: "#93c5fd" },
              { commandType: "drawLineSegment", fromPoint: { x: -0.5, y: 0.866 }, toPoint: { x: -0.866, y: 0.5 }, color: "#93c5fd" },
              { commandType: "drawLineSegment", fromPoint: { x: -0.866, y: 0.5 }, toPoint: { x: -1, y: 0 }, color: "#93c5fd" },
              { commandType: "drawLineSegment", fromPoint: { x: -1, y: 0 }, toPoint: { x: -0.866, y: -0.5 }, color: "#93c5fd" },
              { commandType: "drawLineSegment", fromPoint: { x: -0.866, y: -0.5 }, toPoint: { x: -0.5, y: -0.866 }, color: "#93c5fd" },
              { commandType: "drawLineSegment", fromPoint: { x: -0.5, y: -0.866 }, toPoint: { x: 0, y: -1 }, color: "#93c5fd" },
              { commandType: "drawLineSegment", fromPoint: { x: 0, y: -1 }, toPoint: { x: 0.5, y: -0.866 }, color: "#93c5fd" },
              { commandType: "drawLineSegment", fromPoint: { x: 0.5, y: -0.866 }, toPoint: { x: 0.866, y: -0.5 }, color: "#93c5fd" },
              { commandType: "drawLineSegment", fromPoint: { x: 0.866, y: -0.5 }, toPoint: { x: 1, y: 0 }, color: "#93c5fd" },
              { commandType: "plotPoint", point: { x: 1, y: 0 }, label: "t=0: (1,0)", color: "#0f172a" },
            ],
          },
          {
            stepNarration:
              "At t=π/3, the point is (0.5, 0.866). The derivative r'(t) = (-sin t, cos t) gives the velocity vector - here (-0.866, 0.5) - which is always tangent to the circle, pointing in the direction of motion.",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y" },
              { commandType: "plotPoint", point: { x: 1, y: 0 }, label: "t=0", color: "#0f172a" },
              { commandType: "plotPoint", point: { x: 0.5, y: 0.866 }, label: "t=π/3: (0.5, 0.866)", color: "#0f172a" },
              {
                commandType: "drawVectorArrow",
                fromPoint: { x: 0.5, y: 0.866 },
                toPoint: { x: -0.193, y: 1.266 },
                color: "#b91c1c",
                label: "r'(t)",
              },
            ],
          },
          {
            stepNarration:
              "r'(t) is tangent to the path - this generalizes the single-variable derivative to curves in space, where velocity is a vector, not just a slope.",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y" },
              { commandType: "plotPoint", point: { x: 0.5, y: 0.866 }, color: "#0f172a" },
              {
                commandType: "drawVectorArrow",
                fromPoint: { x: 0.5, y: 0.866 },
                toPoint: { x: -0.193, y: 1.266 },
                color: "#b91c1c",
                label: "r'(t)",
              },
              { commandType: "writeLabel", point: { x: -1.45, y: -1.05 }, text: "r(t) = (cos t, sin t)", color: "#1e3a8a" },
              { commandType: "writeLabel", point: { x: -1.45, y: -1.25 }, text: "r'(t) = (-sin t, cos t)", color: "#1e3a8a" },
            ],
          },
        ],
      },
    ],
  },
];
