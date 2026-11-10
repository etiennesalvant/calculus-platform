// A small, dependency-free evaluator for the tiny subset of math notation
// the canvas animations need (e.g. "x^2 - 3*x + 2", "sin(x) + 1",
// "sqrt(4 - x^2)"). Deliberately does NOT use eval() or `new Function()` -
// everything here is a hand-written tokenizer + recursive-descent parser,
// so an animation script can never run arbitrary JavaScript.
//
// Supported: + - * / ^ (power), unary minus, parentheses, the variable x,
// the constants pi and e, and the functions sin, cos, tan, sqrt, abs, exp,
// ln, log10.

type TokenType = "number" | "identifier" | "operator" | "leftParen" | "rightParen" | "comma";

interface Token {
  tokenType: TokenType;
  tokenText: string;
}

function tokenize(expression: string): Token[] {
  const tokens: Token[] = [];
  let position = 0;

  while (position < expression.length) {
    const currentChar = expression[position];

    if (/\s/.test(currentChar)) {
      position += 1;
      continue;
    }

    if (/[0-9.]/.test(currentChar)) {
      let numberText = "";
      while (position < expression.length && /[0-9.]/.test(expression[position])) {
        numberText += expression[position];
        position += 1;
      }
      tokens.push({ tokenType: "number", tokenText: numberText });
      continue;
    }

    if (/[a-zA-Z]/.test(currentChar)) {
      let identifierText = "";
      while (position < expression.length && /[a-zA-Z0-9]/.test(expression[position])) {
        identifierText += expression[position];
        position += 1;
      }
      tokens.push({ tokenType: "identifier", tokenText: identifierText });
      continue;
    }

    if (currentChar === "(") {
      tokens.push({ tokenType: "leftParen", tokenText: currentChar });
      position += 1;
      continue;
    }

    if (currentChar === ")") {
      tokens.push({ tokenType: "rightParen", tokenText: currentChar });
      position += 1;
      continue;
    }

    if (currentChar === ",") {
      tokens.push({ tokenType: "comma", tokenText: currentChar });
      position += 1;
      continue;
    }

    if ("+-*/^".includes(currentChar)) {
      tokens.push({ tokenType: "operator", tokenText: currentChar });
      position += 1;
      continue;
    }

    throw new Error(`Unsupported character in math expression: "${currentChar}"`);
  }

  return tokens;
}

const KNOWN_FUNCTION_NAMES = new Set(["sin", "cos", "tan", "sqrt", "abs", "exp", "ln", "log10"]);
const KNOWN_CONSTANT_VALUES: Record<string, number> = { pi: Math.PI, e: Math.E };

// A straightforward recursive-descent parser, evaluated directly during
// parsing rather than building a separate AST first (fine for expressions
// this short, and keeps this one small file self-contained).
class ExpressionParser {
  private tokens: Token[];
  private position = 0;
  private xValue: number;

  constructor(tokens: Token[], xValue: number) {
    this.tokens = tokens;
    this.xValue = xValue;
  }

  isComplete(): boolean { return this.position === this.tokens.length; }

  private peek(): Token | undefined {
    return this.tokens[this.position];
  }

  private consume(): Token {
    const token = this.tokens[this.position];
    this.position += 1;
    return token;
  }

  // addition/subtraction: lowest precedence
  parseExpression(): number {
    let value = this.parseTerm();
    while (this.peek()?.tokenType === "operator" && (this.peek()?.tokenText === "+" || this.peek()?.tokenText === "-")) {
      const operatorText = this.consume().tokenText;
      const rightValue = this.parseTerm();
      value = operatorText === "+" ? value + rightValue : value - rightValue;
    }
    return value;
  }

  // multiplication/division
  private parseTerm(): number {
    let value = this.parseUnary();
    while (this.peek()?.tokenType === "operator" && (this.peek()?.tokenText === "*" || this.peek()?.tokenText === "/")) {
      const operatorText = this.consume().tokenText;
      const rightValue = this.parseUnary();
      value = operatorText === "*" ? value * rightValue : value / rightValue;
    }
    return value;
  }

  // exponentiation (right-associative)
  private parsePower(): number {
    const base = this.parseAtom();
    if (this.peek()?.tokenType === "operator" && this.peek()?.tokenText === "^") {
      this.consume();
      const exponent = this.parseUnary();
      return Math.pow(base, exponent);
    }
    return base;
  }

  private parseUnary(): number {
    if (this.peek()?.tokenType === "operator" && this.peek()?.tokenText === "-") {
      this.consume();
      return -this.parseUnary();
    }
    if (this.peek()?.tokenType === "operator" && this.peek()?.tokenText === "+") {
      this.consume();
      return this.parseUnary();
    }
    return this.parsePower();
  }

  private parseAtom(): number {
    const token = this.peek();
    if (!token) throw new Error("Unexpected end of math expression");

    if (token.tokenType === "number") {
      this.consume();
      const value = Number(token.tokenText);
      if (!Number.isFinite(value)) throw new Error("Invalid number");
      return value;
    }

    if (token.tokenType === "leftParen") {
      this.consume();
      const innerValue = this.parseExpression();
      if (this.peek()?.tokenType !== "rightParen") throw new Error("Missing closing parenthesis");
      this.consume();
      return innerValue;
    }

    if (token.tokenType === "identifier") {
      this.consume();
      const name = token.tokenText.toLowerCase();

      if (name === "x") return this.xValue;
      if (name in KNOWN_CONSTANT_VALUES) return KNOWN_CONSTANT_VALUES[name];

      if (KNOWN_FUNCTION_NAMES.has(name)) {
        if (this.peek()?.tokenType !== "leftParen") {
          throw new Error(`Expected "(" after function name "${name}"`);
        }
        this.consume();
        const argumentValue = this.parseExpression();
        if (this.peek()?.tokenType !== "rightParen") throw new Error(`Missing closing parenthesis for ${name}(...)`);
        this.consume();

        switch (name) {
          case "sin":
            return Math.sin(argumentValue);
          case "cos":
            return Math.cos(argumentValue);
          case "tan":
            return Math.tan(argumentValue);
          case "sqrt":
            return Math.sqrt(argumentValue);
          case "abs":
            return Math.abs(argumentValue);
          case "exp":
            return Math.exp(argumentValue);
          case "ln":
            return Math.log(argumentValue);
          case "log10":
            return Math.log10(argumentValue);
        }
      }

      throw new Error(`Unknown identifier in math expression: "${token.tokenText}"`);
    }

    throw new Error(`Unexpected token in math expression: "${token.tokenText}"`);
  }
}

// Evaluates `expression` (a function of x, e.g. "x^2 - 1") at one x value.
// Returns null instead of throwing when the expression is malformed or the
// result isn't a finite number (e.g. sqrt of a negative, or 1/0), so callers
// plotting a curve can simply skip that point.
export function evaluateMathExpressionAtX(expression: string, xValue: number): number | null {
  try {
    const tokens = tokenize(expression);
    const parser = new ExpressionParser(tokens, xValue);
    const result = parser.parseExpression();
    return parser.isComplete() && Number.isFinite(result) ? result : null;
  } catch {
    return null;
  }
}
