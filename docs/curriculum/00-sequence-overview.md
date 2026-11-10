# Curriculum Sequence Overview

This is the master map for the whole platform. It replaces the shorter
course list in `docs/CURRICULUM_PLAN.md` (that file now just points here).
Every course below has its own full guide in this folder — this document
is the "how it all fits together" view.

## One structural decision made while writing this, flagged for approval

The original build (`src/lib/curriculum/courseCatalog.ts`) had five
courses before Calculus: **Algebra 1**, **Algebra 2**, **Geometry**,
**Pre-Calculus**. This planning pass restructures that into what was asked
for — a leaner, calculus-focused sequence:

- **Algebra 1 and Algebra 2 are merged into one course**, trimmed to only
  the topics calculus actually uses (no consumer-math word problems,
  no topics that don't reappear later).
- **Geometry as a standalone course is retired.** Its calculus-relevant
  content (right triangles, area/volume formulas, coordinate geometry —
  the pieces related-rates and volume-of-revolution problems lean on)
  moves into the new bridge course below, alongside other "advanced but
  not yet pre-calc" material.
- **A new course is added: General Advanced Mathematical Foundations**,
  sitting between the Algebra course and Pre-Calculus. It's the
  "everything else you need before pre-calculus makes sense" course:
  the geometry essentials just mentioned, deeper function literacy
  (piecewise functions, end behavior, asymptotes), complex numbers,
  sequences/series/summation notation, and the vocabulary of
  mathematical reasoning (set/interval notation, absolute value,
  induction) — closing with a first, informal look at what a limit even
  is, so Calculus I's opening unit isn't the first time that idea shows up.

**Implementation note (for the phase after this one):** this means
`courseCatalog.ts`'s `MathTrackName` type and the five-course-before-
calculus structure will need to change — two courses become one, one is
retired, one is added. That's a code change to make during
implementation, not something done in this planning pass. Proposed new
course slugs are given at the top of each guide below.

## The full sequence, in order

1. **Algebra I & II (Calculus-Focused)** — `docs/curriculum/01-algebra-calculus-focused.md`
2. **General Advanced Mathematical Foundations** — `docs/curriculum/02-general-advanced-foundations.md`
3. **Pre-Calculus** — `docs/curriculum/03-precalculus.md`
4. **Calculus I** — `docs/curriculum/04-calculus-1.md`
5. **Calculus II** — `docs/curriculum/05-calculus-2.md`
6. **Calculus III** — `docs/curriculum/06-calculus-3.md`
7. **Calculus IV (Ordinary Differential Equations)** — `docs/curriculum/07-calculus-4.md`
8. **Calculus V (Linear Algebra Foundations)** — `docs/curriculum/08-calculus-5.md`

Each course's guide is self-contained and follows the same template, so a
teacher or another AI can pick up any one course and know exactly what
shape to write its lessons in without reading the others first.

## Every guide follows this template

- **Purpose** — what this course is for, in one or two sentences.
- **Why it matters for calculus** — the throughline; every unit in every
  course is justified by what it unlocks later, not "because it's
  traditionally taught here."
- **Prerequisites** — which course(s) must come first.
- **Units**, each with:
  - Unit title, a proposed `unitSlug` (kebab-case, matches the code's
    naming convention), and a one-sentence description.
  - **Why this unit matters for calculus** specifically.
  - **Learning objectives** — what a student can *do* after this unit,
    stated as plain-English skills, not vague topic names.
  - **Lessons** — a numbered list, each with a working title, a 1-2
    sentence description of what it covers, and an estimated length in
    minutes (these estimates assume the 2.5-hour daily pace and are
    meant to be adjusted once real lessons are timed).
  - **Free resources** to draw from when writing this unit's real
    content (OpenStax chapter, Paul's Online Math Notes section, Khan
    Academy unit, and MIT OpenCourseWare where relevant).
  - **Suggested topic tags** — plain-English tag names for this course's
    material, reusing the existing `MathTopicTag` values in
    `src/lib/types/curriculumTypes.ts` where a topic already has one, and
    proposing a new tag name (in the same camelCase style) where it
    doesn't yet.
- **Suggested assessment structure** — what a unit quiz and an end-of-
  course exam for this course should cover, beyond the per-lesson
  practice problems the platform already grades automatically.

## Pacing, at 2.5 hours/day, 7 days/week

This is a planning estimate, not a schedule set in stone — the dashboard's
streak and daily-minutes tracking exist precisely so the real pace can be
observed and this table adjusted honestly rather than guessed at twice.

| Course | Rough hours | Rough days at 2.5 hrs/day |
|---|---|---|
| Algebra I & II (Calculus-Focused) | 45-60 | 18-24 |
| General Advanced Mathematical Foundations | 25-35 | 10-14 |
| Pre-Calculus | 30-40 | 12-16 |
| Calculus I | 35-45 | 14-18 |
| Calculus II | 40-50 | 16-20 |
| Calculus III | 35-45 | 14-18 |
| Calculus IV | 25-35 | 10-14 |
| Calculus V | 25-35 | 10-14 |

Reaching Calculus II inside 3 months means moving through the first four
rows in roughly 60-72 days — brisk, but realistic for someone rebuilding
fluency rather than seeing it for the first time, especially wherever the
diagnostic clears a topic outright.

## A note on scope for this planning pass

Every lesson listed in every guide is a *planned* lesson — a title, a
description, and objectives — not yet the actual explanations, worked
examples, and practice problems the platform renders (that's the
"implementation" phase that follows this one, unit by unit, the same way
Algebra's arithmetic-review unit was already fully written as the proof of
concept). Estimated lesson counts across all 8 courses come to roughly
230-260 lessons total — consistent with the "over a month or more" of
work anticipated for full implementation.
