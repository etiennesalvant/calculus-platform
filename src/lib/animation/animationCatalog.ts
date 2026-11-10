import { MathTrackName } from "@/lib/types/curriculumTypes";
import { CanvasAnimationScript, LessonAnimationEntry } from "@/lib/types/animationTypes";

// Canvas step-by-step animations live in their OWN catalog, keyed to the
// lesson they explain, rather than as a field on Lesson objects. That keeps
// every unitsData.ts file focused purely on written lesson content, and
// means adding an animation later never means touching curriculum data.
//
// Not every lesson has one - these are a curated set of "flagship"
// animations for the concepts that benefit most from watching a picture
// build step by step (a tangent line converging, a Riemann sum filling in,
// a vector field, etc.), not a 1-to-1 animation per lesson.

export type { LessonAnimationEntry };

import { algebraCalcFocusedAnimations } from "@/lib/animation/scripts/algebraCalcFocusedAnimations";
import { generalAdvancedFoundationsAnimations } from "@/lib/animation/scripts/generalAdvancedFoundationsAnimations";
import { precalculusAnimations } from "@/lib/animation/scripts/precalculusAnimations";
import { calculus1Animations } from "@/lib/animation/scripts/calculus1Animations";
import { calculus2Animations } from "@/lib/animation/scripts/calculus2Animations";
import { calculus3Animations } from "@/lib/animation/scripts/calculus3Animations";
import { calculus4Animations } from "@/lib/animation/scripts/calculus4Animations";
import { calculus5Animations } from "@/lib/animation/scripts/calculus5Animations";

export const lessonAnimationCatalog: LessonAnimationEntry[] = [
  ...algebraCalcFocusedAnimations,
  ...generalAdvancedFoundationsAnimations,
  ...precalculusAnimations,
  ...calculus1Animations,
  ...calculus2Animations,
  ...calculus3Animations,
  ...calculus4Animations,
  ...calculus5Animations,
];

export function findAnimationsForLesson(
  courseSlug: MathTrackName,
  unitSlug: string,
  lessonSlug: string
): CanvasAnimationScript[] {
  const entry = lessonAnimationCatalog.find(
    (candidate) =>
      candidate.courseSlug === courseSlug &&
      candidate.unitSlug === unitSlug &&
      candidate.lessonSlug === lessonSlug
  );
  return entry?.animations ?? [];
}
