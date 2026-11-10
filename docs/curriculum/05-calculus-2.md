# Calculus II

**Proposed course slug:** `calculus2` (unchanged)

## Purpose

Widely considered the hardest course in the standard calculus sequence —
not because the ideas are harder than Calculus I's, but because it's
almost entirely a battery of integration *techniques*, each with its own
recognition pattern, plus a full unit on infinite series that thinks
completely differently from anything before it. This is the finish line
of Etienne's 3-month goal.

## Why it matters for calculus

Integration techniques here are used directly in Calculus III's multiple
integrals. Series and Taylor polynomials are how calculators and computers
actually evaluate functions like sin(x) or e^x, and Taylor series
reappear in Calculus IV as a method for solving differential equations
that don't have a clean closed-form solution.

## Prerequisites

Calculus I

## Units

### Unit 1: Integration Review and u-Substitution
`unitSlug: integration-review-and-substitution`

**Why it matters for calculus:** Substitution is the most common
technique by far — mastering it fully (not just the "basic pass" from
Calculus I) is the foundation every other technique in this course builds
on or falls back to.

**Learning objectives:**
- Recognize when u-substitution applies, including less-obvious cases
- Apply u-substitution to definite integrals, adjusting the bounds
- Integrate using basic trigonometric, exponential, and logarithmic antiderivative rules fluently

**Lessons:**
1. *Review: Basic Antiderivative Rules* (20 min)
2. *u-Substitution, Fully* — including trickier recognition patterns. (30 min)
3. *u-Substitution with Definite Integrals* — changing the bounds. (25 min)

**Free resources:** Paul's Online Math Notes, Calculus II — "Integration Techniques" chapter (opening sections); OpenStax *Calculus Volume 2*, ch. 1; Khan Academy "Integration techniques."

**Suggested topic tags:** `integrationTechniques` (existing).

### Unit 2: Integration by Parts
`unitSlug: integration-by-parts`

**Why it matters for calculus:** The technique for integrating products
of functions that substitution can't handle — used constantly in
Calculus III and in solving differential equations in Calculus IV.

**Learning objectives:**
- Apply the integration-by-parts formula, choosing u and dv correctly
- Apply integration by parts repeatedly (including tabular integration)
- Solve integrals requiring integration by parts on both a definite and indefinite basis

**Lessons:**
1. *The Integration by Parts Formula* — choosing u and dv (LIATE or similar heuristic). (25 min)
2. *Repeated Integration by Parts and Tabular Integration* (25 min)
3. *Integration by Parts with Definite Integrals* (20 min)

**Free resources:** Paul's Online Math Notes, Calculus II — "Integration by Parts"; OpenStax *Calculus Volume 2*, ch. 3; Khan Academy "Integration by parts."

**Suggested topic tags:** `integrationTechniques` (existing).

### Unit 3: Trigonometric Integrals and Trigonometric Substitution
`unitSlug: trig-integrals-and-substitution`

**Why it matters for calculus:** These techniques resolve integrals
involving square roots of quadratics — a shape that shows up constantly
in arc length and area problems in this same course.

**Learning objectives:**
- Integrate products of trig functions using identities to rewrite them first
- Recognize when trigonometric substitution applies (based on the form of the integrand)
- Apply trigonometric substitution and convert back to the original variable

**Lessons:**
1. *Integrals Involving Powers of Sine and Cosine* (25 min)
2. *Integrals Involving Powers of Secant and Tangent* (25 min)
3. *Trigonometric Substitution: Setup and Recognition* (25 min)
4. *Trigonometric Substitution: Working Full Problems* (30 min)

**Free resources:** Paul's Online Math Notes, Calculus II — "Trig Integrals" and "Trig Substitutions"; OpenStax *Calculus Volume 2*, ch. 3; Khan Academy has lighter coverage here — Paul's notes are the primary resource for this unit.

**Suggested topic tags:** `integrationTechniques` (existing).

### Unit 4: Partial Fractions
`unitSlug: partial-fractions`

**Why it matters for calculus:** The technique for integrating rational
functions — directly extends the factoring and rational-expressions
skills from the Algebra course into calculus.

**Learning objectives:**
- Decompose a rational expression into partial fractions (distinct linear, repeated linear, and irreducible quadratic factors)
- Integrate each resulting piece
- Recognize when polynomial long division is needed before decomposing

**Lessons:**
1. *Partial Fraction Decomposition: Distinct Linear Factors* (25 min)
2. *Partial Fraction Decomposition: Repeated and Quadratic Factors* (25 min)
3. *Integrating with Partial Fractions* (25 min)

**Free resources:** Paul's Online Math Notes, Calculus II — "Partial Fractions"; OpenStax *Calculus Volume 2*, ch. 3; Khan Academy "Partial fraction expansion."

**Suggested topic tags:** `integrationTechniques` (existing).

### Unit 5: Improper Integrals
`unitSlug: improper-integrals`

**Why it matters for calculus:** Extends the definite integral to
infinite bounds or unbounded functions — the exact idea reused for
testing series convergence later in this course.

**Learning objectives:**
- Evaluate improper integrals with infinite limits of integration
- Evaluate improper integrals with a discontinuity in the interval
- Determine convergence or divergence, using comparison when direct evaluation isn't possible

**Lessons:**
1. *Improper Integrals: Infinite Limits* (25 min)
2. *Improper Integrals: Discontinuous Integrands* (20 min)
3. *The Comparison Test for Improper Integrals* (20 min)

**Free resources:** Paul's Online Math Notes, Calculus II — "Improper Integrals"; OpenStax *Calculus Volume 2*, ch. 3; Khan Academy "Improper integrals."

**Suggested topic tags:** propose new: `improperIntegrals`.

### Unit 6: Applications of Integration — Area Between Curves
`unitSlug: area-between-curves`

**Why it matters for calculus:** The first "real use" of a definite
integral beyond area-under-one-curve — and a direct application of the
systems-of-equations skill from the Algebra course (finding intersection points).

**Learning objectives:**
- Set up and evaluate the area between two curves
- Choose whether to integrate with respect to x or y based on the region's shape
- Find intersection points to determine integration bounds

**Lessons:**
1. *Area Between Two Curves (Integrating with Respect to x)* (25 min)
2. *Area Between Two Curves (Integrating with Respect to y)* (25 min)
3. *Regions Bounded by More Than Two Curves* (20 min)

**Free resources:** Paul's Online Math Notes, Calculus II — "Applications of Integrals" chapter (Area Between Curves); OpenStax *Calculus Volume 2*, ch. 2; Khan Academy "Applications of integrals."

**Suggested topic tags:** propose new: `areaBetweenCurves`.

### Unit 7: Applications of Integration — Volumes
`unitSlug: volumes-of-revolution`

**Why it matters for calculus:** The formulas from Geometry Essentials
(the bridge course) become the setup for these integrals — this unit is
where that unit's investment pays off directly.

**Learning objectives:**
- Compute volumes of revolution using the disk and washer methods
- Compute volumes of revolution using the shell method
- Choose the most efficient method for a given region and axis of revolution

**Lessons:**
1. *Volumes by Disks and Washers* (30 min)
2. *Volumes by Cylindrical Shells* (30 min)
3. *Choosing a Method* — a mixed-practice, decision-making lesson. (20 min)

**Free resources:** Paul's Online Math Notes, Calculus II — "Applications of Integrals" chapter (Volume sections); OpenStax *Calculus Volume 2*, ch. 2; Khan Academy "Applications of integrals" (volume section); MIT OCW 18.01.

**Suggested topic tags:** propose new: `volumesOfRevolution`.

### Unit 8: Applications of Integration — Arc Length and Surface Area
`unitSlug: arc-length-and-surface-area`

**Why it matters for calculus:** Introduces integrating a square-root
expression derived from a derivative — directly foreshadowing Calculus
III's line integrals and space-curve arc length.

**Learning objectives:**
- Set up and evaluate the arc length of a curve
- Set up and evaluate the surface area of a solid of revolution

**Lessons:**
1. *Arc Length* (25 min)
2. *Surface Area of Revolution* (25 min)

**Free resources:** Paul's Online Math Notes, Calculus II — "Applications of Integrals" chapter (Arc Length and Surface Area); OpenStax *Calculus Volume 2*, ch. 2.

**Suggested topic tags:** propose new: `arcLengthAndSurfaceArea`.

### Unit 9: Applications of Integration — Work and Other Physical Applications
`unitSlug: work-and-physical-applications`

**Why it matters for calculus:** Connects integration to physics —
useful in its own right and as a preview of the physical-modeling flavor
of Calculus IV.

**Learning objectives:**
- Set up and evaluate work problems (springs, pumping liquid out of a tank)
- Compute the center of mass of a simple region (introductory level)

**Lessons:**
1. *Work: Springs and Variable Force* (25 min)
2. *Work: Pumping Liquid Problems* (25 min)
3. *Introduction to Center of Mass* (20 min)

**Free resources:** Paul's Online Math Notes, Calculus II — "Applications of Integrals" chapter (Work); OpenStax *Calculus Volume 2*, ch. 6 (Moments and Centers of Mass, introductory sections).

**Suggested topic tags:** propose new: `workAndPhysicalApplications`.

### Unit 10: Parametric Equations and Calculus
`unitSlug: parametric-equations`

**Why it matters for calculus:** Parametric curves are how Calculus III
describes motion through space — this unit is the 2D rehearsal.

**Learning objectives:**
- Graph a curve defined parametrically and convert between parametric and rectangular form
- Find the slope of a tangent line to a parametric curve
- Find the arc length of a parametric curve

**Lessons:**
1. *Parametric Equations: Graphing and Converting* (25 min)
2. *Calculus with Parametric Curves: Slopes* (25 min)
3. *Arc Length of Parametric Curves* (20 min)

**Free resources:** Paul's Online Math Notes, Calculus II — "Parametric Equations and Polar Coordinates" chapter (Parametric sections); OpenStax *Calculus Volume 2*, ch. 7; Khan Academy "Parametric equations."

**Suggested topic tags:** `parametricAndPolarCurves` (existing).

### Unit 11: Polar Coordinates and Calculus
`unitSlug: polar-calculus`

**Why it matters for calculus:** Full calculus treatment of the polar
system introduced in Pre-Calculus — area and tangent lines in a
coordinate system where "area" no longer means a simple rectangle-based
Riemann sum.

**Learning objectives:**
- Find the slope of a tangent line to a polar curve
- Set up and evaluate the area enclosed by a polar curve
- Find the area between two polar curves

**Lessons:**
1. *Calculus with Polar Curves: Slopes* (25 min)
2. *Area in Polar Coordinates* (30 min)
3. *Area Between Polar Curves* (25 min)

**Free resources:** Paul's Online Math Notes, Calculus II — "Parametric Equations and Polar Coordinates" chapter (Polar sections); OpenStax *Calculus Volume 2*, ch. 7.

**Suggested topic tags:** `parametricAndPolarCurves` (existing).

### Unit 12: Sequences
`unitSlug: sequences`

**Why it matters for calculus:** Formalizes convergence — the central
question the entire rest of this course (series) is built on.

**Learning objectives:**
- Determine whether a sequence converges or diverges
- Apply limit laws and the Squeeze Theorem to sequences
- Determine whether a sequence is monotonic and/or bounded

**Lessons:**
1. *Sequences and Convergence* (25 min)
2. *Limit Laws for Sequences and the Squeeze Theorem* (25 min)
3. *Monotonic and Bounded Sequences* (20 min)

**Free resources:** Paul's Online Math Notes, Calculus II — "Series" chapter (Sequences section); OpenStax *Calculus Volume 2*, ch. 5; Khan Academy "Series" (sequences sections).

**Suggested topic tags:** propose new: `sequenceConvergence`.

### Unit 13: Infinite Series and Convergence Tests
`unitSlug: infinite-series-and-convergence-tests`

**Why it matters for calculus:** Widely considered the single hardest
unit of the entire undergraduate calculus sequence — a whole toolkit of
tests, each applying to a different pattern, with real judgment required
to pick the right one.

**Learning objectives:**
- Determine convergence/divergence of a series using the divergence test, integral test, comparison test, and limit comparison test
- Determine convergence/divergence using the ratio test and root test
- Apply the alternating series test and understand absolute vs. conditional convergence
- Choose the correct test for a given series (the hardest and most important skill in this unit)

**Lessons:**
1. *Geometric and Telescoping Series* (25 min)
2. *The Divergence Test and the Integral Test* (25 min)
3. *Comparison Tests* — direct and limit comparison. (25 min)
4. *The Ratio Test and Root Test* (25 min)
5. *Alternating Series and Absolute/Conditional Convergence* (25 min)
6. *Choosing a Convergence Test* — a decision-strategy lesson, mixed practice across every test above. (30 min)

**Free resources:** Paul's Online Math Notes, Calculus II — "Series" chapter (this is one of the best free treatments of this topic anywhere); OpenStax *Calculus Volume 2*, ch. 5; Khan Academy "Series"; MIT OCW 18.01.

**Suggested topic tags:** `infiniteSeriesConvergence` (existing).

### Unit 14: Power Series, Taylor Series, and Maclaurin Series
`unitSlug: power-and-taylor-series`

**Why it matters for calculus:** This is how calculus represents
functions as (infinite) polynomials — the technique reappears directly in
Calculus IV to solve differential equations without a closed-form
solution.

**Learning objectives:**
- Find the radius and interval of convergence of a power series
- Construct a Taylor or Maclaurin series for a given function
- Use a Taylor polynomial to approximate a function's value, with error estimation
- Recognize and use the standard Maclaurin series (e^x, sin x, cos x, etc.)

**Lessons:**
1. *Power Series and Radius/Interval of Convergence* (30 min)
2. *Representing Functions as Power Series* (25 min)
3. *Taylor and Maclaurin Series* — constructing them from scratch. (30 min)
4. *Standard Maclaurin Series and Their Uses* (20 min)
5. *Taylor Polynomial Approximation and Error Estimation* (25 min)

**Free resources:** Paul's Online Math Notes, Calculus II — "Series" chapter (Power Series, Taylor Series sections); OpenStax *Calculus Volume 2*, ch. 6; Khan Academy "Series" (Taylor/Maclaurin sections); MIT OCW 18.01.

**Suggested topic tags:** `infiniteSeriesConvergence` (existing, extended here).

## Suggested assessment structure

- **Unit quizzes** (6-10 questions each) — Unit 13 (convergence tests)
  should get a longer quiz than the others (10-15 questions) given how
  much judgment it requires.
- **Course-end exam** (35-40 questions): should explicitly include a
  "here's a series/integral, decide what technique applies" section
  rather than only isolated per-technique problems, since that
  decision-making is the actual hard part of this course.
- **This is the finish line for the 3-month goal** — consider a
  slightly more thorough final assessment here than other courses, since
  it's the checkpoint the whole plan is built around.
