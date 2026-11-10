# Curriculum Plan

The full, detailed curriculum plan lives in `docs/curriculum/` — one file
per course, plus a master overview tying them together. Start here:

**`docs/curriculum/00-sequence-overview.md`**

That file explains the course sequence (including the structural change
from the original build — Algebra 1/2 merged, Geometry folded into a new
bridge course), the shared template every course guide follows, pacing
estimates, and links to each individual course guide:

1. `docs/curriculum/01-algebra-calculus-focused.md`
2. `docs/curriculum/02-general-advanced-foundations.md`
3. `docs/curriculum/03-precalculus.md`
4. `docs/curriculum/04-calculus-1.md`
5. `docs/curriculum/05-calculus-2.md`
6. `docs/curriculum/06-calculus-3.md`
7. `docs/curriculum/07-calculus-4.md`
8. `docs/curriculum/08-calculus-5.md`

Each one lists every unit and lesson planned for that course, why it
matters for calculus specifically, free resources to draw from, and
suggested topic tags.

## Implementation status: fully built

Every unit and lesson in the plan above is now implemented as real content
in code — see `docs/ROADMAP.md` for the full breakdown (296 lessons, 803
practice problems across all 8 courses). `src/lib/curriculum/courseCatalog.ts`
defines the 8-course structure and pulls each course's units from its own
`unitsData.ts` file (`src/lib/curriculum/<courseSlug>/unitsData.ts`).

The plan docs in `docs/curriculum/` remain useful as the source-of-truth
reference for *why* each unit exists and what free resources it draws
from — worth reading before extending or revising any unit further.
