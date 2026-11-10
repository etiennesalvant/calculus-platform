"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { courseCatalog } from "@/lib/curriculum/courseCatalog";
import { StudentProgressData, loadStudentProgress, calculateCurrentStudyStreakInDays, getMostRecentQuizAttempt, localDateKey, setDailyStudyGoal } from "@/lib/progress/studentProgressStore";

export default function DashboardPage() {
  const [progress, setProgress] = useState<StudentProgressData | null>(null);
  useEffect(() => { setProgress(loadStudentProgress()); }, []);
  if (!progress) return <p className="p-8">Opening your study desk…</p>;
  const lessons = courseCatalog.flatMap(course => course.units.flatMap(unit => unit.lessons.map(lesson => ({course,unit,lesson}))));
  const done = new Set(progress.completedLessons.map(l => `${l.courseSlug}/${l.unitSlug}/${l.lessonSlug}`));
  const placement = progress.latestPlacementRecommendation;
  const start = placement ? Math.max(0, lessons.findIndex(l => l.course.courseSlug === placement.recommendedStartingCourse && l.unit.unitSlug === placement.recommendedStartingUnit)) : 0;
  const next = lessons.slice(start).find(l => !done.has(`${l.course.courseSlug}/${l.unit.unitSlug}/${l.lesson.lessonSlug}`)) ?? lessons.find(l => !done.has(`${l.course.courseSlug}/${l.unit.unitSlug}/${l.lesson.lessonSlug}`));
  const minutes = progress.studyDays.find(d => d.isoDate === localDateKey())?.minutesStudied ?? 0;
  const sample = lessons.find(l => l.course.courseSlug === 'calculus1')!;
  const href = (item: typeof sample) => `/lesson/${item.course.courseSlug}/${item.unit.unitSlug}/${item.lesson.lessonSlug}`;
  return <div className="max-w-6xl mx-auto px-5 sm:px-10 py-8 sm:py-12">
    <div className="flex justify-between gap-4 items-center mb-8"><p className="text-xs tracking-[.2em] uppercase text-slate-500">Independent study / Mathematics</p><span className="text-xs border border-slate-300 rounded-full px-3 py-1">Public demo</span></div>
    <section className="study-hero study-grid rounded-2xl p-7 sm:p-10 mb-7">
      <div className="grid lg:grid-cols-[1fr_180px] items-center gap-6">
        <div><p className="text-xs tracking-[.2em] uppercase text-emerald-200 mb-4">One idea at a time</p><h1 className="text-4xl sm:text-5xl leading-tight mb-4">Make sense of<br/>the mathematics.</h1><p className="max-w-lg text-sm leading-6 text-emerald-50/80">Build from algebra to calculus with worked examples, visual explanations, and practice that shows you where to focus.</p>
        <div className="flex flex-wrap gap-3 mt-6">{next && <Link href={href(next)} className="rounded-lg bg-[#f1d99e] text-[#21372e] px-5 py-3 text-sm font-semibold">{done.size ? 'Continue learning' : 'Start learning'} →</Link>}<Link href="/diagnostic" className="rounded-lg border border-white/30 px-5 py-3 text-sm">Find my starting point</Link></div></div>
        <svg viewBox="0 0 180 180" className="hidden lg:block w-full" role="img" aria-label="A curve and its tangent line"><path d="M10 145H170M35 170V15" stroke="#ffffff50" fill="none"/><path d="M25 140Q75 145 150 25" stroke="#f1d99e" strokeWidth="3" fill="none"/><path d="M40 160L155 45" stroke="#a1d1b5" strokeWidth="2" strokeDasharray="5 5"/><circle cx="105" cy="95" r="5" fill="#f1d99e"/><text x="50" y="32" fill="#fffdf5" fontFamily="Georgia" fontSize="22">dy / dx</text></svg>
      </div>
    </section>
    <div className="grid grid-cols-3 border-y border-slate-200 py-5 mb-8 gap-3">
      <div><p className="text-2xl editorial">{done.size}<span className="text-sm text-slate-500"> / {lessons.length}</span></p><p className="text-xs text-slate-500 mt-1">Lessons completed</p></div>
      <div><p className="text-2xl editorial">{calculateCurrentStudyStreakInDays(progress)} <span className="text-sm text-slate-500">days</span></p><p className="text-xs text-slate-500 mt-1">Study streak</p></div>
      <div><p className="text-2xl editorial">{minutes}<span className="text-sm text-slate-500"> / {progress.dailyStudyGoalMinutes} min</span></p><label className="text-xs text-slate-500">Daily goal <select aria-label="Daily study goal" value={progress.dailyStudyGoalMinutes} onChange={e => setProgress(setDailyStudyGoal(Number(e.target.value)))} className="bg-transparent text-xs ml-1"><option value="15">15 min</option><option value="30">30 min</option><option value="60">60 min</option><option value="150">150 min</option></select></label></div>
    </div>
    <div className="flex items-end justify-between gap-4 mb-5"><div><p className="text-xs uppercase tracking-widest text-slate-500 mb-1">The curriculum</p><h2 className="text-3xl">Choose your next chapter.</h2></div><Link href={href(sample)} className="text-xs text-brandAccent underline">Try a calculus lesson</Link></div>
    <div className="grid sm:grid-cols-2 gap-4">{courseCatalog.map((course,index) => {
      const first = course.units[0]; const count = course.units.reduce((n,u) => n+u.lessons.length,0); const completed = progress.completedLessons.filter(l => l.courseSlug === course.courseSlug).length; const exam = getMostRecentQuizAttempt(progress,course.courseSlug,null);
      return <article key={course.courseSlug} className="course-card rounded-xl border border-slate-200 bg-white p-6 flex flex-col"><div className="flex justify-between text-xs text-slate-500 mb-4"><span className="font-mono">{String(index+1).padStart(2,'0')}</span><span>{course.units.length} units · {count} lessons</span></div><h3 className="text-lg font-semibold mb-2">{course.courseTitle}</h3><p className="text-sm text-slate-500 leading-6 mb-5 flex-1">{course.courseDescription}</p><div className="h-1 rounded bg-slate-100 mb-2"><div className="h-1 bg-brandAccent rounded" style={{width: `${completed/count*100}%`}}/></div><p className="text-xs text-slate-500 mb-4">{completed} of {count} complete</p><div className="flex justify-between gap-2 items-center"><Link href={`/lesson/${course.courseSlug}/${first.unitSlug}/${first.lessons[0].lessonSlug}`} className="text-sm font-semibold text-brandAccent">Open course →</Link><Link href={`/exam/${course.courseSlug}`} className="text-xs text-slate-500 underline">{exam ? `Exam: ${exam.correctCount}/${exam.totalCount}` : 'Course exam'}</Link></div></article>;
    })}</div>
    <p className="text-xs text-slate-500 mt-6 leading-5">No account required. Lessons, practice, quizzes, and visual explanations are available immediately. This demo saves progress on this device; clearing browser data removes it.</p>
  </div>;
}
