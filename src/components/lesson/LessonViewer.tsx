"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Course, Lesson, Unit } from "@/lib/types/curriculumTypes";
import { MathExpression } from "@/components/lesson/MathExpression";
import { PracticeProblem } from "@/components/lesson/PracticeProblem";
import { ReadAloudButton } from "@/components/lesson/ReadAloudButton";
import { TutorChatPanel } from "@/components/lesson/TutorChatPanel";
import { OnScreenCalculator } from "@/components/calculator/OnScreenCalculator";
import { DrawingCanvas } from "@/components/canvas/DrawingCanvas";
import { CanvasExplainerPlayer } from "@/components/canvas/CanvasExplainerPlayer";
import { loadStudentProgress, recordLessonCompleted, recordStudyMinutesForToday } from "@/lib/progress/studentProgressStore";
import { findAnimationsForLesson } from "@/lib/animation/animationCatalog";

export function LessonViewer({ course, unit, lesson }: { course: Course; unit: Unit; lesson: Lesson }) {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [completed, setCompleted] = useState(false);
  const correctCount = Object.values(answers).filter(Boolean).length;
  const gradedCount = Object.keys(answers).length;
  useEffect(() => { setCompleted(loadStudentProgress().completedLessons.some(l => l.courseSlug === course.courseSlug && l.unitSlug === unit.unitSlug && l.lessonSlug === lesson.lessonSlug)); }, [course.courseSlug, unit.unitSlug, lesson.lessonSlug]);
  const orderedLessons = course.units.flatMap(u => u.lessons.map(l => ({unit:u, lesson:l})));
  const nextLesson = orderedLessons[orderedLessons.findIndex(l => l.lesson.lessonSlug === lesson.lessonSlug && l.unit.unitSlug === unit.unitSlug) + 1];
  const [isToolPanelOpen, setIsToolPanelOpen] = useState<"calculator" | "canvas" | "tutor" | "animation" | null>(null);
  const [selectedAnimationIndex, setSelectedAnimationIndex] = useState(0);

  const animationsForThisLesson = useMemo(
    () => findAnimationsForLesson(course.courseSlug, unit.unitSlug, lesson.lessonSlug),
    [course.courseSlug, unit.unitSlug, lesson.lessonSlug]
  );

  const isLastLessonInUnit = unit.lessons[unit.lessons.length - 1]?.lessonSlug === lesson.lessonSlug;

  const lessonContextForTutor = useMemo(
    () =>
      `Course: ${course.courseTitle}. Unit: ${unit.unitTitle}. Lesson: ${lesson.lessonTitle}. ` +
      lesson.contentBlocks.map((block) => block.bodyText).join(" "),
    [course, unit, lesson]
  );

  function handleMarkLessonComplete() {
    if (completed) return;
    recordLessonCompleted({
      courseSlug: course.courseSlug,
      unitSlug: unit.unitSlug,
      lessonSlug: lesson.lessonSlug,
      completedAtIsoDate: new Date().toISOString(),
      practiceProblemsCorrect: correctCount,
      practiceProblemsTotal: lesson.practiceProblems.length,
    });
    recordStudyMinutesForToday(lesson.estimatedMinutes);
    setCompleted(true);
  }

  const allProblemsGraded = gradedCount >= lesson.practiceProblems.length && lesson.practiceProblems.length > 0;

  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <p className="text-xs text-slate-400 mb-1">
        {course.courseTitle} &rsaquo; {unit.unitTitle}
      </p>
      <div className="flex items-start justify-between gap-4 mb-1">
        <h1 className="text-2xl font-semibold text-brandInk">{lesson.lessonTitle}</h1>
        <span className="shrink-0 text-xs text-slate-400 mt-1">~{lesson.estimatedMinutes} min</span>
      </div>

      <ul className="flex flex-wrap gap-2 mb-6">
        {lesson.learningGoals.map((goal) => (
          <li key={goal} className="text-xs rounded-full bg-brandAccentSoft text-brandAccent px-2.5 py-1">
            {goal}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setIsToolPanelOpen(isToolPanelOpen === "calculator" ? null : "calculator")}
          className="text-xs rounded-md border border-slate-300 px-3 py-1.5 text-slate-600 hover:bg-slate-100"
        >
          {isToolPanelOpen === "calculator" ? "Hide" : "Open"} Calculator
        </button>
        <button
          onClick={() => setIsToolPanelOpen(isToolPanelOpen === "canvas" ? null : "canvas")}
          className="text-xs rounded-md border border-slate-300 px-3 py-1.5 text-slate-600 hover:bg-slate-100"
        >
          {isToolPanelOpen === "canvas" ? "Hide" : "Open"} Scratch Canvas
        </button>
        <button
          onClick={() => setIsToolPanelOpen(isToolPanelOpen === "tutor" ? null : "tutor")}
          className="text-xs rounded-md border border-slate-300 px-3 py-1.5 text-slate-600 hover:bg-slate-100"
        >
          {isToolPanelOpen === "tutor" ? "Hide" : "Ask"} Lesson Guide
        </button>
        {animationsForThisLesson.length > 0 && (
          <button
            onClick={() => setIsToolPanelOpen(isToolPanelOpen === "animation" ? null : "animation")}
            className="text-xs rounded-md border border-brandAccent bg-brandAccentSoft px-3 py-1.5 text-brandAccent hover:bg-blue-100"
          >
            {isToolPanelOpen === "animation" ? "Hide" : "Watch"} Step-by-Step
          </button>
        )}
        <ReadAloudButton
          textToSpeak={lesson.contentBlocks.map((block) => block.bodyText).join(" ")}
        />
      </div>

      {isToolPanelOpen === "calculator" && <div className="mb-6"><OnScreenCalculator /></div>}
      {isToolPanelOpen === "canvas" && <div className="mb-6"><DrawingCanvas /></div>}
      {isToolPanelOpen === "tutor" && (
        <div className="mb-6">
          <TutorChatPanel lessonContext={lessonContextForTutor} lesson={lesson} />
        </div>
      )}
      {isToolPanelOpen === "animation" && animationsForThisLesson.length > 0 && (
        <div className="mb-6">
          {animationsForThisLesson.length > 1 && (
            <div className="flex gap-2 mb-2">
              {animationsForThisLesson.map((animation, index) => (
                <button
                  key={animation.animationSlug}
                  onClick={() => setSelectedAnimationIndex(index)}
                  className={`text-xs rounded-md border px-2.5 py-1 ${
                    index === Math.min(selectedAnimationIndex, animationsForThisLesson.length - 1)
                      ? "border-brandAccent bg-brandAccentSoft text-brandAccent"
                      : "border-slate-300 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {animation.animationTitle}
                </button>
              ))}
            </div>
          )}
          <CanvasExplainerPlayer
            key={animationsForThisLesson[Math.min(selectedAnimationIndex, animationsForThisLesson.length - 1)].animationSlug}
            animation={animationsForThisLesson[Math.min(selectedAnimationIndex, animationsForThisLesson.length - 1)]}
          />
        </div>
      )}

      <div className="space-y-4 mb-8">
        {lesson.contentBlocks.map((block, index) => (
          <div
            key={index}
            className={`rounded-lg p-4 ${
              block.blockType === "keyFormula"
                ? "bg-brandAccentSoft"
                : block.blockType === "commonMistake"
                ? "bg-amber-50 border border-amber-200"
                : block.blockType === "workedExample"
                ? "bg-slate-50 border border-slate-200"
                : "bg-white"
            }`}
          >
            {block.headingText && (
              <p className="text-sm font-semibold text-brandInk mb-1">
                {block.blockType === "commonMistake" ? "Watch out: " : ""}
                {block.headingText}
              </p>
            )}
            <p className="text-sm text-slate-700 whitespace-pre-line">{block.bodyText}</p>
            {block.mathExpression && <MathExpression expression={block.mathExpression} />}
          </div>
        ))}
      </div>

      {lesson.practiceProblems.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-brandInk mb-1">Practice</h2>
          <p className="text-xs text-slate-500 mb-3">
            {correctCount} / {gradedCount || lesson.practiceProblems.length} correct so far
          </p>
          <div className="space-y-3">
            {lesson.practiceProblems.map((problem) => (
              <PracticeProblem key={problem.problemId} problem={problem} onGraded={wasCorrect => setAnswers(current => ({...current, [problem.problemId]: wasCorrect}))} />
            ))}
          </div>
        </div>
      )}

      {lesson.freeResourceLinks.length > 0 && (
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-brandInk mb-2">Free resources for more depth</h2>
          <ul className="space-y-1">
            {lesson.freeResourceLinks.map((link) => (
              <li key={link.resourceUrl}>
                <a
                  href={link.resourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-brandAccent underline"
                >
                  {link.resourceTitle}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {isLastLessonInUnit && unit.unitQuiz && (
        <div className="mb-6 rounded-lg border border-brandAccent bg-brandAccentSoft p-4">
          <p className="text-sm font-semibold text-brandInk mb-1">That's the last lesson in this unit.</p>
          <p className="text-xs text-slate-600 mb-3">
            Take the unit quiz to check what stuck before moving on.
          </p>
          <Link
            href={`/quiz/${course.courseSlug}/${unit.unitSlug}`}
            className="inline-block rounded-md bg-brandAccent px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Take the Unit Quiz
          </Link>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200">
        <button
          onClick={handleMarkLessonComplete}
          disabled={completed || (lesson.practiceProblems.length > 0 && !allProblemsGraded)}
          className="rounded-md bg-brandAccent px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-40"
        >
          {completed ? "Lesson completed" : "Mark lesson complete"}
        </button>
        {nextLesson && <Link className="text-sm text-brandAccent font-semibold" href={`/lesson/${course.courseSlug}/${nextLesson.unit.unitSlug}/${nextLesson.lesson.lessonSlug}`}>Next lesson →</Link>}
        <span role="status" className="sr-only">{completed ? 'Lesson saved' : ''}</span>
        <Link href="/" className="text-sm text-slate-500 hover:underline">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
