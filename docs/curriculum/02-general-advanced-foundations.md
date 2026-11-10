# General Advanced Mathematical Foundations

**Proposed course slug:** `general-advanced-foundations` (new course;
absorbs the calculus-relevant parts of the old standalone `geometry` course)

## Purpose

Close every remaining gap between "solid at algebra" and "ready for
pre-calculus." This course is deliberately a grab-bag by design — it
collects the geometry, function literacy, number systems, and
mathematical-reasoning skills that don't belong inside "algebra" but that
pre-calculus and calculus both assume are already there.

## Why it matters for calculus

Calculus textbooks and problems constantly reach for things a pure
algebra-to-precalculus path doesn't always cover explicitly: geometric
formulas mid-word-problem, interval notation in a domain statement,
"the degree of the numerator is one more than the denominator" reasoning
about asymptotes, i as a root of a quadratic, sigma notation in the
definition of a Riemann sum. This course makes sure none of that is a
surprise later.

## Prerequisites

Algebra I & II (Calculus-Focused)

## Units

### Unit 1: Geometry Essentials for Calculus
`unitSlug: geometry-essentials`

**Why it matters for calculus:** Related-rates and optimization word
problems are, underneath the calculus, geometry word problems. Volume and
surface area formulas here are exactly what "volume of revolution" in
Calculus II computes from scratch.

**Learning objectives:**
- Apply the Pythagorean theorem to find missing side lengths and distances
- Identify angle relationships formed by parallel lines and a transversal
- Recall and apply area, perimeter, surface area, and volume formulas for
  common shapes (triangles, circles, rectangles, cylinders, cones, spheres)
- Find distance, midpoint, and slope between two points in the coordinate plane

**Lessons:**
1. *The Pythagorean Theorem and Distance* (20 min)
2. *Angle Relationships and Parallel Lines* (20 min)
3. *Area and Perimeter Formulas* (20 min)
4. *Surface Area and Volume Formulas* — the toolkit related-rates problems draw from directly. (25 min)
5. *Circles: Area, Circumference, and Arc Length* — arc length in terms of radians previewed here, formalized in Pre-Calculus. (20 min)
6. *Coordinate Geometry* — distance formula, midpoint formula, slope between two points. (20 min)

**Free resources:** OpenStax *Basic Geometry* concepts are covered within OpenStax *Prealgebra 2e*, ch. 9 (Geometry); Khan Academy "Geometry" (Pythagorean theorem, area/volume, and coordinate geometry units); Paul's Online Math Notes doesn't cover geometry directly — supplement with Khan Academy here.

**Suggested topic tags:** `trianglesAndThePythagoreanTheorem`, `anglesAndParallelLines`, `areaAndPerimeter`, `circlesAndArcs`, `coordinateGeometry` (all existing).

### Unit 2: Advanced Function Concepts
`unitSlug: advanced-function-concepts`

**Why it matters for calculus:** End behavior and asymptote reasoning
here is precisely what "evaluating a limit at infinity" formalizes in
Calculus I. Piecewise functions show up constantly once continuity and
differentiability are being checked at a specific point.

**Learning objectives:**
- Graph and evaluate piecewise-defined functions
- Determine end behavior of polynomial functions from their degree and leading coefficient
- Identify horizontal, vertical, and slant asymptotes of rational functions
- Classify functions as even, odd, or neither, and use that to predict symmetry

**Lessons:**
1. *Piecewise Functions* — graphing and evaluating. (25 min)
2. *End Behavior of Polynomials* — degree and leading coefficient reasoning. (20 min)
3. *Vertical and Horizontal Asymptotes of Rational Functions* — connecting back to excluded values from Algebra's rational expressions unit. (25 min)
4. *Slant Asymptotes* (15 min)
5. *Even, Odd, and Neither: Function Symmetry* (15 min)

**Free resources:** OpenStax *Precalculus 2e*, ch. 3 and ch. 5 (Polynomial and Rational Functions — used here ahead of the formal Pre-Calculus course since this content is a direct calculus prerequisite); Paul's Online Math Notes, Algebra — "Graphing and Functions" chapter.

**Suggested topic tags:** propose new: `piecewiseFunctions`, `polynomialEndBehavior`, `rationalFunctionAsymptotes`, `evenAndOddFunctions`.

### Unit 3: Complex Numbers
`unitSlug: complex-numbers`

**Why it matters for calculus:** The quadratic formula produces complex
roots whenever the discriminant is negative — without this unit, those
answers look like an error rather than a valid result. Complex roots
reappear when solving the characteristic equation in Calculus IV's
second-order differential equations.

**Learning objectives:**
- Simplify powers of i and perform arithmetic with complex numbers
- Find complex solutions to quadratic equations
- Plot complex numbers on the complex plane

**Lessons:**
1. *Introduction to Imaginary and Complex Numbers* (20 min)
2. *Arithmetic with Complex Numbers* — adding, subtracting, multiplying, dividing (using the conjugate). (25 min)
3. *Complex Solutions to Quadratic Equations* (20 min)
4. *The Complex Plane* — plotting and basic geometric interpretation. (15 min)

**Free resources:** OpenStax *Algebra and Trigonometry 2e*, ch. 2 (Complex Numbers section); Khan Academy "Complex numbers."

**Suggested topic tags:** propose new: `complexNumberArithmetic`, `complexSolutionsToQuadratics`.

### Unit 4: Sequences, Series, and Summation Notation
`unitSlug: sequences-series-and-summation`

**Why it matters for calculus:** This unit *is* the direct on-ramp to
Calculus II's infinite series unit. Sigma notation here is the exact
notation used to define a Riemann sum before it becomes a definite
integral.

**Learning objectives:**
- Find terms of arithmetic and geometric sequences, and their general (nth-term) formulas
- Compute partial sums of arithmetic and geometric series
- Read, write, and evaluate expressions in sigma (summation) notation
- Explain informally what it means for an infinite geometric series to converge

**Lessons:**
1. *Arithmetic Sequences* (20 min)
2. *Geometric Sequences* (20 min)
3. *Arithmetic and Geometric Series* — partial sum formulas. (25 min)
4. *Summation (Sigma) Notation* — reading, writing, and evaluating sums, including expanding a sigma expression term by term. (25 min)
5. *Infinite Geometric Series and Convergence (Informal Introduction)* — when does an infinite sum settle on a finite value? (20 min)

**Free resources:** OpenStax *Precalculus 2e*, ch. 11 (Sequences, Probability, and Counting Theory — sequences/series sections); Khan Academy "Sequences" and "Series"; Paul's Online Math Notes previews this well in its own Calculus II series chapter, useful for seeing where this is headed.

**Suggested topic tags:** `sequencesAndSeriesIntro` (existing), propose new: `summationNotation`, `infiniteGeometricSeriesConvergence`.

### Unit 5: Mathematical Language and Reasoning
`unitSlug: mathematical-language-and-reasoning`

**Why it matters for calculus:** Domain statements are written in
interval notation. Formal limit and continuity definitions are written
with inequalities and absolute values. Proof-style reasoning (even
informal) is what makes "why does the power rule work" answerable instead
of just memorized.

**Learning objectives:**
- Read and write set notation and interval notation
- Solve and interpret compound and absolute-value inequalities in interval notation
- Follow and construct a simple direct proof or a proof by mathematical induction
- Explain what a mathematical statement's converse, and a basic logical
  "if-then" structure, mean

**Lessons:**
1. *Set Notation and Interval Notation* (20 min)
2. *Absolute Value and Inequalities, Revisited in Interval Notation* — ties back to Algebra Unit 2. (15 min)
3. *Introduction to Logical Statements* — if-then statements, converse, basic logic vocabulary. (20 min)
4. *Introduction to Mathematical Proof* — what a proof is and isn't, worked through with a simple example. (20 min)
5. *Mathematical Induction* — the idea, and one or two worked inductive proofs (e.g., a sum formula). (25 min)

**Free resources:** OpenStax *Precalculus 2e*, ch. 1 (interval notation is introduced here) and the induction section of ch. 11; Paul's Online Math Notes, Algebra — has a short "Proof by Induction" extras page; this is generally the thinnest-covered topic in free resources, so lean on Khan Academy's "Mathematical induction" videos and expect to write more original explanation here than elsewhere.

**Suggested topic tags:** propose new: `setAndIntervalNotation`, `logicalReasoningBasics`, `mathematicalInduction`.

### Unit 6: Introduction to the Idea of a Limit
`unitSlug: intro-to-limits`

**Why it matters for calculus:** This is the deliberate bridge lesson.
Calculus I's first unit is *formal* limits; this unit's entire job is to
make sure "a function approaching a value" is already an intuitive,
graphical idea before it gets a definition and notation.

**Learning objectives:**
- Describe, in plain language and from a graph, what value a function
  approaches as x approaches a given number
- Recognize when a function approaches different values from the left
  and right
- Connect asymptotic behavior (from Unit 2) to the idea of a limit at infinity

**Lessons:**
1. *What a Limit Means, Intuitively* — reading limits off a graph and a table of values, no formal definition yet. (25 min)
2. *When a Limit Doesn't Exist* — jumps, holes, and unbounded behavior, informally. (20 min)
3. *Limits at Infinity, Informally* — connecting straight back to horizontal asymptotes from Unit 2. (20 min)

**Free resources:** Paul's Online Math Notes, Calculus I — "The Limit" section (its informal treatment before the formal definition is exactly this unit's spirit); Khan Academy "Limits and continuity" (intro videos specifically, before the formal-definition ones).

**Suggested topic tags:** `limitsAndContinuity` (existing — used here for the informal preview; Calculus I's own unit of the same tag goes formal).

## Suggested assessment structure

- **Unit quizzes** (5-8 questions each), same style as the Algebra course.
- **Course-end exam** (20-25 questions): should function as a genuine
  gate before Pre-Calculus — include at least one question per unit, with
  extra weight on Unit 2 (asymptotes/end behavior) and Unit 6 (limits
  intuition), since those are the two units most directly rehearsed again,
  formally, in Calculus I.
