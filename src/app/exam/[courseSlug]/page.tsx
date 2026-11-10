import { courseCatalog } from "@/lib/curriculum/courseCatalog";
import { notFound } from "next/navigation";
import { findCourseBySlug } from "@/lib/curriculum/courseCatalog";
import { MathTrackName } from "@/lib/types/curriculumTypes";
import { QuizRunner } from "@/components/assessment/QuizRunner";

// Next.js 15: route params arrive as a Promise and must be awaited.
export default async function CourseExamPage({
  params,
}: {
  params: Promise<{ courseSlug: string }>;
}) {
  const { courseSlug } = await params;

  const course = findCourseBySlug(courseSlug as MathTrackName);
  if (!course) notFound();

  return (
    <QuizRunner
      title={`${course.courseTitle}: Course Exam`}
      courseSlug={course.courseSlug}
      unitSlug={null}
      attemptType="courseExam"
      questions={course.courseExam?.questions ?? []}
      passingScorePercent={course.courseExam?.passingScorePercent ?? 70}
      backHref="/"
      backLabel="Back to the Dashboard"
    />
  );
}

export function generateStaticParams() { return courseCatalog.filter(c => c.courseExam).map(c => ({courseSlug:c.courseSlug})); }
