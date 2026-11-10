import { LessonAnimationEntry } from "@/lib/types/animationTypes";

// Flagship canvas explainer animations for General Advanced Mathematical
// Foundations. A curated set, not one animation per lesson.

export const generalAdvancedFoundationsAnimations: LessonAnimationEntry[] = [
  {
    courseSlug: "generalAdvancedFoundations",
    unitSlug: "geometry-essentials",
    lessonSlug: "the-pythagorean-theorem-and-distance",
    animations: [
      {
        animationSlug: "pythagorean-theorem-and-distance-formula",
        animationTitle: "The Pythagorean Theorem and the Distance Formula",
        relatedTopicTag: "trianglesAndThePythagoreanTheorem",
        coordinatePlane: { xMin: -1, xMax: 7, yMin: -1, yMax: 6 },
        steps: [
          {
            stepNarration: "Suppose we want the distance between two points: (1, 1) and (5, 4).",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y", showGridLines: true },
              { commandType: "plotPoint", point: { x: 1, y: 1 }, label: "A (1, 1)", color: "#0f172a" },
              { commandType: "plotPoint", point: { x: 5, y: 4 }, label: "C (5, 4)", color: "#0f172a" },
            ],
          },
          {
            stepNarration:
              "We want the length of this segment directly - but it's easier to build a right triangle around it first.",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y", showGridLines: true },
              { commandType: "plotPoint", point: { x: 1, y: 1 }, label: "A (1, 1)", color: "#0f172a" },
              { commandType: "plotPoint", point: { x: 5, y: 4 }, label: "C (5, 4)", color: "#0f172a" },
              {
                commandType: "drawLineSegment",
                fromPoint: { x: 1, y: 1 },
                toPoint: { x: 5, y: 4 },
                color: "#2563eb",
                dashed: true,
              },
            ],
          },
          {
            stepNarration:
              "Drop a horizontal line from A and a vertical line from C - they meet at B = (5, 1), forming a right triangle with legs of length 4 and 3.",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y", showGridLines: true },
              { commandType: "plotPoint", point: { x: 1, y: 1 }, label: "A", color: "#0f172a" },
              { commandType: "plotPoint", point: { x: 5, y: 4 }, label: "C", color: "#0f172a" },
              { commandType: "plotPoint", point: { x: 5, y: 1 }, label: "B (5, 1)", color: "#0f172a" },
              {
                commandType: "drawLineSegment",
                fromPoint: { x: 1, y: 1 },
                toPoint: { x: 5, y: 4 },
                color: "#2563eb",
                dashed: true,
              },
              {
                commandType: "drawLineSegment",
                fromPoint: { x: 1, y: 1 },
                toPoint: { x: 5, y: 1 },
                color: "#b91c1c",
              },
              { commandType: "writeLabel", point: { x: 2.7, y: 0.6 }, text: "4", color: "#b91c1c" },
              {
                commandType: "drawLineSegment",
                fromPoint: { x: 5, y: 1 },
                toPoint: { x: 5, y: 4 },
                color: "#b91c1c",
              },
              { commandType: "writeLabel", point: { x: 5.2, y: 2.5 }, text: "3", color: "#b91c1c" },
            ],
          },
          {
            stepNarration:
              "The Pythagorean theorem says the square of the hypotenuse equals the sum of the squares of the legs: a² + b² = c².",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y", showGridLines: true },
              { commandType: "plotPoint", point: { x: 1, y: 1 }, color: "#0f172a" },
              { commandType: "plotPoint", point: { x: 5, y: 4 }, color: "#0f172a" },
              { commandType: "highlightPointWithRing", point: { x: 5, y: 1 }, color: "#f59e0b" },
              {
                commandType: "drawLineSegment",
                fromPoint: { x: 1, y: 1 },
                toPoint: { x: 5, y: 4 },
                color: "#2563eb",
                dashed: true,
              },
              { commandType: "drawLineSegment", fromPoint: { x: 1, y: 1 }, toPoint: { x: 5, y: 1 }, color: "#b91c1c" },
              { commandType: "drawLineSegment", fromPoint: { x: 5, y: 1 }, toPoint: { x: 5, y: 4 }, color: "#b91c1c" },
              { commandType: "writeLabel", point: { x: -0.5, y: 5.5 }, text: "a² + b² = c²", color: "#1e3a8a" },
            ],
          },
          {
            stepNarration:
              "4² + 3² = 16 + 9 = 25, so c = 5. That's exactly the distance formula: distance = √((x₂-x₁)² + (y₂-y₁)²), built from the Pythagorean theorem.",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y", showGridLines: true },
              { commandType: "plotPoint", point: { x: 1, y: 1 }, label: "A", color: "#0f172a" },
              { commandType: "plotPoint", point: { x: 5, y: 4 }, label: "C", color: "#0f172a" },
              { commandType: "drawLineSegment", fromPoint: { x: 1, y: 1 }, toPoint: { x: 5, y: 4 }, color: "#2563eb" },
              { commandType: "drawLineSegment", fromPoint: { x: 1, y: 1 }, toPoint: { x: 5, y: 1 }, color: "#b91c1c", dashed: true },
              { commandType: "drawLineSegment", fromPoint: { x: 5, y: 1 }, toPoint: { x: 5, y: 4 }, color: "#b91c1c", dashed: true },
              {
                commandType: "writeLabel",
                point: { x: -0.5, y: 5.5 },
                text: "4² + 3² = 25, so c = 5",
                color: "#1e3a8a",
              },
            ],
          },
        ],
      },
    ],
  },
];
