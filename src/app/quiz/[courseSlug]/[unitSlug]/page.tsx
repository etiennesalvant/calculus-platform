import { courseCatalog } from "@/lib/curriculum/courseCatalog";
import { notFound } from "next/navigation";
import { findCourseBySlug } from "@/lib/curriculum/courseCatalog";
import { MathTrackName } from "@/lib/types/curriculumTypes";
import { QuizRunner } from "@/components/assessment/QuizRunner";

// Next.js 15: route params arrive as a Promise and must be awaited.
export default async function UnitQuizPage({
  params,
}: {
  params: Promise<{ courseSlug: string; unitSlug: string }>;
}) {
  const { courseSlug, unitSlug } = await params;

  const course = findCourseBySlug(courseSlug as MathTrackName);
  const unit = course?.units.find((u) => u.unitSlug === unitSlug);

  if (!course || !unit) notFound();

  const firstLessonSlug = unit.lessons[0]?.lessonSlug;
  const backHref = firstLessonSlug
    ? `/lesson/${course.courseSlug}/${unit.unitSlug}/${firstLessonSlug}`
    : "/";

  return (
    <QuizRunner
      title={`${unit.unitTitle}: Unit Quiz`}
      courseSlug={course.courseSlug}
      unitSlug={unit.unitSlug}
      attemptType="unitQuiz"
      questions={unit.unitQuiz?.questions ?? []}
      passingScorePercent={unit.unitQuiz?.passingScorePercent ?? 70}
      backHref={backHref}
      backLabel="Back to the Unit"
    />
  );
}

export function generateStaticParams() { return courseCatalog.flatMap(c => c.units.filter(u => u.unitQuiz).map(u => ({courseSlug:c.courseSlug, unitSlug:u.unitSlug}))); }
