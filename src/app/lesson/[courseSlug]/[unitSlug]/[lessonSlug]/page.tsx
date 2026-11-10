import { courseCatalog } from "@/lib/curriculum/courseCatalog";
import { notFound } from "next/navigation";
import { findCourseBySlug } from "@/lib/curriculum/courseCatalog";
import { MathTrackName } from "@/lib/types/curriculumTypes";
import { LessonViewer } from "@/components/lesson/LessonViewer";

// Next.js 15: route params arrive as a Promise and must be awaited.
export default async function LessonPage({
  params,
}: {
  params: Promise<{ courseSlug: string; unitSlug: string; lessonSlug: string }>;
}) {
  const { courseSlug, unitSlug, lessonSlug } = await params;

  const course = findCourseBySlug(courseSlug as MathTrackName);
  const unit = course?.units.find((u) => u.unitSlug === unitSlug);
  const lesson = unit?.lessons.find((l) => l.lessonSlug === lessonSlug);

  if (!course || !unit || !lesson) notFound();

  return <LessonViewer key={`${courseSlug}/${unitSlug}/${lessonSlug}`} course={course} unit={unit} lesson={lesson} />;
}

export function generateStaticParams() { return courseCatalog.flatMap(c => c.units.flatMap(u => u.lessons.map(l => ({courseSlug:c.courseSlug, unitSlug:u.unitSlug, lessonSlug:l.lessonSlug})))); }
