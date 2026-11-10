import { CourseExam, Unit, UnitQuiz } from "@/lib/types/curriculumTypes";

// General Advanced Mathematical Foundations
// See docs/curriculum/02-general-advanced-foundations.md for the full plan.
// This course is a deliberate grab-bag: geometry, function literacy, complex
// numbers, sequences/series, mathematical language, and an informal preview
// of limits — everything Pre-Calculus and Calculus assume you already have
// that doesn't cleanly belong inside "algebra."

export const generalAdvancedFoundationsUnits: Unit[] = [
  {
    unitSlug: "geometry-essentials",
    unitTitle: "Geometry Essentials for Calculus",
    unitDescription:
      "The Pythagorean theorem, angle relationships, area/perimeter/volume formulas, circles, and coordinate geometry that calculus word problems assume you already know.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Geometry Essentials for Calculus",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "gaf-geometry-essentials-quiz-p1",
          topicTag: "trianglesAndThePythagoreanTheorem",
          promptText: "A right triangle has legs of length 8 and 15. Find the length of the hypotenuse.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "17",
          stepByStepExplanation: "c^2 = 8^2 + 15^2 = 64 + 225 = 289. c = sqrt(289) = 17.",
          difficultyLevel: 1,
        },
        {
          problemId: "gaf-geometry-essentials-quiz-p2",
          topicTag: "anglesAndParallelLines",
          promptText: "Two parallel lines are cut by a transversal. One angle measures 55 degrees. Find the measure of its co-interior (same-side interior) angle.",
          answerFormat: "multipleChoice",
          choices: ["55 degrees", "125 degrees", "35 degrees", "180 degrees"],
          correctAnswer: "125 degrees",
          stepByStepExplanation: "Co-interior angles are supplementary, so the answer is 180 - 55 = 125 degrees.",
          difficultyLevel: 2,
        },
        {
          problemId: "gaf-geometry-essentials-quiz-p3",
          topicTag: "areaAndPerimeter",
          promptText: "Find the area of a triangle with base 12 and height 5.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "30",
          stepByStepExplanation: "Area = (1/2)(base)(height) = (1/2)(12)(5) = 30 square units.",
          difficultyLevel: 2,
        },
        {
          problemId: "gaf-geometry-essentials-quiz-p4",
          topicTag: "areaAndPerimeter",
          promptText: "Find the volume of a cone with radius 3 and height 4. Give your answer in terms of pi.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "12pi",
          acceptableAnswerVariants: ["12π", "12 pi", "37.7"],
          stepByStepExplanation: "Volume = (1/3) pi r^2 h = (1/3) pi (9)(4) = (1/3) pi (36) = 12 pi.",
          difficultyLevel: 3,
        },
        {
          problemId: "gaf-geometry-essentials-quiz-p5",
          topicTag: "circlesAndArcs",
          promptText: "A circle has radius 8. Find the arc length subtended by a central angle of pi/2 radians. Give your answer in terms of pi.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "4pi",
          acceptableAnswerVariants: ["4π", "4 pi", "12.57"],
          stepByStepExplanation: "Arc length = r theta = 8 x (pi/2) = 4 pi.",
          difficultyLevel: 3,
        },
        {
          problemId: "gaf-geometry-essentials-quiz-p6",
          topicTag: "coordinateGeometry",
          promptText: "Find the distance between the points (1, 1) and (4, 5).",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "5",
          stepByStepExplanation: "d = sqrt[(4-1)^2 + (5-1)^2] = sqrt[9+16] = sqrt(25) = 5.",
          difficultyLevel: 2,
        },
        {
          problemId: "gaf-geometry-essentials-quiz-p7",
          topicTag: "coordinateGeometry",
          promptText: "Find the slope of the line through (2, 3) and (6, 11).",
          answerFormat: "multipleChoice",
          choices: ["2", "1/2", "4", "8"],
          correctAnswer: "2",
          stepByStepExplanation: "m = (11-3)/(6-2) = 8/4 = 2.",
          difficultyLevel: 2,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "the-pythagorean-theorem-and-distance",
        lessonTitle: "The Pythagorean Theorem and Distance",
        estimatedMinutes: 20,
        topicTag: "trianglesAndThePythagoreanTheorem",
        learningGoals: [
          "State the Pythagorean theorem and identify which side is the hypotenuse",
          "Find a missing side length of a right triangle",
          "Use the Pythagorean theorem to find the straight-line distance between two points",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Only for right triangles",
            bodyText:
              "The Pythagorean theorem relates the three sides of a right triangle — one with a 90-degree angle. The hypotenuse is the longest side, always the one directly across from the right angle, and it's the one that gets squared by itself on one side of the equation. The other two sides (the legs) are interchangeable — it doesn't matter which one you call 'a' and which you call 'b.'",
          },
          {
            blockType: "keyFormula",
            headingText: "The Pythagorean theorem",
            bodyText:
              "For a right triangle with legs a and b and hypotenuse c: a squared plus b squared equals c squared. Solve for whichever side you don't know.",
            mathExpression: "a^2 + b^2 = c^2",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: finding a leg",
            bodyText:
              "A right triangle has a hypotenuse of 13 and one leg of 5. Find the other leg. Set up the equation: 5^2 + b^2 = 13^2, so 25 + b^2 = 169. Subtract 25: b^2 = 144. Take the square root of both sides: b = 12 (only the positive root makes sense — a side length can't be negative).",
            mathExpression: "5^2 + b^2 = 13^2 \\implies b = 12",
          },
          {
            blockType: "explanation",
            headingText: "Why this matters for calculus",
            bodyText:
              "The distance formula between two points, which you'll see later in this unit, is just the Pythagorean theorem in disguise — the horizontal and vertical gaps between two points are the legs of a right triangle, and the straight-line distance between them is the hypotenuse. This same idea reappears in related-rates problems (a ladder sliding down a wall, a ship's distance from a lighthouse) throughout Calculus I.",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Squaring the hypotenuse into the wrong spot, or forgetting to take the square root at the end and leaving the answer as 144 instead of 12. Also watch out for applying this formula to a triangle that isn't a right triangle — it only works for right triangles.",
          },
        ],
        practiceProblems: [
          {
            problemId: "gaf-u1-l1-p1",
            topicTag: "trianglesAndThePythagoreanTheorem",
            promptText: "A right triangle has legs of length 5 and 12. Find the length of the hypotenuse.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "13",
            stepByStepExplanation: "c^2 = 5^2 + 12^2 = 25 + 144 = 169. c = sqrt(169) = 13.",
            difficultyLevel: 1,
          },
          {
            problemId: "gaf-u1-l1-p2",
            topicTag: "trianglesAndThePythagoreanTheorem",
            promptText: "A right triangle has a hypotenuse of 10 and one leg of 6. Find the length of the other leg.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "8",
            stepByStepExplanation: "6^2 + b^2 = 10^2, so 36 + b^2 = 100, b^2 = 64, b = 8.",
            difficultyLevel: 2,
          },
          {
            problemId: "gaf-u1-l1-p3",
            topicTag: "trianglesAndThePythagoreanTheorem",
            promptText: "Find the distance between the points (3, 2) and (7, 5).",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "5",
            stepByStepExplanation:
              "The horizontal gap is 7-3=4 and the vertical gap is 5-2=3. These are the legs of a right triangle, so the distance is sqrt(4^2+3^2) = sqrt(16+9) = sqrt(25) = 5.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Prealgebra 2e, Chapter 9: Math Models and Geometry",
            resourceUrl: "https://openstax.org/books/prealgebra-2e/pages/9-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Pythagorean theorem",
            resourceUrl: "https://www.khanacademy.org/math/geometry-home/geometry-right-triangles-topic",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "angle-relationships-and-parallel-lines",
        lessonTitle: "Angle Relationships and Parallel Lines",
        estimatedMinutes: 20,
        topicTag: "anglesAndParallelLines",
        learningGoals: [
          "Name the angle pairs formed when a transversal crosses two parallel lines",
          "Use those relationships to find unknown angle measures",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "A transversal creates eight angles",
            bodyText:
              "When a straight line (a transversal) crosses two parallel lines, it creates eight angles total — four at each intersection. Those eight angles only ever take on two different measures (one value and its supplement), and the relationships between them have names worth knowing.",
          },
          {
            blockType: "keyFormula",
            headingText: "The angle pair rules",
            bodyText:
              "Corresponding angles (same position at each intersection) are equal. Alternate interior angles (between the two parallel lines, on opposite sides of the transversal) are equal. Alternate exterior angles (outside the two parallel lines, opposite sides) are equal. Co-interior angles, also called same-side interior angles (between the parallel lines, same side of the transversal) are supplementary — they add up to 180 degrees.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Two parallel lines are cut by a transversal, and one angle measures 65 degrees. Its alternate interior angle also measures 65 degrees (alternate interior angles are equal). The co-interior angle on the same side as that 65-degree angle measures 180 - 65 = 115 degrees, since co-interior angles are supplementary.",
            mathExpression: "65^\\circ + 115^\\circ = 180^\\circ",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Mixing up 'alternate interior' (equal) with 'co-interior/same-side interior' (supplementary) — they sound similar but behave differently. When in doubt, sketch the two parallel lines and transversal and mark the angle positions rather than relying on memory alone.",
          },
        ],
        practiceProblems: [
          {
            problemId: "gaf-u1-l2-p1",
            topicTag: "anglesAndParallelLines",
            promptText: "Two parallel lines are cut by a transversal. One angle measures 72 degrees. Find its corresponding angle at the other intersection.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "72",
            stepByStepExplanation: "Corresponding angles are always equal, so the corresponding angle also measures 72 degrees.",
            difficultyLevel: 1,
          },
          {
            problemId: "gaf-u1-l2-p2",
            topicTag: "anglesAndParallelLines",
            promptText: "Two parallel lines are cut by a transversal. One angle measures 110 degrees. Find the measure of its co-interior (same-side interior) angle.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "70",
            stepByStepExplanation: "Co-interior angles are supplementary: 180 - 110 = 70 degrees.",
            difficultyLevel: 2,
          },
          {
            problemId: "gaf-u1-l2-p3",
            topicTag: "anglesAndParallelLines",
            promptText: "Two parallel lines are cut by a transversal. One angle measures 48 degrees. Find the measure of its alternate exterior angle.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "48",
            stepByStepExplanation: "Alternate exterior angles are always equal, so the alternate exterior angle also measures 48 degrees.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Khan Academy: Angles between intersecting and parallel lines",
            resourceUrl: "https://www.khanacademy.org/math/geometry-home/geometry-lines",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "area-and-perimeter-formulas",
        lessonTitle: "Area and Perimeter Formulas",
        estimatedMinutes: 20,
        topicTag: "areaAndPerimeter",
        learningGoals: [
          "Recall and apply area and perimeter formulas for rectangles, triangles, and trapezoids",
          "Distinguish perimeter (a length, one dimension) from area (a covering amount, two dimensions)",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Perimeter vs. area, in one sentence",
            bodyText:
              "Perimeter is the distance around the outside of a shape — you'd measure it with a tape measure, and it's reported in plain units like feet or meters. Area is how much flat space the shape covers — you'd measure it in square units, like square feet, because you're covering a surface, not walking a path.",
          },
          {
            blockType: "keyFormula",
            headingText: "Core formulas",
            bodyText:
              "Rectangle: Area = length x width, Perimeter = 2(length + width). Triangle: Area = one-half x base x height. Trapezoid: Area = one-half x (base one + base two) x height. In every case, 'height' means the perpendicular distance, not a slanted side.",
            mathExpression: "A_{\\text{rect}} = lw, \\quad A_{\\triangle} = \\dfrac{1}{2}bh, \\quad A_{\\text{trap}} = \\dfrac{1}{2}(b_1+b_2)h",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find the area of a trapezoid with parallel sides (bases) of 5 and 9, and a height of 4. Area = (1/2)(5 + 9)(4) = (1/2)(14)(4) = (1/2)(56) = 28 square units.",
            mathExpression: "A = \\dfrac{1}{2}(5+9)(4) = 28",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Using a triangle's slanted side as the 'height' in the area formula instead of the perpendicular height drawn straight down to the base. If the height isn't explicitly perpendicular to the base you're using, it's the wrong number to plug in.",
          },
        ],
        practiceProblems: [
          {
            problemId: "gaf-u1-l3-p1",
            topicTag: "areaAndPerimeter",
            promptText: "Find the area of a rectangle with length 9 and width 4.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "36",
            stepByStepExplanation: "Area = length x width = 9 x 4 = 36 square units.",
            difficultyLevel: 1,
          },
          {
            problemId: "gaf-u1-l3-p2",
            topicTag: "areaAndPerimeter",
            promptText: "Find the area of a triangle with base 10 and height 7.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "35",
            stepByStepExplanation: "Area = (1/2)(10)(7) = 35 square units.",
            difficultyLevel: 2,
          },
          {
            problemId: "gaf-u1-l3-p3",
            topicTag: "areaAndPerimeter",
            promptText: "Find the area of a trapezoid with bases 6 and 10, and height 5.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "40",
            stepByStepExplanation: "Area = (1/2)(6+10)(5) = (1/2)(16)(5) = 40 square units.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Prealgebra 2e, Chapter 9: Math Models and Geometry",
            resourceUrl: "https://openstax.org/books/prealgebra-2e/pages/9-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Area and perimeter",
            resourceUrl: "https://www.khanacademy.org/math/geometry-home/geometry-area-perimeter",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "surface-area-and-volume-formulas",
        lessonTitle: "Surface Area and Volume Formulas",
        estimatedMinutes: 25,
        topicTag: "areaAndPerimeter",
        learningGoals: [
          "Recall and apply volume and surface area formulas for cylinders, cones, and spheres",
          "Recognize these formulas as the exact toolkit related-rates and volume-of-revolution problems build on",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Why this toolkit matters later",
            bodyText:
              "In Calculus II, 'volume of revolution' problems compute the volume of a 3D shape by slicing it into infinitely many thin disks or shells and adding them up with an integral — but the disk and shell themselves are just cylinders and cones, and you check your integral setup against these exact formulas. In Calculus I, related-rates problems (like 'how fast is the water level rising in a cone-shaped tank') hand you these formulas and ask you to differentiate them with respect to time.",
          },
          {
            blockType: "keyFormula",
            headingText: "Volume and surface area formulas",
            bodyText:
              "Cylinder: Volume = pi r^2 h, Surface Area = 2 pi r^2 + 2 pi r h. Cone: Volume = one-third pi r^2 h. Sphere: Volume = four-thirds pi r^3, Surface Area = 4 pi r^2. Notice the cone's volume is exactly one-third of a cylinder with the same base and height — that '1/3' is easy to forget.",
            mathExpression: "V_{\\text{cyl}} = \\pi r^2 h, \\quad V_{\\text{cone}} = \\dfrac{1}{3}\\pi r^2 h, \\quad V_{\\text{sphere}} = \\dfrac{4}{3}\\pi r^3",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find the volume of a sphere with radius 3. Volume = (4/3) pi (3)^3 = (4/3) pi (27) = 36 pi cubic units (about 113.1 cubic units).",
            mathExpression: "V = \\dfrac{4}{3}\\pi(3)^3 = 36\\pi",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Forgetting the 1/3 factor on a cone or pyramid's volume (treating it like a cylinder), and forgetting that volume is always reported in cubic units while surface area is reported in square units.",
          },
        ],
        practiceProblems: [
          {
            problemId: "gaf-u1-l4-p1",
            topicTag: "areaAndPerimeter",
            promptText: "Find the volume of a cylinder with radius 2 and height 5. Give your answer in terms of pi.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "20pi",
            acceptableAnswerVariants: ["20π", "20 pi", "62.8"],
            stepByStepExplanation: "Volume = pi r^2 h = pi (2^2)(5) = pi (4)(5) = 20 pi.",
            difficultyLevel: 2,
          },
          {
            problemId: "gaf-u1-l4-p2",
            topicTag: "areaAndPerimeter",
            promptText: "Find the volume of a sphere with radius 3. Give your answer in terms of pi.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "36pi",
            acceptableAnswerVariants: ["36π", "36 pi", "113.1"],
            stepByStepExplanation: "Volume = (4/3) pi r^3 = (4/3) pi (27) = 36 pi.",
            difficultyLevel: 3,
          },
          {
            problemId: "gaf-u1-l4-p3",
            topicTag: "areaAndPerimeter",
            promptText: "Find the volume of a cone with radius 3 and height 8. Give your answer in terms of pi.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "24pi",
            acceptableAnswerVariants: ["24π", "24 pi", "75.4"],
            stepByStepExplanation: "Volume = (1/3) pi r^2 h = (1/3) pi (9)(8) = (1/3) pi (72) = 24 pi.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Prealgebra 2e, Chapter 9: Math Models and Geometry",
            resourceUrl: "https://openstax.org/books/prealgebra-2e/pages/9-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Volume and surface area",
            resourceUrl: "https://www.khanacademy.org/math/geometry-home/geometry-volume-surface-area",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "circles-area-circumference-and-arc-length",
        lessonTitle: "Circles: Area, Circumference, and Arc Length",
        estimatedMinutes: 20,
        topicTag: "circlesAndArcs",
        learningGoals: [
          "Find the area and circumference of a circle",
          "Find arc length using a central angle measured in radians",
        ],
        contentBlocks: [
          {
            blockType: "keyFormula",
            headingText: "Area and circumference",
            bodyText:
              "For a circle with radius r: Area = pi r^2, Circumference = 2 pi r (or, equivalently, pi times the diameter).",
            mathExpression: "A = \\pi r^2, \\quad C = 2\\pi r",
          },
          {
            blockType: "explanation",
            headingText: "A radian, previewed",
            bodyText:
              "A radian is defined so that an arc exactly as long as the radius sweeps out an angle of 1 radian. That's why the arc length formula is so clean when the angle is in radians: arc length = radius times angle. This gets a full formal treatment (including converting between degrees and radians) in Pre-Calculus, but the core idea — that radians are a way of measuring angles by 'how much arc they sweep out' — is worth having early.",
          },
          {
            blockType: "keyFormula",
            headingText: "Arc length and sector area",
            bodyText:
              "For a central angle theta measured in radians: arc length s = r theta, and sector area = one-half r^2 theta. These only work directly when theta is in radians — if you're given degrees, convert first by multiplying by pi/180.",
            mathExpression: "s = r\\theta, \\quad A_{\\text{sector}} = \\dfrac{1}{2}r^2\\theta",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "A circle has radius 6. Find the arc length subtended by a central angle of pi/3 radians. Arc length = r theta = 6 x (pi/3) = 2 pi (about 6.28 units).",
            mathExpression: "s = 6 \\cdot \\dfrac{\\pi}{3} = 2\\pi",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Plugging an angle given in degrees straight into s = r theta without converting to radians first — this formula only works with radians, and using degrees directly gives a wildly wrong answer.",
          },
        ],
        practiceProblems: [
          {
            problemId: "gaf-u1-l5-p1",
            topicTag: "circlesAndArcs",
            promptText: "Find the area of a circle with radius 5. Give your answer in terms of pi.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "25pi",
            acceptableAnswerVariants: ["25π", "25 pi", "78.5"],
            stepByStepExplanation: "Area = pi r^2 = pi (5^2) = 25 pi.",
            difficultyLevel: 1,
          },
          {
            problemId: "gaf-u1-l5-p2",
            topicTag: "circlesAndArcs",
            promptText: "Find the circumference of a circle with radius 4. Give your answer in terms of pi.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "8pi",
            acceptableAnswerVariants: ["8π", "8 pi", "25.1"],
            stepByStepExplanation: "Circumference = 2 pi r = 2 pi (4) = 8 pi.",
            difficultyLevel: 1,
          },
          {
            problemId: "gaf-u1-l5-p3",
            topicTag: "circlesAndArcs",
            promptText: "A circle has radius 10. Find the arc length subtended by a central angle of pi/4 radians. Give your answer in terms of pi.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "2.5pi",
            acceptableAnswerVariants: ["2.5π", "5pi/2", "5π/2", "7.85"],
            stepByStepExplanation: "Arc length = r theta = 10 x (pi/4) = 10pi/4 = 2.5 pi.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Khan Academy: Circles, arc length, and sectors",
            resourceUrl: "https://www.khanacademy.org/math/geometry-home/geometry-circles",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "coordinate-geometry",
        lessonTitle: "Coordinate Geometry",
        estimatedMinutes: 20,
        topicTag: "coordinateGeometry",
        learningGoals: [
          "Find the distance between two points using the distance formula",
          "Find the midpoint between two points",
          "Find the slope of the line through two points",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Three formulas, one coordinate plane",
            bodyText:
              "Given two points, there are three natural questions to ask: how far apart are they, what point is exactly between them, and how steeply does the line through them rise or fall. Each has its own formula, and all three get used constantly once calculus starts asking questions about curves and rates of change.",
          },
          {
            blockType: "keyFormula",
            headingText: "Distance, midpoint, and slope formulas",
            bodyText:
              "Between two points (x1, y1) and (x2, y2): Distance = sqrt[(x2-x1)^2 + (y2-y1)^2] (this is the Pythagorean theorem restated with coordinates). Midpoint = ((x1+x2)/2, (y1+y2)/2) — just the average of the x's and the average of the y's. Slope = (y2-y1)/(x2-x1).",
            mathExpression: "d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}, \\quad M=\\left(\\dfrac{x_1+x_2}{2},\\dfrac{y_1+y_2}{2}\\right), \\quad m=\\dfrac{y_2-y_1}{x_2-x_1}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "For the points (1, 2) and (4, 6): Distance = sqrt[(4-1)^2+(6-2)^2] = sqrt[9+16] = sqrt(25) = 5. Midpoint = ((1+4)/2, (2+6)/2) = (2.5, 4). Slope = (6-2)/(4-1) = 4/3.",
            mathExpression: "d=5, \\quad M=(2.5,4), \\quad m=\\dfrac{4}{3}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Mismatching the order of subtraction between the slope's numerator and denominator — if you compute y2-y1 on top, you must use x2-x1 (the same point order) on the bottom, or the sign of the slope comes out flipped.",
          },
        ],
        practiceProblems: [
          {
            problemId: "gaf-u1-l6-p1",
            topicTag: "coordinateGeometry",
            promptText: "Find the distance between (-2, 3) and (2, 0).",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "5",
            stepByStepExplanation: "d = sqrt[(2-(-2))^2 + (0-3)^2] = sqrt[16+9] = sqrt(25) = 5.",
            difficultyLevel: 2,
          },
          {
            problemId: "gaf-u1-l6-p2",
            topicTag: "coordinateGeometry",
            promptText: "Find the midpoint of the segment connecting (2, -4) and (8, 10).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(5,3)",
            acceptableAnswerVariants: ["(5, 3)"],
            stepByStepExplanation: "Midpoint = ((2+8)/2, (-4+10)/2) = (10/2, 6/2) = (5, 3).",
            difficultyLevel: 2,
          },
          {
            problemId: "gaf-u1-l6-p3",
            topicTag: "coordinateGeometry",
            promptText: "Find the slope of the line through (3, -1) and (7, 9).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "5/2",
            acceptableAnswerVariants: ["2.5"],
            stepByStepExplanation: "m = (9-(-1))/(7-3) = 10/4 = 5/2.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Khan Academy: Coordinate geometry (distance, midpoint, slope)",
            resourceUrl: "https://www.khanacademy.org/math/geometry-home/analytic-geometry-topic",
            resourceType: "interactivePractice",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "advanced-function-concepts",
    unitTitle: "Advanced Function Concepts",
    unitDescription:
      "Piecewise functions, polynomial end behavior, rational function asymptotes, and even/odd symmetry — the function-literacy skills limits and curve sketching build on directly.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Advanced Function Concepts",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "gaf-advanced-function-concepts-quiz-p1",
          topicTag: "piecewiseFunctions",
          promptText: "Let f(x) = 2x - 1 for x < 0, and f(x) = x^2 + 1 for x >= 0. Find f(-3).",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "-7",
          stepByStepExplanation: "Since -3 < 0, use the first piece: f(-3) = 2(-3)-1 = -6-1 = -7.",
          difficultyLevel: 2,
        },
        {
          problemId: "gaf-advanced-function-concepts-quiz-p2",
          topicTag: "piecewiseFunctions",
          promptText: "Using the same f as above (f(x)=2x-1 for x<0, f(x)=x^2+1 for x>=0), find f(0).",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "1",
          stepByStepExplanation: "Since 0 >= 0, use the second piece: f(0) = 0^2 + 1 = 1.",
          difficultyLevel: 1,
        },
        {
          problemId: "gaf-advanced-function-concepts-quiz-p3",
          topicTag: "polynomialEndBehavior",
          promptText: "Describe the end behavior of f(x) = -3x^4 + 2x - 5 as x approaches positive and negative infinity.",
          answerFormat: "multipleChoice",
          choices: [
            "Both ends approach negative infinity",
            "Both ends approach positive infinity",
            "Left end approaches negative infinity, right end approaches positive infinity",
            "Left end approaches positive infinity, right end approaches negative infinity",
          ],
          correctAnswer: "Both ends approach negative infinity",
          stepByStepExplanation: "Degree 4 is even, and the leading coefficient -3 is negative, so both ends fall toward negative infinity.",
          difficultyLevel: 2,
        },
        {
          problemId: "gaf-advanced-function-concepts-quiz-p4",
          topicTag: "rationalFunctionAsymptotes",
          promptText: "Find the vertical asymptote of f(x) = 4 / (x + 7).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "x=-7",
          acceptableAnswerVariants: ["x = -7"],
          stepByStepExplanation: "Set the denominator to zero: x + 7 = 0, so x = -7.",
          difficultyLevel: 1,
        },
        {
          problemId: "gaf-advanced-function-concepts-quiz-p5",
          topicTag: "rationalFunctionAsymptotes",
          promptText: "Find the horizontal asymptote of f(x) = (3x^2 + 1) / (x^2 - 4).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "y=3",
          acceptableAnswerVariants: ["y = 3"],
          stepByStepExplanation: "The numerator and denominator both have degree 2, so the horizontal asymptote is the ratio of leading coefficients: 3/1 = 3, giving y = 3.",
          difficultyLevel: 2,
        },
        {
          problemId: "gaf-advanced-function-concepts-quiz-p6",
          topicTag: "rationalFunctionAsymptotes",
          promptText: "Find the slant asymptote of f(x) = (x^2 + 5x + 2) / (x + 1).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "y=x+4",
          acceptableAnswerVariants: ["y = x + 4"],
          stepByStepExplanation:
            "Divide x^2+5x+2 by x+1: x^2 ÷ x = x, x(x+1)=x^2+x, subtracting leaves 4x+2. Then 4x ÷ x = 4, 4(x+1)=4x+4, subtracting leaves remainder -2. Quotient is x+4, so the slant asymptote is y = x+4.",
          difficultyLevel: 4,
        },
        {
          problemId: "gaf-advanced-function-concepts-quiz-p7",
          topicTag: "evenAndOddFunctions",
          promptText: "Is g(x) = x^4 - 3x^2 even, odd, or neither?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "even",
          stepByStepExplanation: "g(-x) = (-x)^4 - 3(-x)^2 = x^4 - 3x^2 = g(x), so g is even.",
          difficultyLevel: 2,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "piecewise-functions",
        lessonTitle: "Piecewise Functions",
        estimatedMinutes: 25,
        topicTag: "piecewiseFunctions",
        learningGoals: [
          "Evaluate a piecewise-defined function at a given input",
          "Graph a piecewise function by graphing each piece only over its own domain",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "One function, several rules",
            bodyText:
              "A piecewise function uses a different formula depending on which interval the input falls into. To evaluate it at a specific x-value, the first job is always to figure out which piece's condition that x-value satisfies — then use only that piece's formula. To graph it, draw each piece only over the x-values where its condition is true, and pay close attention to whether an endpoint is included (a filled dot) or excluded (an open dot).",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Let f(x) = 3x + 2 when x < 1, and f(x) = x^2 - 1 when x >= 1. Find f(-2) and f(1). For f(-2): since -2 < 1, use the first piece: f(-2) = 3(-2)+2 = -4. For f(1): since 1 >= 1, use the second piece: f(1) = 1^2 - 1 = 0.",
            mathExpression: "f(-2) = -4, \\quad f(1) = 0",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Using the wrong piece at a boundary value — always check the inequality carefully (is it < or <=?) to see which piece 'owns' that exact boundary point, since a piecewise function can only use one formula per input, never both.",
          },
        ],
        practiceProblems: [
          {
            problemId: "gaf-u2-l1-p1",
            topicTag: "piecewiseFunctions",
            promptText: "Let f(x) = 3x + 2 for x < 1, and f(x) = x^2 - 1 for x >= 1. Find f(-2).",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "-4",
            stepByStepExplanation: "Since -2 < 1, use the first piece: f(-2) = 3(-2)+2 = -6+2 = -4.",
            difficultyLevel: 2,
          },
          {
            problemId: "gaf-u2-l1-p2",
            topicTag: "piecewiseFunctions",
            promptText: "Using the same f as above (f(x) = 3x+2 for x<1, f(x)=x^2-1 for x>=1), find f(1).",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "0",
            stepByStepExplanation: "Since 1 >= 1, use the second piece: f(1) = 1^2 - 1 = 0.",
            difficultyLevel: 2,
          },
          {
            problemId: "gaf-u2-l1-p3",
            topicTag: "piecewiseFunctions",
            promptText: "Using the same f as above, find f(4).",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "15",
            stepByStepExplanation: "Since 4 >= 1, use the second piece: f(4) = 4^2 - 1 = 16-1 = 15.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Graphing and Functions",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/Alg/GraphingFunctions.aspx",
            resourceType: "referenceSheet",
          },
          {
            resourceTitle: "Khan Academy: Piecewise functions",
            resourceUrl: "https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:functions",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "end-behavior-of-polynomials",
        lessonTitle: "End Behavior of Polynomials",
        estimatedMinutes: 20,
        topicTag: "polynomialEndBehavior",
        learningGoals: [
          "Predict a polynomial's end behavior from its degree (even or odd) and the sign of its leading coefficient",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Only the leading term matters",
            bodyText:
              "Far out to the left or right, a polynomial behaves almost exactly like its highest-degree term — every smaller term becomes negligible by comparison. So end behavior only depends on two things: is the degree even or odd, and is the leading coefficient positive or negative.",
          },
          {
            blockType: "keyFormula",
            headingText: "The four cases",
            bodyText:
              "Even degree, positive leading coefficient: both ends go up (approach positive infinity). Even degree, negative leading coefficient: both ends go down. Odd degree, positive leading coefficient: left end goes down, right end goes up. Odd degree, negative leading coefficient: left end goes up, right end goes down.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Describe the end behavior of f(x) = -2x^3 + 5x^2 - 1. The degree is 3 (odd) and the leading coefficient is -2 (negative). By the odd-negative case: as x approaches negative infinity, f(x) approaches positive infinity; as x approaches positive infinity, f(x) approaches negative infinity.",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Judging end behavior from the sign of the leading coefficient alone, without also checking whether the degree is even or odd — both pieces of information are required, and skipping one gives a coin-flip's chance of being right.",
          },
        ],
        practiceProblems: [
          {
            problemId: "gaf-u2-l2-p1",
            topicTag: "polynomialEndBehavior",
            promptText: "Describe the end behavior of f(x) = 3x^4 - x + 7 as x approaches positive and negative infinity.",
            answerFormat: "multipleChoice",
            choices: [
              "Both ends approach positive infinity",
              "Both ends approach negative infinity",
              "Left end approaches negative infinity, right end approaches positive infinity",
              "Left end approaches positive infinity, right end approaches negative infinity",
            ],
            correctAnswer: "Both ends approach positive infinity",
            stepByStepExplanation: "Degree 4 is even, and the leading coefficient 3 is positive, so both ends rise toward positive infinity.",
            difficultyLevel: 2,
          },
          {
            problemId: "gaf-u2-l2-p2",
            topicTag: "polynomialEndBehavior",
            promptText: "Describe the end behavior of f(x) = -x^5 + 2x^2 as x approaches positive and negative infinity.",
            answerFormat: "multipleChoice",
            choices: [
              "Left end approaches positive infinity, right end approaches negative infinity",
              "Left end approaches negative infinity, right end approaches positive infinity",
              "Both ends approach positive infinity",
              "Both ends approach negative infinity",
            ],
            correctAnswer: "Left end approaches positive infinity, right end approaches negative infinity",
            stepByStepExplanation:
              "Degree 5 is odd, and the leading coefficient -1 is negative. For odd-negative, the left end rises to positive infinity and the right end falls to negative infinity.",
            difficultyLevel: 3,
          },
          {
            problemId: "gaf-u2-l2-p3",
            topicTag: "polynomialEndBehavior",
            promptText: "Describe the end behavior of f(x) = -4x^2 + 3x as x approaches positive and negative infinity.",
            answerFormat: "multipleChoice",
            choices: [
              "Both ends approach negative infinity",
              "Both ends approach positive infinity",
              "Left end approaches negative infinity, right end approaches positive infinity",
              "Left end approaches positive infinity, right end approaches negative infinity",
            ],
            correctAnswer: "Both ends approach negative infinity",
            stepByStepExplanation: "Degree 2 is even, and the leading coefficient -4 is negative, so both ends fall toward negative infinity.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Precalculus 2e, Chapter 5: Polynomial and Rational Functions",
            resourceUrl: "https://openstax.org/books/precalculus-2e/pages/5-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Paul's Online Math Notes: Graphing Polynomials",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/Alg/GraphingPolynomials.aspx",
            resourceType: "referenceSheet",
          },
        ],
      },
      {
        lessonSlug: "vertical-and-horizontal-asymptotes-of-rational-functions",
        lessonTitle: "Vertical and Horizontal Asymptotes of Rational Functions",
        estimatedMinutes: 25,
        topicTag: "rationalFunctionAsymptotes",
        learningGoals: [
          "Find the vertical asymptotes of a rational function",
          "Determine a rational function's horizontal asymptote by comparing the degrees of numerator and denominator",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Vertical asymptotes come from the denominator",
            bodyText:
              "A rational function is a fraction of two polynomials. Wherever the denominator equals zero (after any common factors with the numerator have been cancelled), the function has a vertical asymptote — the graph shoots up or down without bound as x approaches that value. This connects straight back to 'excluded values' from Algebra's rational expressions unit; those excluded values are exactly the candidates for vertical asymptotes.",
          },
          {
            blockType: "keyFormula",
            headingText: "Finding the horizontal asymptote by comparing degrees",
            bodyText:
              "Compare the degree of the numerator to the degree of the denominator. If numerator's degree is less than denominator's: horizontal asymptote is y = 0. If the degrees are equal: horizontal asymptote is y = (ratio of the leading coefficients). If numerator's degree is greater than denominator's: there is no horizontal asymptote (there may be a slant asymptote instead — next lesson).",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "For f(x) = (2x^2+3)/(x^2-4): Vertical asymptotes: set the denominator to zero, x^2-4=0, so x=2 and x=-2 (neither cancels with the numerator, so both are genuine asymptotes). Horizontal asymptote: both numerator and denominator have degree 2, so the asymptote is y = 2/1 = 2 (the ratio of leading coefficients).",
            mathExpression: "x=2,\\ x=-2 \\quad \\text{(vertical)}, \\qquad y=2 \\quad \\text{(horizontal)}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Setting the denominator to zero without first checking whether that same factor also appears in the numerator — if it cancels out, that x-value is a hole in the graph, not a vertical asymptote.",
          },
        ],
        practiceProblems: [
          {
            problemId: "gaf-u2-l3-p1",
            topicTag: "rationalFunctionAsymptotes",
            promptText: "Find the vertical asymptote of f(x) = 3 / (x - 5).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "x=5",
            acceptableAnswerVariants: ["x = 5"],
            stepByStepExplanation: "Set the denominator to zero: x - 5 = 0, so x = 5.",
            difficultyLevel: 1,
          },
          {
            problemId: "gaf-u2-l3-p2",
            topicTag: "rationalFunctionAsymptotes",
            promptText: "Find the horizontal asymptote of f(x) = (x^2 - 1) / (x^2 - 9).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "y=1",
            acceptableAnswerVariants: ["y = 1"],
            stepByStepExplanation: "The numerator and denominator both have degree 2, so the horizontal asymptote is the ratio of leading coefficients: 1/1 = 1, giving y = 1.",
            difficultyLevel: 2,
          },
          {
            problemId: "gaf-u2-l3-p3",
            topicTag: "rationalFunctionAsymptotes",
            promptText: "Find the horizontal asymptote of f(x) = 5x / (x^2 + 1).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "y=0",
            acceptableAnswerVariants: ["y = 0"],
            stepByStepExplanation: "The numerator's degree (1) is less than the denominator's degree (2), so the horizontal asymptote is y = 0.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Precalculus 2e, Chapter 5: Polynomial and Rational Functions",
            resourceUrl: "https://openstax.org/books/precalculus-2e/pages/5-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Rational functions",
            resourceUrl: "https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:rational-functions",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "slant-asymptotes",
        lessonTitle: "Slant Asymptotes",
        estimatedMinutes: 15,
        topicTag: "rationalFunctionAsymptotes",
        learningGoals: [
          "Recognize when a rational function has a slant (oblique) asymptote instead of a horizontal one",
          "Find a slant asymptote using polynomial long division",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "When the numerator outgrows the denominator by exactly one degree",
            bodyText:
              "If the numerator's degree is exactly one more than the denominator's degree, there's no horizontal asymptote — instead, the graph approaches a slanted line called a slant (or oblique) asymptote. You find that line by doing polynomial long division and keeping only the quotient; the remainder shrinks to nothing as x gets large, so it doesn't affect the asymptote.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find the slant asymptote of f(x) = (x^2 + 2x - 1)/(x - 3). Divide x^2+2x-1 by x-3: x^2 ÷ x = x, and x(x-3) = x^2-3x; subtracting leaves 5x-1. Then 5x ÷ x = 5, and 5(x-3) = 5x-15; subtracting leaves a remainder of 14. So the quotient is x + 5 (remainder 14, which we drop). The slant asymptote is y = x + 5.",
            mathExpression: "\\dfrac{x^2+2x-1}{x-3} = (x+5) + \\dfrac{14}{x-3} \\implies y = x+5",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Trying to find a slant asymptote when the numerator's degree is two or more higher than the denominator's — a straight-line slant asymptote only exists when the degree difference is exactly one. A bigger gap gives a curved asymptote instead, which is beyond this lesson's scope.",
          },
        ],
        practiceProblems: [
          {
            problemId: "gaf-u2-l4-p1",
            topicTag: "rationalFunctionAsymptotes",
            promptText: "Find the slant asymptote of f(x) = (x^2 - 1) / (x + 2).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "y=x-2",
            acceptableAnswerVariants: ["y = x - 2"],
            stepByStepExplanation:
              "Divide x^2-1 by x+2: x^2 ÷ x = x, x(x+2)=x^2+2x, subtracting leaves -2x-1. Then -2x ÷ x = -2, -2(x+2)=-2x-4, subtracting leaves remainder 3. Quotient is x-2, so the slant asymptote is y = x-2.",
            difficultyLevel: 4,
          },
          {
            problemId: "gaf-u2-l4-p2",
            topicTag: "rationalFunctionAsymptotes",
            promptText: "Find the slant asymptote of f(x) = (x^2 + 3x + 5) / (x + 1).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "y=x+2",
            acceptableAnswerVariants: ["y = x + 2"],
            stepByStepExplanation:
              "Divide x^2+3x+5 by x+1: x^2 ÷ x = x, x(x+1)=x^2+x, subtracting leaves 2x+5. Then 2x ÷ x = 2, 2(x+1)=2x+2, subtracting leaves remainder 3. Quotient is x+2, so the slant asymptote is y = x+2.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes: Rational Functions",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/Alg/RationalFunctions.aspx",
            resourceType: "referenceSheet",
          },
        ],
      },
      {
        lessonSlug: "even-odd-and-neither-function-symmetry",
        lessonTitle: "Even, Odd, and Neither: Function Symmetry",
        estimatedMinutes: 15,
        topicTag: "evenAndOddFunctions",
        learningGoals: [
          "Test a function algebraically to classify it as even, odd, or neither",
          "Connect even/odd symmetry to graphical symmetry about the y-axis or the origin",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "What the test is really asking",
            bodyText:
              "The test asks: what happens if I replace every x in the function with -x? If the formula comes back completely unchanged, the function is even, and its graph is a mirror image of itself across the y-axis. If the formula comes back exactly negated (every term's sign flipped), the function is odd, and its graph has 180-degree rotational symmetry about the origin. Most functions are neither.",
          },
          {
            blockType: "keyFormula",
            headingText: "The algebraic test",
            bodyText:
              "A function is even if f(-x) = f(x) for every x in the domain. A function is odd if f(-x) = -f(x) for every x in the domain. If neither equation holds, the function is neither.",
            mathExpression: "\\text{even: } f(-x)=f(x) \\qquad \\text{odd: } f(-x)=-f(x)",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Classify f(x) = x^4 - 3x^2 + 2. Replace x with -x: f(-x) = (-x)^4 - 3(-x)^2 + 2 = x^4 - 3x^2 + 2, which is identical to f(x). So f is even. Now classify g(x) = x^3 - 4x. g(-x) = (-x)^3 - 4(-x) = -x^3 + 4x = -(x^3 - 4x) = -g(x). So g is odd.",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Assuming every function must be classifiable as even or odd — most functions (like f(x) = x^2 + x) are neither, and it's a perfectly valid answer.",
          },
        ],
        practiceProblems: [
          {
            problemId: "gaf-u2-l5-p1",
            topicTag: "evenAndOddFunctions",
            promptText: "Is f(x) = x^2 + 1 even, odd, or neither?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "even",
            stepByStepExplanation: "f(-x) = (-x)^2 + 1 = x^2 + 1 = f(x), so f is even.",
            difficultyLevel: 1,
          },
          {
            problemId: "gaf-u2-l5-p2",
            topicTag: "evenAndOddFunctions",
            promptText: "Is f(x) = x^3 + x even, odd, or neither?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "odd",
            stepByStepExplanation: "f(-x) = (-x)^3 + (-x) = -x^3 - x = -(x^3+x) = -f(x), so f is odd.",
            difficultyLevel: 2,
          },
          {
            problemId: "gaf-u2-l5-p3",
            topicTag: "evenAndOddFunctions",
            promptText: "Is f(x) = x^2 + x even, odd, or neither?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "neither",
            stepByStepExplanation:
              "f(-x) = (-x)^2 + (-x) = x^2 - x. This is not equal to f(x) = x^2+x, and it's not equal to -f(x) = -x^2-x either, so f is neither even nor odd.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Khan Academy: Symmetry of functions",
            resourceUrl: "https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:functions",
            resourceType: "interactivePractice",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "complex-numbers",
    unitTitle: "Complex Numbers",
    unitDescription:
      "Arithmetic with imaginary and complex numbers, complex solutions to quadratics, and the complex plane.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Complex Numbers",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "gaf-complex-numbers-quiz-p1",
          topicTag: "complexNumberArithmetic",
          promptText: "Simplify i^15.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "-i",
          stepByStepExplanation: "15 divided by 4 leaves a remainder of 3, so i^15 = i^3 = -i.",
          difficultyLevel: 2,
        },
        {
          problemId: "gaf-complex-numbers-quiz-p2",
          topicTag: "complexNumberArithmetic",
          promptText: "Subtract: (5 + 2i) - (3 - 6i).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "2+8i",
          acceptableAnswerVariants: ["2 + 8i"],
          stepByStepExplanation: "Distribute the subtraction: 5+2i-3+6i. Combine real parts: 5-3=2. Combine imaginary parts: 2i+6i=8i. Result: 2+8i.",
          difficultyLevel: 1,
        },
        {
          problemId: "gaf-complex-numbers-quiz-p3",
          topicTag: "complexNumberArithmetic",
          promptText: "Multiply: (2 + 3i)(4 - i).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "11+10i",
          acceptableAnswerVariants: ["11 + 10i"],
          stepByStepExplanation: "FOIL: 8-2i+12i-3i^2 = 8+10i-3(-1) = 8+10i+3 = 11+10i.",
          difficultyLevel: 3,
        },
        {
          problemId: "gaf-complex-numbers-quiz-p4",
          topicTag: "complexNumberArithmetic",
          promptText: "Divide: (2 + i) / (3 - i).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "1/2+1/2i",
          acceptableAnswerVariants: ["0.5+0.5i", "1/2 + i/2", "0.5 + 0.5i"],
          stepByStepExplanation:
            "Multiply top and bottom by the conjugate 3+i: numerator (2+i)(3+i)=6+2i+3i+i^2=6+5i-1=5+5i; denominator (3-i)(3+i)=9-i^2=9+1=10. Result: (5+5i)/10 = 1/2 + (1/2)i.",
          difficultyLevel: 4,
        },
        {
          problemId: "gaf-complex-numbers-quiz-p5",
          topicTag: "complexSolutionsToQuadratics",
          promptText: "Solve x^2 + 2x + 10 = 0. Give both solutions separated by a comma.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "-1+3i,-1-3i",
          acceptableAnswerVariants: ["-1-3i,-1+3i", "-1 + 3i, -1 - 3i"],
          stepByStepExplanation: "a=1,b=2,c=10. Discriminant = 4-40 = -36. sqrt(-36)=6i. x = (-2±6i)/2 = -1±3i.",
          difficultyLevel: 3,
        },
        {
          problemId: "gaf-complex-numbers-quiz-p6",
          topicTag: "complexNumberArithmetic",
          promptText: "Find the modulus of -3 + 4i.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "5",
          stepByStepExplanation: "|-3+4i| = sqrt((-3)^2+4^2) = sqrt(9+16) = sqrt(25) = 5.",
          difficultyLevel: 1,
        },
        {
          problemId: "gaf-complex-numbers-quiz-p7",
          topicTag: "complexSolutionsToQuadratics",
          promptText: "What kind of roots does x^2 - 4x + 8 = 0 have?",
          answerFormat: "multipleChoice",
          choices: ["Two real roots", "One repeated real root", "Two complex roots", "No roots at all"],
          correctAnswer: "Two complex roots",
          stepByStepExplanation: "Discriminant = (-4)^2 - 4(1)(8) = 16-32 = -16, which is negative, so the equation has two complex (non-real) roots.",
          difficultyLevel: 2,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "introduction-to-imaginary-and-complex-numbers",
        lessonTitle: "Introduction to Imaginary and Complex Numbers",
        estimatedMinutes: 20,
        topicTag: "complexNumberArithmetic",
        learningGoals: [
          "Define i and simplify powers of i",
          "Identify the real part and imaginary part of a complex number",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "A number whose square is negative",
            bodyText:
              "No real number squares to a negative value, so mathematicians defined a new number, i, specifically so that i squared equals -1. A complex number has the form a + bi, where a is the 'real part' and b is the 'imaginary part' (both a and b are ordinary real numbers — it's the standalone i sitting next to b that makes the whole thing complex).",
          },
          {
            blockType: "keyFormula",
            headingText: "Powers of i cycle every 4",
            bodyText:
              "i^1 = i, i^2 = -1, i^3 = -i, i^4 = 1, and then the pattern repeats: i^5 = i, i^6 = -1, and so on. To simplify i raised to any large power, divide the exponent by 4 and use the remainder — i to that remainder gives the same answer.",
            mathExpression: "i^1=i,\\ i^2=-1,\\ i^3=-i,\\ i^4=1",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Simplify i^23. Divide 23 by 4: 23 = 4(5) + 3, so the remainder is 3. That means i^23 = i^3 = -i.",
            mathExpression: "i^{23} = i^3 = -i",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Writing i^2 = 1 instead of i^2 = -1. This is the single most important fact about i, and it's the source of every sign flip in complex-number arithmetic — get it wrong and everything downstream breaks.",
          },
        ],
        practiceProblems: [
          {
            problemId: "gaf-u3-l1-p1",
            topicTag: "complexNumberArithmetic",
            promptText: "Simplify i^7.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "-i",
            stepByStepExplanation: "7 divided by 4 leaves a remainder of 3, so i^7 = i^3 = -i.",
            difficultyLevel: 2,
          },
          {
            problemId: "gaf-u3-l1-p2",
            topicTag: "complexNumberArithmetic",
            promptText: "Simplify i^10.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "-1",
            stepByStepExplanation: "10 divided by 4 leaves a remainder of 2, so i^10 = i^2 = -1.",
            difficultyLevel: 2,
          },
          {
            problemId: "gaf-u3-l1-p3",
            topicTag: "complexNumberArithmetic",
            promptText: "Simplify i^100.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "1",
            stepByStepExplanation: "100 divided by 4 leaves a remainder of 0 (100 = 4 x 25 exactly), so i^100 = i^4 = 1.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Algebra and Trigonometry 2e, Section 2.4: Complex Numbers",
            resourceUrl: "https://openstax.org/books/algebra-and-trigonometry-2e/pages/2-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Complex numbers",
            resourceUrl: "https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:complex",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "arithmetic-with-complex-numbers",
        lessonTitle: "Arithmetic with Complex Numbers",
        estimatedMinutes: 25,
        topicTag: "complexNumberArithmetic",
        learningGoals: [
          "Add and subtract complex numbers",
          "Multiply complex numbers",
          "Divide complex numbers using the conjugate",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Add and subtract like normal, multiply carefully",
            bodyText:
              "To add or subtract complex numbers, combine the real parts together and the imaginary parts together, treating i like a variable you're collecting like terms for. To multiply, distribute (FOIL) exactly like multiplying two binomials — but simplify any i^2 that appears to -1 as a final step.",
          },
          {
            blockType: "keyFormula",
            headingText: "Dividing using the conjugate",
            bodyText:
              "The conjugate of a + bi is a - bi. Multiplying a complex number by its conjugate always produces a real number: (a+bi)(a-bi) = a^2 + b^2. To divide by a complex number, multiply both the numerator and denominator by the denominator's conjugate — this clears the i out of the denominator.",
            mathExpression: "(a+bi)(a-bi) = a^2+b^2",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: multiplying",
            bodyText:
              "Multiply (3+2i)(1-4i). FOIL: 3(1) + 3(-4i) + 2i(1) + 2i(-4i) = 3 - 12i + 2i - 8i^2. Since i^2=-1, -8i^2 = 8. Combine: 3 + 8 - 12i + 2i = 11 - 10i.",
            mathExpression: "(3+2i)(1-4i) = 11-10i",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: dividing",
            bodyText:
              "Divide (1+3i)/(1-i). Multiply top and bottom by the conjugate of the denominator, (1+i): numerator becomes (1+3i)(1+i) = 1+i+3i+3i^2 = 1+4i-3 = -2+4i. Denominator becomes (1-i)(1+i) = 1-i^2 = 1+1 = 2. So the result is (-2+4i)/2 = -1+2i.",
            mathExpression: "\\dfrac{1+3i}{1-i} = -1+2i",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Multiplying only the numerator by the conjugate and forgetting to multiply the denominator too (or vice versa) — the conjugate trick only works because you're multiplying by a form of 1, so both top and bottom need the same factor.",
          },
        ],
        practiceProblems: [
          {
            problemId: "gaf-u3-l2-p1",
            topicTag: "complexNumberArithmetic",
            promptText: "Add: (2 + 3i) + (5 - 7i).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "7-4i",
            acceptableAnswerVariants: ["7 - 4i"],
            stepByStepExplanation: "Combine real parts: 2+5=7. Combine imaginary parts: 3i+(-7i)=-4i. Result: 7-4i.",
            difficultyLevel: 1,
          },
          {
            problemId: "gaf-u3-l2-p2",
            topicTag: "complexNumberArithmetic",
            promptText: "Multiply: (3 + i)(2 - i).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "7-i",
            acceptableAnswerVariants: ["7 - i"],
            stepByStepExplanation: "FOIL: 6-3i+2i-i^2 = 6-i-(-1) = 6-i+1 = 7-i.",
            difficultyLevel: 3,
          },
          {
            problemId: "gaf-u3-l2-p3",
            topicTag: "complexNumberArithmetic",
            promptText: "Divide: (1 + 3i) / (1 - i).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "-1+2i",
            acceptableAnswerVariants: ["-1 + 2i"],
            stepByStepExplanation:
              "Multiply top and bottom by the conjugate 1+i: numerator (1+3i)(1+i)=1+4i-3=-2+4i; denominator (1-i)(1+i)=1+1=2. Result: (-2+4i)/2 = -1+2i.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Algebra and Trigonometry 2e, Section 2.4: Complex Numbers",
            resourceUrl: "https://openstax.org/books/algebra-and-trigonometry-2e/pages/2-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Complex number arithmetic",
            resourceUrl: "https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:complex",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "complex-solutions-to-quadratic-equations",
        lessonTitle: "Complex Solutions to Quadratic Equations",
        estimatedMinutes: 20,
        topicTag: "complexSolutionsToQuadratics",
        learningGoals: [
          "Recognize when the quadratic formula produces complex roots",
          "Solve a quadratic equation with a negative discriminant",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "A negative discriminant isn't an error",
            bodyText:
              "The quadratic formula's discriminant, b^2-4ac, tells you what kind of roots to expect: positive means two real roots, zero means one repeated real root, and negative means two complex roots. Before this unit, a negative discriminant might have looked like a dead end or a mistake — now it's just a signal to bring in i.",
          },
          {
            blockType: "keyFormula",
            headingText: "Quadratic formula with a negative discriminant",
            bodyText:
              "x = [-b ± sqrt(b^2-4ac)] / (2a). When b^2-4ac is negative, rewrite sqrt(negative number) as i times the square root of the corresponding positive number: sqrt(-16) = sqrt(16) x sqrt(-1) = 4i.",
            mathExpression: "x = \\dfrac{-b \\pm \\sqrt{b^2-4ac}}{2a}, \\qquad \\sqrt{-16} = 4i",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Solve x^2 + 2x + 5 = 0. Here a=1, b=2, c=5. Discriminant: 2^2 - 4(1)(5) = 4-20 = -16. Since sqrt(-16) = 4i, x = (-2 ± 4i)/2 = -1 ± 2i. The two solutions, -1+2i and -1-2i, are complex conjugates of each other — this always happens for a quadratic with real coefficients and complex roots.",
            mathExpression: "x^2+2x+5=0 \\implies x = -1\\pm 2i",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Writing sqrt(-16) as -4 (treating it like an ordinary negative real number) instead of correctly pulling out the i to get 4i. A square root of a negative number is never a real number.",
          },
        ],
        practiceProblems: [
          {
            problemId: "gaf-u3-l3-p1",
            topicTag: "complexSolutionsToQuadratics",
            promptText: "Solve x^2 + 4x + 13 = 0. Give both solutions separated by a comma.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "-2+3i,-2-3i",
            acceptableAnswerVariants: ["-2-3i,-2+3i", "-2 + 3i, -2 - 3i"],
            stepByStepExplanation:
              "a=1,b=4,c=13. Discriminant = 16-52 = -36. sqrt(-36)=6i. x = (-4±6i)/2 = -2±3i.",
            difficultyLevel: 3,
          },
          {
            problemId: "gaf-u3-l3-p2",
            topicTag: "complexSolutionsToQuadratics",
            promptText: "Solve x^2 - 6x + 10 = 0. Give both solutions separated by a comma.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "3+i,3-i",
            acceptableAnswerVariants: ["3-i,3+i", "3 + i, 3 - i"],
            stepByStepExplanation:
              "a=1,b=-6,c=10. Discriminant = 36-40 = -4. sqrt(-4)=2i. x = (6±2i)/2 = 3±i.",
            difficultyLevel: 3,
          },
          {
            problemId: "gaf-u3-l3-p3",
            topicTag: "complexSolutionsToQuadratics",
            promptText: "Solve 2x^2 + 2x + 1 = 0. Give both solutions separated by a comma.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "-1/2+1/2i,-1/2-1/2i",
            acceptableAnswerVariants: ["-0.5+0.5i,-0.5-0.5i", "-1/2 + i/2, -1/2 - i/2"],
            stepByStepExplanation:
              "a=2,b=2,c=1. Discriminant = 4-8 = -4. sqrt(-4)=2i. x = (-2±2i)/4 = -1/2 ± (1/2)i.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Khan Academy: Complex solutions to quadratics",
            resourceUrl: "https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:complex",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "the-complex-plane",
        lessonTitle: "The Complex Plane",
        estimatedMinutes: 15,
        topicTag: "complexNumberArithmetic",
        learningGoals: [
          "Plot a complex number as a point on the complex plane",
          "Find the modulus (distance from the origin) of a complex number",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "A complex number as a point",
            bodyText:
              "A complex number a + bi can be plotted just like an ordinary coordinate point: the real part a goes on the horizontal axis (the real axis), and the imaginary part b goes on the vertical axis (the imaginary axis). So a+bi is plotted at the point (a, b).",
          },
          {
            blockType: "keyFormula",
            headingText: "Modulus: distance from the origin",
            bodyText:
              "The modulus of a+bi, written |a+bi|, is its distance from the origin on the complex plane. It's found with the exact same formula as ordinary distance: |a+bi| = sqrt(a^2+b^2).",
            mathExpression: "|a+bi| = \\sqrt{a^2+b^2}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Plot 3 - 4i and find its modulus. It's plotted at the point (3, -4). Its modulus is sqrt(3^2 + (-4)^2) = sqrt(9+16) = sqrt(25) = 5.",
            mathExpression: "|3-4i| = \\sqrt{9+16} = 5",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Plotting the imaginary part on the horizontal axis instead of the vertical axis — the real part always goes first (horizontal), matching how (a, b) works for ordinary coordinate points.",
          },
        ],
        practiceProblems: [
          {
            problemId: "gaf-u3-l4-p1",
            topicTag: "complexNumberArithmetic",
            promptText: "Find the modulus of 5 + 12i.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "13",
            stepByStepExplanation: "|5+12i| = sqrt(5^2+12^2) = sqrt(25+144) = sqrt(169) = 13.",
            difficultyLevel: 2,
          },
          {
            problemId: "gaf-u3-l4-p2",
            topicTag: "complexNumberArithmetic",
            promptText: "What point on the complex plane represents -2 + 7i?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(-2,7)",
            acceptableAnswerVariants: ["(-2, 7)"],
            stepByStepExplanation: "The real part -2 is the horizontal coordinate and the imaginary part 7 is the vertical coordinate, giving the point (-2, 7).",
            difficultyLevel: 1,
          },
          {
            problemId: "gaf-u3-l4-p3",
            topicTag: "complexNumberArithmetic",
            promptText: "Find the modulus of 6 - 8i.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "10",
            stepByStepExplanation: "|6-8i| = sqrt(6^2+(-8)^2) = sqrt(36+64) = sqrt(100) = 10.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Khan Academy: The complex plane",
            resourceUrl: "https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:complex",
            resourceType: "interactivePractice",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "sequences-series-and-summation",
    unitTitle: "Sequences, Series, and Summation Notation",
    unitDescription:
      "Arithmetic and geometric sequences and series, sigma notation, and an informal introduction to convergence — the direct on-ramp to Calculus II's infinite series unit.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Sequences, Series, and Summation Notation",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "gaf-sequences-series-and-summation-quiz-p1",
          topicTag: "sequencesAndSeriesIntro",
          promptText: "An arithmetic sequence has a_1 = 6 and d = 4. Find a_9.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "38",
          stepByStepExplanation: "a_9 = 6 + (9-1)(4) = 6 + 32 = 38.",
          difficultyLevel: 2,
        },
        {
          problemId: "gaf-sequences-series-and-summation-quiz-p2",
          topicTag: "sequencesAndSeriesIntro",
          promptText: "A geometric sequence has a_1 = 4 and r = 3. Find a_5.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "324",
          stepByStepExplanation: "a_5 = 4 x 3^(5-1) = 4 x 81 = 324.",
          difficultyLevel: 2,
        },
        {
          problemId: "gaf-sequences-series-and-summation-quiz-p3",
          topicTag: "sequencesAndSeriesIntro",
          promptText: "Find the sum of the first 12 terms of the arithmetic sequence with a_1 = 3 and d = 2.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "168",
          stepByStepExplanation: "a_12 = 3 + (11)(2) = 25. S_12 = (12/2)(3+25) = 6 x 28 = 168.",
          difficultyLevel: 3,
        },
        {
          problemId: "gaf-sequences-series-and-summation-quiz-p4",
          topicTag: "sequencesAndSeriesIntro",
          promptText: "Find the sum of the first 6 terms of the geometric sequence with a_1 = 5 and r = 2.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "315",
          stepByStepExplanation: "S_6 = 5(1-2^6)/(1-2) = 5(1-64)/(-1) = 5(-63)/(-1) = 315.",
          difficultyLevel: 3,
        },
        {
          problemId: "gaf-sequences-series-and-summation-quiz-p5",
          topicTag: "summationNotation",
          promptText: "Expand and evaluate the sum.",
          promptMathExpression: "\\sum_{i=1}^{5} (2i-3)",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "15",
          stepByStepExplanation: "Plug in i=1,2,3,4,5: -1+1+3+5+7 = 15.",
          difficultyLevel: 2,
        },
        {
          problemId: "gaf-sequences-series-and-summation-quiz-p6",
          topicTag: "infiniteGeometricSeriesConvergence",
          promptText: "Does the series 4 + 2 + 1 + 0.5 + ... converge? If so, find its sum.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "8",
          stepByStepExplanation: "Here a_1=4 and r=1/2. Since |1/2|<1, it converges. S = 4/(1-1/2) = 4/(1/2) = 8.",
          difficultyLevel: 3,
        },
        {
          problemId: "gaf-sequences-series-and-summation-quiz-p7",
          topicTag: "infiniteGeometricSeriesConvergence",
          promptText: "Does the series 5 + 10 + 20 + 40 + ... converge or diverge?",
          answerFormat: "multipleChoice",
          choices: ["Converges to 10", "Converges to -10", "Diverges", "Converges to 5"],
          correctAnswer: "Diverges",
          stepByStepExplanation: "Here r=2, and |2| is not less than 1, so the series diverges (it has no finite sum).",
          difficultyLevel: 2,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "arithmetic-sequences",
        lessonTitle: "Arithmetic Sequences",
        estimatedMinutes: 20,
        topicTag: "sequencesAndSeriesIntro",
        learningGoals: [
          "Identify the common difference of an arithmetic sequence",
          "Find any term of an arithmetic sequence using the general (nth-term) formula",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Add the same amount every time",
            bodyText:
              "An arithmetic sequence is a list of numbers where you get from one term to the next by adding the same fixed amount every time. That fixed amount is called the common difference, d. Once you know the first term and d, you can jump straight to any term in the sequence without listing every term in between.",
          },
          {
            blockType: "keyFormula",
            headingText: "The nth-term formula",
            bodyText:
              "For an arithmetic sequence with first term a_1 and common difference d, the nth term is a_n = a_1 + (n-1)d.",
            mathExpression: "a_n = a_1 + (n-1)d",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "An arithmetic sequence has a_1 = 4 and d = 3. Find the 10th term. a_10 = 4 + (10-1)(3) = 4 + 27 = 31.",
            mathExpression: "a_{10} = 4+(9)(3) = 31",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Using (n) instead of (n-1) in the formula — since a_1 is already the first term with zero additions of d applied, the exponent-like factor is always one less than the term number you want.",
          },
        ],
        practiceProblems: [
          {
            problemId: "gaf-u4-l1-p1",
            topicTag: "sequencesAndSeriesIntro",
            promptText: "An arithmetic sequence has a_1 = 7 and d = 5. Find a_6.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "32",
            stepByStepExplanation: "a_6 = 7 + (6-1)(5) = 7 + 25 = 32.",
            difficultyLevel: 1,
          },
          {
            problemId: "gaf-u4-l1-p2",
            topicTag: "sequencesAndSeriesIntro",
            promptText: "Find the 20th term of the sequence 3, 7, 11, 15, ...",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "79",
            stepByStepExplanation: "a_1=3, d=4. a_20 = 3 + (20-1)(4) = 3+76 = 79.",
            difficultyLevel: 2,
          },
          {
            problemId: "gaf-u4-l1-p3",
            topicTag: "sequencesAndSeriesIntro",
            promptText: "An arithmetic sequence has a_1 = 10 and d = -3. Find a_8.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "-11",
            stepByStepExplanation: "a_8 = 10 + (8-1)(-3) = 10 - 21 = -11.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Precalculus 2e, Chapter 11: Sequences, Probability, and Counting Theory",
            resourceUrl: "https://openstax.org/books/precalculus-2e/pages/11-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Arithmetic sequences",
            resourceUrl: "https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:sequences",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "geometric-sequences",
        lessonTitle: "Geometric Sequences",
        estimatedMinutes: 20,
        topicTag: "sequencesAndSeriesIntro",
        learningGoals: [
          "Identify the common ratio of a geometric sequence",
          "Find any term of a geometric sequence using the general (nth-term) formula",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Multiply by the same amount every time",
            bodyText:
              "A geometric sequence is a list of numbers where you get from one term to the next by multiplying by the same fixed amount every time, called the common ratio, r. Where arithmetic sequences grow by constant addition, geometric sequences grow (or shrink) by constant multiplication — which is why geometric sequences can grow much faster (or decay toward zero much faster) than arithmetic ones.",
          },
          {
            blockType: "keyFormula",
            headingText: "The nth-term formula",
            bodyText:
              "For a geometric sequence with first term a_1 and common ratio r, the nth term is a_n = a_1 x r^(n-1).",
            mathExpression: "a_n = a_1 \\cdot r^{n-1}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "A geometric sequence has a_1 = 5 and r = 2. Find the 6th term. a_6 = 5 x 2^(6-1) = 5 x 2^5 = 5 x 32 = 160.",
            mathExpression: "a_6 = 5\\cdot 2^5 = 160",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Using r^n instead of r^(n-1) — just like the arithmetic case, the exponent is always one less than the term number, since a_1 itself hasn't been multiplied by r yet.",
          },
        ],
        practiceProblems: [
          {
            problemId: "gaf-u4-l2-p1",
            topicTag: "sequencesAndSeriesIntro",
            promptText: "A geometric sequence has a_1 = 3 and r = 2. Find a_5.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "48",
            stepByStepExplanation: "a_5 = 3 x 2^(5-1) = 3 x 16 = 48.",
            difficultyLevel: 2,
          },
          {
            problemId: "gaf-u4-l2-p2",
            topicTag: "sequencesAndSeriesIntro",
            promptText: "Find the 7th term of the sequence 2, 6, 18, 54, ...",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "1458",
            stepByStepExplanation: "a_1=2, r=3. a_7 = 2 x 3^(7-1) = 2 x 729 = 1458.",
            difficultyLevel: 3,
          },
          {
            problemId: "gaf-u4-l2-p3",
            topicTag: "sequencesAndSeriesIntro",
            promptText: "A geometric sequence has a_1 = 100 and r = 1/2. Find a_4.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "12.5",
            acceptableAnswerVariants: ["25/2"],
            stepByStepExplanation: "a_4 = 100 x (1/2)^(4-1) = 100 x (1/8) = 12.5.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Precalculus 2e, Chapter 11: Sequences, Probability, and Counting Theory",
            resourceUrl: "https://openstax.org/books/precalculus-2e/pages/11-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Geometric sequences",
            resourceUrl: "https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:sequences",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "arithmetic-and-geometric-series",
        lessonTitle: "Arithmetic and Geometric Series",
        estimatedMinutes: 25,
        topicTag: "sequencesAndSeriesIntro",
        learningGoals: [
          "Distinguish a sequence (a list of terms) from a series (a sum of terms)",
          "Compute the partial sum of an arithmetic series",
          "Compute the partial sum of a geometric series",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "A series is a sum",
            bodyText:
              "A sequence is just a list: a_1, a_2, a_3, .... A series is what you get when you add those terms together. A 'partial sum,' written S_n, is the sum of just the first n terms — as opposed to summing the whole (possibly infinite) sequence.",
          },
          {
            blockType: "keyFormula",
            headingText: "Partial sum formulas",
            bodyText:
              "Arithmetic series: S_n = (n/2)(a_1 + a_n) — n terms times the average of the first and last term. Geometric series (r not equal to 1): S_n = a_1(1 - r^n) / (1 - r).",
            mathExpression: "S_n^{\\text{arith}} = \\dfrac{n}{2}(a_1+a_n), \\qquad S_n^{\\text{geo}} = \\dfrac{a_1(1-r^n)}{1-r}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: arithmetic",
            bodyText:
              "Find the sum of the first 10 terms of the arithmetic sequence with a_1=2 and d=3. First find a_10 = 2 + (9)(3) = 29. Then S_10 = (10/2)(2+29) = 5 x 31 = 155.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: geometric",
            bodyText:
              "Find the sum of the first 5 terms of the geometric sequence with a_1=3 and r=2. S_5 = 3(1-2^5)/(1-2) = 3(1-32)/(-1) = 3(-31)/(-1) = 93.",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Using the geometric sum formula when r = 1 — this divides by zero, and a constant sequence's sum is found just by multiplying the constant term by n instead.",
          },
        ],
        practiceProblems: [
          {
            problemId: "gaf-u4-l3-p1",
            topicTag: "sequencesAndSeriesIntro",
            promptText: "Find the sum of the first 8 terms of the arithmetic sequence with a_1 = 5 and d = 4.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "152",
            stepByStepExplanation: "a_8 = 5 + (7)(4) = 33. S_8 = (8/2)(5+33) = 4 x 38 = 152.",
            difficultyLevel: 3,
          },
          {
            problemId: "gaf-u4-l3-p2",
            topicTag: "sequencesAndSeriesIntro",
            promptText: "Find the sum of the first 4 terms of the geometric sequence with a_1 = 2 and r = 3.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "80",
            stepByStepExplanation: "S_4 = 2(1-3^4)/(1-3) = 2(1-81)/(-2) = 2(-80)/(-2) = 80.",
            difficultyLevel: 3,
          },
          {
            problemId: "gaf-u4-l3-p3",
            topicTag: "sequencesAndSeriesIntro",
            promptText: "Find the sum 1 + 2 + 3 + ... + 50.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "1275",
            stepByStepExplanation: "This is an arithmetic series with a_1=1, a_50=50, n=50. S_50 = (50/2)(1+50) = 25 x 51 = 1275.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Precalculus 2e, Chapter 11: Sequences, Probability, and Counting Theory",
            resourceUrl: "https://openstax.org/books/precalculus-2e/pages/11-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Series",
            resourceUrl: "https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:series",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "summation-sigma-notation",
        lessonTitle: "Summation (Sigma) Notation",
        estimatedMinutes: 25,
        topicTag: "summationNotation",
        learningGoals: [
          "Read and expand a sum written in sigma notation term by term",
          "Evaluate a sum written in sigma notation",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "A compact way to write a long sum",
            bodyText:
              "The Greek capital letter sigma, Σ, means 'add up.' The notation Σ (from i=1 to n) of a_i tells you to plug in every whole number value of i, starting at the bottom number and ending at the top number, into the expression, and add up all the results. This is the exact notation used to define a Riemann sum before it becomes a definite integral in Calculus II — getting comfortable expanding these sums now pays off directly there.",
          },
          {
            blockType: "keyFormula",
            headingText: "A useful known sum",
            bodyText:
              "One sum worth memorizing: the sum of the first n positive integers is Σ (from i=1 to n) of i = n(n+1)/2. This exact formula reappears (proved by induction) later in this course, and again inside Riemann sum calculations in Calculus II.",
            mathExpression: "\\sum_{i=1}^{n} i = \\dfrac{n(n+1)}{2}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Expand and evaluate Σ (from i=1 to 5) of (2i+1). Plug in i=1,2,3,4,5: (2(1)+1) + (2(2)+1) + (2(3)+1) + (2(4)+1) + (2(5)+1) = 3+5+7+9+11 = 35.",
            mathExpression: "\\sum_{i=1}^{5}(2i+1) = 3+5+7+9+11 = 35",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Stopping after writing the general expression instead of actually substituting every integer value of the index and adding the results — the index variable (often i, k, or n) must disappear completely from your final numeric answer.",
          },
        ],
        practiceProblems: [
          {
            problemId: "gaf-u4-l4-p1",
            topicTag: "summationNotation",
            promptText: "Expand and evaluate the sum.",
            promptMathExpression: "\\sum_{i=1}^{4} i^2",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "30",
            stepByStepExplanation: "Plug in i=1,2,3,4: 1^2+2^2+3^2+4^2 = 1+4+9+16 = 30.",
            difficultyLevel: 2,
          },
          {
            problemId: "gaf-u4-l4-p2",
            topicTag: "summationNotation",
            promptText: "Evaluate the sum.",
            promptMathExpression: "\\sum_{k=2}^{5} (3k-1)",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "38",
            stepByStepExplanation: "Plug in k=2,3,4,5: (5)+(8)+(11)+(14) = 38.",
            difficultyLevel: 3,
          },
          {
            problemId: "gaf-u4-l4-p3",
            topicTag: "summationNotation",
            promptText: "Use the formula for the sum of the first n integers to evaluate the sum.",
            promptMathExpression: "\\sum_{i=1}^{6} i",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "21",
            stepByStepExplanation: "Using n(n+1)/2 with n=6: 6(7)/2 = 21.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Khan Academy: Summation (sigma) notation",
            resourceUrl: "https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:series",
            resourceType: "interactivePractice",
          },
          {
            resourceTitle: "Paul's Online Math Notes: Series - The Basics",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/SeriesIntro.aspx",
            resourceType: "referenceSheet",
          },
        ],
      },
      {
        lessonSlug: "infinite-geometric-series-and-convergence",
        lessonTitle: "Infinite Geometric Series and Convergence (Informal Introduction)",
        estimatedMinutes: 20,
        topicTag: "infiniteGeometricSeriesConvergence",
        learningGoals: [
          "Explain informally what it means for an infinite series to converge or diverge",
          "Determine whether an infinite geometric series converges, and find its sum when it does",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Can you really add infinitely many numbers?",
            bodyText:
              "Adding infinitely many positive numbers sounds like it should always give infinity — but if the terms shrink fast enough, the running total can settle down and approach a specific finite number instead of growing forever. When that happens, the infinite series is said to converge, and that finite number is called its sum. If the running total keeps growing without bound (or bounces around without settling), the series diverges, and it has no finite sum.",
          },
          {
            blockType: "keyFormula",
            headingText: "The convergence test and sum formula for geometric series",
            bodyText:
              "An infinite geometric series with first term a_1 and common ratio r converges if and only if the absolute value of r is less than 1 (that is, -1 < r < 1). When it does converge, its sum is S = a_1 / (1 - r). If |r| >= 1, the series diverges and has no finite sum.",
            mathExpression: "S = \\dfrac{a_1}{1-r}, \\quad \\text{valid only when } |r|<1",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Does 1 + 1/2 + 1/4 + 1/8 + ... converge? Here a_1=1 and r=1/2. Since |1/2| < 1, it converges, and its sum is S = 1/(1-1/2) = 1/(1/2) = 2. So this infinite sum of shrinking pieces settles exactly on 2, never quite reaching it after any finite number of terms but getting arbitrarily close.",
            mathExpression: "1+\\dfrac12+\\dfrac14+\\dfrac18+\\cdots = 2",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Plugging into the sum formula S = a_1/(1-r) without first checking that |r| < 1 — if the series diverges, this formula still spits out a number, but that number is meaningless since there's no actual finite sum to find.",
          },
        ],
        practiceProblems: [
          {
            problemId: "gaf-u4-l5-p1",
            topicTag: "infiniteGeometricSeriesConvergence",
            promptText: "Does the series 3 + 1 + 1/3 + 1/9 + ... converge? If so, find its sum.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "9/2",
            acceptableAnswerVariants: ["4.5"],
            stepByStepExplanation: "Here a_1=3 and r=1/3. Since |1/3|<1, it converges. S = 3/(1-1/3) = 3/(2/3) = 9/2 = 4.5.",
            difficultyLevel: 3,
          },
          {
            problemId: "gaf-u4-l5-p2",
            topicTag: "infiniteGeometricSeriesConvergence",
            promptText: "Does the series 2 + 4 + 8 + 16 + ... converge or diverge?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "diverges",
            acceptableAnswerVariants: ["diverge", "it diverges"],
            stepByStepExplanation: "Here r=2, and |2| is not less than 1, so the series diverges (it has no finite sum).",
            difficultyLevel: 2,
          },
          {
            problemId: "gaf-u4-l5-p3",
            topicTag: "infiniteGeometricSeriesConvergence",
            promptText: "Find the sum of the infinite series 5 - 5/3 + 5/9 - 5/27 + ...",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "15/4",
            acceptableAnswerVariants: ["3.75"],
            stepByStepExplanation: "Here a_1=5 and r=-1/3. Since |-1/3|<1, it converges. S = 5/(1-(-1/3)) = 5/(4/3) = 15/4 = 3.75.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Khan Academy: Infinite geometric series",
            resourceUrl: "https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:series",
            resourceType: "interactivePractice",
          },
          {
            resourceTitle: "Paul's Online Math Notes: Series - The Basics",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcII/SeriesIntro.aspx",
            resourceType: "referenceSheet",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "mathematical-language-and-reasoning",
    unitTitle: "Mathematical Language and Reasoning",
    unitDescription:
      "Set and interval notation, logical statements, and an introduction to mathematical proof and induction — the vocabulary calculus definitions are written in.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Mathematical Language and Reasoning",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "gaf-mathematical-language-and-reasoning-quiz-p1",
          topicTag: "setAndIntervalNotation",
          promptText: "Write x <= 6 in interval notation.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "(-infinity,6]",
          acceptableAnswerVariants: ["(-infinity, 6]", "(-∞,6]", "(-∞, 6]"],
          stepByStepExplanation: "The endpoint 6 is included (bracket), and infinity always gets a parenthesis: (-infinity, 6].",
          difficultyLevel: 1,
        },
        {
          problemId: "gaf-mathematical-language-and-reasoning-quiz-p2",
          topicTag: "setAndIntervalNotation",
          promptText: "Write 2 < x <= 9 in interval notation.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "(2,9]",
          acceptableAnswerVariants: ["(2, 9]"],
          stepByStepExplanation: "2 is excluded (parenthesis), 9 is included (bracket): (2, 9].",
          difficultyLevel: 2,
        },
        {
          problemId: "gaf-mathematical-language-and-reasoning-quiz-p3",
          topicTag: "setAndIntervalNotation",
          promptText: "Solve |x - 4| < 2 and write the solution in interval notation.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "(2,6)",
          acceptableAnswerVariants: ["(2, 6)"],
          stepByStepExplanation: "|x-4|<2 means -2<x-4<2. Add 4 to all parts: 2<x<6, giving (2,6).",
          difficultyLevel: 2,
        },
        {
          problemId: "gaf-mathematical-language-and-reasoning-quiz-p4",
          topicTag: "setAndIntervalNotation",
          promptText: "Solve |x + 1| >= 5 and write the solution in interval notation.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "(-infinity,-6] U [4,infinity)",
          acceptableAnswerVariants: ["(-∞,-6] ∪ [4,∞)", "(-infinity,-6]U[4,infinity)"],
          stepByStepExplanation:
            "|x+1|>=5 splits into x+1<=-5 or x+1>=5, giving x<=-6 or x>=4, which is (-infinity,-6] U [4,infinity).",
          difficultyLevel: 3,
        },
        {
          problemId: "gaf-mathematical-language-and-reasoning-quiz-p5",
          topicTag: "logicalReasoningBasics",
          promptText: "What is the contrapositive of 'If a number is divisible by 4, then it is divisible by 2'?",
          answerFormat: "multipleChoice",
          choices: [
            "If a number is divisible by 2, then it is divisible by 4",
            "If a number is not divisible by 2, then it is not divisible by 4",
            "If a number is not divisible by 4, then it is not divisible by 2",
            "If a number is divisible by 4, then it is not divisible by 2",
          ],
          correctAnswer: "If a number is not divisible by 2, then it is not divisible by 4",
          stepByStepExplanation: "The contrapositive negates and swaps: 'not divisible by 2' becomes the new hypothesis, and 'not divisible by 4' becomes the new conclusion.",
          difficultyLevel: 2,
        },
        {
          problemId: "gaf-mathematical-language-and-reasoning-quiz-p6",
          topicTag: "mathematicalInduction",
          promptText: "True or false: in a proof by induction, it is valid to skip verifying the base case as long as the inductive step (P(k) implies P(k+1)) works for every k.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "false",
          stepByStepExplanation: "The base case is required — without a verified starting point, the inductive step has no first domino to knock over, so the conclusion doesn't follow for any n.",
          difficultyLevel: 2,
        },
        {
          problemId: "gaf-mathematical-language-and-reasoning-quiz-p7",
          topicTag: "mathematicalInduction",
          promptText: "In an inductive proof of 1+3+5+...+(2k-1) = k^2, the inductive hypothesis is 1+3+...+(2k-1) = k^2. Adding the next odd term, 2k+1, to both sides, what does the left side simplify to?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "(k+1)^2",
          acceptableAnswerVariants: ["k^2+2k+1", "k^2 + 2k + 1"],
          stepByStepExplanation: "k^2 + (2k+1) = k^2+2k+1 = (k+1)^2, exactly matching the formula with n replaced by k+1.",
          difficultyLevel: 4,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "set-notation-and-interval-notation",
        lessonTitle: "Set Notation and Interval Notation",
        estimatedMinutes: 20,
        topicTag: "setAndIntervalNotation",
        learningGoals: [
          "Read and write set-builder notation",
          "Convert between inequality notation and interval notation",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Two ways to describe the same set of numbers",
            bodyText:
              "Set-builder notation describes a set by stating a rule: {x | x > 3} is read 'the set of all x such that x is greater than 3.' Interval notation describes the same set more compactly using brackets and parentheses. From here through the rest of calculus, domain statements are written in interval notation constantly, so fluency here matters a lot more than it might seem right now.",
          },
          {
            blockType: "keyFormula",
            headingText: "Bracket and parenthesis rules",
            bodyText:
              "A square bracket, [ or ], means the endpoint IS included (matches <= or >=). A parenthesis, ( or ), means the endpoint is NOT included (matches < or >). Infinity (positive or negative) always gets a parenthesis, never a bracket, since you can never actually 'reach' infinity to include it. The union symbol, ∪, joins two separate intervals together when the solution set has a gap in it.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Write {x | x >= 3} in interval notation: [3, infinity) — a bracket on the included endpoint 3, and a parenthesis on infinity. Write {x | -2 < x <= 5} in interval notation: (-2, 5] — a parenthesis on the excluded -2, and a bracket on the included 5.",
            mathExpression: "[3,\\infty) \\qquad (-2,5]",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Writing a square bracket next to infinity, like [3, infinity] — infinity is not a number you can land on and include, so it is always paired with a parenthesis.",
          },
        ],
        practiceProblems: [
          {
            problemId: "gaf-u5-l1-p1",
            topicTag: "setAndIntervalNotation",
            promptText: "Write x > -4 in interval notation.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(-4,infinity)",
            acceptableAnswerVariants: ["(-4, infinity)", "(-4,∞)", "(-4, ∞)"],
            stepByStepExplanation: "The endpoint -4 is excluded (strict inequality), so it gets a parenthesis, and infinity always gets a parenthesis: (-4, infinity).",
            difficultyLevel: 1,
          },
          {
            problemId: "gaf-u5-l1-p2",
            topicTag: "setAndIntervalNotation",
            promptText: "Write -1 <= x < 4 in interval notation.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "[-1,4)",
            acceptableAnswerVariants: ["[-1, 4)"],
            stepByStepExplanation: "-1 is included (bracket), 4 is excluded (parenthesis): [-1, 4).",
            difficultyLevel: 2,
          },
          {
            problemId: "gaf-u5-l1-p3",
            topicTag: "setAndIntervalNotation",
            promptText: "Write the solution set 'x <= -2 or x > 1' in interval notation.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(-infinity,-2] U (1,infinity)",
            acceptableAnswerVariants: ["(-∞,-2] ∪ (1,∞)", "(-infinity,-2]U(1,infinity)", "(-∞, -2] U (1, ∞)"],
            stepByStepExplanation: "Each piece becomes its own interval, joined with a union: (-infinity, -2] for x<=-2, and (1, infinity) for x>1.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "OpenStax Precalculus 2e, Chapter 1: Functions",
            resourceUrl: "https://openstax.org/books/precalculus-2e/pages/1-introduction",
            resourceType: "textbookChapter",
          },
          {
            resourceTitle: "Khan Academy: Interval notation",
            resourceUrl: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:functions",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "absolute-value-and-inequalities-in-interval-notation",
        lessonTitle: "Absolute Value and Inequalities, Revisited in Interval Notation",
        estimatedMinutes: 15,
        topicTag: "setAndIntervalNotation",
        learningGoals: [
          "Solve absolute value inequalities and express the solution set in interval notation",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Distance, revisited",
            bodyText:
              "|x| < a means x is within a distance of a from zero, which unpacks into -a < x < a. |x| > a means x is farther than a from zero in either direction, which splits into two separate pieces: x < -a or x > a. This 'distance less than some amount' framing is exactly the shape of the formal epsilon-delta definitions of a limit later in calculus, so getting genuinely comfortable with it now is worth the extra practice.",
          },
          {
            blockType: "keyFormula",
            headingText: "General pattern with a center point",
            bodyText:
              "|x - c| < a describes all x within distance a of c, which becomes the interval (c-a, c+a). |x - c| > a describes all x farther than a from c, which becomes (-infinity, c-a) ∪ (c+a, infinity).",
            mathExpression: "|x-c|<a \\iff x \\in (c-a,\\, c+a)",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Solve |x - 3| < 5. This means -5 < x-3 < 5. Add 3 to all three parts: -2 < x < 8. In interval notation: (-2, 8).",
            mathExpression: "|x-3|<5 \\implies x\\in(-2,8)",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Writing the 'greater than' case as one continuous interval instead of two separate pieces joined by a union — |x| > a describes two disconnected rays, not one interval, since the solution set has a gap in the middle.",
          },
        ],
        practiceProblems: [
          {
            problemId: "gaf-u5-l2-p1",
            topicTag: "setAndIntervalNotation",
            promptText: "Solve |x| < 7 and write the solution in interval notation.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(-7,7)",
            acceptableAnswerVariants: ["(-7, 7)"],
            stepByStepExplanation: "|x|<7 means -7<x<7, which is the interval (-7,7).",
            difficultyLevel: 2,
          },
          {
            problemId: "gaf-u5-l2-p2",
            topicTag: "setAndIntervalNotation",
            promptText: "Solve |x + 2| >= 6 and write the solution in interval notation.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(-infinity,-8] U [4,infinity)",
            acceptableAnswerVariants: ["(-∞,-8] ∪ [4,∞)", "(-infinity,-8]U[4,infinity)"],
            stepByStepExplanation:
              "|x+2|>=6 splits into x+2<=-6 or x+2>=6, giving x<=-8 or x>=4, which is (-infinity,-8] U [4,infinity).",
            difficultyLevel: 3,
          },
          {
            problemId: "gaf-u5-l2-p3",
            topicTag: "setAndIntervalNotation",
            promptText: "Solve |x - 1| <= 3 and write the solution in interval notation.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "[-2,4]",
            acceptableAnswerVariants: ["[-2, 4]"],
            stepByStepExplanation: "|x-1|<=3 means -3<=x-1<=3. Add 1 to all parts: -2<=x<=4, giving [-2,4].",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Khan Academy: Absolute value equations, functions, and inequalities",
            resourceUrl: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:absolute-value-equations-functions-and-inequalities",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "introduction-to-logical-statements",
        lessonTitle: "Introduction to Logical Statements",
        estimatedMinutes: 20,
        topicTag: "logicalReasoningBasics",
        learningGoals: [
          "Identify the hypothesis and conclusion of an if-then (conditional) statement",
          "Form the converse and contrapositive of a conditional statement",
          "Explain why a statement's converse is not automatically true",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "If-then statements have moving parts",
            bodyText:
              "A conditional statement has the form 'if P, then Q,' where P is the hypothesis (the condition assumed to be true) and Q is the conclusion (what follows from it). From this one statement, you can build three related statements: the converse swaps P and Q ('if Q, then P'), the inverse negates both ('if not P, then not Q'), and the contrapositive negates and swaps ('if not Q, then not P').",
          },
          {
            blockType: "keyFormula",
            headingText: "Only one of these is logically guaranteed",
            bodyText:
              "A conditional statement and its contrapositive are always logically equivalent — if one is true, so is the other, and vice versa. The converse and the inverse are NOT guaranteed to have the same truth value as the original statement, even when the original is true.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Consider the true statement: 'If a shape is a square, then it is a rectangle.' Its converse is: 'If a shape is a rectangle, then it is a square.' This converse is false — a rectangle with unequal side lengths is a perfectly good rectangle that isn't a square. This shows why you can never assume a converse is true just because the original conditional is.",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Assuming a statement's converse must also be true simply because the original if-then statement is true — logically, they are independent claims, and confusing them is one of the most common reasoning errors in all of mathematics.",
          },
        ],
        practiceProblems: [
          {
            problemId: "gaf-u5-l3-p1",
            topicTag: "logicalReasoningBasics",
            promptText: "Is the converse of 'If x = 5, then x^2 = 25' true or false? (The converse is: 'If x^2 = 25, then x = 5.')",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "false",
            stepByStepExplanation: "x = -5 also satisfies x^2 = 25, so the converse fails for x = -5. The converse is false.",
            difficultyLevel: 2,
          },
          {
            problemId: "gaf-u5-l3-p2",
            topicTag: "logicalReasoningBasics",
            promptText: "State the contrapositive of: 'If it is raining, then the ground is wet.'",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "If the ground is not wet, then it is not raining.",
            stepByStepExplanation: "The contrapositive negates and swaps: hypothesis 'raining' becomes 'not raining,' conclusion 'ground is wet' becomes 'ground is not wet,' and they swap order.",
            difficultyLevel: 2,
          },
          {
            problemId: "gaf-u5-l3-p3",
            topicTag: "logicalReasoningBasics",
            promptText: "True or false: if a conditional statement is true, its contrapositive must also be true.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "true",
            stepByStepExplanation: "A conditional and its contrapositive are always logically equivalent, so if one is true, the other is guaranteed to be true as well.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Khan Academy: Deductive reasoning and conditional statements",
            resourceUrl: "https://www.khanacademy.org/math/geometry-home/geometry-intro-euclid",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "introduction-to-mathematical-proof",
        lessonTitle: "Introduction to Mathematical Proof",
        estimatedMinutes: 20,
        topicTag: "logicalReasoningBasics",
        learningGoals: [
          "Explain what a mathematical proof does and doesn't establish",
          "Follow a simple direct proof step by step",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Why checking examples isn't enough",
            bodyText:
              "A mathematical proof is a chain of logical steps, each one justified by a definition, an accepted rule, or a previously established result, that shows a claim is true in every single case it applies to — not just the cases you happened to check. This is exactly what separates 'I tried it five times and it worked' from 'here's why it has to always work,' and it's the difference between memorizing that the power rule works and actually understanding why it works.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: a direct proof",
            bodyText:
              "Prove: the sum of two even integers is even. Let the two even integers be written as 2m and 2n, where m and n are integers (this is just the definition of 'even' — a multiple of 2). Their sum is 2m + 2n = 2(m+n). Since m+n is an integer, 2(m+n) is 2 times an integer, which by definition means the sum is even. This holds for every possible pair of even integers, not just a few examples — that's what makes it a proof.",
            mathExpression: "2m+2n = 2(m+n)",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "'Proving' a general claim by checking a handful of specific numbers (like confirming 2+4=6 and 6+8=14 are even) — this only shows the claim held for the examples checked, and never rules out some undiscovered counterexample. A real proof has to cover every case at once, usually by using variables to represent an arbitrary, unspecified case.",
          },
        ],
        practiceProblems: [
          {
            problemId: "gaf-u5-l4-p1",
            topicTag: "logicalReasoningBasics",
            promptText: "An odd integer can always be written in the form ___ for some integer k. Fill in the blank.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "2k+1",
            acceptableAnswerVariants: ["2k + 1"],
            stepByStepExplanation: "By definition, an odd integer is one more than an even integer, and every even integer is 2k for some integer k, so an odd integer is 2k+1.",
            difficultyLevel: 2,
          },
          {
            problemId: "gaf-u5-l4-p2",
            topicTag: "logicalReasoningBasics",
            promptText: "True or false: verifying a mathematical claim for the first 100 cases proves it is true for all cases.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "false",
            stepByStepExplanation: "Checking specific cases is evidence, not proof — a counterexample could still exist at case 101 or beyond. A real proof must cover every case using an argument that doesn't depend on which specific number you plugged in.",
            difficultyLevel: 2,
          },
          {
            problemId: "gaf-u5-l4-p3",
            topicTag: "logicalReasoningBasics",
            promptText: "Which approach would count as a valid proof that the product of two odd integers is odd?",
            answerFormat: "multipleChoice",
            choices: [
              "Checking a few example products, like 3x5=15 and 7x9=63",
              "Letting the integers be 2m+1 and 2n+1, multiplying them out, and showing the result has the form 2(something)+1",
              "Drawing a picture of two odd numbers",
              "Stating that it's true because it's always worked before",
            ],
            correctAnswer: "Letting the integers be 2m+1 and 2n+1, multiplying them out, and showing the result has the form 2(something)+1",
            stepByStepExplanation:
              "(2m+1)(2n+1) = 4mn+2m+2n+1 = 2(2mn+m+n)+1, which is 2 times an integer plus 1 — exactly the form of an odd number, and this argument works for ANY integers m and n, proving the claim in general.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Khan Academy: Introduction to proofs",
            resourceUrl: "https://www.khanacademy.org/math/geometry-home/geometry-intro-euclid/geometry-two-column-proofs",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "mathematical-induction",
        lessonTitle: "Mathematical Induction",
        estimatedMinutes: 25,
        topicTag: "mathematicalInduction",
        learningGoals: [
          "Explain the base case and inductive step of a proof by induction",
          "Follow a worked inductive proof of a summation formula",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "The domino analogy",
            bodyText:
              "Mathematical induction proves a statement true for every whole number n (starting from some starting point, usually 1) using two pieces, like a line of dominoes: first show the very first domino falls (the base case), then show that ANY domino falling always knocks over the next one (the inductive step). Put those two pieces together, and every domino in the infinite line falls — you've proven the statement for every n at once, without checking them one at a time.",
          },
          {
            blockType: "keyFormula",
            headingText: "The two required steps",
            bodyText:
              "To prove a statement P(n) is true for all n >= 1: Step 1 (base case) — verify P(1) is true. Step 2 (inductive step) — assume P(k) is true for some arbitrary k (this assumption is called the inductive hypothesis), and use it to show P(k+1) must also be true. If both steps succeed, P(n) is true for every n >= 1.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Prove that 1+2+3+...+n = n(n+1)/2 for all n >= 1. Base case (n=1): the left side is 1, and the right side is 1(2)/2 = 1. They match, so the base case holds. Inductive step: assume 1+2+...+k = k(k+1)/2 is true (the inductive hypothesis). Add (k+1) to both sides: 1+2+...+k+(k+1) = k(k+1)/2 + (k+1). Factor the right side: (k+1)[k/2 + 1] = (k+1)(k+2)/2. This is exactly the original formula with n replaced by k+1, so P(k+1) holds. Since the base case is true and the inductive step works for every k, the formula holds for all n >= 1.",
            mathExpression: "\\dfrac{k(k+1)}{2}+(k+1) = \\dfrac{(k+1)(k+2)}{2}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Skipping the base case, or treating it as an afterthought — without a verified starting point, the inductive step (however correct) has no domino to actually start knocking over, and the whole proof falls apart even though the 'if P(k) then P(k+1)' logic is fine on its own.",
          },
        ],
        practiceProblems: [
          {
            problemId: "gaf-u5-l5-p1",
            topicTag: "mathematicalInduction",
            promptText: "In a proof by induction, what is the first thing you must verify?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "the base case",
            acceptableAnswerVariants: ["base case"],
            stepByStepExplanation: "Every induction proof starts by verifying the statement holds for the smallest case (usually n=1) — this is the base case, and it's what gets the domino chain started.",
            difficultyLevel: 1,
          },
          {
            problemId: "gaf-u5-l5-p2",
            topicTag: "mathematicalInduction",
            promptText: "If the base case P(1) holds, and you show that P(k) being true forces P(k+1) to be true for every k >= 1, what can you conclude?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "P(n) is true for all n >= 1",
            acceptableAnswerVariants: ["the statement is true for all n>=1", "true for every n greater than or equal to 1"],
            stepByStepExplanation: "This is exactly the two conditions required for a proof by induction, so the conclusion is that P(n) holds for every whole number n starting from 1.",
            difficultyLevel: 2,
          },
          {
            problemId: "gaf-u5-l5-p3",
            topicTag: "mathematicalInduction",
            promptText: "In an inductive proof of 1+3+5+...+(2k-1) = k^2, the inductive hypothesis is 1+3+5+...+(2k-1) = k^2. Adding the next odd term to both sides, what expression on the left must you show simplifies to (k+1)^2?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "k^2+2k+1",
            acceptableAnswerVariants: ["k^2+(2k+1)", "k^2 + 2k + 1"],
            stepByStepExplanation:
              "The next odd term after (2k-1) is 2(k+1)-1 = 2k+1. Adding it to both sides of the hypothesis gives k^2 + (2k+1) = k^2+2k+1 on the left, which factors as (k+1)^2, exactly matching the formula with n=k+1.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Khan Academy: Mathematical induction",
            resourceUrl: "https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:series",
            resourceType: "videoLesson",
          },
          {
            resourceTitle: "Paul's Online Math Notes: Proof by Induction",
            resourceUrl: "https://tutorial.math.lamar.edu/Extras/ProofByInduction/Induction.aspx",
            resourceType: "referenceSheet",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "intro-to-limits",
    unitTitle: "Introduction to the Idea of a Limit",
    unitDescription:
      "An intuitive, graphical preview of what a limit means, before Calculus I makes it formal.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Introduction to the Idea of a Limit",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "gaf-intro-to-limits-quiz-p1",
          topicTag: "limitsAndContinuity",
          promptText: "Find the limit as x approaches 2 of (x^2 - 4)/(x - 2).",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "4",
          stepByStepExplanation: "Factor and simplify for x not equal to 2: (x-2)(x+2)/(x-2) = x+2. As x approaches 2, this approaches 2+2=4.",
          difficultyLevel: 2,
        },
        {
          problemId: "gaf-intro-to-limits-quiz-p2",
          topicTag: "limitsAndContinuity",
          promptText: "Let f(x) = 3x - 1 for x < 4, and f(x) = x^2 for x >= 4. Does the two-sided limit as x approaches 4 exist?",
          answerFormat: "multipleChoice",
          choices: [
            "Yes, the limit is 11",
            "Yes, the limit is 16",
            "No, the limit does not exist",
            "Yes, the limit is 0",
          ],
          correctAnswer: "No, the limit does not exist",
          stepByStepExplanation: "Left-hand limit: 3(4)-1=11. Right-hand limit: 4^2=16. Since 11 does not equal 16, the two-sided limit does not exist.",
          difficultyLevel: 3,
        },
        {
          problemId: "gaf-intro-to-limits-quiz-p3",
          topicTag: "limitsAndContinuity",
          promptText: "Find the limit as x approaches infinity of (2x^3 + 1) / (5x^3 - x).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "2/5",
          acceptableAnswerVariants: ["0.4"],
          stepByStepExplanation: "The numerator and denominator both have degree 3, so the limit is the ratio of leading coefficients: 2/5.",
          difficultyLevel: 3,
        },
        {
          problemId: "gaf-intro-to-limits-quiz-p4",
          topicTag: "limitsAndContinuity",
          promptText: "Find the limit as x approaches infinity of (4x + 7) / (x^2 + 1).",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "0",
          stepByStepExplanation: "The numerator's degree (1) is less than the denominator's degree (2), so the limit is 0.",
          difficultyLevel: 2,
        },
        {
          problemId: "gaf-intro-to-limits-quiz-p5",
          topicTag: "limitsAndContinuity",
          promptText: "True or false: if f(a) is undefined, the limit as x approaches a of f(x) can never exist.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "false",
          stepByStepExplanation: "A limit only cares about the approaching trend, not the function's actual value at a. A hole at x=a (where f(a) is undefined) does not stop the limit from existing.",
          difficultyLevel: 2,
        },
        {
          problemId: "gaf-intro-to-limits-quiz-p6",
          topicTag: "limitsAndContinuity",
          promptText: "Which situation causes a two-sided limit to fail to exist?",
          answerFormat: "multipleChoice",
          choices: [
            "The graph has a single missing point (a hole) at that x-value",
            "The left-hand and right-hand limits disagree (a jump)",
            "The function is defined and continuous at that x-value",
            "The left-hand and right-hand limits are equal",
          ],
          correctAnswer: "The left-hand and right-hand limits disagree (a jump)",
          stepByStepExplanation: "A two-sided limit exists only when the left-hand and right-hand limits agree. A hole doesn't stop a limit from existing, since a limit ignores the function's value at that exact point.",
          difficultyLevel: 2,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "what-a-limit-means-intuitively",
        lessonTitle: "What a Limit Means, Intuitively",
        estimatedMinutes: 25,
        topicTag: "limitsAndContinuity",
        learningGoals: [
          "Describe, in plain language, what value a function approaches as x approaches a given number",
          "Read a limit off a table of values or a graph, without a formal definition",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "What value is the function 'heading toward'?",
            bodyText:
              "A limit describes the value a function's output is heading toward as the input gets closer and closer to some specific number — approaching from both directions. Crucially, a limit doesn't care what happens exactly AT that number; it only cares about the trend as you sneak up on it. This means a function can have a well-defined limit at a point even if the function itself is undefined there, or even if its actual value there is something completely different.",
          },
          {
            blockType: "keyFormula",
            headingText: "Limit notation",
            bodyText:
              "The notation 'the limit as x approaches a of f(x) equals L' is written lim (x→a) f(x) = L. It means: as x gets arbitrarily close to a (without necessarily ever equaling a), f(x) gets arbitrarily close to L.",
            mathExpression: "\\lim_{x\\to a} f(x) = L",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Consider f(x) = (x^2-1)/(x-1). Notice f(1) is undefined, since plugging in x=1 gives 0/0. But for any x not equal to 1, this simplifies: (x^2-1)/(x-1) = (x-1)(x+1)/(x-1) = x+1. Checking values close to 1 (like 0.9, 0.99, 1.01, 1.1) all give outputs close to 2. So even though f(1) doesn't exist, the limit as x approaches 1 of f(x) equals 2.",
            mathExpression: "\\lim_{x\\to 1} \\dfrac{x^2-1}{x-1} = 2",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Assuming a limit must equal the function's actual value at that point — a limit only describes the approaching trend, and it can exist and be perfectly well-defined even when f(a) is undefined, or disagree with f(a) when the function is defined but 'oddly' at that one point.",
          },
        ],
        practiceProblems: [
          {
            problemId: "gaf-u6-l1-p1",
            topicTag: "limitsAndContinuity",
            promptText: "Let f(x) = x + 3 for every x except x = 2, where instead f(2) = 100 (a special redefined value). Find the limit as x approaches 2 of f(x).",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "5",
            stepByStepExplanation:
              "The limit ignores the isolated, redefined value at exactly x=2 and only cares about the trend as x approaches 2 from nearby values, which follows f(x)=x+3, giving 2+3=5.",
            difficultyLevel: 2,
          },
          {
            problemId: "gaf-u6-l1-p2",
            topicTag: "limitsAndContinuity",
            promptText: "Using the values f(1.9)=3.61, f(1.99)=3.9601, f(2.01)=4.0401, f(2.1)=4.41 for f(x)=x^2, what does f(x) appear to approach as x approaches 2?",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "4",
            stepByStepExplanation: "As x gets closer to 2 from both sides, the outputs get closer and closer to 4 (matching x^2 at x=2), so the limit is 4.",
            difficultyLevel: 1,
          },
          {
            problemId: "gaf-u6-l1-p3",
            topicTag: "limitsAndContinuity",
            promptText: "Find the limit as x approaches 3 of (x^2 - 9)/(x - 3).",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "6",
            stepByStepExplanation: "Factor and simplify for x not equal to 3: (x-3)(x+3)/(x-3) = x+3. As x approaches 3, this approaches 3+3=6.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes, Calculus I: The Limit",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/TheLimit.aspx",
            resourceType: "referenceSheet",
          },
          {
            resourceTitle: "Khan Academy: Limits and continuity (intro videos)",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-limits-new",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "when-a-limit-doesnt-exist",
        lessonTitle: "When a Limit Doesn't Exist",
        estimatedMinutes: 20,
        topicTag: "limitsAndContinuity",
        learningGoals: [
          "Recognize the difference between a jump, a hole, and unbounded behavior on a graph",
          "Determine whether a limit exists by comparing the left-hand and right-hand limits",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Three ways a limit can fail",
            bodyText:
              "A limit fails to exist in three classic situations: a jump (the function approaches one value coming from the left and a different value coming from the right), unbounded behavior (the function shoots off toward positive or negative infinity, often near a vertical asymptote), and oscillation (the function keeps bouncing around and never settles near any single value). Importantly, a hole in the graph is NOT one of these — a hole is a single missing point, and the limit can exist perfectly well right through it, since a limit never cares about the function's actual value at that one point.",
          },
          {
            blockType: "keyFormula",
            headingText: "The left-hand / right-hand limit test",
            bodyText:
              "The limit as x approaches a of f(x) exists only when the left-hand limit (as x approaches a from values below a) and the right-hand limit (as x approaches a from values above a) both exist AND are equal to each other. If they disagree, the two-sided limit does not exist (DNE), even if f(a) itself is perfectly defined.",
            mathExpression: "\\lim_{x\\to a^-} f(x) = \\lim_{x\\to a^+} f(x) \\iff \\lim_{x\\to a} f(x) \\text{ exists}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Let f(x) = x+1 for x < 2, and f(x) = x^2 for x >= 2. Find the left-hand and right-hand limits as x approaches 2. Left-hand limit: as x approaches 2 from below, use x+1, giving 2+1=3. Right-hand limit: as x approaches 2 from above, use x^2, giving 2^2=4. Since 3 does not equal 4, the two-sided limit as x approaches 2 does not exist — even though f(2)=4 is perfectly well-defined.",
            mathExpression: "\\lim_{x\\to 2^-} f(x)=3, \\quad \\lim_{x\\to 2^+} f(x)=4 \\implies \\lim_{x\\to 2}f(x) \\text{ DNE}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Concluding a limit doesn't exist just because there's a hole in the graph at that point — a removable hole doesn't stop a limit from existing. Only a genuine mismatch between the left and right approach (or unbounded/oscillating behavior) causes a limit to fail.",
          },
        ],
        practiceProblems: [
          {
            problemId: "gaf-u6-l2-p1",
            topicTag: "limitsAndContinuity",
            promptText: "For f(x) = 1/x, what does f(x) do as x approaches 0 from the right, and as x approaches 0 from the left? Does the two-sided limit as x approaches 0 exist?",
            answerFormat: "multipleChoice",
            choices: [
              "From the right it approaches positive infinity, from the left it approaches negative infinity; the limit does not exist",
              "From both sides it approaches 0; the limit exists and equals 0",
              "From both sides it approaches positive infinity; the limit exists",
              "From the right it approaches negative infinity, from the left it approaches positive infinity; the limit does not exist",
            ],
            correctAnswer: "From the right it approaches positive infinity, from the left it approaches negative infinity; the limit does not exist",
            stepByStepExplanation:
              "As x approaches 0 from positive values, 1/x grows without bound toward positive infinity. As x approaches 0 from negative values, 1/x plunges toward negative infinity. Since these don't agree (and neither is even a finite number), the two-sided limit does not exist.",
            difficultyLevel: 3,
          },
          {
            problemId: "gaf-u6-l2-p2",
            topicTag: "limitsAndContinuity",
            promptText: "Let g(x) = 2x for x <= 1, and g(x) = 2x + 3 for x > 1. Find the left-hand and right-hand limits as x approaches 1. Does the limit exist?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "no, DNE",
            acceptableAnswerVariants: ["does not exist", "DNE", "no"],
            stepByStepExplanation:
              "Left-hand limit: 2(1)=2. Right-hand limit: 2(1)+3=5. Since 2 does not equal 5, the two-sided limit does not exist.",
            difficultyLevel: 3,
          },
          {
            problemId: "gaf-u6-l2-p3",
            topicTag: "limitsAndContinuity",
            promptText: "Let h(x) = (x-4)^2 / (x-4) for x not equal to 4 (h is undefined at x=4, leaving a hole). Does the limit as x approaches 4 of h(x) exist? If so, what is it?",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "0",
            stepByStepExplanation:
              "For x not equal to 4, h(x) simplifies to x-4. As x approaches 4, x-4 approaches 0. The hole at x=4 doesn't stop the limit from existing — it equals 0.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes, Calculus I: The Limit",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/TheLimit.aspx",
            resourceType: "referenceSheet",
          },
          {
            resourceTitle: "Khan Academy: Limits and continuity (intro videos)",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-limits-new",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "limits-at-infinity-informally",
        lessonTitle: "Limits at Infinity, Informally",
        estimatedMinutes: 20,
        topicTag: "limitsAndContinuity",
        learningGoals: [
          "Describe what a limit at infinity means informally",
          "Connect a rational function's horizontal asymptote to its limit at infinity",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Infinity isn't a number you plug in",
            bodyText:
              "A 'limit at infinity' asks what value f(x) approaches as x grows endlessly large in the positive direction (x approaches positive infinity) or endlessly large in the negative direction (x approaches negative infinity). You can't literally substitute infinity into a formula — infinity isn't a number — so instead you reason about the trend, usually using exactly the same degree-comparison technique from the asymptotes unit.",
          },
          {
            blockType: "keyFormula",
            headingText: "Same idea as a horizontal asymptote",
            bodyText:
              "If a function's graph has a horizontal asymptote at y = L, that is precisely the statement that the limit of f(x) as x approaches infinity (or negative infinity) equals L. This is the same degree-comparison reasoning from Unit 2's rational function lessons, just written using limit notation instead of the word 'asymptote.'",
            mathExpression: "\\lim_{x\\to\\infty} f(x) = L \\iff y=L \\text{ is a horizontal asymptote}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find the limit as x approaches infinity of (3x+1)/(x-2). The numerator and denominator both have degree 1, so (using the same rule as finding a horizontal asymptote) the limit is the ratio of the leading coefficients: 3/1 = 3. So both as x approaches positive infinity and as x approaches negative infinity, this function approaches 3.",
            mathExpression: "\\lim_{x\\to\\infty} \\dfrac{3x+1}{x-2} = 3",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Trying to 'plug in infinity' directly into a formula like it's an ordinary number — this doesn't make sense. Instead, use the degree-comparison reasoning: compare the highest power of x in the numerator and denominator, exactly as you did for horizontal asymptotes.",
          },
        ],
        practiceProblems: [
          {
            problemId: "gaf-u6-l3-p1",
            topicTag: "limitsAndContinuity",
            promptText: "Find the limit as x approaches infinity of (5x^2+1)/(2x^2-3).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "5/2",
            acceptableAnswerVariants: ["2.5"],
            stepByStepExplanation: "The degrees of numerator and denominator are equal (both 2), so the limit is the ratio of leading coefficients: 5/2.",
            difficultyLevel: 2,
          },
          {
            problemId: "gaf-u6-l3-p2",
            topicTag: "limitsAndContinuity",
            promptText: "Find the limit as x approaches infinity of (7x+2)/(x^2-1).",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "0",
            stepByStepExplanation: "The numerator's degree (1) is less than the denominator's degree (2), so the limit is 0.",
            difficultyLevel: 2,
          },
          {
            problemId: "gaf-u6-l3-p3",
            topicTag: "limitsAndContinuity",
            promptText: "A rational function has a horizontal asymptote at y = -4. What is the limit of the function as x approaches negative infinity?",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "-4",
            stepByStepExplanation: "A horizontal asymptote at y=-4 means the function's outputs settle toward -4 in both directions, so the limit as x approaches negative infinity is -4.",
            difficultyLevel: 1,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Paul's Online Math Notes, Calculus I: The Limit",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/CalcI/TheLimit.aspx",
            resourceType: "referenceSheet",
          },
          {
            resourceTitle: "Khan Academy: Limits and continuity (intro videos)",
            resourceUrl: "https://www.khanacademy.org/math/ap-calculus-ab/ab-limits-new",
            resourceType: "videoLesson",
          },
        ],
      },
    ],
  },
];

export const generalAdvancedFoundationsCourseExam: CourseExam = {
  examTitle: "General Advanced Mathematical Foundations: Course Exam",
  passingScorePercent: 70,
  questions: [
    {
      problemId: "gaf-exam-p1",
      topicTag: "trianglesAndThePythagoreanTheorem",
      promptText: "A right triangle has legs of length 9 and 12. Find the length of the hypotenuse.",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "15",
      stepByStepExplanation: "c^2 = 9^2 + 12^2 = 81 + 144 = 225. c = sqrt(225) = 15.",
      difficultyLevel: 1,
    },
    {
      problemId: "gaf-exam-p2",
      topicTag: "anglesAndParallelLines",
      promptText: "Two parallel lines are cut by a transversal. One angle measures 38 degrees. Find its alternate interior angle.",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "38",
      stepByStepExplanation: "Alternate interior angles are always equal, so the alternate interior angle also measures 38 degrees.",
      difficultyLevel: 2,
    },
    {
      problemId: "gaf-exam-p3",
      topicTag: "areaAndPerimeter",
      promptText: "Find the area of a trapezoid with bases 7 and 11, and height 6.",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "54",
      stepByStepExplanation: "Area = (1/2)(b1+b2)(h) = (1/2)(7+11)(6) = (1/2)(18)(6) = 54 square units.",
      difficultyLevel: 2,
    },
    {
      problemId: "gaf-exam-p4",
      topicTag: "areaAndPerimeter",
      promptText: "Find the volume of a sphere with radius 6. Give your answer in terms of pi.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "288pi",
      acceptableAnswerVariants: ["288π", "288 pi", "904.8"],
      stepByStepExplanation: "Volume = (4/3) pi r^3 = (4/3) pi (216) = 288 pi.",
      difficultyLevel: 3,
    },
    {
      problemId: "gaf-exam-p5",
      topicTag: "coordinateGeometry",
      promptText: "Find the slope of the line through (-3, 4) and (5, -2).",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "-3/4",
      acceptableAnswerVariants: ["-0.75"],
      stepByStepExplanation: "m = (-2-4)/(5-(-3)) = -6/8 = -3/4.",
      difficultyLevel: 2,
    },
    {
      problemId: "gaf-exam-p6",
      topicTag: "piecewiseFunctions",
      promptText: "Let f(x) = 5 - x for x <= 2, and f(x) = 3x - 4 for x > 2. Find f(2).",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "3",
      stepByStepExplanation: "Since 2 <= 2, use the first piece: f(2) = 5 - 2 = 3.",
      difficultyLevel: 2,
    },
    {
      problemId: "gaf-exam-p7",
      topicTag: "piecewiseFunctions",
      promptText: "Using the same f as above (f(x)=5-x for x<=2, f(x)=3x-4 for x>2), find f(5).",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "11",
      stepByStepExplanation: "Since 5 > 2, use the second piece: f(5) = 3(5) - 4 = 15 - 4 = 11.",
      difficultyLevel: 2,
    },
    {
      problemId: "gaf-exam-p8",
      topicTag: "polynomialEndBehavior",
      promptText: "Describe the end behavior of f(x) = 2x^5 - 3x^2 as x approaches positive and negative infinity.",
      answerFormat: "multipleChoice",
      choices: [
        "Left end approaches negative infinity, right end approaches positive infinity",
        "Left end approaches positive infinity, right end approaches negative infinity",
        "Both ends approach positive infinity",
        "Both ends approach negative infinity",
      ],
      correctAnswer: "Left end approaches negative infinity, right end approaches positive infinity",
      stepByStepExplanation: "Degree 5 is odd, and the leading coefficient 2 is positive. For odd-positive, the left end falls to negative infinity and the right end rises to positive infinity.",
      difficultyLevel: 2,
    },
    {
      problemId: "gaf-exam-p9",
      topicTag: "rationalFunctionAsymptotes",
      promptText: "List the vertical asymptotes of f(x) = (x + 1) / [(x - 2)(x + 5)].",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "x=2,x=-5",
      acceptableAnswerVariants: ["x = 2, x = -5", "x=-5,x=2", "x = -5, x = 2"],
      stepByStepExplanation: "The denominator is zero at x=2 and x=-5, and neither factor cancels with the numerator (x+1), so both are genuine vertical asymptotes.",
      difficultyLevel: 3,
    },
    {
      problemId: "gaf-exam-p10",
      topicTag: "evenAndOddFunctions",
      promptText: "Is h(x) = x^3 - x even, odd, or neither?",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "odd",
      stepByStepExplanation: "h(-x) = (-x)^3 - (-x) = -x^3 + x = -(x^3-x) = -h(x), so h is odd.",
      difficultyLevel: 2,
    },
    {
      problemId: "gaf-exam-p11",
      topicTag: "complexNumberArithmetic",
      promptText: "Simplify i^34.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "-1",
      stepByStepExplanation: "34 divided by 4 leaves a remainder of 2, so i^34 = i^2 = -1.",
      difficultyLevel: 2,
    },
    {
      problemId: "gaf-exam-p12",
      topicTag: "complexNumberArithmetic",
      promptText: "Subtract: (5 + 2i) - (3 - 6i).",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "2+8i",
      acceptableAnswerVariants: ["2 + 8i"],
      stepByStepExplanation: "Distribute the subtraction: 5+2i-3+6i. Combine real parts: 5-3=2. Combine imaginary parts: 2i+6i=8i. Result: 2+8i.",
      difficultyLevel: 1,
    },
    {
      problemId: "gaf-exam-p13",
      topicTag: "complexNumberArithmetic",
      promptText: "Multiply: (1 - 2i)(4 + 3i).",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "10-5i",
      acceptableAnswerVariants: ["10 - 5i"],
      stepByStepExplanation: "FOIL: 4+3i-8i-6i^2 = 4-5i-6(-1) = 4-5i+6 = 10-5i.",
      difficultyLevel: 3,
    },
    {
      problemId: "gaf-exam-p14",
      topicTag: "complexSolutionsToQuadratics",
      promptText: "Solve x^2 - 2x + 5 = 0. Give both solutions separated by a comma.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "1+2i,1-2i",
      acceptableAnswerVariants: ["1-2i,1+2i", "1 + 2i, 1 - 2i"],
      stepByStepExplanation: "a=1,b=-2,c=5. Discriminant = 4-20 = -16. sqrt(-16)=4i. x = (2±4i)/2 = 1±2i.",
      difficultyLevel: 3,
    },
    {
      problemId: "gaf-exam-p15",
      topicTag: "complexNumberArithmetic",
      promptText: "Find the modulus of -6 - 8i.",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "10",
      stepByStepExplanation: "|-6-8i| = sqrt((-6)^2+(-8)^2) = sqrt(36+64) = sqrt(100) = 10.",
      difficultyLevel: 2,
    },
    {
      problemId: "gaf-exam-p16",
      topicTag: "sequencesAndSeriesIntro",
      promptText: "An arithmetic sequence has a_1 = 9 and d = -2. Find a_12.",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "-13",
      stepByStepExplanation: "a_12 = 9 + (12-1)(-2) = 9 - 22 = -13.",
      difficultyLevel: 2,
    },
    {
      problemId: "gaf-exam-p17",
      topicTag: "sequencesAndSeriesIntro",
      promptText: "A geometric sequence has a_1 = 6 and r = 1/3. Find a_4.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "2/9",
      acceptableAnswerVariants: ["0.222", "0.22"],
      stepByStepExplanation: "a_4 = 6 x (1/3)^(4-1) = 6 x (1/27) = 6/27 = 2/9.",
      difficultyLevel: 3,
    },
    {
      problemId: "gaf-exam-p18",
      topicTag: "sequencesAndSeriesIntro",
      promptText: "Find the sum of the first 15 terms of the arithmetic sequence 2, 5, 8, ...",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "345",
      stepByStepExplanation: "a_1=2, d=3. a_15 = 2 + (14)(3) = 44. S_15 = (15/2)(2+44) = 7.5 x 46 = 345.",
      difficultyLevel: 3,
    },
    {
      problemId: "gaf-exam-p19",
      topicTag: "summationNotation",
      promptText: "Evaluate the sum.",
      promptMathExpression: "\\sum_{k=1}^{4} (k^2+1)",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "34",
      stepByStepExplanation: "Plug in k=1,2,3,4: (1+1)+(4+1)+(9+1)+(16+1) = 2+5+10+17 = 34.",
      difficultyLevel: 2,
    },
    {
      problemId: "gaf-exam-p20",
      topicTag: "infiniteGeometricSeriesConvergence",
      promptText: "Find the sum of the infinite series 9 - 3 + 1 - 1/3 + ...",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "27/4",
      acceptableAnswerVariants: ["6.75"],
      stepByStepExplanation: "Here a_1=9 and r=-1/3. Since |-1/3|<1, it converges. S = 9/(1-(-1/3)) = 9/(4/3) = 27/4 = 6.75.",
      difficultyLevel: 4,
    },
    {
      problemId: "gaf-exam-p21",
      topicTag: "setAndIntervalNotation",
      promptText: "Write -5 <= x < 3 in interval notation.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "[-5,3)",
      acceptableAnswerVariants: ["[-5, 3)"],
      stepByStepExplanation: "-5 is included (bracket), 3 is excluded (parenthesis): [-5, 3).",
      difficultyLevel: 1,
    },
    {
      problemId: "gaf-exam-p22",
      topicTag: "setAndIntervalNotation",
      promptText: "Solve |x - 2| > 4 and write the solution in interval notation.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "(-infinity,-2) U (6,infinity)",
      acceptableAnswerVariants: ["(-∞,-2) ∪ (6,∞)", "(-infinity,-2)U(6,infinity)"],
      stepByStepExplanation: "|x-2|>4 splits into x-2>4 or x-2<-4, giving x>6 or x<-2, which is (-infinity,-2) U (6,infinity).",
      difficultyLevel: 3,
    },
    {
      problemId: "gaf-exam-p23",
      topicTag: "logicalReasoningBasics",
      promptText: "What is the converse of 'If a shape is a triangle, then it has three sides'?",
      answerFormat: "multipleChoice",
      choices: [
        "If a shape has three sides, then it is a triangle",
        "If a shape is not a triangle, then it does not have three sides",
        "If a shape does not have three sides, then it is not a triangle",
        "If a shape is a triangle, then it does not have three sides",
      ],
      correctAnswer: "If a shape has three sides, then it is a triangle",
      stepByStepExplanation: "The converse swaps the hypothesis and conclusion: 'has three sides' becomes the new hypothesis, and 'is a triangle' becomes the new conclusion.",
      difficultyLevel: 2,
    },
    {
      problemId: "gaf-exam-p24",
      topicTag: "mathematicalInduction",
      promptText: "In the inductive step of a proof by induction, what do you assume, and what must you show follows from it?",
      answerFormat: "multipleChoice",
      choices: [
        "Assume P(k+1); show P(k) follows",
        "Assume P(k); show P(k+1) follows",
        "Assume P(1); show P(k) follows",
        "Assume P(k) and P(k+1) are both already true",
      ],
      correctAnswer: "Assume P(k); show P(k+1) follows",
      stepByStepExplanation: "The inductive step assumes the inductive hypothesis P(k) is true for an arbitrary k, and uses it to show that P(k+1) must also be true.",
      difficultyLevel: 2,
    },
    {
      problemId: "gaf-exam-p25",
      topicTag: "limitsAndContinuity",
      promptText: "Find the limit as x approaches 2 of (x^2 - 4)/(x - 2).",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "4",
      stepByStepExplanation: "Factor and simplify for x not equal to 2: (x-2)(x+2)/(x-2) = x+2. As x approaches 2, this approaches 2+2=4.",
      difficultyLevel: 2,
    },
    {
      problemId: "gaf-exam-p26",
      topicTag: "limitsAndContinuity",
      promptText: "Let f(x) = x^2 for x < 1, and f(x) = 2x + 1 for x >= 1. Does the two-sided limit as x approaches 1 exist?",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "no, DNE",
      acceptableAnswerVariants: ["does not exist", "DNE", "no"],
      stepByStepExplanation: "Left-hand limit: 1^2=1. Right-hand limit: 2(1)+1=3. Since 1 does not equal 3, the two-sided limit does not exist.",
      difficultyLevel: 3,
    },
    {
      problemId: "gaf-exam-p27",
      topicTag: "limitsAndContinuity",
      promptText: "Find the limit as x approaches infinity of (6x^2 - 1) / (2x^2 + 3x).",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "3",
      stepByStepExplanation: "The numerator and denominator both have degree 2, so the limit is the ratio of leading coefficients: 6/2 = 3.",
      difficultyLevel: 3,
    },
    {
      problemId: "gaf-exam-p28",
      topicTag: "limitsAndContinuity",
      promptText: "A rational function has a horizontal asymptote at y = 0. What is the limit of the function as x approaches infinity?",
      answerFormat: "multipleChoice",
      choices: ["0", "1", "Infinity", "The limit does not exist"],
      correctAnswer: "0",
      stepByStepExplanation: "A horizontal asymptote at y=0 means the function's outputs settle toward 0, so the limit as x approaches infinity is 0.",
      difficultyLevel: 1,
    },
  ],
};
