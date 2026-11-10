import { MathTopicTag, MathTrackName } from "@/lib/types/curriculumTypes";

// Shared vocabulary for the canvas step-by-step explainer animations.
// Every animation is plain data (a list of steps, each a list of drawing
// commands) rather than hand-written canvas code, so authoring a new
// animation never means touching the player component - the same
// content-vs-rendering split used everywhere else in this project.
//
// Coordinates in every command are in MATH space (whatever range the
// animation declares in `coordinatePlane`), never raw pixels. The player
// component (CanvasExplainerPlayer) converts math coordinates to pixel
// coordinates for you.

export interface MathPoint {
  x: number;
  y: number;
}

export type CanvasDrawCommand =
  | {
      commandType: "drawAxes";
      xAxisLabel?: string;
      yAxisLabel?: string;
      showGridLines?: boolean;
    }
  | {
      commandType: "plotFunction";
      // A math expression in terms of x, e.g. "x^2 - 3*x + 2" or "sin(x)".
      // Evaluated by the small built-in safe expression evaluator - see
      // src/lib/animation/safeMathExpressionEvaluator.ts for the supported
      // syntax (no arbitrary JavaScript is ever executed).
      functionOfX: string;
      color?: string;
      lineWidthPixels?: number;
      dashed?: boolean;
    }
  | {
      commandType: "plotPoint";
      point: MathPoint;
      label?: string;
      color?: string;
      radiusPixels?: number;
    }
  | {
      commandType: "drawLineSegment";
      fromPoint: MathPoint;
      toPoint: MathPoint;
      color?: string;
      lineWidthPixels?: number;
      dashed?: boolean;
    }
  | {
      commandType: "drawVectorArrow";
      fromPoint: MathPoint;
      toPoint: MathPoint;
      color?: string;
      label?: string;
    }
  | {
      commandType: "shadeRegionBetweenCurves";
      // A closed polygon, in math coordinates, sampled finely enough by the
      // content author to look smooth (the player just fills it as-is).
      polygonPoints: MathPoint[];
      color?: string;
      opacityFromZeroToOne?: number;
    }
  | {
      commandType: "writeLabel";
      point: MathPoint;
      text: string;
      color?: string;
      fontSizePixels?: number;
    }
  | {
      commandType: "highlightPointWithRing";
      point: MathPoint;
      color?: string;
    };

export interface AnimationStep {
  // Shown as the caption under the canvas, and fed to the "Read aloud"
  // button so the narration can be heard, not just read.
  stepNarration: string;
  // The COMPLETE picture for this step, not a delta from the previous one -
  // every command needed to draw this frame from a blank canvas. This keeps
  // each step self-contained and easy to author/verify independently.
  drawCommands: CanvasDrawCommand[];
  // How long autoplay should sit on this step before advancing, in
  // milliseconds. Defaults to 3200ms in the player if omitted.
  suggestedDisplayMilliseconds?: number;
}

export interface CanvasAnimationScript {
  animationSlug: string;
  animationTitle: string;
  relatedTopicTag: MathTopicTag;
  // The math-coordinate window every step's commands are drawn within.
  coordinatePlane: { xMin: number; xMax: number; yMin: number; yMax: number };
  steps: AnimationStep[];
}

// Links one or more animations to the specific lesson they explain. Lives
// here (not in animationCatalog.ts) purely so the per-course script files
// can import this type without creating a circular import with the catalog
// file that assembles them all.
export interface LessonAnimationEntry {
  courseSlug: MathTrackName;
  unitSlug: string;
  lessonSlug: string;
  animations: CanvasAnimationScript[];
}
