import { evaluateMathExpressionAtX } from "../animation/safeMathExpressionEvaluator";
import type { PracticeProblem } from "../types/curriculumTypes";

const normalize = (value: string) => value.trim().toLowerCase().replace(/−/g, '-').replace(/\s+/g, '');
// Numeric equivalence accepts fractions and decimals. Algebraic answers stay
// limited to authored variants; sampling a function would accept false identities.
export function gradeAnswer(problem: PracticeProblem, answer: string): boolean {
  const actual = normalize(answer);
  if (!actual || actual.length > 200) return false;
  const variants = [problem.correctAnswer, ...(problem.acceptableAnswerVariants ?? [])];
  if (variants.some(value => normalize(value) === actual)) return true;
  if (problem.answerFormat !== 'shortNumericAnswer' || /[a-df-z]/i.test(actual.replace(/pi/g, ''))) return false;
  const number = evaluateMathExpressionAtX(actual, 0);
  if (number === null) return false;
  return variants.some(value => {
    const expected = evaluateMathExpressionAtX(normalize(value), 0);
    return expected !== null && Math.abs(number - expected) <= 1e-9 * Math.max(1, Math.abs(expected));
  });
}
