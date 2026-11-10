# Calculus III

**Proposed course slug:** `calculus3` (unchanged)

## Purpose

Extends every idea from Calculus I and II into two and three dimensions:
vectors, functions of several variables, and integrals over regions and
surfaces instead of just intervals.

## Why it matters for calculus

This is the course where calculus starts describing the real,
three-dimensional world directly — motion through space, surfaces, flow
fields. It also leans on Calculus V's linear algebra earlier than most
students expect (vectors, matrices for the Jacobian in change of
variables), which is why Calculus V is positioned right after this course
in the sequence rather than as an afterthought.

## Prerequisites

Calculus II (Calculus V's linear algebra is a helpful companion but not a
strict prerequisite — see the note in Unit 8 below)

## Units

### Unit 1: Vectors and the Geometry of Space
`unitSlug: vectors-and-3d-space` (existing slug)

**Why it matters for calculus:** The 3D extension of Pre-Calculus's
vector introduction — the working language for the rest of this course.

**Learning objectives:**
- Represent vectors in three dimensions and perform vector arithmetic
- Compute and interpret the dot product and cross product
- Find equations of lines and planes in three dimensions
- Describe basic quadric surfaces (spheres, cylinders, paraboloids, etc.)

**Lessons:**
1. *Vectors in Three Dimensions* — extending 2D vector work. (25 min)
2. *The Dot Product and Cross Product* — computing and interpreting both, including using the cross product for area/normal vectors. (30 min)
3. *Lines and Planes in Three Dimensions* (25 min)
4. *Quadric Surfaces* — recognizing conics (from Pre-Calculus) as cross-sections. (25 min)

**Free resources:** Paul's Online Math Notes, Calculus III — "3-Dimensional Space" chapter; OpenStax *Calculus Volume 3*, ch. 2; Khan Academy "Vectors" (multivariable-relevant sections); MIT OCW 18.02.

**Suggested topic tags:** `vectorsAndThreeDSpace` (existing).

### Unit 2: Vector-Valued Functions and Space Curves
`unitSlug: vector-valued-functions`

**Why it matters for calculus:** Formalizes "motion through space" —
direct 3D extension of Calculus II's parametric equations unit.

**Learning objectives:**
- Differentiate and integrate vector-valued functions
- Find the velocity, speed, and acceleration of a particle from its position vector
- Find the arc length of a space curve
- Compute curvature (introductory level)

**Lessons:**
1. *Vector-Valued Functions and Space Curves* (25 min)
2. *Derivatives and Integrals of Vector-Valued Functions* (25 min)
3. *Velocity, Speed, and Acceleration* (25 min)
4. *Arc Length in Three Dimensions and Curvature* (25 min)

**Free resources:** Paul's Online Math Notes, Calculus III — "Vector Functions" chapter; OpenStax *Calculus Volume 3*, ch. 3; MIT OCW 18.02.

**Suggested topic tags:** propose new: `vectorValuedFunctions`.

### Unit 3: Partial Derivatives
`unitSlug: partial-derivatives` (existing slug)

**Why it matters for calculus:** The multivariable extension of "the
derivative" — the rate of change of a function with several inputs, with
respect to just one of them at a time.

**Learning objectives:**
- Compute first- and higher-order partial derivatives
- Apply the multivariable chain rule
- Use implicit differentiation for functions of several variables

**Lessons:**
1. *Functions of Several Variables* — domain, graphing conceptually, level curves (tying back to conics). (25 min)
2. *Partial Derivatives* (25 min)
3. *Higher-Order Partial Derivatives* (20 min)
4. *The Multivariable Chain Rule* (25 min)
5. *Implicit Differentiation with Several Variables* (20 min)

**Free resources:** Paul's Online Math Notes, Calculus III — "Partial Derivatives" chapter; OpenStax *Calculus Volume 3*, ch. 4; Khan Academy "Multivariable calculus" (partial derivatives sections); MIT OCW 18.02.

**Suggested topic tags:** `partialDerivatives` (existing).

### Unit 4: Directional Derivatives and Gradients
`unitSlug: directional-derivatives-and-gradients`

**Why it matters for calculus:** The gradient is the multivariable
generalization of "slope," and directly sets up the optimization unit
next.

**Learning objectives:**
- Compute the gradient of a function
- Compute a directional derivative in a given direction
- Interpret the gradient as the direction of steepest ascent
- Find the equation of a tangent plane using the gradient

**Lessons:**
1. *The Gradient Vector* (25 min)
2. *Directional Derivatives* (25 min)
3. *Tangent Planes and Normal Lines* (25 min)

**Free resources:** Paul's Online Math Notes, Calculus III — "Partial Derivatives" chapter (Gradient, Directional Derivative sections); OpenStax *Calculus Volume 3*, ch. 4; MIT OCW 18.02.

**Suggested topic tags:** propose new: `directionalDerivativesAndGradients`.

### Unit 5: Applications of Partial Derivatives — Optimization
`unitSlug: multivariable-optimization`

**Why it matters for calculus:** The multivariable version of Calculus
I's optimization unit, including Lagrange multipliers for constrained
problems.

**Learning objectives:**
- Find and classify local extrema of a multivariable function using the second derivative test
- Solve constrained optimization problems using Lagrange multipliers
- Find absolute extrema of a function on a closed region

**Lessons:**
1. *Local Extrema and the Second Derivative Test (Multivariable)* (25 min)
2. *Lagrange Multipliers* (30 min)
3. *Absolute Extrema on a Closed Region* (25 min)

**Free resources:** Paul's Online Math Notes, Calculus III — "Applications of Partial Derivatives" chapter; OpenStax *Calculus Volume 3*, ch. 4; MIT OCW 18.02.

**Suggested topic tags:** propose new: `multivariableOptimization`, `lagrangeMultipliers`.

### Unit 6: Multiple Integrals — Double Integrals
`unitSlug: double-integrals`

**Why it matters for calculus:** The 2D extension of the definite
integral — volume under a surface instead of area under a curve.

**Learning objectives:**
- Set up and evaluate a double integral over a rectangular region
- Set up and evaluate a double integral over a general (non-rectangular) region
- Reverse the order of integration
- Use a double integral to find volume and area

**Lessons:**
1. *Double Integrals over Rectangular Regions* (25 min)
2. *Double Integrals over General Regions* (30 min)
3. *Reversing the Order of Integration* (20 min)
4. *Volume and Area Using Double Integrals* (20 min)

**Free resources:** Paul's Online Math Notes, Calculus III — "Multiple Integrals" chapter; OpenStax *Calculus Volume 3*, ch. 5; MIT OCW 18.02.

**Suggested topic tags:** `multipleIntegrals` (existing).

### Unit 7: Multiple Integrals — Triple Integrals
`unitSlug: triple-integrals`

**Why it matters for calculus:** Extends double integrals one more
dimension — sets up the coordinate-system change of variables in the next
unit.

**Learning objectives:**
- Set up and evaluate a triple integral over a rectangular box
- Set up and evaluate a triple integral over a general solid region
- Use a triple integral to find volume and mass of a solid with variable density

**Lessons:**
1. *Triple Integrals over Boxes* (25 min)
2. *Triple Integrals over General Regions* (30 min)
3. *Applications: Volume and Mass* (20 min)

**Free resources:** Paul's Online Math Notes, Calculus III — "Multiple Integrals" chapter (Triple Integral sections); OpenStax *Calculus Volume 3*, ch. 5; MIT OCW 18.02.

**Suggested topic tags:** `multipleIntegrals` (existing).

### Unit 8: Change of Variables — Polar, Cylindrical, and Spherical Coordinates
`unitSlug: change-of-variables`

**Why it matters for calculus:** Many double/triple integrals are only
tractable after switching coordinate systems — this is where the polar
work from Calculus II gets extended into 3D.

**Learning objectives:**
- Convert and evaluate double integrals in polar coordinates
- Convert and evaluate triple integrals in cylindrical coordinates
- Convert and evaluate triple integrals in spherical coordinates
- Compute and apply the Jacobian for a general change of variables (introductory level)

**Lessons:**
1. *Double Integrals in Polar Coordinates* (25 min)
2. *Triple Integrals in Cylindrical Coordinates* (25 min)
3. *Triple Integrals in Spherical Coordinates* (30 min)
4. *The Jacobian and General Change of Variables* — a light introductory treatment; full rigor depends on determinants from Calculus V, so keep this conceptual if Calculus V hasn't been reached yet. (25 min)

**Free resources:** Paul's Online Math Notes, Calculus III — "Multiple Integrals" chapter (Coordinate system sections); OpenStax *Calculus Volume 3*, ch. 5; MIT OCW 18.02.

**Suggested topic tags:** `multipleIntegrals` (existing).

### Unit 9: Vector Fields, Line Integrals, and Green's Theorem
`unitSlug: vector-fields-and-line-integrals`

**Why it matters for calculus:** The beginning of "vector calculus"
proper — line integrals generalize the definite integral to a path
through space, with direct physics interpretations (work done by a force
field).

**Learning objectives:**
- Sketch and interpret a vector field
- Set up and evaluate line integrals of scalar functions and vector fields
- Determine whether a vector field is conservative and find its potential function
- State and apply Green's Theorem

**Lessons:**
1. *Vector Fields* (20 min)
2. *Line Integrals of Scalar Functions* (25 min)
3. *Line Integrals of Vector Fields and Work* (25 min)
4. *Conservative Vector Fields and the Fundamental Theorem of Line Integrals* (25 min)
5. *Green's Theorem* (30 min)

**Free resources:** Paul's Online Math Notes, Calculus III — "Line Integrals" chapter; OpenStax *Calculus Volume 3*, ch. 6; MIT OCW 18.02.

**Suggested topic tags:** `vectorCalculus` (existing).

### Unit 10: Surface Integrals, Divergence, and Stokes' Theorem (Introduction)
`unitSlug: surface-integrals-and-stokes-theorem`

**Why it matters for calculus:** The capstone of the entire calculus
sequence — the 3D generalizations of the Fundamental Theorem of Calculus
(Divergence Theorem, Stokes' Theorem) that tie every integral theorem in
this course together.

**Learning objectives:**
- Set up and evaluate surface integrals
- Compute divergence and curl of a vector field
- State and apply the Divergence Theorem
- State and apply Stokes' Theorem (introductory level)

**Lessons:**
1. *Parametric Surfaces and Surface Area* (25 min)
2. *Surface Integrals* (30 min)
3. *Divergence and Curl* (25 min)
4. *The Divergence Theorem* (25 min)
5. *Stokes' Theorem (Introduction)* (25 min)

**Free resources:** Paul's Online Math Notes, Calculus III — "Surface Integrals" chapter; OpenStax *Calculus Volume 3*, ch. 6; MIT OCW 18.02 (later units).

**Suggested topic tags:** `vectorCalculus` (existing).

## Suggested assessment structure

- **Unit quizzes** (6-10 questions each).
- **Course-end exam** (35-40 questions): should include at least one
  full multi-step problem per major theorem (Green's, Divergence,
  Stokes') since these theorems are as much about knowing *when* to apply
  them as computing with them.
