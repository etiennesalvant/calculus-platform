import { Course, MathTrackName } from "@/lib/types/curriculumTypes";
import { algebraCalcFocusedUnits, algebraCalcFocusedCourseExam } from "@/lib/curriculum/algebraCalcFocused/unitsData";
import {
  generalAdvancedFoundationsUnits,
  generalAdvancedFoundationsCourseExam,
} from "@/lib/curriculum/generalAdvancedFoundations/unitsData";
import { precalculusUnits, precalculusCourseExam } from "@/lib/curriculum/precalculus/unitsData";
import { calculus1Units, calculus1CourseExam } from "@/lib/curriculum/calculus1/unitsData";
import { calculus2Units, calculus2CourseExam } from "@/lib/curriculum/calculus2/unitsData";
import { calculus3Units, calculus3CourseExam } from "@/lib/curriculum/calculus3/unitsData";
import { calculus4Units, calculus4CourseExam } from "@/lib/curriculum/calculus4/unitsData";
import { calculus5Units, calculus5CourseExam } from "@/lib/curriculum/calculus5/unitsData";

// Project lead: Etienne Salvant.
// IV and V are this project's labels for differential equations and linear
// algebra, not standardized course numbers. See docs/CURRICULUM_PLAN.md.

// NOTE ON THE 2026-09-13 RESTRUCTURING:
// Algebra 1 and Algebra 2 are merged into one calculus-focused course, and
// standalone Geometry is retired in favor of "General Advanced Mathematical
// Foundations," a new bridge course between Algebra and Pre-Calculus. See
// docs/curriculum/00-sequence-overview.md for the full reasoning, and
// docs/curriculum/01-... through 08-... for each course's detailed plan.
export const courseCatalog: Course[] = [
  {
    courseSlug: "algebraCalcFocused",
    courseTitle: "Algebra I & II (Calculus-Focused)",
    courseDescription:
      "Rebuilding algebraic fluency fast, focused only on the skills calculus actually uses: equations, functions, factoring, quadratics, rationals, radicals, and exponential/log functions.",
    prerequisiteCourses: [],
    units: algebraCalcFocusedUnits,
    courseExam: algebraCalcFocusedCourseExam,
  },
  {
    courseSlug: "generalAdvancedFoundations",
    courseTitle: "General Advanced Mathematical Foundations",
    courseDescription:
      "Closing the gap between algebra and pre-calculus: geometry essentials, advanced function behavior, complex numbers, sequences and summation notation, mathematical reasoning, and an intuitive first look at limits.",
    prerequisiteCourses: ["algebraCalcFocused"],
    units: generalAdvancedFoundationsUnits,
    courseExam: generalAdvancedFoundationsCourseExam,
  },
  {
    courseSlug: "precalculus",
    courseTitle: "Pre-Calculus",
    courseDescription:
      "Trigonometry from ratios through identities and graphing, plus vectors, conics, and polar coordinates, purpose-built as the direct runway into Calculus I.",
    prerequisiteCourses: ["algebraCalcFocused", "generalAdvancedFoundations"],
    units: precalculusUnits,
    courseExam: precalculusCourseExam,
  },
  {
    courseSlug: "calculus1",
    courseTitle: "Calculus I",
    courseDescription: "Limits, derivatives, and their applications.",
    prerequisiteCourses: ["precalculus"],
    units: calculus1Units,
    courseExam: calculus1CourseExam,
  },
  {
    courseSlug: "calculus2",
    courseTitle: "Calculus II",
    courseDescription: "Integration techniques, applications of integrals, and infinite series.",
    prerequisiteCourses: ["calculus1"],
    units: calculus2Units,
    courseExam: calculus2CourseExam,
  },
  {
    courseSlug: "calculus3",
    courseTitle: "Calculus III",
    courseDescription: "Multivariable and vector calculus.",
    prerequisiteCourses: ["calculus2"],
    units: calculus3Units,
    courseExam: calculus3CourseExam,
  },
  {
    courseSlug: "calculus4",
    courseTitle: "Calculus IV: Ordinary Differential Equations",
    courseDescription: "Modeling and solving first- and second-order differential equations.",
    prerequisiteCourses: ["calculus3"],
    units: calculus4Units,
    courseExam: calculus4CourseExam,
  },
  {
    courseSlug: "calculus5",
    courseTitle: "Calculus V: Linear Algebra Foundations",
    courseDescription: "The linear algebra used throughout applied math, physics, and engineering.",
    prerequisiteCourses: ["calculus2"],
    units: calculus5Units,
    courseExam: calculus5CourseExam,
  },
];

export function findCourseBySlug(courseSlug: MathTrackName): Course | undefined {
  return courseCatalog.find((course) => course.courseSlug === courseSlug);
}

export function findAllPrerequisitesInOrder(): MathTrackName[] {
  return courseCatalog.map((course) => course.courseSlug);
}
