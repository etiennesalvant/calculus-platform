import { Unit, UnitQuiz, CourseExam } from "@/lib/types/curriculumTypes";

// Calculus V: Linear Algebra Foundations
// See docs/curriculum/08-calculus-5.md for the full plan.
// Each unit below starts as a structural stub (lessons: []) and gets filled
// in with real content following the pattern already used in
// algebraCalcFocused/unitsData.ts.

export const calculus5Units: Unit[] = [
  {
    unitSlug: "vectors-and-matrices",
    unitTitle: "Vectors and Matrices",
    unitDescription: "Matrix notation, matrix addition, scalar multiplication, matrix multiplication, and representing systems as matrices.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Vectors and Matrices",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc5-vectors-and-matrices-quiz-p1",
          topicTag: "linearAlgebraFoundations",
          promptText:
            "Matrix B has 3 rows: row 1 is (1,2), row 2 is (3,4), row 3 is (5,6). What are the dimensions of B, written as 'rows x columns'?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "3x2",
          acceptableAnswerVariants: ["3 x 2", "3 by 2"],
          stepByStepExplanation: "B has 3 rows and 2 columns, so its dimensions are 3x2 (rows always listed first).",
          difficultyLevel: 1,
        },
        {
          problemId: "calc5-vectors-and-matrices-quiz-p2",
          topicTag: "linearAlgebraFoundations",
          promptText: "Using the same matrix B (row1: 1,2; row2: 3,4; row3: 5,6), what is the entry b_31?",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "5",
          stepByStepExplanation: "b_31 means row 3, column 1. Row 3 is (5,6), and its first entry is 5.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc5-vectors-and-matrices-quiz-p3",
          topicTag: "linearAlgebraFoundations",
          promptText: "Let A = [[2,-3],[0,5]] and B = [[-1,4],[2,1]]. Find A + B.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "[[1,1],[2,6]]",
          stepByStepExplanation: "Add entrywise: (2+(-1), -3+4) = (1,1) for row 1, and (0+2, 5+1) = (2,6) for row 2.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc5-vectors-and-matrices-quiz-p4",
          topicTag: "linearAlgebraFoundations",
          promptText: "Using A = [[2,-3],[0,5]] from the previous problem, find -3A.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "[[-6,9],[0,-15]]",
          stepByStepExplanation: "Multiply every entry of A by -3: (-6,9) for row 1, and (0,-15) for row 2.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc5-vectors-and-matrices-quiz-p5",
          topicTag: "linearAlgebraFoundations",
          promptText: "Let A = [[1,2],[3,1]] and B = [[0,1],[2,-1]]. Find AB.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "[[4,-1],[2,2]]",
          stepByStepExplanation:
            "Row 1 of A with column 1 of B: 1*0+2*2=4. Row 1 of A with column 2 of B: 1*1+2*(-1)=-1. Row 2 of A with column 1 of B: 3*0+1*2=2. Row 2 of A with column 2 of B: 3*1+1*(-1)=2. So AB = [[4,-1],[2,2]].",
          difficultyLevel: 3,
        },
        {
          problemId: "calc5-vectors-and-matrices-quiz-p6",
          topicTag: "linearAlgebraFoundations",
          promptText: "Write the augmented matrix for the system 4x + y = 9, 2x - 3y = -4.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "[[4,1,9],[2,-3,-4]]",
          stepByStepExplanation:
            "Row 1 comes from 4x+y=9: coefficients (4,1) and constant 9. Row 2 comes from 2x-3y=-4: coefficients (2,-3) and constant -4.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc5-vectors-and-matrices-quiz-p7",
          topicTag: "linearAlgebraFoundations",
          promptText: "If A is a 2x3 matrix and B is a 3x4 matrix, what are the dimensions of the product AB?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "2x4",
          acceptableAnswerVariants: ["2 x 4", "2 by 4"],
          stepByStepExplanation:
            "A (m x n) times B (n x p) gives an m x p product, provided A's column count matches B's row count (here both are 3). So AB is 2x4.",
          difficultyLevel: 3,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "introduction-to-matrices",
        lessonTitle: "Introduction to Matrices",
        estimatedMinutes: 20,
        topicTag: "linearAlgebraFoundations",
        learningGoals: [
          "Read matrix notation and identify a matrix's dimensions",
          "Locate a specific entry in a matrix using row-column notation",
          "Recognize the identity matrix and explain its role",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "What a matrix is",
            bodyText:
              "A matrix is just a rectangular grid of numbers, arranged in rows and columns. That's it - no more mysterious than a spreadsheet. What makes matrices powerful is that we define arithmetic operations on them (addition, multiplication, and more) that let a single grid represent an entire system of equations, a geometric transformation, or a dataset all at once. A matrix's size is described as 'rows by columns,' always in that order: a matrix with 2 rows and 3 columns is called a 2x3 matrix, never 3x2.",
          },
          {
            blockType: "keyFormula",
            headingText: "Entry notation and the identity matrix",
            bodyText:
              "The entry in row i, column j of matrix A is written a_ij (subscript row first, then column). A square matrix has the same number of rows as columns (n x n). The identity matrix I_n is the n x n square matrix with 1's down the main diagonal and 0's everywhere else - it's the matrix equivalent of the number 1, since multiplying any matrix by the appropriately sized identity leaves it unchanged.",
            mathExpression:
              "A = \\begin{bmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{bmatrix}, \\qquad I_3 = \\begin{bmatrix} 1&0&0\\\\0&1&0\\\\0&0&1 \\end{bmatrix}",
          },
          {
            blockType: "workedExample",
            headingText: "Reading off dimensions and entries",
            bodyText:
              "Consider matrix A with 2 rows and 3 columns: row 1 is (3, -1, 2) and row 2 is (0, 5, 4). This is a 2x3 matrix. The entry a_23 (row 2, column 3) is 4. The entry a_12 (row 1, column 2) is -1. Notice a_23 is NOT the same as a_32 - a 2x3 matrix doesn't even have a row 3, so a_32 doesn't exist for this matrix at all.",
            mathExpression:
              "A = \\begin{bmatrix} 3 & -1 & 2 \\\\ 0 & 5 & 4 \\end{bmatrix}, \\quad a_{23} = 4",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Reversing the order in 'rows by columns' - calling a matrix with 2 rows and 3 columns a '3x2 matrix' instead of '2x3.' The convention is always rows first, then columns, for both the overall dimension label and for the subscript on an individual entry (a_ij means row i, column j).",
          },
        ],
        practiceProblems: [
          {
            problemId: "c5-u1-l1-p1",
            topicTag: "linearAlgebraFoundations",
            promptText:
              "Matrix A has 2 rows: row 1 is (3, -1, 2) and row 2 is (0, 5, 4). What are the dimensions of A, written as 'rows x columns'?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "2x3",
            acceptableAnswerVariants: ["2 x 3", "2 by 3"],
            stepByStepExplanation: "A has 2 rows and 3 columns, so its dimensions are 2x3 (rows always listed first).",
            difficultyLevel: 1,
          },
          {
            problemId: "c5-u1-l1-p2",
            topicTag: "linearAlgebraFoundations",
            promptText:
              "Using the same matrix A (row 1: 3, -1, 2; row 2: 0, 5, 4), what is the entry a_21?",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "0",
            stepByStepExplanation: "a_21 means row 2, column 1. Row 2 is (0, 5, 4), and its first entry is 0.",
            difficultyLevel: 1,
          },
          {
            problemId: "c5-u1-l1-p3",
            topicTag: "linearAlgebraFoundations",
            promptText:
              "Write out the 3x3 identity matrix I_3 using bracket notation, listing each row in brackets, e.g. [[1,0],[0,1]] for I_2.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "[[1,0,0],[0,1,0],[0,0,1]]",
            stepByStepExplanation:
              "The identity matrix has 1's straight down the main diagonal (top-left to bottom-right) and 0's everywhere else: row 1 is (1,0,0), row 2 is (0,1,0), row 3 is (0,0,1).",
            difficultyLevel: 1,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "MIT OCW 18.06: Linear Algebra (Gilbert Strang)",
            resourceUrl: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
            resourceType: "videoLesson",
          },
          {
            resourceTitle: "Khan Academy: Linear algebra",
            resourceUrl: "https://www.khanacademy.org/math/linear-algebra",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "matrix-addition-and-scalar-multiplication",
        lessonTitle: "Matrix Addition and Scalar Multiplication",
        estimatedMinutes: 15,
        topicTag: "linearAlgebraFoundations",
        learningGoals: [
          "Add and subtract matrices of the same dimensions",
          "Multiply a matrix by a scalar",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Matching positions, nothing fancier",
            bodyText:
              "Matrix addition is entrywise: you add whatever is in the same row-and-column position in each matrix. That means two matrices can only be added if they have the exact same dimensions - there's no way to add a 2x2 matrix to a 2x3 matrix, because some positions simply wouldn't have a partner. Scalar multiplication is even simpler: multiply every single entry by the same number.",
          },
          {
            blockType: "keyFormula",
            headingText: "Addition and scalar multiplication rules",
            bodyText:
              "For matrices A and B of the same size, (A+B)_ij = a_ij + b_ij. For a scalar c, (cA)_ij = c * a_ij (every entry gets multiplied by c).",
            mathExpression:
              "(A+B)_{ij} = a_{ij}+b_{ij}, \\qquad (cA)_{ij} = c\\,a_{ij}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Let A = [[1,2],[3,4]] and B = [[5,-1],[0,2]]. Adding entrywise: A+B = [[1+5, 2+(-1)],[3+0, 4+2]] = [[6,1],[3,6]]. For scalar multiplication, 2A means doubling every entry: 2A = [[2,4],[6,8]].",
            mathExpression:
              "A+B = \\begin{bmatrix}6&1\\\\3&6\\end{bmatrix}, \\qquad 2A = \\begin{bmatrix}2&4\\\\6&8\\end{bmatrix}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Trying to add two matrices with different dimensions by lining up whatever entries happen to be nearby. If the dimensions don't match exactly, the sum is simply undefined - there is no 'best effort' version of matrix addition.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c5-u1-l2-p1",
            topicTag: "linearAlgebraFoundations",
            promptText:
              "Let A = [[2,3],[-1,4]] and B = [[5,-2],[1,0]]. Find A + B. Write your answer using bracket notation, e.g. [[1,0],[0,1]].",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "[[7,1],[0,4]]",
            stepByStepExplanation: "Add entrywise: (2+5, 3+(-2)) = (7,1) for row 1, and (-1+1, 4+0) = (0,4) for row 2.",
            difficultyLevel: 1,
          },
          {
            problemId: "c5-u1-l2-p2",
            topicTag: "linearAlgebraFoundations",
            promptText: "Using B = [[5,-2],[1,0]] from the previous problem, find 3B.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "[[15,-6],[3,0]]",
            stepByStepExplanation: "Multiply every entry of B by 3: (15,-6) and (3,0).",
            difficultyLevel: 1,
          },
          {
            problemId: "c5-u1-l2-p3",
            topicTag: "linearAlgebraFoundations",
            promptText:
              "Using A = [[2,3],[-1,4]] and B = [[5,-2],[1,0]], find A - 2B.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "[[-8,7],[-3,4]]",
            stepByStepExplanation:
              "First find 2B = [[10,-4],[2,0]]. Then subtract entrywise: A - 2B = (2-10, 3-(-4)) = (-8,7) for row 1, and (-1-2, 4-0) = (-3,4) for row 2.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Khan Academy: Linear algebra",
            resourceUrl: "https://www.khanacademy.org/math/linear-algebra",
            resourceType: "interactivePractice",
          },
          {
            resourceTitle: "MIT OCW 18.06: Linear Algebra (Gilbert Strang)",
            resourceUrl: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "matrix-multiplication",
        lessonTitle: "Matrix Multiplication",
        estimatedMinutes: 25,
        topicTag: "linearAlgebraFoundations",
        learningGoals: [
          "Multiply two matrices using the row-times-column rule",
          "Determine when two matrices can be multiplied, and the resulting dimensions",
          "Explain why matrix multiplication is not commutative",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Row times column, not entry times entry",
            bodyText:
              "Matrix multiplication is NOT entrywise like addition - it's a row-times-column operation. To find the entry in row i, column j of the product AB, take row i of A, take column j of B, multiply corresponding entries together, and add up the results (this is exactly a dot product). Because of this, A and B can only be multiplied if the number of columns in A matches the number of rows in B.",
          },
          {
            blockType: "keyFormula",
            headingText: "Multiplication rule and dimension requirement",
            bodyText:
              "For A (m x n) and B (n x p), the product AB is m x p, with entry (AB)_ij equal to the dot product of row i of A and column j of B. Critically, matrix multiplication is generally NOT commutative: AB does not usually equal BA, even when both products are defined.",
            mathExpression:
              "(AB)_{ij} = \\sum_{k=1}^{n} a_{ik} b_{kj}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: AB vs. BA",
            bodyText:
              "Let A = [[1,2],[3,4]] and B = [[2,0],[1,3]]. For AB, row 1 of A dotted with column 1 of B: 1*2+2*1 = 4. Row 1 of A with column 2 of B: 1*0+2*3 = 6. Row 2 of A with column 1 of B: 3*2+4*1 = 10. Row 2 of A with column 2 of B: 3*0+4*3 = 12. So AB = [[4,6],[10,12]]. Now compute BA the same way: row 1 of B with column 1 of A: 2*1+0*3 = 2. Row 1 of B with column 2 of A: 2*2+0*4 = 4. Row 2 of B with column 1 of A: 1*1+3*3 = 10. Row 2 of B with column 2 of A: 1*2+3*4 = 14. So BA = [[2,4],[10,14]]. AB and BA are completely different matrices - order matters.",
            mathExpression:
              "AB = \\begin{bmatrix}4&6\\\\10&12\\end{bmatrix} \\neq \\begin{bmatrix}2&4\\\\10&14\\end{bmatrix} = BA",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Multiplying two matrices entrywise (like addition) instead of using the row-times-column dot product rule, and separately, assuming AB = BA out of habit from ordinary number multiplication. Matrix multiplication order matters, and mixing it up is one of the most common errors in this entire course.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c5-u1-l3-p1",
            topicTag: "linearAlgebraFoundations",
            promptText: "Let A = [[1,2],[0,1]] and B = [[3,1],[2,4]]. Find AB.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "[[7,9],[2,4]]",
            stepByStepExplanation:
              "Row 1 of A with column 1 of B: 1*3+2*2 = 7. Row 1 of A with column 2 of B: 1*1+2*4 = 9. Row 2 of A with column 1 of B: 0*3+1*2 = 2. Row 2 of A with column 2 of B: 0*1+1*4 = 4. So AB = [[7,9],[2,4]].",
            difficultyLevel: 2,
          },
          {
            problemId: "c5-u1-l3-p2",
            topicTag: "linearAlgebraFoundations",
            promptText:
              "Using the same A = [[1,2],[0,1]] and B = [[3,1],[2,4]], find BA and confirm it's different from AB.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "[[3,7],[2,8]]",
            stepByStepExplanation:
              "Row 1 of B with column 1 of A: 3*1+1*0 = 3. Row 1 of B with column 2 of A: 3*2+1*1 = 7. Row 2 of B with column 1 of A: 2*1+4*0 = 2. Row 2 of B with column 2 of A: 2*2+4*1 = 8. So BA = [[3,7],[2,8]], which is indeed different from AB = [[7,9],[2,4]] from the previous problem.",
            difficultyLevel: 3,
          },
          {
            problemId: "c5-u1-l3-p3",
            topicTag: "linearAlgebraFoundations",
            promptText:
              "Let A = [[1,0,2],[3,1,0]] (a 2x3 matrix) and B = [[1,1],[0,2],[4,0]] (a 3x2 matrix). Find AB.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "[[9,1],[3,5]]",
            stepByStepExplanation:
              "Since A is 2x3 and B is 3x2, AB is defined and will be 2x2. Row 1 of A with column 1 of B: 1*1+0*0+2*4 = 9. Row 1 of A with column 2 of B: 1*1+0*2+2*0 = 1. Row 2 of A with column 1 of B: 3*1+1*0+0*4 = 3. Row 2 of A with column 2 of B: 3*1+1*2+0*0 = 5. So AB = [[9,1],[3,5]].",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "3Blue1Brown: Essence of Linear Algebra (YouTube playlist)",
            resourceUrl: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
            resourceType: "videoLesson",
          },
          {
            resourceTitle: "Khan Academy: Linear algebra",
            resourceUrl: "https://www.khanacademy.org/math/linear-algebra",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "representing-systems-of-equations-as-matrices",
        lessonTitle: "Representing Systems of Equations as Matrices",
        estimatedMinutes: 20,
        topicTag: "linearAlgebraFoundations",
        learningGoals: [
          "Convert a system of linear equations into matrix equation form Ax=b",
          "Write the augmented matrix for a system",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "One matrix equation, many equations at once",
            bodyText:
              "A system of linear equations can be packaged as a single matrix equation Ax = b, where A is the coefficient matrix (one row per equation, one column per variable), x is a column of the unknown variables, and b is a column of the constants on the right-hand side. This is the same reason matrix multiplication was defined the way it was - Ax reproduces the left-hand side of every equation in the system simultaneously.",
          },
          {
            blockType: "keyFormula",
            headingText: "Coefficient matrix, variable vector, and the augmented matrix",
            bodyText:
              "For a system, write Ax = b with A holding the coefficients (in variable order, using 0 for any missing variable), x the column of variables, and b the column of constants. The augmented matrix [A | b] combines A and b side by side with a divider, and is what you row-reduce to solve the system (next unit).",
            mathExpression:
              "Ax = b \\quad \\longleftrightarrow \\quad [A \\mid b]",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Convert the system 2x+3y=8, x-y=1 into matrix form. The coefficient matrix is A = [[2,3],[1,-1]] (row 1 from the first equation, row 2 from the second). The variable vector is x = (x,y), and the constants are b = (8,1). So the system is Ax=b with those pieces. The augmented matrix is [[2,3,8],[1,-1,1]].",
            mathExpression:
              "\\begin{bmatrix}2&3\\\\1&-1\\end{bmatrix}\\begin{bmatrix}x\\\\y\\end{bmatrix} = \\begin{bmatrix}8\\\\1\\end{bmatrix}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Skipping a variable that doesn't appear in one of the equations instead of writing a 0 for it. If an equation is missing a variable (say, an equation with no z term in a 3-variable system), the coefficient of z in that row is 0, not a blank - leaving it out shifts every other coefficient into the wrong column.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c5-u1-l4-p1",
            topicTag: "linearAlgebraFoundations",
            promptText:
              "Write the augmented matrix for the system x + 2y = 5, 3x - y = 1.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "[[1,2,5],[3,-1,1]]",
            stepByStepExplanation:
              "Row 1 comes from x+2y=5: coefficients (1,2) and constant 5. Row 2 comes from 3x-y=1: coefficients (3,-1) and constant 1.",
            difficultyLevel: 1,
          },
          {
            problemId: "c5-u1-l4-p2",
            topicTag: "linearAlgebraFoundations",
            promptText:
              "Write the coefficient matrix A (using variable order x, y, z) for the system: 2x - z = 4, y + 3z = 7, x + y = 0.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "[[2,0,-1],[0,1,3],[1,1,0]]",
            stepByStepExplanation:
              "Rewrite each equation with all three variables explicit, using 0 for missing ones: 2x+0y-z=4, 0x+y+3z=7, x+y+0z=0. The coefficient matrix collects these rows: [[2,0,-1],[0,1,3],[1,1,0]].",
            difficultyLevel: 3,
          },
          {
            problemId: "c5-u1-l4-p3",
            topicTag: "linearAlgebraFoundations",
            promptText:
              "The matrix equation Ax=b has A = [[1,1],[2,-1]] and b = (3,0). Write out the corresponding system of two equations in x and y.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "x+y=3 and 2x-y=0",
            acceptableAnswerVariants: ["x + y = 3, 2x - y = 0"],
            stepByStepExplanation:
              "Row 1 of A dotted with (x,y) set equal to the first entry of b: 1x+1y=3. Row 2 of A dotted with (x,y) set equal to the second entry of b: 2x-1y=0.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "MIT OCW 18.06: Linear Algebra (Gilbert Strang)",
            resourceUrl: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
            resourceType: "videoLesson",
          },
          {
            resourceTitle: "Khan Academy: Linear algebra",
            resourceUrl: "https://www.khanacademy.org/math/linear-algebra",
            resourceType: "interactivePractice",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "row-reduction",
    unitTitle: "Row Reduction and Solving Systems",
    unitDescription: "Row echelon form, reduced row echelon form, and Gaussian elimination.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Row Reduction and Solving Systems",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc5-row-reduction-quiz-p1",
          topicTag: "rowReductionAndGaussianElimination",
          promptText: "Apply the row operation R2 -> R2 - 2R1 to the matrix [[1,3],[2,5]]. What is the resulting matrix?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "[[1,3],[0,-1]]",
          stepByStepExplanation: "New row 2 = (2-2*1, 5-2*3) = (0,-1). Row 1 is unchanged. Result: [[1,3],[0,-1]].",
          difficultyLevel: 1,
        },
        {
          problemId: "calc5-row-reduction-quiz-p2",
          topicTag: "rowReductionAndGaussianElimination",
          promptText: "Is the matrix [[1,-2,5],[0,0,3],[0,0,0]] in row echelon form?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "yes",
          stepByStepExplanation:
            "Row 1's pivot is in column 1, row 2's pivot is in column 3 (strictly to the right of column 1), and the all-zero row is at the bottom. All the REF conditions hold.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc5-row-reduction-quiz-p3",
          topicTag: "rowReductionAndGaussianElimination",
          promptText: "Solve the system using Gaussian elimination: x + 3y = 10, 2x - y = 6.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "x=4, y=2",
          stepByStepExplanation:
            "Augmented matrix [[1,3,10],[2,-1,6]]. R2 -> R2 - 2R1 gives (0,-7,-14). Scale by -1/7: (0,1,2), so y=2. Back-substitute into x+3y=10: x=10-6=4.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc5-row-reduction-quiz-p4",
          topicTag: "rowReductionAndGaussianElimination",
          promptText: "An augmented matrix (variables x, y) reduces to RREF [[1,0,-3],[0,1,7]]. Classify and state the solution.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "unique solution: x=-3, y=7",
          stepByStepExplanation:
            "Both x and y have their own pivot column, with no contradictory rows, so there's a unique solution: x=-3, y=7.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc5-row-reduction-quiz-p5",
          topicTag: "rowReductionAndGaussianElimination",
          promptText:
            "An augmented matrix (variables x, y, z) reduces to RREF [[1,2,0,5],[0,0,1,-3],[0,0,0,0]]. Classify the solution set.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "infinitely many solutions",
          stepByStepExplanation:
            "Column 2 (for y) has no pivot, so y is free. There's no contradictory row (the zero row says 0=0), so the system is consistent with a free variable - infinitely many solutions.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc5-row-reduction-quiz-p6",
          topicTag: "rowReductionAndGaussianElimination",
          promptText: "An augmented matrix reduces to RREF [[1,0,0,2],[0,1,0,-5],[0,0,0,4]]. Classify the solution set.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "no solution",
          stepByStepExplanation: "The last row reads 0=4, a contradiction. The system is inconsistent - there is no solution.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc5-row-reduction-quiz-p7",
          topicTag: "rowReductionAndGaussianElimination",
          promptText: "Solve the system: x+y+z=6, x-y+2z=7, 2x+y-z=2.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "x=2, y=1, z=3",
          stepByStepExplanation:
            "From equation 1, x=6-y-z. Substitute into equation 2: (6-y-z)-y+2z=7, so -2y+z=1, i.e. z=1+2y. Substitute into equation 3: 2(6-y-z)+y-z=2, so 12-y-3z=2, i.e. y+3z=10. Plug in z=1+2y: y+3(1+2y)=10, so 7y=7, y=1. Then z=1+2(1)=3, and x=6-1-3=2. Check: 2+1+3=6 correct; 2-1+6=7 correct; 4+1-3=2 correct.",
          difficultyLevel: 4,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "row-operations-and-row-echelon-form",
        lessonTitle: "Row Operations and Row Echelon Form",
        estimatedMinutes: 25,
        topicTag: "rowReductionAndGaussianElimination",
        learningGoals: [
          "Apply the three elementary row operations to a matrix",
          "Recognize when a matrix is in row echelon form (REF)",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Three legal moves",
            bodyText:
              "Solving a system by elimination in algebra (adding a multiple of one equation to another, swapping equations, or scaling an equation) has an exact matrix parallel: the three elementary row operations. These operations never change the solution set of the system the matrix represents - they just rewrite it in a more convenient form.",
          },
          {
            blockType: "keyFormula",
            headingText: "The three elementary row operations and row echelon form",
            bodyText:
              "(1) Swap two rows. (2) Multiply a row by a nonzero constant. (3) Add a multiple of one row to another row. A matrix is in row echelon form (REF) when: every row of all zeros is at the bottom, and each row's first nonzero entry (its 'pivot') is strictly to the right of the pivot in the row above it.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Reduce [[1,2,3],[2,5,7]] to row echelon form. The goal is to create a zero below the pivot in column 1. Apply R2 -> R2 - 2*R1: new row 2 is (2-2*1, 5-2*2, 7-2*3) = (0, 1, 1). The matrix becomes [[1,2,3],[0,1,1]]. Each row's pivot (the 1 in row 1, column 1, and the 1 in row 2, column 2) moves strictly right going down, and there's no row of all zeros to worry about - this is already in row echelon form.",
            mathExpression:
              "\\begin{bmatrix}1&2&3\\\\2&5&7\\end{bmatrix} \\xrightarrow{R_2 \\to R_2 - 2R_1} \\begin{bmatrix}1&2&3\\\\0&1&1\\end{bmatrix}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Applying a row operation to only part of a row - for instance, subtracting 2 times row 1 from row 2's coefficient entries but forgetting to also apply it to the constant column in an augmented matrix. Every single entry in the row must receive the same operation, including the constant column.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c5-u2-l1-p1",
            topicTag: "rowReductionAndGaussianElimination",
            promptText:
              "Apply the row operation R2 -> R2 - 3R1 to the matrix [[1,2],[3,4]]. What is the resulting matrix?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "[[1,2],[0,-2]]",
            stepByStepExplanation:
              "New row 2 = (3-3*1, 4-3*2) = (0,-2). Row 1 is unchanged. Result: [[1,2],[0,-2]].",
            difficultyLevel: 1,
          },
          {
            problemId: "c5-u2-l1-p2",
            topicTag: "rowReductionAndGaussianElimination",
            promptText:
              "Is the matrix [[1,3,-2],[0,0,5],[0,0,0]] in row echelon form?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "yes",
            stepByStepExplanation:
              "Row 1's pivot is in column 1, row 2's pivot is in column 3 (strictly to the right of column 1), and the all-zero row is at the bottom. All the REF conditions hold.",
            difficultyLevel: 2,
          },
          {
            problemId: "c5-u2-l1-p3",
            topicTag: "rowReductionAndGaussianElimination",
            promptText: "Reduce [[2,4],[1,5]] to row echelon form using the operation R2 -> R2 - (1/2)R1.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "[[2,4],[0,3]]",
            stepByStepExplanation:
              "New row 2 = (1 - 0.5*2, 5 - 0.5*4) = (0, 3). Row 1 stays (2,4). Result: [[2,4],[0,3]], which is in row echelon form.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "MIT OCW 18.06: Linear Algebra (Gilbert Strang)",
            resourceUrl: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
            resourceType: "videoLesson",
          },
          {
            resourceTitle: "Khan Academy: Linear algebra",
            resourceUrl: "https://www.khanacademy.org/math/linear-algebra",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "reduced-row-echelon-form-and-gaussian-elimination",
        lessonTitle: "Reduced Row Echelon Form and Gaussian Elimination",
        estimatedMinutes: 25,
        topicTag: "rowReductionAndGaussianElimination",
        learningGoals: [
          "Reduce a matrix to reduced row echelon form (RREF)",
          "Solve a system of equations using Gaussian elimination",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Pushing all the way to the answer",
            bodyText:
              "Row echelon form gets you partway there, but reduced row echelon form (RREF) goes further: every pivot is scaled to exactly 1, and every entry above AND below each pivot is 0. Once an augmented matrix reaches RREF, the solution can simply be read straight off - no back-substitution needed. Gaussian elimination is the whole process of using row operations to get there.",
          },
          {
            blockType: "keyFormula",
            headingText: "Reduced row echelon form (RREF)",
            bodyText:
              "A matrix is in RREF when it's in row echelon form, every pivot equals 1, and every pivot is the only nonzero entry in its column (zeros above and below it, not just below).",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: solving a system fully",
            bodyText:
              "Solve 2x+y=5, x-y=1. Augmented matrix: [[2,1,5],[1,-1,1]]. Swap rows to get a 1 in the top-left: [[1,-1,1],[2,1,5]]. Apply R2 -> R2 - 2R1: new row 2 is (2-2, 1-2*(-1), 5-2*1) = (0,3,3), giving [[1,-1,1],[0,3,3]]. Scale row 2 by 1/3: [[1,-1,1],[0,1,1]]. Finally clear above the row-2 pivot with R1 -> R1 + R2: new row 1 is (1+0, -1+1, 1+1) = (1,0,2). The matrix is now [[1,0,2],[0,1,1]] - fully RREF, reading directly off: x=2, y=1. Check: 2(2)+1=5 correct, and 2-1=1 correct.",
            mathExpression: "\\begin{bmatrix}1&0&2\\\\0&1&1\\end{bmatrix} \\implies x=2,\\ y=1",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Stopping at row echelon form and trying to read the answer directly, without finishing the back-substitution (or, in Gauss-Jordan style, without clearing the entries above each pivot). Row echelon form alone does not display the solution - only RREF does that directly.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c5-u2-l2-p1",
            topicTag: "rowReductionAndGaussianElimination",
            promptText: "Solve the system using Gaussian elimination: x + y = 7, x - y = 1.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "x=4, y=3",
            stepByStepExplanation:
              "Augmented matrix [[1,1,7],[1,-1,1]]. R2 -> R2 - R1 gives (0,-2,-6). Scale by -1/2: (0,1,3), so y=3. Back-substitute into x+y=7: x=4.",
            difficultyLevel: 2,
          },
          {
            problemId: "c5-u2-l2-p2",
            topicTag: "rowReductionAndGaussianElimination",
            promptText: "Solve the system using Gaussian elimination: 3x + 2y = 16, x + y = 6.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "x=4, y=2",
            stepByStepExplanation:
              "Augmented matrix [[3,2,16],[1,1,6]]. Swap rows: [[1,1,6],[3,2,16]]. R2 -> R2 - 3R1 gives (0,-1,-2). Scale by -1: (0,1,2), so y=2. Back-substitute into x+y=6: x=4.",
            difficultyLevel: 2,
          },
          {
            problemId: "c5-u2-l2-p3",
            topicTag: "rowReductionAndGaussianElimination",
            promptText:
              "Solve the system: x + y + z = 6, 2y + 5z = -4, 2x + 5y - z = 27.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "x=5, y=3, z=-2",
            stepByStepExplanation:
              "Eliminate x from equation 3 using equation 1 (subtract 2 times equation 1): (2x+5y-z) - 2(x+y+z) = 27 - 12, giving 3y-3z=15, or y-z=5. Combined with 2y+5z=-4: solve this 2x2 subsystem. From y-z=5, y=z+5. Substitute: 2(z+5)+5z=-4, so 2z+10+5z=-4, 7z=-14, z=-2. Then y=z+5=3. Back into equation 1: x+3+(-2)=6, so x=5. Check all three original equations: 5+3-2=6 correct; 2(3)+5(-2)=6-10=-4 correct; 2(5)+5(3)-(-2)=10+15+2=27 correct.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "MIT OCW 18.06: Linear Algebra (Gilbert Strang)",
            resourceUrl: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
            resourceType: "videoLesson",
          },
          {
            resourceTitle: "Khan Academy: Linear algebra",
            resourceUrl: "https://www.khanacademy.org/math/linear-algebra",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "classifying-solutions-unique-none-or-infinite",
        lessonTitle: "Classifying Solutions: Unique, None, or Infinite",
        estimatedMinutes: 20,
        topicTag: "rowReductionAndGaussianElimination",
        learningGoals: [
          "Recognize an inconsistent system from its reduced augmented matrix",
          "Recognize infinitely many solutions and express the general solution using a free variable",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Reading the reduced matrix's story",
            bodyText:
              "Once an augmented matrix is in RREF, its shape tells you everything about the solution set. Every variable with its own pivot column is 'pinned down' by the other rows. A variable with no pivot column becomes a free variable, meaning it can be anything, and the pinned-down variables are then expressed in terms of it. A row that says '0 = nonzero number' is an outright contradiction.",
          },
          {
            blockType: "keyFormula",
            headingText: "The three outcomes",
            bodyText:
              "Unique solution: every variable has a pivot, no contradictions. Infinitely many solutions: no contradictions, but at least one variable has no pivot (a free variable) - describe the general solution in terms of it. No solution: some row reduces to (0, 0, ..., 0 | c) with c not equal to 0, meaning '0 equals a nonzero number' - impossible.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: telling 0=0 apart from 0=c",
            bodyText:
              "Suppose an augmented matrix reduces to [[1,2,3],[0,0,5]]. Row 2 says 0x+0y=5, i.e. 0=5 - a contradiction, so there is no solution. Now suppose instead it reduces to [[1,2,3],[0,0,0]]. Row 2 says 0=0, which is always true and adds no new information - column 2 (for y) has no pivot, so y is free, and from row 1, x = 3-2y. The system has infinitely many solutions, one for every choice of y.",
            mathExpression: "0=5 \\text{ (no solution)} \\quad\\text{vs.}\\quad 0=0 \\text{ (infinitely many solutions)}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Confusing a row of all zeros with a nonzero constant (0 = c, meaning NO solution) with a row that is entirely zero including the constant (0 = 0, meaning INFINITELY MANY solutions). These two rows look almost identical at a glance but mean the exact opposite thing - always check whether the very last entry in that zero row is zero or not.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c5-u2-l3-p1",
            topicTag: "rowReductionAndGaussianElimination",
            promptText:
              "An augmented matrix reduces to RREF [[1,0,4],[0,1,-2]]. Classify and state the solution.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "unique solution: x=4, y=-2",
            stepByStepExplanation:
              "Both x and y have their own pivot column, with no contradictory rows, so there's a unique solution: x=4, y=-2.",
            difficultyLevel: 2,
          },
          {
            problemId: "c5-u2-l3-p2",
            topicTag: "rowReductionAndGaussianElimination",
            promptText:
              "An augmented matrix (variables x, y, z) reduces to RREF [[1,-3,0,2],[0,0,1,5],[0,0,0,0]]. Classify the solution set.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "infinitely many solutions",
            stepByStepExplanation:
              "Column 2 (for y) has no pivot, so y is free. There's no contradictory row (the zero row says 0=0), so the system is consistent with a free variable - infinitely many solutions.",
            difficultyLevel: 3,
          },
          {
            problemId: "c5-u2-l3-p3",
            topicTag: "rowReductionAndGaussianElimination",
            promptText:
              "An augmented matrix reduces to RREF [[1,0,0,3],[0,1,0,-1],[0,0,0,7]]. Classify the solution set.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "no solution",
            stepByStepExplanation:
              "The last row reads 0x+0y+0z=7, i.e. 0=7, a contradiction. The system is inconsistent - there is no solution.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Khan Academy: Linear algebra",
            resourceUrl: "https://www.khanacademy.org/math/linear-algebra",
            resourceType: "interactivePractice",
          },
          {
            resourceTitle: "MIT OCW 18.06: Linear Algebra (Gilbert Strang)",
            resourceUrl: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
            resourceType: "videoLesson",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "determinants",
    unitTitle: "Determinants",
    unitDescription: "Computing determinants, their properties, and their geometric meaning.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Determinants",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc5-determinants-quiz-p1",
          topicTag: "determinants",
          promptText: "Find det([[6,2],[1,3]]).",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "16",
          stepByStepExplanation: "det = 6*3 - 2*1 = 18-2 = 16.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc5-determinants-quiz-p2",
          topicTag: "determinants",
          promptText: "Find det([[1,0,2],[3,-1,4],[0,2,1]]) by expanding along the first row.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "3",
          stepByStepExplanation:
            "det = 1*((-1)(1)-(4)(2)) - 0*((3)(1)-(4)(0)) + 2*((3)(2)-(-1)(0)) = 1*(-1-8) - 0 + 2*(6-0) = -9+12 = 3.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc5-determinants-quiz-p3",
          topicTag: "determinants",
          promptText:
            "For A = [[3,1,2],[0,4,5],[1,0,6]], find the minor M12 (delete row 1 and column 2, then take the determinant of what's left).",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "-5",
          stepByStepExplanation: "Deleting row 1 and column 2 leaves [[0,5],[1,6]]. Its determinant is 0*6 - 5*1 = -5.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc5-determinants-quiz-p4",
          topicTag: "determinants",
          promptText: "Using the same A = [[3,1,2],[0,4,5],[1,0,6]], find the cofactor C12.",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "5",
          stepByStepExplanation: "M12 = -5 (from the previous question). The sign for position (1,2) is (-1)^(1+2) = -1, so C12 = -1*(-5) = 5.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc5-determinants-quiz-p5",
          topicTag: "determinants",
          promptText: "Find det of the upper triangular matrix [[4,2,7],[0,-3,1],[0,0,2]].",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "-24",
          stepByStepExplanation: "For a triangular matrix, the determinant is the product of the diagonal entries: 4*(-3)*2 = -24.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc5-determinants-quiz-p6",
          topicTag: "determinants",
          promptText: "det(A) = 6 for a 3x3 matrix A. Matrix B is obtained by scaling one row of A by -2. What is det(B)?",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "-12",
          stepByStepExplanation: "Scaling a single row of a matrix by a constant k scales the whole determinant by k: det(B) = 6*(-2) = -12.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc5-determinants-quiz-p7",
          topicTag: "determinants",
          promptText: "Find the area of the parallelogram spanned by the vectors (3,-1) and (2,4).",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "14",
          stepByStepExplanation: "det([[3,2],[-1,4]]) = 3*4 - 2*(-1) = 12+2 = 14. Area = |14| = 14.",
          difficultyLevel: 2,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "determinants-of-2x2-and-3x3-matrices",
        lessonTitle: "Determinants of 2x2 and 3x3 Matrices",
        estimatedMinutes: 25,
        topicTag: "determinants",
        learningGoals: [
          "Compute the determinant of a 2x2 matrix",
          "Compute the determinant of a 3x3 matrix by expansion along a row",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "A single number that summarizes a square matrix",
            bodyText:
              "The determinant is a single number computed from a square matrix (only square matrices have one at all) that packs in a surprising amount of information: whether the matrix is invertible, how it scales area or volume, and later, whether a number is an eigenvalue. For now, focus on the mechanics of computing it.",
          },
          {
            blockType: "keyFormula",
            headingText: "The 2x2 formula",
            bodyText:
              "For A = [[a,b],[c,d]], the determinant is ad - bc (top-left times bottom-right, minus top-right times bottom-left).",
            mathExpression: "\\det\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix} = ad-bc",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: 2x2 and 3x3",
            bodyText:
              "For A = [[3,2],[1,4]]: det(A) = 3*4 - 2*1 = 12-2 = 10. For a 3x3 matrix B = [[1,2,3],[0,1,4],[5,6,0]], expand along the first row: det(B) = 1*(1*0-4*6) - 2*(0*0-4*5) + 3*(0*6-1*5) = 1*(0-24) - 2*(0-20) + 3*(0-5) = -24 - (-40) + (-15) = -24+40-15 = 1.",
            mathExpression: "\\det(B) = 1(1\\cdot0-4\\cdot6)-2(0\\cdot0-4\\cdot5)+3(0\\cdot6-1\\cdot5) = 1",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "For the 2x2 formula, subtracting in the wrong order (writing bc-ad instead of ad-bc). And for 3x3, trying to force the 2x2 formula directly onto a 3x3 grid instead of expanding row-by-row with 2x2 sub-determinants (minors).",
          },
        ],
        practiceProblems: [
          {
            problemId: "c5-u3-l1-p1",
            topicTag: "determinants",
            promptText: "Find det([[5,3],[2,4]]).",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "14",
            stepByStepExplanation: "det = 5*4 - 3*2 = 20-6 = 14.",
            difficultyLevel: 1,
          },
          {
            problemId: "c5-u3-l1-p2",
            topicTag: "determinants",
            promptText: "Find det([[2,-1],[3,4]]).",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "11",
            stepByStepExplanation: "det = 2*4 - (-1)*3 = 8 - (-3) = 8+3 = 11.",
            difficultyLevel: 1,
          },
          {
            problemId: "c5-u3-l1-p3",
            topicTag: "determinants",
            promptText: "Find det([[2,0,1],[3,1,0],[0,2,4]]) by expanding along the first row.",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "14",
            stepByStepExplanation:
              "det = 2*(1*4-0*2) - 0*(3*4-0*0) + 1*(3*2-1*0) = 2*4 - 0 + 1*6 = 8+6 = 14.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "MIT OCW 18.06: Linear Algebra (Gilbert Strang)",
            resourceUrl: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
            resourceType: "videoLesson",
          },
          {
            resourceTitle: "Khan Academy: Linear algebra",
            resourceUrl: "https://www.khanacademy.org/math/linear-algebra",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "cofactor-expansion-for-larger-matrices",
        lessonTitle: "Cofactor Expansion for Larger Matrices",
        estimatedMinutes: 25,
        topicTag: "determinants",
        learningGoals: [
          "Compute a minor and a cofactor for an entry of a matrix",
          "Choose a row or column strategically to simplify a cofactor expansion",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Minors, cofactors, and choosing wisely",
            bodyText:
              "The minor M_ij of a matrix is the determinant of the smaller matrix left over after deleting row i and column j. The cofactor C_ij is that minor with a sign attached: C_ij = (-1)^(i+j) * M_ij. The determinant can then be computed by expanding along ANY row or column - multiplying each entry by its cofactor and adding. Choosing a row or column with the most zeros makes the arithmetic much shorter, since any term multiplied by a zero entry vanishes automatically.",
          },
          {
            blockType: "keyFormula",
            headingText: "Cofactor expansion and the sign pattern",
            bodyText:
              "det(A) = sum over j of a_ij * C_ij (expanding along row i), where C_ij = (-1)^(i+j) * M_ij. The signs form a checkerboard pattern starting with + in the top-left: + - + / - + - / + - +.",
            mathExpression: "\\det(A) = \\sum_{j} a_{ij}\\,C_{ij}, \\qquad C_{ij} = (-1)^{i+j}M_{ij}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: expanding along a column with zeros",
            bodyText:
              "Find det of A = [[1,0,2],[3,1,-1],[2,0,1]] by expanding along column 2, which has two zeros. Only the middle entry (a_22=1) contributes. Its cofactor is C_22 = (+1)*M_22, where M_22 is the determinant left after deleting row 2 and column 2: det([[1,2],[2,1]]) = 1*1-2*2 = -3. So det(A) = a_12*C_12 + a_22*C_22 + a_32*C_32 = 0 + 1*(-3) + 0 = -3. (As a check, expanding along the first row instead gives the same answer: 1*(1*1-(-1)*0) - 0 + 2*(3*0-1*2) = 1 - 4 = -3.)",
            mathExpression: "\\det(A) = -3",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Forgetting the checkerboard sign pattern (+,-,+ / -,+,- / +,-,+) when building cofactors, especially for the entries where i+j is odd. A minor is always computed the same way regardless of position, but the cofactor's sign flips depending on the entry's position - skip that sign and every expansion along an 'odd' position comes out backwards.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c5-u3-l2-p1",
            topicTag: "determinants",
            promptText:
              "For A = [[2,1,0],[3,4,5],[1,0,6]], find the minor M11 (delete row 1 and column 1, then take the determinant of what's left).",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "24",
            stepByStepExplanation:
              "Deleting row 1 and column 1 leaves [[4,5],[0,6]]. Its determinant is 4*6 - 5*0 = 24.",
            difficultyLevel: 2,
          },
          {
            problemId: "c5-u3-l2-p2",
            topicTag: "determinants",
            promptText:
              "Using the same A = [[2,1,0],[3,4,5],[1,0,6]], find the cofactor C21 (delete row 2 and column 1, take the determinant, then apply the correct sign).",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "-6",
            stepByStepExplanation:
              "Deleting row 2 and column 1 leaves [[1,0],[0,6]], with determinant 1*6-0*0=6. The sign for position (2,1) is (-1)^(2+1) = -1, so C21 = -6.",
            difficultyLevel: 3,
          },
          {
            problemId: "c5-u3-l2-p3",
            topicTag: "determinants",
            promptText:
              "Using cofactor expansion along the first column, find det([[2,1,0],[3,4,5],[1,0,6]]).",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "35",
            stepByStepExplanation:
              "C11 = +det([[4,5],[0,6]]) = 24. C21 = -det([[1,0],[0,6]]) = -6. C31 = +det([[1,0],[4,5]]) = 5. det(A) = a11*C11 + a21*C21 + a31*C31 = 2*24 + 3*(-6) + 1*5 = 48-18+5 = 35.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "MIT OCW 18.06: Linear Algebra (Gilbert Strang)",
            resourceUrl: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
            resourceType: "videoLesson",
          },
          {
            resourceTitle: "Khan Academy: Linear algebra",
            resourceUrl: "https://www.khanacademy.org/math/linear-algebra",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "properties-of-determinants",
        lessonTitle: "Properties of Determinants",
        estimatedMinutes: 20,
        topicTag: "determinants",
        learningGoals: [
          "Use the row-operation effects on a determinant to simplify computation",
          "Apply det(AB) = det(A)det(B) and the triangular-matrix shortcut",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Determinants and row operations",
            bodyText:
              "Instead of always expanding by cofactors, several properties let you shortcut the computation. Swapping two rows flips the sign of the determinant. Scaling one row by a constant k scales the whole determinant by k. Adding a multiple of one row to another leaves the determinant completely unchanged - which is exactly the operation used in row reduction, so you can compute a large determinant by reducing to triangular form and just multiplying the diagonal.",
          },
          {
            blockType: "keyFormula",
            headingText: "Key determinant properties",
            bodyText:
              "det(AB) = det(A) * det(B). det(A^T) = det(A). A triangular matrix's determinant is simply the product of its diagonal entries. det(A) = 0 exactly when A is singular (not invertible) - the central fact that connects this unit to the next.",
            mathExpression: "\\det(AB) = \\det(A)\\det(B), \\qquad \\det\\!\\begin{bmatrix}d_1&*&*\\\\0&d_2&*\\\\0&0&d_3\\end{bmatrix} = d_1d_2d_3",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "For the upper triangular matrix [[2,3,7],[0,-1,4],[0,0,5]], the determinant is just the product of the diagonal: 2*(-1)*5 = -10 - no cofactor expansion needed at all. For the sign-flip property: det([[1,2],[3,4]]) = 1*4-2*3 = -2. Swap the two rows to get [[3,4],[1,2]]: its determinant is 3*2-4*1 = 6-4 = 2, which is indeed -(-2), confirming the sign flip.",
            mathExpression: "\\det = 2(-1)(5) = -10",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Assuming det(A+B) = det(A) + det(B). This is false in general - determinants do not distribute over matrix addition the way they distribute over matrix multiplication. Always compute A+B first, then take the determinant of the sum.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c5-u3-l3-p1",
            topicTag: "determinants",
            promptText: "Find det of the lower triangular matrix [[3,0,0],[5,-2,0],[1,4,6]].",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "-36",
            stepByStepExplanation: "For a triangular matrix, the determinant is the product of the diagonal entries: 3*(-2)*6 = -36.",
            difficultyLevel: 1,
          },
          {
            problemId: "c5-u3-l3-p2",
            topicTag: "determinants",
            promptText:
              "det(A) = 5 for a 2x2 matrix A. Matrix B is obtained by swapping A's two rows. What is det(B)?",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "-5",
            stepByStepExplanation: "Swapping two rows always flips the sign of the determinant, so det(B) = -5.",
            difficultyLevel: 2,
          },
          {
            problemId: "c5-u3-l3-p3",
            topicTag: "determinants",
            promptText: "If det(A) = 4 and det(B) = 3 for two n x n matrices, what is det(AB)?",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "12",
            stepByStepExplanation: "det(AB) = det(A) * det(B) = 4 * 3 = 12.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Khan Academy: Linear algebra",
            resourceUrl: "https://www.khanacademy.org/math/linear-algebra",
            resourceType: "interactivePractice",
          },
          {
            resourceTitle: "MIT OCW 18.06: Linear Algebra (Gilbert Strang)",
            resourceUrl: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "geometric-meaning-of-the-determinant",
        lessonTitle: "Geometric Meaning of the Determinant",
        estimatedMinutes: 20,
        topicTag: "determinants",
        learningGoals: [
          "Interpret the absolute value of a 2x2 determinant as the area of a parallelogram",
          "Connect a zero determinant to linearly dependent (collinear) vectors",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Determinants measure scaling",
            bodyText:
              "Take the two columns of a 2x2 matrix as vectors in the plane. The absolute value of the determinant equals the area of the parallelogram those two vectors span. For a 3x3 matrix, the same idea extends to volume: the absolute value of the determinant is the volume of the parallelepiped (a skewed box) formed by the three column vectors. The sign of the determinant carries extra information: it flips if the vectors' orientation (handedness) reverses. This exact idea - a determinant as a local area/volume scaling factor - reappears directly as the Jacobian when Calculus III changes variables in a multiple integral.",
          },
          {
            blockType: "keyFormula",
            headingText: "Area as a determinant",
            bodyText:
              "For vectors u=(a,c) and v=(b,d), the area of the parallelogram they span is |det([[a,b],[c,d]])| = |ad-bc|.",
            mathExpression: "\\text{Area} = \\left|\\det\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}\\right|",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find the area of the parallelogram spanned by u=(3,1) and v=(1,2). Form the matrix with these as columns: [[3,1],[1,2]]. Its determinant is 3*2 - 1*1 = 6-1 = 5. Since area is never negative, the area is |5| = 5.",
            mathExpression: "\\text{Area} = |3\\cdot 2 - 1\\cdot 1| = 5",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Forgetting the absolute value bars and reporting a negative number as an area. The determinant itself can be negative (that's meaningful - it signals an orientation flip), but area and volume are always non-negative, so the final geometric answer always takes the absolute value.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c5-u3-l4-p1",
            topicTag: "determinants",
            promptText: "Find the area of the parallelogram spanned by the vectors (2,0) and (1,3).",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "6",
            stepByStepExplanation: "det([[2,1],[0,3]]) = 2*3 - 1*0 = 6. Area = |6| = 6.",
            difficultyLevel: 2,
          },
          {
            problemId: "c5-u3-l4-p2",
            topicTag: "determinants",
            promptText:
              "Find the area of the parallelogram spanned by (4,2) and (2,1), and explain what the result reveals about the two vectors.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "0; the vectors are parallel (collinear), so they don't form a real parallelogram",
            stepByStepExplanation:
              "det([[4,2],[2,1]]) = 4*1 - 2*2 = 4-4 = 0. A zero determinant means zero area, which happens exactly when the two vectors are scalar multiples of each other (here, (4,2) = 2*(2,1)) - they point along the same line, so there's no parallelogram to measure.",
            difficultyLevel: 3,
          },
          {
            problemId: "c5-u3-l4-p3",
            topicTag: "determinants",
            promptText:
              "A 3x3 matrix has determinant -8. What is the volume of the parallelepiped formed by its column vectors, and what does the negative sign indicate?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "volume = 8; the negative sign indicates the column vectors form an orientation-reversed (left-handed) system",
            stepByStepExplanation:
              "Volume is always the absolute value of the determinant: |-8| = 8. The negative sign itself doesn't affect the size of the box, only its orientation - it tells you the three vectors are arranged in a 'flipped' handedness compared to the standard basis.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "3Blue1Brown: Essence of Linear Algebra (YouTube playlist)",
            resourceUrl: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
            resourceType: "videoLesson",
          },
          {
            resourceTitle: "MIT OCW 18.06: Linear Algebra (Gilbert Strang)",
            resourceUrl: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
            resourceType: "videoLesson",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "matrix-inverses",
    unitTitle: "Matrix Inverses",
    unitDescription: "Invertibility, finding an inverse by row reduction or the adjugate, and solving matrix equations.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Matrix Inverses",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc5-matrix-inverses-quiz-p1",
          topicTag: "matrixInverses",
          promptText: "Is A = [[4,8],[1,2]] invertible?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "no",
          stepByStepExplanation: "det(A) = 4*2 - 8*1 = 8-8 = 0, so A is singular and not invertible.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc5-matrix-inverses-quiz-p2",
          topicTag: "matrixInverses",
          promptText: "Is B = [[2,5],[1,3]] invertible?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "yes",
          stepByStepExplanation: "det(B) = 2*3 - 5*1 = 6-5 = 1, which is nonzero, so B is invertible.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc5-matrix-inverses-quiz-p3",
          topicTag: "matrixInverses",
          promptText: "Use the 2x2 shortcut formula to find the inverse of B = [[2,5],[1,3]] from the previous problem.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "[[3,-5],[-1,2]]",
          stepByStepExplanation:
            "det(B) = 1 (from the previous problem). B^-1 = (1/1)*[[3,-5],[-1,2]] = [[3,-5],[-1,2]]. Check: B*B^-1 = [[2,5],[1,3]]*[[3,-5],[-1,2]] = [[6-5,-10+10],[3-3,-5+6]] = [[1,0],[0,1]].",
          difficultyLevel: 2,
        },
        {
          problemId: "calc5-matrix-inverses-quiz-p4",
          topicTag: "matrixInverses",
          promptText: "Find the inverse of A = [[1,2],[3,5]] using row reduction on [A | I].",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "[[-5,2],[3,-1]]",
          stepByStepExplanation:
            "Augment [[1,2,1,0],[3,5,0,1]]. R2 -> R2-3R1 gives (0,-1,-3,1). Scale R2 by -1: (0,1,3,-1). R1 -> R1-2R2 gives (1,0,1-6,0+2) = (1,0,-5,2). Result: A^-1 = [[-5,2],[3,-1]]. Check: A*A^-1 = [[1,2],[3,5]]*[[-5,2],[3,-1]] = [[-5+6,2-2],[-15+15,6-5]] = [[1,0],[0,1]].",
          difficultyLevel: 4,
        },
        {
          problemId: "calc5-matrix-inverses-quiz-p5",
          topicTag: "matrixInverses",
          promptText:
            "While row-reducing [A | I], the left side reaches [[1,3],[0,0]] before the right side has become the identity. What does this tell you about A?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "A is not invertible",
          stepByStepExplanation:
            "If the left side can't be fully reduced to the identity matrix (a row of all zeros shows up instead), A is singular and has no inverse.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc5-matrix-inverses-quiz-p6",
          topicTag: "matrixInverses",
          promptText: "Using B = [[2,5],[1,3]] with B^-1 = [[3,-5],[-1,2]] (found earlier), solve Bx = b for b = (9,4).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "x=7, y=-1",
          stepByStepExplanation:
            "x = B^-1 b: first entry 3*9+(-5)*4 = 27-20 = 7; second entry -1*9+2*4 = -9+8 = -1. So x=7, y=-1. Check: 2(7)+5(-1)=9 correct; 1(7)+3(-1)=4 correct.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc5-matrix-inverses-quiz-p7",
          topicTag: "matrixInverses",
          promptText: "If AB = C and A is invertible, solve the equation for B, keeping the correct multiplication order.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "B = A^-1 C",
          stepByStepExplanation:
            "Left-multiply both sides by A^-1: A^-1(AB) = A^-1 C, so IB = B = A^-1 C - never C*A^-1, which would multiply on the wrong side.",
          difficultyLevel: 3,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "invertibility-and-the-identity-matrix",
        lessonTitle: "Invertibility and the Identity Matrix",
        estimatedMinutes: 20,
        topicTag: "matrixInverses",
        learningGoals: [
          "State the defining property of a matrix inverse",
          "Determine whether a matrix is invertible using its determinant",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "The matrix version of 'dividing'",
            bodyText:
              "There's no such thing as matrix division, but there is a matrix inverse, which plays the same role. A^-1 (read 'A inverse') is a matrix that, when multiplied by A in either order, gives the identity matrix - just like a number times its reciprocal gives 1. Only square matrices can even be candidates for having an inverse, and not every square matrix has one.",
          },
          {
            blockType: "keyFormula",
            headingText: "Definition and the invertibility test",
            bodyText:
              "A^-1 satisfies A*A^-1 = I = A^-1*A. A square matrix A is invertible (also called 'nonsingular') exactly when det(A) is not zero. If det(A) = 0, A is called singular, and it has no inverse at all.",
            mathExpression: "A A^{-1} = I = A^{-1}A \\iff \\det(A) \\neq 0",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Is A = [[2,1],[4,2]] invertible? Compute the determinant: det(A) = 2*2 - 1*4 = 4-4 = 0. Since the determinant is 0, A is singular - it has no inverse. This makes sense geometrically too: row 2 is exactly twice row 1, so the rows (and columns) are linearly dependent, which is exactly the situation a zero determinant flags.",
            mathExpression: "\\det(A)=0 \\implies A \\text{ is singular (not invertible)}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Assuming every nonzero matrix has an inverse, or trying to find 'the inverse' of a non-square matrix. A 2x3 matrix has no inverse whatsoever, no matter what its entries are - invertibility requires being square as a first, non-negotiable requirement.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c5-u4-l1-p1",
            topicTag: "matrixInverses",
            promptText: "Is A = [[3,6],[1,2]] invertible?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "no",
            stepByStepExplanation: "det(A) = 3*2 - 6*1 = 6-6 = 0, so A is singular and not invertible.",
            difficultyLevel: 1,
          },
          {
            problemId: "c5-u4-l1-p2",
            topicTag: "matrixInverses",
            promptText: "Is B = [[1,2],[3,5]] invertible?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "yes",
            stepByStepExplanation: "det(B) = 1*5 - 2*3 = 5-6 = -1, which is nonzero, so B is invertible.",
            difficultyLevel: 1,
          },
          {
            problemId: "c5-u4-l1-p3",
            topicTag: "matrixInverses",
            promptText: "Can a 2x3 matrix have an inverse? Why or why not?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "no, because only square matrices can be invertible",
            stepByStepExplanation:
              "Invertibility is only defined for square (n x n) matrices, since A*A^-1 and A^-1*A must both produce the same-sized identity matrix. A 2x3 matrix can never satisfy that, regardless of its entries.",
            difficultyLevel: 1,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "MIT OCW 18.06: Linear Algebra (Gilbert Strang)",
            resourceUrl: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
            resourceType: "videoLesson",
          },
          {
            resourceTitle: "Khan Academy: Linear algebra",
            resourceUrl: "https://www.khanacademy.org/math/linear-algebra",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "finding-an-inverse-by-row-reduction",
        lessonTitle: "Finding an Inverse by Row Reduction",
        estimatedMinutes: 25,
        topicTag: "matrixInverses",
        learningGoals: ["Find a matrix's inverse by row-reducing the augmented matrix [A | I]"],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "The [A | I] trick",
            bodyText:
              "To find A^-1, build the augmented matrix [A | I] (A on the left, the identity matrix of the same size on the right), then row-reduce the ENTIRE augmented matrix, applying every operation to both halves simultaneously. If A is invertible, the left side will eventually become the identity matrix, and at that exact moment the right side has become A^-1.",
          },
          {
            blockType: "keyFormula",
            headingText: "The row-reduction method",
            bodyText: "[A | I] --(row reduce)--> [I | A^-1], provided A is invertible.",
            mathExpression: "[A\\mid I] \\xrightarrow{\\text{row reduce}} [I \\mid A^{-1}]",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find the inverse of A = [[2,1],[1,1]]. Augment: [[2,1,1,0],[1,1,0,1]]. Swap rows: [[1,1,0,1],[2,1,1,0]]. Apply R2 -> R2 - 2R1: new row 2 is (0,-1,1,-2), giving [[1,1,0,1],[0,-1,1,-2]]. Scale R2 by -1: [[1,1,0,1],[0,1,-1,2]]. Apply R1 -> R1 - R2: new row 1 is (1,0,1,-1). The matrix is now [[1,0,1,-1],[0,1,-1,2]], so A^-1 = [[1,-1],[-1,2]]. Check: A*A^-1 = [[2,1],[1,1]]*[[1,-1],[-1,2]] = [[2-1,-2+2],[1-1,-1+2]] = [[1,0],[0,1]], confirming the inverse is correct.",
            mathExpression: "A^{-1} = \\begin{bmatrix}1&-1\\\\-1&2\\end{bmatrix}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Applying a row operation to the left half of the augmented matrix only, and forgetting to apply the exact same operation to the right half at the same time. Both halves must move together through every single step, or the final right-hand side won't actually be the inverse.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c5-u4-l2-p1",
            topicTag: "matrixInverses",
            promptText: "Find the inverse of A = [[1,2],[1,3]] using row reduction on [A | I].",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "[[3,-2],[-1,1]]",
            stepByStepExplanation:
              "Augment [[1,2,1,0],[1,3,0,1]]. R2 -> R2-R1 gives (0,1,-1,1). R1 -> R1-2R2 gives (1,0,1-2(-1),0-2(1)) = (1,0,3,-2). Result: A^-1 = [[3,-2],[-1,1]]. Check: A*A^-1 = [[1,2],[1,3]]*[[3,-2],[-1,1]] = [[3-2,-2+2],[3-3,-2+3]] = [[1,0],[0,1]].",
            difficultyLevel: 3,
          },
          {
            problemId: "c5-u4-l2-p2",
            topicTag: "matrixInverses",
            promptText: "Find the inverse of A = [[4,3],[3,2]] using row reduction.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "[[-2,3],[3,-4]]",
            stepByStepExplanation:
              "Augment [[4,3,1,0],[3,2,0,1]]. Scale R1 by 1/4: (1,0.75,0.25,0). R2 -> R2-3R1 gives (0,-0.25,-0.75,1). Scale R2 by -4: (0,1,3,-4). R1 -> R1-0.75R2 gives (1,0,0.25-2.25,0+3) = (1,0,-2,3). Result: A^-1 = [[-2,3],[3,-4]]. Check: A*A^-1 = [[4,3],[3,2]]*[[-2,3],[3,-4]] = [[-8+9,12-12],[-6+6,9-8]] = [[1,0],[0,1]].",
            difficultyLevel: 4,
          },
          {
            problemId: "c5-u4-l2-p3",
            topicTag: "matrixInverses",
            promptText:
              "While row-reducing [A | I], the left side reaches [[1,0],[0,0]] before the right side has become the identity. What does this tell you about A?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "A is not invertible",
            stepByStepExplanation:
              "If the left side can't be fully reduced to the identity matrix (a row of all zeros shows up instead), the row-reduction process has revealed that A is singular - it has no inverse, and the process should stop there rather than continuing.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "MIT OCW 18.06: Linear Algebra (Gilbert Strang)",
            resourceUrl: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
            resourceType: "videoLesson",
          },
          {
            resourceTitle: "Khan Academy: Linear algebra",
            resourceUrl: "https://www.khanacademy.org/math/linear-algebra",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "finding-an-inverse-using-the-adjugate-and-determinant",
        lessonTitle: "Finding an Inverse Using the Adjugate and Determinant",
        estimatedMinutes: 20,
        topicTag: "matrixInverses",
        learningGoals: [
          "Use the 2x2 shortcut formula to find an inverse",
          "Build the adjugate matrix from cofactors to find a general inverse",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "A formula-based alternative to row reduction",
            bodyText:
              "For a 2x2 matrix, there's a direct shortcut. For larger matrices, the same idea generalizes using the adjugate: build the matrix of all cofactors (from the previous unit), transpose it (swap rows and columns), and divide every entry by the determinant.",
          },
          {
            blockType: "keyFormula",
            headingText: "The 2x2 shortcut and the general adjugate formula",
            bodyText:
              "For A = [[a,b],[c,d]]: A^-1 = (1/det(A)) * [[d,-b],[-c,a]]. In general: A^-1 = adj(A)/det(A), where adj(A) is the transpose of the cofactor matrix (the matrix whose (i,j) entry is C_ij).",
            mathExpression: "A^{-1} = \\dfrac{1}{ad-bc}\\begin{bmatrix}d&-b\\\\-c&a\\end{bmatrix}, \\qquad A^{-1} = \\dfrac{1}{\\det(A)}\\,\\mathrm{adj}(A)",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find the inverse of A = [[3,2],[1,4]] using the 2x2 shortcut. det(A) = 3*4-2*1 = 10. A^-1 = (1/10)*[[4,-2],[-1,3]] = [[0.4,-0.2],[-0.1,0.3]]. Check: A*A^-1 = [[3,2],[1,4]]*[[0.4,-0.2],[-0.1,0.3]] = [[1.2-0.2,-0.6+0.6],[0.4-0.4,-0.2+1.2]] = [[1,0],[0,1]], confirmed.",
            mathExpression: "A^{-1} = \\begin{bmatrix}0.4&-0.2\\\\-0.1&0.3\\end{bmatrix}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Building the cofactor matrix correctly but forgetting to transpose it into the adjugate before dividing by the determinant - or forgetting to divide by the determinant entirely and treating the cofactor matrix itself as the answer.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c5-u4-l3-p1",
            topicTag: "matrixInverses",
            promptText: "Use the 2x2 shortcut formula to find the inverse of [[5,3],[2,2]].",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "[[1/2,-3/4],[-1/2,5/4]]",
            stepByStepExplanation:
              "det = 5*2-3*2 = 10-6 = 4. A^-1 = (1/4)*[[2,-3],[-2,5]] = [[1/2,-3/4],[-1/2,5/4]].",
            difficultyLevel: 2,
          },
          {
            problemId: "c5-u4-l3-p2",
            topicTag: "matrixInverses",
            promptText: "Use the 2x2 shortcut formula to find the inverse of [[1,4],[2,7]].",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "[[-7,4],[2,-1]]",
            stepByStepExplanation:
              "det = 1*7-4*2 = 7-8 = -1. A^-1 = (1/-1)*[[7,-4],[-2,1]] = [[-7,4],[2,-1]]. Check: A*A^-1 = [[1,4],[2,7]]*[[-7,4],[2,-1]] = [[-7+8,4-4],[-14+14,8-7]] = [[1,0],[0,1]].",
            difficultyLevel: 3,
          },
          {
            problemId: "c5-u4-l3-p3",
            topicTag: "matrixInverses",
            promptText: "For a 2x2 matrix with det(A) = 0, can the adjugate formula be used to find A^-1?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "no",
            stepByStepExplanation:
              "The formula divides by det(A), which would mean dividing by zero - undefined. This matches what's already known: a matrix with determinant 0 is singular and has no inverse at all.",
            difficultyLevel: 1,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Khan Academy: Linear algebra",
            resourceUrl: "https://www.khanacademy.org/math/linear-algebra",
            resourceType: "interactivePractice",
          },
          {
            resourceTitle: "MIT OCW 18.06: Linear Algebra (Gilbert Strang)",
            resourceUrl: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "solving-matrix-equations",
        lessonTitle: "Solving Matrix Equations",
        estimatedMinutes: 20,
        topicTag: "matrixInverses",
        learningGoals: ["Solve Ax=b for x using the inverse of A", "Solve a general matrix equation while respecting multiplication order"],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "The matrix parallel to 'divide both sides'",
            bodyText:
              "For a scalar equation like 3x=12, you divide both sides by 3. For a matrix equation Ax=b, there's no division, but multiplying both sides by A^-1 does the same job - as long as you multiply on the correct side, since matrix multiplication doesn't commute. Since A^-1 is being applied to isolate x on the left of the product Ax, you must left-multiply both sides by A^-1.",
          },
          {
            blockType: "keyFormula",
            headingText: "Solving via the inverse",
            bodyText: "If A is invertible, the unique solution to Ax=b is x = A^-1 b.",
            mathExpression: "Ax=b \\implies x = A^{-1}b \\quad (A \\text{ invertible})",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Solve 2x+y=4, x+y=3 using the inverse. In matrix form this is Ax=b with A=[[2,1],[1,1]] and b=(4,3). From an earlier lesson, A^-1 = [[1,-1],[-1,2]]. Compute x = A^-1*b: first entry is 1*4+(-1)*3 = 4-3 = 1; second entry is -1*4+2*3 = -4+6 = 2. So x=1, y=2. Check directly: 2(1)+2=4 correct, and 1+2=3 correct.",
            mathExpression: "x = A^{-1}b = \\begin{bmatrix}1\\\\2\\end{bmatrix}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Multiplying by A^-1 on the wrong side of a matrix equation. For AB=C with A invertible, the correct move is A^-1(AB) = A^-1 C, giving B = A^-1 C - not C*A^-1, since B sits to the right of A in the original product, and matrix multiplication order can never be swapped freely.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c5-u4-l4-p1",
            topicTag: "matrixInverses",
            promptText:
              "Using A = [[1,2],[1,3]] with A^-1 = [[3,-2],[-1,1]] (found earlier), solve Ax = b for b = (5,8).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "x=-1, y=3",
            stepByStepExplanation:
              "x = A^-1 b: first entry 3*5+(-2)*8 = 15-16 = -1; second entry -1*5+1*8 = -5+8 = 3. So x=-1, y=3. Check: 1(-1)+2(3)=5 correct; 1(-1)+3(3)=8 correct.",
            difficultyLevel: 3,
          },
          {
            problemId: "c5-u4-l4-p2",
            topicTag: "matrixInverses",
            promptText:
              "Using A = [[4,3],[3,2]] with A^-1 = [[-2,3],[3,-4]] (found earlier), solve Ax = b for b = (1,1).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "x=1, y=-1",
            stepByStepExplanation:
              "x = A^-1 b: first entry -2*1+3*1 = 1; second entry 3*1+(-4)*1 = -1. So x=1, y=-1. Check: 4(1)+3(-1)=1 correct; 3(1)+2(-1)=1 correct.",
            difficultyLevel: 3,
          },
          {
            problemId: "c5-u4-l4-p3",
            topicTag: "matrixInverses",
            promptText:
              "If AB = C and A is invertible, solve the equation for B, keeping the correct multiplication order.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "B = A^-1 C",
            stepByStepExplanation:
              "Left-multiply both sides by A^-1: A^-1(AB) = A^-1 C. Since A^-1 A = I, the left side becomes IB = B. So B = A^-1 C - never C*A^-1, since that would multiply on the wrong side of the original equation and generally gives a different result.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "MIT OCW 18.06: Linear Algebra (Gilbert Strang)",
            resourceUrl: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
            resourceType: "videoLesson",
          },
          {
            resourceTitle: "Khan Academy: Linear algebra",
            resourceUrl: "https://www.khanacademy.org/math/linear-algebra",
            resourceType: "interactivePractice",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "vector-spaces",
    unitTitle: "Vector Spaces and Subspaces",
    unitDescription: "Vector space axioms, subspaces, and the null space and column space of a matrix.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Vector Spaces and Subspaces",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc5-vector-spaces-quiz-p1",
          topicTag: "vectorSpacesAndSubspaces",
          promptText:
            "Is the set of all 3x1 column vectors with real entries, under ordinary vector addition and scalar multiplication, a vector space?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "yes",
          stepByStepExplanation:
            "It has a zero vector (the all-zeros column), every element has an additive inverse, and it's closed under both addition and scalar multiplication, along with the remaining axioms.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc5-vector-spaces-quiz-p2",
          topicTag: "vectorSpacesAndSubspaces",
          promptText: "Is the set of all 2x2 matrices with determinant exactly 1 a vector space under matrix addition?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "no",
          stepByStepExplanation:
            "The zero matrix has determinant 0, not 1, so it's not even in the set - failing the very first requirement. It also isn't closed under addition: I+I=2I has determinant 4, not 1.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc5-vector-spaces-quiz-p3",
          topicTag: "vectorSpacesAndSubspaces",
          promptText: "Is W = {(x,y) in R^2 : y = -3x} a subspace of R^2?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "yes",
          stepByStepExplanation:
            "Zero vector: (0,0) satisfies 0=-3(0). Closure under addition: (x1,-3x1)+(x2,-3x2) = (x1+x2, -3(x1+x2)), which fits the pattern. Closure under scalar multiplication: c(x,-3x) = (cx,-3cx), which also fits. All three checks pass.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc5-vector-spaces-quiz-p4",
          topicTag: "vectorSpacesAndSubspaces",
          promptText: "Is W = {(x,y) in R^2 : y = x^2} a subspace of R^2?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "no",
          stepByStepExplanation:
            "W contains the zero vector (0=0^2), but it's not closed under addition: (1,1) and (-1,1) are both in W (since 1=1^2 and 1=(-1)^2), but their sum (0,2) is not, since 2 is not equal to 0^2=0.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc5-vector-spaces-quiz-p5",
          topicTag: "vectorSpacesAndSubspaces",
          promptText: "Find the null space of A = [[2,4],[1,2]].",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "span{(-2,1)}",
          stepByStepExplanation:
            "Ax=0 gives 2x1+4x2=0 (row 1), so x1=-2x2; row 2 (x1+2x2=0) says the same thing, so it's redundant. With x2 free, the null space is span{(-2,1)}.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc5-vector-spaces-quiz-p6",
          topicTag: "vectorSpacesAndSubspaces",
          promptText: "For A = [[1,2],[3,6]], is the vector (2,6) in the column space of A?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "yes",
          stepByStepExplanation:
            "The columns of A are (1,3) and (2,6). Since (2,6) is exactly the second column itself (0*(1,3) + 1*(2,6) = (2,6)), it's a valid linear combination of the columns, so it lies in the column space.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc5-vector-spaces-quiz-p7",
          topicTag: "vectorSpacesAndSubspaces",
          promptText: "What is the zero vector in the vector space of all 3x1 column vectors?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "(0,0,0)",
          stepByStepExplanation:
            "The zero vector is whatever element leaves every other element unchanged when added to it - for 3x1 columns, that's the column of all zeros.",
          difficultyLevel: 1,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "vector-spaces-definition-and-examples",
        lessonTitle: "Vector Spaces: Definition and Examples",
        estimatedMinutes: 25,
        topicTag: "vectorSpacesAndSubspaces",
        learningGoals: [
          "Explain what makes a set of objects a vector space",
          "Recognize that matrices, polynomials, and functions can all be 'vectors'",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "'Vector' means more than an arrow",
            bodyText:
              "So far, 'vector' has meant a column of numbers, like an arrow in the plane. But the real definition is more general: a vector space is any set of objects, together with an addition rule and a scalar-multiplication rule, where those operations behave the way you'd expect (they satisfy a list of axioms: closure, a zero element, additive inverses, associativity, distributive laws, and so on). Once a set passes that test, its elements are called 'vectors' even if they're matrices, polynomials, or functions - none of which look anything like an arrow.",
          },
          {
            blockType: "keyFormula",
            headingText: "A few of the core axioms",
            bodyText:
              "Among the full list, the ones most worth internalizing: there must be a zero vector 0 with v+0=v for every v; every v must have an additive inverse -v with v+(-v)=0; and scalar multiplication must distribute over vector addition, c(u+v) = cu + cv.",
            mathExpression: "v + 0 = v, \\qquad v + (-v) = 0, \\qquad c(u+v) = cu+cv",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: matrices as vectors",
            bodyText:
              "The set of all 2x2 matrices, with ordinary matrix addition and scalar multiplication, is a vector space. The zero vector is the zero matrix [[0,0],[0,0]]. Every 2x2 matrix has an additive inverse (just negate every entry). Adding two 2x2 matrices always gives another 2x2 matrix (closure), and scaling one always gives another 2x2 matrix too. Every axiom checks out, so 'the set of 2x2 matrices' really is a vector space, and each matrix in it is technically a 'vector.'",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Assuming 'vector' can only mean an arrow with a direction and magnitude in R^2 or R^3. Once the axioms are satisfied, polynomials, matrices, and even functions are just as legitimately 'vectors' - the word describes a role in an abstract structure, not a picture.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c5-u5-l1-p1",
            topicTag: "vectorSpacesAndSubspaces",
            promptText:
              "Is the set of all 2x2 matrices, under matrix addition and scalar multiplication, a vector space?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "yes",
            stepByStepExplanation:
              "It has a zero element (the zero matrix), every element has an additive inverse, and it's closed under both addition and scalar multiplication, along with satisfying the remaining axioms.",
            difficultyLevel: 1,
          },
          {
            problemId: "c5-u5-l1-p2",
            topicTag: "vectorSpacesAndSubspaces",
            promptText:
              "Is the set of all polynomials of degree EXACTLY 3 (not less) a vector space under ordinary polynomial addition?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "no",
            stepByStepExplanation:
              "This set isn't closed under addition: adding x^3 and -x^3+x gives x, which has degree 1, not degree 3, so the sum leaves the set. It also has no zero vector of degree 3 (the zero polynomial has no degree at all). Both failures disqualify it.",
            difficultyLevel: 3,
          },
          {
            problemId: "c5-u5-l1-p3",
            topicTag: "vectorSpacesAndSubspaces",
            promptText: "What is the zero vector in the vector space of all 2x2 matrices?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "[[0,0],[0,0]]",
            stepByStepExplanation:
              "The zero vector is whatever element leaves every other element unchanged when added to it - for matrices, that's the matrix of all zeros, since adding it to any matrix changes nothing.",
            difficultyLevel: 1,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "MIT OCW 18.06: Linear Algebra (Gilbert Strang)",
            resourceUrl: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
            resourceType: "videoLesson",
          },
          {
            resourceTitle: "Khan Academy: Linear algebra",
            resourceUrl: "https://www.khanacademy.org/math/linear-algebra",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "subspaces",
        lessonTitle: "Subspaces",
        estimatedMinutes: 20,
        topicTag: "vectorSpacesAndSubspaces",
        learningGoals: [
          "Apply the three-part subspace test to a subset of a vector space",
          "Use the zero-vector check as a quick first filter",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "A vector space living inside another one",
            bodyText:
              "A subspace is a subset W of a vector space V that is itself a complete vector space, using the same addition and scalar multiplication rules as V. Rather than re-checking all ten axioms from scratch, there's a shortcut: since W automatically inherits properties like associativity and commutativity from V, you only need to verify three things.",
          },
          {
            blockType: "keyFormula",
            headingText: "The three-part subspace test",
            bodyText:
              "W is a subspace of V exactly when: (1) the zero vector of V is in W; (2) W is closed under addition (u,v in W implies u+v in W); (3) W is closed under scalar multiplication (c a scalar, u in W implies cu in W).",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Is W = {(x,y) in R^2 : y=2x} a subspace of R^2? Check the zero vector: (0,0) satisfies 0=2(0), so it's in W. Check closure under addition: take two elements (x1,2x1) and (x2,2x2); their sum is (x1+x2, 2x1+2x2) = (x1+x2, 2(x1+x2)), which still fits the pattern y=2x, so it's in W. Check closure under scalar multiplication: c*(x,2x) = (cx, 2cx), which also fits the pattern. All three conditions hold, so W is a subspace - specifically, it's the line through the origin with slope 2.",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Skipping straight to checking closure under addition and scalar multiplication without first checking whether the zero vector is even in the set. A set like {(x,y): y=2x+1} fails instantly, since (0,0) does not satisfy 0=2(0)+1 - checking the zero vector first is the fastest way to rule out a non-subspace.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c5-u5-l2-p1",
            topicTag: "vectorSpacesAndSubspaces",
            promptText: "Is W = {(x,y) in R^2 : y = 2x + 1} a subspace of R^2?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "no",
            stepByStepExplanation:
              "The zero vector (0,0) would need to satisfy 0 = 2(0)+1 = 1, which is false. Since W doesn't even contain the zero vector, it fails the very first check and can't be a subspace.",
            difficultyLevel: 2,
          },
          {
            problemId: "c5-u5-l2-p2",
            topicTag: "vectorSpacesAndSubspaces",
            promptText: "Is W = {(x,y,z) in R^3 : x + y + z = 0} a subspace of R^3?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "yes",
            stepByStepExplanation:
              "Zero vector: 0+0+0=0, contained. Closure under addition: if x1+y1+z1=0 and x2+y2+z2=0, then (x1+x2)+(y1+y2)+(z1+z2) = 0+0 = 0, so the sum is still in W. Closure under scalar multiplication: c(x+y+z) = c*0 = 0, so cW is still in W. All three checks pass.",
            difficultyLevel: 3,
          },
          {
            problemId: "c5-u5-l2-p3",
            topicTag: "vectorSpacesAndSubspaces",
            promptText:
              "Is W = {(x,y) in R^2 : xy is greater than or equal to 0} (points in the first and third quadrants, plus the axes) a subspace of R^2?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "no",
            stepByStepExplanation:
              "W contains the zero vector, but it's not closed under addition. For example, u=(1,0) is in W (since 1*0=0) and v=(0,-1) is in W (since 0*(-1)=0), but u+v=(1,-1) has xy=-1, which is negative and not in W. So W fails closure under addition.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Khan Academy: Linear algebra",
            resourceUrl: "https://www.khanacademy.org/math/linear-algebra",
            resourceType: "interactivePractice",
          },
          {
            resourceTitle: "MIT OCW 18.06: Linear Algebra (Gilbert Strang)",
            resourceUrl: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "the-null-space-and-column-space-of-a-matrix",
        lessonTitle: "The Null Space and Column Space of a Matrix",
        estimatedMinutes: 25,
        topicTag: "vectorSpacesAndSubspaces",
        learningGoals: [
          "Find the null space of a matrix by solving Ax=0",
          "Find the column space of a matrix as the span of its columns",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Two subspaces attached to every matrix",
            bodyText:
              "Every matrix A comes with two natural subspaces attached to it. The null space, N(A), is the set of all vectors x that A sends to the zero vector - the solutions to the homogeneous equation Ax=0. It measures 'what gets crushed to nothing' by the matrix. The column space, C(A), is the span (the set of all linear combinations) of A's columns - it measures 'every output A can possibly produce.' Both turn out to be genuine subspaces (of the input space and output space, respectively).",
          },
          {
            blockType: "keyFormula",
            headingText: "Definitions",
            bodyText: "N(A) = {x : Ax = 0} (a subspace of the input space). C(A) = span of A's columns (a subspace of the output space).",
            mathExpression: "N(A) = \\{x : Ax = 0\\}, \\qquad C(A) = \\mathrm{span}\\{\\text{columns of } A\\}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find the null space and column space of A = [[1,2],[2,4]]. For the null space, solve Ax=0: x1+2x2=0 and 2x1+4x2=0 (the second equation is just double the first, so it's redundant). This gives x1=-2x2, with x2 free. The general solution is x2*(-2,1), so N(A) = span{(-2,1)}, a line through the origin. For the column space, the two columns are (1,2) and (2,4); since (2,4) = 2*(1,2), the second column is a multiple of the first, so they don't add any new direction. C(A) = span{(1,2)}, also just a line.",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Solving Ax=b for some specific nonzero b and calling the result the null space. The null space is defined specifically by the homogeneous equation Ax=0 - solving for a different right-hand side answers a completely different question.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c5-u5-l3-p1",
            topicTag: "vectorSpacesAndSubspaces",
            promptText: "Find the null space of A = [[1,0],[0,0]].",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "span{(0,1)}",
            stepByStepExplanation:
              "Ax=0 gives x1=0 (from row 1) and 0=0 (row 2, always true, no restriction on x2). So x1=0 and x2 is free. The null space is span{(0,1)}.",
            difficultyLevel: 2,
          },
          {
            problemId: "c5-u5-l3-p2",
            topicTag: "vectorSpacesAndSubspaces",
            promptText: "Find the null space of A = [[1,1],[1,1]].",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "span{(-1,1)}",
            stepByStepExplanation:
              "Both rows give the same equation, x1+x2=0, so x1=-x2 with x2 free. The null space is span{(-1,1)}.",
            difficultyLevel: 2,
          },
          {
            problemId: "c5-u5-l3-p3",
            topicTag: "vectorSpacesAndSubspaces",
            promptText: "For A = [[1,3],[2,6]], is the vector (3,6) in the column space of A?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "yes",
            stepByStepExplanation:
              "The columns of A are (1,2) and (3,6). Since (3,6) = 3*(1,2) + 0*(3,6) is a valid linear combination of the columns (in fact it equals the second column exactly), it lies in the column space.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "MIT OCW 18.06: Linear Algebra (Gilbert Strang)",
            resourceUrl: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
            resourceType: "videoLesson",
          },
          {
            resourceTitle: "Khan Academy: Linear algebra",
            resourceUrl: "https://www.khanacademy.org/math/linear-algebra",
            resourceType: "interactivePractice",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "linear-independence-basis-dimension",
    unitTitle: "Linear Independence, Basis, and Dimension",
    unitDescription: "Determining linear independence, finding a basis, and computing dimension.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Linear Independence, Basis, and Dimension",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc5-linear-independence-basis-dimension-quiz-p1",
          topicTag: "linearIndependenceBasisAndDimension",
          promptText: "Are the vectors (1,0) and (0,-1) linearly independent?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "yes",
          stepByStepExplanation: "det([[1,0],[0,-1]]) = 1*(-1) - 0*0 = -1, which is nonzero, so they're independent.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc5-linear-independence-basis-dimension-quiz-p2",
          topicTag: "linearIndependenceBasisAndDimension",
          promptText: "Are the vectors (3,6) and (1,2) linearly independent?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "no",
          stepByStepExplanation: "det([[3,1],[6,2]]) = 3*2 - 1*6 = 6-6 = 0, so they're dependent (the second vector is exactly one-third the first).",
          difficultyLevel: 1,
        },
        {
          problemId: "calc5-linear-independence-basis-dimension-quiz-p3",
          topicTag: "linearIndependenceBasisAndDimension",
          promptText: "Are v1=(1,0,1), v2=(0,1,1), and v3=(1,1,1) linearly independent in R^3?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "yes",
          stepByStepExplanation:
            "Form the matrix with these as columns: [[1,0,1],[0,1,1],[1,1,1]]. Expanding along the first row: det = 1*(1*1-1*1) - 0*(0*1-1*1) + 1*(0*1-1*1) = 1*0 - 0 + 1*(-1) = -1. Since the determinant is nonzero, the vectors are independent.",
          difficultyLevel: 4,
        },
        {
          problemId: "calc5-linear-independence-basis-dimension-quiz-p4",
          topicTag: "linearIndependenceBasisAndDimension",
          promptText: "Do v1=(2,1) and v2=(4,2) form a basis for R^2?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "no",
          stepByStepExplanation: "det([[2,4],[1,2]]) = 2*2 - 4*1 = 0, so they're dependent (v2 = 2*v1). A dependent set can never be a basis.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc5-linear-independence-basis-dimension-quiz-p5",
          topicTag: "linearIndependenceBasisAndDimension",
          promptText: "Can the set {(1,0,0), (0,1,0)} be a basis for R^3?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "no",
          stepByStepExplanation:
            "R^3 is 3-dimensional, so any basis for it needs exactly 3 vectors. A set of only 2 vectors can span at most a 2-dimensional subspace, so it can never span all of R^3.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc5-linear-independence-basis-dimension-quiz-p6",
          topicTag: "linearIndependenceBasisAndDimension",
          promptText: "What is the dimension of R^5?",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "5",
          stepByStepExplanation: "R^5's standard basis has 5 vectors (e1 through e5), so its dimension is 5.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc5-linear-independence-basis-dimension-quiz-p7",
          topicTag: "linearIndependenceBasisAndDimension",
          promptText: "A 4x4 matrix A has rank 3. What is the nullity of A?",
          answerFormat: "shortNumericAnswer",
          correctAnswer: "1",
          stepByStepExplanation: "By rank-nullity, rank(A) + nullity(A) = number of columns = 4. So nullity(A) = 4-3 = 1.",
          difficultyLevel: 2,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "linear-independence",
        lessonTitle: "Linear Independence",
        estimatedMinutes: 25,
        topicTag: "linearIndependenceBasisAndDimension",
        learningGoals: [
          "State the definition of linear independence in terms of the trivial solution",
          "Use a determinant to test whether n vectors in R^n are independent",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "No vector is 'extra'",
            bodyText:
              "A set of vectors is linearly independent when none of them can be built out of the others - no vector in the set is redundant. Formally, the only way to combine them with scalars and get the zero vector is to use all-zero scalars (the 'trivial solution'). If some other combination also works, the vectors are linearly dependent, and at least one of them is expressible in terms of the rest.",
          },
          {
            blockType: "keyFormula",
            headingText: "The independence test",
            bodyText:
              "v1, v2, ..., vn are linearly independent exactly when c1v1 + c2v2 + ... + cnvn = 0 forces c1=c2=...=cn=0. For n vectors in R^n specifically, this can be checked quickly: form the matrix with the vectors as columns, and they're independent exactly when that matrix's determinant is nonzero.",
            mathExpression: "c_1v_1+\\dots+c_nv_n = 0 \\implies c_1=\\dots=c_n=0",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Are v1=(1,2) and v2=(3,4) linearly independent? Form the matrix [[1,3],[2,4]] and take its determinant: 1*4-3*2 = 4-6 = -2, which is nonzero, so they're independent. Compare with v1=(1,2) and v2=(2,4): the matrix [[1,2],[2,4]] has determinant 1*4-2*2 = 0, so these are dependent - and indeed v2 = 2*v1 exactly.",
            mathExpression: "\\det\\begin{bmatrix}1&3\\\\2&4\\end{bmatrix} = -2 \\neq 0 \\implies \\text{independent}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Assuming vectors are independent just because none of them individually equals the zero vector, or because they 'look different' at a glance. The only reliable test is whether a nontrivial combination of them can add up to zero - for a square set of vectors, checking the determinant settles it precisely.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c5-u6-l1-p1",
            topicTag: "linearIndependenceBasisAndDimension",
            promptText: "Are the vectors (1,0) and (0,1) linearly independent?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "yes",
            stepByStepExplanation: "det([[1,0],[0,1]]) = 1*1-0*0 = 1, which is nonzero, so they're independent.",
            difficultyLevel: 1,
          },
          {
            problemId: "c5-u6-l1-p2",
            topicTag: "linearIndependenceBasisAndDimension",
            promptText: "Are the vectors (2,4) and (1,2) linearly independent?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "no",
            stepByStepExplanation: "det([[2,1],[4,2]]) = 2*2-1*4 = 0, so they're dependent (the second vector is exactly half the first).",
            difficultyLevel: 1,
          },
          {
            problemId: "c5-u6-l1-p3",
            topicTag: "linearIndependenceBasisAndDimension",
            promptText:
              "Are v1=(1,1,0), v2=(0,1,1), and v3=(1,0,-1) linearly independent in R^3?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "no, they are linearly dependent (v3 = v1 - v2)",
            stepByStepExplanation:
              "Form the matrix with these as columns: [[1,0,1],[1,1,0],[0,1,-1]]. Expanding along the first row: det = 1*(1*(-1)-0*1) - 0*(1*(-1)-0*0) + 1*(1*1-1*0) = 1*(-1) - 0 + 1*(1) = -1+1 = 0. Since the determinant is 0, the vectors are dependent. Indeed, v1 - v2 = (1-0,1-1,0-1) = (1,0,-1) = v3.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "MIT OCW 18.06: Linear Algebra (Gilbert Strang)",
            resourceUrl: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
            resourceType: "videoLesson",
          },
          {
            resourceTitle: "Khan Academy: Linear algebra",
            resourceUrl: "https://www.khanacademy.org/math/linear-algebra",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "basis-of-a-vector-space",
        lessonTitle: "Basis of a Vector Space",
        estimatedMinutes: 25,
        topicTag: "linearIndependenceBasisAndDimension",
        learningGoals: [
          "State the two conditions a set must satisfy to be a basis",
          "Recognize when a proposed set has too many or too few vectors to be a basis",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "A minimal coordinate system",
            bodyText:
              "A basis for a vector space is a set of vectors that is BOTH linearly independent AND spans the entire space (every vector in the space can be written as a combination of the basis vectors). Think of the standard basis vectors e1=(1,0) and e2=(0,1) for R^2: together they're independent, and every vector in R^2 can be written as a combination of them - that's exactly what a basis provides, a minimal 'coordinate system' for the space.",
          },
          {
            blockType: "keyFormula",
            headingText: "The two-part definition of a basis",
            bodyText: "A set is a basis for V when it is (1) linearly independent, and (2) spans V.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Do v1=(1,1) and v2=(1,-1) form a basis for R^2? Check independence: det([[1,1],[1,-1]]) = 1*(-1)-1*1 = -2, which is nonzero, so they're independent. Since R^2 is 2-dimensional and these are 2 independent vectors, they automatically span all of R^2 as well (a fact made precise by the dimension theorem in the next lesson). So yes, {v1, v2} is a basis for R^2.",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Listing more vectors than the space's dimension and calling it a basis - a basis for R^2 can never contain 3 or more vectors, since any 3 vectors in R^2 are automatically dependent. Similarly, listing too few vectors (like just 2 vectors as a proposed basis for R^3) can never span the whole space, no matter which 2 vectors are chosen.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c5-u6-l2-p1",
            topicTag: "linearIndependenceBasisAndDimension",
            promptText: "Do v1=(1,0) and v2=(2,0) form a basis for R^2?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "no",
            stepByStepExplanation:
              "det([[1,2],[0,0]]) = 1*0-2*0 = 0, so they're dependent (both lie along the x-axis, and can never reach a vector like (0,1)). They fail to be a basis.",
            difficultyLevel: 2,
          },
          {
            problemId: "c5-u6-l2-p2",
            topicTag: "linearIndependenceBasisAndDimension",
            promptText:
              "Can the set {(1,0,0), (0,1,0), (0,0,1), (1,1,1)} be a basis for R^3?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "no",
            stepByStepExplanation:
              "R^3 is 3-dimensional, so any basis for it has exactly 3 vectors. A set of 4 vectors in R^3 can never be linearly independent (there are simply too many of them), so this set fails the independence requirement regardless of which 4 vectors are chosen.",
            difficultyLevel: 3,
          },
          {
            problemId: "c5-u6-l2-p3",
            topicTag: "linearIndependenceBasisAndDimension",
            promptText:
              "The null space of A = [[1,2],[2,4]] was found (in the previous unit) to be span{(-2,1)}. Give a basis for this null space.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "{(-2,1)}",
            stepByStepExplanation:
              "The null space is a line through the origin, spanned by the single vector (-2,1). Since a single nonzero vector is automatically linearly independent, and it spans the whole line, {(-2,1)} is a basis for the null space.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "Khan Academy: Linear algebra",
            resourceUrl: "https://www.khanacademy.org/math/linear-algebra",
            resourceType: "interactivePractice",
          },
          {
            resourceTitle: "MIT OCW 18.06: Linear Algebra (Gilbert Strang)",
            resourceUrl: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "dimension",
        lessonTitle: "Dimension",
        estimatedMinutes: 20,
        topicTag: "linearIndependenceBasisAndDimension",
        learningGoals: [
          "State that dimension is the number of vectors in any basis of a space",
          "Apply the rank-nullity relation for a matrix",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "How many independent directions",
            bodyText:
              "The dimension of a vector space is the number of vectors in any basis for it - and remarkably, this number is always the same no matter which basis you pick (a genuine theorem, taken as given here). dim(R^n) = n. When talking about a subspace living inside a bigger space, the dimension of the null space is called the nullity, and the dimension of the column space is called the rank.",
          },
          {
            blockType: "keyFormula",
            headingText: "Rank-nullity relation",
            bodyText:
              "For an m x n matrix A: rank(A) + nullity(A) = n (the number of columns). This connects how much of the input space collapses to zero (nullity) with how much 'independent output' survives (rank).",
            mathExpression: "\\mathrm{rank}(A) + \\mathrm{nullity}(A) = n",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "For A = [[1,2],[2,4]] (from the previous unit), the null space is span{(-2,1)}, a 1-dimensional space, so nullity(A)=1. Since A has 2 columns, the rank-nullity relation gives rank(A) = 2-1 = 1. Check this directly: the column space is span{(1,2)} (since the second column is a multiple of the first), which is also 1-dimensional - confirming rank(A)=1.",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Mixing up 'the dimension of the ambient space' (like R^3, which is always 3-dimensional) with 'the dimension of a subspace living inside it' (a plane through the origin in R^3 has dimension 2; a line through the origin has dimension 1). Always ask 'dimension of exactly what?' before answering.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c5-u6-l3-p1",
            topicTag: "linearIndependenceBasisAndDimension",
            promptText: "What is the dimension of R^4?",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "4",
            stepByStepExplanation: "R^4's standard basis has 4 vectors (e1 through e4), so its dimension is 4.",
            difficultyLevel: 1,
          },
          {
            problemId: "c5-u6-l3-p2",
            topicTag: "linearIndependenceBasisAndDimension",
            promptText: "A subspace of R^3 has basis {(1,0,1), (0,1,1)}. What is its dimension?",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "2",
            stepByStepExplanation: "The dimension of a space equals the number of vectors in any basis for it - here, that's 2.",
            difficultyLevel: 1,
          },
          {
            problemId: "c5-u6-l3-p3",
            topicTag: "linearIndependenceBasisAndDimension",
            promptText: "A 3x3 matrix A has rank 2. What is the nullity of A?",
            answerFormat: "shortNumericAnswer",
            correctAnswer: "1",
            stepByStepExplanation:
              "By rank-nullity, rank(A) + nullity(A) = number of columns = 3. So nullity(A) = 3-2 = 1.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "MIT OCW 18.06: Linear Algebra (Gilbert Strang)",
            resourceUrl: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
            resourceType: "videoLesson",
          },
          {
            resourceTitle: "Khan Academy: Linear algebra",
            resourceUrl: "https://www.khanacademy.org/math/linear-algebra",
            resourceType: "interactivePractice",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "linear-transformations",
    unitTitle: "Linear Transformations",
    unitDescription: "Matrix representations of linear transformations and their geometric interpretation.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Linear Transformations",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc5-linear-transformations-quiz-p1",
          topicTag: "linearTransformations",
          promptText: "Find the matrix for T(x,y) = (-x, 4y).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "[[-1,0],[0,4]]",
          stepByStepExplanation: "T(e1)=T(1,0)=(-1,0) is column 1. T(e2)=T(0,1)=(0,4) is column 2. Matrix: [[-1,0],[0,4]].",
          difficultyLevel: 1,
        },
        {
          problemId: "calc5-linear-transformations-quiz-p2",
          topicTag: "linearTransformations",
          promptText: "Find the matrix for T(x,y,z) = (x-z, 2y+z, x+y).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "[[1,0,-1],[0,2,1],[1,1,0]]",
          stepByStepExplanation:
            "T(e1)=T(1,0,0)=(1,0,1). T(e2)=T(0,1,0)=(0,2,1). T(e3)=T(0,0,1)=(-1,1,0). The matrix (3x3, since T maps R^3 to R^3) has these as columns: [[1,0,-1],[0,2,1],[1,1,0]].",
          difficultyLevel: 3,
        },
        {
          problemId: "calc5-linear-transformations-quiz-p3",
          topicTag: "linearTransformations",
          promptText: "Is T(x,y) = (x, y+2) a linear transformation?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "no",
          stepByStepExplanation: "Every linear transformation must send the zero vector to the zero vector, but T(0,0) = (0,2), which is not the zero vector.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc5-linear-transformations-quiz-p4",
          topicTag: "linearTransformations",
          promptText: "Apply the reflection-across-y=x matrix [[0,1],[1,0]] to the point (4,-2).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "(-2,4)",
          stepByStepExplanation: "[[0,1],[1,0]]*(4,-2) = (0*4+1*(-2), 1*4+0*(-2)) = (-2,4).",
          difficultyLevel: 2,
        },
        {
          problemId: "calc5-linear-transformations-quiz-p5",
          topicTag: "linearTransformations",
          promptText: "Apply the scaling matrix [[3,0],[0,3]] to the vector (-1,2).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "(-3,6)",
          stepByStepExplanation: "[[3,0],[0,3]]*(-1,2) = (3*(-1), 3*2) = (-3,6).",
          difficultyLevel: 1,
        },
        {
          problemId: "calc5-linear-transformations-quiz-p6",
          topicTag: "linearTransformations",
          promptText: "Using R_180 = [[-1,0],[0,-1]], rotate the vector (2,5) by 180 degrees.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "(-2,-5)",
          stepByStepExplanation: "[[-1,0],[0,-1]]*(2,5) = (-1*2+0*5, 0*2+(-1)*5) = (-2,-5).",
          difficultyLevel: 2,
        },
        {
          problemId: "calc5-linear-transformations-quiz-p7",
          topicTag: "linearTransformations",
          promptText:
            "A = reflect across the x-axis = [[1,0],[0,-1]], B = rotate 90 degrees = [[0,-1],[1,0]]. Find the matrix for 'rotate after reflecting' (apply the reflection first, then the rotation).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "[[0,1],[1,0]]",
          stepByStepExplanation:
            "'Rotate after reflecting' means compute BA: [[0,-1],[1,0]]*[[1,0],[0,-1]] = [[0*1+(-1)*0, 0*0+(-1)*(-1)],[1*1+0*0, 1*0+0*(-1)]] = [[0,1],[1,0]].",
          difficultyLevel: 4,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "linear-transformations-definition-and-matrix-representation",
        lessonTitle: "Linear Transformations: Definition and Matrix Representation",
        estimatedMinutes: 25,
        topicTag: "linearTransformations",
        learningGoals: [
          "State the two defining properties of a linear transformation",
          "Build the matrix for a linear transformation from its formula",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "A matrix is secretly a function",
            bodyText:
              "Up to now, a matrix has mostly been a static grid of numbers. But a matrix A also defines a FUNCTION: it takes an input vector x and produces an output vector Ax. A function T is called a linear transformation exactly when it respects addition and scalar multiplication - and every linear transformation from R^n to R^m can be represented by some matrix. This reframing (matrix as function, not just as data) is what makes eigenvalues click in the next unit.",
          },
          {
            blockType: "keyFormula",
            headingText: "Definition and how to build the matrix",
            bodyText:
              "T is linear when T(u+v) = T(u)+T(v) and T(cu) = c*T(u) for all vectors u, v and scalars c. To find the matrix A representing T (so that T(x)=Ax), compute T applied to each standard basis vector e_j - those outputs become the columns of A, in order.",
            mathExpression: "T(x) = Ax, \\qquad \\text{column } j \\text{ of } A = T(e_j)",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find the matrix for T(x,y) = (x+2y, 3x-y). Compute T(e1) = T(1,0) = (1,3) - this becomes column 1. Compute T(e2) = T(0,1) = (2,-1) - this becomes column 2. So A = [[1,2],[3,-1]]. Check: A*(x,y) = [[1,2],[3,-1]]*(x,y) = (1x+2y, 3x-1y) = (x+2y, 3x-y), which matches T exactly.",
            mathExpression: "A = \\begin{bmatrix}1&2\\\\3&-1\\end{bmatrix}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Writing the matrix's entries straight from the formula without double-checking against T(e1), T(e2), etc. - it's easy to accidentally transpose a coefficient into the wrong row or column. Computing T applied to each standard basis vector explicitly is a reliable check that catches this every time.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c5-u7-l1-p1",
            topicTag: "linearTransformations",
            promptText: "Find the matrix for T(x,y) = (2x, -y).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "[[2,0],[0,-1]]",
            stepByStepExplanation: "T(e1)=T(1,0)=(2,0) is column 1. T(e2)=T(0,1)=(0,-1) is column 2. Matrix: [[2,0],[0,-1]].",
            difficultyLevel: 1,
          },
          {
            problemId: "c5-u7-l1-p2",
            topicTag: "linearTransformations",
            promptText: "Find the matrix for T(x,y,z) = (x+y, y+z).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "[[1,1,0],[0,1,1]]",
            stepByStepExplanation:
              "T(e1)=T(1,0,0)=(1,0). T(e2)=T(0,1,0)=(1,1). T(e3)=T(0,0,1)=(0,1). The matrix (2x3, since T maps R^3 to R^2) has these as columns: [[1,1,0],[0,1,1]].",
            difficultyLevel: 3,
          },
          {
            problemId: "c5-u7-l1-p3",
            topicTag: "linearTransformations",
            promptText: "Is T(x,y) = (x+1, y) a linear transformation?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "no",
            stepByStepExplanation:
              "Every linear transformation must send the zero vector to the zero vector, since T(0)=T(0*v)=0*T(v)=0. But T(0,0) = (1,0), which is not the zero vector, so T fails to be linear.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "3Blue1Brown: Essence of Linear Algebra (YouTube playlist)",
            resourceUrl: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
            resourceType: "videoLesson",
          },
          {
            resourceTitle: "MIT OCW 18.06: Linear Algebra (Gilbert Strang)",
            resourceUrl: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "geometric-linear-transformations",
        lessonTitle: "Geometric Linear Transformations",
        estimatedMinutes: 25,
        topicTag: "linearTransformations",
        learningGoals: [
          "Recognize the standard matrices for rotation, scaling, reflection, and projection",
          "Apply a geometric transformation matrix to a vector",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Named transformations, named matrices",
            bodyText:
              "Several common geometric actions in the plane have simple, memorable matrices: rotating by an angle, scaling by a factor, reflecting across a line, and projecting onto an axis. Recognizing these on sight makes composing multi-step transformations (next lesson) much faster.",
          },
          {
            blockType: "keyFormula",
            headingText: "Standard 2D transformation matrices",
            bodyText:
              "Rotation by angle theta (counterclockwise): [[cos theta, -sin theta],[sin theta, cos theta]]. Scaling by k: [[k,0],[0,k]]. Reflection across the x-axis: [[1,0],[0,-1]]. Reflection across the line y=x: [[0,1],[1,0]]. Projection onto the x-axis: [[1,0],[0,0]].",
            mathExpression: "R_\\theta = \\begin{bmatrix}\\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta\\end{bmatrix}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Rotate the vector (1,0) by 90 degrees. R_90 = [[cos90,-sin90],[sin90,cos90]] = [[0,-1],[1,0]]. Apply it: [[0,-1],[1,0]]*(1,0) = (0*1+(-1)*0, 1*1+0*0) = (0,1). This matches intuition: rotating the vector pointing along the positive x-axis by 90 degrees counterclockwise should land it pointing along the positive y-axis.",
            mathExpression: "R_{90}(1,0) = (0,1)",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Swapping the position of the two sine terms in the rotation matrix (putting -sin theta in the bottom-left instead of the top-right). That single sign swap silently turns a counterclockwise rotation into a clockwise one, or vice versa.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c5-u7-l2-p1",
            topicTag: "linearTransformations",
            promptText: "Apply the reflection-across-the-x-axis matrix [[1,0],[0,-1]] to the point (3,5).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(3,-5)",
            stepByStepExplanation: "[[1,0],[0,-1]]*(3,5) = (1*3+0*5, 0*3+(-1)*5) = (3,-5).",
            difficultyLevel: 1,
          },
          {
            problemId: "c5-u7-l2-p2",
            topicTag: "linearTransformations",
            promptText: "Apply the scaling matrix [[2,0],[0,2]] to the vector (4,-1).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(8,-2)",
            stepByStepExplanation: "[[2,0],[0,2]]*(4,-1) = (2*4,2*(-1)) = (8,-2).",
            difficultyLevel: 1,
          },
          {
            problemId: "c5-u7-l2-p3",
            topicTag: "linearTransformations",
            promptText: "Using R_90 = [[0,-1],[1,0]], rotate the vector (0,1) by 90 degrees counterclockwise.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(-1,0)",
            stepByStepExplanation: "[[0,-1],[1,0]]*(0,1) = (0*0+(-1)*1, 1*0+0*1) = (-1,0).",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "3Blue1Brown: Essence of Linear Algebra (YouTube playlist)",
            resourceUrl: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
            resourceType: "videoLesson",
          },
          {
            resourceTitle: "Khan Academy: Linear algebra",
            resourceUrl: "https://www.khanacademy.org/math/linear-algebra",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "composition-of-linear-transformations",
        lessonTitle: "Composition of Linear Transformations",
        estimatedMinutes: 20,
        topicTag: "linearTransformations",
        learningGoals: [
          "Represent 'apply T1, then T2' as a single matrix product",
          "Correctly order the matrix product for a given sequence of transformations",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Doing two transformations in a row",
            bodyText:
              "If T1 has matrix A and T2 has matrix B, applying T1 first and then T2 corresponds to the single matrix product BA (not AB) - because (BA)x = B(Ax), meaning A acts on x first (closest to the vector), then B acts on the result. Since matrix multiplication isn't commutative, the order you multiply the matrices in encodes the order the transformations actually happen in.",
          },
          {
            blockType: "keyFormula",
            headingText: "The composition rule",
            bodyText: "If T1 has matrix A and T2 has matrix B, then 'T2 after T1' has matrix BA, and (BA)x = B(Ax).",
            mathExpression: "(T_2 \\circ T_1)(x) = B(Ax) = (BA)x",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Let A = rotate 90 = [[0,-1],[1,0]] and B = reflect across the x-axis = [[1,0],[0,-1]]. Find the matrix for 'reflect after rotating' (rotate first, then reflect): compute BA. BA = [[1,0],[0,-1]]*[[0,-1],[1,0]] = [[1*0+0*1, 1*(-1)+0*0],[0*0+(-1)*1, 0*(-1)+(-1)*0]] = [[0,-1],[-1,0]]. Check by applying step by step: rotating (1,0) by 90 gives (0,1) (from the previous lesson), then reflecting (0,1) across the x-axis gives (0,-1). Apply the combined matrix directly to (1,0): [[0,-1],[-1,0]]*(1,0) = (0,-1), which matches.",
            mathExpression: "BA = \\begin{bmatrix}0&-1\\\\-1&0\\end{bmatrix}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Computing AB instead of BA when asked for 'T2 after T1.' Since the rightmost matrix in a product acts on the vector first, reversing the multiplication order generally describes doing the transformations in the opposite sequence, which usually produces a completely different result.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c5-u7-l3-p1",
            topicTag: "linearTransformations",
            promptText:
              "A = scale by 2 = [[2,0],[0,2]], B = reflect across y=x = [[0,1],[1,0]]. Find the matrix for 'reflect after scaling' (apply scaling first, then reflecting).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "[[0,2],[2,0]]",
            stepByStepExplanation:
              "'Reflect after scaling' means compute BA: [[0,1],[1,0]]*[[2,0],[0,2]] = [[0*2+1*0,0*0+1*2],[1*2+0*0,1*0+0*2]] = [[0,2],[2,0]].",
            difficultyLevel: 2,
          },
          {
            problemId: "c5-u7-l3-p2",
            topicTag: "linearTransformations",
            promptText:
              "Using the same A and B from the previous problem, find the matrix for 'scaling after reflecting' (AB), and note whether it's the same as BA in this particular case.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "[[0,2],[2,0]]",
            stepByStepExplanation:
              "AB = [[2,0],[0,2]]*[[0,1],[1,0]] = [[2*0+0*1,2*1+0*0],[0*0+2*1,0*1+2*0]] = [[0,2],[2,0]]. Interesting: here AB happens to equal BA, but that's a special coincidence for this particular pair of matrices, not something to expect in general.",
            difficultyLevel: 3,
          },
          {
            problemId: "c5-u7-l3-p3",
            topicTag: "linearTransformations",
            promptText:
              "T1 has matrix [[1,0],[0,-1]] (reflect across the x-axis), T2 has matrix [[0,-1],[1,0]] (rotate 90 degrees). Find the matrix representing 'T1 then T2' (apply T1 first).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "[[0,1],[1,0]]",
            stepByStepExplanation:
              "'T1 then T2' means T2's matrix times T1's matrix: [[0,-1],[1,0]]*[[1,0],[0,-1]] = [[0*1+(-1)*0, 0*0+(-1)*(-1)],[1*1+0*0, 1*0+0*(-1)]] = [[0,1],[1,0]].",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "MIT OCW 18.06: Linear Algebra (Gilbert Strang)",
            resourceUrl: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
            resourceType: "videoLesson",
          },
          {
            resourceTitle: "Khan Academy: Linear algebra",
            resourceUrl: "https://www.khanacademy.org/math/linear-algebra",
            resourceType: "interactivePractice",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "eigenvalues-and-eigenvectors",
    unitTitle: "Eigenvalues and Eigenvectors",
    unitDescription: "The characteristic equation, finding eigenvectors, and their geometric interpretation.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Eigenvalues and Eigenvectors",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc5-eigenvalues-and-eigenvectors-quiz-p1",
          topicTag: "eigenvaluesAndEigenvectors",
          promptText: "Find the eigenvalues of the diagonal matrix A = [[7,0],[0,-3]].",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "7 and -3",
          stepByStepExplanation:
            "The characteristic equation is (7-λ)(-3-λ)=0, giving λ=7 or λ=-3. For a diagonal matrix, the eigenvalues are always just the diagonal entries themselves.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc5-eigenvalues-and-eigenvectors-quiz-p2",
          topicTag: "eigenvaluesAndEigenvectors",
          promptText: "Find the eigenvalues of A = [[3,1],[1,3]].",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "4 and 2",
          stepByStepExplanation:
            "det(A-λI) = (3-λ)^2 - 1 = λ^2-6λ+9-1 = λ^2-6λ+8. Factor: (λ-4)(λ-2)=0, so λ=4 or λ=2.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc5-eigenvalues-and-eigenvectors-quiz-p3",
          topicTag: "eigenvaluesAndEigenvectors",
          promptText: "For A = [[3,1],[1,3]] with eigenvalue λ=4, find an eigenvector.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "(1,1)",
          stepByStepExplanation:
            "A-4I = [[-1,1],[1,-1]]. The equation -v1+v2=0 gives v1=v2. Choosing v1=1: eigenvector (1,1). Check: A*(1,1) = (3+1,1+3) = (4,4) = 4*(1,1), confirmed.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc5-eigenvalues-and-eigenvectors-quiz-p4",
          topicTag: "eigenvaluesAndEigenvectors",
          promptText: "For the same A = [[3,1],[1,3]] with eigenvalue λ=2, find an eigenvector.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "(1,-1)",
          stepByStepExplanation:
            "A-2I = [[1,1],[1,1]]. The equation v1+v2=0 gives v1=-v2. Choosing v1=1: eigenvector (1,-1). Check: A*(1,-1) = (3-1,1-3) = (2,-2) = 2*(1,-1), confirmed.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc5-eigenvalues-and-eigenvectors-quiz-p5",
          topicTag: "eigenvaluesAndEigenvectors",
          promptText:
            "A matrix has eigenvalue λ=1/2 for eigenvector (2,-1). Geometrically, describe what happens to the vector (2,-1) when the matrix is applied to it.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "it is shrunk to half its length, with its direction unchanged",
          stepByStepExplanation:
            "Since Av=λv with 0<λ<1, the output is (1/2)*(2,-1) = (1,-0.5): the same direction, but only half as long.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc5-eigenvalues-and-eigenvectors-quiz-p6",
          topicTag: "eigenvaluesAndEigenvectors",
          promptText: "Find the eigenvalues of A = [[0,-16],[1,0]].",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "4i and -4i",
          acceptableAnswerVariants: ["±4i", "4i, -4i"],
          stepByStepExplanation:
            "det(A-λI) = det([[-λ,-16],[1,-λ]]) = λ^2 - (-16)(1) = λ^2+16. Setting to 0: λ^2=-16, so λ=4i or λ=-4i - complex, since this matrix acts like a scaled rotation with no real direction left unrotated.",
          difficultyLevel: 4,
        },
        {
          problemId: "calc5-eigenvalues-and-eigenvectors-quiz-p7",
          topicTag: "eigenvaluesAndEigenvectors",
          promptText: "A = [[6,-2],[-2,3]] is symmetric. Find its eigenvalues.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "7 and 2",
          stepByStepExplanation:
            "det(A-λI) = (6-λ)(3-λ) - (-2)(-2) = (18-9λ+λ^2) - 4 = λ^2-9λ+14. Factor: (λ-7)(λ-2)=0, so λ=7 or λ=2 - both real, as guaranteed for a symmetric matrix.",
          difficultyLevel: 5,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "the-characteristic-equation-and-finding-eigenvalues",
        lessonTitle: "The Characteristic Equation and Finding Eigenvalues",
        estimatedMinutes: 30,
        topicTag: "eigenvaluesAndEigenvectors",
        learningGoals: [
          "State the defining equation Av=λv for an eigenvalue/eigenvector pair",
          "Derive and solve the characteristic equation det(A-λI)=0",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Directions a transformation doesn't rotate",
            bodyText:
              "For most vectors v, applying a matrix A produces Av pointing in some new direction - the matrix rotates and stretches it. But for special vectors, A only stretches or shrinks v along its own line, never rotating it off that line. Such a v is called an eigenvector, and the stretch/shrink factor λ (lambda) is its eigenvalue: Av = λv. This is the single most important idea in this unit, and finding these special directions is exactly the tool Calculus IV uses to solve systems of differential equations.",
          },
          {
            blockType: "keyFormula",
            headingText: "The characteristic equation",
            bodyText:
              "Rewrite Av=λv as (A-λI)v=0. For a nonzero v to solve this, A-λI must be singular, meaning det(A-λI)=0. This is the characteristic equation - a polynomial in λ whose roots are exactly the eigenvalues of A.",
            mathExpression: "Av=\\lambda v \\iff (A-\\lambda I)v = 0 \\iff \\det(A-\\lambda I)=0",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Find the eigenvalues of A = [[4,1],[2,3]]. Form A-λI = [[4-λ,1],[2,3-λ]]. Its determinant is (4-λ)(3-λ) - 1*2 = 12-4λ-3λ+λ^2-2 = λ^2-7λ+10. Setting this to 0: λ^2-7λ+10=0 factors as (λ-5)(λ-2)=0, so λ=5 or λ=2.",
            mathExpression: "\\lambda^2 - 7\\lambda + 10 = 0 \\implies \\lambda = 5 \\text{ or } \\lambda = 2",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Subtracting λ from every entry of A instead of only from the diagonal entries. A-λI only changes the diagonal (since I has zeros off the diagonal), so the off-diagonal entries of A carry straight over unchanged.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c5-u8-l1-p1",
            topicTag: "eigenvaluesAndEigenvectors",
            promptText: "Find the eigenvalues of the diagonal matrix A = [[2,0],[0,5]].",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "2 and 5",
            stepByStepExplanation:
              "The characteristic equation is (2-λ)(5-λ)=0, giving λ=2 or λ=5. For a diagonal matrix, the eigenvalues are always just the diagonal entries themselves.",
            difficultyLevel: 1,
          },
          {
            problemId: "c5-u8-l1-p2",
            topicTag: "eigenvaluesAndEigenvectors",
            promptText: "Find the eigenvalues of A = [[1,2],[2,1]].",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "3 and -1",
            stepByStepExplanation:
              "det(A-λI) = (1-λ)^2 - 4 = λ^2-2λ+1-4 = λ^2-2λ-3. Factor: (λ-3)(λ+1)=0, so λ=3 or λ=-1.",
            difficultyLevel: 3,
          },
          {
            problemId: "c5-u8-l1-p3",
            topicTag: "eigenvaluesAndEigenvectors",
            promptText: "Find the eigenvalues of the 90-degree rotation matrix A = [[0,-1],[1,0]].",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "i and -i",
            acceptableAnswerVariants: ["±i", "i, -i"],
            stepByStepExplanation:
              "det(A-λI) = det([[-λ,-1],[1,-λ]]) = λ^2 - (-1)(1) = λ^2+1. Setting to 0: λ^2=-1, so λ=i or λ=-i. This makes geometric sense: a pure rotation doesn't leave any real direction unrotated, so its eigenvalues are complex.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "3Blue1Brown: Essence of Linear Algebra (YouTube playlist)",
            resourceUrl: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
            resourceType: "videoLesson",
          },
          {
            resourceTitle: "MIT OCW 18.06: Linear Algebra (Gilbert Strang)",
            resourceUrl: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
            resourceType: "videoLesson",
          },
        ],
      },
      {
        lessonSlug: "finding-eigenvectors",
        lessonTitle: "Finding Eigenvectors",
        estimatedMinutes: 25,
        topicTag: "eigenvaluesAndEigenvectors",
        learningGoals: [
          "Solve (A-λI)v=0 to find an eigenvector for a given eigenvalue",
          "Verify an eigenvector/eigenvalue pair by checking Av=λv directly",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "One equation to solve per eigenvalue",
            bodyText:
              "Once an eigenvalue λ is known, plug it back into (A-λI)v=0 and solve this homogeneous system by row reduction, exactly the way null spaces were found earlier. The solutions form the eigenspace for that eigenvalue. There are always infinitely many eigenvectors for a given eigenvalue (any nonzero scalar multiple of one works just as well), so typically the simplest representative is reported.",
          },
          {
            blockType: "keyFormula",
            headingText: "Solving for the eigenvector",
            bodyText: "For each eigenvalue λ, solve (A-λI)v=0 for a nonzero v.",
            mathExpression: "(A-\\lambda I)v = 0, \\quad v \\neq 0",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Continuing with A = [[4,1],[2,3]], eigenvalues λ=5 and λ=2 (from the previous lesson). For λ=5: A-5I = [[-1,1],[2,-2]]. The first row gives -v1+v2=0, so v2=v1 (the second row is redundant, just twice the first). Choosing v1=1 gives the eigenvector (1,1). Check: A*(1,1) = (4+1, 2+3) = (5,5) = 5*(1,1), confirmed. For λ=2: A-2I = [[2,1],[2,1]]. The equation is 2v1+v2=0, so v2=-2v1. Choosing v1=1 gives the eigenvector (1,-2). Check: A*(1,-2) = (4-2, 2-6) = (2,-4) = 2*(1,-2), confirmed.",
            mathExpression: "\\lambda=5: v=(1,1); \\qquad \\lambda=2: v=(1,-2)",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Writing down a plausible-looking vector after the row reduction but skipping the final check against Av=λv. A small arithmetic slip during the row reduction is easy to make, and plugging the candidate vector back into the original equation catches it immediately.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c5-u8-l2-p1",
            topicTag: "eigenvaluesAndEigenvectors",
            promptText: "For A = [[1,2],[2,1]] with eigenvalue λ=3, find an eigenvector.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(1,1)",
            stepByStepExplanation:
              "A-3I = [[-2,2],[2,-2]]. The equation -2v1+2v2=0 gives v1=v2. Choosing v1=1: eigenvector (1,1). Check: A*(1,1) = (1+2,2+1) = (3,3) = 3*(1,1), confirmed.",
            difficultyLevel: 2,
          },
          {
            problemId: "c5-u8-l2-p2",
            topicTag: "eigenvaluesAndEigenvectors",
            promptText: "For the same A = [[1,2],[2,1]] with eigenvalue λ=-1, find an eigenvector.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(1,-1)",
            stepByStepExplanation:
              "A-(-1)I = A+I = [[2,2],[2,2]]. The equation 2v1+2v2=0 gives v1=-v2. Choosing v1=1: eigenvector (1,-1). Check: A*(1,-1) = (1-2,2-1) = (-1,1) = -1*(1,-1), confirmed.",
            difficultyLevel: 2,
          },
          {
            problemId: "c5-u8-l2-p3",
            topicTag: "eigenvaluesAndEigenvectors",
            promptText: "For A = [[2,0],[0,5]] with eigenvalue λ=2, find an eigenvector.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(1,0)",
            stepByStepExplanation:
              "A-2I = [[0,0],[0,3]]. The first row gives no restriction (0=0); the second row gives 3v2=0, so v2=0, with v1 free. Choosing v1=1: eigenvector (1,0).",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "MIT OCW 18.06: Linear Algebra (Gilbert Strang)",
            resourceUrl: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
            resourceType: "videoLesson",
          },
          {
            resourceTitle: "Khan Academy: Linear algebra",
            resourceUrl: "https://www.khanacademy.org/math/linear-algebra",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "geometric-interpretation-of-eigenvalues-and-eigenvectors",
        lessonTitle: "Geometric Interpretation of Eigenvalues and Eigenvectors",
        estimatedMinutes: 20,
        topicTag: "eigenvaluesAndEigenvectors",
        learningGoals: [
          "Describe what a transformation does to an eigenvector, geometrically",
          "Distinguish clearly between what the eigenvalue tells you and what the eigenvector tells you",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Direction and amount, kept separate",
            bodyText:
              "Geometrically, an eigenvector marks a direction that a transformation leaves alone (doesn't rotate off its own line), and the eigenvalue tells you what happens to a vector pointing that way: stretched if |λ|>1, shrunk if 0<|λ|<1, left exactly the same if λ=1, reversed in direction if λ is negative, and collapsed entirely to zero if λ=0. Every other direction (not an eigenvector) gets skewed into a genuinely new direction under the transformation - that's precisely why it fails to be an eigenvector.",
          },
          {
            blockType: "keyFormula",
            headingText: "Reading Av=λv geometrically",
            bodyText: "Av=λv means: v's direction is unchanged, and its length is scaled by the factor λ.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "A = [[3,0],[0,1]] stretches along the x-axis only. Since A is diagonal, its eigenvalues are its diagonal entries: λ1=3 with eigenvector (1,0), and λ2=1 with eigenvector (0,1). Geometrically: any vector along the x-axis triples in length; any vector along the y-axis is left completely unchanged. A vector like (1,1), which is NOT along either axis, becomes A*(1,1)=(3,1) - a vector that is not a scalar multiple of (1,1), so it's genuinely skewed, confirming (1,1) is not an eigenvector of A.",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Mixing up what the eigenvalue describes versus what the eigenvector describes. The eigenvalue λ is just a number (possibly complex) - it never has a 'direction.' The eigenvector's specific length never matters either - any nonzero scalar multiple of it is an equally valid eigenvector for the same eigenvalue.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c5-u8-l3-p1",
            topicTag: "eigenvaluesAndEigenvectors",
            promptText:
              "A matrix has eigenvalue λ=-2 for eigenvector (1,3). Geometrically, describe what happens to the vector (1,3) when the matrix is applied to it.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "it is stretched to twice its length and reversed in direction",
            stepByStepExplanation:
              "Since Av=λv with λ=-2, the output is -2*(1,3) = (-2,-6): the same line, but twice as long and pointing the opposite way.",
            difficultyLevel: 2,
          },
          {
            problemId: "c5-u8-l3-p2",
            topicTag: "eigenvaluesAndEigenvectors",
            promptText:
              "True or false: if λ=1 is an eigenvalue with eigenvector v, then Av is a different vector than v.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "false",
            stepByStepExplanation: "Av = 1*v = v exactly. An eigenvalue of 1 means the vector is left completely unchanged.",
            difficultyLevel: 1,
          },
          {
            problemId: "c5-u8-l3-p3",
            topicTag: "eigenvaluesAndEigenvectors",
            promptText:
              "A matrix has eigenvalue λ=0 for some eigenvector v. What does this tell you geometrically, and what does it tell you about the matrix's invertibility?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "A collapses v to the zero vector, and this means A is not invertible (singular)",
            stepByStepExplanation:
              "Av = 0*v = the zero vector, so the transformation squashes that entire direction down to a point. A matrix with an eigenvalue of 0 always has determinant 0 (since det(A) is the product of all eigenvalues), which means it's singular.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "3Blue1Brown: Essence of Linear Algebra (YouTube playlist)",
            resourceUrl: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
            resourceType: "videoLesson",
          },
          {
            resourceTitle: "Khan Academy: Linear algebra",
            resourceUrl: "https://www.khanacademy.org/math/linear-algebra",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "eigenvalues-and-eigenvectors-of-special-matrices",
        lessonTitle: "Eigenvalues and Eigenvectors of Special Matrices",
        estimatedMinutes: 20,
        topicTag: "eigenvaluesAndEigenvectors",
        learningGoals: [
          "State the guarantees that hold for a symmetric matrix's eigenvalues and eigenvectors",
          "Recognize that repeated eigenvalues need extra care when counting independent eigenvectors",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Symmetric matrices play by nicer rules",
            bodyText:
              "A symmetric matrix (one where A=A^T, meaning it's a mirror image of itself across the main diagonal) comes with two strong guarantees: its eigenvalues are always real (never complex, unlike the rotation matrix from lesson 1), and eigenvectors belonging to different eigenvalues are always orthogonal (perpendicular) to each other. Neither guarantee holds for a general, non-symmetric matrix. Separately, when an eigenvalue is repeated (a root of the characteristic polynomial with multiplicity greater than 1), it's worth checking carefully how many independent eigenvectors it actually produces - that count matters directly for diagonalizability, covered next unit.",
          },
          {
            blockType: "keyFormula",
            headingText: "The symmetric matrix guarantee",
            bodyText: "If A = A^T, then all eigenvalues of A are real, and eigenvectors for distinct eigenvalues are orthogonal.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "A = [[2,1],[1,2]] is symmetric. Characteristic equation: (2-λ)^2 - 1 = 0, so (2-λ)^2=1, giving 2-λ=±1, so λ=1 or λ=3 - both real, as guaranteed. For λ=3: A-3I=[[-1,1],[1,-1]], giving v1=v2, so eigenvector (1,1). For λ=1: A-I=[[1,1],[1,1]], giving v1=-v2, so eigenvector (1,-1). Check orthogonality: the dot product (1,1)·(1,-1) = 1*1+1*(-1) = 0, confirming the guarantee. (Contrast this with the non-symmetric A=[[4,1],[2,3]] from lesson 1: its eigenvectors (1,1) and (1,-2) have dot product 1-2=-1, which is not zero - not orthogonal, because that matrix isn't symmetric.)",
            mathExpression: "(1,1)\\cdot(1,-1) = 0",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Assuming EVERY matrix has orthogonal eigenvectors. That guarantee is specific to symmetric matrices - a general matrix's eigenvectors have no reason at all to be perpendicular, and often aren't.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c5-u8-l4-p1",
            topicTag: "eigenvaluesAndEigenvectors",
            promptText: "Is A = [[5,3],[3,5]] symmetric?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "yes",
            stepByStepExplanation: "A^T flips the off-diagonal entries, but here both off-diagonal entries already equal 3, so A=A^T.",
            difficultyLevel: 1,
          },
          {
            problemId: "c5-u8-l4-p2",
            topicTag: "eigenvaluesAndEigenvectors",
            promptText: "Find the eigenvalues of the symmetric matrix A = [[5,3],[3,5]].",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "2 and 8",
            stepByStepExplanation:
              "det(A-λI) = (5-λ)^2-9 = 0, so (5-λ)^2=9, giving 5-λ=±3, so λ=2 or λ=8 - both real, as guaranteed for a symmetric matrix.",
            difficultyLevel: 3,
          },
          {
            problemId: "c5-u8-l4-p3",
            topicTag: "eigenvaluesAndEigenvectors",
            promptText:
              "For A = [[5,3],[3,5]] with λ=8, find an eigenvector, then verify it's orthogonal to the eigenvector for λ=2.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "(1,1) for λ=8 and (1,-1) for λ=2; their dot product is 0, confirming orthogonality",
            stepByStepExplanation:
              "For λ=8: A-8I=[[-3,3],[3,-3]], giving v1=v2, so eigenvector (1,1). For λ=2: A-2I=[[3,3],[3,3]], giving v1=-v2, so eigenvector (1,-1). Dot product: (1)(1)+(1)(-1)=0, confirming orthogonality, exactly as the symmetric-matrix guarantee predicts.",
            difficultyLevel: 4,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "MIT OCW 18.06: Linear Algebra (Gilbert Strang)",
            resourceUrl: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
            resourceType: "videoLesson",
          },
          {
            resourceTitle: "Khan Academy: Linear algebra",
            resourceUrl: "https://www.khanacademy.org/math/linear-algebra",
            resourceType: "interactivePractice",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "diagonalization",
    unitTitle: "Diagonalization",
    unitDescription: "Determining diagonalizability, diagonalizing a matrix, and computing matrix powers.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Diagonalization",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc5-diagonalization-quiz-p1",
          topicTag: "diagonalization",
          promptText: "A 2x2 matrix has two distinct eigenvalues, 3 and -5. Is it diagonalizable?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "yes",
          stepByStepExplanation: "Distinct eigenvalues always produce independent eigenvectors, so 2 distinct eigenvalues guarantee 2 independent eigenvectors for a 2x2 matrix - diagonalizable.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc5-diagonalization-quiz-p2",
          topicTag: "diagonalization",
          promptText: "A = [[7,0],[0,7]] has a repeated eigenvalue λ=7. Is A diagonalizable?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "yes",
          stepByStepExplanation:
            "A-7I = [[0,0],[0,0]], so every vector in R^2 satisfies the equation - the eigenspace is the entire 2-dimensional plane, providing plenty of independent eigenvectors. A is diagonalizable (it's already diagonal).",
          difficultyLevel: 2,
        },
        {
          problemId: "calc5-diagonalization-quiz-p3",
          topicTag: "diagonalization",
          promptText: "A = [[4,1],[0,4]] has a repeated eigenvalue λ=4 (algebraic multiplicity 2). Is A diagonalizable?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "no",
          stepByStepExplanation:
            "A-4I = [[0,1],[0,0]] gives v2=0 with v1 free - only a 1-dimensional eigenspace. Since the repeated eigenvalue only contributes 1 independent eigenvector but 2 are needed, A is not diagonalizable.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc5-diagonalization-quiz-p4",
          topicTag: "diagonalization",
          promptText:
            "For A = [[3,1],[1,3]] with eigenvalue λ=4 (eigenvector (1,1)) and λ=2 (eigenvector (1,-1)), write matrices P and D for the diagonalization.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "P=[[1,1],[1,-1]], D=[[4,0],[0,2]]",
          stepByStepExplanation: "P's columns are the eigenvectors in the order used, and D's diagonal holds the matching eigenvalues in that same order: 4 then 2.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc5-diagonalization-quiz-p5",
          topicTag: "diagonalization",
          promptText: "True or false: for a diagonalizable matrix, the matrix D in A=PDP^-1 is unique.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "false",
          stepByStepExplanation:
            "D is not unique - its diagonal entries can be listed in any order, as long as P's eigenvector columns are reordered to match.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc5-diagonalization-quiz-p6",
          topicTag: "diagonalization",
          promptText: "For the diagonal matrix D = [[4,0],[0,-1]], find D^3.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "[[64,0],[0,-1]]",
          stepByStepExplanation: "Raise each diagonal entry to the 3rd power: 4^3=64 and (-1)^3=-1.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc5-diagonalization-quiz-p7",
          topicTag: "diagonalization",
          promptText:
            "For A = [[3,1],[1,3]] = PDP^-1 with P=[[1,1],[1,-1]] and D=[[4,0],[0,2]], find A^2 using PD^2P^-1, and check it against direct multiplication A*A.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "[[10,6],[6,10]]",
          stepByStepExplanation:
            "det(P)=1*(-1)-1*1=-2, so P^-1=(1/-2)*[[-1,-1],[-1,1]]=[[0.5,0.5],[0.5,-0.5]]. D^2=[[16,0],[0,4]]. PD^2=[[1,1],[1,-1]]*[[16,0],[0,4]]=[[16,4],[16,-4]]. (PD^2)P^-1=[[16,4],[16,-4]]*[[0.5,0.5],[0.5,-0.5]]=[[10,6],[6,10]]. Direct check: A^2=[[3,1],[1,3]]*[[3,1],[1,3]]=[[10,6],[6,10]], matching exactly.",
          difficultyLevel: 5,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "diagonalizability",
        lessonTitle: "Diagonalizability",
        estimatedMinutes: 25,
        topicTag: "diagonalization",
        learningGoals: [
          "State the condition for an n x n matrix to be diagonalizable",
          "Check whether a repeated eigenvalue still yields enough independent eigenvectors",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Needing a full set of eigenvectors",
            bodyText:
              "An n x n matrix A is diagonalizable when it has n linearly independent eigenvectors in total - equivalently, when A can be written as PDP^-1 for some diagonal matrix D. If A has n DISTINCT eigenvalues, diagonalizability is automatic, since eigenvectors belonging to different eigenvalues are always independent of each other. The tricky case is a repeated eigenvalue: it might still contribute enough independent eigenvectors, or it might fall short - this has to be checked directly, not assumed either way.",
          },
          {
            blockType: "keyFormula",
            headingText: "The diagonalizability condition",
            bodyText: "A (n x n) is diagonalizable exactly when it has n linearly independent eigenvectors, i.e., A = PDP^-1 for diagonal D.",
            mathExpression: "A = PDP^{-1}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: a repeated eigenvalue that falls short",
            bodyText:
              "A = [[2,1],[0,2]] has characteristic equation (2-λ)^2=0, so λ=2 is a repeated eigenvalue (algebraic multiplicity 2). Check its eigenspace: A-2I = [[0,1],[0,0]]. This gives v2=0, with v1 free - only a 1-dimensional eigenspace, span{(1,0)}. Even though the eigenvalue is repeated with multiplicity 2, it only produces ONE independent eigenvector, not two. Since A is 2x2 but only has 1 independent eigenvector total, A is NOT diagonalizable.",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Assuming that a repeated eigenvalue automatically means the matrix is not diagonalizable. That's not guaranteed either way - for instance, the identity matrix has eigenvalue 1 repeated n times, yet it's trivially diagonalizable (every nonzero vector is already an eigenvector). Always check the actual dimension of the eigenspace rather than assuming.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c5-u9-l1-p1",
            topicTag: "diagonalization",
            promptText: "A 3x3 matrix has three distinct eigenvalues: 1, 4, and -2. Is it diagonalizable?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "yes",
            stepByStepExplanation: "Distinct eigenvalues always produce independent eigenvectors, so 3 distinct eigenvalues guarantee 3 independent eigenvectors for a 3x3 matrix - diagonalizable.",
            difficultyLevel: 1,
          },
          {
            problemId: "c5-u9-l1-p2",
            topicTag: "diagonalization",
            promptText: "A = [[3,0],[0,3]] has a repeated eigenvalue λ=3. Is A diagonalizable?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "yes",
            stepByStepExplanation:
              "A-3I = [[0,0],[0,0]], so every vector in R^2 satisfies the equation - the eigenspace is the entire 2-dimensional plane. There are plenty of independent eigenvectors (e.g. (1,0) and (0,1)), so A is diagonalizable (in fact A is already diagonal).",
            difficultyLevel: 2,
          },
          {
            problemId: "c5-u9-l1-p3",
            topicTag: "diagonalization",
            promptText: "A = [[5,1],[0,5]] has a repeated eigenvalue λ=5 (algebraic multiplicity 2). Is A diagonalizable?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "no",
            stepByStepExplanation:
              "A-5I = [[0,1],[0,0]] gives v2=0 with v1 free - only a 1-dimensional eigenspace (span{(1,0)}). Since the repeated eigenvalue only contributes 1 independent eigenvector but 2 are needed, A is not diagonalizable.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "MIT OCW 18.06: Linear Algebra (Gilbert Strang)",
            resourceUrl: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
            resourceType: "videoLesson",
          },
          {
            resourceTitle: "Khan Academy: Linear algebra",
            resourceUrl: "https://www.khanacademy.org/math/linear-algebra",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "diagonalizing-a-matrix",
        lessonTitle: "Diagonalizing a Matrix",
        estimatedMinutes: 25,
        topicTag: "diagonalization",
        learningGoals: [
          "Build the matrices P and D that diagonalize A",
          "Verify a diagonalization by checking PDP^-1=A",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Assembling P and D",
            bodyText:
              "To diagonalize A, find all its eigenvalues and a full set of n independent eigenvectors. Place the eigenvectors as the columns of a matrix P, in whatever order you like, then place the matching eigenvalues along the diagonal of a matrix D, in that exact SAME order. The result satisfies A = PDP^-1.",
          },
          {
            blockType: "keyFormula",
            headingText: "The diagonalization",
            bodyText: "A = PDP^-1, where the columns of P are eigenvectors of A, and D's diagonal holds the matching eigenvalues in the same column order.",
            mathExpression: "A = PDP^{-1}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Diagonalize A = [[4,1],[2,3]], with eigenvalues λ=5 (eigenvector (1,1)) and λ=2 (eigenvector (1,-2)) from the previous unit. Set P = [[1,1],[1,-2]] and D = [[5,0],[0,2]] (matching column order). Find P^-1: det(P) = 1*(-2)-1*1 = -3, so P^-1 = (1/-3)*[[-2,-1],[-1,1]] = [[2/3,1/3],[1/3,-1/3]]. Verify PDP^-1 = A: PD = [[1,1],[1,-2]]*[[5,0],[0,2]] = [[5,2],[5,-4]]. Then (PD)P^-1 = [[5,2],[5,-4]]*[[2/3,1/3],[1/3,-1/3]] = [[10/3+2/3, 5/3-2/3],[10/3-4/3, 5/3+4/3]] = [[4,1],[2,3]], which matches A exactly.",
            mathExpression: "P=\\begin{bmatrix}1&1\\\\1&-2\\end{bmatrix},\\ D=\\begin{bmatrix}5&0\\\\0&2\\end{bmatrix}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Putting the eigenvectors into P in one order but listing the matching eigenvalues into D in a DIFFERENT order. The columns of P and the diagonal entries of D must line up position-by-position for the same eigenvalue/eigenvector pair, or the reconstruction A=PDP^-1 comes out wrong.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c5-u9-l2-p1",
            topicTag: "diagonalization",
            promptText:
              "For A = [[1,2],[2,1]] with eigenvalue λ=3 (eigenvector (1,1)) and λ=-1 (eigenvector (1,-1)), write matrices P and D for the diagonalization.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "P=[[1,1],[1,-1]], D=[[3,0],[0,-1]]",
            stepByStepExplanation: "P's columns are the eigenvectors in the order used, and D's diagonal holds the matching eigenvalues in that same order: 3 then -1.",
            difficultyLevel: 2,
          },
          {
            problemId: "c5-u9-l2-p2",
            topicTag: "diagonalization",
            promptText:
              "For A = [[2,0],[0,5]] with eigenvalue 2 (eigenvector (1,0)) and eigenvalue 5 (eigenvector (0,1)), write P and D.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "P=[[1,0],[0,1]], D=[[2,0],[0,5]]",
            stepByStepExplanation: "Since A was already diagonal, its eigenvectors are the standard basis vectors, so P is just the identity matrix, and D is A itself.",
            difficultyLevel: 1,
          },
          {
            problemId: "c5-u9-l2-p3",
            topicTag: "diagonalization",
            promptText: "True or false: for a diagonalizable matrix, the matrix P in A=PDP^-1 is unique.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "false",
            stepByStepExplanation:
              "P is not unique - you can reorder the eigenvector columns (as long as D's diagonal entries are reordered to match), or replace any eigenvector with a nonzero scalar multiple of itself, and still get a valid diagonalization.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "MIT OCW 18.06: Linear Algebra (Gilbert Strang)",
            resourceUrl: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
            resourceType: "videoLesson",
          },
          {
            resourceTitle: "Khan Academy: Linear algebra",
            resourceUrl: "https://www.khanacademy.org/math/linear-algebra",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "applications-matrix-powers",
        lessonTitle: "Applications: Matrix Powers",
        estimatedMinutes: 20,
        topicTag: "diagonalization",
        learningGoals: [
          "Use A^k = PD^kP^-1 to compute a high power of a matrix efficiently",
          "Explain why raising a diagonal matrix to a power is trivial",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Why diagonalizing pays off",
            bodyText:
              "Computing A^k by multiplying A by itself k times is tedious for large k. But once A = PDP^-1, something wonderful happens: A^k = PD^kP^-1, and D^k is completely trivial to compute since D is diagonal - you just raise each diagonal entry to the k-th power, with no matrix multiplication needed at all. This exact trick is what makes solving a system of differential equations with eigenvalues tractable by hand, which is exactly where this course reconnects with Calculus IV.",
          },
          {
            blockType: "keyFormula",
            headingText: "Matrix powers via diagonalization",
            bodyText: "A^k = P D^k P^-1, where D^k simply raises each diagonal entry of D to the power k.",
            mathExpression: "A^k = PD^kP^{-1}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Using A = [[4,1],[2,3]] = PDP^-1 from the previous lesson (P=[[1,1],[1,-2]], D=[[5,0],[0,2]], P^-1=[[2/3,1/3],[1/3,-1/3]]), find A^3. D^3 = [[125,0],[0,8]]. PD^3 = [[1,1],[1,-2]]*[[125,0],[0,8]] = [[125,8],[125,-16]]. (PD^3)P^-1 = [[125,8],[125,-16]]*[[2/3,1/3],[1/3,-1/3]] = [[250/3+8/3, 125/3-8/3],[250/3-16/3, 125/3+16/3]] = [[86,39],[78,47]]. As a check, direct repeated multiplication gives the same result: A^2=[[18,7],[14,11]], and A^3=A^2*A=[[86,39],[78,47]], matching exactly.",
            mathExpression: "A^3 = \\begin{bmatrix}86&39\\\\78&47\\end{bmatrix}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Trying to raise the WHOLE diagonal matrix D to a power using ordinary matrix multiplication rules, instead of noticing that for a diagonal matrix, D^k just means raising each diagonal entry individually - no actual matrix multiplication is needed for that step at all.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c5-u9-l3-p1",
            topicTag: "diagonalization",
            promptText: "For the diagonal matrix D = [[3,0],[0,-2]], find D^4.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "[[81,0],[0,16]]",
            stepByStepExplanation: "Raise each diagonal entry to the 4th power: 3^4=81 and (-2)^4=16.",
            difficultyLevel: 1,
          },
          {
            problemId: "c5-u9-l3-p2",
            topicTag: "diagonalization",
            promptText: "For A = [[2,0],[0,5]] (already diagonal), find A^3 directly.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "[[8,0],[0,125]]",
            stepByStepExplanation: "Since A is already diagonal, A^3 just raises each diagonal entry: 2^3=8 and 5^3=125.",
            difficultyLevel: 1,
          },
          {
            problemId: "c5-u9-l3-p3",
            topicTag: "diagonalization",
            promptText:
              "For A = [[1,2],[2,1]] = PDP^-1 with P=[[1,1],[1,-1]] and D=[[3,0],[0,-1]], find A^2 using PD^2P^-1, and check it against direct multiplication A*A.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "[[5,4],[4,5]]",
            stepByStepExplanation:
              "det(P)=1*(-1)-1*1=-2, so P^-1=(1/-2)*[[-1,-1],[-1,1]]=[[0.5,0.5],[0.5,-0.5]]. D^2=[[9,0],[0,1]]. PD^2=[[1,1],[1,-1]]*[[9,0],[0,1]]=[[9,1],[9,-1]]. (PD^2)P^-1=[[9,1],[9,-1]]*[[0.5,0.5],[0.5,-0.5]]=[[5,4],[4,5]]. Direct check: A^2=[[1,2],[2,1]]*[[1,2],[2,1]]=[[5,4],[4,5]], matching exactly.",
            difficultyLevel: 5,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "MIT OCW 18.06: Linear Algebra (Gilbert Strang)",
            resourceUrl: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
            resourceType: "videoLesson",
          },
          {
            resourceTitle: "Khan Academy: Linear algebra",
            resourceUrl: "https://www.khanacademy.org/math/linear-algebra",
            resourceType: "interactivePractice",
          },
        ],
      },
    ],
  },
  {
    unitSlug: "linear-algebra-applications",
    unitTitle: "Applications",
    unitDescription:
      "Solving systems of differential equations with eigenvalues, the Jacobian revisited, and a broader look at where linear algebra shows up.",
    unitQuiz: {
      quizTitle: "Unit Quiz: Applications",
      passingScorePercent: 70,
      questions: [
        {
          problemId: "calc5-linear-algebra-applications-quiz-p1",
          topicTag: "ordinaryDifferentialEquations",
          promptText:
            "For x'=Ax with A=[[3,0],[0,-2]] (already diagonal, eigenvalues 3 and -2 with eigenvectors (1,0) and (0,1)), write the general solution.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "x1(t) = C1 e^(3t), x2(t) = C2 e^(-2t)",
          stepByStepExplanation:
            "Since A is already diagonal, the system is already decoupled: x1'=3x1 solves to x1=C1e^(3t), and x2'=-2x2 solves to x2=C2e^(-2t).",
          difficultyLevel: 2,
        },
        {
          problemId: "calc5-linear-algebra-applications-quiz-p2",
          topicTag: "ordinaryDifferentialEquations",
          promptText:
            "For x'=Ax with A=[[3,1],[1,3]] (eigenvalue 4 with eigenvector (1,1), and eigenvalue 2 with eigenvector (1,-1)), write the general solution x(t).",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "x1(t) = C1 e^(4t) + C2 e^(2t), x2(t) = C1 e^(4t) - C2 e^(2t)",
          stepByStepExplanation:
            "x(t) = C1 e^(4t)(1,1) + C2 e^(2t)(1,-1), giving x1(t)=C1e^(4t)+C2e^(2t) and x2(t)=C1e^(4t)-C2e^(2t).",
          difficultyLevel: 3,
        },
        {
          problemId: "calc5-linear-algebra-applications-quiz-p3",
          topicTag: "ordinaryDifferentialEquations",
          promptText: "Using the general solution from the previous problem, apply initial conditions x1(0)=5, x2(0)=1 to find C1 and C2.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "C1=3, C2=2",
          stepByStepExplanation: "At t=0: C1+C2=5 and C1-C2=1. Adding the two equations: 2C1=6, so C1=3. Then C2=5-3=2.",
          difficultyLevel: 3,
        },
        {
          problemId: "calc5-linear-algebra-applications-quiz-p4",
          topicTag: "determinants",
          promptText: "For the linear change of variables x=u+3v, y=2u-v, find the Jacobian.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "-7",
          stepByStepExplanation:
            "The Jacobian matrix is [[1,3],[2,-1]] (partial derivatives of x and y with respect to u and v). Its determinant is 1*(-1)-3*2 = -1-6 = -7.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc5-linear-algebra-applications-quiz-p5",
          topicTag: "determinants",
          promptText: "For the scaling change of variables x=5u, y=4v, find the Jacobian and interpret it geometrically.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "J = 20; a region's area gets multiplied by 20 when mapped from the u,v-plane into the x,y-plane",
          stepByStepExplanation:
            "The Jacobian matrix is [[5,0],[0,4]]. Its determinant is 5*4-0*0=20, meaning every area in the u,v-plane gets scaled by a factor of 20 in the x,y-plane.",
          difficultyLevel: 2,
        },
        {
          problemId: "calc5-linear-algebra-applications-quiz-p6",
          topicTag: "linearAlgebraFoundations",
          promptText: "True or false: in PCA, the directions of greatest variation in a dataset are found using the eigenvectors of the data's covariance matrix.",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "true",
          stepByStepExplanation:
            "That's exactly how PCA works: the eigenvectors of the covariance matrix are the principal components, and the size of each eigenvalue measures how much the data varies along that direction.",
          difficultyLevel: 1,
        },
        {
          problemId: "calc5-linear-algebra-applications-quiz-p7",
          topicTag: "linearAlgebraFoundations",
          promptText:
            "In PCA, a dataset's covariance matrix has eigenvalues 12, 3, and 0.5 for its three eigenvectors. Which eigenvalue's eigenvector represents the direction of LEAST variation in the data?",
          answerFormat: "shortAlgebraicAnswer",
          correctAnswer: "the eigenvector belonging to eigenvalue 0.5",
          stepByStepExplanation:
            "In PCA, a smaller eigenvalue means the data spreads out less along that eigenvector's direction, so the eigenvalue of 0.5 (the smallest) marks the direction of least variation.",
          difficultyLevel: 2,
        },
      ],
    },
    lessons: [
      {
        lessonSlug: "solving-systems-of-differential-equations-revisited",
        lessonTitle: "Solving Systems of Differential Equations, Revisited",
        estimatedMinutes: 30,
        topicTag: "ordinaryDifferentialEquations",
        learningGoals: [
          "Use a matrix's eigenvalues and eigenvectors to write the general solution to x'=Ax",
          "Apply initial conditions to pin down the constants in that general solution",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "The payoff this whole course has been building toward",
            bodyText:
              "A system of linear first-order differential equations x'=Ax (where x is a vector of unknown functions of t) looks intimidating, but diagonalization cracks it wide open. If A=PDP^-1, changing coordinates to y=P^-1x decouples the system into n completely independent one-variable equations, y_i' = λ_i y_i - each of which is solved by the familiar exponential y_i(t)=C_i e^(λ_i t). Converting back to x gives a clean formula built entirely from eigenvalues and eigenvectors. This is exactly the technique Calculus IV's systems-of-differential-equations unit relies on.",
          },
          {
            blockType: "keyFormula",
            headingText: "The general solution formula",
            bodyText:
              "For x'=Ax with eigenvalues λ_i and matching eigenvectors v_i, the general solution is x(t) = C1 e^(λ1 t) v1 + C2 e^(λ2 t) v2 + ... The constants C_i are pinned down using initial conditions.",
            mathExpression: "x(t) = C_1 e^{\\lambda_1 t}v_1 + C_2 e^{\\lambda_2 t}v_2",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example",
            bodyText:
              "Solve x1'=4x1+x2, x2'=2x1+3x2 (i.e., x'=Ax with A=[[4,1],[2,3]], the matrix diagonalized earlier: eigenvalues 5 and 2, with eigenvectors (1,1) and (1,-2)). The general solution is x(t) = C1 e^(5t)(1,1) + C2 e^(2t)(1,-2), i.e. x1(t)=C1 e^(5t)+C2 e^(2t) and x2(t)=C1 e^(5t)-2C2 e^(2t). Apply initial conditions x1(0)=3, x2(0)=0: C1+C2=3 and C1-2C2=0, so C1=2C2. Substituting: 2C2+C2=3, so C2=1 and C1=2. Final solution: x1(t)=2e^(5t)+e^(2t), x2(t)=2e^(5t)-2e^(2t). Check at t=0: x1(0)=2+1=3 correct, x2(0)=2-2=0 correct. Check the ODE itself: x1' = 10e^(5t)+2e^(2t), and 4x1+x2 = 4(2e^(5t)+e^(2t)) + (2e^(5t)-2e^(2t)) = 10e^(5t)+2e^(2t), which matches x1' exactly.",
            mathExpression: "x_1(t)=2e^{5t}+e^{2t}, \\quad x_2(t)=2e^{5t}-2e^{2t}",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Pairing an eigenvalue with the WRONG eigenvector when assembling the general solution - for instance, writing e^(λ1 t) times v2 instead of v1. Mixing the pairing up produces a function that does not actually satisfy the original system of differential equations at all, even though it might look superficially plausible.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c5-u10-l1-p1",
            topicTag: "ordinaryDifferentialEquations",
            promptText:
              "For x'=Ax with A=[[2,0],[0,5]] (already diagonal, eigenvalues 2 and 5 with eigenvectors (1,0) and (0,1)), write the general solution.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "x1(t) = C1 e^(2t), x2(t) = C2 e^(5t)",
            stepByStepExplanation:
              "Since A is already diagonal, the system is already decoupled: x1'=2x1 solves to x1=C1e^(2t), and x2'=5x2 solves to x2=C2e^(5t).",
            difficultyLevel: 2,
          },
          {
            problemId: "c5-u10-l1-p2",
            topicTag: "ordinaryDifferentialEquations",
            promptText:
              "For x'=Ax with A=[[1,2],[2,1]] (eigenvalue 3 with eigenvector (1,1), and eigenvalue -1 with eigenvector (1,-1)), write the general solution x(t).",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "x1(t) = C1 e^(3t) + C2 e^(-t), x2(t) = C1 e^(3t) - C2 e^(-t)",
            stepByStepExplanation:
              "x(t) = C1 e^(3t)(1,1) + C2 e^(-t)(1,-1), giving x1(t)=C1e^(3t)+C2e^(-t) and x2(t)=C1e^(3t)-C2e^(-t).",
            difficultyLevel: 3,
          },
          {
            problemId: "c5-u10-l1-p3",
            topicTag: "ordinaryDifferentialEquations",
            promptText:
              "Using the general solution from the previous problem, apply initial conditions x1(0)=4, x2(0)=2 to find C1 and C2.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "C1=3, C2=1",
            stepByStepExplanation:
              "At t=0: C1+C2=4 and C1-C2=2. Adding the two equations: 2C1=6, so C1=3. Then C2=4-3=1.",
            difficultyLevel: 3,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "MIT OCW 18.06: Linear Algebra (Gilbert Strang) - applications lectures",
            resourceUrl: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
            resourceType: "videoLesson",
          },
          {
            resourceTitle: "Paul's Online Math Notes: Differential Equations - Systems of DE",
            resourceUrl: "https://tutorial.math.lamar.edu/Classes/DE/SystemsDE.aspx",
            resourceType: "textbookChapter",
          },
        ],
      },
      {
        lessonSlug: "the-jacobian-revisited",
        lessonTitle: "The Jacobian, Revisited",
        estimatedMinutes: 20,
        topicTag: "determinants",
        learningGoals: [
          "Recognize the Jacobian as a determinant of partial derivatives",
          "Compute a Jacobian and interpret it as a local area/volume scaling factor",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "Same determinant, new entries",
            bodyText:
              "Changing variables in a multiple integral (for example, switching to polar coordinates) requires multiplying by the absolute value of the Jacobian determinant. That's literally the exact determinant concept from earlier in this course - the only difference is that the entries are now partial derivatives instead of constants. The Jacobian plays the same geometric role discussed with the geometric-meaning-of-the-determinant lesson: a local area or volume scaling factor for the transformation, at every point.",
          },
          {
            blockType: "keyFormula",
            headingText: "The Jacobian determinant",
            bodyText: "For x=x(u,v), y=y(u,v): J = det([[∂x/∂u, ∂x/∂v],[∂y/∂u, ∂y/∂v]]), and dA = |J| du dv.",
            mathExpression: "J = \\det\\begin{bmatrix}\\partial x/\\partial u & \\partial x/\\partial v \\\\ \\partial y/\\partial u & \\partial y/\\partial v\\end{bmatrix}",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: polar coordinates",
            bodyText:
              "For x=r cos(theta), y=r sin(theta): ∂x/∂r=cos(theta), ∂x/∂theta=-r sin(theta), ∂y/∂r=sin(theta), ∂y/∂theta=r cos(theta). The Jacobian is J = det([[cos(theta), -r sin(theta)],[sin(theta), r cos(theta)]]) = cos(theta)*r cos(theta) - (-r sin(theta))*sin(theta) = r cos^2(theta) + r sin^2(theta) = r*(cos^2(theta)+sin^2(theta)) = r. This is exactly the familiar 'dA = r dr d(theta)' factor from polar integration in Calculus III - the r there IS this Jacobian determinant.",
            mathExpression: "J = r \\implies dA = r\\,dr\\,d\\theta",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Forgetting to take the absolute value of the Jacobian when converting an integral. A Jacobian can, in general, come out negative depending on orientation, but an area or volume element in an integral must always be positive - always wrap it in absolute value bars before using it as dA or dV.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c5-u10-l2-p1",
            topicTag: "determinants",
            promptText:
              "For the linear change of variables x=2u+v, y=u-v (constant partial derivatives, forming a matrix exactly like earlier units), find the Jacobian.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "-3",
            stepByStepExplanation:
              "The Jacobian matrix is [[2,1],[1,-1]] (partial derivatives of x and y with respect to u and v). Its determinant is 2*(-1)-1*1 = -3.",
            difficultyLevel: 2,
          },
          {
            problemId: "c5-u10-l2-p2",
            topicTag: "determinants",
            promptText:
              "True or false: the Jacobian determinant used in Calculus III's change of variables is a fundamentally different mathematical object than the determinant studied earlier in this course.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "false",
            stepByStepExplanation:
              "It's the exact same determinant concept - the only difference is that its entries are partial derivatives instead of constants.",
            difficultyLevel: 1,
          },
          {
            problemId: "c5-u10-l2-p3",
            topicTag: "determinants",
            promptText:
              "For the scaling change of variables x=3u, y=2v, find the Jacobian and interpret it geometrically.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "J = 6; a region's area gets multiplied by 6 when mapped from the u,v-plane into the x,y-plane",
            stepByStepExplanation:
              "The Jacobian matrix is [[3,0],[0,2]] (∂x/∂u=3, ∂x/∂v=0, ∂y/∂u=0, ∂y/∂v=2). Its determinant is 3*2-0*0=6, meaning every area in the u,v-plane gets scaled by a factor of 6 in the x,y-plane.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "MIT OCW 18.06: Linear Algebra (Gilbert Strang) - applications lectures",
            resourceUrl: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
            resourceType: "videoLesson",
          },
          {
            resourceTitle: "Khan Academy: Linear algebra",
            resourceUrl: "https://www.khanacademy.org/math/linear-algebra",
            resourceType: "interactivePractice",
          },
        ],
      },
      {
        lessonSlug: "a-broader-look-where-linear-algebra-shows-up",
        lessonTitle: "A Broader Look: Where Linear Algebra Shows Up",
        estimatedMinutes: 20,
        topicTag: "linearAlgebraFoundations",
        learningGoals: [
          "Describe, conceptually, how matrices power computer graphics transformations",
          "Describe, conceptually, how eigenvectors underlie techniques like PCA and PageRank",
        ],
        contentBlocks: [
          {
            blockType: "explanation",
            headingText: "The same toolkit, everywhere",
            bodyText:
              "Beyond calculus, this exact toolkit reappears constantly. Computer graphics: every rotation, scaling, and projection applied to a 3D model in a video game or animation is done via matrix multiplication - the same geometric transformations from earlier in this course, just extended to three dimensions. Data analysis and machine learning: Principal Component Analysis (PCA), a core technique for simplifying large datasets, works by finding the eigenvectors of the data's covariance matrix - the directions of greatest variation in the data are literally eigenvectors, and each one's 'importance' is its eigenvalue. Search and ranking: Google's original PageRank algorithm modeled the entire web as a giant matrix and ranked every page using an eigenvector of it. Engineering and economics: circuit analysis, structural analysis, and economic equilibrium models all lean on row reduction and matrix inverses to solve the large systems of simultaneous constraints that arise.",
          },
          {
            blockType: "keyFormula",
            headingText: "PCA in one sentence",
            bodyText: "In PCA, the eigenvectors of a dataset's covariance matrix are its 'principal components,' and the size of each eigenvalue measures how much the data varies along that direction.",
          },
          {
            blockType: "workedExample",
            headingText: "Worked example: a toy PageRank",
            bodyText:
              "Imagine two web pages, A and B, that link only to each other, each passing 100% of its 'rank' to the other page. The transition matrix is M = [[0,1],[1,0]]. The steady-state ranking is the eigenvector of M for eigenvalue 1. Check v=(1,1): Mv = [[0,1],[1,0]]*(1,1) = (0*1+1*1, 1*1+0*1) = (1,1) = 1*(1,1). So (1,1) is indeed an eigenvector with eigenvalue 1, meaning the steady-state ranking gives both pages equal importance - which makes sense, since the two pages are perfectly symmetric.",
            mathExpression: "Mv = (1,1) = 1\\cdot v",
          },
          {
            blockType: "commonMistake",
            headingText: "Common mistake",
            bodyText:
              "Treating a rotation matrix in a game engine, a covariance matrix in a dataset, or a link matrix on the web as 'different kinds of math' unrelated to this course. They're governed by exactly the same row reduction, determinant, eigenvalue, and diagonalization ideas built up over these ten units - recognizing that connection is what makes linear algebra worth learning as a unified toolkit rather than ten disconnected topics.",
          },
        ],
        practiceProblems: [
          {
            problemId: "c5-u10-l3-p1",
            topicTag: "linearAlgebraFoundations",
            promptText:
              "In computer graphics, if you rotate an object and then scale it, is the combined transformation still representable by a single matrix?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "yes",
            stepByStepExplanation:
              "The composition of two linear transformations is itself a linear transformation, represented by the product of their two matrices - exactly the composition rule from the linear transformations unit.",
            difficultyLevel: 1,
          },
          {
            problemId: "c5-u10-l3-p2",
            topicTag: "linearAlgebraFoundations",
            promptText:
              "In PCA, a dataset's covariance matrix has eigenvalues 40, 5, and 0.1 for its three eigenvectors. Which eigenvector represents the direction of greatest variation in the data?",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "the eigenvector belonging to eigenvalue 40",
            stepByStepExplanation:
              "In PCA, a larger eigenvalue means the data spreads out more along that eigenvector's direction, so the eigenvalue of 40 (the largest) marks the direction of greatest variation.",
            difficultyLevel: 2,
          },
          {
            problemId: "c5-u10-l3-p3",
            topicTag: "linearAlgebraFoundations",
            promptText:
              "For the toy PageRank matrix M=[[0,1],[1,0]], verify that v=(1,1) is an eigenvector with eigenvalue 1.",
            answerFormat: "shortAlgebraicAnswer",
            correctAnswer: "Mv = (1,1) = 1 times v, confirming eigenvalue 1",
            stepByStepExplanation:
              "Mv = [[0,1],[1,0]]*(1,1) = (0*1+1*1, 1*1+0*1) = (1,1). Since (1,1) = 1*(1,1), this confirms v=(1,1) is an eigenvector of M with eigenvalue 1.",
            difficultyLevel: 2,
          },
        ],
        freeResourceLinks: [
          {
            resourceTitle: "3Blue1Brown: Essence of Linear Algebra (YouTube playlist)",
            resourceUrl: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
            resourceType: "videoLesson",
          },
          {
            resourceTitle: "MIT OCW 18.06: Linear Algebra (Gilbert Strang) - applications lectures",
            resourceUrl: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
            resourceType: "videoLesson",
          },
        ],
      },
    ],
  },
];

export const calculus5CourseExam: CourseExam = {
  examTitle: "Calculus V: Linear Algebra Foundations — Course Exam",
  passingScorePercent: 70,
  questions: [
    // --- Vectors and Matrices ---
    {
      problemId: "calc5-exam-p1",
      topicTag: "linearAlgebraFoundations",
      promptText: "Matrix C has 4 rows and 2 columns. What are its dimensions, written as 'rows x columns'?",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "4x2",
      acceptableAnswerVariants: ["4 x 2", "4 by 2"],
      stepByStepExplanation: "C has 4 rows and 2 columns, so its dimensions are 4x2 (rows always listed first).",
      difficultyLevel: 1,
    },
    {
      problemId: "calc5-exam-p2",
      topicTag: "linearAlgebraFoundations",
      promptText: "Let A = [[3,-1],[2,4]] and B = [[-2,5],[1,0]]. Find A + B.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "[[1,4],[3,4]]",
      stepByStepExplanation: "Add entrywise: (3+(-2), -1+5) = (1,4) for row 1, and (2+1, 4+0) = (3,4) for row 2.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc5-exam-p3",
      topicTag: "linearAlgebraFoundations",
      promptText: "Let A = [[2,1],[0,3]] and B = [[1,-1],[4,2]]. Find AB.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "[[6,0],[12,6]]",
      stepByStepExplanation:
        "Row 1 of A with column 1 of B: 2*1+1*4=6. Row 1 of A with column 2 of B: 2*(-1)+1*2=0. Row 2 of A with column 1 of B: 0*1+3*4=12. Row 2 of A with column 2 of B: 0*(-1)+3*2=6. So AB = [[6,0],[12,6]].",
      difficultyLevel: 3,
    },
    // --- Row Reduction and Solving Systems ---
    {
      problemId: "calc5-exam-p4",
      topicTag: "rowReductionAndGaussianElimination",
      promptText: "Apply the row operation R2 -> R2 - 4R1 to the matrix [[1,2],[4,9]]. What is the resulting matrix?",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "[[1,2],[0,1]]",
      stepByStepExplanation: "New row 2 = (4-4*1, 9-4*2) = (0,1). Row 1 is unchanged. Result: [[1,2],[0,1]].",
      difficultyLevel: 1,
    },
    {
      problemId: "calc5-exam-p5",
      topicTag: "rowReductionAndGaussianElimination",
      promptText: "Solve the system using Gaussian elimination: x + 3y = 10, 2x - y = 6.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "x=4, y=2",
      stepByStepExplanation:
        "Augmented matrix [[1,3,10],[2,-1,6]]. R2 -> R2-2R1 gives (0,-7,-14). Scale by -1/7: (0,1,2), so y=2. Back-substitute into x+3y=10: x=10-6=4.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc5-exam-p6",
      topicTag: "rowReductionAndGaussianElimination",
      promptText: "An augmented matrix (variables x, y, z) reduces to RREF [[1,0,-2,3],[0,1,5,-1],[0,0,0,0]]. Classify the solution set.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "infinitely many solutions",
      stepByStepExplanation:
        "Column 3 (for z) has no pivot, so z is free. There's no contradictory row (the zero row says 0=0), so the system is consistent with a free variable - infinitely many solutions.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc5-exam-p7",
      topicTag: "rowReductionAndGaussianElimination",
      promptText: "Solve the system: x+y+z=6, x-y+2z=7, 2x+y-z=2.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "x=2, y=1, z=3",
      stepByStepExplanation:
        "From equation 1, x=6-y-z. Substitute into equation 2: (6-y-z)-y+2z=7, so -2y+z=1, i.e. z=1+2y. Substitute into equation 3: 2(6-y-z)+y-z=2, so 12-y-3z=2, i.e. y+3z=10. Plug in z=1+2y: y+3(1+2y)=10, so 7y=7, y=1. Then z=1+2(1)=3, and x=6-1-3=2. Check: 2+1+3=6 correct; 2-1+6=7 correct; 4+1-3=2 correct.",
      difficultyLevel: 4,
    },
    // --- Determinants ---
    {
      problemId: "calc5-exam-p8",
      topicTag: "determinants",
      promptText: "Find det([[7,3],[2,5]]).",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "29",
      stepByStepExplanation: "det = 7*5 - 3*2 = 35-6 = 29.",
      difficultyLevel: 1,
    },
    {
      problemId: "calc5-exam-p9",
      topicTag: "determinants",
      promptText: "Find det([[2,1,3],[0,4,-1],[5,0,2]]) by expanding along the first row.",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "-49",
      stepByStepExplanation:
        "det = 2*((4)(2)-(-1)(0)) - 1*((0)(2)-(-1)(5)) + 3*((0)(0)-(4)(5)) = 2*(8-0) - 1*(0+5) + 3*(0-20) = 16-5-60 = -49.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc5-exam-p10",
      topicTag: "determinants",
      promptText: "For A = [[1,2,3],[4,5,6],[7,8,10]], find the cofactor C23 (delete row 2, column 3, take the determinant, then apply the correct sign).",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "6",
      stepByStepExplanation:
        "Deleting row 2 and column 3 leaves [[1,2],[7,8]], with determinant 1*8-2*7=-6. The sign for position (2,3) is (-1)^(2+3) = -1, so C23 = -1*(-6) = 6.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc5-exam-p11",
      topicTag: "determinants",
      promptText: "If det(A) = -3 and det(B) = 7 for two n x n matrices, what is det(AB)?",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "-21",
      stepByStepExplanation: "det(AB) = det(A) * det(B) = -3 * 7 = -21.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc5-exam-p12",
      topicTag: "determinants",
      promptText: "Find the area of the parallelogram spanned by the vectors (5,1) and (2,3).",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "13",
      stepByStepExplanation: "det([[5,2],[1,3]]) = 5*3 - 2*1 = 15-2 = 13. Area = |13| = 13.",
      difficultyLevel: 2,
    },
    // --- Matrix Inverses ---
    {
      problemId: "calc5-exam-p13",
      topicTag: "matrixInverses",
      promptText: "Is A = [[5,10],[2,4]] invertible?",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "no",
      stepByStepExplanation: "det(A) = 5*4 - 10*2 = 20-20 = 0, so A is singular and not invertible.",
      difficultyLevel: 1,
    },
    {
      problemId: "calc5-exam-p14",
      topicTag: "matrixInverses",
      promptText: "Use the 2x2 shortcut formula to find the inverse of A = [[3,1],[2,1]].",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "[[1,-1],[-2,3]]",
      stepByStepExplanation:
        "det(A) = 3*1-1*2 = 1. A^-1 = (1/1)*[[1,-1],[-2,3]] = [[1,-1],[-2,3]]. Check: A*A^-1 = [[3-2,-3+3],[2-2,-2+3]] = [[1,0],[0,1]].",
      difficultyLevel: 2,
    },
    {
      problemId: "calc5-exam-p15",
      topicTag: "matrixInverses",
      promptText: "Using A = [[3,1],[2,1]] with A^-1 = [[1,-1],[-2,3]] (found in the previous problem), solve Ax = b for b = (7,5).",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "x=2, y=1",
      stepByStepExplanation:
        "x = A^-1 b: first entry 1*7+(-1)*5 = 2; second entry -2*7+3*5 = -14+15 = 1. So x=2, y=1. Check: 3(2)+1(1)=7 correct; 2(2)+1(1)=5 correct.",
      difficultyLevel: 3,
    },
    // --- Vector Spaces and Subspaces ---
    {
      problemId: "calc5-exam-p16",
      topicTag: "vectorSpacesAndSubspaces",
      promptText: "Is W = {(x,y,z) in R^3 : 2x - y + z = 0} a subspace of R^3?",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "yes",
      stepByStepExplanation:
        "This is a homogeneous linear equation: (0,0,0) satisfies it, and the sum or scalar multiple of any two solutions is still a solution, so all three subspace conditions hold.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc5-exam-p17",
      topicTag: "vectorSpacesAndSubspaces",
      promptText: "Find the null space of A = [[3,6],[1,2]].",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "span{(-2,1)}",
      stepByStepExplanation:
        "Ax=0 gives 3x1+6x2=0 (row 1), so x1=-2x2; row 2 (x1+2x2=0) says the same thing, redundant. With x2 free, the null space is span{(-2,1)}.",
      difficultyLevel: 3,
    },
    // --- Linear Independence, Basis, and Dimension ---
    {
      problemId: "calc5-exam-p18",
      topicTag: "linearIndependenceBasisAndDimension",
      promptText: "Are the vectors (4,2) and (2,1) linearly independent?",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "no",
      stepByStepExplanation: "det([[4,2],[2,1]]) = 4*1-2*2 = 0, so they're dependent (the first vector is exactly twice the second).",
      difficultyLevel: 2,
    },
    {
      problemId: "calc5-exam-p19",
      topicTag: "linearIndependenceBasisAndDimension",
      promptText: "Do v1=(1,1) and v2=(-1,1) form a basis for R^2?",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "yes",
      stepByStepExplanation:
        "det([[1,-1],[1,1]]) = 1*1-(-1)*1 = 2, which is nonzero, so they're independent. Two independent vectors in the 2-dimensional space R^2 automatically span it, so they form a basis.",
      difficultyLevel: 2,
    },
    {
      problemId: "calc5-exam-p20",
      topicTag: "linearIndependenceBasisAndDimension",
      promptText: "A 5x5 matrix A has rank 3. What is the nullity of A?",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "2",
      stepByStepExplanation: "By rank-nullity, rank(A) + nullity(A) = number of columns = 5. So nullity(A) = 5-3 = 2.",
      difficultyLevel: 2,
    },
    // --- Linear Transformations ---
    {
      problemId: "calc5-exam-p21",
      topicTag: "linearTransformations",
      promptText: "Find the matrix for T(x,y) = (2x - y, x + 3y).",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "[[2,-1],[1,3]]",
      stepByStepExplanation: "T(e1)=T(1,0)=(2,1) is column 1. T(e2)=T(0,1)=(-1,3) is column 2. Matrix: [[2,-1],[1,3]].",
      difficultyLevel: 2,
    },
    {
      problemId: "calc5-exam-p22",
      topicTag: "linearTransformations",
      promptText: "Apply the scaling matrix [[4,0],[0,4]] to the vector (3,-2).",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "(12,-8)",
      stepByStepExplanation: "[[4,0],[0,4]]*(3,-2) = (4*3, 4*(-2)) = (12,-8).",
      difficultyLevel: 1,
    },
    {
      problemId: "calc5-exam-p23",
      topicTag: "linearTransformations",
      promptText:
        "A = rotate 90 degrees = [[0,-1],[1,0]], B = scale by 3 = [[3,0],[0,3]]. Find the matrix for 'scale after rotating' (apply the rotation first, then the scaling).",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "[[0,-3],[3,0]]",
      stepByStepExplanation:
        "'Scale after rotating' means compute BA: [[3,0],[0,3]]*[[0,-1],[1,0]] = [[3*0+0*1, 3*(-1)+0*0],[0*0+3*1, 0*(-1)+3*0]] = [[0,-3],[3,0]].",
      difficultyLevel: 3,
    },
    // --- Eigenvalues and Eigenvectors ---
    {
      problemId: "calc5-exam-p24",
      topicTag: "eigenvaluesAndEigenvectors",
      promptText: "Find the eigenvalues of the diagonal matrix A = [[9,0],[0,-1]].",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "9 and -1",
      stepByStepExplanation: "For a diagonal matrix, the eigenvalues are always just the diagonal entries themselves: 9 and -1.",
      difficultyLevel: 1,
    },
    {
      problemId: "calc5-exam-p25",
      topicTag: "eigenvaluesAndEigenvectors",
      promptText: "Find the eigenvalues of A = [[5,2],[2,2]].",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "6 and 1",
      stepByStepExplanation:
        "det(A-λI) = (5-λ)(2-λ) - 4 = λ^2-7λ+10-4 = λ^2-7λ+6. Factor: (λ-6)(λ-1)=0, so λ=6 or λ=1.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc5-exam-p26",
      topicTag: "eigenvaluesAndEigenvectors",
      promptText: "For A = [[5,2],[2,2]] with eigenvalue λ=6, find an eigenvector.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "(2,1)",
      stepByStepExplanation:
        "A-6I = [[-1,2],[2,-4]]. The equation -v1+2v2=0 gives v1=2v2. Choosing v2=1: eigenvector (2,1). Check: A*(2,1) = (10+2,4+2) = (12,6) = 6*(2,1), confirmed.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc5-exam-p27",
      topicTag: "eigenvaluesAndEigenvectors",
      promptText: "For the same A = [[5,2],[2,2]] with eigenvalue λ=1, find an eigenvector.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "(1,-2)",
      stepByStepExplanation:
        "A-I = [[4,2],[2,1]]. The equation 4v1+2v2=0 gives v2=-2v1. Choosing v1=1: eigenvector (1,-2). Check: A*(1,-2) = (5-4,2-4) = (1,-2) = 1*(1,-2), confirmed.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc5-exam-p28",
      topicTag: "eigenvaluesAndEigenvectors",
      promptText: "Find the eigenvalues of A = [[0,-9],[1,0]].",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "3i and -3i",
      acceptableAnswerVariants: ["±3i", "3i, -3i"],
      stepByStepExplanation:
        "det(A-λI) = det([[-λ,-9],[1,-λ]]) = λ^2 - (-9)(1) = λ^2+9. Setting to 0: λ^2=-9, so λ=3i or λ=-3i - complex, since this matrix acts like a scaled rotation with no real direction left unrotated.",
      difficultyLevel: 4,
    },
    // --- Diagonalization ---
    {
      problemId: "calc5-exam-p29",
      topicTag: "diagonalization",
      promptText: "A = [[6,0],[0,6]] has a repeated eigenvalue λ=6. Is A diagonalizable?",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "yes",
      stepByStepExplanation:
        "A-6I = [[0,0],[0,0]], so every vector in R^2 satisfies the equation - the eigenspace is the entire 2-dimensional plane, providing plenty of independent eigenvectors. A is diagonalizable (it's already diagonal).",
      difficultyLevel: 2,
    },
    {
      problemId: "calc5-exam-p30",
      topicTag: "diagonalization",
      promptText: "A = [[2,1],[0,2]] has a repeated eigenvalue λ=2 (algebraic multiplicity 2). Is A diagonalizable?",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "no",
      stepByStepExplanation:
        "A-2I = [[0,1],[0,0]] gives v2=0 with v1 free - only a 1-dimensional eigenspace. Since the repeated eigenvalue only contributes 1 independent eigenvector but 2 are needed, A is not diagonalizable.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc5-exam-p31",
      topicTag: "diagonalization",
      promptText:
        "For A = [[5,2],[2,2]] with eigenvalue λ=6 (eigenvector (2,1)) and λ=1 (eigenvector (1,-2)), write matrices P and D for the diagonalization.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "P=[[2,1],[1,-2]], D=[[6,0],[0,1]]",
      stepByStepExplanation: "P's columns are the eigenvectors in the order used, and D's diagonal holds the matching eigenvalues in that same order: 6 then 1.",
      difficultyLevel: 3,
    },
    {
      problemId: "calc5-exam-p32",
      topicTag: "diagonalization",
      promptText:
        "For A = [[5,2],[2,2]] = PDP^-1 with P=[[2,1],[1,-2]] and D=[[6,0],[0,1]], find A^2 using PD^2P^-1, and check it against direct multiplication A*A.",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "[[29,14],[14,8]]",
      stepByStepExplanation:
        "det(P)=2*(-2)-1*1=-5, so P^-1=(1/-5)*[[-2,-1],[-1,2]]=[[2/5,1/5],[1/5,-2/5]]. D^2=[[36,0],[0,1]]. PD^2=[[2,1],[1,-2]]*[[36,0],[0,1]]=[[72,1],[36,-2]]. (PD^2)P^-1=[[72,1],[36,-2]]*[[2/5,1/5],[1/5,-2/5]]=[[29,14],[14,8]]. Direct check: A^2=[[5,2],[2,2]]*[[5,2],[2,2]]=[[25+4,10+4],[10+4,4+4]]=[[29,14],[14,8]], matching exactly.",
      difficultyLevel: 5,
    },
    // --- Applications ---
    {
      problemId: "calc5-exam-p33",
      topicTag: "ordinaryDifferentialEquations",
      promptText:
        "For x'=Ax with A=[[5,2],[2,2]] (eigenvalue 6 with eigenvector (2,1), and eigenvalue 1 with eigenvector (1,-2)), write the general solution x(t).",
      answerFormat: "shortAlgebraicAnswer",
      correctAnswer: "x1(t) = 2C1 e^(6t) + C2 e^(t), x2(t) = C1 e^(6t) - 2C2 e^(t)",
      stepByStepExplanation:
        "x(t) = C1 e^(6t)(2,1) + C2 e^(t)(1,-2), giving x1(t)=2C1e^(6t)+C2e^(t) and x2(t)=C1e^(6t)-2C2e^(t).",
      difficultyLevel: 4,
    },
    {
      problemId: "calc5-exam-p34",
      topicTag: "determinants",
      promptText: "For the linear change of variables x=4u-v, y=u+2v, find the Jacobian.",
      answerFormat: "shortNumericAnswer",
      correctAnswer: "9",
      stepByStepExplanation:
        "The Jacobian matrix is [[4,-1],[1,2]] (partial derivatives of x and y with respect to u and v). Its determinant is 4*2-(-1)*1 = 8+1 = 9.",
      difficultyLevel: 2,
    },
  ],
};
