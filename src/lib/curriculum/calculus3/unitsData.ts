import { CourseExam, Unit, UnitQuiz } from "@/lib/types/curriculumTypes";

// Calculus III
// See docs/curriculum/06-calculus-3.md for the full plan.
// Each unit below starts as a structural stub (lessons: []) and gets filled
// in with real content following the pattern already used in
// algebraCalcFocused/unitsData.ts.

export const calculus3Units: Unit[] = [
  {
    unitSlug: "vectors-and-3d-space",
    unitTitle: "Vectors and the Geometry of Space",
    unitDescription: "Vectors in three dimensions, the dot and cross products, and lines, planes, and quadric surfaces.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Vectors and the Geometry of Space",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc3-vectors-and-3d-space-quiz-p1",
          topicTag: "vectorsAndThreeDSpace",
          promptText: "Find the vector from A(1,-2,4) to B(3,1,-2).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "<2,3,-6>",
          acceptableAnswerVariants: ["(2,3,-6)", "2,3,-6"],
          stepByStepExplanation:
            "Subtract B minus A component by component: (3-1, 1-(-2), -2-4) = (2, 3, -6). So the vector is <2,3,-6>.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc3-vectors-and-3d-space-quiz-p2",
          topicTag: "vectorsAndThreeDSpace",
          promptText: "Find the magnitude of the vector <6,-8,0>.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "10",
          stepByStepExplanation: "Magnitude is the square root of 6^2+(-8)^2+0^2 = 36+64 = 100, and the square root of 100 is 10.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc3-vectors-and-3d-space-quiz-p3",
          topicTag: "vectorsAndThreeDSpace",
          promptText: "Find the dot product of <2,3,-1> and <-1,4,2>.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "8",
          stepByStepExplanation: "2(-1) + 3(4) + (-1)(2) = -2 + 12 - 2 = 8.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc3-vectors-and-3d-space-quiz-p4",
          topicTag: "vectorsAndThreeDSpace",
          promptText: "Find the cross product of <1,0,2> and <2,1,0>.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "<-2,4,1>",
          acceptableAnswerVariants: ["(-2,4,1)"],
          stepByStepExplanation:
            "First component: (0)(0)-(2)(1)=-2. Second component: (2)(2)-(1)(0)=4. Third component: (1)(1)-(0)(2)=1. Result: <-2,4,1>. Check: <-2,4,1>·<1,0,2> = -2+0+2=0 and <-2,4,1>·<2,1,0> = -4+4+0=0, confirming it's orthogonal to both.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc3-vectors-and-3d-space-quiz-p5",
          topicTag: "vectorsAndThreeDSpace",
          promptText: "Find the equation of the plane through (2,0,-1) with normal vector <3,-1,2>.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "3x-y+2z=4",
          acceptableAnswerVariants: ["3x - y + 2z = 4"],
          stepByStepExplanation:
            "3(x-2) - 1(y-0) + 2(z-(-1)) = 0. Expand: 3x-6-y+2z+2=0, so 3x-y+2z-4=0, i.e. 3x-y+2z=4.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc3-vectors-and-3d-space-quiz-p6",
          topicTag: "vectorsAndThreeDSpace",
          promptText: "What type of quadric surface is described by x^2/9 + y^2/9 - z^2/4 = 1?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "hyperboloid of one sheet",
          acceptableAnswerVariants: ["hyperboloid (one sheet)"],
          stepByStepExplanation:
            "This matches the standard form x^2/a^2+y^2/b^2-z^2/c^2=1, with two positive squared terms and one negative squared term equal to 1 - a hyperboloid of one sheet (a connected, waist-like surface centered on the z-axis).",
          difficultyLevel: 3,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "vectors-in-three-dimensions",
        lessonTitle: "Vectors in Three Dimensions",
        estimatedMinutes: 25,
        topicTag: "vectorsAndThreeDSpace",
        learningGoals: [
          "Represent a vector in three dimensions using component form",
          "Add, subtract, and scale 3D vectors",
          "Compute the magnitude of a 3D vector and find a unit vector in a given direction",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "One more coordinate, same ideas",
            bodyText:
              "Everything you already know about 2D vectors carries straight over into three dimensions - you just carry a third component along for the ride. A vector from point P to point Q is still found by subtracting: Q minus P, component by component. The vector from A to B is written vector AB, and its components are (B's x minus A's x, B's y minus A's y, B's z minus A's z). Order matters: AB points from A toward B, and BA is its exact opposite.",
          },
          {
            blockType: "keyFormula",
            headingText: "Magnitude and the distance formula",
            bodyText:
              "The magnitude (length) of a vector v = <a,b,c> is the square root of the sum of the squares of its components. This is exactly the 3D distance formula in disguise: it's the straight-line distance the vector's arrow spans. A unit vector (magnitude 1) in the same direction as v is found by dividing v by its own magnitude.",
            mathExpression: "|\\mathbf{v}| = \\sqrt{a^2+b^2+c^2}, \\qquad \\hat{\\mathbf{v}} = \\dfrac{\\mathbf{v}}{|\\mathbf{v}|}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find the vector from P(1,2,3) to Q(4,6,8), and its magnitude. Subtract Q minus P component by component: (4-1, 6-2, 8-3) = <3,4,5>. The magnitude is the square root of 3^2+4^2+5^2 = 9+16+25 = 50, so the magnitude is the square root of 50, which simplifies to 5 times the square root of 2.",
            mathExpression: "\\overrightarrow{PQ} = \\langle 3,4,5 \\rangle, \\qquad |\\overrightarrow{PQ}| = \\sqrt{50} = 5\\sqrt{2}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Computing the vector from P to Q as P minus Q instead of Q minus P. That gives a vector pointing in exactly the opposite direction - correct magnitude, wrong direction, which matters enormously once you start using vectors for motion, normals, or forces.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u1-l1-p1",
            topicTag: "vectorsAndThreeDSpace",
            promptText: "Find the vector from A(2,-1,3) to B(5,4,-2).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "<3,5,-5>",
            acceptableAnswerVariants: ["(3,5,-5)", "3,5,-5", "<3, 5, -5>"],
            stepByStepExplanation:
              "Subtract B minus A component by component: (5-2, 4-(-1), -2-3) = (3, 5, -5). So the vector is <3,5,-5>.",
            difficultyLevel: 1,
          },
          {
            problemId: "c3-u1-l1-p2",
            topicTag: "vectorsAndThreeDSpace",
            promptText: "Find the magnitude of the vector <3,4,12>.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "13",
            stepByStepExplanation:
              "Magnitude is the square root of 3^2+4^2+12^2 = 9+16+144 = 169, and the square root of 169 is 13.",
            difficultyLevel: 2,
          },
          {
            problemId: "c3-u1-l1-p3",
            topicTag: "vectorsAndThreeDSpace",
            promptText: "Find the unit vector in the direction of v = <1,-2,2>.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "<1/3,-2/3,2/3>",
            acceptableAnswerVariants: ["(1/3, -2/3, 2/3)"],
            stepByStepExplanation:
              "The magnitude of v is the square root of 1+4+4 = 9, which is 3. Dividing each component by 3 gives the unit vector <1/3, -2/3, 2/3>.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: 3-Dimensional Space",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/3DSpace.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 3, Chapter 2: Vectors in Space",
            resourceUrl: "https://openstax.org/books/calculus-volume-3/pages/2-introduction",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "the-dot-product-and-cross-product",
        lessonTitle: "The Dot Product and Cross Product",
        estimatedMinutes: 30,
        topicTag: "vectorsAndThreeDSpace",
        learningGoals: [
          "Compute the dot product of two vectors and use it to find the angle between them",
          "Compute the cross product of two vectors",
          "Use the cross product to find the area of a parallelogram and a vector normal to two given vectors",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Two very different kinds of multiplication",
            bodyText:
              "There is no single 'vector times vector.' The dot product combines two vectors into a single number (a scalar) that measures how much they point in the same direction. The cross product combines two vectors into a brand new vector that is perpendicular to both of the originals. They answer completely different questions, and mixing them up - expecting a vector from a dot product, or a number from a cross product - is the fastest way to get lost in this unit.",
          },
          {
            blockType: "keyFormula",
            headingText: "Dot product and cross product formulas",
            bodyText:
              "For a = <a1,a2,a3> and b = <b1,b2,b3>: the dot product a·b = a1*b1 + a2*b2 + a3*b3, and it equals |a||b|cos(theta), where theta is the angle between them. The cross product a x b is the vector <a2*b3 - a3*b2, a3*b1 - a1*b3, a1*b2 - a2*b1>, and its magnitude |a x b| equals |a||b|sin(theta), which is exactly the area of the parallelogram spanned by a and b.",
            mathExpression:
              "\\mathbf{a}\\cdot\\mathbf{b} = a_1b_1+a_2b_2+a_3b_3, \\qquad \\mathbf{a}\\times\\mathbf{b} = \\langle a_2b_3-a_3b_2,\\ a_3b_1-a_1b_3,\\ a_1b_2-a_2b_1 \\rangle",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: dot product and angle",
            bodyText:
              "Find the dot product of a = <1,2,3> and b = <4,-5,6>. Multiply matching components and add: 1*4 + 2*(-5) + 3*6 = 4 - 10 + 18 = 12. Since the dot product is positive, the angle between them is acute (less than 90 degrees).",
            mathExpression: "\\langle 1,2,3\\rangle \\cdot \\langle 4,-5,6\\rangle = 4-10+18 = 12",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: cross product",
            bodyText:
              "Find the cross product of a = <2,1,-1> and b = <-3,4,1>. First component: a2*b3 - a3*b2 = (1)(1) - (-1)(4) = 1+4 = 5. Second component: a3*b1 - a1*b3 = (-1)(-3) - (2)(1) = 3-2 = 1. Third component: a1*b2 - a2*b1 = (2)(4) - (1)(-3) = 8+3 = 11. So a x b = <5,1,11>. As a check, this result should be orthogonal to both a and b - and indeed <5,1,11>·<2,1,-1> = 10+1-11 = 0.",
            mathExpression: "\\langle 2,1,-1\\rangle \\times \\langle -3,4,1\\rangle = \\langle 5,1,11\\rangle",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Mixing up the two results: reporting a single number when a cross product (a vector) was asked for, or reporting a vector when a dot product (a scalar) was asked for. A second common slip is dropping the negative sign on the middle component of the cross product - the pattern is (+, -, +) when you expand it as a determinant, and skipping that sign flip produces a vector that is not actually perpendicular to the originals.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u1-l2-p1",
            topicTag: "vectorsAndThreeDSpace",
            promptText: "Find the dot product of <2,-1,3> and <1,4,-2>.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "-8",
            stepByStepExplanation: "2(1) + (-1)(4) + 3(-2) = 2 - 4 - 6 = -8.",
            difficultyLevel: 1,
          },
          {
            problemId: "c3-u1-l2-p2",
            topicTag: "vectorsAndThreeDSpace",
            promptText: "Find the cross product of <1,2,0> and <0,1,3>.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "<6,-3,1>",
            acceptableAnswerVariants: ["(6,-3,1)", "6,-3,1"],
            stepByStepExplanation:
              "First component: (2)(3)-(0)(1)=6. Second component: (0)(0)-(1)(3)=-3. Third component: (1)(1)-(2)(0)=1. Result: <6,-3,1>.",
            difficultyLevel: 3,
          },
          {
            problemId: "c3-u1-l2-p3",
            topicTag: "vectorsAndThreeDSpace",
            promptText: "Find the area of the parallelogram spanned by the vectors <1,0,0> and <0,1,1>.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "sqrt(2)",
            acceptableAnswerVariants: ["√2", "1.41", "1.414"],
            stepByStepExplanation:
              "Their cross product is <(0)(1)-(0)(1), (0)(0)-(1)(1), (1)(1)-(0)(0)> = <0,-1,1>. Its magnitude is the square root of 0+1+1 = 2, so the area of the parallelogram is the square root of 2.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Dot Product",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/DotProduct.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Paul's Online Math Notes: Cross Product",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/CrossProduct.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.02: Multivariable Calculus",
            resourceUrl: "https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "lines-and-planes-in-three-dimensions",
        lessonTitle: "Lines and Planes in Three Dimensions",
        estimatedMinutes: 25,
        topicTag: "vectorsAndThreeDSpace",
        learningGoals: [
          "Write parametric equations for a line given a point and a direction vector",
          "Find the equation of a plane given a point and a normal vector",
          "Find a normal vector to a plane using the cross product of two vectors that lie in it",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "A point plus a direction (or a normal) is all you need",
            bodyText:
              "A line in space is completely determined by one point on it and a direction vector telling you which way it runs. A plane is completely determined by one point on it and a normal vector - a vector perpendicular to the entire plane. Both ideas describe an infinite object using just a finite amount of information: a starting point, and a vector.",
          },
          {
            blockType: "keyFormula",
            headingText: "Line and plane equations",
            bodyText:
              "Line through (x0,y0,z0) with direction vector <a,b,c>: x = x0+at, y = y0+bt, z = z0+ct. Plane through (x0,y0,z0) with normal vector <a,b,c>: a(x-x0) + b(y-y0) + c(z-z0) = 0, which simplifies to ax+by+cz = d for some constant d.",
            mathExpression:
              "\\text{line: } \\langle x_0+at,\\, y_0+bt,\\, z_0+ct\\rangle \\qquad \\text{plane: } a(x-x_0)+b(y-y_0)+c(z-z_0)=0",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: plane through three points",
            bodyText:
              "Find the equation of the plane through A(1,0,0), B(0,1,0), and C(0,0,1). First build two vectors that lie in the plane: AB = <-1,1,0> and AC = <-1,0,1>. The normal vector is their cross product: first component (1)(1)-(0)(0)=1, second component (0)(-1)-(-1)(1)=1, third component (-1)(0)-(1)(-1)=1. So the normal is <1,1,1>. Using point A(1,0,0): 1(x-1)+1(y-0)+1(z-0)=0, which simplifies to x+y+z=1.",
            mathExpression: "x+y+z=1",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Trying to read a plane's normal vector directly off of two vectors lying in the plane, instead of taking their cross product first. Two in-plane vectors are NOT the normal vector themselves - the cross product is the one operation that turns two in-plane directions into the single vector perpendicular to both.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u1-l3-p1",
            topicTag: "vectorsAndThreeDSpace",
            promptText: "Write parametric equations for the line through (0,1,4) with direction vector <2,0,-3>.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "x=2t, y=1, z=4-3t",
            acceptableAnswerVariants: ["x = 2t, y = 1, z = 4 - 3t"],
            stepByStepExplanation:
              "Using x=x0+at, y=y0+bt, z=z0+ct with (x0,y0,z0)=(0,1,4) and direction <2,0,-3>: x=2t, y=1+0t=1, z=4-3t.",
            difficultyLevel: 2,
          },
          {
            problemId: "c3-u1-l3-p2",
            topicTag: "vectorsAndThreeDSpace",
            promptText: "Find the equation of the plane through (1,2,3) with normal vector <2,-1,4>.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "2x-y+4z=12",
            acceptableAnswerVariants: ["2x - y + 4z = 12"],
            stepByStepExplanation:
              "2(x-1) - 1(y-2) + 4(z-3) = 0. Expand: 2x-2-y+2+4z-12=0, so 2x-y+4z-12=0, i.e. 2x-y+4z=12.",
            difficultyLevel: 3,
          },
          {
            problemId: "c3-u1-l3-p3",
            topicTag: "vectorsAndThreeDSpace",
            promptText:
              "Find a normal vector to the plane through the points A(1,1,0), B(1,0,1), and C(0,1,1) using the cross product.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "<-1,-1,-1>",
            acceptableAnswerVariants: ["<1,1,1>", "(-1,-1,-1)", "(1,1,1)"],
            stepByStepExplanation:
              "AB = B-A = <0,-1,1> and AC = C-A = <-1,0,1>. Cross product: first component (-1)(1)-(1)(0)=-1, second component (1)(-1)-(0)(1)=-1, third component (0)(0)-(-1)(-1)=-1. So the normal is <-1,-1,-1> (any nonzero scalar multiple, like <1,1,1>, is also a valid normal vector).",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Equations of Lines",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/EqnsOfLines.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Paul's Online Math Notes: Equations of Planes",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/EqnsOfPlanes.aspx",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "quadric-surfaces",
        lessonTitle: "Quadric Surfaces",
        estimatedMinutes: 25,
        topicTag: "vectorsAndThreeDSpace",
        learningGoals: [
          "Recognize the standard quadric surfaces (ellipsoid, paraboloid, hyperboloid, cone, cylinder) from their equations",
          "Find the trace (cross-section) of a quadric surface in a given plane and identify it as a familiar conic",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "3D shapes built from 2D conics",
            bodyText:
              "A quadric surface is the 3D generalization of a conic section - it's what you get when you take an equation like a circle, ellipse, parabola, or hyperbola and let it live in three variables. Slicing a quadric surface with a flat plane (setting x, y, or z equal to a constant) produces a trace, and that trace is almost always one of the conics you already know from Pre-Calculus.",
          },
          {
            blockType: "keyFormula",
            headingText: "The main quadric surface families",
            bodyText:
              "Ellipsoid: x^2/a^2 + y^2/b^2 + z^2/c^2 = 1 (all traces are ellipses or circles). Elliptic paraboloid: z = x^2/a^2 + y^2/b^2 (a bowl shape; horizontal traces are ellipses, vertical traces are parabolas). Hyperboloid of one sheet: x^2/a^2 + y^2/b^2 - z^2/c^2 = 1 (a connected, waist-like surface). Cone: z^2 = x^2/a^2 + y^2/b^2. Cylinder: any equation missing one variable entirely, like x^2+y^2 = r^2, which extends infinitely along the missing variable's axis.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Identify the surface x^2+y^2-z^2=1. Setting z=0 gives x^2+y^2=1, a circle - so far it looks like a cylinder. But setting z to any other fixed value k gives x^2+y^2 = 1+k^2, which is always a circle whose radius grows as |k| grows. Since the surface widens out as you move away from z=0 in either direction, and stays connected as one piece, this is a hyperboloid of one sheet.",
            mathExpression: "x^2+y^2-z^2=1 \\ \\text{(hyperboloid of one sheet)}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Treating an equation with only two variables present, like x^2+y^2=4, as if it describes a curve. In 3D space, a missing variable means 'no restriction at all' on that variable - so x^2+y^2=4 isn't just a circle, it's an entire cylinder of radius 2 extending infinitely up and down the z-axis.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u1-l4-p1",
            topicTag: "vectorsAndThreeDSpace",
            promptText: "What type of quadric surface is described by z = x^2 + y^2?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "elliptic paraboloid",
            acceptableAnswerVariants: ["paraboloid", "circular paraboloid"],
            stepByStepExplanation:
              "This matches the standard form z = x^2/a^2+y^2/b^2 with a=b=1, so it's an (elliptic, here circular) paraboloid - a bowl opening upward.",
            difficultyLevel: 2,
          },
          {
            problemId: "c3-u1-l4-p2",
            topicTag: "vectorsAndThreeDSpace",
            promptText: "Find the trace of the ellipsoid x^2/4 + y^2/9 + z^2 = 1 in the plane z = 0.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "x^2/4+y^2/9=1",
            acceptableAnswerVariants: ["x^2/4 + y^2/9 = 1 (an ellipse)", "ellipse x^2/4+y^2/9=1"],
            stepByStepExplanation:
              "Setting z=0 in x^2/4+y^2/9+z^2=1 leaves x^2/4+y^2/9=1, an ellipse with semi-axes 2 and 3.",
            difficultyLevel: 2,
          },
          {
            problemId: "c3-u1-l4-p3",
            topicTag: "vectorsAndThreeDSpace",
            promptText: "Identify the surface y^2 + z^2 = 9 (with x missing entirely) in xyz-space.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "cylinder",
            acceptableAnswerVariants: ["circular cylinder of radius 3 along the x-axis"],
            stepByStepExplanation:
              "Since x doesn't appear, every value of x is allowed. For each fixed x, y^2+z^2=9 is a circle of radius 3, so the whole surface is a circular cylinder of radius 3 running parallel to the x-axis.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Quadric Surfaces",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/QuadricSurfaces.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 3, Chapter 2: Cylinders and Quadric Surfaces",
            resourceUrl: "https://openstax.org/books/calculus-volume-3/pages/2-6-quadric-surfaces",
            resourceType: "textbookChapter",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "vector-valued-functions",
    unitTitle: "Vector-Valued Functions and Space Curves",
    unitDescription: "Differentiating and integrating vector-valued functions, and velocity, speed, and acceleration.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Vector-Valued Functions and Space Curves",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc3-vector-valued-functions-quiz-p1",
          topicTag: "vectorValuedFunctions",
          promptText: "For r(t) = <t^2+1, 3t, t-2>, find r(1).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "<2,3,-1>",
          acceptableAnswerVariants: ["(2,3,-1)"],
          stepByStepExplanation: "Substitute t=1 into each component: <1^2+1, 3(1), 1-2> = <2, 3, -1>.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc3-vector-valued-functions-quiz-p2",
          topicTag: "vectorValuedFunctions",
          promptText: "What curve does r(t) = <2cos t, 2sin t, 5> trace out?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "a circle of radius 2 in the plane z=5",
          acceptableAnswerVariants: ["circle radius 2 at height z=5", "circle of radius 2 in the horizontal plane z=5"],
          stepByStepExplanation:
            "The x and y components satisfy x^2+y^2 = 4cos^2t+4sin^2t = 4, so the radius is 2, and z is always 5, so the curve is a circle of radius 2 lying flat in the plane z=5.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc3-vector-valued-functions-quiz-p3",
          topicTag: "vectorValuedFunctions",
          promptText: "Find r'(t) for r(t) = <t^3, cos(2t), e^t>.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "<3t^2,-2sin(2t),e^t>",
          acceptableAnswerVariants: ["(3t^2, -2sin(2t), e^t)"],
          stepByStepExplanation:
            "Differentiate each component: d/dt[t^3]=3t^2, d/dt[cos(2t)]=-2sin(2t) (chain rule), d/dt[e^t]=e^t.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc3-vector-valued-functions-quiz-p4",
          topicTag: "vectorValuedFunctions",
          promptText: "For r(t) = <4t, 3t, 0>, find the speed at any time t.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "5",
          stepByStepExplanation:
            "r'(t) = <4,3,0>, a constant vector. Speed = |r'(t)| = the square root of 16+9 = the square root of 25 = 5, the same for every t.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc3-vector-valued-functions-quiz-p5",
          topicTag: "vectorValuedFunctions",
          promptText: "For r(t) = <t^3, t^2, t>, find the acceleration vector at t=1.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "<6,2,0>",
          acceptableAnswerVariants: ["(6,2,0)"],
          stepByStepExplanation:
            "r'(t) = <3t^2, 2t, 1>. r''(t) = <6t, 2, 0>. At t=1: <6, 2, 0>.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc3-vector-valued-functions-quiz-p6",
          topicTag: "vectorValuedFunctions",
          promptText: "Find the arc length of r(t) = <3t, 0, 4t> from t=0 to t=2.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "10",
          stepByStepExplanation:
            "r'(t) = <3,0,4>, a constant vector with magnitude the square root of 9+16 = 5. Arc length = the integral from 0 to 2 of 5 dt = 10.",
          difficultyLevel: 2,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "vector-valued-functions-and-space-curves",
        lessonTitle: "Vector-Valued Functions and Space Curves",
        estimatedMinutes: 25,
        topicTag: "vectorValuedFunctions",
        learningGoals: [
          "Evaluate a vector-valued function at a given input",
          "Find the domain of a vector-valued function",
          "Describe the curve traced out by a simple vector-valued function",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "A function that outputs a point, not a number",
            bodyText:
              "A vector-valued function r(t) = <f(t), g(t), h(t)> takes in a single number t (often thought of as time) and outputs a point in space - or equivalently, a position vector from the origin to that point. As t sweeps through its domain, the tip of r(t) traces out a curve in three dimensions. This is the direct 3D extension of the parametric curves from Calculus II, just with a third component along for the ride.",
          },
          {
            blockType: "keyFormula",
            headingText: "Domain of a vector-valued function",
            bodyText:
              "The domain of r(t) = <f(t), g(t), h(t)> is the intersection of the domains of f, g, and h - every component has to be defined simultaneously at a given t for r(t) to exist there.",
            mathExpression: "\\mathbf{r}(t) = \\langle f(t), g(t), h(t) \\rangle",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Describe the curve traced by r(t) = <cos t, sin t, t>. The first two components trace a unit circle in the xy-plane as t increases, exactly like 2D polar motion. The third component, z=t, steadily climbs at a constant rate. Combined, the point spirals upward around the z-axis while circling it - this is a helix. At t=0 the point is (1,0,0); at t=pi/2 it's (0,1,pi/2).",
            mathExpression: "\\mathbf{r}(t) = \\langle \\cos t, \\sin t, t \\rangle \\ \\text{(a helix)}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Finding the domain of just one component and assuming it applies to the whole vector-valued function. Every component's restrictions matter at once - if even one component is undefined at a particular t, r(t) is undefined there too, no matter how well-behaved the other components are.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u2-l1-p1",
            topicTag: "vectorValuedFunctions",
            promptText: "For r(t) = <t^2, t-1, 3t>, find r(2).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "<4,1,6>",
            acceptableAnswerVariants: ["(4,1,6)"],
            stepByStepExplanation: "Substitute t=2 into each component: <2^2, 2-1, 3(2)> = <4, 1, 6>.",
            difficultyLevel: 1,
          },
          {
            problemId: "c3-u2-l1-p2",
            topicTag: "vectorValuedFunctions",
            promptText: "What curve does r(t) = <3cos t, 3sin t, 0> trace out?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "a circle of radius 3 in the xy-plane",
            acceptableAnswerVariants: ["circle radius 3", "circle of radius 3 centered at the origin"],
            stepByStepExplanation:
              "The x and y components satisfy x^2+y^2 = 9cos^2t+9sin^2t = 9, and z is always 0, so the curve is a circle of radius 3 lying flat in the xy-plane.",
            difficultyLevel: 1,
          },
          {
            problemId: "c3-u2-l1-p3",
            topicTag: "vectorValuedFunctions",
            promptText: "Find the domain of r(t) = <sqrt(t), ln(t), 1/(t-2)>.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(0,2) union (2,infinity)",
            acceptableAnswerVariants: ["t>0 and t not 2", "0<t<2 or t>2"],
            stepByStepExplanation:
              "sqrt(t) needs t>=0, ln(t) needs t>0 (the stricter condition), and 1/(t-2) needs t not equal to 2. Combining all three: t must be positive and not equal to 2, i.e. (0,2) union (2, infinity).",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Vector Functions",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/VectorFunctions.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 3, Chapter 3: Vector-Valued Functions",
            resourceUrl: "https://openstax.org/books/calculus-volume-3/pages/3-introduction",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "derivatives-and-integrals-of-vector-valued-functions",
        lessonTitle: "Derivatives and Integrals of Vector-Valued Functions",
        estimatedMinutes: 25,
        topicTag: "vectorValuedFunctions",
        learningGoals: [
          "Differentiate a vector-valued function component by component",
          "Integrate a vector-valued function component by component, including the vector constant of integration",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Component by component, every time",
            bodyText:
              "Differentiating or integrating a vector-valued function is refreshingly mechanical: apply the operation to each component separately, using every single-variable rule you already know, and keep the results bundled together as a vector. r'(t) is itself a vector - it points tangent to the curve at that instant, in the direction of increasing t.",
          },
          {
            blockType: "keyFormula",
            headingText: "Componentwise derivative and integral",
            bodyText:
              "r'(t) = <f'(t), g'(t), h'(t)>. The indefinite integral is the integral of each component plus an arbitrary constant VECTOR: the integral of r(t) dt = <the integral of f dt, the integral of g dt, the integral of h dt> + C, where C = <c1,c2,c3> is a constant vector, not a single number.",
            mathExpression: "\\mathbf{r}'(t) = \\langle f'(t), g'(t), h'(t) \\rangle",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: derivative",
            bodyText:
              "Find r'(t) for r(t) = <t^2, sin t, e^(2t)>. Differentiate each piece separately: d/dt[t^2]=2t, d/dt[sin t]=cos t, d/dt[e^(2t)]=2e^(2t). So r'(t) = <2t, cos t, 2e^(2t)>.",
            mathExpression: "\\mathbf{r}'(t) = \\langle 2t,\\ \\cos t,\\ 2e^{2t} \\rangle",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: integral",
            bodyText:
              "Evaluate the definite integral of <2t, 3t^2, 1> dt from t=0 to t=1. Integrate each component: the integral of 2t is t^2, the integral of 3t^2 is t^3, the integral of 1 is t. Evaluating each from 0 to 1 gives <1,1,1>.",
            mathExpression: "\\int_0^1 \\langle 2t, 3t^2, 1\\rangle \\, dt = \\langle 1,1,1\\rangle",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Writing a single scalar +C after integrating a vector-valued function. The constant of integration must itself be a vector, with one independent arbitrary constant for each component - three unknown constants for a 3D vector-valued function, not one.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u2-l2-p1",
            topicTag: "vectorValuedFunctions",
            promptText: "Find r'(t) for r(t) = <3t^2, e^t, 4>.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "<6t,e^t,0>",
            acceptableAnswerVariants: ["(6t, e^t, 0)"],
            stepByStepExplanation: "Differentiate each component: d/dt[3t^2]=6t, d/dt[e^t]=e^t, d/dt[4]=0.",
            difficultyLevel: 1,
          },
          {
            problemId: "c3-u2-l2-p2",
            topicTag: "vectorValuedFunctions",
            promptText: "Find r'(1) for r(t) = <t^3, 2t, ln t>.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "<3,2,1>",
            acceptableAnswerVariants: ["(3,2,1)"],
            stepByStepExplanation:
              "r'(t) = <3t^2, 2, 1/t>. Substituting t=1: <3(1)^2, 2, 1/1> = <3,2,1>.",
            difficultyLevel: 2,
          },
          {
            problemId: "c3-u2-l2-p3",
            topicTag: "vectorValuedFunctions",
            promptText: "Evaluate the definite integral of <2t, 3t^2, 1> dt from t=0 to t=1.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "<1,1,1>",
            acceptableAnswerVariants: ["(1,1,1)"],
            stepByStepExplanation:
              "Antiderivatives are <t^2, t^3, t>. Evaluating from 0 to 1 in each component: <1-0, 1-0, 1-0> = <1,1,1>.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Calculus with Vector Functions",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/VectorFcnsCalculus.aspx",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "velocity-speed-and-acceleration",
        lessonTitle: "Velocity, Speed, and Acceleration",
        estimatedMinutes: 25,
        topicTag: "vectorValuedFunctions",
        learningGoals: [
          "Find the velocity and acceleration vectors of a particle from its position vector",
          "Compute the speed of a particle as the magnitude of its velocity vector",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Position, velocity, acceleration - same chain as Calculus I, now in 3D",
            bodyText:
              "If r(t) is a particle's position, then v(t) = r'(t) is its velocity vector and a(t) = v'(t) = r''(t) is its acceleration vector - exactly the same derivative chain from single-variable motion problems, just with vector outputs now. Speed is a single number: the magnitude of the velocity vector, |v(t)|. Velocity tells you which way and how fast; speed only tells you how fast.",
          },
          {
            blockType: "keyFormula",
            headingText: "Velocity, speed, and acceleration",
            bodyText:
              "v(t) = r'(t). Speed = |v(t)|. a(t) = v'(t) = r''(t).",
            mathExpression: "\\mathbf{v}(t)=\\mathbf{r}'(t), \\quad \\text{speed} = |\\mathbf{v}(t)|, \\quad \\mathbf{a}(t)=\\mathbf{r}''(t)",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "A particle's position is r(t) = <t^2, t^3, 2t>. Find its velocity and speed at t=1, and its acceleration at t=1. Velocity: r'(t) = <2t, 3t^2, 2>, so v(1) = <2,3,2>. Speed: the magnitude of <2,3,2> is the square root of 4+9+4 = 17, so speed = the square root of 17. Acceleration: r''(t) = <2, 6t, 0>, so a(1) = <2,6,0>.",
            mathExpression: "\\mathbf{v}(1)=\\langle 2,3,2\\rangle, \\ \\text{speed}=\\sqrt{17}, \\ \\mathbf{a}(1)=\\langle 2,6,0\\rangle",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Answering 'how fast is the particle moving' with the velocity vector instead of its magnitude, or vice versa - giving a bare number when a direction was actually asked for. Velocity is a vector (direction and magnitude); speed is a scalar (magnitude only).",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u2-l3-p1",
            topicTag: "vectorValuedFunctions",
            promptText: "For r(t) = <t, t^2, t^3>, find the velocity vector at t=2.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "<1,4,12>",
            acceptableAnswerVariants: ["(1,4,12)"],
            stepByStepExplanation: "r'(t) = <1, 2t, 3t^2>. At t=2: <1, 4, 12>.",
            difficultyLevel: 2,
          },
          {
            problemId: "c3-u2-l3-p2",
            topicTag: "vectorValuedFunctions",
            promptText: "For r(t) = <3cos t, 3sin t, 4t>, find the speed at any time t.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "5",
            stepByStepExplanation:
              "r'(t) = <-3sin t, 3cos t, 4>. Speed = square root of (9sin^2t + 9cos^2t + 16) = square root of (9+16) = square root of 25 = 5, constant for all t.",
            difficultyLevel: 3,
          },
          {
            problemId: "c3-u2-l3-p3",
            topicTag: "vectorValuedFunctions",
            promptText: "For r(t) = <t^2, 2t, ln t>, find the acceleration vector at t=1.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "<2,0,-1>",
            acceptableAnswerVariants: ["(2,0,-1)"],
            stepByStepExplanation:
              "r'(t) = <2t, 2, 1/t>. r''(t) = <2, 0, -1/t^2>. At t=1: <2, 0, -1>.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Velocity and Acceleration",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/VelocityAcceleration.aspx",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "arc-length-in-three-dimensions-and-curvature",
        lessonTitle: "Arc Length in Three Dimensions and Curvature",
        estimatedMinutes: 25,
        topicTag: "vectorValuedFunctions",
        learningGoals: [
          "Set up and evaluate the arc length of a space curve",
          "Compute the curvature of a space curve at an introductory level",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Arc length is a speed integral, curvature measures bending",
            bodyText:
              "Arc length in 3D works exactly like arc length in 2D parametric curves: integrate the speed |r'(t)| over the interval of t-values. Curvature is a new idea - it measures how sharply a curve bends at a point, independent of how fast you're tracing it. A straight line has curvature 0 everywhere; a tight circle has large, constant curvature; a gentle circle has small, constant curvature.",
          },
          {
            blockType: "keyFormula",
            headingText: "Arc length and curvature formulas",
            bodyText:
              "Arc length from t=a to t=b: the integral from a to b of |r'(t)| dt. Curvature: kappa = |r'(t) times r''(t)| divided by |r'(t)|^3.",
            mathExpression:
              "L = \\int_a^b |\\mathbf{r}'(t)|\\, dt, \\qquad \\kappa = \\dfrac{|\\mathbf{r}'(t)\\times \\mathbf{r}''(t)|}{|\\mathbf{r}'(t)|^3}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: arc length of a helix",
            bodyText:
              "Find the arc length of r(t) = <cos t, sin t, t> from t=0 to t=2*pi. First, r'(t) = <-sin t, cos t, 1>. Its magnitude is the square root of sin^2t+cos^2t+1 = the square root of 2, a constant. So the arc length is the integral from 0 to 2*pi of the square root of 2 dt, which is 2*pi times the square root of 2.",
            mathExpression: "L = \\int_0^{2\\pi}\\sqrt{2}\\,dt = 2\\pi\\sqrt{2}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: curvature of the same helix",
            bodyText:
              "Find the curvature of r(t) = <cos t, sin t, t>. We already have r'(t) = <-sin t, cos t, 1> with magnitude the square root of 2. Also r''(t) = <-cos t, -sin t, 0>. Their cross product works out to <sin t, -cos t, 1> (each component built from the standard cross-product pattern), which has magnitude the square root of sin^2t+cos^2t+1 = the square root of 2 as well. So kappa = (square root of 2) divided by (square root of 2)^3 = (square root of 2)/(2*square root of 2) = 1/2 - a constant curvature, which makes sense since a helix bends the same amount everywhere along its length.",
            mathExpression: "\\kappa = \\dfrac{\\sqrt2}{(\\sqrt2)^3} = \\dfrac12",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Forgetting to take the square root when computing |r'(t)| in the arc length integral - integrating the squared speed (r'(t) dotted with itself) instead of its square root gives a completely different, and wrong, quantity.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u2-l4-p1",
            topicTag: "vectorValuedFunctions",
            promptText: "Find the arc length of r(t) = <3t, 4t, 0> from t=0 to t=2.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "10",
            stepByStepExplanation:
              "r'(t) = <3,4,0>, a constant vector with magnitude the square root of 9+16 = 5. Arc length = the integral from 0 to 2 of 5 dt = 10.",
            difficultyLevel: 2,
          },
          {
            problemId: "c3-u2-l4-p2",
            topicTag: "vectorValuedFunctions",
            promptText: "Find |r'(1)| for r(t) = <t, t^2, 0> (the speed used inside the arc length integrand).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "sqrt(5)",
            acceptableAnswerVariants: ["√5", "2.24"],
            stepByStepExplanation:
              "r'(t) = <1, 2t, 0>. At t=1: <1,2,0>, with magnitude the square root of 1+4 = 5.",
            difficultyLevel: 2,
          },
          {
            problemId: "c3-u2-l4-p3",
            topicTag: "vectorValuedFunctions",
            promptText: "Find the arc length of r(t) = <e^t, e^(-t), t*sqrt(2)> from t=0 to t=1.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "e-1/e",
            acceptableAnswerVariants: ["e - 1/e", "e-e^-1"],
            stepByStepExplanation:
              "r'(t) = <e^t, -e^(-t), sqrt(2)>. Its magnitude squared is e^(2t) + e^(-2t) + 2, and since (e^t+e^-t)^2 = e^(2t)+2+e^(-2t), the magnitude is exactly e^t + e^(-t). The arc length is the integral from 0 to 1 of (e^t + e^(-t)) dt, which evaluates to (e - e^(-1)) - (1-1) = e - 1/e.",
            difficultyLevel: 5,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Arc Length with Vector Functions",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/VectorArcLength.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.02: Multivariable Calculus",
            resourceUrl: "https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/",
            resourceType: "videoLesson",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "partial-derivatives",
    unitTitle: "Partial Derivatives",
    unitDescription: "First- and higher-order partial derivatives, the multivariable chain rule, and implicit differentiation.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Partial Derivatives",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc3-partial-derivatives-quiz-p1",
          topicTag: "partialDerivatives",
          promptText: "Find the domain restriction for f(x,y) = sqrt(16 - x^2 - y^2).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "x^2+y^2<=16",
          acceptableAnswerVariants: ["x^2 + y^2 <= 16 (a disk of radius 4)"],
          stepByStepExplanation:
            "The expression under the square root must be non-negative: 16 - x^2 - y^2 >= 0, which rearranges to x^2+y^2 <= 16, a disk of radius 4 centered at the origin.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc3-partial-derivatives-quiz-p2",
          topicTag: "partialDerivatives",
          promptText: "For f(x,y) = x^3*y^4, find f_x.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "3x^2y^4",
          stepByStepExplanation: "Treating y as constant, d/dx[x^3*y^4] = 3x^2*y^4.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc3-partial-derivatives-quiz-p3",
          topicTag: "partialDerivatives",
          promptText: "For f(x,y) = x^3*y^4, find f_y.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "4x^3y^3",
          stepByStepExplanation: "Treating x as constant, d/dy[x^3*y^4] = 4x^3*y^3.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc3-partial-derivatives-quiz-p4",
          topicTag: "partialDerivatives",
          promptText: "For f(x,y) = x^3*y^2, find f_xy.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "6x^2y",
          stepByStepExplanation: "f_x = 3x^2*y^2. Differentiating with respect to y: f_xy = 3x^2 * 2y = 6x^2*y.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc3-partial-derivatives-quiz-p5",
          topicTag: "partialDerivatives",
          promptText: "Let z = x^2*y, with x=t and y=t^3. Find dz/dt at t=1 using the chain rule.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "5",
          stepByStepExplanation:
            "f_x=2xy, f_y=x^2, dx/dt=1, dy/dt=3t^2. dz/dt = 2xy(1) + x^2(3t^2). At t=1, x=1 and y=1: dz/dt = 2(1)(1)(1) + (1)^2(3)(1) = 2+3 = 5. Check: z=x^2*y=t^2*t^3=t^5, so dz/dt=5t^4, and at t=1 that's 5.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc3-partial-derivatives-quiz-p6",
          topicTag: "partialDerivatives",
          promptText: "For x^2+4y^2=20, find dy/dx at the point (2,2) using implicit differentiation with partials.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "-1/4",
          stepByStepExplanation:
            "F=x^2+4y^2-20, so F_x=2x, F_y=8y, and dy/dx = -F_x/F_y = -2x/(8y) = -x/(4y). At (2,2): -2/8 = -1/4.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc3-partial-derivatives-quiz-p7",
          topicTag: "partialDerivatives",
          promptText: "For xyz=12, find the partial of z with respect to x at the point (2,3,2).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "-1",
          stepByStepExplanation:
            "F=xyz-12. F_x=yz, F_z=xy. The partial of z with respect to x = -F_x/F_z = -yz/(xy) = -z/x. At (2,3,2): -2/2 = -1.",
          difficultyLevel: 4,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "functions-of-several-variables",
        lessonTitle: "Functions of Several Variables",
        estimatedMinutes: 25,
        topicTag: "partialDerivatives",
        learningGoals: [
          "Find the domain of a function of two or more variables",
          "Evaluate a function of several variables at a given point",
          "Describe and sketch level curves of a function of two variables",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "More than one input, same idea of a rule",
            bodyText:
              "A function of several variables, like f(x,y), just takes in more than one number and still produces exactly one output. Its domain now lives in the xy-plane instead of on the number line - every restriction (no division by zero, no square root of a negative, no log of a non-positive number) has to be checked using BOTH variables together, not one at a time.",
          },
          {
            blockType: "keyFormula",
            headingText: "Level curves",
            bodyText:
              "A level curve of f(x,y) is the set of all points where f(x,y) equals some fixed constant k. Level curves are exactly what a topographic map shows: each curve is a 'slice' of the 3D surface z=f(x,y) at a fixed height, projected flat into the xy-plane. Many level curves turn out to be conic sections you already recognize from Pre-Calculus.",
            mathExpression: "\\text{level curve: } f(x,y) = k",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Describe the level curves of f(x,y) = x^2 + y^2. Setting f(x,y)=k gives x^2+y^2=k. For k>0 this is a circle of radius the square root of k, centered at the origin; for k=0 it's just the single point (0,0); for k<0 there's no curve at all, since a sum of squares can't be negative. So the level curves of this bowl-shaped surface are concentric circles, growing as k grows.",
            mathExpression: "x^2+y^2=k \\ \\ (k>0) \\implies \\text{circle of radius } \\sqrt{k}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Checking a domain restriction using only one variable at a time, the way you would for a single-variable function. A restriction like 'the expression under the square root must be non-negative' has to be checked as a single inequality involving both x and y together - it describes a whole region of the plane, not two separate 1D conditions.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u3-l1-p1",
            topicTag: "partialDerivatives",
            promptText: "Find the domain restriction for f(x,y) = sqrt(9 - x^2 - y^2).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "x^2+y^2<=9",
            acceptableAnswerVariants: ["x^2 + y^2 <= 9 (a disk of radius 3)"],
            stepByStepExplanation:
              "The expression under the square root must be non-negative: 9 - x^2 - y^2 >= 0, which rearranges to x^2+y^2 <= 9, a disk of radius 3 centered at the origin.",
            difficultyLevel: 2,
          },
          {
            problemId: "c3-u3-l1-p2",
            topicTag: "partialDerivatives",
            promptText: "Describe the level curve of f(x,y) = x - y^2 at the level k=0.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "x=y^2",
            acceptableAnswerVariants: ["a parabola x = y^2"],
            stepByStepExplanation: "Setting f(x,y)=0 gives x - y^2 = 0, i.e. x = y^2, a sideways-opening parabola.",
            difficultyLevel: 2,
          },
          {
            problemId: "c3-u3-l1-p3",
            topicTag: "partialDerivatives",
            promptText: "Evaluate f(x,y) = x^2*y - 3y at (x,y) = (2,-1).",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "-1",
            stepByStepExplanation: "f(2,-1) = (2^2)(-1) - 3(-1) = -4 + 3 = -1.",
            difficultyLevel: 1,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Functions of Several Variables",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/FunctionsOfSeveralVariables.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 3, Chapter 4: Functions of Several Variables",
            resourceUrl: "https://openstax.org/books/calculus-volume-3/pages/4-introduction",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "partial-derivatives",
        lessonTitle: "Partial Derivatives",
        estimatedMinutes: 25,
        topicTag: "partialDerivatives",
        learningGoals: [
          "Compute the partial derivative of a multivariable function with respect to one variable",
          "Interpret a partial derivative as a rate of change holding the other variables fixed",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Freeze everything except one variable",
            bodyText:
              "The partial derivative of f with respect to x, written the partial of f over the partial of x (or f sub x), measures how f changes as x alone changes, with every other variable treated as a locked constant. Mechanically, this means every single-variable differentiation rule you already know still applies - you're just temporarily pretending the other variables are numbers like 5 or 7.",
          },
          {
            blockType: "keyFormula",
            headingText: "Partial derivative notation",
            bodyText:
              "For f(x,y): f_x = the partial of f with respect to x (differentiate treating y as constant). f_y = the partial of f with respect to y (differentiate treating x as constant).",
            mathExpression: "f_x = \\dfrac{\\partial f}{\\partial x}, \\qquad f_y = \\dfrac{\\partial f}{\\partial y}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find both partial derivatives of f(x,y) = x^2*y^3 + 4x. For f_x, treat y as a constant: the derivative of x^2*y^3 with respect to x is 2x*y^3 (y^3 is just a constant multiplier), and the derivative of 4x is 4. So f_x = 2x*y^3 + 4. For f_y, treat x as a constant: the derivative of x^2*y^3 with respect to y is x^2 * 3y^2 = 3x^2*y^2, and the derivative of 4x (a constant, since it has no y) is 0. So f_y = 3x^2*y^2.",
            mathExpression: "f_x = 2xy^3+4, \\qquad f_y = 3x^2y^2",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Forgetting to treat the other variable as a true constant - applying the product rule or chain rule to it as though IT were the variable being differentiated. If you're finding f_x, every y in the expression should behave exactly like a plain number until the very end.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u3-l2-p1",
            topicTag: "partialDerivatives",
            promptText: "For f(x,y) = 3x^2*y - 2y^3, find f_x.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "6xy",
            stepByStepExplanation: "Treating y as constant, d/dx[3x^2*y] = 6xy, and d/dx[-2y^3] = 0 (no x present).",
            difficultyLevel: 1,
          },
          {
            problemId: "c3-u3-l2-p2",
            topicTag: "partialDerivatives",
            promptText: "For f(x,y) = 3x^2*y - 2y^3, find f_y.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "3x^2-6y^2",
            stepByStepExplanation: "Treating x as constant, d/dy[3x^2*y] = 3x^2, and d/dy[-2y^3] = -6y^2.",
            difficultyLevel: 1,
          },
          {
            problemId: "c3-u3-l2-p3",
            topicTag: "partialDerivatives",
            promptText: "For f(x,y) = x*e^(xy), find f_x.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "e^(xy)(1+xy)",
            acceptableAnswerVariants: ["e^(xy)+xy*e^(xy)", "e^xy(1+xy)"],
            stepByStepExplanation:
              "Use the product rule with u=x and v=e^(xy) (treating y as constant, so dv/dx = y*e^(xy)): f_x = 1*e^(xy) + x*(y*e^(xy)) = e^(xy) + xy*e^(xy) = e^(xy)(1+xy).",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Partial Derivatives",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/PartialDerivatives.aspx",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "higher-order-partial-derivatives",
        lessonTitle: "Higher-Order Partial Derivatives",
        estimatedMinutes: 20,
        topicTag: "partialDerivatives",
        learningGoals: [
          "Compute second-order partial derivatives, including mixed partial derivatives",
          "Apply Clairaut's theorem to check mixed partial derivatives",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Taking a partial derivative of a partial derivative",
            bodyText:
              "Just like ordinary second derivatives, you can differentiate a partial derivative again. f_xx means differentiate with respect to x twice; f_xy (a mixed partial) means differentiate first with respect to x, then with respect to y. Remarkably, for almost every function you'll meet, the order of a mixed partial doesn't matter - differentiating x-then-y gives the same result as y-then-x.",
          },
          {
            blockType: "keyFormula",
            headingText: "Clairaut's theorem",
            bodyText:
              "If f_xy and f_yx are both continuous near a point, then they are equal there: f_xy = f_yx. This means you're free to compute a mixed partial in whichever order is more convenient.",
            mathExpression: "f_{xy} = f_{yx} \\ \\text{(when both are continuous)}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "For f(x,y) = x^3*y^2 + xy, verify Clairaut's theorem. First find f_x = 3x^2*y^2 + y, then differentiate that with respect to y: f_xy = 6x^2*y + 1. Now go the other order: f_y = 2x^3*y + x, then differentiate that with respect to x: f_yx = 6x^2*y + 1. Both orders give the same result, 6x^2*y+1, confirming Clairaut's theorem here.",
            mathExpression: "f_{xy} = f_{yx} = 6x^2y+1",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Getting two different answers for f_xy and f_yx and concluding that Clairaut's theorem 'doesn't apply' to this function. For any reasonably smooth function (the kind seen throughout this course), a mismatch almost always signals an arithmetic slip in one of the two computations, not a genuine exception - recheck both derivatives carefully before assuming the theorem fails.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u3-l3-p1",
            topicTag: "partialDerivatives",
            promptText: "For f(x,y) = x^2*y^3, find f_xx.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "2y^3",
            stepByStepExplanation: "f_x = 2xy^3. Differentiating again with respect to x: f_xx = 2y^3.",
            difficultyLevel: 2,
          },
          {
            problemId: "c3-u3-l3-p2",
            topicTag: "partialDerivatives",
            promptText: "For f(x,y) = x^2*y^3, find f_xy.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "6xy^2",
            stepByStepExplanation: "f_x = 2xy^3. Differentiating with respect to y: f_xy = 2x * 3y^2 = 6xy^2.",
            difficultyLevel: 2,
          },
          {
            problemId: "c3-u3-l3-p3",
            topicTag: "partialDerivatives",
            promptText: "For f(x,y) = sin(xy), find f_xy.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "cos(xy)-xy*sin(xy)",
            acceptableAnswerVariants: ["cos(xy) - xy sin(xy)"],
            stepByStepExplanation:
              "f_x = y*cos(xy) (chain rule). Now differentiate f_x with respect to y using the product rule (u=y, v=cos(xy), dv/dy = -x*sin(xy)): f_xy = cos(xy) + y*(-x*sin(xy)) = cos(xy) - xy*sin(xy).",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Higher Order Partial Derivatives",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/HigherOrderPartialDerivs.aspx",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "the-multivariable-chain-rule",
        lessonTitle: "The Multivariable Chain Rule",
        estimatedMinutes: 25,
        topicTag: "partialDerivatives",
        learningGoals: [
          "Apply the multivariable chain rule when intermediate variables depend on a single parameter",
          "Apply the multivariable chain rule when intermediate variables depend on two parameters",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Add up every path from the final variable back to the input",
            bodyText:
              "When z depends on x and y, and x and y in turn both depend on t, a change in t affects z through TWO separate paths - through x, and through y. The multivariable chain rule says: add up the contribution from each path. Miss a path, and the chain rule silently gives you an incomplete (wrong) answer.",
          },
          {
            blockType: "keyFormula",
            headingText: "The chain rule, one and two parameters",
            bodyText:
              "If z=f(x,y) with x=x(t), y=y(t): dz/dt = f_x * dx/dt + f_y * dy/dt. If instead x=x(s,t) and y=y(s,t): the partial of z with respect to s = f_x * (partial of x w.r.t. s) + f_y * (partial of y w.r.t. s), and similarly for the partial with respect to t.",
            mathExpression: "\\dfrac{dz}{dt} = f_x\\dfrac{dx}{dt} + f_y\\dfrac{dy}{dt}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Let z = x^2*y, with x=t^2 and y=t^3. Find dz/dt using the chain rule, then check by direct substitution. Chain rule: f_x=2xy, f_y=x^2, dx/dt=2t, dy/dt=3t^2. So dz/dt = (2xy)(2t) + (x^2)(3t^2). Substituting x=t^2, y=t^3: 2xy = 2(t^2)(t^3) = 2t^5, so that term is 2t^5*2t=4t^6; and x^2=t^4, so that term is t^4*3t^2=3t^6. Total: dz/dt = 4t^6+3t^6 = 7t^6. Check by direct substitution: z = (t^2)^2*(t^3) = t^7, and d/dt[t^7] = 7t^6. The two methods agree.",
            mathExpression: "\\dfrac{dz}{dt} = 7t^6",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Only accounting for one of the intermediate variables' paths - for example, computing f_x * dx/dt and stopping there, forgetting the second term f_y * dy/dt entirely. Every intermediate variable that both depends on t AND affects z contributes its own term to the sum.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u3-l4-p1",
            topicTag: "partialDerivatives",
            promptText: "Let z = x^2+y^2, with x=cos t and y=sin t. Find dz/dt using the chain rule.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "0",
            stepByStepExplanation:
              "f_x=2x, f_y=2y, dx/dt=-sin t, dy/dt=cos t. dz/dt = 2x(-sin t) + 2y(cos t) = -2cos t sin t + 2 sin t cos t = 0. This makes sense: x^2+y^2 = cos^2t+sin^2t = 1 is constant, so its derivative must be 0.",
            difficultyLevel: 3,
          },
          {
            problemId: "c3-u3-l4-p2",
            topicTag: "partialDerivatives",
            promptText: "Let z = xy, with x=s+t and y=s-t. Find the partial of z with respect to s.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "2s",
            stepByStepExplanation:
              "f_x=y, f_y=x, and the partial of x w.r.t. s is 1, the partial of y w.r.t. s is 1. So the partial of z w.r.t. s = y(1)+x(1) = x+y = (s+t)+(s-t) = 2s.",
            difficultyLevel: 3,
          },
          {
            problemId: "c3-u3-l4-p3",
            topicTag: "partialDerivatives",
            promptText: "Let z = x^2*y, with x=t and y=t^2. Find dz/dt at t=1.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "4",
            stepByStepExplanation:
              "f_x=2xy, f_y=x^2, dx/dt=1, dy/dt=2t. dz/dt = 2xy(1) + x^2(2t). At t=1, x=1 and y=1: dz/dt = 2(1)(1)(1) + (1)^2(2)(1) = 2+2 = 4. Check: z=x^2*y=t^2*t^2=t^4, so dz/dt=4t^3, and at t=1 that's 4.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Chain Rule",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/ChainRule.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.02: Multivariable Calculus",
            resourceUrl: "https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "implicit-differentiation-with-several-variables",
        lessonTitle: "Implicit Differentiation with Several Variables",
        estimatedMinutes: 20,
        topicTag: "partialDerivatives",
        learningGoals: [
          "Use partial derivatives to differentiate an equation implicitly",
          "Find dy/dx from F(x,y)=0, and partial derivatives of z from F(x,y,z)=0",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Implicit differentiation, now organized with partial derivatives",
            bodyText:
              "The implicit differentiation you learned in Calculus I can be repackaged neatly using partial derivatives. If an equation F(x,y)=0 implicitly defines y as a function of x, the multivariable chain rule (applied to F, treated as constant 0) leads directly to a formula for dy/dx using nothing but F's partial derivatives - no more painstaking term-by-term differentiation of every y as '(dy/dx) times something.'",
          },
          {
            blockType: "keyFormula",
            headingText: "The implicit differentiation shortcut",
            bodyText:
              "For F(x,y)=0 defining y implicitly as a function of x: dy/dx = -(F_x)/(F_y). For F(x,y,z)=0 defining z implicitly as a function of x and y: the partial of z with respect to x = -(F_x)/(F_z), and the partial of z with respect to y = -(F_y)/(F_z).",
            mathExpression: "\\dfrac{dy}{dx} = -\\dfrac{F_x}{F_y}, \\qquad \\dfrac{\\partial z}{\\partial x} = -\\dfrac{F_x}{F_z}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find dy/dx for the circle x^2+y^2=25 at the point (3,4), using F(x,y) = x^2+y^2-25. F_x = 2x, F_y = 2y. So dy/dx = -(2x)/(2y) = -x/y. At (3,4): dy/dx = -3/4, matching the slope of the tangent line to that circle at that point.",
            mathExpression: "\\dfrac{dy}{dx} = -\\dfrac{x}{y}, \\quad \\text{at }(3,4):\\ -\\dfrac{3}{4}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Dropping the negative sign, or dividing in the wrong order (F_z over F_x instead of F_x over F_z). The formula is always minus the partial derivative with respect to the variable you're differentiating BY, divided by the partial derivative with respect to the variable you're solving FOR - keep that order straight every time.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u3-l5-p1",
            topicTag: "partialDerivatives",
            promptText: "For x^2+y^2=169, find dy/dx at the point (5,12) using implicit differentiation with partials.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "-5/12",
            stepByStepExplanation:
              "F=x^2+y^2-169, so F_x=2x, F_y=2y, and dy/dx = -F_x/F_y = -x/y. At (5,12): -5/12.",
            difficultyLevel: 2,
          },
          {
            problemId: "c3-u3-l5-p2",
            topicTag: "partialDerivatives",
            promptText: "For x^2*y+z^3=8, find the partial of z with respect to x.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "-2xy/(3z^2)",
            acceptableAnswerVariants: ["-(2xy)/(3z^2)"],
            stepByStepExplanation:
              "F = x^2*y+z^3-8. F_x = 2xy, F_z = 3z^2. The partial of z with respect to x = -F_x/F_z = -2xy/(3z^2).",
            difficultyLevel: 4,
          },
          {
            problemId: "c3-u3-l5-p3",
            topicTag: "partialDerivatives",
            promptText: "For xyz=6, find the partial of z with respect to y at the point (1,2,3).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "-3/2",
            stepByStepExplanation:
              "F=xyz-6. F_y=xz, F_z=xy. The partial of z with respect to y = -F_y/F_z = -xz/(xy) = -z/y. At (1,2,3): -3/2.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Partial Derivatives (Implicit Differentiation section)",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/PartialDerivatives.aspx",
            resourceType: "textbookChapter",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "directional-derivatives-and-gradients",
    unitTitle: "Directional Derivatives and Gradients",
    unitDescription: "The gradient vector, directional derivatives, and tangent planes.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Directional Derivatives and Gradients",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc3-directional-derivatives-and-gradients-quiz-p1",
          topicTag: "directionalDerivativesAndGradients",
          promptText: "Find the gradient of f(x,y) = 4x^2 - 3y^3.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "<8x,-9y^2>",
          acceptableAnswerVariants: ["(8x, -9y^2)"],
          stepByStepExplanation: "f_x = 8x, f_y = -9y^2, so grad f = <8x, -9y^2>.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc3-directional-derivatives-and-gradients-quiz-p2",
          topicTag: "directionalDerivativesAndGradients",
          promptText: "Find the gradient of f(x,y,z) = x^2*y*z at the point (1,2,3).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "<12,3,2>",
          acceptableAnswerVariants: ["(12,3,2)"],
          stepByStepExplanation:
            "grad f = <2xyz, x^2*z, x^2*y>. At (1,2,3): <2(1)(2)(3), (1)^2(3), (1)^2(2)> = <12, 3, 2>.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc3-directional-derivatives-and-gradients-quiz-p3",
          topicTag: "directionalDerivativesAndGradients",
          promptText: "Find the directional derivative of f(x,y) = x^2+xy at (1,2) in the direction of the vector <3,4>.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "16/5",
          stepByStepExplanation:
            "grad f = <2x+y, x>. At (1,2): <4,1>. Normalize <3,4>: magnitude 5, unit vector <3/5,4/5>. D_u f = <4,1> dot <3/5,4/5> = 12/5+4/5 = 16/5.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc3-directional-derivatives-and-gradients-quiz-p4",
          topicTag: "directionalDerivativesAndGradients",
          promptText: "For f(x,y) = x^2*y at (2,1), find the maximum possible rate of increase at that point.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "4*sqrt(2)",
          acceptableAnswerVariants: ["4√2", "sqrt(32)", "5.66"],
          stepByStepExplanation:
            "grad f = <2xy, x^2>. At (2,1): <4,4>. The maximum rate of increase is the magnitude of the gradient itself: the square root of 4^2+4^2 = the square root of 32 = 4*(square root of 2).",
          difficultyLevel: 3,
        },
        {
          problemId: "calc3-directional-derivatives-and-gradients-quiz-p5",
          topicTag: "directionalDerivativesAndGradients",
          promptText: "Find the tangent plane to z = x^2+y^2 at the point (1,-2,5).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "z=2x-4y-5",
          acceptableAnswerVariants: ["z = 2x - 4y - 5"],
          stepByStepExplanation:
            "f_x=2x, f_y=2y. At (1,-2): f_x=2, f_y=-4. z-5 = 2(x-1) - 4(y-(-2)). Expand: z = 2x-2-4y-8+5 = 2x-4y-5.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc3-directional-derivatives-and-gradients-quiz-p6",
          topicTag: "directionalDerivativesAndGradients",
          promptText: "Find the tangent plane to the sphere x^2+y^2+z^2=17 at the point (4,1,0).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "4x+y=17",
          acceptableAnswerVariants: ["4x + y = 17", "8x+2y=34"],
          stepByStepExplanation:
            "F=x^2+y^2+z^2. grad F = <2x,2y,2z>. At (4,1,0): <8,2,0>. Tangent plane: 8(x-4)+2(y-1)+0(z-0)=0. Expand: 8x-32+2y-2=0, so 8x+2y=34, which simplifies to 4x+y=17.",
          difficultyLevel: 4,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "the-gradient-vector",
        lessonTitle: "The Gradient Vector",
        estimatedMinutes: 25,
        topicTag: "directionalDerivativesAndGradients",
        learningGoals: [
          "Compute the gradient vector of a function of two or three variables",
          "Interpret the gradient as the direction and rate of steepest ascent",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Bundling every partial derivative into one vector",
            bodyText:
              "The gradient of f, written the del symbol followed by f, collects ALL of f's first partial derivatives into a single vector: <f_x, f_y> in two dimensions, or <f_x, f_y, f_z> in three. It is always a vector with the same number of components as input variables - never a lone number, no matter how simple the function looks.",
          },
          {
            blockType: "keyFormula",
            headingText: "The gradient",
            bodyText:
              "For f(x,y): grad f = <f_x, f_y>. For f(x,y,z): grad f = <f_x, f_y, f_z>. At any point, grad f points in the direction in which f increases fastest, and its magnitude is exactly that fastest rate of increase.",
            mathExpression: "\\nabla f(x,y) = \\langle f_x, f_y \\rangle",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find the gradient of f(x,y) = x^2*y + 3y^2 at the point (1,2). First find the partials: f_x = 2xy, f_y = x^2+6y. So grad f = <2xy, x^2+6y>. Evaluating at (1,2): <2(1)(2), 1^2+6(2)> = <4, 13>.",
            mathExpression: "\\nabla f(1,2) = \\langle 4, 13\\rangle",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Treating the gradient like a regular single-variable derivative and reporting a single number. The gradient is always a vector - if the answer you get doesn't have the same number of components as the function has variables, something went wrong.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u4-l1-p1",
            topicTag: "directionalDerivativesAndGradients",
            promptText: "Find the gradient of f(x,y) = 3x^2 - 2y^3.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "<6x,-6y^2>",
            acceptableAnswerVariants: ["(6x, -6y^2)"],
            stepByStepExplanation: "f_x = 6x, f_y = -6y^2, so grad f = <6x, -6y^2>.",
            difficultyLevel: 1,
          },
          {
            problemId: "c3-u4-l1-p2",
            topicTag: "directionalDerivativesAndGradients",
            promptText: "Find the gradient of f(x,y) = x^2+y^2 at the point (3,4).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "<6,8>",
            acceptableAnswerVariants: ["(6,8)"],
            stepByStepExplanation: "grad f = <2x, 2y>. At (3,4): <2(3), 2(4)> = <6,8>.",
            difficultyLevel: 2,
          },
          {
            problemId: "c3-u4-l1-p3",
            topicTag: "directionalDerivativesAndGradients",
            promptText: "Find the gradient of f(x,y,z) = xyz at the point (1,2,3).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "<6,3,2>",
            acceptableAnswerVariants: ["(6,3,2)"],
            stepByStepExplanation:
              "grad f = <yz, xz, xy>. At (1,2,3): <(2)(3), (1)(3), (1)(2)> = <6,3,2>.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Gradient Vector",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/GradientVectorIntro.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 3, Chapter 4: The Gradient",
            resourceUrl: "https://openstax.org/books/calculus-volume-3/pages/4-6-directional-derivatives-and-the-gradient",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "directional-derivatives",
        lessonTitle: "Directional Derivatives",
        estimatedMinutes: 25,
        topicTag: "directionalDerivativesAndGradients",
        learningGoals: [
          "Compute the directional derivative of a function in a given direction",
          "Find the direction and value of the maximum rate of increase of a function at a point",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "The rate of change in ANY direction, not just along the axes",
            bodyText:
              "A partial derivative only measures change along the x-axis or the y-axis. A directional derivative generalizes this to measure the rate of change of f in any chosen direction - and it turns out to be nothing more than the gradient dotted with a unit vector pointing that direction. This single formula quietly contains the two partial derivatives as special cases (pointing along the x- or y-axis).",
          },
          {
            blockType: "keyFormula",
            headingText: "The directional derivative",
            bodyText:
              "The directional derivative of f in the direction of a unit vector u is D_u f = grad f dot u. If you're given a direction vector that ISN'T already a unit vector, divide it by its own magnitude first.",
            mathExpression: "D_{\\mathbf{u}}f = \\nabla f \\cdot \\mathbf{u}, \\quad |\\mathbf{u}|=1",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find the directional derivative of f(x,y) = x^2+y^2 at (1,1) in the direction of v = <3,4>. First normalize v: its magnitude is 5, so the unit vector is u = <3/5, 4/5>. Next find the gradient: grad f = <2x,2y>, so grad f(1,1) = <2,2>. Finally dot them: D_u f = <2,2> dot <3/5,4/5> = 6/5 + 8/5 = 14/5.",
            mathExpression: "D_{\\mathbf{u}}f(1,1) = \\langle 2,2\\rangle \\cdot \\left\\langle \\tfrac35,\\tfrac45\\right\\rangle = \\tfrac{14}{5}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Dotting the gradient with a direction vector before normalizing it to length 1. Using a non-unit vector inflates or shrinks the answer by that vector's own magnitude - always divide by the magnitude first, unless the problem already hands you a unit vector.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u4-l2-p1",
            topicTag: "directionalDerivativesAndGradients",
            promptText: "Find the directional derivative of f(x,y) = xy^2 at (2,1) in the direction of the unit vector <1,0>.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "1",
            stepByStepExplanation:
              "grad f = <y^2, 2xy>. At (2,1): <1,4>. Since <1,0> is already a unit vector, D_u f = <1,4> dot <1,0> = 1.",
            difficultyLevel: 2,
          },
          {
            problemId: "c3-u4-l2-p2",
            topicTag: "directionalDerivativesAndGradients",
            promptText: "Find the directional derivative of f(x,y) = x^2-y^2 at (2,-1) in the direction of the vector <3,4>.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "4",
            stepByStepExplanation:
              "grad f = <2x,-2y>. At (2,-1): <4,2>. Normalize <3,4>: magnitude 5, unit vector <3/5,4/5>. D_u f = <4,2> dot <3/5,4/5> = 12/5+8/5 = 20/5 = 4.",
            difficultyLevel: 3,
          },
          {
            problemId: "c3-u4-l2-p3",
            topicTag: "directionalDerivativesAndGradients",
            promptText:
              "For f(x,y) = x^2*y at (1,2), find the maximum possible rate of increase at that point (i.e. the magnitude of the gradient).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "sqrt(17)",
            acceptableAnswerVariants: ["√17", "4.12"],
            stepByStepExplanation:
              "grad f = <2xy, x^2>. At (1,2): <4,1>. The maximum rate of increase is the magnitude of the gradient itself: the square root of 4^2+1^2 = the square root of 17.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Directional Derivatives",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/DirectionalDeriv.aspx",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "tangent-planes-and-normal-lines",
        lessonTitle: "Tangent Planes and Normal Lines",
        estimatedMinutes: 25,
        topicTag: "directionalDerivativesAndGradients",
        learningGoals: [
          "Find the equation of the tangent plane to a surface z=f(x,y) at a given point",
          "Find the equation of the tangent plane to an implicit surface F(x,y,z)=k using the gradient",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "The gradient IS the normal vector",
            bodyText:
              "For a surface given implicitly as F(x,y,z)=k, the gradient of F at any point on the surface is automatically perpendicular to the surface there - it's the normal vector, handed to you for free. That single fact turns 'find the tangent plane' into 'find the gradient and plug it into the point-normal plane formula.'",
          },
          {
            blockType: "keyFormula",
            headingText: "Tangent plane formulas",
            bodyText:
              "For z=f(x,y) at (x0,y0,z0): z - z0 = f_x(x0,y0)(x-x0) + f_y(x0,y0)(y-y0). For an implicit surface F(x,y,z)=k at (x0,y0,z0): F_x(x-x0) + F_y(y-y0) + F_z(z-z0) = 0, using the gradient of F as the normal vector.",
            mathExpression: "z-z_0 = f_x(x_0,y_0)(x-x_0)+f_y(x_0,y_0)(y-y_0)",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find the tangent plane to z = x^2+y^2 at the point (1,2,5) (note f(1,2)=1+4=5, confirming the point is on the surface). f_x=2x, f_y=2y, so at (1,2): f_x=2, f_y=4. The tangent plane is z - 5 = 2(x-1) + 4(y-2). Expanding: z = 2x-2+4y-8+5 = 2x+4y-5.",
            mathExpression: "z = 2x+4y-5",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Building the normal vector as <f_x, f_y> (leaving off the third component) instead of <f_x, f_y, -1> when working directly from z=f(x,y). That missing -1 component is exactly what accounts for z being the surface's own output variable, and dropping it produces a plane with the wrong orientation entirely.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u4-l3-p1",
            topicTag: "directionalDerivativesAndGradients",
            promptText: "Find the tangent plane to z = x^2+y^2 at the point (2,1,5).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "z=4x+2y-5",
            acceptableAnswerVariants: ["z = 4x+2y-5"],
            stepByStepExplanation:
              "f_x=2x, f_y=2y. At (2,1): f_x=4, f_y=2. z-5 = 4(x-2)+2(y-1). Expand: z = 4x-8+2y-2+5 = 4x+2y-5.",
            difficultyLevel: 3,
          },
          {
            problemId: "c3-u4-l3-p2",
            topicTag: "directionalDerivativesAndGradients",
            promptText: "Find the gradient (and hence a normal vector to the surface) of F(x,y,z) = x^2+y^2+z^2 at the point (2,2,1).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "<4,4,2>",
            acceptableAnswerVariants: ["(4,4,2)"],
            stepByStepExplanation: "grad F = <2x,2y,2z>. At (2,2,1): <4,4,2>.",
            difficultyLevel: 3,
          },
          {
            problemId: "c3-u4-l3-p3",
            topicTag: "directionalDerivativesAndGradients",
            promptText: "Find the tangent plane to the surface x^2+y^2-z=0 at the point (1,1,2).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "2x+2y-z=2",
            acceptableAnswerVariants: ["2x + 2y - z = 2"],
            stepByStepExplanation:
              "F=x^2+y^2-z. grad F = <2x,2y,-1>. At (1,1,2): <2,2,-1>. Tangent plane: 2(x-1)+2(y-1)-1(z-2)=0. Expand: 2x-2+2y-2-z+2=0, so 2x+2y-z-2=0, i.e. 2x+2y-z=2.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Tangent Planes and Linear Approximations",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/TangentPlanes.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.02: Multivariable Calculus",
            resourceUrl: "https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/",
            resourceType: "videoLesson",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "multivariable-optimization",
    unitTitle: "Applications of Partial Derivatives: Optimization",
    unitDescription: "Local and absolute extrema of multivariable functions, and Lagrange multipliers.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Applications of Partial Derivatives: Optimization",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc3-multivariable-optimization-quiz-p1",
          topicTag: "multivariableOptimization",
          promptText: "Find the critical point of f(x,y) = x^2+y^2-6x+4y+2.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "(3,-2)",
          acceptableAnswerVariants: ["x=3, y=-2"],
          stepByStepExplanation: "f_x=2x-6=0 gives x=3. f_y=2y+4=0 gives y=-2. Critical point: (3,-2).",
          difficultyLevel: 2,
        },
        {
          problemId: "calc3-multivariable-optimization-quiz-p2",
          topicTag: "multivariableOptimization",
          promptText: "Classify the critical point of f(x,y) = x^2-y^2 at (0,0) using the second derivative test.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "saddle point",
          stepByStepExplanation:
            "f_xx=2, f_yy=-2, f_xy=0. D = (2)(-2) - 0^2 = -4, which is negative, so (0,0) is a saddle point.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc3-multivariable-optimization-quiz-p3",
          topicTag: "multivariableOptimization",
          promptText: "Classify the critical point of f(x,y) = x^2+xy+y^2 at (0,0).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "local minimum",
          stepByStepExplanation:
            "f_x=2x+y=0 and f_y=x+2y=0 both hold at (0,0), the only critical point. f_xx=2, f_yy=2, f_xy=1. D=(2)(2)-1^2=3>0, and f_xx=2>0, so (0,0) is a local minimum.",
          difficultyLevel: 4,
        },
        {
          problemId: "calc3-multivariable-optimization-quiz-p4",
          topicTag: "lagrangeMultipliers",
          promptText: "Minimize f(x,y) = x^2+y^2 subject to x+2y=10.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "20",
          stepByStepExplanation:
            "grad f=<2x,2y>, grad g=<1,2>. From 2x=lambda and 2y=2*lambda, we get lambda=2x and y=lambda=2x, so y=2x. Constraint: x+2y=10 becomes x+4x=10, so x=2 and y=4. Minimum value: f(2,4)=4+16=20.",
          difficultyLevel: 4,
        },
        {
          problemId: "calc3-multivariable-optimization-quiz-p5",
          topicTag: "lagrangeMultipliers",
          promptText: "Find the maximum value of f(x,y) = x+y on the circle x^2+y^2=8.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "4",
          stepByStepExplanation:
            "grad f=<1,1>, grad g=<2x,2y>. From 1=2*lambda*x and 1=2*lambda*y, both equal 1/(2*lambda), so x=y. Constraint: x^2+x^2=8 gives x^2=4, so x=2 and y=2 (taking the positive root for the maximum). Maximum value: f(2,2)=4. (The point (-2,-2) gives the minimum, -4.)",
          difficultyLevel: 5,
        },
        {
          problemId: "calc3-multivariable-optimization-quiz-p6",
          topicTag: "multivariableOptimization",
          promptText:
            "For f(x,y)=x^2-y^2 on the square 0<=x<=1, 0<=y<=1, evaluate f at all four corners and state the absolute maximum value on the square.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "1",
          stepByStepExplanation:
            "The corners give f(0,0)=0, f(1,0)=1, f(0,1)=-1, f(1,1)=0. The only interior critical point is (0,0), value 0, already covered, and checking each edge doesn't produce anything larger. The absolute maximum on the square is 1, occurring at the corner (1,0) (the absolute minimum is -1, at (0,1)).",
          difficultyLevel: 3,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "local-extrema-and-the-second-derivative-test-multivariable",
        lessonTitle: "Local Extrema and the Second Derivative Test (Multivariable)",
        estimatedMinutes: 25,
        topicTag: "multivariableOptimization",
        learningGoals: [
          "Find critical points of a function of two variables",
          "Classify a critical point as a local minimum, local maximum, or saddle point using the second derivative test",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Critical points now come from a whole gradient, not one derivative",
            bodyText:
              "A critical point of f(x,y) is a point where the gradient is the zero vector - both f_x and f_y equal 0 simultaneously (or one of them fails to exist). Unlike single-variable calculus, a critical point here isn't automatically a max or min; it might be a saddle point, where the surface curves up in one direction and down in another, like the middle of a Pringle chip or a mountain pass.",
          },
          {
            blockType: "keyFormula",
            headingText: "The second derivative test",
            bodyText:
              "At a critical point, compute the discriminant D = f_xx * f_yy - (f_xy)^2. If D>0 and f_xx>0: local minimum. If D>0 and f_xx<0: local maximum. If D<0: saddle point. If D=0: the test is inconclusive.",
            mathExpression: "D = f_{xx}f_{yy} - (f_{xy})^2",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Classify the critical point(s) of f(x,y) = x^2+y^2-4x+6y+13. Set the gradient to zero: f_x = 2x-4 = 0 gives x=2; f_y = 2y+6 = 0 gives y=-3. The only critical point is (2,-3). Now the second derivatives: f_xx=2, f_yy=2, f_xy=0, so D = (2)(2) - 0^2 = 4, which is positive, and f_xx=2 is also positive - so (2,-3) is a local minimum. Plugging in: f(2,-3) = 4+9-8-18+13 = 0.",
            mathExpression: "D=4>0,\\ f_{xx}=2>0 \\implies \\text{local minimum at } (2,-3),\\ f(2,-3)=0",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Computing D as just f_xx times f_yy and skipping the subtraction of (f_xy)^2. That mixed-partial term is exactly what distinguishes a genuine max/min from a saddle point - omitting it can turn a real saddle point into a false 'local max' or 'local min.'",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u5-l1-p1",
            topicTag: "multivariableOptimization",
            promptText: "Find the critical point of f(x,y) = x^2+y^2+2x-6y+5.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(-1,3)",
            acceptableAnswerVariants: ["x=-1, y=3"],
            stepByStepExplanation: "f_x=2x+2=0 gives x=-1. f_y=2y-6=0 gives y=3. Critical point: (-1,3).",
            difficultyLevel: 2,
          },
          {
            problemId: "c3-u5-l1-p2",
            topicTag: "multivariableOptimization",
            promptText: "For f(x,y) = x^2-y^2+xy, find the discriminant D (it is the same constant value everywhere), and classify the critical point at (0,0).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "saddle point",
            acceptableAnswerVariants: ["D=-5, saddle point"],
            stepByStepExplanation:
              "f_xx=2, f_yy=-2, f_xy=1. D = (2)(-2) - 1^2 = -4-1 = -5, which is negative, so (0,0) is a saddle point.",
            difficultyLevel: 3,
          },
          {
            problemId: "c3-u5-l1-p3",
            topicTag: "multivariableOptimization",
            promptText: "For f(x,y) = x^3-3x+y^2, classify the critical point at (1,0).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "local minimum",
            stepByStepExplanation:
              "f_xx=6x, f_yy=2, f_xy=0. At (1,0): D=(6)(2)-0=12>0, and f_xx=6>0, so (1,0) is a local minimum. (The other critical point, (-1,0), turns out to be a saddle point since D there is -12.)",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Relative Minimums and Maximums",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/RelativeExtrema.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 3, Chapter 4: Maxima/Minima Problems",
            resourceUrl: "https://openstax.org/books/calculus-volume-3/pages/4-7-maxima-minima-problems",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "lagrange-multipliers",
        lessonTitle: "Lagrange Multipliers",
        estimatedMinutes: 30,
        topicTag: "lagrangeMultipliers",
        learningGoals: [
          "Set up the Lagrange multiplier system for a constrained optimization problem",
          "Solve the system to find and classify the optimal value of a constrained function",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Optimizing while stuck on a curve",
            bodyText:
              "Sometimes you need to optimize f(x,y) not over the whole plane, but only along some constraint curve g(x,y)=k. At the optimal point on that curve, the level curve of f is tangent to the constraint curve - which happens exactly when their gradients point in the same (or opposite) direction, i.e. one gradient is a scalar multiple of the other. That scalar is called lambda, the Lagrange multiplier.",
          },
          {
            blockType: "keyFormula",
            headingText: "The Lagrange multiplier system",
            bodyText:
              "To optimize f(x,y) subject to g(x,y)=k, solve the system: grad f = lambda * grad g, together with the original constraint g(x,y)=k. That's typically two or three equations to solve simultaneously for x, y, and lambda.",
            mathExpression: "\\nabla f = \\lambda \\nabla g, \\qquad g(x,y)=k",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Minimize f(x,y) = x^2+y^2 subject to x+y=4. Here g(x,y)=x+y, so grad f = <2x,2y> and grad g = <1,1>. Setting grad f = lambda*grad g gives 2x=lambda and 2y=lambda, so 2x=2y, meaning x=y. Now use the constraint: x+y=4 becomes 2x=4, so x=2 and y=2. The minimum value is f(2,2) = 4+4 = 8.",
            mathExpression: "x=y=2, \\quad f(2,2)=8",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Solving grad f = lambda * grad g for a relationship between x and y (like x=y above) and then stopping - forgetting to bring in the constraint equation itself. The gradient equation only narrows down the RATIO between the variables; the constraint equation is what pins down their actual numerical values.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u5-l2-p1",
            topicTag: "lagrangeMultipliers",
            promptText: "Maximize f(x,y) = xy subject to x+y=10.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "25",
            stepByStepExplanation:
              "grad f=<y,x>, grad g=<1,1>. y=lambda and x=lambda, so x=y. Constraint: x+y=10 gives x=y=5. Maximum value: f(5,5)=25.",
            difficultyLevel: 3,
          },
          {
            problemId: "c3-u5-l2-p2",
            topicTag: "lagrangeMultipliers",
            promptText: "Minimize f(x,y) = x^2+y^2 subject to xy=4, for positive x and y.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "8",
            stepByStepExplanation:
              "grad f=<2x,2y>, grad g=<y,x>. From 2x=lambda*y and 2y=lambda*x, dividing gives x/y=y/x, so x^2=y^2, meaning x=y for positive values. Constraint xy=4 becomes x^2=4, so x=y=2. Minimum value: f(2,2)=4+4=8.",
            difficultyLevel: 4,
          },
          {
            problemId: "c3-u5-l2-p3",
            topicTag: "lagrangeMultipliers",
            promptText: "Find the maximum value of f(x,y) = 2x+3y on the circle x^2+y^2=13.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "13",
            stepByStepExplanation:
              "grad f=<2,3>, grad g=<2x,2y>. From 2=2*lambda*x and 3=2*lambda*y, we get lambda=1/x=3/(2y), so 2y=3x, i.e. y=1.5x. Substituting into x^2+y^2=13: x^2+2.25x^2=13, so 3.25x^2=13, x^2=4, x=2 (taking the positive root for the maximum). Then y=3. Check: 4+9=13. f(2,3)=4+9=13, which is the maximum (the point (-2,-3) gives the minimum, -13).",
            difficultyLevel: 5,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Lagrange Multipliers",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/LagrangeMultipliers.aspx",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "absolute-extrema-on-a-closed-region",
        lessonTitle: "Absolute Extrema on a Closed Region",
        estimatedMinutes: 25,
        topicTag: "multivariableOptimization",
        learningGoals: [
          "Find interior critical points of a function on a closed, bounded region",
          "Check the boundary of a region for extrema using substitution or Lagrange multipliers",
          "Compare all candidates to find the absolute maximum and minimum",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "A closed, bounded region always has an absolute max and min - you just have to look everywhere",
            bodyText:
              "Just like the Extreme Value Theorem in Calculus I guaranteed absolute extrema on a closed interval, a continuous function on a closed, bounded region in the plane is guaranteed to attain an absolute maximum and minimum. But the candidates now come from TWO sources: interior critical points, and the entire boundary curve - and the boundary itself has to be checked as its own optimization problem, often with Lagrange multipliers or direct substitution.",
          },
          {
            blockType: "keyFormula",
            headingText: "The three-step procedure",
            bodyText:
              "(1) Find all critical points in the interior of the region. (2) Find all candidate extrema on the boundary (substitute a parametrization, or use Lagrange multipliers). (3) Evaluate f at every candidate from steps 1 and 2, and pick the largest and smallest values.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find the absolute max and min of f(x,y) = x^2+y^2-2x on the closed disk x^2+y^2<=4. Interior: f_x=2x-2=0 gives x=1; f_y=2y=0 gives y=0. The point (1,0) is inside the disk (1<=4), and f(1,0) = 1-2 = -1. Boundary: on x^2+y^2=4, use Lagrange with g=x^2+y^2. grad f=<2x-2,2y>, grad g=<2x,2y>. From 2y=lambda*2y, either y=0 or lambda=1. If y=0: x^2=4 gives x=2 or x=-2, so f(2,0)=4-4=0 and f(-2,0)=4+4=8. If lambda=1: 2x-2=2x has no solution. Comparing all three candidates -1, 0, and 8: the absolute maximum is 8 at (-2,0), and the absolute minimum is -1 at (1,0).",
            mathExpression: "\\text{absolute max } 8 \\text{ at } (-2,0), \\quad \\text{absolute min } -1 \\text{ at } (1,0)",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Finding only the interior critical points and stopping there, forgetting to check the boundary at all. On a closed region, the absolute extrema very often sit right on the edge - skipping that step regularly misses the true answer.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u5-l3-p1",
            topicTag: "multivariableOptimization",
            promptText: "Find the interior critical point of f(x,y) = x^2+y^2-4x-2y on the disk x^2+y^2<=25.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(2,1)",
            stepByStepExplanation:
              "f_x=2x-4=0 gives x=2. f_y=2y-2=0 gives y=1. The point (2,1) satisfies 4+1=5<=25, so it lies inside the region.",
            difficultyLevel: 2,
          },
          {
            problemId: "c3-u5-l3-p2",
            topicTag: "multivariableOptimization",
            promptText: "For f(x,y) = x^2+y^2-4x-2y, evaluate f at the boundary point (5,0) on the circle x^2+y^2=25.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "5",
            stepByStepExplanation: "f(5,0) = 25+0-20-0 = 5.",
            difficultyLevel: 2,
          },
          {
            problemId: "c3-u5-l3-p3",
            topicTag: "multivariableOptimization",
            promptText:
              "For f(x,y)=xy on the square 0<=x<=2, 0<=y<=2, evaluate f at all four corners and state the absolute maximum value on the square.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "4",
            stepByStepExplanation:
              "The corners give f(0,0)=0, f(2,0)=0, f(0,2)=0, f(2,2)=4. The only interior critical point is (0,0), value 0, already covered. Comparing all candidates, the absolute maximum on the square is 4, occurring at the corner (2,2).",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Absolute Minimums and Maximums",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/AbsoluteExtrema.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.02: Multivariable Calculus",
            resourceUrl: "https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/",
            resourceType: "videoLesson",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "double-integrals",
    unitTitle: "Multiple Integrals: Double Integrals",
    unitDescription: "Double integrals over rectangular and general regions, and reversing the order of integration.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Multiple Integrals: Double Integrals",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc3-double-integrals-quiz-p1",
          topicTag: "multipleIntegrals",
          promptText: "Evaluate the double integral of the constant 4 over the rectangle R = [0,2] by [0,5].",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "40",
          stepByStepExplanation:
            "For a constant integrand, the double integral is the constant times the area of the rectangle: 4 * (2*5) = 40.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc3-double-integrals-quiz-p2",
          topicTag: "multipleIntegrals",
          promptText: "Evaluate the integral from 0 to 1, integral from 0 to 3, of 2xy dy dx.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "4.5",
          acceptableAnswerVariants: ["9/2"],
          stepByStepExplanation:
            "Inner (dy, x held constant): 2x*[y^2/2] from 0 to 3 = 2x*4.5 = 9x. Outer: the integral from 0 to 1 of 9x dx = [4.5x^2] from 0 to 1 = 4.5.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc3-double-integrals-quiz-p3",
          topicTag: "multipleIntegrals",
          promptText:
            "Find the area of the region between y=sqrt(x) and y=x^2 for 0<=x<=1, by evaluating the double integral of 1 over that region.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "1/3",
          stepByStepExplanation:
            "For 0<x<1, sqrt(x) lies above x^2 (e.g. at x=0.5, sqrt(0.5)≈0.71 while 0.5^2=0.25). Area = the integral from 0 to 1 of (sqrt(x) - x^2) dx = [(2/3)x^(3/2) - x^3/3] from 0 to 1 = 2/3 - 1/3 = 1/3.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc3-double-integrals-quiz-p4",
          topicTag: "multipleIntegrals",
          promptText:
            "The integral from 0 to 1, integral from 0 to y, of f(x,y) dx dy describes the triangle 0<=x<=y<=1. Rewrite this integral with x on the outside.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "integral from 0 to 1, integral from x to 1, of f(x,y) dy dx",
          acceptableAnswerVariants: [
            "∫0^1 ∫x^1 f(x,y) dy dx",
            "the integral from 0 to 1 of the integral from x to 1 of f dy dx",
          ],
          stepByStepExplanation:
            "The region is the triangle with vertices (0,0), (0,1), (1,1). Describing it with x outer: for 0<=x<=1, y ranges from x up to 1. So the reversed integral is the integral from 0 to 1, integral from x to 1, of f(x,y) dy dx.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc3-double-integrals-quiz-p5",
          topicTag: "multipleIntegrals",
          promptText: "Find the volume under z = 6-x-y over the rectangle 0<=x<=1, 0<=y<=2.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "9",
          stepByStepExplanation:
            "Inner (dy): the integral from 0 to 2 of (6-x-y) dy = [6y-xy-y^2/2] from 0 to 2 = (12-2x-2) = 10-2x. Outer: the integral from 0 to 1 of (10-2x) dx = [10x-x^2] from 0 to 1 = 10-1 = 9.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc3-double-integrals-quiz-p6",
          topicTag: "multipleIntegrals",
          promptText: "Find the area of the region D: 0<=x<=3, 0<=y<=x^2.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "9",
          stepByStepExplanation:
            "Area = the integral from 0 to 3 of x^2 dx = [x^3/3] from 0 to 3 = 27/3 = 9.",
          difficultyLevel: 2,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "double-integrals-over-rectangular-regions",
        lessonTitle: "Double Integrals over Rectangular Regions",
        estimatedMinutes: 25,
        topicTag: "multipleIntegrals",
        learningGoals: [
          "Set up a double integral over a rectangle as an iterated integral",
          "Evaluate an iterated integral by integrating one variable at a time",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "One integral, then another, treating the other variable as a constant",
            bodyText:
              "A double integral over a rectangle is computed as an iterated integral: do the inside integral first, treating the OTHER variable as a fixed constant (exactly the same mindset as partial derivatives), then integrate the result with respect to the outside variable. Fubini's theorem guarantees that for a continuous function over a rectangle, it doesn't matter which variable you integrate first - you'll get the same number either way.",
          },
          {
            blockType: "keyFormula",
            headingText: "The iterated integral",
            bodyText:
              "Over the rectangle R = [a,b] by [c,d]: the double integral of f dA = the integral from a to b of (the integral from c to d of f(x,y) dy) dx, and by Fubini's theorem this equals the same value with the order of dx and dy swapped.",
            mathExpression: "\\iint_R f\\,dA = \\int_a^b\\int_c^d f(x,y)\\,dy\\,dx",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Evaluate the double integral of (x+y) over the rectangle 0<=x<=1, 0<=y<=2, integrating y first. Inner integral (treat x as constant): the integral from 0 to 2 of (x+y) dy = [xy + y^2/2] from 0 to 2 = 2x+2. Outer integral: the integral from 0 to 1 of (2x+2) dx = [x^2+2x] from 0 to 1 = 1+2 = 3.",
            mathExpression: "\\int_0^1\\int_0^2 (x+y)\\,dy\\,dx = 3",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Integrating with respect to the wrong variable on the inner integral - the differential written closest to the integrand (dy or dx) tells you which variable to integrate first, and everything else in the integrand gets treated as a constant during that step. Swapping this changes which variable gets held fixed and produces a completely different intermediate result.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u6-l1-p1",
            topicTag: "multipleIntegrals",
            promptText: "Evaluate the double integral of the constant 6 over the rectangle R = [0,3] by [0,2].",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "36",
            stepByStepExplanation:
              "For a constant integrand, the double integral is just the constant times the area of the rectangle: 6 * (3*2) = 36.",
            difficultyLevel: 1,
          },
          {
            problemId: "c3-u6-l1-p2",
            topicTag: "multipleIntegrals",
            promptText: "Evaluate the integral from 0 to 1, integral from 0 to 1, of xy dy dx.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "1/4",
            stepByStepExplanation:
              "Inner: the integral from 0 to 1 of xy dy = x*(1/2) = x/2. Outer: the integral from 0 to 1 of x/2 dx = (1/2)(1/2) = 1/4.",
            difficultyLevel: 2,
          },
          {
            problemId: "c3-u6-l1-p3",
            topicTag: "multipleIntegrals",
            promptText: "Evaluate the integral from 0 to 2, integral from 1 to 3, of (2x+y) dy dx.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "16",
            stepByStepExplanation:
              "Inner (dy, x held constant): the integral from 1 to 3 of (2x+y) dy = [2xy+y^2/2] from 1 to 3 = (6x+4.5)-(2x+0.5) = 4x+4. Outer: the integral from 0 to 2 of (4x+4) dx = [2x^2+4x] from 0 to 2 = 8+8 = 16.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Double Integrals over Rectangles",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/DIRectangles.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 3, Chapter 5: Double Integrals over Rectangular Regions",
            resourceUrl: "https://openstax.org/books/calculus-volume-3/pages/5-1-double-integrals-over-rectangular-regions",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "double-integrals-over-general-regions",
        lessonTitle: "Double Integrals over General Regions",
        estimatedMinutes: 30,
        topicTag: "multipleIntegrals",
        learningGoals: [
          "Set up a double integral over a Type I region (bounded above and below by functions of x)",
          "Correctly determine which curve forms the upper bound and which forms the lower bound",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Letting the inner bounds depend on the outer variable",
            bodyText:
              "Most interesting regions aren't rectangles - they're bounded by curves. A Type I region has x ranging between two constants, and for each fixed x, y ranges between two FUNCTIONS of x (the bottom curve and the top curve). The inner integral's bounds are then those functions, not constants, and the outer integral's bounds are the constant range for x.",
          },
          {
            blockType: "keyFormula",
            headingText: "Type I region formula",
            bodyText:
              "For a region D where a<=x<=b and g1(x)<=y<=g2(x): the double integral of f over D = the integral from a to b of (the integral from g1(x) to g2(x) of f(x,y) dy) dx.",
            mathExpression: "\\iint_D f\\,dA = \\int_a^b \\int_{g_1(x)}^{g_2(x)} f(x,y)\\,dy\\,dx",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Evaluate the double integral of xy over the region D bounded by y=x^2 (below) and y=x (above), for 0<=x<=1. First check which curve is on top: at x=0.5, x^2=0.25 and x=0.5, so y=x is indeed the upper curve here. Set up: the integral from 0 to 1 of (the integral from x^2 to x of xy dy) dx. Inner integral: x*[y^2/2] from x^2 to x = x*(x^2/2 - x^4/2) = x^3/2 - x^5/2. Outer integral: the integral from 0 to 1 of (x^3/2 - x^5/2) dx = (1/2)(1/4) - (1/2)(1/6) = 1/8 - 1/12 = 1/24.",
            mathExpression: "\\int_0^1\\int_{x^2}^{x} xy\\,dy\\,dx = \\dfrac{1}{24}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Guessing which curve is the upper bound and which is the lower bound without checking. Always plug in a test value of x inside the interval and compare the two curves' y-values directly - assuming based on the equations' appearance (like assuming y=x is 'obviously bigger' than y=x^2) can silently flip the bounds and the sign of the answer.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u6-l2-p1",
            topicTag: "multipleIntegrals",
            promptText:
              "Find the area of the region between y=x^2 and y=x for 0<=x<=1 by evaluating the double integral of 1 over that region.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "1/6",
            stepByStepExplanation:
              "Area = the integral from 0 to 1 of (x - x^2) dx = [x^2/2 - x^3/3] from 0 to 1 = 1/2 - 1/3 = 1/6.",
            difficultyLevel: 2,
          },
          {
            problemId: "c3-u6-l2-p2",
            topicTag: "multipleIntegrals",
            promptText: "Evaluate the integral from 0 to 1, integral from 0 to x, of 2y dy dx.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "1/3",
            stepByStepExplanation:
              "Inner: the integral from 0 to x of 2y dy = x^2. Outer: the integral from 0 to 1 of x^2 dx = 1/3.",
            difficultyLevel: 2,
          },
          {
            problemId: "c3-u6-l2-p3",
            topicTag: "multipleIntegrals",
            promptText:
              "Evaluate the double integral of x over the triangle with vertices (0,0), (1,0), (1,1), described as 0<=x<=1, 0<=y<=x.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "1/3",
            stepByStepExplanation:
              "Inner: the integral from 0 to x of x dy = x*x = x^2. Outer: the integral from 0 to 1 of x^2 dx = 1/3.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Double Integrals over General Regions",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/DIGeneralRegion.aspx",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "reversing-the-order-of-integration",
        lessonTitle: "Reversing the Order of Integration",
        estimatedMinutes: 20,
        topicTag: "multipleIntegrals",
        learningGoals: [
          "Sketch the region described by a given iterated integral",
          "Rewrite an iterated integral with the order of integration swapped",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Same region, described the other way",
            bodyText:
              "Sometimes an iterated integral is set up in an order that leads to an inner integral with no elementary antiderivative. The fix is never to change the region - it's to describe the SAME region using the other variable as the outer one. This always starts with sketching the actual 2D shape the original bounds describe, then reading off new bounds directly from the picture.",
          },
          {
            blockType: "keyFormula",
            headingText: "The reversal procedure",
            bodyText:
              "(1) Sketch the region using the original bounds. (2) Re-describe the same region as a Type II region (x as a function of y) if it was originally Type I, or vice versa. (3) Rewrite the iterated integral with the new bounds and the differentials swapped.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Reverse the order of integration in the integral from 0 to 1, integral from y to 1, of e^(x^2) dx dy, then evaluate it. The original region is 0<=y<=1 and y<=x<=1, which is a triangle with vertices (0,0), (1,0), (1,1). Describing this same triangle with x on the outside: for 0<=x<=1, y ranges from 0 to x. So the reversed integral is the integral from 0 to 1, integral from 0 to x, of e^(x^2) dy dx. Now the inner integral (dy, with e^(x^2) constant in y) is trivial: it just gives x*e^(x^2). The outer integral becomes the integral from 0 to 1 of x*e^(x^2) dx, which equals (1/2)*e^(x^2) evaluated from 0 to 1, i.e. (1/2)(e-1).",
            mathExpression: "\\int_0^1\\int_y^1 e^{x^2}\\,dx\\,dy = \\int_0^1\\int_0^x e^{x^2}\\,dy\\,dx = \\dfrac{e-1}{2}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Mechanically swapping the numbers in the bounds (turning '0 to 1, y to 1' into '0 to 1, x to 1') without ever sketching the region. That kind of blind swap almost never describes the same shape - the new bounds have to come from actually reading the region's boundary curves off a picture.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u6-l3-p1",
            topicTag: "multipleIntegrals",
            promptText:
              "The integral from 0 to 2, integral from 0 to x, of f(x,y) dy dx describes a triangular region with 0<=y<=x<=2. Rewrite this integral with y on the outside.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "integral from 0 to 2, integral from y to 2, of f(x,y) dx dy",
            acceptableAnswerVariants: [
              "∫0^2 ∫y^2 f(x,y) dx dy",
              "the integral from 0 to 2 of the integral from y to 2 of f dx dy",
            ],
            stepByStepExplanation:
              "The region is the triangle with vertices (0,0), (2,0), (2,2). Describing it with y outer: for 0<=y<=2, x ranges from y up to 2. So the reversed integral is the integral from 0 to 2, integral from y to 2, of f(x,y) dx dy.",
            difficultyLevel: 3,
          },
          {
            problemId: "c3-u6-l3-p2",
            topicTag: "multipleIntegrals",
            promptText: "Evaluate the integral from 0 to 1, integral from y to 1, of e^(x^2) dx dy by reversing the order.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(e-1)/2",
            acceptableAnswerVariants: ["(e - 1)/2"],
            stepByStepExplanation:
              "Reversing gives the integral from 0 to 1, integral from 0 to x, of e^(x^2) dy dx = the integral from 0 to 1 of x*e^(x^2) dx = (1/2)(e-1).",
            difficultyLevel: 5,
          },
          {
            problemId: "c3-u6-l3-p3",
            topicTag: "multipleIntegrals",
            promptText:
              "Reverse the order of integration for the integral from 0 to 4, integral from sqrt(x) to 2, of f(x,y) dy dx.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "integral from 0 to 2, integral from 0 to y^2, of f(x,y) dx dy",
            acceptableAnswerVariants: ["∫0^2 ∫0^(y^2) f(x,y) dx dy"],
            stepByStepExplanation:
              "The region is 0<=x<=4 with sqrt(x)<=y<=2, which is the same as 0<=y<=2 with 0<=x<=y^2 (since y>=sqrt(x) is equivalent to x<=y^2). So the reversed integral is the integral from 0 to 2, integral from 0 to y^2, of f(x,y) dx dy.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Double Integrals over General Regions (reversing order)",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/DIGeneralRegion.aspx",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "volume-and-area-using-double-integrals",
        lessonTitle: "Volume and Area Using Double Integrals",
        estimatedMinutes: 20,
        topicTag: "multipleIntegrals",
        learningGoals: [
          "Use a double integral to find the volume between a surface and the xy-plane",
          "Use a double integral to find the area of a plane region",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Two applications you already have all the tools for",
            bodyText:
              "If f(x,y)>=0 everywhere on a region D, the double integral of f over D gives the volume of the solid trapped between the surface z=f(x,y) and the xy-plane, above D. As a special case, integrating the constant function 1 over D gives simply the area of D - no height involved at all, just the footprint.",
          },
          {
            blockType: "keyFormula",
            headingText: "Volume and area formulas",
            bodyText:
              "Volume under z=f(x,y) (with f>=0) above D: the double integral of f dA over D. Area of D: the double integral of 1 dA over D.",
            mathExpression: "V = \\iint_D f(x,y)\\,dA, \\qquad \\text{Area}(D) = \\iint_D 1\\,dA",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find the volume under z = 4-x^2-y^2 above the square 0<=x<=1, 0<=y<=1. V = the integral from 0 to 1, integral from 0 to 1, of (4-x^2-y^2) dy dx. Inner: the integral from 0 to 1 of (4-x^2-y^2) dy = [4y - x^2*y - y^3/3] from 0 to 1 = 4 - x^2 - 1/3 = 11/3 - x^2. Outer: the integral from 0 to 1 of (11/3 - x^2) dx = 11/3 - 1/3 = 10/3.",
            mathExpression: "V = \\dfrac{10}{3}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Interpreting any double integral of f as a literal, physical volume without first checking that f(x,y)>=0 across the whole region. If f dips negative anywhere in D, the integral computes a SIGNED volume - subtracting the part below the xy-plane - not the true physical volume between the surface and the plane.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u6-l4-p1",
            topicTag: "multipleIntegrals",
            promptText: "Find the area of the region D: 0<=x<=2, x^2<=y<=2x.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "4/3",
            stepByStepExplanation:
              "Area = the integral from 0 to 2 of (2x - x^2) dx = [x^2 - x^3/3] from 0 to 2 = 4 - 8/3 = 4/3.",
            difficultyLevel: 3,
          },
          {
            problemId: "c3-u6-l4-p2",
            topicTag: "multipleIntegrals",
            promptText: "Find the volume under z=x+y+1 over the rectangle 0<=x<=2, 0<=y<=3.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "21",
            stepByStepExplanation:
              "Inner: the integral from 0 to 3 of (x+y+1) dy = [xy+y^2/2+y] from 0 to 3 = 3x+4.5+3 = 3x+7.5. Outer: the integral from 0 to 2 of (3x+7.5) dx = [1.5x^2+7.5x] from 0 to 2 = 6+15 = 21.",
            difficultyLevel: 3,
          },
          {
            problemId: "c3-u6-l4-p3",
            topicTag: "multipleIntegrals",
            promptText: "Find the volume of the solid bounded above by z=xy and below by z=0, over the triangle 0<=x<=1, 0<=y<=x.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "1/8",
            stepByStepExplanation:
              "V = the integral from 0 to 1, integral from 0 to x, of xy dy dx. Inner: x*[y^2/2] from 0 to x = x^3/2. Outer: the integral from 0 to 1 of x^3/2 dx = 1/8.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Double Integrals over General Regions",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/DIGeneralRegion.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.02: Multivariable Calculus",
            resourceUrl: "https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/",
            resourceType: "videoLesson",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "triple-integrals",
    unitTitle: "Multiple Integrals: Triple Integrals",
    unitDescription: "Triple integrals over boxes and general solid regions, and applications to volume and mass.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Multiple Integrals: Triple Integrals",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc3-triple-integrals-quiz-p1",
          topicTag: "multipleIntegrals",
          promptText: "Evaluate the triple integral of the constant 5 over the box B = [0,2] by [0,3] by [0,1].",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "30",
          stepByStepExplanation:
            "For a constant integrand, the triple integral equals the constant times the box's volume: 5 * (2*3*1) = 30.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc3-triple-integrals-quiz-p2",
          topicTag: "multipleIntegrals",
          promptText: "Evaluate the integral from 0 to 1, integral from 0 to 1, integral from 0 to 1, of (2x+y+z) dz dy dx.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "2",
          stepByStepExplanation:
            "Inner (dz): 2x+y+1/2. Middle (dy): the integral from 0 to 1 of (2x+y+1/2) dy = 2x+1/2+1/2 = 2x+1. Outer (dx): the integral from 0 to 1 of (2x+1) dx = 1+1 = 2.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc3-triple-integrals-quiz-p3",
          topicTag: "multipleIntegrals",
          promptText:
            "Find the volume of the solid bounded below by z=0 and above by z=x+y, over the triangle 0<=x<=2, 0<=y<=x.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "4",
          stepByStepExplanation:
            "V = the integral from 0 to 2, integral from 0 to x, of (x+y) dy dx. Inner: [xy+y^2/2] from 0 to x = x^2+x^2/2 = 1.5x^2. Outer: the integral from 0 to 2 of 1.5x^2 dx = 1.5*(8/3) = 4.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc3-triple-integrals-quiz-p4",
          topicTag: "multipleIntegrals",
          promptText: "Evaluate the triple integral of 12xy over the solid E: 0<=x<=1, 0<=y<=x, 0<=z<=x+y.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "2",
          stepByStepExplanation:
            "Inner (dz): 12xy*(x+y) = 12x^2*y+12x*y^2. Middle (dy, 0 to x): the integral of (12x^2*y+12x*y^2) dy = 6x^2*x^2 + 4x*x^3 = 6x^4+4x^4 = 10x^4. Outer (dx, 0 to 1): the integral of 10x^4 dx = 2.",
          difficultyLevel: 4,
        },
        {
          problemId: "calc3-triple-integrals-quiz-p5",
          topicTag: "multipleIntegrals",
          promptText: "Find the mass of the box [0,1] by [0,2] by [0,1] with density rho(x,y,z) = x+y.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "3",
          stepByStepExplanation:
            "Inner (dz, 0 to 1): (x+y)*1 = x+y (the integrand has no z). Middle (dy, 0 to 2): the integral of (x+y) dy = [xy+y^2/2] from 0 to 2 = 2x+2. Outer (dx, 0 to 1): the integral of (2x+2) dx = [x^2+2x] from 0 to 1 = 1+2 = 3.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc3-triple-integrals-quiz-p6",
          topicTag: "multipleIntegrals",
          promptText:
            "Find the volume of the tetrahedron with vertices (0,0,0), (3,0,0), (0,3,0), (0,0,3), using the fact that a right tetrahedron with legs a, b, c along the axes has volume (1/6)*a*b*c.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "4.5",
          acceptableAnswerVariants: ["9/2"],
          stepByStepExplanation: "V = (1/6)*3*3*3 = 27/6 = 4.5.",
          difficultyLevel: 2,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "triple-integrals-over-boxes",
        lessonTitle: "Triple Integrals over Boxes",
        estimatedMinutes: 25,
        topicTag: "multipleIntegrals",
        learningGoals: [
          "Set up a triple integral over a rectangular box as an iterated integral",
          "Evaluate a triple iterated integral working from the inside out",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "One more nested integral, same mechanics",
            bodyText:
              "A triple integral over a box works exactly like a double integral, just with one more layer of nesting. Integrate the innermost variable first, holding the other two fixed; then the middle variable, holding the outer one fixed; then the outermost variable last. Fubini's theorem again guarantees the order doesn't matter for a continuous function over a box.",
          },
          {
            blockType: "keyFormula",
            headingText: "Triple integral over a box",
            bodyText:
              "Over B = [a,b] by [c,d] by [p,q]: the triple integral of f dV = the integral from a to b of (the integral from c to d of (the integral from p to q of f dz) dy) dx (any order of the three variables gives the same value).",
            mathExpression: "\\iiint_B f\\,dV = \\int_a^b\\int_c^d\\int_p^q f(x,y,z)\\,dz\\,dy\\,dx",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Evaluate the integral from 0 to 1, integral from 0 to 2, integral from 0 to 3, of xyz dz dy dx. Innermost (dz, x and y constant): the integral from 0 to 3 of xyz dz = xy*[z^2/2] from 0 to 3 = xy*(9/2) = 4.5xy. Middle (dy): the integral from 0 to 2 of 4.5xy dy = 4.5x*[y^2/2] from 0 to 2 = 4.5x*2 = 9x. Outer (dx): the integral from 0 to 1 of 9x dx = 9*(1/2) = 4.5.",
            mathExpression: "\\int_0^1\\int_0^2\\int_0^3 xyz\\,dz\\,dy\\,dx = \\dfrac{9}{2}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Matching the wrong pair of bounds to the wrong differential when a box has three different intervals for x, y, and z. Work strictly from the inside out, and double-check that each differential (dz, dy, or dx) uses ITS OWN pair of bounds, not one borrowed from another variable.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u7-l1-p1",
            topicTag: "multipleIntegrals",
            promptText: "Evaluate the triple integral of the constant 2 over the box B = [0,1] by [0,2] by [0,3].",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "12",
            stepByStepExplanation:
              "For a constant integrand, the triple integral equals the constant times the box's volume: 2 * (1*2*3) = 12.",
            difficultyLevel: 1,
          },
          {
            problemId: "c3-u7-l1-p2",
            topicTag: "multipleIntegrals",
            promptText: "Evaluate the integral from 0 to 1, integral from 0 to 1, integral from 0 to 1, of (x+y+z) dz dy dx.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "3/2",
            stepByStepExplanation:
              "Inner: the integral from 0 to 1 of (x+y+z) dz = x+y+1/2. Middle: the integral from 0 to 1 of (x+y+1/2) dy = x+1. Outer: the integral from 0 to 1 of (x+1) dx = 1/2+1 = 3/2.",
            difficultyLevel: 2,
          },
          {
            problemId: "c3-u7-l1-p3",
            topicTag: "multipleIntegrals",
            promptText: "Evaluate the integral from 0 to 2, integral from 0 to 1, integral from 0 to 1, of xy*z^2 dz dy dx.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "1/3",
            stepByStepExplanation:
              "Inner (dz): xy*[z^3/3] from 0 to 1 = xy/3. Middle (dy): the integral from 0 to 1 of xy/3 dy = x/3 * 1/2 = x/6. Outer (dx): the integral from 0 to 2 of x/6 dx = (1/6)(2) = 1/3.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Triple Integrals",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/TripleIntegrals.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 3, Chapter 5: Triple Integrals",
            resourceUrl: "https://openstax.org/books/calculus-volume-3/pages/5-4-triple-integrals",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "triple-integrals-over-general-regions",
        lessonTitle: "Triple Integrals over General Regions",
        estimatedMinutes: 30,
        topicTag: "multipleIntegrals",
        learningGoals: [
          "Set up a triple integral over a solid bounded by surfaces, integrating z first over a 2D base region",
          "Determine which surface forms the upper bound and which forms the lower bound for z",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Peel off z first, then handle a familiar double integral",
            bodyText:
              "For a solid region E sitting between a lower surface z1(x,y) and an upper surface z2(x,y), above a 2D base region D in the xy-plane, integrate z first (from z1 to z2), then handle the remaining double integral over D exactly as in the previous unit. The whole triple integral collapses into a double integral once the innermost z-integration is done.",
          },
          {
            blockType: "keyFormula",
            headingText: "Triple integral over a general solid",
            bodyText:
              "The triple integral of f over E = the double integral over D of (the integral from z1(x,y) to z2(x,y) of f dz) dA, where D is the 'shadow' of E in the xy-plane.",
            mathExpression: "\\iiint_E f\\,dV = \\iint_D \\left[\\int_{z_1(x,y)}^{z_2(x,y)} f\\,dz\\right] dA",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find the triple integral of z over the tetrahedron E bounded below by z=0 and above by z=1-x-y, with base region D: 0<=x<=1, 0<=y<=1-x. Inner integral (dz): the integral from 0 to 1-x-y of z dz = (1-x-y)^2 / 2. This must now be integrated over D. Substituting w=1-x-y for the inner y-integral (from y=0 to y=1-x, w runs from 1-x down to 0) gives the integral from 0 to 1-x of (1-x-y)^2/2 dy = (1-x)^3/6. Finally, the integral from 0 to 1 of (1-x)^3/6 dx = 1/24. As a check: this tetrahedron has volume 1/6 and its centroid sits at height 1/4 (a quarter of the way from the base to the apex), so the integral of z over it should equal (1/4)*(1/6) = 1/24 - which matches exactly.",
            mathExpression: "\\iiint_E z\\,dV = \\dfrac{1}{24}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Assuming which surface is 'on top' from the way the equations look, rather than checking. Plug in a test point from the interior of the base region D into both bounding surfaces and see which one gives the larger z-value there - that's the true upper bound, and the other is the lower bound.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u7-l2-p1",
            topicTag: "multipleIntegrals",
            promptText:
              "Find the volume of the solid bounded below by z=0 and above by z=x+y, over the triangle 0<=x<=1, 0<=y<=x.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "1/2",
            stepByStepExplanation:
              "V = the integral from 0 to 1, integral from 0 to x, of (x+y) dy dx. Inner: [xy+y^2/2] from 0 to x = x^2+x^2/2 = 1.5x^2. Outer: the integral from 0 to 1 of 1.5x^2 dx = 1.5/3 = 1/2.",
            difficultyLevel: 3,
          },
          {
            problemId: "c3-u7-l2-p2",
            topicTag: "multipleIntegrals",
            promptText:
              "Evaluate the triple integral of 6xy over the solid E: 0<=x<=1, 0<=y<=x, 0<=z<=x+y.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "1",
            stepByStepExplanation:
              "Inner (dz): 6xy*(x+y) = 6x^2y+6xy^2. Middle (dy, from 0 to x): the integral of (6x^2y+6xy^2) dy = 3x^2*x^2 + 2x*x^3 = 3x^4+2x^4 = 5x^4. Outer (dx, 0 to 1): the integral of 5x^4 dx = 1.",
            difficultyLevel: 4,
          },
          {
            problemId: "c3-u7-l2-p3",
            topicTag: "multipleIntegrals",
            promptText:
              "Find the volume of the solid E: 0<=x<=2, 0<=y<=3, 0<=z<=x+1.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "12",
            stepByStepExplanation:
              "V = the integral from 0 to 2, integral from 0 to 3, integral from 0 to x+1, dz dy dx = the integral from 0 to 2, integral from 0 to 3, of (x+1) dy dx = the integral from 0 to 2 of 3(x+1) dx = 3*[x^2/2+x] from 0 to 2 = 3*(2+2) = 12.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Triple Integrals",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/TripleIntegrals.aspx",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "applications-volume-and-mass",
        lessonTitle: "Applications: Volume and Mass",
        estimatedMinutes: 20,
        topicTag: "multipleIntegrals",
        learningGoals: [
          "Use a triple integral to find the volume of a solid",
          "Use a triple integral with a variable density function to find the mass of a solid",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "From constant density to variable density",
            bodyText:
              "If a solid has constant density, mass is just density times volume - a formula from basic physics. But if density varies from point to point (denser near the base of a mountain, say, or wherever a material was compressed unevenly), you need to integrate the density function over the solid to accumulate the mass piece by piece, exactly the way integrating 1 over a solid gives its volume.",
          },
          {
            blockType: "keyFormula",
            headingText: "Mass as a triple integral",
            bodyText:
              "Mass of a solid E with density function rho(x,y,z): the triple integral of rho over E dV. When rho is constant, this reduces back to the familiar density times volume.",
            mathExpression: "M = \\iiint_E \\rho(x,y,z)\\,dV",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find the mass of the unit box B = [0,1] by [0,1] by [0,1] with density rho(x,y,z) = x+y+z. This is the same integral computed earlier in this unit for the box lesson: the integral from 0 to 1, integral from 0 to 1, integral from 0 to 1, of (x+y+z) dz dy dx = 3/2. So the mass is 3/2 (in whatever mass units the density was given in).",
            mathExpression: "M = \\iiint_B (x+y+z)\\,dV = \\dfrac{3}{2}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Using the plain volume formula (integrating 1) when the problem explicitly gives a variable density function. Mass requires integrating rho(x,y,z) itself, not a bare constant - reaching for the volume formula out of habit skips the density entirely and gives a number with the wrong units and the wrong meaning.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u7-l3-p1",
            topicTag: "multipleIntegrals",
            promptText: "Find the mass of the box [0,2] by [0,1] by [0,1] with constant density rho=5.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "10",
            stepByStepExplanation: "Mass = density * volume = 5 * (2*1*1) = 10.",
            difficultyLevel: 1,
          },
          {
            problemId: "c3-u7-l3-p2",
            topicTag: "multipleIntegrals",
            promptText: "Find the mass of the unit box [0,1] by [0,1] by [0,1] with density rho(x,y,z) = 2z.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "1",
            stepByStepExplanation:
              "The integral from 0 to 1 of 2z dz = [z^2] from 0 to 1 = 1. Integrating that constant 1 over the remaining unit square in x and y just gives 1*1 = 1.",
            difficultyLevel: 2,
          },
          {
            problemId: "c3-u7-l3-p3",
            topicTag: "multipleIntegrals",
            promptText:
              "Find the volume of the tetrahedron with vertices (0,0,0), (2,0,0), (0,2,0), (0,0,2), using the fact that a right tetrahedron with legs a, b, c along the axes has volume (1/6)*a*b*c.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "4/3",
            stepByStepExplanation: "V = (1/6)*2*2*2 = 8/6 = 4/3.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Triple Integrals (Applications)",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/TripleIntegrals.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.02: Multivariable Calculus",
            resourceUrl: "https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/",
            resourceType: "videoLesson",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "change-of-variables",
    unitTitle: "Change of Variables: Polar, Cylindrical, and Spherical Coordinates",
    unitDescription: "Evaluating multiple integrals in polar, cylindrical, and spherical coordinates, and the Jacobian.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Change of Variables: Polar, Cylindrical, and Spherical Coordinates",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc3-change-of-variables-quiz-p1",
          topicTag: "multipleIntegrals",
          promptText: "Find the area of the disk x^2+y^2<=16 by evaluating a double integral in polar coordinates.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "16*pi",
          acceptableAnswerVariants: ["16pi"],
          stepByStepExplanation:
            "Area = the integral from 0 to 2*pi, integral from 0 to 4, of r dr dtheta = the integral from 0 to 2*pi of [r^2/2] from 0 to 4 dtheta = the integral from 0 to 2*pi of 8 dtheta = 16*pi.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc3-change-of-variables-quiz-p2",
          topicTag: "multipleIntegrals",
          promptText: "Convert the double integral of (x^2+y^2) over the disk x^2+y^2<=4 to polar coordinates and evaluate it.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "8*pi",
          acceptableAnswerVariants: ["8pi"],
          stepByStepExplanation:
            "The integral becomes the integral from 0 to 2*pi, integral from 0 to 2, of r^2 * r dr dtheta = the integral from 0 to 2*pi of [r^4/4] from 0 to 2 dtheta = the integral from 0 to 2*pi of 4 dtheta = 8*pi.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc3-change-of-variables-quiz-p3",
          topicTag: "multipleIntegrals",
          promptText: "Convert the point (x,y,z) = (0,3,4) to cylindrical coordinates.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "(3, pi/2, 4)",
          acceptableAnswerVariants: ["r=3, theta=pi/2, z=4"],
          stepByStepExplanation:
            "r = the square root of 0^2+3^2 = 3. Since x=0 and y=3>0, theta = pi/2. z stays 4.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc3-change-of-variables-quiz-p4",
          topicTag: "multipleIntegrals",
          promptText: "Find the volume of the solid cylinder x^2+y^2<=9, 0<=z<=2, using cylindrical coordinates.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "18*pi",
          acceptableAnswerVariants: ["18pi"],
          stepByStepExplanation:
            "V = the integral from 0 to 2*pi, integral from 0 to 3, integral from 0 to 2, of r dz dr dtheta. Inner (dz): 2r. Middle (dr): the integral from 0 to 3 of 2r dr = [r^2] from 0 to 3 = 9. Outer (dtheta): the integral from 0 to 2*pi of 9 dtheta = 18*pi, matching pi*r^2*h = pi*9*2 = 18*pi.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc3-change-of-variables-quiz-p5",
          topicTag: "multipleIntegrals",
          promptText: "Convert the point (x,y,z) = (0,0,-5) to spherical coordinates.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "(5, pi, 0)",
          acceptableAnswerVariants: ["rho=5, phi=pi, theta=0 (or any theta)"],
          stepByStepExplanation:
            "rho = the distance from the origin = 5. Since the point lies on the negative z-axis, phi (the angle down from the positive z-axis) = pi. theta is undefined/arbitrary at the pole, conventionally taken as 0.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc3-change-of-variables-quiz-p6",
          topicTag: "multipleIntegrals",
          promptText: "Evaluate the triple integral of rho^2 over the solid ball rho<=1, using spherical coordinates.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "4*pi/5",
          acceptableAnswerVariants: ["4pi/5", "0.8*pi"],
          stepByStepExplanation:
            "This is the integral from 0 to 2*pi, integral from 0 to pi, integral from 0 to 1, of rho^2*rho^2*sin(phi) drho dphi dtheta = the integral of rho^4*sin(phi). Inner (drho): [rho^5/5] from 0 to 1 = 1/5. Middle (dphi): the integral from 0 to pi of (1/5)*sin(phi) dphi = (1/5)*2 = 2/5. Outer (dtheta): the integral from 0 to 2*pi of 2/5 dtheta = (2/5)(2*pi) = 4*pi/5.",
          difficultyLevel: 5,
        },
        {
          problemId: "calc3-change-of-variables-quiz-p7",
          topicTag: "multipleIntegrals",
          promptText: "In the substitution x=r*cos(theta), y=r*sin(theta), what does dA equal in terms of r, dr, and dtheta?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "r dr dtheta",
          acceptableAnswerVariants: ["r*dr*dtheta"],
          stepByStepExplanation:
            "The Jacobian of the polar substitution works out to exactly r, so the area element transforms as dA = |J| dr dtheta = r dr dtheta.",
          difficultyLevel: 2,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "double-integrals-in-polar-coordinates",
        lessonTitle: "Double Integrals in Polar Coordinates",
        estimatedMinutes: 25,
        topicTag: "multipleIntegrals",
        learningGoals: [
          "Convert a double integral over a circular region to polar coordinates",
          "Evaluate a double integral in polar coordinates, including the extra factor of r",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Circular regions want circular coordinates",
            bodyText:
              "Whenever a region is a disk, a ring, or a wedge - anything naturally described using a radius and an angle - converting to polar coordinates from Pre-Calculus often turns an ugly rectangular integral into a simple one. The substitutions are the same you already know: x=r*cos(theta), y=r*sin(theta), and x^2+y^2=r^2.",
          },
          {
            blockType: "keyFormula",
            headingText: "Polar double integral formula",
            bodyText:
              "The double integral of f(x,y) dA over a polar region D = the double integral of f(r*cos(theta), r*sin(theta)) * r dr dtheta. That extra factor of r is essential - it's not optional, and it comes from how area itself scales in polar coordinates.",
            mathExpression: "\\iint_D f(x,y)\\,dA = \\iint f(r\\cos\\theta, r\\sin\\theta)\\, r\\, dr\\, d\\theta",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find the volume under z=x^2+y^2 over the disk x^2+y^2<=4. Since x^2+y^2=r^2, the surface becomes z=r^2 in polar. The disk has radius 2, so 0<=r<=2 and 0<=theta<=2*pi. V = the integral from 0 to 2*pi, integral from 0 to 2, of r^2 * r dr dtheta = the integral from 0 to 2*pi, integral from 0 to 2, of r^3 dr dtheta. Inner: [r^4/4] from 0 to 2 = 16/4 = 4. Outer: the integral from 0 to 2*pi of 4 dtheta = 8*pi.",
            mathExpression: "V = \\int_0^{2\\pi}\\int_0^2 r^3\\,dr\\,d\\theta = 8\\pi",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Converting x^2+y^2 to r^2 correctly but forgetting to also multiply by the extra r that comes from dA = r dr dtheta. Omitting that factor is the single most common polar-integral error, and it silently changes the answer every time.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u8-l1-p1",
            topicTag: "multipleIntegrals",
            promptText: "Convert the double integral of (x^2+y^2) over the disk x^2+y^2<=9 to polar coordinates and evaluate it.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "81*pi/2",
            acceptableAnswerVariants: ["81pi/2", "(81/2)pi", "40.5pi"],
            stepByStepExplanation:
              "The integral becomes the integral from 0 to 2*pi, integral from 0 to 3, of r^2 * r dr dtheta = the integral from 0 to 2*pi of [r^4/4] from 0 to 3 dtheta = the integral from 0 to 2*pi of 81/4 dtheta = (81/4)(2*pi) = 81*pi/2.",
            difficultyLevel: 3,
          },
          {
            problemId: "c3-u8-l1-p2",
            topicTag: "multipleIntegrals",
            promptText:
              "Find the area enclosed by r=2cos(theta) (for theta from -pi/2 to pi/2) using the polar area integral.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "pi",
            stepByStepExplanation:
              "Area = the integral from -pi/2 to pi/2, integral from 0 to 2cos(theta), of r dr dtheta = the integral from -pi/2 to pi/2 of 2*cos^2(theta) dtheta. Using cos^2(theta) = (1+cos(2theta))/2, this becomes the integral of (1+cos(2theta)) dtheta from -pi/2 to pi/2, which equals pi.",
            difficultyLevel: 4,
          },
          {
            problemId: "c3-u8-l1-p3",
            topicTag: "multipleIntegrals",
            promptText: "Evaluate the integral from 0 to pi/2, integral from 0 to 1, of r dr dtheta.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "pi/4",
            stepByStepExplanation:
              "Inner: [r^2/2] from 0 to 1 = 1/2. Outer: the integral from 0 to pi/2 of 1/2 dtheta = (1/2)(pi/2) = pi/4. (This is just the area of a quarter of the unit disk.)",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Double Integrals in Polar Coordinates",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/DIPolarCoords.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 3, Chapter 5: Double Integrals in Polar Coordinates",
            resourceUrl: "https://openstax.org/books/calculus-volume-3/pages/5-3-double-integrals-in-polar-coordinates",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "triple-integrals-in-cylindrical-coordinates",
        lessonTitle: "Triple Integrals in Cylindrical Coordinates",
        estimatedMinutes: 25,
        topicTag: "multipleIntegrals",
        learningGoals: [
          "Convert a point between rectangular and cylindrical coordinates",
          "Set up and evaluate a triple integral in cylindrical coordinates",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Polar in the xy-plane, plain old z on top",
            bodyText:
              "Cylindrical coordinates are exactly polar coordinates for x and y, with z left completely untouched. They're the natural choice whenever a solid is built around a circular cross-section - cylinders, cones, and paraboloids that open along the z-axis all become dramatically simpler.",
          },
          {
            blockType: "keyFormula",
            headingText: "Cylindrical coordinate formulas",
            bodyText:
              "x = r*cos(theta), y = r*sin(theta), z = z. The volume element is dV = r dz dr dtheta - the same extra factor of r as polar coordinates, with z simply tagging along unchanged.",
            mathExpression: "dV = r\\,dz\\,dr\\,d\\theta",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find the volume of the solid cylinder x^2+y^2<=4, 0<=z<=5. In cylindrical coordinates this is simply 0<=r<=2, 0<=theta<=2*pi, 0<=z<=5. V = the integral from 0 to 2*pi, integral from 0 to 2, integral from 0 to 5, of r dz dr dtheta. Inner (dz): 5r. Middle (dr): the integral from 0 to 2 of 5r dr = 5*[r^2/2] from 0 to 2 = 10. Outer (dtheta): the integral from 0 to 2*pi of 10 dtheta = 20*pi. As a check, this matches the elementary cylinder volume formula pi*r^2*h = pi*4*5 = 20*pi.",
            mathExpression: "V = 20\\pi",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Trying to convert z into some trigonometric expression the way x and y are converted. In cylindrical coordinates, z is left completely alone - only x and y get the polar treatment, and z keeps its ordinary rectangular meaning throughout.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u8-l2-p1",
            topicTag: "multipleIntegrals",
            promptText:
              "Find the volume of the solid below z=4-x^2-y^2 and above z=0 (i.e. where 4-x^2-y^2>=0), using cylindrical coordinates.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "8*pi",
            acceptableAnswerVariants: ["8pi"],
            stepByStepExplanation:
              "The base region is r<=2 (where 4-r^2>=0). V = the integral from 0 to 2*pi, integral from 0 to 2, of (4-r^2)*r dr dtheta = the integral from 0 to 2*pi, integral from 0 to 2, of (4r-r^3) dr dtheta. Inner: [2r^2 - r^4/4] from 0 to 2 = 8-4 = 4. Outer: the integral from 0 to 2*pi of 4 dtheta = 8*pi.",
            difficultyLevel: 4,
          },
          {
            problemId: "c3-u8-l2-p2",
            topicTag: "multipleIntegrals",
            promptText: "Convert the point (x,y,z) = (1,1,2) to cylindrical coordinates.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(sqrt(2), pi/4, 2)",
            acceptableAnswerVariants: ["r=sqrt2, theta=pi/4, z=2", "(√2, π/4, 2)"],
            stepByStepExplanation:
              "r = the square root of 1^2+1^2 = the square root of 2. theta = arctan(1/1) = pi/4 (since both x and y are positive). z stays 2.",
            difficultyLevel: 2,
          },
          {
            problemId: "c3-u8-l2-p3",
            topicTag: "multipleIntegrals",
            promptText: "Evaluate the triple integral of z over the solid r<=1, 0<=z<=3 (using cylindrical coordinates).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "4.5*pi",
            acceptableAnswerVariants: ["4.5pi", "9pi/2"],
            stepByStepExplanation:
              "The integral from 0 to 2*pi, integral from 0 to 1, integral from 0 to 3, of z*r dz dr dtheta. Inner (dz): r*[z^2/2] from 0 to 3 = 4.5r. Middle (dr): the integral from 0 to 1 of 4.5r dr = 4.5*(1/2) = 2.25. Outer (dtheta): the integral from 0 to 2*pi of 2.25 dtheta = 4.5*pi.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Triple Integrals in Cylindrical Coordinates",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/TICylindricalCoords.aspx",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "triple-integrals-in-spherical-coordinates",
        lessonTitle: "Triple Integrals in Spherical Coordinates",
        estimatedMinutes: 30,
        topicTag: "multipleIntegrals",
        learningGoals: [
          "Convert a point between rectangular and spherical coordinates",
          "Set up and evaluate a triple integral in spherical coordinates",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "The natural coordinates for spheres and cones",
            bodyText:
              "Spherical coordinates describe a point using a distance from the origin (rho), an angle down from the positive z-axis (phi), and the same angle around the z-axis (theta) used in polar and cylindrical coordinates. They are by far the easiest way to handle solids built from spheres and cones centered at the origin.",
          },
          {
            blockType: "keyFormula",
            headingText: "Spherical coordinate formulas",
            bodyText:
              "x = rho*sin(phi)*cos(theta), y = rho*sin(phi)*sin(theta), z = rho*cos(phi), with rho>=0, 0<=phi<=pi, 0<=theta<=2*pi. The volume element is dV = rho^2*sin(phi) drho dphi dtheta - both the rho^2 AND the sin(phi) factors are required.",
            mathExpression: "dV = \\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Derive the volume of a sphere of radius a using spherical coordinates. V = the integral from 0 to 2*pi, integral from 0 to pi, integral from 0 to a, of rho^2*sin(phi) drho dphi dtheta. Inner (drho): [rho^3/3] from 0 to a = a^3/3. Middle (dphi): the integral from 0 to pi of (a^3/3)*sin(phi) dphi = (a^3/3)*[-cos(phi)] from 0 to pi = (a^3/3)*(1-(-1)) = 2a^3/3. Outer (dtheta): the integral from 0 to 2*pi of 2a^3/3 dtheta = (2a^3/3)(2*pi) = 4*pi*a^3/3, matching the well-known sphere volume formula exactly.",
            mathExpression: "V = \\dfrac{4}{3}\\pi a^3",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Including only one of the two extra factors in the volume element - using just rho^2, or just sin(phi), instead of both multiplied together. The sin(phi) factor accounts for how latitude circles shrink near the poles (phi near 0 or pi), and dropping it produces a badly wrong volume.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u8-l3-p1",
            topicTag: "multipleIntegrals",
            promptText: "Convert the point (x,y,z) = (0,0,5) to spherical coordinates.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(5,0,0)",
            acceptableAnswerVariants: ["rho=5, phi=0, theta=0 (or any theta)"],
            stepByStepExplanation:
              "rho = the distance from the origin = 5. Since the point lies on the positive z-axis, phi = 0 (straight down from the z-axis means 0 angle from it). theta is undefined/arbitrary at the pole, conventionally taken as 0.",
            difficultyLevel: 2,
          },
          {
            problemId: "c3-u8-l3-p2",
            topicTag: "multipleIntegrals",
            promptText: "Find the volume of the solid sphere of radius 3 using the spherical volume formula V=(4/3)*pi*a^3.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "36*pi",
            acceptableAnswerVariants: ["36pi"],
            stepByStepExplanation: "V = (4/3)*pi*(3^3) = (4/3)*pi*27 = 36*pi.",
            difficultyLevel: 1,
          },
          {
            problemId: "c3-u8-l3-p3",
            topicTag: "multipleIntegrals",
            promptText: "Evaluate the triple integral of rho over the solid ball rho<=2, using spherical coordinates.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "16*pi",
            acceptableAnswerVariants: ["16pi"],
            stepByStepExplanation:
              "This is the integral from 0 to 2*pi, integral from 0 to pi, integral from 0 to 2, of rho*rho^2*sin(phi) drho dphi dtheta = the integral of rho^3*sin(phi). Inner (drho): [rho^4/4] from 0 to 2 = 4. Middle (dphi): the integral from 0 to pi of 4*sin(phi) dphi = 4*2 = 8. Outer (dtheta): the integral from 0 to 2*pi of 8 dtheta = 16*pi.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Triple Integrals in Spherical Coordinates",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/TISphericalCoords.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.02: Multivariable Calculus",
            resourceUrl: "https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "the-jacobian-and-general-change-of-variables",
        lessonTitle: "The Jacobian and General Change of Variables",
        estimatedMinutes: 25,
        topicTag: "multipleIntegrals",
        learningGoals: [
          "Explain, at an introductory level, why a change of variables requires a scaling factor called the Jacobian",
          "Identify the Jacobian factor for the polar coordinate substitution specifically",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "The 'extra r' finally gets a name",
            bodyText:
              "Every time you've switched to polar coordinates in this unit, you've multiplied by an extra factor of r. That factor has a name and a general origin: it's called the Jacobian, and it measures exactly how much a small patch of area (or volume) stretches or shrinks under a change of variables. A full, rigorous treatment of the Jacobian uses a determinant of partial derivatives - a tool that gets its proper treatment once determinants are covered in Calculus V's linear algebra. For now, treat this lesson as a conceptual bridge: the polar Jacobian, worked out directly, turns out to be exactly the familiar factor of r.",
          },
          {
            blockType: "keyFormula",
            headingText: "The general idea, and the polar case",
            bodyText:
              "For a substitution from (u,v) to (x,y), the area element transforms as dA = |J| du dv, where |J| is the Jacobian's absolute value - a scaling factor that can vary from point to point. For the polar substitution x=r*cos(theta), y=r*sin(theta), this factor works out to exactly r, which is exactly the extra factor you've already been using since the first lesson of this unit.",
            mathExpression: "dA = |J|\\,du\\,dv, \\qquad \\text{for polar: } |J| = r",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: seeing where the polar factor of r comes from",
            bodyText:
              "Using x=r*cos(theta) and y=r*sin(theta), find the four partial derivatives: the partial of x with respect to r is cos(theta), the partial of x with respect to theta is -r*sin(theta), the partial of y with respect to r is sin(theta), and the partial of y with respect to theta is r*cos(theta). The Jacobian is built from these four pieces as (partial of x w.r.t. r)*(partial of y w.r.t. theta) - (partial of x w.r.t. theta)*(partial of y w.r.t. r) = cos(theta)*(r*cos(theta)) - (-r*sin(theta))*sin(theta) = r*cos^2(theta) + r*sin^2(theta) = r. So the Jacobian for polar coordinates is exactly r - precisely the factor you've been multiplying by all along.",
            mathExpression: "J = \\cos\\theta(r\\cos\\theta) - (-r\\sin\\theta)(\\sin\\theta) = r",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Thinking the factor of r introduced back in the first lesson of this unit was some special rule just for polar coordinates, unrelated to anything else. It is actually one specific case of a much more general fact: EVERY change of variables in a multiple integral needs its own scaling factor (the Jacobian), and it just happens to equal r for the polar substitution specifically. A different substitution - like the ones used for cylindrical or spherical coordinates - has its own Jacobian, which is why those factors (r, and rho^2*sin(phi)) look different from each other.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u8-l4-p1",
            topicTag: "multipleIntegrals",
            promptText: "In the substitution x=r*cos(theta), y=r*sin(theta), what is the Jacobian factor |J|?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "r",
            stepByStepExplanation:
              "Working out the four partial derivatives and combining them as (x_r)(y_theta) - (x_theta)(y_r) gives cos(theta)*(r*cos(theta)) - (-r*sin(theta))*sin(theta) = r*cos^2(theta)+r*sin^2(theta) = r.",
            difficultyLevel: 2,
          },
          {
            problemId: "c3-u8-l4-p2",
            topicTag: "multipleIntegrals",
            promptText:
              "Using dA = r dr dtheta, find the area of the annulus (ring) D: 1<=r<=2, 0<=theta<=2*pi.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "3*pi",
            acceptableAnswerVariants: ["3pi"],
            stepByStepExplanation:
              "Area = the integral from 0 to 2*pi, integral from 1 to 2, of r dr dtheta = the integral from 0 to 2*pi of [r^2/2] from 1 to 2 dtheta = the integral from 0 to 2*pi of 1.5 dtheta = 3*pi. This matches the direct formula pi*(2^2-1^2) = 3*pi.",
            difficultyLevel: 3,
          },
          {
            problemId: "c3-u8-l4-p3",
            topicTag: "multipleIntegrals",
            promptText:
              "True or false: when changing variables in a double integral, dA can always simply be replaced by du dv with no extra scaling factor, regardless of which substitution is used.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "false",
            acceptableAnswerVariants: ["False"],
            stepByStepExplanation:
              "This is false. A scaling factor (the Jacobian, |J|) is required in general. It happens to equal exactly r for the polar substitution, but a different substitution has its own, generally different, Jacobian factor.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Change of Variables",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/ChangeOfVariables.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 3, Chapter 5: Calculating Centers of Mass and Moments of Inertia",
            resourceUrl: "https://openstax.org/books/calculus-volume-3/pages/5-6-calculating-centers-of-mass-and-moments-of-inertia",
            resourceType: "textbookChapter",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "vector-fields-and-line-integrals",
    unitTitle: "Vector Fields, Line Integrals, and Green's Theorem",
    unitDescription: "Vector fields, line integrals, conservative fields, and Green's Theorem.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Vector Fields, Line Integrals, and Green's Theorem",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc3-vector-fields-and-line-integrals-quiz-p1",
          topicTag: "vectorCalculus",
          promptText: "For the vector field F(x,y) = <3x,-2y>, find F(2,-1).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "<6,2>",
          acceptableAnswerVariants: ["(6,2)"],
          stepByStepExplanation: "Substitute x=2, y=-1: <3(2), -2(-1)> = <6, 2>.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc3-vector-fields-and-line-integrals-quiz-p2",
          topicTag: "vectorCalculus",
          promptText: "The function f(x,y) = x^3*y^2 has gradient field F = grad f. Write F explicitly.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "<3x^2y^2,2x^3y>",
          acceptableAnswerVariants: ["(3x^2y^2, 2x^3y)"],
          stepByStepExplanation: "grad f = <f_x, f_y> = <3x^2*y^2, 2x^3*y>.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc3-vector-fields-and-line-integrals-quiz-p3",
          topicTag: "vectorCalculus",
          promptText: "Evaluate the line integral of (x+y) ds along C: r(t) = <t, 3t>, 0<=t<=2.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "8*sqrt(10)",
          acceptableAnswerVariants: ["8√10", "25.3"],
          stepByStepExplanation:
            "r'(t) = <1,3>, so |r'(t)| = the square root of 1+9 = the square root of 10 (constant). f(x(t),y(t)) = t+3t = 4t. The integral becomes (square root of 10) times the integral from 0 to 2 of 4t dt = (square root of 10)*[2t^2] from 0 to 2 = (square root of 10)*8 = 8*(square root of 10).",
          difficultyLevel: 3,
        },
        {
          problemId: "calc3-vector-fields-and-line-integrals-quiz-p4",
          topicTag: "vectorCalculus",
          promptText: "Find the work done by F(x,y) = <2y,x> along r(t) = <t, t^2>, 0<=t<=1.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "4/3",
          stepByStepExplanation:
            "r'(t) = <1,2t>. F(r(t)) = <2t^2, t>. Dot product: <2t^2,t> dot <1,2t> = 2t^2+2t^2 = 4t^2. Work = the integral from 0 to 1 of 4t^2 dt = [4t^3/3] from 0 to 1 = 4/3.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc3-vector-fields-and-line-integrals-quiz-p5",
          topicTag: "vectorCalculus",
          promptText: "Is the vector field F(x,y) = <y^2, 2xy+3> conservative?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "yes",
          acceptableAnswerVariants: ["yes, conservative"],
          stepByStepExplanation:
            "P=y^2, so the partial of P w.r.t. y is 2y. Q=2xy+3, so the partial of Q w.r.t. x is 2y. They match, so F is conservative.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc3-vector-fields-and-line-integrals-quiz-p6",
          topicTag: "vectorCalculus",
          promptText:
            "Find a potential function f for F(x,y) = <y^2, 2xy+3>, then use the Fundamental Theorem of Line Integrals to find the line integral of F dot dr from (0,0) to (1,2).",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "10",
          stepByStepExplanation:
            "The partial of f w.r.t. x = y^2 gives f = x*y^2 + g(y). Differentiating w.r.t. y: 2xy + g'(y), which must equal Q=2xy+3, so g'(y)=3 and g(y)=3y. Thus f(x,y) = x*y^2+3y. By the Fundamental Theorem: f(1,2) - f(0,0) = (1*4+6) - 0 = 10.",
          difficultyLevel: 4,
        },
        {
          problemId: "calc3-vector-fields-and-line-integrals-quiz-p7",
          topicTag: "vectorCalculus",
          promptText:
            "Use Green's Theorem to evaluate the closed line integral of (y^2 dx + x^2 dy) around the boundary of the square 0<=x<=2, 0<=y<=2, counterclockwise.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "0",
          stepByStepExplanation:
            "P=y^2, Q=x^2. The partial of Q w.r.t. x is 2x, and the partial of P w.r.t. y is 2y. Integrand: 2x-2y. Double integral over the square: the integral from 0 to 2, integral from 0 to 2, of (2x-2y) dy dx. Inner: [2xy-y^2] from 0 to 2 = 4x-4. Outer: the integral from 0 to 2 of (4x-4) dx = [2x^2-4x] from 0 to 2 = 8-8 = 0.",
          difficultyLevel: 4,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "vector-fields",
        lessonTitle: "Vector Fields",
        estimatedMinutes: 20,
        topicTag: "vectorCalculus",
        learningGoals: [
          "Evaluate a vector field at a given point",
          "Recognize a gradient field and relate it back to the function it came from",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Arrows attached to points, not a graph in the usual sense",
            bodyText:
              "A vector field F(x,y) = <P(x,y), Q(x,y)> assigns an actual vector - an arrow with both length and direction - to every point in its domain, rather than a single height the way z=f(x,y) does. Picture wind velocity at every point on a map, or the force of gravity at every point in space: at each location, there's a magnitude and a direction, and that's exactly what a vector field records.",
          },
          {
            blockType: "keyFormula",
            headingText: "Vector field notation and gradient fields",
            bodyText:
              "F(x,y) = <P(x,y), Q(x,y)>. A gradient field is a vector field that comes from taking the gradient of some scalar function f, i.e. F = grad f. Not every vector field is a gradient field - which one is which becomes the central question of this unit.",
            mathExpression: "\\mathbf{F}(x,y) = \\langle P(x,y), Q(x,y)\\rangle",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Evaluate the rotational vector field F(x,y) = <-y, x> at a few sample points to understand its shape. At (1,0), F = <0,1>, an arrow pointing straight up. At (0,1), F = <-1,0>, an arrow pointing straight left. At (-1,0), F = <0,-1>, pointing down. Following these arrows around the origin traces a counterclockwise rotation - this field describes something spinning around the origin.",
            mathExpression: "\\mathbf{F}(x,y) = \\langle -y, x\\rangle",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Confusing a vector field with the graph of a scalar function. z=f(x,y) produces a surface floating above the xy-plane; a vector field F(x,y) produces arrows that live IN the xy-plane itself, attached at each point of the domain - there's no third 'height' dimension involved.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u9-l1-p1",
            topicTag: "vectorCalculus",
            promptText: "For the vector field F(x,y) = <x,y>, find F(3,4).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "<3,4>",
            acceptableAnswerVariants: ["(3,4)"],
            stepByStepExplanation: "Substitute x=3, y=4 directly into <x,y>: <3,4>.",
            difficultyLevel: 1,
          },
          {
            problemId: "c3-u9-l1-p2",
            topicTag: "vectorCalculus",
            promptText: "For the vector field F(x,y) = <2x,-y>, find F(1,-2).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "<2,2>",
            acceptableAnswerVariants: ["(2,2)"],
            stepByStepExplanation: "F(1,-2) = <2(1), -(-2)> = <2,2>.",
            difficultyLevel: 1,
          },
          {
            problemId: "c3-u9-l1-p3",
            topicTag: "vectorCalculus",
            promptText: "The function f(x,y) = x^2*y has gradient field F = grad f. Write F explicitly.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "<2xy,x^2>",
            acceptableAnswerVariants: ["(2xy, x^2)"],
            stepByStepExplanation: "grad f = <f_x, f_y> = <2xy, x^2>.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Vector Fields",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/VectorFields.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 3, Chapter 6: Vector Fields",
            resourceUrl: "https://openstax.org/books/calculus-volume-3/pages/6-1-vector-fields",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "line-integrals-of-scalar-functions",
        lessonTitle: "Line Integrals of Scalar Functions",
        estimatedMinutes: 25,
        topicTag: "vectorCalculus",
        learningGoals: [
          "Set up a line integral of a scalar function along a parametrized curve",
          "Evaluate a line integral using the arc length element ds",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Integrating along a path instead of along the x-axis",
            bodyText:
              "A line integral of a scalar function f generalizes the definite integral: instead of accumulating f(x) along a straight stretch of the x-axis, you accumulate f(x,y) along a (possibly curvy) path C in the plane. The key is that the integration is done with respect to ARC LENGTH along the curve, ds, not with respect to t directly - so a factor of |r'(t)| always has to be included when you switch to the parameter t.",
          },
          {
            blockType: "keyFormula",
            headingText: "Line integral of a scalar function",
            bodyText:
              "For a curve C parametrized by r(t) = <x(t), y(t)>, a<=t<=b: the line integral of f ds over C = the integral from a to b of f(x(t),y(t)) * |r'(t)| dt.",
            mathExpression: "\\int_C f\\,ds = \\int_a^b f(x(t),y(t))\\,|\\mathbf{r}'(t)|\\,dt",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Evaluate the line integral of (x+y) ds along C: r(t) = <t, 2t>, 0<=t<=1. First find |r'(t)|: r'(t) = <1,2>, so |r'(t)| = the square root of 1+4 = the square root of 5 (a constant, since this is a straight line). Next, f(x(t),y(t)) = t+2t = 3t. The integral becomes the integral from 0 to 1 of 3t * (square root of 5) dt = (square root of 5) * [3t^2/2] from 0 to 1 = (3*square root of 5)/2.",
            mathExpression: "\\int_C (x+y)\\,ds = \\dfrac{3\\sqrt5}{2}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Integrating f(x(t),y(t)) with respect to dt directly, forgetting to multiply by |r'(t)| first. Without that factor, you're integrating with respect to the PARAMETER, not with respect to actual arc length along the curve - a completely different (and usually wrong) quantity.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u9-l2-p1",
            topicTag: "vectorCalculus",
            promptText: "Evaluate the line integral of 1 ds along C: r(t) = <3t,4t>, 0<=t<=2 (this just gives the arc length of C).",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "10",
            stepByStepExplanation:
              "r'(t) = <3,4>, |r'(t)| = the square root of 9+16 = 5. Integral = the integral from 0 to 2 of 5 dt = 10.",
            difficultyLevel: 2,
          },
          {
            problemId: "c3-u9-l2-p2",
            topicTag: "vectorCalculus",
            promptText: "Evaluate the line integral of x ds along C: r(t) = <t,t>, 0<=t<=1.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "sqrt(2)/2",
            acceptableAnswerVariants: ["√2/2", "1/sqrt(2)", "0.707"],
            stepByStepExplanation:
              "r'(t) = <1,1>, |r'(t)| = the square root of 2. Integral = the integral from 0 to 1 of t*(square root of 2) dt = (square root of 2)*(1/2) = (square root of 2)/2.",
            difficultyLevel: 3,
          },
          {
            problemId: "c3-u9-l2-p3",
            topicTag: "vectorCalculus",
            promptText: "Evaluate the line integral of xy ds along C: r(t) = <cos t, sin t>, 0<=t<=pi/2 (a quarter of the unit circle).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "1/2",
            stepByStepExplanation:
              "r'(t) = <-sin t, cos t>, and |r'(t)| = the square root of sin^2t+cos^2t = 1. The integral becomes the integral from 0 to pi/2 of cos(t)*sin(t) dt = [sin^2(t)/2] from 0 to pi/2 = 1/2.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Line Integrals - Part I",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/LineIntegralsPtI.aspx",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "line-integrals-of-vector-fields-and-work",
        lessonTitle: "Line Integrals of Vector Fields and Work",
        estimatedMinutes: 25,
        topicTag: "vectorCalculus",
        learningGoals: [
          "Set up and evaluate a line integral of a vector field along a parametrized curve",
          "Interpret this line integral as the work done by a force field along a path",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Only the part of the force pointing along the path counts",
            bodyText:
              "When a vector field F represents a force, the work it does moving an object along a curve C only counts the component of F that points ALONG the direction of motion at each instant - which is exactly what a dot product with the curve's velocity vector r'(t) computes. Perpendicular force contributes zero work, no matter how strong it is.",
          },
          {
            blockType: "keyFormula",
            headingText: "Line integral of a vector field (work)",
            bodyText:
              "Work = the line integral of F dot dr over C = the integral from a to b of F(r(t)) dot r'(t) dt.",
            mathExpression: "W = \\int_C \\mathbf{F}\\cdot d\\mathbf{r} = \\int_a^b \\mathbf{F}(\\mathbf{r}(t))\\cdot \\mathbf{r}'(t)\\,dt",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find the work done by F(x,y) = <y,x> along r(t) = <t, t^2>, 0<=t<=1. First, r'(t) = <1, 2t>. Next, substitute the path into F: since F=<y,x> and x=t, y=t^2, we get F(r(t)) = <t^2, t>. Dot the two: <t^2,t> dot <1,2t> = t^2 + 2t^2 = 3t^2. The work is the integral from 0 to 1 of 3t^2 dt = [t^3] from 0 to 1 = 1.",
            mathExpression: "W = \\int_0^1 3t^2\\,dt = 1",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Dotting F(r(t)) with the position vector r(t) instead of the velocity vector r'(t), or skipping the derivative of the path entirely. Work always requires dotting the field with the curve's DERIVATIVE (its tangent/velocity vector), never with the position itself.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u9-l3-p1",
            topicTag: "vectorCalculus",
            promptText: "Find the work done by the constant force F = <3,4> moving an object in a straight line from (0,0) to (2,5).",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "26",
            stepByStepExplanation:
              "For a constant force, work is simply F dot displacement: <3,4> dot <2,5> = 6+20 = 26.",
            difficultyLevel: 2,
          },
          {
            problemId: "c3-u9-l3-p2",
            topicTag: "vectorCalculus",
            promptText: "Find the work done by F(x,y) = <x,y> along the full unit circle r(t) = <cos t, sin t>, 0<=t<=2*pi.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "0",
            stepByStepExplanation:
              "r'(t) = <-sin t, cos t>. F(r(t)) = <cos t, sin t>. Their dot product is -cos(t)sin(t) + sin(t)cos(t) = 0 for every t, so the total work is 0. This makes sense: F is a (conservative) gradient field, and the path is a closed loop that returns to its starting point.",
            difficultyLevel: 4,
          },
          {
            problemId: "c3-u9-l3-p3",
            topicTag: "vectorCalculus",
            promptText: "Find the work done by F(x,y) = <y,-x> along the straight segment r(t) = <t,t>, 0<=t<=1.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "0",
            stepByStepExplanation:
              "r'(t) = <1,1>. F(r(t)) = <t,-t>. Dot product: t(1)+(-t)(1) = t-t = 0 for every t, so the work is 0.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Line Integrals - Part II",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/LineIntegralsPtII.aspx",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "conservative-vector-fields-and-the-fundamental-theorem-of-line-integrals",
        lessonTitle: "Conservative Vector Fields and the Fundamental Theorem of Line Integrals",
        estimatedMinutes: 25,
        topicTag: "vectorCalculus",
        learningGoals: [
          "Test whether a vector field is conservative",
          "Find a potential function for a conservative vector field",
          "Apply the Fundamental Theorem of Line Integrals to evaluate a line integral quickly",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "When the path doesn't matter, only the endpoints do",
            bodyText:
              "A vector field F=<P,Q> is called conservative when it is the gradient of some scalar function f, called a potential function. For a conservative field, the work done moving between two points is completely independent of the path taken - it only depends on the potential function's values at the start and end. This is the multivariable analog of the ordinary Fundamental Theorem of Calculus.",
          },
          {
            blockType: "keyFormula",
            headingText: "The conservative test and the Fundamental Theorem of Line Integrals",
            bodyText:
              "On a simply connected region, F=<P,Q> is conservative if and only if the partial of P with respect to y equals the partial of Q with respect to x. When F=grad f, the Fundamental Theorem of Line Integrals says: the line integral of F dot dr along any path from point A to point B = f(B) - f(A).",
            mathExpression: "\\dfrac{\\partial P}{\\partial y} = \\dfrac{\\partial Q}{\\partial x} \\implies \\int_C \\mathbf{F}\\cdot d\\mathbf{r} = f(B)-f(A)",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Show that F(x,y) = <2xy, x^2> is conservative, find its potential function, and use it to evaluate the line integral of F dot dr from (0,0) to (1,2). Test: the partial of 2xy with respect to y is 2x, and the partial of x^2 with respect to x is 2x - they match, so F is conservative. To find f, start from the partial of f with respect to x = 2xy, so f = x^2*y + g(y) for some function g of y alone. Differentiating this with respect to y gives x^2 + g'(y), which must equal Q = x^2, so g'(y)=0 and g is just a constant. So f(x,y) = x^2*y. Using the Fundamental Theorem: the line integral from (0,0) to (1,2) = f(1,2) - f(0,0) = (1)(2) - 0 = 2.",
            mathExpression: "f(x,y) = x^2y, \\qquad \\int_C \\mathbf{F}\\cdot d\\mathbf{r} = f(1,2)-f(0,0) = 2",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Assuming a field is conservative just because it 'looks balanced' or symmetric, without actually checking the partial of P with respect to y against the partial of Q with respect to x. Skipping this explicit test is risky - some innocent-looking fields fail it, and some odd-looking fields pass it.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u9-l4-p1",
            topicTag: "vectorCalculus",
            promptText: "Is the vector field F(x,y) = <3x^2*y, x^3> conservative?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "yes",
            acceptableAnswerVariants: ["yes, conservative"],
            stepByStepExplanation:
              "P=3x^2*y, so the partial of P w.r.t. y is 3x^2. Q=x^3, so the partial of Q w.r.t. x is 3x^2. They match, so F is conservative.",
            difficultyLevel: 2,
          },
          {
            problemId: "c3-u9-l4-p2",
            topicTag: "vectorCalculus",
            promptText: "Find a potential function f for F(x,y) = <3x^2*y, x^3> (from the previous problem).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "x^3*y",
            acceptableAnswerVariants: ["f(x,y)=x^3y"],
            stepByStepExplanation:
              "The partial of f w.r.t. x = 3x^2*y gives f = x^3*y + g(y). Differentiating w.r.t. y: x^3 + g'(y), which must equal Q=x^3, so g'(y)=0. Thus f(x,y) = x^3*y.",
            difficultyLevel: 3,
          },
          {
            problemId: "c3-u9-l4-p3",
            topicTag: "vectorCalculus",
            promptText:
              "Using the potential function f(x,y)=x^3*y from the previous problem, apply the Fundamental Theorem of Line Integrals to find the line integral of F dot dr along any path from (1,1) to (2,3).",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "23",
            stepByStepExplanation: "f(2,3) - f(1,1) = (8)(3) - (1)(1) = 24 - 1 = 23.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Conservative Vector Fields",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/ConservativeVectorField.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Paul's Online Math Notes: Fundamental Theorem for Line Integrals",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/FundThmLineIntegrals.aspx",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "greens-theorem",
        lessonTitle: "Green's Theorem",
        estimatedMinutes: 30,
        topicTag: "vectorCalculus",
        learningGoals: [
          "State Green's Theorem and its orientation requirement",
          "Apply Green's Theorem to convert a line integral around a closed curve into a double integral",
          "Use Green's Theorem's area formula to find the area enclosed by a curve",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "A boundary integral, rewritten as an integral over the whole interior",
            bodyText:
              "Green's Theorem connects a line integral around the boundary of a region to a double integral over the region's entire interior - it's the 2D vector-calculus version of the Fundamental Theorem of Calculus, linking a boundary to what's inside it. It requires the boundary curve to be traced counterclockwise (called the positive orientation); tracing it the other way flips the sign of the result.",
          },
          {
            blockType: "keyFormula",
            headingText: "Green's Theorem",
            bodyText:
              "For a positively oriented, simple closed curve C bounding a region D: the closed line integral of (P dx + Q dy) around C = the double integral over D of (the partial of Q with respect to x minus the partial of P with respect to y) dA.",
            mathExpression: "\\oint_C (P\\,dx+Q\\,dy) = \\iint_D \\left(\\dfrac{\\partial Q}{\\partial x} - \\dfrac{\\partial P}{\\partial y}\\right) dA",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Use Green's Theorem to evaluate the closed line integral of (xy dx + x^2 dy) around the boundary of the unit square 0<=x<=1, 0<=y<=1, counterclockwise. Here P=xy and Q=x^2. The partial of Q with respect to x is 2x, and the partial of P with respect to y is x. The double integral's integrand is 2x-x = x. So the line integral equals the double integral of x over the unit square: the integral from 0 to 1, integral from 0 to 1, of x dy dx = the integral from 0 to 1 of x dx = 1/2.",
            mathExpression: "\\oint_C (xy\\,dx+x^2\\,dy) = \\iint_D x\\,dA = \\dfrac12",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Applying Green's Theorem to a curve that's actually oriented clockwise without adjusting the sign. Green's Theorem as stated requires counterclockwise (positive) orientation; if the given curve runs clockwise, the correct value is the NEGATIVE of what the double integral gives.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u9-l5-p1",
            topicTag: "vectorCalculus",
            promptText:
              "Use Green's Theorem to evaluate the closed line integral of (y dx + x dy) around the unit circle, counterclockwise.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "0",
            stepByStepExplanation:
              "P=y, Q=x. The partial of Q w.r.t. x is 1, and the partial of P w.r.t. y is 1. The integrand 1-1=0, so the double integral (and hence the line integral) is 0. (This makes sense: y dx + x dy is exactly d(xy), a conservative differential, and the loop is closed.)",
            difficultyLevel: 3,
          },
          {
            problemId: "c3-u9-l5-p2",
            topicTag: "vectorCalculus",
            promptText:
              "Use Green's Theorem to evaluate the closed line integral of (x^2 dx + xy dy) around the boundary of the rectangle 0<=x<=2, 0<=y<=3, counterclockwise.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "9",
            stepByStepExplanation:
              "P=x^2, Q=xy. The partial of Q w.r.t. x is y, and the partial of P w.r.t. y is 0. Integrand: y. The double integral of y over the rectangle = the integral from 0 to 2, integral from 0 to 3, of y dy dx = the integral from 0 to 2 of 4.5 dx = 9.",
            difficultyLevel: 4,
          },
          {
            problemId: "c3-u9-l5-p3",
            topicTag: "vectorCalculus",
            promptText:
              "Use the area formula from Green's Theorem, Area = (1/2) times the closed line integral of (x dy - y dx), to find the area enclosed by the circle of radius 3 parametrized by r(t)=<3cos t, 3sin t>, 0<=t<=2*pi.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "9*pi",
            acceptableAnswerVariants: ["9pi"],
            stepByStepExplanation:
              "x dy = 3cos(t) * 3cos(t) dt = 9cos^2(t) dt, and y dx = 3sin(t) * (-3sin(t)) dt = -9sin^2(t) dt, so x dy - y dx = 9cos^2(t) dt + 9sin^2(t) dt = 9 dt. Area = (1/2) * the integral from 0 to 2*pi of 9 dt = (1/2)(9)(2*pi) = 9*pi, matching the direct formula pi*r^2 = pi*9.",
            difficultyLevel: 5,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Green's Theorem",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/GreensTheorem.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 3, Chapter 6: Green's Theorem",
            resourceUrl: "https://openstax.org/books/calculus-volume-3/pages/6-4-greens-theorem",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.02: Multivariable Calculus",
            resourceUrl: "https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/",
            resourceType: "videoLesson",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "surface-integrals-and-stokes-theorem",
    unitTitle: "Surface Integrals, Divergence, and Stokes' Theorem",
    unitDescription: "Surface integrals, divergence and curl, the Divergence Theorem, and Stokes' Theorem.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Surface Integrals, Divergence, and Stokes' Theorem",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc3-surface-integrals-and-stokes-theorem-quiz-p1",
          topicTag: "vectorCalculus",
          promptText:
            "For the parametrization r(u,v) = <u, v, 2u+v>, find |r_u cross r_v| (the factor used in the surface area integral).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "sqrt(6)",
          acceptableAnswerVariants: ["√6", "2.449"],
          stepByStepExplanation:
            "r_u = <1,0,2> and r_v = <0,1,1>. Cross product: first component (0)(1)-(2)(1)=-2, second component (2)(0)-(1)(1)=-1, third component (1)(1)-(0)(0)=1. So r_u cross r_v = <-2,-1,1>, with magnitude the square root of 4+1+1 = the square root of 6.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc3-surface-integrals-and-stokes-theorem-quiz-p2",
          topicTag: "vectorCalculus",
          promptText:
            "Using |r_x cross r_y| = the square root of 6 (from the previous problem's pattern), find the surface area of the plane z=2x+y over the square 0<=x<=2, 0<=y<=2.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "4*sqrt(6)",
          acceptableAnswerVariants: ["4√6", "9.80"],
          stepByStepExplanation:
            "Surface area = (square root of 6) times the area of the square (2*2=4), giving 4 times the square root of 6.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc3-surface-integrals-and-stokes-theorem-quiz-p3",
          topicTag: "vectorCalculus",
          promptText:
            "For the flux integral of F(x,y,z)=<0,0,3> across a surface parametrized over the unit square 0<=u<=1, 0<=v<=1, using r_u cross r_v = <-2,-1,1> (constant), find the flux.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "3",
          stepByStepExplanation:
            "F dotted with r_u cross r_v = <0,0,3> dot <-2,-1,1> = 0+0+3 = 3 (a constant). Integrating this constant 3 over the unit square (area 1) gives a flux of 3.",
          difficultyLevel: 4,
        },
        {
          problemId: "calc3-surface-integrals-and-stokes-theorem-quiz-p4",
          topicTag: "vectorCalculus",
          promptText: "Find the divergence of F(x,y,z) = <x^2, y^2, z^2>.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "2x+2y+2z",
          stepByStepExplanation:
            "Divergence = the partial of x^2 w.r.t. x + the partial of y^2 w.r.t. y + the partial of z^2 w.r.t. z = 2x+2y+2z.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc3-surface-integrals-and-stokes-theorem-quiz-p5",
          topicTag: "vectorCalculus",
          promptText: "Find the curl of F(x,y,z) = <yz, xz, xy>.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "<0,0,0>",
          acceptableAnswerVariants: ["(0,0,0)", "0"],
          stepByStepExplanation:
            "First component: (partial of xy w.r.t. y) minus (partial of xz w.r.t. z) = x-x=0. Second component: (partial of yz w.r.t. z) minus (partial of xy w.r.t. x) = y-y=0. Third component: (partial of xz w.r.t. x) minus (partial of yz w.r.t. y) = z-z=0. So curl F = <0,0,0>, consistent with F being the gradient field of f(x,y,z)=xyz.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc3-surface-integrals-and-stokes-theorem-quiz-p6",
          topicTag: "vectorCalculus",
          promptText: "Use the Divergence Theorem to find the outward flux of F=<x,y,z> through the sphere of radius 5.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "500*pi",
          acceptableAnswerVariants: ["500pi"],
          stepByStepExplanation:
            "div F = 1+1+1 = 3. Volume of the sphere of radius 5 is (4/3)*pi*(5^3) = 500*pi/3. Flux = 3 * (500*pi/3) = 500*pi.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc3-surface-integrals-and-stokes-theorem-quiz-p7",
          topicTag: "vectorCalculus",
          promptText:
            "For F(x,y,z)=<-y,x,0> (curl F=<0,0,2>), use Stokes' Theorem to find the closed line integral of F dot dr around the boundary of the disk x^2+y^2<=9 in the plane z=0, counterclockwise.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "18*pi",
          acceptableAnswerVariants: ["18pi"],
          stepByStepExplanation:
            "The surface integral of curl F dot dS over the flat disk (upward normal) is the double integral of 2 over the disk, which is 2 times the disk's area, pi*(3^2)=9*pi. So the flux is 2*9*pi = 18*pi, which by Stokes' Theorem equals the line integral.",
          difficultyLevel: 4,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "parametric-surfaces-and-surface-area",
        lessonTitle: "Parametric Surfaces and Surface Area",
        estimatedMinutes: 25,
        topicTag: "vectorCalculus",
        learningGoals: [
          "Parametrize a surface using two parameters",
          "Set up and evaluate a surface area integral using the cross product of partial derivatives",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "A surface needs two parameters, not one",
            bodyText:
              "Just as a curve needs one parameter t to trace it out, a surface needs two parameters, u and v, since a surface is inherently two-dimensional. A parametrization r(u,v) = <x(u,v), y(u,v), z(u,v)> sweeps out the surface as u and v range over some 2D parameter region D. At each point, the two partial derivative vectors r_u and r_v lie tangent to the surface, and their cross product is normal to it - exactly parallel to the role the derivative played for space curves.",
          },
          {
            blockType: "keyFormula",
            headingText: "Surface area formula",
            bodyText:
              "Surface area of S, parametrized by r(u,v) over a region D: the double integral over D of the magnitude of (r_u cross r_v) dA.",
            mathExpression: "\\text{Surface Area} = \\iint_D |\\mathbf{r}_u \\times \\mathbf{r}_v|\\,dA",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find the surface area of the portion of the plane z=4-x-y lying over the unit square 0<=x<=1, 0<=y<=1. Parametrize using x and y themselves as the parameters: r(x,y) = <x, y, 4-x-y>. Then r_x = <1,0,-1> and r_y = <0,1,-1>. Their cross product: first component (0)(-1)-(-1)(1)=1, second component (-1)(0)-(1)(-1)=1, third component (1)(1)-(0)(0)=1. So r_x cross r_y = <1,1,1>, with magnitude the square root of 3. The surface area is the square root of 3 times the area of the unit square (which is 1), so the surface area is exactly the square root of 3.",
            mathExpression: "\\text{Surface Area} = \\sqrt{3}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Computing r_u cross r_v and then integrating the VECTOR itself, instead of taking its magnitude first. The surface area element requires the scalar magnitude |r_u cross r_v| - a bare vector can't be the value of an ordinary double integral.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u10-l1-p1",
            topicTag: "vectorCalculus",
            promptText: "For the parametrization r(u,v) = <u, v, u+v>, find r_u and r_v.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "r_u=<1,0,1>, r_v=<0,1,1>",
            acceptableAnswerVariants: ["(1,0,1) and (0,1,1)"],
            stepByStepExplanation:
              "Differentiate each component with respect to u (holding v constant): r_u = <1,0,1>. Differentiate with respect to v (holding u constant): r_v = <0,1,1>.",
            difficultyLevel: 2,
          },
          {
            problemId: "c3-u10-l1-p2",
            topicTag: "vectorCalculus",
            promptText: "Using r_u=<1,0,1> and r_v=<0,1,1> from the previous problem, find r_u cross r_v.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "<-1,-1,1>",
            acceptableAnswerVariants: ["(-1,-1,1)"],
            stepByStepExplanation:
              "First component: (0)(1)-(1)(1)=-1. Second component: (1)(0)-(1)(1)=-1. Third component: (1)(1)-(0)(0)=1. Result: <-1,-1,1>, which has magnitude the square root of 3.",
            difficultyLevel: 3,
          },
          {
            problemId: "c3-u10-l1-p3",
            topicTag: "vectorCalculus",
            promptText:
              "Using the fact that |r_u cross r_v| = the square root of 3 for the plane z=x+y (from the previous problem's pattern), find the surface area of this plane over the square 0<=x<=2, 0<=y<=2.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "4*sqrt(3)",
            acceptableAnswerVariants: ["4√3", "4sqrt3"],
            stepByStepExplanation: "Surface area = (square root of 3) times the area of the square (2*2=4), giving 4 times the square root of 3.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Surface Area",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/SurfaceArea.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 3, Chapter 6: Surface Integrals",
            resourceUrl: "https://openstax.org/books/calculus-volume-3/pages/6-6-surface-integrals",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "surface-integrals",
        lessonTitle: "Surface Integrals",
        estimatedMinutes: 30,
        topicTag: "vectorCalculus",
        learningGoals: [
          "Set up and evaluate a surface integral of a scalar function",
          "Set up and evaluate a flux integral of a vector field across a surface",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Two flavors: accumulating a scalar, or measuring flow through",
            bodyText:
              "A surface integral of a scalar function generalizes the line integral idea to two dimensions - it accumulates f(x,y,z) over the whole surface, weighted by surface area. A flux integral instead measures how much a vector field 'flows through' the surface, by dotting the field with the surface's own normal vector direction at each point - it's the surface analog of the work integral from the previous unit.",
          },
          {
            blockType: "keyFormula",
            headingText: "Surface integral and flux integral formulas",
            bodyText:
              "Scalar surface integral: the double integral over D of f(r(u,v)) times |r_u cross r_v| dA. Flux integral: the double integral over D of F(r(u,v)) dotted with (r_u cross r_v) dA - note that for flux, you dot with the cross product vector directly, without first taking its magnitude.",
            mathExpression: "\\iint_S \\mathbf{F}\\cdot d\\mathbf{S} = \\iint_D \\mathbf{F}(\\mathbf{r}(u,v))\\cdot(\\mathbf{r}_u\\times\\mathbf{r}_v)\\,dA",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Evaluate the surface integral of (x+y+z) over the plane z=4-x-y above the unit square 0<=x<=1, 0<=y<=1. From the previous lesson, |r_x cross r_y| = the square root of 3 for this surface. On the surface itself, z=4-x-y, so x+y+z = x+y+(4-x-y) = 4 always - a constant! The integral becomes the double integral over the unit square of 4 times the square root of 3 dA = 4 times the square root of 3 times the area of the square (which is 1), giving 4 times the square root of 3.",
            mathExpression: "\\iint_S (x+y+z)\\,dS = 4\\sqrt{3}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "For a flux integral, taking the magnitude of r_u cross r_v before dotting with F, the way you would for a plain scalar surface integral. Flux requires dotting F directly with the cross product VECTOR (keeping its sign and direction), not with its magnitude - that direction is exactly what tells you which way the field is flowing relative to the surface.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u10-l2-p1",
            topicTag: "vectorCalculus",
            promptText:
              "Evaluate the surface integral of the constant 2 over the plane z=4-x-y above the unit square (where |r_x cross r_y| = the square root of 3).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "2*sqrt(3)",
            acceptableAnswerVariants: ["2√3", "2sqrt3"],
            stepByStepExplanation: "The integral is 2 times the square root of 3 times the area of the unit square (1), giving 2 times the square root of 3.",
            difficultyLevel: 2,
          },
          {
            problemId: "c3-u10-l2-p2",
            topicTag: "vectorCalculus",
            promptText:
              "For the flux integral of F(x,y,z)=<0,0,1> across the plane z=u+v over the unit square, using r_u cross r_v = <-1,-1,1> (constant), find the flux.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "1",
            stepByStepExplanation:
              "F dotted with r_u cross r_v = <0,0,1> dot <-1,-1,1> = 0+0+1 = 1 (a constant). Integrating this constant 1 over the unit square (area 1) gives a flux of 1.",
            difficultyLevel: 3,
          },
          {
            problemId: "c3-u10-l2-p3",
            topicTag: "vectorCalculus",
            promptText:
              "Evaluate the surface integral of x over the plane z=x+y above the unit square 0<=x<=1, 0<=y<=1 (where |r_x cross r_y| = the square root of 3).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "sqrt(3)/2",
            acceptableAnswerVariants: ["√3/2", "0.866"],
            stepByStepExplanation:
              "The integral is the square root of 3 times the double integral of x over the unit square, which is the square root of 3 times 1/2, giving the square root of 3 over 2.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Surface Integrals",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/SurfaceIntegrals.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Paul's Online Math Notes: Surface Integrals of Vector Fields",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/SurfIntVectorFields.aspx",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "divergence-and-curl",
        lessonTitle: "Divergence and Curl",
        estimatedMinutes: 25,
        topicTag: "vectorCalculus",
        learningGoals: [
          "Compute the divergence of a vector field",
          "Compute the curl of a vector field",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Two different ways to measure a field's 'behavior' at a point",
            bodyText:
              "Divergence is a scalar that measures how much a vector field is spreading out (a source) or converging (a sink) at a point - positive divergence means net outward flow, negative means net inward flow. Curl is a vector that measures how much a field is rotating or 'swirling' around a point - a curl of zero everywhere means the field has no local spinning tendency anywhere.",
          },
          {
            blockType: "keyFormula",
            headingText: "Divergence and curl formulas",
            bodyText:
              "For F = <P,Q,R>: divergence of F = the partial of P w.r.t. x + the partial of Q w.r.t. y + the partial of R w.r.t. z. Curl of F = < (partial of R w.r.t. y minus partial of Q w.r.t. z), (partial of P w.r.t. z minus partial of R w.r.t. x), (partial of Q w.r.t. x minus partial of P w.r.t. y) >.",
            mathExpression:
              "\\text{div}\\,\\mathbf{F} = P_x+Q_y+R_z, \\qquad \\text{curl}\\,\\mathbf{F} = \\langle R_y-Q_z,\\ P_z-R_x,\\ Q_x-P_y\\rangle",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "For F(x,y,z) = <x^2*y, y^2*z, z^2*x>, find the divergence and the curl. Divergence: the partial of x^2*y w.r.t. x is 2xy; the partial of y^2*z w.r.t. y is 2yz; the partial of z^2*x w.r.t. z is 2zx. Adding these: divergence = 2xy+2yz+2zx. Curl, component by component: first component is (partial of z^2*x w.r.t. y, which is 0) minus (partial of y^2*z w.r.t. z, which is y^2), giving -y^2. Second component is (partial of x^2*y w.r.t. z, which is 0) minus (partial of z^2*x w.r.t. x, which is z^2), giving -z^2. Third component is (partial of y^2*z w.r.t. x, which is 0) minus (partial of x^2*y w.r.t. y, which is x^2), giving -x^2. So curl F = <-y^2, -z^2, -x^2>.",
            mathExpression: "\\text{div}\\,\\mathbf{F} = 2xy+2yz+2zx, \\qquad \\text{curl}\\,\\mathbf{F} = \\langle -y^2,-z^2,-x^2\\rangle",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Treating the curl formula like a symmetric pattern (the way the gradient works) and mixing up which function pairs with which variable in each component. The curl's three components follow a specific cyclic pattern - R_y minus Q_z, then P_z minus R_x, then Q_x minus P_y - and swapping the order of subtraction, or pairing the wrong function with the wrong variable, produces the wrong vector (often with flipped signs).",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u10-l3-p1",
            topicTag: "vectorCalculus",
            promptText: "Find the divergence of F(x,y,z) = <x,y,z>.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "3",
            stepByStepExplanation: "Divergence = the partial of x w.r.t. x + the partial of y w.r.t. y + the partial of z w.r.t. z = 1+1+1 = 3.",
            difficultyLevel: 2,
          },
          {
            problemId: "c3-u10-l3-p2",
            topicTag: "vectorCalculus",
            promptText: "Find the curl of F(x,y,z) = <x,y,z>.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "<0,0,0>",
            acceptableAnswerVariants: ["(0,0,0)", "0"],
            stepByStepExplanation:
              "Every partial derivative needed for the curl (like the partial of z w.r.t. y, or the partial of x w.r.t. z) is 0, since each component of F depends only on its own matching variable. So curl F = <0,0,0> - this field has no rotation anywhere, consistent with it being a gradient field.",
            difficultyLevel: 3,
          },
          {
            problemId: "c3-u10-l3-p3",
            topicTag: "vectorCalculus",
            promptText: "Find the divergence and curl of F(x,y,z) = <-y, x, 0>.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "div=0, curl=<0,0,2>",
            acceptableAnswerVariants: ["divergence 0, curl (0,0,2)"],
            stepByStepExplanation:
              "Divergence: the partial of -y w.r.t. x is 0, the partial of x w.r.t. y is 0, the partial of 0 w.r.t. z is 0. Total: 0. Curl: first component (partial of 0 w.r.t. y) minus (partial of x w.r.t. z) = 0-0=0. Second component (partial of -y w.r.t. z) minus (partial of 0 w.r.t. x) = 0-0=0. Third component (partial of x w.r.t. x) minus (partial of -y w.r.t. y) = 1-(-1)=2. So curl F = <0,0,2>, reflecting that this field rotates around the z-axis.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Curl and Divergence",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/CurlDivergence.aspx",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "the-divergence-theorem",
        lessonTitle: "The Divergence Theorem",
        estimatedMinutes: 25,
        topicTag: "vectorCalculus",
        learningGoals: [
          "State the Divergence Theorem and its requirement of a closed surface",
          "Apply the Divergence Theorem to convert a flux integral into a triple integral",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Total outward flow through a closed surface equals total divergence inside",
            bodyText:
              "The Divergence Theorem says that the total flux of a vector field out through a CLOSED surface (one that fully encloses a solid region, with no gaps or open ends) equals the total divergence accumulated throughout the solid's interior. It's another Fundamental-Theorem-style result: a boundary quantity (flux out) equals an interior quantity (accumulated divergence), and it very often turns a difficult surface integral into a much easier triple integral.",
          },
          {
            blockType: "keyFormula",
            headingText: "The Divergence Theorem",
            bodyText:
              "For a closed, outward-oriented surface S enclosing a solid region E: the flux integral of F dot dS over S = the triple integral of the divergence of F over E dV.",
            mathExpression: "\\iint_S \\mathbf{F}\\cdot d\\mathbf{S} = \\iiint_E \\text{div}\\,\\mathbf{F}\\,dV",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Use the Divergence Theorem to find the outward flux of F(x,y,z) = <x,y,z> through the sphere x^2+y^2+z^2=9 (radius 3). The divergence of F is 1+1+1 = 3, a constant. By the Divergence Theorem, the flux equals the triple integral of 3 over the solid ball, which is 3 times the ball's volume. The volume of a sphere of radius 3 is (4/3)*pi*27 = 36*pi. So the flux is 3 * 36*pi = 108*pi.",
            mathExpression: "\\text{Flux} = 3 \\cdot \\dfrac{4}{3}\\pi(3)^3 = 108\\pi",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Applying the Divergence Theorem to a surface that isn't actually closed - like a single open hemisphere with no flat 'lid' on the bottom. The theorem only applies to a surface that completely encloses a solid region; an open surface needs to be handled directly as a surface integral instead (or have a lid added to close it off, with the lid's own flux subtracted back out).",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u10-l4-p1",
            topicTag: "vectorCalculus",
            promptText: "Use the Divergence Theorem to find the outward flux of F=<2x,2y,2z> through the sphere of radius 1.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "8*pi",
            acceptableAnswerVariants: ["8pi"],
            stepByStepExplanation:
              "div F = 2+2+2=6. Volume of the unit sphere is (4/3)*pi. Flux = 6*(4/3)*pi = 8*pi.",
            difficultyLevel: 3,
          },
          {
            problemId: "c3-u10-l4-p2",
            topicTag: "vectorCalculus",
            promptText: "Use the Divergence Theorem to find the outward flux of F=<x,y,z> through the boundary of the unit box [0,1]x[0,1]x[0,1].",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "3",
            stepByStepExplanation: "div F = 3. Volume of the unit box = 1. Flux = 3*1 = 3.",
            difficultyLevel: 3,
          },
          {
            problemId: "c3-u10-l4-p3",
            topicTag: "vectorCalculus",
            promptText:
              "Find the divergence of F=<x^3,y^3,z^3>, then use the Divergence Theorem and spherical coordinates to find the outward flux through the sphere of radius 2.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "384*pi/5",
            acceptableAnswerVariants: ["384pi/5", "(384/5)pi"],
            stepByStepExplanation:
              "div F = 3x^2+3y^2+3z^2 = 3(x^2+y^2+z^2) = 3*rho^2 in spherical coordinates. The flux is the triple integral of 3*rho^2 * rho^2*sin(phi) over the ball of radius 2, i.e. 3 times the integral from 0 to 2*pi, integral from 0 to pi, integral from 0 to 2, of rho^4*sin(phi) drho dphi dtheta. The inner integral gives [rho^5/5] from 0 to 2 = 32/5. The middle integral gives (32/5)*[-cos(phi)] from 0 to pi = (32/5)*2 = 64/5. The outer integral gives (64/5)*2*pi = 128*pi/5. Multiplying by the factor of 3 out front: 3*(128*pi/5) = 384*pi/5.",
            difficultyLevel: 5,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Divergence Theorem",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/DivergenceTheorem.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 3, Chapter 6: The Divergence Theorem",
            resourceUrl: "https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "stokes-theorem-introduction",
        lessonTitle: "Stokes' Theorem (Introduction)",
        estimatedMinutes: 25,
        topicTag: "vectorCalculus",
        learningGoals: [
          "State Stokes' Theorem and the right-hand rule orientation requirement",
          "Apply Stokes' Theorem to convert a line integral into a surface integral of curl F",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "The capstone theorem: Green's Theorem lifted into 3D",
            bodyText:
              "Stokes' Theorem is the 3D generalization of Green's Theorem: instead of relating a closed line integral in the plane to a double integral over a flat region, it relates a closed line integral around the boundary of a (possibly curved, tilted) surface in space to the surface integral of curl F over that surface. The orientation of the surface's normal vector and the direction the boundary curve is traced must agree via the right-hand rule: curl the fingers of your right hand in the direction the curve is traced, and your thumb points in the direction the surface's normal should face.",
          },
          {
            blockType: "keyFormula",
            headingText: "Stokes' Theorem",
            bodyText:
              "For an oriented surface S with boundary curve C, oriented consistently by the right-hand rule: the closed line integral of F dot dr around C = the surface integral of (curl F) dot dS over S.",
            mathExpression: "\\oint_C \\mathbf{F}\\cdot d\\mathbf{r} = \\iint_S (\\text{curl}\\,\\mathbf{F})\\cdot d\\mathbf{S}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Verify Stokes' Theorem for F(x,y,z) = <-y,x,0> using S = the flat unit disk x^2+y^2<=1 in the plane z=0, with boundary C = the unit circle traced counterclockwise. First, curl F = <0,0,2> (computed earlier in this unit). For a flat disk in the xy-plane with upward-pointing normal (matching counterclockwise via the right-hand rule), curl F dotted with the surface's normal direction is just its z-component, 2. The surface integral becomes the double integral of 2 over the unit disk, which is 2 times the disk's area (pi), giving 2*pi. Now check directly: along C, r(t)=<cos t, sin t, 0>, r'(t)=<-sin t, cos t, 0>, and F(r(t))=<-sin t, cos t, 0>. Their dot product is sin^2(t)+cos^2(t)=1, so the line integral is the integral from 0 to 2*pi of 1 dt = 2*pi. Both methods agree, confirming Stokes' Theorem in this case.",
            mathExpression: "\\oint_C \\mathbf{F}\\cdot d\\mathbf{r} = \\iint_S (\\text{curl}\\,\\mathbf{F})\\cdot d\\mathbf{S} = 2\\pi",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Choosing a surface normal direction that doesn't actually match the boundary curve's traced direction via the right-hand rule. Flipping the normal flips the sign of the surface integral, so unless both orientations are made consistent with each other first, the surface integral and the line integral will disagree even though the theorem itself is correct.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c3-u10-l5-p1",
            topicTag: "vectorCalculus",
            promptText:
              "For F(x,y,z)=<-y,x,0> (curl F=<0,0,2>), use Stokes' Theorem to find the closed line integral of F dot dr around the boundary of the disk x^2+y^2<=4 in the plane z=0, counterclockwise.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "8*pi",
            acceptableAnswerVariants: ["8pi"],
            stepByStepExplanation:
              "The surface integral of curl F dot dS over the flat disk (upward normal) is the double integral of 2 over the disk, which is 2 times the disk's area, pi*(2^2)=4*pi. So the flux is 2*4*pi = 8*pi, which by Stokes' Theorem equals the line integral.",
            difficultyLevel: 4,
          },
          {
            problemId: "c3-u10-l5-p2",
            topicTag: "vectorCalculus",
            promptText: "Find the curl of F(x,y,z) = <y,-x,z>.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "<0,0,-2>",
            acceptableAnswerVariants: ["(0,0,-2)"],
            stepByStepExplanation:
              "First component: (partial of z w.r.t. y) minus (partial of -x w.r.t. z) = 0-0=0. Second component: (partial of y w.r.t. z) minus (partial of z w.r.t. x) = 0-0=0. Third component: (partial of -x w.r.t. x) minus (partial of y w.r.t. y) = -1-1=-2. So curl F = <0,0,-2>.",
            difficultyLevel: 4,
          },
          {
            problemId: "c3-u10-l5-p3",
            topicTag: "vectorCalculus",
            promptText:
              "Using curl F=<0,0,-2> from the previous problem, and a flat unit disk S in the plane z=0 with upward normal <0,0,1>, use Stokes' Theorem to find the closed line integral of F dot dr around the boundary unit circle, counterclockwise.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "-2*pi",
            acceptableAnswerVariants: ["-2pi"],
            stepByStepExplanation:
              "curl F dotted with the upward normal <0,0,1> gives -2 (constant). The surface integral is -2 times the area of the unit disk (pi), giving -2*pi, which equals the line integral by Stokes' Theorem.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Stokes' Theorem",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcIII/StokesTheorem.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 3, Chapter 6: Stokes' Theorem",
            resourceUrl: "https://openstax.org/books/calculus-volume-3/pages/6-7-stokes-theorem",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.02: Multivariable Calculus (later units)",
            resourceUrl: "https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/",
            resourceType: "videoLesson",
          },
        ],
      },
    ],
  },
];

export const calculus3CourseExam: CourseExam = {
  examTitle: "Calculus III: Course Exam",
  passingScorePercent: 70,
  questions: [
    // Unit 1: Vectors and the Geometry of Space
    {
      problemId: "calc3-exam-p1",
      topicTag: "vectorsAndThreeDSpace",
      promptText: "Find the vector from P(3,-1,2) to Q(-1,4,0).",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "<-4,5,-2>",
      acceptableAnswerVariants: ["(-4,5,-2)"],
      stepByStepExplanation: "Subtract Q minus P: (-1-3, 4-(-1), 0-2) = (-4, 5, -2).",
      difficultyLevel: 1,
    },
    {
      problemId: "calc3-exam-p2",
      topicTag: "vectorsAndThreeDSpace",
      promptText: "Find the cross product of <1,2,-1> and <3,0,1>.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "<2,-4,-6>",
      acceptableAnswerVariants: ["(2,-4,-6)"],
      stepByStepExplanation:
        "First component: (2)(1)-(-1)(0)=2. Second component: (-1)(3)-(1)(1)=-4. Third component: (1)(0)-(2)(3)=-6. Result: <2,-4,-6>.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc3-exam-p3",
      topicTag: "vectorsAndThreeDSpace",
      promptText: "Find the equation of the plane through (1,1,1) with normal vector <2,-1,3>.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "2x-y+3z=4",
      acceptableAnswerVariants: ["2x - y + 3z = 4"],
      stepByStepExplanation:
        "2(x-1) - 1(y-1) + 3(z-1) = 0. Expand: 2x-2-y+1+3z-3=0, so 2x-y+3z-4=0, i.e. 2x-y+3z=4.",
      difficultyLevel: 2,
    },

    // Unit 2: Vector-Valued Functions and Space Curves
    {
      problemId: "calc3-exam-p4",
      topicTag: "vectorValuedFunctions",
      promptText: "For r(t) = <2t, t^2, ln t>, find r(e).",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "<2e,e^2,1>",
      acceptableAnswerVariants: ["(2e, e^2, 1)"],
      stepByStepExplanation: "Substitute t=e: <2e, e^2, ln(e)> = <2e, e^2, 1>, since ln(e)=1.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc3-exam-p5",
      topicTag: "vectorValuedFunctions",
      promptText: "Find r'(t) for r(t) = <sin t, cos t, t^2>.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "<cos t,-sin t,2t>",
      acceptableAnswerVariants: ["(cos t, -sin t, 2t)"],
      stepByStepExplanation: "Differentiate each component: d/dt[sin t]=cos t, d/dt[cos t]=-sin t, d/dt[t^2]=2t.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc3-exam-p6",
      topicTag: "vectorValuedFunctions",
      promptText: "A particle's position is r(t) = <t^2, 2t^3, t>. Find its speed at t=1.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "sqrt(41)",
      acceptableAnswerVariants: ["√41", "6.40"],
      stepByStepExplanation:
        "r'(t) = <2t, 6t^2, 1>. At t=1: <2,6,1>. Speed = the magnitude of <2,6,1> = the square root of 4+36+1 = the square root of 41.",
      difficultyLevel: 3,
    },

    // Unit 3: Partial Derivatives
    {
      problemId: "calc3-exam-p7",
      topicTag: "partialDerivatives",
      promptText: "Find the domain restriction for f(x,y) = ln(4 - x^2 - y^2).",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "x^2+y^2<4",
      acceptableAnswerVariants: ["x^2 + y^2 < 4 (a disk of radius 2, not including the boundary)"],
      stepByStepExplanation:
        "The argument of the natural log must be strictly positive: 4 - x^2 - y^2 > 0, which rearranges to x^2+y^2 < 4.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc3-exam-p8",
      topicTag: "partialDerivatives",
      promptText: "For f(x,y) = x^3*y^4, find f_x.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "3x^2y^4",
      stepByStepExplanation: "Treating y as constant, d/dx[x^3*y^4] = 3x^2*y^4.",
      difficultyLevel: 1,
    },
    {
      problemId: "calc3-exam-p9",
      topicTag: "partialDerivatives",
      promptText: "For f(x,y) = x^3*y^4, find f_y.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "4x^3y^3",
      stepByStepExplanation: "Treating x as constant, d/dy[x^3*y^4] = 4x^3*y^3.",
      difficultyLevel: 1,
    },
    {
      problemId: "calc3-exam-p10",
      topicTag: "partialDerivatives",
      promptText: "For f(x,y) = e^(xy), find f_xy.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "e^(xy)(1+xy)",
      acceptableAnswerVariants: ["e^(xy)+xy*e^(xy)", "e^xy(1+xy)"],
      stepByStepExplanation:
        "f_x = y*e^(xy) (chain rule, y held constant). Differentiating f_x with respect to y using the product rule: f_xy = e^(xy) + y*(x*e^(xy)) = e^(xy)(1+xy).",
      difficultyLevel: 4,
    },
    {
      problemId: "calc3-exam-p11",
      topicTag: "partialDerivatives",
      promptText: "Let z = x^2+y^2, with x=e^t and y=e^(-t). Find dz/dt using the chain rule.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "2e^(2t)-2e^(-2t)",
      acceptableAnswerVariants: ["2e^2t - 2e^-2t"],
      stepByStepExplanation:
        "f_x=2x, f_y=2y, dx/dt=e^t, dy/dt=-e^(-t). dz/dt = 2x*e^t + 2y*(-e^(-t)) = 2e^t*e^t - 2e^(-t)*e^(-t) = 2e^(2t) - 2e^(-2t). Check: z = e^(2t)+e^(-2t), so dz/dt = 2e^(2t)-2e^(-2t) directly, confirming the result.",
      difficultyLevel: 4,
    },

    // Unit 4: Directional Derivatives and Gradients
    {
      problemId: "calc3-exam-p12",
      topicTag: "directionalDerivativesAndGradients",
      promptText: "Find the gradient of f(x,y) = 5x^2 - 2xy + y^2.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "<10x-2y,-2x+2y>",
      acceptableAnswerVariants: ["(10x-2y, -2x+2y)"],
      stepByStepExplanation: "f_x = 10x-2y, f_y = -2x+2y, so grad f = <10x-2y, -2x+2y>.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc3-exam-p13",
      topicTag: "directionalDerivativesAndGradients",
      promptText: "Find the gradient of f(x,y,z) = x^2+y^2+z^2 at the point (1,-2,2).",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "<2,-4,4>",
      acceptableAnswerVariants: ["(2,-4,4)"],
      stepByStepExplanation: "grad f = <2x,2y,2z>. At (1,-2,2): <2, -4, 4>.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc3-exam-p14",
      topicTag: "directionalDerivativesAndGradients",
      promptText: "Find the directional derivative of f(x,y) = xy at (2,3) in the direction of the vector <4,3>.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "18/5",
      stepByStepExplanation:
        "grad f = <y,x>. At (2,3): <3,2>. Normalize <4,3>: magnitude 5, unit vector <4/5,3/5>. D_u f = <3,2> dot <4/5,3/5> = 12/5+6/5 = 18/5.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc3-exam-p15",
      topicTag: "directionalDerivativesAndGradients",
      promptText: "Find the tangent plane to z = x^2-y^2 at the point (2,1,3).",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "z=4x-2y-3",
      acceptableAnswerVariants: ["z = 4x - 2y - 3"],
      stepByStepExplanation:
        "f_x=2x, f_y=-2y. At (2,1): f_x=4, f_y=-2. z-3 = 4(x-2) - 2(y-1). Expand: z = 4x-8-2y+2+3 = 4x-2y-3.",
      difficultyLevel: 4,
    },

    // Unit 5: Applications of Partial Derivatives: Optimization
    {
      problemId: "calc3-exam-p16",
      topicTag: "multivariableOptimization",
      promptText: "Find the critical point of f(x,y) = x^2+y^2+4x-2y+3.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "(-2,1)",
      acceptableAnswerVariants: ["x=-2, y=1"],
      stepByStepExplanation: "f_x=2x+4=0 gives x=-2. f_y=2y-2=0 gives y=1. Critical point: (-2,1).",
      difficultyLevel: 2,
    },
    {
      problemId: "calc3-exam-p17",
      topicTag: "multivariableOptimization",
      promptText: "Classify the critical point of f(x,y) = x^2+4y^2 at (0,0) using the second derivative test.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "local minimum",
      stepByStepExplanation:
        "f_xx=2, f_yy=8, f_xy=0. D = (2)(8) - 0^2 = 16, which is positive, and f_xx=2 is also positive, so (0,0) is a local minimum.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc3-exam-p18",
      topicTag: "lagrangeMultipliers",
      promptText: "Maximize f(x,y) = xy subject to x+y=8.",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "16",
      stepByStepExplanation:
        "grad f=<y,x>, grad g=<1,1>. y=lambda and x=lambda, so x=y. Constraint: x+y=8 gives x=y=4. Maximum value: f(4,4)=16.",
      difficultyLevel: 3,
    },

    // Unit 6: Multiple Integrals: Double Integrals
    {
      problemId: "calc3-exam-p19",
      topicTag: "multipleIntegrals",
      promptText: "Evaluate the integral from 0 to 1, integral from 0 to 2, of 3x^2*y dy dx.",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "2",
      stepByStepExplanation:
        "Inner (dy): 3x^2*[y^2/2] from 0 to 2 = 3x^2*2 = 6x^2. Outer (dx): the integral from 0 to 1 of 6x^2 dx = [2x^3] from 0 to 1 = 2.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc3-exam-p20",
      topicTag: "multipleIntegrals",
      promptText: "Find the area of the region between y=x and y=x^3, for 0<=x<=1.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "1/4",
      stepByStepExplanation:
        "For 0<x<1, y=x lies above y=x^3 (since x^3<x there). Area = the integral from 0 to 1 of (x-x^3) dx = [x^2/2-x^4/4] from 0 to 1 = 1/2-1/4 = 1/4.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc3-exam-p21",
      topicTag: "multipleIntegrals",
      promptText:
        "The integral from 0 to 1, integral from y to 1, of f(x,y) dx dy describes the triangle 0<=y<=x<=1. Rewrite this integral with x on the outside.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "integral from 0 to 1, integral from 0 to x, of f(x,y) dy dx",
      acceptableAnswerVariants: ["∫0^1 ∫0^x f(x,y) dy dx", "the integral from 0 to 1 of the integral from 0 to x of f dy dx"],
      stepByStepExplanation:
        "The region is the triangle with vertices (0,0), (1,0), (1,1). Describing it with x outer: for 0<=x<=1, y ranges from 0 up to x. So the reversed integral is the integral from 0 to 1, integral from 0 to x, of f(x,y) dy dx.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc3-exam-p22",
      topicTag: "multipleIntegrals",
      promptText: "Find the volume under z = x^2+y over the rectangle 0<=x<=1, 0<=y<=2.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "8/3",
      stepByStepExplanation:
        "Inner (dy): the integral from 0 to 2 of (x^2+y) dy = [x^2*y+y^2/2] from 0 to 2 = 2x^2+2. Outer (dx): the integral from 0 to 1 of (2x^2+2) dx = [2x^3/3+2x] from 0 to 1 = 2/3+2 = 8/3.",
      difficultyLevel: 3,
    },

    // Unit 7: Multiple Integrals: Triple Integrals
    {
      problemId: "calc3-exam-p23",
      topicTag: "multipleIntegrals",
      promptText: "Evaluate the triple integral of the constant 5 over the box B = [0,2] by [0,3] by [0,1].",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "30",
      stepByStepExplanation: "For a constant integrand, the triple integral equals the constant times the box's volume: 5*(2*3*1) = 30.",
      difficultyLevel: 1,
    },
    {
      problemId: "calc3-exam-p24",
      topicTag: "multipleIntegrals",
      promptText: "Evaluate the integral from 0 to 1, integral from 0 to 1, integral from 0 to 1, of xyz dz dy dx.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "1/8",
      stepByStepExplanation:
        "Inner (dz): xy*[z^2/2] from 0 to 1 = xy/2. Middle (dy): the integral of xy/2 dy from 0 to 1 = (x/2)*(1/2) = x/4. Outer (dx): the integral of x/4 dx from 0 to 1 = 1/8.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc3-exam-p25",
      topicTag: "multipleIntegrals",
      promptText:
        "Find the volume of the solid bounded below by z=0 and above by z=x-y, over the triangle 0<=x<=2, 0<=y<=x.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "4/3",
      stepByStepExplanation:
        "Since y<=x on this triangle, x-y>=0 everywhere, so the solid makes sense. V = the integral from 0 to 2, integral from 0 to x, of (x-y) dy dx. Inner: [xy-y^2/2] from 0 to x = x^2-x^2/2 = 0.5x^2. Outer: the integral from 0 to 2 of 0.5x^2 dx = 0.5*(8/3) = 4/3.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc3-exam-p26",
      topicTag: "multipleIntegrals",
      promptText: "Find the mass of the box [0,1] by [0,1] by [0,2] with density rho(x,y,z) = z.",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "2",
      stepByStepExplanation:
        "Inner (dz, 0 to 2): the integral of z dz = [z^2/2] from 0 to 2 = 2 (a constant, independent of x and y). Integrating this constant 2 over the unit square base (area 1) gives a mass of 2.",
      difficultyLevel: 2,
    },

    // Unit 8: Change of Variables (Polar, Cylindrical, Spherical)
    {
      problemId: "calc3-exam-p27",
      topicTag: "multipleIntegrals",
      promptText: "Evaluate the double integral of sqrt(x^2+y^2) over the disk x^2+y^2<=9, using polar coordinates.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "18*pi",
      acceptableAnswerVariants: ["18pi"],
      stepByStepExplanation:
        "sqrt(x^2+y^2) becomes r in polar. The integral is the integral from 0 to 2*pi, integral from 0 to 3, of r*r dr dtheta = the integral from 0 to 2*pi of [r^3/3] from 0 to 3 dtheta = the integral from 0 to 2*pi of 9 dtheta = 18*pi.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc3-exam-p28",
      topicTag: "multipleIntegrals",
      promptText: "Find the volume of the solid cylinder x^2+y^2<=4, 0<=z<=3, using cylindrical coordinates.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "12*pi",
      acceptableAnswerVariants: ["12pi"],
      stepByStepExplanation:
        "V = the integral from 0 to 2*pi, integral from 0 to 2, integral from 0 to 3, of r dz dr dtheta. Inner (dz): 3r. Middle (dr): the integral from 0 to 2 of 3r dr = [1.5r^2] from 0 to 2 = 6. Outer (dtheta): the integral from 0 to 2*pi of 6 dtheta = 12*pi, matching pi*r^2*h = pi*4*3 = 12*pi.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc3-exam-p29",
      topicTag: "multipleIntegrals",
      promptText: "Convert the point (x,y,z) = (3,4,0) to spherical coordinates.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "(5, pi/2, arctan(4/3))",
      acceptableAnswerVariants: ["rho=5, phi=pi/2, theta=arctan(4/3)"],
      stepByStepExplanation:
        "rho = the square root of 3^2+4^2+0^2 = 5. Since z=0, the point lies in the equatorial plane, so phi = pi/2. theta = arctan(y/x) = arctan(4/3), since x and y are both positive.",
      difficultyLevel: 3,
    },

    // Unit 9: Vector Fields, Line Integrals, and Green's Theorem
    {
      problemId: "calc3-exam-p30",
      topicTag: "vectorCalculus",
      promptText: "For the vector field F(x,y) = <x^2,-y^2>, find F(3,-2).",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "<9,-4>",
      acceptableAnswerVariants: ["(9,-4)"],
      stepByStepExplanation: "Substitute x=3, y=-2: <3^2, -(-2)^2> = <9, -4>.",
      difficultyLevel: 1,
    },
    {
      problemId: "calc3-exam-p31",
      topicTag: "vectorCalculus",
      promptText: "Find the work done by F(x,y) = <x,y> along r(t) = <t, t^2>, 0<=t<=1.",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "1",
      stepByStepExplanation:
        "r'(t) = <1,2t>. F(r(t)) = <t,t^2>. Dot product: t(1) + t^2(2t) = t+2t^3. Work = the integral from 0 to 1 of (t+2t^3) dt = [t^2/2+t^4/2] from 0 to 1 = 1/2+1/2 = 1. (Check: F is the gradient of f=(x^2+y^2)/2, and f(1,1)-f(0,0) = 1-0 = 1.)",
      difficultyLevel: 3,
    },
    {
      problemId: "calc3-exam-p32",
      topicTag: "vectorCalculus",
      promptText:
        "Use Green's Theorem to evaluate the closed line integral of (2xy dx + x^2 dy) around the boundary of the unit square 0<=x<=1, 0<=y<=1, counterclockwise.",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "0",
      stepByStepExplanation:
        "P=2xy, Q=x^2. The partial of Q w.r.t. x is 2x, and the partial of P w.r.t. y is 2x. Integrand: 2x-2x=0, so the double integral (and hence the line integral) is 0. (This makes sense: 2xy dx + x^2 dy is exactly d(x^2*y), a conservative differential, integrated around a closed loop.)",
      difficultyLevel: 3,
    },

    // Unit 10: Surface Integrals, Divergence, and Stokes' Theorem
    {
      problemId: "calc3-exam-p33",
      topicTag: "vectorCalculus",
      promptText: "Find the divergence of F(x,y,z) = <xy, yz, zx>.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "x+y+z",
      stepByStepExplanation:
        "Divergence = the partial of xy w.r.t. x + the partial of yz w.r.t. y + the partial of zx w.r.t. z = y+z+x = x+y+z.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc3-exam-p34",
      topicTag: "vectorCalculus",
      promptText: "Use the Divergence Theorem to find the outward flux of F=<x,y,z> through the sphere of radius 4.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "256*pi",
      acceptableAnswerVariants: ["256pi"],
      stepByStepExplanation:
        "div F = 1+1+1 = 3. Volume of the sphere of radius 4 is (4/3)*pi*(4^3) = 256*pi/3. Flux = 3 * (256*pi/3) = 256*pi.",
      difficultyLevel: 3,
    },
  ],
};
