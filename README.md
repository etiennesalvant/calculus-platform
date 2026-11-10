# Calculus Platform

A self-paced mathematics workbench by **Etienne Salvant**.

[Open the live demo](https://etiennesalvant.github.io/calculus-platform/)

Work through algebra, calculus, differential equations, and linear algebra with
short lessons, worked examples, practice questions, and visual explanations.
The public demo runs entirely in the browser. No account or API key is required.

## Run locally

Requires Node.js 22 or newer.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Start with **Find my starting point** for placement,
or open any course directly. Progress is saved in this browser.

## Review the demo

1. Open a lesson and check a practice answer.
2. Retry a question; the lesson score should count each question only once.
3. Mark the lesson complete, return to the study desk, and resume the next lesson.
4. Try a unit quiz or a course exam. Results persist after a page reload.
5. Open the calculator, scratch canvas, and lesson guide.
6. In a lesson with an animation, use **Watch Step-by-Step**.
7. Try the narrow-screen navigation and keyboard focus controls.

Read-aloud uses the browser's speech engine; voice availability varies by device.
The lesson guide displays authored course material. It is not a live AI chat.
Provider adapters are retained in `src/lib/ai` and `src/lib/textToSpeech` for
future integration, but the public demo exposes no paid-provider API endpoints.

## Validate and build

```sh
npm test
npm run typecheck
npm run build
```

The build writes a static website to `out/`. Serve it with any static host:

```sh
python3 -m http.server 3000 --directory out
```

For a GitHub Pages project URL, build with
`NEXT_PUBLIC_BASE_PATH=/calculus-platform npm run build`.
The included Pages workflow builds, tests, and deploys on pushes to `main`.
Select **GitHub Actions** as the Pages source in repository settings.

## Structure

- `src/lib/curriculum`: course content and assessments
- `src/components/lesson`: lesson reader, practice, guide, and read-aloud
- `src/components/assessment`: unit quizzes and course exams
- `src/lib/progress`: placement and browser-local progress
- `src/lib/animation`: scripts and safe mathematical expression evaluation
- `docs/curriculum`: original course planning notes

The course labels IV and V refer to differential equations and linear algebra
within this project. They are not standardized university course numbers.

## Current limits

Progress is device-local, not synced. Study minutes are estimated from completed
lessons, not measured with a timer. Numeric grading accepts equivalent numeric
expressions; algebraic grading uses explicit answer variants, not a symbolic
algebra engine. The curriculum needs subject-matter review before classroom use.

## Credits and history

Project direction and maintenance: **Etienne Salvant**.
See [CREDITS.md](CREDITS.md) and [CHANGELOG.md](CHANGELOG.md).
The September source is preserved in the original local project folder. This
repository records the current demo preparation with actual commit dates.
