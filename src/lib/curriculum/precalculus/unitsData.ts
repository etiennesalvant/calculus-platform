import { CourseExam, Unit, UnitQuiz } from "@/lib/types/curriculumTypes";

// Pre-Calculus
// See docs/curriculum/03-precalculus.md for the full plan.
// This is a trig-heavy course: the unit circle, identities, graphing, and
// exact values (e.g. sin(pi/3) = sqrt(3)/2) carry through directly into
// Calculus I and II, so every worked example and practice problem below is
// checked against known exact values before being written down.

export const precalculusUnits: Unit[] = [
  {
    unitSlug: "trig-ratios-and-right-triangles",
    unitTitle: "Trigonometric Ratios and Right Triangles",
    unitDescription: "SOH-CAH-TOA, solving right triangles, and right-triangle word problems.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Trigonometric Ratios and Right Triangles",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "precalc-trig-ratios-and-right-triangles-quiz-p1",
          topicTag: "trigonometricRatios",
          promptText: "Which ratio is defined as opposite over hypotenuse?",
          answerFormat: "multipleChoice",
          choices: ["Sine", "Cosine", "Tangent", "Secant"],
          correctAnswer: "Sine",
          stepByStepExplanation: "By SOH-CAH-TOA, sine is Opposite over Hypotenuse (SOH).",
          difficultyLevel: 1,
        },
        {
          problemId: "precalc-trig-ratios-and-right-triangles-quiz-p2",
          topicTag: "trigonometricRatios",
          promptText:
            "In a right triangle, the side opposite angle θ has length 8 and the hypotenuse has length 17 (an 8-15-17 triangle). Find cos θ.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "15/17",
          stepByStepExplanation:
            "The adjacent side is the third side of the 8-15-17 triangle, which is 15. Cosine is adjacent over hypotenuse: cos θ = 15/17.",
          difficultyLevel: 2,
        },
        {
          problemId: "precalc-trig-ratios-and-right-triangles-quiz-p3",
          topicTag: "trigonometricRatios",
          promptText: "A right triangle has legs of length 5 and 12. Find the length of the hypotenuse.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "13",
          stepByStepExplanation: "By the Pythagorean theorem, c = √(5² + 12²) = √(25+144) = √169 = 13.",
          difficultyLevel: 1,
        },
        {
          problemId: "precalc-trig-ratios-and-right-triangles-quiz-p4",
          topicTag: "trigonometricRatios",
          promptText:
            "A right triangle has hypotenuse 20 and one angle of 30°. Find the length of the side opposite that angle.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "10",
          stepByStepExplanation: "opposite = hypotenuse × sin 30° = 20 × (1/2) = 10.",
          difficultyLevel: 2,
        },
        {
          problemId: "precalc-trig-ratios-and-right-triangles-quiz-p5",
          topicTag: "trigonometricRatios",
          promptText:
            "A right triangle has legs 24 (adjacent) and 7 (opposite). Find the angle θ opposite the side of length 7, rounded to the nearest degree.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "16",
          acceptableAnswerVariants: ["16°"],
          stepByStepExplanation:
            "θ = arctan(opposite/adjacent) = arctan(7/24) ≈ arctan(0.2917) ≈ 16.26°, which rounds to 16°.",
          difficultyLevel: 3,
        },
        {
          problemId: "precalc-trig-ratios-and-right-triangles-quiz-p6",
          topicTag: "trigonometricRatios",
          promptText:
            "A 15-foot ladder leans against a wall, making a 70° angle with the ground. How high up the wall does the ladder reach? Round to the nearest tenth of a foot.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "14.1",
          stepByStepExplanation: "height = 15 · sin 70° ≈ 15 × 0.9397 ≈ 14.1 ft.",
          difficultyLevel: 3,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "soh-cah-toa-defining-the-trig-ratios",
        lessonTitle: "SOH-CAH-TOA: Defining the Trig Ratios",
        estimatedMinutes: 20,
        topicTag: "trigonometricRatios",
        learningGoals: [
          "Label the opposite side, adjacent side, and hypotenuse relative to a given acute angle",
          "Define sine, cosine, and tangent as ratios of a right triangle's sides",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Three sides, one angle at a time",
            bodyText:
              "Every right triangle has a hypotenuse (the side opposite the 90° angle, always the longest side) and two legs. But which leg is 'opposite' and which is 'adjacent' depends on which acute angle you're standing at: the opposite side is the leg across the triangle from that angle, and the adjacent side is the leg that touches it (that isn't the hypotenuse). Pick a different angle in the same triangle and those two labels swap.",
          },
          {
            blockType: "keyFormula",
            headingText: "SOH-CAH-TOA",
            bodyText:
              "For an acute angle θ in a right triangle: sine is Opposite over Hypotenuse, cosine is Adjacent over Hypotenuse, tangent is Opposite over Adjacent. The mnemonic spells out the pairing: Sine-Opposite-Hypotenuse, Cosine-Adjacent-Hypotenuse, Tangent-Opposite-Adjacent.",
            mathExpression:
              "\\sin\\theta = \\dfrac{\\text{opposite}}{\\text{hypotenuse}}, \\quad \\cos\\theta = \\dfrac{\\text{adjacent}}{\\text{hypotenuse}}, \\quad \\tan\\theta = \\dfrac{\\text{opposite}}{\\text{adjacent}}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "A right triangle has legs of length 3 and 4, and hypotenuse 5 (a 3-4-5 triangle). For the angle θ whose opposite side is 3 and adjacent side is 4: sin θ = 3/5, cos θ = 4/5, and tan θ = 3/4. Notice tan θ can also be found as sin θ / cos θ = (3/5)/(4/5) = 3/4 — that identity always holds.",
            mathExpression: "\\sin\\theta=\\dfrac{3}{5}, \\quad \\cos\\theta=\\dfrac{4}{5}, \\quad \\tan\\theta=\\dfrac{3}{4}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Mixing up opposite and adjacent because you forgot which angle you're evaluating from. Before writing any ratio, physically point at the angle in question, then point at the side directly across from it (opposite) and the side touching it (adjacent) — don't assume 'the shorter leg is always opposite.'",
          },
        ],
        practiceProblems: [
          {
            problemId: "pc-u1-l1-p1",
            topicTag: "trigonometricRatios",
            promptText:
              "In a right triangle, the side opposite angle θ has length 5 and the hypotenuse has length 13. Find sin θ.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "5/13",
            stepByStepExplanation: "Sine is opposite over hypotenuse: sin θ = 5/13.",
            difficultyLevel: 1,
          },
          {
            problemId: "pc-u1-l1-p2",
            topicTag: "trigonometricRatios",
            promptText:
              "In the same right triangle (opposite = 5, hypotenuse = 13, so the remaining leg is 12), find cos θ.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "12/13",
            stepByStepExplanation:
              "The adjacent side is the third side of the 5-12-13 triangle, which is 12. Cosine is adjacent over hypotenuse: cos θ = 12/13.",
            difficultyLevel: 2,
          },
          {
            problemId: "pc-u1-l1-p3",
            topicTag: "trigonometricRatios",
            promptText: "Using the same 5-12-13 triangle (opposite = 5, adjacent = 12), find tan θ.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "5/12",
            stepByStepExplanation: "Tangent is opposite over adjacent: tan θ = 5/12.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Precalculus 2e — Right Triangle Trigonometry",
            resourceUrl: "https://openstax.org/books/precalculus-2e/pages/7-2-right-triangle-trigonometry",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Right triangles and trigonometry",
            resourceUrl: "https://www.khanacademy.org/math/trigonometry/right-triangles-trig",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "solving-right-triangles",
        lessonTitle: "Solving Right Triangles",
        estimatedMinutes: 25,
        topicTag: "trigonometricRatios",
        learningGoals: [
          "Find a missing side of a right triangle using a trig ratio or the Pythagorean theorem",
          "Find a missing angle of a right triangle using an inverse trig function",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "What 'solving a triangle' means",
            bodyText:
              "'Solve the triangle' means find every side length and every angle measure. If you know one acute angle and one side, rearrange SOH-CAH-TOA to solve for the other sides; the Pythagorean theorem fills in a third side once you have two. If you know two sides but no angle, an inverse trig function (arcsin, arccos, arctan) hands you the angle back.",
          },
          {
            blockType: "keyFormula",
            headingText: "Rearranged ratios and the Pythagorean theorem",
            bodyText:
              "opposite = hypotenuse × sin θ, adjacent = hypotenuse × cos θ, opposite = adjacent × tan θ. And for any right triangle, a² + b² = c², where c is the hypotenuse.",
            mathExpression: "a^2+b^2=c^2",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "A right triangle has hypotenuse 10 and one angle of 30°. Find both legs. Opposite side = 10 · sin 30° = 10 · (1/2) = 5. Adjacent side = 10 · cos 30° = 10 · (√3/2) = 5√3 ≈ 8.66. Check with the Pythagorean theorem: 5² + (5√3)² = 25 + 75 = 100 = 10². ✓",
            mathExpression: "\\text{opposite}=5, \\quad \\text{adjacent}=5\\sqrt{3}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Leaving your calculator in radian mode while working in degrees (or vice versa). A right-triangle problem stated in degrees needs the calculator set to degree mode — sin(30) in radian mode gives a completely different, wrong number. Always check the mode before trusting a calculator's trig output.",
          },
        ],
        practiceProblems: [
          {
            problemId: "pc-u1-l2-p1",
            topicTag: "trigonometricRatios",
            promptText: "A right triangle has legs of length 9 and 12. Find the length of the hypotenuse.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "15",
            stepByStepExplanation: "By the Pythagorean theorem, c = √(9² + 12²) = √(81+144) = √225 = 15.",
            difficultyLevel: 1,
          },
          {
            problemId: "pc-u1-l2-p2",
            topicTag: "trigonometricRatios",
            promptText: "A right triangle has hypotenuse 12 and one angle of 30°. Find the length of the side opposite that angle.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "6",
            stepByStepExplanation: "opposite = hypotenuse × sin 30° = 12 × (1/2) = 6.",
            difficultyLevel: 2,
          },
          {
            problemId: "pc-u1-l2-p3",
            topicTag: "trigonometricRatios",
            promptText:
              "A right triangle has legs 8 (adjacent) and 15 (opposite). Find the angle θ opposite the side of length 15, rounded to the nearest degree.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "62",
            acceptableAnswerVariants: ["62°"],
            stepByStepExplanation:
              "θ = arctan(opposite/adjacent) = arctan(15/8) ≈ arctan(1.875) ≈ 61.93°, which rounds to 62°.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Precalculus 2e — Right Triangle Trigonometry",
            resourceUrl: "https://openstax.org/books/precalculus-2e/pages/7-2-right-triangle-trigonometry",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Right triangles and trigonometry",
            resourceUrl: "https://www.khanacademy.org/math/trigonometry/right-triangles-trig",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "right-triangle-word-problems",
        lessonTitle: "Right-Triangle Word Problems",
        estimatedMinutes: 20,
        topicTag: "trigonometricRatios",
        learningGoals: [
          "Translate an angle-of-elevation or angle-of-depression scenario into a labeled right triangle",
          "Solve real-world right-triangle problems using trig ratios",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Elevation and depression are both measured from the horizontal",
            bodyText:
              "An angle of elevation is the angle you look UP through, measured from a horizontal line to your line of sight toward something higher. An angle of depression is the angle you look DOWN through, measured from a horizontal line to your line of sight toward something lower. In both cases, the horizontal line — not the ground the object sits on — is where the angle starts.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "A 10-foot ladder leans against a wall, making a 60° angle with the ground. How high up the wall does the ladder reach? The ladder is the hypotenuse (10 ft); the height on the wall is the side opposite the 60° angle. height = 10 · sin 60° = 10 · (√3/2) = 5√3 ≈ 8.66 ft.",
            mathExpression: "\\text{height} = 10\\sin 60^\\circ = 5\\sqrt{3} \\approx 8.66 \\text{ ft}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Picking sine when the problem actually calls for cosine (or tangent), because the horizontal and vertical legs got mislabeled relative to the given angle. Draw the triangle first, mark which side is opposite the known angle and which is adjacent, and only then choose the ratio — don't guess based on which operation 'feels right.'",
          },
        ],
        practiceProblems: [
          {
            problemId: "pc-u1-l3-p1",
            topicTag: "trigonometricRatios",
            promptText:
              "A 20-foot ladder makes a 60° angle with the ground. How high up the wall does it reach? Round to the nearest tenth of a foot.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "17.3",
            stepByStepExplanation: "height = 20 · sin 60° = 20 · (√3/2) = 10√3 ≈ 17.3 ft.",
            difficultyLevel: 2,
          },
          {
            problemId: "pc-u1-l3-p2",
            topicTag: "trigonometricRatios",
            promptText:
              "From a point 50 meters from the base of a tower, the angle of elevation to the top of the tower is 35°. Find the height of the tower, rounded to the nearest meter.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "35",
            stepByStepExplanation:
              "The 50 m distance is adjacent to the 35° angle; the height is opposite it. height = 50 · tan 35° ≈ 50 × 0.7002 ≈ 35.0 m.",
            difficultyLevel: 3,
          },
          {
            problemId: "pc-u1-l3-p3",
            topicTag: "trigonometricRatios",
            promptText:
              "A plane flying at an altitude of 3000 feet spots a landing strip at an angle of depression of 15°. Find the horizontal distance from the plane to the landing strip, rounded to the nearest hundred feet.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "11200",
            stepByStepExplanation:
              "The angle of depression from the plane equals the angle of elevation from the landing strip (alternate interior angles), so tan 15° = 3000/distance. distance = 3000/tan 15° ≈ 3000/0.2679 ≈ 11197 ft, which rounds to 11200 ft.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Precalculus 2e — Right Triangle Trigonometry",
            resourceUrl: "https://openstax.org/books/precalculus-2e/pages/7-2-right-triangle-trigonometry",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Right triangles and trigonometry",
            resourceUrl: "https://www.khanacademy.org/math/trigonometry/right-triangles-trig",
            resourceType: "interactivePractice",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "unit-circle-and-radians",
    unitTitle: "The Unit Circle and Radian Measure",
    unitDescription:
      "Degree-radian conversion, building the unit circle, and evaluating trig functions at any angle.",
    unitQuiz: {
      quizTitle: "Unit Quiz: The Unit Circle and Radian Measure",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "precalc-unit-circle-and-radians-quiz-p1",
          topicTag: "unitCircleAndRadians",
          promptText: "Convert 120° to radians.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "2pi/3",
          acceptableAnswerVariants: ["2π/3"],
          stepByStepExplanation: "120 × (π/180) = 120π/180 = 2π/3.",
          difficultyLevel: 1,
        },
        {
          problemId: "precalc-unit-circle-and-radians-quiz-p2",
          topicTag: "unitCircleAndRadians",
          promptText: "Convert 7π/6 radians to degrees.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "210",
          stepByStepExplanation: "(7π/6) × (180/π) = 7(180)/6 = 1260/6 = 210°.",
          difficultyLevel: 2,
        },
        {
          problemId: "precalc-unit-circle-and-radians-quiz-p3",
          topicTag: "unitCircleAndRadians",
          promptText: "What is the y-coordinate of the point where angle π/2 meets the unit circle?",
          answerFormat: "multipleChoice",
          choices: ["0", "1", "-1", "undefined"],
          correctAnswer: "1",
          stepByStepExplanation:
            "The point where π/2 meets the unit circle is (cos(π/2), sin(π/2)) = (0, 1), so the y-coordinate is 1.",
          difficultyLevel: 1,
        },
        {
          problemId: "precalc-unit-circle-and-radians-quiz-p4",
          topicTag: "unitCircleAndRadians",
          promptText: "Evaluate cos(5π/4).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "-sqrt(2)/2",
          acceptableAnswerVariants: ["-√2/2"],
          stepByStepExplanation:
            "5π/4 is in quadrant III. Reference angle = 5π/4 − π = π/4. cos(π/4) = √2/2, and cosine is negative in quadrant III, so cos(5π/4) = -√2/2.",
          difficultyLevel: 3,
        },
        {
          problemId: "precalc-unit-circle-and-radians-quiz-p5",
          topicTag: "unitCircleAndRadians",
          promptText: "Evaluate sin(11π/6).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "-1/2",
          stepByStepExplanation:
            "11π/6 is in quadrant IV. Reference angle = 2π − 11π/6 = π/6. sin(π/6) = 1/2, and sine is negative in quadrant IV, so sin(11π/6) = -1/2.",
          difficultyLevel: 3,
        },
        {
          problemId: "precalc-unit-circle-and-radians-quiz-p6",
          topicTag: "unitCircleAndRadians",
          promptText: "Find a positive coterminal angle for -200°, between 0° and 360°.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "160",
          stepByStepExplanation: "-200° + 360° = 160°.",
          difficultyLevel: 2,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "radian-measure-and-degree-radian-conversion",
        lessonTitle: "Radian Measure and Degree-Radian Conversion",
        estimatedMinutes: 20,
        topicTag: "unitCircleAndRadians",
        learningGoals: [
          "Explain what one radian represents geometrically",
          "Convert fluently between degrees and radians",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "A radian is a ratio, not an arbitrary unit",
            bodyText:
              "One radian is the angle created when the arc length along a circle equals the circle's radius. Because it's defined as a length divided by a length, a radian measure is really just a pure number — which is exactly why every calculus formula involving sine, cosine, and tangent is written assuming radians: the formulas only come out clean that way. Degrees, by contrast, are an arbitrary human choice (360 slices of a circle, dating back to ancient Babylonian astronomy).",
          },
          {
            blockType: "keyFormula",
            headingText: "The conversion factors",
            bodyText:
              "A full circle is 360° and also 2π radians, so 180° = π radians. To convert degrees to radians, multiply by π/180. To convert radians to degrees, multiply by 180/π.",
            mathExpression:
              "\\text{degrees} \\times \\dfrac{\\pi}{180} = \\text{radians}, \\qquad \\text{radians} \\times \\dfrac{180}{\\pi} = \\text{degrees}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Convert 150° to radians: 150 × (π/180) = 150π/180 = 5π/6. Convert 3π/4 radians to degrees: (3π/4) × (180/π) = 3(180)/4 = 135°.",
            mathExpression: "150^\\circ = \\dfrac{5\\pi}{6}, \\qquad \\dfrac{3\\pi}{4} = 135^\\circ",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Flipping the conversion factor — multiplying degrees by 180/π instead of π/180 (or vice versa). A quick sanity check: radians should be a fairly small number (at most about 6.28, since 2π ≈ 6.28), while degrees run up to 360. If your converted radian answer is huge, you multiplied by the wrong fraction.",
          },
        ],
        practiceProblems: [
          {
            problemId: "pc-u2-l1-p1",
            topicTag: "unitCircleAndRadians",
            promptText: "Convert 60° to radians.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "pi/3",
            acceptableAnswerVariants: ["π/3"],
            stepByStepExplanation: "60 × (π/180) = 60π/180 = π/3.",
            difficultyLevel: 1,
          },
          {
            problemId: "pc-u2-l1-p2",
            topicTag: "unitCircleAndRadians",
            promptText: "Convert 5π/3 radians to degrees.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "300",
            stepByStepExplanation: "(5π/3) × (180/π) = 5(180)/3 = 900/3 = 300°.",
            difficultyLevel: 2,
          },
          {
            problemId: "pc-u2-l1-p3",
            topicTag: "unitCircleAndRadians",
            promptText: "Convert 210° to radians.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "7pi/6",
            acceptableAnswerVariants: ["7π/6"],
            stepByStepExplanation: "210 × (π/180) = 210π/180, which reduces (dividing by 30) to 7π/6.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Precalculus 2e — Angles (radian and degree measure)",
            resourceUrl: "https://openstax.org/books/precalculus-2e/pages/7-1-angles",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Radians & the unit circle",
            resourceUrl: "https://www.khanacademy.org/math/trigonometry/unit-circle-trig-func",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "the-unit-circle",
        lessonTitle: "The Unit Circle",
        estimatedMinutes: 30,
        topicTag: "unitCircleAndRadians",
        learningGoals: [
          "Explain how the unit circle extends sine and cosine beyond acute angles",
          "Derive the unit circle's key coordinates from 30-60-90 and 45-45-90 triangles instead of pure memorization",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Same idea, new definition",
            bodyText:
              "The unit circle is a circle of radius 1 centered at the origin. For any angle θ measured counterclockwise from the positive x-axis, the terminal side of that angle crosses the circle at exactly one point — and that point's coordinates are defined to be (cos θ, sin θ). Because the hypotenuse of the reference triangle is always 1 (the radius), this matches SOH-CAH-TOA exactly for acute angles, but now it also works for angles beyond 90°, negative angles, and angles bigger than 360° — anywhere a terminal side can point.",
          },
          {
            blockType: "keyFormula",
            headingText: "The defining coordinate",
            bodyText: "The point where angle θ's terminal side meets the unit circle is (cos θ, sin θ).",
            mathExpression: "(\\cos\\theta, \\sin\\theta)",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: building the first-quadrant points",
            bodyText:
              "Rather than memorize a table, build it from two familiar right triangles. A 45-45-90 triangle with hypotenuse 1 has legs 1/√2 = √2/2, giving the point for π/4: (√2/2, √2/2). A 30-60-90 triangle with hypotenuse 1 has legs 1/2 and √3/2 — at π/6 the short leg (1/2) is the height (sine) and the long leg (√3/2) is the base (cosine), giving (√3/2, 1/2); at π/3 those two legs swap roles, giving (1/2, √3/2).",
            mathExpression:
              "\\left(\\dfrac{\\sqrt3}{2},\\dfrac12\\right)\\!\\text{ at }\\dfrac{\\pi}{6}, \\quad \\left(\\dfrac{\\sqrt2}{2},\\dfrac{\\sqrt2}{2}\\right)\\!\\text{ at }\\dfrac{\\pi}{4}, \\quad \\left(\\dfrac12,\\dfrac{\\sqrt3}{2}\\right)\\!\\text{ at }\\dfrac{\\pi}{3}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Swapping which coordinate is cosine and which is sine — the point is always written (cos θ, sin θ), so the x-coordinate is cosine and the y-coordinate is sine, never the other way around.",
          },
        ],
        practiceProblems: [
          {
            problemId: "pc-u2-l2-p1",
            topicTag: "unitCircleAndRadians",
            promptText: "What is the y-coordinate of the point where angle π/4 meets the unit circle?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "sqrt(2)/2",
            acceptableAnswerVariants: ["√2/2"],
            stepByStepExplanation:
              "The y-coordinate of a unit circle point is sin θ. At π/4 (a 45-45-90 reference triangle), sin(π/4) = √2/2.",
            difficultyLevel: 1,
          },
          {
            problemId: "pc-u2-l2-p2",
            topicTag: "unitCircleAndRadians",
            promptText: "What is the x-coordinate of the point where angle π/3 meets the unit circle?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "1/2",
            stepByStepExplanation:
              "The x-coordinate is cos θ. At π/3 (a 30-60-90 reference triangle), cos(π/3) = 1/2.",
            difficultyLevel: 2,
          },
          {
            problemId: "pc-u2-l2-p3",
            topicTag: "unitCircleAndRadians",
            promptText: "The point on the unit circle at angle π/6 is (√3/2, 1/2). What is cos(π/6)?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "sqrt(3)/2",
            acceptableAnswerVariants: ["√3/2"],
            stepByStepExplanation: "Cosine is the x-coordinate of the unit circle point, which is √3/2.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Precalculus 2e — Unit Circle: Sine and Cosine Functions",
            resourceUrl: "https://openstax.org/books/precalculus-2e/pages/7-3-unit-circle-sine-and-cosine-functions",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: The unit circle definition of sine and cosine",
            resourceUrl: "https://www.khanacademy.org/math/trigonometry/unit-circle-trig-func",
            resourceType: "interactivePractice",
          },
          {
            resourceTitle: "Paul's Online Math Notes — Unit Circle (Algebra/Trig Review)",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/Alg/UnitCircle.aspx",
            resourceType: "referenceSheet",
          },
        ],
      },
      {
        lessonSlug: "evaluating-trig-functions-using-the-unit-circle",
        lessonTitle: "Evaluating Trig Functions Using the Unit Circle",
        estimatedMinutes: 25,
        topicTag: "unitCircleAndRadians",
        learningGoals: [
          "Find the reference angle for an angle in any quadrant",
          "Use the reference angle and the ASTC sign rule to evaluate sine, cosine, and tangent at any angle",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Reference angle plus sign rule",
            bodyText:
              "The reference angle is the acute angle between an angle's terminal side and the x-axis — it tells you the magnitude of the trig value, always matching one of the first-quadrant angles you already know. The quadrant the angle lands in then tells you the sign. This two-step process (find the reference angle, then fix the sign) lets you evaluate a trig function at any angle using only the handful of first-quadrant values you've memorized.",
          },
          {
            blockType: "keyFormula",
            headingText: "ASTC: All Students Take Calculus",
            bodyText:
              "This mnemonic tracks which functions are positive in each quadrant, going counterclockwise from quadrant I: quadrant I — All three (sin, cos, tan) are positive. Quadrant II — Sine only is positive. Quadrant III — Tangent only is positive. Quadrant IV — Cosine only is positive.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Evaluate sin(2π/3). 2π/3 is in quadrant II (between π/2 and π). Its reference angle is π − 2π/3 = π/3. sin(π/3) = √3/2, and sine is positive in quadrant II, so sin(2π/3) = √3/2.",
            mathExpression: "\\sin\\!\\left(\\dfrac{2\\pi}{3}\\right)=\\dfrac{\\sqrt3}{2}",
          },
          {
            blockType: "workedExample",
            headingText: "A second worked example, with a negative result",
            bodyText:
              "Evaluate cos(7π/6). 7π/6 is in quadrant III (between π and 3π/2). Its reference angle is 7π/6 − π = π/6. cos(π/6) = √3/2, but cosine is negative in quadrant III, so cos(7π/6) = −√3/2.",
            mathExpression: "\\cos\\!\\left(\\dfrac{7\\pi}{6}\\right)=-\\dfrac{\\sqrt3}{2}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Finding the correct reference angle and correct base value, then forgetting to apply the sign for the quadrant — or applying the wrong quadrant's sign. Always finish by asking 'is this function positive or negative here?' using ASTC before writing the final answer.",
          },
        ],
        practiceProblems: [
          {
            problemId: "pc-u2-l3-p1",
            topicTag: "unitCircleAndRadians",
            promptText: "Evaluate sin(5π/6).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "1/2",
            stepByStepExplanation:
              "5π/6 is in quadrant II. Reference angle = π − 5π/6 = π/6. sin(π/6) = 1/2, and sine is positive in quadrant II, so sin(5π/6) = 1/2.",
            difficultyLevel: 2,
          },
          {
            problemId: "pc-u2-l3-p2",
            topicTag: "unitCircleAndRadians",
            promptText: "Evaluate cos(4π/3).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "-1/2",
            stepByStepExplanation:
              "4π/3 is in quadrant III. Reference angle = 4π/3 − π = π/3. cos(π/3) = 1/2, and cosine is negative in quadrant III, so cos(4π/3) = -1/2.",
            difficultyLevel: 3,
          },
          {
            problemId: "pc-u2-l3-p3",
            topicTag: "unitCircleAndRadians",
            promptText: "Evaluate tan(5π/3).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "-sqrt(3)",
            acceptableAnswerVariants: ["-√3"],
            stepByStepExplanation:
              "5π/3 is in quadrant IV. Reference angle = 2π − 5π/3 = π/3. tan(π/3) = √3, and tangent is negative in quadrant IV, so tan(5π/3) = -√3.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Precalculus 2e — Unit Circle: Sine and Cosine Functions",
            resourceUrl: "https://openstax.org/books/precalculus-2e/pages/7-3-unit-circle-sine-and-cosine-functions",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Unit circle — reference angles",
            resourceUrl: "https://www.khanacademy.org/math/trigonometry/unit-circle-trig-func",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "coterminal-and-negative-angles",
        lessonTitle: "Coterminal and Negative Angles",
        estimatedMinutes: 15,
        topicTag: "unitCircleAndRadians",
        learningGoals: [
          "Find a coterminal angle for a given angle",
          "Evaluate trig functions at negative angles using the even/odd nature of sine and cosine",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Same terminal side, different name",
            bodyText:
              "Coterminal angles are angles that land on the exact same terminal side (and therefore the same unit circle point), even though the angle values look different. A negative angle simply means you rotated clockwise from the positive x-axis instead of counterclockwise.",
          },
          {
            blockType: "keyFormula",
            headingText: "Generating coterminal angles",
            bodyText:
              "Add or subtract any whole number of full rotations to get a coterminal angle: θ + 360°n in degrees, or θ + 2πn in radians, for any integer n.",
            mathExpression: "\\theta + 2\\pi n, \\quad n \\in \\mathbb{Z}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find a positive coterminal angle for -50°: -50° + 360° = 310°. Find a negative coterminal angle for 400°: 400° - 360° = 40°, then 40° - 360° = -320°.",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Adding or subtracting 180° instead of 360° when looking for a coterminal angle. 180° gets you to a related but different angle (its supplement territory), not the same terminal side — coterminal always means a full 360° (or 2π) rotation.",
          },
        ],
        practiceProblems: [
          {
            problemId: "pc-u2-l4-p1",
            topicTag: "unitCircleAndRadians",
            promptText: "Find a positive coterminal angle for -100°, between 0° and 360°.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "260",
            stepByStepExplanation: "-100° + 360° = 260°.",
            difficultyLevel: 1,
          },
          {
            problemId: "pc-u2-l4-p2",
            topicTag: "unitCircleAndRadians",
            promptText: "Find the coterminal angle of 11π/4 that lies between 0 and 2π.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "3pi/4",
            acceptableAnswerVariants: ["3π/4"],
            stepByStepExplanation: "11π/4 - 2π = 11π/4 - 8π/4 = 3π/4, which is between 0 and 2π.",
            difficultyLevel: 2,
          },
          {
            problemId: "pc-u2-l4-p3",
            topicTag: "unitCircleAndRadians",
            promptText: "Evaluate sin(-π/6).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "-1/2",
            stepByStepExplanation:
              "Sine is an odd function, meaning sin(-x) = -sin(x). So sin(-π/6) = -sin(π/6) = -1/2.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Precalculus 2e — Angles",
            resourceUrl: "https://openstax.org/books/precalculus-2e/pages/7-1-angles",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Trigonometry — unit circle",
            resourceUrl: "https://www.khanacademy.org/math/trigonometry/unit-circle-trig-func",
            resourceType: "interactivePractice",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "graphing-trig-functions",
    unitTitle: "Graphing Trigonometric Functions",
    unitDescription:
      "Amplitude, period, midline, and phase shift for sine and cosine, plus the graphs of tangent, cotangent, secant, and cosecant.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Graphing Trigonometric Functions",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "precalc-graphing-trig-functions-quiz-p1",
          topicTag: "graphingTrigFunctions",
          promptText: "What is the amplitude of y = 4cos(x)?",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "4",
          stepByStepExplanation: "The amplitude is |A|, and here A = 4, so the amplitude is 4.",
          difficultyLevel: 1,
        },
        {
          problemId: "precalc-graphing-trig-functions-quiz-p2",
          topicTag: "graphingTrigFunctions",
          promptText: "What is the period of y = cos(4x)?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "pi/2",
          acceptableAnswerVariants: ["π/2"],
          stepByStepExplanation: "Period = 2π/|B| = 2π/4 = π/2, since B = 4.",
          difficultyLevel: 2,
        },
        {
          problemId: "precalc-graphing-trig-functions-quiz-p3",
          topicTag: "graphingTrigFunctions",
          promptText: "What is the midline of y = 3sin(x) + 7?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "7",
          acceptableAnswerVariants: ["y=7", "y = 7"],
          stepByStepExplanation: "The midline is y = D, and here D = 7, so the graph oscillates around y = 7.",
          difficultyLevel: 1,
        },
        {
          problemId: "precalc-graphing-trig-functions-quiz-p4",
          topicTag: "graphingTrigFunctions",
          promptText: "Find the phase shift of y = sin(2x + π/2), after factoring 2 out of the argument.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "-pi/4",
          acceptableAnswerVariants: ["-π/4", "pi/4 to the left"],
          stepByStepExplanation:
            "2x + π/2 = 2(x + π/4) = 2(x - (-π/4)), so the phase shift is -π/4, meaning the graph shifts π/4 units to the left.",
          difficultyLevel: 3,
        },
        {
          problemId: "precalc-graphing-trig-functions-quiz-p5",
          topicTag: "graphingTrigFunctions",
          promptText: "What is the period of y = cot(x)?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "pi",
          acceptableAnswerVariants: ["π"],
          stepByStepExplanation: "Cotangent completes a full cycle every π radians, just like tangent.",
          difficultyLevel: 1,
        },
        {
          problemId: "precalc-graphing-trig-functions-quiz-p6",
          topicTag: "graphingTrigFunctions",
          promptText: "At which x-values in [0, 2π) does y = csc(x) have vertical asymptotes?",
          answerFormat: "multipleChoice",
          choices: [
            "x = 0 and x = π",
            "x = π/2 and x = 3π/2",
            "x = 0, π/2, π, and 3π/2",
            "x = π/4 and x = 3π/4",
          ],
          correctAnswer: "x = 0 and x = π",
          stepByStepExplanation:
            "csc x = 1/sin x has asymptotes wherever sin x = 0, which in [0, 2π) happens at x = 0 and x = π.",
          difficultyLevel: 2,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "graphing-sine-and-cosine",
        lessonTitle: "Graphing Sine and Cosine",
        estimatedMinutes: 25,
        topicTag: "graphingTrigFunctions",
        learningGoals: [
          "Identify the amplitude, period, and midline of a sine or cosine graph from its equation",
          "Sketch a sine or cosine graph using those three features",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Three numbers describe the whole shape",
            bodyText:
              "Every graph of y = A sin(Bx) + D or y = A cos(Bx) + D is the same wave shape stretched, compressed, and shifted vertically. The amplitude tells you how tall the wave is above and below its center line. The period tells you how long it takes to complete one full cycle before the pattern repeats. The midline is the horizontal line the wave oscillates around — it's the new 'zero' once you've shifted the graph up or down.",
          },
          {
            blockType: "keyFormula",
            headingText: "Reading A, B, and D",
            bodyText:
              "For y = A sin(Bx) + D (or cosine): amplitude = |A|, period = 2π/|B|, midline is the horizontal line y = D. A bigger B squeezes the graph horizontally (shorter period); a bigger |A| stretches it vertically (taller wave).",
            mathExpression:
              "\\text{amplitude}=|A|, \\quad \\text{period}=\\dfrac{2\\pi}{|B|}, \\quad \\text{midline: } y=D",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "For y = 3 sin(2x): amplitude = |3| = 3, so the graph oscillates between y = 3 and y = -3. Period = 2π/2 = π, so one full wave completes every π units instead of the usual 2π. Midline = y = 0 since there's no D term.",
            mathExpression: "\\text{amplitude}=3, \\quad \\text{period}=\\pi, \\quad \\text{midline: } y=0",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Reading the period straight off B, as if period = B or period = 2πB. The period formula divides 2π BY B — a larger B makes the period smaller (a faster, more compressed wave), which feels backwards until you've checked it against a graph a few times.",
          },
        ],
        practiceProblems: [
          {
            problemId: "pc-u3-l1-p1",
            topicTag: "graphingTrigFunctions",
            promptText: "What is the amplitude of y = 5 sin(3x)?",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "5",
            stepByStepExplanation: "The amplitude is |A|, and here A = 5, so the amplitude is 5.",
            difficultyLevel: 1,
          },
          {
            problemId: "pc-u3-l1-p2",
            topicTag: "graphingTrigFunctions",
            promptText: "What is the period of y = 5 sin(3x)?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "2pi/3",
            acceptableAnswerVariants: ["2π/3"],
            stepByStepExplanation: "Period = 2π/|B| = 2π/3, since B = 3.",
            difficultyLevel: 2,
          },
          {
            problemId: "pc-u3-l1-p3",
            topicTag: "graphingTrigFunctions",
            promptText: "What is the midline of y = 2cos(x) - 4?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "-4",
            acceptableAnswerVariants: ["y=-4", "y = -4"],
            stepByStepExplanation: "The midline is y = D, and here D = -4 (the graph oscillates around y = -4).",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Precalculus 2e — Graphs of the Sine and Cosine Functions",
            resourceUrl: "https://openstax.org/books/precalculus-2e/pages/7-4-graphs-of-the-sine-and-cosine-functions",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Trigonometric functions (graphing)",
            resourceUrl: "https://www.khanacademy.org/math/trigonometry/trig-function-graphs",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "phase-shift-and-vertical-shift",
        lessonTitle: "Phase Shift and Vertical Shift",
        estimatedMinutes: 20,
        topicTag: "graphingTrigFunctions",
        learningGoals: [
          "Identify the phase shift and vertical shift of a sine or cosine graph from its equation",
          "Factor B out of the argument before reading off the phase shift",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Two more shifts, one horizontal and one vertical",
            bodyText:
              "Starting from y = A sin(B(x - C)) + D, the vertical shift D moves the whole graph up or down (it's the same D from the midline). The phase shift C moves the whole graph left or right: a positive C shifts the graph to the right by C units, and a negative C shifts it left.",
          },
          {
            blockType: "keyFormula",
            headingText: "Reading the phase shift correctly",
            bodyText:
              "The phase shift only reads off cleanly once B is factored out of the parentheses: y = A sin(B(x - C)) + D has phase shift C. If you're handed y = A sin(Bx - k) + D instead, factor first: Bx - k = B(x - k/B), so the phase shift is k/B, not k.",
            mathExpression: "A\\sin(Bx-k)=A\\sin\\!\\Big(B\\big(x-\\tfrac{k}{B}\\big)\\Big)",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find the phase shift and period of y = sin(2x - π). Factor out the 2: 2x - π = 2(x - π/2). So the phase shift is π/2 (to the right), and the period is 2π/2 = π.",
            mathExpression: "\\sin(2x-\\pi)=\\sin\\!\\Big(2\\big(x-\\tfrac{\\pi}{2}\\big)\\Big)",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Reading the phase shift directly off the un-factored constant — looking at sin(2x - π) and guessing the shift is π instead of π/2. Always factor B out of the whole argument first; only then does the number sitting next to x tell you the true shift.",
          },
        ],
        practiceProblems: [
          {
            problemId: "pc-u3-l2-p1",
            topicTag: "graphingTrigFunctions",
            promptText: "What is the phase shift of y = cos(x - π/3)?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "pi/3",
            acceptableAnswerVariants: ["π/3"],
            stepByStepExplanation: "The argument is already in the form (x - C) with C = π/3, so the phase shift is π/3 to the right.",
            difficultyLevel: 1,
          },
          {
            problemId: "pc-u3-l2-p2",
            topicTag: "graphingTrigFunctions",
            promptText: "Find the phase shift of y = sin(3x - π), after factoring 3 out of the argument.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "pi/3",
            acceptableAnswerVariants: ["π/3"],
            stepByStepExplanation: "3x - π = 3(x - π/3), so the phase shift is π/3.",
            difficultyLevel: 3,
          },
          {
            problemId: "pc-u3-l2-p3",
            topicTag: "graphingTrigFunctions",
            promptText: "What is the vertical shift of y = -2sin(x) + 5?",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "5",
            stepByStepExplanation: "The vertical shift is D, and here D = 5, so the graph is shifted up 5 units.",
            difficultyLevel: 1,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Precalculus 2e — Graphs of the Sine and Cosine Functions",
            resourceUrl: "https://openstax.org/books/precalculus-2e/pages/7-4-graphs-of-the-sine-and-cosine-functions",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Trigonometric functions (graphing)",
            resourceUrl: "https://www.khanacademy.org/math/trigonometry/trig-function-graphs",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "graphing-tangent-cotangent-secant-and-cosecant",
        lessonTitle: "Graphing Tangent, Cotangent, Secant, and Cosecant",
        estimatedMinutes: 25,
        topicTag: "graphingTrigFunctions",
        learningGoals: [
          "Identify the period and vertical asymptotes of tangent and cotangent graphs",
          "Identify the vertical asymptotes of secant and cosecant graphs from the zeros of cosine and sine",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Asymptotes come from division by zero",
            bodyText:
              "Tangent is sine divided by cosine, so tangent has a vertical asymptote everywhere cosine is zero. Cotangent is cosine over sine, with asymptotes where sine is zero. Secant (1/cosine) and cosecant (1/sine) work the same way: wherever the function you're dividing by hits zero, the reciprocal function shoots off to infinity.",
          },
          {
            blockType: "keyFormula",
            headingText: "Periods to remember",
            bodyText:
              "Tangent and cotangent complete a full cycle every π radians (half the period of sine and cosine), because tangent repeats its pattern of values twice as often. Secant and cosecant keep the same period as cosine and sine: 2π.",
            mathExpression: "\\text{period of } \\tan x, \\cot x = \\pi, \\qquad \\text{period of } \\sec x, \\csc x = 2\\pi",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Graph y = tan(x). Vertical asymptotes occur where cos x = 0, i.e. at x = π/2 + kπ for any integer k. Between consecutive asymptotes, the graph passes through zero (where sin x = 0) and increases from -∞ to +∞ — it never flattens out the way sine and cosine do.",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Assuming tangent and cotangent repeat every 2π, just like sine and cosine. Their period is only π — plot tan(x) and tan(x + π) and you'll see they give identical values, which sine and cosine never do over a shift of only π.",
          },
        ],
        practiceProblems: [
          {
            problemId: "pc-u3-l3-p1",
            topicTag: "graphingTrigFunctions",
            promptText: "What is the period of y = tan(x)?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "pi",
            acceptableAnswerVariants: ["π"],
            stepByStepExplanation: "Tangent completes a full cycle every π radians.",
            difficultyLevel: 1,
          },
          {
            problemId: "pc-u3-l3-p2",
            topicTag: "graphingTrigFunctions",
            promptText: "At which x-values in [0, 2π) does y = sec(x) have vertical asymptotes?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "pi/2, 3pi/2",
            acceptableAnswerVariants: ["π/2, 3π/2"],
            stepByStepExplanation:
              "sec x = 1/cos x has asymptotes wherever cos x = 0, which in [0, 2π) happens at x = π/2 and x = 3π/2.",
            difficultyLevel: 2,
          },
          {
            problemId: "pc-u3-l3-p3",
            topicTag: "graphingTrigFunctions",
            promptText: "What is the period of y = cot(3x)?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "pi/3",
            acceptableAnswerVariants: ["π/3"],
            stepByStepExplanation: "The period of cot(Bx) is π/|B|, and here B = 3, so the period is π/3.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Precalculus 2e — Graphs of the Other Trigonometric Functions",
            resourceUrl:
              "https://openstax.org/books/precalculus-2e/pages/7-5-graphs-of-the-other-trigonometric-functions",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Trigonometric functions (graphing)",
            resourceUrl: "https://www.khanacademy.org/math/trigonometry/trig-function-graphs",
            resourceType: "interactivePractice",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "trig-identities",
    unitTitle: "Trigonometric Identities",
    unitDescription:
      "The Pythagorean, sum/difference, and double/half-angle identities, plus the skill of verifying an identity.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Trigonometric Identities",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "precalc-trig-identities-quiz-p1",
          topicTag: "trigonometricIdentities",
          promptText: "Simplify: 1 - cos²θ.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "sin^2(theta)",
          acceptableAnswerVariants: ["sin^2 theta", "sin²θ", "sin(theta)^2"],
          stepByStepExplanation: "Rearranging sin²θ + cos²θ = 1 gives 1 - cos²θ = sin²θ.",
          difficultyLevel: 1,
        },
        {
          problemId: "precalc-trig-identities-quiz-p2",
          topicTag: "trigonometricIdentities",
          promptText: "If sin θ = -3/5 and θ is in quadrant III, find cos θ.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "-4/5",
          stepByStepExplanation:
            "cos²θ = 1 - (-3/5)² = 1 - 9/25 = 16/25, so cos θ = ±4/5. Quadrant III is negative for cosine, so cos θ = -4/5.",
          difficultyLevel: 2,
        },
        {
          problemId: "precalc-trig-identities-quiz-p3",
          topicTag: "trigonometricIdentities",
          promptText: "Find the exact value of cos(105°) using 105° = 60° + 45°.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "(sqrt(2)-sqrt(6))/4",
          acceptableAnswerVariants: ["(√2-√6)/4", "-(sqrt(6)-sqrt(2))/4"],
          stepByStepExplanation:
            "cos(60°+45°) = cos60°cos45° - sin60°sin45° = (1/2)(√2/2) - (√3/2)(√2/2) = √2/4 - √6/4 = (√2-√6)/4.",
          difficultyLevel: 3,
        },
        {
          problemId: "precalc-trig-identities-quiz-p4",
          topicTag: "trigonometricIdentities",
          promptText: "If sin θ = 1/3 and θ is in quadrant I (so cos θ = 2√2/3), find sin(2θ).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "4sqrt(2)/9",
          acceptableAnswerVariants: ["4√2/9"],
          stepByStepExplanation: "sin(2θ) = 2 sinθ cosθ = 2(1/3)(2√2/3) = 4√2/9.",
          difficultyLevel: 3,
        },
        {
          problemId: "precalc-trig-identities-quiz-p5",
          topicTag: "trigonometricIdentities",
          promptText: "If cos θ = -3/5, find cos(2θ) using cos(2θ) = 2cos²θ - 1.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "-7/25",
          stepByStepExplanation: "cos(2θ) = 2(-3/5)² - 1 = 2(9/25) - 1 = 18/25 - 1 = -7/25.",
          difficultyLevel: 3,
        },
        {
          problemId: "precalc-trig-identities-quiz-p6",
          topicTag: "trigonometricIdentities",
          promptText: "Which expression is equivalent to sinθ · cotθ?",
          answerFormat: "multipleChoice",
          choices: ["sinθ", "cosθ", "tanθ", "1"],
          correctAnswer: "cosθ",
          stepByStepExplanation: "sinθ · cotθ = sinθ · (cosθ/sinθ) = cosθ, since the sinθ factors cancel.",
          difficultyLevel: 2,
        },
        {
          problemId: "precalc-trig-identities-quiz-p7",
          topicTag: "trigonometricIdentities",
          promptText: "Use a half-angle identity to find the exact value of sin(π/12), noting π/12 is half of π/6.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "sqrt(2-sqrt(3))/2",
          acceptableAnswerVariants: ["(sqrt(6)-sqrt(2))/4"],
          stepByStepExplanation:
            "sin(π/12) = √((1-cos(π/6))/2) = √((1-√3/2)/2) = √((2-√3)/4) = √(2-√3)/2. Since π/12 is in quadrant I, the positive root is used.",
          difficultyLevel: 4,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "pythagorean-identities",
        lessonTitle: "Pythagorean Identities",
        estimatedMinutes: 20,
        topicTag: "trigonometricIdentities",
        learningGoals: [
          "State the three Pythagorean identities from memory",
          "Use a Pythagorean identity to find a missing trig value, including its correct sign",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Straight from the unit circle",
            bodyText:
              "Every point on the unit circle satisfies x² + y² = 1 (that's just the equation of a circle of radius 1). Since that point is (cos θ, sin θ), substituting gives sin²θ + cos²θ = 1 — the first and most important Pythagorean identity. The other two come from dividing this one by cos²θ or sin²θ.",
          },
          {
            blockType: "keyFormula",
            headingText: "The three identities",
            bodyText:
              "sin²θ + cos²θ = 1. Dividing every term by cos²θ gives 1 + tan²θ = sec²θ. Dividing every term by sin²θ gives 1 + cot²θ = csc²θ.",
            mathExpression: "\\sin^2\\theta+\\cos^2\\theta=1, \\quad 1+\\tan^2\\theta=\\sec^2\\theta, \\quad 1+\\cot^2\\theta=\\csc^2\\theta",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Given sin θ = 3/5 with θ in quadrant II, find cos θ. From sin²θ + cos²θ = 1: cos²θ = 1 - 9/25 = 16/25, so cos θ = ±4/5. Since θ is in quadrant II, cosine is negative there, so cos θ = -4/5.",
            mathExpression: "\\cos\\theta = -\\dfrac{4}{5}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Taking the square root and stopping at the positive answer without checking the quadrant. A Pythagorean identity only tells you the magnitude — the quadrant (from the problem's context) is what tells you whether the final answer is positive or negative.",
          },
        ],
        practiceProblems: [
          {
            problemId: "pc-u4-l1-p1",
            topicTag: "trigonometricIdentities",
            promptText: "If sin θ = 5/13 and θ is in quadrant I, find cos θ.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "12/13",
            stepByStepExplanation:
              "cos²θ = 1 - (5/13)² = 1 - 25/169 = 144/169, so cos θ = ±12/13. Quadrant I is positive, so cos θ = 12/13.",
            difficultyLevel: 2,
          },
          {
            problemId: "pc-u4-l1-p2",
            topicTag: "trigonometricIdentities",
            promptText: "Simplify: 1 - sin²θ.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "cos^2(theta)",
            acceptableAnswerVariants: ["cos^2 theta", "cos²θ", "cos(theta)^2"],
            stepByStepExplanation: "Rearranging sin²θ + cos²θ = 1 gives 1 - sin²θ = cos²θ.",
            difficultyLevel: 1,
          },
          {
            problemId: "pc-u4-l1-p3",
            topicTag: "trigonometricIdentities",
            promptText: "If tan θ = 4/3, find sec²θ.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "25/9",
            stepByStepExplanation: "sec²θ = 1 + tan²θ = 1 + 16/9 = 25/9.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Precalculus 2e — Solving Trigonometric Equations with Identities",
            resourceUrl:
              "https://openstax.org/books/precalculus-2e/pages/8-1-solving-trigonometric-equations-with-identities",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Paul's Online Math Notes — Trig Formulas",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/Alg/TrigFormulas.aspx",
            resourceType: "referenceSheet",
          },
        ],
      },
      {
        lessonSlug: "sum-and-difference-identities",
        lessonTitle: "Sum and Difference Identities",
        estimatedMinutes: 25,
        topicTag: "trigonometricIdentities",
        learningGoals: [
          "State the sum and difference identities for sine and cosine",
          "Use a sum or difference identity to find an exact trig value for an angle that isn't a standard unit-circle angle",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Breaking an unfamiliar angle into two familiar ones",
            bodyText:
              "Angles like 75° or 15° aren't on the standard unit circle, but they can be written as a sum or difference of angles that are (75° = 45° + 30°, 15° = 45° - 30°). The sum and difference identities let you compute the exact trig value of the combined angle from the two familiar ones.",
          },
          {
            blockType: "keyFormula",
            headingText: "Sine and cosine sum/difference identities",
            bodyText:
              "sin(A + B) = sin A cos B + cos A sin B. sin(A - B) = sin A cos B - cos A sin B. cos(A + B) = cos A cos B - sin A sin B. cos(A - B) = cos A cos B + sin A sin B. Notice cosine's signs are the opposite pattern of sine's.",
            mathExpression:
              "\\sin(A\\pm B)=\\sin A\\cos B\\pm\\cos A\\sin B, \\qquad \\cos(A\\pm B)=\\cos A\\cos B\\mp\\sin A\\sin B",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find cos(75°) using 75° = 45° + 30°: cos(45°+30°) = cos45°cos30° - sin45°sin30° = (√2/2)(√3/2) - (√2/2)(1/2) = √6/4 - √2/4 = (√6 - √2)/4.",
            mathExpression: "\\cos(75^\\circ)=\\dfrac{\\sqrt6-\\sqrt2}{4}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Using the same sign pattern for cosine that you'd use for sine — writing cos(A+B) = cosAcosB + sinAsinB. Cosine's sum identity subtracts, and its difference identity adds; it's the reverse of sine's pattern, and mixing them up is the single most common error with this identity.",
          },
        ],
        practiceProblems: [
          {
            problemId: "pc-u4-l2-p1",
            topicTag: "trigonometricIdentities",
            promptText: "Find the exact value of sin(75°) using 75° = 45° + 30°.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(sqrt(6)+sqrt(2))/4",
            acceptableAnswerVariants: ["(√6+√2)/4"],
            stepByStepExplanation:
              "sin(45°+30°) = sin45°cos30° + cos45°sin30° = (√2/2)(√3/2) + (√2/2)(1/2) = (√6+√2)/4.",
            difficultyLevel: 3,
          },
          {
            problemId: "pc-u4-l2-p2",
            topicTag: "trigonometricIdentities",
            promptText: "Find the exact value of cos(15°) using 15° = 45° - 30°.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(sqrt(6)+sqrt(2))/4",
            acceptableAnswerVariants: ["(√6+√2)/4"],
            stepByStepExplanation:
              "cos(45°-30°) = cos45°cos30° + sin45°sin30° = (√2/2)(√3/2) + (√2/2)(1/2) = (√6+√2)/4.",
            difficultyLevel: 3,
          },
          {
            problemId: "pc-u4-l2-p3",
            topicTag: "trigonometricIdentities",
            promptText: "Find the exact value of sin(15°) using 15° = 60° - 45°.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(sqrt(6)-sqrt(2))/4",
            acceptableAnswerVariants: ["(√6-√2)/4"],
            stepByStepExplanation:
              "sin(60°-45°) = sin60°cos45° - cos60°sin45° = (√3/2)(√2/2) - (1/2)(√2/2) = (√6-√2)/4.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Precalculus 2e — Sum and Difference Identities",
            resourceUrl: "https://openstax.org/books/precalculus-2e/pages/8-2-sum-and-difference-identities",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Paul's Online Math Notes — Trig Formulas",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/Alg/TrigFormulas.aspx",
            resourceType: "referenceSheet",
          },
        ],
      },
      {
        lessonSlug: "double-angle-and-half-angle-identities",
        lessonTitle: "Double-Angle and Half-Angle Identities",
        estimatedMinutes: 25,
        topicTag: "trigonometricIdentities",
        learningGoals: [
          "State the double-angle identities for sine and cosine (in all three forms for cosine)",
          "Use a double-angle or half-angle identity to find an exact trig value",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Setting B equal to A",
            bodyText:
              "The double-angle identities are just the sum identities with B = A. Setting A = B in sin(A+B) = sinAcosB + cosAsinB gives sin(2A) = 2 sinAcosA. Cosine's double-angle identity comes in three equivalent forms, because cos²A can be swapped for 1 - sin²A using the Pythagorean identity, and vice versa.",
          },
          {
            blockType: "keyFormula",
            headingText: "Double-angle identities",
            bodyText:
              "sin(2θ) = 2 sinθ cosθ. cos(2θ) = cos²θ - sin²θ = 2cos²θ - 1 = 1 - 2sin²θ. Half-angle: sin(θ/2) = ±√((1-cosθ)/2), cos(θ/2) = ±√((1+cosθ)/2), with the sign chosen based on which quadrant θ/2 falls in.",
            mathExpression:
              "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta, \\qquad \\cos 2\\theta = 2\\cos^2\\theta - 1 = 1-2\\sin^2\\theta",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Given sin θ = 3/5 with θ in quadrant I (so cos θ = 4/5), find sin(2θ) and cos(2θ). sin(2θ) = 2(3/5)(4/5) = 24/25. cos(2θ) = 1 - 2(3/5)² = 1 - 18/25 = 7/25.",
            mathExpression: "\\sin 2\\theta=\\dfrac{24}{25}, \\qquad \\cos 2\\theta=\\dfrac{7}{25}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Writing sin(2θ) = 2 sinθ, dropping the cosθ factor entirely — it's an easy slip because 2θ 'looks like' you should just double sinθ. Sine does not distribute over multiplication like that; the identity always needs both the sine AND the cosine factor.",
          },
        ],
        practiceProblems: [
          {
            problemId: "pc-u4-l3-p1",
            topicTag: "trigonometricIdentities",
            promptText: "If cos θ = 1/2, find cos(2θ) using cos(2θ) = 2cos²θ - 1.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "-1/2",
            stepByStepExplanation: "cos(2θ) = 2(1/2)² - 1 = 2(1/4) - 1 = 1/2 - 1 = -1/2.",
            difficultyLevel: 2,
          },
          {
            problemId: "pc-u4-l3-p2",
            topicTag: "trigonometricIdentities",
            promptText: "If sin θ = 3/5 and θ is in quadrant I (so cos θ = 4/5), find sin(2θ).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "24/25",
            stepByStepExplanation: "sin(2θ) = 2 sinθ cosθ = 2(3/5)(4/5) = 24/25.",
            difficultyLevel: 3,
          },
          {
            problemId: "pc-u4-l3-p3",
            topicTag: "trigonometricIdentities",
            promptText: "Use a half-angle identity to find the exact value of cos(π/8), noting π/8 is half of π/4.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "sqrt(2+sqrt(2))/2",
            stepByStepExplanation:
              "cos(π/8) = √((1+cos(π/4))/2) = √((1+√2/2)/2) = √((2+√2)/4) = √(2+√2)/2. Since π/8 is in quadrant I, the positive root is used.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Precalculus 2e — Double-Angle, Half-Angle, and Reduction Formulas",
            resourceUrl:
              "https://openstax.org/books/precalculus-2e/pages/8-3-double-angle-half-angle-and-reduction-formulas",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Paul's Online Math Notes — Trig Formulas",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/Alg/TrigFormulas.aspx",
            resourceType: "referenceSheet",
          },
        ],
      },
      {
        lessonSlug: "verifying-identities",
        lessonTitle: "Verifying Identities",
        estimatedMinutes: 25,
        topicTag: "trigonometricIdentities",
        learningGoals: [
          "Rewrite one side of a trig identity in terms of sine and cosine to simplify it",
          "Transform one side of an equation step by step until it matches the other side, without treating the identity as a solvable equation",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "You're proving, not solving",
            bodyText:
              "Verifying an identity means showing two expressions are equal for every value of θ where both are defined — it's a proof, not an equation to solve for θ. The standard strategy: pick the more complicated-looking side, rewrite everything in terms of sine and cosine if you get stuck, apply known identities, and simplify until it matches the other side exactly.",
          },
          {
            blockType: "keyFormula",
            headingText: "The toolkit",
            bodyText:
              "tanθ = sinθ/cosθ, cotθ = cosθ/sinθ, secθ = 1/cosθ, cscθ = 1/sinθ, plus the three Pythagorean identities. Nearly every identity-verification problem is solved by substituting one of these and simplifying algebraically.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Verify: (1 - cos²θ)/sinθ = sinθ. Start with the left side. By the Pythagorean identity, 1 - cos²θ = sin²θ. Substituting: sin²θ/sinθ = sinθ, which matches the right side.",
            mathExpression: "\\dfrac{1-\\cos^2\\theta}{\\sin\\theta}=\\dfrac{\\sin^2\\theta}{\\sin\\theta}=\\sin\\theta",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Cross-multiplying or adding the same quantity to both sides, as if the identity were an equation to solve for θ. That approach can 'prove' false identities are true. Instead, work on one side (or both sides completely independently) using only valid simplification and identity substitutions until the two sides visibly match.",
          },
        ],
        practiceProblems: [
          {
            problemId: "pc-u4-l4-p1",
            topicTag: "trigonometricIdentities",
            promptText: "Simplify sinθ · cotθ using cotθ = cosθ/sinθ.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "cos(theta)",
            acceptableAnswerVariants: ["cosθ", "cos theta"],
            stepByStepExplanation: "sinθ · (cosθ/sinθ) = cosθ, since the sinθ factors cancel.",
            difficultyLevel: 2,
          },
          {
            problemId: "pc-u4-l4-p2",
            topicTag: "trigonometricIdentities",
            promptText: "Simplify (1 + tan²θ) · cos²θ.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "1",
            stepByStepExplanation:
              "1 + tan²θ = sec²θ by a Pythagorean identity. sec²θ · cos²θ = (1/cos²θ) · cos²θ = 1.",
            difficultyLevel: 3,
          },
          {
            problemId: "pc-u4-l4-p3",
            topicTag: "trigonometricIdentities",
            promptText: "Simplify cscθ · tanθ, writing the answer as a single trig function.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "sec(theta)",
            acceptableAnswerVariants: ["secθ", "sec theta"],
            stepByStepExplanation:
              "cscθ · tanθ = (1/sinθ) · (sinθ/cosθ) = 1/cosθ = secθ.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Precalculus 2e — Solving Trigonometric Equations with Identities",
            resourceUrl:
              "https://openstax.org/books/precalculus-2e/pages/8-1-solving-trigonometric-equations-with-identities",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Paul's Online Math Notes — Trig Formulas",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/Alg/TrigFormulas.aspx",
            resourceType: "referenceSheet",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "inverse-trig-functions",
    unitTitle: "Inverse Trigonometric Functions",
    unitDescription:
      "Arcsin, arccos, and arctan, why their domains are restricted, and how to simplify compositions of trig and inverse trig functions.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Inverse Trigonometric Functions",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "precalc-inverse-trig-functions-quiz-p1",
          topicTag: "inverseTrigFunctions",
          promptText: "Evaluate arcsin(√2/2).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "pi/4",
          acceptableAnswerVariants: ["π/4"],
          stepByStepExplanation: "sin(π/4) = √2/2, and π/4 is in arcsin's range [-π/2, π/2], so arcsin(√2/2) = π/4.",
          difficultyLevel: 1,
        },
        {
          problemId: "precalc-inverse-trig-functions-quiz-p2",
          topicTag: "inverseTrigFunctions",
          promptText: "What is the range of the arctan function?",
          answerFormat: "multipleChoice",
          choices: ["[-π/2, π/2]", "(-π/2, π/2)", "[0, π]", "All real numbers"],
          correctAnswer: "(-π/2, π/2)",
          stepByStepExplanation: "arctan is restricted to the open interval (-π/2, π/2), where tangent is one-to-one.",
          difficultyLevel: 1,
        },
        {
          problemId: "precalc-inverse-trig-functions-quiz-p3",
          topicTag: "inverseTrigFunctions",
          promptText: "Evaluate arccos(-1/2).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "2pi/3",
          acceptableAnswerVariants: ["2π/3"],
          stepByStepExplanation: "arccos(1/2) = π/3, so arccos(-1/2) = π - π/3 = 2π/3.",
          difficultyLevel: 2,
        },
        {
          problemId: "precalc-inverse-trig-functions-quiz-p4",
          topicTag: "inverseTrigFunctions",
          promptText: "Evaluate arctan(-√3).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "-pi/3",
          acceptableAnswerVariants: ["-π/3"],
          stepByStepExplanation: "arctan(√3) = π/3, so arctan(-√3) = -arctan(√3) = -π/3.",
          difficultyLevel: 2,
        },
        {
          problemId: "precalc-inverse-trig-functions-quiz-p5",
          topicTag: "inverseTrigFunctions",
          promptText: "Find sin(arccos(5/13)).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "12/13",
          stepByStepExplanation:
            "Let θ = arccos(5/13), so cosθ = 5/13 with hypotenuse 13 and adjacent 5. The opposite side is √(169-25) = 12, and since θ is in [0, π], sinθ ≥ 0, so sin(arccos(5/13)) = 12/13.",
          difficultyLevel: 3,
        },
        {
          problemId: "precalc-inverse-trig-functions-quiz-p6",
          topicTag: "inverseTrigFunctions",
          promptText: "Simplify cos(arcsin(x)) for x in [0, 1].",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "sqrt(1-x^2)",
          stepByStepExplanation:
            "Let θ = arcsin(x), so sinθ = x with hypotenuse 1 and opposite x. The adjacent side is √(1-x²), and since θ is in [-π/2, π/2], cosθ ≥ 0, giving cos(arcsin(x)) = √(1-x²).",
          difficultyLevel: 4,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "introduction-to-inverse-trig-functions",
        lessonTitle: "Introduction to Inverse Trig Functions",
        estimatedMinutes: 25,
        topicTag: "inverseTrigFunctions",
        learningGoals: [
          "Explain why sine, cosine, and tangent need a restricted domain before they can have an inverse",
          "State the domain and range of arcsin, arccos, and arctan",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Why the domain has to shrink",
            bodyText:
              "A function only has an inverse if it's one-to-one (each output comes from exactly one input). Sine definitely isn't one-to-one over all real numbers — infinitely many angles all have sin θ = 1/2, for instance. To define an inverse, mathematicians agreed to restrict each trig function to one interval where it IS one-to-one, and the inverse function only ever returns angles from that interval.",
          },
          {
            blockType: "keyFormula",
            headingText: "Domain and range of the three inverse functions",
            bodyText:
              "arcsin(x): domain [-1, 1], range [-π/2, π/2]. arccos(x): domain [-1, 1], range [0, π]. arctan(x): domain all real numbers, range (-π/2, π/2).",
            mathExpression:
              "\\arcsin x \\in \\left[-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}\\right], \\quad \\arccos x \\in [0,\\pi], \\quad \\arctan x \\in \\left(-\\tfrac{\\pi}{2},\\tfrac{\\pi}{2}\\right)",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find arcsin(1/2). You need the angle in [-π/2, π/2] whose sine is 1/2. That angle is π/6, since sin(π/6) = 1/2 and π/6 falls inside the required range.",
            mathExpression: "\\arcsin\\!\\left(\\tfrac12\\right)=\\dfrac{\\pi}{6}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Giving an answer that's outside the inverse function's range — for instance, saying arcsin(1/2) = 5π/6 because sin(5π/6) also equals 1/2. That's true, but 5π/6 isn't in arcsin's range of [-π/2, π/2], so it's not the value arcsin returns. Every inverse trig function has exactly one correct output, and it must come from its restricted range.",
          },
        ],
        practiceProblems: [
          {
            problemId: "pc-u5-l1-p1",
            topicTag: "inverseTrigFunctions",
            promptText: "Evaluate arccos(1/2).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "pi/3",
            acceptableAnswerVariants: ["π/3"],
            stepByStepExplanation: "cos(π/3) = 1/2, and π/3 is in arccos's range [0, π], so arccos(1/2) = π/3.",
            difficultyLevel: 1,
          },
          {
            problemId: "pc-u5-l1-p2",
            topicTag: "inverseTrigFunctions",
            promptText: "Evaluate arctan(1).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "pi/4",
            acceptableAnswerVariants: ["π/4"],
            stepByStepExplanation: "tan(π/4) = 1, and π/4 is in arctan's range (-π/2, π/2), so arctan(1) = π/4.",
            difficultyLevel: 1,
          },
          {
            problemId: "pc-u5-l1-p3",
            topicTag: "inverseTrigFunctions",
            promptText: "What is the range of the arccos function?",
            answerFormat: "multipleChoice",
            choices: ["[-π/2, π/2]", "[0, π]", "(-π/2, π/2)", "[0, 2π]"],
            correctAnswer: "[0, π]",
            stepByStepExplanation:
              "arccos is restricted to the interval [0, π], which is where cosine is one-to-one.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Precalculus 2e — Inverse Trigonometric Functions",
            resourceUrl: "https://openstax.org/books/precalculus-2e/pages/7-6-inverse-trigonometric-functions",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Inverse trigonometric functions",
            resourceUrl: "https://www.khanacademy.org/math/trigonometry/inverse-trig-functions",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "evaluating-inverse-trig-expressions",
        lessonTitle: "Evaluating Inverse Trig Expressions",
        estimatedMinutes: 20,
        topicTag: "inverseTrigFunctions",
        learningGoals: [
          "Evaluate inverse trig expressions with negative inputs",
          "Use the odd-function shortcut for arcsin and arctan correctly, without misapplying it to arccos",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Negative inputs still land in range",
            bodyText:
              "Because arcsin's and arctan's ranges are symmetric around 0 (like [-π/2, π/2]), a negative input to either one gives a negative angle output. arccos's range, [0, π], is NOT symmetric around 0, so negative inputs to arccos behave differently — they land in the second half of that range, between π/2 and π.",
          },
          {
            blockType: "keyFormula",
            headingText: "Two useful shortcuts",
            bodyText:
              "arcsin(-x) = -arcsin(x), and arctan(-x) = -arctan(x), because sine and tangent are odd functions. For arccos, use arccos(-x) = π - arccos(x) instead.",
            mathExpression: "\\arcsin(-x)=-\\arcsin(x), \\qquad \\arccos(-x)=\\pi-\\arccos(x)",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find arccos(-√3/2). First, arccos(√3/2) = π/6 (since cos(π/6) = √3/2). Then arccos(-√3/2) = π - π/6 = 5π/6. Check: cos(5π/6) = -√3/2. ✓",
            mathExpression: "\\arccos\\!\\left(-\\tfrac{\\sqrt3}{2}\\right)=\\dfrac{5\\pi}{6}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Applying the odd-function shortcut to arccos, writing arccos(-x) = -arccos(x). arccos is not an odd function (its range doesn't even include negative angles), so this shortcut only works for arcsin and arctan.",
          },
        ],
        practiceProblems: [
          {
            problemId: "pc-u5-l2-p1",
            topicTag: "inverseTrigFunctions",
            promptText: "Evaluate arcsin(-1/2).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "-pi/6",
            acceptableAnswerVariants: ["-π/6"],
            stepByStepExplanation: "arcsin(-1/2) = -arcsin(1/2) = -π/6.",
            difficultyLevel: 2,
          },
          {
            problemId: "pc-u5-l2-p2",
            topicTag: "inverseTrigFunctions",
            promptText: "Evaluate arccos(-√3/2).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "5pi/6",
            acceptableAnswerVariants: ["5π/6"],
            stepByStepExplanation: "arccos(√3/2) = π/6, so arccos(-√3/2) = π - π/6 = 5π/6.",
            difficultyLevel: 3,
          },
          {
            problemId: "pc-u5-l2-p3",
            topicTag: "inverseTrigFunctions",
            promptText: "Evaluate arctan(-1).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "-pi/4",
            acceptableAnswerVariants: ["-π/4"],
            stepByStepExplanation: "arctan(-1) = -arctan(1) = -π/4.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Precalculus 2e — Inverse Trigonometric Functions",
            resourceUrl: "https://openstax.org/books/precalculus-2e/pages/7-6-inverse-trigonometric-functions",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Inverse trigonometric functions",
            resourceUrl: "https://www.khanacademy.org/math/trigonometry/inverse-trig-functions",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "compositions-of-trig-and-inverse-trig-functions",
        lessonTitle: "Compositions of Trig and Inverse Trig Functions",
        estimatedMinutes: 25,
        topicTag: "inverseTrigFunctions",
        learningGoals: [
          "Simplify an expression like sin(arccos(x)) using a reference right triangle",
          "Determine the correct sign of the simplified result from the inverse function's range",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Draw the triangle the inverse function is describing",
            bodyText:
              "An expression like sin(arccos(x)) is easiest to simplify by drawing a right triangle: let θ = arccos(x), so cos θ = x = adjacent/hypotenuse. Label the hypotenuse 1 and the adjacent side x, then use the Pythagorean theorem to find the missing side. From there, any trig function of θ can be read straight off the triangle.",
          },
          {
            blockType: "keyFormula",
            headingText: "A reusable result",
            bodyText:
              "sin(arccos(x)) = √(1 - x²). This works because arccos's range [0, π] keeps sine non-negative there, so no absolute value or sign ambiguity is needed. Similarly, cos(arcsin(x)) = √(1 - x²), because arcsin's range keeps cosine non-negative.",
            mathExpression: "\\sin(\\arccos x)=\\sqrt{1-x^2} = \\cos(\\arcsin x)",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find sin(arccos(3/5)). Let θ = arccos(3/5), so cosθ = 3/5 = adjacent/hypotenuse. With hypotenuse 5 and adjacent 3, the opposite side is √(25-9) = 4. Since θ is in [0, π], sinθ ≥ 0, so sin(arccos(3/5)) = 4/5.",
            mathExpression: "\\sin(\\arccos(3/5))=\\dfrac{4}{5}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Forgetting to check whether the result should be positive or negative based on the inverse function's range. It's easy to just take the positive square root out of habit — but always confirm the sign makes sense for the range the inner inverse function is restricted to.",
          },
        ],
        practiceProblems: [
          {
            problemId: "pc-u5-l3-p1",
            topicTag: "inverseTrigFunctions",
            promptText: "Find cos(arcsin(3/5)).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "4/5",
            stepByStepExplanation:
              "Let θ = arcsin(3/5), so sinθ = 3/5. The adjacent side is √(25-9) = 4, and since arcsin's range keeps cosine non-negative, cos(arcsin(3/5)) = 4/5.",
            difficultyLevel: 3,
          },
          {
            problemId: "pc-u5-l3-p2",
            topicTag: "inverseTrigFunctions",
            promptText: "Find tan(arcsin(1/2)).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "sqrt(3)/3",
            acceptableAnswerVariants: ["1/sqrt(3)", "√3/3"],
            stepByStepExplanation:
              "arcsin(1/2) = π/6, and tan(π/6) = 1/√3 = √3/3.",
            difficultyLevel: 3,
          },
          {
            problemId: "pc-u5-l3-p3",
            topicTag: "inverseTrigFunctions",
            promptText: "Simplify sin(arccos(x)) for x in [0, 1].",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "sqrt(1-x^2)",
            stepByStepExplanation:
              "Let θ = arccos(x), so cosθ = x with hypotenuse 1 and adjacent x. The opposite side is √(1-x²), and since θ is in [0, π], sinθ ≥ 0, giving sin(arccos(x)) = √(1-x²).",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Precalculus 2e — Inverse Trigonometric Functions",
            resourceUrl: "https://openstax.org/books/precalculus-2e/pages/7-6-inverse-trigonometric-functions",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Inverse trigonometric functions",
            resourceUrl: "https://www.khanacademy.org/math/trigonometry/inverse-trig-functions",
            resourceType: "interactivePractice",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "solving-trig-equations",
    unitTitle: "Solving Trigonometric Equations",
    unitDescription:
      "Solving trig equations over a restricted domain, simplifying with identities first, and writing general solutions using periodicity.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Solving Trigonometric Equations",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "precalc-solving-trig-equations-quiz-p1",
          topicTag: "solvingTrigEquations",
          promptText: "Solve sin x = √2/2 for x in [0, 2π). List both solutions, smallest first, separated by a comma.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "pi/4, 3pi/4",
          acceptableAnswerVariants: ["π/4, 3π/4"],
          stepByStepExplanation:
            "Reference angle is π/4. Sine is positive in quadrants I and II: x = π/4 and x = π - π/4 = 3π/4.",
          difficultyLevel: 2,
        },
        {
          problemId: "precalc-solving-trig-equations-quiz-p2",
          topicTag: "solvingTrigEquations",
          promptText: "Solve 2cos x - √3 = 0 for x in [0, 2π). List both solutions, smallest first, separated by a comma.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "pi/6, 11pi/6",
          acceptableAnswerVariants: ["π/6, 11π/6"],
          stepByStepExplanation:
            "cos x = √3/2. Reference angle π/6. Cosine is positive in quadrants I and IV: x = π/6 and x = 2π - π/6 = 11π/6.",
          difficultyLevel: 2,
        },
        {
          problemId: "precalc-solving-trig-equations-quiz-p3",
          topicTag: "solvingTrigEquations",
          promptText:
            "Solve 2sin²x - 1 = 0 for x in [0, 2π). List all four solutions, smallest first, separated by commas.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "pi/4, 3pi/4, 5pi/4, 7pi/4",
          acceptableAnswerVariants: ["π/4, 3π/4, 5π/4, 7π/4"],
          stepByStepExplanation:
            "sin²x = 1/2, so sinx = ±√2/2. sinx = √2/2 gives x = π/4, 3π/4. sinx = -√2/2 gives x = 5π/4, 7π/4.",
          difficultyLevel: 3,
        },
        {
          problemId: "precalc-solving-trig-equations-quiz-p4",
          topicTag: "solvingTrigEquations",
          promptText:
            "Solve cos²x + cosx = 0 for x in [0, 2π). List all solutions, smallest first, separated by commas.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "pi/2, pi, 3pi/2",
          acceptableAnswerVariants: ["π/2, π, 3π/2"],
          stepByStepExplanation:
            "cos²x + cosx = 0 factors as cosx(cosx + 1) = 0. cosx = 0 gives x = π/2, 3π/2. cosx = -1 gives x = π. All together: π/2, π, 3π/2.",
          difficultyLevel: 3,
        },
        {
          problemId: "precalc-solving-trig-equations-quiz-p5",
          topicTag: "solvingTrigEquations",
          promptText: "Write the general solution for sinx = 0, for all real x.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "n*pi",
          acceptableAnswerVariants: ["npi", "x=n*pi", "nπ"],
          stepByStepExplanation:
            "The particular solutions in [0, 2π) are 0 and π. Since these two solutions are exactly π apart, together they can be written as one family: x = nπ for any integer n.",
          difficultyLevel: 2,
        },
        {
          problemId: "precalc-solving-trig-equations-quiz-p6",
          topicTag: "solvingTrigEquations",
          promptText: "How many solutions does cosx = -0.3 have in the interval [0, 8π)?",
          answerFormat: "multipleChoice",
          choices: ["2", "4", "8", "16"],
          correctAnswer: "8",
          stepByStepExplanation:
            "Each 2π-wide period contains exactly 2 solutions to cosx = -0.3. The interval [0, 8π) contains 8π/2π = 4 full periods, so there are 4 × 2 = 8 solutions.",
          difficultyLevel: 4,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "solving-basic-trig-equations",
        lessonTitle: "Solving Basic Trig Equations",
        estimatedMinutes: 25,
        topicTag: "solvingTrigEquations",
        learningGoals: [
          "Solve a basic trig equation for all solutions in [0, 2π)",
          "Find both quadrant solutions using a reference angle and the correct sign for each function",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Reference angle, then both matching quadrants",
            bodyText:
              "Solving something like sin x = 1/2 means finding every angle in the given domain whose sine is 1/2. Because sine (and cosine) is positive in two different quadrants, there are usually two solutions per cycle — find the reference angle from the known value, then place it in each quadrant where that function has the required sign.",
          },
          {
            blockType: "keyFormula",
            headingText: "The two-solution pattern",
            bodyText:
              "Over [0, 2π), an equation like sin x = k (for 0 < |k| < 1) or cos x = k typically has exactly two solutions, one in each of the two quadrants where that function has the sign of k. Tangent equations typically have exactly two solutions as well, but they sit exactly π apart.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Solve 2 sin x - 1 = 0 for x in [0, 2π). Isolate: sin x = 1/2. Reference angle: π/6. Sine is positive in quadrants I and II, giving x = π/6 and x = π - π/6 = 5π/6.",
            mathExpression: "x=\\dfrac{\\pi}{6}, \\ \\dfrac{5\\pi}{6}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Finding one correct solution and stopping there. A calculator's inverse trig button only returns one angle, but the equation usually has a second solution in a different quadrant — always check ASTC to see which second quadrant also has the right sign, and don't submit an answer until you've accounted for it.",
          },
        ],
        practiceProblems: [
          {
            problemId: "pc-u6-l1-p1",
            topicTag: "solvingTrigEquations",
            promptText: "Solve cos x = -1/2 for x in [0, 2π). List both solutions, smallest first, separated by a comma.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "2pi/3, 4pi/3",
            acceptableAnswerVariants: ["2π/3, 4π/3"],
            stepByStepExplanation:
              "Reference angle is π/3. Cosine is negative in quadrants II and III: x = π - π/3 = 2π/3, and x = π + π/3 = 4π/3.",
            difficultyLevel: 2,
          },
          {
            problemId: "pc-u6-l1-p2",
            topicTag: "solvingTrigEquations",
            promptText: "Solve 2cos x + √2 = 0 for x in [0, 2π). List both solutions, smallest first, separated by a comma.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "3pi/4, 5pi/4",
            acceptableAnswerVariants: ["3π/4, 5π/4"],
            stepByStepExplanation:
              "cos x = -√2/2. Reference angle π/4. Cosine is negative in quadrants II and III: x = π - π/4 = 3π/4, and x = π + π/4 = 5π/4.",
            difficultyLevel: 3,
          },
          {
            problemId: "pc-u6-l1-p3",
            topicTag: "solvingTrigEquations",
            promptText: "Solve tan x = 1 for x in [0, 2π). List both solutions, smallest first, separated by a comma.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "pi/4, 5pi/4",
            acceptableAnswerVariants: ["π/4, 5π/4"],
            stepByStepExplanation:
              "Reference angle π/4. Tangent is positive in quadrants I and III: x = π/4 and x = π + π/4 = 5π/4.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Precalculus 2e — Solving Trigonometric Equations",
            resourceUrl: "https://openstax.org/books/precalculus-2e/pages/8-5-solving-trigonometric-equations",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Trigonometric equations and identities",
            resourceUrl: "https://www.khanacademy.org/math/trigonometry/trig-equations-and-identities",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "solving-trig-equations-using-identities-first",
        lessonTitle: "Solving Trig Equations Using Identities First",
        estimatedMinutes: 25,
        topicTag: "solvingTrigEquations",
        learningGoals: [
          "Rewrite a trig equation with a squared term as a quadratic in sinx or cosx",
          "Solve the resulting quadratic by factoring and then solve each resulting basic trig equation",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "It's a quadratic in disguise",
            bodyText:
              "Equations like 2sin²x - sinx - 1 = 0 look intimidating, but substituting u = sinx turns them into an ordinary quadratic, 2u² - u - 1 = 0, that factors and solves exactly like Algebra 2's quadratic equations. Once you have the u-values, translate each back into a basic trig equation and solve that.",
          },
          {
            blockType: "keyFormula",
            headingText: "The substitution move",
            bodyText:
              "Let u = sinx (or cosx). Solve the resulting polynomial equation in u using factoring or the quadratic formula. Then, for each valid u-value, solve sinx = u (or cosx = u) using the reference-angle method.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Solve 2sin²x - sinx - 1 = 0 for x in [0, 2π). Let u = sinx: 2u² - u - 1 = 0 factors as (2u+1)(u-1) = 0, so u = -1/2 or u = 1. sinx = 1 gives x = π/2. sinx = -1/2 gives x = 7π/6 and x = 11π/6. All solutions: π/2, 7π/6, 11π/6.",
            mathExpression: "x=\\dfrac{\\pi}{2}, \\ \\dfrac{7\\pi}{6}, \\ \\dfrac{11\\pi}{6}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Solving the quadratic for u and stopping there, reporting u-values as if they were the final answer. u = sinx is only the halfway point — every u-value still needs to be turned back into an actual angle (or angles) by solving the basic trig equation it represents.",
          },
        ],
        practiceProblems: [
          {
            problemId: "pc-u6-l2-p1",
            topicTag: "solvingTrigEquations",
            promptText:
              "Solve 2cos²x - 1 = 0 for x in [0, 2π). List all four solutions, smallest first, separated by commas.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "pi/4, 3pi/4, 5pi/4, 7pi/4",
            acceptableAnswerVariants: ["π/4, 3π/4, 5π/4, 7π/4"],
            stepByStepExplanation:
              "cos²x = 1/2, so cosx = ±√2/2. cosx = √2/2 gives x = π/4, 7π/4. cosx = -√2/2 gives x = 3π/4, 5π/4. All four together: π/4, 3π/4, 5π/4, 7π/4.",
            difficultyLevel: 3,
          },
          {
            problemId: "pc-u6-l2-p2",
            topicTag: "solvingTrigEquations",
            promptText: "Solve sin²x = sinx for x in [0, 2π). List all solutions, smallest first, separated by commas.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "0, pi/2, pi",
            stepByStepExplanation:
              "sin²x - sinx = 0 factors as sinx(sinx - 1) = 0. sinx = 0 gives x = 0, π (2π is excluded since the domain is [0, 2π)). sinx = 1 gives x = π/2. All together: 0, π/2, π.",
            difficultyLevel: 3,
          },
          {
            problemId: "pc-u6-l2-p3",
            topicTag: "solvingTrigEquations",
            promptText:
              "Solve 2sin²x + 3sinx + 1 = 0 for x in [0, 2π). List all solutions, smallest first, separated by commas.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "7pi/6, 3pi/2, 11pi/6",
            acceptableAnswerVariants: ["7π/6, 3π/2, 11π/6"],
            stepByStepExplanation:
              "Let u = sinx: 2u² + 3u + 1 = 0 factors as (2u+1)(u+1) = 0, so u = -1/2 or u = -1. sinx = -1/2 gives x = 7π/6, 11π/6. sinx = -1 gives x = 3π/2. All together: 7π/6, 3π/2, 11π/6.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Precalculus 2e — Solving Trigonometric Equations",
            resourceUrl: "https://openstax.org/books/precalculus-2e/pages/8-5-solving-trigonometric-equations",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Trigonometric equations and identities",
            resourceUrl: "https://www.khanacademy.org/math/trigonometry/trig-equations-and-identities",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "finding-all-solutions",
        lessonTitle: "Finding All Solutions",
        estimatedMinutes: 20,
        topicTag: "solvingTrigEquations",
        learningGoals: [
          "Write the general solution to a trig equation using its function's period",
          "Distinguish when to add 2πn versus πn based on which function is involved",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Periodicity means infinitely many answers",
            bodyText:
              "A trig equation restricted to [0, 2π) has finitely many solutions, but trig functions repeat forever, so without a restricted domain there are infinitely many solutions. The general solution captures all of them at once by adding a whole number of periods to each particular solution you already found.",
          },
          {
            blockType: "keyFormula",
            headingText: "Adding whole periods",
            bodyText:
              "For sine and cosine equations, add 2πn (period 2π) to each particular solution, where n is any integer. For tangent and cotangent equations, add πn instead, since their period is only π.",
            mathExpression: "x = x_0 + 2\\pi n \\ (\\sin,\\cos), \\qquad x=x_0+\\pi n \\ (\\tan,\\cot)",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Write the general solution to sinx = 1/2. The particular solutions in [0, 2π) are π/6 and 5π/6. Since sine has period 2π, the general solution is x = π/6 + 2πn or x = 5π/6 + 2πn, for any integer n.",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Using +2πn for a tangent equation's general solution instead of +πn. That misses half the true solutions, since tangent's shorter period of π means a whole extra family of solutions exists between each pair of 2π-spaced ones.",
          },
        ],
        practiceProblems: [
          {
            problemId: "pc-u6-l3-p1",
            topicTag: "solvingTrigEquations",
            promptText: "Write the general solution for tanx = 1, for all real x.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "pi/4 + n*pi",
            acceptableAnswerVariants: ["pi/4+n*pi", "x=pi/4+n*pi", "π/4 + nπ"],
            stepByStepExplanation:
              "The particular solution in [0,π) is π/4, and tangent's period is π, so the general solution is x = π/4 + πn.",
            difficultyLevel: 2,
          },
          {
            problemId: "pc-u6-l3-p2",
            topicTag: "solvingTrigEquations",
            promptText: "Which of the following is the correct general solution for cosx = 1/2?",
            answerFormat: "multipleChoice",
            choices: [
              "x = π/3 + 2πn only",
              "x = π/3 + 2πn or x = -π/3 + 2πn",
              "x = π/3 + πn",
              "x = π/6 + 2πn or x = -π/6 + 2πn",
            ],
            correctAnswer: "x = π/3 + 2πn or x = -π/3 + 2πn",
            stepByStepExplanation:
              "cosx = 1/2 has particular solutions π/3 and -π/3 (equivalently 5π/3) within one cycle. Since cosine has period 2π, the general solution adds 2πn to each.",
            difficultyLevel: 3,
          },
          {
            problemId: "pc-u6-l3-p3",
            topicTag: "solvingTrigEquations",
            promptText:
              "How many solutions does sinx = 0.5 have in the interval [0, 100π)? (There are 2 solutions per 2π period, and 100π spans 50 periods.)",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "100",
            stepByStepExplanation:
              "Each 2π-wide period contains exactly 2 solutions to sinx = 0.5. The interval [0, 100π) contains 100π / 2π = 50 full periods, so there are 50 × 2 = 100 solutions.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Precalculus 2e — Solving Trigonometric Equations",
            resourceUrl: "https://openstax.org/books/precalculus-2e/pages/8-5-solving-trigonometric-equations",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Trigonometric equations and identities",
            resourceUrl: "https://www.khanacademy.org/math/trigonometry/trig-equations-and-identities",
            resourceType: "interactivePractice",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "intro-to-vectors-2d",
    unitTitle: "Introduction to Vectors (Two Dimensions)",
    unitDescription:
      "Vectors in component form, vector arithmetic, and the dot product — a direct preview of Calculus III's vectors unit, one dimension lower.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Introduction to Vectors (Two Dimensions)",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "precalc-intro-to-vectors-2d-quiz-p1",
          topicTag: "introToVectors2D",
          promptText: "Find the magnitude of v = ⟨5, 12⟩.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "13",
          stepByStepExplanation: "|v| = √(5²+12²) = √(25+144) = √169 = 13.",
          difficultyLevel: 1,
        },
        {
          problemId: "precalc-intro-to-vectors-2d-quiz-p2",
          topicTag: "introToVectors2D",
          promptText: "Find the direction angle (in degrees) of v = ⟨√3, 1⟩.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "30",
          stepByStepExplanation:
            "tanθ = 1/√3, and since both components are positive (quadrant I), θ = arctan(1/√3) = 30°.",
          difficultyLevel: 2,
        },
        {
          problemId: "precalc-intro-to-vectors-2d-quiz-p3",
          topicTag: "introToVectors2D",
          promptText: "Given u = ⟨5, -2⟩ and v = ⟨-3, 6⟩, find u + v.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "<2,4>",
          acceptableAnswerVariants: ["(2,4)", "2,4", "⟨2,4⟩"],
          stepByStepExplanation: "u + v = ⟨5+(-3), -2+6⟩ = ⟨2, 4⟩.",
          difficultyLevel: 1,
        },
        {
          problemId: "precalc-intro-to-vectors-2d-quiz-p4",
          topicTag: "introToVectors2D",
          promptText: "Given u = ⟨5, -2⟩ and v = ⟨-3, 6⟩, find u - v.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "<8,-8>",
          acceptableAnswerVariants: ["(8,-8)", "8,-8", "⟨8,-8⟩"],
          stepByStepExplanation: "u - v = ⟨5-(-3), -2-6⟩ = ⟨8, -8⟩.",
          difficultyLevel: 2,
        },
        {
          problemId: "precalc-intro-to-vectors-2d-quiz-p5",
          topicTag: "introToVectors2D",
          promptText: "Find u · v for u = ⟨-1, 4⟩ and v = ⟨2, 3⟩.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "10",
          stepByStepExplanation: "u · v = (-1)(2) + (4)(3) = -2 + 12 = 10.",
          difficultyLevel: 2,
        },
        {
          problemId: "precalc-intro-to-vectors-2d-quiz-p6",
          topicTag: "introToVectors2D",
          promptText: "Are u = ⟨2, 3⟩ and v = ⟨-3, 2⟩ perpendicular?",
          answerFormat: "multipleChoice",
          choices: [
            "Yes, because u·v = 0",
            "No, because u·v = 0",
            "Yes, because |u| = |v|",
            "No, because the dot product is undefined",
          ],
          correctAnswer: "Yes, because u·v = 0",
          stepByStepExplanation: "u · v = (2)(-3) + (3)(2) = -6 + 6 = 0, so the vectors are perpendicular.",
          difficultyLevel: 3,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "introduction-to-vectors",
        lessonTitle: "Introduction to Vectors",
        estimatedMinutes: 25,
        topicTag: "introToVectors2D",
        learningGoals: [
          "Represent a vector in component form",
          "Find a vector's magnitude and direction angle",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "A quantity with both size and direction",
            bodyText:
              "A vector represents a quantity that has both a size (magnitude) and a direction, like a displacement or a velocity — unlike a plain number, which only carries size. In two dimensions, a vector is written in component form as ⟨a, b⟩, meaning 'move a units horizontally and b units vertically' from wherever the vector starts.",
          },
          {
            blockType: "keyFormula",
            headingText: "Magnitude and direction",
            bodyText:
              "For a vector v = ⟨a, b⟩, the magnitude is |v| = √(a² + b²) — literally the Pythagorean theorem, since a and b are the legs of a right triangle whose hypotenuse is the vector itself. The direction angle θ satisfies tanθ = b/a, adjusted for the correct quadrant based on the signs of a and b.",
            mathExpression: "|v|=\\sqrt{a^2+b^2}, \\qquad \\tan\\theta=\\dfrac{b}{a}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "For v = ⟨3, 4⟩: magnitude = √(9+16) = √25 = 5. Direction angle: tanθ = 4/3, and since both components are positive (quadrant I), θ = arctan(4/3) ≈ 53.13°.",
            mathExpression: "|v|=5, \\qquad \\theta\\approx 53.13^\\circ",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Using arctan(b/a) directly as the final direction angle without checking the quadrant, exactly like the right-triangle-word-problem issue from earlier. A calculator's arctan only returns angles in (-90°, 90°); if the vector actually points into quadrant II or III, you need to add 180° to that raw result.",
          },
        ],
        practiceProblems: [
          {
            problemId: "pc-u7-l1-p1",
            topicTag: "introToVectors2D",
            promptText: "Find the magnitude of v = ⟨6, 8⟩.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "10",
            stepByStepExplanation: "|v| = √(6²+8²) = √(36+64) = √100 = 10.",
            difficultyLevel: 1,
          },
          {
            problemId: "pc-u7-l1-p2",
            topicTag: "introToVectors2D",
            promptText: "Find the magnitude of v = ⟨-5, 12⟩.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "13",
            stepByStepExplanation: "|v| = √((-5)²+12²) = √(25+144) = √169 = 13.",
            difficultyLevel: 2,
          },
          {
            problemId: "pc-u7-l1-p3",
            topicTag: "introToVectors2D",
            promptText: "Find the direction angle (in degrees) of v = ⟨1, 1⟩.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "45",
            stepByStepExplanation:
              "tanθ = 1/1 = 1, and since both components are positive (quadrant I), θ = arctan(1) = 45°.",
            difficultyLevel: 1,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Precalculus 2e — Vectors",
            resourceUrl: "https://openstax.org/books/precalculus-2e/pages/8-8-vectors",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Vectors (Precalculus)",
            resourceUrl: "https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:vectors",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "vector-addition-subtraction-and-scalar-multiplication",
        lessonTitle: "Vector Addition, Subtraction, and Scalar Multiplication",
        estimatedMinutes: 20,
        topicTag: "introToVectors2D",
        learningGoals: [
          "Add and subtract vectors component-wise",
          "Multiply a vector by a scalar and describe the geometric effect",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Component by component",
            bodyText:
              "Vector addition and subtraction happen component-wise: add (or subtract) the first components together and the second components together separately. Scalar multiplication multiplies every component of the vector by the same number, stretching or shrinking the vector's length and, if the scalar is negative, flipping its direction 180°.",
          },
          {
            blockType: "keyFormula",
            headingText: "The component rules",
            bodyText:
              "⟨a,b⟩ + ⟨c,d⟩ = ⟨a+c, b+d⟩. ⟨a,b⟩ - ⟨c,d⟩ = ⟨a-c, b-d⟩. k⟨a,b⟩ = ⟨ka, kb⟩ for any scalar k.",
            mathExpression: "\\langle a,b\\rangle+\\langle c,d\\rangle=\\langle a+c,\\,b+d\\rangle, \\qquad k\\langle a,b\\rangle=\\langle ka,\\,kb\\rangle",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Given u = ⟨2, -3⟩ and v = ⟨-1, 5⟩: u + v = ⟨2+(-1), -3+5⟩ = ⟨1, 2⟩. u - v = ⟨2-(-1), -3-5⟩ = ⟨3, -8⟩. 3u = ⟨6, -9⟩.",
            mathExpression: "u+v=\\langle 1,2\\rangle, \\quad u-v=\\langle 3,-8\\rangle, \\quad 3u=\\langle 6,-9\\rangle",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Adding the magnitudes of two vectors directly, as if |u+v| = |u| + |v|. Vectors don't combine like plain numbers unless they point in exactly the same direction — you must add the components first, then compute the magnitude of the resulting vector.",
          },
        ],
        practiceProblems: [
          {
            problemId: "pc-u7-l2-p1",
            topicTag: "introToVectors2D",
            promptText: "Given u = ⟨4, 1⟩ and v = ⟨-2, 3⟩, find u + v.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "<2,4>",
            acceptableAnswerVariants: ["(2,4)", "2,4", "⟨2,4⟩"],
            stepByStepExplanation: "u + v = ⟨4+(-2), 1+3⟩ = ⟨2, 4⟩.",
            difficultyLevel: 1,
          },
          {
            problemId: "pc-u7-l2-p2",
            topicTag: "introToVectors2D",
            promptText: "Given u = ⟨4, 1⟩ and v = ⟨-2, 3⟩, find u - v.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "<6,-2>",
            acceptableAnswerVariants: ["(6,-2)", "6,-2", "⟨6,-2⟩"],
            stepByStepExplanation: "u - v = ⟨4-(-2), 1-3⟩ = ⟨6, -2⟩.",
            difficultyLevel: 2,
          },
          {
            problemId: "pc-u7-l2-p3",
            topicTag: "introToVectors2D",
            promptText: "Given v = ⟨3, -4⟩, find -2v.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "<-6,8>",
            acceptableAnswerVariants: ["(-6,8)", "-6,8", "⟨-6,8⟩"],
            stepByStepExplanation: "-2v = ⟨-2(3), -2(-4)⟩ = ⟨-6, 8⟩.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Precalculus 2e — Vectors",
            resourceUrl: "https://openstax.org/books/precalculus-2e/pages/8-8-vectors",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Vectors (Precalculus)",
            resourceUrl: "https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:vectors",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "the-dot-product",
        lessonTitle: "The Dot Product",
        estimatedMinutes: 25,
        topicTag: "introToVectors2D",
        learningGoals: [
          "Compute the dot product of two vectors",
          "Use the dot product to find the angle between two vectors and to test for perpendicularity",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "A number, not a vector",
            bodyText:
              "The dot product takes two vectors and returns a single number (a scalar), not another vector — that's what makes it different from every operation covered so far. It measures how much two vectors point in the same direction: a large positive dot product means they point similarly, a large negative one means they point roughly opposite, and zero means they're perpendicular.",
          },
          {
            blockType: "keyFormula",
            headingText: "Computing it and the angle-between formula",
            bodyText:
              "For u = ⟨a,b⟩ and v = ⟨c,d⟩: u · v = ac + bd. This also equals |u||v|cosθ, where θ is the angle between the vectors — rearranged, cosθ = (u·v)/(|u||v|). When u · v = 0, the vectors are perpendicular (orthogonal).",
            mathExpression: "u\\cdot v = ac+bd = |u||v|\\cos\\theta",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "For u = ⟨3,4⟩ and v = ⟨4,-3⟩: u · v = (3)(4) + (4)(-3) = 12 - 12 = 0, so u and v are perpendicular. Checking with the angle formula: |u| = |v| = 5, so cosθ = 0/25 = 0, giving θ = 90°. ✓",
            mathExpression: "u\\cdot v = 0 \\implies \\theta = 90^\\circ",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Computing the dot product as ⟨ac, bd⟩ — treating it like component-wise multiplication that still produces a vector. The dot product always collapses down to a single scalar number (ac + bd), never a new vector.",
          },
        ],
        practiceProblems: [
          {
            problemId: "pc-u7-l3-p1",
            topicTag: "introToVectors2D",
            promptText: "Find u · v for u = ⟨2, 5⟩ and v = ⟨3, -1⟩.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "1",
            stepByStepExplanation: "u · v = (2)(3) + (5)(-1) = 6 - 5 = 1.",
            difficultyLevel: 2,
          },
          {
            problemId: "pc-u7-l3-p2",
            topicTag: "introToVectors2D",
            promptText: "Are u = ⟨1, 2⟩ and v = ⟨4, -2⟩ perpendicular?",
            answerFormat: "multipleChoice",
            choices: [
              "Yes, because u·v = 0",
              "No, because u·v = 0",
              "Yes, because |u| = |v|",
              "No, because the dot product is undefined",
            ],
            correctAnswer: "Yes, because u·v = 0",
            stepByStepExplanation: "u · v = (1)(4) + (2)(-2) = 4 - 4 = 0, so the vectors are perpendicular.",
            difficultyLevel: 2,
          },
          {
            problemId: "pc-u7-l3-p3",
            topicTag: "introToVectors2D",
            promptText: "Find the angle (in degrees) between u = ⟨1, 0⟩ and v = ⟨1, 1⟩.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "45",
            stepByStepExplanation:
              "u · v = (1)(1) + (0)(1) = 1. |u| = 1, |v| = √2. cosθ = 1/√2 = √2/2, so θ = 45°.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Precalculus 2e — Vectors",
            resourceUrl: "https://openstax.org/books/precalculus-2e/pages/8-8-vectors",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Vectors (Precalculus)",
            resourceUrl: "https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:vectors",
            resourceType: "interactivePractice",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "conic-sections",
    unitTitle: "Conic Sections",
    unitDescription:
      "Standard forms for parabolas, circles, ellipses, and hyperbolas, and converting a conic's general-form equation to standard form.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Conic Sections",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "precalc-conic-sections-quiz-p1",
          topicTag: "conicSections",
          promptText: "For the parabola y² = 20x, find the value of p.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "5",
          stepByStepExplanation: "4p = 20, so p = 5.",
          difficultyLevel: 1,
        },
        {
          problemId: "precalc-conic-sections-quiz-p2",
          topicTag: "conicSections",
          promptText: "Find the vertex of the parabola (x+1)² = 12(y-3).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "(-1,3)",
          stepByStepExplanation:
            "The standard form (x-h)²=4p(y-k) has vertex (h,k). Here h=-1, k=3, so the vertex is (-1,3).",
          difficultyLevel: 2,
        },
        {
          problemId: "precalc-conic-sections-quiz-p3",
          topicTag: "conicSections",
          promptText: "Find the center and radius of (x-5)² + (y+1)² = 64.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "center (5,-1), radius 8",
          acceptableAnswerVariants: ["(5,-1), r=8", "center (5, -1), radius 8"],
          stepByStepExplanation: "Comparing to (x-h)²+(y-k)²=r²: h=5, k=-1, and r²=64 so r=8.",
          difficultyLevel: 2,
        },
        {
          problemId: "precalc-conic-sections-quiz-p4",
          topicTag: "conicSections",
          promptText: "For the ellipse x²/49 + y²/25 = 1, find the length of the major axis.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "14",
          stepByStepExplanation: "The larger denominator is 49, so a²=49, a=7. The major axis has length 2a = 14.",
          difficultyLevel: 2,
        },
        {
          problemId: "precalc-conic-sections-quiz-p5",
          topicTag: "conicSections",
          promptText: "For the ellipse x²/16 + y²/25 = 1, find c (the distance from the center to each focus).",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "3",
          stepByStepExplanation:
            "Since 25 > 16, the major axis is along y: a²=25, b²=16. c = √(a²-b²) = √(25-16) = √9 = 3.",
          difficultyLevel: 3,
        },
        {
          problemId: "precalc-conic-sections-quiz-p6",
          topicTag: "conicSections",
          promptText: "For the hyperbola x²/25 - y²/144 = 1, find c.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "13",
          stepByStepExplanation: "a²=25, b²=144, so c = √(a²+b²) = √(25+144) = √169 = 13.",
          difficultyLevel: 3,
        },
        {
          problemId: "precalc-conic-sections-quiz-p7",
          topicTag: "conicSections",
          promptText:
            "Convert x² + y² - 4x + 6y - 3 = 0 to standard form. What is the radius of the resulting circle?",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "4",
          stepByStepExplanation:
            "Group: (x²-4x) + (y²+6y) = 3. Complete the squares: (x²-4x+4) + (y²+6y+9) = 3+4+9 = 16, giving (x-2)²+(y+3)²=16. Radius = √16 = 4.",
          difficultyLevel: 4,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "parabolas",
        lessonTitle: "Parabolas",
        estimatedMinutes: 25,
        topicTag: "conicSections",
        learningGoals: [
          "State the standard form of a parabola and identify its vertex",
          "Find a parabola's focus and directrix from its standard-form equation",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Equidistant from a point and a line",
            bodyText:
              "A parabola is the set of all points equidistant from a fixed point (the focus) and a fixed line (the directrix). Whichever variable is squared tells you the axis: if x is squared, the parabola opens up or down (vertically); if y is squared, it opens left or right (horizontally).",
          },
          {
            blockType: "keyFormula",
            headingText: "Standard form (vertex at (h,k))",
            bodyText:
              "(x-h)² = 4p(y-k): opens up (p>0) or down (p<0), vertex (h,k), focus (h, k+p), directrix y = k-p. (y-k)² = 4p(x-h): opens right (p>0) or left (p<0), vertex (h,k), focus (h+p, k), directrix x = h-p.",
            mathExpression: "(x-h)^2=4p(y-k)",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "For x² = 8y: this matches (x-h)² = 4p(y-k) with h=0, k=0, and 4p=8, so p=2. Vertex (0,0), focus (0,2), directrix y = -2.",
            mathExpression: "\\text{vertex }(0,0), \\ \\text{focus }(0,2), \\ \\text{directrix } y=-2",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Mixing up which axis the parabola opens along based on which variable is squared. If x is squared, picture it as a 'valley' shape opening vertically (up or down); if y is squared, picture it lying on its side, opening horizontally (left or right).",
          },
        ],
        practiceProblems: [
          {
            problemId: "pc-u8-l1-p1",
            topicTag: "conicSections",
            promptText: "For the parabola y² = 12x, find the value of p.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "3",
            stepByStepExplanation: "4p = 12, so p = 3.",
            difficultyLevel: 2,
          },
          {
            problemId: "pc-u8-l1-p2",
            topicTag: "conicSections",
            promptText: "Find the vertex of the parabola (x-2)² = -8(y+1).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(2,-1)",
            stepByStepExplanation: "The standard form (x-h)²=4p(y-k) has vertex (h,k). Here h=2, k=-1, so the vertex is (2,-1).",
            difficultyLevel: 2,
          },
          {
            problemId: "pc-u8-l1-p3",
            topicTag: "conicSections",
            promptText: "For the parabola x² = 4y, find the focus.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(0,1)",
            stepByStepExplanation: "4p = 4, so p = 1. Vertex is (0,0), and the focus is (h, k+p) = (0, 1).",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Precalculus 2e — The Parabola",
            resourceUrl: "https://openstax.org/books/precalculus-2e/pages/10-3-the-parabola",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Conic sections",
            resourceUrl: "https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:conics",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "circles-and-ellipses",
        lessonTitle: "Circles and Ellipses",
        estimatedMinutes: 25,
        topicTag: "conicSections",
        learningGoals: [
          "State the standard form of a circle and an ellipse",
          "Identify an ellipse's major axis, vertices, and foci from its standard-form equation",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "A circle is a special ellipse",
            bodyText:
              "A circle is the set of points a fixed distance (the radius) from a center point. An ellipse stretches that idea: it's the set of points where the SUM of the distances to two fixed points (the foci) stays constant. Whichever denominator is larger in an ellipse's standard form tells you which axis is the longer one (the major axis).",
          },
          {
            blockType: "keyFormula",
            headingText: "Standard forms",
            bodyText:
              "Circle, center (h,k), radius r: (x-h)² + (y-k)² = r². Ellipse, center (h,k): (x-h)²/a² + (y-k)²/b² = 1, where a² is the LARGER of the two denominators (whichever variable that's under determines the major axis), and c² = a² - b² gives the distance from center to each focus.",
            mathExpression: "(x-h)^2+(y-k)^2=r^2, \\qquad \\dfrac{(x-h)^2}{a^2}+\\dfrac{(y-k)^2}{b^2}=1",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "For x²/25 + y²/9 = 1: the larger denominator, 25, is under x, so the major axis is horizontal. a² = 25 (a=5), b² = 9 (b=3), and c = √(a²-b²) = √(25-9) = 4. Vertices at (±5, 0), foci at (±4, 0).",
            mathExpression: "a=5,\\ b=3,\\ c=4",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Assuming the major axis is always horizontal (or always under x) without actually comparing the two denominators. Whichever denominator is bigger — regardless of whether it sits under x or y — is a², and that variable's axis is the major axis.",
          },
        ],
        practiceProblems: [
          {
            problemId: "pc-u8-l2-p1",
            topicTag: "conicSections",
            promptText: "Find the center and radius of (x+3)² + (y-2)² = 49.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "center (-3,2), radius 7",
            acceptableAnswerVariants: ["(-3,2), r=7", "center (-3, 2), radius 7"],
            stepByStepExplanation: "Comparing to (x-h)²+(y-k)²=r²: h=-3, k=2, and r²=49 so r=7.",
            difficultyLevel: 2,
          },
          {
            problemId: "pc-u8-l2-p2",
            topicTag: "conicSections",
            promptText: "For the ellipse x²/16 + y²/4 = 1, find the length of the major axis.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "8",
            stepByStepExplanation: "The larger denominator is 16, so a²=16, a=4. The major axis has length 2a = 8.",
            difficultyLevel: 2,
          },
          {
            problemId: "pc-u8-l2-p3",
            topicTag: "conicSections",
            promptText: "For the ellipse x²/9 + y²/25 = 1, find c (the distance from the center to each focus).",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "4",
            stepByStepExplanation:
              "Since 25 > 9, the major axis is along y: a²=25, b²=9. c = √(a²-b²) = √(25-9) = √16 = 4.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Precalculus 2e — The Ellipse",
            resourceUrl: "https://openstax.org/books/precalculus-2e/pages/10-1-the-ellipse",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Conic sections",
            resourceUrl: "https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:conics",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "hyperbolas",
        lessonTitle: "Hyperbolas",
        estimatedMinutes: 25,
        topicTag: "conicSections",
        learningGoals: [
          "State the standard form of a hyperbola and identify its transverse axis",
          "Find a hyperbola's vertices, foci, and asymptotes from its standard-form equation",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "A difference, not a sum, of distances",
            bodyText:
              "A hyperbola is the set of points where the DIFFERENCE of the distances to two foci stays constant (compare that to an ellipse's constant sum). Its graph has two separate branches instead of one closed curve, and it approaches a pair of diagonal asymptote lines as it stretches out.",
          },
          {
            blockType: "keyFormula",
            headingText: "Standard form and asymptotes",
            bodyText:
              "Horizontal transverse axis: (x-h)²/a² - (y-k)²/b² = 1, vertices (h±a, k), asymptotes y-k = ±(b/a)(x-h). Vertical transverse axis: (y-k)²/a² - (x-h)²/b² = 1. In both cases, c² = a² + b² — the PLUS sign here is the key difference from an ellipse.",
            mathExpression: "\\dfrac{(x-h)^2}{a^2}-\\dfrac{(y-k)^2}{b^2}=1, \\qquad c^2=a^2+b^2",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "For x²/9 - y²/16 = 1: a²=9 (a=3), b²=16 (b=4), c = √(9+16) = 5. Vertices at (±3, 0), foci at (±5, 0), asymptotes y = ±(4/3)x.",
            mathExpression: "a=3,\\ b=4,\\ c=5, \\qquad y=\\pm\\dfrac{4}{3}x",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Using c² = a² - b² (the ellipse formula) for a hyperbola instead of c² = a² + b². Because a hyperbola's equation already has a minus sign built in, it's tempting to carry that minus sign into the foci formula too — but the relationship between a, b, and c flips to addition for hyperbolas.",
          },
        ],
        practiceProblems: [
          {
            problemId: "pc-u8-l3-p1",
            topicTag: "conicSections",
            promptText: "For the hyperbola y²/4 - x²/9 = 1, is the transverse axis horizontal or vertical?",
            answerFormat: "multipleChoice",
            choices: ["Horizontal", "Vertical"],
            correctAnswer: "Vertical",
            stepByStepExplanation:
              "Since the y-term is the positive one, the transverse axis runs vertically (the hyperbola opens up and down).",
            difficultyLevel: 2,
          },
          {
            problemId: "pc-u8-l3-p2",
            topicTag: "conicSections",
            promptText: "For the hyperbola x²/16 - y²/9 = 1, find c.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "5",
            stepByStepExplanation: "a²=16, b²=9, so c = √(a²+b²) = √(16+9) = √25 = 5.",
            difficultyLevel: 3,
          },
          {
            problemId: "pc-u8-l3-p3",
            topicTag: "conicSections",
            promptText: "Find the equations of the asymptotes for x²/4 - y²/9 = 1.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "y = ±(3/2)x",
            acceptableAnswerVariants: ["y=3/2 x and y=-3/2 x", "y=±1.5x", "y = 3x/2 and y = -3x/2"],
            stepByStepExplanation: "a²=4 (a=2), b²=9 (b=3). Asymptotes: y = ±(b/a)x = ±(3/2)x.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Precalculus 2e — The Hyperbola",
            resourceUrl: "https://openstax.org/books/precalculus-2e/pages/10-2-the-hyperbola",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Conic sections",
            resourceUrl: "https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:conics",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "converting-general-form-to-standard-form",
        lessonTitle: "Converting General Form to Standard Form",
        estimatedMinutes: 20,
        topicTag: "conicSections",
        learningGoals: [
          "Complete the square in two variables to convert a conic's general-form equation to standard form",
          "Identify a conic from its converted standard form",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Two separate completing-the-square problems, side by side",
            bodyText:
              "A conic's general-form equation, like Ax² + Cy² + Dx + Ey + F = 0, hides its identity (circle, ellipse, hyperbola, or parabola) until it's converted to standard form. The process is to group the x-terms together and the y-terms together, then complete the square in each group independently, carefully adding the same balancing constant to both sides of the equation.",
          },
          {
            blockType: "keyFormula",
            headingText: "Completing the square",
            bodyText:
              "To complete the square on x² + bx: add and account for (b/2)². Specifically, x² + bx = (x + b/2)² - (b/2)². When there's a leading coefficient other than 1 (like 4x² + 16x), factor that coefficient out of the group first.",
            mathExpression: "x^2+bx = \\left(x+\\dfrac{b}{2}\\right)^2-\\left(\\dfrac{b}{2}\\right)^2",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Convert x² + y² - 6x + 4y - 12 = 0 to standard form. Group: (x² - 6x) + (y² + 4y) = 12. Complete each square: (x² - 6x + 9) + (y² + 4y + 4) = 12 + 9 + 4 = 25. This gives (x-3)² + (y+2)² = 25 — a circle with center (3, -2) and radius 5.",
            mathExpression: "(x-3)^2+(y+2)^2=25",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Adding the completing-the-square constants to only the left side (or only inside the parentheses) without also adding them to the right side of the equation. Whatever number you add to complete a square must be added to BOTH sides to keep the equation balanced — for every constant added, the right-hand side needs that same amount added to it.",
          },
        ],
        practiceProblems: [
          {
            problemId: "pc-u8-l4-p1",
            topicTag: "conicSections",
            promptText:
              "Convert x² + y² + 8x - 2y + 8 = 0 to standard form. What is the center of the resulting circle?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(-4,1)",
            stepByStepExplanation:
              "Group: (x²+8x) + (y²-2y) = -8. Complete the squares: (x²+8x+16) + (y²-2y+1) = -8+16+1 = 9, giving (x+4)²+(y-1)²=9. Center: (-4, 1).",
            difficultyLevel: 3,
          },
          {
            problemId: "pc-u8-l4-p2",
            topicTag: "conicSections",
            promptText:
              "For 4x² + 9y² - 16x + 18y - 11 = 0, completing the square gives 4(x-2)² + 9(y+1)² = 36. Dividing by 36 gives the ellipse's standard form. What is a² (the larger denominator)?",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "9",
            stepByStepExplanation:
              "Dividing 4(x-2)²+9(y+1)²=36 by 36 gives (x-2)²/9 + (y+1)²/4 = 1. The larger denominator is 9, so a²=9.",
            difficultyLevel: 4,
          },
          {
            problemId: "pc-u8-l4-p3",
            topicTag: "conicSections",
            promptText:
              "Convert x² - y² - 4x - 2y - 1 = 0 to standard form. What constant appears on the right-hand side after completing the square?",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "4",
            stepByStepExplanation:
              "Group: (x²-4x) - (y²+2y) = 1. Complete the squares: (x²-4x+4) - (y²+2y+1) = 1+4-1 = 4, giving (x-2)² - (y+1)² = 4.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Precalculus 2e — The Ellipse",
            resourceUrl: "https://openstax.org/books/precalculus-2e/pages/10-1-the-ellipse",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Conic sections",
            resourceUrl: "https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:conics",
            resourceType: "interactivePractice",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "intro-to-polar-coordinates",
    unitTitle: "Polar Coordinates (Introduction)",
    unitDescription:
      "Plotting points in polar coordinates, converting to and from rectangular form, and recognizing basic polar curves by pattern.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Polar Coordinates (Introduction)",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "precalc-intro-to-polar-coordinates-quiz-p1",
          topicTag: "introToPolarCoordinates",
          promptText: "Convert the polar point (6, π/3) to rectangular coordinates.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "(3,3sqrt(3))",
          acceptableAnswerVariants: ["(3, 3√3)"],
          stepByStepExplanation: "x = 6cos(π/3) = 6(1/2) = 3. y = 6sin(π/3) = 6(√3/2) = 3√3. Rectangular: (3, 3√3).",
          difficultyLevel: 2,
        },
        {
          problemId: "precalc-intro-to-polar-coordinates-quiz-p2",
          topicTag: "introToPolarCoordinates",
          promptText: "Convert the rectangular point (3, -3) to polar coordinates, with r > 0 and θ in [0, 2π).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "(3sqrt(2), 7pi/4)",
          acceptableAnswerVariants: ["(3√2, 7π/4)"],
          stepByStepExplanation:
            "r = √(3²+(-3)²) = √18 = 3√2. The point is in quadrant IV with reference angle π/4, so θ = 2π - π/4 = 7π/4. Polar: (3√2, 7π/4).",
          difficultyLevel: 3,
        },
        {
          problemId: "precalc-intro-to-polar-coordinates-quiz-p3",
          topicTag: "introToPolarCoordinates",
          promptText: "How many petals does the rose r = 5cos(5θ) have?",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "5",
          stepByStepExplanation: "n = 5 is odd, so the rose has exactly n = 5 petals.",
          difficultyLevel: 2,
        },
        {
          problemId: "precalc-intro-to-polar-coordinates-quiz-p4",
          topicTag: "introToPolarCoordinates",
          promptText: "How many petals does the rose r = 3sin(6θ) have?",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "12",
          stepByStepExplanation: "n = 6 is even, so the rose has 2n = 12 petals.",
          difficultyLevel: 2,
        },
        {
          problemId: "precalc-intro-to-polar-coordinates-quiz-p5",
          topicTag: "introToPolarCoordinates",
          promptText: "The polar equation r = 2 - 2sinθ describes what type of curve?",
          answerFormat: "multipleChoice",
          choices: ["Circle", "Cardioid", "Rose with 2 petals", "Hyperbola"],
          correctAnswer: "Cardioid",
          stepByStepExplanation: "This matches the pattern r = a - b sinθ with a = b = 2, which is a cardioid.",
          difficultyLevel: 2,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "the-polar-coordinate-system",
        lessonTitle: "The Polar Coordinate System",
        estimatedMinutes: 25,
        topicTag: "introToPolarCoordinates",
        learningGoals: [
          "Plot a point given in polar coordinates (r, θ)",
          "Convert points between polar and rectangular coordinates",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Distance and angle instead of horizontal and vertical",
            bodyText:
              "Rectangular coordinates locate a point using horizontal and vertical distances, (x, y). Polar coordinates locate the same point differently: r is the straight-line distance from the origin (called the pole), and θ is the angle that distance is measured at, rotating counterclockwise from the positive x-axis (the polar axis).",
          },
          {
            blockType: "keyFormula",
            headingText: "Conversion formulas",
            bodyText:
              "Polar to rectangular: x = r cosθ, y = r sinθ. Rectangular to polar: r² = x² + y², and tanθ = y/x (adjusted for the correct quadrant using the signs of x and y).",
            mathExpression: "x=r\\cos\\theta, \\ y=r\\sin\\theta, \\qquad r^2=x^2+y^2, \\ \\tan\\theta=\\dfrac{y}{x}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Convert the polar point (4, π/3) to rectangular coordinates: x = 4cos(π/3) = 4(1/2) = 2, y = 4sin(π/3) = 4(√3/2) = 2√3. Rectangular coordinates: (2, 2√3).",
            mathExpression: "(4,\\tfrac{\\pi}{3}) \\to (2, 2\\sqrt3)",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Assuming a point has only one valid polar representation, the way rectangular points do. The same point can be written as (r, θ), (r, θ+2πn) for any integer n, or even (-r, θ+π) — polar coordinates aren't unique, which matters once you start solving equations in polar form.",
          },
        ],
        practiceProblems: [
          {
            problemId: "pc-u9-l1-p1",
            topicTag: "introToPolarCoordinates",
            promptText: "Convert the polar point (2, π/6) to rectangular coordinates.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(sqrt(3),1)",
            acceptableAnswerVariants: ["(√3, 1)"],
            stepByStepExplanation: "x = 2cos(π/6) = 2(√3/2) = √3. y = 2sin(π/6) = 2(1/2) = 1. Rectangular: (√3, 1).",
            difficultyLevel: 2,
          },
          {
            problemId: "pc-u9-l1-p2",
            topicTag: "introToPolarCoordinates",
            promptText:
              "Convert the rectangular point (0, 5) to polar coordinates, with r > 0 and θ in [0, 2π).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(5, pi/2)",
            acceptableAnswerVariants: ["(5, π/2)"],
            stepByStepExplanation:
              "r = √(0²+5²) = 5. The point lies straight up the positive y-axis, so θ = π/2. Polar: (5, π/2).",
            difficultyLevel: 2,
          },
          {
            problemId: "pc-u9-l1-p3",
            topicTag: "introToPolarCoordinates",
            promptText:
              "Convert the rectangular point (-1, 1) to polar coordinates, with r > 0 and θ in [0, 2π).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(sqrt(2), 3pi/4)",
            acceptableAnswerVariants: ["(√2, 3π/4)"],
            stepByStepExplanation:
              "r = √((-1)²+1²) = √2. The point is in quadrant II with reference angle π/4, so θ = π - π/4 = 3π/4. Polar: (√2, 3π/4).",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Precalculus 2e — Polar Coordinates",
            resourceUrl: "https://openstax.org/books/precalculus-2e/pages/8-3-polar-coordinates",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Paul's Online Math Notes — Polar Coordinates (Calculus II)",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/PolarCoordinates.aspx",
            resourceType: "referenceSheet",
          },
        ],
      },
      {
        lessonSlug: "graphing-basic-polar-curves",
        lessonTitle: "Graphing Basic Polar Curves",
        estimatedMinutes: 25,
        topicTag: "introToPolarCoordinates",
        learningGoals: [
          "Recognize circles, roses, and cardioids from their polar equations",
          "Determine the number of petals in a rose curve from its equation",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Pattern recognition over point-plotting",
            bodyText:
              "A handful of polar equation patterns produce recognizable, named shapes. Instead of plotting dozens of points, it's far faster to recognize the pattern in the equation itself and sketch the known shape directly — the same way you'd recognize y = mx + b as a line without plotting it point by point.",
          },
          {
            blockType: "keyFormula",
            headingText: "Common polar patterns",
            bodyText:
              "r = a: a circle of radius a centered at the pole. r = a cosθ or r = a sinθ: a circle of diameter a passing through the pole. r = a ± b cosθ or a ± b sinθ with a = b: a cardioid (heart shape). r = a cos(nθ) or a sin(nθ): a rose with n petals if n is odd, or 2n petals if n is even.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Identify r = 3cos(2θ). This matches the rose pattern a cos(nθ) with a = 3, n = 2. Since n = 2 is even, the rose has 2n = 4 petals, each reaching a maximum length of 3 from the pole.",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Assuming every rose r = a cos(nθ) has exactly n petals, regardless of whether n is even or odd. The petal count only equals n when n is odd — when n is even, the rose actually has twice as many (2n) petals, a detail that's easy to overlook when pattern-matching quickly.",
          },
        ],
        practiceProblems: [
          {
            problemId: "pc-u9-l2-p1",
            topicTag: "introToPolarCoordinates",
            promptText: "How many petals does the rose r = 4sin(3θ) have?",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "3",
            stepByStepExplanation: "n = 3 is odd, so the rose has exactly n = 3 petals.",
            difficultyLevel: 2,
          },
          {
            problemId: "pc-u9-l2-p2",
            topicTag: "introToPolarCoordinates",
            promptText: "How many petals does the rose r = 2cos(4θ) have?",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "8",
            stepByStepExplanation: "n = 4 is even, so the rose has 2n = 8 petals.",
            difficultyLevel: 2,
          },
          {
            problemId: "pc-u9-l2-p3",
            topicTag: "introToPolarCoordinates",
            promptText: "The polar equation r = 1 + cosθ describes what type of curve?",
            answerFormat: "multipleChoice",
            choices: ["Circle", "Cardioid", "Rose with 2 petals", "Hyperbola"],
            correctAnswer: "Cardioid",
            stepByStepExplanation:
              "This matches the pattern r = a + b cosθ with a = b = 1, which is a cardioid.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Precalculus 2e — Polar Coordinates: Graphs",
            resourceUrl: "https://openstax.org/books/precalculus-2e/pages/8-4-polar-coordinates-graphs",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Paul's Online Math Notes — Polar Coordinates (Calculus II)",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/PolarCoordinates.aspx",
            resourceType: "referenceSheet",
          },
        ],
      },
    ],
  },
];

export const precalculusCourseExam: CourseExam = {
  examTitle: "Pre-Calculus: Course Exam",
  passingScorePercent: 70,
  questions: [
    {
      problemId: "precalc-exam-p1",
      topicTag: "trigonometricRatios",
      promptText:
        "In a right triangle, the side opposite angle θ has length 9 and the hypotenuse has length 41 (a 9-40-41 triangle). Find sin θ.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "9/41",
      stepByStepExplanation: "Sine is opposite over hypotenuse: sin θ = 9/41.",
      difficultyLevel: 1,
    },
    {
      problemId: "precalc-exam-p2",
      topicTag: "trigonometricRatios",
      promptText: "A right triangle has legs of length 7 and 24. Find the length of the hypotenuse.",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "25",
      stepByStepExplanation: "By the Pythagorean theorem, c = √(7² + 24²) = √(49+576) = √625 = 25.",
      difficultyLevel: 1,
    },
    {
      problemId: "precalc-exam-p3",
      topicTag: "trigonometricRatios",
      promptText:
        "From a point 60 meters from the base of a tower, the angle of elevation to the top is 42°. Find the height of the tower, rounded to the nearest meter.",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "54",
      stepByStepExplanation:
        "The 60 m distance is adjacent to the 42° angle; the height is opposite it. height = 60 · tan 42° ≈ 60 × 0.9004 ≈ 54.0 m.",
      difficultyLevel: 3,
    },
    {
      problemId: "precalc-exam-p4",
      topicTag: "unitCircleAndRadians",
      promptText: "Convert 135° to radians.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "3pi/4",
      acceptableAnswerVariants: ["3π/4"],
      stepByStepExplanation: "135 × (π/180) = 135π/180 = 3π/4.",
      difficultyLevel: 1,
    },
    {
      problemId: "precalc-exam-p5",
      topicTag: "unitCircleAndRadians",
      promptText: "Convert 7π/4 radians to degrees.",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "315",
      stepByStepExplanation: "(7π/4) × (180/π) = 7(180)/4 = 1260/4 = 315°.",
      difficultyLevel: 1,
    },
    {
      problemId: "precalc-exam-p6",
      topicTag: "unitCircleAndRadians",
      promptText: "Evaluate cos(π/3).",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "1/2",
      stepByStepExplanation: "cos(π/3) = 1/2, a standard unit-circle value from a 30-60-90 reference triangle.",
      difficultyLevel: 1,
    },
    {
      problemId: "precalc-exam-p7",
      topicTag: "unitCircleAndRadians",
      promptText: "Evaluate sin(7π/6).",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "-1/2",
      stepByStepExplanation:
        "7π/6 is in quadrant III. Reference angle = 7π/6 − π = π/6. sin(π/6) = 1/2, and sine is negative in quadrant III, so sin(7π/6) = -1/2.",
      difficultyLevel: 2,
    },
    {
      problemId: "precalc-exam-p8",
      topicTag: "unitCircleAndRadians",
      promptText: "Evaluate tan(2π/3).",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "-sqrt(3)",
      acceptableAnswerVariants: ["-√3"],
      stepByStepExplanation:
        "2π/3 is in quadrant II. Reference angle = π − 2π/3 = π/3. tan(π/3) = √3, and tangent is negative in quadrant II, so tan(2π/3) = -√3.",
      difficultyLevel: 3,
    },
    {
      problemId: "precalc-exam-p9",
      topicTag: "graphingTrigFunctions",
      promptText: "What is the amplitude of y = -6sin(x)?",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "6",
      stepByStepExplanation: "The amplitude is |A|, and here A = -6, so |A| = 6.",
      difficultyLevel: 1,
    },
    {
      problemId: "precalc-exam-p10",
      topicTag: "graphingTrigFunctions",
      promptText: "What is the period of y = sin(x/2)?",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "4pi",
      acceptableAnswerVariants: ["4π"],
      stepByStepExplanation: "Period = 2π/|B| = 2π/(1/2) = 4π, since B = 1/2.",
      difficultyLevel: 2,
    },
    {
      problemId: "precalc-exam-p11",
      topicTag: "graphingTrigFunctions",
      promptText: "Find the phase shift of y = cos(3x - π), after factoring 3 out of the argument.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "pi/3",
      acceptableAnswerVariants: ["π/3"],
      stepByStepExplanation: "3x - π = 3(x - π/3), so the phase shift is π/3.",
      difficultyLevel: 3,
    },
    {
      problemId: "precalc-exam-p12",
      topicTag: "trigonometricIdentities",
      promptText: "Simplify: 1 - cos²θ.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "sin^2(theta)",
      acceptableAnswerVariants: ["sin^2 theta", "sin²θ", "sin(theta)^2"],
      stepByStepExplanation: "Rearranging sin²θ + cos²θ = 1 gives 1 - cos²θ = sin²θ.",
      difficultyLevel: 1,
    },
    {
      problemId: "precalc-exam-p13",
      topicTag: "trigonometricIdentities",
      promptText: "If sin θ = -3/5 and θ is in quadrant III, find cos θ.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "-4/5",
      stepByStepExplanation:
        "cos²θ = 1 - (-3/5)² = 1 - 9/25 = 16/25, so cos θ = ±4/5. Quadrant III is negative for cosine, so cos θ = -4/5.",
      difficultyLevel: 2,
    },
    {
      problemId: "precalc-exam-p14",
      topicTag: "trigonometricIdentities",
      promptText: "If cot θ = 5/12, find csc²θ.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "169/144",
      stepByStepExplanation: "csc²θ = 1 + cot²θ = 1 + (5/12)² = 1 + 25/144 = 169/144.",
      difficultyLevel: 2,
    },
    {
      problemId: "precalc-exam-p15",
      topicTag: "trigonometricIdentities",
      promptText: "Find the exact value of sin(105°) using 105° = 60° + 45°.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "(sqrt(6)+sqrt(2))/4",
      acceptableAnswerVariants: ["(√6+√2)/4"],
      stepByStepExplanation:
        "sin(60°+45°) = sin60°cos45° + cos60°sin45° = (√3/2)(√2/2) + (1/2)(√2/2) = √6/4 + √2/4 = (√6+√2)/4.",
      difficultyLevel: 3,
    },
    {
      problemId: "precalc-exam-p16",
      topicTag: "trigonometricIdentities",
      promptText: "If cos θ = 1/3, find cos(2θ) using cos(2θ) = 2cos²θ - 1.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "-7/9",
      stepByStepExplanation: "cos(2θ) = 2(1/3)² - 1 = 2(1/9) - 1 = 2/9 - 1 = -7/9.",
      difficultyLevel: 3,
    },
    {
      problemId: "precalc-exam-p17",
      topicTag: "trigonometricIdentities",
      promptText: "Simplify tanθ · cosθ.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "sin(theta)",
      acceptableAnswerVariants: ["sinθ", "sin theta"],
      stepByStepExplanation: "tanθ · cosθ = (sinθ/cosθ) · cosθ = sinθ, since the cosθ factors cancel.",
      difficultyLevel: 2,
    },
    {
      problemId: "precalc-exam-p18",
      topicTag: "inverseTrigFunctions",
      promptText: "Evaluate arcsin(1).",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "pi/2",
      acceptableAnswerVariants: ["π/2"],
      stepByStepExplanation: "sin(π/2) = 1, and π/2 is in arcsin's range [-π/2, π/2], so arcsin(1) = π/2.",
      difficultyLevel: 1,
    },
    {
      problemId: "precalc-exam-p19",
      topicTag: "inverseTrigFunctions",
      promptText: "Evaluate arccos(0).",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "pi/2",
      acceptableAnswerVariants: ["π/2"],
      stepByStepExplanation: "cos(π/2) = 0, and π/2 is in arccos's range [0, π], so arccos(0) = π/2.",
      difficultyLevel: 1,
    },
    {
      problemId: "precalc-exam-p20",
      topicTag: "inverseTrigFunctions",
      promptText: "Evaluate arctan(-1/√3).",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "-pi/6",
      acceptableAnswerVariants: ["-π/6"],
      stepByStepExplanation: "arctan(1/√3) = π/6, so arctan(-1/√3) = -arctan(1/√3) = -π/6.",
      difficultyLevel: 2,
    },
    {
      problemId: "precalc-exam-p21",
      topicTag: "solvingTrigEquations",
      promptText: "Solve sinx = -1/2 for x in [0, 2π). List both solutions, smallest first, separated by a comma.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "7pi/6, 11pi/6",
      acceptableAnswerVariants: ["7π/6, 11π/6"],
      stepByStepExplanation:
        "Reference angle is π/6. Sine is negative in quadrants III and IV: x = π + π/6 = 7π/6, and x = 2π - π/6 = 11π/6.",
      difficultyLevel: 2,
    },
    {
      problemId: "precalc-exam-p22",
      topicTag: "solvingTrigEquations",
      promptText: "Solve 2sinx + √3 = 0 for x in [0, 2π). List both solutions, smallest first, separated by a comma.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "4pi/3, 5pi/3",
      acceptableAnswerVariants: ["4π/3, 5π/3"],
      stepByStepExplanation:
        "sinx = -√3/2. Reference angle π/3. Sine is negative in quadrants III and IV: x = π + π/3 = 4π/3, and x = 2π - π/3 = 5π/3.",
      difficultyLevel: 3,
    },
    {
      problemId: "precalc-exam-p23",
      topicTag: "solvingTrigEquations",
      promptText:
        "Solve 2cos²x - cosx - 1 = 0 for x in [0, 2π). List all solutions, smallest first, separated by commas.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "0, 2pi/3, 4pi/3",
      acceptableAnswerVariants: ["0, 2π/3, 4π/3"],
      stepByStepExplanation:
        "Let u = cosx: 2u² - u - 1 = 0 factors as (2u+1)(u-1) = 0, so u = -1/2 or u = 1. cosx = 1 gives x = 0. cosx = -1/2 gives x = 2π/3, 4π/3. All together: 0, 2π/3, 4π/3.",
      difficultyLevel: 4,
    },
    {
      problemId: "precalc-exam-p24",
      topicTag: "solvingTrigEquations",
      promptText: "Write the general solution for cosx = 1, for all real x.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "2*n*pi",
      acceptableAnswerVariants: ["2npi", "x=2*n*pi", "2πn"],
      stepByStepExplanation:
        "The particular solution in [0, 2π) is x = 0, and cosine has period 2π, so the general solution is x = 2πn for any integer n.",
      difficultyLevel: 2,
    },
    {
      problemId: "precalc-exam-p25",
      topicTag: "solvingTrigEquations",
      promptText:
        "How many solutions does sinx = 0.3 have in the interval [0, 50π)? (There are 2 solutions per 2π period.)",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "50",
      stepByStepExplanation:
        "Each 2π-wide period contains exactly 2 solutions to sinx = 0.3. The interval [0, 50π) contains 50π/2π = 25 full periods, so there are 25 × 2 = 50 solutions.",
      difficultyLevel: 4,
    },
    {
      problemId: "precalc-exam-p26",
      topicTag: "introToVectors2D",
      promptText: "Find the magnitude of v = ⟨7, 24⟩.",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "25",
      stepByStepExplanation: "|v| = √(7²+24²) = √(49+576) = √625 = 25.",
      difficultyLevel: 1,
    },
    {
      problemId: "precalc-exam-p27",
      topicTag: "introToVectors2D",
      promptText: "Find u · v for u = ⟨-3, 5⟩ and v = ⟨4, 2⟩.",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "-2",
      stepByStepExplanation: "u · v = (-3)(4) + (5)(2) = -12 + 10 = -2.",
      difficultyLevel: 2,
    },
    {
      problemId: "precalc-exam-p28",
      topicTag: "conicSections",
      promptText: "Find the vertex of the parabola (y-4)² = 8(x+2).",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "(-2,4)",
      stepByStepExplanation:
        "The standard form (y-k)²=4p(x-h) has vertex (h,k). Here h=-2, k=4, so the vertex is (-2,4).",
      difficultyLevel: 2,
    },
    {
      problemId: "precalc-exam-p29",
      topicTag: "conicSections",
      promptText: "For the ellipse x²/36 + y²/11 = 1, find c (the distance from the center to each focus).",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "5",
      stepByStepExplanation:
        "Since 36 > 11, the major axis is along x: a²=36, b²=11. c = √(a²-b²) = √(36-11) = √25 = 5.",
      difficultyLevel: 3,
    },
    {
      problemId: "precalc-exam-p30",
      topicTag: "introToPolarCoordinates",
      promptText: "Convert the polar point (8, π/6) to rectangular coordinates.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "(4sqrt(3),4)",
      acceptableAnswerVariants: ["(4√3, 4)"],
      stepByStepExplanation: "x = 8cos(π/6) = 8(√3/2) = 4√3. y = 8sin(π/6) = 8(1/2) = 4. Rectangular: (4√3, 4).",
      difficultyLevel: 2,
    },
    {
      problemId: "precalc-exam-p31",
      topicTag: "introToPolarCoordinates",
      promptText: "How many petals does the rose r = 6cos(7θ) have?",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "7",
      stepByStepExplanation: "n = 7 is odd, so the rose has exactly n = 7 petals.",
      difficultyLevel: 2,
    },
  ],
};
