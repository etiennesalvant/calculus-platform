import { LessonAnimationEntry } from "@/lib/types/animationTypes";

// Flagship canvas explainer animations for Pre-Calculus. A curated set, not
// one animation per lesson.

// The 12 standard 30-degree-increment points around the unit circle, reused
// by both animations below so the values only need to be verified once.
// cos/sin at 0,30,60,...,330 degrees - all standard, well-known values.
const unitCirclePointsInOrder = [
  { x: 1, y: 0 }, // 0 deg
  { x: 0.866, y: 0.5 }, // 30 deg
  { x: 0.5, y: 0.866 }, // 60 deg
  { x: 0, y: 1 }, // 90 deg
  { x: -0.5, y: 0.866 }, // 120 deg
  { x: -0.866, y: 0.5 }, // 150 deg
  { x: -1, y: 0 }, // 180 deg
  { x: -0.866, y: -0.5 }, // 210 deg
  { x: -0.5, y: -0.866 }, // 240 deg
  { x: 0, y: -1 }, // 270 deg
  { x: 0.5, y: -0.866 }, // 300 deg
  { x: 0.866, y: -0.5 }, // 330 deg
  { x: 1, y: 0 }, // back to 0 deg, closing the loop
];

function drawCircleOutline(color: string) {
  const segments = [];
  for (let i = 0; i < unitCirclePointsInOrder.length - 1; i += 1) {
    segments.push({
      commandType: "drawLineSegment" as const,
      fromPoint: unitCirclePointsInOrder[i],
      toPoint: unitCirclePointsInOrder[i + 1],
      color,
    });
  }
  return segments;
}

export const precalculusAnimations: LessonAnimationEntry[] = [
  {
    courseSlug: "precalculus",
    unitSlug: "unit-circle-and-radians",
    lessonSlug: "the-unit-circle",
    animations: [
      {
        animationSlug: "building-the-unit-circle",
        animationTitle: "Building the Unit Circle",
        relatedTopicTag: "unitCircleAndRadians",
        coordinatePlane: { xMin: -1.5, xMax: 1.5, yMin: -1.5, yMax: 1.5 },
        steps: [
          {
            stepNarration:
              "The unit circle is a circle of radius 1 centered at the origin. Every point on it can be described by an angle.",
            drawCommands: [{ commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y" }],
          },
          {
            stepNarration: "Here's the full circle - radius 1, centered at (0, 0).",
            drawCommands: [{ commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y" }, ...drawCircleOutline("#2563eb")],
          },
          {
            stepNarration:
              "The four 'axis' angles are easy: at 0°, the point is (1, 0); at 90°, (0, 1); at 180°, (-1, 0); at 270°, (0, -1).",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y" },
              ...drawCircleOutline("#2563eb"),
              { commandType: "plotPoint", point: { x: 1, y: 0 }, label: "0°", color: "#0f172a" },
              { commandType: "plotPoint", point: { x: 0, y: 1 }, label: "90°", color: "#0f172a" },
              { commandType: "plotPoint", point: { x: -1, y: 0 }, label: "180°", color: "#0f172a" },
              { commandType: "plotPoint", point: { x: 0, y: -1 }, label: "270°", color: "#0f172a" },
            ],
          },
          {
            stepNarration:
              "At 45°, both coordinates equal √2/2 ≈ 0.707 - the point is exactly as far right as it is up, since 45° bisects the first quadrant.",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y" },
              ...drawCircleOutline("#2563eb"),
              { commandType: "plotPoint", point: { x: 1, y: 0 }, label: "0°", color: "#0f172a" },
              { commandType: "plotPoint", point: { x: 0, y: 1 }, label: "90°", color: "#0f172a" },
              { commandType: "plotPoint", point: { x: -1, y: 0 }, label: "180°", color: "#0f172a" },
              { commandType: "plotPoint", point: { x: 0, y: -1 }, label: "270°", color: "#0f172a" },
              {
                commandType: "drawVectorArrow",
                fromPoint: { x: 0, y: 0 },
                toPoint: { x: 0.707, y: 0.707 },
                color: "#b91c1c",
                label: "45°",
              },
              { commandType: "writeLabel", point: { x: 0.75, y: 0.55 }, text: "(√2/2, √2/2)", color: "#b91c1c" },
            ],
          },
          {
            stepNarration:
              "These eight key angles - each a multiple of 45° - are worth memorizing. Every other angle's coordinates (cos θ, sin θ) build on the same right-triangle pattern.",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "x", yAxisLabel: "y" },
              ...drawCircleOutline("#2563eb"),
              { commandType: "plotPoint", point: { x: 1, y: 0 }, label: "0°", color: "#0f172a" },
              { commandType: "plotPoint", point: { x: 0.707, y: 0.707 }, label: "45°", color: "#0f172a" },
              { commandType: "plotPoint", point: { x: 0, y: 1 }, label: "90°", color: "#0f172a" },
              { commandType: "plotPoint", point: { x: -0.707, y: 0.707 }, label: "135°", color: "#0f172a" },
              { commandType: "plotPoint", point: { x: -1, y: 0 }, label: "180°", color: "#0f172a" },
              { commandType: "plotPoint", point: { x: -0.707, y: -0.707 }, label: "225°", color: "#0f172a" },
              { commandType: "plotPoint", point: { x: 0, y: -1 }, label: "270°", color: "#0f172a" },
              { commandType: "plotPoint", point: { x: 0.707, y: -0.707 }, label: "315°", color: "#0f172a" },
            ],
          },
        ],
      },
    ],
  },
  {
    courseSlug: "precalculus",
    unitSlug: "graphing-trig-functions",
    lessonSlug: "graphing-sine-and-cosine",
    animations: [
      {
        animationSlug: "unit-circle-to-sine-wave",
        animationTitle: "From the Unit Circle to the Sine Wave",
        relatedTopicTag: "graphingTrigFunctions",
        coordinatePlane: { xMin: -0.5, xMax: 6.8, yMin: -1.5, yMax: 1.5 },
        steps: [
          {
            stepNarration:
              "Let's see how the unit circle generates the sine wave. As the angle increases, the y-coordinate on the unit circle becomes the height of the sine curve.",
            drawCommands: [{ commandType: "drawAxes", xAxisLabel: "θ (radians)", yAxisLabel: "sin(θ)" }],
          },
          {
            stepNarration: "At θ = 0, sin(θ) = 0 - so the curve starts at the origin.",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "θ (radians)", yAxisLabel: "sin(θ)" },
              { commandType: "plotPoint", point: { x: 0, y: 0 }, label: "θ=0: sin=0", color: "#0f172a" },
            ],
          },
          {
            stepNarration: "At θ = π/2 (90°), sin(θ) = 1, the highest point of the wave.",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "θ (radians)", yAxisLabel: "sin(θ)" },
              { commandType: "plotPoint", point: { x: 0, y: 0 }, color: "#0f172a" },
              { commandType: "plotPoint", point: { x: 1.5708, y: 1 }, label: "π/2: sin=1", color: "#0f172a" },
            ],
          },
          {
            stepNarration:
              "Continuing around the circle: at θ = π, sin returns to 0; at θ = 3π/2, sin reaches its lowest point, -1.",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "θ (radians)", yAxisLabel: "sin(θ)" },
              { commandType: "plotPoint", point: { x: 0, y: 0 }, color: "#0f172a" },
              { commandType: "plotPoint", point: { x: 1.5708, y: 1 }, color: "#0f172a" },
              { commandType: "plotPoint", point: { x: 3.1416, y: 0 }, label: "π: sin=0", color: "#0f172a" },
              { commandType: "plotPoint", point: { x: 4.7124, y: -1 }, label: "3π/2: sin=-1", color: "#0f172a" },
            ],
          },
          {
            stepNarration:
              "Connecting all these values (and everything in between) traces out the full sine wave - one complete up-and-down cycle every 2π.",
            drawCommands: [
              { commandType: "drawAxes", xAxisLabel: "θ (radians)", yAxisLabel: "sin(θ)" },
              { commandType: "plotFunction", functionOfX: "sin(x)", color: "#2563eb" },
              { commandType: "plotPoint", point: { x: 0, y: 0 }, color: "#0f172a" },
              { commandType: "plotPoint", point: { x: 1.5708, y: 1 }, color: "#0f172a" },
              { commandType: "plotPoint", point: { x: 3.1416, y: 0 }, color: "#0f172a" },
              { commandType: "plotPoint", point: { x: 4.7124, y: -1 }, color: "#0f172a" },
              { commandType: "plotPoint", point: { x: 6.2832, y: 0 }, label: "2π: sin=0", color: "#0f172a" },
            ],
          },
        ],
      },
    ],
  },
];
