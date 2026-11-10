import {
  DiagnosticAnswerRecord,
  MathTopicTag,
  MathTrackName,
  PlacementRecommendation,
  TopicMasteryResult,
} from "@/lib/types/curriculumTypes";

// Turns a pile of right/wrong answers into one mastery score per topic.
function scoreDiagnosticByTopic(
  answerRecords: DiagnosticAnswerRecord[]
): TopicMasteryResult[] {
  const countsByTopic = new Map<MathTopicTag, { correctCount: number; totalCount: number }>();

  for (const answer of answerRecords) {
    const existing = countsByTopic.get(answer.topicTag) ?? { correctCount: 0, totalCount: 0 };
    existing.totalCount += 1;
    if (answer.wasCorrect) existing.correctCount += 1;
    countsByTopic.set(answer.topicTag, existing);
  }

  const results: TopicMasteryResult[] = [];
  countsByTopic.forEach((counts, topicTag) => {
    const ratio = counts.totalCount === 0 ? 0 : counts.correctCount / counts.totalCount;
    let masteryLevel: TopicMasteryResult["masteryLevel"] = "notTested";
    if (counts.totalCount > 0) {
      if (ratio >= 0.8) masteryLevel = "strong";
      else if (ratio >= 0.5) masteryLevel = "shaky";
      else masteryLevel = "needsWork";
    }
    results.push({
      topicTag,
      correctCount: counts.correctCount,
      totalCount: counts.totalCount,
      masteryLevel,
    });
  });

  return results;
}

// The linear path the platform teaches in, oldest prerequisite first.
// This is what "recommend the earliest weak spot" walks through.
const topicToCourseAndUnit: Array<{
  topicTag: MathTopicTag;
  course: MathTrackName;
  unitSlug: string;
}> = [
  { topicTag: "orderOfOperations", course: "algebraCalcFocused", unitSlug: "arithmetic-review" },
  { topicTag: "signedNumberArithmetic", course: "algebraCalcFocused", unitSlug: "arithmetic-review" },
  { topicTag: "wholeNumberAndFractionArithmetic", course: "algebraCalcFocused", unitSlug: "arithmetic-review" },
  { topicTag: "solvingLinearEquations", course: "algebraCalcFocused", unitSlug: "solving-equations-and-inequalities" },
  { topicTag: "solvingLinearInequalities", course: "algebraCalcFocused", unitSlug: "solving-equations-and-inequalities" },
  { topicTag: "solvingAbsoluteValueEquations", course: "algebraCalcFocused", unitSlug: "solving-equations-and-inequalities" },
  { topicTag: "graphingLinesAndSlope", course: "algebraCalcFocused", unitSlug: "graphing-lines-and-function-basics" },
  { topicTag: "solvingSystemsOfEquations", course: "algebraCalcFocused", unitSlug: "systems-of-equations" },
  { topicTag: "exponentRules", course: "algebraCalcFocused", unitSlug: "exponents-and-polynomials" },
  { topicTag: "polynomialArithmetic", course: "algebraCalcFocused", unitSlug: "exponents-and-polynomials" },
  { topicTag: "polynomialDivision", course: "algebraCalcFocused", unitSlug: "exponents-and-polynomials" },
  { topicTag: "factoringPolynomials", course: "algebraCalcFocused", unitSlug: "factoring" },
  { topicTag: "solvingQuadraticEquations", course: "algebraCalcFocused", unitSlug: "quadratics" },
  { topicTag: "graphingQuadraticFunctions", course: "algebraCalcFocused", unitSlug: "quadratics" },
  { topicTag: "rationalExpressions", course: "algebraCalcFocused", unitSlug: "rational-expressions" },
  { topicTag: "radicalsAndRationalExponents", course: "algebraCalcFocused", unitSlug: "radicals-and-exponents" },
  { topicTag: "functionsAndFunctionNotation", course: "algebraCalcFocused", unitSlug: "functions" },
  { topicTag: "functionCompositionAndInverses", course: "algebraCalcFocused", unitSlug: "functions" },
  { topicTag: "functionTransformations", course: "algebraCalcFocused", unitSlug: "functions" },
  { topicTag: "exponentialAndLogarithmicFunctions", course: "algebraCalcFocused", unitSlug: "exponential-and-log-functions" },
  { topicTag: "trianglesAndThePythagoreanTheorem", course: "generalAdvancedFoundations", unitSlug: "geometry-essentials" },
  { topicTag: "anglesAndParallelLines", course: "generalAdvancedFoundations", unitSlug: "geometry-essentials" },
  { topicTag: "areaAndPerimeter", course: "generalAdvancedFoundations", unitSlug: "geometry-essentials" },
  { topicTag: "circlesAndArcs", course: "generalAdvancedFoundations", unitSlug: "geometry-essentials" },
  { topicTag: "coordinateGeometry", course: "generalAdvancedFoundations", unitSlug: "geometry-essentials" },
  { topicTag: "piecewiseFunctions", course: "generalAdvancedFoundations", unitSlug: "advanced-function-concepts" },
  { topicTag: "polynomialEndBehavior", course: "generalAdvancedFoundations", unitSlug: "advanced-function-concepts" },
  { topicTag: "rationalFunctionAsymptotes", course: "generalAdvancedFoundations", unitSlug: "advanced-function-concepts" },
  { topicTag: "evenAndOddFunctions", course: "generalAdvancedFoundations", unitSlug: "advanced-function-concepts" },
  { topicTag: "complexNumberArithmetic", course: "generalAdvancedFoundations", unitSlug: "complex-numbers" },
  { topicTag: "complexSolutionsToQuadratics", course: "generalAdvancedFoundations", unitSlug: "complex-numbers" },
  { topicTag: "summationNotation", course: "generalAdvancedFoundations", unitSlug: "sequences-series-and-summation" },
  { topicTag: "infiniteGeometricSeriesConvergence", course: "generalAdvancedFoundations", unitSlug: "sequences-series-and-summation" },
  { topicTag: "setAndIntervalNotation", course: "generalAdvancedFoundations", unitSlug: "mathematical-language-and-reasoning" },
  { topicTag: "logicalReasoningBasics", course: "generalAdvancedFoundations", unitSlug: "mathematical-language-and-reasoning" },
  { topicTag: "mathematicalInduction", course: "generalAdvancedFoundations", unitSlug: "mathematical-language-and-reasoning" },
  { topicTag: "trigonometricRatios", course: "precalculus", unitSlug: "trig-ratios-and-right-triangles" },
  { topicTag: "unitCircleAndRadians", course: "precalculus", unitSlug: "unit-circle-and-radians" },
  { topicTag: "graphingTrigFunctions", course: "precalculus", unitSlug: "graphing-trig-functions" },
  { topicTag: "trigonometricIdentities", course: "precalculus", unitSlug: "trig-identities" },
  { topicTag: "inverseTrigFunctions", course: "precalculus", unitSlug: "inverse-trig-functions" },
  { topicTag: "solvingTrigEquations", course: "precalculus", unitSlug: "solving-trig-equations" },
  { topicTag: "introToVectors2D", course: "precalculus", unitSlug: "intro-to-vectors-2d" },
  { topicTag: "conicSections", course: "precalculus", unitSlug: "conic-sections" },
  { topicTag: "introToPolarCoordinates", course: "precalculus", unitSlug: "intro-to-polar-coordinates" },
  { topicTag: "sequencesAndSeriesIntro", course: "generalAdvancedFoundations", unitSlug: "sequences-series-and-summation" },
];

export function buildPlacementRecommendation(
  answerRecords: DiagnosticAnswerRecord[]
): { masteryResults: TopicMasteryResult[]; recommendation: PlacementRecommendation } {
  const masteryResults = scoreDiagnosticByTopic(answerRecords);
  const masteryByTopic = new Map(masteryResults.map((result) => [result.topicTag, result]));

  const topicsNeedingReview: MathTopicTag[] = [];
  const topicsAlreadyStrong: MathTopicTag[] = [];
  let firstWeakSpot: { course: MathTrackName; unitSlug: string } | null = null;

  for (const entry of topicToCourseAndUnit) {
    const mastery = masteryByTopic.get(entry.topicTag);
    const level = mastery?.masteryLevel ?? "notTested";

    if (level === "strong") {
      topicsAlreadyStrong.push(entry.topicTag);
      continue;
    }

    // "notTested" topics aren't flagged as weak (the short diagnostic
    // doesn't cover every single topic) but they also don't block a
    // recommendation the way a confirmed "shaky"/"needsWork" result does.
    if (level === "shaky" || level === "needsWork") {
      topicsNeedingReview.push(entry.topicTag);
      if (!firstWeakSpot) {
        firstWeakSpot = { course: entry.course, unitSlug: entry.unitSlug };
      }
    }
  }

  const recommendation: PlacementRecommendation = firstWeakSpot
    ? {
        recommendedStartingCourse: firstWeakSpot.course,
        recommendedStartingUnit: firstWeakSpot.unitSlug,
        topicsToReviewFirst: topicsNeedingReview,
        topicsAlreadyStrong,
        summaryMessage:
          `Your results look solid on ${topicsAlreadyStrong.length} topic(s), but ` +
          `${topicsNeedingReview.length} topic(s) need a refresher. Starting in ` +
          `${firstWeakSpot.course} will close the earliest gap first so nothing later builds on a shaky foundation.`,
      }
    : {
        recommendedStartingCourse: "calculus1",
        recommendedStartingUnit: "limits-and-continuity",
        topicsToReviewFirst: [],
        topicsAlreadyStrong,
        summaryMessage:
          "Every topic tested came back strong. You're ready to start directly in Calculus I.",
      };

  return { masteryResults, recommendation };
}
