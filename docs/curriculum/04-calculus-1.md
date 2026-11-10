# Calculus I

**Proposed course slug:** `calculus1` (unchanged)

## Purpose

Limits, derivatives, and their applications — the course where "algebra
done under time pressure while tracking a new idea" (see the Algebra
course's rationale) starts for real.

## Why it matters for calculus

This is calculus. Every later course (II through V) either extends what a
derivative or limit means (II, III), applies the same reasoning to
differential equations (IV), or provides the linear-algebra machinery that
makes multivariable calculus tractable (V, feeding back into III).

## Prerequisites

Pre-Calculus

## Units

### Unit 1: Limits and Continuity
`unitSlug: limits-and-continuity` (existing slug)

**Why it matters for calculus:** This *is* the formal version of the
"Introduction to the Idea of a Limit" bridge unit. The derivative itself
is defined as a limit in the very next unit, so this has to be solid
first.

**Learning objectives:**
- Evaluate limits graphically, numerically (tables), and algebraically
- Apply limit laws to evaluate limits of combined functions
- Evaluate limits that require algebraic manipulation first (factoring, rationalizing)
- Determine where a function is continuous, and classify discontinuities
- Evaluate limits at infinity and identify horizontal asymptotes formally

**Lessons:**
1. *Limits Graphically and Numerically* — formalizing the informal preview from the bridge course. (25 min)
2. *Limit Laws* — sum, product, quotient, and constant multiple rules for limits. (25 min)
3. *Evaluating Limits Algebraically* — factoring and rationalizing to resolve 0/0 forms. (30 min)
4. *One-Sided Limits and When a Limit Fails to Exist* (20 min)
5. *Continuity* — the three-part definition, classifying removable vs. non-removable discontinuities. (25 min)
6. *Limits at Infinity and Horizontal Asymptotes* (25 min)
7. *The Intermediate Value Theorem* (20 min)

**Free resources:** Paul's Online Math Notes, Calculus I — "Limits" chapter (excellent, thorough); OpenStax *Calculus Volume 1*, ch. 2; Khan Academy "Limits and continuity"; MIT OCW 18.01, Unit 1.

**Suggested topic tags:** `limitsAndContinuity` (existing, formal treatment here).

### Unit 2: The Derivative — Definition and Basic Rules
`unitSlug: derivative-definition-and-rules` (existing slug)

**Why it matters for calculus:** Everything else in Calculus I-III is
built from this definition and these rules.

**Learning objectives:**
- State and apply the limit definition of the derivative
- Interpret a derivative as a slope and as an instantaneous rate of change
- Apply the power, constant, sum, and difference rules
- Apply the product and quotient rules

**Lessons:**
1. *The Derivative as a Limit* — the difference quotient, derivative at a point vs. as a function. (30 min)
2. *Derivative as Slope and as Rate of Change* — connecting back to Algebra's slope unit. (20 min)
3. *The Power Rule and Basic Rules* — constant, sum, difference. (25 min)
4. *The Product Rule* (20 min)
5. *The Quotient Rule* (20 min)

**Free resources:** Paul's Online Math Notes, Calculus I — "Derivatives" chapter; OpenStax *Calculus Volume 1*, ch. 3; Khan Academy "Derivatives: definition and basic rules"; MIT OCW 18.01, Unit 1 (derivative sections).

**Suggested topic tags:** `derivativeDefinitionAndRules` (existing).

### Unit 3: The Chain Rule and Implicit Differentiation
`unitSlug: chain-rule-and-implicit-differentiation`

**Why it matters for calculus:** The chain rule is arguably the single
most-used rule in all of calculus — related rates, optimization, and
later multivariable calculus all depend on it being automatic.

**Learning objectives:**
- Apply the chain rule to differentiate composite functions
- Differentiate functions requiring the chain rule combined with product/quotient rules
- Use implicit differentiation to find dy/dx when y isn't isolated
- Solve related-rates-style problems that require implicit differentiation

**Lessons:**
1. *The Chain Rule* — recognizing composite functions, applying the rule. (30 min)
2. *Combining the Chain Rule with Product and Quotient Rules* (25 min)
3. *Implicit Differentiation* (30 min)
4. *Finding Tangent Lines with Implicit Differentiation* (20 min)

**Free resources:** Paul's Online Math Notes, Calculus I — "Derivatives" chapter (Chain Rule and Implicit Differentiation sections); OpenStax *Calculus Volume 1*, ch. 3; Khan Academy "Chain rule" and "Implicit differentiation."

**Suggested topic tags:** propose new: `chainRule`, `implicitDifferentiation`.

### Unit 4: Derivatives of Trigonometric, Exponential, and Logarithmic Functions
`unitSlug: derivatives-of-transcendental-functions`

**Why it matters for calculus:** These are the specific derivative
formulas layered on top of the chain rule for the rest of Calculus I and
II's problem sets — trig, exponential, and log functions appear
constantly from here on.

**Learning objectives:**
- Differentiate the six trigonometric functions
- Differentiate exponential functions, including e^x and general bases
- Differentiate logarithmic functions, including ln(x) and general bases
- Apply logarithmic differentiation to simplify differentiating products/quotients/powers

**Lessons:**
1. *Derivatives of Trigonometric Functions* (25 min)
2. *Derivatives of Exponential Functions* — e^x first, then general bases. (25 min)
3. *Derivatives of Logarithmic Functions* (25 min)
4. *Logarithmic Differentiation* — a technique, not just a formula. (25 min)

**Free resources:** Paul's Online Math Notes, Calculus I — "Derivatives" chapter (relevant sections); OpenStax *Calculus Volume 1*, ch. 3; Khan Academy "Derivatives of common functions."

**Suggested topic tags:** propose new: `derivativesOfTrigFunctions`, `derivativesOfExponentialAndLogFunctions`, `logarithmicDifferentiation`.

### Unit 5: Applications of Derivatives I — Related Rates and Linear Approximation
`unitSlug: related-rates-and-linear-approximation`

**Why it matters for calculus:** This is the first unit where calculus
solves a real problem end to end, combining implicit differentiation with
the geometry formulas from the bridge course.

**Learning objectives:**
- Set up and solve related-rates problems
- Use a derivative to build a linear approximation of a function near a point
- Estimate error using differentials

**Lessons:**
1. *Setting Up Related-Rates Problems* — the general strategy. (25 min)
2. *Related Rates: Classic Problem Types* — ladders, shadows, filling tanks, expanding shapes. (30 min)
3. *Linear Approximation* — tangent lines as local estimates. (20 min)
4. *Differentials and Error Estimation* (20 min)

**Free resources:** Paul's Online Math Notes, Calculus I — "Applications of Derivatives" chapter; OpenStax *Calculus Volume 1*, ch. 4; Khan Academy "Applications of derivatives" (related rates section).

**Suggested topic tags:** `applicationsOfDerivatives` (existing, split further as needed), propose new: `relatedRates`, `linearApproximation`.

### Unit 6: Applications of Derivatives II — Extrema, Mean Value Theorem, and Curve Sketching
`unitSlug: extrema-and-curve-sketching`

**Why it matters for calculus:** This is where the derivative becomes a
tool for understanding a function's *shape*, not just its slope at a
point — directly setting up optimization next.

**Learning objectives:**
- Find critical points and classify them using the first and second derivative tests
- State and apply the Mean Value Theorem
- Determine intervals of increase/decrease and concavity
- Sketch a function's graph using derivative information

**Lessons:**
1. *Critical Points and Extrema* (25 min)
2. *The First Derivative Test* (20 min)
3. *Concavity and the Second Derivative Test* (25 min)
4. *The Mean Value Theorem* (20 min)
5. *Curve Sketching* — putting it all together. (30 min)

**Free resources:** Paul's Online Math Notes, Calculus I — "Applications of Derivatives" chapter; OpenStax *Calculus Volume 1*, ch. 4; Khan Academy "Applications of derivatives" (extrema and curve-sketching sections); MIT OCW 18.01.

**Suggested topic tags:** `applicationsOfDerivatives` (existing), propose new: `meanValueTheorem`, `curveSketching`.

### Unit 7: Applications of Derivatives III — Optimization
`unitSlug: optimization`

**Why it matters for calculus:** The payoff unit for everything above —
real maximize/minimize word problems, using the geometry and algebra
built across the whole sequence.

**Learning objectives:**
- Set up an optimization problem from a word problem (objective function
  plus constraint)
- Use derivatives to find and verify the optimal value
- Solve optimization problems involving geometric shapes, cost/revenue, and physical quantities

**Lessons:**
1. *Setting Up Optimization Problems* — objective function and constraint. (25 min)
2. *Optimization: Geometric Problems* — maximizing area/volume with a fixed constraint. (25 min)
3. *Optimization: Cost, Revenue, and Physical Problems* (25 min)

**Free resources:** Paul's Online Math Notes, Calculus I — "Applications of Derivatives" chapter (Optimization section); OpenStax *Calculus Volume 1*, ch. 4; Khan Academy "Optimization."

**Suggested topic tags:** `applicationsOfDerivatives` (existing).

### Unit 8: Introduction to Integration — Antiderivatives and Indefinite Integrals
`unitSlug: intro-to-integration` (existing slug)

**Why it matters for calculus:** The reverse operation of differentiation
— and the entire subject of Calculus II.

**Learning objectives:**
- Find antiderivatives using basic integration rules
- Apply u-substitution to find antiderivatives of composite functions (introductory level)
- Solve initial value problems by finding a particular antiderivative

**Lessons:**
1. *Antiderivatives and Indefinite Integrals* — reversing the basic derivative rules. (25 min)
2. *Basic u-Substitution* — an introductory pass, expanded fully in Calculus II. (25 min)
3. *Initial Value Problems* — using a given point to find "+C." (20 min)

**Free resources:** Paul's Online Math Notes, Calculus I — "Integrals" chapter (opening sections); OpenStax *Calculus Volume 1*, ch. 4 (Antiderivatives); Khan Academy "Integrals."

**Suggested topic tags:** `integrationBasics` (existing).

### Unit 9: Definite Integrals, Riemann Sums, and the Fundamental Theorem of Calculus
`unitSlug: definite-integrals-and-ftc`

**Why it matters for calculus:** The Fundamental Theorem of Calculus is
the single most important theorem in the entire subject — it's the bridge
connecting derivatives and integrals, and everything in Calculus II's
"applications of integration" units depends on it.

**Learning objectives:**
- Approximate area under a curve using Riemann sums (left, right, midpoint)
- Define the definite integral as a limit of Riemann sums
- State and apply both parts of the Fundamental Theorem of Calculus
- Evaluate definite integrals using the Fundamental Theorem

**Lessons:**
1. *Riemann Sums* — approximating area, using sigma notation from the bridge course. (30 min)
2. *The Definite Integral* — as a limit of Riemann sums. (25 min)
3. *The Fundamental Theorem of Calculus, Part 1* — differentiating an integral. (25 min)
4. *The Fundamental Theorem of Calculus, Part 2* — evaluating definite integrals. (25 min)
5. *Basic Area Under a Curve Problems* (20 min)

**Free resources:** Paul's Online Math Notes, Calculus I — "Integrals" chapter (Definite Integral and FTC sections); OpenStax *Calculus Volume 1*, ch. 5; Khan Academy "Integrals" (definite integral and FTC sections); MIT OCW 18.01.

**Suggested topic tags:** `integrationBasics` (existing).

## Suggested assessment structure

- **Unit quizzes** (6-10 questions each).
- **Course-end exam** (30-35 questions, cumulative): should require
  combining rules from multiple units (e.g., a chain-rule-plus-quotient-
  rule problem, an optimization problem requiring both setup and
  derivative work) rather than testing each rule in isolation — that
  combination is what real calculus problems actually look like.
