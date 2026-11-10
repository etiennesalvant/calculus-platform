import { CourseExam, Unit, UnitQuiz } from "@/lib/types/curriculumTypes";

// Calculus II
// See docs/curriculum/05-calculus-2.md for the full plan.
// Each unit below starts as a structural stub (lessons: []) and gets filled
// in with real content following the pattern already used in
// algebraCalcFocused/unitsData.ts.

export const calculus2Units: Unit[] = [
  {
    unitSlug: "integration-review-and-substitution",
    unitTitle: "Integration Review and u-Substitution",
    unitDescription: "Basic antiderivative rules and u-substitution, fully, including definite integrals.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Integration Review and u-Substitution",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc2-integration-review-and-substitution-quiz-p1",
          topicTag: "integrationTechniques",
          promptText: "Find the indefinite integral.",
          promptMathExpression: "\\int(5x^4-\\dfrac{3}{x}+2\\sin x)\\,dx",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "x^5-3ln|x|-2cos(x)+C",
          acceptableAnswerVariants: ["x^5 - 3ln|x| - 2cos(x) + C"],
          stepByStepExplanation:
            "Integral of 5x^4 is x^5. Integral of -3/x is -3ln|x|. Integral of 2sin x is -2cos x. Combine: x^5-3ln|x|-2cos(x)+C.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc2-integration-review-and-substitution-quiz-p2",
          topicTag: "integrationTechniques",
          promptText: "Evaluate the integral.",
          promptMathExpression: "\\int x(x^2+3)^4\\,dx",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "(x^2+3)^5/10+C",
          acceptableAnswerVariants: ["(1/10)(x^2+3)^5+C"],
          stepByStepExplanation:
            "Let u=x^2+3, du=2xdx, so xdx=du/2. The integral becomes (1/2) times the integral of u^4du = (1/2)(u^5/5)+C = (x^2+3)^5/10+C.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc2-integration-review-and-substitution-quiz-p3",
          topicTag: "integrationTechniques",
          promptText: "Evaluate the integral.",
          promptMathExpression: "\\int \\sec^2(x)\\,e^{\\tan x}\\,dx",
          answerFormat: "multipleChoice",
          choices: ["e^(tan x)+C", "tan(x)e^(tan x)+C", "(1/2)e^(tan x)+C", "e^(sec^2 x)+C"],
          correctAnswer: "e^(tan x)+C",
          stepByStepExplanation:
            "Let u=tan x, du=sec^2 x dx. The integral becomes the integral of e^u du = e^u+C = e^(tan x)+C.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc2-integration-review-and-substitution-quiz-p4",
          topicTag: "integrationTechniques",
          promptText: "Evaluate the definite integral.",
          promptMathExpression: "\\int_0^1 2xe^{x^2}\\,dx",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "e-1",
          acceptableAnswerVariants: ["e - 1"],
          stepByStepExplanation:
            "Let u=x^2, du=2xdx. Bounds: x=0 gives u=0; x=1 gives u=1. The integral becomes the integral of e^u du from 0 to 1 = [e^u] from 0 to 1 = e-1.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc2-integration-review-and-substitution-quiz-p5",
          topicTag: "integrationTechniques",
          promptText: "Evaluate the integral.",
          promptMathExpression: "\\int \\tan x\\,dx",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "-ln|cos(x)|+C",
          acceptableAnswerVariants: ["ln|sec(x)|+C", "-ln|cos x|+C"],
          stepByStepExplanation:
            "Rewrite tan x as sin x/cos x. Let u=cos x, du=-sin x dx, so sin x dx=-du. The integral becomes -the integral of du/u = -ln|u|+C = -ln|cos(x)|+C, equivalently ln|sec(x)|+C.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc2-integration-review-and-substitution-quiz-p6",
          topicTag: "integrationTechniques",
          promptText: "Evaluate the definite integral.",
          promptMathExpression: "\\int_0^2 \\dfrac{x}{x^2+1}\\,dx",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "(1/2)ln(5)",
          acceptableAnswerVariants: ["ln(5)/2", "0.5ln(5)"],
          stepByStepExplanation:
            "Let u=x^2+1, du=2xdx, so xdx=du/2. Bounds: x=0 gives u=1; x=2 gives u=5. The integral becomes (1/2) times the integral of du/u from 1 to 5 = (1/2)[ln|u|] from 1 to 5 = (1/2)(ln5-ln1) = (1/2)ln(5).",
          difficultyLevel: 4,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "review-basic-antiderivative-rules",
        lessonTitle: "Review: Basic Antiderivative Rules",
        estimatedMinutes: 20,
        topicTag: "integrationTechniques",
        learningGoals: [
          "Recall the basic antiderivative rules for power, exponential, logarithmic, and trigonometric functions",
          "Integrate a sum of basic terms fluently as a warm-up for the techniques ahead",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Why this review matters more than it looks",
            bodyText:
              "Calculus II is a toolbox of techniques for handling integrals the basic rules can't touch directly - but every one of those techniques eventually bottoms out in one of these basic antiderivatives. If recalling that the integral of 1/x is ln|x|, or that the integral of sec^2 x is tan x, takes you more than a couple seconds, that hesitation will slow down (and introduce errors into) every technique in this course. This lesson is a fast, thorough refresh before the new material starts.",
          },
          {
            blockType: "keyFormula",
            headingText: "The basic antiderivative toolkit",
            bodyText:
              "Power rule: the integral of x^n dx is x^(n+1)/(n+1)+C for n not equal to -1. The exception: the integral of 1/x dx is ln|x|+C. Exponential: the integral of e^x dx is e^x+C. Trig: the integral of sin x dx is -cos x+C; the integral of cos x dx is sin x+C; the integral of sec^2 x dx is tan x+C; the integral of sec x tan x dx is sec x+C; the integral of csc^2 x dx is -cot x+C; the integral of csc x cot x dx is -csc x+C.",
            mathExpression:
              "\\int x^n\\,dx=\\dfrac{x^{n+1}}{n+1}+C,\\quad \\int \\dfrac{1}{x}\\,dx=\\ln|x|+C,\\quad \\int e^x\\,dx=e^x+C",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Evaluate the integral of (3x^4 - 2/x + 5e^x - sin x) dx. Handle each term with its own rule: the integral of 3x^4 is (3/5)x^5. The integral of -2/x is -2ln|x|. The integral of 5e^x is 5e^x. The integral of -sin x is cos x (since the integral of sin x is -cos x, the negative sign flips it). Combine everything under a single +C.",
            mathExpression:
              "\\int\\left(3x^4-\\dfrac{2}{x}+5e^x-\\sin x\\right)dx=\\dfrac{3}{5}x^5-2\\ln|x|+5e^x+\\cos x+C",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Trying to force the power rule onto the integral of 1/x by treating it as x^-1, which would require dividing by n+1=0 - that division by zero is exactly why 1/x needs its own separate rule, ln|x|. Also common: mixing up the sign when integrating sine and cosine - the integral of sin x picks up a minus sign (-cos x), unlike its derivative.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u1-l1-p1",
            topicTag: "integrationTechniques",
            promptText: "Find the indefinite integral.",
            promptMathExpression: "\\int(6x^5-4x+3)\\,dx",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "x^6-2x^2+3x+C",
            stepByStepExplanation:
              "Integral of 6x^5 is x^6. Integral of -4x is -2x^2. Integral of 3 is 3x. Combine: x^6-2x^2+3x+C.",
            difficultyLevel: 1,
          },
          {
            problemId: "c2-u1-l1-p2",
            topicTag: "integrationTechniques",
            promptText: "Find the indefinite integral.",
            promptMathExpression: "\\int\\left(\\dfrac{4}{x}+3\\sec^2 x\\right)dx",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "4ln|x|+3tan(x)+C",
            acceptableAnswerVariants: ["4ln(x)+3tan(x)+C", "4 ln|x| + 3 tan(x) + C"],
            stepByStepExplanation: "Integral of 4/x is 4ln|x|. Integral of 3sec^2x is 3tan x. Combine: 4ln|x|+3tan(x)+C.",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u1-l1-p3",
            topicTag: "integrationTechniques",
            promptText: "Find the indefinite integral.",
            promptMathExpression: "\\int(2e^x-\\csc x\\cot x)\\,dx",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "2e^x+csc(x)+C",
            stepByStepExplanation:
              "Integral of 2e^x is 2e^x. Integral of -csc x cot x is +csc x, since the integral of csc x cot x is -csc x. Combine: 2e^x+csc(x)+C.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Indefinite Integrals",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/IndefiniteIntegrals.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 1: Integration",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/1-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Integration techniques",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-bc/bc-integration-new",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "u-substitution-fully",
        lessonTitle: "u-Substitution, Fully",
        estimatedMinutes: 30,
        topicTag: "integrationTechniques",
        learningGoals: [
          "Recognize when u-substitution applies, including less-obvious composite-function patterns",
          "Choose u correctly and account for any missing constant factor",
          "Apply u-substitution to integrals involving trig, exponential, and logarithmic functions",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Substitution is a recognition skill, not a formula",
            bodyText:
              "There's no single formula to memorize for u-substitution - it's a pattern-recognition skill. You're looking for an integral that is secretly the result of a chain rule differentiation, run backwards. The signal is almost always an 'inner function' (something inside parentheses, under a root, in an exponent, or in a denominator) whose derivative - or a constant multiple of it - is also sitting somewhere else in the integral. The trickier cases below are ones where that second piece isn't an exact match, just proportional to it, or where it's hidden inside a quotient like tan x = sin x / cos x.",
          },
          {
            blockType: "keyFormula",
            headingText: "The substitution rule",
            bodyText:
              "If u=g(x), then du=g'(x)dx, and the integral of f(g(x))g'(x)dx becomes the integral of f(u)du - a simpler integral in the single variable u. Always finish by substituting g(x) back in for u.",
            mathExpression: "\\int f(g(x))\\,g'(x)\\,dx=\\int f(u)\\,du,\\quad u=g(x)",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: a missing constant factor",
            bodyText:
              "Evaluate the integral of x^2 e^(x^3) dx. The inner function is x^3, so let u=x^3, giving du=3x^2dx. The integral only has x^2dx available, not 3x^2dx, so solve for what you actually have: x^2dx = du/3. Rewrite the integral as (1/3) times the integral of e^u du = (1/3)e^u+C. Substitute back: (1/3)e^(x^3)+C.",
            mathExpression: "\\int x^2e^{x^3}\\,dx=\\dfrac{1}{3}e^{x^3}+C",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: a hidden quotient pattern",
            bodyText:
              "Evaluate the integral of tan x dx. Rewrite tan x as sin x / cos x. Now the pattern is visible: let u=cos x, so du=-sin x dx, meaning sin x dx = -du. The integral becomes -integral of du/u = -ln|u|+C = -ln|cos x|+C. Using a log property, this is often rewritten as ln|sec x|+C - both are correct, equivalent forms.",
            mathExpression: "\\int\\tan x\\,dx=-\\ln|\\cos x|+C=\\ln|\\sec x|+C",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Leaving a mix of x's and u's in the integral before integrating - for example substituting u=x^3 but still trying to integrate x^2 e^u directly. Once you commit to u, every piece of the integral (including dx) must be rewritten in terms of u before you integrate; if an x still stubbornly won't go away, u-substitution is not the right technique for that integral.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u1-l2-p1",
            topicTag: "integrationTechniques",
            promptText: "Evaluate the integral.",
            promptMathExpression: "\\int 4x(x^2+5)^3\\,dx",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(x^2+5)^4/2+C",
            acceptableAnswerVariants: ["(1/2)(x^2+5)^4+C"],
            stepByStepExplanation:
              "Let u=x^2+5, du=2xdx, so 4xdx=2du. The integral becomes 2 times the integral of u^3du = 2(u^4/4)+C=u^4/2+C=(x^2+5)^4/2+C.",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u1-l2-p2",
            topicTag: "integrationTechniques",
            promptText: "Evaluate the integral.",
            promptMathExpression: "\\int \\sin^3 x\\cos x\\,dx",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "sin^4(x)/4+C",
            stepByStepExplanation:
              "Let u=sin x, du=cos x dx. The integral becomes the integral of u^3du = u^4/4+C = sin^4(x)/4+C.",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u1-l2-p3",
            topicTag: "integrationTechniques",
            promptText: "Evaluate the integral.",
            promptMathExpression: "\\int \\dfrac{(\\ln x)^2}{x}\\,dx",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(ln(x))^3/3+C",
            acceptableAnswerVariants: ["ln(x)^3/3+C"],
            stepByStepExplanation:
              "Let u=ln x, du=dx/x. The integral becomes the integral of u^2 du = u^3/3+C = (ln x)^3/3+C.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Substitution Rule",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/SubstitutionRule.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 1: Integration",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/1-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: u-substitution",
            resourceUrl:
              "https://www.khanacademy.org/math/ap-calculus-bc/bc-integration-new/bc-u-substitution/a/u-substitution-intro",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "u-substitution-with-definite-integrals",
        lessonTitle: "u-Substitution with Definite Integrals",
        estimatedMinutes: 25,
        topicTag: "integrationTechniques",
        learningGoals: [
          "Apply u-substitution to a definite integral by converting the bounds into u-values",
          "Avoid the classic bounds-mismatch error by never mixing x-bounds with a u-antiderivative",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Two valid paths, one much safer",
            bodyText:
              "There are technically two ways to finish a definite integral solved by substitution: substitute back to x before plugging in the original bounds, or convert the bounds themselves into u-values and never substitute back at all. The second approach is faster and, more importantly, eliminates an entire category of careless errors - so it's the habit worth building.",
          },
          {
            blockType: "keyFormula",
            headingText: "Changing the bounds",
            bodyText:
              "When u=g(x), the new lower bound is g(a) and the new upper bound is g(b). Once the bounds are converted, evaluate the antiderivative in u directly at those new numbers - there's no need to ever write the original variable x again.",
            mathExpression: "\\int_a^b f(g(x))g'(x)\\,dx=\\int_{g(a)}^{g(b)} f(u)\\,du",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Evaluate the integral of x(x^2+1)^3 dx from x=0 to x=2. Let u=x^2+1, du=2xdx, so xdx=du/2. Convert the bounds: when x=0, u=1; when x=2, u=5. The integral becomes (1/2) times the integral of u^3du from 1 to 5, equal to (1/2)[u^4/4] evaluated from 1 to 5 = (1/2)(625/4 - 1/4) = (1/2)(624/4) = 78.",
            mathExpression: "\\int_0^2 x(x^2+1)^3\\,dx=78",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Converting to u, integrating in u, and then plugging the ORIGINAL x-bounds into that u-antiderivative without ever changing them, or without substituting back to x first. Either the bounds must change to match u, or the antiderivative must change back to x before the bounds are used - mixing an x-bound with a u-expression gives a wrong number almost every time.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u1-l3-p1",
            topicTag: "integrationTechniques",
            promptText: "Evaluate the definite integral.",
            promptMathExpression: "\\int_0^1 3x^2(x^3+1)^2\\,dx",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "7/3",
            stepByStepExplanation:
              "Let u=x^3+1, du=3x^2dx. Bounds: x=0 gives u=1; x=1 gives u=2. The integral becomes the integral of u^2du from 1 to 2 = [u^3/3] from 1 to 2 = 8/3-1/3=7/3.",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u1-l3-p2",
            topicTag: "integrationTechniques",
            promptText: "Evaluate the definite integral.",
            promptMathExpression: "\\int_1^{e} \\dfrac{\\ln x}{x}\\,dx",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "1/2",
            stepByStepExplanation:
              "Let u=ln x, du=dx/x. Bounds: x=1 gives u=0; x=e gives u=1. The integral becomes the integral of u du from 0 to 1 = [u^2/2] from 0 to 1 = 1/2.",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u1-l3-p3",
            topicTag: "integrationTechniques",
            promptText: "Evaluate the definite integral.",
            promptMathExpression: "\\int_0^{\\pi/4}\\sec^2 x\\tan x\\,dx",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "1/2",
            stepByStepExplanation:
              "Let u=tan x, du=sec^2 x dx. Bounds: x=0 gives u=0; x=pi/4 gives u=1. The integral becomes the integral of u du from 0 to 1 = [u^2/2] from 0 to 1 = 1/2.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Substitution Rule for Definite Integrals",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/SubstitutionRuleDefinite.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 1: Integration",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/1-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Integration techniques",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-bc/bc-integration-new",
            resourceType: "interactivePractice",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "integration-by-parts",
    unitTitle: "Integration by Parts",
    unitDescription: "The integration-by-parts formula, repeated application, and tabular integration.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Integration by Parts",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc2-integration-by-parts-quiz-p1",
          topicTag: "integrationTechniques",
          promptText: "Evaluate the integral.",
          promptMathExpression: "\\int x\\sin x\\,dx",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "-xcos(x)+sin(x)+C",
          acceptableAnswerVariants: ["sin(x)-xcos(x)+C"],
          stepByStepExplanation:
            "Let u=x (du=dx), dv=sin x dx (v=-cos x). Apply the formula: -x cos x - the integral of -cos x dx = -x cos x + sin x + C.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc2-integration-by-parts-quiz-p2",
          topicTag: "integrationTechniques",
          promptText: "Evaluate the integral.",
          promptMathExpression: "\\int xe^{3x}\\,dx",
          answerFormat: "multipleChoice",
          choices: ["(x/3)e^(3x)-(1/9)e^(3x)+C", "xe^(3x)+C", "(x^2/2)e^(3x)+C", "(1/3)e^(3x)+C"],
          correctAnswer: "(x/3)e^(3x)-(1/9)e^(3x)+C",
          stepByStepExplanation:
            "Let u=x (du=dx), dv=e^(3x)dx (v=(1/3)e^(3x)). Apply the formula: (x/3)e^(3x) - the integral of (1/3)e^(3x)dx = (x/3)e^(3x) - (1/9)e^(3x) + C.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc2-integration-by-parts-quiz-p3",
          topicTag: "integrationTechniques",
          promptText: "Evaluate the integral.",
          promptMathExpression: "\\int x^2\\ln x\\,dx",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "(x^3/3)ln(x)-x^3/9+C",
          stepByStepExplanation:
            "Let u=ln x (du=dx/x), dv=x^2dx (v=x^3/3). Apply the formula: (x^3/3)ln x - the integral of (x^3/3)(1/x)dx = (x^3/3)ln x - (1/3)the integral of x^2dx = (x^3/3)ln(x) - x^3/9 + C.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc2-integration-by-parts-quiz-p4",
          topicTag: "integrationTechniques",
          promptText: "Use tabular integration to evaluate the integral.",
          promptMathExpression: "\\int x^2\\sin x\\,dx",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "-x^2cos(x)+2xsin(x)+2cos(x)+C",
          stepByStepExplanation:
            "D column (differentiate x^2): x^2, 2x, 2. I column (integrate sin x, starting one step ahead): sin x, -cos x, -sin x, cos x. Multiply diagonally with alternating signs starting at +: +(x^2)(-cos x) - (2x)(-sin x) + (2)(cos x) = -x^2cos(x)+2xsin(x)+2cos(x)+C. (Differentiating this back confirms it matches x^2sin(x).)",
          difficultyLevel: 4,
        },
        {
          problemId: "calc2-integration-by-parts-quiz-p5",
          topicTag: "integrationTechniques",
          promptText: "Evaluate the cyclic integral.",
          promptMathExpression: "\\int e^{2x}\\cos x\\,dx",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "(e^(2x)/5)(2cos(x)+sin(x))+C",
          stepByStepExplanation:
            "Let I be this integral. Parts with u=cos x, dv=e^(2x)dx gives I=(e^(2x)/2)cos x + (1/2) times the integral of e^(2x)sin x dx. Applying parts again to that new integral (u=sin x, dv=e^(2x)dx) gives the integral of e^(2x)sin x dx = (e^(2x)/2)sin x - (1/2)I. Substituting back: I=(e^(2x)/2)cos x + (e^(2x)/4)sin x - (1/4)I. Solving for I: (5/4)I=(e^(2x)/2)cos x+(e^(2x)/4)sin x, so I=(2/5)e^(2x)cos x+(1/5)e^(2x)sin x+C=(e^(2x)/5)(2cos x+sin x)+C.",
          difficultyLevel: 5,
        },
        {
          problemId: "calc2-integration-by-parts-quiz-p6",
          topicTag: "integrationTechniques",
          promptText: "Evaluate the definite integral.",
          promptMathExpression: "\\int_1^{e} x\\ln x\\,dx",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "(e^2+1)/4",
          stepByStepExplanation:
            "Let u=ln x (du=dx/x), dv=x dx (v=x^2/2). The antiderivative is (x^2/2)ln x - x^2/4. At x=e: (e^2/2)(1)-e^2/4=e^2/4. At x=1: (1/2)(0)-1/4=-1/4. Result: e^2/4-(-1/4)=(e^2+1)/4.",
          difficultyLevel: 4,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "the-integration-by-parts-formula",
        lessonTitle: "The Integration by Parts Formula",
        estimatedMinutes: 25,
        topicTag: "integrationTechniques",
        learningGoals: [
          "State and apply the integration-by-parts formula",
          "Choose u and dv correctly using the LIATE heuristic",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "The technique for products substitution can't reach",
            bodyText:
              "u-substitution needs one piece of the integrand to be (a constant multiple of) the derivative of another piece. When a product of two genuinely unrelated functions shows up instead - like x and e^x, or x and ln x - substitution has nothing to grab onto. Integration by parts is the reverse of the product rule for derivatives, and it's built exactly for this situation: it trades your original integral for a new one, hopefully simpler.",
          },
          {
            blockType: "keyFormula",
            headingText: "The formula and the LIATE heuristic",
            bodyText:
              "Integration by parts: the integral of u dv equals uv minus the integral of v du. Everything hinges on splitting the integrand into a good u and a good dv. LIATE is a priority order for picking u: Logarithmic, Inverse trig, Algebraic (polynomials), Trigonometric, Exponential - whichever type appears first in that list is usually the best choice for u, because it should get simpler (or at least no worse) when differentiated. Whatever's left over, including the dx, is dv, and it needs to be something you can actually integrate.",
            mathExpression: "\\int u\\,dv = uv-\\int v\\,du",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Evaluate the integral of x e^x dx. By LIATE, x is Algebraic and e^x is Exponential, so x comes first: let u=x (du=dx) and dv=e^x dx (v=e^x). Apply the formula: xe^x - the integral of e^x dx = xe^x - e^x + C.",
            mathExpression: "\\int xe^x\\,dx = xe^x-e^x+C",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Picking u and dv based on which piece 'looks easier' to integrate rather than following LIATE. For the same integral above, choosing u=e^x and dv=x dx gives v=x^2/2, and the new integral becomes the integral of (x^2/2)e^x dx - which is a MORE complicated integral than the one you started with, not less. A poor choice of u doesn't just slow you down, it can make the problem actively worse.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u2-l1-p1",
            topicTag: "integrationTechniques",
            promptText: "Evaluate the integral.",
            promptMathExpression: "\\int x\\cos x\\,dx",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "xsin(x)+cos(x)+C",
            stepByStepExplanation:
              "Let u=x (du=dx), dv=cos x dx (v=sin x). Apply the formula: x sin x - the integral of sin x dx = x sin x - (-cos x) = x sin x + cos x + C.",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u2-l1-p2",
            topicTag: "integrationTechniques",
            promptText: "Evaluate the integral.",
            promptMathExpression: "\\int \\ln x\\,dx",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "xln(x)-x+C",
            stepByStepExplanation:
              "Let u=ln x (du=dx/x), dv=dx (v=x) - there's only one factor here, so dv is just dx. Apply the formula: x ln x - the integral of x*(1/x)dx = x ln x - the integral of 1 dx = x ln x - x + C.",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u2-l1-p3",
            topicTag: "integrationTechniques",
            promptText: "Evaluate the integral.",
            promptMathExpression: "\\int xe^{2x}\\,dx",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(x/2)e^(2x)-(1/4)e^(2x)+C",
            acceptableAnswerVariants: ["e^(2x)(2x-1)/4+C", "(2x-1)e^(2x)/4+C"],
            stepByStepExplanation:
              "Let u=x (du=dx), dv=e^(2x)dx (v=(1/2)e^(2x)). Apply the formula: (x/2)e^(2x) - the integral of (1/2)e^(2x)dx = (x/2)e^(2x) - (1/4)e^(2x) + C.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Integration by Parts",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/IntegrationByParts.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 3: Techniques of Integration",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/3-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Integration by parts",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-bc/bc-integration-new/bc-integration-by-parts",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "repeated-integration-by-parts-and-tabular-integration",
        lessonTitle: "Repeated Integration by Parts and Tabular Integration",
        estimatedMinutes: 25,
        topicTag: "integrationTechniques",
        learningGoals: [
          "Apply integration by parts more than once when a single application isn't enough",
          "Use tabular integration as a fast shortcut when one factor is a polynomial",
          "Solve a 'cyclic' integral that returns to its own starting form",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "When once isn't enough",
            bodyText:
              "If u is a polynomial of degree 2 or higher (like x^2), one application of integration by parts still leaves a product behind - just with a lower-degree polynomial. Keep applying the formula until the polynomial part differentiates all the way down to a constant. Tabular integration is a bookkeeping shortcut for exactly this repeated case, so you don't have to write out each application by hand.",
          },
          {
            blockType: "keyFormula",
            headingText: "How to build the table",
            bodyText:
              "Make two columns. In the D (differentiate) column, list the polynomial factor and keep differentiating it until you hit 0. In the I (integrate) column, list the other factor and keep integrating it the same number of times. Then multiply diagonally - each D entry by the I entry one row below it - alternating the sign of each product starting with +, and add everything up.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: tabular integration",
            bodyText:
              "Evaluate the integral of x^2 cos x dx. D column (differentiate x^2): x^2, 2x, 2. I column (integrate cos x, starting one step ahead): cos x, sin x, -cos x, -sin x. Multiply diagonally with alternating signs: +(x^2)(sin x) - (2x)(-cos x) + (2)(-sin x) = x^2 sin x + 2x cos x - 2 sin x + C.",
            mathExpression: "\\int x^2\\cos x\\,dx = x^2\\sin x+2x\\cos x-2\\sin x+C",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: a cyclic integral",
            bodyText:
              "Evaluate the integral of e^x sin x dx. Let I denote this integral. Apply parts with u=sin x, dv=e^x dx: I = e^x sin x - the integral of e^x cos x dx. Apply parts again to that new integral, with u=cos x, dv=e^x dx: the integral of e^x cos x dx = e^x cos x + the integral of e^x sin x dx = e^x cos x + I. Substitute back: I = e^x sin x - (e^x cos x + I) = e^x sin x - e^x cos x - I. Add I to both sides: 2I = e^x sin x - e^x cos x, so I = (e^x/2)(sin x - cos x) + C.",
            mathExpression: "\\int e^x\\sin x\\,dx=\\dfrac{e^x}{2}(\\sin x-\\cos x)+C",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Giving up on a cyclic integral like e^x sin x because the second application of integration by parts seems to just 'give the same integral back.' That reappearance is the whole point - treat the original integral as an unknown, call it I, and solve for it algebraically once it shows up on both sides of the equation. Also common in tabular integration: losing track of the alternating sign pattern partway down a long table.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u2-l2-p1",
            topicTag: "integrationTechniques",
            promptText: "Use tabular integration to evaluate the integral.",
            promptMathExpression: "\\int x^2 e^x\\,dx",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "x^2e^x-2xe^x+2e^x+C",
            stepByStepExplanation:
              "D column (differentiate x^2): x^2, 2x, 2. I column (integrate e^x each time): e^x, e^x, e^x, e^x. Multiply diagonally with alternating signs: +(x^2)(e^x) - (2x)(e^x) + (2)(e^x) = x^2e^x - 2xe^x + 2e^x + C.",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u2-l2-p2",
            topicTag: "integrationTechniques",
            promptText: "Evaluate the cyclic integral.",
            promptMathExpression: "\\int e^x\\cos x\\,dx",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(e^x/2)(sin(x)+cos(x))+C",
            stepByStepExplanation:
              "Let J be this integral. Parts with u=cos x, dv=e^xdx gives J = e^x cos x + the integral of e^x sin x dx. From the lesson's worked example, that integral equals (e^x/2)(sin x - cos x). Substitute: J = e^x cos x + (e^x/2)(sin x-cos x) = (e^x/2)cos x + (e^x/2)sin x = (e^x/2)(sin x+cos x)+C.",
            difficultyLevel: 5,
          },
          {
            problemId: "c2-u2-l2-p3",
            topicTag: "integrationTechniques",
            promptText: "Use tabular integration to evaluate the integral.",
            promptMathExpression: "\\int x^3 e^x\\,dx",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "x^3e^x-3x^2e^x+6xe^x-6e^x+C",
            stepByStepExplanation:
              "D column (differentiate x^3): x^3, 3x^2, 6x, 6. I column (integrate e^x each time): e^x, e^x, e^x, e^x, e^x. Alternating diagonal products: +(x^3)(e^x) - (3x^2)(e^x) + (6x)(e^x) - (6)(e^x) = x^3e^x-3x^2e^x+6xe^x-6e^x+C.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Integration by Parts",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/IntegrationByParts.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 3: Techniques of Integration",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/3-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Integration by parts: repeated application",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-bc/bc-integration-new/bc-integration-by-parts",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "integration-by-parts-with-definite-integrals",
        lessonTitle: "Integration by Parts with Definite Integrals",
        estimatedMinutes: 20,
        topicTag: "integrationTechniques",
        learningGoals: [
          "Apply integration by parts to a definite integral, evaluating the boundary term over the bounds",
          "Apply the same bounds consistently to both the boundary term and the remaining integral",
        ],
        contentBlocks: [
          {
            blockType: "keyFormula",
            headingText: "The definite-integral version of the formula",
            bodyText:
              "The integral of u dv from a to b equals [uv] evaluated from a to b, minus the integral of v du from a to b. Both pieces - the boundary term and the leftover integral - use the same limits of integration.",
            mathExpression: "\\int_a^b u\\,dv = \\Big[uv\\Big]_a^b - \\int_a^b v\\,du",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Evaluate the integral of x e^x dx from 0 to 1. Let u=x (du=dx), dv=e^xdx (v=e^x). The boundary term [xe^x] from 0 to 1 equals (1*e^1) - (0*e^0) = e. The remaining integral of e^x dx from 0 to 1 equals [e^x] from 0 to 1 = e-1. Combine: e - (e-1) = 1.",
            mathExpression: "\\int_0^1 xe^x\\,dx = 1",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Evaluating the boundary term [uv] as an indefinite expression and applying the bounds only to the remaining integral (or the reverse) - both the boundary term and the leftover integral need the same upper and lower limits applied to them separately.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u2-l3-p1",
            topicTag: "integrationTechniques",
            promptText: "Evaluate the definite integral.",
            promptMathExpression: "\\int_0^{\\pi/2} x\\sin x\\,dx",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "1",
            stepByStepExplanation:
              "Let u=x, dv=sin x dx, du=dx, v=-cos x. The antiderivative is -x cos x + sin x. At x=pi/2: -(pi/2)(0)+1=1. At x=0: -(0)(1)+0=0. Result: 1-0=1.",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u2-l3-p2",
            topicTag: "integrationTechniques",
            promptText: "Evaluate the definite integral.",
            promptMathExpression: "\\int_1^{e} \\ln x\\,dx",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "1",
            stepByStepExplanation:
              "The antiderivative of ln x is x ln x - x. At x=e: e(1)-e=0. At x=1: 1(0)-1=-1. Result: 0-(-1)=1.",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u2-l3-p3",
            topicTag: "integrationTechniques",
            promptText: "Evaluate the definite integral.",
            promptMathExpression: "\\int_0^1 xe^{-x}\\,dx",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "1-2/e",
            acceptableAnswerVariants: ["1 - 2/e"],
            stepByStepExplanation:
              "Let u=x, dv=e^(-x)dx, du=dx, v=-e^(-x). The antiderivative is -xe^(-x)-e^(-x) = -(x+1)e^(-x). At x=1: -2/e. At x=0: -1. Result: (-2/e)-(-1)=1-2/e.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Integration by Parts",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/IntegrationByParts.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 3: Techniques of Integration",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/3-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Integration by parts",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-bc/bc-integration-new/bc-integration-by-parts",
            resourceType: "interactivePractice",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "trig-integrals-and-substitution",
    unitTitle: "Trigonometric Integrals and Trigonometric Substitution",
    unitDescription: "Integrals of powers of trig functions and trigonometric substitution.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Trigonometric Integrals and Trigonometric Substitution",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc2-trig-integrals-and-substitution-quiz-p1",
          topicTag: "integrationTechniques",
          promptText: "Evaluate the integral.",
          promptMathExpression: "\\int \\sin^2 x\\cos^3 x\\,dx",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "sin^3(x)/3-sin^5(x)/5+C",
          stepByStepExplanation:
            "The cosine power (3) is odd, so save one cosine: sin^2x*cos^2x*cos x dx = sin^2x(1-sin^2x)cos x dx. Let u=sin x, du=cos x dx. The integral becomes the integral of u^2(1-u^2)du = u^3/3-u^5/5+C = sin^3(x)/3-sin^5(x)/5+C.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc2-trig-integrals-and-substitution-quiz-p2",
          topicTag: "integrationTechniques",
          promptText: "Evaluate the definite integral.",
          promptMathExpression: "\\int_0^{\\pi} \\sin^2 x\\,dx",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "pi/2",
          acceptableAnswerVariants: ["π/2"],
          stepByStepExplanation:
            "Both powers are even, so use sin^2x=(1-cos2x)/2. The antiderivative is x/2 - sin(2x)/4. At x=pi: pi/2 - 0 = pi/2. At x=0: 0. Result: pi/2.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc2-trig-integrals-and-substitution-quiz-p3",
          topicTag: "integrationTechniques",
          promptText: "Evaluate the integral.",
          promptMathExpression: "\\int \\sec^3 x\\tan x\\,dx",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "sec^3(x)/3+C",
          stepByStepExplanation:
            "Rewrite as sec^2x*(sec x tan x)dx. Let u=sec x, du=sec x tan x dx. The integral becomes the integral of u^2 du = u^3/3+C = sec^3(x)/3+C.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc2-trig-integrals-and-substitution-quiz-p4",
          topicTag: "integrationTechniques",
          promptText: "Evaluate the integral.",
          promptMathExpression: "\\int \\tan^2 x\\,dx",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "tan(x)-x+C",
          stepByStepExplanation:
            "Use the identity tan^2x=sec^2x-1. The integral becomes the integral of (sec^2x-1)dx = tan(x)-x+C.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc2-trig-integrals-and-substitution-quiz-p5",
          topicTag: "integrationTechniques",
          promptText: "Which trigonometric substitution should be used for the integral of dx/[x^2 sqrt(x^2-16)]?",
          answerFormat: "multipleChoice",
          choices: ["x=4sin(theta)", "x=4tan(theta)", "x=4sec(theta)", "x=16sec(theta)"],
          correctAnswer: "x=4sec(theta)",
          stepByStepExplanation:
            "This matches the form sqrt(x^2-a^2) with a=4, which calls for x=4sec(theta), since sec^2(theta)-1=tan^2(theta) removes the square root.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc2-trig-integrals-and-substitution-quiz-p6",
          topicTag: "integrationTechniques",
          promptText: "Evaluate the integral.",
          promptMathExpression: "\\int \\dfrac{dx}{\\sqrt{x^2+4}}",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "ln|x+sqrt(x^2+4)|+C",
          stepByStepExplanation:
            "This matches sqrt(a^2+x^2) with a=2, so let x=2tan(theta), dx=2sec^2(theta)d(theta), sqrt(x^2+4)=2sec(theta). The integral becomes the integral of sec(theta)d(theta) = ln|sec(theta)+tan(theta)|+C. Converting back using tan(theta)=x/2 and sec(theta)=sqrt(x^2+4)/2 gives ln|x+sqrt(x^2+4)|+C (the constant -ln2 is absorbed into C).",
          difficultyLevel: 5,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "integrals-involving-powers-of-sine-and-cosine",
        lessonTitle: "Integrals Involving Powers of Sine and Cosine",
        estimatedMinutes: 25,
        topicTag: "integrationTechniques",
        learningGoals: [
          "Integrate products of sine and cosine powers by saving one factor and converting the rest with a Pythagorean identity",
          "Use the half-angle identities when both powers are even",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Rewrite first, then substitute",
            bodyText:
              "The integral of sin^m(x) cos^n(x) dx can't be attacked directly with u-substitution until it's rewritten using an identity - the trick is deciding which identity to use, and that depends entirely on whether the powers are odd or even. If EITHER power is odd, you can peel off a single factor of that function, convert everything else using sin^2x+cos^2x=1, and the remaining odd-one-out factor becomes exactly the du you need. If BOTH powers are even, there's no factor to peel off, and you fall back on the half-angle identities instead.",
          },
          {
            blockType: "keyFormula",
            headingText: "The two strategies",
            bodyText:
              "If the power of sine is odd: save one sin x, replace the rest using sin^2x = 1 - cos^2x, and let u = cos x. If the power of cosine is odd: save one cos x, replace the rest using cos^2x = 1 - sin^2x, and let u = sin x. If both powers are even: use sin^2x = (1-cos 2x)/2 and cos^2x = (1+cos 2x)/2 to reduce the powers before integrating.",
            mathExpression: "\\sin^2x=\\dfrac{1-\\cos 2x}{2},\\qquad \\cos^2x=\\dfrac{1+\\cos 2x}{2}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: odd power present",
            bodyText:
              "Evaluate the integral of sin^3(x)cos^2(x) dx. The sine power (3) is odd, so save one sine factor: sin^2(x)cos^2(x)*sin(x)dx = (1-cos^2x)cos^2x*sin(x)dx. Let u=cos x, du=-sin x dx. The integral becomes -the integral of (1-u^2)u^2 du = -the integral of (u^2-u^4)du = -(u^3/3-u^5/5)+C = cos^5(x)/5 - cos^3(x)/3 + C.",
            mathExpression: "\\int \\sin^3x\\cos^2x\\,dx=\\dfrac{\\cos^5x}{5}-\\dfrac{\\cos^3x}{3}+C",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: both powers even",
            bodyText:
              "Evaluate the integral of sin^2(x) dx. Neither power is odd (cosine's power is 0, sine's is 2), so use the half-angle identity: sin^2x = (1-cos 2x)/2. The integral becomes the integral of (1/2 - (1/2)cos 2x)dx = x/2 - (1/4)sin(2x) + C, using u=2x for the second piece.",
            mathExpression: "\\int \\sin^2x\\,dx=\\dfrac{x}{2}-\\dfrac{\\sin(2x)}{4}+C",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Trying to 'save one factor and convert the rest' when BOTH powers are even - there's no odd leftover factor to serve as du, so this shortcut simply doesn't apply, and the half-angle identities are required instead. Also common: forgetting the factor of 1/2 that comes along with the half-angle identities and the extra 1/2 introduced when integrating cos(2x) (whose antiderivative is (1/2)sin(2x), not sin(2x)).",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u3-l1-p1",
            topicTag: "integrationTechniques",
            promptText: "Evaluate the integral.",
            promptMathExpression: "\\int \\sin^3 x\\,dx",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "cos^3(x)/3-cos(x)+C",
            stepByStepExplanation:
              "The sine power is odd. Save one sine: sin x(1-cos^2x)dx. Let u=cos x, du=-sin x dx. The integral becomes -the integral of (1-u^2)du = -u+u^3/3+C = cos^3(x)/3 - cos(x) + C.",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u3-l1-p2",
            topicTag: "integrationTechniques",
            promptText: "Evaluate the integral.",
            promptMathExpression: "\\int \\cos^3 x\\,dx",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "sin(x)-sin^3(x)/3+C",
            stepByStepExplanation:
              "The cosine power is odd. Save one cosine: cos x(1-sin^2x)dx. Let u=sin x, du=cos x dx. The integral becomes the integral of (1-u^2)du = u-u^3/3+C = sin(x) - sin^3(x)/3 + C.",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u3-l1-p3",
            topicTag: "integrationTechniques",
            promptText: "Evaluate the integral.",
            promptMathExpression: "\\int \\cos^2 x\\,dx",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "x/2+sin(2x)/4+C",
            stepByStepExplanation:
              "Both powers are even (sine's is 0), so use cos^2x=(1+cos 2x)/2. The integral becomes the integral of (1/2+(1/2)cos2x)dx = x/2 + (1/4)sin(2x) + C.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Integrals Involving Trig Functions",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/IntegralsWithTrig.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 3: Techniques of Integration",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/3-introduction",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "integrals-involving-powers-of-secant-and-tangent",
        lessonTitle: "Integrals Involving Powers of Secant and Tangent",
        estimatedMinutes: 25,
        topicTag: "integrationTechniques",
        learningGoals: [
          "Integrate products of secant and tangent powers by saving a factor and converting with sec^2x = 1+tan^2x",
          "Recognize when neither shortcut applies and a standard memorized formula is needed instead",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "A close cousin of the sine/cosine strategy",
            bodyText:
              "Secant and tangent are linked by the identity sec^2x = 1 + tan^2x, which plays the same role here that sin^2x+cos^2x=1 played for sine and cosine. The key difference is which factor gets 'saved': for this pair, you save either sec^2x (whose antiderivative is tan x, matching a u=tan x substitution) or the pair sec x tan x together (whose antiderivative is sec x, matching a u=sec x substitution).",
          },
          {
            blockType: "keyFormula",
            headingText: "The two strategies, plus a standard integral to memorize",
            bodyText:
              "If the power of secant is even: save a factor of sec^2x, convert the rest using sec^2x=1+tan^2x, and let u=tan x. If the power of tangent is odd: save a factor of sec x tan x, convert the rest using tan^2x=sec^2x-1, and let u=sec x. When the secant power is odd and there's no tangent factor at all (like sec x or sec^3x alone), neither shortcut applies - these require the memorized standard integral of sec x dx, or integration by parts for higher odd powers.",
            mathExpression: "\\int \\sec x\\,dx = \\ln|\\sec x+\\tan x|+C",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: even secant power",
            bodyText:
              "Evaluate the integral of sec^4(x)tan^2(x) dx. The secant power (4) is even, so save sec^2x: sec^2x*tan^2x*sec^2x dx = tan^2x(1+tan^2x)sec^2x dx. Let u=tan x, du=sec^2x dx. The integral becomes the integral of u^2(1+u^2)du = u^3/3+u^5/5+C = tan^3(x)/3 + tan^5(x)/5 + C.",
            mathExpression: "\\int \\sec^4x\\tan^2x\\,dx=\\dfrac{\\tan^3x}{3}+\\dfrac{\\tan^5x}{5}+C",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: odd tangent power",
            bodyText:
              "Evaluate the integral of tan^3(x)sec(x) dx. The tangent power (3) is odd, so save sec x tan x: tan^2x*sec x tan x dx = (sec^2x-1)*sec x tan x dx. Let u=sec x, du=sec x tan x dx. The integral becomes the integral of (u^2-1)du = u^3/3-u+C = sec^3(x)/3 - sec(x) + C.",
            mathExpression: "\\int \\tan^3x\\sec x\\,dx=\\dfrac{\\sec^3x}{3}-\\sec x+C",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Trying to apply the sec^2x-saving trick to an integral like the integral of sec^3(x) dx, where the secant power is odd and there's no tangent factor at all to convert. That case doesn't fit either shortcut - it genuinely requires a different tool (integration by parts, producing a reduction formula), so recognizing when NEITHER pattern applies is just as important as knowing the two that do.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u3-l2-p1",
            topicTag: "integrationTechniques",
            promptText: "Evaluate the integral.",
            promptMathExpression: "\\int \\sec^2 x\\tan x\\,dx",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "tan^2(x)/2+C",
            stepByStepExplanation:
              "Let u=tan x, du=sec^2x dx. The integral becomes the integral of u du = u^2/2+C = tan^2(x)/2+C.",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u3-l2-p2",
            topicTag: "integrationTechniques",
            promptText: "Evaluate the integral.",
            promptMathExpression: "\\int \\tan^3 x\\sec^3 x\\,dx",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "sec^5(x)/5-sec^3(x)/3+C",
            stepByStepExplanation:
              "The tangent power (3) is odd, so save sec x tan x: tan^2x sec^2x*sec x tan x dx = (sec^2x-1)sec^2x*sec x tan x dx. Let u=sec x, du=sec x tan x dx. The integral becomes the integral of (u^2-1)u^2 du = u^5/5-u^3/3+C = sec^5(x)/5 - sec^3(x)/3 + C.",
            difficultyLevel: 4,
          },
          {
            problemId: "c2-u3-l2-p3",
            topicTag: "integrationTechniques",
            promptText: "Evaluate the integral.",
            promptMathExpression: "\\int \\sec^4 x\\,dx",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "tan(x)+tan^3(x)/3+C",
            stepByStepExplanation:
              "The secant power (4) is even, so save sec^2x: sec^2x*sec^2x dx = (1+tan^2x)sec^2x dx. Let u=tan x, du=sec^2x dx. The integral becomes the integral of (1+u^2)du = u+u^3/3+C = tan(x)+tan^3(x)/3+C.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Integrals Involving Trig Functions",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/IntegralsWithTrig.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 3: Techniques of Integration",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/3-introduction",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "trigonometric-substitution-setup-and-recognition",
        lessonTitle: "Trigonometric Substitution: Setup and Recognition",
        estimatedMinutes: 25,
        topicTag: "integrationTechniques",
        learningGoals: [
          "Recognize which of the three trig substitutions matches a given square-root expression",
          "Explain why each substitution eliminates the square root, using a Pythagorean identity",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Matching the shape of the square root",
            bodyText:
              "Trigonometric substitution exists to eliminate a square root of a quadratic expression that u-substitution can't touch. The entire technique comes down to recognizing which of exactly three shapes you're looking at, since each shape has its own dedicated substitution built from a different Pythagorean identity. Getting the recognition step right is most of the battle - the algebra afterward is mechanical.",
          },
          {
            blockType: "keyFormula",
            headingText: "The three substitution patterns",
            bodyText:
              "For sqrt(a^2 - x^2): substitute x = a sin(theta), which gives sqrt(a^2-x^2) = a cos(theta), using 1 - sin^2(theta) = cos^2(theta). For sqrt(a^2 + x^2): substitute x = a tan(theta), which gives sqrt(a^2+x^2) = a sec(theta), using 1 + tan^2(theta) = sec^2(theta). For sqrt(x^2 - a^2): substitute x = a sec(theta), which gives sqrt(x^2-a^2) = a tan(theta), using sec^2(theta) - 1 = tan^2(theta).",
            mathExpression:
              "\\sqrt{a^2-x^2}:\\ x=a\\sin\\theta \\qquad \\sqrt{a^2+x^2}:\\ x=a\\tan\\theta \\qquad \\sqrt{x^2-a^2}:\\ x=a\\sec\\theta",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: setting up the mechanics",
            bodyText:
              "Set up (without finishing) the substitution for the integral of dx/sqrt(4-x^2). This matches sqrt(a^2-x^2) with a=2, so let x=2sin(theta). Then dx=2cos(theta)d(theta), and sqrt(4-x^2)=sqrt(4-4sin^2theta)=2sqrt(1-sin^2theta)=2cos(theta) (restricting theta to -pi/2 to pi/2 keeps cos(theta) non-negative, so no absolute value is needed).",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Confusing sqrt(a^2-x^2) with sqrt(x^2-a^2) - the sign inside the root completely changes which substitution is correct (sine versus secant), and using the wrong one leads to an identity that doesn't actually clear the square root. Also common: forgetting the domain restriction on theta that guarantees the simplified square root is non-negative, which matters when converting the final answer back to x.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u3-l3-p1",
            topicTag: "integrationTechniques",
            promptText: "Which trigonometric substitution should be used for the integral of dx/sqrt(25-x^2)?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "x=5sin(theta)",
            acceptableAnswerVariants: ["x = 5 sin(theta)", "x=5sinθ"],
            stepByStepExplanation:
              "This matches the form sqrt(a^2-x^2) with a=5, which calls for x=5 sin(theta), since 1-sin^2(theta)=cos^2(theta) removes the square root.",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u3-l3-p2",
            topicTag: "integrationTechniques",
            promptText: "Which trigonometric substitution should be used for the integral of dx/sqrt(x^2+16)?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "x=4tan(theta)",
            acceptableAnswerVariants: ["x = 4 tan(theta)", "x=4tanθ"],
            stepByStepExplanation:
              "This matches the form sqrt(a^2+x^2) with a=4, which calls for x=4 tan(theta), since 1+tan^2(theta)=sec^2(theta).",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u3-l3-p3",
            topicTag: "integrationTechniques",
            promptText: "Which trigonometric substitution should be used for the integral of sqrt(x^2-9)/x dx?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "x=3sec(theta)",
            acceptableAnswerVariants: ["x = 3 sec(theta)", "x=3secθ"],
            stepByStepExplanation:
              "This matches the form sqrt(x^2-a^2) with a=3, which calls for x=3 sec(theta), since sec^2(theta)-1=tan^2(theta).",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Trig Substitutions",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/TrigSubstitutions.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 3: Techniques of Integration",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/3-introduction",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "trigonometric-substitution-working-full-problems",
        lessonTitle: "Trigonometric Substitution: Working Full Problems",
        estimatedMinutes: 30,
        topicTag: "integrationTechniques",
        learningGoals: [
          "Carry a trig substitution all the way through to a final answer in terms of theta",
          "Convert the final answer back to the original variable x using a reference right triangle",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "The step everyone forgets: converting back",
            bodyText:
              "Once the integral is solved in terms of theta, the answer needs to be rewritten in terms of x, since that's the variable the original problem was asked in. The cleanest way to do this is to draw a right triangle based on the substitution itself - label one leg, the other leg (or the hypotenuse), and the angle theta so that the substitution equation is satisfied, then read off whatever trig function of theta you need directly as a ratio of x's.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: sine substitution, full problem",
            bodyText:
              "Evaluate the integral of x^2/sqrt(4-x^2) dx. This matches sqrt(a^2-x^2) with a=2, so let x=2sin(theta), dx=2cos(theta)d(theta), sqrt(4-x^2)=2cos(theta). The integral becomes the integral of [4sin^2(theta)*2cos(theta)]/(2cos(theta)) d(theta) = the integral of 4sin^2(theta) d(theta) = 4[theta/2 - sin(2theta)/4] = 2theta - 2sin(theta)cos(theta) + C. Now convert back: from x=2sin(theta), sin(theta)=x/2 and (by a right triangle with opposite x, hypotenuse 2) cos(theta)=sqrt(4-x^2)/2, and theta=arcsin(x/2). The final answer: 2arcsin(x/2) - x*sqrt(4-x^2)/2 + C.",
            mathExpression: "\\int \\dfrac{x^2}{\\sqrt{4-x^2}}\\,dx = 2\\arcsin\\!\\left(\\dfrac{x}{2}\\right)-\\dfrac{x\\sqrt{4-x^2}}{2}+C",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: tangent substitution, full problem",
            bodyText:
              "Evaluate the integral of dx/(x^2 sqrt(x^2+4)). This matches sqrt(a^2+x^2) with a=2, so let x=2tan(theta), dx=2sec^2(theta)d(theta), sqrt(x^2+4)=2sec(theta). The integral becomes the integral of 2sec^2(theta)d(theta)/[4tan^2(theta)*2sec(theta)] = (1/4)the integral of sec(theta)/tan^2(theta) d(theta) = (1/4)the integral of cos(theta)/sin^2(theta) d(theta). Let w=sin(theta): (1/4)(-1/w) = -1/(4sin(theta)). Convert back: from x=2tan(theta), a right triangle with opposite x, adjacent 2, hypotenuse sqrt(x^2+4) gives sin(theta)=x/sqrt(x^2+4). The final answer: -sqrt(x^2+4)/(4x) + C.",
            mathExpression: "\\int \\dfrac{dx}{x^2\\sqrt{x^2+4}} = -\\dfrac{\\sqrt{x^2+4}}{4x}+C",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Leaving the final answer in terms of theta (like 2theta - 2sin(theta)cos(theta)) instead of converting it back to the original variable x - the problem was asked in x, and an answer left in theta hasn't actually been finished. A close second: making a sign error on the triangle when the substitution involves secant, since theta's range there is split into two pieces and the sign of tan(theta) can flip depending on which piece x falls in.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u3-l4-p1",
            topicTag: "integrationTechniques",
            promptText: "Evaluate the integral.",
            promptMathExpression: "\\int \\dfrac{dx}{\\sqrt{9-x^2}}",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "arcsin(x/3)+C",
            stepByStepExplanation:
              "Let x=3sin(theta), dx=3cos(theta)d(theta), sqrt(9-x^2)=3cos(theta). The integral becomes the integral of 3cos(theta)d(theta)/(3cos(theta)) = the integral of d(theta) = theta+C = arcsin(x/3)+C.",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u3-l4-p2",
            topicTag: "integrationTechniques",
            promptText: "Evaluate the integral.",
            promptMathExpression: "\\int \\dfrac{dx}{x\\sqrt{x^2-4}}",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(1/2)arcsec(x/2)+C",
            acceptableAnswerVariants: ["arcsec(x/2)/2+C"],
            stepByStepExplanation:
              "Let x=2sec(theta), dx=2sec(theta)tan(theta)d(theta), sqrt(x^2-4)=2tan(theta). The integral becomes the integral of 2sec(theta)tan(theta)d(theta)/[2sec(theta)*2tan(theta)] = (1/2)the integral of d(theta) = theta/2+C = (1/2)arcsec(x/2)+C.",
            difficultyLevel: 4,
          },
          {
            problemId: "c2-u3-l4-p3",
            topicTag: "integrationTechniques",
            promptText: "Evaluate the integral.",
            promptMathExpression: "\\int \\dfrac{\\sqrt{x^2-1}}{x^2}\\,dx",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "ln|x+sqrt(x^2-1)|-sqrt(x^2-1)/x+C",
            stepByStepExplanation:
              "Let x=sec(theta), dx=sec(theta)tan(theta)d(theta), sqrt(x^2-1)=tan(theta). The integral becomes the integral of tan(theta)*sec(theta)tan(theta)d(theta)/sec^2(theta) = the integral of tan^2(theta)/sec(theta) d(theta) = the integral of (sec(theta)-cos(theta))d(theta) = ln|sec(theta)+tan(theta)| - sin(theta) + C. Converting back with sec(theta)=x, tan(theta)=sqrt(x^2-1), sin(theta)=sqrt(x^2-1)/x gives ln|x+sqrt(x^2-1)| - sqrt(x^2-1)/x + C.",
            difficultyLevel: 5,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Trig Substitutions",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/TrigSubstitutions.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 3: Techniques of Integration",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/3-introduction",
            resourceType: "textbookChapter",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "partial-fractions",
    unitTitle: "Partial Fractions",
    unitDescription: "Decomposing rational expressions into partial fractions and integrating them.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Partial Fractions",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc2-partial-fractions-quiz-p1",
          topicTag: "integrationTechniques",
          promptText: "Decompose into partial fractions.",
          promptMathExpression: "\\dfrac{x+7}{(x-1)(x+4)}",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "(8/5)/(x-1)-(3/5)/(x+4)",
          stepByStepExplanation:
            "x+7=A(x+4)+B(x-1). At x=1: 8=5A, so A=8/5. At x=-4: 3=-5B, so B=-3/5. Decomposition: (8/5)/(x-1) - (3/5)/(x+4).",
          difficultyLevel: 2,
        },
        {
          problemId: "calc2-partial-fractions-quiz-p2",
          topicTag: "integrationTechniques",
          promptText: "Decompose into partial fractions.",
          promptMathExpression: "\\dfrac{2x-1}{(x-3)^2}",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "2/(x-3)+5/(x-3)^2",
          stepByStepExplanation:
            "2x-1=A(x-3)+B. Matching the x-coefficient: A=2. Matching the constant: -3A+B=-1, so -6+B=-1, giving B=5. Decomposition: 2/(x-3)+5/(x-3)^2.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc2-partial-fractions-quiz-p3",
          topicTag: "integrationTechniques",
          promptText: "Evaluate the integral (long division is required first).",
          promptMathExpression: "\\int \\dfrac{x^2+2}{x+1}\\,dx",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "x^2/2-x+3ln|x+1|+C",
          stepByStepExplanation:
            "The numerator's degree is not smaller than the denominator's, so divide first: x^2+2=(x+1)(x-1)+3, so (x^2+2)/(x+1)=x-1+3/(x+1). Integrate each piece: the integral of (x-1)dx is x^2/2-x, and the integral of 3/(x+1)dx is 3ln|x+1|. Combine: x^2/2-x+3ln|x+1|+C.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc2-partial-fractions-quiz-p4",
          topicTag: "integrationTechniques",
          promptText: "Evaluate the integral.",
          promptMathExpression: "\\int \\dfrac{5}{x^2+25}\\,dx",
          answerFormat: "multipleChoice",
          choices: ["arctan(x/5)+C", "5arctan(x/5)+C", "(1/5)arctan(x/5)+C", "arctan(x)+C"],
          correctAnswer: "arctan(x/5)+C",
          stepByStepExplanation:
            "Using the arctangent formula with a=5: the integral of 1/(x^2+25)dx is (1/5)arctan(x/5). Multiplying by the constant 5 out front: 5*(1/5)arctan(x/5) = arctan(x/5)+C.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc2-partial-fractions-quiz-p5",
          topicTag: "integrationTechniques",
          promptText: "Evaluate the integral.",
          promptMathExpression: "\\int \\dfrac{3x+1}{x^2+1}\\,dx",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "(3/2)ln(x^2+1)+arctan(x)+C",
          stepByStepExplanation:
            "Split into two pieces: 3x/(x^2+1) and 1/(x^2+1). For the first, let u=x^2+1, du=2xdx, giving (3/2)ln(x^2+1). The second is the standard arctangent integral, arctan(x). Combine: (3/2)ln(x^2+1)+arctan(x)+C.",
          difficultyLevel: 4,
        },
        {
          problemId: "calc2-partial-fractions-quiz-p6",
          topicTag: "integrationTechniques",
          promptText: "Decompose into partial fractions.",
          promptMathExpression: "\\dfrac{3}{x(x+1)^2}",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "3/x-3/(x+1)-3/(x+1)^2",
          stepByStepExplanation:
            "3=A(x+1)^2+Bx(x+1)+Cx. At x=0: 3=A, so A=3. At x=-1: 3=-C, so C=-3. Matching the x^2-coefficient: 0=A+B, so B=-3. Decomposition: 3/x - 3/(x+1) - 3/(x+1)^2.",
          difficultyLevel: 5,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "partial-fraction-decomposition-distinct-linear-factors",
        lessonTitle: "Partial Fraction Decomposition: Distinct Linear Factors",
        estimatedMinutes: 25,
        topicTag: "integrationTechniques",
        learningGoals: [
          "Decompose a rational expression whose denominator factors into distinct linear factors",
          "Solve for the unknown constants by strategically plugging in the roots of each factor",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Splitting one hard fraction into several easy ones",
            bodyText:
              "This technique directly reuses the factoring skills from the Algebra course: if a rational expression's denominator factors into distinct linear pieces, like (x-a)(x-b), the whole fraction can be rewritten as a SUM of simpler fractions, one per factor, each with its own unknown constant on top. Each of those simpler pieces integrates immediately to a logarithm - which is the entire reason this decomposition is worth doing.",
          },
          {
            blockType: "keyFormula",
            headingText: "Setting up and solving",
            bodyText:
              "For distinct linear factors, write the expression as A/(x-a) + B/(x-b) + ... . Multiply both sides by the original denominator to clear every fraction, which leaves a polynomial equation. Then plug in x=a, x=b, and so on - each substitution makes every term except one vanish, instantly solving for that one constant.",
            mathExpression: "\\dfrac{P(x)}{(x-a)(x-b)}=\\dfrac{A}{x-a}+\\dfrac{B}{x-b}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Decompose (3x+5)/[(x-1)(x+2)]. Write 3x+5 = A(x+2) + B(x-1) after clearing denominators. Plug in x=1: 3(1)+5=8=A(1+2)=3A, so A=8/3. Plug in x=-2: 3(-2)+5=-1=B(-2-1)=-3B, so B=1/3. The decomposition: (8/3)/(x-1) + (1/3)/(x+2).",
            mathExpression: "\\dfrac{3x+5}{(x-1)(x+2)}=\\dfrac{8/3}{x-1}+\\dfrac{1/3}{x+2}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Jumping straight into decomposition without first checking that the numerator's degree is smaller than the denominator's degree. If it isn't (an 'improper' rational expression), polynomial long division has to happen FIRST, producing a polynomial plus a proper remainder fraction - only that remainder fraction gets decomposed into partial fractions.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u4-l1-p1",
            topicTag: "integrationTechniques",
            promptText: "Decompose into partial fractions.",
            promptMathExpression: "\\dfrac{5x-1}{(x-2)(x+3)}",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(9/5)/(x-2)+(16/5)/(x+3)",
            stepByStepExplanation:
              "5x-1 = A(x+3)+B(x-2). At x=2: 9=5A, so A=9/5. At x=-3: -16=-5B, so B=16/5. Decomposition: (9/5)/(x-2)+(16/5)/(x+3).",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u4-l1-p2",
            topicTag: "integrationTechniques",
            promptText: "Decompose into partial fractions.",
            promptMathExpression: "\\dfrac{7x+3}{x^2-9}",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "4/(x-3)+3/(x+3)",
            stepByStepExplanation:
              "Factor the denominator: x^2-9=(x-3)(x+3). Then 7x+3=A(x+3)+B(x-3). At x=3: 24=6A, so A=4. At x=-3: -18=-6B, so B=3. Decomposition: 4/(x-3)+3/(x+3).",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u4-l1-p3",
            topicTag: "integrationTechniques",
            promptText: "Decompose into partial fractions.",
            promptMathExpression: "\\dfrac{2x+1}{x(x-1)(x+1)}",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "-1/x+(3/2)/(x-1)-(1/2)/(x+1)",
            stepByStepExplanation:
              "2x+1=A(x-1)(x+1)+Bx(x+1)+Cx(x-1). At x=0: 1=-A, so A=-1. At x=1: 3=2B, so B=3/2. At x=-1: -1=2C, so C=-1/2. Decomposition: -1/x + (3/2)/(x-1) - (1/2)/(x+1).",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Partial Fractions",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/PartialFractions.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 3: Techniques of Integration",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/3-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Partial fraction expansion",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-bc/bc-integration-new",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "partial-fraction-decomposition-repeated-and-quadratic-factors",
        lessonTitle: "Partial Fraction Decomposition: Repeated and Quadratic Factors",
        estimatedMinutes: 25,
        topicTag: "integrationTechniques",
        learningGoals: [
          "Decompose a rational expression with a repeated linear factor, using one term per power",
          "Decompose a rational expression with an irreducible quadratic factor, using a linear numerator",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Two setups that need extra unknowns",
            bodyText:
              "Distinct linear factors are the simplest case. Two other patterns need a different setup: a REPEATED linear factor, like (x-a)^2, needs a separate term for every power from 1 up to that repetition (A/(x-a) AND B/(x-a)^2, not just one), and an IRREDUCIBLE quadratic factor (one that doesn't factor over the reals, like x^2+1) needs a full linear expression, Bx+C, on top - not just a single constant.",
          },
          {
            blockType: "keyFormula",
            headingText: "The two setups",
            bodyText:
              "Repeated linear factor (x-a)^n: use A1/(x-a) + A2/(x-a)^2 + ... + An/(x-a)^n. Irreducible quadratic factor (ax^2+bx+c with no real roots): use (Bx+C)/(ax^2+bx+c) as that factor's term, never just a constant on top.",
            mathExpression:
              "\\dfrac{P(x)}{(x-a)^2}=\\dfrac{A}{x-a}+\\dfrac{B}{(x-a)^2}, \\qquad \\dfrac{P(x)}{x^2+1}\\ \\text{term: } \\dfrac{Bx+C}{x^2+1}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: repeated linear factor",
            bodyText:
              "Decompose (x+1)/(x-2)^2. Write x+1 = A(x-2) + B. Expand the right side: Ax - 2A + B. Match the coefficient of x: A=1. Match the constant term: -2A+B=1, so -2+B=1, giving B=3. The decomposition: 1/(x-2) + 3/(x-2)^2.",
            mathExpression: "\\dfrac{x+1}{(x-2)^2}=\\dfrac{1}{x-2}+\\dfrac{3}{(x-2)^2}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: irreducible quadratic factor",
            bodyText:
              "Decompose (2x^2+3)/[x(x^2+1)]. Write 2x^2+3 = A(x^2+1) + (Bx+C)x. Expand: (A+B)x^2 + Cx + A. Match coefficients: the constant term gives A=3; the x-coefficient gives C=0; the x^2-coefficient gives A+B=2, so B=2-3=-1. The decomposition: 3/x + (-x)/(x^2+1), or equivalently 3/x - x/(x^2+1).",
            mathExpression: "\\dfrac{2x^2+3}{x(x^2+1)}=\\dfrac{3}{x}-\\dfrac{x}{x^2+1}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Using only one term for a repeated factor (writing just B/(x-a)^2 and skipping A/(x-a)), or using only a constant numerator for an irreducible quadratic factor (just C/(x^2+1) instead of the full (Bx+C)/(x^2+1)). Both shortcuts throw away an unknown constant the decomposition actually needs, and the coefficient-matching equations won't have enough freedom to solve correctly.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u4-l2-p1",
            topicTag: "integrationTechniques",
            promptText: "Decompose into partial fractions.",
            promptMathExpression: "\\dfrac{3x-1}{(x+1)^2}",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "3/(x+1)-4/(x+1)^2",
            stepByStepExplanation:
              "3x-1=A(x+1)+B. Matching the x-coefficient: A=3. Matching the constant: A+B=-1, so B=-4. Decomposition: 3/(x+1) - 4/(x+1)^2.",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u4-l2-p2",
            topicTag: "integrationTechniques",
            promptText: "Decompose into partial fractions.",
            promptMathExpression: "\\dfrac{x^2+2x+3}{x^3+x}",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "3/x+(2-2x)/(x^2+1)",
            acceptableAnswerVariants: ["3/x-(2x-2)/(x^2+1)", "3/x+(-2x+2)/(x^2+1)"],
            stepByStepExplanation:
              "Factor the denominator: x^3+x=x(x^2+1). Write x^2+2x+3=A(x^2+1)+(Bx+C)x. Matching coefficients: constant term gives A=3; x-coefficient gives C=2; x^2-coefficient gives A+B=1, so B=-2. Decomposition: 3/x + (-2x+2)/(x^2+1).",
            difficultyLevel: 4,
          },
          {
            problemId: "c2-u4-l2-p3",
            topicTag: "integrationTechniques",
            promptText: "Decompose into partial fractions.",
            promptMathExpression: "\\dfrac{5}{(x-1)^2(x+2)}",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "-(5/9)/(x-1)+(5/3)/(x-1)^2+(5/9)/(x+2)",
            stepByStepExplanation:
              "5=A(x-1)(x+2)+B(x+2)+C(x-1)^2. At x=1: 5=3B, so B=5/3. At x=-2: 5=9C, so C=5/9. Matching the x^2-coefficient: 0=A+C, so A=-5/9. Decomposition: -(5/9)/(x-1) + (5/3)/(x-1)^2 + (5/9)/(x+2).",
            difficultyLevel: 5,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Partial Fractions",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/PartialFractions.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 3: Techniques of Integration",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/3-introduction",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "integrating-with-partial-fractions",
        lessonTitle: "Integrating with Partial Fractions",
        estimatedMinutes: 25,
        topicTag: "integrationTechniques",
        learningGoals: [
          "Integrate each type of partial fraction term: logarithmic, power-rule, and arctangent",
          "Recognize when polynomial long division must happen before decomposing",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Check the degrees before you decompose",
            bodyText:
              "Partial fraction decomposition only works directly on a PROPER rational expression - one where the numerator's degree is smaller than the denominator's. If the numerator's degree is equal to or larger, polynomial long division must happen first, turning the expression into a polynomial plus a proper remainder fraction. Only that remainder gets decomposed; the polynomial part integrates on its own with the ordinary power rule.",
          },
          {
            blockType: "keyFormula",
            headingText: "How each piece integrates",
            bodyText:
              "A/(x-a) integrates to A ln|x-a|. A/(x-a)^n for n>1 integrates using the power rule, giving A/[(1-n)(x-a)^(n-1)]. A term like Bx/(x^2+a^2) integrates to (B/2)ln(x^2+a^2) using u=x^2+a^2, while a constant term C/(x^2+a^2) integrates to (C/a)arctan(x/a).",
            mathExpression: "\\int \\dfrac{dx}{x^2+a^2}=\\dfrac{1}{a}\\arctan\\!\\left(\\dfrac{x}{a}\\right)+C",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: log terms only",
            bodyText:
              "Integrate (3x+5)/[(x-1)(x+2)] dx. Using the decomposition from the previous lesson, (8/3)/(x-1) + (1/3)/(x+2), integrate term by term: (8/3)ln|x-1| + (1/3)ln|x+2| + C.",
            mathExpression: "\\int \\dfrac{3x+5}{(x-1)(x+2)}\\,dx=\\dfrac{8}{3}\\ln|x-1|+\\dfrac{1}{3}\\ln|x+2|+C",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: long division first",
            bodyText:
              "Integrate (x^2+1)/(x-1) dx. The numerator's degree (2) is not smaller than the denominator's degree (1), so divide first: x^2+1 = (x-1)(x+1) + 2, so (x^2+1)/(x-1) = x+1 + 2/(x-1). Now integrate each piece: the integral of (x+1)dx is x^2/2+x, and the integral of 2/(x-1)dx is 2ln|x-1|. Combine: x^2/2 + x + 2ln|x-1| + C.",
            mathExpression: "\\int \\dfrac{x^2+1}{x-1}\\,dx=\\dfrac{x^2}{2}+x+2\\ln|x-1|+C",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Treating a term like (Bx+C)/(x^2+a^2) as a single integral instead of splitting it into two pieces - the Bx part becomes a logarithm (matching the derivative of the denominator), while the C part becomes an arctangent. Trying to integrate them together as one step almost always produces the wrong antiderivative.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u4-l3-p1",
            topicTag: "integrationTechniques",
            promptText: "Evaluate the integral.",
            promptMathExpression: "\\int \\dfrac{7x+3}{x^2-9}\\,dx",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "4ln|x-3|+3ln|x+3|+C",
            stepByStepExplanation:
              "Using the decomposition 4/(x-3)+3/(x+3), integrate term by term: 4ln|x-3| + 3ln|x+3| + C.",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u4-l3-p2",
            topicTag: "integrationTechniques",
            promptText: "Evaluate the integral.",
            promptMathExpression: "\\int \\dfrac{3x-1}{(x+1)^2}\\,dx",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "3ln|x+1|+4/(x+1)+C",
            stepByStepExplanation:
              "Using the decomposition 3/(x+1) - 4/(x+1)^2, the first term integrates to 3ln|x+1|. The second term integrates using the power rule: the integral of -4(x+1)^-2 dx is 4(x+1)^-1 = 4/(x+1). Combine: 3ln|x+1| + 4/(x+1) + C.",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u4-l3-p3",
            topicTag: "integrationTechniques",
            promptText: "Evaluate the integral.",
            promptMathExpression: "\\int \\dfrac{x+3}{x^2+4}\\,dx",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(1/2)ln(x^2+4)+(3/2)arctan(x/2)+C",
            stepByStepExplanation:
              "Split into two pieces: x/(x^2+4) and 3/(x^2+4). For the first, let u=x^2+4, du=2xdx, giving (1/2)ln(x^2+4). For the second, use the arctangent formula with a=2: 3*(1/2)arctan(x/2) = (3/2)arctan(x/2). Combine: (1/2)ln(x^2+4) + (3/2)arctan(x/2) + C.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Partial Fractions",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/PartialFractions.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 3: Techniques of Integration",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/3-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Partial fraction expansion",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-bc/bc-integration-new",
            resourceType: "interactivePractice",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "improper-integrals",
    unitTitle: "Improper Integrals",
    unitDescription: "Integrals with infinite bounds or discontinuous integrands, and convergence tests.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Improper Integrals",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc2-improper-integrals-quiz-p1",
          topicTag: "improperIntegrals",
          promptText: "Evaluate the improper integral, or state that it diverges.",
          promptMathExpression: "\\int_2^\\infty \\dfrac{1}{x^4}\\,dx",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "1/24",
          stepByStepExplanation:
            "lim as t approaches infinity of the integral of x^-4 dx from 2 to t = lim of [-1/(3x^3)] from 2 to t = lim of (-1/(3t^3)+1/24) = 1/24.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc2-improper-integrals-quiz-p2",
          topicTag: "improperIntegrals",
          promptText: "Evaluate the improper integral, or state that it diverges.",
          promptMathExpression: "\\int_0^\\infty e^{-2x}\\,dx",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "0.5",
          acceptableAnswerVariants: ["1/2"],
          stepByStepExplanation:
            "lim as t approaches infinity of [-e^(-2x)/2] from 0 to t = lim of (-e^(-2t)/2+1/2) = 0+1/2 = 1/2.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc2-improper-integrals-quiz-p3",
          topicTag: "improperIntegrals",
          promptText: "Evaluate the improper integral, or state that it diverges.",
          promptMathExpression: "\\int_0^1 \\dfrac{1}{x^{1/3}}\\,dx",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "3/2",
          stepByStepExplanation:
            "The integrand has a vertical asymptote at x=0. lim as t approaches 0 from the right of the integral of x^(-1/3)dx from t to 1 = lim of [(3/2)x^(2/3)] from t to 1 = lim of (3/2-(3/2)t^(2/3)) = 3/2.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc2-improper-integrals-quiz-p4",
          topicTag: "improperIntegrals",
          promptText: "Evaluate the improper integral, or state that it diverges.",
          promptMathExpression: "\\int_{-1}^2 \\dfrac{1}{(x-1)^2}\\,dx",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "diverges",
          acceptableAnswerVariants: ["does not converge", "dne", "infinity"],
          stepByStepExplanation:
            "The integrand has a vertical asymptote at the interior point x=1, so the integral must be split into two pieces there, and both must converge. Checking the right piece: lim as t approaches 1 from the right of the integral of (x-1)^-2 dx from t to 2 = lim of (-1+1/(t-1)), which grows without bound. Since this piece diverges, the whole integral diverges.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc2-improper-integrals-quiz-p5",
          topicTag: "improperIntegrals",
          promptText: "Does the integral of 1/(x^2+sqrt(x)) dx from 1 to infinity converge or diverge?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "converges",
          stepByStepExplanation:
            "For x>=1, x^2+sqrt(x) > x^2, so 1/(x^2+sqrt(x)) < 1/x^2. The integral of 1/x^2 dx from 1 to infinity converges (p=2>1). Since 0 < the integrand < a convergent function, the comparison test guarantees the original integral converges.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc2-improper-integrals-quiz-p6",
          topicTag: "improperIntegrals",
          promptText: "Does the integral of (2+cos x)/sqrt(x) dx from 1 to infinity converge or diverge?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "diverges",
          stepByStepExplanation:
            "Since cos x >= -1 always, 2+cos x >= 1, so (2+cos x)/sqrt(x) >= 1/sqrt(x). The integral of 1/sqrt(x) dx from 1 to infinity diverges (it's the p-integral with p=1/2<=1). Since the integrand is greater than or equal to a function whose integral diverges, the comparison test guarantees the original integral also diverges.",
          difficultyLevel: 4,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "improper-integrals-infinite-limits",
        lessonTitle: "Improper Integrals: Infinite Limits",
        estimatedMinutes: 25,
        topicTag: "improperIntegrals",
        learningGoals: [
          "Rewrite an integral with an infinite bound as a limit of a proper definite integral",
          "Determine whether such an integral converges or diverges",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Sneaking up on infinity",
            bodyText:
              "The definite integral, as originally defined, requires a finite interval. When one (or both) of the bounds is infinity, you can't just 'plug in infinity' - infinity isn't a number. Instead, replace the infinite bound with a variable, say t, evaluate the now-ordinary definite integral, and then take the limit as t approaches infinity. If that limit exists and is finite, the improper integral converges to that value; if the limit is infinite or doesn't exist, the integral diverges.",
          },
          {
            blockType: "keyFormula",
            headingText: "The definition",
            bodyText:
              "The integral of f(x)dx from a to infinity is defined as the limit as t approaches infinity of the integral of f(x)dx from a to t. Similarly for a lower bound of negative infinity. If both bounds are infinite, split the integral at any convenient point c and require BOTH resulting pieces to converge.",
            mathExpression: "\\int_a^\\infty f(x)\\,dx = \\lim_{t\\to\\infty}\\int_a^t f(x)\\,dx",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: a convergent case",
            bodyText:
              "Evaluate the integral of 1/x^2 dx from 1 to infinity. Rewrite as a limit: lim as t approaches infinity of the integral of x^-2 dx from 1 to t = lim of [-1/x] from 1 to t = lim of (-1/t + 1). As t grows without bound, -1/t approaches 0, so the limit is 1. The integral converges to 1.",
            mathExpression: "\\int_1^\\infty \\dfrac{1}{x^2}\\,dx = 1",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: a divergent case",
            bodyText:
              "Evaluate the integral of 1/x dx from 1 to infinity. Rewrite as a limit: lim as t approaches infinity of [ln x] from 1 to t = lim of (ln t - 0) = lim of ln t. As t grows without bound, ln t also grows without bound. The limit is infinite, so the integral diverges. Notice how close 1/x looks to 1/x^2, yet one converges and the other doesn't - the exponent matters enormously.",
            mathExpression: "\\int_1^\\infty \\dfrac{1}{x}\\,dx = \\infty \\ \\text{(diverges)}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Treating infinity as a number that can be plugged directly into the antiderivative - writing [-1/x] from 1 to infinity as -1/infinity+1 without ever setting up the formal limit. While that intuition is often right, skipping the limit step misses integrands (like 1/x) that DON'T shrink fast enough to converge; the limit is what actually decides convergence versus divergence, not a shortcut for it.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u5-l1-p1",
            topicTag: "improperIntegrals",
            promptText: "Evaluate the improper integral, or state that it diverges.",
            promptMathExpression: "\\int_1^\\infty \\dfrac{1}{x^3}\\,dx",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "1/2",
            stepByStepExplanation:
              "lim as t approaches infinity of the integral of x^-3 dx from 1 to t = lim of [-1/(2x^2)] from 1 to t = lim of (-1/(2t^2)+1/2) = 1/2.",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u5-l1-p2",
            topicTag: "improperIntegrals",
            promptText: "Evaluate the improper integral, or state that it diverges.",
            promptMathExpression: "\\int_0^\\infty e^{-x}\\,dx",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "1",
            stepByStepExplanation:
              "lim as t approaches infinity of [-e^-x] from 0 to t = lim of (-e^-t + 1) = 0+1=1.",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u5-l1-p3",
            topicTag: "improperIntegrals",
            promptText: "Evaluate the improper integral, or state that it diverges.",
            promptMathExpression: "\\int_{-\\infty}^0 e^{x}\\,dx",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "1",
            stepByStepExplanation:
              "lim as t approaches negative infinity of [e^x] from t to 0 = lim of (1-e^t). As t approaches negative infinity, e^t approaches 0, so the limit is 1.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Improper Integrals",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/ImproperIntegrals.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 3: Techniques of Integration",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/3-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Improper integrals",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-bc/bc-integration-new/bc-improper-integrals",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "improper-integrals-discontinuous-integrands",
        lessonTitle: "Improper Integrals: Discontinuous Integrands",
        estimatedMinutes: 20,
        topicTag: "improperIntegrals",
        learningGoals: [
          "Rewrite an integral with a discontinuity at or inside the interval as a limit",
          "Split an integral at an interior discontinuity into two separate improper integrals",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "The other way an integral can be 'improper'",
            bodyText:
              "An integral is also improper when the integrand itself blows up (has a vertical asymptote) somewhere on the interval of integration - not because a bound is infinite, but because the FUNCTION is unbounded. The fix follows the exact same idea as before: replace the troublesome point with a variable approaching it, and take a one-sided limit.",
          },
          {
            blockType: "keyFormula",
            headingText: "The definition",
            bodyText:
              "If f has a discontinuity at the upper bound b, the integral of f(x)dx from a to b is the limit as t approaches b from the left of the integral from a to t. If the discontinuity is at the lower bound a, use a limit approaching a from the right instead. If the discontinuity is at an interior point c strictly between a and b, split into two improper integrals at c, and BOTH pieces must converge for the whole integral to converge.",
            mathExpression: "\\int_a^b f(x)\\,dx = \\lim_{t\\to b^-}\\int_a^t f(x)\\,dx \\quad \\text{(discontinuity at } b\\text{)}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: a convergent case",
            bodyText:
              "Evaluate the integral of 1/sqrt(x) dx from 0 to 1. The integrand has a vertical asymptote at x=0, the lower bound. Rewrite: lim as t approaches 0 from the right of the integral of x^(-1/2)dx from t to 1 = lim of [2sqrt(x)] from t to 1 = lim of (2 - 2sqrt(t)). As t approaches 0, 2sqrt(t) approaches 0, so the limit is 2. The integral converges to 2, even though the integrand shoots up to infinity right at the edge of the interval.",
            mathExpression: "\\int_0^1 \\dfrac{1}{\\sqrt{x}}\\,dx = 2",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: a divergent case",
            bodyText:
              "Evaluate the integral of 1/x dx from 0 to 1. The discontinuity is again at x=0. Rewrite: lim as t approaches 0 from the right of [ln x] from t to 1 = lim of (0 - ln t). As t approaches 0 from the right, ln t approaches negative infinity, so 0 - ln t approaches positive infinity. The integral diverges.",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Not noticing a discontinuity hiding INSIDE the interval, rather than at an endpoint - for example integrating 1/(x-2)^2 from 0 to 3 straight through the vertical asymptote at x=2 as if it were an ordinary continuous integrand. Any discontinuity anywhere in [a,b], even in the interior, makes the integral improper and requires splitting it at that exact point into two separate one-sided limits.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u5-l2-p1",
            topicTag: "improperIntegrals",
            promptText: "Evaluate the improper integral, or state that it diverges.",
            promptMathExpression: "\\int_0^4 \\dfrac{1}{\\sqrt{4-x}}\\,dx",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "4",
            stepByStepExplanation:
              "The discontinuity is at x=4. lim as t approaches 4 from the left of the integral of (4-x)^(-1/2)dx from 0 to t = lim of [-2sqrt(4-x)] from 0 to t = lim of (-2sqrt(4-t)+4). As t approaches 4, sqrt(4-t) approaches 0, so the limit is 4.",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u5-l2-p2",
            topicTag: "improperIntegrals",
            promptText: "Evaluate the improper integral, or state that it diverges.",
            promptMathExpression: "\\int_1^2 \\dfrac{1}{(x-1)^2}\\,dx",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "diverges",
            acceptableAnswerVariants: ["does not converge", "dne", "infinity"],
            stepByStepExplanation:
              "The discontinuity is at x=1, the lower bound. lim as t approaches 1 from the right of [-1/(x-1)] from t to 2 = lim of (-1 + 1/(t-1)). As t approaches 1 from the right, (t-1) approaches 0 from the positive side, so 1/(t-1) grows without bound. The integral diverges.",
            difficultyLevel: 4,
          },
          {
            problemId: "c2-u5-l2-p3",
            topicTag: "improperIntegrals",
            promptText: "Evaluate the improper integral, or state that it diverges.",
            promptMathExpression: "\\int_{-1}^1 \\dfrac{1}{x^2}\\,dx",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "diverges",
            acceptableAnswerVariants: ["does not converge", "dne", "infinity"],
            stepByStepExplanation:
              "The discontinuity is at the interior point x=0, so the integral must be split into two pieces at 0, and both must converge. Checking just the right piece: lim as t approaches 0 from the right of the integral of x^-2dx from t to 1 = lim of (-1+1/t), which grows without bound. Since even one of the two pieces diverges, the whole integral diverges - it is NOT valid to ignore the asymptote and integrate straight across it.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Improper Integrals",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/ImproperIntegrals.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 3: Techniques of Integration",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/3-introduction",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "the-comparison-test-for-improper-integrals",
        lessonTitle: "The Comparison Test for Improper Integrals",
        estimatedMinutes: 20,
        topicTag: "improperIntegrals",
        learningGoals: [
          "Use the comparison test to determine convergence or divergence without finding an antiderivative",
          "Choose a comparison function that actually supports the conclusion being tested",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "When you don't need the exact value",
            bodyText:
              "Some integrands (like e^(-x^2)) don't have an elementary antiderivative at all, so evaluating them directly by the methods above is impossible. Often you don't actually need the exact value anyway - just whether the integral converges or diverges. The comparison test answers that by squeezing the integrand between (or against) a simpler function whose behavior is already known, like the p-integrals below.",
          },
          {
            blockType: "keyFormula",
            headingText: "The comparison test, and the key reference integral",
            bodyText:
              "If 0 <= f(x) <= g(x) for all x >= a, then: if the integral of g converges, the integral of f also converges (it's squeezed under something finite). If the integral of f diverges, the integral of g also diverges (it's forced to inherit the blow-up from underneath). The key reference family is the p-integral: the integral of 1/x^p dx from 1 to infinity converges when p>1 and diverges when p<=1 - this exact rule reappears, almost unchanged, as the p-series test in the next unit.",
            mathExpression: "\\int_1^\\infty \\dfrac{1}{x^p}\\,dx \\ \\text{converges} \\iff p>1",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: proving convergence",
            bodyText:
              "Determine whether the integral of e^(-x^2) dx from 1 to infinity converges. For x>=1, x^2>=x, so e^(-x^2) <= e^(-x) (a more negative exponent gives a smaller value). Since 0 <= e^(-x^2) <= e^(-x), and the integral of e^(-x) dx from 1 to infinity converges (to 1/e), the comparison test guarantees the integral of e^(-x^2) also converges - even though its exact value can't be written in elementary terms.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: proving divergence",
            bodyText:
              "Determine whether the integral of (2+cos x)/x dx from 1 to infinity converges. Since cos x >= -1 always, 2+cos x >= 1, so (2+cos x)/x >= 1/x for x>=1. The integral of 1/x dx from 1 to infinity diverges (it's the p-integral with p=1). Since the integrand is greater than or equal to a function whose integral diverges, the comparison test guarantees the original integral also diverges.",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Picking a comparison function that points the wrong direction for the conclusion being tested. To prove CONVERGENCE, you need a BIGGER function whose integral already converges (your smaller integrand is squeezed under it). To prove DIVERGENCE, you need a SMALLER function whose integral already diverges (your bigger integrand is forced to blow up too). Comparing to a smaller convergent function, or a bigger divergent one, proves nothing about the original integral either way.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u5-l3-p1",
            topicTag: "improperIntegrals",
            promptText: "Does the integral of 1/(x^3+1) dx from 1 to infinity converge or diverge?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "converges",
            stepByStepExplanation:
              "For x>=1, x^3+1 > x^3, so 1/(x^3+1) < 1/x^3. The integral of 1/x^3 dx from 1 to infinity converges (p=3>1). Since 0 < the integrand < a convergent function, the comparison test guarantees the original integral converges.",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u5-l3-p2",
            topicTag: "improperIntegrals",
            promptText: "Does the integral of 1/(x-1) dx from 2 to infinity converge or diverge?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "diverges",
            stepByStepExplanation:
              "For x>=2, x-1 < x, so 1/(x-1) > 1/x. The integral of 1/x dx from 2 to infinity diverges (p=1). Since the integrand is greater than a divergent function, the comparison test guarantees the original integral also diverges.",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u5-l3-p3",
            topicTag: "improperIntegrals",
            promptText: "Does the integral of (3+sin x)/x^2 dx from 1 to infinity converge or diverge?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "converges",
            stepByStepExplanation:
              "Since sin x <= 1 always, 3+sin x <= 4, so (3+sin x)/x^2 <= 4/x^2. The integral of 4/x^2 dx from 1 to infinity converges (p=2>1, and a constant multiple of a convergent integral still converges). Since 0 <= the integrand <= a convergent function, the comparison test guarantees the original integral converges.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Improper Integrals",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/ImproperIntegrals.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 3: Techniques of Integration",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/3-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Improper integrals",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-bc/bc-integration-new/bc-improper-integrals",
            resourceType: "interactivePractice",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "area-between-curves",
    unitTitle: "Applications of Integration: Area Between Curves",
    unitDescription: "Setting up and evaluating the area between two or more curves.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Applications of Integration: Area Between Curves",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc2-area-between-curves-quiz-p1",
          topicTag: "areaBetweenCurves",
          promptText: "For a region where f(x) is on top and g(x) is on the bottom over [a,b], the area between the curves is given by which integral?",
          answerFormat: "multipleChoice",
          choices: [
            "the integral from a to b of [f(x)-g(x)]dx",
            "the integral from a to b of [g(x)-f(x)]dx",
            "the integral from a to b of f(x)dx",
            "the integral from a to b of [f(x)+g(x)]dx",
          ],
          correctAnswer: "the integral from a to b of [f(x)-g(x)]dx",
          stepByStepExplanation:
            "On any vertical slice, the height of the region is (top function) minus (bottom function). Integrating that height across [a,b] gives the area: the integral from a to b of [f(x)-g(x)]dx.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc2-area-between-curves-quiz-p2",
          topicTag: "areaBetweenCurves",
          promptText: "Find the area of the region bounded by y=x^2 and y=4.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "32/3",
          stepByStepExplanation:
            "x^2=4 gives x=-2 and x=2. On (-2,2), the line y=4 is on top (test x=0: 4>0). Area = the integral from -2 to 2 of (4-x^2)dx = [4x-x^3/3] from -2 to 2 = (8-8/3)-(-8+8/3) = 16-16/3 = 32/3.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc2-area-between-curves-quiz-p3",
          topicTag: "areaBetweenCurves",
          promptText: "Find the area of the region bounded by y=4x and y=x^3, for x between 0 and 2.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "4",
          stepByStepExplanation:
            "4x=x^3 gives x(x^2-4)=0, so x=0, 2, -2. On (0,2), 4x is on top (test x=1: 4>1). Area = the integral from 0 to 2 of (4x-x^3)dx = [2x^2-x^4/4] from 0 to 2 = 8-4 = 4.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc2-area-between-curves-quiz-p4",
          topicTag: "areaBetweenCurves",
          promptText: "Find the area enclosed by x=y^2-2 and x=y (integrating with respect to y).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "9/2",
          stepByStepExplanation:
            "y^2-2=y gives y^2-y-2=0, which factors as (y-2)(y+1)=0, so y=-1 and y=2. Test y=0: the line gives x=0, the parabola gives x=-2, so the line is the right boundary. Area = the integral from -1 to 2 of [y-(y^2-2)]dy = the integral of (y-y^2+2)dy = [y^2/2-y^3/3+2y] from -1 to 2 = (10/3)-(-7/6) = 9/2.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc2-area-between-curves-quiz-p5",
          topicTag: "areaBetweenCurves",
          promptText: "Find the total area of the region(s) bounded by y=x^3-x and y=0, for x between -1 and 1.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "1/2",
          stepByStepExplanation:
            "The curve crosses y=0 at x=-1, 0, and 1. On [-1,0], x^3-x is on top of y=0 (test x=-0.5: 0.375>0); on [0,1], y=0 is on top of x^3-x (test x=0.5: -0.375<0). Area = the integral from -1 to 0 of (x^3-x)dx, plus the integral from 0 to 1 of (x-x^3)dx = 1/4+1/4 = 1/2.",
          difficultyLevel: 4,
        },
        {
          problemId: "calc2-area-between-curves-quiz-p6",
          topicTag: "areaBetweenCurves",
          promptText: "Find the area of the triangular region enclosed by y=3x, y=-2x+10, and y=0.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "15",
          stepByStepExplanation:
            "The lines cross where 3x=-2x+10, giving x=2, y=6. y=3x meets y=0 at x=0, and y=-2x+10 meets y=0 at x=5. Area = the integral from 0 to 2 of 3x dx, plus the integral from 2 to 5 of (-2x+10)dx = 6+9 = 15 (matching one-half times base 5 times height 6).",
          difficultyLevel: 4,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "area-between-two-curves-integrating-with-respect-to-x",
        lessonTitle: "Area Between Two Curves (Integrating with Respect to x)",
        estimatedMinutes: 25,
        topicTag: "areaBetweenCurves",
        learningGoals: [
          "Set up an area-between-curves integral as the top function minus the bottom function",
          "Find the bounds of integration by solving for the curves' intersection points",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "The first real use of a definite integral",
            bodyText:
              "Up to now, a definite integral has mostly meant 'area under one curve.' The area between two curves is the natural next step: on any tiny vertical slice, the height of the region is the top curve's y-value minus the bottom curve's y-value, and integrating that height across the interval adds up all those slices. Finding WHERE to start and stop integrating reuses a skill from the Algebra course directly: solving the system formed by setting the two curves equal to each other.",
          },
          {
            blockType: "keyFormula",
            headingText: "The area formula",
            bodyText:
              "If f(x) >= g(x) for all x on [a,b], the area between the curves is the integral from a to b of [f(x)-g(x)]dx. The bounds a and b are usually the x-coordinates where the two curves intersect, found by solving f(x)=g(x).",
            mathExpression: "A=\\int_a^b [f(x)-g(x)]\\,dx",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find the area between y=x^2 and y=x+2. Set them equal to find the bounds: x^2=x+2, so x^2-x-2=0, which factors as (x-2)(x+1)=0, giving x=-1 and x=2. Test a point in between, like x=0: the line gives 2, the parabola gives 0, so the line is on top. Area = the integral from -1 to 2 of [(x+2)-x^2]dx = [x^2/2+2x-x^3/3] from -1 to 2. At x=2: 2+4-8/3=10/3. At x=-1: 1/2-2+1/3=-7/6. The area is 10/3-(-7/6)=20/6+7/6=27/6=9/2.",
            mathExpression: "A=\\int_{-1}^2 \\big[(x+2)-x^2\\big]\\,dx=\\dfrac{9}{2}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Integrating (bottom minus top) instead of (top minus bottom), which produces a negative area - or skipping the step of testing a point between the intersection values to confirm which curve is actually on top. This matters especially when the two curves cross more than once, since which one is 'on top' can swap between different pairs of intersection points, requiring the integral to be split.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u6-l1-p1",
            topicTag: "areaBetweenCurves",
            promptText: "Find the area of the region bounded by y=x and y=x^2, between their intersection points.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "1/6",
            stepByStepExplanation:
              "x=x^2 gives x=0 or x=1. On (0,1), x >= x^2 (test x=0.5: 0.5 > 0.25). Area = the integral from 0 to 1 of (x-x^2)dx = [x^2/2-x^3/3] from 0 to 1 = 1/2-1/3=1/6.",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u6-l1-p2",
            topicTag: "areaBetweenCurves",
            promptText: "Find the area of the region bounded by y=8-x^2 and y=x^2.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "64/3",
            stepByStepExplanation:
              "8-x^2=x^2 gives x^2=4, so x=-2 and x=2. On (-2,2), 8-x^2 is on top (it equals 8 at x=0, versus 0). Area = the integral from -2 to 2 of (8-2x^2)dx = [8x-2x^3/3] from -2 to 2 = 32/3-(-32/3)=64/3.",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u6-l1-p3",
            topicTag: "areaBetweenCurves",
            promptText: "Find the total area of the region(s) bounded by y=x^3 and y=x on the interval [-1,1].",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "1/2",
            stepByStepExplanation:
              "The curves cross at x=-1, 0, and 1, swapping which one is on top. On [-1,0], x^3 is on top (test x=-0.5: -0.125 > -0.5); on [0,1], x is on top (test x=0.5: 0.5 > 0.125). Area = the integral from -1 to 0 of (x^3-x)dx plus the integral from 0 to 1 of (x-x^3)dx = 1/4 + 1/4 = 1/2.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Area Between Curves",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/AreaBetweenCurves.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 2: Applications of Integration",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/2-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Applications of integrals",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-bc/bc-integration-new",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "area-between-two-curves-integrating-with-respect-to-y",
        lessonTitle: "Area Between Two Curves (Integrating with Respect to y)",
        estimatedMinutes: 25,
        topicTag: "areaBetweenCurves",
        learningGoals: [
          "Recognize when a region is easier to describe as x=f(y) than y=f(x)",
          "Set up and evaluate an area integral as right function minus left function, with respect to y",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Rotate your thinking, not just the picture",
            bodyText:
              "Some regions - especially ones involving a sideways parabola like x=y^2, or ones where a single vertical slice would cross the same curve twice - are much easier to describe using horizontal slices instead. The idea is identical to before, just rotated ninety degrees: instead of top minus bottom with respect to x, it's right minus left with respect to y.",
          },
          {
            blockType: "keyFormula",
            headingText: "The area formula, with respect to y",
            bodyText:
              "If the right boundary is x=f(y) and the left boundary is x=g(y) for y between c and d, the area is the integral from c to d of [f(y)-g(y)]dy. The bounds c and d come from solving f(y)=g(y) for y.",
            mathExpression: "A=\\int_c^d [f(y)-g(y)]\\,dy",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find the area enclosed by x=y^2 and x=y+2. Set them equal: y^2=y+2, so y^2-y-2=0, which factors as (y-2)(y+1)=0, giving y=-1 and y=2. Test y=0: the line gives x=2, the parabola gives x=0, so the line is the right boundary. Area = the integral from -1 to 2 of [(y+2)-y^2]dy - the exact same integral shape as the x=x^2, y=x+2 example from the previous lesson, just with y in place of x - giving 9/2.",
            mathExpression: "A=\\int_{-1}^2 \\big[(y+2)-y^2\\big]\\,dy=\\dfrac{9}{2}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Trying to force a sideways-opening region (like the one bounded by x=y^2) into a 'y as a function of x' setup, which requires solving for two separate square-root branches (y=sqrt(x) and y=-sqrt(x)) and splitting the region into pieces. Integrating with respect to y from the start treats the whole region as ONE simple integral - right boundary minus left boundary - with no square roots and no splitting required.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u6-l2-p1",
            topicTag: "areaBetweenCurves",
            promptText: "Find the area of the region enclosed by x=y^2 and x=4.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "32/3",
            stepByStepExplanation:
              "y^2=4 gives y=-2 and y=2. The right boundary is the constant x=4, and the left boundary is x=y^2. Area = the integral from -2 to 2 of (4-y^2)dy = [4y-y^3/3] from -2 to 2. The antiderivative equals 16/3 at y=2 and -16/3 at y=-2, so the area is 16/3-(-16/3)=32/3.",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u6-l2-p2",
            topicTag: "areaBetweenCurves",
            promptText: "Find the total area of the region(s) enclosed by x=y and x=y^3 on the interval [-1,1].",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "1/2",
            stepByStepExplanation:
              "The curves cross at y=-1, 0, and 1. On [-1,0], x=y^3 is the right boundary (test y=-0.5: -0.125 > -0.5); on [0,1], x=y is the right boundary (test y=0.5: 0.5 > 0.125). Area = the integral from -1 to 0 of (y^3-y)dy plus the integral from 0 to 1 of (y-y^3)dy = 1/4+1/4=1/2.",
            difficultyLevel: 4,
          },
          {
            problemId: "c2-u6-l2-p3",
            topicTag: "areaBetweenCurves",
            promptText: "Find the area of the region enclosed by x=5-y^2 and x=y-1.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "125/6",
            stepByStepExplanation:
              "Set 5-y^2=y-1: y^2+y-6=0, which factors as (y+3)(y-2)=0, giving y=-3 and y=2. Test y=0: the parabola gives x=5, the line gives x=-1, so the parabola is the right boundary. Area = the integral from -3 to 2 of [(5-y^2)-(y-1)]dy = the integral of (6-y-y^2)dy = [6y-y^2/2-y^3/3] from -3 to 2 = 22/3-(-27/2) = 125/6.",
            difficultyLevel: 5,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Area Between Curves",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/AreaBetweenCurves.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 2: Applications of Integration",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/2-introduction",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "regions-bounded-by-more-than-two-curves",
        lessonTitle: "Regions Bounded by More Than Two Curves",
        estimatedMinutes: 20,
        topicTag: "areaBetweenCurves",
        learningGoals: [
          "Identify every point where the boundary of a region changes which function is on top",
          "Split the area integral into pieces at each such point and add the results",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "When 'top minus bottom' changes partway through",
            bodyText:
              "A region can be enclosed by three or more curves at once, which usually means the identity of the 'top' function (or the 'bottom,' or the 'right,' or the 'left') changes somewhere in the middle of the interval - not just at the two outer edges. The fix is mechanical once you see it: find every x-value (or y-value) where any two of the boundary curves cross, split the integral into one piece per sub-interval, and use whichever pair of functions is actually on top and bottom within that specific piece.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find the area of the triangular region enclosed by y=x, y=-x+6, and y=0. The two slanted lines intersect where x=-x+6, giving x=3, y=3. The line y=x meets y=0 at x=0, and y=-x+6 meets y=0 at x=6. So for x from 0 to 3, the top function is y=x; for x from 3 to 6, the top function switches to y=-x+6 - both with bottom y=0. Area = the integral from 0 to 3 of x dx, plus the integral from 3 to 6 of (-x+6)dx = 9/2 + 9/2 = 9 (matching the triangle-area formula, one-half times base 6 times height 3).",
            mathExpression: "A=\\int_0^3 x\\,dx+\\int_3^6(-x+6)\\,dx=9",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Trying to integrate across the WHOLE interval using a single 'top minus bottom' expression when the identity of the top (or bottom) function actually changes partway through. Every crossing point among the boundary curves needs to be located first - each one is a candidate spot where the integral must be split into a new piece with its own top and bottom before the pieces are added together.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u6-l3-p1",
            topicTag: "areaBetweenCurves",
            promptText: "Find the area of the triangular region enclosed by y=x, y=8-x, and y=0.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "16",
            stepByStepExplanation:
              "The lines cross at x=4, y=4. y=x meets y=0 at x=0, and y=8-x meets y=0 at x=8. Area = the integral from 0 to 4 of x dx, plus the integral from 4 to 8 of (8-x)dx = 8 + 8 = 16 (matching one-half times base 8 times height 4).",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u6-l3-p2",
            topicTag: "areaBetweenCurves",
            promptText: "Find the area of the triangular region enclosed by y=2x, y=-x+9, and y=0.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "27",
            stepByStepExplanation:
              "The lines cross at x=3, y=6. y=2x meets y=0 at x=0, and y=-x+9 meets y=0 at x=9. Area = the integral from 0 to 3 of 2x dx, plus the integral from 3 to 9 of (-x+9)dx = 9 + 18 = 27 (matching one-half times base 9 times height 6).",
            difficultyLevel: 4,
          },
          {
            problemId: "c2-u6-l3-p3",
            topicTag: "areaBetweenCurves",
            promptText:
              "Find the area of the region enclosed by y=x^2, y=(x-2)^2, and y=0, for x between 0 and 2.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "2/3",
            stepByStepExplanation:
              "The parabolas cross where x^2=(x-2)^2, giving x=1, y=1. For x in (0,1), the lower parabola (and hence the top of the enclosed region, above y=0) is x^2 (test x=0.5: 0.25 < 2.25); for x in (1,2), it's (x-2)^2 (test x=1.5: 0.25 < 2.25). Area = the integral from 0 to 1 of x^2 dx, plus the integral from 1 to 2 of (x-2)^2 dx = 1/3 + 1/3 = 2/3.",
            difficultyLevel: 5,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Area Between Curves",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/AreaBetweenCurves.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 2: Applications of Integration",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/2-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Applications of integrals",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-bc/bc-integration-new",
            resourceType: "interactivePractice",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "volumes-of-revolution",
    unitTitle: "Applications of Integration: Volumes",
    unitDescription: "Volumes of revolution using disks, washers, and cylindrical shells.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Applications of Integration: Volumes",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc2-volumes-of-revolution-quiz-p1",
          topicTag: "volumesOfRevolution",
          promptText: "The region under y=x^3, from x=0 to x=1, is revolved about the x-axis. Find the volume.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "pi/7",
          acceptableAnswerVariants: ["π/7"],
          stepByStepExplanation:
            "Disk method with radius x^3: V = pi times the integral from 0 to 1 of x^6 dx = pi[x^7/7] from 0 to 1 = pi/7.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc2-volumes-of-revolution-quiz-p2",
          topicTag: "volumesOfRevolution",
          promptText: "The region under y=3-x, from x=0 to x=3, is revolved about the y-axis. Find the volume.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "9pi",
          acceptableAnswerVariants: ["9π"],
          stepByStepExplanation:
            "Each shell has radius x and height (3-x). V = 2*pi times the integral from 0 to 3 of x(3-x)dx = 2*pi[3x^2/2-x^3/3] from 0 to 3 = 2*pi(13.5-9) = 2*pi(4.5) = 9pi.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc2-volumes-of-revolution-quiz-p3",
          topicTag: "volumesOfRevolution",
          promptText:
            "Which method avoids solving for an inverse function when a region under y=f(x) is revolved about the y-axis?",
          answerFormat: "multipleChoice",
          choices: ["The disk method", "The washer method", "Cylindrical shells", "The comparison test"],
          correctAnswer: "Cylindrical shells",
          stepByStepExplanation:
            "Cylindrical shells slice parallel to the axis of rotation, so a region already written as y=f(x) revolved about a vertical axis stays entirely in terms of x, with no need to invert the function.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc2-volumes-of-revolution-quiz-p4",
          topicTag: "volumesOfRevolution",
          promptText:
            "The region between y=x+2 and y=x^2 is revolved about the x-axis. Find the volume.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "72pi/5",
          acceptableAnswerVariants: ["72π/5"],
          stepByStepExplanation:
            "The curves meet where x+2=x^2, giving x=-1 and x=2, with the line on top (test x=0: 2>0). Outer radius R=x+2, inner radius r=x^2. V = pi times the integral from -1 to 2 of [(x+2)^2-x^4]dx = pi[x^3/3+2x^2+4x-x^5/5] from -1 to 2 = pi(184/15-(-32/15)) = pi(216/15) = 72pi/5.",
          difficultyLevel: 4,
        },
        {
          problemId: "calc2-volumes-of-revolution-quiz-p5",
          topicTag: "volumesOfRevolution",
          promptText:
            "The region between y=sqrt(x) and y=x^2, for x from 0 to 1, is revolved about the y-axis. Find the volume.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "3pi/10",
          acceptableAnswerVariants: ["3π/10"],
          stepByStepExplanation:
            "On (0,1), sqrt(x) >= x^2 (test x=0.5: 0.707>0.25). Each shell has radius x and height (sqrt(x)-x^2). V = 2*pi times the integral from 0 to 1 of x(sqrt(x)-x^2)dx = 2*pi times the integral of (x^(3/2)-x^3)dx = 2*pi[(2/5)x^(5/2)-x^4/4] from 0 to 1 = 2*pi(2/5-1/4) = 2*pi(3/20) = 3pi/10.",
          difficultyLevel: 4,
        },
        {
          problemId: "calc2-volumes-of-revolution-quiz-p6",
          topicTag: "volumesOfRevolution",
          promptText:
            "The region bounded by y=x^2 and y=4 is revolved about the vertical line x=3. Use shells (radius = 3-x) to find the volume.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "64pi",
          acceptableAnswerVariants: ["64π"],
          stepByStepExplanation:
            "The curves meet at x=-2 and x=2. Each shell has radius (3-x) and height (4-x^2). V = 2*pi times the integral from -2 to 2 of (3-x)(4-x^2)dx = 2*pi times the integral of (12-3x^2-4x+x^3)dx. The odd terms (-4x and x^3) integrate to 0 over the symmetric interval, leaving 2*pi times the integral of (12-3x^2)dx from -2 to 2 = 2*pi[12x-x^3] from -2 to 2 = 2*pi(32) = 64pi.",
          difficultyLevel: 5,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "volumes-by-disks-and-washers",
        lessonTitle: "Volumes by Disks and Washers",
        estimatedMinutes: 30,
        topicTag: "volumesOfRevolution",
        learningGoals: [
          "Set up a volume-of-revolution integral using the disk method for a solid, single-boundary region",
          "Set up a volume-of-revolution integral using the washer method when the region has a hole",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Where the geometry formulas from before finally get used",
            bodyText:
              "Revolving a flat region around an axis sweeps out a three-dimensional solid. Slice that solid perpendicular to the axis into thin coins: if the region touches the axis directly, each coin is a solid disk; if the region is separated from the axis by a gap, each coin has a hole punched through it - a washer. Either way, the area-of-a-circle formula from Geometry Essentials gives the cross-sectional area, and integrating that area along the axis adds up all the coins into a total volume.",
          },
          {
            blockType: "keyFormula",
            headingText: "The disk and washer formulas",
            bodyText:
              "Disk method (region touches the axis): V = pi times the integral from a to b of [f(x)]^2 dx, where f(x) is the radius at each x. Washer method (region is separated from the axis by a gap): V = pi times the integral from a to b of ([R(x)]^2 - [r(x)]^2) dx, where R is the outer radius and r is the inner radius.",
            mathExpression: "V=\\pi\\int_a^b [f(x)]^2\\,dx \\qquad V=\\pi\\int_a^b \\big([R(x)]^2-[r(x)]^2\\big)\\,dx",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: disk method",
            bodyText:
              "The region under y=sqrt(x), from x=0 to x=4, is revolved about the x-axis. Since the region touches the axis, use disks with radius f(x)=sqrt(x). V = pi times the integral from 0 to 4 of x dx = pi[x^2/2] from 0 to 4 = pi(8) = 8pi.",
            mathExpression: "V=\\pi\\int_0^4 x\\,dx = 8\\pi",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: washer method",
            bodyText:
              "The region between y=x and y=x^2, for x from 0 to 1, is revolved about the x-axis. On this interval x >= x^2, so the outer radius is R=x and the inner radius (the hole left by the gap between the region and the axis) is r=x^2. V = pi times the integral from 0 to 1 of (x^2-x^4)dx = pi[x^3/3-x^5/5] from 0 to 1 = pi(1/3-1/5) = 2pi/15.",
            mathExpression: "V=\\pi\\int_0^1 (x^2-x^4)\\,dx=\\dfrac{2\\pi}{15}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Forgetting to square BOTH radii separately before subtracting in the washer method - writing pi times the integral of (R-r)^2 dx instead of the integral of (R^2-r^2)dx. These are not the same expression algebraically, and using the wrong one produces an incorrect volume almost every time.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u7-l1-p1",
            topicTag: "volumesOfRevolution",
            promptText: "The region under y=x^2, from x=0 to x=2, is revolved about the x-axis. Find the volume.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "32pi/5",
            acceptableAnswerVariants: ["32π/5"],
            stepByStepExplanation:
              "Disk method with radius x^2: V = pi times the integral from 0 to 2 of x^4 dx = pi[x^5/5] from 0 to 2 = 32pi/5.",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u7-l1-p2",
            topicTag: "volumesOfRevolution",
            promptText: "The region between y=sqrt(x) and y=x, for x from 0 to 1, is revolved about the x-axis. Find the volume.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "pi/6",
            acceptableAnswerVariants: ["π/6"],
            stepByStepExplanation:
              "On (0,1), sqrt(x) >= x, so the outer radius is sqrt(x) and the inner radius is x. V = pi times the integral from 0 to 1 of (x-x^2)dx = pi[x^2/2-x^3/3] from 0 to 1 = pi(1/6) = pi/6.",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u7-l1-p3",
            topicTag: "volumesOfRevolution",
            promptText: "The region under y=4-x^2, from x=-2 to x=2, is revolved about the x-axis. Find the volume.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "512pi/15",
            acceptableAnswerVariants: ["512π/15"],
            stepByStepExplanation:
              "Disk method with radius 4-x^2: V = pi times the integral from -2 to 2 of (4-x^2)^2 dx = pi times the integral of (16-8x^2+x^4)dx = pi[16x-8x^3/3+x^5/5] from -2 to 2 = pi(256/15-(-256/15)) = 512pi/15.",
            difficultyLevel: 5,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Volumes of Solids of Revolution / Method of Rings",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/VolumeWithRings.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 2: Applications of Integration",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/2-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Applications of integrals (volume)",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-bc/bc-integration-new",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "volumes-by-cylindrical-shells",
        lessonTitle: "Volumes by Cylindrical Shells",
        estimatedMinutes: 30,
        topicTag: "volumesOfRevolution",
        learningGoals: [
          "Set up a volume-of-revolution integral using the cylindrical shell method",
          "Identify the radius and height correctly for a shell integral around a vertical axis",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Slicing parallel to the axis instead of perpendicular to it",
            bodyText:
              "Disks and washers slice the solid perpendicular to the axis of rotation. Cylindrical shells do the opposite: they slice PARALLEL to the axis, treating the solid as a nested stack of paper-thin cylindrical tubes, like layers of an onion. This is especially useful when revolving a y=f(x) region around a VERTICAL axis, since it avoids ever having to solve the function for x in terms of y.",
          },
          {
            blockType: "keyFormula",
            headingText: "The shell formula",
            bodyText:
              "For a region described by y=f(x) revolved about the y-axis, each shell has circumference 2*pi*(radius) and height f(x), giving a volume of V = 2*pi times the integral from a to b of x*f(x) dx. In general, a shell's volume element is 2*pi*(radius)*(height)*(thickness) - the radius is the distance from the axis of rotation to the strip, and the height is the vertical extent of the region at that strip.",
            mathExpression: "V=2\\pi\\int_a^b x\\,f(x)\\,dx",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: single boundary",
            bodyText:
              "The region under y=x^2, from x=0 to x=2, is revolved about the y-axis. Each shell has radius x and height x^2. V = 2*pi times the integral from 0 to 2 of x*x^2 dx = 2*pi times the integral of x^3 dx = 2*pi[x^4/4] from 0 to 2 = 2*pi(4) = 8pi.",
            mathExpression: "V=2\\pi\\int_0^2 x^3\\,dx = 8\\pi",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: region between two curves",
            bodyText:
              "The region between y=x and y=x^2, for x from 0 to 1, is revolved about the y-axis. Each shell has radius x and height (x-x^2), the top curve minus the bottom curve at that x. V = 2*pi times the integral from 0 to 1 of x(x-x^2)dx = 2*pi times the integral of (x^2-x^3)dx = 2*pi[x^3/3-x^4/4] from 0 to 1 = 2*pi(1/12) = pi/6.",
            mathExpression: "V=2\\pi\\int_0^1 (x^2-x^3)\\,dx=\\dfrac{\\pi}{6}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Mixing up radius and height when revolving around the y-axis - the radius is always the horizontal distance x from the axis, and the height is always the vertical extent of the region (top curve minus bottom curve) at that x, never the reverse. Also common: forgetting the factor of 2*pi entirely, which accounts for the full circumference each shell sweeps through as it revolves.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u7-l2-p1",
            topicTag: "volumesOfRevolution",
            promptText: "The region under y=x^3, from x=0 to x=1, is revolved about the y-axis. Find the volume.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "2pi/5",
            acceptableAnswerVariants: ["2π/5"],
            stepByStepExplanation:
              "Each shell has radius x and height x^3. V = 2*pi times the integral from 0 to 1 of x^4 dx = 2*pi[x^5/5] from 0 to 1 = 2pi/5.",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u7-l2-p2",
            topicTag: "volumesOfRevolution",
            promptText: "The region under y=4-x^2, from x=0 to x=2, is revolved about the y-axis. Find the volume.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "8pi",
            acceptableAnswerVariants: ["8π"],
            stepByStepExplanation:
              "Each shell has radius x and height 4-x^2. V = 2*pi times the integral from 0 to 2 of x(4-x^2)dx = 2*pi times the integral of (4x-x^3)dx = 2*pi[2x^2-x^4/4] from 0 to 2 = 2*pi(4) = 8pi.",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u7-l2-p3",
            topicTag: "volumesOfRevolution",
            promptText:
              "The region between y=sqrt(x) and y=x, for x from 0 to 1, is revolved about the y-axis. Find the volume.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "2pi/15",
            acceptableAnswerVariants: ["2π/15"],
            stepByStepExplanation:
              "Each shell has radius x and height (sqrt(x)-x). V = 2*pi times the integral from 0 to 1 of x(sqrt(x)-x)dx = 2*pi times the integral of (x^(3/2)-x^2)dx = 2*pi[(2/5)x^(5/2)-x^3/3] from 0 to 1 = 2*pi(2/5-1/3) = 2*pi(1/15) = 2pi/15.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Volumes of Solids of Revolution / Method of Cylinders",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/VolumeWithCylinders.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 2: Applications of Integration",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/2-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.01 Single Variable Calculus",
            resourceUrl: "https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "choosing-a-method",
        lessonTitle: "Choosing a Method",
        estimatedMinutes: 20,
        topicTag: "volumesOfRevolution",
        learningGoals: [
          "Decide between disks/washers and shells based on the axis of rotation and how the region is described",
          "Verify a volume by computing it a second way with the other method",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "The real decision-making rule",
            bodyText:
              "Both methods can technically solve almost any volume-of-revolution problem - the real skill is picking whichever one avoids unnecessary algebra. If the region is described as y=f(x) and revolved around a HORIZONTAL axis, disks/washers usually stay in terms of x directly. If that same region is revolved around a VERTICAL axis instead, shells usually stay in terms of x directly, while disks/washers would force you to solve the function for x in terms of y first. The general rule: pick the method that slices in the same variable the function is already written in.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: solving it two ways to double-check",
            bodyText:
              "The region bounded by y=x^2 and y=4 (for x >= 0) is revolved about the y-axis. With shells: radius=x, height=(4-x^2), and x runs from 0 to 2 (where x^2=4). V = 2*pi times the integral from 0 to 2 of x(4-x^2)dx = 8pi. With disks instead (integrating with respect to y, since the region touches the y-axis directly): radius = sqrt(y), and y runs from 0 to 4. V = pi times the integral from 0 to 4 of y dy = pi[y^2/2] from 0 to 4 = 8pi. Both methods agree - a useful way to catch a setup mistake is to try the 'other' method as a check when time allows.",
            mathExpression: "V=2\\pi\\int_0^2 x(4-x^2)\\,dx = \\pi\\int_0^4 y\\,dy = 8\\pi",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Automatically defaulting to disks/washers out of habit, even when the axis of rotation doesn't match the variable the function is naturally written in - forcing an unnecessary inverse-function step. Before setting up any volume integral, identify the axis of rotation first, then ask whether slicing perpendicular to it (disks/washers) or parallel to it (shells) keeps the setup in the original variable.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u7-l3-p1",
            topicTag: "volumesOfRevolution",
            promptText:
              "The region under y=sqrt(x), from x=0 to x=4, is revolved about the x-axis. Find the volume using the more natural method.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "8pi",
            acceptableAnswerVariants: ["8π"],
            stepByStepExplanation:
              "The axis is horizontal (the x-axis) and the function is already y=f(x), so disks are natural: V = pi times the integral from 0 to 4 of x dx = pi[x^2/2] from 0 to 4 = 8pi.",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u7-l3-p2",
            topicTag: "volumesOfRevolution",
            promptText:
              "The region under y=x, from x=0 to x=3, is revolved about the y-axis. Find the volume using the method that avoids solving for an inverse function.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "18pi",
            acceptableAnswerVariants: ["18π"],
            stepByStepExplanation:
              "The axis is vertical (the y-axis) and the function is y=f(x), so shells avoid inverting the function: radius=x, height=x. V = 2*pi times the integral from 0 to 3 of x^2 dx = 2*pi[x^3/3] from 0 to 3 = 2*pi(9) = 18pi.",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u7-l3-p3",
            topicTag: "volumesOfRevolution",
            promptText:
              "The region bounded by y=x and y=x^2 is revolved about the vertical line x=2. Use shells (radius = 2-x) to find the volume.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "pi/2",
            acceptableAnswerVariants: ["π/2"],
            stepByStepExplanation:
              "The curves meet at x=0 and x=1, with x on top of x^2 there. Each shell has radius (2-x) (distance from the strip to the axis x=2) and height (x-x^2). V = 2*pi times the integral from 0 to 1 of (2-x)(x-x^2)dx = 2*pi times the integral of (2x-3x^2+x^3)dx = 2*pi[x^2-x^3+x^4/4] from 0 to 1 = 2*pi(1/4) = pi/2.",
            difficultyLevel: 5,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Volumes of Solids of Revolution / Method of Rings",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/VolumeWithRings.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Paul's Online Math Notes: Volumes of Solids of Revolution / Method of Cylinders",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/VolumeWithCylinders.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Applications of integrals (volume)",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-bc/bc-integration-new",
            resourceType: "interactivePractice",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "arc-length-and-surface-area",
    unitTitle: "Applications of Integration: Arc Length and Surface Area",
    unitDescription: "Arc length of a curve and surface area of a solid of revolution.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Applications of Integration: Arc Length and Surface Area",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc2-arc-length-and-surface-area-quiz-p1",
          topicTag: "arcLengthAndSurfaceArea",
          promptText: "Find the arc length of the line y=2x-1 from x=0 to x=3.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "3sqrt(5)",
          acceptableAnswerVariants: ["3√5", "3*sqrt(5)"],
          stepByStepExplanation:
            "f'(x)=2, so the integrand is sqrt(1+4)=sqrt(5), a constant. L = the integral from 0 to 3 of sqrt(5)dx = 3sqrt(5).",
          difficultyLevel: 2,
        },
        {
          problemId: "calc2-arc-length-and-surface-area-quiz-p2",
          topicTag: "arcLengthAndSurfaceArea",
          promptText: "Which integral gives the arc length of y=x^2 from x=0 to x=1?",
          answerFormat: "multipleChoice",
          choices: [
            "the integral from 0 to 1 of sqrt(1+4x^2)dx",
            "the integral from 0 to 1 of sqrt(1+2x)dx",
            "the integral from 0 to 1 of sqrt(1+x^4)dx",
            "the integral from 0 to 1 of (1+2x)dx",
          ],
          correctAnswer: "the integral from 0 to 1 of sqrt(1+4x^2)dx",
          stepByStepExplanation:
            "The arc length formula is the integral of sqrt(1+[f'(x)]^2)dx. Here f'(x)=2x, so [f'(x)]^2=4x^2, giving sqrt(1+4x^2).",
          difficultyLevel: 3,
        },
        {
          problemId: "calc2-arc-length-and-surface-area-quiz-p3",
          topicTag: "arcLengthAndSurfaceArea",
          promptText: "Find the arc length of y = x^3/6 + 1/(2x) from x=1 to x=2.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "17/12",
          stepByStepExplanation:
            "f'(x)=x^2/2-1/(2x^2). Squaring gives x^4/4-1/2+1/(4x^4), so 1+[f'(x)]^2 = x^4/4+1/2+1/(4x^4), a perfect square: (x^2/2+1/(2x^2))^2. The integrand simplifies to x^2/2+1/(2x^2) (positive on [1,2]). L = the integral from 1 to 2 of (x^2/2+1/(2x^2))dx = [x^3/6-1/(2x)] from 1 to 2 = 13/12-(-4/12) = 17/12.",
          difficultyLevel: 4,
        },
        {
          problemId: "calc2-arc-length-and-surface-area-quiz-p4",
          topicTag: "arcLengthAndSurfaceArea",
          promptText: "Find the surface area generated by revolving y=2x, from x=0 to x=3, about the x-axis.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "18sqrt(5)pi",
          acceptableAnswerVariants: ["18√5π", "18pi*sqrt(5)"],
          stepByStepExplanation:
            "f'(x)=2, so sqrt(1+4)=sqrt(5), a constant. S = 2*pi times the integral from 0 to 3 of 2x*sqrt(5) dx = 2*pi*sqrt(5)*[x^2] from 0 to 3 = 2*pi*sqrt(5)*9 = 18sqrt(5)*pi. This matches the cone formula pi*r*l with r=6, l=sqrt(3^2+6^2)=3sqrt(5): pi(6)(3sqrt(5))=18sqrt(5)pi.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc2-arc-length-and-surface-area-quiz-p5",
          topicTag: "arcLengthAndSurfaceArea",
          promptText: "Find the surface area generated by revolving y=2sqrt(x), from x=0 to x=2, about the x-axis.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "(8pi/3)(3sqrt(3)-1)",
          stepByStepExplanation:
            "f'(x)=1/sqrt(x), so 1+[f'(x)]^2=(x+1)/x, and f(x)*sqrt(1+[f'(x)]^2)=2sqrt(x)*sqrt((x+1)/x)=2sqrt(x+1). S = 2*pi times the integral from 0 to 2 of 2sqrt(x+1)dx = 4*pi times the integral of sqrt(x+1)dx = 4*pi*(2/3)(x+1)^(3/2) evaluated from 0 to 2 = (8pi/3)[3^(3/2)-1] = (8pi/3)(3sqrt(3)-1).",
          difficultyLevel: 5,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "arc-length",
        lessonTitle: "Arc Length",
        estimatedMinutes: 25,
        topicTag: "arcLengthAndSurfaceArea",
        learningGoals: [
          "Derive and apply the arc length formula for a curve y=f(x)",
          "Recognize that arc length integrals often need earlier integration techniques to evaluate",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Adding up infinitely many tiny straight lines",
            bodyText:
              "This is the first place in the course where integrating produces a square-root expression built directly from a derivative - a shape that will reappear constantly in Calculus III. The idea: approximate the curve with a chain of tiny straight segments. Each segment's length comes straight from the Pythagorean theorem - horizontal leg dx, vertical leg dy - and as the segments shrink to zero width, the sum of their lengths becomes an integral.",
          },
          {
            blockType: "keyFormula",
            headingText: "The arc length formula",
            bodyText:
              "For a curve y=f(x) on [a,b], the arc length is the integral from a to b of the square root of (1+[f'(x)]^2) dx. Notice it's the derivative that gets squared and added to 1 under the root - not f(x) itself.",
            mathExpression: "L=\\int_a^b \\sqrt{1+[f'(x)]^2}\\,dx",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find the arc length of y=(2/3)x^(3/2) from x=0 to x=3. First, f'(x)=x^(1/2), so [f'(x)]^2=x. The integrand becomes sqrt(1+x). L = the integral from 0 to 3 of sqrt(1+x)dx = [(2/3)(1+x)^(3/2)] from 0 to 3 = (2/3)[4^(3/2)-1^(3/2)] = (2/3)(8-1) = 14/3.",
            mathExpression: "L=\\int_0^3\\sqrt{1+x}\\,dx=\\dfrac{14}{3}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Plugging f(x) itself into the arc length formula instead of differentiating first - the formula needs f'(x), not f(x). A second common mistake is giving up the moment the resulting square root looks unfamiliar; arc length integrals are exactly why trigonometric substitution and the other techniques from earlier in this course exist, and many of them require one of those tools (or, as in the examples here, a clever algebraic simplification) to finish.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u8-l1-p1",
            topicTag: "arcLengthAndSurfaceArea",
            promptText: "Find the arc length of the line y=3x+2 from x=0 to x=2.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "2sqrt(10)",
            acceptableAnswerVariants: ["2√10", "2*sqrt(10)"],
            stepByStepExplanation:
              "f'(x)=3, so the integrand is sqrt(1+9)=sqrt(10), a constant. L = the integral from 0 to 2 of sqrt(10)dx = 2sqrt(10). This matches the straight-line distance formula between (0,2) and (2,8): sqrt(2^2+6^2)=sqrt(40)=2sqrt(10).",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u8-l1-p2",
            topicTag: "arcLengthAndSurfaceArea",
            promptText: "Find the arc length of y=(2/3)x^(3/2) from x=0 to x=8.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "52/3",
            stepByStepExplanation:
              "f'(x)=x^(1/2), so [f'(x)]^2=x, and the integrand is sqrt(1+x). L = the integral from 0 to 8 of sqrt(1+x)dx = [(2/3)(1+x)^(3/2)] from 0 to 8 = (2/3)[9^(3/2)-1] = (2/3)(26) = 52/3.",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u8-l1-p3",
            topicTag: "arcLengthAndSurfaceArea",
            promptText: "Find the arc length of y = x^4/4 + 1/(8x^2) from x=1 to x=2.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "123/32",
            stepByStepExplanation:
              "f'(x)=x^3-1/(4x^3). Squaring gives x^6-1/2+1/(16x^6), so 1+[f'(x)]^2 = x^6+1/2+1/(16x^6), which is a perfect square: (x^3+1/(4x^3))^2. So the integrand simplifies to x^3+1/(4x^3) (positive on [1,2]). L = the integral from 1 to 2 of (x^3+1/(4x^3))dx = [x^4/4-1/(8x^2)] from 1 to 2 = 127/32 - 1/8 = 123/32.",
            difficultyLevel: 5,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Arc Length",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/ArcLength.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 2: Applications of Integration",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/2-introduction",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "surface-area-of-revolution",
        lessonTitle: "Surface Area of Revolution",
        estimatedMinutes: 25,
        topicTag: "arcLengthAndSurfaceArea",
        learningGoals: [
          "Set up and evaluate the surface area of a solid formed by revolving a curve",
          "Verify a surface-area integral against the known lateral surface area formula for a cone",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Arc length plus a radius",
            bodyText:
              "Surface area of revolution builds directly on arc length: instead of just adding up the lengths of tiny curve segments, each tiny segment sweeps out a thin ring as it revolves, and that ring's area depends on both its (arc) length and how far it is from the axis of rotation (its radius). The arc-length integrand reappears here unchanged, just multiplied by that radius and by 2*pi for the full revolution.",
          },
          {
            blockType: "keyFormula",
            headingText: "The surface area formula",
            bodyText:
              "For y=f(x) revolved about the x-axis on [a,b], the surface area is S = 2*pi times the integral from a to b of f(x) times sqrt(1+[f'(x)]^2) dx - the radius at each point is f(x) itself, the distance from the curve to the x-axis.",
            mathExpression: "S=2\\pi\\int_a^b f(x)\\sqrt{1+[f'(x)]^2}\\,dx",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: checking against a known cone",
            bodyText:
              "Revolve y=(3/4)x, from x=0 to x=4, about the x-axis. This sweeps out a cone with base radius 3 (the value of y at x=4) and height 4, so its slant height should be sqrt(3^2+4^2)=5. Using the formula: f'(x)=3/4, so sqrt(1+9/16)=sqrt(25/16)=5/4. S = 2*pi times the integral from 0 to 4 of (3/4)x*(5/4)dx = 2*pi*(15/16) times the integral of x dx = 2*pi*(15/16)*8 = 15*pi. This matches the standard cone lateral-surface-area formula, pi*r*l = pi(3)(5) = 15*pi exactly.",
            mathExpression: "S=2\\pi\\int_0^4 \\dfrac{15}{16}x\\,dx=15\\pi",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Forgetting to multiply by the radius entirely - using just the arc-length integrand sqrt(1+[f'(x)]^2) by itself, which computes a LENGTH, not an area. The surface-area integrand always needs that arc-length piece multiplied by the radius swept out at each point (f(x) if revolving about the x-axis, or x if revolving about the y-axis), plus the 2*pi out front.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u8-l2-p1",
            topicTag: "arcLengthAndSurfaceArea",
            promptText: "Find the surface area generated by revolving y=x, from x=0 to x=5, about the x-axis.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "25sqrt(2)pi",
            acceptableAnswerVariants: ["25√2π", "25pi*sqrt(2)"],
            stepByStepExplanation:
              "f'(x)=1, so sqrt(1+1)=sqrt(2), a constant. S = 2*pi times the integral from 0 to 5 of x*sqrt(2) dx = 2*pi*sqrt(2)*[x^2/2] from 0 to 5 = 2*pi*sqrt(2)*(12.5) = 25sqrt(2)*pi. This matches the cone formula pi*r*l with r=5, l=5sqrt(2): pi(5)(5sqrt(2))=25sqrt(2)pi.",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u8-l2-p2",
            topicTag: "arcLengthAndSurfaceArea",
            promptText: "Find the surface area generated by revolving y=(4/3)x, from x=0 to x=3, about the x-axis.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "20pi",
            acceptableAnswerVariants: ["20π"],
            stepByStepExplanation:
              "f'(x)=4/3, so sqrt(1+16/9)=sqrt(25/9)=5/3. S = 2*pi times the integral from 0 to 3 of (4/3)x*(5/3)dx = 2*pi*(20/9) times the integral of x dx = 2*pi*(20/9)*(9/2) = 20pi. This matches the cone formula with r=4, l=5: pi(4)(5)=20pi.",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u8-l2-p3",
            topicTag: "arcLengthAndSurfaceArea",
            promptText: "Find the surface area generated by revolving y=2sqrt(x), from x=0 to x=1, about the x-axis.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(8pi/3)(2sqrt(2)-1)",
            stepByStepExplanation:
              "f'(x)=1/sqrt(x), so 1+[f'(x)]^2=(x+1)/x, and f(x)*sqrt(1+[f'(x)]^2)=2sqrt(x)*sqrt(x+1)/sqrt(x)=2sqrt(x+1). S = 2*pi times the integral from 0 to 1 of 2sqrt(x+1)dx = 4*pi times the integral of sqrt(x+1)dx = 4*pi*(2/3)(x+1)^(3/2) evaluated from 0 to 1 = (8pi/3)[2^(3/2)-1] = (8pi/3)(2sqrt(2)-1).",
            difficultyLevel: 5,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Surface Area with Parametric Equations (and Arc Length chapter)",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/SurfaceArea.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 2: Applications of Integration",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/2-introduction",
            resourceType: "textbookChapter",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "work-and-physical-applications",
    unitTitle: "Applications of Integration: Work and Other Physical Applications",
    unitDescription: "Work problems (springs, pumping liquid) and an introduction to center of mass.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Applications of Integration: Work and Other Physical Applications",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc2-work-and-physical-applications-quiz-p1",
          topicTag: "workAndPhysicalApplications",
          promptText:
            "A force of 12 N stretches a spring 0.3 m beyond its natural length. Find the work done stretching the spring from its natural length to 0.5 m beyond natural length.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "5",
          stepByStepExplanation:
            "12=k(0.3), so k=40 N/m. W = the integral from 0 to 0.5 of 40x dx = 40[x^2/2] from 0 to 0.5 = 20(0.25) = 5 J.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc2-work-and-physical-applications-quiz-p2",
          topicTag: "workAndPhysicalApplications",
          promptText: "A spring has spring constant k=60 N/m. Find the work required to stretch it from 0.1 m beyond natural length to 0.4 m beyond natural length.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "4.5",
          stepByStepExplanation:
            "W = the integral from 0.1 to 0.4 of 60x dx = 60[x^2/2] from 0.1 to 0.4 = 30(0.16-0.01) = 30(0.15) = 4.5 J.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc2-work-and-physical-applications-quiz-p3",
          topicTag: "workAndPhysicalApplications",
          promptText:
            "A cylindrical tank of radius 2 ft and height 6 ft is full of water (weight density 62.5 lb/ft^3) and is pumped out over the top rim. Find the work done.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "4500pi",
          acceptableAnswerVariants: ["4500π"],
          stepByStepExplanation:
            "Cross-sectional area = pi(2)^2=4*pi ft^2 (constant). A layer at height x (from the bottom) must be lifted (6-x) ft. W = the integral from 0 to 6 of 62.5*4*pi(6-x)dx = 250*pi[6x-x^2/2] from 0 to 6 = 250*pi(18) = 4500*pi ft-lb.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc2-work-and-physical-applications-quiz-p4",
          topicTag: "workAndPhysicalApplications",
          promptText:
            "A rectangular tank 6 ft long, 3 ft wide, and 4 ft deep is completely full of water (weight density 62.5 lb/ft^3) and is pumped out over the top. Find the work done.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "9000",
          stepByStepExplanation:
            "Cross-sectional area = 6*3=18 ft^2 (constant). A layer at height x (from the bottom) must be lifted (4-x) ft. W = the integral from 0 to 4 of 62.5*18(4-x)dx = 1125[4x-x^2/2] from 0 to 4 = 1125(8) = 9000 ft-lb.",
          difficultyLevel: 4,
        },
        {
          problemId: "calc2-work-and-physical-applications-quiz-p5",
          topicTag: "workAndPhysicalApplications",
          promptText:
            "An inverted cone-shaped tank (vertex at the bottom, opening at the top) has height 8 ft and top radius 3 ft, and is full of water (weight density 62.5 lb/ft^3). Find the work to pump the water out over the top.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "3000pi",
          acceptableAnswerVariants: ["3000π"],
          stepByStepExplanation:
            "Measuring x as height above the vertex, the radius scales linearly: r(x)=(3/8)x, so the cross-sectional area is pi(9/64)x^2. A layer at height x must be lifted (8-x) ft. W = the integral from 0 to 8 of 62.5*(9*pi/64)x^2*(8-x)dx = (562.5*pi/64) times the integral of (8x^2-x^3)dx = (562.5*pi/64)[8x^3/3-x^4/4] from 0 to 8 = (562.5*pi/64)(1024/3) = 3000*pi ft-lb.",
          difficultyLevel: 5,
        },
        {
          problemId: "calc2-work-and-physical-applications-quiz-p6",
          topicTag: "workAndPhysicalApplications",
          promptText: "Find x-bar for the region bounded by y=x^2, y=0, x=0, and x=3 (uniform density).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "9/4",
          stepByStepExplanation:
            "Area = the integral from 0 to 3 of x^2 dx = 9. M_y = the integral from 0 to 3 of x*x^2 dx = the integral of x^3 dx = 81/4. x-bar = (81/4)/9 = 9/4.",
          difficultyLevel: 3,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "work-springs-and-variable-force",
        lessonTitle: "Work: Springs and Variable Force",
        estimatedMinutes: 25,
        topicTag: "workAndPhysicalApplications",
        learningGoals: [
          "Apply Hooke's Law to find a spring's force constant",
          "Set up and evaluate a work integral for a variable force such as a spring",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "When force isn't constant",
            bodyText:
              "From physics, work equals force times distance - but that formula only works directly when the force stays constant the whole way. A spring's restoring force grows the farther it's stretched, so the work to stretch it has to be built the same way every other physical-application integral in this unit is: slice the distance into tiny pieces, treat the force as constant across each tiny piece, and integrate.",
          },
          {
            blockType: "keyFormula",
            headingText: "Hooke's Law and the work integral",
            bodyText:
              "Hooke's Law: the force needed to hold a spring stretched (or compressed) a distance x from its natural length is F(x)=kx, where k is the spring constant (found from one known force/displacement pair). The work to stretch the spring from x=a to x=b (measured from natural length) is W = the integral from a to b of kx dx.",
            mathExpression: "F(x)=kx \\qquad W=\\int_a^b kx\\,dx",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "A spring requires a force of 20 N to hold it stretched 0.5 m beyond its natural length. Find the work needed to stretch it from its natural length to 1 m beyond natural length. First find k: 20=k(0.5), so k=40 N/m. Then integrate from 0 to 1: W = the integral from 0 to 1 of 40x dx = 40[x^2/2] from 0 to 1 = 20 joules.",
            mathExpression: "W=\\int_0^1 40x\\,dx = 20\\ \\text{J}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Forgetting that x in Hooke's Law measures displacement FROM the spring's natural (unstretched) length, not distance from some other reference point. If a problem stretches the spring from 0.2 m past natural length to 0.5 m past natural length, the bounds of integration are 0.2 and 0.5 - not 0 and 0.3.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u9-l1-p1",
            topicTag: "workAndPhysicalApplications",
            promptText:
              "A force of 8 N stretches a spring 0.4 m beyond its natural length. Find the work done stretching the spring from its natural length to 0.6 m beyond natural length.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "3.6",
            stepByStepExplanation:
              "8=k(0.4), so k=20 N/m. W = the integral from 0 to 0.6 of 20x dx = 20[x^2/2] from 0 to 0.6 = 10(0.36) = 3.6 J.",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u9-l1-p2",
            topicTag: "workAndPhysicalApplications",
            promptText:
              "A spring's natural length is 1 m, and a force of 15 N holds it stretched to 1.3 m. Find the work done stretching it from 1 m to 1.5 m (that is, from 0 to 0.5 m past natural length).",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "6.25",
            stepByStepExplanation:
              "15=k(0.3), so k=50 N/m. W = the integral from 0 to 0.5 of 50x dx = 50[x^2/2] from 0 to 0.5 = 25(0.25) = 6.25 J.",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u9-l1-p3",
            topicTag: "workAndPhysicalApplications",
            promptText:
              "A spring has spring constant k=100 N/m. Find the work required to stretch it from 0.2 m beyond natural length to 0.5 m beyond natural length.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "10.5",
            stepByStepExplanation:
              "W = the integral from 0.2 to 0.5 of 100x dx = 100[x^2/2] from 0.2 to 0.5 = 50(0.25-0.04) = 50(0.21) = 10.5 J.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Work",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/Work.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 6: Applications of Integration (Work)",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/6-introduction",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "work-pumping-liquid-problems",
        lessonTitle: "Work: Pumping Liquid Problems",
        estimatedMinutes: 25,
        topicTag: "workAndPhysicalApplications",
        learningGoals: [
          "Slice a tank of liquid into thin horizontal layers to set up a work integral",
          "Account for a varying cross-sectional area, such as in a conical tank",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Lifting one thin layer at a time",
            bodyText:
              "Pumping liquid out of a tank means lifting every layer of it to the rim (or higher) - and different layers start at different depths, so they each require a different amount of work. Slice the liquid into thin horizontal layers, find each layer's weight and how far IT specifically has to travel, multiply those together for that layer's work, and integrate over every layer in the tank.",
          },
          {
            blockType: "keyFormula",
            headingText: "The pumping-work integral",
            bodyText:
              "W = the integral from a to b of (weight density) times (cross-sectional area at position x) times (distance that layer must be lifted) dx. The weight density of water is commonly taken as 62.5 lb/ft^3 in US units. The cross-sectional area may be constant (a cylinder or rectangular tank) or may vary with x (a cone or sphere).",
            mathExpression: "W=\\int_a^b (\\text{density})\\cdot A(x)\\cdot d(x)\\,dx",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "A cylindrical tank of radius 2 ft and height 10 ft, standing upright, is completely full of water and needs to be pumped out over the top. Set x=0 at the bottom of the tank and x=10 at the top. Every layer has the same cross-sectional area, pi(2)^2=4*pi ft^2, so a layer at height x has weight 62.5*4*pi dx = 250*pi dx lb, and must be lifted a distance of (10-x) ft to reach the top. W = the integral from 0 to 10 of 250*pi(10-x)dx = 250*pi[10x-x^2/2] from 0 to 10 = 250*pi(50) = 12500*pi ft-lb.",
            mathExpression: "W=\\int_0^{10} 250\\pi(10-x)\\,dx=12500\\pi \\ \\text{ft-lb}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Using the wrong expression for 'distance lifted' - it's always the distance from that layer's CURRENT position to wherever it actually needs to end up, which is the top of the tank (or higher, if the liquid is pumped out over a spout above the rim), not simply the height variable x by itself. If liquid must clear a spout above the tank, that extra height has to be added into the distance term.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u9-l2-p1",
            topicTag: "workAndPhysicalApplications",
            promptText:
              "A cylindrical tank of radius 3 ft and height 8 ft is full of water (weight density 62.5 lb/ft^3) and is pumped out over the top rim. Find the work done.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "18000pi",
            acceptableAnswerVariants: ["18000π"],
            stepByStepExplanation:
              "Cross-sectional area = pi(3)^2 = 9*pi ft^2 (constant). A layer at height x (measured from the bottom) must be lifted (8-x) ft. W = the integral from 0 to 8 of 62.5*9*pi(8-x)dx = 562.5*pi[8x-x^2/2] from 0 to 8 = 562.5*pi(32) = 18000*pi ft-lb.",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u9-l2-p2",
            topicTag: "workAndPhysicalApplications",
            promptText:
              "A rectangular tank 10 ft long, 4 ft wide, and 5 ft deep is completely full of water (weight density 62.5 lb/ft^3) and is pumped out over the top. Find the work done.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "31250",
            stepByStepExplanation:
              "Cross-sectional area = 10*4=40 ft^2 (constant, since the tank's sides are vertical). A layer at height x (from the bottom) must be lifted (5-x) ft. W = the integral from 0 to 5 of 62.5*40(5-x)dx = 2500[5x-x^2/2] from 0 to 5 = 2500(12.5) = 31250 ft-lb.",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u9-l2-p3",
            topicTag: "workAndPhysicalApplications",
            promptText:
              "An inverted cone-shaped tank (vertex at the bottom, opening at the top) has height 6 ft and top radius 4 ft, and is full of water (weight density 62.5 lb/ft^3). Find the work to pump the water out over the top.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "3000pi",
            acceptableAnswerVariants: ["3000π"],
            stepByStepExplanation:
              "Measuring x as height above the vertex, the radius at height x scales linearly: r(x)=(4/6)x=(2/3)x, so the cross-sectional area is pi(4/9)x^2. A layer at height x must be lifted (6-x) ft. W = the integral from 0 to 6 of 62.5*(4*pi/9)x^2*(6-x)dx = (250*pi/9) times the integral of (6x^2-x^3)dx = (250*pi/9)[2x^3-x^4/4] from 0 to 6 = (250*pi/9)(108) = 3000*pi ft-lb.",
            difficultyLevel: 5,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Work",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/Work.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 6: Applications of Integration (Work)",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/6-introduction",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "introduction-to-center-of-mass",
        lessonTitle: "Introduction to Center of Mass",
        estimatedMinutes: 20,
        topicTag: "workAndPhysicalApplications",
        learningGoals: [
          "Find the center of mass of a system of discrete point masses",
          "Find the centroid of a flat region of uniform density using moment integrals",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "The balance point",
            bodyText:
              "The center of mass is the single point where an object would perfectly balance. For a handful of point masses on a line, it's a weighted average of their positions, weighted by how much mass sits at each one. For a solid, flat region (a lamina) of uniform density, the same idea generalizes using integrals: the region is treated as infinitely many thin vertical strips, each contributing its own tiny bit of 'moment' (mass times distance), and the balance point is the total moment divided by the total mass (which, for uniform density, reduces to area).",
          },
          {
            blockType: "keyFormula",
            headingText: "Discrete and continuous formulas",
            bodyText:
              "Discrete point masses: x-bar = (sum of m_i times x_i) / (sum of m_i). For a region of uniform density bounded above by y=f(x) and below by y=0 on [a,b]: Area A = the integral of f(x)dx; the moment about the y-axis is M_y = the integral of x*f(x)dx; the moment about the x-axis is M_x = the integral of (1/2)[f(x)]^2 dx. The centroid is (x-bar, y-bar) = (M_y/A, M_x/A).",
            mathExpression: "\\bar{x}=\\dfrac{M_y}{A},\\qquad \\bar{y}=\\dfrac{M_x}{A}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find the centroid of the region bounded by y=x^2, y=0, x=0, and x=2. Area: A = the integral from 0 to 2 of x^2 dx = 8/3. M_y = the integral from 0 to 2 of x*x^2 dx = the integral of x^3 dx = 4. M_x = the integral from 0 to 2 of (1/2)x^4 dx = 16/5. So x-bar = 4/(8/3) = 3/2, and y-bar = (16/5)/(8/3) = 6/5. The centroid is (3/2, 6/5).",
            mathExpression: "(\\bar{x},\\bar{y}) = \\left(\\dfrac{3}{2},\\dfrac{6}{5}\\right)",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Using the x-bar formula's integrand (x times f(x)) when computing y-bar, or dropping the factor of 1/2 in the M_x formula. That 1/2 comes from treating each thin vertical strip as its own tiny rod, whose own center of mass sits at half its height - the two moment formulas are built from genuinely different setups and aren't interchangeable.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u9-l3-p1",
            topicTag: "workAndPhysicalApplications",
            promptText:
              "Point masses of 2 kg, 3 kg, and 5 kg sit at positions x=1, x=4, and x=6 respectively. Find the center of mass.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "4.4",
            stepByStepExplanation:
              "x-bar = (2(1)+3(4)+5(6))/(2+3+5) = (2+12+30)/10 = 44/10 = 4.4.",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u9-l3-p2",
            topicTag: "workAndPhysicalApplications",
            promptText: "Find x-bar for the triangular region bounded by y=x, y=0, x=0, and x=4 (uniform density).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "8/3",
            stepByStepExplanation:
              "Area = the integral from 0 to 4 of x dx = 8. M_y = the integral from 0 to 4 of x*x dx = 64/3. x-bar = (64/3)/8 = 8/3, matching the known geometric fact that a right triangle's centroid sits one-third of the way from its right-angle vertex along each leg... here, two-thirds of the way along the base from the origin.",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u9-l3-p3",
            topicTag: "workAndPhysicalApplications",
            promptText: "Find the centroid of the region bounded by y=sqrt(x), y=0, x=0, and x=1 (uniform density).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(3/5, 3/8)",
            stepByStepExplanation:
              "Area = the integral from 0 to 1 of sqrt(x)dx = 2/3. M_y = the integral of x*sqrt(x)dx = the integral of x^(3/2)dx = 2/5. M_x = the integral of (1/2)x dx = 1/4. So x-bar=(2/5)/(2/3)=3/5, and y-bar=(1/4)/(2/3)=3/8. The centroid is (3/5, 3/8).",
            difficultyLevel: 5,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 6: Moments and Centers of Mass",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/6-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Paul's Online Math Notes: Center of Mass",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/CenterOfMass.aspx",
            resourceType: "textbookChapter",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "parametric-equations",
    unitTitle: "Parametric Equations and Calculus",
    unitDescription: "Graphing parametric curves and finding their slopes and arc lengths.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Parametric Equations and Calculus",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc2-parametric-equations-quiz-p1",
          topicTag: "parametricAndPolarCurves",
          promptText: "Eliminate the parameter to find a rectangular equation for x=t+2, y=t^2-1.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "y=(x-2)^2-1",
          stepByStepExplanation: "From x=t+2, t=x-2. Substitute into y=t^2-1: y=(x-2)^2-1.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc2-parametric-equations-quiz-p2",
          topicTag: "parametricAndPolarCurves",
          promptText: "Eliminate the parameter to find a rectangular equation for x=4cos(t), y=4sin(t).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "x^2+y^2=16",
          stepByStepExplanation:
            "Rewrite as x/4=cos(t) and y/4=sin(t). Using sin^2(t)+cos^2(t)=1: (x/4)^2+(y/4)^2=1, which simplifies to x^2+y^2=16.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc2-parametric-equations-quiz-p3",
          topicTag: "parametricAndPolarCurves",
          promptText: "For x=t^2+1, y=2t^3, find dy/dx at t=1.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "3",
          stepByStepExplanation:
            "dx/dt=2t, dy/dt=6t^2. dy/dx=6t^2/(2t)=3t. At t=1: dy/dx=3.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc2-parametric-equations-quiz-p4",
          topicTag: "parametricAndPolarCurves",
          promptText: "For x=t^3-3t, y=t^2, find every value of t where the curve has a horizontal tangent line.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "t=0",
          stepByStepExplanation:
            "dy/dt=2t=0 gives t=0. Checking dx/dt=3t^2-3 at t=0 equals -3, which is nonzero, so this is a genuine horizontal tangent at the point (0,0).",
          difficultyLevel: 3,
        },
        {
          problemId: "calc2-parametric-equations-quiz-p5",
          topicTag: "parametricAndPolarCurves",
          promptText: "Find the arc length of x=4t, y=3t for t from 0 to 3.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "15",
          stepByStepExplanation:
            "dx/dt=4, dy/dt=3, so sqrt(16+9)=5, a constant. L = the integral from 0 to 3 of 5 dt = 15, matching the straight-line distance between (0,0) and (12,9): sqrt(144+81)=15.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc2-parametric-equations-quiz-p6",
          topicTag: "parametricAndPolarCurves",
          promptText: "Find the arc length of x=t^3, y=t^2 for t from 0 to 1.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "(13sqrt(13)-8)/27",
          stepByStepExplanation:
            "dx/dt=3t^2, dy/dt=2t, so (dx/dt)^2+(dy/dt)^2=9t^4+4t^2=t^2(9t^2+4), and the square root is t*sqrt(9t^2+4) for t>=0. Let u=9t^2+4, du=18t dt. L = the integral of sqrt(u)(du/18) = (1/27)u^(3/2), evaluated from u=4 (t=0) to u=13 (t=1): (1/27)(13^(3/2)-8) = (13sqrt(13)-8)/27.",
          difficultyLevel: 5,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "parametric-equations-graphing-and-converting",
        lessonTitle: "Parametric Equations: Graphing and Converting",
        estimatedMinutes: 25,
        topicTag: "parametricAndPolarCurves",
        learningGoals: [
          "Explain what a parametric curve is and how the parameter t traces it out",
          "Eliminate the parameter to convert a parametric curve to a rectangular (Cartesian) equation",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Describing a curve through time, not just through x",
            bodyText:
              "A parametric curve describes both x and y as separate functions of a third variable, t (often standing for time). This is a genuinely different way of thinking about a curve than y=f(x): instead of one variable depending on another, both x and y depend on t together, which lets a parametric curve trace out shapes (like a full circle, or a path that crosses itself) that no single function y=f(x) ever could. This 2D idea is the direct rehearsal for how Calculus III will describe motion through 3D space.",
          },
          {
            blockType: "keyFormula",
            headingText: "Eliminating the parameter",
            bodyText:
              "To convert a parametric curve to a rectangular equation, solve one of the two equations for t, then substitute that expression into the other equation. When both x and y involve sine and cosine of the SAME parameter, the Pythagorean identity sin^2(t)+cos^2(t)=1 is usually the fastest route instead.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: solving for t",
            bodyText:
              "Convert x=t-1, y=t^2 to rectangular form. Solve the first equation for t: t=x+1. Substitute into the second: y=(x+1)^2 - a sideways-shifted parabola.",
            mathExpression: "x=t-1,\\ y=t^2 \\implies y=(x+1)^2",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: using a trig identity",
            bodyText:
              "Convert x=cos(t), y=sin(t) to rectangular form. Since x=cos(t) and y=sin(t), the identity sin^2(t)+cos^2(t)=1 becomes x^2+y^2=1 - the unit circle.",
            mathExpression: "x=\\cos t,\\ y=\\sin t \\implies x^2+y^2=1",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Forgetting that eliminating the parameter can lose information about direction and restricted range. x=cos(t), y=sin(t) always satisfies x^2+y^2=1, but if t is restricted to [0, pi], the curve only traces the UPPER half of the circle - the Cartesian equation alone doesn't capture that restriction or which direction the curve is traced in.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u10-l1-p1",
            topicTag: "parametricAndPolarCurves",
            promptText: "Eliminate the parameter to find a rectangular equation for x=t-1, y=t^2.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "y=(x+1)^2",
            stepByStepExplanation: "From x=t-1, t=x+1. Substitute into y=t^2: y=(x+1)^2.",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u10-l1-p2",
            topicTag: "parametricAndPolarCurves",
            promptText: "Eliminate the parameter to find a rectangular equation for x=2t, y=t-3.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "y=x/2-3",
            stepByStepExplanation: "From x=2t, t=x/2. Substitute into y=t-3: y=x/2-3.",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u10-l1-p3",
            topicTag: "parametricAndPolarCurves",
            promptText: "Eliminate the parameter to find a rectangular equation for x=3cos(t), y=3sin(t).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "x^2+y^2=9",
            stepByStepExplanation:
              "Rewrite as x/3=cos(t) and y/3=sin(t). Using sin^2(t)+cos^2(t)=1: (x/3)^2+(y/3)^2=1, which simplifies to x^2+y^2=9.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Parametric Equations and Curves",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/ParametricEqn.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 7: Parametric Equations and Polar Coordinates",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/7-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Parametric equations",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-bc/bc-parametric-equations-new",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "calculus-with-parametric-curves-slopes",
        lessonTitle: "Calculus with Parametric Curves: Slopes",
        estimatedMinutes: 25,
        topicTag: "parametricAndPolarCurves",
        learningGoals: [
          "Find dy/dx for a parametric curve using the chain rule",
          "Locate horizontal and vertical tangent lines on a parametric curve",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Slope without ever solving for y in terms of x",
            bodyText:
              "Since x and y are both functions of t, the chain rule connects their derivatives directly: dy/dt equals dy/dx times dx/dt. Solving for dy/dx gives the slope of the parametric curve, entirely in terms of t - with no need to ever eliminate the parameter or solve for y as a function of x first.",
          },
          {
            blockType: "keyFormula",
            headingText: "The parametric slope formula",
            bodyText:
              "dy/dx = (dy/dt) / (dx/dt), valid wherever dx/dt is not 0. A horizontal tangent occurs where dy/dt=0 (and dx/dt is not 0). A vertical tangent occurs where dx/dt=0 (and dy/dt is not 0).",
            mathExpression: "\\dfrac{dy}{dx}=\\dfrac{dy/dt}{dx/dt}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "For x=t^2-4t, y=t^3-3t, find any horizontal and vertical tangent lines. dx/dt=2t-4, dy/dt=3t^2-3. Horizontal tangents: 3t^2-3=0 gives t=1 and t=-1 (checking dx/dt is nonzero there: 2(1)-4=-2 and 2(-1)-4=-6, both nonzero). At t=1: point (-3,-2). At t=-1: point (5,2). Vertical tangents: 2t-4=0 gives t=2 (checking dy/dt is nonzero: 3(4)-3=9, nonzero). At t=2: point (-4,2).",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Computing dy/dx correctly as a ratio of derivatives, but then trying to plug an x-VALUE into it directly to find a slope 'at a point.' The result is still a function of t, not of x - finding the slope at a specific point requires first finding the t-value that produces that point, since there's often no simple way to solve for t in terms of x at all.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u10-l2-p1",
            topicTag: "parametricAndPolarCurves",
            promptText: "For x=t^3, y=t^2+1, find dy/dx at t=1.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "2/3",
            stepByStepExplanation:
              "dx/dt=3t^2, dy/dt=2t. dy/dx=2t/(3t^2)=2/(3t). At t=1: 2/3.",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u10-l2-p2",
            topicTag: "parametricAndPolarCurves",
            promptText: "For x=3t-1, y=t^2-2t, find dy/dx at t=2.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "2/3",
            stepByStepExplanation:
              "dx/dt=3, dy/dt=2t-2. dy/dx=(2t-2)/3. At t=2: (4-2)/3=2/3.",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u10-l2-p3",
            topicTag: "parametricAndPolarCurves",
            promptText: "For x=t^2, y=t^3-3t, find every value of t where the curve has a horizontal tangent line.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "t=1 and t=-1",
            acceptableAnswerVariants: ["t=±1", "1 and -1", "t = 1, t = -1"],
            stepByStepExplanation:
              "dy/dt=3t^2-3=0 gives t=1 and t=-1. Checking dx/dt=2t is nonzero at both (2 and -2), so both are genuine horizontal tangents, at the points (1,-2) and (1,2) respectively.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Tangents with Parametric Equations",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/ParaTangent.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 7: Parametric Equations and Polar Coordinates",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/7-introduction",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "arc-length-of-parametric-curves",
        lessonTitle: "Arc Length of Parametric Curves",
        estimatedMinutes: 20,
        topicTag: "parametricAndPolarCurves",
        learningGoals: [
          "Apply the parametric arc length formula",
          "Verify a parametric arc length against a known geometric result",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "The same Pythagorean idea, one parameter deeper",
            bodyText:
              "Arc length for a parametric curve uses the exact same reasoning as arc length for y=f(x): approximate the curve with tiny straight segments and add up their lengths with the Pythagorean theorem. The only difference is that both the horizontal and vertical legs of each tiny segment now come from derivatives with respect to t, rather than one leg being a plain dx.",
          },
          {
            blockType: "keyFormula",
            headingText: "The parametric arc length formula",
            bodyText:
              "For a curve x=f(t), y=g(t) traced once as t goes from t1 to t2, the arc length is the integral from t1 to t2 of the square root of [(dx/dt)^2 + (dy/dt)^2] dt.",
            mathExpression: "L=\\int_{t_1}^{t_2}\\sqrt{\\left(\\dfrac{dx}{dt}\\right)^2+\\left(\\dfrac{dy}{dt}\\right)^2}\\,dt",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: checking against a known circle",
            bodyText:
              "Find the arc length of x=cos(t), y=sin(t) for t from 0 to 2*pi (this should be the full circumference of the unit circle). dx/dt=-sin(t), dy/dt=cos(t), so (dx/dt)^2+(dy/dt)^2=sin^2(t)+cos^2(t)=1. L = the integral from 0 to 2*pi of sqrt(1) dt = 2*pi, matching the familiar circumference formula 2*pi*r with r=1.",
            mathExpression: "L=\\int_0^{2\\pi} 1\\,dt = 2\\pi",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Adding dx/dt and dy/dt together and THEN squaring the sum, instead of squaring each derivative separately before adding them under the square root. The formula is sqrt[(dx/dt)^2+(dy/dt)^2], not sqrt[(dx/dt+dy/dt)^2] - these give very different (and usually very wrong) results.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u10-l3-p1",
            topicTag: "parametricAndPolarCurves",
            promptText: "Find the arc length of x=3t, y=4t for t from 0 to 2.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "10",
            stepByStepExplanation:
              "dx/dt=3, dy/dt=4, so sqrt(9+16)=5, a constant. L = the integral from 0 to 2 of 5 dt = 10. This matches the straight-line distance between the endpoints (0,0) and (6,8): sqrt(36+64)=10.",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u10-l3-p2",
            topicTag: "parametricAndPolarCurves",
            promptText: "Find the arc length of x=5cos(t), y=5sin(t) for t from 0 to pi/2.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "5pi/2",
            acceptableAnswerVariants: ["5π/2", "(5/2)pi"],
            stepByStepExplanation:
              "dx/dt=-5sin(t), dy/dt=5cos(t), so (dx/dt)^2+(dy/dt)^2=25. L = the integral from 0 to pi/2 of 5 dt = 5(pi/2) = 5pi/2, matching one-quarter of the circumference of a circle of radius 5.",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u10-l3-p3",
            topicTag: "parametricAndPolarCurves",
            promptText: "Find the arc length of x=t^2, y=t^3 for t from 0 to 2.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(80sqrt(10)-8)/27",
            stepByStepExplanation:
              "dx/dt=2t, dy/dt=3t^2, so (dx/dt)^2+(dy/dt)^2=4t^2+9t^4=t^2(4+9t^2), and the square root is t*sqrt(4+9t^2) for t>=0. Let u=4+9t^2, du=18t dt. L = the integral of sqrt(u)*(du/18) = (1/27)u^(3/2), evaluated from u=4 (t=0) to u=40 (t=2): (1/27)(40^(3/2)-4^(3/2)) = (1/27)(80sqrt(10)-8).",
            difficultyLevel: 5,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Arc Length with Parametric Equations",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/ParaArcLength.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 7: Parametric Equations and Polar Coordinates",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/7-introduction",
            resourceType: "textbookChapter",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "polar-calculus",
    unitTitle: "Polar Coordinates and Calculus",
    unitDescription: "Slopes of tangent lines and areas enclosed by polar curves.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Polar Coordinates and Calculus",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc2-polar-calculus-quiz-p1",
          topicTag: "parametricAndPolarCurves",
          promptText: "Find the slope of the tangent line to the circle r=3 at theta=pi/2.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "0",
          stepByStepExplanation:
            "Since r=3 is constant, dr/dtheta=0. dy/dx = [0*sin(theta)+3cos(theta)]/[0*cos(theta)-3sin(theta)] = -cos(theta)/sin(theta). At theta=pi/2: -0/1=0, a horizontal tangent at the top of the circle.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc2-polar-calculus-quiz-p2",
          topicTag: "parametricAndPolarCurves",
          promptText: "Find the slope of the tangent line to r=2-2sin(theta) at theta=0.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "-1",
          stepByStepExplanation:
            "dr/dtheta=-2cos(theta). At theta=0: r=2, dr/dtheta=-2. dy/dx = [(-2)(0)+2*1]/[(-2)(1)-2*0] = [0+2]/[-2-0] = 2/(-2) = -1.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc2-polar-calculus-quiz-p3",
          topicTag: "parametricAndPolarCurves",
          promptText: "Find the area enclosed by the circle r=5.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "25pi",
          acceptableAnswerVariants: ["25π"],
          stepByStepExplanation:
            "A = (1/2) times the integral from 0 to 2*pi of 25 d(theta) = (1/2)(25)(2*pi) = 25*pi, matching the ordinary circle-area formula pi*r^2 with r=5.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc2-polar-calculus-quiz-p4",
          topicTag: "parametricAndPolarCurves",
          promptText: "Find the area enclosed by one loop of r=2cos(theta), for theta from -pi/2 to pi/2.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "pi",
          acceptableAnswerVariants: ["π"],
          stepByStepExplanation:
            "A = (1/2) times the integral from -pi/2 to pi/2 of 4cos^2(theta) d(theta) = 2 times the integral of cos^2(theta) d(theta). Since the average value of cos^2(theta) over an interval of length pi is 1/2, this integral equals pi/2, so A=2(pi/2)=pi. This matches the known fact that r=2cos(theta) traces a circle of radius 1, with area pi(1)^2=pi.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc2-polar-calculus-quiz-p5",
          topicTag: "parametricAndPolarCurves",
          promptText: "Find the area inside the circle r=6 and outside the circle r=4.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "20pi",
          acceptableAnswerVariants: ["20π"],
          stepByStepExplanation:
            "Both are full circles centered at the origin, with r=4 entirely inside r=6. A = (1/2) times the integral from 0 to 2*pi of (36-16)d(theta) = (1/2)(20)(2*pi) = 20*pi, matching the direct subtraction 36*pi-16*pi=20*pi.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc2-polar-calculus-quiz-p6",
          topicTag: "parametricAndPolarCurves",
          promptText: "Find the area inside r=1+cos(theta) and outside r=1.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "2+pi/4",
          acceptableAnswerVariants: ["2+π/4", "(8+pi)/4"],
          stepByStepExplanation:
            "1+cos(theta)=1 gives cos(theta)=0, so theta=-pi/2 and theta=pi/2; on that interval, 1+cos(theta)>=1 (checking theta=0: 2>=1). A = (1/2) times the integral from -pi/2 to pi/2 of [(1+cos(theta))^2-1]d(theta) = (1/2) times the integral of (2cos(theta)+cos^2(theta))d(theta). Using an antiderivative of 2sin(theta)+theta/2+sin(2theta)/4 and evaluating from -pi/2 to pi/2 gives (2+pi/4)-(-2-pi/4)=4+pi/2. Multiplying by 1/2: A=2+pi/4.",
          difficultyLevel: 5,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "calculus-with-polar-curves-slopes",
        lessonTitle: "Calculus with Polar Curves: Slopes",
        estimatedMinutes: 25,
        topicTag: "parametricAndPolarCurves",
        learningGoals: [
          "Convert a polar curve to parametric form using x=r*cos(theta), y=r*sin(theta)",
          "Find the slope of the tangent line to a polar curve using the parametric slope formula",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Polar curves are secretly parametric curves",
            bodyText:
              "A polar curve r=f(theta) can be rewritten as a parametric curve with theta playing the role of the parameter: x=r*cos(theta)=f(theta)*cos(theta), and y=r*sin(theta)=f(theta)*sin(theta). That means the parametric slope formula from the previous unit applies here completely unchanged - there's no new formula to learn, just a new substitution to make first.",
          },
          {
            blockType: "keyFormula",
            headingText: "The polar slope formula",
            bodyText:
              "Since x=f(theta)cos(theta) and y=f(theta)sin(theta), applying the product rule to each and dividing gives: dy/dx = [ (dr/dtheta)sin(theta) + r*cos(theta) ] / [ (dr/dtheta)cos(theta) - r*sin(theta) ].",
            mathExpression:
              "\\dfrac{dy}{dx}=\\dfrac{\\frac{dr}{d\\theta}\\sin\\theta+r\\cos\\theta}{\\frac{dr}{d\\theta}\\cos\\theta-r\\sin\\theta}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find the slope of the tangent line to the cardioid r=1+cos(theta) at theta=pi/2. First, dr/dtheta=-sin(theta). At theta=pi/2: r=1+cos(pi/2)=1, and dr/dtheta=-sin(pi/2)=-1. Substitute into the formula: dy/dx = [(-1)(1)+(1)(0)] / [(-1)(0)-(1)(1)] = (-1)/(-1) = 1.",
            mathExpression: "\\left.\\dfrac{dy}{dx}\\right|_{\\theta=\\pi/2}=1",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Treating dr/dtheta itself as if it were the slope of the tangent line. dr/dtheta only measures how fast the DISTANCE from the origin is changing, not the steepness of the curve in the xy-plane - the actual slope requires the full conversion to x and y (with the product rule applied to each) shown above.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u11-l1-p1",
            topicTag: "parametricAndPolarCurves",
            promptText: "Find the slope of the tangent line to the circle r=2 at theta=pi/2.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "0",
            stepByStepExplanation:
              "Since r=2 is constant, dr/dtheta=0. dy/dx = [0*sin(theta)+2cos(theta)] / [0*cos(theta)-2sin(theta)] = -cos(theta)/sin(theta). At theta=pi/2: -0/1=0, a horizontal tangent - which makes sense, since theta=pi/2 is the top of the circle.",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u11-l1-p2",
            topicTag: "parametricAndPolarCurves",
            promptText: "Find the slope of the tangent line to r=1+sin(theta) at theta=0.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "1",
            stepByStepExplanation:
              "dr/dtheta=cos(theta). At theta=0: r=1, dr/dtheta=1. dy/dx = [1*sin(0)+1*cos(0)]/[1*cos(0)-1*sin(0)] = [0+1]/[1-0] = 1.",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u11-l1-p3",
            topicTag: "parametricAndPolarCurves",
            promptText: "Find the slope of the tangent line to the spiral r=theta at theta=pi/2.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "-2/pi",
            acceptableAnswerVariants: ["-2/π"],
            stepByStepExplanation:
              "dr/dtheta=1. At theta=pi/2: r=pi/2, sin(theta)=1, cos(theta)=0. dy/dx = [1*1+(pi/2)*0]/[1*0-(pi/2)*1] = 1/(-pi/2) = -2/pi.",
            difficultyLevel: 5,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Tangents with Polar Coordinates",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/PolarTangents.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 7: Parametric Equations and Polar Coordinates",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/7-introduction",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "area-in-polar-coordinates",
        lessonTitle: "Area in Polar Coordinates",
        estimatedMinutes: 30,
        topicTag: "parametricAndPolarCurves",
        learningGoals: [
          "Explain where the polar area formula comes from geometrically",
          "Set up and evaluate the area enclosed by a polar curve",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Slicing into thin pie wedges instead of thin rectangles",
            bodyText:
              "Rectangular area used thin vertical (or horizontal) strips. Polar area uses a completely different slice: a thin pie-shaped wedge of angle d(theta), sweeping from the origin out to the curve. The area of a full circular sector of radius r and angle theta is (1/2)r^2*theta - the exact same geometry fact from the Geometry Essentials course - and shrinking that wedge to an infinitesimally thin one turns the sum of all the wedges into an integral.",
          },
          {
            blockType: "keyFormula",
            headingText: "The polar area formula",
            bodyText:
              "For a polar curve r=f(theta), the area enclosed as theta sweeps from alpha to beta is A = (1/2) times the integral from alpha to beta of [f(theta)]^2 d(theta).",
            mathExpression: "A=\\dfrac{1}{2}\\int_\\alpha^\\beta [f(\\theta)]^2\\,d\\theta",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find the area enclosed by the cardioid r=1+cos(theta) (one full loop, theta from 0 to 2*pi). A = (1/2) times the integral from 0 to 2*pi of (1+cos(theta))^2 d(theta). Expand: 1+2cos(theta)+cos^2(theta). Over a full period, the integral of 1 d(theta) is 2*pi, the integral of 2cos(theta) is 0, and the integral of cos^2(theta) is pi (its average value is 1/2). Adding: 2*pi+0+pi=3*pi. Multiply by 1/2: A=3*pi/2.",
            mathExpression: "A=\\dfrac{1}{2}\\int_0^{2\\pi}(1+\\cos\\theta)^2\\,d\\theta=\\dfrac{3\\pi}{2}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Forgetting the factor of 1/2 in front of the integral - it comes directly from the circular-sector area formula and skipping it doubles the computed area every time. Also common: sweeping theta over the wrong range, either past a full 2*pi (which retraces the curve and double-counts the area) or not far enough to complete the loop being asked about.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u11-l2-p1",
            topicTag: "parametricAndPolarCurves",
            promptText: "Find the area enclosed by the circle r=4.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "16pi",
            acceptableAnswerVariants: ["16π"],
            stepByStepExplanation:
              "A = (1/2) times the integral from 0 to 2*pi of 16 d(theta) = (1/2)(16)(2*pi) = 16*pi, matching the ordinary circle-area formula pi*r^2 with r=4.",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u11-l2-p2",
            topicTag: "parametricAndPolarCurves",
            promptText: "Find the area enclosed by one loop of r=3sin(theta), for theta from 0 to pi.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "9pi/4",
            acceptableAnswerVariants: ["9π/4"],
            stepByStepExplanation:
              "A = (1/2) times the integral from 0 to pi of 9sin^2(theta) d(theta) = (9/2) times the integral of sin^2(theta) d(theta). Since the integral of sin^2(theta) over 0 to pi is pi/2, A=(9/2)(pi/2)=9pi/4. This matches the known fact that r=3sin(theta) traces a circle of radius 3/2, with area pi(3/2)^2=9pi/4.",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u11-l2-p3",
            topicTag: "parametricAndPolarCurves",
            promptText: "Find the area enclosed by the cardioid r=2+2cos(theta), for theta from 0 to 2*pi.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "6pi",
            acceptableAnswerVariants: ["6π"],
            stepByStepExplanation:
              "A = (1/2) times the integral from 0 to 2*pi of (2+2cos(theta))^2 d(theta) = (1/2) times the integral of (4+8cos(theta)+4cos^2(theta))d(theta). Over the full period: the integral of 4 is 8*pi, the integral of 8cos(theta) is 0, and the integral of 4cos^2(theta) is 4*pi. Sum: 12*pi. Multiply by 1/2: A=6*pi.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Area with Polar Coordinates",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/PolarArea.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 7: Parametric Equations and Polar Coordinates",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/7-introduction",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "area-between-polar-curves",
        lessonTitle: "Area Between Polar Curves",
        estimatedMinutes: 25,
        topicTag: "parametricAndPolarCurves",
        learningGoals: [
          "Find the angles where two polar curves intersect",
          "Set up and evaluate the area inside one polar curve and outside another",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Outer squared minus inner squared",
            bodyText:
              "Just like area between two rectangular curves subtracted a bottom function from a top function, area between two polar curves subtracts an INNER curve's contribution from an OUTER curve's contribution - except here, both get squared first, since the polar area formula itself is built from r^2. Finding the correct bounds requires solving for the theta-values where the two curves actually cross.",
          },
          {
            blockType: "keyFormula",
            headingText: "The area-between formula",
            bodyText:
              "If f(theta) >= g(theta) >= 0 on [alpha, beta], the area inside r=f(theta) and outside r=g(theta) is A = (1/2) times the integral from alpha to beta of ([f(theta)]^2 - [g(theta)]^2) d(theta).",
            mathExpression: "A=\\dfrac{1}{2}\\int_\\alpha^\\beta \\big([f(\\theta)]^2-[g(\\theta)]^2\\big)\\,d\\theta",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find the area inside r=2cos(theta) and outside r=1. First find where they intersect: 2cos(theta)=1, so cos(theta)=1/2, giving theta=-pi/3 and theta=pi/3. On that interval, 2cos(theta)>=1 (checking theta=0: 2>=1). A = (1/2) times the integral from -pi/3 to pi/3 of (4cos^2(theta)-1)d(theta). Using 4cos^2(theta)=2+2cos(2theta), the integrand becomes 1+2cos(2theta), with antiderivative theta+sin(2theta). Evaluating from -pi/3 to pi/3 gives (pi/3+sqrt(3)/2)-(-pi/3-sqrt(3)/2) = 2pi/3+sqrt(3). Multiplying by 1/2: A = pi/3 + sqrt(3)/2.",
            mathExpression: "A=\\dfrac{\\pi}{3}+\\dfrac{\\sqrt{3}}{2}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Skipping the step of finding the actual intersection angles between the two curves and instead integrating over a 'convenient' range like 0 to 2*pi. Area between two polar curves is only valid to compute as (outer)^2 minus (inner)^2 over the specific range of theta where that relationship (which curve is actually farther from the origin) genuinely holds - using the wrong bounds produces a meaningless number.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u11-l3-p1",
            topicTag: "parametricAndPolarCurves",
            promptText: "Find the area inside the circle r=5 and outside the circle r=3.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "16pi",
            acceptableAnswerVariants: ["16π"],
            stepByStepExplanation:
              "Both are full circles centered at the origin with r=3 entirely inside r=5, so the full sweep applies: A = (1/2) times the integral from 0 to 2*pi of (25-9)d(theta) = (1/2)(16)(2*pi) = 16*pi, matching the direct area subtraction 25*pi-9*pi=16*pi.",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u11-l3-p2",
            topicTag: "parametricAndPolarCurves",
            promptText:
              "Find the area inside the circle r=4 and outside the circle r=2, for theta from 0 to pi (the upper half only).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "6pi",
            acceptableAnswerVariants: ["6π"],
            stepByStepExplanation:
              "A = (1/2) times the integral from 0 to pi of (16-4)d(theta) = (1/2)(12)(pi) = 6*pi.",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u11-l3-p3",
            topicTag: "parametricAndPolarCurves",
            promptText: "Find the area inside r=4cos(theta) and outside r=2.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "4pi/3+2sqrt(3)",
            acceptableAnswerVariants: ["4π/3+2√3", "(4pi/3)+2sqrt(3)"],
            stepByStepExplanation:
              "4cos(theta)=2 gives cos(theta)=1/2, so theta=-pi/3 and theta=pi/3. A = (1/2) times the integral from -pi/3 to pi/3 of (16cos^2(theta)-4)d(theta). Using 16cos^2(theta)=8+8cos(2theta), the integrand is 4+8cos(2theta), with antiderivative 4theta+4sin(2theta). Evaluating from -pi/3 to pi/3 gives (4pi/3+2sqrt(3))-(-4pi/3-2sqrt(3)) = 8pi/3+4sqrt(3). Multiplying by 1/2: A = 4pi/3+2sqrt(3).",
            difficultyLevel: 5,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Area with Polar Coordinates",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/PolarArea.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 7: Parametric Equations and Polar Coordinates",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/7-introduction",
            resourceType: "textbookChapter",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "sequences",
    unitTitle: "Sequences",
    unitDescription: "Convergence and divergence of sequences, limit laws, and the Squeeze Theorem.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Sequences",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc2-sequences-quiz-p1",
          topicTag: "sequenceConvergence",
          promptText: "Does the sequence a_n=(4n-3)/(5n+2) converge? If so, to what value?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "4/5",
          stepByStepExplanation:
            "Divide top and bottom by n: (4-3/n)/(5+2/n). As n approaches infinity, this approaches 4/5.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc2-sequences-quiz-p2",
          topicTag: "sequenceConvergence",
          promptText: "Does the sequence a_n=(-1)^n/n converge? If so, to what value?",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "0",
          stepByStepExplanation:
            "Since -1/n <= (-1)^n/n <= 1/n for every n, and both -1/n and 1/n approach 0 as n approaches infinity, the Squeeze Theorem guarantees the sequence also converges to 0.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc2-sequences-quiz-p3",
          topicTag: "sequenceConvergence",
          promptText: "Does the sequence a_n=n^2/2^n converge? If so, to what value?",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "0",
          stepByStepExplanation:
            "Exponential growth in the denominator eventually overwhelms the polynomial growth in the numerator, so the sequence converges to 0.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc2-sequences-quiz-p4",
          topicTag: "sequenceConvergence",
          promptText: "Use the Squeeze Theorem to evaluate the limit of a_n=(3+cos(n))/n^2.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "0",
          stepByStepExplanation:
            "Since -1<=cos(n)<=1, we have 2<=3+cos(n)<=4, so 2/n^2 <= a_n <= 4/n^2. Both bounds approach 0 as n approaches infinity, so by the Squeeze Theorem, the limit is 0.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc2-sequences-quiz-p5",
          topicTag: "sequenceConvergence",
          promptText: "Is the sequence a_n=(3n+1)/(n+2) monotonic (increasing or decreasing), and is it bounded?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "increasing and bounded",
          acceptableAnswerVariants: ["monotonic increasing, bounded"],
          stepByStepExplanation:
            "Rewrite a_n=3-5/(n+2). As n increases, 5/(n+2) decreases, so a_n increases - the sequence is increasing. It's bounded below by a_1=4/3 and bounded above by 3 (since 5/(n+2) is always positive). By the Monotonic Sequence Theorem, it converges (to 3).",
          difficultyLevel: 4,
        },
        {
          problemId: "calc2-sequences-quiz-p6",
          topicTag: "sequenceConvergence",
          promptText: "Evaluate the limit of a_n = sqrt(n^2+3n) - n.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "3/2",
          stepByStepExplanation:
            "This is an infinity-minus-infinity form, so multiply by the conjugate over itself: [sqrt(n^2+3n)-n][sqrt(n^2+3n)+n]/[sqrt(n^2+3n)+n] = 3n/[sqrt(n^2+3n)+n]. Divide top and bottom by n: 3/[sqrt(1+3/n)+1]. As n approaches infinity, this approaches 3/(1+1)=3/2.",
          difficultyLevel: 5,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "sequences-and-convergence",
        lessonTitle: "Sequences and Convergence",
        estimatedMinutes: 25,
        topicTag: "sequenceConvergence",
        learningGoals: [
          "Explain what it means for a sequence to converge or diverge",
          "Evaluate the limit of a sequence using techniques from limits at infinity",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "A function that only eats whole numbers",
            bodyText:
              "A sequence is just a function whose domain is restricted to the positive integers - instead of a_n written as a continuous curve, it's an ordered, discrete list of numbers: a_1, a_2, a_3, and so on. Whether a sequence converges is asked exactly the same way as a limit at infinity from Calculus I: does a_n settle down and approach one specific finite number L as n grows without bound? Everything you already know about evaluating limits at infinity for rational, exponential, and other functions carries over directly.",
          },
          {
            blockType: "keyFormula",
            headingText: "The definition",
            bodyText:
              "A sequence a_n converges to L if the limit as n approaches infinity of a_n equals L, a finite number. If no such finite limit exists (the terms grow without bound, oscillate, or otherwise fail to settle), the sequence diverges.",
            mathExpression: "\\lim_{n\\to\\infty} a_n = L",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: a convergent sequence",
            bodyText:
              "Determine whether a_n = n/(n+1) converges. Divide the top and bottom by n: a_n = 1/(1+1/n). As n approaches infinity, 1/n approaches 0, so a_n approaches 1/(1+0)=1. The sequence converges to 1.",
            mathExpression: "\\lim_{n\\to\\infty}\\dfrac{n}{n+1}=1",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: a divergent sequence",
            bodyText:
              "Determine whether a_n = (-1)^n converges. The terms are -1, 1, -1, 1, ... forever, alternating between two fixed values without ever settling on a single one. Since it doesn't approach one specific number, this sequence diverges - by oscillation, rather than by growing without bound.",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Assuming that any sequence with a tidy-looking formula automatically converges. Oscillating sequences like (-1)^n, or sequences that simply grow without bound like a_n=n^2, are common counterexamples. Always actually evaluate the limit as n approaches infinity using the same techniques as limits at infinity - never judge convergence just by glancing at the formula.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u12-l1-p1",
            topicTag: "sequenceConvergence",
            promptText: "Does the sequence a_n=(2n+1)/(3n-1) converge? If so, to what value?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "2/3",
            stepByStepExplanation:
              "Divide top and bottom by n: (2+1/n)/(3-1/n). As n approaches infinity, this approaches 2/3.",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u12-l1-p2",
            topicTag: "sequenceConvergence",
            promptText: "Does the sequence a_n=(-1)^n * n converge or diverge?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "diverges",
            acceptableAnswerVariants: ["does not converge", "dne"],
            stepByStepExplanation:
              "The terms alternate in sign while also growing without bound in magnitude (-1, 2, -3, 4, ...), so the sequence neither settles on one value nor approaches a single infinite trend - it diverges.",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u12-l1-p3",
            topicTag: "sequenceConvergence",
            promptText: "Does the sequence a_n=n/2^n converge? If so, to what value?",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "0",
            stepByStepExplanation:
              "Exponential growth in the denominator eventually overwhelms the polynomial growth in the numerator - 2^n grows far faster than n does as n increases. The sequence converges to 0.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Sequences",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/Sequences.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 5: Sequences and Series",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/5-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Series (sequences)",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-bc/bc-series-new",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "limit-laws-for-sequences-and-the-squeeze-theorem",
        lessonTitle: "Limit Laws for Sequences and the Squeeze Theorem",
        estimatedMinutes: 25,
        topicTag: "sequenceConvergence",
        learningGoals: [
          "Apply the ordinary limit laws to combinations of convergent sequences",
          "Use the Squeeze Theorem to evaluate the limit of a sequence trapped between two simpler ones",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Everything from Calculus I still applies",
            bodyText:
              "Since a sequence is a special kind of function, the sum, difference, product, quotient, and constant multiple limit laws from Calculus I apply to sequences exactly as they did before. The Squeeze Theorem is especially useful here for sequences that oscillate in a bounded way, like ones involving sine or cosine of n - it lets you pin down a limit without ever computing it directly.",
          },
          {
            blockType: "keyFormula",
            headingText: "The Squeeze Theorem for sequences",
            bodyText:
              "If a_n <= b_n <= c_n for all n beyond some point, and both a_n and c_n converge to the same limit L, then b_n also converges to L.",
            mathExpression: "a_n \\le b_n \\le c_n,\\ \\lim a_n=\\lim c_n=L \\implies \\lim b_n=L",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Determine whether sin(n)/n converges, and to what value. Since sine is always between -1 and 1, we have -1/n <= sin(n)/n <= 1/n for every positive integer n. As n approaches infinity, both -1/n and 1/n approach 0. By the Squeeze Theorem, sin(n)/n is trapped between two sequences both converging to 0, so it also converges to 0 - even though sin(n) itself oscillates forever and never settles down on its own.",
            mathExpression: "-\\dfrac{1}{n}\\le \\dfrac{\\sin n}{n}\\le \\dfrac{1}{n} \\implies \\lim_{n\\to\\infty}\\dfrac{\\sin n}{n}=0",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Applying the Squeeze Theorem with bounding sequences that don't actually converge to the SAME limit. The technique only works when both the upper and lower bounds squeeze down to one common value - if they approach different limits, or don't converge at all, nothing can be concluded about whatever sequence is trapped between them.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u12-l2-p1",
            topicTag: "sequenceConvergence",
            promptText: "Use the limit laws to evaluate the limit of a_n=(5n-2)/(2n+7).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "5/2",
            stepByStepExplanation:
              "Divide top and bottom by n: (5-2/n)/(2+7/n). As n approaches infinity, this approaches 5/2.",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u12-l2-p2",
            topicTag: "sequenceConvergence",
            promptText: "Use the Squeeze Theorem to evaluate the limit of a_n=cos(n)/n^2.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "0",
            stepByStepExplanation:
              "Since -1 <= cos(n) <= 1, dividing by n^2 (positive) gives -1/n^2 <= cos(n)/n^2 <= 1/n^2. Both bounds approach 0 as n approaches infinity, so by the Squeeze Theorem, the limit is 0.",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u12-l2-p3",
            topicTag: "sequenceConvergence",
            promptText: "Evaluate the limit of a_n = sqrt(n^2+n) - n.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "1/2",
            stepByStepExplanation:
              "This is an infinity-minus-infinity form, so multiply by the conjugate over itself: [sqrt(n^2+n)-n][sqrt(n^2+n)+n]/[sqrt(n^2+n)+n] = n/[sqrt(n^2+n)+n]. Divide top and bottom by n: 1/[sqrt(1+1/n)+1]. As n approaches infinity, this approaches 1/(1+1)=1/2.",
            difficultyLevel: 5,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: More on Sequences",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/SequencesMore.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 5: Sequences and Series",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/5-introduction",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "monotonic-and-bounded-sequences",
        lessonTitle: "Monotonic and Bounded Sequences",
        estimatedMinutes: 20,
        topicTag: "sequenceConvergence",
        learningGoals: [
          "Determine whether a sequence is monotonic (always increasing or always decreasing)",
          "Determine whether a sequence is bounded, and apply the Monotonic Sequence Theorem",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Proving convergence without finding the limit",
            bodyText:
              "Sometimes it's genuinely hard to compute a sequence's limit directly, but you can still prove convergence exists by checking two structural properties instead: is the sequence monotonic (always moving in the same direction - never increasing then decreasing, or vice versa), and is it bounded (trapped between some fixed upper and lower value)? If both hold, convergence is guaranteed, even without ever finding the actual limiting value.",
          },
          {
            blockType: "keyFormula",
            headingText: "The Monotonic Sequence Theorem",
            bodyText:
              "Every sequence that is both monotonic and bounded converges. Checking monotonic: a sequence is increasing if a_(n+1) > a_n for all n (decreasing if the inequality flips). Checking bounded: find any single number M with |a_n| <= M for every n.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Show that a_n=n/(n+1) converges, using the Monotonic Sequence Theorem instead of computing the limit directly. Increasing: a_(n+1)-a_n = (n+1)/(n+2) - n/(n+1) = [(n+1)^2-n(n+2)] / [(n+2)(n+1)] = 1/[(n+2)(n+1)], which is positive for every n, so the sequence is increasing. Bounded: n/(n+1) is always less than 1 (bounded above) and always at least 1/2 (bounded below, at n=1). Since the sequence is monotonic increasing and bounded, the theorem guarantees it converges - matching what was found directly in an earlier lesson (to the value 1).",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Assuming that monotonic ALONE guarantees convergence. A strictly increasing sequence like a_n=n is monotonic, but it is NOT bounded, so it diverges to infinity instead of converging. The Monotonic Sequence Theorem needs BOTH properties together - monotonic AND bounded - neither one is sufficient by itself.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u12-l3-p1",
            topicTag: "sequenceConvergence",
            promptText: "Is the sequence a_n=1/n monotonic (increasing or decreasing), and is it bounded?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "decreasing and bounded",
            acceptableAnswerVariants: ["monotonic decreasing, bounded", "decreasing, bounded"],
            stepByStepExplanation:
              "a_(n+1)-a_n = 1/(n+1)-1/n = -1/[n(n+1)], which is negative for every n, so the sequence is decreasing. It's also bounded, since 0 < a_n <= 1 for all n. By the Monotonic Sequence Theorem, it converges (to 0).",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u12-l3-p2",
            topicTag: "sequenceConvergence",
            promptText: "Is the sequence a_n=(2n-1)/n monotonic (increasing or decreasing), and is it bounded?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "increasing and bounded",
            acceptableAnswerVariants: ["monotonic increasing, bounded"],
            stepByStepExplanation:
              "Rewrite a_n=2-1/n. As n increases, 1/n decreases, so a_n increases - the sequence is increasing. It's bounded below by a_1=1 and bounded above by 2 (since 1/n is always positive). By the Monotonic Sequence Theorem, it converges (to 2).",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u12-l3-p3",
            topicTag: "sequenceConvergence",
            promptText: "Is the sequence a_n=sqrt(n) monotonic, bounded, and convergent?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "increasing but unbounded, so it diverges",
            acceptableAnswerVariants: ["monotonic but not bounded, diverges", "increasing, unbounded, diverges"],
            stepByStepExplanation:
              "sqrt(n) is monotonic increasing (it never decreases as n grows), but it is NOT bounded above - it grows without bound as n increases. Since it fails the boundedness requirement, the Monotonic Sequence Theorem does not apply, and in fact the sequence diverges to infinity. This shows monotonic behavior alone is never enough to guarantee convergence.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: More on Sequences",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/SequencesMore.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 5: Sequences and Series",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/5-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Series (sequences)",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-bc/bc-series-new",
            resourceType: "interactivePractice",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "infinite-series-and-convergence-tests",
    unitTitle: "Infinite Series and Convergence Tests",
    unitDescription:
      "The divergence, integral, comparison, ratio, root, and alternating series tests, and choosing between them.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Infinite Series and Convergence Tests",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc2-infinite-series-and-convergence-tests-quiz-p1",
          topicTag: "infiniteSeriesConvergence",
          promptText: "Determine whether the series converges, and if so, find its sum.",
          promptMathExpression: "\\sum_{n=0}^\\infty 5\\left(\\dfrac25\\right)^n",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "25/3",
          stepByStepExplanation:
            "This is geometric with a=5 (the n=0 term) and r=2/5. Since |r|<1, it converges to a/(1-r) = 5/(3/5) = 25/3.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc2-infinite-series-and-convergence-tests-quiz-p2",
          topicTag: "infiniteSeriesConvergence",
          promptText: "Determine whether the series converges, and if so, find its sum.",
          promptMathExpression: "\\sum_{n=1}^\\infty \\dfrac{1}{n(n+2)}",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "3/4",
          stepByStepExplanation:
            "Using partial fractions, 1/[n(n+2)] = (1/2)[1/n - 1/(n+2)]. Writing out the partial sum, every term cancels except the first two surviving pieces (1 and 1/2) as N approaches infinity, since 1/(N+1) and 1/(N+2) both shrink to 0. The sum is (1/2)(1+1/2) = 3/4.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc2-infinite-series-and-convergence-tests-quiz-p3",
          topicTag: "infiniteSeriesConvergence",
          promptText: "Does the series sum of (3n)/(5n-2), from n=1 to infinity, converge or diverge?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "diverges",
          stepByStepExplanation:
            "The limit of 3n/(5n-2) as n approaches infinity is 3/5, not 0. By the Divergence Test, the series diverges.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc2-infinite-series-and-convergence-tests-quiz-p4",
          topicTag: "infiniteSeriesConvergence",
          promptText: "Does the series sum of 1/n^1.5, from n=1 to infinity, converge or diverge?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "converges",
          stepByStepExplanation:
            "This is a p-series with p=1.5, and 1.5>1, so it converges (confirmed by the Integral Test).",
          difficultyLevel: 3,
        },
        {
          problemId: "calc2-infinite-series-and-convergence-tests-quiz-p5",
          topicTag: "infiniteSeriesConvergence",
          promptText: "Use direct comparison to determine whether the series sum of 1/(n^2-1), from n=2 to infinity, converges.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "converges",
          stepByStepExplanation:
            "For n>=2, n^2-1 >= n^2/2 (since this holds exactly when n^2>=2, true for n>=2), so 1/(n^2-1) <= 2/n^2. Since sum of 2/n^2 converges (a constant multiple of a p-series with p=2), the given series converges by direct comparison.",
          difficultyLevel: 4,
        },
        {
          problemId: "calc2-infinite-series-and-convergence-tests-quiz-p6",
          topicTag: "infiniteSeriesConvergence",
          promptText: "Use the ratio test to determine whether the series sum of n!/3^n, from n=1 to infinity, converges.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "diverges",
          stepByStepExplanation:
            "a_(n+1)/a_n = [(n+1)!/3^(n+1)] / [n!/3^n] = (n+1)/3. The limit as n approaches infinity is infinity, which is greater than 1. The series diverges by the ratio test.",
          difficultyLevel: 4,
        },
        {
          problemId: "calc2-infinite-series-and-convergence-tests-quiz-p7",
          topicTag: "infiniteSeriesConvergence",
          promptText:
            "Is the series sum of (-1)^(n+1) * n/(n^2+1), from n=1 to infinity, absolutely convergent, conditionally convergent, or divergent?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "conditionally convergent",
          stepByStepExplanation:
            "b_n=n/(n^2+1) approaches 0 and is eventually decreasing, so the Alternating Series Test confirms the series converges. But sum of |a_n| = sum of n/(n^2+1) behaves like the harmonic series sum of 1/n for large n (the limit of their ratio is 1), so by limit comparison it diverges. Since the series converges but not absolutely, it is conditionally convergent.",
          difficultyLevel: 5,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "geometric-and-telescoping-series",
        lessonTitle: "Geometric and Telescoping Series",
        estimatedMinutes: 25,
        topicTag: "infiniteSeriesConvergence",
        learningGoals: [
          "Determine whether a geometric series converges and find its sum when it does",
          "Evaluate a telescoping series by examining its partial sums directly",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "A series is just the limit of its partial sums",
            bodyText:
              "An infinite series sum a_n is defined as the limit, as N approaches infinity, of its partial sums S_N = a_1+a_2+...+a_N. That's the entire definition every test in this unit is ultimately built to investigate indirectly, since computing the exact limit of the partial sums directly is usually impossible. Geometric and telescoping series are the two special cases where you actually CAN find that limit exactly, by hand, which is exactly why they open this unit.",
          },
          {
            blockType: "keyFormula",
            headingText: "The geometric series formula",
            bodyText:
              "A geometric series has the form sum of a*r^n, where each term is the previous term times a constant ratio r. It converges exactly when |r| < 1, and in that case the sum equals a/(1-r), where a is the FIRST term of the series. If |r| >= 1, the series diverges.",
            mathExpression: "\\sum_{n=0}^\\infty ar^n = \\dfrac{a}{1-r} \\quad (|r|<1)",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: geometric series",
            bodyText:
              "Find the sum of the series 3 + 3(1/2) + 3(1/2)^2 + ... (that is, sum from n=1 to infinity of 3*(1/2)^(n-1)). Here a=3 (the first term) and r=1/2. Since |r|<1, the series converges, and its sum is a/(1-r) = 3/(1-1/2) = 3/(1/2) = 6.",
            mathExpression: "\\sum_{n=1}^\\infty 3\\left(\\dfrac12\\right)^{n-1} = 6",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: telescoping series",
            bodyText:
              "Find the sum of the series from n=1 to infinity of 1/[n(n+1)]. Using partial fractions, 1/[n(n+1)] = 1/n - 1/(n+1). Write out the partial sum: S_N = (1-1/2)+(1/2-1/3)+(1/3-1/4)+...+(1/N-1/(N+1)). Every middle term cancels with its neighbor, leaving only the very first piece and the very last: S_N = 1 - 1/(N+1). As N approaches infinity, 1/(N+1) approaches 0, so the series converges to 1.",
            mathExpression: "\\sum_{n=1}^\\infty \\dfrac{1}{n(n+1)} = 1",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Using the geometric series formula a/(1-r) without first checking that |r| < 1 - if it isn't, the series diverges and the formula produces a meaningless number. With telescoping series, the other common mistake is not writing out enough terms of the partial sum to actually see which pieces cancel, which can lead to accidentally dropping the surviving first or last term.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u13-l1-p1",
            topicTag: "infiniteSeriesConvergence",
            promptText: "Determine whether the series converges, and if so, find its sum.",
            promptMathExpression: "\\sum_{n=0}^\\infty 4\\left(\\dfrac13\\right)^n",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "6",
            stepByStepExplanation:
              "This is geometric with a=4 (the n=0 term) and r=1/3. Since |r|<1, it converges to a/(1-r)=4/(2/3)=6.",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u13-l1-p2",
            topicTag: "infiniteSeriesConvergence",
            promptText: "Determine whether the series converges, and if so, find its sum.",
            promptMathExpression: "\\sum_{n=1}^\\infty \\dfrac{2^n}{3^{n-1}}",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "6",
            stepByStepExplanation:
              "Rewrite the general term: 2^n/3^(n-1) = 2*(2/3)^(n-1). This is geometric with a=2 (the n=1 term) and r=2/3. Since |r|<1, it converges to a/(1-r)=2/(1/3)=6.",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u13-l1-p3",
            topicTag: "infiniteSeriesConvergence",
            promptText: "Determine whether the series converges or diverges.",
            promptMathExpression: "\\sum_{n=1}^\\infty \\ln\\!\\left(\\dfrac{n}{n+1}\\right)",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "diverges",
            acceptableAnswerVariants: ["does not converge", "dne"],
            stepByStepExplanation:
              "Rewrite each term as ln(n) - ln(n+1) - a telescoping form. The partial sum is S_N = (ln1-ln2)+(ln2-ln3)+...+(lnN-ln(N+1)) = ln(1) - ln(N+1) = -ln(N+1). As N approaches infinity, -ln(N+1) approaches negative infinity, so the series diverges - a reminder that telescoping doesn't automatically mean convergent.",
            difficultyLevel: 5,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Series - Special Series",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/SeriesSpecialSeries.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 5: Sequences and Series",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/5-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Series",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-bc/bc-series-new",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "the-divergence-test-and-the-integral-test",
        lessonTitle: "The Divergence Test and the Integral Test",
        estimatedMinutes: 25,
        topicTag: "infiniteSeriesConvergence",
        learningGoals: [
          "Apply the Divergence Test as a fast first check, and recognize its converse is false",
          "Apply the Integral Test, connecting it directly to improper integral convergence",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "A free first check, and a direct reuse of the last unit",
            bodyText:
              "The Divergence Test is the fastest, cheapest check available, and it should be the FIRST thing tried on any series: if the individual terms don't even shrink to 0, there's no way their sum could ever settle down. The Integral Test goes the other direction, reusing the exact machinery from the improper integrals unit: if a series' terms behave like a positive, decreasing function f(x), the series converges or diverges together with the improper integral of f.",
          },
          {
            blockType: "keyFormula",
            headingText: "Both tests, and the p-series",
            bodyText:
              "Divergence Test: if the limit of a_n as n approaches infinity is not 0 (or doesn't exist), the series sum a_n diverges. (If the limit IS 0, this test gives no information either way - it only ever proves divergence, never convergence.) Integral Test: if a_n=f(n) for a positive, continuous, decreasing function f, then sum a_n converges exactly when the integral of f(x)dx from some starting point to infinity converges. This gives the p-series result directly: sum of 1/n^p converges if and only if p>1 - the same threshold as the p-integral from the improper integrals unit.",
            mathExpression: "\\sum \\dfrac{1}{n^p} \\text{ converges} \\iff p>1",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: Divergence Test",
            bodyText:
              "Determine whether the series sum of n/(n+1) converges. The limit of n/(n+1) as n approaches infinity is 1, not 0. Since the terms don't approach 0, the series diverges by the Divergence Test - no further work needed.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: Integral Test",
            bodyText:
              "Determine whether the series sum of 1/n^2 (starting at n=1) converges. f(x)=1/x^2 is positive, continuous, and decreasing for x>=1. From the improper integrals unit, the integral of 1/x^2 dx from 1 to infinity converges (to 1). By the Integral Test, the series sum of 1/n^2 also converges. (Note that the Integral Test only confirms convergence here - it does NOT claim the series' sum also equals 1; those are two different numbers computed two different ways.)",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Using the Divergence Test backwards - concluding a series CONVERGES because its terms approach 0. That direction is invalid: a limit of 0 is a NECESSARY condition for convergence, never a SUFFICIENT one. The classic counterexample is the harmonic series, sum of 1/n: its terms shrink to 0, yet the series still diverges (provable with the Integral Test, since the integral of 1/x dx diverges).",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u13-l2-p1",
            topicTag: "infiniteSeriesConvergence",
            promptText: "Does the series sum of n/(2n+1), from n=1 to infinity, converge or diverge?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "diverges",
            stepByStepExplanation:
              "The limit of n/(2n+1) as n approaches infinity is 1/2, not 0. By the Divergence Test, the series diverges.",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u13-l2-p2",
            topicTag: "infiniteSeriesConvergence",
            promptText: "Does the series sum of 1/n^3, from n=1 to infinity, converge or diverge?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "converges",
            stepByStepExplanation:
              "This is a p-series with p=3, and 3>1, so it converges (confirmed by the Integral Test, since the integral of 1/x^3 dx from 1 to infinity converges).",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u13-l2-p3",
            topicTag: "infiniteSeriesConvergence",
            promptText: "Use the Integral Test to determine whether the series converges or diverges.",
            promptMathExpression: "\\sum_{n=2}^\\infty \\dfrac{1}{n(\\ln n)^2}",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "converges",
            stepByStepExplanation:
              "f(x)=1/[x(ln x)^2] is positive, continuous, and decreasing for x>=2. Using u=ln(x), du=dx/x: the integral of 1/[x(ln x)^2] dx from 2 to infinity becomes the integral of 1/u^2 du from ln(2) to infinity, which converges (to 1/ln(2)). By the Integral Test, the series converges.",
            difficultyLevel: 5,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Convergence/Divergence of Series",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/SeriesConvDiv.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Paul's Online Math Notes: The Integral Test",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/IntegralTest.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 5: Sequences and Series",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/5-introduction",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "comparison-tests",
        lessonTitle: "Comparison Tests",
        estimatedMinutes: 25,
        topicTag: "infiniteSeriesConvergence",
        learningGoals: [
          "Apply the direct comparison test, choosing a comparison series in the direction the conclusion needs",
          "Apply the limit comparison test when a direct term-by-term inequality is hard to establish",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "The same idea as improper integrals, applied to series",
            bodyText:
              "The Direct Comparison Test is exactly the comparison test for improper integrals, applied to a sum instead of an integral: squeeze an unknown series between (or against) a known one. The Limit Comparison Test relaxes the requirement of proving a term-by-term inequality, which can be awkward algebraically - instead, it only needs the RATIO of the two series' terms to settle on a finite, positive number, which is often much easier to compute for a messy rational expression.",
          },
          {
            blockType: "keyFormula",
            headingText: "Both comparison tests",
            bodyText:
              "Direct Comparison: if 0 <= a_n <= b_n for all n, then sum b_n converging forces sum a_n to converge, and sum a_n diverging forces sum b_n to diverge. Limit Comparison: if a_n, b_n > 0 and the limit of a_n/b_n as n approaches infinity equals some finite c with c > 0, then sum a_n and sum b_n either both converge or both diverge.",
            mathExpression: "\\lim_{n\\to\\infty}\\dfrac{a_n}{b_n}=c,\\ 0<c<\\infty \\implies \\sum a_n \\text{ and } \\sum b_n \\text{ share a fate}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: direct comparison",
            bodyText:
              "Determine whether the series sum of 1/(n^3+1) converges. For n>=1, n^3+1 > n^3, so 1/(n^3+1) < 1/n^3. Since sum of 1/n^3 converges (a p-series with p=3), and 0 < the given series' terms < those of a convergent series, the Direct Comparison Test guarantees sum of 1/(n^3+1) also converges.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: limit comparison",
            bodyText:
              "Determine whether the series sum of (2n+1)/(n^3-n+1), for n>=2, converges. The dominant behavior for large n looks like 2n/n^3 = 2/n^2, so compare with b_n=1/n^2. The limit of a_n/b_n = [(2n+1)/(n^3-n+1)] * n^2 = (2n^3+n^2)/(n^3-n+1), which approaches 2 as n approaches infinity (dividing every term by n^3). Since this limit is finite and positive, and sum of 1/n^2 converges (p=2), the Limit Comparison Test guarantees the original series also converges.",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "For direct comparison: picking a comparison series that points the wrong direction for the conclusion needed - proving convergence requires a LARGER series that already converges, while proving divergence requires a SMALLER series that already diverges (this is the exact same logic as the improper integral comparison test, just applied to a sum). For limit comparison: forgetting to check that the limit of the ratio is a FINITE, POSITIVE number - a limit of 0 or infinity makes the test inconclusive, providing no information at all.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u13-l3-p1",
            topicTag: "infiniteSeriesConvergence",
            promptText: "Use direct comparison to determine whether the series sum of 1/(n^2+3), from n=1 to infinity, converges.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "converges",
            stepByStepExplanation:
              "For n>=1, n^2+3 > n^2, so 1/(n^2+3) < 1/n^2. Since sum of 1/n^2 converges (p=2), the given series converges by direct comparison.",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u13-l3-p2",
            topicTag: "infiniteSeriesConvergence",
            promptText: "Use limit comparison (with sum of 1/n) to determine whether the series sum of 1/(n-1), from n=2 to infinity, converges.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "diverges",
            stepByStepExplanation:
              "The limit of [1/(n-1)]/[1/n] = n/(n-1), which approaches 1 as n approaches infinity - a finite, positive number. Since sum of 1/n (the harmonic series) diverges, the given series also diverges by limit comparison.",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u13-l3-p3",
            topicTag: "infiniteSeriesConvergence",
            promptText:
              "Use limit comparison (with sum of 1/n^2) to determine whether the series sum of (3n^2+2n)/(n^4+5) converges.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "converges",
            stepByStepExplanation:
              "The limit of [(3n^2+2n)/(n^4+5)] * n^2 = (3n^4+2n^3)/(n^4+5), which approaches 3 as n approaches infinity - a finite, positive number. Since sum of 1/n^2 converges (p=2), the given series also converges by limit comparison.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Comparison Test / Limit Comparison Test",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/ComparisonTest.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 5: Sequences and Series",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/5-introduction",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "the-ratio-test-and-root-test",
        lessonTitle: "The Ratio Test and Root Test",
        estimatedMinutes: 25,
        topicTag: "infiniteSeriesConvergence",
        learningGoals: [
          "Apply the ratio test, especially to series involving factorials",
          "Apply the root test, especially to series where the entire term is raised to the nth power",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Testing how fast consecutive terms shrink",
            bodyText:
              "Both tests ask a similar question in a different way: does each term shrink fast enough, relative to the one before it (ratio test) or relative to its own position n (root test), to guarantee the series converges? These are the two most powerful general-purpose tests in the whole toolkit, and they're usually the right move whenever factorials or exponentials of n are involved - situations where comparison tests get algebraically painful.",
          },
          {
            blockType: "keyFormula",
            headingText: "Both tests",
            bodyText:
              "Ratio Test: let L be the limit as n approaches infinity of |a_(n+1)/a_n|. If L<1, the series converges absolutely. If L>1 (including infinity), it diverges. If L=1, the test is inconclusive. Root Test: let L be the limit as n approaches infinity of the nth root of |a_n|. The same three conclusions apply based on L. The root test is usually faster whenever the ENTIRE term is already raised to the nth power.",
            mathExpression: "L=\\lim_{n\\to\\infty}\\left|\\dfrac{a_{n+1}}{a_n}\\right| \\quad \\text{or} \\quad L=\\lim_{n\\to\\infty}\\sqrt[n]{|a_n|}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: ratio test with a factorial",
            bodyText:
              "Determine convergence of the series sum of 2^n/n!. Form the ratio: a_(n+1)/a_n = [2^(n+1)/(n+1)!] / [2^n/n!] = 2 * n!/(n+1)! = 2/(n+1). The limit as n approaches infinity of 2/(n+1) is 0, which is less than 1. The series converges absolutely by the ratio test - this is also the formal proof that factorial growth eventually overwhelms exponential growth.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: root test with an nth power",
            bodyText:
              "Determine convergence of the series sum of (n/(2n+1))^n. Since the whole term is raised to the nth power, the root test is a natural fit: the nth root of |a_n| is just n/(2n+1). The limit as n approaches infinity of n/(2n+1) is 1/2, which is less than 1. The series converges by the root test - notice how much messier the ratio test would have been here, since raising (n+1)/(2n+3) to the (n+1) power and dividing would be far more awkward to simplify.",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Reaching for the ratio test out of habit on every series, even when the terms already have an nth-power structure that makes the root test dramatically simpler. The other critical mistake: forgetting that L=1 means the test is COMPLETELY INCONCLUSIVE, not a sign of convergence or divergence - a different test entirely is required, since series with L=1 exist that converge (like 1/n^2) and series with L=1 that diverge (like 1/n).",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u13-l4-p1",
            topicTag: "infiniteSeriesConvergence",
            promptText: "Use the ratio test to determine whether the series sum of 3^n/n! converges.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "converges",
            stepByStepExplanation:
              "a_(n+1)/a_n = 3/(n+1). The limit as n approaches infinity is 0, which is less than 1. The series converges by the ratio test.",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u13-l4-p2",
            topicTag: "infiniteSeriesConvergence",
            promptText: "Use the ratio test to determine whether the series sum of n/2^n converges.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "converges",
            stepByStepExplanation:
              "a_(n+1)/a_n = [(n+1)/2^(n+1)] / [n/2^n] = (n+1)/(2n). The limit as n approaches infinity is 1/2, which is less than 1. The series converges by the ratio test.",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u13-l4-p3",
            topicTag: "infiniteSeriesConvergence",
            promptText: "Use the root test to determine whether the series sum of (3n/(4n+1))^n converges.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "converges",
            stepByStepExplanation:
              "The nth root of |a_n| is 3n/(4n+1). The limit as n approaches infinity is 3/4, which is less than 1. The series converges by the root test.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Ratio Test",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/RatioTest.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Paul's Online Math Notes: Root Test",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/RootTest.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.01 Single Variable Calculus",
            resourceUrl: "https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "alternating-series-and-absolute-conditional-convergence",
        lessonTitle: "Alternating Series and Absolute/Conditional Convergence",
        estimatedMinutes: 25,
        topicTag: "infiniteSeriesConvergence",
        learningGoals: [
          "Apply the Alternating Series Test, checking both of its required conditions",
          "Classify a series as absolutely convergent, conditionally convergent, or divergent",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "When alternating signs help you, and when they don't tell the whole story",
            bodyText:
              "A series whose terms alternate between positive and negative has an extra convergence tool available - the Alternating Series Test - that can prove convergence even when the corresponding all-positive series would diverge. That gap is exactly why 'convergent' isn't the whole story for an alternating series: it's worth asking a second question, whether the series would STILL converge if every term were made positive. The two possible answers have names - absolutely convergent, or only conditionally convergent - and they behave differently in more advanced settings (a conditionally convergent series can even be reordered to sum to a different value, or to diverge).",
          },
          {
            blockType: "keyFormula",
            headingText: "The Alternating Series Test, and the two convergence types",
            bodyText:
              "For a series of the form sum of (-1)^n * b_n (or (-1)^(n+1) * b_n) with every b_n > 0, the series converges if b_n is eventually decreasing AND the limit of b_n as n approaches infinity is 0 - both conditions are required together. Separately: a series is absolutely convergent if sum of |a_n| converges (which guarantees sum a_n converges too). If sum a_n converges but sum |a_n| diverges, the series is conditionally convergent.",
            mathExpression: "b_n \\text{ decreasing and } \\lim_{n\\to\\infty} b_n = 0 \\implies \\sum (-1)^n b_n \\text{ converges}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: conditional convergence",
            bodyText:
              "Classify the series sum of (-1)^(n+1)/n (the alternating harmonic series). Here b_n=1/n is decreasing and approaches 0, so the Alternating Series Test confirms it converges. But sum of |a_n| = sum of 1/n is the ordinary harmonic series, which diverges. Since the series converges but not absolutely, it is conditionally convergent.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: absolute convergence",
            bodyText:
              "Classify the series sum of (-1)^n/n^2. Here sum of |a_n| = sum of 1/n^2, a p-series with p=2, which converges. Since the series of absolute values already converges, the original series is absolutely convergent (which automatically guarantees it converges - checking the Alternating Series Test separately isn't even necessary once absolute convergence is established).",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Forgetting to check that b_n is DECREASING before applying the Alternating Series Test - a limit of 0 alone is not enough, both conditions are required together. Also common: assuming any alternating series that converges must be absolutely convergent. Always separately test sum of |a_n| - 'conditionally convergent' (converges only because of the alternating signs) is a common and important classification in its own right, not just an edge case.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u13-l5-p1",
            topicTag: "infiniteSeriesConvergence",
            promptText: "Use the Alternating Series Test to determine whether sum of (-1)^(n+1)/(2n+1) converges.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "converges",
            stepByStepExplanation:
              "b_n=1/(2n+1) is decreasing and approaches 0 as n approaches infinity. Both conditions of the Alternating Series Test are met, so the series converges.",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u13-l5-p2",
            topicTag: "infiniteSeriesConvergence",
            promptText: "Is the series sum of (-1)^n/n^3 absolutely convergent, conditionally convergent, or divergent?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "absolutely convergent",
            stepByStepExplanation:
              "sum of |a_n| = sum of 1/n^3, a p-series with p=3, which converges. Since the series of absolute values converges, the original series is absolutely convergent.",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u13-l5-p3",
            topicTag: "infiniteSeriesConvergence",
            promptText: "Is the series sum of (-1)^n/sqrt(n) absolutely convergent, conditionally convergent, or divergent?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "conditionally convergent",
            stepByStepExplanation:
              "sum of |a_n| = sum of 1/sqrt(n), a p-series with p=1/2, which diverges (p<=1). But b_n=1/sqrt(n) is decreasing and approaches 0, so by the Alternating Series Test the original series does converge. Since it converges but not absolutely, it is conditionally convergent.",
            difficultyLevel: 5,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Alternating Series Test",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/AlternatingSeries.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Paul's Online Math Notes: Absolute Convergence",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/AbsoluteConvergence.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 5: Sequences and Series",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/5-introduction",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "choosing-a-convergence-test",
        lessonTitle: "Choosing a Convergence Test",
        estimatedMinutes: 30,
        topicTag: "infiniteSeriesConvergence",
        learningGoals: [
          "Apply a reliable order of questions to decide which convergence test to try first",
          "Practice full end-to-end reasoning on a mix of series drawn from every test in this unit",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "The hardest and most important skill in this unit",
            bodyText:
              "Every individual test in this unit is mechanical once you know which one to use - the actual hard part of Calculus II's series unit is deciding WHICH test fits a series you've never seen before. There's no substitute for practice, but a reliable order of questions gets you there fast, and following the same order every time turns a stressful judgment call into a routine checklist.",
          },
          {
            blockType: "keyFormula",
            headingText: "The decision checklist",
            bodyText:
              "1) Does the nth term even approach 0? If not, stop - it diverges by the Divergence Test immediately. 2) Is it a special recognizable form? Geometric (constant ratio) uses the geometric series formula directly; telescoping collapses by writing out partial sums; a p-series (1/n^p) converges exactly when p>1. 3) Does it alternate in sign? Check the Alternating Series Test, then separately classify it as absolutely or conditionally convergent. 4) Is it a rational function of n (polynomials, or roots of polynomials)? Try comparison or limit comparison against a p-series built from the dominant-degree behavior. 5) Does it involve a factorial or n in the exponent? The ratio test (factorials) or root test (whole term to the nth power) are usually fastest. 6) Does it match f(n) for a positive, decreasing function you could actually integrate? The Integral Test is often the only tool that works, especially with logarithms.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: the checklist saves work",
            bodyText:
              "Classify the series sum of (n^2+1)/(3n^2+n). Step 1 of the checklist: does the nth term approach 0? The limit as n approaches infinity of (n^2+1)/(3n^2+n) is 1/3, not 0. The series diverges by the Divergence Test - the very first question in the checklist already finishes the problem, with no need to try any of the more complicated tests at all.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: walking the full checklist",
            bodyText:
              "Classify the series sum of n/3^n. Step 1: the limit of n/3^n as n approaches infinity is 0 (exponential beats polynomial), so the Divergence Test is inconclusive - keep going. Step 2: it's not geometric (there's an extra factor of n), not telescoping, not a p-series. Step 3: it doesn't alternate. Step 4/5: it has an exponential, 3^n, which points toward the ratio test. Computing it: a_(n+1)/a_n = [(n+1)/3^(n+1)] / [n/3^n] = (n+1)/(3n), whose limit is 1/3, less than 1. The series converges by the ratio test.",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Jumping straight to the most complicated-looking test (usually ratio or root) out of habit, skipping the free, instant Divergence Test check that resolves many series in one line. Working through the checklist roughly in the order above - divergence test, then special forms, then alternating, then comparison, then ratio/root, then integral test - saves enormous amounts of time when a large number of series need to be classified quickly.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u13-l6-p1",
            topicTag: "infiniteSeriesConvergence",
            promptText: "Classify the series: sum of (3n)/(n+5), from n=1 to infinity.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "diverges",
            stepByStepExplanation:
              "The limit of 3n/(n+5) as n approaches infinity is 3, not 0. The series diverges by the Divergence Test - the first checklist question already answers it.",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u13-l6-p2",
            topicTag: "infiniteSeriesConvergence",
            promptText: "Classify the series: sum of 5^n/n!, from n=1 to infinity.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "converges",
            stepByStepExplanation:
              "The nth term approaches 0 (inconclusive), it's not a special form, and it has a factorial - a strong signal for the ratio test. a_(n+1)/a_n = 5/(n+1), whose limit is 0, less than 1. The series converges by the ratio test.",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u13-l6-p3",
            topicTag: "infiniteSeriesConvergence",
            promptText: "Classify the series: sum of 1/(n*ln(n)), from n=2 to infinity.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "diverges",
            stepByStepExplanation:
              "The nth term approaches 0 (inconclusive). It's not geometric, telescoping, alternating, or a clean p-series, and comparison against a p-series doesn't cleanly settle it either, since 1/(n*ln n) sits right at the boundary between p=1 behavior and something smaller. This is exactly the situation the Integral Test is built for: with u=ln(x), the integral of 1/(x*ln x)dx from 2 to infinity becomes the integral of 1/u du from ln(2) to infinity, which diverges (the antiderivative is ln(u), which grows without bound). By the Integral Test, the series diverges.",
            difficultyLevel: 5,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Strategy for Series",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/SeriesStrategy.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 5: Sequences and Series",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/5-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Series",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-bc/bc-series-new",
            resourceType: "interactivePractice",
          },
          {
            resourceTitle: "MIT OCW 18.01 Single Variable Calculus",
            resourceUrl: "https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/",
            resourceType: "videoLesson",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "power-and-taylor-series",
    unitTitle: "Power Series, Taylor Series, and Maclaurin Series",
    unitDescription: "Radius of convergence, constructing Taylor/Maclaurin series, and error estimation.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Power Series, Taylor Series, and Maclaurin Series",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc2-power-and-taylor-series-quiz-p1",
          topicTag: "infiniteSeriesConvergence",
          promptText: "Find the radius of convergence of the series sum of x^n/(3^n * n), from n=1 to infinity.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "3",
          stepByStepExplanation:
            "With c_n=1/(3^n*n), the ratio test gives the limit of |c_(n+1)/c_n| = limit of n/[3(n+1)] = 1/3. So R=1/(1/3)=3.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc2-power-and-taylor-series-quiz-p2",
          topicTag: "infiniteSeriesConvergence",
          promptText: "Find a power series for 1/(1+x^3), using the geometric series.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "sum of (-1)^n x^(3n)",
          acceptableAnswerVariants: ["Σ(-1)^n x^(3n)", "sum (-1)^n x^(3n) from n=0 to infinity"],
          stepByStepExplanation:
            "Rewrite as 1/(1-(-x^3)) and substitute -x^3 for x in the geometric series: sum of (-x^3)^n = sum of (-1)^n x^(3n), valid for |x|<1.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc2-power-and-taylor-series-quiz-p3",
          topicTag: "infiniteSeriesConvergence",
          promptText: "Find the first three terms of the Maclaurin series for f(x)=e^(-x).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "1-x+x^2/2",
          stepByStepExplanation:
            "Substitute -x for x in the Maclaurin series for e^x: sum of (-x)^n/n! = 1 + (-x) + (-x)^2/2! + ... = 1 - x + x^2/2 - ...",
          difficultyLevel: 3,
        },
        {
          problemId: "calc2-power-and-taylor-series-quiz-p4",
          topicTag: "infiniteSeriesConvergence",
          promptText: "Find the first two nonzero terms of the Taylor series for f(x)=cos(x), centered at a=pi.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "-1+(1/2)(x-pi)^2",
          stepByStepExplanation:
            "f(pi)=-1. f'(x)=-sin(x), so f'(pi)=0. f''(x)=-cos(x), so f''(pi)=1, giving a coefficient of f''(pi)/2!=1/2. f'''(x)=sin(x), so f'''(pi)=0. The series begins -1 + 0*(x-pi) + (1/2)(x-pi)^2 + 0*(x-pi)^3 + ..., so the first two nonzero terms are -1+(1/2)(x-pi)^2.",
          difficultyLevel: 4,
        },
        {
          problemId: "calc2-power-and-taylor-series-quiz-p5",
          topicTag: "infiniteSeriesConvergence",
          promptText: "Using the known Maclaurin series for sin(x), find the first three nonzero terms of the series for sin(x)/x.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "1-x^2/6+x^4/120",
          stepByStepExplanation:
            "Divide the sin(x) series by x: (1/x)(x-x^3/6+x^5/120-...) = 1 - x^2/6 + x^4/120 - ...",
          difficultyLevel: 4,
        },
        {
          problemId: "calc2-power-and-taylor-series-quiz-p6",
          topicTag: "infiniteSeriesConvergence",
          promptText: "Find the interval of convergence of the series sum of (x+1)^n/(n*4^n), from n=1 to infinity.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "[-5,3)",
          stepByStepExplanation:
            "With c_n=1/(n*4^n), the ratio test gives the limit of |c_(n+1)/c_n| = limit of n/[4(n+1)] = 1/4, so R=4, giving the open interval -5<x<3 (centered at a=-1). At x=-5 (x+1=-4): the series becomes sum of (-1)^n/n, which converges by the Alternating Series Test. At x=3 (x+1=4): the series becomes sum of 1/n, the divergent harmonic series. So x=-5 is included and x=3 is not: the interval of convergence is [-5,3).",
          difficultyLevel: 5,
        },
        {
          problemId: "calc2-power-and-taylor-series-quiz-p7",
          topicTag: "infiniteSeriesConvergence",
          promptText:
            "Find the Lagrange error bound for approximating ln(1.1) using the degree-2 Maclaurin polynomial for ln(1+x), using M=2 as the bound on the third derivative on [0,0.1].",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "1/3000",
          acceptableAnswerVariants: ["0.000333", "1/3000"],
          stepByStepExplanation:
            "The error bound is (M/3!)|x|^3 = (2/6)(0.1)^3 = (1/3)(0.001) = 1/3000, using M=2 as a bound on |f'''(z)|=2/(1+z)^3 for z in [0,0.1] (its largest value on that interval, at z=0, is exactly 2).",
          difficultyLevel: 5,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "power-series-and-radius-interval-of-convergence",
        lessonTitle: "Power Series and Radius/Interval of Convergence",
        estimatedMinutes: 30,
        topicTag: "infiniteSeriesConvergence",
        learningGoals: [
          "Use the ratio test on a power series to find its radius of convergence",
          "Separately check both endpoints to determine the full interval of convergence",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "A series that depends on x",
            bodyText:
              "Every series in the last unit had fixed numerical terms. A power series instead has terms built from powers of a variable, sum of c_n(x-a)^n, so whether it converges depends on WHICH x you plug in. For most power series, there's a symmetric interval centered at a where the series converges, and it diverges everywhere outside that interval - the radius of that interval is found with the ratio test, applied directly to the power series' terms.",
          },
          {
            blockType: "keyFormula",
            headingText: "Finding the radius, then the interval",
            bodyText:
              "Apply the ratio test to the general term c_n(x-a)^n: the limit of |c_(n+1)(x-a)^(n+1) / [c_n(x-a)^n]| simplifies to |x-a| times the limit of |c_(n+1)/c_n|. The series converges when this is less than 1, giving a radius of convergence R = 1 / [limit of |c_(n+1)/c_n|] (R is infinite if that limit is 0, and R is 0 if that limit is infinite). The ratio test says nothing about the two endpoints x=a-R and x=a+R (it gives exactly L=1 there) - those must be checked separately, one at a time, with a different test.",
            mathExpression: "R=\\dfrac{1}{\\displaystyle\\lim_{n\\to\\infty}\\left|\\dfrac{c_{n+1}}{c_n}\\right|}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find the interval of convergence of sum of (x-2)^n/(n+1), from n=0 to infinity. Here c_n=1/(n+1), so the limit of |c_(n+1)/c_n| = (n+1)/(n+2), which approaches 1. So R=1/1=1, giving the open interval 1<x<3. Check x=1 (where x-2=-1): the series becomes sum of (-1)^n/(n+1), which converges by the Alternating Series Test. Check x=3 (where x-2=1): the series becomes sum of 1/(n+1), a divergent harmonic-type series. So x=1 is included and x=3 is not: the interval of convergence is [1,3).",
            mathExpression: "\\text{Interval of convergence: } [1,3)",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Forgetting that the ratio test only pins down the OPEN interval where a power series converges - the two endpoints must always be checked SEPARATELY, one at a time, using a different test (usually direct comparison or the Alternating Series Test), since the ratio test itself is exactly inconclusive (L=1) right at those two points.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u14-l1-p1",
            topicTag: "infiniteSeriesConvergence",
            promptText: "Find the radius of convergence of the series sum of x^n/2^n, from n=0 to infinity.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "2",
            stepByStepExplanation:
              "The ratio test on the terms gives the limit of |x|/2. The series converges when |x|/2 < 1, that is, |x| < 2. So R=2.",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u14-l1-p2",
            topicTag: "infiniteSeriesConvergence",
            promptText: "Find the interval of convergence of the series sum of (x-1)^n/n, from n=1 to infinity.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "[0,2)",
            stepByStepExplanation:
              "c_n=1/n, so the limit of |c_(n+1)/c_n|=n/(n+1) approaches 1, giving R=1 and the open interval 0<x<2. At x=0 (x-1=-1): sum of (-1)^n/n converges by the Alternating Series Test. At x=2 (x-1=1): sum of 1/n diverges. The interval of convergence is [0,2).",
            difficultyLevel: 4,
          },
          {
            problemId: "c2-u14-l1-p3",
            topicTag: "infiniteSeriesConvergence",
            promptText: "Find the radius of convergence of the series sum of x^n/n!, from n=0 to infinity.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "infinity",
            acceptableAnswerVariants: ["infinite", "all real numbers", "R=infinity"],
            stepByStepExplanation:
              "The ratio test gives the limit of |x|/(n+1), which approaches 0 for EVERY fixed value of x, no matter how large. Since the limit is always less than 1 regardless of x, the series converges for all real x - the radius of convergence is infinite.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Power Series",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/PowerSeries.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 6: Power Series",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/6-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Series (power series)",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-bc/bc-series-new",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "representing-functions-as-power-series",
        lessonTitle: "Representing Functions as Power Series",
        estimatedMinutes: 25,
        topicTag: "infiniteSeriesConvergence",
        learningGoals: [
          "Use the geometric series to build power series for related rational functions",
          "Differentiate or integrate a known power series term by term to find a new one",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "One series, endlessly recycled",
            bodyText:
              "The geometric series identity from earlier in this unit turns out to be far more powerful than it first looked: 1/(1-x) equals the sum of x^n for |x|<1. Substituting a different expression in place of x, multiplying the whole series by a fresh power of x, or differentiating/integrating the series term by term, all produce valid power series for a whole family of related functions, without ever computing a single derivative from scratch.",
          },
          {
            blockType: "keyFormula",
            headingText: "The starting identity",
            bodyText:
              "1/(1-x) = the sum from n=0 to infinity of x^n, valid for |x|<1. Substituting -x, x^2, or any other expression for x (as long as the substituted expression also has absolute value less than 1) produces a valid new power series immediately.",
            mathExpression: "\\dfrac{1}{1-x}=\\sum_{n=0}^\\infty x^n \\quad (|x|<1)",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: substitution",
            bodyText:
              "Find a power series for 1/(1+x^2). Rewrite as 1/(1-(-x^2)) and substitute -x^2 in place of x in the geometric series: sum of (-x^2)^n = sum of (-1)^n x^(2n), which converges when |-x^2|<1, that is, |x|<1.",
            mathExpression: "\\dfrac{1}{1+x^2}=\\sum_{n=0}^\\infty (-1)^n x^{2n} \\quad (|x|<1)",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: integrating term by term",
            bodyText:
              "Use the previous result to find a power series for arctan(x). Since arctan(x) is the integral of 1/(1+x^2), integrate the series from the previous example term by term (a technique valid inside the interval of convergence): sum of (-1)^n x^(2n+1)/(2n+1). Adding the constant of integration (0, since arctan(0)=0 and the series also equals 0 at x=0), the result is arctan(x) = sum of (-1)^n x^(2n+1)/(2n+1), for |x|<1.",
            mathExpression: "\\arctan x = \\sum_{n=0}^\\infty \\dfrac{(-1)^n x^{2n+1}}{2n+1} \\quad (|x|<1)",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Assuming a manipulated power series automatically keeps the exact same interval of convergence as the original. The radius usually does stay the same, but the ENDPOINT behavior can change - integrating a series can add a convergent endpoint that wasn't there before, and differentiating can remove one - so endpoints always need to be rechecked after any manipulation, not just assumed to carry over.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u14-l2-p1",
            topicTag: "infiniteSeriesConvergence",
            promptText: "Find a power series for 1/(1+x), using the geometric series.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "sum of (-1)^n x^n",
            acceptableAnswerVariants: ["Σ(-1)^n x^n", "sum (-1)^n x^n from n=0 to infinity"],
            stepByStepExplanation:
              "Rewrite as 1/(1-(-x)) and substitute -x for x in the geometric series: sum of (-x)^n = sum of (-1)^n x^n, valid for |x|<1.",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u14-l2-p2",
            topicTag: "infiniteSeriesConvergence",
            promptText: "Find a power series for 1/(1-x^2), using the geometric series.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "sum of x^(2n)",
            acceptableAnswerVariants: ["Σx^(2n)", "sum x^(2n) from n=0 to infinity"],
            stepByStepExplanation:
              "Substitute x^2 for x in the geometric series: sum of (x^2)^n = sum of x^(2n), valid for |x|<1.",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u14-l2-p3",
            topicTag: "infiniteSeriesConvergence",
            promptText: "Find a power series for x^2/(1+x^3), using the geometric series.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "sum of (-1)^n x^(3n+2)",
            acceptableAnswerVariants: ["Σ(-1)^n x^(3n+2)"],
            stepByStepExplanation:
              "First find 1/(1+x^3) by substituting -x^3 for x: sum of (-x^3)^n = sum of (-1)^n x^(3n), valid for |x|<1. Multiply by x^2: x^2/(1+x^3) = sum of (-1)^n x^(3n+2).",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Power Series and Functions",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/PowerSeriesFunctions.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 6: Power Series",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/6-introduction",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "taylor-and-maclaurin-series",
        lessonTitle: "Taylor and Maclaurin Series",
        estimatedMinutes: 30,
        topicTag: "infiniteSeriesConvergence",
        learningGoals: [
          "Construct a Taylor series for a function from its derivatives at a single point",
          "Explain the relationship between a Taylor series and a Maclaurin series",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Building a function out of an infinite polynomial",
            bodyText:
              "A Taylor series represents a function as an infinite polynomial, built entirely from the function's derivatives at one single point. The idea: a good polynomial approximation should match the function's value, slope, curvature, and so on, all at that one point - matching more and more derivatives makes the approximation better and better, and taking ALL of them (infinitely many) can, for many functions, reproduce the function exactly. A Maclaurin series is simply the special case where that point is 0.",
          },
          {
            blockType: "keyFormula",
            headingText: "The Taylor series formula",
            bodyText:
              "The Taylor series of f centered at x=a is the sum from n=0 to infinity of [f^(n)(a)/n!] times (x-a)^n, where f^(n)(a) denotes the nth derivative of f evaluated at a (with f^(0)(a) meaning f(a) itself). Setting a=0 gives the Maclaurin series.",
            mathExpression: "f(x)=\\sum_{n=0}^\\infty \\dfrac{f^{(n)}(a)}{n!}(x-a)^n",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: Maclaurin series for e^x",
            bodyText:
              "Construct the Maclaurin series for f(x)=e^x. Every derivative of e^x is e^x itself, so f^(n)(0)=e^0=1 for every n. The series is: sum from n=0 to infinity of x^n/n! = 1 + x + x^2/2! + x^3/3! + ...",
            mathExpression: "e^x=\\sum_{n=0}^\\infty \\dfrac{x^n}{n!}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: a Taylor series not centered at 0",
            bodyText:
              "Construct the Taylor series for f(x)=ln(x) centered at a=1 (a Maclaurin series is impossible here, since ln(0) is undefined). f(1)=0. f'(x)=1/x, so f'(1)=1. f''(x)=-1/x^2, so f''(1)=-1. f'''(x)=2/x^3, so f'''(1)=2. The pattern for n>=1 is f^(n)(1)=(-1)^(n-1)(n-1)!, so the coefficient f^(n)(1)/n! simplifies to (-1)^(n-1)/n. The series: sum from n=1 to infinity of [(-1)^(n-1)/n](x-1)^n = (x-1) - (x-1)^2/2 + (x-1)^3/3 - ...",
            mathExpression: "\\ln x = \\sum_{n=1}^\\infty \\dfrac{(-1)^{n-1}}{n}(x-1)^n",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Forgetting the n! in the denominator of each coefficient - the formula divides the nth derivative at the center by n FACTORIAL, not by n or by (n-1) factorial. Dropping or misplacing that factorial is the single most common error when constructing a Taylor series by hand directly from the definition.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u14-l3-p1",
            topicTag: "infiniteSeriesConvergence",
            promptText: "Find the first three nonzero terms of the Maclaurin series for f(x)=cos(x).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "1-x^2/2+x^4/24",
            stepByStepExplanation:
              "f(0)=1, f'(0)=0, f''(0)=-1, f'''(0)=0, f''''(0)=1. The nonzero coefficients occur at even n: f(0)/0!=1, f''(0)/2!=-1/2, f''''(0)/4!=1/24. The series begins 1 - x^2/2 + x^4/24 - ...",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u14-l3-p2",
            topicTag: "infiniteSeriesConvergence",
            promptText: "Find the first three terms of the Taylor series for f(x)=sqrt(x), centered at a=4.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "2+(1/4)(x-4)-(1/64)(x-4)^2",
            stepByStepExplanation:
              "f(4)=2. f'(x)=(1/2)x^(-1/2), so f'(4)=1/4. f''(x)=(-1/4)x^(-3/2), so f''(4)=-1/32, and f''(4)/2!=-1/64. The series begins 2 + (1/4)(x-4) - (1/64)(x-4)^2 + ...",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u14-l3-p3",
            topicTag: "infiniteSeriesConvergence",
            promptText: "Find the general term of the Taylor series for f(x)=1/x, centered at a=1.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "sum of (-1)^n (x-1)^n",
            acceptableAnswerVariants: ["Σ(-1)^n(x-1)^n", "sum (-1)^n (x-1)^n from n=0 to infinity"],
            stepByStepExplanation:
              "f^(n)(x)=(-1)^n n! x^(-(n+1)), so f^(n)(1)=(-1)^n n!, and the coefficient f^(n)(1)/n! = (-1)^n. The series is sum of (-1)^n(x-1)^n - which is also exactly the geometric series in disguise, since 1/x = 1/(1-(1-x)) = sum of (1-x)^n = sum of (-1)^n(x-1)^n, confirming the result two different ways.",
            difficultyLevel: 5,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Taylor Series",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/TaylorSeries.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 6: Power Series",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/6-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.01 Single Variable Calculus",
            resourceUrl: "https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "standard-maclaurin-series-and-their-uses",
        lessonTitle: "Standard Maclaurin Series and Their Uses",
        estimatedMinutes: 20,
        topicTag: "infiniteSeriesConvergence",
        learningGoals: [
          "Recall the standard Maclaurin series for e^x, sin(x), cos(x), 1/(1-x), and ln(1+x)",
          "Use a known series (via substitution or multiplication) instead of re-deriving one from scratch",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "The short list worth memorizing",
            bodyText:
              "In practice, almost no one re-derives e^x's or sin(x)'s Maclaurin series from the definition every time it's needed - a short list of standard series gets memorized instead, and new problems get solved by substituting into or combining those, exactly like the previous two lessons demonstrated. This short list is also literally how calculators and computers evaluate functions like sin(x) or e^x internally: they add up enough terms of exactly these series to get the precision they need.",
          },
          {
            blockType: "keyFormula",
            headingText: "The standard Maclaurin series",
            bodyText:
              "e^x = sum of x^n/n! (all x). sin(x) = sum of (-1)^n x^(2n+1)/(2n+1)! (all x). cos(x) = sum of (-1)^n x^(2n)/(2n)! (all x). 1/(1-x) = sum of x^n (|x|<1). ln(1+x) = sum from n=1 of (-1)^(n-1) x^n/n (-1<x<=1). arctan(x) = sum of (-1)^n x^(2n+1)/(2n+1) (-1<=x<=1).",
            mathExpression:
              "e^x=\\sum_{n=0}^\\infty \\dfrac{x^n}{n!}, \\quad \\sin x=\\sum_{n=0}^\\infty \\dfrac{(-1)^n x^{2n+1}}{(2n+1)!}, \\quad \\cos x=\\sum_{n=0}^\\infty \\dfrac{(-1)^n x^{2n}}{(2n)!}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: substitution into a known series",
            bodyText:
              "Find the Maclaurin series for e^(-x^2), using the known series for e^x. Substitute -x^2 in place of x: sum of (-x^2)^n/n! = sum of (-1)^n x^(2n)/n!, valid for all x (since e^x's series has infinite radius). This is exactly the same function from the improper integrals unit whose antiderivative can't be written in elementary terms - but its power series can still be written down, term by term, without any trouble at all.",
            mathExpression: "e^{-x^2}=\\sum_{n=0}^\\infty \\dfrac{(-1)^n x^{2n}}{n!}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: a practical estimate",
            bodyText:
              "Use the sin(x) series to estimate sin(0.1). sin(x) = x - x^3/6 + x^5/120 - ... At x=0.1: 0.1 - (0.001)/6 + (0.0000001)/120 - ... = 0.1 - 0.00016667 + 0.0000000008... which is approximately 0.0998333. This matches the true value of sin(0.1), about 0.0998334, to five decimal places using just two terms - this exact process (adding up enough series terms) is how a calculator computes sin(0.1) internally.",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Re-deriving a standard series like e^x, sin(x), or cos(x) from scratch by computing derivatives every single time it's needed, instead of recognizing the pattern and using the memorized standard series with substitution. Re-deriving is far slower and far more error-prone, especially under time pressure - recognizing 'this is just e^x's series with -x^2 substituted in' should become close to instant.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u14-l4-p1",
            topicTag: "infiniteSeriesConvergence",
            promptText: "Using the known Maclaurin series for e^x, find the first three terms of the series for e^(2x).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "1+2x+2x^2",
            stepByStepExplanation:
              "Substitute 2x for x: sum of (2x)^n/n! = 1 + 2x + (2x)^2/2! + ... = 1 + 2x + 2x^2 + ...",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u14-l4-p2",
            topicTag: "infiniteSeriesConvergence",
            promptText: "Using the known Maclaurin series for cos(x), find the first three nonzero terms of the series for cos(x^2).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "1-x^4/2+x^8/24",
            stepByStepExplanation:
              "Substitute x^2 for x: 1 - (x^2)^2/2! + (x^2)^4/4! - ... = 1 - x^4/2 + x^8/24 - ...",
            difficultyLevel: 3,
          },
          {
            problemId: "c2-u14-l4-p3",
            topicTag: "infiniteSeriesConvergence",
            promptText: "Using the known Maclaurin series for sin(x), find the first three nonzero terms of the series for x*sin(x).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "x^2-x^4/6+x^6/120",
            stepByStepExplanation:
              "Multiply the sin(x) series by x: x*(x - x^3/6 + x^5/120 - ...) = x^2 - x^4/6 + x^6/120 - ...",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Taylor Series",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/TaylorSeries.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Series (Taylor and Maclaurin series)",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-bc/bc-series-new",
            resourceType: "interactivePractice",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 6: Power Series",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/6-introduction",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "taylor-polynomial-approximation-and-error-estimation",
        lessonTitle: "Taylor Polynomial Approximation and Error Estimation",
        estimatedMinutes: 25,
        topicTag: "infiniteSeriesConvergence",
        learningGoals: [
          "Use a finite-degree Taylor polynomial to approximate a function's value",
          "Bound the error of a Taylor polynomial approximation using the Lagrange error bound",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Stopping the series early, on purpose",
            bodyText:
              "In practice, you can never actually add up infinitely many terms - a Taylor POLYNOMIAL is what you get by stopping the full Taylor series after a finite number of terms, used as a practical approximation of the function near the center point. The natural next question is how far off that approximation might be, which is exactly what the Lagrange error bound answers - it guarantees the true error is no worse than a specific, computable number.",
          },
          {
            blockType: "keyFormula",
            headingText: "The Taylor polynomial and its error bound",
            bodyText:
              "The degree-n Taylor polynomial is T_n(x) = the sum from k=0 to n of [f^(k)(a)/k!](x-a)^k. The Lagrange error bound states that the error |f(x)-T_n(x)| is at most M/(n+1)! times |x-a|^(n+1), where M is any number that bounds |f^(n+1)(z)| for every z between a and x.",
            mathExpression: "|f(x)-T_n(x)| \\le \\dfrac{M}{(n+1)!}|x-a|^{n+1}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Approximate e^0.5 using the degree-3 Maclaurin polynomial for e^x, and bound the error. T_3(x)=1+x+x^2/2+x^3/6. T_3(0.5)=1+0.5+0.125+0.020833=1.645833. For the error bound, f^(4)(z)=e^z, and on the interval [0,0.5] this is largest at z=0.5, where e^0.5 is about 1.6487 - a convenient (slightly loose) bound is M=2, since e^0.5<2. The error bound: |R_3(0.5)| <= (2/4!)(0.5)^4 = (2/24)(0.0625) = 0.0052. The true value of e^0.5 is about 1.64872, and the actual error, about 0.0029, is comfortably within that guaranteed bound.",
            mathExpression: "|R_3(0.5)| \\le \\dfrac{2}{4!}(0.5)^4 \\approx 0.0052",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Using the value being approximated itself (or some value outside the relevant interval) to bound M, instead of finding the WORST CASE value of |f^(n+1)(z)| over the entire interval between the center a and the point x. M must be a guaranteed upper bound valid for every z in that whole interval - for an increasing function like e^z, that worst case sits at the far endpoint of the interval, not at a convenient round number chosen after the fact.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c2-u14-l5-p1",
            topicTag: "infiniteSeriesConvergence",
            promptText: "Use the degree-2 Maclaurin polynomial for cos(x) to approximate cos(0.2).",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "0.98",
            stepByStepExplanation:
              "T_2(x)=1-x^2/2. T_2(0.2)=1-(0.04)/2=1-0.02=0.98. (The true value of cos(0.2) is about 0.98007, so this is already a very close approximation.)",
            difficultyLevel: 2,
          },
          {
            problemId: "c2-u14-l5-p2",
            topicTag: "infiniteSeriesConvergence",
            promptText:
              "Find the Lagrange error bound for approximating e^0.2 using the degree-2 Maclaurin polynomial for e^x, using M=2 as the bound on the third derivative.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "1/375",
            acceptableAnswerVariants: ["0.00267", "2/750"],
            stepByStepExplanation:
              "The error bound is (M/3!)(0.2)^3 = (2/6)(0.008) = 0.016/6 = 1/375, using M=2 as a convenient bound on e^z for z in [0,0.2] (since e^0.2 is about 1.221, comfortably less than 2).",
            difficultyLevel: 4,
          },
          {
            problemId: "c2-u14-l5-p3",
            topicTag: "infiniteSeriesConvergence",
            promptText:
              "Using the alternating series error bound (the error is less than the first omitted term), how many nonzero terms of the Maclaurin series for sin(x) are needed to approximate sin(1) with error less than 0.001?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "3 terms",
            acceptableAnswerVariants: ["three terms", "up to the x^5 term", "3"],
            stepByStepExplanation:
              "The terms of the series at x=1 are 1, 1/6 (about 0.1667), 1/120 (about 0.00833), and 1/5040 (about 0.000198). Using only the first term (1) leaves an error bounded by the next term, 0.1667 - too big. Using the first two terms (1 and -1/6) leaves an error bounded by 0.00833 - still too big. Using the first three terms (1, -1/6, and 1/120, i.e. through the x^5 term) leaves an error bounded by the next omitted term, 1/5040 which is about 0.000198, less than 0.001. So 3 terms are needed.",
            difficultyLevel: 5,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Applications of Series",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/ApplicationsOfSeries.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 2, Chapter 6: Power Series",
            resourceUrl: "https://openstax.org/books/calculus-volume-2/pages/6-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Series (Lagrange error bound)",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-bc/bc-series-new",
            resourceType: "interactivePractice",
          },
          {
            resourceTitle: "MIT OCW 18.01 Single Variable Calculus",
            resourceUrl: "https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/",
            resourceType: "videoLesson",
          },
        ],
      },
    ],
  },
];

export const calculus2CourseExam: CourseExam = {
  examTitle: "Calculus II: Course Exam",
  passingScorePercent: 70,
  questions: [
    {
      problemId: "calc2-exam-p1",
      topicTag: "integrationTechniques",
      promptText: "Find the indefinite integral.",
      promptMathExpression: "\\int(4x^3+\\dfrac{6}{x}-3e^x)\\,dx",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "x^4+6ln|x|-3e^x+C",
      stepByStepExplanation:
        "Integral of 4x^3 is x^4. Integral of 6/x is 6ln|x|. Integral of -3e^x is -3e^x. Combine: x^4+6ln|x|-3e^x+C.",
      difficultyLevel: 1,
    },
    {
      problemId: "calc2-exam-p2",
      topicTag: "integrationTechniques",
      promptText: "Evaluate the integral.",
      promptMathExpression: "\\int x^2(x^3-1)^3\\,dx",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "(x^3-1)^4/12+C",
      stepByStepExplanation:
        "Let u=x^3-1, du=3x^2dx, so x^2dx=du/3. The integral becomes (1/3) times the integral of u^3du = (1/3)(u^4/4)+C = (x^3-1)^4/12+C.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc2-exam-p3",
      topicTag: "integrationTechniques",
      promptText: "Evaluate the definite integral.",
      promptMathExpression: "\\int_0^{\\ln 2} \\dfrac{e^x}{e^x+1}\\,dx",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "ln(3/2)",
      acceptableAnswerVariants: ["ln3-ln2", "ln(1.5)"],
      stepByStepExplanation:
        "Let u=e^x+1, du=e^xdx. Bounds: x=0 gives u=2; x=ln2 gives u=3. The integral becomes the integral of du/u from 2 to 3 = ln3-ln2 = ln(3/2).",
      difficultyLevel: 3,
    },
    {
      problemId: "calc2-exam-p4",
      topicTag: "integrationTechniques",
      promptText: "Evaluate the integral.",
      promptMathExpression: "\\int xe^{-x}\\,dx",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "-(x+1)e^(-x)+C",
      acceptableAnswerVariants: ["-xe^(-x)-e^(-x)+C"],
      stepByStepExplanation:
        "Let u=x (du=dx), dv=e^(-x)dx (v=-e^(-x)). Apply the formula: -xe^(-x) - the integral of -e^(-x)dx = -xe^(-x) - e^(-x) + C = -(x+1)e^(-x)+C.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc2-exam-p5",
      topicTag: "integrationTechniques",
      promptText: "Use tabular integration to evaluate the integral.",
      promptMathExpression: "\\int x^2e^{-x}\\,dx",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "-(x^2+2x+2)e^(-x)+C",
      stepByStepExplanation:
        "D column (differentiate x^2): x^2, 2x, 2. I column (integrate e^(-x), one step ahead): -e^(-x), e^(-x), -e^(-x). Multiply diagonally with alternating signs: +(x^2)(-e^(-x)) - (2x)(e^(-x)) + (2)(-e^(-x)) = -x^2e^(-x)-2xe^(-x)-2e^(-x)+C = -(x^2+2x+2)e^(-x)+C.",
      difficultyLevel: 4,
    },
    {
      problemId: "calc2-exam-p6",
      topicTag: "integrationTechniques",
      promptText: "Evaluate the definite integral.",
      promptMathExpression: "\\int_0^{\\pi} x\\cos x\\,dx",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "-2",
      stepByStepExplanation:
        "Let u=x, dv=cos x dx, du=dx, v=sin x. The antiderivative is x sin x + cos x. At x=pi: pi(0)+(-1)=-1. At x=0: 0+1=1. Result: -1-1=-2.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc2-exam-p7",
      topicTag: "integrationTechniques",
      promptText: "Evaluate the integral.",
      promptMathExpression: "\\int \\sec^4 x\\tan^3 x\\,dx",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "tan^4(x)/4+tan^6(x)/6+C",
      stepByStepExplanation:
        "The secant power (4) is even, so save sec^2x: sec^2x*tan^3x*sec^2x dx = tan^3x(1+tan^2x)sec^2x dx. Let u=tan x, du=sec^2x dx. The integral becomes the integral of (u^3+u^5)du = u^4/4+u^6/6+C = tan^4(x)/4+tan^6(x)/6+C.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc2-exam-p8",
      topicTag: "integrationTechniques",
      promptText: "Which trigonometric substitution should be used for the integral of dx/sqrt(36-x^2)?",
      answerFormat: "multipleChoice",
      choices: ["x=6sin(theta)", "x=6tan(theta)", "x=6sec(theta)", "x=36sin(theta)"],
      correctAnswer: "x=6sin(theta)",
      stepByStepExplanation:
        "This matches the form sqrt(a^2-x^2) with a=6, which calls for x=6sin(theta), since 1-sin^2(theta)=cos^2(theta) removes the square root.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc2-exam-p9",
      topicTag: "integrationTechniques",
      promptText: "Evaluate the integral.",
      promptMathExpression: "\\int \\dfrac{dx}{x^2\\sqrt{25-x^2}}",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "-sqrt(25-x^2)/(25x)+C",
      stepByStepExplanation:
        "Let x=5sin(theta), dx=5cos(theta)d(theta), sqrt(25-x^2)=5cos(theta). The integral becomes the integral of 5cos(theta)d(theta)/[25sin^2(theta)*5cos(theta)] = (1/25) times the integral of csc^2(theta)d(theta) = -(1/25)cot(theta)+C. Converting back with sin(theta)=x/5 and cos(theta)=sqrt(25-x^2)/5 gives cot(theta)=sqrt(25-x^2)/x, so the answer is -sqrt(25-x^2)/(25x)+C.",
      difficultyLevel: 5,
    },
    {
      problemId: "calc2-exam-p10",
      topicTag: "integrationTechniques",
      promptText: "Decompose into partial fractions.",
      promptMathExpression: "\\dfrac{x-5}{(x+2)(x-3)}",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "(7/5)/(x+2)-(2/5)/(x-3)",
      stepByStepExplanation:
        "x-5=A(x-3)+B(x+2). At x=3: -2=5B, so B=-2/5. At x=-2: -7=-5A, so A=7/5. Decomposition: (7/5)/(x+2) - (2/5)/(x-3).",
      difficultyLevel: 2,
    },
    {
      problemId: "calc2-exam-p11",
      topicTag: "integrationTechniques",
      promptText: "Evaluate the integral.",
      promptMathExpression: "\\int \\dfrac{2x+3}{(x-1)(x+2)}\\,dx",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "(5/3)ln|x-1|+(1/3)ln|x+2|+C",
      stepByStepExplanation:
        "Decompose: 2x+3=A(x+2)+B(x-1). At x=1: 5=3A, so A=5/3. At x=-2: -1=-3B, so B=1/3. Integrate term by term: (5/3)ln|x-1|+(1/3)ln|x+2|+C.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc2-exam-p12",
      topicTag: "integrationTechniques",
      promptText: "Decompose into partial fractions.",
      promptMathExpression: "\\dfrac{4}{x^2(x+2)}",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "-1/x+2/x^2+1/(x+2)",
      stepByStepExplanation:
        "4=Ax(x+2)+B(x+2)+Cx^2. At x=0: 4=2B, so B=2. At x=-2: 4=4C, so C=1. Matching the x^2-coefficient: 0=A+C, so A=-1. Decomposition: -1/x+2/x^2+1/(x+2).",
      difficultyLevel: 4,
    },
    {
      problemId: "calc2-exam-p13",
      topicTag: "improperIntegrals",
      promptText: "Evaluate the improper integral, or state that it diverges.",
      promptMathExpression: "\\int_1^\\infty \\dfrac{1}{x^5}\\,dx",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "1/4",
      stepByStepExplanation:
        "lim as t approaches infinity of [-1/(4x^4)] from 1 to t = lim of (-1/(4t^4)+1/4) = 1/4.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc2-exam-p14",
      topicTag: "improperIntegrals",
      promptText: "Does the integral of (5+sin x)/x^3 dx from 1 to infinity converge or diverge?",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "converges",
      stepByStepExplanation:
        "Since sin x <= 1, 5+sin x <= 6, so (5+sin x)/x^3 <= 6/x^3. The integral of 6/x^3 dx from 1 to infinity converges (p=3>1). Since 0 <= the integrand <= a convergent function, the comparison test guarantees the original integral converges.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc2-exam-p15",
      topicTag: "areaBetweenCurves",
      promptText: "Find the area of the region bounded by y=x^2-4 and y=4-x^2.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "64/3",
      stepByStepExplanation:
        "x^2-4=4-x^2 gives 2x^2=8, so x=-2 and x=2. On (-2,2), 4-x^2 is on top (test x=0: 4>-4). Area = the integral from -2 to 2 of [(4-x^2)-(x^2-4)]dx = the integral of (8-2x^2)dx = [8x-2x^3/3] from -2 to 2 = 32/3-(-32/3) = 64/3.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc2-exam-p16",
      topicTag: "areaBetweenCurves",
      promptText: "Find the area of the triangular region enclosed by y=x, y=6-x, and y=0.",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "9",
      stepByStepExplanation:
        "The lines cross at x=3, y=3. y=x meets y=0 at x=0, and y=6-x meets y=0 at x=6. Area = the integral from 0 to 3 of x dx, plus the integral from 3 to 6 of (6-x)dx = 4.5+4.5 = 9 (matching one-half times base 6 times height 3).",
      difficultyLevel: 3,
    },
    {
      problemId: "calc2-exam-p17",
      topicTag: "volumesOfRevolution",
      promptText: "The region under y=x^2, from x=0 to x=1, is revolved about the x-axis. Find the volume.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "pi/5",
      acceptableAnswerVariants: ["π/5"],
      stepByStepExplanation:
        "Disk method with radius x^2: V = pi times the integral from 0 to 1 of x^4 dx = pi[x^5/5] from 0 to 1 = pi/5.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc2-exam-p18",
      topicTag: "volumesOfRevolution",
      promptText: "The region under y=x, from x=0 to x=2, is revolved about the y-axis. Find the volume.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "16pi/3",
      acceptableAnswerVariants: ["16π/3"],
      stepByStepExplanation:
        "Each shell has radius x and height x. V = 2*pi times the integral from 0 to 2 of x^2 dx = 2*pi[x^3/3] from 0 to 2 = 2*pi(8/3) = 16pi/3.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc2-exam-p19",
      topicTag: "arcLengthAndSurfaceArea",
      promptText: "Find the arc length of y=(2/3)x^(3/2) from x=0 to x=24.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "248/3",
      stepByStepExplanation:
        "f'(x)=x^(1/2), so [f'(x)]^2=x, and the integrand is sqrt(1+x). L = the integral from 0 to 24 of sqrt(1+x)dx = [(2/3)(1+x)^(3/2)] from 0 to 24 = (2/3)[25^(3/2)-1] = (2/3)(124) = 248/3.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc2-exam-p20",
      topicTag: "arcLengthAndSurfaceArea",
      promptText: "Find the surface area generated by revolving y=(3/4)x, from x=0 to x=8, about the x-axis.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "60pi",
      acceptableAnswerVariants: ["60π"],
      stepByStepExplanation:
        "f'(x)=3/4, so sqrt(1+9/16)=sqrt(25/16)=5/4. S = 2*pi times the integral from 0 to 8 of (3/4)x*(5/4)dx = 2*pi*(15/16)*[x^2/2] from 0 to 8 = 2*pi*(15/16)*32 = 60pi. This matches the cone formula pi*r*l with r=6, l=10: pi(6)(10)=60pi.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc2-exam-p21",
      topicTag: "workAndPhysicalApplications",
      promptText:
        "A force of 10 N stretches a spring 0.25 m beyond its natural length. Find the work done stretching it from its natural length to 0.4 m beyond natural length.",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "3.2",
      stepByStepExplanation:
        "10=k(0.25), so k=40 N/m. W = the integral from 0 to 0.4 of 40x dx = 40[x^2/2] from 0 to 0.4 = 20(0.16) = 3.2 J.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc2-exam-p22",
      topicTag: "workAndPhysicalApplications",
      promptText:
        "A cylindrical tank of radius 2 ft and height 5 ft is full of water (weight density 62.5 lb/ft^3) and is pumped out over the top rim. Find the work done.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "3125pi",
      acceptableAnswerVariants: ["3125π"],
      stepByStepExplanation:
        "Cross-sectional area = pi(2)^2=4*pi ft^2 (constant). A layer at height x (from the bottom) must be lifted (5-x) ft. W = the integral from 0 to 5 of 62.5*4*pi(5-x)dx = 250*pi[5x-x^2/2] from 0 to 5 = 250*pi(12.5) = 3125*pi ft-lb.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc2-exam-p23",
      topicTag: "parametricAndPolarCurves",
      promptText: "Eliminate the parameter to find a rectangular equation for x=3t+1, y=t-2.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "y=(x-7)/3",
      stepByStepExplanation: "From x=3t+1, t=(x-1)/3. Substitute into y=t-2: y=(x-1)/3-2=(x-7)/3.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc2-exam-p24",
      topicTag: "parametricAndPolarCurves",
      promptText: "For x=t^2-1, y=t^3-t, find dy/dx at t=2.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "11/4",
      stepByStepExplanation: "dx/dt=2t, dy/dt=3t^2-1. dy/dx=(3t^2-1)/(2t). At t=2: (12-1)/4=11/4.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc2-exam-p25",
      topicTag: "parametricAndPolarCurves",
      promptText: "Find the area enclosed by one loop of r=4sin(theta), for theta from 0 to pi.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "4pi",
      acceptableAnswerVariants: ["4π"],
      stepByStepExplanation:
        "A = (1/2) times the integral from 0 to pi of 16sin^2(theta) d(theta) = 8 times the integral of sin^2(theta) d(theta). Since the integral of sin^2(theta) over 0 to pi is pi/2, A=8(pi/2)=4pi. This matches the known fact that r=4sin(theta) traces a circle of radius 2, with area pi(2)^2=4pi.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc2-exam-p26",
      topicTag: "parametricAndPolarCurves",
      promptText: "Find the slope of the tangent line to the spiral r=theta at theta=pi.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "pi",
      acceptableAnswerVariants: ["π"],
      stepByStepExplanation:
        "dr/dtheta=1. At theta=pi: r=pi, sin(theta)=0, cos(theta)=-1. dy/dx = [1*0+pi*(-1)]/[1*(-1)-pi*0] = (-pi)/(-1) = pi.",
      difficultyLevel: 4,
    },
    {
      problemId: "calc2-exam-p27",
      topicTag: "sequenceConvergence",
      promptText: "Does the sequence a_n=(7n+2)/(2n-5) converge? If so, to what value?",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "7/2",
      stepByStepExplanation: "Divide top and bottom by n: (7+2/n)/(2-5/n). As n approaches infinity, this approaches 7/2.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc2-exam-p28",
      topicTag: "sequenceConvergence",
      promptText: "Evaluate the limit of the sequence a_n = n*sin(1/n).",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "1",
      stepByStepExplanation:
        "Let t=1/n, so as n approaches infinity, t approaches 0, and n*sin(1/n) = sin(t)/t. This is the standard limit of sin(t)/t as t approaches 0, which equals 1.",
      difficultyLevel: 4,
    },
    {
      problemId: "calc2-exam-p29",
      topicTag: "infiniteSeriesConvergence",
      promptText: "Determine whether the series converges, and if so, find its sum.",
      promptMathExpression: "\\sum_{n=0}^\\infty 3\\left(\\dfrac34\\right)^n",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "12",
      stepByStepExplanation:
        "This is geometric with a=3 (the n=0 term) and r=3/4. Since |r|<1, it converges to a/(1-r) = 3/(1/4) = 12.",
      difficultyLevel: 1,
    },
    {
      problemId: "calc2-exam-p30",
      topicTag: "infiniteSeriesConvergence",
      promptText: "Determine whether the series converges, and if so, find its sum.",
      promptMathExpression: "\\sum_{n=1}^\\infty \\dfrac{1}{(2n-1)(2n+1)}",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "1/2",
      stepByStepExplanation:
        "Using partial fractions, 1/[(2n-1)(2n+1)] = (1/2)[1/(2n-1)-1/(2n+1)]. The partial sum telescopes: S_N=(1/2)[1-1/(2N+1)]. As N approaches infinity, 1/(2N+1) approaches 0, so the series converges to 1/2.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc2-exam-p31",
      topicTag: "infiniteSeriesConvergence",
      promptText: "Use limit comparison (with sum of 1/n^1.5) to determine whether the series sum of sqrt(n)/(n^2+1) converges.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "converges",
      stepByStepExplanation:
        "The limit of [sqrt(n)/(n^2+1)]/[1/n^1.5] = n^2/(n^2+1), which approaches 1 as n approaches infinity - a finite, positive number. Since sum of 1/n^1.5 converges (p=1.5>1), the given series also converges by limit comparison.",
      difficultyLevel: 4,
    },
    {
      problemId: "calc2-exam-p32",
      topicTag: "infiniteSeriesConvergence",
      promptText: "Use the ratio test to determine whether the series sum of (n!)^2/(2n)!, from n=1 to infinity, converges.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "converges",
      stepByStepExplanation:
        "a_(n+1)/a_n = [((n+1)!)^2/(2n+2)!] / [(n!)^2/(2n)!] = (n+1)^2/[(2n+2)(2n+1)] = (n+1)/[2(2n+1)]. The limit as n approaches infinity is 1/4, which is less than 1. The series converges by the ratio test.",
      difficultyLevel: 5,
    },
    {
      problemId: "calc2-exam-p33",
      topicTag: "infiniteSeriesConvergence",
      promptText: "Find the radius of convergence of the series sum of n*x^n/5^n, from n=1 to infinity.",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "5",
      stepByStepExplanation:
        "With c_n=n/5^n, the ratio test gives the limit of |c_(n+1)/c_n| = limit of (n+1)/(5n) = 1/5. So R=1/(1/5)=5.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc2-exam-p34",
      topicTag: "infiniteSeriesConvergence",
      promptText: "Find the first three terms of the power series for 1/(1-2x), using the geometric series.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "1+2x+4x^2",
      stepByStepExplanation:
        "Substitute 2x for x in the geometric series 1/(1-x)=sum of x^n: sum of (2x)^n = 1+2x+(2x)^2+... = 1+2x+4x^2+..., valid for |x|<1/2.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc2-exam-p35",
      topicTag: "infiniteSeriesConvergence",
      promptText: "Find the general term of the Taylor series for f(x)=e^x, centered at a=1.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "sum of e(x-1)^n/n!",
      acceptableAnswerVariants: ["Σe(x-1)^n/n!", "sum e(x-1)^n/n! from n=0 to infinity"],
      stepByStepExplanation:
        "Every derivative of e^x is e^x itself, so f^(n)(1)=e for every n, giving a coefficient of e/n!. The series is sum from n=0 to infinity of [e/n!](x-1)^n.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc2-exam-p36",
      topicTag: "infiniteSeriesConvergence",
      promptText: "Use the degree-3 Maclaurin polynomial for sin(x) to approximate sin(0.3).",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "0.2955",
      stepByStepExplanation:
        "T_3(x)=x-x^3/6. T_3(0.3)=0.3-(0.027)/6=0.3-0.0045=0.2955.",
      difficultyLevel: 4,
    },
  ],
};
