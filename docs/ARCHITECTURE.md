# Architecture

Project lead and maintainer: Etienne Salvant.

The demo uses Next.js static export. Every lesson, quiz, and exam route is
created from the course catalog at build time. React handles practice,
assessment attempts, drawing, playback, and local progress in the browser.

## Content

`src/lib/curriculum/courseCatalog.ts` joins the eight course datasets. Lessons
contain content blocks, practice problems, and external resource links. Unit
quizzes and course exams share the practice-question schema.

## Grading

`src/lib/assessment/gradeAnswer.ts` normalizes authored answers and accepts
numerically equivalent arithmetic expressions for numeric questions. It does
not claim general symbolic equivalence. The expression parser consumes the
whole input and never evaluates JavaScript.

## Progress

`studentProgressStore.ts` owns persistence. Dates use the learner's local day.
Lesson completion replaces an existing record; assessment retakes remain
separate records. The UI counts distinct practice questions and prevents a
completed lesson from adding study time again. Storage failures use a session
fallback and display a warning.

## Learning tools

The calculator, scratch canvas, and selected animation scripts run locally.
Read-aloud uses browser speech synthesis. The lesson guide selects existing
explanations, formulas, and worked examples. Retained provider adapters are not
reachable from the static demo; a future AI tutor needs an authenticated server
and usage controls before enabling paid requests.

## Deployment

`npm run build` creates `out/`. GitHub Actions validates the source, builds with
the repository base path, and deploys the static output to GitHub Pages.
No secrets, accounts, analytics, or remote progress database are needed.
