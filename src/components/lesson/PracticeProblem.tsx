"use client";

import { useState } from "react";
import { PracticeProblem as PracticeProblemData } from "@/lib/types/curriculumTypes";
import { MathExpression } from "@/components/lesson/MathExpression";

import { gradeAnswer } from "@/lib/assessment/gradeAnswer";

export function PracticeProblem({
  problem,
  onGraded,
}: {
  problem: PracticeProblemData;
  onGraded?: (wasCorrect: boolean) => void;
}) {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [typedAnswer, setTypedAnswer] = useState("");
  const [gradeResult, setGradeResult] = useState<"correct" | "incorrect" | null>(null);
  const [isShowingExplanation, setIsShowingExplanation] = useState(false);

  function checkAnswer() {
    const studentAnswer = problem.answerFormat === "multipleChoice" ? selectedChoice ?? "" : typedAnswer;
    const wasCorrect = gradeAnswer(problem, studentAnswer);

    setGradeResult(wasCorrect ? "correct" : "incorrect");
    if (!wasCorrect) setIsShowingExplanation(true);
    onGraded?.(wasCorrect);
  }

  function tryAgain() {
    setGradeResult(null);
    setSelectedChoice(null);
    setTypedAnswer("");
    setIsShowingExplanation(false);
  }

  return (
    <div className="rounded-lg border border-slate-200 p-4 bg-white">
      <p className="text-sm text-slate-800 mb-1">{problem.promptText}</p>
      {problem.promptMathExpression && <MathExpression expression={problem.promptMathExpression} />}

      {problem.answerFormat === "multipleChoice" && problem.choices && (
        <div className="space-y-1.5 mt-2">
          {problem.choices.map((choice) => (
            <button
              key={choice}
              onClick={() => setSelectedChoice(choice)}
              disabled={gradeResult !== null}
              className={`block w-full text-left rounded-md border px-3 py-2 text-sm ${
                selectedChoice === choice
                  ? "border-brandAccent bg-brandAccentSoft"
                  : "border-slate-200 hover:bg-slate-50"
              } disabled:cursor-not-allowed`}
            >
              {choice}
            </button>
          ))}
        </div>
      )}

      {problem.answerFormat !== "multipleChoice" && (
        <input
          value={typedAnswer}
          onChange={(event) => setTypedAnswer(event.target.value)}
          disabled={gradeResult !== null}
          aria-label="Your answer"
          placeholder="Type your answer"
          className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm disabled:bg-slate-50"
        />
      )}

      <div className="mt-3 flex items-center gap-2">
        {gradeResult === null ? (
          <button
            onClick={checkAnswer}
            disabled={problem.answerFormat === "multipleChoice" ? !selectedChoice : !typedAnswer.trim()}
            className="rounded-md bg-brandAccent px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            Check Answer
          </button>
        ) : (
          <button
            onClick={tryAgain}
            className="rounded-md border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100"
          >
            Try Again
          </button>
        )}

        {gradeResult === "correct" && (
          <span className="text-sm font-medium text-brandSuccess">Correct!</span>
        )}
        {gradeResult === "incorrect" && (
          <span className="text-sm font-medium text-brandDanger">Not quite - see the explanation below.</span>
        )}

        {gradeResult && (
          <button
            onClick={() => setIsShowingExplanation((current) => !current)}
            className="ml-auto text-xs text-brandAccent underline"
          >
            {isShowingExplanation ? "Hide explanation" : "Show explanation"}
          </button>
        )}
      </div>

      {isShowingExplanation && gradeResult && (
        <p className="mt-2 text-sm text-slate-600 bg-slate-50 rounded-md p-3">
          {problem.stepByStepExplanation}
        </p>
      )}
    </div>
  );
}
