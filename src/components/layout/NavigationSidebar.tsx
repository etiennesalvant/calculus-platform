"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { courseCatalog } from "@/lib/curriculum/courseCatalog";

export function NavigationSidebar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return <>
    <header className="md:hidden flex items-center justify-between px-5 py-3 border-b border-slate-200 bg-white sticky top-0 z-30">
      <Link href="/" className="font-semibold">Calculus Platform</Link>
      <button aria-expanded={open} aria-controls="course-navigation" onClick={() => setOpen(!open)} className="text-sm px-3 border rounded-md">{open ? "Close" : "Courses"}</button>
    </header>
    <aside id="course-navigation" className={`${open ? "block" : "hidden"} md:block w-full md:w-64 shrink-0 border-r border-slate-200 bg-white md:h-screen md:sticky md:top-0 overflow-y-auto`}>
      <div className="px-6 py-7 border-b border-slate-200">
        <span className="text-brandAccent editorial text-4xl" aria-hidden="true">∫</span>
        <Link href="/" onClick={() => setOpen(false)} className="block text-xl editorial mt-2">Calculus Platform</Link>
        <p className="text-xs text-slate-500 mt-2">A mathematics workbench</p>
      </div>
      <nav aria-label="Course navigation" className="p-4 space-y-2">
        {[['/', 'Study desk'], ['/diagnostic', 'Placement check']].map(([href,label]) => <Link key={href} href={href} onClick={() => setOpen(false)} aria-current={path === href ? 'page' : undefined} className={`block rounded-md px-3 py-2 text-sm ${path === href ? 'bg-brandAccentSoft text-brandAccent font-semibold' : 'text-slate-600 hover:bg-slate-100'}`}>{label}</Link>)}
        <p className="pt-6 pb-2 px-3 text-[10px] font-semibold tracking-[.18em] uppercase text-slate-500">Your curriculum</p>
        {courseCatalog.map((course,index) => <details key={course.courseSlug} open={path.includes('/'+course.courseSlug)} className="border-b border-slate-100 pb-2">
          <summary className="cursor-pointer py-2 px-2 text-sm font-medium"><span className="text-slate-400 text-xs mr-2">{String(index+1).padStart(2,'0')}</span>{course.courseTitle}</summary>
          <div className="pl-3 mt-2 space-y-2">{course.units.map(unit => <div key={unit.unitSlug}>
            <p className="text-xs font-semibold px-2 py-1">{unit.unitTitle}</p>
            {unit.lessons.map(lesson => {const href = `/lesson/${course.courseSlug}/${unit.unitSlug}/${lesson.lessonSlug}`; return <Link key={href} href={href} onClick={() => setOpen(false)} aria-current={path === href ? 'page' : undefined} className={`block text-xs py-2 px-2 rounded ${path === href ? 'bg-brandAccentSoft text-brandAccent' : 'text-slate-600 hover:bg-slate-100'}`}>{lesson.lessonTitle}</Link>;})}
            {unit.unitQuiz && <Link href={`/quiz/${course.courseSlug}/${unit.unitSlug}`} onClick={() => setOpen(false)} className="block text-xs text-brandAccent px-2 py-2">Unit quiz →</Link>}
          </div>)}
          <Link href={`/exam/${course.courseSlug}`} onClick={() => setOpen(false)} className="block text-xs font-semibold text-brandAccent px-2 py-3">Course exam →</Link></div>
        </details>)}
      </nav>
      <p className="px-6 py-6 text-xs text-slate-500">A project by<br/><span className="text-brandInk font-medium">Etienne Salvant</span></p>
    </aside>
  </>;
}
