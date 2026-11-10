"use client";
import { useState } from "react";
import type { Lesson } from "@/lib/types/curriculumTypes";
import { MathExpression } from "./MathExpression";
export function TutorChatPanel({ lesson }: { lessonContext: string; lesson: Lesson }) {
  const [view, setView] = useState<'workedExample'|'keyFormula'|'commonMistake'>('workedExample');
  const blocks = lesson.contentBlocks.filter(b => b.blockType === view);
  return <section className="rounded-xl border border-slate-200 bg-white p-5">
    <h2 className="text-xl mb-1">Lesson guide</h2>
    <p className="text-xs text-slate-500 mb-4">Review the explanations from this lesson. This guide uses the course material, not generated answers.</p>
    <div className="flex flex-wrap gap-2 mb-4">{([['workedExample','Walk through an example'],['keyFormula','Review the rule'],['commonMistake','Common mistakes']] as const).map(([key,label]) => <button key={key} aria-pressed={view === key} onClick={() => setView(key)} className={`rounded-md border px-3 py-2 text-xs ${view === key ? 'bg-brandAccentSoft border-brandAccent text-brandAccent' : 'border-slate-200'}`}>{label}</button>)}</div>
    <div aria-live="polite" className="space-y-3">{blocks.length ? blocks.map((b,i) => <div key={i}><h3 className="font-semibold text-sm">{b.headingText}</h3><p className="text-sm leading-6 whitespace-pre-line">{b.bodyText}</p>{b.mathExpression && <MathExpression expression={b.mathExpression}/>}</div>) : <p className="text-sm">{lesson.contentBlocks.find(b => b.blockType === 'explanation')?.bodyText}</p>}</div>
  </section>;
}
