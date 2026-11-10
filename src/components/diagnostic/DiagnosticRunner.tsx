"use client";

import { useState } from "react";
import Link from "next/link";
import { diagnosticQuestions } from "@/lib/curriculum/diagnosticQuestions";
import { MathExpression } from "@/components/lesson/MathExpression";
import { buildPlacementRecommendation } from "@/lib/progress/placementEngine";
import { recordDiagnosticResults } from "@/lib/progress/studentProgressStore";
import { DiagnosticAnswerRecord } from "@/lib/types/curriculumTypes";
import { PlacementRecommendation, TopicMasteryResult } from "@/lib/types/curriculumTypes";

export function DiagnosticRunner() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoiceIndex, setSelectedChoiceIndex] = useState<number | null>(null);
  const [answerRecords, setAnswerRecords] = useState<DiagnosticAnswerRecord[]>([]);
  const [finalResult, setFinalResult] = useState<{
    masteryResults: TopicMasteryResult[];
    recommendation: PlacementRecommendation;
  } | null>(null);

  const currentQuestion = diagnosticQuestions[currentQuestionIndex];

  function handleNext() {
    if (selectedChoiceIndex === null) return;

    const updatedRecords: DiagnosticAnswerRecord[] = [
      ...answerRecords,
      {
        questionId: currentQuestion.questionId,
        topicTag: currentQuestion.topicTag,
        wasCorrect: selectedChoiceIndex === currentQuestion.correctAnswerIndex,
      },
    ];
    setAnswerRecords(updatedRecords);
    setSelectedChoiceIndex(null);

    if (currentQuestionIndex + 1 < diagnosticQuestions.length) {
      setCurrentQuestionIndex((index) => index + 1);
    } else {
      const result = buildPlacementRecommendation(updatedRecords);
      recordDiagnosticResults(updatedRecords, result.masteryResults, result.recommendation);
      setFinalResult(result);
    }
  }

  if (finalResult) {
    const { recommendation } = finalResult;
    return (
      <div className="max-w-2xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-semibold text-brandInk mb-3">Your Placement Results</h1>
        <p className="text-sm text-slate-700 bg-brandAccentSoft rounded-lg p-4 mb-5">
          {recommendation.summaryMessage}
        </p>

        {recommendation.topicsToReviewFirst.length > 0 && (
          <div className="mb-5">
            <p className="text-sm font-semibold text-brandInk mb-1">Topics to review:</p>
            <div className="flex flex-wrap gap-1.5">
              {recommendation.topicsToReviewFirst.map((topic) => (
                <span key={topic} className="text-xs rounded-full bg-amber-50 border border-amber-200 px-2.5 py-1 text-amber-800">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}

        {recommendation.topicsAlreadyStrong.length > 0 && (
          <div className="mb-6">
            <p className="text-sm font-semibold text-brandInk mb-1">Already solid:</p>
            <div className="flex flex-wrap gap-1.5">
              {recommendation.topicsAlreadyStrong.map((topic) => (
                <span key={topic} className="text-xs rounded-full bg-green-50 border border-green-200 px-2.5 py-1 text-brandSuccess">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}

        <Link
          href="/"
          className="inline-block rounded-md bg-brandAccent px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Go to Dashboard &amp; Start Learning
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold text-brandInk">Placement Diagnostic</h1>
        <span className="text-xs text-slate-400">
          Question {currentQuestionIndex + 1} of {diagnosticQuestions.length}
        </span>
      </div>

      <div className="h-1.5 w-full rounded-full bg-slate-100 mb-6">
        <div
          className="h-1.5 rounded-full bg-brandAccent transition-all"
          style={{ width: `${((currentQuestionIndex) / diagnosticQuestions.length) * 100}%` }}
        />
      </div>

      <div className="rounded-lg border border-slate-200 bg-white p-5">
        <p className="text-sm text-slate-800 mb-1">{currentQuestion.promptText}</p>
        {currentQuestion.promptMathExpression && (
          <MathExpression expression={currentQuestion.promptMathExpression} />
        )}

        <div className="space-y-1.5 mt-3">
          {currentQuestion.choices.map((choice, index) => (
            <button
              key={choice}
              onClick={() => setSelectedChoiceIndex(index)}
              className={`block w-full text-left rounded-md border px-3 py-2 text-sm ${
                selectedChoiceIndex === index
                  ? "border-brandAccent bg-brandAccentSoft"
                  : "border-slate-200 hover:bg-slate-50"
              }`}
            >
              {choice}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={selectedChoiceIndex === null}
          className="mt-4 rounded-md bg-brandAccent px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-40"
        >
          {currentQuestionIndex + 1 === diagnosticQuestions.length ? "See My Results" : "Next Question"}
        </button>
      </div>
    </div>
  );
}
