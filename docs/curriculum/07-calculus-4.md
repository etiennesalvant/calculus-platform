# Calculus IV: Ordinary Differential Equations

**Proposed course slug:** `calculus4` (unchanged)

## Purpose

Differential equations are equations involving a function and its
derivatives — this course is about solving for the function itself,
rather than a number. It's where calculus turns into a modeling tool for
real physical, biological, and financial systems.

## Why it matters for calculus

This is the most directly "applied" course in the sequence — population
growth, spring-mass systems, circuits, and cooling all reduce to a
differential equation. It also leans heavily on Calculus II's integration
techniques and series (for series-solution methods) and previews the
matrix methods formalized in Calculus V.

## Prerequisites

Calculus III (concurrent with, or after, Calculus V is fine for most of
this course; Unit 9 specifically benefits from Calculus V's matrix
methods — see the note there)

## Units

### Unit 1: Introduction to Differential Equations and Modeling
`unitSlug: intro-to-differential-equations`

**Why it matters for calculus:** Establishes the vocabulary (order,
linearity, general vs. particular solution) used for the rest of the
course, and the modeling mindset: translating a word problem into an
equation involving a rate of change.

**Learning objectives:**
- Classify a differential equation by order and linearity
- Verify whether a given function is a solution to a differential equation
- Translate a word problem into a differential equation (without solving it yet)

**Lessons:**
1. *What a Differential Equation Is* — order, linearity, general vs. particular solutions. (25 min)
2. *Verifying Solutions* (20 min)
3. *Modeling with Differential Equations* — translating word problems into equations. (25 min)
4. *Slope Fields* — a visual/graphical way to understand a solution before solving it. (20 min)

**Free resources:** Paul's Online Math Notes, Differential Equations — "Basic Concepts" chapter; OpenStax doesn't have a dedicated Differential Equations text, so this course leans more heavily on Paul's Online Math Notes and MIT OCW 18.03 throughout; Khan Academy "Differential equations."

**Suggested topic tags:** `ordinaryDifferentialEquations` (existing).

### Unit 2: First-Order Equations — Separable and Linear
`unitSlug: first-order-separable-and-linear`

**Why it matters for calculus:** The two most common solvable first-order
types — separable equations use straight integration technique from
Calculus II, and linear equations introduce the integrating factor
technique used throughout the rest of the course.

**Learning objectives:**
- Solve separable differential equations
- Solve first-order linear differential equations using an integrating factor
- Solve initial value problems for both types

**Lessons:**
1. *Separable Differential Equations* (25 min)
2. *First-Order Linear Equations and Integrating Factors* (30 min)
3. *Initial Value Problems* (20 min)

**Free resources:** Paul's Online Math Notes, Differential Equations — "First Order DE" chapter (Separable, Linear sections); MIT OCW 18.03.

**Suggested topic tags:** `ordinaryDifferentialEquations` (existing).

### Unit 3: First-Order Equations — Exact Equations and Integrating Factors
`unitSlug: exact-equations`

**Why it matters for calculus:** A less common but important first-order
type — also a good early exercise in recognizing when a technique applies
versus forcing one that doesn't.

**Learning objectives:**
- Determine whether a first-order equation is exact
- Solve exact differential equations
- Find an integrating factor to make a non-exact equation exact

**Lessons:**
1. *Exact Differential Equations* (25 min)
2. *Finding Integrating Factors for Non-Exact Equations* (25 min)

**Free resources:** Paul's Online Math Notes, Differential Equations — "First Order DE" chapter (Exact Equations section); MIT OCW 18.03.

**Suggested topic tags:** `ordinaryDifferentialEquations` (existing).

### Unit 4: Applications of First-Order Equations
`unitSlug: first-order-applications`

**Why it matters for calculus:** The payoff for the first-order toolkit —
real modeling problems, mirroring the "applications" units from Calculus
I and II.

**Learning objectives:**
- Solve growth and decay problems (population, radioactive decay)
- Solve mixing problems
- Solve problems using Newton's Law of Cooling

**Lessons:**
1. *Growth and Decay Models* (25 min)
2. *Mixing Problems* (25 min)
3. *Newton's Law of Cooling* (20 min)

**Free resources:** Paul's Online Math Notes, Differential Equations — "First Order DE" chapter (Applications sections); MIT OCW 18.03.

**Suggested topic tags:** `ordinaryDifferentialEquations` (existing).

### Unit 5: Second-Order Linear Homogeneous Equations
`unitSlug: second-order-homogeneous`

**Why it matters for calculus:** Second-order equations model anything
with acceleration (springs, circuits) — this unit is where the complex
numbers from the bridge course become essential (complex roots of the
characteristic equation).

**Learning objectives:**
- Find the characteristic equation of a second-order linear homogeneous equation
- Solve for the general solution in the real-distinct-roots, repeated-root, and complex-root cases
- Apply initial or boundary conditions to find a particular solution

**Lessons:**
1. *The Characteristic Equation* (25 min)
2. *Real, Distinct Roots* (20 min)
3. *Repeated Roots* (20 min)
4. *Complex Roots* — directly using the Complex Numbers unit from the bridge course. (25 min)

**Free resources:** Paul's Online Math Notes, Differential Equations — "Second Order DE" chapter; MIT OCW 18.03.

**Suggested topic tags:** `ordinaryDifferentialEquations` (existing).

### Unit 6: Second-Order Linear Non-Homogeneous Equations
`unitSlug: second-order-nonhomogeneous`

**Why it matters for calculus:** Extends the previous unit to equations
with a forcing term — the mathematical description of "a system with an
external push," like a driven spring or an AC circuit.

**Learning objectives:**
- Solve non-homogeneous equations using the method of undetermined coefficients
- Solve non-homogeneous equations using variation of parameters
- Choose the appropriate method based on the form of the forcing function

**Lessons:**
1. *Undetermined Coefficients* (30 min)
2. *Variation of Parameters* (30 min)
3. *Choosing a Method* (20 min)

**Free resources:** Paul's Online Math Notes, Differential Equations — "Second Order DE" chapter (Undetermined Coefficients, Variation of Parameters sections); MIT OCW 18.03.

**Suggested topic tags:** `ordinaryDifferentialEquations` (existing).

### Unit 7: Applications of Second-Order Equations
`unitSlug: second-order-applications`

**Why it matters for calculus:** The physical payoff — spring-mass
systems and simple circuits are the canonical real-world use of
everything in Units 5-6.

**Learning objectives:**
- Set up and solve spring-mass system problems (undamped, damped, forced)
- Set up and solve simple RLC circuit problems
- Interpret the physical meaning of a solution (resonance, damping behavior)

**Lessons:**
1. *Spring-Mass Systems: Free Vibration* (25 min)
2. *Spring-Mass Systems: Damped and Forced Vibration* (25 min)
3. *Simple Electrical Circuits* (25 min)

**Free resources:** Paul's Online Math Notes, Differential Equations — "Second Order DE" chapter (Applications sections); MIT OCW 18.03.

**Suggested topic tags:** `ordinaryDifferentialEquations` (existing).

### Unit 8: The Laplace Transform and Its Applications
`unitSlug: laplace-transforms`

**Why it matters for calculus:** An alternate technique — especially
powerful for equations with discontinuous forcing functions (like a
switch turning on) that undetermined coefficients can't handle cleanly.

**Learning objectives:**
- Compute the Laplace transform and inverse Laplace transform of common functions
- Use the Laplace transform to solve initial value problems
- Apply the Laplace transform to equations with discontinuous or impulse forcing functions

**Lessons:**
1. *The Laplace Transform* — definition and computing transforms of basic functions. (25 min)
2. *Inverse Laplace Transforms* (25 min)
3. *Solving IVPs with Laplace Transforms* (30 min)
4. *Step Functions and Impulse Functions* (25 min)

**Free resources:** Paul's Online Math Notes, Differential Equations — "Laplace Transforms" chapter; MIT OCW 18.03.

**Suggested topic tags:** propose new: `laplaceTransforms`.

### Unit 9: Systems of Differential Equations
`unitSlug: systems-of-differential-equations`

**Why it matters for calculus:** Where this course and Calculus V meet
directly — solving a system of ODEs is an eigenvalue/eigenvector problem.
**If Calculus V hasn't been reached yet, this unit should be revisited
after it, or taught alongside a light just-in-time introduction to
eigenvalues.**

**Learning objectives:**
- Convert a higher-order equation into a system of first-order equations
- Solve a linear system of differential equations using eigenvalues and eigenvectors
- Classify equilibrium solutions (node, saddle, spiral, center) for a 2D system

**Lessons:**
1. *Converting to a System of First-Order Equations* (20 min)
2. *Solving Systems Using Eigenvalues and Eigenvectors* — cross-references Calculus V's eigenvalue unit directly. (30 min)
3. *Classifying Equilibrium Solutions* (25 min)

**Free resources:** Paul's Online Math Notes, Differential Equations — "Systems of DE" chapter; MIT OCW 18.03.

**Suggested topic tags:** `ordinaryDifferentialEquations` (existing), `linearAlgebraFoundations` (existing, cross-referenced).

### Unit 10: Series Solutions and an Introduction to Numerical Methods
`unitSlug: series-solutions-and-numerical-methods`

**Why it matters for calculus:** For equations with no closed-form
solution, this is where Calculus II's power series unit gets used for
real, plus a first taste of how a computer would solve an ODE
numerically.

**Learning objectives:**
- Find a power series solution to a differential equation
- Apply Euler's Method to numerically approximate a solution
- Understand, at an introductory level, why more advanced numerical methods (Runge-Kutta) improve on Euler's Method

**Lessons:**
1. *Series Solutions to Differential Equations* — direct callback to Calculus II's Taylor series unit. (30 min)
2. *Euler's Method* (25 min)
3. *A Conceptual Look at Improved Numerical Methods* (15 min)

**Free resources:** Paul's Online Math Notes, Differential Equations — "Series Solutions" chapter; MIT OCW 18.03.

**Suggested topic tags:** `ordinaryDifferentialEquations` (existing).

## Suggested assessment structure

- **Unit quizzes** (6-8 questions each).
- **Course-end exam** (25-30 questions): should include at least one
  full modeling problem (set up the equation from a word problem *and*
  solve it) rather than only pre-set-up equations, since translating a
  scenario into an equation is half the actual skill this course teaches.
