# Calculus V: Linear Algebra Foundations

**Proposed course slug:** `calculus5` (unchanged)

## Purpose

Linear algebra isn't calculus in the traditional sense — there's no
derivative or integral in most of this course — but it's grouped here
because of how directly it supports Calculus III (the Jacobian, quadric
surfaces as level sets) and Calculus IV (solving systems of differential
equations via eigenvalues). It's the vector-and-matrix toolkit the rest
of applied math assumes.

## Why it matters for calculus

Calculus III's change-of-variables Jacobian is a determinant. Calculus
IV's systems-of-differential-equations unit is solved with eigenvalues
and eigenvectors. Beyond this platform's current scope, linear algebra is
also the direct foundation for machine learning, computer graphics, and
most of physics and engineering — reasonable motivation on its own if
calculus applications alone don't sell it.

## Prerequisites

Calculus II (Calculus III is a helpful companion — see the cross-
references to it throughout — but not a strict prerequisite; this course
can run in parallel with Calculus III if preferred)

## Units

### Unit 1: Vectors and Matrices
`unitSlug: vectors-and-matrices` (existing slug)

**Why it matters for calculus:** Establishes matrix notation and basic
operations — the working language for the rest of the course, and for
representing the systems in Calculus IV's systems unit.

**Learning objectives:**
- Represent a system of linear equations as a matrix
- Perform matrix addition, scalar multiplication, and matrix multiplication
- Identify the identity matrix and understand its role

**Lessons:**
1. *Introduction to Matrices* — notation, dimensions, special matrices. (20 min)
2. *Matrix Addition and Scalar Multiplication* (15 min)
3. *Matrix Multiplication* — including why it isn't commutative. (25 min)
4. *Representing Systems of Equations as Matrices* (20 min)

**Free resources:** Paul's Online Math Notes doesn't cover linear algebra directly — this course leans on MIT OCW 18.06 (Gilbert Strang's classic course) and Khan Academy "Linear algebra" throughout; 3Blue1Brown's "Essence of Linear Algebra" (YouTube) is excellent for building intuition alongside these two.

**Suggested topic tags:** `linearAlgebraFoundations` (existing).

### Unit 2: Row Reduction and Solving Systems
`unitSlug: row-reduction`

**Why it matters for calculus:** The systematic method for solving any
size system of linear equations — a direct scale-up of the substitution/
elimination methods from the Algebra course.

**Learning objectives:**
- Perform row operations to reduce a matrix to row echelon form and reduced row echelon form
- Solve a system of linear equations using Gaussian elimination
- Classify a system as having one, no, or infinitely many solutions from its reduced form

**Lessons:**
1. *Row Operations and Row Echelon Form* (25 min)
2. *Reduced Row Echelon Form and Gaussian Elimination* (25 min)
3. *Classifying Solutions: Unique, None, or Infinite* (20 min)

**Free resources:** MIT OCW 18.06 (early lectures); Khan Academy "Linear algebra" (systems of equations sections).

**Suggested topic tags:** propose new: `rowReductionAndGaussianElimination`.

### Unit 3: Determinants
`unitSlug: determinants-and-inverses` (existing slug — this unit covers the determinant half)

**Why it matters for calculus:** Directly used as the Jacobian in
Calculus III's change-of-variables unit, and in testing whether a matrix
is invertible.

**Learning objectives:**
- Compute the determinant of 2x2 and 3x3 matrices (and larger via cofactor expansion)
- Use properties of determinants to simplify computation
- Interpret the determinant geometrically (area/volume scaling factor) — direct tie-in to the Jacobian

**Lessons:**
1. *Determinants of 2x2 and 3x3 Matrices* (25 min)
2. *Cofactor Expansion for Larger Matrices* (25 min)
3. *Properties of Determinants* (20 min)
4. *Geometric Meaning of the Determinant* — area/volume scaling, connecting forward to the Jacobian in Calculus III. (20 min)

**Free resources:** MIT OCW 18.06; Khan Academy "Linear algebra" (determinants unit); 3Blue1Brown's determinant video specifically for the geometric-meaning lesson.

**Suggested topic tags:** propose new: `determinants`.

### Unit 4: Matrix Inverses
`unitSlug: determinants-and-inverses` (existing slug — this unit covers the inverse half)

**Why it matters for calculus:** Solving a matrix equation Ax = b via the
inverse is the linear-algebra parallel to "divide both sides" — needed
fluency before eigenvalues make sense.

**Learning objectives:**
- Determine whether a matrix is invertible
- Compute the inverse of a matrix using row reduction and using the adjugate/determinant method
- Solve a matrix equation using the inverse

**Lessons:**
1. *Invertibility and the Identity Matrix* (20 min)
2. *Finding an Inverse by Row Reduction* (25 min)
3. *Finding an Inverse Using the Adjugate and Determinant* (20 min)
4. *Solving Matrix Equations* (20 min)

**Free resources:** MIT OCW 18.06; Khan Academy "Linear algebra" (inverse matrices unit).

**Suggested topic tags:** propose new: `matrixInverses`.

### Unit 5: Vector Spaces and Subspaces
`unitSlug: vector-spaces` (existing slug)

**Why it matters for calculus:** The abstraction that makes "linear
algebra" general-purpose rather than just about grids of numbers —
necessary vocabulary for stating what an eigenvector actually is.

**Learning objectives:**
- Determine whether a set with defined operations is a vector space
- Determine whether a subset is a subspace
- Identify the null space and column space of a matrix

**Lessons:**
1. *Vector Spaces: Definition and Examples* (25 min)
2. *Subspaces* (20 min)
3. *The Null Space and Column Space of a Matrix* (25 min)

**Free resources:** MIT OCW 18.06; Khan Academy "Linear algebra" (vector spaces unit) — this is generally the most abstract unit in the course, so expect to lean more on worked examples than definitions alone when writing lessons.

**Suggested topic tags:** propose new: `vectorSpacesAndSubspaces`.

### Unit 6: Linear Independence, Basis, and Dimension
`unitSlug: linear-independence-basis-dimension`

**Why it matters for calculus:** Establishes "how many independent
directions" a space has — the concept behind why a system might have
infinitely many solutions (from Unit 2) explained properly.

**Learning objectives:**
- Determine whether a set of vectors is linearly independent
- Find a basis for a vector space or subspace
- Determine the dimension of a vector space

**Lessons:**
1. *Linear Independence* (25 min)
2. *Basis of a Vector Space* (25 min)
3. *Dimension* (20 min)

**Free resources:** MIT OCW 18.06; Khan Academy "Linear algebra" (linear independence, basis units).

**Suggested topic tags:** propose new: `linearIndependenceBasisAndDimension`.

### Unit 7: Linear Transformations
`unitSlug: linear-transformations`

**Why it matters for calculus:** A matrix isn't just a grid of numbers —
it's a function that transforms vectors. This reframing is what makes
eigenvalues ("directions the transformation doesn't rotate") intuitive
next unit.

**Learning objectives:**
- Determine whether a function is a linear transformation
- Find the matrix representation of a linear transformation
- Interpret linear transformations geometrically (rotation, scaling, reflection, projection)

**Lessons:**
1. *Linear Transformations: Definition and Matrix Representation* (25 min)
2. *Geometric Linear Transformations* — rotation, scaling, reflection, projection matrices. (25 min)
3. *Composition of Linear Transformations* (20 min)

**Free resources:** MIT OCW 18.06; 3Blue1Brown's "Essence of Linear Algebra" (the linear transformations episodes are exceptional for this specific unit); Khan Academy "Linear algebra" (linear transformations unit).

**Suggested topic tags:** propose new: `linearTransformations`.

### Unit 8: Eigenvalues and Eigenvectors
`unitSlug: eigenvalues-and-eigenvectors` (existing slug)

**Why it matters for calculus:** The single most important payoff of
this entire course for calculus — this is exactly the tool Calculus IV
uses to solve systems of differential equations.

**Learning objectives:**
- Find the eigenvalues of a matrix using the characteristic equation
- Find the eigenvectors corresponding to each eigenvalue
- Interpret eigenvalues/eigenvectors geometrically

**Lessons:**
1. *The Characteristic Equation and Finding Eigenvalues* (30 min)
2. *Finding Eigenvectors* (25 min)
3. *Geometric Interpretation of Eigenvalues and Eigenvectors* (20 min)
4. *Eigenvalues and Eigenvectors of Special Matrices* — symmetric matrices, repeated eigenvalues. (20 min)

**Free resources:** MIT OCW 18.06; 3Blue1Brown's eigenvalues/eigenvectors episode; Khan Academy "Linear algebra" (eigenvalues unit).

**Suggested topic tags:** propose new: `eigenvaluesAndEigenvectors` (note: `linearAlgebraFoundations` already exists as the course-level tag; this is a more specific sub-tag worth adding given how central this unit is).

### Unit 9: Diagonalization
`unitSlug: diagonalization`

**Why it matters for calculus:** Diagonalizing a matrix is what actually
makes solving a system of differential equations (Calculus IV, Unit 9)
tractable by hand.

**Learning objectives:**
- Determine whether a matrix is diagonalizable
- Diagonalize a matrix using its eigenvalues and eigenvectors
- Use diagonalization to compute matrix powers efficiently

**Lessons:**
1. *Diagonalizability* (25 min)
2. *Diagonalizing a Matrix* (25 min)
3. *Applications: Matrix Powers* (20 min)

**Free resources:** MIT OCW 18.06; Khan Academy "Linear algebra" (diagonalization unit).

**Suggested topic tags:** propose new: `diagonalization`.

### Unit 10: Applications
`unitSlug: linear-algebra-applications`

**Why it matters for calculus:** Closes the loop back to Calculus III and
IV explicitly, plus a couple of applications outside calculus so the
course doesn't feel purely abstract.

**Learning objectives:**
- Apply eigenvalues/eigenvectors to solve a system of differential equations (direct callback to Calculus IV)
- Explain the Jacobian's role in Calculus III's change of variables using determinants from this course
- Describe, at a conceptual level, how these tools extend to computer graphics or data analysis (e.g., transformations, dimensionality reduction)

**Lessons:**
1. *Solving Systems of Differential Equations, Revisited* — the direct Calculus IV connection, worked fully this time. (30 min)
2. *The Jacobian, Revisited* — the direct Calculus III connection. (20 min)
3. *A Broader Look: Where Linear Algebra Shows Up* — brief, conceptual survey (graphics, data, optimization) to close the course. (20 min)

**Free resources:** MIT OCW 18.06 (applications lectures); Paul's Online Math Notes, Differential Equations — "Systems of DE" chapter, revisited.

**Suggested topic tags:** `linearAlgebraFoundations` (existing), `ordinaryDifferentialEquations` (existing, cross-referenced).

## Suggested assessment structure

- **Unit quizzes** (5-8 questions each).
- **Course-end exam** (25-30 questions): should include at least one
  problem that explicitly connects back to Calculus III or IV (e.g., "use
  eigenvalues to solve this system of differential equations") rather
  than testing linear algebra in isolation, since the whole point of this
  course's placement here is that connection.
