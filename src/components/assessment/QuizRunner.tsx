"use client";

import { gradeAnswer } from "@/lib/assessment/gradeAnswer";
import { useState } from "react";
import Link from "next/link";
import { AssessmentQuestion, MathTrackName } from "@/lib/types/curriculumTypes";
import { MathExpression } from "@/components/lesson/MathExpression";
import { recordQuizAttempt } from "@/lib/progress/studentProgressStore";

// Shared question-by-question runner for both a unit quiz and a course
// exam - the only real difference between the two is how many questions
// there are and where "Back" links to, both passed in by the caller.
export function QuizRunner({
  title,
  courseSlug,
  unitSlug,
  attemptType,
  questions,
  passingScorePercent,
  backHref,
  backLabel,
}: {
  title: string;
  courseSlug: MathTrackName;
  unitSlug: string | null;
  attemptType: "unitQuiz" | "courseExam";
  questions: AssessmentQuestion[];
  passingScorePercent: number;
  backHref: string;
  backLabel: string;
}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [typedAnswer, setTypedAnswer] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  function handleNext() {
    const studentAnswer = currentQuestion.answerFormat === "multipleChoice" ? selectedChoice ?? "" : typedAnswer;
    const wasCorrect = gradeAnswer(currentQuestion, studentAnswer);
    const updatedCorrectCount = correctCount + (wasCorrect ? 1 : 0);
    setCorrectCount(updatedCorrectCount);
    setSelectedChoice(null);
    setTypedAnswer("");

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((index) => index + 1);
    } else {
      const scorePercent = Math.round((updatedCorrectCount / questions.length) * 100);
      recordQuizAttempt({
        courseSlug,
        unitSlug,
        attemptType,
        correctCount: updatedCorrectCount,
        totalCount: questions.length,
        passed: scorePercent >= passingScorePercent,
        completedAtIsoDate: new Date().toISOString(),
      });
      setIsFinished(true);
    }
  }

  function handleRetake() {
    setCurrentQuestionIndex(0);
    setSelectedChoice(null);
    setTypedAnswer("");
    setCorrectCount(0);
    setIsFinished(false);
  }

  if (questions.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-10">
        <p className="text-sm text-slate-500">This assessment hasn&apos;t been authored yet.</p>
        <Link href={backHref} className="text-sm text-brandAccent underline mt-2 inline-block">
          {backLabel}
        </Link>
      </div>
    );
  }

  if (isFinished) {
    const scorePercent = Math.round((correctCount / questions.length) * 100);
    const passed = scorePercent >= passingScorePercent;
    return (
      <div className="max-w-2xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-semibold text-brandInk mb-3">{title}: Results</h1>
        <div
          className={`rounded-lg p-5 mb-5 ${
            passed ? "bg-green-50 border border-green-200" : "bg-amber-50 border border-amber-200"
          }`}
        >
          <p className={`text-lg font-semibold ${passed ? "text-brandSuccess" : "text-amber-800"}`}>
            {correctCount} / {questions.length} correct ({scorePercent}%)
          </p>
          <p className="text-sm text-slate-700 mt-1">
            {passed
              ? `You passed! (${passingScorePercent}% or higher needed.)`
              : `Not quite there yet - ${passingScorePercent}% is needed to pass. Review the lessons and try again whenever you're ready.`}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleRetake}
            className="rounded-md bg-brandAccent px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Retake
          </button>
          <Link href={backHref} className="text-sm text-slate-500 hover:underline">
            {backLabel}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold text-brandInk">{title}</h1>
        <span className="text-xs text-slate-400">
          Question {currentQuestionIndex + 1} of {questions.length}
        </span>
      </div>

      <div className="h-1.5 w-full rounded-full bg-slate-100 mb-6">
        <div
          className="h-1.5 rounded-full bg-brandAccent transition-all"
          style={{ width: `${(currentQuestionIndex / questions.length) * 100}%` }}
        />
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-5">
        <p className="text-sm text-slate-800 mb-1">{currentQuestion.promptText}</p>
        {currentQuestion.promptMathExpression && (
          <MathExpression expression={currentQuestion.promptMathExpression} />
        )}

        {currentQuestion.answerFormat === "multipleChoice" && currentQuestion.choices && (
          <div className="space-y-1.5 mt-3">
            {currentQuestion.choices.map((choice) => (
              <button
                key={choice}
                onClick={() => setSelectedChoice(choice)}
                className={`block w-full text-left rounded-md border px-3 py-2 text-sm ${
                  selectedChoice === choice
                    ? "border-brandAccent bg-brandAccentSoft"
                    : "border-slate-200 hover:bg-slate-50"
                }`}
              >
                {choice}
              </button>
            ))}
          </div>
        )}

        {currentQuestion.answerFormat !== "multipleChoice" && (
          <input
            value={typedAnswer}
            onChange={(event) => setTypedAnswer(event.target.value)}
            aria-label="Your answer"
            placeholder="Type your answer"
            className="mt-3 w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
          />
        )}

        <button
          onClick={handleNext}
          disabled={currentQuestion.answerFormat === "multipleChoice" ? selectedChoice === null : typedAnswer.trim() === ""}
          className="mt-4 rounded-md bg-brandAccent px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-40"
        >
          {currentQuestionIndex + 1 === questions.length ? "See My Results" : "Next Question"}
        </button>
      </div>
    </div>
  );
}
