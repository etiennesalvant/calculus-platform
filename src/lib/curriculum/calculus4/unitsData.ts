import { CourseExam, Unit, UnitQuiz } from "@/lib/types/curriculumTypes";

// Calculus IV: Ordinary Differential Equations
// See docs/curriculum/07-calculus-4.md for the full plan.
// Nearly every lesson in this course uses the single topic tag
// "ordinaryDifferentialEquations" (per the plan doc's "Suggested topic tags"),
// with "laplaceTransforms" used for Unit 8 and "linearAlgebraFoundations"
// used for the eigenvalue lesson in Unit 9, since that lesson is explicitly
// cross-referenced with Calculus V.

export const calculus4Units: Unit[] = [
  {
    unitSlug: "intro-to-differential-equations",
    unitTitle: "Introduction to Differential Equations and Modeling",
    unitDescription: "Order and linearity, verifying solutions, modeling word problems, and slope fields.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Introduction to Differential Equations and Modeling",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc4-intro-to-differential-equations-quiz-p1",
          topicTag: "ordinaryDifferentialEquations",
          promptText: "Classify the equation by order and linearity.",
          promptMathExpression: "y''' + xy' - y^3 = 0",
          answerFormat: "multipleChoice",
          choices: ["Order 3, nonlinear", "Order 3, linear", "Order 1, nonlinear", "Order 2, nonlinear"],
          correctAnswer: "Order 3, nonlinear",
          stepByStepExplanation:
            "The highest derivative present is y''', so the order is 3. The term y^3 raises the unknown function to the third power, which breaks linearity (every appearance of y and its derivatives must be to the first power), so the equation is nonlinear.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc4-intro-to-differential-equations-quiz-p2",
          topicTag: "ordinaryDifferentialEquations",
          promptText: "Is y = 2e^{5x} a solution to the differential equation y' - 5y = 0?",
          answerFormat: "multipleChoice",
          choices: ["Yes", "No"],
          correctAnswer: "Yes",
          stepByStepExplanation:
            "y' = 10e^{5x}. Substitute: y' - 5y = 10e^{5x} - 5(2e^{5x}) = 10e^{5x} - 10e^{5x} = 0. Both sides match, so y = 2e^{5x} is a solution.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc4-intro-to-differential-equations-quiz-p3",
          topicTag: "ordinaryDifferentialEquations",
          promptText:
            "The rate of change of a quantity A is proportional to the square of A. Write the differential equation using A, dA/dt, and a proportionality constant k.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "dA/dt=kA^2",
          acceptableAnswerVariants: ["dA/dt = kA^2", "\\dfrac{dA}{dt}=kA^2"],
          stepByStepExplanation:
            "'Rate of change of A is proportional to A squared' translates directly to dA/dt = kA^2, inserting the proportionality constant k in front of A^2.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc4-intro-to-differential-equations-quiz-p4",
          topicTag: "ordinaryDifferentialEquations",
          promptText: "For the differential equation dy/dx = x + y, what is the slope of the solution curve at the point (2, -1)?",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "1",
          stepByStepExplanation: "Substitute x = 2, y = -1: dy/dx = 2 + (-1) = 1.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc4-intro-to-differential-equations-quiz-p5",
          topicTag: "ordinaryDifferentialEquations",
          promptText:
            "For the autonomous equation dy/dx = y(y - 4), at which value(s) of y is the slope field horizontal for every x? List all values, separated by a comma.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "0,4",
          acceptableAnswerVariants: ["0, 4", "4,0", "y=0,y=4"],
          stepByStepExplanation:
            "Set y(y - 4) = 0. This happens when y = 0 or y = 4, so the slope field is flat (an equilibrium solution) along both of those horizontal lines.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc4-intro-to-differential-equations-quiz-p6",
          topicTag: "ordinaryDifferentialEquations",
          promptText:
            "A general solution to a differential equation contains two arbitrary constants, C1 and C2. What is the order of the differential equation?",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "2",
          stepByStepExplanation:
            "The number of arbitrary constants in a general solution always matches the order of the equation, so two constants means the equation is second order.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc4-intro-to-differential-equations-quiz-p7",
          topicTag: "ordinaryDifferentialEquations",
          promptText:
            "y = Cx^3 is the general solution to xy' - 3y = 0 for any constant C. If C = -2, what is the value of y' when x = 1?",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "-6",
          stepByStepExplanation:
            "With C = -2, y = -2x^3, so y' = -6x^2. At x = 1, y' = -6(1) = -6.",
          difficultyLevel: 2,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "what-a-differential-equation-is",
        lessonTitle: "What a Differential Equation Is",
        estimatedMinutes: 25,
        topicTag: "ordinaryDifferentialEquations",
        learningGoals: [
          "Classify a differential equation by its order",
          "Determine whether a differential equation is linear or nonlinear",
          "Explain the difference between a general solution and a particular solution",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "An equation about a whole function, not a number",
            bodyText:
              "A differential equation is an equation that involves an unknown function together with one or more of its derivatives. Instead of solving for a number like x = 5, you're solving for an entire function, like y(x) = e^{2x}. The 'order' of a differential equation is the order of the highest derivative that appears in it. dy/dx = 3y is first order (only a first derivative appears). y'' + 3y' - 2y = sin(x) is second order (a y'' appears).",
          },
          {
            blockType: "keyFormula",
            headingText: "The general form of a linear differential equation",
            bodyText:
              "A differential equation is linear if the unknown function and all of its derivatives appear only to the first power, are not multiplied together, and are not plugged into another function (like sin(y) or e^y). The general nth-order linear form is shown below, where the coefficient functions a_i(x) and g(x) can depend on x but never on y itself.",
            mathExpression:
              "a_n(x)\\,y^{(n)} + \\cdots + a_1(x)\\,y' + a_0(x)\\,y = g(x)",
          },
          {
            blockType: "workedExample",
            headingText: "Classifying three equations",
            bodyText:
              "y'' + 3y' - 2y = sin(x): order 2, and linear (y'' and y' each appear to the first power, not multiplied by each other or by y). y y' = x: order 1, but nonlinear, because y is multiplied by y' — two copies of the unknown function multiplied together breaks linearity. y''' + (y')^2 = 0: order 3, nonlinear, because y' is squared.",
          },
          {
            blockType: "explanation",
            headingText: "General solution vs. particular solution",
            bodyText:
              "The general solution to an nth-order differential equation is a family of functions containing n arbitrary constants (like C1, C2) that satisfies the equation for any choice of those constants. A particular solution is one specific member of that family, picked out by additional information such as initial conditions (values of y and its derivatives at a starting point). Solving the equation itself gets you the general solution; applying conditions afterward narrows it down to one particular solution.",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Confusing the 'order' of a differential equation (the highest derivative present) with how many terms are in the solution, or assuming a general solution needs a fixed number of constants regardless of the equation's order. The number of arbitrary constants in a general solution always matches the order of the equation.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c4-u1-l1-p1",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "Classify the equation by order and linearity.",
            promptMathExpression: "y'' - 4y' + 4y = e^{2x}",
            answerFormat: "multipleChoice",
            choices: [
              "Order 2, linear",
              "Order 2, nonlinear",
              "Order 1, linear",
              "Order 4, linear",
            ],
            correctAnswer: "Order 2, linear",
            stepByStepExplanation:
              "The highest derivative present is y'', so the order is 2. Every term (y'', y', y) appears only to the first power and none are multiplied together or plugged into a nonlinear function, so the equation is linear.",
            difficultyLevel: 1,
          },
          {
            problemId: "c4-u1-l1-p2",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "What is the order of this differential equation?",
            promptMathExpression: "y''' + 2y'' - y' = x^2",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "3",
            stepByStepExplanation:
              "The highest derivative that appears is y''' (a third derivative), so the order of the equation is 3.",
            difficultyLevel: 1,
          },
          {
            problemId: "c4-u1-l1-p3",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "Classify the equation by order and linearity.",
            promptMathExpression: "y' + y^2 = 0",
            answerFormat: "multipleChoice",
            choices: [
              "Order 1, nonlinear",
              "Order 1, linear",
              "Order 2, nonlinear",
              "Order 2, linear",
            ],
            correctAnswer: "Order 1, nonlinear",
            stepByStepExplanation:
              "Only a first derivative appears, so the order is 1. But y is squared (y^2), and linearity requires every appearance of the unknown function and its derivatives to be to the first power, so this equation is nonlinear.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Differential Equations — Basic Concepts",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/DE/Definitions.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Differential equations",
            resourceUrl: "https://www.khanacademy.org/math/differential-equations",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "verifying-solutions",
        lessonTitle: "Verifying Solutions",
        estimatedMinutes: 20,
        topicTag: "ordinaryDifferentialEquations",
        learningGoals: [
          "Verify whether a given function is a solution to a differential equation by direct substitution",
          "Verify a general solution containing arbitrary constants",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Plug in and check both sides match",
            bodyText:
              "To verify that a function solves a differential equation, take however many derivatives the equation calls for, substitute the function and its derivatives into the equation, and simplify. If the two sides become identical (for every x, or for every choice of the arbitrary constants in a general solution), the function is a solution. If they don't match, it isn't.",
          },
          {
            blockType: "workedExample",
            headingText: "Verifying a specific solution",
            bodyText:
              "Verify that y = e^{3x} solves y' - 3y = 0. Differentiate: y' = 3e^{3x}. Substitute: y' - 3y = 3e^{3x} - 3e^{3x} = 0. Both sides match, so y = e^{3x} is a solution.",
            mathExpression: "y = e^{3x} \\implies y' - 3y = 0 \\checkmark",
          },
          {
            blockType: "workedExample",
            headingText: "Verifying a general solution",
            bodyText:
              "Verify that y = C1 cos(2x) + C2 sin(2x) solves y'' + 4y = 0 for any constants C1, C2. y' = -2C1 sin(2x) + 2C2 cos(2x). y'' = -4C1 cos(2x) - 4C2 sin(2x) = -4y. So y'' + 4y = -4y + 4y = 0, no matter what C1 and C2 are — confirming this is the general solution, not just one particular one.",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Differentiating carelessly (missing a chain-rule factor, or a sign) and then convincing yourself the two sides 'basically match.' Verification only works if you carry out the full algebraic substitution and simplification — a solution either makes both sides exactly equal, or it doesn't.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c4-u1-l2-p1",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "Is y = x^2 a solution to the differential equation xy' - 2y = 0?",
            answerFormat: "multipleChoice",
            choices: ["Yes", "No"],
            correctAnswer: "Yes",
            stepByStepExplanation:
              "y' = 2x. Substitute: xy' - 2y = x(2x) - 2(x^2) = 2x^2 - 2x^2 = 0. Both sides match, so y = x^2 is a solution.",
            difficultyLevel: 1,
          },
          {
            problemId: "c4-u1-l2-p2",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "Is y = e^{-x} a solution to the differential equation y' + y = 2?",
            answerFormat: "multipleChoice",
            choices: ["Yes", "No"],
            correctAnswer: "No",
            stepByStepExplanation:
              "y' = -e^{-x}. Substitute: y' + y = -e^{-x} + e^{-x} = 0, which is not equal to 2 for any x. So y = e^{-x} is not a solution.",
            difficultyLevel: 2,
          },
          {
            problemId: "c4-u1-l2-p3",
            topicTag: "ordinaryDifferentialEquations",
            promptText:
              "y = Cx^2 is the general solution to xy' - 2y = 0 for any constant C. If C = 2, what is the value of dy/dx (that is, y') when x = 3?",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "12",
            stepByStepExplanation:
              "With C = 2, y = 2x^2, so y' = 4x. At x = 3, y' = 4(3) = 12.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Differential Equations — Basic Concepts",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/DE/Definitions.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.03: Differential Equations",
            resourceUrl: "https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "modeling-with-differential-equations",
        lessonTitle: "Modeling with Differential Equations",
        estimatedMinutes: 25,
        topicTag: "ordinaryDifferentialEquations",
        learningGoals: [
          "Translate a word problem describing a rate of change into a differential equation",
          "Recognize common modeling phrases like 'proportional to' and convert them into algebra",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "The translation skill",
            bodyText:
              "Setting up a differential equation from a word problem is a translation exercise. First identify the quantity that's changing and give it a name (like P for population or T for temperature). Then find the phrase describing its rate of change — that becomes dP/dt or dT/dt. Finally, translate whatever that rate is 'proportional to' or 'equal to' into an algebraic expression, always inserting a constant of proportionality (usually called k) whenever you see the word 'proportional.'",
          },
          {
            blockType: "keyFormula",
            headingText: "'Proportional to' always means times a constant",
            bodyText:
              "If a rate of change is described as 'proportional to' some quantity Q, that translates to (rate) = kQ for some constant k — never just (rate) = Q. The constant k is often unknown until more information (like a data point) is given.",
            mathExpression: "\\text{``rate of change of } A \\text{ is proportional to } A\\text{''} \\implies \\dfrac{dA}{dt} = kA",
          },
          {
            blockType: "workedExample",
            headingText: "Setting up two models",
            bodyText:
              "A rumor spreads through a population of size N at a rate proportional to the product of the number of people who have heard it (p) and the number who haven't (N - p). Translating directly: dp/dt = k p (N - p). A bank account with continuous interest rate r and a constant continuous deposit rate D grows at a rate equal to the interest earned plus the deposits: dB/dt = rB + D. Neither of these has been solved yet — setting up the equation is a separate skill from solving it.",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Writing 'y is proportional to x' as y = x instead of y = kx, which silently assumes the proportionality constant is exactly 1. Also common: mixing up which quantity's rate of change is being described (for example, writing dT/dt when the problem is actually describing the rate of change of a different quantity that depends on T).",
          },
        ],
        practiceProblems: [
          {
            problemId: "c4-u1-l3-p1",
            topicTag: "ordinaryDifferentialEquations",
            promptText:
              "A population P grows at a rate proportional to P itself. Write the differential equation using P, dP/dt, and a proportionality constant k.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "dP/dt=kP",
            acceptableAnswerVariants: ["dP/dt = kP", "\\dfrac{dP}{dt}=kP"],
            stepByStepExplanation:
              "'Rate of change of P is proportional to P' translates directly to dP/dt = kP.",
            difficultyLevel: 1,
          },
          {
            problemId: "c4-u1-l3-p2",
            topicTag: "ordinaryDifferentialEquations",
            promptText:
              "Newton's Law of Cooling says the rate of change of an object's temperature T is proportional to the difference between the ambient temperature A and T. Write the differential equation.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "dT/dt=k(A-T)",
            acceptableAnswerVariants: ["dT/dt = k(A - T)", "\\dfrac{dT}{dt}=k(A-T)"],
            stepByStepExplanation:
              "The 'difference between A and T' is (A - T), and 'rate of change of T is proportional to' that difference gives dT/dt = k(A - T).",
            difficultyLevel: 2,
          },
          {
            problemId: "c4-u1-l3-p3",
            topicTag: "ordinaryDifferentialEquations",
            promptText:
              "A tank drains so that the rate of change of the volume V of water in it is proportional to the square root of V. Which differential equation models this?",
            answerFormat: "multipleChoice",
            choices: [
              "dV/dt = -k√V",
              "dV/dt = kV",
              "dV/dt = V√k",
              "dV/dt = -kV^2",
            ],
            correctAnswer: "dV/dt = -k√V",
            stepByStepExplanation:
              "'Proportional to the square root of V' means (rate) = k√V for a constant k. Since the tank is draining, V is decreasing, so the rate of change should be negative, giving dV/dt = -k√V (with k > 0).",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Differential Equations — Modeling with First Order DEs",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/DE/Modeling.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Differential equations",
            resourceUrl: "https://www.khanacademy.org/math/differential-equations",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "slope-fields",
        lessonTitle: "Slope Fields",
        estimatedMinutes: 20,
        topicTag: "ordinaryDifferentialEquations",
        learningGoals: [
          "Compute the slope a solution curve must have at a given point from a differential equation",
          "Read a slope field to understand the qualitative behavior of solutions before solving",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "A picture of every solution at once",
            bodyText:
              "A slope field (or direction field) for dy/dx = f(x, y) is built by picking a grid of points and, at each one, drawing a short line segment with slope f(x, y) evaluated at that point. Any actual solution curve must be tangent to the field everywhere it passes through — so sketching a curve that flows smoothly along the segments gives you a picture of a solution without ever solving the equation algebraically.",
          },
          {
            blockType: "workedExample",
            headingText: "Reading a slope field",
            bodyText:
              "For dy/dx = x - y, the slope at (0, 0) is 0 - 0 = 0 (flat). At (1, 0), it's 1 - 0 = 1 (rising). At (0, 1), it's 0 - 1 = -1 (falling). Plotting slopes like these across a grid reveals a pattern: curves above the line y = x slope downward toward it, and curves below slope upward toward it — the line y = x behaves like a 'valley' that nearby solutions drift toward.",
          },
          {
            blockType: "explanation",
            headingText: "Equilibrium solutions show up as flat lines",
            bodyText:
              "For an autonomous equation (one where dy/dx = f(y) depends only on y, not x), any horizontal line y = c where f(c) = 0 is an equilibrium solution — every segment along that horizontal line has slope 0, so the constant function y = c is itself a solution.",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Computing a slope field value using only the x-coordinate or only the y-coordinate when the differential equation actually depends on both. Every point's slope must be found by plugging its full (x, y) pair into f(x, y) — the only exception is an autonomous equation, where the slope happens to depend on y alone.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c4-u1-l4-p1",
            topicTag: "ordinaryDifferentialEquations",
            promptText:
              "For the differential equation dy/dx = 2x - y, what is the slope of the solution curve at the point (3, 4)?",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "2",
            stepByStepExplanation: "Substitute x = 3, y = 4: dy/dx = 2(3) - 4 = 6 - 4 = 2.",
            difficultyLevel: 1,
          },
          {
            problemId: "c4-u1-l4-p2",
            topicTag: "ordinaryDifferentialEquations",
            promptText:
              "For the autonomous equation dy/dx = y(3 - y), at which value(s) of y is the slope field horizontal (dy/dx = 0) for every x? List all values, separated by a comma.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "0,3",
            acceptableAnswerVariants: ["0, 3", "y=0,y=3", "3,0"],
            stepByStepExplanation:
              "Set y(3 - y) = 0. This happens when y = 0 or when 3 - y = 0, i.e. y = 3. Along both of these horizontal lines, every slope-field segment is flat.",
            difficultyLevel: 2,
          },
          {
            problemId: "c4-u1-l4-p3",
            topicTag: "ordinaryDifferentialEquations",
            promptText:
              "A slope field for a differential equation shows every segment along the horizontal line y = 5 pointing flat (slope 0), and segments elsewhere are not flat. Which type of equation is this most likely to be?",
            answerFormat: "multipleChoice",
            choices: [
              "An autonomous equation with an equilibrium solution at y = 5",
              "A linear equation with no constant term",
              "An equation of order 2",
              "A separable equation with no solutions",
            ],
            correctAnswer: "An autonomous equation with an equilibrium solution at y = 5",
            stepByStepExplanation:
              "A whole horizontal line of zero slope is the signature of an autonomous equation dy/dx = f(y) with f(5) = 0, meaning y = 5 is an equilibrium (constant) solution.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Direction Fields",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/DE/DirectionFields.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.03: Differential Equations",
            resourceUrl: "https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/",
            resourceType: "videoLesson",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "first-order-separable-and-linear",
    unitTitle: "First-Order Equations: Separable and Linear",
    unitDescription: "Solving separable equations and first-order linear equations with an integrating factor.",
    unitQuiz: {
      quizTitle: "Unit Quiz: First-Order Equations: Separable and Linear",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc4-first-order-separable-and-linear-quiz-p1",
          topicTag: "ordinaryDifferentialEquations",
          promptText: "Find the general solution.",
          promptMathExpression: "\\dfrac{dy}{dx} = 3x^2y",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "y=Ce^{x^3}",
          acceptableAnswerVariants: ["y = Ce^{x^3}", "y=Ae^{x^3}"],
          stepByStepExplanation:
            "Separate: dy/y = 3x^2 dx. Integrate: ln|y| = x^3 + C1. Exponentiate: y = Ce^{x^3} for a constant C.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc4-first-order-separable-and-linear-quiz-p2",
          topicTag: "ordinaryDifferentialEquations",
          promptText: "Solve using an integrating factor.",
          promptMathExpression: "y' + \\dfrac{1}{x}y = 3, \\quad x > 0",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "y=1.5x+C/x",
          acceptableAnswerVariants: ["y = 1.5x + C/x", "y=\\dfrac{3}{2}x+\\dfrac{C}{x}"],
          stepByStepExplanation:
            "P = 1/x, so \\mu = e^{\\int (1/x)dx} = e^{\\ln x} = x. Multiplying through by x: (xy)' = 3x. Integrate: xy = 1.5x^2 + C. Divide by x: y = 1.5x + C/x.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc4-first-order-separable-and-linear-quiz-p3",
          topicTag: "ordinaryDifferentialEquations",
          promptText: "Solve the initial value problem.",
          promptMathExpression: "\\dfrac{dy}{dx} = 2y, \\quad y(0) = 7",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "y=7e^{2x}",
          acceptableAnswerVariants: ["y = 7e^{2x}"],
          stepByStepExplanation:
            "Separable: dy/y = 2dx, so ln|y| = 2x + C1, giving y = Ce^{2x}. Applying y(0) = 7 gives C = 7, so y = 7e^{2x}.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc4-first-order-separable-and-linear-quiz-p4",
          topicTag: "ordinaryDifferentialEquations",
          promptText: "Solve the initial value problem.",
          promptMathExpression: "y' + 3y = 6, \\quad y(0) = 5",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "y=2+3e^{-3x}",
          acceptableAnswerVariants: ["y = 2 + 3e^{-3x}"],
          stepByStepExplanation:
            "\\mu = e^{3x}. (e^{3x}y)' = 6e^{3x}, so e^{3x}y = 2e^{3x} + C, giving y = 2 + Ce^{-3x}. Applying y(0) = 5: 2 + C = 5, so C = 3. The particular solution is y = 2 + 3e^{-3x}.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc4-first-order-separable-and-linear-quiz-p5",
          topicTag: "ordinaryDifferentialEquations",
          promptText: "Find the general solution as an implicit equation (don't solve for y).",
          promptMathExpression: "\\dfrac{dy}{dx} = \\dfrac{x}{y^2}",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "y^3/3=x^2/2+C",
          acceptableAnswerVariants: ["y^3/3 = x^2/2 + C", "\\dfrac{y^3}{3}=\\dfrac{x^2}{2}+C"],
          stepByStepExplanation:
            "Separate: y^2 dy = x dx. Integrate both sides: y^3/3 = x^2/2 + C. This implicit form is the general solution.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc4-first-order-separable-and-linear-quiz-p6",
          topicTag: "ordinaryDifferentialEquations",
          promptText: "Which of these first-order equations is separable?",
          answerFormat: "multipleChoice",
          choices: [
            "dy/dx = x^2y^3",
            "dy/dx = x + y",
            "y' + xy = x^2",
            "y' + y = \\sin(x)",
          ],
          correctAnswer: "dy/dx = x^2y^3",
          stepByStepExplanation:
            "dy/dx = x^2y^3 can be rearranged so every y sits on one side and every x on the other: dy/y^3 = x^2 dx. The other three equations mix x and y together (or add a plain function of x) in a way that can't be split apart like that; they're linear equations instead, solved with an integrating factor.",
          difficultyLevel: 2,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "separable-differential-equations",
        lessonTitle: "Separable Differential Equations",
        estimatedMinutes: 25,
        topicTag: "ordinaryDifferentialEquations",
        learningGoals: [
          "Recognize when a differential equation is separable",
          "Solve a separable differential equation by integrating both sides",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Splitting the variables apart",
            bodyText:
              "A first-order equation is separable if it can be rearranged so that every y (and dy) sits on one side and every x (and dx) sits on the other: g(y) dy = f(x) dx. Once it's split like that, integrate both sides independently. This is the most direct use of Calculus II's integration techniques in this course.",
          },
          {
            blockType: "keyFormula",
            headingText: "The separation-and-integrate pattern",
            bodyText:
              "If dy/dx = f(x)g(y), rewrite as dy/g(y) = f(x)dx, then integrate both sides: the integral of 1/g(y) dy equals the integral of f(x) dx, plus a single constant of integration (you only need one, even though you integrated twice, since the two constants can be combined into one).",
            mathExpression: "\\dfrac{dy}{dx} = f(x)g(y) \\implies \\int \\dfrac{1}{g(y)}\\,dy = \\int f(x)\\,dx + C",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Solve dy/dx = xy. Separate: dy/y = x dx. Integrate both sides: ln|y| = x^2/2 + C. Exponentiate both sides: |y| = e^{x^2/2 + C} = e^C e^{x^2/2}. Since e^C is just some positive constant, and allowing the sign to absorb into it (plus checking that y = 0 also works), the general solution is y = Ae^{x^2/2} for any constant A.",
            mathExpression: "\\dfrac{dy}{dx} = xy \\implies y = Ae^{x^2/2}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Forgetting the constant of integration entirely, or dividing both sides by g(y) without checking whether g(y) = 0 gives an additional constant solution that got silently divided away (for dy/dx = xy, dividing by y assumes y ≠ 0, but y = 0 is also a valid solution — it just happens to be included in the family y = Ae^{x^2/2} when A = 0 here).",
          },
        ],
        practiceProblems: [
          {
            problemId: "c4-u2-l1-p1",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "Find the general solution.",
            promptMathExpression: "\\dfrac{dy}{dx} = 2xy",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "y=Ce^{x^2}",
            acceptableAnswerVariants: ["y = Ce^{x^2}", "y=Ae^{x^2}"],
            stepByStepExplanation:
              "Separate: dy/y = 2x dx. Integrate: ln|y| = x^2 + C1. Exponentiate: y = Ce^{x^2} for a constant C.",
            difficultyLevel: 2,
          },
          {
            problemId: "c4-u2-l1-p2",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "Find the general solution (assume x > 0).",
            promptMathExpression: "\\dfrac{dy}{dx} = \\dfrac{y}{x}",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "y=Cx",
            acceptableAnswerVariants: ["y = Cx"],
            stepByStepExplanation:
              "Separate: dy/y = dx/x. Integrate: ln|y| = ln|x| + C1. Exponentiate: y = Cx for a constant C.",
            difficultyLevel: 2,
          },
          {
            problemId: "c4-u2-l1-p3",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "Find the general solution as an implicit equation (don't solve for y).",
            promptMathExpression: "\\dfrac{dy}{dx} = xy^2",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "-1/y=x^2/2+C",
            acceptableAnswerVariants: ["-1/y = x^2/2 + C"],
            stepByStepExplanation:
              "Separate: dy/y^2 = x dx. Integrate: -1/y = x^2/2 + C. This implicit form is the general solution (it can also be solved explicitly for y, but it doesn't need to be).",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Separable Equations",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/DE/Separable.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.03: Differential Equations",
            resourceUrl: "https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "first-order-linear-equations-and-integrating-factors",
        lessonTitle: "First-Order Linear Equations and Integrating Factors",
        estimatedMinutes: 30,
        topicTag: "ordinaryDifferentialEquations",
        learningGoals: [
          "Put a first-order linear equation into standard form",
          "Compute an integrating factor and use it to solve the equation",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Why an integrating factor works",
            bodyText:
              "A first-order linear equation can always be written in standard form y' + P(x)y = Q(x). The trick is to multiply both sides by a cleverly chosen function μ(x), called an integrating factor, that makes the left side collapse into the derivative of a single product: d/dx[μ(x)y]. Once the left side is a single derivative, both sides can be integrated directly.",
          },
          {
            blockType: "keyFormula",
            headingText: "The integrating factor formula",
            bodyText:
              "For y' + P(x)y = Q(x), the integrating factor is μ(x) = e^{∫P(x)dx}. Multiplying through gives (μy)' = μQ(x), so μy = ∫μ(x)Q(x)dx + C, and finally y = (1/μ)[∫μ(x)Q(x)dx + C].",
            mathExpression: "\\mu(x) = e^{\\int P(x)\\,dx}, \\qquad y = \\dfrac{1}{\\mu(x)}\\left[\\int \\mu(x)Q(x)\\,dx + C\\right]",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Solve y' + 2y = e^{-x}. Here P = 2, so μ(x) = e^{∫2dx} = e^{2x}. Multiply the whole equation by e^{2x}: e^{2x}y' + 2e^{2x}y = e^{2x}e^{-x} = e^{x}. The left side is exactly d/dx[e^{2x}y]. Integrate both sides: e^{2x}y = e^x + C. Divide by e^{2x}: y = e^{-x} + Ce^{-2x}. Checking: y' = -e^{-x} - 2Ce^{-2x}, and y' + 2y = (-e^{-x} - 2Ce^{-2x}) + 2(e^{-x} + Ce^{-2x}) = e^{-x}, which matches the right side exactly.",
            mathExpression: "y' + 2y = e^{-x} \\implies y = e^{-x} + Ce^{-2x}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Forgetting to divide by μ(x) at the very end and leaving the answer as μ(x)y = (something) instead of solving for y. Also common: forgetting the +C when integrating the right-hand side, or writing the integrating factor as e^{P(x)} instead of e^{∫P(x)dx} (skipping the integral entirely).",
          },
        ],
        practiceProblems: [
          {
            problemId: "c4-u2-l2-p1",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "Solve using an integrating factor.",
            promptMathExpression: "y' - 3y = 0",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "y=Ce^{3x}",
            acceptableAnswerVariants: ["y = Ce^{3x}"],
            stepByStepExplanation:
              "P = -3, so μ = e^{-3x}. Multiplying: (e^{-3x}y)' = 0. Integrate: e^{-3x}y = C, so y = Ce^{3x}.",
            difficultyLevel: 2,
          },
          {
            problemId: "c4-u2-l2-p2",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "Solve using an integrating factor.",
            promptMathExpression: "y' + y = x",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "y=x-1+Ce^{-x}",
            acceptableAnswerVariants: ["y = x - 1 + Ce^{-x}"],
            stepByStepExplanation:
              "μ = e^x. (e^x y)' = xe^x. Integrating the right side by parts: ∫xe^x dx = xe^x - e^x + C. So e^x y = xe^x - e^x + C, giving y = x - 1 + Ce^{-x}.",
            difficultyLevel: 4,
          },
          {
            problemId: "c4-u2-l2-p3",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "Solve using an integrating factor (assume x > 0).",
            promptMathExpression: "y' + \\dfrac{1}{x}y = x^2",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "y=x^3/4+C/x",
            acceptableAnswerVariants: ["y = x^3/4 + C/x"],
            stepByStepExplanation:
              "μ = e^{\\int (1/x)dx} = e^{\\ln x} = x. Multiplying: (xy)' = x \\cdot x^2 = x^3. Integrate: xy = x^4/4 + C. Divide by x: y = x^3/4 + C/x.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Linear Differential Equations",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/DE/Linear.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.03: Differential Equations",
            resourceUrl: "https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "initial-value-problems",
        lessonTitle: "Initial Value Problems",
        estimatedMinutes: 20,
        topicTag: "ordinaryDifferentialEquations",
        learningGoals: [
          "Use an initial condition to find the particular solution to a first-order equation",
          "Apply an initial condition to the full general solution, not just part of it",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "One condition pins down one constant",
            bodyText:
              "An initial value problem (IVP) pairs a differential equation with a condition like y(x0) = y0. For a first-order equation, the general solution has exactly one arbitrary constant, so one initial condition is exactly enough information to solve for it and produce a single particular solution.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Solve y' - y = e^{2x}, y(0) = 3. Using an integrating factor μ = e^{-x}: (e^{-x}y)' = e^{-x}e^{2x} = e^x. Integrate: e^{-x}y = e^x + C, so y = e^{2x} + Ce^x. Apply the initial condition: y(0) = e^0 + Ce^0 = 1 + C = 3, so C = 2. The particular solution is y = e^{2x} + 2e^x. Checking: y' = 2e^{2x} + 2e^x, and y' - y = (2e^{2x}+2e^x) - (e^{2x}+2e^x) = e^{2x}, which matches.",
            mathExpression: "y = e^{2x} + 2e^{x}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Applying the initial condition to only one piece of the general solution (for example, plugging x = 0 into just the e^{2x} term and forgetting the Ce^x term entirely). The initial condition must be applied to the FULL general solution — every term, added together — before solving for the constant.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c4-u2-l3-p1",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "Solve the initial value problem.",
            promptMathExpression: "\\dfrac{dy}{dx} = 3y, \\quad y(0) = 5",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "y=5e^{3x}",
            acceptableAnswerVariants: ["y = 5e^{3x}"],
            stepByStepExplanation:
              "Separable: y = Ce^{3x}. Apply y(0) = 5: C = 5. So y = 5e^{3x}.",
            difficultyLevel: 2,
          },
          {
            problemId: "c4-u2-l3-p2",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "Solve the initial value problem.",
            promptMathExpression: "y' + y = 4, \\quad y(0) = 1",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "y=4-3e^{-x}",
            acceptableAnswerVariants: ["y = 4 - 3e^{-x}"],
            stepByStepExplanation:
              "Using an integrating factor μ = e^x: (e^x y)' = 4e^x, so e^x y = 4e^x + C, giving y = 4 + Ce^{-x}. Apply y(0) = 1: 4 + C = 1, so C = -3. The particular solution is y = 4 - 3e^{-x}.",
            difficultyLevel: 3,
          },
          {
            problemId: "c4-u2-l3-p3",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "If dy/dx = 2x and y(1) = 4, find y(2).",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "7",
            stepByStepExplanation:
              "Integrate: y = x^2 + C. Apply y(1) = 4: 1 + C = 4, so C = 3. So y = x^2 + 3, and y(2) = 4 + 3 = 7.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Linear Differential Equations",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/DE/Linear.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.03: Differential Equations",
            resourceUrl: "https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/",
            resourceType: "videoLesson",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "exact-equations",
    unitTitle: "First-Order Equations: Exact Equations and Integrating Factors",
    unitDescription: "Recognizing and solving exact equations, and finding integrating factors for non-exact ones.",
    unitQuiz: {
      quizTitle: "Unit Quiz: First-Order Equations: Exact Equations and Integrating Factors",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc4-exact-equations-quiz-p1",
          topicTag: "ordinaryDifferentialEquations",
          promptText:
            "Is the equation (2xy^2 + 3)dx + (2x^2y - 2)dy = 0 exact?",
          answerFormat: "multipleChoice",
          choices: ["Yes", "No"],
          correctAnswer: "Yes",
          stepByStepExplanation:
            "M = 2xy^2 + 3, N = 2x^2y - 2. ∂M/∂y = 4xy and ∂N/∂x = 4xy — they're equal, so the equation is exact.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc4-exact-equations-quiz-p2",
          topicTag: "ordinaryDifferentialEquations",
          promptText:
            "Find the implicit general solution to (2xy^2 + 3)dx + (2x^2y - 2)dy = 0.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "x^2y^2+3x-2y=C",
          acceptableAnswerVariants: ["x^2y^2 + 3x - 2y = C"],
          stepByStepExplanation:
            "Integrate M with respect to x: F = x^2y^2 + 3x + g(y). Differentiate with respect to y: F_y = 2x^2y + g'(y), which must equal N = 2x^2y - 2, so g'(y) = -2, giving g(y) = -2y. The solution is x^2y^2 + 3x - 2y = C.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc4-exact-equations-quiz-p3",
          topicTag: "ordinaryDifferentialEquations",
          promptText:
            "The exactness test for M dx + N dy = 0 compares which two partial derivatives?",
          answerFormat: "multipleChoice",
          choices: ["∂M/∂y and ∂N/∂x", "∂M/∂x and ∂N/∂y", "∂M/∂y and ∂N/∂y", "∂M/∂x and ∂N/∂x"],
          correctAnswer: "∂M/∂y and ∂N/∂x",
          stepByStepExplanation:
            "An equation M dx + N dy = 0 is exact exactly when ∂M/∂y = ∂N/∂x — the partial derivative of M with respect to y must match the partial derivative of N with respect to x.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc4-exact-equations-quiz-p4",
          topicTag: "ordinaryDifferentialEquations",
          promptText:
            "For a non-exact equation, M_y - N_x = 4 and N = 2x. Find the integrating factor μ(x).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "x^2",
          stepByStepExplanation:
            "(M_y - N_x)/N = 4/(2x) = 2/x, which depends only on x. So μ(x) = e^{\\int (2/x)dx} = e^{2\\ln x} = x^2.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc4-exact-equations-quiz-p5",
          topicTag: "ordinaryDifferentialEquations",
          promptText:
            "For a non-exact equation, N_x - M_y = 3 and M = y. Find the integrating factor μ(y).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "y^3",
          stepByStepExplanation:
            "(N_x - M_y)/M = 3/y, which depends only on y. So μ(y) = e^{\\int (3/y)dy} = e^{3\\ln y} = y^3.",
          difficultyLevel: 4,
        },
        {
          problemId: "calc4-exact-equations-quiz-p6",
          topicTag: "ordinaryDifferentialEquations",
          promptText: "Solve using an integrating factor.",
          promptMathExpression: "2y\\,dx + x\\,dy = 0",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "x^2y=C",
          acceptableAnswerVariants: ["x^2y = C"],
          stepByStepExplanation:
            "M = 2y, N = x. M_y = 2, N_x = 1 — not exact. (M_y - N_x)/N = (2-1)/x = 1/x, a function of x alone, so \\mu(x) = e^{\\int (1/x)dx} = x. Multiplying through by x gives 2xy\\,dx + x^2\\,dy = 0, which is now exact (M_y = N_x = 2x). Integrating M with respect to x: F = x^2y + g(y); differentiating gives F_y = x^2 + g'(y) = N = x^2, so g'(y) = 0. The solution is x^2y = C.",
          difficultyLevel: 4,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "exact-differential-equations",
        lessonTitle: "Exact Differential Equations",
        estimatedMinutes: 25,
        topicTag: "ordinaryDifferentialEquations",
        learningGoals: [
          "Test whether a first-order equation written as M dx + N dy = 0 is exact",
          "Solve an exact differential equation by reconstructing its potential function",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Equations that come from a single function",
            bodyText:
              "Write a first-order equation as M(x, y)dx + N(x, y)dy = 0. It's exact when M and N are the partial derivatives (with respect to x and y respectively) of one underlying function F(x, y) — that is, when ∂M/∂y = ∂N/∂x. When that test passes, the solution is simply F(x, y) = C, where F is reconstructed from M and N.",
          },
          {
            blockType: "keyFormula",
            headingText: "The exactness test and solution method",
            bodyText:
              "Test: ∂M/∂y = ∂N/∂x. To solve: integrate M with respect to x (treating y as constant) to get F(x,y) = ∫M dx + g(y), where g(y) is an unknown function of y alone. Then differentiate that result with respect to y, set it equal to N, and solve for g(y). The solution is F(x, y) = C.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Solve (2xy + 3)dx + (x^2 - 1)dy = 0. Here M = 2xy + 3 and N = x^2 - 1. ∂M/∂y = 2x and ∂N/∂x = 2x — equal, so the equation is exact. Integrate M with respect to x: F = x^2y + 3x + g(y). Differentiate with respect to y: F_y = x^2 + g'(y), which must equal N = x^2 - 1, so g'(y) = -1, giving g(y) = -y. The solution is x^2y + 3x - y = C.",
            mathExpression: "x^2y + 3x - y = C",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Forgetting the unknown function g(y) when integrating M with respect to x, and instead tacking on just a plain constant — this silently loses any y-dependent terms that F might have. Also common: mixing up which partial derivative to compute first when checking exactness (M_y should be compared to N_x, not N_y).",
          },
        ],
        practiceProblems: [
          {
            problemId: "c4-u3-l1-p1",
            topicTag: "ordinaryDifferentialEquations",
            promptText:
              "Is the equation (3x^2 + 2y)dx + (2x + 3y^2)dy = 0 exact?",
            answerFormat: "multipleChoice",
            choices: ["Yes", "No"],
            correctAnswer: "Yes",
            stepByStepExplanation:
              "M = 3x^2 + 2y, N = 2x + 3y^2. ∂M/∂y = 2 and ∂N/∂x = 2 — they're equal, so the equation is exact.",
            difficultyLevel: 2,
          },
          {
            problemId: "c4-u3-l1-p2",
            topicTag: "ordinaryDifferentialEquations",
            promptText:
              "Find the implicit general solution to (3x^2 + 2y)dx + (2x + 3y^2)dy = 0.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "x^3+2xy+y^3=C",
            acceptableAnswerVariants: ["x^3 + 2xy + y^3 = C"],
            stepByStepExplanation:
              "Integrate M with respect to x: F = x^3 + 2xy + g(y). Differentiate with respect to y: F_y = 2x + g'(y), which must equal N = 2x + 3y^2, so g'(y) = 3y^2, giving g(y) = y^3. The solution is x^3 + 2xy + y^3 = C.",
            difficultyLevel: 3,
          },
          {
            problemId: "c4-u3-l1-p3",
            topicTag: "ordinaryDifferentialEquations",
            promptText:
              "Verify and solve: (y\\cos x + 2xe^y)dx + (\\sin x + x^2 e^y - 1)dy = 0.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "y sin(x)+x^2e^y-y=C",
            acceptableAnswerVariants: [
              "y\\sin x + x^2 e^y - y = C",
              "ysin(x)+x^2e^y-y=C",
            ],
            stepByStepExplanation:
              "M_y = \\cos x + 2xe^y and N_x = \\cos x + 2xe^y — equal, so it's exact. Integrate M with respect to x: F = y\\sin x + x^2 e^y + g(y). Differentiate with respect to y: F_y = \\sin x + x^2 e^y + g'(y), which must equal N = \\sin x + x^2 e^y - 1, so g'(y) = -1, giving g(y) = -y. The solution is y\\sin x + x^2 e^y - y = C.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Exact Equations",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/DE/Exact.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.03: Differential Equations",
            resourceUrl: "https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "finding-integrating-factors-for-non-exact-equations",
        lessonTitle: "Finding Integrating Factors for Non-Exact Equations",
        estimatedMinutes: 25,
        topicTag: "ordinaryDifferentialEquations",
        learningGoals: [
          "Recognize when a non-exact equation can be made exact by an integrating factor depending on x alone, or y alone",
          "Find that integrating factor and use it to solve the equation",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Repairing a non-exact equation",
            bodyText:
              "When ∂M/∂y ≠ ∂N/∂x, the equation isn't exact as written, but multiplying it by the right function μ can sometimes fix that. Two special cases are easy to check: if (M_y - N_x)/N depends only on x, an integrating factor μ(x) exists; if (N_x - M_y)/M depends only on y, an integrating factor μ(y) exists.",
          },
          {
            blockType: "keyFormula",
            headingText: "The two integrating-factor formulas",
            bodyText:
              "If (M_y - N_x)/N is a function of x alone, μ(x) = e^{\\int (M_y-N_x)/N\\,dx}. If (N_x - M_y)/M is a function of y alone, μ(y) = e^{\\int (N_x-M_y)/M\\,dy}. After multiplying the whole equation by μ, it becomes exact, and you solve it the usual way.",
            mathExpression: "\\mu(x) = e^{\\int \\frac{M_y - N_x}{N}\\,dx}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Solve (3xy + y^2)dx + (x^2 + xy)dy = 0. M_y = 3x + 2y, N_x = 2x + y — not equal, so it's not exact. Check (M_y - N_x)/N = (x + y)/(x^2 + xy) = (x+y)/[x(x+y)] = 1/x, which depends only on x. So μ(x) = e^{\\int (1/x)dx} = e^{\\ln x} = x. Multiplying through by x gives (3x^2y + xy^2)dx + (x^3 + x^2y)dy = 0. Now M_y = 3x^2 + 2xy and N_x = 3x^2 + 2xy — equal, so this new equation is exact. Integrating M with respect to x: F = x^3y + x^2y^2/2 + g(y); differentiating gives F_y = x^3 + x^2y + g'(y) = N = x^3 + x^2y, so g'(y) = 0. The solution is x^3y + x^2y^2/2 = C.",
            mathExpression: "x^3y + \\dfrac{x^2y^2}{2} = C",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Using the μ(x) shortcut formula without first checking that (M_y - N_x)/N truly simplifies to a function of x alone — if any y survives in that expression, the shortcut doesn't apply and a different technique (or the μ(y) version) is needed instead. Also common: multiplying only M (or only N) by the integrating factor instead of the entire equation.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c4-u3-l2-p1",
            topicTag: "ordinaryDifferentialEquations",
            promptText:
              "For a non-exact equation, M_y - N_x = 2y and N = xy. Is (M_y - N_x)/N a function of x alone, and if so, what is the integrating factor μ(x)?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "x^2",
            stepByStepExplanation:
              "(M_y - N_x)/N = 2y/(xy) = 2/x, which depends only on x. So μ(x) = e^{\\int (2/x)dx} = e^{2\\ln x} = x^2.",
            difficultyLevel: 3,
          },
          {
            problemId: "c4-u3-l2-p2",
            topicTag: "ordinaryDifferentialEquations",
            promptText:
              "Find the integrating factor μ(y) for dx + (x/y - \\sin y)dy = 0.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "y",
            stepByStepExplanation:
              "Here M = 1, N = x/y - \\sin y. M_y = 0, N_x = 1/y. Check (N_x - M_y)/M = (1/y)/1 = 1/y, a function of y alone. So μ(y) = e^{\\int (1/y)dy} = e^{\\ln y} = y.",
            difficultyLevel: 4,
          },
          {
            problemId: "c4-u3-l2-p3",
            topicTag: "ordinaryDifferentialEquations",
            promptText:
              "If (N_x - M_y)/M turns out to be a function of y alone, which formula gives the correct integrating factor?",
            answerFormat: "multipleChoice",
            choices: [
              "μ(y) = e^{\\int (N_x - M_y)/M\\, dy}",
              "μ(y) = e^{\\int (M_y - N_x)/N\\, dy}",
              "μ(x) = e^{\\int (N_x - M_y)/M\\, dx}",
              "μ(y) = (N_x - M_y)/M",
            ],
            correctAnswer: "μ(y) = e^{\\int (N_x - M_y)/M\\, dy}",
            stepByStepExplanation:
              "The integrating factor depending on y alone is built by integrating (N_x - M_y)/M with respect to y and exponentiating the result.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Exact Equations",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/DE/Exact.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.03: Differential Equations",
            resourceUrl: "https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/",
            resourceType: "videoLesson",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "first-order-applications",
    unitTitle: "Applications of First-Order Equations",
    unitDescription: "Growth and decay, mixing problems, and Newton's Law of Cooling — the real-world payoff of the first-order toolkit.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Applications of First-Order Equations",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc4-first-order-applications-quiz-p1",
          topicTag: "ordinaryDifferentialEquations",
          promptText:
            "A population follows dP/dt = kP, starts at P(0) = 1000, and triples every 5 years. Find P(15).",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "27000",
          stepByStepExplanation:
            "Tripling in 5 years means 1000e^{5k} = 3000, so e^{5k} = 3. Since 15 years is exactly three 5-year periods, P(15) = 1000(e^{5k})^3 = 1000(3)^3 = 1000 \\cdot 27 = 27000.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc4-first-order-applications-quiz-p2",
          topicTag: "ordinaryDifferentialEquations",
          promptText:
            "A radioactive substance with a half-life of 25 years decays from 80 g to 10 g. How many years did this take?",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "75",
          stepByStepExplanation:
            "10/80 = 1/8 = (1/2)^3, so the sample went through exactly three half-lives. Three half-lives of 25 years each is 75 years.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc4-first-order-applications-quiz-p3",
          topicTag: "ordinaryDifferentialEquations",
          promptText:
            "A 200-gallon tank starts with 50 lb of dissolved salt. Brine containing 1 lb/gal enters at 4 gal/min, and the well-mixed solution drains at 4 gal/min. Write the differential equation for Q(t).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "dQ/dt=4-Q/50",
          acceptableAnswerVariants: ["dQ/dt = 4 - Q/50", "Q'=4-Q/50", "dQ/dt=4-(4/200)Q"],
          stepByStepExplanation:
            "Rate in = 1 lb/gal · 4 gal/min = 4 lb/min. Rate out = 4·Q/200 = Q/50 (the volume stays fixed at 200 gal since the flow rates match). So dQ/dt = 4 - Q/50.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc4-first-order-applications-quiz-p4",
          topicTag: "ordinaryDifferentialEquations",
          promptText: "Solve the tank problem from the previous question for Q(t), given Q(0) = 50.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "Q=200-150e^{-t/50}",
          acceptableAnswerVariants: ["Q(t)=200-150e^{-t/50}", "Q = 200 - 150e^{-t/50}"],
          stepByStepExplanation:
            "From Q' + Q/50 = 4, the integrating factor is \\mu = e^{t/50}. This gives (e^{t/50}Q)' = 4e^{t/50}, so e^{t/50}Q = 200e^{t/50} + C, and Q = 200 + Ce^{-t/50}. Applying Q(0) = 50: 50 = 200 + C, so C = -150. Q(t) = 200 - 150e^{-t/50}.",
          difficultyLevel: 4,
        },
        {
          problemId: "calc4-first-order-applications-quiz-p5",
          topicTag: "ordinaryDifferentialEquations",
          promptText:
            "An object at 150°F is placed in a 75°F room and cools to 110°F after 5 minutes. Using T(t) = 75 + 75e^{-kt}, find k.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "ln(15/7)/5",
          acceptableAnswerVariants: ["0.1524", "k=ln(15/7)/5", "\\dfrac{\\ln(15/7)}{5}"],
          stepByStepExplanation:
            "T0 - A = 150 - 75 = 75, matching the given form. At t=5, T=110: 75e^{-5k} = 110 - 75 = 35, so e^{-5k} = 35/75 = 7/15. Then -5k = \\ln(7/15), so k = -\\ln(7/15)/5 = \\ln(15/7)/5 \\approx 0.1524.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc4-first-order-applications-quiz-p6",
          topicTag: "ordinaryDifferentialEquations",
          promptText:
            "In Newton's Law of Cooling, dT/dt = k(A - T) with k > 0, what determines whether the object is heating up or cooling down at a given moment?",
          answerFormat: "multipleChoice",
          choices: [
            "The sign of (A - T): positive means the object is heating, negative means it's cooling",
            "The value of k alone, which must be negative for cooling",
            "The value of A alone, regardless of T",
            "Whether t is positive or negative",
          ],
          correctAnswer: "The sign of (A - T): positive means the object is heating, negative means it's cooling",
          stepByStepExplanation:
            "Since k is always positive in this form of the model, the sign of dT/dt is entirely controlled by (A - T): if the object is colder than the room (A > T), it heats up; if it's hotter than the room (A < T), it cools down. The single equation automatically handles both directions.",
          difficultyLevel: 2,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "growth-and-decay-models",
        lessonTitle: "Growth and Decay Models",
        estimatedMinutes: 25,
        topicTag: "ordinaryDifferentialEquations",
        learningGoals: [
          "Set up the exponential growth/decay model dy/dt = ky from a word problem",
          "Use given data (like a half-life or a doubling time) to find the constant k",
          "Use a growth or decay model to predict an amount at a future or past time",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "The same equation from your very first lesson",
            bodyText:
              "Back in Unit 1 you translated 'the rate of change of P is proportional to P' into dP/dt = kP without solving it. That equation is separable, and solving it is what this lesson is really about: dy/dt = ky always solves to y(t) = y0 e^{kt}, where y0 is the amount at t = 0. When k is positive, the quantity grows without bound (population, compound interest); when k is negative, it decays toward zero (radioactive decay, drug elimination from the bloodstream).",
          },
          {
            blockType: "keyFormula",
            headingText: "The exponential growth/decay model",
            bodyText:
              "Any quantity whose rate of change is proportional to its current amount follows this model. y0 is the starting amount, and k is found from whatever extra data the problem gives you — a half-life, a doubling time, or two data points.",
            mathExpression: "\\dfrac{dy}{dt} = ky \\implies y(t) = y_0 e^{kt}",
          },
          {
            blockType: "workedExample",
            headingText: "Carbon dating",
            bodyText:
              "A fossil sample starts with 100 g of carbon-14, which has a half-life of 5730 years. How much remains after 2000 years? First find k from the half-life: half of the sample remains when t = 5730, so 50 = 100e^{5730k}, giving e^{5730k} = 1/2, so k = ln(1/2)/5730 ≈ -0.0001210 (negative, since this is decay). Now use the model with t = 2000: A(2000) = 100e^{-0.0001210(2000)} ≈ 100e^{-0.2421} ≈ 78.5 g.",
            mathExpression: "k = \\dfrac{\\ln(1/2)}{5730}, \\qquad A(2000) = 100e^{2000k} \\approx 78.5\\text{ g}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Plugging in a positive k for a decay problem (or a negative k for growth), which flips the direction of the curve entirely. The sign of k is not something you choose — it comes out of the algebra when you solve for it from the half-life or doubling-time condition, and it should always come out negative for decay and positive for growth. Also common: confusing 'half-life' (the time to reach half the amount) with 'doubling time' (the time to double), which changes whether the equation you set up equals 1/2 or 2.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c4-u4-l1-p1",
            topicTag: "ordinaryDifferentialEquations",
            promptText:
              "A population follows dP/dt = kP, starts at P(0) = 200, and doubles every 8 years. Find P(20).",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "1131.37",
            acceptableAnswerVariants: ["1131.4", "800√2", "1131", "1132"],
            stepByStepExplanation:
              "Doubling in 8 years means 200e^{8k} = 400, so e^{8k} = 2, giving k = ln(2)/8. Then P(20) = 200e^{20k} = 200e^{20\\ln(2)/8} = 200 \\cdot 2^{2.5} = 800\\sqrt{2} \\approx 1131.37.",
            difficultyLevel: 2,
          },
          {
            problemId: "c4-u4-l1-p2",
            topicTag: "ordinaryDifferentialEquations",
            promptText:
              "A bacteria culture grows from 500 to 800 cells in 3 hours. Assuming exponential growth, predict the population at t = 6 hours.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "1280",
            stepByStepExplanation:
              "From 500e^{3k} = 800, e^{3k} = 8/5. Since 6 hours is exactly two 3-hour periods, P(6) = 500(e^{3k})^2 = 500(8/5)^2 = 500 \\cdot 64/25 = 1280.",
            difficultyLevel: 3,
          },
          {
            problemId: "c4-u4-l1-p3",
            topicTag: "ordinaryDifferentialEquations",
            promptText:
              "A radioactive substance with a half-life of 10 days decays from 60 g to 15 g. How many days did this take?",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "20",
            stepByStepExplanation:
              "15/60 = 1/4 = (1/2)^2, so the sample went through exactly two half-lives. Two half-lives of 10 days each is 20 days. (Algebraically: 60e^{kt} = 15 with k = ln(1/2)/10 also solves to t = 20.)",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Modeling with First Order DEs",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/DE/Modeling.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.03: Differential Equations",
            resourceUrl: "https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "mixing-problems",
        lessonTitle: "Mixing Problems",
        estimatedMinutes: 25,
        topicTag: "ordinaryDifferentialEquations",
        learningGoals: [
          "Set up a first-order linear differential equation for the amount of a substance in a tank over time",
          "Solve a mixing problem using an integrating factor",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Rate in minus rate out",
            bodyText:
              "A mixing (or tank) problem tracks the amount Q(t) of a dissolved substance (usually called 'salt', even when the story is about pollutants or medication) in a tank of liquid. The governing idea is always the same: dQ/dt = (rate the substance enters) - (rate the substance leaves). The rate in is usually a concentration times a flow rate. The rate out is the tank's current concentration, Q(t) divided by the current volume, times the outflow rate. This setup produces a first-order linear equation, solvable with an integrating factor.",
          },
          {
            blockType: "keyFormula",
            headingText: "Setting up the rate-out term",
            bodyText:
              "If liquid leaves the tank at rate r_out, and the tank's volume at time t is V(t), the substance leaves at rate r_out · Q(t)/V(t). When the inflow and outflow rates are equal, the volume V stays constant, which is the most common case and keeps the equation's coefficients constant instead of time-dependent.",
            mathExpression: "\\dfrac{dQ}{dt} = (\\text{rate in}) - r_{\\text{out}}\\cdot\\dfrac{Q(t)}{V(t)}",
          },
          {
            blockType: "workedExample",
            headingText: "A tank with equal in/out flow",
            bodyText:
              "A 100-gallon tank starts with 20 lb of dissolved salt. Brine containing 2 lb/gal enters at 5 gal/min, and the well-mixed solution leaves at the same rate, so the volume stays at 100 gal. Rate in = 2·5 = 10 lb/min. Rate out = 5·Q/100 = Q/20. So dQ/dt = 10 - Q/20, or Q' + Q/20 = 10. The integrating factor is μ = e^{t/20}. Multiplying through: (e^{t/20}Q)' = 10e^{t/20}. Integrating: e^{t/20}Q = 200e^{t/20} + C, so Q = 200 + Ce^{-t/20}. Applying Q(0) = 20: 20 = 200 + C, so C = -180. The particular solution is Q(t) = 200 - 180e^{-t/20}. After 20 minutes, Q(20) = 200 - 180e^{-1} ≈ 133.8 lb.",
            mathExpression: "Q(t) = 200 - 180e^{-t/20}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Writing the rate-out term as just 'Q' instead of 'Q divided by the current volume' — the concentration leaving the tank is the amount present divided by however many gallons it's dissolved in, not the raw amount. Also common: forgetting that if inflow and outflow rates differ, the volume V(t) changes over time and must be written as a function of t (making the equation's coefficients non-constant).",
          },
        ],
        practiceProblems: [
          {
            problemId: "c4-u4-l2-p1",
            topicTag: "ordinaryDifferentialEquations",
            promptText:
              "A 50-gallon tank starts with 10 lb of dissolved salt. Brine containing 3 lb/gal enters at 4 gal/min, and the well-mixed solution drains at 4 gal/min. Write the differential equation for Q(t).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "dQ/dt=12-2Q/25",
            acceptableAnswerVariants: ["dQ/dt = 12 - 2Q/25", "Q'=12-2Q/25", "dQ/dt=12-(4/50)Q"],
            stepByStepExplanation:
              "Rate in = 3 lb/gal · 4 gal/min = 12 lb/min. Rate out = 4·Q/50 = 2Q/25 (since the volume stays fixed at 50 gal). So dQ/dt = 12 - 2Q/25.",
            difficultyLevel: 2,
          },
          {
            problemId: "c4-u4-l2-p2",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "Solve the tank problem from the previous question for Q(t).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "Q=150-140e^{-2t/25}",
            acceptableAnswerVariants: ["Q(t)=150-140e^{-2t/25}", "Q = 150 - 140e^{-2t/25}"],
            stepByStepExplanation:
              "From Q' + (2/25)Q = 12, the integrating factor is μ = e^{2t/25}. This gives (e^{2t/25}Q)' = 12e^{2t/25}, so e^{2t/25}Q = 150e^{2t/25} + C, and Q = 150 + Ce^{-2t/25}. Applying Q(0) = 10: 10 = 150 + C, so C = -140. Q(t) = 150 - 140e^{-2t/25}.",
            difficultyLevel: 4,
          },
          {
            problemId: "c4-u4-l2-p3",
            topicTag: "ordinaryDifferentialEquations",
            promptText:
              "Using the worked example's tank (Q(t) = 200 - 180e^{-t/20}), find the amount of salt after 10 minutes.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "90.82",
            acceptableAnswerVariants: ["90.8", "90.82 lb", "91"],
            stepByStepExplanation:
              "Q(10) = 200 - 180e^{-10/20} = 200 - 180e^{-0.5} ≈ 200 - 109.18 ≈ 90.82 lb.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Modeling with First Order DEs",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/DE/Modeling.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.03: Differential Equations",
            resourceUrl: "https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "newtons-law-of-cooling",
        lessonTitle: "Newton's Law of Cooling",
        estimatedMinutes: 20,
        topicTag: "ordinaryDifferentialEquations",
        learningGoals: [
          "Set up Newton's Law of Cooling as a differential equation",
          "Solve a cooling (or warming) problem for temperature as a function of time",
          "Use a cooling model to find the time needed to reach a target temperature",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Chasing the ambient temperature",
            bodyText:
              "Newton's Law of Cooling says an object's temperature changes at a rate proportional to the difference between its own temperature T and the surrounding (ambient) temperature A: dT/dt = k(A - T), with k > 0. Notice this single equation covers both cooling (object hotter than the room) and warming (object colder than the room) automatically — the sign of (A - T) takes care of the direction.",
          },
          {
            blockType: "keyFormula",
            headingText: "Solving the cooling equation",
            bodyText:
              "This equation is both separable and linear. Solving it gives T(t) = A + (T0 - A)e^{-kt}, where T0 = T(0) is the starting temperature. As t → ∞, e^{-kt} → 0, so T(t) → A, confirming that the object's temperature always settles toward the ambient temperature.",
            mathExpression: "\\dfrac{dT}{dt} = k(A - T) \\implies T(t) = A + (T_0 - A)e^{-kt}",
          },
          {
            blockType: "workedExample",
            headingText: "Cooling coffee",
            bodyText:
              "A cup of coffee starts at 200°F in a 70°F room, and cools according to T(t) = 70 + 130e^{-kt}. If it's known that k = 0.05 per minute, find the temperature after 10 minutes, and find how long it takes to reach 100°F. First, T(10) = 70 + 130e^{-0.5} ≈ 70 + 78.85 ≈ 148.85°F. Second, set 70 + 130e^{-0.05t} = 100: e^{-0.05t} = 30/130 = 3/13, so -0.05t = ln(3/13), giving t = -ln(3/13)/0.05 ≈ 29.33 minutes.",
            mathExpression: "T(t) = 70 + 130e^{-0.05t}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Writing the equation as dT/dt = k(T - A) instead of k(A - T) — both forms show up in textbooks, but they require opposite signs of k to mean the same thing. Whichever form you use, always sanity-check the sign: if the object should be cooling (T > A), dT/dt must come out negative.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c4-u4-l3-p1",
            topicTag: "ordinaryDifferentialEquations",
            promptText:
              "A metal rod is heated and then left in a 20°C room. Using T for the rod's temperature and A = 20 for the ambient temperature, write Newton's Law of Cooling as a differential equation with proportionality constant k.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "dT/dt=k(20-T)",
            acceptableAnswerVariants: ["dT/dt = k(20 - T)", "dT/dt=k(A-T)"],
            stepByStepExplanation:
              "'Rate of change of T is proportional to the difference between the ambient temperature and T' translates directly to dT/dt = k(20 - T).",
            difficultyLevel: 1,
          },
          {
            problemId: "c4-u4-l3-p2",
            topicTag: "ordinaryDifferentialEquations",
            promptText:
              "Using T(t) = 70 + 130e^{-0.05t} (the coffee example), find the temperature after 10 minutes.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "148.85",
            acceptableAnswerVariants: ["148.8", "149", "148.85°F"],
            stepByStepExplanation: "T(10) = 70 + 130e^{-0.5} ≈ 70 + 78.85 ≈ 148.85°F.",
            difficultyLevel: 2,
          },
          {
            problemId: "c4-u4-l3-p3",
            topicTag: "ordinaryDifferentialEquations",
            promptText:
              "Using the same coffee model T(t) = 70 + 130e^{-0.05t}, how many minutes does it take to cool to 100°F?",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "29.33",
            acceptableAnswerVariants: ["29.3", "29", "29.33 minutes"],
            stepByStepExplanation:
              "Set 70 + 130e^{-0.05t} = 100. Then e^{-0.05t} = 30/130 = 3/13, so t = -ln(3/13)/0.05 ≈ 29.33 minutes.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Modeling with First Order DEs",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/DE/Modeling.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Differential equations",
            resourceUrl: "https://www.khanacademy.org/math/differential-equations",
            resourceType: "interactivePractice",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "second-order-homogeneous",
    unitTitle: "Second-Order Linear Homogeneous Equations",
    unitDescription: "The characteristic equation and the three root cases — real distinct, repeated, and complex.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Second-Order Linear Homogeneous Equations",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc4-second-order-homogeneous-quiz-p1",
          topicTag: "ordinaryDifferentialEquations",
          promptText: "Find the root(s) of the characteristic equation for 4y'' + 4y' + y = 0.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "r=-1/2",
          acceptableAnswerVariants: ["r = -1/2", "-1/2", "-0.5"],
          stepByStepExplanation:
            "The characteristic equation is 4r^2 + 4r + 1 = 0, which factors as (2r+1)^2 = 0, giving a repeated root r = -1/2.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc4-second-order-homogeneous-quiz-p2",
          topicTag: "ordinaryDifferentialEquations",
          promptText: "Find the general solution.",
          promptMathExpression: "y'' + 9y = 0",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "y=C1cos(3x)+C2sin(3x)",
          acceptableAnswerVariants: [
            "y = C1\\cos(3x) + C2\\sin(3x)",
            "y=C_1\\cos 3x+C_2\\sin 3x",
          ],
          stepByStepExplanation:
            "The characteristic equation r^2 + 9 = 0 gives r = ±3i, purely imaginary roots with α = 0, β = 3. The general solution is y = e^{0x}(C1\\cos 3x + C2\\sin 3x) = C1\\cos(3x) + C2\\sin(3x).",
          difficultyLevel: 2,
        },
        {
          problemId: "calc4-second-order-homogeneous-quiz-p3",
          topicTag: "ordinaryDifferentialEquations",
          promptText: "Solve the initial value problem.",
          promptMathExpression: "y'' + y' - 6y = 0, \\quad y(0) = 2, \\quad y'(0) = -1",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "y=e^{-3x}+e^{2x}",
          acceptableAnswerVariants: ["y = e^{-3x} + e^{2x}"],
          stepByStepExplanation:
            "The characteristic equation r^2+r-6=(r+3)(r-2)=0 gives roots -3 and 2, so y = C1e^{-3x}+C2e^{2x}. Apply y(0)=2: C1+C2=2. Differentiate: y'=-3C1e^{-3x}+2C2e^{2x}; apply y'(0)=-1: -3C1+2C2=-1. Solving together (C1=2-C2, so -3(2-C2)+2C2=-1, giving -6+5C2=-1, C2=1, C1=1), the particular solution is y = e^{-3x}+e^{2x}.",
          difficultyLevel: 4,
        },
        {
          problemId: "calc4-second-order-homogeneous-quiz-p4",
          topicTag: "ordinaryDifferentialEquations",
          promptText: "Solve the initial value problem.",
          promptMathExpression: "y'' + 8y' + 16y = 0, \\quad y(0) = 3, \\quad y'(0) = -2",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "y=(3+10x)e^{-4x}",
          acceptableAnswerVariants: ["y = (3 + 10x)e^{-4x}"],
          stepByStepExplanation:
            "The characteristic equation r^2+8r+16=(r+4)^2=0 has a repeated root r=-4, so y=(C1+C2x)e^{-4x}. Apply y(0)=3: C1=3. Differentiate: y'=C2e^{-4x}-4(C1+C2x)e^{-4x}; apply y'(0)=-2: C2-4C1=-2, so C2=-2+12=10. The particular solution is y=(3+10x)e^{-4x}.",
          difficultyLevel: 4,
        },
        {
          problemId: "calc4-second-order-homogeneous-quiz-p5",
          topicTag: "ordinaryDifferentialEquations",
          promptText: "Without fully solving it, determine which case applies to y'' + 6y' + 13y = 0.",
          answerFormat: "multipleChoice",
          choices: [
            "Complex conjugate roots",
            "Two real, distinct roots",
            "One repeated real root",
            "No roots exist",
          ],
          correctAnswer: "Complex conjugate roots",
          stepByStepExplanation:
            "Here a=1, b=6, c=13, so the discriminant is b^2-4ac = 36-52 = -16, which is negative. A negative discriminant always means a complex conjugate pair of roots.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc4-second-order-homogeneous-quiz-p6",
          topicTag: "ordinaryDifferentialEquations",
          promptText: "A characteristic equation has a repeated root r = -6. Write the general solution to the differential equation.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "y=(C1+C2x)e^{-6x}",
          acceptableAnswerVariants: ["y = (C1 + C2x)e^{-6x}"],
          stepByStepExplanation:
            "For a repeated root r, the general solution is always y = (C1 + C2x)e^{rx}. With r = -6, that's y = (C1 + C2x)e^{-6x}.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc4-second-order-homogeneous-quiz-p7",
          topicTag: "ordinaryDifferentialEquations",
          promptText: "Solve the initial value problem.",
          promptMathExpression: "y'' + 2y' + 5y = 0, \\quad y(0) = 2, \\quad y'(0) = 0",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "y=e^{-x}(2cos(2x)+sin(2x))",
          acceptableAnswerVariants: [
            "y = e^{-x}(2\\cos(2x)+\\sin(2x))",
            "y=e^{-x}(2\\cos 2x+\\sin 2x)",
          ],
          stepByStepExplanation:
            "The characteristic equation r^2+2r+5=0 gives r = [-2±√(4-20)]/2 = -1±2i, so α=-1, β=2. General solution: y=e^{-x}(C1\\cos2x+C2\\sin2x). Apply y(0)=2: C1=2. Differentiate: y'=-e^{-x}(C1\\cos2x+C2\\sin2x)+e^{-x}(-2C1\\sin2x+2C2\\cos2x); apply y'(0)=0: -C1+2C2=0, so C2=1 (since C1=2). The particular solution is y=e^{-x}(2\\cos2x+\\sin2x).",
          difficultyLevel: 4,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "the-characteristic-equation",
        lessonTitle: "The Characteristic Equation",
        estimatedMinutes: 25,
        topicTag: "ordinaryDifferentialEquations",
        learningGoals: [
          "Derive the characteristic equation of a constant-coefficient second-order linear homogeneous equation",
          "Find the roots of a characteristic equation",
          "Identify which of the three solution cases (real distinct, repeated, complex) applies",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Guessing an exponential and turning calculus into algebra",
            bodyText:
              "For a constant-coefficient equation ay'' + by' + cy = 0, try a solution of the form y = e^{rx}. Since y' = re^{rx} and y'' = r^2e^{rx}, substituting turns the whole differential equation into ar^2e^{rx} + bre^{rx} + ce^{rx} = 0. Because e^{rx} is never zero, it divides out completely, leaving a plain quadratic equation in r — the characteristic equation. This is the single biggest idea in this unit: solving a second-order linear homogeneous differential equation reduces to solving a quadratic.",
          },
          {
            blockType: "keyFormula",
            headingText: "The characteristic equation and its three cases",
            bodyText:
              "For ay'' + by' + cy = 0, the characteristic equation is ar^2 + br + c = 0. Its discriminant b^2 - 4ac determines which of three cases you're in: positive gives two real, distinct roots; zero gives one repeated real root; negative gives a complex conjugate pair of roots. Each case has its own general-solution formula, covered in the next three lessons.",
            mathExpression: "ay'' + by' + cy = 0 \\implies ar^2 + br + c = 0",
          },
          {
            blockType: "workedExample",
            headingText: "Finding and classifying roots",
            bodyText:
              "For y'' - 2y' - 3y = 0, the characteristic equation is r^2 - 2r - 3 = 0, which factors as (r - 3)(r + 1) = 0, giving roots r = 3 and r = -1 — two real, distinct roots. For y'' + 2y' + 5y = 0, the characteristic equation is r^2 + 2r + 5 = 0. The discriminant is 4 - 20 = -16, which is negative, so this equation falls into the complex-roots case (its actual roots will be found in that lesson using the quadratic formula).",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Thinking a discriminant of exactly zero means 'no solution,' the way it might for some other equations — here it means exactly the opposite: a valid, importantly different case (a repeated root), not an absence of one. Also common: sign errors when rearranging the original differential equation into the standard form ay'' + by' + cy = 0 before reading off a, b, and c.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c4-u5-l1-p1",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "Write the characteristic equation for 2y'' + 5y' - 3y = 0.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "2r^2+5r-3=0",
            acceptableAnswerVariants: ["2r^2 + 5r - 3 = 0"],
            stepByStepExplanation:
              "Substituting y = e^{rx} and dividing out e^{rx} turns each derivative into a power of r: y'' becomes r^2, y' becomes r, and y becomes 1, giving 2r^2 + 5r - 3 = 0.",
            difficultyLevel: 1,
          },
          {
            problemId: "c4-u5-l1-p2",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "Find the root(s) of the characteristic equation r^2 + 6r + 9 = 0.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "r=-3",
            acceptableAnswerVariants: ["r = -3", "-3"],
            stepByStepExplanation:
              "r^2 + 6r + 9 = (r+3)^2 = 0, so r = -3 is a repeated (double) root.",
            difficultyLevel: 2,
          },
          {
            problemId: "c4-u5-l1-p3",
            topicTag: "ordinaryDifferentialEquations",
            promptText:
              "Without fully solving it, determine which case applies to y'' + 2y' + 5y = 0.",
            answerFormat: "multipleChoice",
            choices: [
              "Complex conjugate roots",
              "Two real, distinct roots",
              "One repeated real root",
              "No roots exist",
            ],
            correctAnswer: "Complex conjugate roots",
            stepByStepExplanation:
              "Here a=1, b=2, c=5, so the discriminant is b^2 - 4ac = 4 - 20 = -16, which is negative. A negative discriminant always means the characteristic equation has a complex conjugate pair of roots.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Real, Distinct Roots",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/DE/RealRoots.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.03: Differential Equations",
            resourceUrl: "https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "real-distinct-roots",
        lessonTitle: "Real, Distinct Roots",
        estimatedMinutes: 20,
        topicTag: "ordinaryDifferentialEquations",
        learningGoals: [
          "Write the general solution when the characteristic equation has two real, distinct roots",
          "Apply initial conditions to find a particular solution in this case",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Two independent exponential building blocks",
            bodyText:
              "When the characteristic equation ar^2 + br + c = 0 has two distinct real roots r1 and r2, each one produces its own valid solution, e^{r1x} and e^{r2x}. Because they're distinct exponentials, neither is a constant multiple of the other, so together they form a complete general solution — any linear combination of them solves the equation.",
          },
          {
            blockType: "keyFormula",
            headingText: "General solution for real, distinct roots",
            bodyText: "With roots r1 ≠ r2, both real, the general solution is a combination of the two exponentials.",
            mathExpression: "y = C_1e^{r_1x} + C_2e^{r_2x}",
          },
          {
            blockType: "workedExample",
            headingText: "Solving an initial value problem",
            bodyText:
              "Solve y'' - 5y' + 6y = 0, y(0) = 1, y'(0) = 0. The characteristic equation r^2 - 5r + 6 = 0 factors as (r-2)(r-3) = 0, giving roots 2 and 3. General solution: y = C1e^{2x} + C2e^{3x}. Apply y(0) = 1: C1 + C2 = 1. Differentiate: y' = 2C1e^{2x} + 3C2e^{3x}, and apply y'(0) = 0: 2C1 + 3C2 = 0. Solving these two equations together (from the second, C1 = -1.5C2; substitute into the first: -1.5C2 + C2 = 1, so -0.5C2 = 1, C2 = -2, and C1 = 3). The particular solution is y = 3e^{2x} - 2e^{3x}.",
            mathExpression: "y = 3e^{2x} - 2e^{3x}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Applying an initial condition to only one exponential term instead of the full sum — for example, plugging x=0 into C1e^{2x} alone to 'solve' for C1 before ever bringing C2 into the picture. Both initial conditions must be applied to the complete general solution (and its derivative) simultaneously, producing a system of two equations in C1 and C2 that gets solved together.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c4-u5-l2-p1",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "Find the general solution.",
            promptMathExpression: "y'' - y' - 6y = 0",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "y=C1e^{3x}+C2e^{-2x}",
            acceptableAnswerVariants: ["y = C1e^{3x} + C2e^{-2x}", "y=C_1e^{3x}+C_2e^{-2x}"],
            stepByStepExplanation:
              "The characteristic equation r^2 - r - 6 = 0 factors as (r-3)(r+2) = 0, giving roots 3 and -2. The general solution is y = C1e^{3x} + C2e^{-2x}.",
            difficultyLevel: 2,
          },
          {
            problemId: "c4-u5-l2-p2",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "Solve the initial value problem.",
            promptMathExpression: "y'' - 5y' + 6y = 0, \\quad y(0) = 1, \\quad y'(0) = 0",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "y=3e^{2x}-2e^{3x}",
            acceptableAnswerVariants: ["y = 3e^{2x} - 2e^{3x}"],
            stepByStepExplanation:
              "As shown in the worked example: roots are 2 and 3, so y = C1e^{2x}+C2e^{3x}. Applying both initial conditions gives C1 = 3 and C2 = -2, so y = 3e^{2x} - 2e^{3x}.",
            difficultyLevel: 3,
          },
          {
            problemId: "c4-u5-l2-p3",
            topicTag: "ordinaryDifferentialEquations",
            promptText:
              "A characteristic equation has roots r = 4 and r = -1. Write the general solution to the differential equation.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "y=C1e^{4x}+C2e^{-x}",
            acceptableAnswerVariants: ["y = C1e^{4x} + C2e^{-x}"],
            stepByStepExplanation:
              "Each real root r contributes a term C·e^{rx}. With roots 4 and -1, the general solution is y = C1e^{4x} + C2e^{-x}.",
            difficultyLevel: 1,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Real, Distinct Roots",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/DE/RealRoots.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.03: Differential Equations",
            resourceUrl: "https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "repeated-roots",
        lessonTitle: "Repeated Roots",
        estimatedMinutes: 20,
        topicTag: "ordinaryDifferentialEquations",
        learningGoals: [
          "Write the general solution when the characteristic equation has a repeated root",
          "Explain why a second solution needs an extra factor of x",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Why you can't just use e^{rx} twice",
            bodyText:
              "When the characteristic equation has a repeated root r (discriminant exactly zero), the guess y = e^{rx} only produces one independent solution — using it twice, like C1e^{rx} + C2e^{rx}, is really just one term in disguise, since it combines into (C1+C2)e^{rx}. A second-order equation needs two genuinely independent solutions, so a second one is needed: it turns out xe^{rx} also solves the equation whenever r is a repeated root, and it is not a constant multiple of e^{rx}.",
          },
          {
            blockType: "keyFormula",
            headingText: "General solution for a repeated root",
            bodyText: "With a single repeated root r, the general solution pairs e^{rx} with xe^{rx}.",
            mathExpression: "y = (C_1 + C_2x)e^{rx}",
          },
          {
            blockType: "workedExample",
            headingText: "Solving an initial value problem",
            bodyText:
              "Solve y'' - 4y' + 4y = 0, y(0) = 2, y'(0) = 1. The characteristic equation r^2 - 4r + 4 = (r-2)^2 = 0 has a repeated root r = 2. General solution: y = (C1 + C2x)e^{2x}. Apply y(0) = 2: C1 = 2. Differentiate using the product rule: y' = C2e^{2x} + 2(C1+C2x)e^{2x}. Apply y'(0) = 1: C2 + 2C1 = 1, so C2 + 4 = 1, giving C2 = -3. The particular solution is y = (2 - 3x)e^{2x}.",
            mathExpression: "y = (2 - 3x)e^{2x}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Writing the general solution for a repeated root as y = C1e^{rx} + C2e^{rx} instead of y = (C1 + C2x)e^{rx} — the first version has only one truly independent piece and can't satisfy two arbitrary initial conditions. Whenever you find a repeated root, remember to multiply the second copy by x.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c4-u5-l3-p1",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "Find the general solution.",
            promptMathExpression: "y'' + 6y' + 9y = 0",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "y=(C1+C2x)e^{-3x}",
            acceptableAnswerVariants: ["y = (C1 + C2x)e^{-3x}"],
            stepByStepExplanation:
              "The characteristic equation r^2 + 6r + 9 = (r+3)^2 = 0 has a repeated root r = -3, so the general solution is y = (C1 + C2x)e^{-3x}.",
            difficultyLevel: 2,
          },
          {
            problemId: "c4-u5-l3-p2",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "Solve the initial value problem.",
            promptMathExpression: "y'' - 4y' + 4y = 0, \\quad y(0) = 2, \\quad y'(0) = 1",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "y=(2-3x)e^{2x}",
            acceptableAnswerVariants: ["y = (2 - 3x)e^{2x}"],
            stepByStepExplanation:
              "As in the worked example, the repeated root is r = 2, and applying both initial conditions gives C1 = 2, C2 = -3, so y = (2-3x)e^{2x}.",
            difficultyLevel: 3,
          },
          {
            problemId: "c4-u5-l3-p3",
            topicTag: "ordinaryDifferentialEquations",
            promptText:
              "A characteristic equation has a repeated root r = 5. Write the general solution to the differential equation.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "y=(C1+C2x)e^{5x}",
            acceptableAnswerVariants: ["y = (C1 + C2x)e^{5x}"],
            stepByStepExplanation:
              "For a repeated root r, the general solution is always y = (C1 + C2x)e^{rx}. With r = 5, that's y = (C1 + C2x)e^{5x}.",
            difficultyLevel: 1,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Repeated Roots",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/DE/RepeatedRoots.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.03: Differential Equations",
            resourceUrl: "https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "complex-roots",
        lessonTitle: "Complex Roots",
        estimatedMinutes: 25,
        topicTag: "ordinaryDifferentialEquations",
        learningGoals: [
          "Find complex conjugate roots of a characteristic equation using the quadratic formula",
          "Convert a complex-exponential solution into a real-valued solution using sine and cosine",
          "Solve an initial value problem in the complex-root case",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Where the bridge course's complex numbers come back",
            bodyText:
              "When the discriminant b^2 - 4ac is negative, the quadratic formula produces a complex conjugate pair of roots, r = α ± βi (using the complex-number arithmetic from the bridge course). Euler's formula, e^{iθ} = cos θ + i sin θ, converts the resulting complex exponentials into a real-valued solution built from e^{αx}cos(βx) and e^{αx}sin(βx) — no complex numbers appear in the final answer, even though they were essential to getting there.",
          },
          {
            blockType: "keyFormula",
            headingText: "General solution for complex roots",
            bodyText:
              "With roots α ± βi, the real part α becomes a growth/decay envelope multiplying an oscillation of angular frequency β.",
            mathExpression: "y = e^{\\alpha x}\\big(C_1\\cos(\\beta x) + C_2\\sin(\\beta x)\\big)",
          },
          {
            blockType: "workedExample",
            headingText: "Solving an initial value problem",
            bodyText:
              "Solve y'' + 4y' + 13y = 0, y(0) = 0, y'(0) = 3. The characteristic equation is r^2 + 4r + 13 = 0. By the quadratic formula, r = [-4 ± √(16-52)]/2 = [-4 ± √(-36)]/2 = -2 ± 3i, so α = -2 and β = 3. General solution: y = e^{-2x}(C1\\cos 3x + C2\\sin 3x). Apply y(0) = 0: C1 = 0. Differentiate (product rule): y' = -2e^{-2x}(C1\\cos 3x+C2\\sin 3x) + e^{-2x}(-3C1\\sin 3x+3C2\\cos 3x). Apply y'(0) = 3: -2C1 + 3C2 = 3, and since C1 = 0, C2 = 1. The particular solution is y = e^{-2x}\\sin(3x).",
            mathExpression: "y = e^{-2x}\\sin(3x)",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Leaving the answer in terms of complex exponentials, like y = C1e^{(-2+3i)x} + C2e^{(-2-3i)x}, instead of converting to the real form with cosine and sine — this technically solves the equation but is almost never the form a problem is asking for. Also common: mixing up α and β (using the imaginary part as the exponential decay rate, or vice versa).",
          },
        ],
        practiceProblems: [
          {
            problemId: "c4-u5-l4-p1",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "Find the general solution.",
            promptMathExpression: "y'' + 2y' + 10y = 0",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "y=e^{-x}(C1cos(3x)+C2sin(3x))",
            acceptableAnswerVariants: [
              "y = e^{-x}(C1\\cos(3x)+C2\\sin(3x))",
              "y=e^{-x}(C_1\\cos 3x+C_2\\sin 3x)",
            ],
            stepByStepExplanation:
              "The characteristic equation r^2+2r+10=0 gives r = [-2±√(4-40)]/2 = [-2±√(-36)]/2 = -1±3i, so α=-1, β=3. The general solution is y = e^{-x}(C1\\cos 3x + C2\\sin 3x).",
            difficultyLevel: 3,
          },
          {
            problemId: "c4-u5-l4-p2",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "Solve the initial value problem.",
            promptMathExpression: "y'' + 4y' + 13y = 0, \\quad y(0) = 0, \\quad y'(0) = 3",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "y=e^{-2x}sin(3x)",
            acceptableAnswerVariants: ["y = e^{-2x}\\sin(3x)", "y=e^{-2x}\\sin 3x"],
            stepByStepExplanation:
              "As in the worked example, α = -2, β = 3, C1 = 0, and C2 = 1, giving y = e^{-2x}\\sin(3x).",
            difficultyLevel: 4,
          },
          {
            problemId: "c4-u5-l4-p3",
            topicTag: "ordinaryDifferentialEquations",
            promptText:
              "A characteristic equation has complex roots r = 2 ± 5i. Write the general solution to the differential equation.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "y=e^{2x}(C1cos(5x)+C2sin(5x))",
            acceptableAnswerVariants: [
              "y = e^{2x}(C1\\cos(5x)+C2\\sin(5x))",
              "y=e^{2x}(C_1\\cos 5x+C_2\\sin 5x)",
            ],
            stepByStepExplanation:
              "For complex roots α ± βi, the general solution is y = e^{αx}(C1\\cos(βx)+C2\\sin(βx)). With α=2, β=5, that's y = e^{2x}(C1\\cos 5x + C2\\sin 5x).",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Complex Roots",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/DE/ComplexRoots.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.03: Differential Equations",
            resourceUrl: "https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/",
            resourceType: "videoLesson",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "second-order-nonhomogeneous",
    unitTitle: "Second-Order Linear Non-Homogeneous Equations",
    unitDescription: "Undetermined coefficients and variation of parameters for equations with a forcing term.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Second-Order Linear Non-Homogeneous Equations",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc4-second-order-nonhomogeneous-quiz-p1",
          topicTag: "ordinaryDifferentialEquations",
          promptText: "y'' - 5y' + 6y = 2x - 1 has homogeneous solution y_h = C1e^{2x} + C2e^{3x}. What form should the particular-solution guess take?",
          answerFormat: "multipleChoice",
          choices: ["Ax + B", "Ax^2 + Bx", "Ae^{2x} + Be^{3x}", "A\\cos x + B\\sin x"],
          correctAnswer: "Ax + B",
          stepByStepExplanation:
            "The forcing function 2x - 1 is a degree-1 polynomial, so the standard guess is a same-degree polynomial Ax + B. Since neither root of the characteristic equation (2 or 3) is zero, this guess doesn't overlap with y_h, so no adjustment by x is needed.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc4-second-order-nonhomogeneous-quiz-p2",
          topicTag: "ordinaryDifferentialEquations",
          promptText: "Find the general solution.",
          promptMathExpression: "y'' - 5y' + 6y = 2x - 1",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "y=C1e^{2x}+C2e^{3x}+x/3+1/9",
          acceptableAnswerVariants: [
            "y = C1e^{2x} + C2e^{3x} + (1/3)x + 1/9",
            "y=C_1e^{2x}+C_2e^{3x}+\\dfrac{1}{3}x+\\dfrac{1}{9}",
          ],
          stepByStepExplanation:
            "y_h = C1e^{2x}+C2e^{3x} (roots 2, 3). Guess y_p = Ax+B (no overlap). y_p'=A, y_p''=0. Substitute: 0 - 5A + 6(Ax+B) = 2x-1, so 6Ax + (6B-5A) = 2x-1. Matching coefficients: 6A=2 gives A=1/3; 6B-5A=-1 gives 6B-5/3=-1, so 6B=2/3, B=1/9. Full solution: y=C1e^{2x}+C2e^{3x}+\\tfrac{1}{3}x+\\tfrac{1}{9}.",
          difficultyLevel: 4,
        },
        {
          problemId: "calc4-second-order-nonhomogeneous-quiz-p3",
          topicTag: "ordinaryDifferentialEquations",
          promptText: "For y1 = e^{-x} and y2 = e^{4x}, find the Wronskian W = y1y2' - y2y1'.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "5e^{3x}",
          acceptableAnswerVariants: ["5e^{3x}", "W=5e^{3x}"],
          stepByStepExplanation:
            "y2' = 4e^{4x}, y1' = -e^{-x}. W = e^{-x}(4e^{4x}) - e^{4x}(-e^{-x}) = 4e^{3x} + e^{3x} = 5e^{3x}.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc4-second-order-nonhomogeneous-quiz-p4",
          topicTag: "ordinaryDifferentialEquations",
          promptText:
            "For y'' + y = \\csc(x), using y1 = \\cos x, y2 = \\sin x, and W = 1, find u1' = -y2\\,g(x)/W.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "-1",
          stepByStepExplanation:
            "u1' = -\\sin x\\csc x. Since \\sin x\\csc x = 1 for any x where it's defined, u1' = -1.",
          difficultyLevel: 4,
        },
        {
          problemId: "calc4-second-order-nonhomogeneous-quiz-p5",
          topicTag: "ordinaryDifferentialEquations",
          promptText: "Which method is required for y'' + 4y = \\csc(2x)?",
          answerFormat: "multipleChoice",
          choices: ["Variation of parameters", "Undetermined coefficients", "Either, no preference", "Neither method applies"],
          correctAnswer: "Variation of parameters",
          stepByStepExplanation:
            "\\csc(2x) is not a polynomial, exponential, sine, cosine, or product of these, so it has no entry in undetermined coefficients' guess table. Variation of parameters, which works for any continuous forcing function, is required.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc4-second-order-nonhomogeneous-quiz-p6",
          topicTag: "ordinaryDifferentialEquations",
          promptText: "Solve y'' - 2y' - 3y = 4e^{-x} for the general solution.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "y=C1e^{3x}+C2e^{-x}-xe^{-x}",
          acceptableAnswerVariants: [
            "y = C1e^{3x} + C2e^{-x} - xe^{-x}",
            "y=C_1e^{3x}+C_2e^{-x}-xe^{-x}",
          ],
          stepByStepExplanation:
            "y_h: r^2-2r-3=(r-3)(r+1)=0, roots 3, -1, so y_h=C1e^{3x}+C2e^{-x}. Since e^{-x} matches the root r=-1, guess y_p=Axe^{-x} (multiplied once by x to clear the overlap). Then y_p'=Ae^{-x}(1-x) and y_p''=Ae^{-x}(x-2). Substituting: Ae^{-x}(x-2) - 2Ae^{-x}(1-x) - 3Axe^{-x} = Ae^{-x}[(x-2)-2(1-x)-3x] = Ae^{-x}(-4) = 4e^{-x}, so A=-1. The full solution is y=C1e^{3x}+C2e^{-x}-xe^{-x}.",
          difficultyLevel: 5,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "undetermined-coefficients",
        lessonTitle: "Undetermined Coefficients",
        estimatedMinutes: 30,
        topicTag: "ordinaryDifferentialEquations",
        learningGoals: [
          "Find the general solution of a non-homogeneous equation as y = y_h + y_p",
          "Guess the correct form of a particular solution based on the forcing function",
          "Adjust the guess when it overlaps with the homogeneous solution",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Two pieces: the homogeneous part plus a particular fix",
            bodyText:
              "For a non-homogeneous equation ay'' + by' + cy = g(x), the general solution is y = y_h + y_p, where y_h is the general solution to the matching homogeneous equation (everything you learned in the last unit) and y_p is any single solution that specifically produces g(x) on the right side. Undetermined coefficients finds y_p by guessing a form that looks like g(x) — a polynomial guess for a polynomial forcing term, an exponential guess for an exponential forcing term, and so on — with unknown coefficients to be pinned down by substitution.",
          },
          {
            blockType: "keyFormula",
            headingText: "Matching the guess to the forcing function",
            bodyText:
              "For g(x) = a polynomial of degree n, guess a polynomial of the same degree n. For g(x) = ke^{ax}, guess Ae^{ax}. For g(x) = k\\cos(\\beta x) or k\\sin(\\beta x), guess A\\cos(\\beta x) + B\\sin(\\beta x) (both terms together, even if only one appears in g). If any piece of that guess already solves the homogeneous equation, multiply the entire guess by x (or by x^2, if needed, to clear the overlap completely).",
          },
          {
            blockType: "workedExample",
            headingText: "A clean case, then an overlap case",
            bodyText:
              "Solve y'' - 3y' - 4y = 3e^{2x}. Homogeneous part: r^2-3r-4=(r-4)(r+1)=0, so y_h = C1e^{-x}+C2e^{4x}. Since e^{2x} isn't part of y_h, guess y_p = Ae^{2x}. Substituting: 4Ae^{2x} - 6Ae^{2x} - 4Ae^{2x} = 3e^{2x}, so -6A = 3, giving A = -1/2. The full solution is y = C1e^{-x}+C2e^{4x} - \\tfrac{1}{2}e^{2x}. Now compare with y'' - 4y' + 4y = e^{2x}, where the homogeneous solution is y_h = (C1+C2x)e^{2x} — here e^{2x} AND xe^{2x} are already taken, so the guess Ae^{2x} would collide, and even Axe^{2x} would still collide. Multiplying by x^2 clears it: guessing y_p = Ax^2e^{2x} and substituting eventually gives A = 1/2, so y_p = \\tfrac{1}{2}x^2e^{2x}.",
            mathExpression: "y_p = -\\tfrac{1}{2}e^{2x} \\quad \\text{vs.} \\quad y_p = \\tfrac{1}{2}x^2e^{2x} \\text{ (overlap case)}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Using the guess Axe^{2x} for the overlap example above and stopping there — that guess still duplicates the xe^{2x} term already present in y_h = (C1+C2x)e^{2x}, so it must be multiplied by x a second time, giving Ax^2e^{2x}. Whenever a repeated root's homogeneous solution overlaps the forcing function, check the guess against BOTH terms of y_h, not just the first one.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c4-u6-l1-p1",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "Find the general solution.",
            promptMathExpression: "y'' - y' - 2y = 5x + 1",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "y=C1e^{-x}+C2e^{2x}-2.5x+0.75",
            acceptableAnswerVariants: [
              "y = C1e^{-x} + C2e^{2x} - (5/2)x + 3/4",
              "y=C_1e^{-x}+C_2e^{2x}-\\dfrac{5}{2}x+\\dfrac{3}{4}",
            ],
            stepByStepExplanation:
              "Homogeneous: r^2-r-2=(r-2)(r+1)=0, so y_h=C1e^{-x}+C2e^{2x}. Since neither root is 0, guess y_p=Ax+B (no overlap). Substituting: 0 - A - 2(Ax+B) = 5x+1, so -2Ax + (-A-2B) = 5x+1. Matching coefficients: -2A=5 gives A=-5/2; -A-2B=1 gives 5/2-2B=1, so B=3/4. Full solution: y=C1e^{-x}+C2e^{2x}-\\tfrac{5}{2}x+\\tfrac{3}{4}.",
            difficultyLevel: 4,
          },
          {
            problemId: "c4-u6-l1-p2",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "Find the general solution.",
            promptMathExpression: "y'' - 3y' - 4y = 3e^{2x}",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "y=C1e^{-x}+C2e^{4x}-0.5e^{2x}",
            acceptableAnswerVariants: [
              "y = C1e^{-x} + C2e^{4x} - (1/2)e^{2x}",
              "y=C_1e^{-x}+C_2e^{4x}-\\dfrac{1}{2}e^{2x}",
            ],
            stepByStepExplanation:
              "As shown in the worked example, y_h=C1e^{-x}+C2e^{4x} and y_p=-\\tfrac{1}{2}e^{2x}, so y=C1e^{-x}+C2e^{4x}-\\tfrac{1}{2}e^{2x}.",
            difficultyLevel: 3,
          },
          {
            problemId: "c4-u6-l1-p3",
            topicTag: "ordinaryDifferentialEquations",
            promptText:
              "y'' - 4y' + 4y = e^{2x} has homogeneous solution y_h = (C1+C2x)e^{2x}. Since e^{2x} overlaps with both terms of y_h, what form should the particular-solution guess take?",
            answerFormat: "multipleChoice",
            choices: ["Ax^2e^{2x}", "Axe^{2x}", "Ae^{2x}", "Ax^3e^{2x}"],
            correctAnswer: "Ax^2e^{2x}",
            stepByStepExplanation:
              "The plain guess Ae^{2x} collides with the e^{2x} term in y_h, and even Axe^{2x} still collides with the xe^{2x} term. Multiplying by x once more, to Ax^2e^{2x}, finally produces a guess with no overlap.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Undetermined Coefficients",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/DE/UndeterminedCoefficients.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.03: Differential Equations",
            resourceUrl: "https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "variation-of-parameters",
        lessonTitle: "Variation of Parameters",
        estimatedMinutes: 30,
        topicTag: "ordinaryDifferentialEquations",
        learningGoals: [
          "Compute the Wronskian of two homogeneous solutions",
          "Use variation of parameters to find a particular solution for any forcing function",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "A method that always works, at the cost of more integration",
            bodyText:
              "Undetermined coefficients only works when the forcing function g(x) is a polynomial, exponential, sine/cosine, or a product of those — it has no guess for things like tan(x), ln(x), or 1/x. Variation of parameters handles ANY continuous g(x). The idea: start from the homogeneous solutions y1 and y2, and instead of constant coefficients C1, C2, let them become functions u1(x), u2(x) — 'varying the parameters' — chosen so that y_p = u1y1 + u2y2 solves the full non-homogeneous equation.",
          },
          {
            blockType: "keyFormula",
            headingText: "The variation of parameters formulas",
            bodyText:
              "Put the equation in standard form y'' + P(x)y' + Q(x)y = g(x) (leading coefficient exactly 1). With W the Wronskian of y1 and y2, compute u1' and u2' by these formulas, then integrate each and form y_p = u1y1 + u2y2.",
            mathExpression:
              "W = y_1y_2' - y_2y_1', \\qquad u_1' = \\dfrac{-y_2\\,g(x)}{W}, \\qquad u_2' = \\dfrac{y_1\\,g(x)}{W}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Solve y'' + y = \\tan(x). Homogeneous solutions: y1=\\cos x, y2=\\sin x, with Wronskian W = \\cos x\\cos x - \\sin x(-\\sin x) = \\cos^2x+\\sin^2x = 1. Here g(x)=\\tan x. u1' = -\\sin x\\tan x = -\\sin^2x/\\cos x = -(1-\\cos^2x)/\\cos x = -\\sec x + \\cos x. Integrating: u1 = -\\ln|\\sec x+\\tan x| + \\sin x. u2' = \\cos x\\tan x = \\sin x, so u2 = -\\cos x. Then y_p = u1y1+u2y2 = [-\\ln|\\sec x+\\tan x|+\\sin x]\\cos x + (-\\cos x)(\\sin x), and the \\sin x\\cos x terms cancel, leaving y_p = -\\cos x\\,\\ln|\\sec x+\\tan x|. The general solution is y = C1\\cos x+C2\\sin x - \\cos x\\ln|\\sec x+\\tan x|.",
            mathExpression: "y_p = -\\cos x\\,\\ln|\\sec x + \\tan x|",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Applying the formulas for u1' and u2' when the equation isn't in standard form yet (leading coefficient not equal to 1) — g(x) in the formula is the right-hand side AFTER dividing the whole equation through by the coefficient of y''. Also common: forgetting to actually integrate u1' and u2' to get u1 and u2 before building y_p, and instead plugging the derivatives themselves into y_p = u1y1+u2y2.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c4-u6-l2-p1",
            topicTag: "ordinaryDifferentialEquations",
            promptText:
              "For y'' + y = 0, with y1 = \\cos x and y2 = \\sin x, find the Wronskian W = y1y2' - y2y1'.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "1",
            stepByStepExplanation:
              "W = \\cos x \\cdot \\cos x - \\sin x \\cdot(-\\sin x) = \\cos^2 x + \\sin^2 x = 1.",
            difficultyLevel: 2,
          },
          {
            problemId: "c4-u6-l2-p2",
            topicTag: "ordinaryDifferentialEquations",
            promptText:
              "For y'' + 4y = \\csc(2x), using y1 = \\cos(2x), y2 = \\sin(2x), and W = 2, find u1' = -y2\\,g(x)/W.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "-1/2",
            acceptableAnswerVariants: ["-0.5", "u1'=-1/2"],
            stepByStepExplanation:
              "u1' = -\\sin(2x)\\csc(2x)/2. Since \\sin(2x)\\csc(2x) = 1 for any x where it's defined, this simplifies to u1' = -1/2.",
            difficultyLevel: 4,
          },
          {
            problemId: "c4-u6-l2-p3",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "Find the general solution using variation of parameters.",
            promptMathExpression: "y'' + y = \\sec(x)",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "y=C1cos(x)+C2sin(x)+cos(x)ln|cos(x)|+xsin(x)",
            acceptableAnswerVariants: [
              "y = C1\\cos x + C2\\sin x + \\cos x\\ln|\\cos x| + x\\sin x",
              "y=C_1\\cos x+C_2\\sin x+x\\sin x+\\cos x\\ln|\\cos x|",
            ],
            stepByStepExplanation:
              "With y1=\\cos x, y2=\\sin x, W=1, g(x)=\\sec x: u1' = -\\sin x\\sec x = -\\tan x, so u1 = \\ln|\\cos x|. u2' = \\cos x\\sec x = 1, so u2 = x. Then y_p = u1y1+u2y2 = \\cos x\\ln|\\cos x| + x\\sin x. The general solution is y = C1\\cos x + C2\\sin x + \\cos x\\ln|\\cos x| + x\\sin x.",
            difficultyLevel: 5,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Variation of Parameters",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/DE/VariationOfParameters.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.03: Differential Equations",
            resourceUrl: "https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "choosing-a-method",
        lessonTitle: "Choosing a Method",
        estimatedMinutes: 20,
        topicTag: "ordinaryDifferentialEquations",
        learningGoals: [
          "Decide whether undetermined coefficients or variation of parameters is the more efficient method for a given forcing function",
          "Recognize forcing functions that fall outside undetermined coefficients' guess table",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Fast when it applies, universal when it doesn't",
            bodyText:
              "Undetermined coefficients is almost always faster when it applies, because it turns the problem into algebra (matching coefficients) instead of integration. But its guess table only covers polynomials, exponentials, sines/cosines, and products of those. The moment a forcing function is something like \\tan x, \\sec x, \\ln x, 1/x, or e^x/x — anything without a finite family of derivatives that undetermined coefficients can guess from — variation of parameters is the only one of the two methods that will work.",
          },
          {
            blockType: "keyFormula",
            headingText: "A quick decision rule",
            bodyText:
              "Ask: is g(x) a polynomial, an exponential, a sine or cosine, or a sum/product of these? If yes, use undetermined coefficients (checking for overlap with y_h). If no, use variation of parameters.",
          },
          {
            blockType: "workedExample",
            headingText: "Three quick calls",
            bodyText:
              "y'' + y = 3x^2 - 2x: the forcing term is a plain polynomial, squarely in undetermined coefficients' table — use undetermined coefficients. y'' + y = \\sec(x): secant has no finite family of derivatives that stays in a fixed guessable form — undetermined coefficients has no guess for it, so variation of parameters is required. y'' - 4y' + 4y = e^{2x}/x: even though e^{2x} alone would be guessable, dividing by x makes the whole forcing term unguessable by undetermined coefficients — variation of parameters is required here too.",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Trying to force undetermined coefficients onto a forcing function like \\tan x or \\ln x by guessing wildly (or by taking more and more derivatives hoping the pattern closes) — for functions like these, no finite guess ever works, because their derivatives keep introducing new kinds of terms forever. If a few reasonable guesses don't close the pattern, that's the signal to switch to variation of parameters rather than keep guessing.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c4-u6-l3-p1",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "Which method is more efficient for y'' + y = 3x^2 - 2x?",
            answerFormat: "multipleChoice",
            choices: ["Undetermined coefficients", "Variation of parameters", "Either, no preference", "Neither method applies"],
            correctAnswer: "Undetermined coefficients",
            stepByStepExplanation:
              "The forcing function is a plain polynomial, which fits directly into undetermined coefficients' guess table (guess a same-degree polynomial), making it the faster choice.",
            difficultyLevel: 1,
          },
          {
            problemId: "c4-u6-l3-p2",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "Which method is required for y'' + y = \\sec(x)?",
            answerFormat: "multipleChoice",
            choices: ["Variation of parameters", "Undetermined coefficients", "Either, no preference", "Neither method applies"],
            correctAnswer: "Variation of parameters",
            stepByStepExplanation:
              "\\sec(x) is not a polynomial, exponential, sine, cosine, or product of these, so it has no entry in undetermined coefficients' guess table. Variation of parameters, which works for any continuous forcing function, is required.",
            difficultyLevel: 2,
          },
          {
            problemId: "c4-u6-l3-p3",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "Which method is required for y'' - 4y' + 4y = e^{2x}/x?",
            answerFormat: "multipleChoice",
            choices: ["Variation of parameters", "Undetermined coefficients", "Either, no preference", "Neither method applies"],
            correctAnswer: "Variation of parameters",
            stepByStepExplanation:
              "Even though e^{2x} by itself would be guessable, dividing by x produces a forcing term with no finite family of derivatives, so it falls outside undetermined coefficients' table. Variation of parameters is needed.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Undetermined Coefficients",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/DE/UndeterminedCoefficients.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Paul's Online Math Notes: Variation of Parameters",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/DE/VariationOfParameters.aspx",
            resourceType: "textbookChapter",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "second-order-applications",
    unitTitle: "Applications of Second-Order Equations",
    unitDescription: "Spring-mass systems and RLC circuits — the physical payoff of the second-order toolkit.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Applications of Second-Order Equations",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc4-second-order-applications-quiz-p1",
          topicTag: "ordinaryDifferentialEquations",
          promptText: "A mass of 5 kg is on a spring with k = 45 N/m. Find the period of oscillation T.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "2π/3",
          acceptableAnswerVariants: ["2pi/3", "T=2π/3", "(2/3)π"],
          stepByStepExplanation:
            "The natural frequency is ω0 = √(k/m) = √(45/5) = √9 = 3. The period is T = 2π/ω0 = 2π/3.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc4-second-order-applications-quiz-p2",
          topicTag: "ordinaryDifferentialEquations",
          promptText: "For a spring-mass system with m = 2, c = 8, k = 8, classify the damping.",
          answerFormat: "multipleChoice",
          choices: ["Critically damped", "Overdamped", "Underdamped", "Undamped"],
          correctAnswer: "Critically damped",
          stepByStepExplanation:
            "c^2 - 4mk = 64 - 64 = 0, so the discriminant is exactly zero, giving a repeated root — the critically damped case.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc4-second-order-applications-quiz-p3",
          topicTag: "ordinaryDifferentialEquations",
          promptText: "Solve the initial value problem for an underdamped system.",
          promptMathExpression: "x'' + 2x' + 5x = 0, \\quad x(0) = 1, \\quad x'(0) = 1",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "x=e^{-t}(cos(2t)+sin(2t))",
          acceptableAnswerVariants: [
            "x = e^{-t}(\\cos(2t)+\\sin(2t))",
            "x(t)=e^{-t}(\\cos 2t+\\sin 2t)",
          ],
          stepByStepExplanation:
            "r^2+2r+5=0 gives r=-1±2i (underdamped, since c^2-4mk=4-20=-16<0). x=e^{-t}(C1\\cos2t+C2\\sin2t). x(0)=1: C1=1. Differentiating: x'=-e^{-t}(C1\\cos2t+C2\\sin2t)+e^{-t}(-2C1\\sin2t+2C2\\cos2t); x'(0)=-C1+2C2=1, so 2C2=1+1=2, C2=1. So x=e^{-t}(\\cos2t+\\sin2t).",
          difficultyLevel: 4,
        },
        {
          problemId: "calc4-second-order-applications-quiz-p4",
          topicTag: "ordinaryDifferentialEquations",
          promptText: "In the mechanical-electrical analogy, which circuit quantity plays the role of the damping constant c?",
          answerFormat: "multipleChoice",
          choices: ["R (resistance)", "L (inductance)", "1/C (inverse capacitance)", "q(t) (charge)"],
          correctAnswer: "R (resistance)",
          stepByStepExplanation:
            "Comparing Lq''+Rq'+q/C=E(t) to mx''+cx'+kx=F(t) term by term: L matches m, R matches c (the damping term), and 1/C matches k.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc4-second-order-applications-quiz-p5",
          topicTag: "ordinaryDifferentialEquations",
          promptText: "Solve the initial value problem for the charge in an RLC circuit.",
          promptMathExpression: "q'' + 6q' + 25q = 0, \\quad q(0) = 0, \\quad q'(0) = 5",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "q=1.25e^{-3t}sin(4t)",
          acceptableAnswerVariants: [
            "q = 1.25e^{-3t}\\sin(4t)",
            "q(t)=\\dfrac{5}{4}e^{-3t}\\sin(4t)",
          ],
          stepByStepExplanation:
            "r^2+6r+25=0 gives r=-3±4i (underdamped). q=e^{-3t}(C1\\cos4t+C2\\sin4t). q(0)=0: C1=0. Differentiating (with C1=0): q'=e^{-3t}(-3C2\\sin4t+4C2\\cos4t); q'(0)=4C2=5, so C2=1.25. So q=1.25e^{-3t}\\sin(4t).",
          difficultyLevel: 4,
        },
        {
          problemId: "calc4-second-order-applications-quiz-p6",
          topicTag: "ordinaryDifferentialEquations",
          promptText:
            "An undamped spring-mass system is driven at exactly its natural frequency. What phenomenon does this produce?",
          answerFormat: "multipleChoice",
          choices: ["Resonance", "Critical damping", "An equilibrium solution", "Overdamping"],
          correctAnswer: "Resonance",
          stepByStepExplanation:
            "Driving an undamped system at its own natural frequency forces the undetermined-coefficients guess to include an extra factor of t, producing an amplitude that grows without bound over time — this is resonance.",
          difficultyLevel: 1,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "spring-mass-systems-free-vibration",
        lessonTitle: "Spring-Mass Systems: Free Vibration",
        estimatedMinutes: 25,
        topicTag: "ordinaryDifferentialEquations",
        learningGoals: [
          "Set up the differential equation for an undamped spring-mass system",
          "Find the natural frequency and period of oscillation",
          "Solve an initial value problem for free (undriven, undamped) vibration",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Newton's second law becomes a second-order equation",
            bodyText:
              "A mass m attached to a spring with stiffness k, displaced from equilibrium by x(t) and with no friction or outside force, obeys Newton's second law: mass times acceleration equals the spring's restoring force, which by Hooke's Law is -kx (pulling back toward equilibrium). This gives mx'' = -kx, or mx'' + kx = 0 — a second-order linear homogeneous equation with constant coefficients, exactly the kind covered in Unit 5.",
          },
          {
            blockType: "keyFormula",
            headingText: "Natural frequency and the general solution",
            bodyText:
              "The characteristic equation mr^2+k=0 gives purely imaginary roots r=±iω0, where ω0=√(k/m) is called the natural (angular) frequency. The motion is a pure oscillation with no growth or decay, and the period of one full cycle is T=2π/ω0.",
            mathExpression: "\\omega_0 = \\sqrt{\\dfrac{k}{m}}, \\qquad x(t) = C_1\\cos(\\omega_0 t) + C_2\\sin(\\omega_0 t)",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "A 2 kg mass is attached to a spring with k = 8 N/m. It's pulled 0.5 m from equilibrium and released from rest. Find x(t). Natural frequency: ω0 = √(8/2) = 2. General solution: x = C1\\cos(2t) + C2\\sin(2t). Apply x(0) = 0.5: C1 = 0.5. Apply x'(0) = 0 (released from rest, so no initial velocity): x' = -2C1\\sin(2t)+2C2\\cos(2t), and x'(0) = 2C2 = 0, so C2 = 0. The motion is x(t) = 0.5\\cos(2t) — a pure oscillation of amplitude 0.5 m and period π seconds.",
            mathExpression: "x(t) = 0.5\\cos(2t)",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Writing Hooke's Law's restoring force as +kx instead of -kx — the spring always pulls back TOWARD equilibrium, opposite to the displacement, which is exactly what makes the motion oscillate instead of grow exponentially. Also common: forgetting to convert 'released from rest' into the initial condition x'(0) = 0.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c4-u7-l1-p1",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "A mass of 4 kg is on a spring with k = 16 N/m. Find the natural frequency ω0.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "2",
            stepByStepExplanation: "ω0 = √(k/m) = √(16/4) = √4 = 2.",
            difficultyLevel: 1,
          },
          {
            problemId: "c4-u7-l1-p2",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "Solve the initial value problem.",
            promptMathExpression: "x'' + 16x = 0, \\quad x(0) = 2, \\quad x'(0) = 0",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "x=2cos(4t)",
            acceptableAnswerVariants: ["x = 2\\cos(4t)", "x(t)=2\\cos(4t)"],
            stepByStepExplanation:
              "ω0 = √16 = 4, so x = C1\\cos(4t)+C2\\sin(4t). Applying x(0)=2 gives C1=2; applying x'(0)=0 gives C2=0. So x(t)=2\\cos(4t).",
            difficultyLevel: 2,
          },
          {
            problemId: "c4-u7-l1-p3",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "A spring-mass system has natural frequency ω0 = 5. Find the period of oscillation.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "2π/5",
            acceptableAnswerVariants: ["2pi/5", "T=2π/5", "0.4π"],
            stepByStepExplanation: "The period is T = 2π/ω0 = 2π/5.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Mechanical Vibrations",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/DE/MechanicalVibrations.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.03: Differential Equations",
            resourceUrl: "https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "spring-mass-systems-damped-and-forced-vibration",
        lessonTitle: "Spring-Mass Systems: Damped and Forced Vibration",
        estimatedMinutes: 25,
        topicTag: "ordinaryDifferentialEquations",
        learningGoals: [
          "Classify a damped spring-mass system as overdamped, critically damped, or underdamped",
          "Solve an initial value problem for a damped system",
          "Recognize resonance in a forced, undamped system",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Adding friction, and adding a push",
            bodyText:
              "Real springs have friction (or a shock absorber), modeled by a damping term proportional to velocity: mx'' + cx' + kx = 0, with c > 0. This is exactly the second-order homogeneous equation from Units 5-6, and its three root cases now have physical names. If a periodic external force is applied too, the equation becomes mx'' + cx' + kx = F(t), a non-homogeneous equation from Unit 6.",
          },
          {
            blockType: "keyFormula",
            headingText: "The three damping cases",
            bodyText:
              "The discriminant c^2 - 4mk decides the case, exactly as in Unit 5. Overdamped (c^2 > 4mk): two real negative roots, motion returns to equilibrium without oscillating. Critically damped (c^2 = 4mk): a repeated negative root, the fastest possible return without oscillating. Underdamped (c^2 < 4mk): complex roots with negative real part, the mass oscillates with an exponentially decaying amplitude.",
          },
          {
            blockType: "workedExample",
            headingText: "An underdamped system, and resonance",
            bodyText:
              "For m=1, c=2, k=5, x(0)=1, x'(0)=0: the characteristic equation r^2+2r+5=0 gives r=-1±2i (underdamped, since c^2-4mk=4-20=-16<0). Solving gives x(t)=e^{-t}(\\cos 2t + 0.5\\sin 2t) — an oscillation whose amplitude decays like e^{-t}. Now consider an undamped system driven exactly at its own natural frequency: x''+9x=2\\cos(3t), x(0)=0, x'(0)=0. Because the forcing frequency (3) matches ω0=3 exactly, undetermined coefficients requires the overlap-adjusted guess At\\cos(3t)+Bt\\sin(3t), and solving gives x(t) = \\tfrac{t}{3}\\sin(3t) — the amplitude grows without bound over time. This is resonance, and it's why engineers deliberately avoid driving a real structure at its natural frequency.",
            mathExpression: "x(t) = e^{-t}(\\cos 2t + 0.5\\sin 2t) \\quad \\text{vs.} \\quad x(t) = \\dfrac{t}{3}\\sin(3t) \\text{ (resonance)}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Assuming any damped system eventually oscillates — an overdamped or critically damped system never oscillates at all; it settles back to equilibrium in one smooth pass. Whether oscillation happens is decided entirely by whether the roots come out complex, exactly like the characteristic equation cases from Unit 5.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c4-u7-l2-p1",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "For a spring-mass system with m=1, c=6, k=9, classify the damping.",
            answerFormat: "multipleChoice",
            choices: ["Critically damped", "Overdamped", "Underdamped", "Undamped"],
            correctAnswer: "Critically damped",
            stepByStepExplanation:
              "c^2 - 4mk = 36 - 36 = 0, so the discriminant is exactly zero, giving a repeated root — the critically damped case.",
            difficultyLevel: 2,
          },
          {
            problemId: "c4-u7-l2-p2",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "Solve the initial value problem for an overdamped system.",
            promptMathExpression: "x'' + 5x' + 4x = 0, \\quad x(0) = 2, \\quad x'(0) = -1",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "x=(7/3)e^{-t}-(1/3)e^{-4t}",
            acceptableAnswerVariants: [
              "x = (7/3)e^{-t} - (1/3)e^{-4t}",
              "x(t)=\\dfrac{7}{3}e^{-t}-\\dfrac{1}{3}e^{-4t}",
            ],
            stepByStepExplanation:
              "r^2+5r+4=(r+1)(r+4)=0, roots -1,-4 (overdamped). x=C1e^{-t}+C2e^{-4t}. x(0)=2: C1+C2=2. x'(0)=-1: -C1-4C2=-1. Solving: from the first, C1=2-C2; substituting, -(2-C2)-4C2=-1, so -2-3C2=-1, C2=-1/3, C1=7/3. So x=(7/3)e^{-t}-(1/3)e^{-4t}.",
            difficultyLevel: 4,
          },
          {
            problemId: "c4-u7-l2-p3",
            topicTag: "ordinaryDifferentialEquations",
            promptText:
              "In an undamped spring-mass system driven at exactly its natural frequency, what happens to the amplitude of the motion over time?",
            answerFormat: "multipleChoice",
            choices: [
              "It grows without bound (resonance)",
              "It stays perfectly constant",
              "It decays to zero",
              "It oscillates between two fixed values forever",
            ],
            correctAnswer: "It grows without bound (resonance)",
            stepByStepExplanation:
              "Driving at exactly the natural frequency forces the undetermined-coefficients guess to include an extra factor of t (since the plain guess overlaps the homogeneous solution), which makes the particular solution's amplitude grow linearly in time without bound — the phenomenon of resonance.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Mechanical Vibrations",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/DE/MechanicalVibrations.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.03: Differential Equations",
            resourceUrl: "https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "simple-electrical-circuits",
        lessonTitle: "Simple Electrical Circuits",
        estimatedMinutes: 25,
        topicTag: "ordinaryDifferentialEquations",
        learningGoals: [
          "Recognize the RLC circuit equation as the electrical analog of the spring-mass equation",
          "Solve an initial value problem for the charge in an RLC circuit",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "The same equation, a different story",
            bodyText:
              "A series circuit with a resistor (resistance R), an inductor (inductance L), and a capacitor (capacitance C) obeys Lq'' + Rq' + q/C = E(t), where q(t) is the charge on the capacitor and E(t) is the applied voltage. Compare this to mx''+cx'+kx=F(t): they're the identical equation with different letters. Inductance behaves like mass (resisting change), resistance behaves like damping (dissipating energy), and 1/capacitance behaves like spring stiffness (a restoring effect).",
          },
          {
            blockType: "keyFormula",
            headingText: "The mechanical-electrical analogy",
            bodyText:
              "Every technique from the last two lessons carries over directly: the same characteristic equation, the same three damping/oscillation cases, and the same resonance behavior for a driven circuit.",
            mathExpression:
              "L \\leftrightarrow m, \\qquad R \\leftrightarrow c, \\qquad \\dfrac{1}{C} \\leftrightarrow k, \\qquad E(t) \\leftrightarrow F(t)",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "An RLC circuit with L=1, R=4, and 1/C=29 (so C=1/29 farads), no applied voltage, starts with charge q(0)=1 and current q'(0)=0. The equation is q''+4q'+29q=0. Characteristic equation r^2+4r+29=0 gives r=[-4±√(16-116)]/2=[-4±√(-100)]/2=-2±5i — underdamped, exactly like the spring case. General solution: q=e^{-2t}(C1\\cos5t+C2\\sin5t). Applying q(0)=1: C1=1. Differentiating and applying q'(0)=0: -2C1+5C2=0, so C2=0.4. The charge oscillates and decays: q(t)=e^{-2t}(\\cos5t+0.4\\sin5t).",
            mathExpression: "q(t) = e^{-2t}(\\cos 5t + 0.4\\sin 5t)",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Forgetting that current is the DERIVATIVE of charge, i(t) = q'(t) — an initial condition given as 'the initial current is 0' translates to q'(0)=0, not q(0)=0. Mixing up which physical quantity (charge or current) an initial condition refers to is one of the most common setup errors in circuit problems.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c4-u7-l3-p1",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "In the mechanical-electrical analogy, which circuit quantity plays the role of the spring stiffness k?",
            answerFormat: "multipleChoice",
            choices: ["1/C (inverse capacitance)", "L (inductance)", "R (resistance)", "E(t) (applied voltage)"],
            correctAnswer: "1/C (inverse capacitance)",
            stepByStepExplanation:
              "Comparing Lq''+Rq'+q/C=E(t) to mx''+cx'+kx=F(t) term by term: L matches m, R matches c, and the coefficient of q (which is 1/C) matches k.",
            difficultyLevel: 1,
          },
          {
            problemId: "c4-u7-l3-p2",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "Solve the initial value problem.",
            promptMathExpression: "q'' + 4q' + 29q = 0, \\quad q(0) = 2, \\quad q'(0) = 0",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "q=e^{-2t}(2cos(5t)+0.8sin(5t))",
            acceptableAnswerVariants: [
              "q = e^{-2t}(2\\cos(5t)+0.8\\sin(5t))",
              "q(t)=e^{-2t}(2\\cos 5t+0.8\\sin 5t)",
            ],
            stepByStepExplanation:
              "As in the worked example, r=-2±5i. q=e^{-2t}(C1\\cos5t+C2\\sin5t). q(0)=2 gives C1=2. q'(0)=0 gives -2C1+5C2=0, so C2=0.8. So q=e^{-2t}(2\\cos5t+0.8\\sin5t).",
            difficultyLevel: 4,
          },
          {
            problemId: "c4-u7-l3-p3",
            topicTag: "ordinaryDifferentialEquations",
            promptText:
              "An RLC circuit's current i(t) is related to its charge q(t) by which equation?",
            answerFormat: "multipleChoice",
            choices: ["i(t) = q'(t)", "i(t) = q(t)", "i(t) = ∫q(t)dt", "i(t) = q''(t)"],
            correctAnswer: "i(t) = q'(t)",
            stepByStepExplanation:
              "Current is the rate of flow of charge, so i(t) is exactly the derivative of q(t).",
            difficultyLevel: 1,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Mechanical Vibrations",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/DE/MechanicalVibrations.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.03: Differential Equations",
            resourceUrl: "https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/",
            resourceType: "videoLesson",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "laplace-transforms",
    unitTitle: "The Laplace Transform and Its Applications",
    unitDescription: "An alternate technique, especially powerful for equations with discontinuous or impulse forcing.",
    unitQuiz: {
      quizTitle: "Unit Quiz: The Laplace Transform and Its Applications",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc4-laplace-transforms-quiz-p1",
          topicTag: "laplaceTransforms",
          promptText: "Find L{t^3}.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "6/s^4",
          acceptableAnswerVariants: ["6/s^4", "\\dfrac{6}{s^4}"],
          stepByStepExplanation: "L{t^n} = n!/s^{n+1}. With n=3: L{t^3} = 3!/s^4 = 6/s^4.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc4-laplace-transforms-quiz-p2",
          topicTag: "laplaceTransforms",
          promptText: "Find L{e^{-2t}}.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "1/(s+2)",
          acceptableAnswerVariants: ["1/(s+2)", "\\dfrac{1}{s+2}"],
          stepByStepExplanation: "L{e^{at}} = 1/(s-a). With a=-2: L{e^{-2t}} = 1/(s+2).",
          difficultyLevel: 1,
        },
        {
          problemId: "calc4-laplace-transforms-quiz-p3",
          topicTag: "laplaceTransforms",
          promptText: "Find L{2\\cos(5t) + 3t}.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "2s/(s^2+25)+3/s^2",
          acceptableAnswerVariants: ["2s/(s^2+25) + 3/s^2", "\\dfrac{2s}{s^2+25}+\\dfrac{3}{s^2}"],
          stepByStepExplanation:
            "By linearity, L{2\\cos5t+3t} = 2\\,L\\{\\cos5t\\} + 3\\,L\\{t\\} = 2\\cdot\\dfrac{s}{s^2+25} + 3\\cdot\\dfrac{1}{s^2} = \\dfrac{2s}{s^2+25}+\\dfrac{3}{s^2}.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc4-laplace-transforms-quiz-p4",
          topicTag: "laplaceTransforms",
          promptText: "Find L^{-1}\\{8/s^5\\}.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "t^4/3",
          acceptableAnswerVariants: ["t^4/3", "\\dfrac{t^4}{3}", "(1/3)t^4"],
          stepByStepExplanation:
            "The table entry is L^{-1}\\{n!/s^{n+1}\\}=t^n. With n=4, n!=24. Rescale: 8/s^5 = (8/24)\\cdot 24/s^5, so L^{-1}\\{8/s^5\\} = (8/24)t^4 = t^4/3.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc4-laplace-transforms-quiz-p5",
          topicTag: "laplaceTransforms",
          promptText: "Find L^{-1}\\left\\{\\dfrac{4s-6}{s^2+9}\\right\\}.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "4cos(3t)-2sin(3t)",
          acceptableAnswerVariants: [
            "4\\cos(3t)-2\\sin(3t)",
            "4cos(3t)-2sin(3t)",
          ],
          stepByStepExplanation:
            "Split into cosine and sine pieces (denominator s^2+9 means k=3): \\dfrac{4s-6}{s^2+9} = 4\\cdot\\dfrac{s}{s^2+9} - 2\\cdot\\dfrac{3}{s^2+9}. The first matches L^{-1}\\{s/(s^2+9)\\}=\\cos(3t); the second (rescaling 6 to 2·3) matches L^{-1}\\{3/(s^2+9)\\}=\\sin(3t) scaled by 2. So f(t) = 4\\cos(3t) - 2\\sin(3t).",
          difficultyLevel: 3,
        },
        {
          problemId: "calc4-laplace-transforms-quiz-p6",
          topicTag: "laplaceTransforms",
          promptText: "Find L{δ(t-6)}.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "e^{-6s}",
          acceptableAnswerVariants: ["e^-6s"],
          stepByStepExplanation: "L{δ(t-a)}=e^{-as}. With a=6: L{δ(t-6)}=e^{-6s}.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc4-laplace-transforms-quiz-p7",
          topicTag: "laplaceTransforms",
          promptText: "Solve using Laplace transforms.",
          promptMathExpression: "y'' + 4y' + 3y = 0, \\quad y(0) = 3, \\quad y'(0) = -1",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "y=4e^{-t}-e^{-3t}",
          acceptableAnswerVariants: ["y = 4e^{-t} - e^{-3t}"],
          stepByStepExplanation:
            "Transform every term: [s^2Y-3s+1]+4[sY-3]+3Y=0, which gives s^2Y-3s+1+4sY-12+3Y=0, so Y(s^2+4s+3)=3s+11. Since s^2+4s+3=(s+1)(s+3), Y(s)=(3s+11)/[(s+1)(s+3)]. Partial fractions A/(s+1)+B/(s+3): at s=-1, A(2)=8 so A=4; at s=-3, B(-2)=2 so B=-1. So Y(s)=4/(s+1)-1/(s+3), and inverting gives y(t)=4e^{-t}-e^{-3t}. Checking: y(0)=4-1=3 ✓ and y'(0)=-4+3=-1 ✓.",
          difficultyLevel: 5,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "the-laplace-transform",
        lessonTitle: "The Laplace Transform",
        estimatedMinutes: 25,
        topicTag: "laplaceTransforms",
        learningGoals: [
          "State the definition of the Laplace transform as an improper integral",
          "Compute the Laplace transform of basic functions using the definition and a transform table",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Turning a function of t into a function of s",
            bodyText:
              "The Laplace transform takes a function f(t) (defined for t ≥ 0) and produces a new function F(s), defined by an improper integral. The whole point, which pays off in the next few lessons, is that this transform turns derivatives into algebra: differentiating f(t) corresponds to just multiplying F(s) by s (with a small correction for initial conditions) — so an entire differential equation in t becomes an algebra problem in s.",
          },
          {
            blockType: "keyFormula",
            headingText: "The definition, and a starter table",
            bodyText:
              "The definition, and the transforms of the functions used constantly in this course. All of these converge for s larger than some value depending on f.",
            mathExpression:
              "\\mathcal{L}\\{f(t)\\} = F(s) = \\int_0^{\\infty} e^{-st}f(t)\\,dt, \\qquad \\mathcal{L}\\{1\\}=\\dfrac{1}{s},\\ \\mathcal{L}\\{t^n\\}=\\dfrac{n!}{s^{n+1}},\\ \\mathcal{L}\\{e^{at}\\}=\\dfrac{1}{s-a},\\ \\mathcal{L}\\{\\sin kt\\}=\\dfrac{k}{s^2+k^2},\\ \\mathcal{L}\\{\\cos kt\\}=\\dfrac{s}{s^2+k^2}",
          },
          {
            blockType: "workedExample",
            headingText: "Deriving L{1} from the definition",
            bodyText:
              "Compute \\mathcal{L}\\{1\\} directly: \\int_0^\\infty e^{-st}(1)\\,dt = \\left[-\\dfrac{1}{s}e^{-st}\\right]_0^\\infty. As t→∞, e^{-st}→0 (for s>0), so the upper limit contributes 0. At t=0, -\\tfrac{1}{s}e^{0}=-\\tfrac{1}{s}. Subtracting (0) - (-\\tfrac{1}{s}) gives \\tfrac{1}{s}. So \\mathcal{L}\\{1\\}=1/s, matching the table. Once a handful of transforms like this are established, the table (plus linearity, \\mathcal{L}\\{af+bg\\}=a\\mathcal{L}\\{f\\}+b\\mathcal{L}\\{g\\}) handles almost every function this course needs — you rarely evaluate the defining integral by hand again.",
            mathExpression: "\\mathcal{L}\\{1\\} = \\dfrac{1}{s}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Treating the Laplace transform as if it were itself the method for solving the differential equation, rather than a tool used inside that method — computing L{f(t)} is just step one; the technique isn't complete until you transform the whole equation, solve algebraically for Y(s), and transform back (the subject of the next two lessons).",
          },
        ],
        practiceProblems: [
          {
            problemId: "c4-u8-l1-p1",
            topicTag: "laplaceTransforms",
            promptText: "Find L{t^2} using the table.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "2/s^3",
            acceptableAnswerVariants: ["2/s^3", "\\dfrac{2}{s^3}"],
            stepByStepExplanation: "L{t^n} = n!/s^{n+1}. With n=2: L{t^2} = 2!/s^3 = 2/s^3.",
            difficultyLevel: 1,
          },
          {
            problemId: "c4-u8-l1-p2",
            topicTag: "laplaceTransforms",
            promptText: "Find L{e^{5t}}.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "1/(s-5)",
            acceptableAnswerVariants: ["1/(s-5)", "\\dfrac{1}{s-5}"],
            stepByStepExplanation: "L{e^{at}} = 1/(s-a). With a=5: L{e^{5t}} = 1/(s-5).",
            difficultyLevel: 1,
          },
          {
            problemId: "c4-u8-l1-p3",
            topicTag: "laplaceTransforms",
            promptText: "Find L{4\\cos(3t) - 2t}.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "4s/(s^2+9)-2/s^2",
            acceptableAnswerVariants: ["4s/(s^2+9) - 2/s^2", "\\dfrac{4s}{s^2+9}-\\dfrac{2}{s^2}"],
            stepByStepExplanation:
              "By linearity, L{4\\cos3t-2t} = 4\\,L\\{\\cos3t\\} - 2\\,L\\{t\\} = 4\\cdot\\dfrac{s}{s^2+9} - 2\\cdot\\dfrac{1}{s^2} = \\dfrac{4s}{s^2+9}-\\dfrac{2}{s^2}.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Table of Laplace Transforms",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/DE/Laplace_Table.aspx",
            resourceType: "referenceSheet",
          },
          {
            resourceTitle: "MIT OCW 18.03: Differential Equations",
            resourceUrl: "https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "inverse-laplace-transforms",
        lessonTitle: "Inverse Laplace Transforms",
        estimatedMinutes: 25,
        topicTag: "laplaceTransforms",
        learningGoals: [
          "Read the Laplace transform table backward to recover f(t) from F(s)",
          "Use partial fractions and algebraic manipulation to match F(s) to table entries",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Running the table in reverse",
            bodyText:
              "The inverse Laplace transform, written L^{-1}{F(s)}, undoes the transform: given F(s), it recovers the original f(t). In practice, this almost never means evaluating another integral — it means algebraically massaging F(s) (often with partial fractions) until each piece matches an entry in the same table used for forward transforms, then reading that entry backward.",
          },
          {
            blockType: "keyFormula",
            headingText: "Reading the table backward",
            bodyText: "The same table from the last lesson, used in the other direction.",
            mathExpression:
              "\\mathcal{L}^{-1}\\left\\{\\dfrac{1}{s}\\right\\}=1,\\ \\ \\mathcal{L}^{-1}\\left\\{\\dfrac{n!}{s^{n+1}}\\right\\}=t^n,\\ \\ \\mathcal{L}^{-1}\\left\\{\\dfrac{1}{s-a}\\right\\}=e^{at},\\ \\ \\mathcal{L}^{-1}\\left\\{\\dfrac{k}{s^2+k^2}\\right\\}=\\sin kt,\\ \\ \\mathcal{L}^{-1}\\left\\{\\dfrac{s}{s^2+k^2}\\right\\}=\\cos kt",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find L^{-1}\\left\\{\\dfrac{2s+3}{s^2+4}\\right\\}. Split the fraction into pieces that match the sine and cosine entries (which both have denominator s^2+4, here with k=2): \\dfrac{2s+3}{s^2+4} = 2\\cdot\\dfrac{s}{s^2+4} + \\dfrac{3}{2}\\cdot\\dfrac{2}{s^2+4}. The first piece matches L^{-1}\\{s/(s^2+4)\\}=\\cos(2t) directly. The second piece needed rescaling: the table entry is k/(s^2+k^2)=2/(s^2+4), so 3/(s^2+4) = \\tfrac{3}{2}\\cdot\\tfrac{2}{s^2+4}, giving \\tfrac{3}{2}\\sin(2t). The full inverse transform is f(t) = 2\\cos(2t) + \\tfrac{3}{2}\\sin(2t).",
            mathExpression: "f(t) = 2\\cos(2t) + \\tfrac{3}{2}\\sin(2t)",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Reading L^{-1}\\{3/(s^2+4)\\} as 3\\sin(2t) directly, without first rescaling to match the table's exact form k/(s^2+k^2) — the table entry needs a 2 in the numerator (matching k=2), not a 3, so a correction factor of 3/2 must be pulled out first. Skipping this rescaling step is the single most common inverse-transform error.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c4-u8-l2-p1",
            topicTag: "laplaceTransforms",
            promptText: "Find L^{-1}\\{6/s^4\\}.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "t^3",
            stepByStepExplanation:
              "The table entry is L^{-1}\\{n!/s^{n+1}\\}=t^n. With n=3, n!=6, matching 6/s^4 exactly, so L^{-1}\\{6/s^4\\}=t^3.",
            difficultyLevel: 2,
          },
          {
            problemId: "c4-u8-l2-p2",
            topicTag: "laplaceTransforms",
            promptText: "Find L^{-1}\\{3/(s+5)\\}.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "3e^{-5t}",
            acceptableAnswerVariants: ["3e^-5t", "3\\,e^{-5t}"],
            stepByStepExplanation:
              "L^{-1}\\{1/(s-a)\\}=e^{at}. Here a=-5, and the extra factor of 3 carries straight through by linearity: L^{-1}\\{3/(s+5)\\}=3e^{-5t}.",
            difficultyLevel: 2,
          },
          {
            problemId: "c4-u8-l2-p3",
            topicTag: "laplaceTransforms",
            promptText: "Find L^{-1}\\left\\{\\dfrac{2s+3}{s^2+4}\\right\\}.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "2cos(2t)+1.5sin(2t)",
            acceptableAnswerVariants: [
              "2\\cos(2t)+\\dfrac{3}{2}\\sin(2t)",
              "2cos(2t)+3/2 sin(2t)",
            ],
            stepByStepExplanation:
              "As in the worked example, splitting into cosine and sine pieces (rescaling the sine piece by 3/2 to match k=2 in the denominator) gives f(t)=2\\cos(2t)+\\tfrac{3}{2}\\sin(2t).",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Inverse Laplace Transforms",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/DE/InverseTransforms.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.03: Differential Equations",
            resourceUrl: "https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "solving-ivps-with-laplace-transforms",
        lessonTitle: "Solving IVPs with Laplace Transforms",
        estimatedMinutes: 30,
        topicTag: "laplaceTransforms",
        learningGoals: [
          "Transform derivatives using the initial-condition-aware formulas for L{f'} and L{f''}",
          "Solve a full initial value problem using the transform-solve-invert cycle",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Initial conditions are built into the method itself",
            bodyText:
              "The Laplace transform of a derivative isn't just s times the transform — it carries a correction term built from the initial condition. This means initial conditions get folded directly into the algebra from the very first step, unlike undetermined coefficients or variation of parameters, where they're applied only at the very end.",
          },
          {
            blockType: "keyFormula",
            headingText: "Transforming derivatives, and the solution cycle",
            bodyText:
              "With Y(s)=L{y(t)}: transform every term of the differential equation (using these rules and the initial conditions), solve the resulting algebraic equation for Y(s), then apply the inverse transform to recover y(t).",
            mathExpression:
              "\\mathcal{L}\\{y'\\} = sY(s) - y(0), \\qquad \\mathcal{L}\\{y''\\} = s^2Y(s) - sy(0) - y'(0)",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Solve y''+3y'+2y=0, y(0)=1, y'(0)=0. Transform every term: [s^2Y(s)-s(1)-0] + 3[sY(s)-1] + 2Y(s) = 0. Expand: s^2Y-s+3sY-3+2Y=0. Group Y terms: Y(s)(s^2+3s+2) = s+3. Solve: Y(s) = \\dfrac{s+3}{s^2+3s+2} = \\dfrac{s+3}{(s+1)(s+2)}. Partial fractions: \\dfrac{s+3}{(s+1)(s+2)} = \\dfrac{A}{s+1}+\\dfrac{B}{s+2}. At s=-1: A=2. At s=-2: B=-1. So Y(s)=\\dfrac{2}{s+1}-\\dfrac{1}{s+2}, and inverting gives y(t) = 2e^{-t} - e^{-2t} — matching exactly what the characteristic-equation method from Unit 5 would give.",
            mathExpression: "y(t) = 2e^{-t} - e^{-2t}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Transforming y' as simply sY(s), dropping the -y(0) correction term — this silently throws away the initial condition and produces the wrong algebraic equation for Y(s) from the very first step. Always write out the full L{y'}=sY(s)-y(0) and L{y''}=s^2Y(s)-sy(0)-y'(0) before substituting numbers.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c4-u8-l3-p1",
            topicTag: "laplaceTransforms",
            promptText: "Given y(0)=2 and y'(0)=-1, write L{y''} in terms of Y(s).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "s^2Y(s)-2s+1",
            acceptableAnswerVariants: ["s^2Y(s) - 2s + 1", "s^2Y-2s+1"],
            stepByStepExplanation:
              "L{y''} = s^2Y(s) - sy(0) - y'(0) = s^2Y(s) - s(2) - (-1) = s^2Y(s) - 2s + 1.",
            difficultyLevel: 2,
          },
          {
            problemId: "c4-u8-l3-p2",
            topicTag: "laplaceTransforms",
            promptText: "Solve using Laplace transforms.",
            promptMathExpression: "y' + 2y = e^{-t}, \\quad y(0) = 0",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "y=e^{-t}-e^{-2t}",
            acceptableAnswerVariants: ["y = e^{-t} - e^{-2t}"],
            stepByStepExplanation:
              "Transform: sY-0+2Y=1/(s+1), so Y(s+2)=1/(s+1), giving Y(s)=1/[(s+1)(s+2)]. Partial fractions: 1/(s+1)-1/(s+2). Inverting: y(t)=e^{-t}-e^{-2t}.",
            difficultyLevel: 4,
          },
          {
            problemId: "c4-u8-l3-p3",
            topicTag: "laplaceTransforms",
            promptText: "Solve using Laplace transforms.",
            promptMathExpression: "y'' + 5y' + 6y = 0, \\quad y(0) = 2, \\quad y'(0) = -1",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "y=5e^{-2t}-3e^{-3t}",
            acceptableAnswerVariants: ["y = 5e^{-2t} - 3e^{-3t}"],
            stepByStepExplanation:
              "Transform: [s^2Y-2s+1]+5[sY-2]+6Y=0, so Y(s^2+5s+6)=2s+9, giving Y(s)=(2s+9)/[(s+2)(s+3)]. Partial fractions: A/(s+2)+B/(s+3) with A=5, B=-3. Inverting: y(t)=5e^{-2t}-3e^{-3t}.",
            difficultyLevel: 5,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Solving IVP's with Laplace Transforms",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/DE/IVPWithLaplace.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.03: Differential Equations",
            resourceUrl: "https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "step-functions-and-impulse-functions",
        lessonTitle: "Step Functions and Impulse Functions",
        estimatedMinutes: 25,
        topicTag: "laplaceTransforms",
        learningGoals: [
          "Use the unit step function to represent a switch turning on at a given time",
          "Apply the second shifting theorem to transform a shifted, switched-on function",
          "Use the Dirac delta function to model an instantaneous impulse",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Modeling a switch, and a hammer blow",
            bodyText:
              "Real systems often get 'turned on' partway through — a heater switching on at t=2, a force applied only during a short window. The unit step function u(t-a) is 0 for t<a and 1 for t≥a, exactly modeling a switch flipped at time a. Its extreme opposite is the Dirac delta function δ(t-a), which models an idealized instantaneous impulse (a hammer strike, a sudden jolt) concentrated entirely at t=a. Both of these are exactly the kind of discontinuous, non-smooth forcing that undetermined coefficients cannot handle, but that Laplace transforms handle cleanly.",
          },
          {
            blockType: "keyFormula",
            headingText: "Transforms of step and impulse functions",
            bodyText:
              "The second shifting theorem lets you transform a function that's been both shifted in time and switched on at that same shift point.",
            mathExpression:
              "\\mathcal{L}\\{u(t-a)\\} = \\dfrac{e^{-as}}{s}, \\qquad \\mathcal{L}\\{f(t-a)u(t-a)\\} = e^{-as}F(s), \\qquad \\mathcal{L}\\{\\delta(t-a)\\} = e^{-as}",
          },
          {
            blockType: "workedExample",
            headingText: "A switch, and an impulse",
            bodyText:
              "Solve y'+y=u(t-2), y(0)=0. Transform: sY+Y = e^{-2s}/s, so Y(s)=\\dfrac{e^{-2s}}{s(s+1)}. Partial fractions on the non-shifted part: 1/[s(s+1)] = 1/s - 1/(s+1), which inverts to 1-e^{-t}. By the second shifting theorem, multiplying by e^{-2s} shifts this whole function by 2 and switches it on there: y(t) = [1-e^{-(t-2)}]u(t-2) — the system does nothing until t=2, then responds exactly like the un-shifted case from that point on. For an impulse instead: y'+2y=\\delta(t-1), y(0)=0 transforms to (s+2)Y=e^{-s}, so Y(s)=e^{-s}/(s+2), which inverts to y(t)=e^{-2(t-1)}u(t-1) — the system is silent until the instant of impact, then decays exponentially afterward.",
            mathExpression: "y(t) = \\big[1-e^{-(t-2)}\\big]u(t-2)",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Applying the second shifting theorem to L{f(t)}u(t-a) — that is, using the theorem when f itself has NOT been rewritten in terms of (t-a) — the theorem only applies to a function that's genuinely been shifted, f(t-a)u(t-a), not to a plain f(t) that just happens to be multiplied by a step function starting at a. If the function inside isn't already written in terms of (t-a), rewrite it first before transforming.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c4-u8-l4-p1",
            topicTag: "laplaceTransforms",
            promptText: "Find L{u(t-3)}.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "e^{-3s}/s",
            acceptableAnswerVariants: ["e^-3s/s", "\\dfrac{e^{-3s}}{s}"],
            stepByStepExplanation: "L{u(t-a)}=e^{-as}/s. With a=3: L{u(t-3)}=e^{-3s}/s.",
            difficultyLevel: 1,
          },
          {
            problemId: "c4-u8-l4-p2",
            topicTag: "laplaceTransforms",
            promptText: "Find L{δ(t-4)}.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "e^{-4s}",
            acceptableAnswerVariants: ["e^-4s"],
            stepByStepExplanation: "L{δ(t-a)}=e^{-as}. With a=4: L{δ(t-4)}=e^{-4s}.",
            difficultyLevel: 1,
          },
          {
            problemId: "c4-u8-l4-p3",
            topicTag: "laplaceTransforms",
            promptText: "Solve using Laplace transforms.",
            promptMathExpression: "y' + 2y = \\delta(t-1), \\quad y(0) = 0",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "y=e^{-2(t-1)}u(t-1)",
            acceptableAnswerVariants: [
              "y = e^{-2(t-1)}u(t-1)",
              "y(t)=e^{-2(t-1)}u(t-1)",
            ],
            stepByStepExplanation:
              "Transform: sY+2Y=e^{-s}, so Y(s)=e^{-s}/(s+2). Since L^{-1}\\{1/(s+2)\\}=e^{-2t}, the second shifting theorem gives y(t)=e^{-2(t-1)}u(t-1) — silent until t=1, then decaying exponentially.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Step Functions",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/DE/StepFunctions.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.03: Differential Equations",
            resourceUrl: "https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/",
            resourceType: "videoLesson",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "systems-of-differential-equations",
    unitTitle: "Systems of Differential Equations",
    unitDescription: "Converting higher-order equations to systems, solving via eigenvalues, and classifying equilibria.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Systems of Differential Equations",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc4-systems-of-differential-equations-quiz-p1",
          topicTag: "ordinaryDifferentialEquations",
          promptText:
            "Convert y'' - 3y' - 10y = 0 into a system using x1=y, x2=y'. Find x2'.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "x2'=10x1+3x2",
          acceptableAnswerVariants: ["x2' = 10x1 + 3x2", "x_2'=10x_1+3x_2"],
          stepByStepExplanation:
            "Solving y''-3y'-10y=0 for y'' gives y''=3y'+10y=3x2+10x1, so x2'=10x1+3x2.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc4-systems-of-differential-equations-quiz-p2",
          topicTag: "ordinaryDifferentialEquations",
          promptText: "Write the coefficient matrix for the system representing y'' + 2y' + 8y = 0.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "[[0,1],[-8,-2]]",
          acceptableAnswerVariants: ["(0,1;-8,-2)", "0 1 -8 -2"],
          stepByStepExplanation:
            "For y''+py'+qy=0, the coefficient matrix is [[0,1],[-q,-p]]. With p=2, q=8: [[0,1],[-8,-2]].",
          difficultyLevel: 2,
        },
        {
          problemId: "calc4-systems-of-differential-equations-quiz-p3",
          topicTag: "linearAlgebraFoundations",
          promptText: "Find the eigenvalues of the upper-triangular matrix A = [[5,3],[0,-2]].",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "5,-2",
          acceptableAnswerVariants: ["-2, 5", "λ=5,-2", "5 and -2"],
          stepByStepExplanation:
            "For any triangular matrix, the eigenvalues are exactly the entries on the main diagonal. Here that's 5 and -2.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc4-systems-of-differential-equations-quiz-p4",
          topicTag: "linearAlgebraFoundations",
          promptText:
            "For A = [[2,1],[1,2]], the eigenvalue λ=3 has eigenvector direction (1,1) (up to scaling). Verify: what is A times the vector (1,1)?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "(3,3)",
          acceptableAnswerVariants: ["3,3", "(3;3)"],
          stepByStepExplanation:
            "A(1,1) = (2·1+1·1, 1·1+2·1) = (3,3) = 3·(1,1), confirming (1,1) is an eigenvector with eigenvalue 3.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc4-systems-of-differential-equations-quiz-p5",
          topicTag: "linearAlgebraFoundations",
          promptText: "Solve the initial value problem.",
          promptMathExpression: "x' = 2x+y, \\quad y' = x+2y, \\quad x(0)=4, \\quad y(0)=2",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "x=3e^{3t}+e^{t}",
          acceptableAnswerVariants: [
            "x(t) = 3e^{3t} + e^{t}",
            "x=3e^{3t}+e^t",
          ],
          stepByStepExplanation:
            "For A=[[2,1],[1,2]], det(A-\\lambda I)=(2-\\lambda)^2-1=0 gives \\lambda=3 or \\lambda=1. For \\lambda=3: eigenvector (1,1). For \\lambda=1: (A-I)v=0 gives v1+v2=0, eigenvector (1,-1). General solution: x=c1e^{3t}+c2e^{t}, y=c1e^{3t}-c2e^{t}. Apply x(0)=4: c1+c2=4. Apply y(0)=2: c1-c2=2. Solving together: c1=3, c2=1. So x(t)=3e^{3t}+e^{t} (and y(t)=3e^{3t}-e^{t}, if asked).",
          difficultyLevel: 5,
        },
        {
          problemId: "calc4-systems-of-differential-equations-quiz-p6",
          topicTag: "ordinaryDifferentialEquations",
          promptText: "A system's coefficient matrix has trace T=-5 and determinant D=-2. Classify the equilibrium.",
          answerFormat: "multipleChoice",
          choices: ["Saddle", "Stable node", "Unstable node", "Stable spiral"],
          correctAnswer: "Saddle",
          stepByStepExplanation:
            "A negative determinant (D<0) always means the eigenvalues are real with opposite signs, which is exactly the saddle case, regardless of the trace.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc4-systems-of-differential-equations-quiz-p7",
          topicTag: "ordinaryDifferentialEquations",
          promptText: "Classify the equilibrium for A = [[2,1],[1,2]] using its trace and determinant.",
          answerFormat: "multipleChoice",
          choices: ["Unstable node", "Stable node", "Saddle", "Unstable spiral"],
          correctAnswer: "Unstable node",
          stepByStepExplanation:
            "T=\\text{tr}(A)=2+2=4. D=\\det(A)=(2)(2)-(1)(1)=3. T^2-4D=16-12=4>0 and D>0, so the eigenvalues are real with the same sign — a node. Since T=4>0 (matching its actual eigenvalues 3 and 1, both positive), it's an unstable node.",
          difficultyLevel: 3,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "converting-to-a-system-of-first-order-equations",
        lessonTitle: "Converting to a System of First-Order Equations",
        estimatedMinutes: 20,
        topicTag: "ordinaryDifferentialEquations",
        learningGoals: [
          "Convert a higher-order differential equation into an equivalent system of first-order equations",
          "Write that system in matrix form",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Trading one hard equation for several easy ones",
            bodyText:
              "Any nth-order differential equation can be rewritten as a system of n first-order equations by introducing a new variable for each derivative up to one less than the highest. This is more than a bookkeeping trick — it's exactly the form needed to bring in the matrix and eigenvalue methods from linear algebra, which is where the next lesson is headed.",
          },
          {
            blockType: "keyFormula",
            headingText: "The standard substitution",
            bodyText:
              "For a second-order equation y''+py'+qy=0, let x1=y and x2=y'. Then x1'=x2 by definition, and solving the original equation for y'' gives x2'=-qx1-px2. Writing this as a vector equation x'=Ax reveals the coefficient matrix directly from p and q.",
            mathExpression:
              "y'' + py' + qy = 0 \\implies \\begin{cases} x_1' = x_2 \\\\ x_2' = -qx_1 - px_2 \\end{cases} \\implies \\mathbf{x}' = \\begin{pmatrix}0 & 1\\\\ -q & -p\\end{pmatrix}\\mathbf{x}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Convert y''+3y'+2y=0 into a system. Let x1=y, x2=y'. Then x1'=x2 (by definition). Solve the original equation for y'': y''=-2y-3y'=-2x1-3x2, so x2'=-2x1-3x2. In matrix form: [x1;x2]' = [[0,1],[-2,-3]][x1;x2]. Notice the matrix's characteristic equation, λ^2+3λ+2=0, is exactly the same as the original equation's characteristic equation r^2+3r+2=0 — converting to a system doesn't change the underlying math, just its packaging.",
            mathExpression: "\\mathbf{x}' = \\begin{pmatrix}0 & 1\\\\ -2 & -3\\end{pmatrix}\\mathbf{x}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Mislabeling which new variable corresponds to which derivative — for instance, accidentally setting x2=y instead of x2=y'. Also common: forgetting to divide through by the leading coefficient before isolating the highest derivative, if the original equation wasn't already written with a leading coefficient of 1.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c4-u9-l1-p1",
            topicTag: "ordinaryDifferentialEquations",
            promptText:
              "Convert y'' - 5y' + 6y = 0 into a system using x1=y, x2=y'. Find x2'.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "x2'=-6x1+5x2",
            acceptableAnswerVariants: ["x2' = -6x1 + 5x2", "x_2'=-6x_1+5x_2"],
            stepByStepExplanation:
              "Solving y''-5y'+6y=0 for y'' gives y''=5y'-6y=5x2-6x1, so x2'=-6x1+5x2.",
            difficultyLevel: 2,
          },
          {
            problemId: "c4-u9-l1-p2",
            topicTag: "ordinaryDifferentialEquations",
            promptText:
              "Convert y'''+2y''-y'+3y=0 into a system using x1=y, x2=y', x3=y''. Find x3'.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "x3'=-3x1+x2-2x3",
            acceptableAnswerVariants: ["x3' = -3x1 + x2 - 2x3", "x_3'=-3x_1+x_2-2x_3"],
            stepByStepExplanation:
              "Solving y'''+2y''-y'+3y=0 for y''' gives y'''=-3y+y'-2y''=-3x1+x2-2x3, so x3'=-3x1+x2-2x3.",
            difficultyLevel: 3,
          },
          {
            problemId: "c4-u9-l1-p3",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "Write the coefficient matrix for the system representing y''+7y'+10y=0.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "[[0,1],[-10,-7]]",
            acceptableAnswerVariants: ["(0,1;-10,-7)", "0 1 -10 -7"],
            stepByStepExplanation:
              "For y''+py'+qy=0, the coefficient matrix is [[0,1],[-q,-p]]. With p=7, q=10: [[0,1],[-10,-7]].",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Systems of Differential Equations",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/DE/SystemsDE.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.03: Differential Equations",
            resourceUrl: "https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "solving-systems-using-eigenvalues-and-eigenvectors",
        lessonTitle: "Solving Systems Using Eigenvalues and Eigenvectors",
        estimatedMinutes: 30,
        topicTag: "linearAlgebraFoundations",
        learningGoals: [
          "Explain, in the context of a system of differential equations, what an eigenvalue and eigenvector represent",
          "Find the eigenvalues and eigenvectors of a 2x2 matrix",
          "Use them to write the general solution to a linear system, and solve an initial value problem",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "What an eigenvalue and eigenvector mean here (a self-contained primer)",
            bodyText:
              "This lesson uses eigenvalues and eigenvectors before Calculus V formally introduces them, so here's what they mean in this context. For a system x' = Ax, try a solution that moves along a single fixed direction, growing or shrinking but never changing direction: x(t) = v·e^{λt}, for some constant vector v and constant scalar λ. Substituting into x'=Ax gives λv e^{λt} = Av e^{λt}, and since e^{λt} is never zero, this requires Av = λv. A nonzero vector v satisfying Av=λv for some scalar λ is called an eigenvector of A, and λ is its eigenvalue. In plain language: an eigenvector is a special direction that the matrix A doesn't rotate — it only stretches or shrinks it by the factor λ. That's exactly why x=ve^{λt} works as a solution: moving along that one unchanging direction turns the whole vector system into a single, ordinary scalar growth/decay equation. (Calculus V's own eigenvalue unit covers this same idea in much more depth and for larger matrices — this is the version you need to get through this course.)",
          },
          {
            blockType: "keyFormula",
            headingText: "Finding eigenvalues, and building the general solution",
            bodyText:
              "Eigenvalues come from the characteristic equation det(A-λI)=0. For a 2x2 matrix with distinct real eigenvalues λ1, λ2 and corresponding eigenvectors v1, v2, the general solution is a linear combination of the two eigen-solutions.",
            mathExpression:
              "\\det(A-\\lambda I) = 0, \\qquad \\mathbf{x}(t) = c_1\\mathbf{v}_1e^{\\lambda_1t} + c_2\\mathbf{v}_2e^{\\lambda_2t}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Solve x'=x+y, y'=4x+y, x(0)=3, y(0)=0. Here A=[[1,1],[4,1]]. Characteristic equation: det(A-λI)=(1-λ)^2-4=0, so (1-λ)^2=4, giving 1-λ=±2, so λ=3 or λ=-1. For λ=3: (A-3I)v=0 becomes [-2,1;4,-2]v=0, so -2v1+v2=0, meaning v2=2v1 — eigenvector (1,2). For λ=-1: (A+I)v=0 becomes [2,1;4,2]v=0, so 2v1+v2=0, meaning v2=-2v1 — eigenvector (1,-2). General solution: x(t)=a(1,2)e^{3t}+b(1,-2)e^{-t}, i.e. x=ae^{3t}+be^{-t}, y=2ae^{3t}-2be^{-t}. Apply x(0)=3: a+b=3. Apply y(0)=0: 2a-2b=0, so a=b. Combined with a+b=3: a=b=1.5. The solution is x(t)=1.5e^{3t}+1.5e^{-t}, y(t)=3e^{3t}-3e^{-t}.",
            mathExpression: "x(t) = 1.5e^{3t}+1.5e^{-t}, \\qquad y(t) = 3e^{3t}-3e^{-t}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Pairing an eigenvector with the wrong eigenvalue in the final solution — each e^{λt} MUST be multiplied by the eigenvector that was found specifically for that λ, not the other one. Also common: making an arithmetic slip when solving (A-λI)v=0 (this system is always singular, on purpose — if row reduction doesn't produce a free variable, a sign or arithmetic error was made upstream in finding λ).",
          },
        ],
        practiceProblems: [
          {
            problemId: "c4-u9-l2-p1",
            topicTag: "linearAlgebraFoundations",
            promptText: "Find the eigenvalues of the upper-triangular matrix A = [[3,1],[0,2]].",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "2,3",
            acceptableAnswerVariants: ["3, 2", "λ=2,3", "2 and 3"],
            stepByStepExplanation:
              "For any triangular matrix, the eigenvalues are exactly the entries on the main diagonal. Here that's 3 and 2.",
            difficultyLevel: 2,
          },
          {
            problemId: "c4-u9-l2-p2",
            topicTag: "linearAlgebraFoundations",
            promptText:
              "For A = [[1,1],[4,1]], the eigenvalue λ=3 has eigenvector direction (1,2) (up to scaling). Verify: what is A times the vector (1,2)?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(3,6)",
            acceptableAnswerVariants: ["3,6", "(3;6)"],
            stepByStepExplanation:
              "A(1,2) = (1·1+1·2, 4·1+1·2) = (3, 6) = 3·(1,2), confirming (1,2) is indeed an eigenvector with eigenvalue 3.",
            difficultyLevel: 3,
          },
          {
            problemId: "c4-u9-l2-p3",
            topicTag: "linearAlgebraFoundations",
            promptText: "Solve the initial value problem.",
            promptMathExpression: "x' = x+y, \\quad y' = 4x+y, \\quad x(0)=1, \\quad y(0)=4",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "x=1.5e^{3t}-0.5e^{-t}",
            acceptableAnswerVariants: [
              "x(t) = 1.5e^{3t} - 0.5e^{-t}",
              "x=\\dfrac{3}{2}e^{3t}-\\dfrac{1}{2}e^{-t}",
            ],
            stepByStepExplanation:
              "Using the same eigenvalues/eigenvectors as the worked example (λ=3 with (1,2); λ=-1 with (1,-2)): x=ae^{3t}+be^{-t}, y=2ae^{3t}-2be^{-t}. x(0)=1: a+b=1. y(0)=4: 2a-2b=4, so a-b=2. Solving together: a=1.5, b=-0.5. So x(t)=1.5e^{3t}-0.5e^{-t} (find y(t) the same way if asked).",
            difficultyLevel: 5,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Real Eigenvalues",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/DE/RealEigenvalues.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.03: Differential Equations",
            resourceUrl: "https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "classifying-equilibrium-solutions",
        lessonTitle: "Classifying Equilibrium Solutions",
        estimatedMinutes: 25,
        topicTag: "ordinaryDifferentialEquations",
        learningGoals: [
          "Classify the equilibrium of a 2D linear system as a node, saddle, spiral, or center based on its eigenvalues",
          "Use the trace and determinant of the coefficient matrix as a shortcut for classification",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "What the eigenvalues say about the picture near the origin",
            bodyText:
              "For x'=Ax with A invertible, the origin is the only equilibrium point (the only place where x'=0). The eigenvalues of A completely determine what the solution curves look like near that equilibrium, in the phase plane, without needing to solve the system explicitly.",
          },
          {
            blockType: "keyFormula",
            headingText: "The classification table",
            bodyText:
              "Real eigenvalues, same sign: a node (stable/attracting if both negative, unstable/repelling if both positive). Real eigenvalues, opposite signs: a saddle (always unstable — some directions attract, others repel). Complex eigenvalues with nonzero real part: a spiral (stable if the real part is negative, unstable if positive). Purely imaginary eigenvalues (zero real part): a center, where solutions trace closed elliptical orbits around the origin forever, neither approaching nor leaving it. As a shortcut, using the trace T and determinant D of A: D<0 always gives a saddle; D>0 with T^2>4D gives a node; D>0 with T^2<4D gives a spiral (or a center exactly when T=0).",
            mathExpression: "T = \\text{tr}(A) = \\lambda_1+\\lambda_2, \\qquad D = \\det(A) = \\lambda_1\\lambda_2",
          },
          {
            blockType: "workedExample",
            headingText: "Classifying two systems",
            bodyText:
              "For A=[[1,1],[4,1]] (from the previous lesson): T=2, D=(1)(1)-(1)(4)=1-4=-3. Since D<0, this is a saddle — matching its real eigenvalues 3 and -1, which have opposite signs. For A=[[0,1],[-1,0]]: T=0, D=(0)(0)-(1)(-1)=1. Since D>0 and T^2-4D=0-4=-4<0 with T=0 exactly, this is a center — matching its eigenvalues ±i, which are purely imaginary.",
            mathExpression: "T=2, D=-3 \\implies \\text{saddle} \\qquad T=0, D=1 \\implies \\text{center}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Calling any system with complex eigenvalues a 'center' — a center only happens when the real part of the eigenvalues is EXACTLY zero. If there's any nonzero real part at all (positive or negative), the correct classification is a spiral, not a center, and the sign of that real part determines whether it spirals inward (stable) or outward (unstable).",
          },
        ],
        practiceProblems: [
          {
            problemId: "c4-u9-l3-p1",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "A system's coefficient matrix has trace T=-4 and determinant D=13. Classify the equilibrium.",
            answerFormat: "multipleChoice",
            choices: ["Stable spiral", "Unstable spiral", "Stable node", "Saddle"],
            correctAnswer: "Stable spiral",
            stepByStepExplanation:
              "D=13>0 and T^2-4D=16-52=-36<0, so the eigenvalues are complex with nonzero real part — a spiral. Since T=-4<0 (the real part is negative), it's a stable (inward-spiraling) spiral.",
            difficultyLevel: 3,
          },
          {
            problemId: "c4-u9-l3-p2",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "A system has real eigenvalues -1 and -4. Classify the equilibrium.",
            answerFormat: "multipleChoice",
            choices: ["Stable node", "Unstable node", "Saddle", "Center"],
            correctAnswer: "Stable node",
            stepByStepExplanation:
              "Both eigenvalues are real and negative (same sign), so every solution decays toward the origin from every direction — a stable node.",
            difficultyLevel: 2,
          },
          {
            problemId: "c4-u9-l3-p3",
            topicTag: "ordinaryDifferentialEquations",
            promptText: "Classify the equilibrium for A = [[-1,-1],[1,-1]].",
            answerFormat: "multipleChoice",
            choices: ["Stable spiral", "Unstable spiral", "Center", "Saddle"],
            correctAnswer: "Stable spiral",
            stepByStepExplanation:
              "T=\\text{tr}(A)=-1-1=-2. D=\\det(A)=(-1)(-1)-(-1)(1)=1+1=2. T^2-4D=4-8=-4<0, so the eigenvalues are complex (they're -1±i). Since T=-2<0, this is a stable spiral.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Phase Plane",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/DE/PhasePlane.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.03: Differential Equations",
            resourceUrl: "https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/",
            resourceType: "videoLesson",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "series-solutions-and-numerical-methods",
    unitTitle: "Series Solutions and an Introduction to Numerical Methods",
    unitDescription: "Power series solutions for equations with no closed form, plus a first taste of numerical approximation.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Series Solutions and an Introduction to Numerical Methods",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc4-series-solutions-and-numerical-methods-quiz-p1",
          topicTag: "seriesSolutionsAndNumericalMethods",
          promptText:
            "Using the recursion a_{n+2} = -a_n/[(n+1)(n+2)] with a0=0, a1=1, find a3.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "-1/6",
          acceptableAnswerVariants: ["-0.1667", "a3=-1/6"],
          stepByStepExplanation: "With n=1: a3 = -a1/[(2)(3)] = -1/6.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc4-series-solutions-and-numerical-methods-quiz-p2",
          topicTag: "seriesSolutionsAndNumericalMethods",
          promptText: "Continuing from a3=-1/6, use the same recursion to find a5.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "1/120",
          stepByStepExplanation: "With n=3: a5 = -a3/[(4)(5)] = -(-1/6)/20 = 1/120.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc4-series-solutions-and-numerical-methods-quiz-p3",
          topicTag: "seriesSolutionsAndNumericalMethods",
          promptText: "Use one step of Euler's Method with h=0.1 to approximate y(0.1) for y'=2x-y, y(0)=1.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "0.9",
          stepByStepExplanation:
            "y1 = y0 + h\\,f(x0,y0) = 1 + 0.1(2(0)-1) = 1 + 0.1(-1) = 0.9.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc4-series-solutions-and-numerical-methods-quiz-p4",
          topicTag: "seriesSolutionsAndNumericalMethods",
          promptText: "Continuing the previous problem, use a second Euler step (still h=0.1) to approximate y(0.2).",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "0.83",
          stepByStepExplanation:
            "y2 = y1 + h\\,f(x1,y1) = 0.9 + 0.1(2(0.1)-0.9) = 0.9 + 0.1(0.2-0.9) = 0.9 + 0.1(-0.7) = 0.9-0.07 = 0.83.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc4-series-solutions-and-numerical-methods-quiz-p5",
          topicTag: "seriesSolutionsAndNumericalMethods",
          promptText: "What is the main idea behind Improved Euler (Heun's Method), compared to plain Euler's Method?",
          answerFormat: "multipleChoice",
          choices: [
            "It averages the slope at the start and an estimated slope at the end of the interval",
            "It uses a much larger step size for the same accuracy",
            "It only works for linear differential equations",
            "It solves the equation exactly using algebra instead of approximation",
          ],
          correctAnswer: "It averages the slope at the start and an estimated slope at the end of the interval",
          stepByStepExplanation:
            "Improved Euler's core idea is averaging two slope estimates (start and predicted end) instead of committing to just the starting slope for the whole step, which corrects for curvature in the true solution.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc4-series-solutions-and-numerical-methods-quiz-p6",
          topicTag: "seriesSolutionsAndNumericalMethods",
          promptText: "If the step size h in Euler's Method is cut in half, what generally happens to the size of the approximation error?",
          answerFormat: "multipleChoice",
          choices: [
            "It roughly halves as well",
            "It roughly quadruples",
            "It stays exactly the same",
            "It becomes exactly zero",
          ],
          correctAnswer: "It roughly halves as well",
          stepByStepExplanation:
            "Euler's Method is a first-order method, meaning its error is roughly proportional to the step size h itself. Halving h roughly halves the error (at the cost of needing twice as many steps to cover the same interval).",
          difficultyLevel: 2,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "series-solutions-to-differential-equations",
        lessonTitle: "Series Solutions to Differential Equations",
        estimatedMinutes: 30,
        topicTag: "seriesSolutionsAndNumericalMethods",
        learningGoals: [
          "Assume a power series solution y = Σ a_n x^n and substitute it into a differential equation",
          "Find the recursion relation between coefficients and use it to generate a series solution",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Calculus II's power series, doing real work",
            bodyText:
              "Not every differential equation has a solution built from elementary functions like e^x, sin x, or polynomials. For these, assume the solution is a power series, y = Σ_{n=0}^{∞} a_n x^n (the same kind of object as the Taylor series from Calculus II), substitute it and its derivatives into the equation, and match coefficients of matching powers of x on both sides. This produces a recursion relation — a formula for each coefficient in terms of earlier ones — which generates the series term by term.",
          },
          {
            blockType: "keyFormula",
            headingText: "The substitution",
            bodyText:
              "Differentiating the assumed series term by term: y' = Σ n a_n x^{n-1}, y'' = Σ n(n-1) a_n x^{n-2}. Substituting these into the differential equation and re-indexing each sum so every term has the same power of x is what produces the recursion relation.",
            mathExpression: "y = \\sum_{n=0}^{\\infty} a_nx^n, \\quad y' = \\sum_{n=1}^{\\infty} na_nx^{n-1}, \\quad y'' = \\sum_{n=2}^{\\infty} n(n-1)a_nx^{n-2}",
          },
          {
            blockType: "workedExample",
            headingText: "A series solution you already know the answer to",
            bodyText:
              "Solve y''+y=0 by series. Substituting y=Σa_nx^n gives Σn(n-1)a_nx^{n-2} + Σa_nx^n = 0. Re-indexing the first sum (let k=n-2) so both sums use the same power x^k: Σ(k+2)(k+1)a_{k+2}x^k + Σa_kx^k=0, so for every k, (k+2)(k+1)a_{k+2}+a_k=0, giving the recursion a_{k+2} = -a_k/[(k+1)(k+2)]. Starting from a0 (arbitrary) and a1 (arbitrary): a2=-a0/2, a4=-a2/12=a0/24, matching cos(x)'s Taylor series exactly when a0=1, a1=0; and a3=-a1/6, a5=-a3/20=a1/120, matching sin(x)'s Taylor series when a1=1, a0=0. This confirms directly what you already knew from Calculus II — the series solutions to y''+y=0 ARE cos(x) and sin(x).",
            mathExpression: "a_{k+2} = \\dfrac{-a_k}{(k+1)(k+2)} \\implies y = a_0\\cos(x) + a_1\\sin(x)",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Forgetting to re-index one of the sums before combining them — y and y'' start their sums at different powers of x (n=0 versus n=2, before shifting), and adding them term-by-term is only valid once every sum has been shifted to line up on the same starting power. Skipping this step is the single most common algebra slip in this technique, and it silently produces a wrong recursion relation.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c4-u10-l1-p1",
            topicTag: "seriesSolutionsAndNumericalMethods",
            promptText:
              "Using the recursion a_{n+2} = -a_n/[(n+1)(n+2)] with a0=1, a1=0, find a2.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "-1/2",
            acceptableAnswerVariants: ["-0.5", "a2=-1/2"],
            stepByStepExplanation: "With n=0: a2 = -a0/[(1)(2)] = -1/2.",
            difficultyLevel: 2,
          },
          {
            problemId: "c4-u10-l1-p2",
            topicTag: "seriesSolutionsAndNumericalMethods",
            promptText: "Continuing from a2=-1/2, use the same recursion to find a4.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "1/24",
            stepByStepExplanation: "With n=2: a4 = -a2/[(3)(4)] = -(-1/2)/12 = 1/24.",
            difficultyLevel: 3,
          },
          {
            problemId: "c4-u10-l1-p3",
            topicTag: "seriesSolutionsAndNumericalMethods",
            promptText:
              "For y''+y=0 with a0=0 and a1=1, the series solution built from the odd-indexed terms (x - x^3/6 + x^5/120 - ...) matches which known function?",
            answerFormat: "multipleChoice",
            choices: ["sin(x)", "cos(x)", "e^x", "ln(x)"],
            correctAnswer: "sin(x)",
            stepByStepExplanation:
              "The Taylor series for sin(x) is exactly x - x^3/3! + x^5/5! - ... = x - x^3/6 + x^5/120 - ..., which is the series generated here when a0=0 (no constant term, since sin(0)=0) and a1=1 (matching sin'(0)=cos(0)=1).",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Series Solutions",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/DE/SeriesSolutions.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.03: Differential Equations",
            resourceUrl: "https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "eulers-method",
        lessonTitle: "Euler's Method",
        estimatedMinutes: 25,
        topicTag: "seriesSolutionsAndNumericalMethods",
        learningGoals: [
          "Explain the geometric idea behind Euler's Method using the slope field concept from Unit 1",
          "Apply Euler's Method by hand to approximate a solution over several steps",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Following the slope field, one step at a time",
            bodyText:
              "Some differential equations have no closed-form solution at all, not even a series one that's easy to work with — for these, a computer approximates the solution numerically. Euler's Method is the simplest such approach, and it's really just the slope-field idea from Unit 1 turned into an algorithm: starting from a known point, take a small step in the direction the slope field says to go, then repeat from the new point.",
          },
          {
            blockType: "keyFormula",
            headingText: "The Euler's Method update rule",
            bodyText:
              "Starting from (x0, y0) with step size h, each step uses the current slope f(x_n, y_n) to predict the next y-value.",
            mathExpression: "x_{n+1} = x_n + h, \\qquad y_{n+1} = y_n + h\\,f(x_n, y_n)",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example, with a look at the error",
            bodyText:
              "Approximate y(0.2) for y'=x+y, y(0)=1, using h=0.1. Step 1: y1 = y0+h\\,f(x0,y0) = 1+0.1(0+1) = 1.1, at x1=0.1. Step 2: y2 = y1+h\\,f(x1,y1) = 1.1+0.1(0.1+1.1) = 1.1+0.12 = 1.22, at x2=0.2. So Euler's Method gives y(0.2)≈1.22. The exact solution to this equation is y=2e^x-x-1, and y(0.2)=2e^{0.2}-1.2≈1.2428 — so Euler's Method's approximation is off by about 0.023 after just two steps, which is normal: the error accumulates a little at every step.",
            mathExpression: "y(0.2) \\approx 1.22 \\quad (\\text{exact} \\approx 1.2428)",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Evaluating the slope f at the NEW point (x_{n+1}, y_{n+1}) instead of the current point (x_n, y_n) — that's a different method (a step toward what's called backward Euler), and plain Euler's Method always uses the slope at the point you're stepping FROM, not the one you're stepping TO. Also common: forgetting to update x_n by h at every step, and reusing the same x-value throughout.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c4-u10-l2-p1",
            topicTag: "seriesSolutionsAndNumericalMethods",
            promptText:
              "Use one step of Euler's Method with h=0.2 to approximate y(0.2) for y'=x+2y, y(0)=1.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "1.4",
            stepByStepExplanation:
              "y1 = y0 + h\\,f(x0,y0) = 1 + 0.2(0+2(1)) = 1 + 0.2(2) = 1.4.",
            difficultyLevel: 2,
          },
          {
            problemId: "c4-u10-l2-p2",
            topicTag: "seriesSolutionsAndNumericalMethods",
            promptText:
              "Continuing the previous problem, use a second Euler step (still h=0.2) to approximate y(0.4).",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "2",
            stepByStepExplanation:
              "y2 = y1 + h\\,f(x1,y1) = 1.4 + 0.2(0.2 + 2(1.4)) = 1.4 + 0.2(0.2+2.8) = 1.4 + 0.2(3) = 1.4+0.6 = 2.0.",
            difficultyLevel: 3,
          },
          {
            problemId: "c4-u10-l2-p3",
            topicTag: "seriesSolutionsAndNumericalMethods",
            promptText: "If the step size h in Euler's Method is cut in half, what generally happens to the size of the approximation error?",
            answerFormat: "multipleChoice",
            choices: [
              "It roughly halves as well",
              "It roughly quadruples",
              "It stays exactly the same",
              "It becomes exactly zero",
            ],
            correctAnswer: "It roughly halves as well",
            stepByStepExplanation:
              "Euler's Method is a first-order method, meaning its error is roughly proportional to the step size h itself. Halving h roughly halves the error (at the cost of needing twice as many steps to cover the same interval).",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "MIT OCW 18.03: Differential Equations",
            resourceUrl: "https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/",
            resourceType: "videoLesson",
          },
          {
            resourceTitle: "Khan Academy: Differential equations",
            resourceUrl: "https://www.khanacademy.org/math/differential-equations",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "a-conceptual-look-at-improved-numerical-methods",
        lessonTitle: "A Conceptual Look at Improved Numerical Methods",
        estimatedMinutes: 15,
        topicTag: "seriesSolutionsAndNumericalMethods",
        learningGoals: [
          "Explain why Euler's Method can drift on curving solutions",
          "Describe, at a conceptual level, how Improved Euler (Heun's Method) and Runge-Kutta methods correct for this",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "The problem with using only the starting slope",
            bodyText:
              "Euler's Method's core weakness is that it commits to the slope at the very START of each step and uses that same slope for the entire step, even though the true solution's slope is changing continuously along the way. On a curving solution, this means each step drifts slightly off the true curve, and those small errors accumulate over many steps.",
          },
          {
            blockType: "keyFormula",
            headingText: "Improved Euler (Heun's Method): average the beginning and end slopes",
            bodyText:
              "Improved Euler first takes a trial Euler step to estimate where the interval ends up (the 'predictor'), then averages the slope there with the slope at the start, and uses THAT average slope for the real step (the 'corrector'). This one extra evaluation per step dramatically reduces the drift.",
            mathExpression:
              "y^*_{n+1} = y_n + h\\,f(x_n,y_n), \\qquad y_{n+1} = y_n + \\dfrac{h}{2}\\Big[f(x_n,y_n) + f(x_{n+1}, y^*_{n+1})\\Big]",
          },
          {
            blockType: "workedExample",
            headingText: "Redoing one step, and comparing accuracy",
            bodyText:
              "For y'=x+y, y(0)=1, h=0.1: the predictor step gives y^*_1 = 1+0.1\\,f(0,1) = 1+0.1(1) = 1.1. The corrector then averages the slope at (0,1), which is 1, with the slope at the predicted point (0.1, 1.1), which is 0.1+1.1=1.2: y1 = 1+0.05(1+1.2) = 1+0.05(2.2) = 1+0.11 = 1.11. The exact value is y(0.1)=2e^{0.1}-0.1-1≈1.11034. Plain Euler's estimate was 1.1 (error ≈0.0103); Improved Euler's estimate is 1.11 (error ≈0.0003) — roughly 30 times more accurate, using only one extra function evaluation. Runge-Kutta methods (commonly RK4) push this idea further, averaging four carefully chosen slope estimates per step, and are the default choice in most real numerical software because they achieve high accuracy without needing an impractically tiny step size.",
            mathExpression: "\\text{Improved Euler error} \\approx 0.0003 \\quad \\text{vs.} \\quad \\text{plain Euler error} \\approx 0.0103",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Stopping after computing the predictor step and treating it as the final answer — the predictor is only a rough estimate used to find the slope at the far end of the interval; the actual Improved Euler answer comes from the CORRECTOR step, which averages that estimated end-slope with the starting slope. Skipping the corrector step defeats the entire purpose of the method and just leaves you back at plain Euler's Method.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c4-u10-l3-p1",
            topicTag: "seriesSolutionsAndNumericalMethods",
            promptText: "What is the main idea behind Improved Euler (Heun's Method), compared to plain Euler's Method?",
            answerFormat: "multipleChoice",
            choices: [
              "It averages the slope at the start and an estimated slope at the end of the interval",
              "It uses a much larger step size for the same accuracy",
              "It only works for linear differential equations",
              "It solves the equation exactly using algebra instead of approximation",
            ],
            correctAnswer: "It averages the slope at the start and an estimated slope at the end of the interval",
            stepByStepExplanation:
              "Improved Euler's core idea is averaging two slope estimates (start and predicted end) instead of committing to just the starting slope for the whole step, which corrects for curvature in the true solution.",
            difficultyLevel: 1,
          },
          {
            problemId: "c4-u10-l3-p2",
            topicTag: "seriesSolutionsAndNumericalMethods",
            promptText:
              "In the worked example, the predictor step gave y^*_1=1.1 at x1=0.1 for y'=x+y. What is f(0.1, 1.1)?",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "1.2",
            stepByStepExplanation: "f(x,y)=x+y, so f(0.1, 1.1) = 0.1+1.1 = 1.2.",
            difficultyLevel: 2,
          },
          {
            problemId: "c4-u10-l3-p3",
            topicTag: "seriesSolutionsAndNumericalMethods",
            promptText: "Why is a Runge-Kutta method (like RK4) generally preferred over Euler's Method in real numerical software?",
            answerFormat: "multipleChoice",
            choices: [
              "It achieves much higher accuracy without needing an impractically tiny step size",
              "It is simpler to program than Euler's Method",
              "It never requires knowing the initial condition",
              "It works only for equations with no closed-form solution",
            ],
            correctAnswer: "It achieves much higher accuracy without needing an impractically tiny step size",
            stepByStepExplanation:
              "RK4 combines four slope estimates per step to get a much higher order of accuracy than Euler's Method's single estimate, meaning it reaches a target accuracy using far fewer, larger steps.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "MIT OCW 18.03: Differential Equations",
            resourceUrl: "https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/",
            resourceType: "videoLesson",
          },
          {
            resourceTitle: "Khan Academy: Differential equations",
            resourceUrl: "https://www.khanacademy.org/math/differential-equations",
            resourceType: "interactivePractice",
          },
        ],
      },
    ],
  },
];

export const calculus4CourseExam: CourseExam = {
  examTitle: "Calculus IV: Ordinary Differential Equations — Course Exam",
  passingScorePercent: 70,
  questions: [
    // Unit 1: Introduction to Differential Equations and Modeling
    {
      problemId: "calc4-exam-p1",
      topicTag: "ordinaryDifferentialEquations",
      promptText: "Classify the equation by order and linearity.",
      promptMathExpression: "y'' + xy' - y^3 = 0",
      answerFormat: "multipleChoice",
      choices: ["Order 2, nonlinear", "Order 2, linear", "Order 3, nonlinear", "Order 1, nonlinear"],
      correctAnswer: "Order 2, nonlinear",
      stepByStepExplanation:
        "The highest derivative present is y'', so the order is 2. The term y^3 raises the unknown function to the third power, which breaks linearity, so the equation is nonlinear.",
      difficultyLevel: 1,
    },
    {
      problemId: "calc4-exam-p2",
      topicTag: "ordinaryDifferentialEquations",
      promptText:
        "For the autonomous equation dy/dx = y(5 - y)(y + 2), find all the equilibrium solutions (list all values of y, separated by commas).",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "-2,0,5",
      acceptableAnswerVariants: ["0, 5, -2", "-2, 0, 5", "y=-2,0,5"],
      stepByStepExplanation:
        "Set y(5-y)(y+2) = 0. This happens when y = 0, y = 5, or y = -2, so those are the three equilibrium solutions (the horizontal lines where the slope field is flat everywhere).",
      difficultyLevel: 2,
    },
    // Unit 2: First-Order Equations: Separable and Linear
    {
      problemId: "calc4-exam-p3",
      topicTag: "ordinaryDifferentialEquations",
      promptText: "Find the general solution (assume x > -1).",
      promptMathExpression: "\\dfrac{dy}{dx} = \\dfrac{y}{x+1}",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "y=C(x+1)",
      acceptableAnswerVariants: ["y = C(x+1)"],
      stepByStepExplanation:
        "Separate: dy/y = dx/(x+1). Integrate: ln|y| = ln|x+1| + C1. Exponentiate: y = C(x+1) for a constant C.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc4-exam-p4",
      topicTag: "ordinaryDifferentialEquations",
      promptText: "Find the general solution.",
      promptMathExpression: "y' + 2y = 10",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "y=5+Ce^{-2x}",
      acceptableAnswerVariants: ["y = 5 + Ce^{-2x}"],
      stepByStepExplanation:
        "\\mu = e^{2x}. (e^{2x}y)' = 10e^{2x}. Integrate: e^{2x}y = 5e^{2x} + C. Divide by e^{2x}: y = 5 + Ce^{-2x}.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc4-exam-p5",
      topicTag: "ordinaryDifferentialEquations",
      promptText: "Solve the initial value problem.",
      promptMathExpression: "y' - y = e^{x}, \\quad y(0) = 2",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "y=(x+2)e^{x}",
      acceptableAnswerVariants: ["y = (x+2)e^{x}", "y=xe^x+2e^x"],
      stepByStepExplanation:
        "\\mu = e^{-x}. (e^{-x}y)' = e^{-x}e^{x} = 1. Integrate: e^{-x}y = x + C, so y = xe^{x} + Ce^{x}. Apply y(0) = 2: C = 2. The particular solution is y = (x+2)e^{x}. Check: y' = e^x + (x+2)e^x = (x+3)e^x, and y'-y = (x+3)e^x-(x+2)e^x = e^x, matching.",
      difficultyLevel: 4,
    },
    {
      problemId: "calc4-exam-p6",
      topicTag: "ordinaryDifferentialEquations",
      promptText: "Solve the initial value problem for y as an explicit function of x.",
      promptMathExpression: "\\dfrac{dy}{dx} = y^2\\cos(x), \\quad y(0) = 1",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "y=1/(1-sin(x))",
      acceptableAnswerVariants: ["y = 1/(1-\\sin x)", "y=\\dfrac{1}{1-\\sin x}"],
      stepByStepExplanation:
        "Separate: dy/y^2 = \\cos x\\,dx. Integrate: -1/y = \\sin x + C. Apply y(0)=1: -1 = 0 + C, so C=-1. Then -1/y = \\sin x - 1, so 1/y = 1 - \\sin x, giving y = 1/(1-\\sin x).",
      difficultyLevel: 4,
    },
    // Unit 3: Exact Equations and Integrating Factors
    {
      problemId: "calc4-exam-p7",
      topicTag: "ordinaryDifferentialEquations",
      promptText: "Is the equation (4x^3y^2 + 3)dx + (2x^4y - 1)dy = 0 exact?",
      answerFormat: "multipleChoice",
      choices: ["Yes", "No"],
      correctAnswer: "Yes",
      stepByStepExplanation:
        "M = 4x^3y^2+3, N = 2x^4y-1. ∂M/∂y = 8x^3y and ∂N/∂x = 8x^3y — equal, so the equation is exact.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc4-exam-p8",
      topicTag: "ordinaryDifferentialEquations",
      promptText: "Find the implicit general solution to (4x^3y^2 + 3)dx + (2x^4y - 1)dy = 0.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "x^4y^2+3x-y=C",
      acceptableAnswerVariants: ["x^4y^2 + 3x - y = C"],
      stepByStepExplanation:
        "Integrate M with respect to x: F = x^4y^2 + 3x + g(y). Differentiate with respect to y: F_y = 2x^4y + g'(y), which must equal N = 2x^4y-1, so g'(y)=-1, giving g(y)=-y. The solution is x^4y^2+3x-y=C.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc4-exam-p9",
      topicTag: "ordinaryDifferentialEquations",
      promptText: "For a non-exact equation, M_y - N_x = 6 and N = 3x. Find the integrating factor μ(x).",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "x^2",
      stepByStepExplanation:
        "(M_y - N_x)/N = 6/(3x) = 2/x, which depends only on x. So μ(x) = e^{\\int (2/x)dx} = e^{2\\ln x} = x^2.",
      difficultyLevel: 3,
    },
    // Unit 4: Applications of First-Order Equations
    {
      problemId: "calc4-exam-p10",
      topicTag: "ordinaryDifferentialEquations",
      promptText:
        "A population continuously grows according to P(t) = 2000e^{0.03t}. Find P(10), rounded to two decimal places.",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "2699.72",
      acceptableAnswerVariants: ["2699.7", "2700"],
      stepByStepExplanation: "P(10) = 2000e^{0.3} \\approx 2000(1.34986) \\approx 2699.72.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc4-exam-p11",
      topicTag: "ordinaryDifferentialEquations",
      promptText:
        "A 300-gallon tank starts with 25 lb of dissolved salt. Brine containing 2 lb/gal enters at 6 gal/min, and the well-mixed solution drains at 6 gal/min. Write the differential equation for Q(t).",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "dQ/dt=12-Q/50",
      acceptableAnswerVariants: ["dQ/dt = 12 - Q/50", "Q'=12-Q/50"],
      stepByStepExplanation:
        "Rate in = 2 lb/gal · 6 gal/min = 12 lb/min. Rate out = 6·Q/300 = Q/50 (volume stays fixed at 300 gal). So dQ/dt = 12 - Q/50.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc4-exam-p12",
      topicTag: "ordinaryDifferentialEquations",
      promptText:
        "An object at 150°F is placed in a 75°F room and cools to 110°F after 5 minutes. Using T(t) = 75 + 75e^{-kt}, find k.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "ln(15/7)/5",
      acceptableAnswerVariants: ["0.1524", "k=ln(15/7)/5"],
      stepByStepExplanation:
        "At t=5, T=110: 75e^{-5k} = 35, so e^{-5k} = 7/15, giving k = \\ln(15/7)/5 \\approx 0.1524.",
      difficultyLevel: 3,
    },
    // Unit 5: Second-Order Linear Homogeneous Equations
    {
      problemId: "calc4-exam-p13",
      topicTag: "ordinaryDifferentialEquations",
      promptText: "Find the root(s) of the characteristic equation for 4y'' + 4y' + y = 0.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "r=-1/2",
      acceptableAnswerVariants: ["r = -1/2", "-1/2", "-0.5"],
      stepByStepExplanation:
        "4r^2+4r+1=0 factors as (2r+1)^2=0, giving a repeated root r=-1/2.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc4-exam-p14",
      topicTag: "ordinaryDifferentialEquations",
      promptText: "Find the general solution.",
      promptMathExpression: "y'' + 9y = 0",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "y=C1cos(3x)+C2sin(3x)",
      acceptableAnswerVariants: ["y = C1\\cos(3x) + C2\\sin(3x)"],
      stepByStepExplanation:
        "r^2+9=0 gives r=±3i, purely imaginary with α=0, β=3. The general solution is y = C1\\cos(3x)+C2\\sin(3x).",
      difficultyLevel: 2,
    },
    {
      problemId: "calc4-exam-p15",
      topicTag: "ordinaryDifferentialEquations",
      promptText: "Solve the initial value problem.",
      promptMathExpression: "y'' + y' - 6y = 0, \\quad y(0) = 2, \\quad y'(0) = -1",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "y=e^{-3x}+e^{2x}",
      acceptableAnswerVariants: ["y = e^{-3x} + e^{2x}"],
      stepByStepExplanation:
        "r^2+r-6=(r+3)(r-2)=0 gives roots -3, 2, so y=C1e^{-3x}+C2e^{2x}. Applying y(0)=2 and y'(0)=-1 gives C1=1, C2=1. So y=e^{-3x}+e^{2x}.",
      difficultyLevel: 4,
    },
    {
      problemId: "calc4-exam-p16",
      topicTag: "ordinaryDifferentialEquations",
      promptText: "Solve the initial value problem.",
      promptMathExpression: "y'' + 2y' + 5y = 0, \\quad y(0) = 2, \\quad y'(0) = 0",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "y=e^{-x}(2cos(2x)+sin(2x))",
      acceptableAnswerVariants: ["y = e^{-x}(2\\cos(2x)+\\sin(2x))"],
      stepByStepExplanation:
        "r^2+2r+5=0 gives r=-1±2i. y=e^{-x}(C1\\cos2x+C2\\sin2x). Applying y(0)=2 gives C1=2; applying y'(0)=0 gives -C1+2C2=0, so C2=1. So y=e^{-x}(2\\cos2x+\\sin2x).",
      difficultyLevel: 4,
    },
    // Unit 6: Second-Order Linear Non-Homogeneous Equations
    {
      problemId: "calc4-exam-p17",
      topicTag: "ordinaryDifferentialEquations",
      promptText: "Find the general solution.",
      promptMathExpression: "y'' - 5y' + 6y = 2x - 1",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "y=C1e^{2x}+C2e^{3x}+x/3+1/9",
      acceptableAnswerVariants: [
        "y = C1e^{2x} + C2e^{3x} + (1/3)x + 1/9",
        "y=C_1e^{2x}+C_2e^{3x}+\\dfrac{1}{3}x+\\dfrac{1}{9}",
      ],
      stepByStepExplanation:
        "y_h=C1e^{2x}+C2e^{3x} (roots 2, 3). Guess y_p=Ax+B (no overlap). Substituting gives 6Ax+(6B-5A)=2x-1, so A=1/3 and B=1/9. Full solution: y=C1e^{2x}+C2e^{3x}+\\tfrac{1}{3}x+\\tfrac{1}{9}.",
      difficultyLevel: 4,
    },
    {
      problemId: "calc4-exam-p18",
      topicTag: "ordinaryDifferentialEquations",
      promptText: "Solve y'' - 2y' - 3y = 4e^{-x} for the general solution.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "y=C1e^{3x}+C2e^{-x}-xe^{-x}",
      acceptableAnswerVariants: ["y = C1e^{3x} + C2e^{-x} - xe^{-x}"],
      stepByStepExplanation:
        "y_h=C1e^{3x}+C2e^{-x} (roots 3, -1). Since e^{-x} overlaps with y_h, guess y_p=Axe^{-x}. Substituting gives -4A=4, so A=-1. Full solution: y=C1e^{3x}+C2e^{-x}-xe^{-x}.",
      difficultyLevel: 5,
    },
    {
      problemId: "calc4-exam-p19",
      topicTag: "ordinaryDifferentialEquations",
      promptText: "For y1 = e^{-x} and y2 = e^{4x}, find the Wronskian W = y1y2' - y2y1'.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "5e^{3x}",
      acceptableAnswerVariants: ["5e^{3x}", "W=5e^{3x}"],
      stepByStepExplanation: "W = e^{-x}(4e^{4x}) - e^{4x}(-e^{-x}) = 4e^{3x}+e^{3x} = 5e^{3x}.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc4-exam-p20",
      topicTag: "ordinaryDifferentialEquations",
      promptText: "Which method is required for y'' + 4y = \\csc(2x)?",
      answerFormat: "multipleChoice",
      choices: ["Variation of parameters", "Undetermined coefficients", "Either, no preference", "Neither method applies"],
      correctAnswer: "Variation of parameters",
      stepByStepExplanation:
        "\\csc(2x) has no entry in undetermined coefficients' guess table, so variation of parameters (which works for any continuous forcing function) is required.",
      difficultyLevel: 2,
    },
    // Unit 7: Applications of Second-Order Equations
    {
      problemId: "calc4-exam-p21",
      topicTag: "ordinaryDifferentialEquations",
      promptText: "A mass of 5 kg is on a spring with k = 45 N/m. Find the period of oscillation T.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "2π/3",
      acceptableAnswerVariants: ["2pi/3", "T=2π/3"],
      stepByStepExplanation: "ω0 = √(45/5) = 3. T = 2π/ω0 = 2π/3.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc4-exam-p22",
      topicTag: "ordinaryDifferentialEquations",
      promptText: "For a spring-mass system with m = 2, c = 8, k = 8, classify the damping.",
      answerFormat: "multipleChoice",
      choices: ["Critically damped", "Overdamped", "Underdamped", "Undamped"],
      correctAnswer: "Critically damped",
      stepByStepExplanation: "c^2-4mk = 64-64 = 0, a repeated root — critically damped.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc4-exam-p23",
      topicTag: "ordinaryDifferentialEquations",
      promptText: "Solve the initial value problem for the charge in an RLC circuit.",
      promptMathExpression: "q'' + 6q' + 25q = 0, \\quad q(0) = 0, \\quad q'(0) = 5",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "q=1.25e^{-3t}sin(4t)",
      acceptableAnswerVariants: ["q = 1.25e^{-3t}\\sin(4t)", "q(t)=\\dfrac{5}{4}e^{-3t}\\sin(4t)"],
      stepByStepExplanation:
        "r^2+6r+25=0 gives r=-3±4i. q=e^{-3t}(C1\\cos4t+C2\\sin4t). q(0)=0 gives C1=0; q'(0)=5 gives 4C2=5, so C2=1.25. So q=1.25e^{-3t}\\sin(4t).",
      difficultyLevel: 4,
    },
    // Unit 8: The Laplace Transform and Its Applications
    {
      problemId: "calc4-exam-p24",
      topicTag: "laplaceTransforms",
      promptText: "Find L{5t^4}.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "120/s^5",
      acceptableAnswerVariants: ["120/s^5", "\\dfrac{120}{s^5}"],
      stepByStepExplanation: "L{t^n}=n!/s^{n+1}. With n=4: L{t^4}=24/s^5. Scaling by 5: L{5t^4}=120/s^5.",
      difficultyLevel: 1,
    },
    {
      problemId: "calc4-exam-p25",
      topicTag: "laplaceTransforms",
      promptText: "Find L^{-1}\\{7/(s-3)\\}.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "7e^{3t}",
      acceptableAnswerVariants: ["7e^3t", "7\\,e^{3t}"],
      stepByStepExplanation: "L^{-1}\\{1/(s-a)\\}=e^{at}. With a=3, scaled by 7: L^{-1}\\{7/(s-3)\\}=7e^{3t}.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc4-exam-p26",
      topicTag: "laplaceTransforms",
      promptText: "Find L{2e^{3t} - 4\\cos(2t)}.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "2/(s-3)-4s/(s^2+4)",
      acceptableAnswerVariants: ["2/(s-3) - 4s/(s^2+4)", "\\dfrac{2}{s-3}-\\dfrac{4s}{s^2+4}"],
      stepByStepExplanation:
        "By linearity, L{2e^{3t}-4\\cos2t} = 2\\,L\\{e^{3t}\\}-4\\,L\\{\\cos2t\\} = \\dfrac{2}{s-3}-\\dfrac{4s}{s^2+4}.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc4-exam-p27",
      topicTag: "laplaceTransforms",
      promptText: "Find L{u(t-5)}.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "e^{-5s}/s",
      acceptableAnswerVariants: ["e^-5s/s", "\\dfrac{e^{-5s}}{s}"],
      stepByStepExplanation: "L{u(t-a)}=e^{-as}/s. With a=5: L{u(t-5)}=e^{-5s}/s.",
      difficultyLevel: 1,
    },
    {
      problemId: "calc4-exam-p28",
      topicTag: "laplaceTransforms",
      promptText: "Solve using Laplace transforms.",
      promptMathExpression: "y'' + 5y' + 6y = 0, \\quad y(0) = 1, \\quad y'(0) = 1",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "y=4e^{-2t}-3e^{-3t}",
      acceptableAnswerVariants: ["y = 4e^{-2t} - 3e^{-3t}"],
      stepByStepExplanation:
        "Transform: [s^2Y-s-1]+5[sY-1]+6Y=0, so Y(s^2+5s+6)=s+6. Since s^2+5s+6=(s+2)(s+3), Y(s)=(s+6)/[(s+2)(s+3)]. Partial fractions: A/(s+2)+B/(s+3), A=4, B=-3. Inverting: y(t)=4e^{-2t}-3e^{-3t}. Check: y(0)=4-3=1 ✓, y'(0)=-8+9=1 ✓.",
      difficultyLevel: 5,
    },
    // Unit 9: Systems of Differential Equations
    {
      problemId: "calc4-exam-p29",
      topicTag: "ordinaryDifferentialEquations",
      promptText: "Convert y'' - 3y' - 10y = 0 into a system using x1=y, x2=y'. Find x2'.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "x2'=10x1+3x2",
      acceptableAnswerVariants: ["x2' = 10x1 + 3x2"],
      stepByStepExplanation: "y''=3y'+10y=3x2+10x1, so x2'=10x1+3x2.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc4-exam-p30",
      topicTag: "linearAlgebraFoundations",
      promptText: "Find the eigenvalues of the triangular matrix A = [[5,3],[0,-2]].",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "5,-2",
      acceptableAnswerVariants: ["-2, 5", "λ=5,-2"],
      stepByStepExplanation: "For a triangular matrix, the eigenvalues are the diagonal entries: 5 and -2.",
      difficultyLevel: 1,
    },
    {
      problemId: "calc4-exam-p31",
      topicTag: "ordinaryDifferentialEquations",
      promptText: "Classify the equilibrium for A = [[2,1],[1,2]] using its trace and determinant.",
      answerFormat: "multipleChoice",
      choices: ["Unstable node", "Stable node", "Saddle", "Unstable spiral"],
      correctAnswer: "Unstable node",
      stepByStepExplanation:
        "T=4, D=3. T^2-4D=16-12=4>0 and D>0, so the eigenvalues are real with the same sign — a node. Since T>0, it's an unstable node (matching eigenvalues 3 and 1, both positive).",
      difficultyLevel: 3,
    },
    // Unit 10: Series Solutions and an Introduction to Numerical Methods
    {
      problemId: "calc4-exam-p32",
      topicTag: "seriesSolutionsAndNumericalMethods",
      promptText: "Using the recursion a_{n+2} = -a_n/[(n+1)(n+2)] with a0=2, a1=0, find a2.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "-1",
      stepByStepExplanation: "With n=0: a2 = -a0/[(1)(2)] = -2/2 = -1.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc4-exam-p33",
      topicTag: "seriesSolutionsAndNumericalMethods",
      promptText: "Use one step of Euler's Method with h=0.1 to approximate y(0.1) for y'=x-y, y(0)=2.",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "1.8",
      stepByStepExplanation: "y1 = y0 + h\\,f(x0,y0) = 2 + 0.1(0-2) = 2 - 0.2 = 1.8.",
      difficultyLevel: 2,
    },
  ],
};
