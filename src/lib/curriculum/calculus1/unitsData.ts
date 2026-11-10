import { CourseExam, Unit, UnitQuiz } from "@/lib/types/curriculumTypes";

// Calculus I
// See docs/curriculum/04-calculus-1.md for the full plan.

export const calculus1Units: Unit[] = [
  {
    unitSlug: "limits-and-continuity",
    unitTitle: "Limits and Continuity",
    unitDescription: "Evaluating limits graphically, numerically, and algebraically, and continuity.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Limits and Continuity",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc1-limits-and-continuity-quiz-p1",
          topicTag: "limitsAndContinuity",
          promptText: "Evaluate the limit.",
          promptMathExpression: "\\lim_{x\\to 2}\\dfrac{x^2-4}{x-2}",
          answerFormat: "multipleChoice",
          choices: ["0", "2", "4", "does not exist"],
          correctAnswer: "4",
          stepByStepExplanation:
            "Direct substitution gives 0/0. Factor the numerator: (x-2)(x+2)/(x-2) = x+2 for x not equal to 2. As x approaches 2, this approaches 2+2 = 4.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc1-limits-and-continuity-quiz-p2",
          topicTag: "limitsAndContinuity",
          promptText: "Evaluate the limit.",
          promptMathExpression: "\\lim_{x\\to 0}\\dfrac{\\sin x}{x}",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "1",
          stepByStepExplanation:
            "This is a standard limit that comes up when differentiating trig functions: sin(x)/x approaches 1 as x approaches 0 from either side.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc1-limits-and-continuity-quiz-p3",
          topicTag: "limitsAndContinuity",
          promptText: "Evaluate the limit.",
          promptMathExpression: "\\lim_{x\\to 0}\\dfrac{\\sqrt{x+1}-1}{x}",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "1/2",
          acceptableAnswerVariants: ["0.5"],
          stepByStepExplanation:
            "Direct substitution gives 0/0. Multiply top and bottom by the conjugate sqrt(x+1)+1: the numerator becomes (x+1)-1 = x. The expression is x / [x(sqrt(x+1)+1)], and the x's cancel, leaving 1/(sqrt(x+1)+1). Substituting x=0 gives 1/(1+1) = 1/2.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc1-limits-and-continuity-quiz-p4",
          topicTag: "limitsAndContinuity",
          promptText:
            "Let f(x) = x+2 for x < 1, and f(x) = 4 for x >= 1. Find the left-hand limit of f(x) as x approaches 1.",
          answerFormat: "multipleChoice",
          choices: ["2", "3", "4", "does not exist"],
          correctAnswer: "3",
          stepByStepExplanation:
            "For x approaching 1 from the left, use the x+2 piece: 1+2 = 3.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc1-limits-and-continuity-quiz-p5",
          topicTag: "limitsAndContinuity",
          promptText:
            "Using the same f from the previous question (f(x) = x+2 for x < 1, f(x) = 4 for x >= 1), what type of discontinuity does f have at x = 1?",
          answerFormat: "multipleChoice",
          choices: ["removable", "jump (non-removable)", "infinite", "f is continuous at x = 1"],
          correctAnswer: "jump (non-removable)",
          stepByStepExplanation:
            "The left-hand limit is 3 (from x+2) and the right-hand limit/value is 4 (from the constant piece). Since the two sides disagree, the two-sided limit does not exist, so this is a non-removable jump discontinuity - no single redefined point could fix it.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc1-limits-and-continuity-quiz-p6",
          topicTag: "limitsAndContinuity",
          promptText: "Evaluate the limit.",
          promptMathExpression: "\\lim_{x\\to\\infty}\\dfrac{5x^3-2x}{2x^3+7}",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "5/2",
          stepByStepExplanation:
            "The numerator and denominator both have degree 3 (equal degrees), so the limit is the ratio of the leading coefficients: 5/2.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc1-limits-and-continuity-quiz-p7",
          topicTag: "limitsAndContinuity",
          promptText:
            "By the Intermediate Value Theorem, does f(x) = x^3 - 2x - 5 have a root between x = 2 and x = 3?",
          answerFormat: "multipleChoice",
          choices: ["yes", "no", "cannot be determined", "only if f is differentiable"],
          correctAnswer: "yes",
          stepByStepExplanation:
            "f is a polynomial, so it's continuous everywhere, including on [2,3]. f(2) = 8-4-5 = -1 (negative) and f(3) = 27-6-5 = 16 (positive). Since 0 lies between f(2) and f(3), the IVT guarantees a root somewhere in (2,3).",
          difficultyLevel: 3,
        },
        {
          problemId: "calc1-limits-and-continuity-quiz-p8",
          topicTag: "limitsAndContinuity",
          promptText: "g(x) = (x^2-1)/(x-1) is discontinuous at x = 1. What type of discontinuity is this?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "removable",
          stepByStepExplanation:
            "Factoring gives (x-1)(x+1)/(x-1) = x+1, so the limit as x approaches 1 exists and equals 2, but g(1) is undefined. Since the limit exists, this is a removable discontinuity (a hole at (1,2)).",
          difficultyLevel: 4,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "limits-graphically-and-numerically",
        lessonTitle: "Limits Graphically and Numerically",
        estimatedMinutes: 25,
        topicTag: "limitsAndContinuity",
        learningGoals: [
          "Explain what a limit means in plain language",
          "Estimate a limit from a table of values or a graph",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "What a limit actually asks",
            bodyText:
              "A limit asks: as x gets closer and closer to some number a (from both sides), what value does f(x) get closer and closer to? Notice this is NOT the same question as 'what is f(a)?' The limit describes the trend approaching a, and it can exist even if f(a) is undefined, and it can differ from f(a) even when f(a) is defined. This distinction - trend versus actual value at a point - is the single most important idea in this unit, and it's exactly what makes the derivative (next unit) possible.",
          },
          {
            blockType: "keyFormula",
            headingText: "Limit notation",
            bodyText:
              "We write lim as x approaches a of f(x) equals L to mean: f(x) gets arbitrarily close to L as x gets arbitrarily close to a (but not equal to a).",
            mathExpression: "\\lim_{x \\to a} f(x) = L",
          },
          {
            blockType: "workedExample",
            headingText: "Reading a table of values",
            bodyText:
              "Estimate lim as x approaches 2 of f(x) = (x^2 - 4)/(x - 2). Build a table approaching 2 from both sides: at x = 1.9, f(x) = 3.9; at x = 1.99, f(x) = 3.99; at x = 1.999, f(x) = 3.999. From the other side: at x = 2.1, f(x) = 4.1; at x = 2.01, f(x) = 4.01; at x = 2.001, f(x) = 4.001. Both sides are clearly closing in on 4, even though f(2) itself is undefined (plugging in 2 gives 0/0). So the limit is 4.",
            mathExpression: "\\lim_{x \\to 2} \\dfrac{x^2-4}{x-2} = 4",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Assuming a limit doesn't exist just because the function is undefined at that exact point, or assuming the limit must equal f(a) whenever f(a) IS defined. Neither assumption is safe - always check the trend from both sides, not just the value at the point.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u1-l1-p1",
            topicTag: "limitsAndContinuity",
            promptText:
              "A table shows f(1.9) = 5.9, f(1.99) = 5.99, f(1.999) = 5.999, f(2.001) = 6.001, f(2.01) = 6.01, f(2.1) = 6.1, and f(2) is undefined. Based on this table, what is the limit of f(x) as x approaches 2?",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "6",
            stepByStepExplanation:
              "From both the left (5.9, 5.99, 5.999...) and the right (6.1, 6.01, 6.001...), the values are closing in on 6. The fact that f(2) is undefined doesn't matter - the limit only cares about the trend approaching 2, which is 6.",
            difficultyLevel: 1,
          },
          {
            problemId: "c1-u1-l1-p2",
            topicTag: "limitsAndContinuity",
            promptText: "True or False: If f(3) is undefined, then the limit of f(x) as x approaches 3 cannot exist.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "false",
            acceptableAnswerVariants: ["False"],
            stepByStepExplanation:
              "This is false. A limit only depends on the values of f(x) near a, not at a. A function can be completely undefined at x = 3 (like a hole in the graph) and still have a perfectly well-defined limit as x approaches 3.",
            difficultyLevel: 1,
          },
          {
            problemId: "c1-u1-l1-p3",
            topicTag: "limitsAndContinuity",
            promptText:
              "A table of values for f(x) = sin(x)/x shows: f(-0.1) = 0.9983, f(-0.01) = 0.99998, f(0.01) = 0.99998, f(0.1) = 0.9983, and f(0) is undefined. What is the limit of f(x) as x approaches 0?",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "1",
            stepByStepExplanation:
              "As x gets closer to 0 from either side, f(x) gets closer and closer to 1. This particular limit, lim sin(x)/x as x approaches 0, comes up constantly later when differentiating trig functions.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: The Limit",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/TheLimit.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 1, Chapter 2: Limits",
            resourceUrl: "https://openstax.org/books/calculus-volume-1/pages/2-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Limits and continuity",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-limits-new",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "limit-laws",
        lessonTitle: "Limit Laws",
        estimatedMinutes: 25,
        topicTag: "limitsAndContinuity",
        learningGoals: [
          "Apply the sum, difference, product, quotient, and constant multiple limit laws",
          "Evaluate limits of polynomial and rational functions by direct substitution when it's valid",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Limits play nicely with arithmetic",
            bodyText:
              "As long as the individual limits exist, you can break a complicated limit into pieces: the limit of a sum is the sum of the limits, the limit of a product is the product of the limits, and so on. This is why, for a polynomial or any function built from simple pieces with no division by zero, you can usually just plug the number in directly - that's called evaluating 'by direct substitution,' and it's justified by these laws.",
          },
          {
            blockType: "keyFormula",
            headingText: "The limit laws",
            bodyText:
              "If lim f(x) = F and lim g(x) = G as x approaches a (both finite), then: lim [f(x)+g(x)] = F+G, lim [f(x)-g(x)] = F-G, lim [c*f(x)] = c*F for any constant c, lim [f(x)*g(x)] = F*G, and lim [f(x)/g(x)] = F/G as long as G is not 0.",
            mathExpression:
              "\\lim_{x\\to a}[f(x)+g(x)] = F+G, \\quad \\lim_{x\\to a}\\dfrac{f(x)}{g(x)} = \\dfrac{F}{G}\\ (G \\ne 0)",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Suppose lim f(x) = 4 and lim g(x) = -2 as x approaches 3. Find lim [3f(x) - g(x)]. Using the constant multiple and difference laws: 3f(x) has limit 3(4) = 12, and subtracting the limit of g(x) gives 12 - (-2) = 14.",
            mathExpression: "\\lim_{x\\to 3}[3f(x)-g(x)] = 3(4) - (-2) = 14",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Applying the quotient law when the denominator's limit is 0. The law explicitly requires G is not 0 - when it is, you can't just divide the two limits, and you need the algebraic techniques from the next lesson instead.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u1-l2-p1",
            topicTag: "limitsAndContinuity",
            promptText:
              "If lim f(x) = 5 and lim g(x) = -3 as x approaches 2, find lim [f(x) + 2g(x)] as x approaches 2.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "-1",
            stepByStepExplanation: "lim [f(x)+2g(x)] = 5 + 2(-3) = 5 - 6 = -1.",
            difficultyLevel: 1,
          },
          {
            problemId: "c1-u1-l2-p2",
            topicTag: "limitsAndContinuity",
            promptText: "If lim f(x) = 8 and lim g(x) = 4 as x approaches 1, find lim [f(x)/g(x)] as x approaches 1.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "2",
            stepByStepExplanation: "Since the limit of g(x) is 4, not 0, the quotient law applies directly: 8/4 = 2.",
            difficultyLevel: 2,
          },
          {
            problemId: "c1-u1-l2-p3",
            topicTag: "limitsAndContinuity",
            promptText: "Evaluate the limit by direct substitution.",
            promptMathExpression: "\\lim_{x\\to 1}(3x^2+2x-1)",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "4",
            stepByStepExplanation:
              "This is a polynomial, so the limit laws justify plugging x = 1 directly: 3(1)^2+2(1)-1 = 3+2-1 = 4.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Limit Properties",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/LimitProperties.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Limit properties",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-limits-new",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "evaluating-limits-algebraically",
        lessonTitle: "Evaluating Limits Algebraically",
        estimatedMinutes: 30,
        topicTag: "limitsAndContinuity",
        learningGoals: [
          "Resolve a 0/0 indeterminate form by factoring and cancelling",
          "Resolve a 0/0 indeterminate form involving a square root by rationalizing",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "When direct substitution gives 0/0",
            bodyText:
              "If plugging in a directly gives 0/0, that does NOT mean the limit doesn't exist - it means direct substitution can't answer the question, and the expression needs to be rewritten first. The 0/0 result is a strong hint that (x - a) is a common factor hiding in both the numerator and denominator, waiting to cancel.",
          },
          {
            blockType: "keyFormula",
            headingText: "Two standard techniques",
            bodyText:
              "Factor and cancel: factor the numerator and/or denominator, cancel the common factor that's causing the 0/0, then substitute. Rationalize: when a square root is involved, multiply top and bottom by the conjugate of the radical expression to eliminate the root from whichever part is causing trouble, then simplify and substitute.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: factoring",
            bodyText:
              "Evaluate lim as x approaches 3 of (x^2 - 9)/(x - 3). Direct substitution gives 0/0. Factor the numerator: x^2 - 9 = (x-3)(x+3). Cancel the (x-3): the expression becomes x+3 for all x not equal to 3, and the limit only cares about x near 3, not at 3. So the limit is 3+3 = 6.",
            mathExpression: "\\lim_{x\\to 3}\\dfrac{x^2-9}{x-3} = \\lim_{x\\to 3}(x+3) = 6",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: rationalizing",
            bodyText:
              "Evaluate lim as x approaches 0 of (sqrt(x+4) - 2)/x. Direct substitution gives 0/0. Multiply top and bottom by the conjugate sqrt(x+4)+2: the numerator becomes (x+4) - 4 = x. The expression is now x / [x(sqrt(x+4)+2)], and the x's cancel, leaving 1/(sqrt(x+4)+2). Now substitute x=0: 1/(sqrt(4)+2) = 1/4.",
            mathExpression: "\\lim_{x\\to 0}\\dfrac{\\sqrt{x+4}-2}{x} = \\dfrac{1}{4}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Seeing 0/0 and immediately concluding 'the limit does not exist.' 0/0 is an indeterminate form, not a final answer - it's a signal to simplify algebraically first, and doing so very often reveals a perfectly finite limit.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u1-l3-p1",
            topicTag: "limitsAndContinuity",
            promptText: "Evaluate the limit.",
            promptMathExpression: "\\lim_{x\\to 2}\\dfrac{x^2-4}{x-2}",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "4",
            stepByStepExplanation: "Factor: (x-2)(x+2)/(x-2) = x+2 for x not equal to 2. As x approaches 2, this approaches 2+2=4.",
            difficultyLevel: 2,
          },
          {
            problemId: "c1-u1-l3-p2",
            topicTag: "limitsAndContinuity",
            promptText: "Evaluate the limit.",
            promptMathExpression: "\\lim_{x\\to 5}\\dfrac{x^2-25}{x-5}",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "10",
            stepByStepExplanation: "Factor: (x-5)(x+5)/(x-5) = x+5 for x not equal to 5. As x approaches 5, this approaches 10.",
            difficultyLevel: 2,
          },
          {
            problemId: "c1-u1-l3-p3",
            topicTag: "limitsAndContinuity",
            promptText: "Evaluate the limit.",
            promptMathExpression: "\\lim_{x\\to 0}\\dfrac{\\sqrt{x+9}-3}{x}",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "1/6",
            stepByStepExplanation:
              "Multiply by the conjugate sqrt(x+9)+3: numerator becomes (x+9)-9 = x. The expression simplifies to 1/(sqrt(x+9)+3). Substituting x=0 gives 1/(3+3) = 1/6.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Computing Limits",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/ComputingLimits.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Strategy in finding limits",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-limits-new",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "one-sided-limits-and-when-a-limit-fails-to-exist",
        lessonTitle: "One-Sided Limits and When a Limit Fails to Exist",
        estimatedMinutes: 20,
        topicTag: "limitsAndContinuity",
        learningGoals: [
          "Evaluate left-hand and right-hand limits separately",
          "Determine whether a two-sided limit exists by comparing the two one-sided limits",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Approaching from just one direction",
            bodyText:
              "A one-sided limit only looks at what happens as x approaches a from one direction: the left (values less than a) or the right (values greater than a). The left-hand limit is written with a small minus sign, the right-hand limit with a small plus sign, in the exponent position next to a.",
          },
          {
            blockType: "keyFormula",
            headingText: "The existence rule",
            bodyText:
              "The two-sided limit as x approaches a exists, and equals L, if and only if both one-sided limits exist and are equal to the same value L. If the two sides disagree, or either side fails to settle on a finite number, the two-sided limit does not exist.",
            mathExpression: "\\lim_{x\\to a} f(x) = L \\iff \\lim_{x\\to a^-} f(x) = L = \\lim_{x\\to a^+} f(x)",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Let f(x) = x+1 for x less than 2, and f(x) = x^2 for x greater than or equal to 2. Find the left-hand and right-hand limits as x approaches 2. From the left, use the x+1 piece: as x approaches 2, x+1 approaches 3. From the right, use the x^2 piece: as x approaches 2, x^2 approaches 4. Since 3 does not equal 4, the two-sided limit as x approaches 2 does not exist.",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Checking only one side of a piecewise function (usually whichever piece looks easier to plug into) and declaring the limit exists, without ever checking whether the other side agrees.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u1-l4-p1",
            topicTag: "limitsAndContinuity",
            promptText:
              "Let f(x) = 3x - 1 for x < 1, and f(x) = 5 for x >= 1. Find the left-hand limit of f(x) as x approaches 1.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "2",
            stepByStepExplanation: "For x approaching 1 from the left, use 3x-1: 3(1)-1 = 2.",
            difficultyLevel: 2,
          },
          {
            problemId: "c1-u1-l4-p2",
            topicTag: "limitsAndContinuity",
            promptText: "Using the same f from the previous problem, does the two-sided limit of f(x) as x approaches 1 exist?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "does not exist",
            acceptableAnswerVariants: ["no", "dne", "does not exist (DNE)"],
            stepByStepExplanation:
              "The left-hand limit is 2, and the right-hand limit uses the constant piece, which is 5. Since 2 does not equal 5, the two-sided limit does not exist.",
            difficultyLevel: 2,
          },
          {
            problemId: "c1-u1-l4-p3",
            topicTag: "limitsAndContinuity",
            promptText: "Does the limit of 1/x^2 as x approaches 0 exist as a finite number?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "no",
            acceptableAnswerVariants: ["does not exist", "dne", "infinity"],
            stepByStepExplanation:
              "As x approaches 0 from either side, x^2 is a tiny positive number, so 1/x^2 grows without bound toward positive infinity. Since it doesn't settle on a finite number, the limit does not exist (it diverges to infinity).",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: One-Sided Limits",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/OneSidedLimits.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: One-sided limits",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-limits-new",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "continuity",
        lessonTitle: "Continuity",
        estimatedMinutes: 25,
        topicTag: "limitsAndContinuity",
        learningGoals: [
          "State the three-part definition of continuity at a point",
          "Classify a discontinuity as removable or non-removable",
        ],
        contentBlocks: [
          {
            blockType: "keyFormula",
            headingText: "The three-part definition",
            bodyText:
              "f is continuous at x = a when all three of these hold: (1) f(a) is defined, (2) the limit of f(x) as x approaches a exists, and (3) that limit actually equals f(a). If any one of the three fails, f is discontinuous at a.",
            mathExpression: "f(a) \\text{ defined, } \\lim_{x\\to a}f(x) \\text{ exists, and } \\lim_{x\\to a}f(x) = f(a)",
          },
          {
            blockType: "explanation",
            headingText: "Removable vs. non-removable",
            bodyText:
              "A removable discontinuity (a 'hole') happens when the limit exists but doesn't match f(a), or f(a) is simply missing - you could 'fix' it by redefining a single point. A non-removable discontinuity happens when the limit itself fails to exist, either because of a jump (the one-sided limits disagree) or because the function blows up toward infinity - no single point redefinition can fix that.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Classify the discontinuity of f(x) = (x^2-1)/(x-1) at x = 1. f(1) is undefined (0/0). But the limit as x approaches 1 exists: factoring gives (x-1)(x+1)/(x-1) = x+1, so the limit is 2. Since the limit exists but f(1) doesn't, this is a removable discontinuity - a hole at (1, 2).",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Calling every discontinuity 'the same kind.' A hole (removable) behaves very differently from a vertical asymptote (non-removable, infinite) or a jump between two pieces (non-removable) - always check whether the two-sided limit exists first before classifying.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u1-l5-p1",
            topicTag: "limitsAndContinuity",
            promptText: "f(x) = (x^2-4)/(x-2) is discontinuous at x = 2. What type of discontinuity is this?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "removable",
            stepByStepExplanation:
              "Factoring gives (x-2)(x+2)/(x-2) = x+2, so the limit as x approaches 2 exists and equals 4, but f(2) is undefined. Since the limit exists, this is removable (a hole at (2,4)).",
            difficultyLevel: 2,
          },
          {
            problemId: "c1-u1-l5-p2",
            topicTag: "limitsAndContinuity",
            promptText: "g(x) = 1/(x-3) is discontinuous at x = 3. What type of discontinuity is this?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "infinite",
            acceptableAnswerVariants: ["non-removable", "vertical asymptote"],
            stepByStepExplanation:
              "As x approaches 3 from either side, 1/(x-3) grows without bound (positive from the right, negative from the left). The limit does not exist as a finite number, so this is an infinite (non-removable) discontinuity - a vertical asymptote.",
            difficultyLevel: 2,
          },
          {
            problemId: "c1-u1-l5-p3",
            topicTag: "limitsAndContinuity",
            promptText: "Is f(x) = x^2 - 3x + 2 continuous at x = 5?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "yes",
            acceptableAnswerVariants: ["continuous"],
            stepByStepExplanation:
              "Polynomials are continuous everywhere: f(5) is defined, the limit as x approaches 5 exists (by direct substitution), and it equals f(5). All three conditions hold.",
            difficultyLevel: 1,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Continuity",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/Continuity.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Continuity",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-limits-new",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "limits-at-infinity-and-horizontal-asymptotes",
        lessonTitle: "Limits at Infinity and Horizontal Asymptotes",
        estimatedMinutes: 25,
        topicTag: "limitsAndContinuity",
        learningGoals: [
          "Evaluate limits as x approaches positive or negative infinity for rational functions",
          "Identify a function's horizontal asymptote(s) from a limit at infinity",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "What happens 'way out there'",
            bodyText:
              "A limit at infinity asks what value f(x) settles toward as x grows without bound in the positive or negative direction. For a rational function (polynomial divided by polynomial), the answer is entirely decided by comparing the degree of the top to the degree of the bottom.",
          },
          {
            blockType: "keyFormula",
            headingText: "The three cases for rational functions",
            bodyText:
              "Compare the degree of the numerator to the degree of the denominator. If the numerator's degree is smaller, the limit is 0. If the degrees are equal, the limit is the ratio of the leading coefficients. If the numerator's degree is larger, the limit is infinite (positive or negative infinity), so there's no horizontal asymptote.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Evaluate lim as x approaches infinity of (3x^2+2x-1)/(5x^2-x+4). Both top and bottom have degree 2 (equal degrees), so divide every term by x^2, the highest power present: (3 + 2/x - 1/x^2)/(5 - 1/x + 4/x^2). As x grows huge, every term with x in the denominator vanishes, leaving 3/5. This also tells you y = 3/5 is a horizontal asymptote.",
            mathExpression: "\\lim_{x\\to\\infty}\\dfrac{3x^2+2x-1}{5x^2-x+4} = \\dfrac{3}{5}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Skipping the 'divide every term by the highest power of x' step and just comparing leading terms by eyeballing it, which works for the equal-degree case but leads to sign and value errors once square roots or degree mismatches are involved.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u1-l6-p1",
            topicTag: "limitsAndContinuity",
            promptText: "Evaluate the limit.",
            promptMathExpression: "\\lim_{x\\to\\infty}\\dfrac{2x+3}{4x-5}",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "1/2",
            stepByStepExplanation: "Equal degrees (both degree 1), so the limit is the ratio of leading coefficients: 2/4 = 1/2.",
            difficultyLevel: 2,
          },
          {
            problemId: "c1-u1-l6-p2",
            topicTag: "limitsAndContinuity",
            promptText: "Evaluate the limit.",
            promptMathExpression: "\\lim_{x\\to\\infty}\\dfrac{x^3}{x^2+1}",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "infinity",
            acceptableAnswerVariants: ["does not exist", "dne", "∞"],
            stepByStepExplanation:
              "The numerator's degree (3) is larger than the denominator's degree (2), so the fraction grows without bound. The limit is infinity, meaning it does not exist as a finite number.",
            difficultyLevel: 3,
          },
          {
            problemId: "c1-u1-l6-p3",
            topicTag: "limitsAndContinuity",
            promptText: "Evaluate the limit.",
            promptMathExpression: "\\lim_{x\\to -\\infty}\\dfrac{5x^2-1}{2x^2+3x}",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "5/2",
            stepByStepExplanation:
              "Equal degrees (both degree 2), so the limit is the ratio of leading coefficients, 5/2, regardless of whether x approaches positive or negative infinity, since only even powers of x dominate here.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Limits at Infinity, Part I",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/LimitsAtInfinityI.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.01, Unit 1: Derivatives",
            resourceUrl: "https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "the-intermediate-value-theorem",
        lessonTitle: "The Intermediate Value Theorem",
        estimatedMinutes: 20,
        topicTag: "limitsAndContinuity",
        learningGoals: [
          "State the Intermediate Value Theorem and its hypotheses",
          "Use the IVT to prove a root exists in a given interval",
        ],
        contentBlocks: [
          {
            blockType: "keyFormula",
            headingText: "The Intermediate Value Theorem (IVT)",
            bodyText:
              "If f is continuous on the closed interval [a,b], and N is any value between f(a) and f(b), then there exists at least one c in (a,b) with f(c) = N. In plain terms: a continuous function can't skip over any value between two outputs it actually hits.",
          },
          {
            blockType: "explanation",
            headingText: "The most common use: proving a root exists",
            bodyText:
              "The most common application is proving a solution to f(x) = 0 exists somewhere in an interval, without having to solve for it exactly. If f(a) and f(b) have opposite signs, then 0 is between them, so the IVT guarantees a root somewhere in (a,b).",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Show that f(x) = x^3 - x - 1 has a root between x=1 and x=2. f is a polynomial, so it's continuous everywhere, including on [1,2]. f(1) = 1 - 1 - 1 = -1, and f(2) = 8 - 2 - 1 = 5. Since f(1) is negative and f(2) is positive, 0 is between them, so by the IVT there's a c in (1,2) with f(c) = 0.",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Thinking the IVT tells you exactly where the root is, or that there's exactly one root in the interval. It only guarantees existence of at least one - finding the actual value takes other tools, and there could be more than one root in the interval.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u1-l7-p1",
            topicTag: "limitsAndContinuity",
            promptText:
              "For f(x) = x^2 - 2, f(1) = -1 and f(2) = 2. Does the IVT guarantee a root of f(x) = 0 between x=1 and x=2?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "true",
            acceptableAnswerVariants: ["yes"],
            stepByStepExplanation:
              "f is a polynomial (continuous everywhere), f(1) is negative and f(2) is positive, so 0 lies between f(1) and f(2). The IVT guarantees a root in (1,2).",
            difficultyLevel: 2,
          },
          {
            problemId: "c1-u1-l7-p2",
            topicTag: "limitsAndContinuity",
            promptText:
              "For f(x) = x^3 + x - 5, between which two consecutive integers does the IVT guarantee a root?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "1 and 2",
            acceptableAnswerVariants: ["between 1 and 2", "[1,2]"],
            stepByStepExplanation:
              "f(1) = 1+1-5 = -3 (negative), and f(2) = 8+2-5 = 5 (positive). Since f is continuous and changes sign between 1 and 2, the IVT guarantees a root there.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: The Definition of the Limit (IVT section)",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/DefnOfLimit.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Intermediate value theorem",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-limits-new",
            resourceType: "interactivePractice",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "derivative-definition-and-rules",
    unitTitle: "The Derivative: Definition and Basic Rules",
    unitDescription: "The limit definition of the derivative, plus the power, product, and quotient rules.",
    unitQuiz: {
      quizTitle: "Unit Quiz: The Derivative: Definition and Basic Rules",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc1-derivative-definition-and-rules-quiz-p1",
          topicTag: "derivativeDefinitionAndRules",
          promptText: "Use the limit definition of the derivative to find f'(x) for f(x) = x^2-4x.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "2x-4",
          stepByStepExplanation:
            "f(x+h) = (x+h)^2-4(x+h) = x^2+2xh+h^2-4x-4h. Subtract f(x): 2xh+h^2-4h. Divide by h: 2x+h-4. Take the limit as h approaches 0: 2x-4.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc1-derivative-definition-and-rules-quiz-p2",
          topicTag: "derivativeDefinitionAndRules",
          promptText: "For s(t) = t^2+2t, find the average velocity from t=1 to t=3.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "6",
          stepByStepExplanation:
            "[s(3)-s(1)]/(3-1) = [(9+6)-(1+2)]/2 = [15-3]/2 = 6.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc1-derivative-definition-and-rules-quiz-p3",
          topicTag: "derivativeDefinitionAndRules",
          promptText: "Differentiate the constant function f(x) = 7.",
          answerFormat: "multipleChoice",
          choices: ["0", "7", "1", "undefined"],
          correctAnswer: "0",
          stepByStepExplanation: "By the constant rule, the derivative of any constant is 0.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc1-derivative-definition-and-rules-quiz-p4",
          topicTag: "derivativeDefinitionAndRules",
          promptText: "Differentiate.",
          promptMathExpression: "f(x) = 6x^5 - 4x^3 + 2x - 9",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "30x^4-12x^2+2",
          stepByStepExplanation:
            "d/dx[6x^5]=30x^4, d/dx[-4x^3]=-12x^2, d/dx[2x]=2, d/dx[-9]=0. Total: 30x^4-12x^2+2.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc1-derivative-definition-and-rules-quiz-p5",
          topicTag: "derivativeDefinitionAndRules",
          promptText: "Use the product rule to differentiate f(x) = (3x+2)(x^2-1).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "9x^2+4x-3",
          stepByStepExplanation:
            "f'(x) = 3(x^2-1) + (3x+2)(2x) = 3x^2-3+6x^2+4x = 9x^2+4x-3.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc1-derivative-definition-and-rules-quiz-p6",
          topicTag: "derivativeDefinitionAndRules",
          promptText: "Use the quotient rule to differentiate f(x) = (x-2)/(x+3).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "5/(x+3)^2",
          stepByStepExplanation:
            "f'(x) = [1*(x+3) - (x-2)*1]/(x+3)^2 = [x+3-x+2]/(x+3)^2 = 5/(x+3)^2.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc1-derivative-definition-and-rules-quiz-p7",
          topicTag: "derivativeDefinitionAndRules",
          promptText:
            "The tangent line to f(x)=x^2 at x=3 has slope f'(3)=6, and f(3)=9. Which equation is the tangent line, in slope-intercept form?",
          answerFormat: "multipleChoice",
          choices: ["y=6x-9", "y=6x+9", "y=9x-6", "y=3x+6"],
          correctAnswer: "y=6x-9",
          stepByStepExplanation:
            "Point-slope form: y-9 = 6(x-3). Distribute: y-9 = 6x-18. Add 9: y = 6x-9.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc1-derivative-definition-and-rules-quiz-p8",
          topicTag: "derivativeDefinitionAndRules",
          promptText: "For f(x) = x^3, use the power rule to find f'(x), then evaluate f'(2).",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "12",
          stepByStepExplanation: "f'(x) = 3x^2, so f'(2) = 3(4) = 12.",
          difficultyLevel: 3,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "the-derivative-as-a-limit",
        lessonTitle: "The Derivative as a Limit",
        estimatedMinutes: 30,
        topicTag: "derivativeDefinitionAndRules",
        learningGoals: [
          "Write and interpret the difference quotient",
          "Use the limit definition of the derivative to differentiate a simple function",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "From secant slope to tangent slope",
            bodyText:
              "The slope between two points on a curve, f(x) and f(x+h), is a secant line slope: [f(x+h) - f(x)] / h. That's an average rate of change over a gap of size h. The derivative is what happens to that slope as the gap h shrinks to zero - it's the slope of the tangent line at the single point x, i.e. the instantaneous rate of change. This is exactly the same limit idea from the last unit, now applied to a ratio that measures steepness.",
          },
          {
            blockType: "keyFormula",
            headingText: "The limit definition of the derivative",
            bodyText:
              "The derivative of f at x, written f'(x), is defined as the limit of the difference quotient as h approaches 0. f'(x) exists exactly when this limit exists.",
            mathExpression: "f'(x) = \\lim_{h\\to 0}\\dfrac{f(x+h)-f(x)}{h}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find f'(x) for f(x) = x^2 using the definition. First expand f(x+h) = (x+h)^2 = x^2+2xh+h^2. The difference quotient is [f(x+h)-f(x)]/h = [x^2+2xh+h^2-x^2]/h = (2xh+h^2)/h. Factor h out of the numerator and cancel with the h in the denominator: 2x+h. Now take the limit as h approaches 0: 2x+0 = 2x. So f'(x) = 2x.",
            mathExpression: "f(x)=x^2 \\implies f'(x) = 2x",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Trying to plug h = 0 into the difference quotient before simplifying algebraically. That gives 0/0 every single time, because f(x+h)-f(x) is always 0 when h is 0. You must factor and cancel the h first, THEN take the limit.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u2-l1-p1",
            topicTag: "derivativeDefinitionAndRules",
            promptText: "Use the limit definition of the derivative to find f'(x) for f(x) = 3x+5.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "3",
            stepByStepExplanation:
              "f(x+h)-f(x) = [3(x+h)+5] - [3x+5] = 3h. Dividing by h gives 3. The limit as h approaches 0 of the constant 3 is just 3.",
            difficultyLevel: 1,
          },
          {
            problemId: "c1-u2-l1-p2",
            topicTag: "derivativeDefinitionAndRules",
            promptText: "Use the limit definition of the derivative to find f'(x) for f(x) = x^2+2x.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "2x+2",
            stepByStepExplanation:
              "f(x+h) = (x+h)^2+2(x+h) = x^2+2xh+h^2+2x+2h. Subtract f(x): 2xh+h^2+2h. Divide by h: 2x+h+2. Take the limit as h approaches 0: 2x+2.",
            difficultyLevel: 3,
          },
          {
            problemId: "c1-u2-l1-p3",
            topicTag: "derivativeDefinitionAndRules",
            promptText: "Using f'(x) = 2x (the derivative of f(x)=x^2 found above), find f'(3).",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "6",
            stepByStepExplanation: "f'(x) = 2x, so f'(3) = 2(3) = 6. This is the slope of the tangent line to y=x^2 at x=3.",
            difficultyLevel: 1,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: The Definition of the Derivative",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/DefnOfDerivative.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 1, Chapter 3: Derivatives",
            resourceUrl: "https://openstax.org/books/calculus-volume-1/pages/3-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.01, Unit 1: Derivatives",
            resourceUrl: "https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "derivative-as-slope-and-as-rate-of-change",
        lessonTitle: "Derivative as Slope and as Rate of Change",
        estimatedMinutes: 20,
        topicTag: "derivativeDefinitionAndRules",
        learningGoals: [
          "Distinguish average rate of change (secant slope) from instantaneous rate of change (derivative)",
          "Interpret a derivative value in context, such as velocity",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Two different questions",
            bodyText:
              "'What was your average speed over the whole trip?' and 'How fast were you going at exactly 2:00pm?' are different questions with different answers. The first is an average rate of change - the slope of the line connecting the start and end points, exactly like the slope formula from algebra. The second is an instantaneous rate of change - the derivative at that single moment.",
          },
          {
            blockType: "keyFormula",
            headingText: "Average vs. instantaneous rate",
            bodyText:
              "Average rate of change of f from a to b: [f(b)-f(a)]/(b-a), the secant line slope. Instantaneous rate of change of f at a: f'(a), the tangent line slope.",
            mathExpression: "\\text{average} = \\dfrac{f(b)-f(a)}{b-a} \\qquad \\text{instantaneous} = f'(a)",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "A ball's height is s(t) = t^2+3t (in feet, t in seconds). Find its average velocity from t=1 to t=3, and its instantaneous velocity at t=1. Average: [s(3)-s(1)]/(3-1) = [(9+9)-(1+3)]/2 = [18-4]/2 = 7 ft/s. Instantaneous: s'(t) = 2t+3, so s'(1) = 2(1)+3 = 5 ft/s. These are genuinely different numbers answering genuinely different questions.",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Using the average rate of change formula when a problem asks for the rate 'at' a specific instant (or vice versa). Watch the wording: 'average rate over an interval' means secant slope; 'rate at a point' or 'instantaneous rate' means the derivative.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u2-l2-p1",
            topicTag: "derivativeDefinitionAndRules",
            promptText: "For s(t) = t^2, find the average velocity from t=2 to t=5.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "7",
            stepByStepExplanation: "[s(5)-s(2)]/(5-2) = (25-4)/3 = 21/3 = 7.",
            difficultyLevel: 2,
          },
          {
            problemId: "c1-u2-l2-p2",
            topicTag: "derivativeDefinitionAndRules",
            promptText: "For s(t) = t^2, with s'(t) = 2t, find the instantaneous velocity at t=2.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "4",
            stepByStepExplanation: "s'(2) = 2(2) = 4.",
            difficultyLevel: 1,
          },
          {
            problemId: "c1-u2-l2-p3",
            topicTag: "derivativeDefinitionAndRules",
            promptText:
              "The tangent line to f at x=3 has slope 7, and f(3)=10. Write the equation of the tangent line in slope-intercept form.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "y=7x-11",
            acceptableAnswerVariants: ["y = 7x - 11"],
            stepByStepExplanation:
              "Point-slope form: y-10 = 7(x-3). Distribute: y-10 = 7x-21. Add 10: y = 7x-11.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Interpretations of the Derivative",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/InterpretationsOfDerivative.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Derivatives: definition and basic rules",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-differentiation-1-new",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "the-power-rule-and-basic-rules",
        lessonTitle: "The Power Rule and Basic Rules",
        estimatedMinutes: 25,
        topicTag: "derivativeDefinitionAndRules",
        learningGoals: [
          "Apply the power rule to differentiate x raised to any power",
          "Apply the constant, constant multiple, sum, and difference rules",
        ],
        contentBlocks: [
          {
            blockType: "keyFormula",
            headingText: "The basic differentiation rules",
            bodyText:
              "Power rule: d/dx[x^n] = n x^(n-1), for any real number n. Constant rule: d/dx[c] = 0. Constant multiple rule: d/dx[c*f(x)] = c*f'(x). Sum/difference rule: d/dx[f(x) +/- g(x)] = f'(x) +/- g'(x).",
            mathExpression: "\\dfrac{d}{dx}[x^n] = nx^{n-1}",
          },
          {
            blockType: "explanation",
            headingText: "Why this replaces the definition for everyday use",
            bodyText:
              "You could always go back to the limit definition, but once these rules are proven from it, you never need to for a polynomial - you can differentiate term by term almost instantly. That speed is the entire point of building up a toolbox of rules.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Differentiate f(x) = 4x^3 - 2x^2 + 7x - 5. Apply the power rule to each term and the constant rule to the last: d/dx[4x^3] = 12x^2, d/dx[-2x^2] = -4x, d/dx[7x] = 7, d/dx[-5] = 0. Adding these: f'(x) = 12x^2 - 4x + 7.",
            mathExpression: "f(x)=4x^3-2x^2+7x-5 \\implies f'(x) = 12x^2-4x+7",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Forgetting that the derivative of a lone constant term is 0, not the constant itself - and forgetting to rewrite radicals or terms in the denominator as fractional or negative exponents (like 1/x^2 = x^-2) before applying the power rule.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u2-l3-p1",
            topicTag: "derivativeDefinitionAndRules",
            promptText: "Differentiate.",
            promptMathExpression: "f(x) = 5x^4 - 3x^2 + 2",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "20x^3-6x",
            stepByStepExplanation: "d/dx[5x^4]=20x^3, d/dx[-3x^2]=-6x, d/dx[2]=0. Total: 20x^3-6x.",
            difficultyLevel: 2,
          },
          {
            problemId: "c1-u2-l3-p2",
            topicTag: "derivativeDefinitionAndRules",
            promptText: "Differentiate.",
            promptMathExpression: "f(x) = 7x - 4",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "7",
            stepByStepExplanation: "d/dx[7x]=7, and d/dx[-4]=0, so f'(x)=7 (a constant function).",
            difficultyLevel: 1,
          },
          {
            problemId: "c1-u2-l3-p3",
            topicTag: "derivativeDefinitionAndRules",
            promptText: "Differentiate.",
            promptMathExpression: "f(x) = \\dfrac{3}{x^2}",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "-6/x^3",
            acceptableAnswerVariants: ["-6x^-3"],
            stepByStepExplanation:
              "Rewrite as 3x^-2. Power rule: d/dx[3x^-2] = -6x^-3, which is -6/x^3.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Differentiation Formulas",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/DifferentiationFormulas.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Derivative rules",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-differentiation-1-new",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "the-product-rule",
        lessonTitle: "The Product Rule",
        estimatedMinutes: 20,
        topicTag: "derivativeDefinitionAndRules",
        learningGoals: ["Apply the product rule to differentiate a product of two functions"],
        contentBlocks: [
          {
            blockType: "keyFormula",
            headingText: "The product rule",
            bodyText:
              "The derivative of a product is NOT the product of the derivatives. Instead: (fg)' = f'g + fg' - derivative of the first times the second, plus the first times the derivative of the second.",
            mathExpression: "\\dfrac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Differentiate f(x) = (x^2+1)(x^3-2x). Let the first factor be u=x^2+1 (u'=2x) and the second be v=x^3-2x (v'=3x^2-2). Apply the product rule: f'(x) = u'v+uv' = 2x(x^3-2x) + (x^2+1)(3x^2-2). Expand the first piece: 2x^4-4x^2. Expand the second: 3x^4-2x^2+3x^2-2 = 3x^4+x^2-2. Add them together: 2x^4-4x^2+3x^4+x^2-2 = 5x^4-3x^2-2.",
            mathExpression: "f'(x) = 5x^4-3x^2-2",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Assuming (fg)' = f'g' - just multiplying the two derivatives together. That is almost never correct. You must use both terms, f'g + fg', and add them.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u2-l4-p1",
            topicTag: "derivativeDefinitionAndRules",
            promptText: "Use the product rule to differentiate f(x) = x^2(x+3).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "3x^2+6x",
            stepByStepExplanation:
              "f'(x) = (2x)(x+3) + x^2(1) = 2x^2+6x+x^2 = 3x^2+6x.",
            difficultyLevel: 2,
          },
          {
            problemId: "c1-u2-l4-p2",
            topicTag: "derivativeDefinitionAndRules",
            promptText: "Use the product rule to differentiate f(x) = (3x-1)(2x+5).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "12x+13",
            stepByStepExplanation:
              "f'(x) = 3(2x+5) + (3x-1)(2) = 6x+15+6x-2 = 12x+13.",
            difficultyLevel: 3,
          },
          {
            problemId: "c1-u2-l4-p3",
            topicTag: "derivativeDefinitionAndRules",
            promptText: "For f(x) = (x^2+1)(x-3), find f'(2).",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "1",
            stepByStepExplanation:
              "f'(x) = 2x(x-3) + (x^2+1)(1). At x=2: 2(2)(-1) + (5)(1) = -4+5 = 1.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Product and Quotient Rule",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/ProductQuotientRule.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Product rule",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-differentiation-1-new",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "the-quotient-rule",
        lessonTitle: "The Quotient Rule",
        estimatedMinutes: 20,
        topicTag: "derivativeDefinitionAndRules",
        learningGoals: ["Apply the quotient rule to differentiate a ratio of two functions"],
        contentBlocks: [
          {
            blockType: "keyFormula",
            headingText: "The quotient rule",
            bodyText:
              "For f(x) = top/bottom, the derivative is (f'g - fg') / g^2, where the numerator's function comes FIRST in each term. The order matters here, unlike the product rule.",
            mathExpression: "\\dfrac{d}{dx}\\left[\\dfrac{f(x)}{g(x)}\\right] = \\dfrac{f'(x)g(x)-f(x)g'(x)}{[g(x)]^2}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Differentiate f(x) = (x^2+1)/(x-2). Let the numerator be u=x^2+1 (u'=2x) and the denominator be v=x-2 (v'=1). Apply the quotient rule: f'(x) = [u'v - uv']/v^2 = [2x(x-2) - (x^2+1)(1)]/(x-2)^2. Expand the top: 2x^2-4x-x^2-1 = x^2-4x-1. So f'(x) = (x^2-4x-1)/(x-2)^2.",
            mathExpression: "f'(x) = \\dfrac{x^2-4x-1}{(x-2)^2}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Reversing the order of subtraction in the numerator - writing fg' - f'g instead of f'g - fg'. This is the single most common quotient-rule error, and it produces the exact opposite sign every time. A good habit: always name the top function f and work top-first.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u2-l5-p1",
            topicTag: "derivativeDefinitionAndRules",
            promptText: "Use the quotient rule to differentiate f(x) = x/(x+1).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "1/(x+1)^2",
            stepByStepExplanation:
              "f'(x) = [1*(x+1) - x*1]/(x+1)^2 = [x+1-x]/(x+1)^2 = 1/(x+1)^2.",
            difficultyLevel: 3,
          },
          {
            problemId: "c1-u2-l5-p2",
            topicTag: "derivativeDefinitionAndRules",
            promptText: "Use the quotient rule to differentiate f(x) = (2x-3)/x^2.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(-2x+6)/x^3",
            acceptableAnswerVariants: ["(6-2x)/x^3", "-2(x-3)/x^3"],
            stepByStepExplanation:
              "f'(x) = [2*x^2 - (2x-3)*2x]/x^4 = [2x^2-4x^2+6x]/x^4 = (-2x^2+6x)/x^4. Factor out x from the top and cancel one power of x with the bottom: (-2x+6)/x^3.",
            difficultyLevel: 4,
          },
          {
            problemId: "c1-u2-l5-p3",
            topicTag: "derivativeDefinitionAndRules",
            promptText: "For f(x) = x^2/(x+1), find f'(0).",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "0",
            stepByStepExplanation:
              "f'(x) = [2x(x+1) - x^2(1)]/(x+1)^2 = (x^2+2x)/(x+1)^2. At x=0: (0+0)/1 = 0.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Product and Quotient Rule",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/ProductQuotientRule.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Quotient rule",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-differentiation-1-new",
            resourceType: "interactivePractice",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "chain-rule-and-implicit-differentiation",
    unitTitle: "The Chain Rule and Implicit Differentiation",
    unitDescription: "Differentiating composite functions and finding dy/dx when y isn't isolated.",
    unitQuiz: {
      quizTitle: "Unit Quiz: The Chain Rule and Implicit Differentiation",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc1-chain-rule-and-implicit-differentiation-quiz-p1",
          topicTag: "chainRule",
          promptText: "Differentiate.",
          promptMathExpression: "y = (x^2+5)^3",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "6x(x^2+5)^2",
          stepByStepExplanation:
            "Outside derivative: 3u^2. Inside derivative: 2x. Chain rule: 3(x^2+5)^2 * 2x = 6x(x^2+5)^2.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc1-chain-rule-and-implicit-differentiation-quiz-p2",
          topicTag: "chainRule",
          promptText: "Differentiate.",
          promptMathExpression: "y = \\sqrt{3x+1}",
          answerFormat: "multipleChoice",
          choices: [
            "3/(2sqrt(3x+1))",
            "3/sqrt(3x+1)",
            "1/(2sqrt(3x+1))",
            "(3/2)sqrt(3x+1)",
          ],
          correctAnswer: "3/(2sqrt(3x+1))",
          stepByStepExplanation:
            "Rewrite as (3x+1)^(1/2). Outside derivative: (1/2)(3x+1)^(-1/2). Inside derivative: 3. Chain rule: (1/2)(3x+1)^(-1/2) * 3 = 3/(2sqrt(3x+1)).",
          difficultyLevel: 2,
        },
        {
          problemId: "calc1-chain-rule-and-implicit-differentiation-quiz-p3",
          topicTag: "chainRule",
          promptText: "Differentiate, combining the product rule and the chain rule.",
          promptMathExpression: "y = x(x+1)^3",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "(x+1)^2(4x+1)",
          stepByStepExplanation:
            "Product rule with the chain rule on the second factor: y' = (1)(x+1)^3 + x*3(x+1)^2 = (x+1)^2[(x+1)+3x] = (x+1)^2(4x+1).",
          difficultyLevel: 4,
        },
        {
          problemId: "calc1-chain-rule-and-implicit-differentiation-quiz-p4",
          topicTag: "chainRule",
          promptText: "Differentiate, combining the quotient rule and the chain rule.",
          promptMathExpression: "y = \\dfrac{x^2}{(x+3)^2}",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "6x/(x+3)^3",
          stepByStepExplanation:
            "Quotient rule with the chain rule on the denominator: y' = [2x(x+3)^2 - x^2*2(x+3)]/(x+3)^4. Factor 2x(x+3) out of the top: 2x(x+3)[(x+3)-x]/(x+3)^4 = 2x(x+3)(3)/(x+3)^4 = 6x(x+3)/(x+3)^4 = 6x/(x+3)^3.",
          difficultyLevel: 5,
        },
        {
          problemId: "calc1-chain-rule-and-implicit-differentiation-quiz-p5",
          topicTag: "implicitDifferentiation",
          promptText: "Find dy/dx by implicit differentiation.",
          promptMathExpression: "x^2+4y^2=16",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "-x/(4y)",
          stepByStepExplanation: "Differentiate: 2x+8y(dy/dx)=0. Solve: dy/dx = -2x/(8y) = -x/(4y).",
          difficultyLevel: 3,
        },
        {
          problemId: "calc1-chain-rule-and-implicit-differentiation-quiz-p6",
          topicTag: "implicitDifferentiation",
          promptText: "Find dy/dx by implicit differentiation.",
          promptMathExpression: "xy^2+x^2=5",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "-(y^2+2x)/(2xy)",
          stepByStepExplanation:
            "Differentiate (product rule on xy^2): y^2 + x*2y(dy/dx) + 2x = 0. Collect dy/dx terms: 2xy(dy/dx) = -y^2-2x. Solve: dy/dx = -(y^2+2x)/(2xy).",
          difficultyLevel: 5,
        },
        {
          problemId: "calc1-chain-rule-and-implicit-differentiation-quiz-p7",
          topicTag: "implicitDifferentiation",
          promptText: "Find the slope of the tangent line to x^2+y^2=25 at the point (3,-4).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "3/4",
          stepByStepExplanation: "dy/dx = -x/y. At (3,-4): slope = -3/(-4) = 3/4.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc1-chain-rule-and-implicit-differentiation-quiz-p8",
          topicTag: "implicitDifferentiation",
          promptText: "Find the equation of the tangent line to x^2+y^2=25 at the point (-3,4).",
          answerFormat: "multipleChoice",
          choices: [
            "y=(3/4)x+25/4",
            "y=-(3/4)x+25/4",
            "y=(3/4)x-25/4",
            "y=(4/3)x+25/4",
          ],
          correctAnswer: "y=(3/4)x+25/4",
          stepByStepExplanation:
            "dy/dx = -x/y. At (-3,4): slope = -(-3)/4 = 3/4. Point-slope: y-4 = (3/4)(x+3). Distribute: y = (3/4)x + 9/4 + 4 = (3/4)x + 25/4.",
          difficultyLevel: 4,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "the-chain-rule",
        lessonTitle: "The Chain Rule",
        estimatedMinutes: 30,
        topicTag: "chainRule",
        learningGoals: [
          "Recognize a composite function and identify its 'outside' and 'inside' pieces",
          "Apply the chain rule to differentiate composite functions",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Outside function, inside function",
            bodyText:
              "A composite function is a function stuffed inside another function, like (3x+1)^5 - the outside function is 'something to the 5th power,' and the inside function is 3x+1. The chain rule says: differentiate the outside (leaving the inside alone), then multiply by the derivative of the inside. This is arguably the single most-used rule in all of calculus, because almost nothing in the real world is a bare, simple function - it's usually a function of a function.",
          },
          {
            blockType: "keyFormula",
            headingText: "The chain rule",
            bodyText:
              "If y = f(g(x)), then dy/dx = f'(g(x)) * g'(x): the derivative of the outer function, evaluated at the inner function, times the derivative of the inner function.",
            mathExpression: "\\dfrac{d}{dx}\\big[f(g(x))\\big] = f'(g(x)) \\cdot g'(x)",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Differentiate y = (3x+1)^5. The outside function is 'raise to the 5th power,' and the inside is u = 3x+1. Differentiate the outside first, leaving the inside alone: 5(3x+1)^4. Then multiply by the derivative of the inside, which is 3: dy/dx = 5(3x+1)^4 * 3 = 15(3x+1)^4.",
            mathExpression: "y=(3x+1)^5 \\implies \\dfrac{dy}{dx} = 15(3x+1)^4",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Forgetting to multiply by the derivative of the inside function at all - this is 'forgetting the chain rule,' and it's the single most common calculus mistake there is. Differentiating (3x+1)^5 as just 5(3x+1)^4, with no extra factor of 3, is wrong.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u3-l1-p1",
            topicTag: "chainRule",
            promptText: "Differentiate.",
            promptMathExpression: "y = (x^2+3)^4",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "8x(x^2+3)^3",
            stepByStepExplanation:
              "Outside: u^4, derivative 4u^3. Inside: x^2+3, derivative 2x. Chain rule: 4(x^2+3)^3 * 2x = 8x(x^2+3)^3.",
            difficultyLevel: 2,
          },
          {
            problemId: "c1-u3-l1-p2",
            topicTag: "chainRule",
            promptText: "Differentiate.",
            promptMathExpression: "y = \\sqrt{4x-1}",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "2/sqrt(4x-1)",
            acceptableAnswerVariants: ["2/(4x-1)^(1/2)", "2(4x-1)^(-1/2)"],
            stepByStepExplanation:
              "Rewrite as (4x-1)^(1/2). Outside derivative: (1/2)(4x-1)^(-1/2). Inside derivative: 4. Chain rule: (1/2)(4x-1)^(-1/2) * 4 = 2(4x-1)^(-1/2) = 2/sqrt(4x-1).",
            difficultyLevel: 3,
          },
          {
            problemId: "c1-u3-l1-p3",
            topicTag: "chainRule",
            promptText: "Differentiate.",
            promptMathExpression: "y = (x^3-2x)^{-2}",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "-2(3x^2-2)/(x^3-2x)^3",
            stepByStepExplanation:
              "Outside derivative: -2u^-3. Inside derivative: 3x^2-2. Chain rule: -2(x^3-2x)^-3 * (3x^2-2), which is -2(3x^2-2)/(x^3-2x)^3.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Chain Rule",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/ChainRule.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 1, Chapter 3: Derivatives",
            resourceUrl: "https://openstax.org/books/calculus-volume-1/pages/3-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Chain rule",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-differentiation-2-new",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "combining-the-chain-rule-with-product-and-quotient-rules",
        lessonTitle: "Combining the Chain Rule with Product and Quotient Rules",
        estimatedMinutes: 25,
        topicTag: "chainRule",
        learningGoals: [
          "Identify which rule governs a function's overall structure before differentiating",
          "Differentiate functions that require the chain rule nested inside a product or quotient rule",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Read the structure from the outside in",
            bodyText:
              "Real differentiation problems usually combine rules. The trick is to ask, 'What is the LAST operation that would happen if I were plugging in a number?' That tells you the outermost rule to apply first (product, quotient, or chain), and then you handle each piece - which may itself need the chain rule - as its own sub-problem.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Differentiate y = x^2(x^3+1)^4. The outermost structure is a product of x^2 and (x^3+1)^4, so start with the product rule, using the chain rule on the second factor. y' = (2x)(x^3+1)^4 + x^2 * [4(x^3+1)^3 * 3x^2] = 2x(x^3+1)^4 + 12x^4(x^3+1)^3. Factor out the common piece 2x(x^3+1)^3: y' = 2x(x^3+1)^3 [(x^3+1) + 6x^3] = 2x(x^3+1)^3(7x^3+1).",
            mathExpression: "y' = 2x(x^3+1)^3(7x^3+1)",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Treating a product-of-functions problem as if it were a single chain-rule problem (or vice versa) - misreading the overall structure leads to using only one rule when two are actually nested together.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u3-l2-p1",
            topicTag: "chainRule",
            promptText: "Differentiate.",
            promptMathExpression: "y = (2x+1)^3(x-4)",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(2x+1)^2(8x-23)",
            stepByStepExplanation:
              "Product rule with chain rule on the first factor: y' = 3(2x+1)^2(2)(x-4) + (2x+1)^3(1) = 6(2x+1)^2(x-4) + (2x+1)^3. Factor out (2x+1)^2: (2x+1)^2[6(x-4)+(2x+1)] = (2x+1)^2(6x-24+2x+1) = (2x+1)^2(8x-23).",
            difficultyLevel: 4,
          },
          {
            problemId: "c1-u3-l2-p2",
            topicTag: "chainRule",
            promptText: "Differentiate.",
            promptMathExpression: "y = \\dfrac{x}{(x^2+1)^3}",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(1-5x^2)/(x^2+1)^4",
            stepByStepExplanation:
              "Quotient rule with chain rule on the denominator: y' = [1*(x^2+1)^3 - x*3(x^2+1)^2*2x] / (x^2+1)^6. Factor (x^2+1)^2 out of the top: (x^2+1)^2[(x^2+1)-6x^2] / (x^2+1)^6 = (1-5x^2)/(x^2+1)^4.",
            difficultyLevel: 5,
          },
          {
            problemId: "c1-u3-l2-p3",
            topicTag: "chainRule",
            promptText: "Differentiate.",
            promptMathExpression: "y = \\dfrac{(x+1)^2}{x-1}",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(x+1)(x-3)/(x-1)^2",
            stepByStepExplanation:
              "Quotient rule with chain rule on the numerator: y' = [2(x+1)(x-1) - (x+1)^2] / (x-1)^2. Factor out (x+1): (x+1)[2(x-1)-(x+1)]/(x-1)^2 = (x+1)(2x-2-x-1)/(x-1)^2 = (x+1)(x-3)/(x-1)^2.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Chain Rule",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/ChainRule.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Chain rule",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-differentiation-2-new",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "implicit-differentiation",
        lessonTitle: "Implicit Differentiation",
        estimatedMinutes: 30,
        topicTag: "implicitDifferentiation",
        learningGoals: [
          "Differentiate both sides of an equation with respect to x when y is not isolated",
          "Solve the resulting equation for dy/dx",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "When you can't (or don't want to) solve for y first",
            bodyText:
              "Some equations, like x^2+y^2=25, define y as a function of x without ever isolating y. Implicit differentiation lets you find dy/dx anyway: differentiate both sides of the equation with respect to x, treating y as a function of x the whole time. Every time you differentiate a term containing y, the chain rule kicks in and leaves behind a factor of dy/dx, since y is secretly y(x).",
          },
          {
            blockType: "keyFormula",
            headingText: "The key chain-rule pattern",
            bodyText:
              "Differentiating y raised to a power with respect to x always produces a dy/dx factor, because y is a function of x: d/dx[y^n] = n*y^(n-1) * dy/dx.",
            mathExpression: "\\dfrac{d}{dx}[y^n] = n y^{n-1}\\dfrac{dy}{dx}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find dy/dx for x^2+y^2=25. Differentiate both sides with respect to x: d/dx[x^2] + d/dx[y^2] = d/dx[25]. This gives 2x + 2y(dy/dx) = 0. Now solve algebraically for dy/dx: 2y(dy/dx) = -2x, so dy/dx = -x/y.",
            mathExpression: "x^2+y^2=25 \\implies \\dfrac{dy}{dx} = -\\dfrac{x}{y}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Forgetting to attach the dy/dx factor when differentiating a y-term - treating y like an ordinary constant instead of a function of x. Every single derivative of a y-expression needs that extra dy/dx tacked on by the chain rule.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u3-l3-p1",
            topicTag: "implicitDifferentiation",
            promptText: "Find dy/dx by implicit differentiation.",
            promptMathExpression: "x^2+y^2=9",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "-x/y",
            stepByStepExplanation: "Differentiate: 2x+2y(dy/dx)=0. Solve: dy/dx = -x/y.",
            difficultyLevel: 2,
          },
          {
            problemId: "c1-u3-l3-p2",
            topicTag: "implicitDifferentiation",
            promptText: "Find dy/dx by implicit differentiation.",
            promptMathExpression: "y^2 = x^2+3x",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(2x+3)/(2y)",
            stepByStepExplanation:
              "Differentiate: 2y(dy/dx) = 2x+3. Solve: dy/dx = (2x+3)/(2y).",
            difficultyLevel: 3,
          },
          {
            problemId: "c1-u3-l3-p3",
            topicTag: "implicitDifferentiation",
            promptText: "Find dy/dx by implicit differentiation.",
            promptMathExpression: "x^3+y^3=6xy",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(2y-x^2)/(y^2-2x)",
            stepByStepExplanation:
              "Differentiate both sides (using the product rule on 6xy): 3x^2 + 3y^2(dy/dx) = 6y + 6x(dy/dx). Collect dy/dx terms on one side: 3y^2(dy/dx) - 6x(dy/dx) = 6y - 3x^2. Factor: (dy/dx)(3y^2-6x) = 6y-3x^2. Solve and simplify by dividing by 3: dy/dx = (2y-x^2)/(y^2-2x).",
            difficultyLevel: 5,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Implicit Differentiation",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/ImplicitDifferentiation.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Implicit differentiation",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-differentiation-2-new",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "finding-tangent-lines-with-implicit-differentiation",
        lessonTitle: "Finding Tangent Lines with Implicit Differentiation",
        estimatedMinutes: 20,
        topicTag: "implicitDifferentiation",
        learningGoals: [
          "Find the slope of a tangent line at a point on an implicitly defined curve",
          "Write the tangent line equation at that point",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Same idea, now with numbers plugged in",
            bodyText:
              "Once you have dy/dx from implicit differentiation, finding a tangent line at a specific point works exactly like it did back in the derivative-and-slope lesson: plug the point's coordinates into dy/dx to get the numeric slope, then use point-slope form.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find the tangent line to x^2+y^2=25 at the point (3,4). From the earlier lesson, dy/dx = -x/y. At (3,4): slope = -3/4. Use point-slope form: y - 4 = -(3/4)(x - 3).",
            mathExpression: "y - 4 = -\\dfrac{3}{4}(x-3)",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Plugging in only the x-coordinate into dy/dx and forgetting the y-coordinate, since (unlike explicit functions) the slope formula here depends on BOTH x and y - both must be substituted.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u3-l4-p1",
            topicTag: "implicitDifferentiation",
            promptText: "Find the slope of the tangent line to x^2+y^2=13 at the point (2,3).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "-2/3",
            stepByStepExplanation: "dy/dx = -x/y. At (2,3): slope = -2/3.",
            difficultyLevel: 2,
          },
          {
            problemId: "c1-u3-l4-p2",
            topicTag: "implicitDifferentiation",
            promptText: "Find the equation of the tangent line to x^2+y^2=25 at the point (0,5).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "y=5",
            stepByStepExplanation:
              "dy/dx = -x/y. At (0,5): slope = -0/5 = 0. A horizontal tangent line through (0,5) is y = 5.",
            difficultyLevel: 3,
          },
          {
            problemId: "c1-u3-l4-p3",
            topicTag: "implicitDifferentiation",
            promptText: "For x^3+y^3=9, find dy/dx at the point (1,2).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "-1/4",
            stepByStepExplanation:
              "Differentiate: 3x^2+3y^2(dy/dx)=0, so dy/dx = -x^2/y^2. At (1,2): dy/dx = -1/4.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Implicit Differentiation",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/ImplicitDifferentiation.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Implicit differentiation",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-differentiation-2-new",
            resourceType: "interactivePractice",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "derivatives-of-transcendental-functions",
    unitTitle: "Derivatives of Trigonometric, Exponential, and Logarithmic Functions",
    unitDescription: "Derivative formulas for trig, exponential, and log functions, plus logarithmic differentiation.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Derivatives of Trigonometric, Exponential, and Logarithmic Functions",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc1-derivatives-of-transcendental-functions-quiz-p1",
          topicTag: "derivativesOfTrigFunctions",
          promptText: "Differentiate.",
          promptMathExpression: "f(x) = 4\\sin x - \\cos x",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "4cos(x)+sin(x)",
          stepByStepExplanation:
            "d/dx[4 sin x] = 4 cos x. d/dx[-cos x] = -(-sin x) = sin x. Sum: f'(x) = 4 cos x + sin x.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc1-derivatives-of-transcendental-functions-quiz-p2",
          topicTag: "derivativesOfTrigFunctions",
          promptText: "Differentiate using the chain rule.",
          promptMathExpression: "f(x) = \\cos(4x)",
          answerFormat: "multipleChoice",
          choices: ["-4sin(4x)", "4sin(4x)", "-sin(4x)", "-4cos(4x)"],
          correctAnswer: "-4sin(4x)",
          stepByStepExplanation: "Outside derivative -sin(u), inside derivative 4. Chain rule: f'(x) = -4sin(4x).",
          difficultyLevel: 3,
        },
        {
          problemId: "calc1-derivatives-of-transcendental-functions-quiz-p3",
          topicTag: "derivativesOfTrigFunctions",
          promptText: "Differentiate using the product rule.",
          promptMathExpression: "f(x) = x \\sin x",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "sin(x)+x*cos(x)",
          stepByStepExplanation: "f'(x) = (1)(sin x) + x(cos x) = sin x + x cos x.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc1-derivatives-of-transcendental-functions-quiz-p4",
          topicTag: "derivativesOfExponentialAndLogFunctions",
          promptText: "Differentiate.",
          promptMathExpression: "f(x) = e^{2x}",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "2e^(2x)",
          stepByStepExplanation: "Chain rule: f'(x) = e^(2x) * 2 = 2e^(2x).",
          difficultyLevel: 2,
        },
        {
          problemId: "calc1-derivatives-of-transcendental-functions-quiz-p5",
          topicTag: "derivativesOfExponentialAndLogFunctions",
          promptText: "Differentiate.",
          promptMathExpression: "f(x) = 5^x",
          answerFormat: "multipleChoice",
          choices: ["5^x*ln(5)", "5^x", "x*5^(x-1)", "5^x/ln(5)"],
          correctAnswer: "5^x*ln(5)",
          stepByStepExplanation: "General base rule: d/dx[a^x] = a^x ln(a), so f'(x) = 5^x ln(5).",
          difficultyLevel: 2,
        },
        {
          problemId: "calc1-derivatives-of-transcendental-functions-quiz-p6",
          topicTag: "derivativesOfExponentialAndLogFunctions",
          promptText: "Differentiate.",
          promptMathExpression: "f(x) = \\ln(x^2+4)",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "2x/(x^2+4)",
          stepByStepExplanation: "Chain rule pattern g'(x)/g(x): f'(x) = 2x/(x^2+4).",
          difficultyLevel: 3,
        },
        {
          problemId: "calc1-derivatives-of-transcendental-functions-quiz-p7",
          topicTag: "derivativesOfExponentialAndLogFunctions",
          promptText: "For f(x) = ln(7x), find f'(2).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "1/2",
          acceptableAnswerVariants: ["0.5"],
          stepByStepExplanation:
            "Chain rule: f'(x) = 7/(7x) = 1/x (the constant 7 always cancels for ln(cx)). So f'(2) = 1/2.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc1-derivatives-of-transcendental-functions-quiz-p8",
          topicTag: "logarithmicDifferentiation",
          promptText: "Use logarithmic differentiation to find dy/dx for y = x^(3x).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "x^(3x)*(3ln(x)+3)",
          stepByStepExplanation:
            "ln y = 3x ln x. Differentiate (product rule on the right, implicit chain rule on the left): (1/y)(dy/dx) = 3 ln x + 3x(1/x) = 3 ln x + 3. Solve: dy/dx = y(3 ln x + 3) = x^(3x)(3 ln x + 3).",
          difficultyLevel: 5,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "derivatives-of-trigonometric-functions",
        lessonTitle: "Derivatives of Trigonometric Functions",
        estimatedMinutes: 25,
        topicTag: "derivativesOfTrigFunctions",
        learningGoals: [
          "Recall the derivatives of the six trigonometric functions",
          "Combine trig derivatives with the chain, product, and quotient rules",
        ],
        contentBlocks: [
          {
            blockType: "keyFormula",
            headingText: "The six trig derivatives",
            bodyText:
              "d/dx[sin x] = cos x. d/dx[cos x] = -sin x. d/dx[tan x] = sec^2 x. d/dx[cot x] = -csc^2 x. d/dx[sec x] = sec x tan x. d/dx[csc x] = -csc x cot x. Notice the pattern: every 'co-' function (cosine, cotangent, cosecant) picks up a negative sign.",
            mathExpression:
              "\\dfrac{d}{dx}\\sin x = \\cos x, \\quad \\dfrac{d}{dx}\\cos x = -\\sin x, \\quad \\dfrac{d}{dx}\\tan x = \\sec^2 x",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Differentiate f(x) = 3 sin x - 5 cos x. Apply the constant multiple rule to each term: d/dx[3 sin x] = 3 cos x, and d/dx[-5 cos x] = -5(-sin x) = 5 sin x. So f'(x) = 3 cos x + 5 sin x.",
            mathExpression: "f(x) = 3\\sin x - 5\\cos x \\implies f'(x) = 3\\cos x + 5\\sin x",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example with the chain rule",
            bodyText:
              "Differentiate y = sin(3x^2). Outside function: sin(u), derivative cos(u). Inside function: 3x^2, derivative 6x. Chain rule: dy/dx = cos(3x^2) * 6x = 6x cos(3x^2).",
            mathExpression: "y=\\sin(3x^2) \\implies \\dfrac{dy}{dx} = 6x\\cos(3x^2)",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Forgetting the negative sign on the derivative of cosine - writing d/dx[cos x] = sin x instead of -sin x. This sign error then silently propagates through every product, quotient, or chain-rule problem that involves cosine.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u4-l1-p1",
            topicTag: "derivativesOfTrigFunctions",
            promptText: "Differentiate.",
            promptMathExpression: "f(x) = \\sin x + \\tan x",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "cos(x)+sec^2(x)",
            stepByStepExplanation: "d/dx[sin x] = cos x, d/dx[tan x] = sec^2 x. Sum rule: f'(x) = cos x + sec^2 x.",
            difficultyLevel: 2,
          },
          {
            problemId: "c1-u4-l1-p2",
            topicTag: "derivativesOfTrigFunctions",
            promptText: "Differentiate using the product rule.",
            promptMathExpression: "f(x) = x^2 \\cos x",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "2x*cos(x)-x^2*sin(x)",
            stepByStepExplanation: "f'(x) = (2x)(cos x) + x^2(-sin x) = 2x cos x - x^2 sin x.",
            difficultyLevel: 3,
          },
          {
            problemId: "c1-u4-l1-p3",
            topicTag: "derivativesOfTrigFunctions",
            promptText: "Differentiate using the chain rule.",
            promptMathExpression: "f(x) = \\sin(5x)",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "5cos(5x)",
            stepByStepExplanation: "Outside derivative cos(u), inside derivative 5. Chain rule: f'(x) = 5cos(5x).",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Derivatives of Trig Functions",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/DiffTrigFcns.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 1, Chapter 3: Derivatives",
            resourceUrl: "https://openstax.org/books/calculus-volume-1/pages/3-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Derivatives of common functions",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-differentiation-2-new",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "derivatives-of-exponential-functions",
        lessonTitle: "Derivatives of Exponential Functions",
        estimatedMinutes: 25,
        topicTag: "derivativesOfExponentialAndLogFunctions",
        learningGoals: [
          "Recall that e^x is its own derivative",
          "Differentiate exponential functions with a general base a",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Why e^x is special",
            bodyText:
              "e (approximately 2.71828) is defined specifically so that e^x is its own derivative - nothing else changes when you differentiate it. That single property is why e shows up everywhere in calculus, from continuous growth models to the natural log. Any other base needs an extra correction factor of ln(a).",
          },
          {
            blockType: "keyFormula",
            headingText: "Exponential derivative rules",
            bodyText:
              "d/dx[e^x] = e^x. d/dx[a^x] = a^x * ln(a) for a general positive base a. With the chain rule: d/dx[e^(g(x))] = e^(g(x)) * g'(x).",
            mathExpression: "\\dfrac{d}{dx}[e^x] = e^x \\qquad \\dfrac{d}{dx}[a^x] = a^x\\ln a",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Differentiate f(x) = e^(3x^2). Outside function: e^u, derivative e^u. Inside function: 3x^2, derivative 6x. Chain rule: f'(x) = e^(3x^2) * 6x.",
            mathExpression: "f(x)=e^{3x^2} \\implies f'(x) = 6xe^{3x^2}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Treating e^x like a power-rule problem and writing d/dx[e^x] = x*e^(x-1). The power rule only applies when the VARIABLE is in the base and a constant is in the exponent - here it's the reverse, so a completely different rule applies. Also common: forgetting the extra ln(a) factor for any base other than e.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u4-l2-p1",
            topicTag: "derivativesOfExponentialAndLogFunctions",
            promptText: "Differentiate.",
            promptMathExpression: "f(x) = e^{5x}",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "5e^(5x)",
            stepByStepExplanation: "Chain rule: f'(x) = e^(5x) * 5 = 5e^(5x).",
            difficultyLevel: 2,
          },
          {
            problemId: "c1-u4-l2-p2",
            topicTag: "derivativesOfExponentialAndLogFunctions",
            promptText: "Differentiate.",
            promptMathExpression: "f(x) = 3^x",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "3^x*ln(3)",
            stepByStepExplanation: "General base rule: d/dx[a^x] = a^x ln(a), so f'(x) = 3^x ln(3).",
            difficultyLevel: 2,
          },
          {
            problemId: "c1-u4-l2-p3",
            topicTag: "derivativesOfExponentialAndLogFunctions",
            promptText: "Differentiate using the product rule.",
            promptMathExpression: "f(x) = x e^x",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "e^x(1+x)",
            acceptableAnswerVariants: ["e^x+x*e^x", "(1+x)e^x"],
            stepByStepExplanation: "f'(x) = (1)e^x + x(e^x) = e^x + xe^x = e^x(1+x).",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Derivatives of Exponential and Logarithm Functions",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/DiffExpLogFcns.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Derivatives of common functions",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-differentiation-2-new",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "derivatives-of-logarithmic-functions",
        lessonTitle: "Derivatives of Logarithmic Functions",
        estimatedMinutes: 25,
        topicTag: "derivativesOfExponentialAndLogFunctions",
        learningGoals: [
          "Recall the derivative of ln(x) and log base a of x",
          "Combine the chain rule with logarithmic derivatives",
        ],
        contentBlocks: [
          {
            blockType: "keyFormula",
            headingText: "Logarithmic derivative rules",
            bodyText:
              "d/dx[ln x] = 1/x. d/dx[log_a x] = 1/(x ln a). With the chain rule: d/dx[ln(g(x))] = g'(x)/g(x).",
            mathExpression: "\\dfrac{d}{dx}[\\ln x] = \\dfrac{1}{x} \\qquad \\dfrac{d}{dx}[\\ln(g(x))] = \\dfrac{g'(x)}{g(x)}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Differentiate f(x) = ln(x^2+1). Using the chain rule pattern g'(x)/g(x) with g(x)=x^2+1 and g'(x)=2x: f'(x) = 2x/(x^2+1).",
            mathExpression: "f(x)=\\ln(x^2+1) \\implies f'(x) = \\dfrac{2x}{x^2+1}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Forgetting to apply the chain rule when the argument of ln is anything other than plain x - writing d/dx[ln(x^2+1)] = 1/(x^2+1) and stopping there, without the essential extra factor of 2x on top.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u4-l3-p1",
            topicTag: "derivativesOfExponentialAndLogFunctions",
            promptText: "Differentiate.",
            promptMathExpression: "f(x) = \\ln(5x)",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "1/x",
            stepByStepExplanation:
              "Chain rule: f'(x) = 5/(5x) = 1/x. (This shows d/dx[ln(cx)] always simplifies to 1/x for any constant c, since ln(cx) = ln c + ln x and ln c is just a constant.)",
            difficultyLevel: 3,
          },
          {
            problemId: "c1-u4-l3-p2",
            topicTag: "derivativesOfExponentialAndLogFunctions",
            promptText: "Differentiate.",
            promptMathExpression: "f(x) = \\ln(x^3-2x)",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(3x^2-2)/(x^3-2x)",
            stepByStepExplanation: "Chain rule pattern g'/g: f'(x) = (3x^2-2)/(x^3-2x).",
            difficultyLevel: 3,
          },
          {
            problemId: "c1-u4-l3-p3",
            topicTag: "derivativesOfExponentialAndLogFunctions",
            promptText: "Differentiate.",
            promptMathExpression: "f(x) = \\log_2 x",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "1/(x*ln(2))",
            stepByStepExplanation: "General base rule: d/dx[log_a x] = 1/(x ln a), so f'(x) = 1/(x ln 2).",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Derivatives of Exponential and Logarithm Functions",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/DiffExpLogFcns.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Derivatives of common functions",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-differentiation-2-new",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "logarithmic-differentiation",
        lessonTitle: "Logarithmic Differentiation",
        estimatedMinutes: 25,
        topicTag: "logarithmicDifferentiation",
        learningGoals: [
          "Use logarithmic differentiation to differentiate functions with a variable base and variable exponent",
          "Use logarithmic differentiation to simplify differentiating complicated products and quotients",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "A technique, not a new formula",
            bodyText:
              "Some functions, like y = x^x, don't fit either the power rule (which needs a constant exponent) or the exponential rule (which needs a constant base) - both the base AND the exponent are variable. Logarithmic differentiation handles this: take the natural log of both sides first, which turns the troublesome exponent into a multiplication using log properties, then differentiate implicitly.",
          },
          {
            blockType: "keyFormula",
            headingText: "The steps",
            bodyText:
              "1) Take ln of both sides: ln y = ln(f(x)). 2) Use log properties to break the right side apart (turning powers into multiplication, products into sums, quotients into differences). 3) Differentiate both sides implicitly - the left side becomes (1/y)(dy/dx) by the chain rule. 4) Solve for dy/dx and substitute the original expression back in for y.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Differentiate y = x^x. Take ln of both sides: ln y = x ln x. Differentiate both sides with respect to x (product rule on the right, implicit chain rule on the left): (1/y)(dy/dx) = ln x + x*(1/x) = ln x + 1. Solve for dy/dx by multiplying both sides by y: dy/dx = y(ln x + 1). Substitute y = x^x back in: dy/dx = x^x(ln x + 1).",
            mathExpression: "y = x^x \\implies \\dfrac{dy}{dx} = x^x(\\ln x + 1)",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Applying the ordinary power rule to x^x and writing d/dx[x^x] = x*x^(x-1). That rule assumes a constant exponent, which isn't the case here - x^x needs logarithmic differentiation precisely because both pieces vary.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u4-l4-p1",
            topicTag: "logarithmicDifferentiation",
            promptText: "Use logarithmic differentiation to find dy/dx for y = x^(2x).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "x^(2x)*(2ln(x)+2)",
            stepByStepExplanation:
              "ln y = 2x ln x. Differentiate: (1/y)(dy/dx) = 2 ln x + 2x(1/x) = 2 ln x + 2. Solve: dy/dx = y(2 ln x + 2) = x^(2x)(2 ln x + 2).",
            difficultyLevel: 4,
          },
          {
            problemId: "c1-u4-l4-p2",
            topicTag: "logarithmicDifferentiation",
            promptText: "Use logarithmic differentiation to find dy/dx for y = (sin x)^x.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(sin(x))^x*(ln(sin(x))+x*cot(x))",
            stepByStepExplanation:
              "ln y = x ln(sin x). Differentiate (product rule on the right, with chain rule on ln(sin x)): (1/y)(dy/dx) = ln(sin x) + x*(cos x/sin x) = ln(sin x) + x cot x. Solve: dy/dx = (sin x)^x [ln(sin x) + x cot x].",
            difficultyLevel: 5,
          },
          {
            problemId: "c1-u4-l4-p3",
            topicTag: "logarithmicDifferentiation",
            promptText: "Use logarithmic differentiation to find dy/dx for y = x^(cos x).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "x^(cos(x))*(cos(x)/x - sin(x)*ln(x))",
            stepByStepExplanation:
              "ln y = cos x ln x. Differentiate: (1/y)(dy/dx) = -sin x ln x + cos x (1/x) = cos x/x - sin x ln x. Solve: dy/dx = x^(cos x)[cos x/x - sin x ln x].",
            difficultyLevel: 5,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Logarithmic Differentiation",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/LogDiff.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Derivatives of common functions",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-differentiation-2-new",
            resourceType: "interactivePractice",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "related-rates-and-linear-approximation",
    unitTitle: "Applications of Derivatives I: Related Rates and Linear Approximation",
    unitDescription: "Setting up related-rates problems and using tangent lines as local approximations.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Applications of Derivatives I: Related Rates and Linear Approximation",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc1-related-rates-and-linear-approximation-quiz-p1",
          topicTag: "relatedRates",
          promptText:
            "A circle's radius is growing at 4 cm/s. Find the rate the area is increasing when r = 6 cm. (Give your answer as a multiple of pi, e.g. '10pi'.)",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "48pi",
          acceptableAnswerVariants: ["48π", "48*pi"],
          stepByStepExplanation:
            "A = pi*r^2. Differentiate: dA/dt = 2*pi*r*(dr/dt). Substitute r=6, dr/dt=4: dA/dt = 2*pi(6)(4) = 48*pi.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc1-related-rates-and-linear-approximation-quiz-p2",
          topicTag: "relatedRates",
          promptText:
            "A sphere's volume is V=(4/3)*pi*r^3. Its radius grows at 2 cm/s. Find dV/dt when r=5 cm. (Give your answer as a multiple of pi.)",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "200pi",
          acceptableAnswerVariants: ["200π", "200*pi"],
          stepByStepExplanation:
            "Differentiate: dV/dt = 4*pi*r^2*(dr/dt). Substitute r=5, dr/dt=2: dV/dt = 4*pi(25)(2) = 200*pi.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc1-related-rates-and-linear-approximation-quiz-p3",
          topicTag: "relatedRates",
          promptText: "Given xy=36, with dx/dt=3 when x=4 and y=9, find dy/dt at that moment.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "-27/4",
          acceptableAnswerVariants: ["-6.75"],
          stepByStepExplanation:
            "Differentiate xy=36 with the product rule with respect to t: (dx/dt)y + x(dy/dt) = 0. Substitute: (3)(9) + 4(dy/dt) = 0, so 27 + 4(dy/dt) = 0, giving dy/dt = -27/4.",
          difficultyLevel: 4,
        },
        {
          problemId: "calc1-related-rates-and-linear-approximation-quiz-p4",
          topicTag: "relatedRates",
          promptText:
            "A 15-ft ladder leans against a wall. The bottom slides away from the wall at 2 ft/s. Find the rate the top slides down when the bottom is 9 ft from the wall.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "-3/2",
          acceptableAnswerVariants: ["-1.5"],
          stepByStepExplanation:
            "x^2+y^2=225. At x=9, y=12 (9-12-15 right triangle). Differentiate: 2x(dx/dt)+2y(dy/dt)=0. Substitute: 2(9)(2)+2(12)(dy/dt)=0, so 36+24(dy/dt)=0, giving dy/dt = -36/24 = -3/2 ft/s.",
          difficultyLevel: 4,
        },
        {
          problemId: "calc1-related-rates-and-linear-approximation-quiz-p5",
          topicTag: "linearApproximation",
          promptText: "Use linear approximation of f(x)=sqrt(x) at a=25 to estimate sqrt(25.5).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "5.05",
          stepByStepExplanation:
            "f(25)=5, f'(x)=1/(2sqrt(x)), f'(25)=1/10. L(25.5) = 5 + (1/10)(0.5) = 5 + 0.05 = 5.05.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc1-related-rates-and-linear-approximation-quiz-p6",
          topicTag: "linearApproximation",
          promptText: "Find the linearization L(x) of f(x) = 1/x at a=2.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "1-x/4",
          acceptableAnswerVariants: ["-x/4+1", "L(x)=1-x/4"],
          stepByStepExplanation:
            "f(2)=1/2, f'(x)=-1/x^2, f'(2)=-1/4. L(x) = 1/2 + (-1/4)(x-2) = 1/2 - x/4 + 1/2 = 1 - x/4.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc1-related-rates-and-linear-approximation-quiz-p7",
          topicTag: "linearApproximation",
          promptText: "For y = x^2, find dy when x=6 and dx=0.1.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "1.2",
          stepByStepExplanation: "dy = 2x*dx = 2(6)(0.1) = 1.2.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc1-related-rates-and-linear-approximation-quiz-p8",
          topicTag: "linearApproximation",
          promptText:
            "A sphere's radius is measured as 5 cm with a possible error of 0.05 cm. Estimate the propagated error in the surface area S=4*pi*r^2. (Give your answer as a multiple of pi.)",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "2pi",
          acceptableAnswerVariants: ["2π", "2*pi"],
          stepByStepExplanation: "dS = 8*pi*r*dr = 8*pi(5)(0.05) = 2*pi.",
          difficultyLevel: 3,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "setting-up-related-rates-problems",
        lessonTitle: "Setting Up Related-Rates Problems",
        estimatedMinutes: 25,
        topicTag: "relatedRates",
        learningGoals: [
          "Explain the general strategy for a related-rates problem",
          "Differentiate an equation with respect to time using implicit differentiation",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "The general strategy",
            bodyText:
              "A related-rates problem gives you an equation connecting two or more quantities that are all changing over time, tells you how fast one of them is changing, and asks how fast another one is changing at a specific instant. The strategy: (1) identify all variables and what's given/wanted, (2) write an equation relating the variables, (3) differentiate BOTH sides with respect to time t, treating every variable as a function of t (this is implicit differentiation in disguise, with t as the independent variable), (4) only THEN plug in the specific numeric values, and solve for the unknown rate.",
          },
          {
            blockType: "keyFormula",
            headingText: "Why order matters",
            bodyText:
              "Every variable's derivative with respect to t gets its own 'rate' symbol - dr/dt, dA/dt, and so on - produced by the chain rule exactly like dy/dx showed up in implicit differentiation. You must keep everything symbolic through the differentiation step; substituting known numbers too early treats a changing quantity as if it were frozen, which breaks the chain rule.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "A circle's radius is growing at 3 cm/s. Find the rate the area is increasing when r = 5 cm. Relate the variables: A = πr^2. Differentiate both sides with respect to t: dA/dt = 2πr(dr/dt). NOW substitute the known values r=5 and dr/dt=3: dA/dt = 2π(5)(3) = 30π cm^2/s.",
            mathExpression: "A=\\pi r^2 \\implies \\dfrac{dA}{dt} = 2\\pi r\\dfrac{dr}{dt} = 30\\pi \\text{ cm}^2/\\text{s}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Plugging in the specific numeric value (like r = 5) BEFORE differentiating. If you substitute r=5 into A=πr^2 first, you get the constant A=25π, and differentiating a constant just gives 0 - the entire relationship between the rates gets destroyed. Numbers only go in after the derivative is taken.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u5-l1-p1",
            topicTag: "relatedRates",
            promptText:
              "A square's side length is growing at 2 cm/s. Find the rate the area is increasing when the side is 4 cm.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "16",
            stepByStepExplanation:
              "A = s^2. Differentiate: dA/dt = 2s(ds/dt). Substitute s=4, ds/dt=2: dA/dt = 2(4)(2) = 16 cm^2/s.",
            difficultyLevel: 2,
          },
          {
            problemId: "c1-u5-l1-p2",
            topicTag: "relatedRates",
            promptText:
              "A sphere's volume is V=(4/3)*pi*r^3. Its radius grows at 0.5 cm/s. Find dV/dt when r=3 cm. (Give your answer as a multiple of pi, e.g. '18pi'.)",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "18pi",
            acceptableAnswerVariants: ["18π", "18*pi"],
            stepByStepExplanation:
              "Differentiate: dV/dt = 4*pi*r^2*(dr/dt). Substitute r=3, dr/dt=0.5: dV/dt = 4*pi*(9)*(0.5) = 18*pi cm^3/s.",
            difficultyLevel: 3,
          },
          {
            problemId: "c1-u5-l1-p3",
            topicTag: "relatedRates",
            promptText: "Given xy=20, with dx/dt=4 when x=5 and y=4, find dy/dt at that moment.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "-16/5",
            acceptableAnswerVariants: ["-3.2"],
            stepByStepExplanation:
              "Differentiate xy=20 using the product rule with respect to t: (dx/dt)y + x(dy/dt) = 0. Substitute: (4)(4) + 5(dy/dt) = 0, so 16 + 5(dy/dt) = 0, giving dy/dt = -16/5.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Related Rates",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/RelatedRates.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 1, Chapter 4: Applications of Derivatives",
            resourceUrl: "https://openstax.org/books/calculus-volume-1/pages/4-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Related rates",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-equations-modeling",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "related-rates-classic-problem-types",
        lessonTitle: "Related Rates: Classic Problem Types",
        estimatedMinutes: 30,
        topicTag: "relatedRates",
        learningGoals: [
          "Set up and solve a sliding-ladder related-rates problem using the Pythagorean theorem",
          "Set up and solve a shadow-length related-rates problem using similar triangles",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "The recurring cast of problems",
            bodyText:
              "A handful of geometric setups appear over and over: a ladder sliding down a wall (Pythagorean theorem), a person's shadow changing length as they walk from a light source (similar triangles), and a tank filling or draining (volume formulas, often for cones). The physical setup changes, but the four-step strategy from the last lesson is identical every time - the hard part is translating the words into the right equation.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: the sliding ladder",
            bodyText:
              "A 10-ft ladder leans against a wall. The bottom slides away from the wall at 2 ft/s. Find how fast the top is sliding down when the bottom is 6 ft from the wall. Let x be the distance from the wall to the bottom, and y the height of the top. Relate them: x^2+y^2=100 (the ladder length is fixed). Differentiate with respect to t: 2x(dx/dt) + 2y(dy/dt) = 0. When x=6, the Pythagorean theorem gives y=8 (since 6-8-10 is a right triangle). Substitute x=6, y=8, dx/dt=2: 2(6)(2)+2(8)(dy/dt)=0, so 24+16(dy/dt)=0, giving dy/dt = -1.5 ft/s. The negative sign means the top is sliding DOWN at 1.5 ft/s.",
            mathExpression: "\\dfrac{dy}{dt} = -1.5 \\text{ ft/s}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Losing track of which rate is given and which is being solved for, or forgetting that a negative result on a rate means 'decreasing' - dropping that sign (or misreading which quantity is shrinking) is an easy way to report the top of the ladder as moving the wrong direction.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u5-l2-p1",
            topicTag: "relatedRates",
            promptText:
              "A 13-ft ladder leans against a wall. The bottom slides away at 3 ft/s. Find the rate the top slides down when the bottom is 5 ft from the wall.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "-5/4",
            acceptableAnswerVariants: ["-1.25"],
            stepByStepExplanation:
              "x^2+y^2=169. At x=5, y=12 (5-12-13 triangle). Differentiate: 2x(dx/dt)+2y(dy/dt)=0. Substitute: 2(5)(3)+2(12)(dy/dt)=0, so 30+24(dy/dt)=0, giving dy/dt = -30/24 = -5/4 ft/s.",
            difficultyLevel: 4,
          },
          {
            problemId: "c1-u5-l2-p2",
            topicTag: "relatedRates",
            promptText:
              "A 6-ft-tall person walks away from a 15-ft lamppost at 5 ft/s. Using similar triangles, the shadow length s relates to the person's distance x from the pole by s = (2/3)x. Find the rate the shadow length is growing.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "10/3",
            acceptableAnswerVariants: ["3.33", "3.33 ft/s"],
            stepByStepExplanation:
              "Differentiate s=(2/3)x with respect to t: ds/dt = (2/3)(dx/dt) = (2/3)(5) = 10/3 ft/s.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Related Rates",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/RelatedRates.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Related rates",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-equations-modeling",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "linear-approximation",
        lessonTitle: "Linear Approximation",
        estimatedMinutes: 20,
        topicTag: "linearApproximation",
        learningGoals: [
          "Build the linearization of a function at a point",
          "Use a linearization to estimate a function value near that point",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "The tangent line as a stand-in for the curve",
            bodyText:
              "Very close to a point where you know f(a) and f'(a) exactly, the curve y=f(x) looks almost exactly like its own tangent line. That tangent line is easy to evaluate (it's linear), so it makes a convenient stand-in for estimating f at nearby points where an exact value might be hard to compute by hand.",
          },
          {
            blockType: "keyFormula",
            headingText: "The linearization formula",
            bodyText:
              "The linearization of f at a is L(x) = f(a) + f'(a)(x-a). For x close to a, f(x) is approximately L(x).",
            mathExpression: "L(x) = f(a) + f'(a)(x-a)",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Estimate sqrt(4.1) using linear approximation, with f(x)=sqrt(x) and a=4 (a nearby point where the square root is easy: sqrt(4)=2). f(4)=2. f'(x) = 1/(2 sqrt(x)), so f'(4) = 1/4. Linearization: L(x) = 2 + (1/4)(x-4). Evaluate at x=4.1: L(4.1) = 2 + (1/4)(0.1) = 2 + 0.025 = 2.025. (The true value of sqrt(4.1) is about 2.0248, so this estimate is excellent.)",
            mathExpression: "\\sqrt{4.1} \\approx 2.025",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Using the linear approximation far away from the base point a, where the tangent line has long since diverged from the actual curve. Linear approximation is only reliable for x close to a - the further away, the worse the estimate gets.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u5-l3-p1",
            topicTag: "linearApproximation",
            promptText: "Use linear approximation of f(x)=sqrt(x) at a=9 to estimate sqrt(9.2).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "3.0333",
            acceptableAnswerVariants: ["3.033", "91/30", "3.03"],
            stepByStepExplanation:
              "f(9)=3, f'(x)=1/(2sqrt(x)), f'(9)=1/6. L(9.2) = 3 + (1/6)(0.2) = 3 + 0.0333 = 3.0333.",
            difficultyLevel: 3,
          },
          {
            problemId: "c1-u5-l3-p2",
            topicTag: "linearApproximation",
            promptText: "Use linear approximation of f(x)=x^3 at a=2 to estimate 2.1^3.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "9.2",
            stepByStepExplanation:
              "f(2)=8, f'(x)=3x^2, f'(2)=12. L(2.1) = 8 + 12(0.1) = 8+1.2 = 9.2. (The true value is 9.261.)",
            difficultyLevel: 3,
          },
          {
            problemId: "c1-u5-l3-p3",
            topicTag: "linearApproximation",
            promptText: "Find the linearization L(x) of f(x) = 1/x at a=1.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "2-x",
            acceptableAnswerVariants: ["-x+2", "L(x)=2-x"],
            stepByStepExplanation:
              "f(1)=1, f'(x)=-1/x^2, f'(1)=-1. L(x) = 1 + (-1)(x-1) = 1-x+1 = 2-x.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Linear Approximations",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/LinearApproximations.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Applications of derivatives",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-analytical-applications-new",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "differentials-and-error-estimation",
        lessonTitle: "Differentials and Error Estimation",
        estimatedMinutes: 20,
        topicTag: "linearApproximation",
        learningGoals: [
          "Use the differential dy=f'(x)dx to estimate the change in a function's output",
          "Estimate propagated error in a computed quantity from a measurement error",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Differentials: the same idea, different notation",
            bodyText:
              "The differential dy is defined as f'(x) times dx, where dx represents a small change in x. It's really the same linear-approximation idea from the last lesson, just packaged as 'how much does the output change' rather than 'what is the new output value.' This framing is especially useful for estimating how a measurement error in one quantity (like a radius) 'propagates' into error in something computed from it (like volume).",
          },
          {
            blockType: "keyFormula",
            headingText: "The differential formula",
            bodyText: "dy = f'(x) dx. When dx represents a measurement error, dy estimates the resulting error in y.",
            mathExpression: "dy = f'(x)\\,dx",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "A sphere's radius is measured as 10 cm, with a possible measurement error of plus-or-minus 0.1 cm. Estimate the resulting error in the computed volume. V = (4/3)*pi*r^3, so dV/dr = 4*pi*r^2. The differential is dV = 4*pi*r^2 * dr. Substitute r=10, dr=0.1: dV = 4*pi*(100)*(0.1) = 40*pi, which is about 125.7 cm^3 of possible error in the volume.",
            mathExpression: "dV = 4\\pi r^2\\,dr = 40\\pi \\text{ cm}^3 \\approx 125.7 \\text{ cm}^3",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Confusing the differential dx (an input to the formula, representing the size of the error or change) with computing an exact change Δy by re-evaluating the function at two points. The differential is an ESTIMATE based on the tangent line/derivative, not an exact recomputation - that's exactly what makes it fast to use.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u5-l4-p1",
            topicTag: "linearApproximation",
            promptText: "For y = x^2, find dy when x=5 and dx=0.2.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "2",
            stepByStepExplanation: "dy = 2x*dx = 2(5)(0.2) = 2.",
            difficultyLevel: 2,
          },
          {
            problemId: "c1-u5-l4-p2",
            topicTag: "linearApproximation",
            promptText:
              "A cube's side is measured as 6 cm with a possible error of 0.05 cm. Estimate the propagated error in the volume V=s^3.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "5.4",
            stepByStepExplanation: "dV = 3s^2*ds = 3(36)(0.05) = 5.4 cm^3.",
            difficultyLevel: 3,
          },
          {
            problemId: "c1-u5-l4-p3",
            topicTag: "linearApproximation",
            promptText:
              "For a circle's area A=pi*r^2, the radius is measured as 4 with a possible error dr=0.1. Estimate dA. (Give your answer as a multiple of pi, e.g. '0.8pi'.)",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "0.8pi",
            acceptableAnswerVariants: ["0.8π", "4pi/5"],
            stepByStepExplanation: "dA = 2*pi*r*dr = 2*pi*(4)(0.1) = 0.8*pi.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Differentials",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/Differentials.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Applications of derivatives",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-analytical-applications-new",
            resourceType: "interactivePractice",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "extrema-and-curve-sketching",
    unitTitle: "Applications of Derivatives II: Extrema, Mean Value Theorem, and Curve Sketching",
    unitDescription: "Critical points, the first and second derivative tests, and sketching a function's graph.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Applications of Derivatives II: Extrema, Mean Value Theorem, and Curve Sketching",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc1-extrema-and-curve-sketching-quiz-p1",
          topicTag: "applicationsOfDerivatives",
          promptText: "Find the critical points of f(x) = x^3 - 6x^2 + 9x.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "1,3",
          acceptableAnswerVariants: ["1, 3", "x=1,3"],
          stepByStepExplanation:
            "f'(x)=3x^2-12x+9=3(x^2-4x+3)=3(x-1)(x-3)=0, giving x=1 and x=3.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc1-extrema-and-curve-sketching-quiz-p2",
          topicTag: "applicationsOfDerivatives",
          promptText:
            "For f(x)=x^3-6x^2+9x with critical points at x=1 and x=3, use the first derivative test to classify x=1.",
          answerFormat: "multipleChoice",
          choices: ["local max", "local min", "neither", "cannot determine"],
          correctAnswer: "local max",
          stepByStepExplanation:
            "f'(x)=3(x-1)(x-3). For x<1 (try x=0): f'(0)=3(-1)(-3)=9>0 (increasing). For 1<x<3 (try x=2): f'(2)=3(1)(-1)=-3<0 (decreasing). Positive to negative means x=1 is a local max.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc1-extrema-and-curve-sketching-quiz-p3",
          topicTag: "applicationsOfDerivatives",
          promptText:
            "Using the same f(x)=x^3-6x^2+9x, use the first derivative test to classify the critical point x=3.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "local min",
          acceptableAnswerVariants: ["local minimum"],
          stepByStepExplanation:
            "For 1<x<3 (try x=2): f'(2)=-3<0 (decreasing). For x>3 (try x=4): f'(4)=3(3)(1)=9>0 (increasing). Negative to positive means x=3 is a local min.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc1-extrema-and-curve-sketching-quiz-p4",
          topicTag: "applicationsOfDerivatives",
          promptText: "Find the inflection point of f(x) = x^3 - 6x^2 + 9x.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "2",
          stepByStepExplanation: "f''(x)=6x-12. Set to 0: x=2.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc1-extrema-and-curve-sketching-quiz-p5",
          topicTag: "applicationsOfDerivatives",
          promptText:
            "For f(x)=x^2-6x+5, f'(x)=2x-6, with a critical point at x=3. f''(x)=2 everywhere. Use the second derivative test to classify x=3.",
          answerFormat: "multipleChoice",
          choices: ["local max", "local min", "neither", "inconclusive"],
          correctAnswer: "local min",
          stepByStepExplanation: "f''(3)=2, which is positive, so x=3 is a local min.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc1-extrema-and-curve-sketching-quiz-p6",
          topicTag: "meanValueTheorem",
          promptText: "Find the value of c guaranteed by the MVT for f(x)=x^2 on [0,6].",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "3",
          stepByStepExplanation:
            "Average rate of change: [f(6)-f(0)]/(6-0) = (36-0)/6 = 6. Find c where f'(c)=6: f'(x)=2x, so 2c=6, giving c=3.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc1-extrema-and-curve-sketching-quiz-p7",
          topicTag: "meanValueTheorem",
          promptText: "Does the Mean Value Theorem apply to f(x) = |x| on the interval [-2, 2]?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "no",
          stepByStepExplanation:
            "f(x)=|x| is not differentiable at x=0 (a sharp corner), and x=0 lies inside [-2,2]. Since the differentiability hypothesis fails on the interval, the MVT does not apply here.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc1-extrema-and-curve-sketching-quiz-p8",
          topicTag: "curveSketching",
          promptText:
            "For f(x)=x^3-6x^2+9x (critical points x=1 local max, x=3 local min, inflection point at x=2), state the interval where f is concave down.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "x<2",
          acceptableAnswerVariants: ["(-infinity,2)", "(-∞,2)"],
          stepByStepExplanation: "f''(x)=6x-12 is negative when x<2, so f is concave down there.",
          difficultyLevel: 2,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "critical-points-and-extrema",
        lessonTitle: "Critical Points and Extrema",
        estimatedMinutes: 25,
        topicTag: "applicationsOfDerivatives",
        learningGoals: [
          "Define a critical point and find critical points of a function",
          "Explain why local extrema can only occur at critical points",
        ],
        contentBlocks: [
          {
            blockType: "keyFormula",
            headingText: "Definition of a critical point",
            bodyText:
              "A critical point of f is a value x=c in the domain of f where either f'(c)=0 or f'(c) is undefined. These are the only places a local maximum or local minimum can possibly occur - a smooth peak or valley always has a horizontal tangent (f'=0), and a sharp corner or cusp has an undefined derivative.",
          },
          {
            blockType: "explanation",
            headingText: "Necessary, not sufficient",
            bodyText:
              "Every local extremum happens at a critical point, but not every critical point is a local extremum - some are just a momentary flattening with no actual peak or valley (like x^3 at x=0). Finding critical points is step one; classifying them (next lesson) is step two.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find the critical points of f(x) = x^3 - 3x^2. First find f'(x) = 3x^2 - 6x. Set it equal to 0 and factor: 3x(x-2) = 0, giving x=0 and x=2. f' is a polynomial, so it's never undefined. The critical points are x=0 and x=2.",
            mathExpression: "f'(x)=3x^2-6x=0 \\implies x=0,\\ x=2",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Only solving f'(x)=0 and forgetting to also check for x-values where f'(x) is undefined (as long as f itself is still defined there) - a sharp corner or vertical tangent is just as valid a critical point as a smooth flat spot.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u6-l1-p1",
            topicTag: "applicationsOfDerivatives",
            promptText: "Find the critical points of f(x) = x^3 - 12x.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "-2,2",
            acceptableAnswerVariants: ["2,-2", "x=-2,2", "-2, 2"],
            stepByStepExplanation: "f'(x)=3x^2-12=0, so x^2=4, giving x=2 and x=-2.",
            difficultyLevel: 2,
          },
          {
            problemId: "c1-u6-l1-p2",
            topicTag: "applicationsOfDerivatives",
            promptText: "Find the critical points of f(x) = x^4 - 4x^2.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "0,sqrt(2),-sqrt(2)",
            acceptableAnswerVariants: ["0, sqrt(2), -sqrt(2)", "x=0,±√2"],
            stepByStepExplanation:
              "f'(x)=4x^3-8x=4x(x^2-2)=0, giving x=0, x=sqrt(2), and x=-sqrt(2).",
            difficultyLevel: 3,
          },
          {
            problemId: "c1-u6-l1-p3",
            topicTag: "applicationsOfDerivatives",
            promptText: "For f(x) = x^(2/3), f'(x) = (2/3)x^(-1/3), which is undefined at x=0. Is x=0 a critical point?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "yes",
            stepByStepExplanation:
              "x=0 is in the domain of f (f(0)=0 is defined), and f'(0) is undefined, so by definition x=0 is a critical point (this one turns out to be a sharp cusp, a local minimum).",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Critical Points",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/CriticalPoints.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 1, Chapter 4: Applications of Derivatives",
            resourceUrl: "https://openstax.org/books/calculus-volume-1/pages/4-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Applications of derivatives",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-analytical-applications-new",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "the-first-derivative-test",
        lessonTitle: "The First Derivative Test",
        estimatedMinutes: 20,
        topicTag: "applicationsOfDerivatives",
        learningGoals: ["Use the sign of f' on either side of a critical point to classify it"],
        contentBlocks: [
          {
            blockType: "keyFormula",
            headingText: "The first derivative test",
            bodyText:
              "At a critical point c: if f' changes from positive to negative, c is a local maximum. If f' changes from negative to positive, c is a local minimum. If f' does not change sign, c is neither.",
          },
          {
            blockType: "explanation",
            headingText: "Why it works",
            bodyText:
              "f' positive means f is increasing; f' negative means f is decreasing. A local max is exactly the spot where a function stops climbing and starts falling - increasing then decreasing - and a local min is the reverse. Reading the sign of f' just before and just after a critical point tells you directly which pattern you're looking at.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Classify the critical points of f(x) = x^3-3x^2 (critical points x=0 and x=2, found in the last lesson), using f'(x) = 3x^2-6x = 3x(x-2). Test a point in each of the three intervals: for x<0, try x=-1: f'(-1)=3(-1)(-3)=9, positive (increasing). For 0<x<2, try x=1: f'(1)=3(1)(-1)=-3, negative (decreasing). For x>2, try x=3: f'(3)=3(3)(1)=9, positive (increasing). So at x=0, f' goes from positive to negative: local maximum. At x=2, f' goes from negative to positive: local minimum.",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Checking the sign of f' on only one side of the critical point and guessing the rest. You need a legitimate test value from BOTH the interval before and the interval after the critical point to see the actual sign change (or lack of one).",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u6-l2-p1",
            topicTag: "applicationsOfDerivatives",
            promptText:
              "For f(x)=x^3-12x with critical points at x=-2 and x=2, use the first derivative test to classify x=-2.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "local max",
            acceptableAnswerVariants: ["local maximum"],
            stepByStepExplanation:
              "f'(x)=3x^2-12=3(x-2)(x+2). For x<-2 (try x=-3): f'=3(-5)(-1)=15>0 (increasing). For -2<x<2 (try x=0): f'=3(-2)(2)=-12<0 (decreasing). Positive to negative means x=-2 is a local max.",
            difficultyLevel: 3,
          },
          {
            problemId: "c1-u6-l2-p2",
            topicTag: "applicationsOfDerivatives",
            promptText: "For f(x) = x^2-4x+3, f'(x)=2x-4, with a critical point at x=2. Classify it.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "local min",
            acceptableAnswerVariants: ["local minimum"],
            stepByStepExplanation:
              "For x<2, f'(x)=2x-4 is negative (e.g. f'(0)=-4). For x>2, f'(x) is positive (e.g. f'(3)=2). Negative to positive means x=2 is a local minimum (matches the fact that this is an upward parabola).",
            difficultyLevel: 2,
          },
          {
            problemId: "c1-u6-l2-p3",
            topicTag: "applicationsOfDerivatives",
            promptText: "For f(x) = -x^2+6x, f'(x)=-2x+6, with a critical point at x=3. Classify it.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "local max",
            acceptableAnswerVariants: ["local maximum"],
            stepByStepExplanation:
              "For x<3, f'(x) is positive (e.g. f'(0)=6). For x>3, f'(x) is negative (e.g. f'(4)=-2). Positive to negative means x=3 is a local maximum (matches the downward-opening parabola).",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: The Shape of a Graph, Part I",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/ShapeofGraphPtI.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Applications of derivatives",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-analytical-applications-new",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "concavity-and-the-second-derivative-test",
        lessonTitle: "Concavity and the Second Derivative Test",
        estimatedMinutes: 25,
        topicTag: "applicationsOfDerivatives",
        learningGoals: [
          "Determine concavity from the sign of the second derivative",
          "Find inflection points",
          "Apply the second derivative test to classify a critical point",
        ],
        contentBlocks: [
          {
            blockType: "keyFormula",
            headingText: "Concavity and inflection points",
            bodyText:
              "f is concave up where f''(x)>0 (the graph curves upward, like a cup), and concave down where f''(x)<0 (curves downward, like a frown). An inflection point is where concavity switches from one to the other.",
          },
          {
            blockType: "keyFormula",
            headingText: "The second derivative test",
            bodyText:
              "At a critical point c where f'(c)=0: if f''(c)>0, c is a local minimum. If f''(c)<0, c is a local maximum. If f''(c)=0, the test is inconclusive - fall back to the first derivative test instead.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "For f(x)=x^3-3x^2, f'(x)=3x^2-6x and f''(x)=6x-6. At x=0: f''(0)=-6, negative, so x=0 is a local maximum (matching the first derivative test result from the last lesson). At x=2: f''(2)=6, positive, so x=2 is a local minimum. The inflection point, where concavity switches, is where f''(x)=0: 6x-6=0, so x=1.",
            mathExpression: "f''(x)=6x-6=0 \\implies x=1 \\text{ (inflection point)}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "When f''(c)=0, concluding the critical point is 'neither a max nor a min.' That's wrong - the second derivative test is simply inconclusive in that case (like for f(x)=x^4 at x=0, which actually IS a local min). You must go back to the first derivative test to settle it.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u6-l3-p1",
            topicTag: "applicationsOfDerivatives",
            promptText: "Find the inflection point of f(x) = x^3 - 6x^2 + 9x.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "2",
            stepByStepExplanation: "f'(x)=3x^2-12x+9, f''(x)=6x-12. Set to 0: x=2.",
            difficultyLevel: 3,
          },
          {
            problemId: "c1-u6-l3-p2",
            topicTag: "applicationsOfDerivatives",
            promptText:
              "For f(x)=x^2-4x+3 with critical point x=2 (f'(x)=2x-4), use the second derivative test to classify x=2.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "local min",
            acceptableAnswerVariants: ["local minimum"],
            stepByStepExplanation: "f''(x)=2, which is positive everywhere, so x=2 is a local minimum.",
            difficultyLevel: 2,
          },
          {
            problemId: "c1-u6-l3-p3",
            topicTag: "applicationsOfDerivatives",
            promptText:
              "For f(x)=x^4, the critical point x=0 gives f''(0)=0, so the second derivative test is inconclusive. Using the first derivative test instead (f'(x)=4x^3 is negative for x<0 and positive for x>0), is x=0 a local min, local max, or neither?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "local min",
            acceptableAnswerVariants: ["local minimum"],
            stepByStepExplanation:
              "f' goes from negative to positive at x=0, so by the first derivative test, x=0 is a local minimum - even though the second derivative test alone couldn't tell you that.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: The Shape of a Graph, Part II",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/ShapeofGraphPtII.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Applications of derivatives",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-analytical-applications-new",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "the-mean-value-theorem",
        lessonTitle: "The Mean Value Theorem",
        estimatedMinutes: 20,
        topicTag: "meanValueTheorem",
        learningGoals: [
          "State the Mean Value Theorem and its hypotheses",
          "Find the value(s) of c guaranteed by the Mean Value Theorem",
        ],
        contentBlocks: [
          {
            blockType: "keyFormula",
            headingText: "The Mean Value Theorem (MVT)",
            bodyText:
              "If f is continuous on [a,b] and differentiable on (a,b), then there exists at least one c in (a,b) where f'(c) equals the average rate of change of f over [a,b]: f'(c) = [f(b)-f(a)]/(b-a). In plain terms: somewhere in between, the instantaneous rate of change matches the average rate of change over the whole interval.",
            mathExpression: "f'(c) = \\dfrac{f(b)-f(a)}{b-a}",
          },
          {
            blockType: "explanation",
            headingText: "A familiar intuition",
            bodyText:
              "If you drive 120 miles in 2 hours, your average speed is 60 mph - and the MVT guarantees that your speedometer read exactly 60 mph at some instant during the trip (you can't average 60 mph while always going faster or always going slower than that). Rolle's Theorem is the special case where f(a)=f(b): then there's a c with f'(c)=0 exactly.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find the value of c guaranteed by the MVT for f(x)=x^2 on [1,4]. Average rate of change: [f(4)-f(1)]/(4-1) = (16-1)/3 = 5. Now find c where f'(c)=5: f'(x)=2x, so 2c=5, giving c=2.5, which does lie in (1,4) as required.",
            mathExpression: "c = 2.5",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Applying the MVT without checking its hypotheses first. If f has a discontinuity or a sharp corner (non-differentiable point) anywhere in the interval, the theorem simply doesn't apply, and there might be no c that works at all.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u6-l4-p1",
            topicTag: "meanValueTheorem",
            promptText: "Find the value of c guaranteed by the MVT for f(x)=x^2-2x on [0,3].",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "1.5",
            acceptableAnswerVariants: ["3/2"],
            stepByStepExplanation:
              "Average rate = [f(3)-f(0)]/3 = [3-0]/3 = 1. f'(x)=2x-2=1, so 2x=3, giving x=1.5.",
            difficultyLevel: 3,
          },
          {
            problemId: "c1-u6-l4-p2",
            topicTag: "meanValueTheorem",
            promptText:
              "Find the positive value of c guaranteed by the MVT for f(x)=x^3 on [-1,1].",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "1/sqrt(3)",
            acceptableAnswerVariants: ["0.577", "sqrt(3)/3", "1/√3"],
            stepByStepExplanation:
              "Average rate = [f(1)-f(-1)]/2 = [1-(-1)]/2 = 1. f'(x)=3x^2=1, so x^2=1/3, giving x = ±1/sqrt(3). The positive solution is 1/sqrt(3).",
            difficultyLevel: 4,
          },
          {
            problemId: "c1-u6-l4-p3",
            topicTag: "meanValueTheorem",
            promptText: "Does the Mean Value Theorem apply to f(x)=1/x on the interval [-1,1]?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "no",
            stepByStepExplanation:
              "f(x)=1/x is not continuous at x=0, which lies inside [-1,1]. Since the continuity hypothesis fails on the interval, the MVT does not apply here.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: The Mean Value Theorem",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/MeanValueTheorem.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "MIT OCW 18.01, Unit 2: Applications of Differentiation",
            resourceUrl: "https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "curve-sketching",
        lessonTitle: "Curve Sketching",
        estimatedMinutes: 30,
        topicTag: "curveSketching",
        learningGoals: [
          "Combine domain, intercepts, first-derivative, and second-derivative information into a full graph sketch",
        ],
        contentBlocks: [
          {
            blockType: "keyFormula",
            headingText: "The curve-sketching checklist",
            bodyText:
              "1) Find the domain. 2) Find x- and y-intercepts if easy. 3) Find f' and determine intervals of increase/decrease and locate local extrema. 4) Find f'' and determine concavity and inflection points. 5) Check for asymptotes (vertical or horizontal). 6) Plot the key points and connect them consistently with the increasing/decreasing and concavity information.",
          },
          {
            blockType: "explanation",
            headingText: "Why both derivatives are needed",
            bodyText:
              "The first derivative alone tells you the general up-and-down shape, but not HOW it curves on the way - two functions can share the same critical points and increasing/decreasing pattern while looking very different because one bends one way and the other bends the other way. Concavity is what makes a sketch actually resemble the real graph rather than a rough zig-zag.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: putting it together",
            bodyText:
              "Fully analyze f(x)=x^3-3x^2 (used throughout this unit). Domain: all real numbers. Intercepts: f(0)=0 and f(3)=0. From earlier lessons: critical points at x=0 (local max, f(0)=0) and x=2 (local min, f(2)=-4); increasing on (-infinity,0) and (2,infinity), decreasing on (0,2); inflection point at x=1 (f(1)=-2); concave down on (-infinity,1), concave up on (1,infinity). Plotting (0,0) as a peak, (2,-4) as a valley, and (1,-2) as the point where the curve's bend flips, gives an accurate S-shaped cubic sketch.",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Sketching a curve using only the critical points and general increasing/decreasing behavior, while ignoring concavity entirely. That produces a technically 'increasing then decreasing' shape that can still look nothing like the real graph, especially around inflection points.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u6-l5-p1",
            topicTag: "curveSketching",
            promptText:
              "For f(x)=x^3-3x^2 (critical points at x=0 local max and x=2 local min), state the interval(s) where f is increasing.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "x<0 or x>2",
            acceptableAnswerVariants: ["(-infinity,0) and (2,infinity)", "(-∞,0)∪(2,∞)"],
            stepByStepExplanation:
              "From the first derivative test done earlier, f' is positive for x<0 and for x>2, so f is increasing on those two intervals.",
            difficultyLevel: 2,
          },
          {
            problemId: "c1-u6-l5-p2",
            topicTag: "curveSketching",
            promptText: "For the same f(x)=x^3-3x^2 with inflection point at x=1, state the interval where f is concave up.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "x>1",
            acceptableAnswerVariants: ["(1,infinity)", "(1,∞)"],
            stepByStepExplanation: "f''(x)=6x-6 is positive when x>1, so f is concave up there.",
            difficultyLevel: 2,
          },
          {
            problemId: "c1-u6-l5-p3",
            topicTag: "curveSketching",
            promptText: "For f(x)=x^3-3x^2, what are the coordinates of the local minimum?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(2,-4)",
            stepByStepExplanation: "The local minimum occurs at the critical point x=2, and f(2)=8-12=-4, giving the point (2,-4).",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: The Shape of a Graph, Part II",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/ShapeofGraphPtII.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Applications of derivatives",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-analytical-applications-new",
            resourceType: "interactivePractice",
          },
          {
            resourceTitle: "MIT OCW 18.01, Unit 2: Applications of Differentiation",
            resourceUrl: "https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/",
            resourceType: "videoLesson",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "optimization",
    unitTitle: "Applications of Derivatives III: Optimization",
    unitDescription: "Setting up and solving real maximize/minimize word problems.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Applications of Derivatives III: Optimization",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc1-optimization-quiz-p1",
          topicTag: "optimizationApplications",
          promptText:
            "A rectangle has a fixed perimeter of 80 m. Find the dimensions that maximize its area, and give the length of one side.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "20",
          stepByStepExplanation:
            "2x+2y=80, so y=40-x. A=x(40-x)=40x-x^2. A'=40-2x=0 gives x=20, and y=40-20=20 (a square). A''=-2<0 confirms a maximum.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc1-optimization-quiz-p2",
          topicTag: "optimizationApplications",
          promptText: "Minimize f(x) = x + 4/x for x > 0. Find the x-value that minimizes f.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "2",
          stepByStepExplanation:
            "f'(x)=1-4/x^2=0, so x^2=4, and since x>0, x=2. f''(x)=8/x^3>0 for x>0, confirming a minimum at x=2.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc1-optimization-quiz-p3",
          topicTag: "optimizationApplications",
          promptText:
            "A rectangle has a fixed area of 144 square units. Find the dimensions that minimize its perimeter, and give the length of one side.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "12",
          stepByStepExplanation:
            "xy=144, so y=144/x. P=2x+2(144/x)=2x+288/x. P'=2-288/x^2=0 gives x^2=144, so x=12 (positive length), and y=144/12=12 (a square minimizes perimeter for fixed area).",
          difficultyLevel: 4,
        },
        {
          problemId: "calc1-optimization-quiz-p4",
          topicTag: "optimizationApplications",
          promptText:
            "An open-top box is made by cutting equal squares of side x from each corner of a 16-by-16 sheet of cardboard and folding up the sides, so V(x) = x(16-2x)^2, with domain 0<x<8. Find the value of x that maximizes the volume.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "8/3",
          acceptableAnswerVariants: ["2.667", "2.67"],
          stepByStepExplanation:
            "V'(x) = (16-2x)^2 + x*2(16-2x)(-2) = (16-2x)[(16-2x)-4x] = (16-2x)(16-6x). Setting V'(x)=0 gives x=8 (excluded, an endpoint) or x=16/6=8/3, which lies in the valid domain and gives the maximum volume.",
          difficultyLevel: 4,
        },
        {
          problemId: "calc1-optimization-quiz-p5",
          topicTag: "optimizationApplications",
          promptText:
            "A cylindrical can must hold a volume of 54*pi cubic units (V=pi*r^2*h=54*pi). Minimize the surface area S=2*pi*r^2+2*pi*r*h. Find the radius r that minimizes S.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "3",
          stepByStepExplanation:
            "From the volume constraint, h=54/r^2. Substitute into S: S=2*pi*r^2+2*pi*r*(54/r^2)=2*pi*r^2+108*pi/r. S'=4*pi*r-108*pi/r^2=0 gives 4r^3=108, so r^3=27, giving r=3.",
          difficultyLevel: 5,
        },
        {
          problemId: "calc1-optimization-quiz-p6",
          topicTag: "optimizationApplications",
          promptText: "Revenue is R(x) = 200x - 2x^2. Find the production level x that maximizes revenue.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "50",
          stepByStepExplanation: "R'(x)=200-4x=0 gives x=50. R''(x)=-4<0 confirms a maximum.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc1-optimization-quiz-p7",
          topicTag: "optimizationApplications",
          promptText:
            "The cost of producing x units is C(x) = 0.01x^2+30x+6400. The average cost per unit is A(x)=C(x)/x = 0.01x+30+6400/x. Find the production level x that minimizes average cost.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "800",
          stepByStepExplanation:
            "A'(x)=0.01-6400/x^2=0 gives x^2=6400/0.01=640000, so x=800 (taking the positive root).",
          difficultyLevel: 4,
        },
        {
          problemId: "calc1-optimization-quiz-p8",
          topicTag: "optimizationApplications",
          promptText:
            "A ball is thrown so its height is h(t) = -16t^2+48t+6 (feet, t in seconds). Find the maximum height reached.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "42",
          stepByStepExplanation:
            "h'(t)=-32t+48=0 gives t=1.5. h''(t)=-32<0 confirms a maximum. Maximum height: h(1.5)=-16(2.25)+48(1.5)+6=-36+72+6=42 feet.",
          difficultyLevel: 3,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "setting-up-optimization-problems",
        lessonTitle: "Setting Up Optimization Problems",
        estimatedMinutes: 25,
        topicTag: "optimizationApplications",
        learningGoals: [
          "Identify the objective function and constraint in a word problem",
          "Reduce an optimization problem to a single-variable function and find its extremum",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Objective function and constraint",
            bodyText:
              "Every optimization word problem has two parts hiding in the words: an objective function (the quantity you're trying to maximize or minimize, like area, cost, or volume) and a constraint (a fixed relationship between the variables, like a fixed amount of fencing or a fixed budget). The constraint lets you solve for one variable in terms of the other and substitute it into the objective function, turning a two-variable problem into a single-variable calculus problem you already know how to solve: find critical points, then confirm which one is the actual max or min.",
          },
          {
            blockType: "keyFormula",
            headingText: "The general steps",
            bodyText:
              "1) Identify the objective function and the constraint. 2) Solve the constraint for one variable, and substitute it into the objective function so it depends on a single variable. 3) Differentiate, set equal to 0, and solve for critical points. 4) Verify the critical point gives a max (or min) using the first or second derivative test, and check that it's within the physically valid domain.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "A farmer has 100 m of fencing to enclose a rectangular field and wants to maximize the area. Constraint: 2x+2y=100, so y=50-x. Objective: A=xy=x(50-x)=50x-x^2. Differentiate: A'(x)=50-2x. Set to 0: x=25, so y=50-25=25. Check with the second derivative: A''(x)=-2, which is negative everywhere, confirming this critical point is a maximum. Maximum area: 25 x 25 = 625 square meters.",
            mathExpression: "x=25,\\ y=25,\\ A_{max}=625 \\text{ m}^2",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Finding the critical point and stopping there without confirming it's actually a maximum (or minimum) - and forgetting to restrict the domain to physically sensible values, like requiring a length to be positive. A critical point outside the valid domain, or one that's actually a minimum when you wanted a maximum, is a wrong final answer even if all the algebra along the way was correct.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u7-l1-p1",
            topicTag: "optimizationApplications",
            promptText:
              "A rectangle has a fixed perimeter of 60 m. Find the dimensions that maximize its area, and give the length of one side.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "15",
            stepByStepExplanation:
              "2x+2y=60, so y=30-x. A=x(30-x)=30x-x^2. A'=30-2x=0 gives x=15, and y=30-15=15 (a square). A''=-2<0 confirms a maximum.",
            difficultyLevel: 3,
          },
          {
            problemId: "c1-u7-l1-p2",
            topicTag: "optimizationApplications",
            promptText: "Minimize f(x) = x + 1/x for x > 0. Find the x-value that minimizes f.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "1",
            stepByStepExplanation:
              "f'(x)=1-1/x^2=0, so x^2=1, and since x>0, x=1. f''(x)=2/x^3>0 for x>0, confirming a minimum at x=1 (with minimum value f(1)=2).",
            difficultyLevel: 3,
          },
          {
            problemId: "c1-u7-l1-p3",
            topicTag: "optimizationApplications",
            promptText:
              "A rectangle has a fixed area of 100 square units. Find the dimensions that minimize its perimeter, and give the length of one side.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "10",
            stepByStepExplanation:
              "xy=100, so y=100/x. P=2x+2(100/x)=2x+200/x. P'=2-200/x^2=0 gives x^2=100, so x=10 (positive length), and y=100/10=10 (a square minimizes the perimeter for fixed area, with minimum perimeter 40).",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Optimization",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/Optimization.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 1, Chapter 4: Applications of Derivatives",
            resourceUrl: "https://openstax.org/books/calculus-volume-1/pages/4-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Optimization",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-analytical-applications-new",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "optimization-geometric-problems",
        lessonTitle: "Optimization: Geometric Problems",
        estimatedMinutes: 25,
        topicTag: "optimizationApplications",
        learningGoals: [
          "Set up and solve optimization problems involving boxes, cans, and other geometric shapes with a fixed volume or surface area",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "The classic 'box' and 'can' problems",
            bodyText:
              "A hugely common category: given a fixed amount of material (surface area) or a fixed volume requirement, find the dimensions that use the least material or hold the most volume. The setup work is almost always the hardest part - drawing a picture and labeling variables for length, width, height, or radius before writing any formulas pays off enormously here.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "An open-top box is made by cutting equal squares of side x from each corner of a 12-by-12 sheet of cardboard and folding up the sides. Maximize the volume. The base becomes (12-2x) by (12-2x), and the height is x, so V(x) = x(12-2x)^2, with domain 0<x<6. Differentiate using the product rule with the chain rule: V'(x) = (12-2x)^2 + x*2(12-2x)(-2) = (12-2x)[(12-2x) - 4x] = (12-2x)(12-6x). Setting V'(x)=0 gives x=6 (excluded, it's an endpoint where volume is 0) or x=2. Since V=0 at both endpoints of the domain and V(2) = 2(8)^2 = 128 is positive, x=2 gives the maximum volume of 128 cubic units.",
            mathExpression: "x=2 \\implies V_{max} = 128",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Forgetting to restrict the domain based on the physical setup (here, x must be strictly between 0 and 6, since cutting a square bigger than half the sheet's side doesn't make sense), which can lead to accepting a critical point that isn't actually achievable.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u7-l2-p1",
            topicTag: "optimizationApplications",
            promptText:
              "A rectangular box with a square base and no top has volume 32 (so x^2*h=32, where x is the base side length and h is the height). Minimize the surface area S=x^2+4xh. Find the base side length x that minimizes S.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "4",
            stepByStepExplanation:
              "Substitute h=32/x^2 into S: S=x^2+4x(32/x^2)=x^2+128/x. S'=2x-128/x^2=0 gives 2x^3=128, so x^3=64, giving x=4 (and h=32/16=2).",
            difficultyLevel: 4,
          },
          {
            problemId: "c1-u7-l2-p2",
            topicTag: "optimizationApplications",
            promptText:
              "A cylindrical can must hold a volume of 16*pi cubic units (V=pi*r^2*h=16*pi). Minimize the surface area S=2*pi*r^2+2*pi*r*h. Find the radius r that minimizes S.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "2",
            stepByStepExplanation:
              "From the volume constraint, h=16/r^2. Substitute into S: S=2*pi*r^2+2*pi*r*(16/r^2)=2*pi*r^2+32*pi/r. S'=4*pi*r-32*pi/r^2=0 gives 4r^3=32, so r^3=8, giving r=2 (and h=16/4=4).",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: More Optimization Problems",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/MoreOptimization.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Optimization",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-analytical-applications-new",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "optimization-cost-revenue-and-physical-problems",
        lessonTitle: "Optimization: Cost, Revenue, and Physical Problems",
        estimatedMinutes: 25,
        topicTag: "optimizationApplications",
        learningGoals: [
          "Set up and solve optimization problems involving profit, revenue, and average cost",
          "Set up and solve a physical optimization problem such as maximizing height",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Profit is not the same as revenue",
            bodyText:
              "Profit equals revenue minus cost. Maximizing revenue and maximizing profit generally happen at DIFFERENT production levels, because cost keeps growing as you produce more. To maximize profit, differentiate the profit function itself (revenue minus cost) and find where its derivative is 0 - this is the same as finding where marginal revenue equals marginal cost.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "A company's profit from producing x units is P(x) = -2x^2+400x-1500. Maximize profit. Differentiate: P'(x) = -4x+400. Set to 0: x=100. Check: P''(x)=-4, negative, confirming a maximum. Maximum profit: P(100) = -2(10000)+40000-1500 = -20000+40000-1500 = 18500.",
            mathExpression: "x=100 \\implies P_{max} = 18{,}500",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Maximizing revenue when the problem actually asks for maximum profit (or vice versa), and forgetting to verify with the second derivative that a critical point is actually a maximum rather than a minimum - a profit function can easily have a critical point that's a minimum if cost grows faster than revenue past some level.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u7-l3-p1",
            topicTag: "optimizationApplications",
            promptText: "Revenue is R(x) = 100x - 0.5x^2. Find the production level x that maximizes revenue.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "100",
            stepByStepExplanation: "R'(x)=100-x=0 gives x=100. R''(x)=-1<0 confirms a maximum.",
            difficultyLevel: 2,
          },
          {
            problemId: "c1-u7-l3-p2",
            topicTag: "optimizationApplications",
            promptText:
              "The cost of producing x units is C(x) = 0.01x^2+40x+3600. The average cost per unit is A(x)=C(x)/x = 0.01x+40+3600/x. Find the production level x that minimizes average cost.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "600",
            stepByStepExplanation:
              "A'(x)=0.01-3600/x^2=0 gives x^2=3600/0.01=360000, so x=600 (taking the positive root, since production must be positive).",
            difficultyLevel: 4,
          },
          {
            problemId: "c1-u7-l3-p3",
            topicTag: "optimizationApplications",
            promptText:
              "A ball is thrown so its height is h(t) = -16t^2+64t+5 (feet, t in seconds). Find the maximum height reached.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "69",
            stepByStepExplanation:
              "h'(t)=-32t+64=0 gives t=2. h''(t)=-32<0 confirms a maximum. Maximum height: h(2)=-64+128+5=69 feet.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Business Applications",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/BusinessApplications.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Optimization",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-diff-analytical-applications-new",
            resourceType: "interactivePractice",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "intro-to-integration",
    unitTitle: "Introduction to Integration: Antiderivatives and Indefinite Integrals",
    unitDescription: "Basic antiderivative rules, an introductory pass at u-substitution, and initial value problems.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Introduction to Integration: Antiderivatives and Indefinite Integrals",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc1-intro-to-integration-quiz-p1",
          topicTag: "integrationBasics",
          promptText: "Find the indefinite integral.",
          promptMathExpression: "\\int (6x^2-4x+7)\\,dx",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "2x^3-2x^2+7x+C",
          stepByStepExplanation:
            "Integral of 6x^2 is 2x^3. Integral of -4x is -2x^2. Integral of 7 is 7x. Combine: 2x^3-2x^2+7x+C.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc1-intro-to-integration-quiz-p2",
          topicTag: "integrationBasics",
          promptText: "Find the indefinite integral.",
          promptMathExpression: "\\int \\left(\\dfrac{2}{x} + 4e^x\\right)dx",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "2ln|x|+4e^x+C",
          acceptableAnswerVariants: ["2ln(x)+4e^x+C", "2ln|x| + 4e^x + C"],
          stepByStepExplanation: "Integral of 2/x is 2ln|x|. Integral of 4e^x is 4e^x. Combine: 2ln|x|+4e^x+C.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc1-intro-to-integration-quiz-p3",
          topicTag: "integrationBasics",
          promptText: "Evaluate the indefinite integral of sin(x) dx.",
          answerFormat: "multipleChoice",
          choices: ["cos(x)+C", "-cos(x)+C", "-sin(x)+C", "sin(x)+C"],
          correctAnswer: "-cos(x)+C",
          stepByStepExplanation:
            "The antiderivative of sin x is -cos x, since d/dx[-cos x] = sin x. So the integral is -cos(x)+C.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc1-intro-to-integration-quiz-p4",
          topicTag: "integrationBasics",
          promptText: "Evaluate the integral using u-substitution.",
          promptMathExpression: "\\int 4x^3(x^4+2)^5\\,dx",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "(x^4+2)^6/6+C",
          stepByStepExplanation:
            "Let u=x^4+2, du=4x^3 dx. Integral becomes the integral of u^5 du = u^6/6+C = (x^4+2)^6/6+C.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc1-intro-to-integration-quiz-p5",
          topicTag: "integrationBasics",
          promptText: "Evaluate the integral using u-substitution.",
          promptMathExpression: "\\int x\\sqrt{x^2+16}\\,dx",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "(1/3)(x^2+16)^(3/2)+C",
          acceptableAnswerVariants: ["(x^2+16)^(3/2)/3+C"],
          stepByStepExplanation:
            "Let u=x^2+16, du=2x dx, so x dx = du/2. Integral becomes (1/2) times the integral of sqrt(u) du = (1/2)*(2/3)u^(3/2)+C = (1/3)(x^2+16)^(3/2)+C.",
          difficultyLevel: 4,
        },
        {
          problemId: "calc1-intro-to-integration-quiz-p6",
          topicTag: "integrationBasics",
          promptText: "Evaluate the integral.",
          promptMathExpression: "\\int \\sin(4x)\\,dx",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "-(1/4)cos(4x)+C",
          acceptableAnswerVariants: ["-cos(4x)/4+C"],
          stepByStepExplanation:
            "Let u=4x, du=4dx, so dx=du/4. Integral becomes (1/4) times the integral of sin(u) du = (1/4)(-cos(u))+C = -(1/4)cos(4x)+C.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc1-intro-to-integration-quiz-p7",
          topicTag: "integrationBasics",
          promptText: "Given f'(x)=6x^2+1 and f(0)=3, find f(x).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "2x^3+x+3",
          stepByStepExplanation:
            "General antiderivative: f(x)=2x^3+x+C. f(0)=C=3, so f(x)=2x^3+x+3.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc1-intro-to-integration-quiz-p8",
          topicTag: "integrationBasics",
          promptText: "A particle's velocity is v(t)=6t-4, and its position satisfies s(0)=5. Find the position function s(t).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "3t^2-4t+5",
          stepByStepExplanation:
            "General antiderivative of velocity: s(t)=3t^2-4t+C. s(0)=C=5, so s(t)=3t^2-4t+5.",
          difficultyLevel: 3,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "antiderivatives-and-indefinite-integrals",
        lessonTitle: "Antiderivatives and Indefinite Integrals",
        estimatedMinutes: 25,
        topicTag: "integrationBasics",
        learningGoals: [
          "Explain what an antiderivative is and why indefinite integrals need a '+C'",
          "Apply the basic antiderivative rules to find indefinite integrals",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Running differentiation in reverse",
            bodyText:
              "An antiderivative of f is a function F whose derivative is f. Finding antiderivatives means asking, for every derivative rule you already know, 'what would I have had to start with to get this?' The indefinite integral, written with the elongated S symbol, represents the ENTIRE family of antiderivatives at once - because if F is one antiderivative, so is F plus any constant, since the derivative of a constant is 0.",
          },
          {
            blockType: "keyFormula",
            headingText: "Basic antiderivative rules",
            bodyText:
              "Power rule: the integral of x^n dx is x^(n+1)/(n+1) + C, for n not equal to -1. Special case: the integral of 1/x dx is ln|x| + C. The integral of e^x dx is e^x + C. The integral of cos x dx is sin x + C. The integral of sin x dx is -cos x + C. Constant multiple and sum/difference rules carry over from differentiation.",
            mathExpression: "\\int x^n\\,dx = \\dfrac{x^{n+1}}{n+1}+C \\quad (n\\ne -1)",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find the integral of (3x^2-4x+5) dx. Apply the power rule term by term: the integral of 3x^2 is x^3, the integral of -4x is -2x^2, and the integral of 5 (thought of as 5x^0) is 5x. Combine and add the constant: x^3-2x^2+5x+C.",
            mathExpression: "\\int(3x^2-4x+5)\\,dx = x^3-2x^2+5x+C",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Forgetting the '+C' entirely - since infinitely many functions share the exact same derivative, the indefinite integral must represent that whole family, not just one member of it. Also common: trying to apply the power rule formula to the integral of 1/x (which is x^-1), which would require dividing by n+1=0 - that case needs the special ln|x| rule instead.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u8-l1-p1",
            topicTag: "integrationBasics",
            promptText: "Find the indefinite integral.",
            promptMathExpression: "\\int (4x^3-6x+2)\\,dx",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "x^4-3x^2+2x+C",
            stepByStepExplanation:
              "Integral of 4x^3 is x^4. Integral of -6x is -3x^2. Integral of 2 is 2x. Combine: x^4-3x^2+2x+C.",
            difficultyLevel: 2,
          },
          {
            problemId: "c1-u8-l1-p2",
            topicTag: "integrationBasics",
            promptText: "Find the indefinite integral.",
            promptMathExpression: "\\int \\left(\\dfrac{1}{x} + 3e^x\\right)dx",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "ln|x|+3e^x+C",
            acceptableAnswerVariants: ["ln(x)+3e^x+C", "ln|x| + 3e^x + C"],
            stepByStepExplanation: "Integral of 1/x is ln|x|. Integral of 3e^x is 3e^x. Combine: ln|x|+3e^x+C.",
            difficultyLevel: 2,
          },
          {
            problemId: "c1-u8-l1-p3",
            topicTag: "integrationBasics",
            promptText: "Find the indefinite integral.",
            promptMathExpression: "\\int (5\\cos x - \\sec^2 x)\\,dx",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "5sin(x)-tan(x)+C",
            stepByStepExplanation:
              "Integral of 5cos x is 5sin x. Integral of sec^2 x is tan x, so integral of -sec^2 x is -tan x. Combine: 5sin x - tan x + C.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Indefinite Integrals",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/IndefiniteIntegrals.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 1, Chapter 4: Applications of Derivatives (Antiderivatives)",
            resourceUrl: "https://openstax.org/books/calculus-volume-1/pages/4-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Integrals",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-integration-new",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "basic-u-substitution",
        lessonTitle: "Basic u-Substitution",
        estimatedMinutes: 25,
        topicTag: "integrationBasics",
        learningGoals: [
          "Recognize when an integral matches the reverse chain rule pattern",
          "Apply u-substitution to evaluate a basic composite-function integral",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Undoing the chain rule",
            bodyText:
              "u-substitution is the integration counterpart of the chain rule. If an integral contains a function and (up to a constant) its derivative multiplied alongside it, you can rename the inner function u, rewrite the whole integral in terms of u, integrate that simpler expression, and substitute back at the end. This lesson is only an introductory pass - Calculus II covers substitution far more thoroughly, including trickier variations.",
          },
          {
            blockType: "keyFormula",
            headingText: "The steps",
            bodyText:
              "1) Choose u to be an inner function whose derivative (or a constant multiple of it) also appears in the integral. 2) Compute du = u' dx and solve for dx (or for whatever piece of the original integral it replaces). 3) Rewrite the entire integral in terms of u only. 4) Integrate with respect to u. 5) Substitute the original expression for u back in.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Evaluate the integral of 2x(x^2+1)^4 dx. Let u = x^2+1, so du = 2x dx - which is exactly the other factor present in the integral. Rewrite: the integral becomes the integral of u^4 du. Integrate: u^5/5 + C. Substitute back: (x^2+1)^5/5 + C.",
            mathExpression: "\\int 2x(x^2+1)^4\\,dx = \\dfrac{(x^2+1)^5}{5}+C",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Forgetting to account for a missing constant factor when du doesn't exactly match what's sitting in the integral. For example, if du = 2x dx but the integral only has 'x dx' available, you need to solve du=2x dx for x dx (giving x dx = du/2) and carry that constant through - dropping it changes the final answer by that same missing factor.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u8-l2-p1",
            topicTag: "integrationBasics",
            promptText: "Evaluate the integral.",
            promptMathExpression: "\\int 3x^2(x^3+4)^5\\,dx",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(x^3+4)^6/6+C",
            stepByStepExplanation: "Let u=x^3+4, du=3x^2 dx. Integral becomes the integral of u^5 du = u^6/6+C = (x^3+4)^6/6+C.",
            difficultyLevel: 3,
          },
          {
            problemId: "c1-u8-l2-p2",
            topicTag: "integrationBasics",
            promptText: "Evaluate the integral.",
            promptMathExpression: "\\int x\\sqrt{x^2+9}\\,dx",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(1/3)(x^2+9)^(3/2)+C",
            acceptableAnswerVariants: ["(x^2+9)^(3/2)/3+C"],
            stepByStepExplanation:
              "Let u=x^2+9, du=2x dx, so x dx = du/2. Integral becomes (1/2) times the integral of sqrt(u) du = (1/2)*(2/3)u^(3/2)+C = (1/3)(x^2+9)^(3/2)+C.",
            difficultyLevel: 4,
          },
          {
            problemId: "c1-u8-l2-p3",
            topicTag: "integrationBasics",
            promptText: "Evaluate the integral.",
            promptMathExpression: "\\int \\cos(3x)\\,dx",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(1/3)sin(3x)+C",
            stepByStepExplanation:
              "Let u=3x, du=3dx, so dx=du/3. Integral becomes (1/3) times the integral of cos(u) du = (1/3)sin(u)+C = (1/3)sin(3x)+C.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Substitution Rule for Indefinite Integrals",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/SubstitutionRuleIndefinite.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Integrals",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-integration-new",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "initial-value-problems",
        lessonTitle: "Initial Value Problems",
        estimatedMinutes: 20,
        topicTag: "integrationBasics",
        learningGoals: [
          "Use a given point to solve for the constant of integration",
          "Find a particular antiderivative satisfying an initial condition",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Pinning down one member of the family",
            bodyText:
              "The general antiderivative is a whole family of curves, all shifted vertically from one another by different values of C. An initial condition - a known point the function actually passes through - lets you pick out exactly ONE member of that family: the particular solution.",
          },
          {
            blockType: "keyFormula",
            headingText: "The steps",
            bodyText:
              "1) Find the general antiderivative, including +C. 2) Substitute the given point's x- and y-values into that general antiderivative. 3) Solve for the specific value of C. 4) Write the particular function with that value of C plugged in.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Given f'(x) = 2x+3 and f(1) = 5, find f(x). First find the general antiderivative: f(x) = x^2+3x+C. Use the initial condition f(1)=5: substitute x=1: 1+3+C=5, so 4+C=5, giving C=1. The particular solution: f(x) = x^2+3x+1.",
            mathExpression: "f(x) = x^2+3x+1",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Plugging the initial condition into the DERIVATIVE f'(x) instead of into the antiderivative f(x). The initial condition is a value of the original function, not of its rate of change, so it must be used after integrating, on the +C form of f(x) itself.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u8-l3-p1",
            topicTag: "integrationBasics",
            promptText: "Given f'(x)=3x^2-2 and f(0)=4, find f(x).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "x^3-2x+4",
            stepByStepExplanation: "General antiderivative: f(x)=x^3-2x+C. f(0)=C=4, so f(x)=x^3-2x+4.",
            difficultyLevel: 2,
          },
          {
            problemId: "c1-u8-l3-p2",
            topicTag: "integrationBasics",
            promptText: "Given f'(x)=cos x and f(0)=2, find f(x).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "sin(x)+2",
            stepByStepExplanation: "General antiderivative: f(x)=sin x+C. f(0)=0+C=2, so C=2, giving f(x)=sin x+2.",
            difficultyLevel: 2,
          },
          {
            problemId: "c1-u8-l3-p3",
            topicTag: "integrationBasics",
            promptText:
              "A particle's velocity is v(t)=4t-3, and its position satisfies s(1)=6. Find the position function s(t).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "2t^2-3t+7",
            stepByStepExplanation:
              "General antiderivative of velocity: s(t)=2t^2-3t+C. s(1)=2-3+C=6, so -1+C=6, giving C=7. s(t)=2t^2-3t+7.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Indefinite Integrals",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/IndefiniteIntegrals.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Integrals",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-integration-new",
            resourceType: "interactivePractice",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "definite-integrals-and-ftc",
    unitTitle: "Definite Integrals, Riemann Sums, and the Fundamental Theorem of Calculus",
    unitDescription: "Riemann sums, the definite integral, and both parts of the Fundamental Theorem of Calculus.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Definite Integrals, Riemann Sums, and the Fundamental Theorem of Calculus",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc1-definite-integrals-and-ftc-quiz-p1",
          topicTag: "integrationBasics",
          promptText: "Approximate the area under f(x)=x^2 on [0,6] using 3 rectangles and RIGHT endpoints.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "112",
          stepByStepExplanation:
            "Delta-x = (6-0)/3 = 2. Right endpoints x=2,4,6. Heights: f(2)=4, f(4)=16, f(6)=36. Right sum = (4+16+36)(2) = 112.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc1-definite-integrals-and-ftc-quiz-p2",
          topicTag: "integrationBasics",
          promptText: "Approximate the area under f(x)=2x+1 on [0,4] using 4 rectangles and LEFT endpoints.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "16",
          stepByStepExplanation:
            "Delta-x=1. Left endpoints x=0,1,2,3. Heights: f(0)=1, f(1)=3, f(2)=5, f(3)=7. Left sum = (1+3+5+7)(1) = 16.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc1-definite-integrals-and-ftc-quiz-p3",
          topicTag: "integrationBasics",
          promptText: "What is the value of the integral of f(x) from 5 to 5, for any function f?",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "0",
          stepByStepExplanation: "An integral over an interval of zero width is always 0.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc1-definite-integrals-and-ftc-quiz-p4",
          topicTag: "integrationBasics",
          promptText:
            "If the integral of f from 1 to 4 is 9, and the integral of f from 4 to 7 is 5, find the integral of f from 1 to 7.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "14",
          stepByStepExplanation: "By additivity across adjacent intervals: 9+5=14.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc1-definite-integrals-and-ftc-quiz-p5",
          topicTag: "integrationBasics",
          promptText: "Let F(x) be the integral from 3 to x of (t^2+2t) dt. Find F'(x).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "x^2+2x",
          stepByStepExplanation: "By FTC Part 1, F'(x) equals the integrand evaluated at x: x^2+2x.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc1-definite-integrals-and-ftc-quiz-p6",
          topicTag: "integrationBasics",
          promptText: "Let G(x) be the integral from 0 to x^3 of cos(t) dt. Find G'(x).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "3x^2*cos(x^3)",
          stepByStepExplanation:
            "By FTC Part 1 combined with the chain rule (upper limit x^3): G'(x) = cos(x^3) * 3x^2 = 3x^2 cos(x^3).",
          difficultyLevel: 4,
        },
        {
          problemId: "calc1-definite-integrals-and-ftc-quiz-p7",
          topicTag: "integrationBasics",
          promptText: "Evaluate the definite integral.",
          promptMathExpression: "\\int_0^2 4x^3\\,dx",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "16",
          stepByStepExplanation: "Antiderivative: x^4. Evaluate: F(2)-F(0) = 16-0 = 16.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc1-definite-integrals-and-ftc-quiz-p8",
          topicTag: "integrationBasics",
          promptText:
            "Find the TRUE area between f(x)=x-3 and the x-axis on [0,6] (the function crosses zero at x=3, splitting the interval into two pieces).",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "9",
          stepByStepExplanation:
            "On [0,3]: the integral of (x-3)dx, using antiderivative x^2/2-3x, is (4.5-9)-(0-0) = -4.5, contributing area 4.5. On [3,6]: the integral is (18-18)-(4.5-9) = 0-(-4.5) = 4.5, contributing area 4.5. Total true area: 4.5+4.5 = 9.",
          difficultyLevel: 4,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "riemann-sums",
        lessonTitle: "Riemann Sums",
        estimatedMinutes: 30,
        topicTag: "integrationBasics",
        learningGoals: [
          "Approximate the area under a curve using left, right, and midpoint Riemann sums",
          "Use sigma notation to write a Riemann sum compactly",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Approximating area with rectangles",
            bodyText:
              "To estimate the area between a curve and the x-axis over an interval [a,b], slice the interval into n equal-width rectangles and add up their areas. Each rectangle's height is the function value at some chosen point in that slice - the left endpoint, the right endpoint, or the midpoint - and the choice determines whether you're computing a left, right, or midpoint Riemann sum.",
          },
          {
            blockType: "keyFormula",
            headingText: "The Riemann sum formula",
            bodyText:
              "With n rectangles of equal width delta-x = (b-a)/n, the Riemann sum is the sum from i=1 to n of f(x_i*) times delta-x, where x_i* is whichever sample point (left, right, or midpoint) each rectangle uses.",
            mathExpression: "\\sum_{i=1}^{n} f(x_i^*)\\,\\Delta x, \\qquad \\Delta x = \\dfrac{b-a}{n}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Approximate the area under f(x)=x^2 on [0,4] using 4 rectangles and RIGHT endpoints. Delta-x = (4-0)/4 = 1. The right endpoints are x=1,2,3,4. Heights: f(1)=1, f(2)=4, f(3)=9, f(4)=16. Right sum = (1+4+9+16)(1) = 30.",
            mathExpression: "\\text{Right sum} = 30",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Using the wrong endpoint for the requested sum (left endpoints when right was asked for, or vice versa). For an increasing function, using right endpoints over-estimates the true area, while left endpoints under-estimate it - the two sums genuinely give different numbers, and mixing them up gives a wrong answer even with correct arithmetic.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u9-l1-p1",
            topicTag: "integrationBasics",
            promptText: "Approximate the area under f(x)=x^2 on [0,4] using 4 rectangles and LEFT endpoints.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "14",
            stepByStepExplanation:
              "Delta-x=1. Left endpoints x=0,1,2,3. Heights: f(0)=0, f(1)=1, f(2)=4, f(3)=9. Left sum = (0+1+4+9)(1)=14.",
            difficultyLevel: 2,
          },
          {
            problemId: "c1-u9-l1-p2",
            topicTag: "integrationBasics",
            promptText: "Approximate the area under f(x)=x+1 on [0,4] using 4 rectangles and RIGHT endpoints.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "14",
            stepByStepExplanation:
              "Delta-x=1. Right endpoints x=1,2,3,4. Heights: f(1)=2, f(2)=3, f(3)=4, f(4)=5. Right sum = (2+3+4+5)(1)=14.",
            difficultyLevel: 2,
          },
          {
            problemId: "c1-u9-l1-p3",
            topicTag: "integrationBasics",
            promptText: "Approximate the integral of x^2 on [0,2] using 2 rectangles and MIDPOINTS.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "2.5",
            stepByStepExplanation:
              "Delta-x=1. Midpoints x=0.5 and 1.5. Heights: f(0.5)=0.25, f(1.5)=2.25. Midpoint sum = (0.25+2.25)(1) = 2.5.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: The Area Problem",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/AreaProblem.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "OpenStax Calculus Volume 1, Chapter 5: Integration",
            resourceUrl: "https://openstax.org/books/calculus-volume-1/pages/5-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Integrals",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-integration-new",
            resourceType: "interactivePractice",
          },
          {
            resourceTitle: "MIT OCW 18.01, Unit 3: Integration",
            resourceUrl: "https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "the-definite-integral",
        lessonTitle: "The Definite Integral",
        estimatedMinutes: 25,
        topicTag: "integrationBasics",
        learningGoals: [
          "Define the definite integral as a limit of Riemann sums",
          "Apply the basic properties of definite integrals",
        ],
        contentBlocks: [
          {
            blockType: "keyFormula",
            headingText: "The definite integral as a limit",
            bodyText:
              "The definite integral of f from a to b is defined as the limit of the Riemann sum as the number of rectangles n approaches infinity (equivalently, as the width of each rectangle shrinks to 0). It represents the exact net signed area between the curve and the x-axis over [a,b].",
            mathExpression: "\\int_a^b f(x)\\,dx = \\lim_{n\\to\\infty}\\sum_{i=1}^n f(x_i^*)\\Delta x",
          },
          {
            blockType: "explanation",
            headingText: "'Net signed' area, not just area",
            bodyText:
              "Where f(x) is above the x-axis, it contributes positive area; where f(x) dips below the x-axis, it contributes NEGATIVE area to the definite integral. So a definite integral can come out zero, or even negative, for a function that clearly occupies some region of the plane - it's measuring signed area, not a physical amount of ink.",
          },
          {
            blockType: "keyFormula",
            headingText: "Basic properties",
            bodyText:
              "The integral from a to a of f(x)dx is 0. Reversing the limits flips the sign: the integral from b to a equals the negative of the integral from a to b. Integrals add across adjacent intervals: the integral from a to b plus the integral from b to c equals the integral from a to c.",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Assuming a definite integral always represents ordinary physical area. If the function is negative anywhere on the interval, the definite integral subtracts that region instead of adding it - true physical area (covered in the last lesson of this unit) sometimes requires extra work to compute correctly.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u9-l2-p1",
            topicTag: "integrationBasics",
            promptText: "What is the value of the integral of f(x) from 4 to 4, for any function f?",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "0",
            stepByStepExplanation: "An integral over an interval of zero width is always 0.",
            difficultyLevel: 1,
          },
          {
            problemId: "c1-u9-l2-p2",
            topicTag: "integrationBasics",
            promptText:
              "If the integral of f from 0 to 3 is 7, and the integral of f from 3 to 5 is 4, find the integral of f from 0 to 5.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "11",
            stepByStepExplanation: "By additivity across adjacent intervals: 7+4=11.",
            difficultyLevel: 2,
          },
          {
            problemId: "c1-u9-l2-p3",
            topicTag: "integrationBasics",
            promptText: "If the integral of f from 2 to 6 is 10, find the integral of f from 6 to 2.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "-10",
            stepByStepExplanation: "Reversing the limits of integration flips the sign: -10.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: The Definition of the Definite Integral",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/DefnOfDefiniteIntegral.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Integrals",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-integration-new",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "the-fundamental-theorem-of-calculus-part-1",
        lessonTitle: "The Fundamental Theorem of Calculus, Part 1",
        estimatedMinutes: 25,
        topicTag: "integrationBasics",
        learningGoals: [
          "State the first part of the Fundamental Theorem of Calculus",
          "Differentiate a function defined as an integral with a variable upper limit",
        ],
        contentBlocks: [
          {
            blockType: "keyFormula",
            headingText: "The Fundamental Theorem of Calculus, Part 1",
            bodyText:
              "If F(x) is defined as the integral from a to x of f(t)dt, then F'(x) = f(x). In other words: differentiating an integral with a variable upper limit just hands you back the original integrand, evaluated at that limit. When the upper limit is a function g(x) instead of plain x, the chain rule tacks on an extra factor: d/dx[integral from a to g(x) of f(t)dt] = f(g(x)) * g'(x).",
            mathExpression: "\\dfrac{d}{dx}\\left[\\int_a^x f(t)\\,dt\\right] = f(x)",
          },
          {
            blockType: "explanation",
            headingText: "Why this is 'fundamental'",
            bodyText:
              "This is the theorem that formally proves differentiation and integration are inverse operations - integrating and then differentiating gets you right back where you started. That connection is the reason integration can be computed using antiderivatives at all (Part 2, next lesson), instead of always requiring a Riemann sum limit.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Let F(x) = the integral from 2 to x of (t^2+1) dt. Find F'(x). By Part 1, F'(x) is simply the integrand evaluated at x: F'(x) = x^2+1. Now a version with the chain rule: let G(x) = the integral from 0 to x^2 of sin(t) dt. The upper limit is x^2, not just x, so G'(x) = sin(x^2) * (derivative of x^2) = sin(x^2) * 2x = 2x sin(x^2).",
            mathExpression: "G'(x) = 2x\\sin(x^2)",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Forgetting to apply the chain rule when the upper limit is a function of x rather than plain x - writing G'(x) = sin(x^2) alone and skipping the essential extra factor of 2x.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u9-l3-p1",
            topicTag: "integrationBasics",
            promptText: "Let F(x) be the integral from 1 to x of sqrt(t^3+1) dt. Find F'(x).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "sqrt(x^3+1)",
            stepByStepExplanation: "By FTC Part 1, F'(x) equals the integrand evaluated at x: sqrt(x^3+1).",
            difficultyLevel: 2,
          },
          {
            problemId: "c1-u9-l3-p2",
            topicTag: "integrationBasics",
            promptText: "Let G(x) be the integral from 0 to x^3 of cos(t) dt. Find G'(x).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "3x^2*cos(x^3)",
            stepByStepExplanation:
              "By FTC Part 1 with the chain rule (upper limit x^3): G'(x) = cos(x^3) * 3x^2 = 3x^2 cos(x^3).",
            difficultyLevel: 4,
          },
          {
            problemId: "c1-u9-l3-p3",
            topicTag: "integrationBasics",
            promptText: "Let H(x) be the integral from 5 to x of (2t-3) dt. Find H'(2).",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "1",
            stepByStepExplanation: "By FTC Part 1, H'(x) = 2x-3. So H'(2) = 2(2)-3 = 1.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Fundamental Theorem of Calculus, Part I",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/FundThmCalculus.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Integrals",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-antiderivatives-ftc",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "the-fundamental-theorem-of-calculus-part-2",
        lessonTitle: "The Fundamental Theorem of Calculus, Part 2",
        estimatedMinutes: 25,
        topicTag: "integrationBasics",
        learningGoals: [
          "State the second part of the Fundamental Theorem of Calculus",
          "Evaluate definite integrals using an antiderivative",
        ],
        contentBlocks: [
          {
            blockType: "keyFormula",
            headingText: "The Fundamental Theorem of Calculus, Part 2",
            bodyText:
              "If F is any antiderivative of f, then the integral from a to b of f(x)dx equals F(b) minus F(a). This is written F(x) evaluated from a to b, or F(x)|_a^b. This single theorem is the reason you can evaluate a definite integral by finding one antiderivative and plugging in two numbers, instead of ever computing a Riemann sum limit by hand.",
            mathExpression: "\\int_a^b f(x)\\,dx = F(b)-F(a)",
          },
          {
            blockType: "explanation",
            headingText: "Why the '+C' doesn't matter here",
            bodyText:
              "Any antiderivative works, with any constant C, because when you subtract F(a) from F(b), the C's are identical on both ends and cancel out completely. That's why it's standard to just pick C=0 when evaluating a definite integral.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Evaluate the integral of 2x dx from 1 to 3. An antiderivative is F(x)=x^2. Apply FTC Part 2: F(3)-F(1) = 9-1 = 8. A second example: evaluate the integral of sin x dx from 0 to pi. An antiderivative is F(x)=-cos x. F(pi)-F(0) = -cos(pi) - (-cos(0)) = -(-1)-(-1) = 1+1 = 2.",
            mathExpression: "\\int_0^\\pi \\sin x\\,dx = 2",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Forgetting to subtract F(a) - evaluating the antiderivative at the upper limit only and stopping there. FTC Part 2 is always a subtraction of two values, upper minus lower, never a single evaluation.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u9-l4-p1",
            topicTag: "integrationBasics",
            promptText: "Evaluate the definite integral.",
            promptMathExpression: "\\int_0^2 3x^2\\,dx",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "8",
            stepByStepExplanation: "Antiderivative: x^3. Evaluate: F(2)-F(0) = 8-0 = 8.",
            difficultyLevel: 2,
          },
          {
            problemId: "c1-u9-l4-p2",
            topicTag: "integrationBasics",
            promptText: "Evaluate the definite integral.",
            promptMathExpression: "\\int_1^4 \\sqrt{x}\\,dx",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "14/3",
            stepByStepExplanation:
              "Antiderivative: (2/3)x^(3/2). Evaluate: F(4)-F(1) = (2/3)(8) - (2/3)(1) = 16/3 - 2/3 = 14/3.",
            difficultyLevel: 3,
          },
          {
            problemId: "c1-u9-l4-p3",
            topicTag: "integrationBasics",
            promptText: "Evaluate the definite integral.",
            promptMathExpression: "\\int_0^{\\pi/2} \\cos x\\,dx",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "1",
            stepByStepExplanation: "Antiderivative: sin x. Evaluate: sin(pi/2)-sin(0) = 1-0 = 1.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Computing Definite Integrals",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/ComputingDefiniteIntegrals.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Integrals",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-antiderivatives-ftc",
            resourceType: "interactivePractice",
          },
          {
            resourceTitle: "MIT OCW 18.01, Unit 3: Integration",
            resourceUrl: "https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "basic-area-under-a-curve-problems",
        lessonTitle: "Basic Area Under a Curve Problems",
        estimatedMinutes: 20,
        topicTag: "integrationBasics",
        learningGoals: [
          "Use a definite integral to find the area under a curve that stays above the x-axis",
          "Find the true area between a curve and the x-axis when the curve crosses the axis",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Signed area vs. true area",
            bodyText:
              "When a function stays entirely above (or entirely below) the x-axis over the interval, the definite integral directly gives the area (taking the absolute value if it's entirely below). But when a function crosses the x-axis within the interval, the straightforward definite integral gives a NET signed value, with the below-axis part subtracting rather than adding. To get the true, physical area in that case, split the interval at every root, integrate each piece separately, take the absolute value of each piece, and add those absolute values together.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find the true area between f(x)=x-2 and the x-axis on [0,4] (the function crosses zero at x=2, so it's negative on [0,2] and positive on [2,4]). On [0,2]: the integral of (x-2)dx from 0 to 2, using antiderivative x^2/2-2x, is (2-4)-(0-0) = -2. That's negative, so the actual area contributed is the absolute value, 2. On [2,4]: the integral is (8-8)-(2-4) = 0-(-2) = 2. Total true area: 2+2 = 4. (Note: the plain integral from 0 to 4 without splitting would give 0, the net signed area - very different from the true area of 4.)",
            mathExpression: "\\text{true area} = 4",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Computing the definite integral straight across an interval where the function crosses the x-axis, and calling that number 'the area.' Unless you split at the root(s) and take absolute values of each piece, you're computing net signed area, which can be much smaller than (or even the wrong sign compared to) the true area.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c1-u9-l5-p1",
            topicTag: "integrationBasics",
            promptText:
              "Find the area under f(x)=4-x^2 and above the x-axis, between its roots x=-2 and x=2.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "32/3",
            stepByStepExplanation:
              "Antiderivative: 4x-x^3/3. Evaluate from -2 to 2: [4(2)-8/3] - [4(-2)-(-8/3)] = [8-8/3] - [-8+8/3] = (8-8/3+8-8/3) = 16-16/3 = 32/3.",
            difficultyLevel: 3,
          },
          {
            problemId: "c1-u9-l5-p2",
            topicTag: "integrationBasics",
            promptText: "Evaluate the integral of (x-2) dx from 0 to 4 directly, WITHOUT splitting it (net signed value).",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "0",
            stepByStepExplanation:
              "Antiderivative: x^2/2-2x. Evaluate: F(4)-F(0) = (8-8) - (0-0) = 0. The positive and negative regions exactly cancel in the net signed value.",
            difficultyLevel: 3,
          },
          {
            problemId: "c1-u9-l5-p3",
            topicTag: "integrationBasics",
            promptText:
              "Find the TRUE area between f(x)=x-2 and the x-axis on [0,4] (splitting at the root x=2, where the function crosses the axis).",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "4",
            stepByStepExplanation:
              "On [0,2], the integral is -2, contributing area 2. On [2,4], the integral is 2, contributing area 2. Total true area: 2+2 = 4 (unlike the net signed value of 0 from the previous problem).",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: The Area Problem",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/AreaProblem.aspx",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Integrals",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-antiderivatives-ftc",
            resourceType: "interactivePractice",
          },
          {
            resourceTitle: "MIT OCW 18.01, Unit 3: Integration",
            resourceUrl: "https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/",
            resourceType: "videoLesson",
          },
        ],
      },
    ],
  },
];

export const calculus1CourseExam: CourseExam = {
  examTitle: "Calculus I: Course Exam",
  passingScorePercent: 70,
  questions: [
    // Unit 1: Limits and Continuity
    {
      problemId: "calc1-exam-p1",
      topicTag: "limitsAndContinuity",
      promptText: "Evaluate the limit.",
      promptMathExpression: "\\lim_{x\\to 5}\\dfrac{x^2-25}{x-5}",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "10",
      stepByStepExplanation: "Factor: (x-5)(x+5)/(x-5) = x+5 for x not equal to 5. As x approaches 5, this approaches 10.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc1-exam-p2",
      topicTag: "limitsAndContinuity",
      promptText: "Evaluate the limit.",
      promptMathExpression: "\\lim_{x\\to\\infty}\\dfrac{7x^2-3}{2x^2+5x}",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "7/2",
      stepByStepExplanation:
        "Numerator and denominator both have degree 2 (equal degrees), so the limit is the ratio of the leading coefficients: 7/2.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc1-exam-p3",
      topicTag: "limitsAndContinuity",
      promptText:
        "Let f(x) = 2x-1 for x < 2, and f(x) = x^2 for x >= 2. Does the two-sided limit of f(x) as x approaches 2 exist?",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "does not exist",
      acceptableAnswerVariants: ["no", "dne", "does not exist (DNE)"],
      stepByStepExplanation:
        "The left-hand limit uses 2x-1: 2(2)-1 = 3. The right-hand limit uses x^2: (2)^2 = 4. Since 3 does not equal 4, the two-sided limit does not exist.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc1-exam-p4",
      topicTag: "limitsAndContinuity",
      promptText: "g(x) = (x^2-16)/(x-4) is discontinuous at x = 4. What type of discontinuity is this?",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "removable",
      stepByStepExplanation:
        "Factoring gives (x-4)(x+4)/(x-4) = x+4, so the limit as x approaches 4 exists and equals 8, but g(4) is undefined. Since the limit exists, this is a removable discontinuity.",
      difficultyLevel: 2,
    },

    // Unit 2: The Derivative: Definition and Basic Rules
    {
      problemId: "calc1-exam-p5",
      topicTag: "derivativeDefinitionAndRules",
      promptText: "Use the limit definition of the derivative to find f'(x) for f(x) = x^2-4x.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "2x-4",
      stepByStepExplanation:
        "f(x+h) = (x+h)^2-4(x+h) = x^2+2xh+h^2-4x-4h. Subtract f(x): 2xh+h^2-4h. Divide by h: 2x+h-4. Take the limit as h approaches 0: 2x-4.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc1-exam-p6",
      topicTag: "derivativeDefinitionAndRules",
      promptText: "Differentiate.",
      promptMathExpression: "f(x) = 3x^4 - 5x^3 + 2x - 8",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "12x^3-15x^2+2",
      stepByStepExplanation: "d/dx[3x^4]=12x^3, d/dx[-5x^3]=-15x^2, d/dx[2x]=2, d/dx[-8]=0. Total: 12x^3-15x^2+2.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc1-exam-p7",
      topicTag: "derivativeDefinitionAndRules",
      promptText: "Use the product rule to differentiate f(x) = (3x+2)(x^2-1).",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "9x^2+4x-3",
      stepByStepExplanation: "f'(x) = 3(x^2-1) + (3x+2)(2x) = 3x^2-3+6x^2+4x = 9x^2+4x-3.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc1-exam-p8",
      topicTag: "derivativeDefinitionAndRules",
      promptText: "Use the quotient rule to differentiate f(x) = (x-2)/(x+3).",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "5/(x+3)^2",
      stepByStepExplanation:
        "f'(x) = [1*(x+3) - (x-2)*1]/(x+3)^2 = [x+3-x+2]/(x+3)^2 = 5/(x+3)^2.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc1-exam-p9",
      topicTag: "derivativeDefinitionAndRules",
      promptText: "Find the average rate of change of f(x)=x^2 from x=1 to x=4.",
      answerFormat: "multipleChoice",
      choices: ["3", "4", "5", "15"],
      correctAnswer: "5",
      stepByStepExplanation: "[f(4)-f(1)]/(4-1) = (16-1)/3 = 15/3 = 5.",
      difficultyLevel: 2,
    },

    // Unit 3: The Chain Rule and Implicit Differentiation
    {
      problemId: "calc1-exam-p10",
      topicTag: "chainRule",
      promptText: "Differentiate.",
      promptMathExpression: "y = (4x-3)^5",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "20(4x-3)^4",
      stepByStepExplanation: "Outside derivative: 5u^4. Inside derivative: 4. Chain rule: 5(4x-3)^4 * 4 = 20(4x-3)^4.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc1-exam-p11",
      topicTag: "chainRule",
      promptText: "Differentiate.",
      promptMathExpression: "y = \\dfrac{1}{(x^2+1)^3}",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "-6x/(x^2+1)^4",
      stepByStepExplanation:
        "Rewrite as (x^2+1)^(-3). Outside derivative: -3u^(-4). Inside derivative: 2x. Chain rule: -3(x^2+1)^(-4) * 2x = -6x/(x^2+1)^4.",
      difficultyLevel: 4,
    },
    {
      problemId: "calc1-exam-p12",
      topicTag: "chainRule",
      promptText: "Differentiate, combining the product rule and the chain rule.",
      promptMathExpression: "y = x^3(2x-1)^4",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "x^2(2x-1)^3(14x-3)",
      stepByStepExplanation:
        "Product rule with chain rule on the second factor: y' = 3x^2(2x-1)^4 + x^3*4(2x-1)^3*2 = 3x^2(2x-1)^4 + 8x^3(2x-1)^3. Factor out x^2(2x-1)^3: x^2(2x-1)^3[3(2x-1)+8x] = x^2(2x-1)^3(6x-3+8x) = x^2(2x-1)^3(14x-3).",
      difficultyLevel: 5,
    },
    {
      problemId: "calc1-exam-p13",
      topicTag: "implicitDifferentiation",
      promptText: "Find dy/dx by implicit differentiation.",
      promptMathExpression: "x^2-y^2=16",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "x/y",
      stepByStepExplanation: "Differentiate: 2x-2y(dy/dx)=0. Solve: dy/dx = 2x/(2y) = x/y.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc1-exam-p14",
      topicTag: "implicitDifferentiation",
      promptText: "Find the slope of the tangent line to x^2+y^2=50 at the point (5,5).",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "-1",
      stepByStepExplanation: "dy/dx = -x/y. At (5,5): slope = -5/5 = -1.",
      difficultyLevel: 3,
    },

    // Unit 4: Derivatives of Trigonometric, Exponential, and Logarithmic Functions
    {
      problemId: "calc1-exam-p15",
      topicTag: "derivativesOfTrigFunctions",
      promptText: "Differentiate.",
      promptMathExpression: "f(x) = 3\\cos x + 2\\sin x",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "-3sin(x)+2cos(x)",
      stepByStepExplanation: "d/dx[3 cos x] = -3 sin x. d/dx[2 sin x] = 2 cos x. Sum: f'(x) = -3sin x + 2cos x.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc1-exam-p16",
      topicTag: "derivativesOfTrigFunctions",
      promptText: "Differentiate.",
      promptMathExpression: "f(x) = \\tan(2x)",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "2sec^2(2x)",
      stepByStepExplanation: "Outside derivative sec^2(u), inside derivative 2. Chain rule: f'(x) = 2sec^2(2x).",
      difficultyLevel: 3,
    },
    {
      problemId: "calc1-exam-p17",
      topicTag: "derivativesOfExponentialAndLogFunctions",
      promptText: "Differentiate.",
      promptMathExpression: "f(x) = e^{x^2}",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "2x*e^(x^2)",
      stepByStepExplanation: "Outside derivative e^u, inside derivative 2x. Chain rule: f'(x) = e^(x^2) * 2x = 2xe^(x^2).",
      difficultyLevel: 3,
    },
    {
      problemId: "calc1-exam-p18",
      topicTag: "derivativesOfExponentialAndLogFunctions",
      promptText: "Differentiate.",
      promptMathExpression: "f(x) = \\ln(5x^2+1)",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "10x/(5x^2+1)",
      stepByStepExplanation: "Chain rule pattern g'(x)/g(x): f'(x) = 10x/(5x^2+1).",
      difficultyLevel: 3,
    },
    {
      problemId: "calc1-exam-p19",
      topicTag: "derivativesOfExponentialAndLogFunctions",
      promptText: "Differentiate.",
      promptMathExpression: "f(x) = 4^x",
      answerFormat: "multipleChoice",
      choices: ["4^x", "4^x*ln(4)", "x*4^(x-1)", "4^x/ln(4)"],
      correctAnswer: "4^x*ln(4)",
      stepByStepExplanation: "General base rule: d/dx[a^x] = a^x ln(a), so f'(x) = 4^x ln(4).",
      difficultyLevel: 2,
    },

    // Unit 5: Applications of Derivatives I: Related Rates and Linear Approximation
    {
      problemId: "calc1-exam-p20",
      topicTag: "relatedRates",
      promptText:
        "A circle's radius is growing at 5 cm/s. Find the rate the area is increasing when r = 8 cm. (Give your answer as a multiple of pi.)",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "80pi",
      acceptableAnswerVariants: ["80π", "80*pi"],
      stepByStepExplanation: "dA/dt = 2*pi*r*(dr/dt). Substitute r=8, dr/dt=5: dA/dt = 2*pi(8)(5) = 80*pi.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc1-exam-p21",
      topicTag: "relatedRates",
      promptText: "Given xy=48, with dx/dt=6 when x=8 and y=6, find dy/dt at that moment.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "-4.5",
      acceptableAnswerVariants: ["-9/2"],
      stepByStepExplanation:
        "Differentiate xy=48 with the product rule: (dx/dt)y + x(dy/dt) = 0. Substitute: (6)(6) + 8(dy/dt) = 0, so 36+8(dy/dt)=0, giving dy/dt = -36/8 = -4.5.",
      difficultyLevel: 4,
    },
    {
      problemId: "calc1-exam-p22",
      topicTag: "linearApproximation",
      promptText: "Use linear approximation of f(x)=sqrt(x) at a=16 to estimate sqrt(16.4).",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "4.05",
      stepByStepExplanation:
        "f(16)=4, f'(x)=1/(2sqrt(x)), f'(16)=1/8. L(16.4) = 4 + (1/8)(0.4) = 4 + 0.05 = 4.05.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc1-exam-p23",
      topicTag: "linearApproximation",
      promptText:
        "A cube's side is measured as 5 cm with a possible error of 0.02 cm. Estimate the propagated error in the volume V=s^3.",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "1.5",
      stepByStepExplanation: "dV = 3s^2*ds = 3(25)(0.02) = 1.5 cm^3.",
      difficultyLevel: 3,
    },

    // Unit 6: Applications of Derivatives II: Extrema, Mean Value Theorem, and Curve Sketching
    {
      problemId: "calc1-exam-p24",
      topicTag: "applicationsOfDerivatives",
      promptText: "Find the critical points of f(x) = x^3 - 3x.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "1,-1",
      acceptableAnswerVariants: ["-1,1", "x=-1,1", "-1, 1"],
      stepByStepExplanation: "f'(x)=3x^2-3=3(x-1)(x+1)=0, giving x=1 and x=-1.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc1-exam-p25",
      topicTag: "applicationsOfDerivatives",
      promptText:
        "For f(x)=x^3-3x with critical points at x=-1 and x=1, use the first derivative test to classify x=-1.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "local max",
      acceptableAnswerVariants: ["local maximum"],
      stepByStepExplanation:
        "f'(x)=3(x-1)(x+1). For x<-1 (try x=-2): f'(-2)=3(-3)(-1)=9>0 (increasing). For -1<x<1 (try x=0): f'(0)=3(-1)(1)=-3<0 (decreasing). Positive to negative means x=-1 is a local max.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc1-exam-p26",
      topicTag: "applicationsOfDerivatives",
      promptText: "Find the inflection point of f(x) = x^3 - 3x.",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "0",
      stepByStepExplanation: "f''(x)=6x. Set to 0: x=0.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc1-exam-p27",
      topicTag: "meanValueTheorem",
      promptText: "Find the value of c guaranteed by the MVT for f(x)=x^2-4x on [0,4].",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "2",
      stepByStepExplanation:
        "Average rate of change: [f(4)-f(0)]/(4-0) = (0-0)/4 = 0. Find c where f'(c)=0: f'(x)=2x-4, so 2c-4=0, giving c=2.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc1-exam-p28",
      topicTag: "curveSketching",
      promptText:
        "For f(x)=x^3-3x (critical points x=-1 local max, x=1 local min, inflection point at x=0), state the interval where f is concave up.",
      answerFormat: "multipleChoice",
      choices: ["x<0", "x>0", "-1<x<1", "all real x"],
      correctAnswer: "x>0",
      stepByStepExplanation: "f''(x)=6x is positive when x>0, so f is concave up there.",
      difficultyLevel: 2,
    },

    // Unit 7: Applications of Derivatives III: Optimization
    {
      problemId: "calc1-exam-p29",
      topicTag: "optimizationApplications",
      promptText:
        "A rectangle has a fixed perimeter of 48 m. Find the dimensions that maximize its area, and give the length of one side.",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "12",
      stepByStepExplanation:
        "2x+2y=48, so y=24-x. A=x(24-x)=24x-x^2. A'=24-2x=0 gives x=12, and y=24-12=12 (a square). A''=-2<0 confirms a maximum.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc1-exam-p30",
      topicTag: "optimizationApplications",
      promptText: "Minimize f(x) = x + 9/x for x > 0. Find the x-value that minimizes f.",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "3",
      stepByStepExplanation:
        "f'(x)=1-9/x^2=0, so x^2=9, and since x>0, x=3. f''(x)=18/x^3>0 for x>0, confirming a minimum.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc1-exam-p31",
      topicTag: "optimizationApplications",
      promptText:
        "An open-top box is made from a 20-by-20 sheet of cardboard by cutting equal squares of side x from each corner and folding up the sides, so V(x) = x(20-2x)^2, with domain 0<x<10. Find the value of x that maximizes the volume.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "10/3",
      acceptableAnswerVariants: ["3.33", "3.333"],
      stepByStepExplanation:
        "V'(x) = (20-2x)^2 + x*2(20-2x)(-2) = (20-2x)[(20-2x)-4x] = (20-2x)(20-6x). Setting V'(x)=0 gives x=10 (excluded, an endpoint) or x=20/6=10/3, which lies in the valid domain.",
      difficultyLevel: 4,
    },
    {
      problemId: "calc1-exam-p32",
      topicTag: "optimizationApplications",
      promptText: "A company's profit from producing x units is P(x) = -3x^2+600x-2000. Find the x that maximizes profit.",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "100",
      stepByStepExplanation: "P'(x)=-6x+600=0 gives x=100. P''(x)=-6<0 confirms a maximum.",
      difficultyLevel: 3,
    },

    // Unit 8: Introduction to Integration: Antiderivatives and Indefinite Integrals
    {
      problemId: "calc1-exam-p33",
      topicTag: "integrationBasics",
      promptText: "Find the indefinite integral.",
      promptMathExpression: "\\int (8x^3-3x^2+5)\\,dx",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "2x^4-x^3+5x+C",
      stepByStepExplanation:
        "Integral of 8x^3 is 2x^4. Integral of -3x^2 is -x^3. Integral of 5 is 5x. Combine: 2x^4-x^3+5x+C.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc1-exam-p34",
      topicTag: "integrationBasics",
      promptText: "Evaluate the integral using u-substitution.",
      promptMathExpression: "\\int 5x^4(x^5+3)^2\\,dx",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "(x^5+3)^3/3+C",
      stepByStepExplanation:
        "Let u=x^5+3, du=5x^4 dx. Integral becomes the integral of u^2 du = u^3/3+C = (x^5+3)^3/3+C.",
      difficultyLevel: 4,
    },
    {
      problemId: "calc1-exam-p35",
      topicTag: "integrationBasics",
      promptText: "Given f'(x)=4x-1 and f(2)=10, find f(x).",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "2x^2-x+4",
      stepByStepExplanation:
        "General antiderivative: f(x)=2x^2-x+C. f(2)=8-2+C=6+C=10, so C=4, giving f(x)=2x^2-x+4.",
      difficultyLevel: 3,
    },

    // Unit 9: Definite Integrals, Riemann Sums, and the Fundamental Theorem of Calculus
    {
      problemId: "calc1-exam-p36",
      topicTag: "integrationBasics",
      promptText: "Approximate the area under f(x)=x^2 on [0,3] using 3 rectangles and RIGHT endpoints.",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "14",
      stepByStepExplanation:
        "Delta-x=1. Right endpoints x=1,2,3. Heights: f(1)=1, f(2)=4, f(3)=9. Right sum = (1+4+9)(1) = 14.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc1-exam-p37",
      topicTag: "integrationBasics",
      promptText: "Let F(x) be the integral from 1 to x of sqrt(t^2+3) dt. Find F'(x).",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "sqrt(x^2+3)",
      stepByStepExplanation: "By FTC Part 1, F'(x) equals the integrand evaluated at x: sqrt(x^2+3).",
      difficultyLevel: 2,
    },
    {
      problemId: "calc1-exam-p38",
      topicTag: "integrationBasics",
      promptText: "Evaluate the definite integral.",
      promptMathExpression: "\\int_1^3 (3x^2-2x)\\,dx",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "18",
      stepByStepExplanation:
        "Antiderivative: x^3-x^2. Evaluate: F(3)-F(1) = (27-9)-(1-1) = 18-0 = 18.",
      difficultyLevel: 3,
    },
  ],
};
