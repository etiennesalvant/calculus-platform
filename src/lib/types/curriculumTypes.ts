// Shared vocabulary for the whole curriculum.
// Every field name below is deliberately written in plain English so that
// referencing a bug ("the checkStudentAnswer function") is never a guessing game.

// NOTE: as of the 2026-09-13 curriculum restructuring, Algebra 1 and
// Algebra 2 are merged into one course, and standalone Geometry is
// retired in favor of the "General Advanced Mathematical Foundations"
// bridge course. See docs/curriculum/00-sequence-overview.md.
export type MathTrackName =
  | "algebraCalcFocused"
  | "generalAdvancedFoundations"
  | "precalculus"
  | "calculus1"
  | "calculus2"
  | "calculus3"
  | "calculus4"
  | "calculus5";

// One topic tag used by both the diagnostic test and the curriculum, so a
// diagnostic result can point straight at the unit that teaches it.
export type MathTopicTag =
  | "wholeNumberAndFractionArithmetic"
  | "signedNumberArithmetic"
  | "orderOfOperations"
  | "solvingLinearEquations"
  | "graphingLinesAndSlope"
  | "solvingSystemsOfEquations"
  | "exponentRules"
  | "factoringPolynomials"
  | "solvingQuadraticEquations"
  | "rationalExpressions"
  | "radicalsAndRationalExponents"
  | "functionsAndFunctionNotation"
  | "exponentialAndLogarithmicFunctions"
  | "trianglesAndThePythagoreanTheorem"
  | "anglesAndParallelLines"
  | "areaAndPerimeter"
  | "circlesAndArcs"
  | "coordinateGeometry"
  | "trigonometricRatios"
  | "unitCircleAndRadians"
  | "trigonometricIdentities"
  | "graphingTrigFunctions"
  | "sequencesAndSeriesIntro"
  | "conicSections"
  | "limitsAndContinuity"
  | "derivativeDefinitionAndRules"
  | "applicationsOfDerivatives"
  | "integrationBasics"
  | "integrationTechniques"
  | "infiniteSeriesConvergence"
  | "parametricAndPolarCurves"
  | "vectorsAndThreeDSpace"
  | "partialDerivatives"
  | "multipleIntegrals"
  | "vectorCalculus"
  | "ordinaryDifferentialEquations"
  | "linearAlgebraFoundations"
  // --- Added during the 2026-09-13 curriculum expansion ---
  // Algebra I & II (Calculus-Focused)
  | "solvingLinearInequalities"
  | "solvingAbsoluteValueEquations"
  | "polynomialArithmetic"
  | "polynomialDivision"
  | "graphingQuadraticFunctions"
  | "functionCompositionAndInverses"
  | "functionTransformations"
  // General Advanced Mathematical Foundations
  | "piecewiseFunctions"
  | "polynomialEndBehavior"
  | "rationalFunctionAsymptotes"
  | "evenAndOddFunctions"
  | "complexNumberArithmetic"
  | "complexSolutionsToQuadratics"
  | "summationNotation"
  | "infiniteGeometricSeriesConvergence"
  | "setAndIntervalNotation"
  | "logicalReasoningBasics"
  | "mathematicalInduction"
  // Pre-Calculus
  | "inverseTrigFunctions"
  | "solvingTrigEquations"
  | "introToVectors2D"
  | "introToPolarCoordinates"
  // Calculus I
  | "chainRule"
  | "implicitDifferentiation"
  | "derivativesOfTrigFunctions"
  | "derivativesOfExponentialAndLogFunctions"
  | "logarithmicDifferentiation"
  | "relatedRates"
  | "linearApproximation"
  | "meanValueTheorem"
  | "curveSketching"
  | "optimizationApplications"
  // Calculus II
  | "improperIntegrals"
  | "areaBetweenCurves"
  | "volumesOfRevolution"
  | "arcLengthAndSurfaceArea"
  | "workAndPhysicalApplications"
  | "sequenceConvergence"
  // Calculus III
  | "vectorValuedFunctions"
  | "directionalDerivativesAndGradients"
  | "multivariableOptimization"
  | "lagrangeMultipliers"
  | "changeOfVariables"
  // Calculus IV
  | "laplaceTransforms"
  | "systemsOfDifferentialEquations"
  | "seriesSolutionsAndNumericalMethods"
  // Calculus V
  | "rowReductionAndGaussianElimination"
  | "determinants"
  | "matrixInverses"
  | "vectorSpacesAndSubspaces"
  | "linearIndependenceBasisAndDimension"
  | "linearTransformations"
  | "eigenvaluesAndEigenvectors"
  | "diagonalization";

export interface PracticeProblem {
  problemId: string;
  topicTag: MathTopicTag;
  promptText: string;
  // Rendered with KaTeX when present, e.g. "x^2 - 5x + 6 = 0"
  promptMathExpression?: string;
  answerFormat: "multipleChoice" | "shortNumericAnswer" | "shortAlgebraicAnswer";
  choices?: string[];
  correctAnswer: string;
  // Accepts small variations of the correct answer (e.g. "1/2" and "0.5").
  acceptableAnswerVariants?: string[];
  stepByStepExplanation: string;
  difficultyLevel: 1 | 2 | 3 | 4 | 5;
}

export interface LessonContentBlock {
  blockType: "explanation" | "workedExample" | "keyFormula" | "commonMistake";
  headingText?: string;
  bodyText: string;
  mathExpression?: string;
}

export interface Lesson {
  lessonSlug: string;
  lessonTitle: string;
  estimatedMinutes: number;
  topicTag: MathTopicTag;
  learningGoals: string[];
  contentBlocks: LessonContentBlock[];
  practiceProblems: PracticeProblem[];
  freeResourceLinks: FreeResourceLink[];
}

export interface FreeResourceLink {
  resourceTitle: string;
  resourceUrl: string;
  resourceType: "textbookChapter" | "videoLesson" | "interactivePractice" | "referenceSheet";
}

// A quiz/exam question is shaped exactly like a practice problem - same
// answer formats, same auto-grading rules - just grouped into a timed-feeling
// assessment instead of living inline in a lesson.
export type AssessmentQuestion = PracticeProblem;

export interface UnitQuiz {
  quizTitle: string;
  // A student needs at least this percent correct to be marked as "passed."
  passingScorePercent: number;
  questions: AssessmentQuestion[];
}

export interface CourseExam {
  examTitle: string;
  passingScorePercent: number;
  questions: AssessmentQuestion[];
}

export interface Unit {
  unitSlug: string;
  unitTitle: string;
  unitDescription: string;
  lessons: Lesson[];
  // Optional: most units have one once the assessment layer is authored for
  // them; older/newer units may not yet.
  unitQuiz?: UnitQuiz;
}

export interface Course {
  courseSlug: MathTrackName;
  courseTitle: string;
  courseDescription: string;
  prerequisiteCourses: MathTrackName[];
  units: Unit[];
  courseExam?: CourseExam;
}

export interface DiagnosticQuestion {
  questionId: string;
  topicTag: MathTopicTag;
  sourceTrack: MathTrackName;
  promptText: string;
  promptMathExpression?: string;
  choices: string[];
  correctAnswerIndex: number;
  difficultyLevel: 1 | 2 | 3 | 4 | 5;
}

export interface DiagnosticAnswerRecord {
  questionId: string;
  topicTag: MathTopicTag;
  wasCorrect: boolean;
}

export interface TopicMasteryResult {
  topicTag: MathTopicTag;
  correctCount: number;
  totalCount: number;
  masteryLevel: "strong" | "shaky" | "needsWork" | "notTested";
}

export interface PlacementRecommendation {
  recommendedStartingCourse: MathTrackName;
  recommendedStartingUnit: string;
  topicsToReviewFirst: MathTopicTag[];
  topicsAlreadyStrong: MathTopicTag[];
  summaryMessage: string;
}
