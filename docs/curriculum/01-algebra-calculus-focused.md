# Algebra I & II (Calculus-Focused)

**Proposed course slug:** `algebra-calculus-focused` (replaces the separate
`algebra1` / `algebra2` courses)

## Purpose

Rebuild algebraic fluency — fast, and *only* on the skills calculus
actually uses. This is not a full Algebra I/II course; it deliberately
skips traditional content (mixture/investment word problems, absolute
value as a standalone unit's worth of graphing, most consumer-math
applications) that a full school course covers but calculus never touches.

## Why it matters for calculus

Every calculus technique is, underneath, algebra done under time pressure
while also tracking a new idea (a limit, a derivative, an integral). A
shaky factoring or exponent-rule instinct doesn't block you from
*understanding* calculus concepts — it blocks you from finishing problems
correctly, which is where a returning learner's confidence usually takes
the hit. This course exists to make the algebra automatic first.

## Prerequisites

None — this is the entry point. The diagnostic may place a student partway
through if earlier topics test strong.

## Units

### Unit 1: Numerical Foundations
`unitSlug: arithmetic-review` — **already fully implemented** (3 lessons:
Order of Operations, Working with Signed Numbers, Fractions). No further
planning needed here; listed for completeness.

### Unit 2: Solving Equations and Inequalities
`unitSlug: solving-equations-and-inequalities`

**Why it matters for calculus:** Every optimization and related-rates
problem ends in "now solve for x." Compound inequalities show up again
the moment domains and intervals of increase/decrease enter the picture.

**Learning objectives:**
- Solve multi-step linear equations, including variables on both sides
- Solve and graph linear inequalities, including compound inequalities
- Solve and graph absolute value equations and inequalities

**Lessons:**
1. *Solving Multi-Step Linear Equations* — combining like terms, distributing, variables on both sides. (25 min)
2. *Solving Linear Inequalities* — the flip-the-sign rule, graphing on a number line. (20 min)
3. *Compound Inequalities* — "and"/"or" inequalities, interval notation preview. (20 min)
4. *Absolute Value Equations and Inequalities* — splitting into cases. (25 min)

**Free resources:** OpenStax *Elementary Algebra 2e*, ch. 2 (Solving Linear Equations) and ch. 4 (relevant inequality sections); Khan Academy "Algebra basics: Linear equations and inequalities"; Paul's Online Math Notes, Algebra — "Solving Equations and Inequalities" chapter.

**Suggested topic tags:** `solvingLinearEquations` (existing), propose new: `solvingLinearInequalities`, `solvingAbsoluteValueEquations`.

### Unit 3: Graphing Lines and Function Basics
`unitSlug: graphing-lines-and-slope` (existing slug, expand scope)

**Why it matters for calculus:** Slope *is* average rate of change — the
entire on-ramp to "derivative." Function notation and evaluating f(x) are
used in literally every calculus problem statement.

**Learning objectives:**
- Find slope from two points, a graph, or an equation
- Write and graph linear equations in slope-intercept and point-slope form
- Read, write, and evaluate function notation, including domain and range

**Lessons:**
1. *Slope and Rate of Change* — slope formula, rise over run, slope as a rate. (20 min)
2. *Slope-Intercept and Point-Slope Form* — writing equations from a graph, a point and slope, or two points. (25 min)
3. *Graphing Linear Equations* — by hand and by table of values. (20 min)
4. *Introduction to Function Notation* — f(x) notation, evaluating functions, identifying domain and range from a graph or equation. (25 min)

**Free resources:** OpenStax *Elementary Algebra 2e*, ch. 3 (Graphs); OpenStax *Algebra and Trigonometry 2e*, ch. 2 (functions intro); Khan Academy "Algebra I: Forms of linear equations" and "Functions."

**Suggested topic tags:** `graphingLinesAndSlope` (existing), `functionsAndFunctionNotation` (existing, introduced early here and deepened in Unit 10).

### Unit 4: Systems of Equations
`unitSlug: systems-of-equations` (existing slug)

**Why it matters for calculus:** Finding where two curves intersect —
needed for area-between-curves problems in Calculus II — is a system of
equations. Constraint equations in optimization problems are solved the
same way.

**Learning objectives:**
- Solve a system of two linear equations by substitution
- Solve a system of two linear equations by elimination
- Interpret a system's solution graphically (intersection point)

**Lessons:**
1. *Solving Systems by Substitution* (20 min)
2. *Solving Systems by Elimination* (20 min)
3. *Systems with No Solution or Infinite Solutions* — parallel and identical lines. (15 min)

**Free resources:** OpenStax *Elementary Algebra 2e*, ch. 5; Khan Academy "Systems of equations."

**Suggested topic tags:** `solvingSystemsOfEquations` (existing).

### Unit 5: Exponent Rules and Polynomial Operations
`unitSlug: exponents-and-polynomials` (existing slug)

**Why it matters for calculus:** The power rule for derivatives depends
entirely on being fluent with exponent rules first. Polynomial
multiplication shows up constantly when expanding before differentiating.

**Learning objectives:**
- Apply the product, quotient, and power rules for exponents, including
  negative and zero exponents
- Add, subtract, and multiply polynomials
- Divide polynomials using long division and synthetic division

**Lessons:**
1. *Exponent Rules* — product, quotient, power-of-a-power, zero and negative exponents. (25 min)
2. *Adding and Subtracting Polynomials* (15 min)
3. *Multiplying Polynomials* — distributing, FOIL, multiplying larger polynomials. (25 min)
4. *Dividing Polynomials* — long division and synthetic division. (25 min)

**Free resources:** OpenStax *Elementary Algebra 2e*, ch. 6; Paul's Online Math Notes, Algebra — "Polynomial Functions" chapter (covers division well); Khan Academy "Exponents and radicals," "Polynomial arithmetic."

**Suggested topic tags:** `exponentRules` (existing), propose new: `polynomialArithmetic`, `polynomialDivision`.

### Unit 6: Factoring Techniques
`unitSlug: factoring` (existing slug)

**Why it matters for calculus:** Factoring is *the* main tool for
resolving 0/0-form limits algebraically, and for simplifying before
integrating. This is one of the highest-leverage units in the whole
sequence.

**Learning objectives:**
- Factor out a greatest common factor
- Factor trinomials (leading coefficient 1 and greater than 1)
- Factor special forms: difference of squares, sum/difference of cubes
- Factor by grouping

**Lessons:**
1. *Greatest Common Factor* (15 min)
2. *Factoring Trinomials (leading coefficient 1)* (25 min)
3. *Factoring Trinomials (leading coefficient not 1)* — the "ac method" or trial and error. (25 min)
4. *Special Factoring Forms* — difference of squares, sum/difference of cubes. (20 min)
5. *Factoring by Grouping* (20 min)
6. *Factoring Strategy* — a mixed-practice lesson: "which method do I use?" (20 min)

**Free resources:** OpenStax *Elementary Algebra 2e*, ch. 7; Paul's Online Math Notes, Algebra — "Polynomial Functions: Factoring Polynomials"; Khan Academy "Factorization."

**Suggested topic tags:** `factoringPolynomials` (existing).

### Unit 7: Quadratic Equations and Functions
`unitSlug: quadratics` (existing slug)

**Why it matters for calculus:** Quadratics are the simplest non-linear
function, so they're the standard first example for optimization,
related-rates, and area-under-a-curve problems. Vertex form directly
previews "find the max/min," which is what a derivative does in general.

**Learning objectives:**
- Solve quadratic equations by factoring, completing the square, and the
  quadratic formula
- Convert between standard and vertex form
- Graph a parabola and identify its vertex, axis of symmetry, and roots

**Lessons:**
1. *Solving Quadratics by Factoring* (20 min)
2. *Solving Quadratics by Completing the Square* (25 min)
3. *The Quadratic Formula and the Discriminant* (25 min)
4. *Vertex Form and Graphing Parabolas* (25 min)
5. *Applications: Projectile Motion and Optimization Previews* — a light preview of the kind of word problem Calculus I will solve properly with derivatives. (20 min)

**Free resources:** OpenStax *Elementary Algebra 2e*, ch. 10; Paul's Online Math Notes, Algebra — "Solving Quadratic Equations"; Khan Academy "Quadratic equations and functions."

**Suggested topic tags:** `solvingQuadraticEquations` (existing), propose new: `graphingQuadraticFunctions`.

### Unit 8: Rational Expressions and Equations
`unitSlug: rational-expressions` (existing slug)

**Why it matters for calculus:** Simplifying a rational expression before
taking a limit is often the entire trick to resolving it. Identifying
excluded values here is the direct precursor to finding vertical
asymptotes and discontinuities later.

**Learning objectives:**
- Simplify rational expressions and identify excluded values
- Multiply, divide, add, and subtract rational expressions
- Solve rational equations and check for extraneous solutions

**Lessons:**
1. *Simplifying Rational Expressions* — factoring first, identifying excluded values. (25 min)
2. *Multiplying and Dividing Rational Expressions* (20 min)
3. *Adding and Subtracting Rational Expressions* — finding a common denominator with polynomials. (25 min)
4. *Solving Rational Equations* — clearing denominators, checking for extraneous solutions. (25 min)

**Free resources:** OpenStax *Elementary Algebra 2e*, ch. 8; Paul's Online Math Notes, Algebra — "Rational Expressions"; Khan Academy "Rational expressions, equations, and functions."

**Suggested topic tags:** `rationalExpressions` (existing).

### Unit 9: Radicals and Rational Exponents
`unitSlug: radicals-and-exponents` (existing slug)

**Why it matters for calculus:** Square-root functions appear constantly
as differentiation/integration practice, and the power rule for
derivatives requires being comfortable rewriting a radical as a rational
exponent first (√x = x^(1/2)).

**Learning objectives:**
- Simplify radical expressions, including with variables
- Convert between radical form and rational exponent form
- Rationalize denominators
- Add, subtract, multiply, and divide radical expressions

**Lessons:**
1. *Simplifying Radicals* (20 min)
2. *Rational Exponents* — converting between √ and exponent notation. (25 min)
3. *Operations with Radicals* — adding, subtracting, multiplying. (20 min)
4. *Rationalizing Denominators* (20 min)

**Free resources:** OpenStax *Elementary Algebra 2e*, ch. 8 (radicals sections); Khan Academy "Radicals and rational exponents."

**Suggested topic tags:** `radicalsAndRationalExponents` (existing).

### Unit 10: Functions Deep Dive
`unitSlug: functions` (existing slug)

**Why it matters for calculus:** Composition and inverse functions are
the algebraic engine behind the chain rule and behind understanding why
derivatives of inverse functions work the way they do.

**Learning objectives:**
- Evaluate and interpret function composition, f(g(x))
- Find the inverse of a function algebraically and verify it
- Identify a function's domain and range from its equation, not just its graph
- Apply basic transformations (shifts, stretches, reflections) to a function's graph

**Lessons:**
1. *Function Composition* (20 min)
2. *Inverse Functions* — finding and verifying inverses. (25 min)
3. *Domain and Range from an Equation* — square roots, denominators, and what makes a value invalid. (20 min)
4. *Transformations of Functions* — shifts, stretches, reflections. (25 min)

**Free resources:** OpenStax *Algebra and Trigonometry 2e*, ch. 1 (Functions); Khan Academy "Functions" unit (composition/inverses sections).

**Suggested topic tags:** `functionsAndFunctionNotation` (existing, deepened here), propose new: `functionCompositionAndInverses`, `functionTransformations`.

### Unit 11: Exponential and Logarithmic Functions
`unitSlug: exponential-and-log-functions` (existing slug)

**Why it matters for calculus:** e^x and ln(x) are two of the most
common functions differentiated and integrated in Calculus I and II.
Growth/decay modeling here becomes differential equation modeling in
Calculus IV.

**Learning objectives:**
- Graph exponential growth and decay functions
- Apply log rules (product, quotient, power) to simplify expressions
- Solve exponential and logarithmic equations
- Work fluently with the natural exponential (e) and natural log (ln)

**Lessons:**
1. *Exponential Growth and Decay* — graphing, real-world modeling setup. (25 min)
2. *Introduction to Logarithms* — log as the inverse of exponentiation. (20 min)
3. *Log Rules* — product, quotient, power rules, expanding and condensing. (25 min)
4. *Solving Exponential and Logarithmic Equations* (25 min)
5. *The Natural Exponential and Natural Log* — why e matters, preview of "its own derivative." (20 min)

**Free resources:** OpenStax *Algebra and Trigonometry 2e*, ch. 6; Paul's Online Math Notes, Algebra — "Exponential and Logarithm Functions"; Khan Academy "Exponential and logarithmic functions."

**Suggested topic tags:** `exponentialAndLogarithmicFunctions` (existing).

## Suggested assessment structure

- **Unit quizzes** (5-8 questions): one quiz per unit above, mixing
  procedural questions (solve/simplify/factor) with one "why does this
  matter for calculus" conceptual question per quiz.
- **Course-end exam** (25-30 questions, cumulative): weighted toward
  Units 5-11 (exponents, factoring, quadratics, rationals, radicals,
  functions, exp/log) since those are the units calculus leans on hardest;
  Units 1-4 covered lightly as a fluency check.
