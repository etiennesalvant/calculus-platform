"use client";

import { useState } from "react";

// A working four-function + scientific calculator, meant to sit alongside
// lessons and practice problems so nothing requires a physical calculator.
// All internal state uses plain-English names on purpose.

type PendingOperation = "add" | "subtract" | "multiply" | "divide" | null;

export function OnScreenCalculator() {
  const [displayValue, setDisplayValue] = useState("0");
  const [storedValue, setStoredValue] = useState<number | null>(null);
  const [pendingOperation, setPendingOperation] = useState<PendingOperation>(null);
  const [isStartingFreshNumber, setIsStartingFreshNumber] = useState(true);
  const [isInDegreesMode, setIsInDegreesMode] = useState(true);

  function inputDigit(digit: string) {
    if (isStartingFreshNumber) {
      setDisplayValue(digit);
      setIsStartingFreshNumber(false);
    } else {
      setDisplayValue(displayValue === "0" ? digit : displayValue + digit);
    }
  }

  function inputDecimalPoint() {
    if (isStartingFreshNumber) {
      setDisplayValue("0.");
      setIsStartingFreshNumber(false);
      return;
    }
    if (!displayValue.includes(".")) setDisplayValue(displayValue + ".");
  }

  function clearEverything() {
    setDisplayValue("0");
    setStoredValue(null);
    setPendingOperation(null);
    setIsStartingFreshNumber(true);
  }

  function toggleNegative() {
    setDisplayValue((current) => (current.startsWith("-") ? current.slice(1) : "-" + current));
  }

  function applyPendingOperation(currentValue: number): number {
    if (storedValue === null || pendingOperation === null) return currentValue;
    switch (pendingOperation) {
      case "add":
        return storedValue + currentValue;
      case "subtract":
        return storedValue - currentValue;
      case "multiply":
        return storedValue * currentValue;
      case "divide":
        return currentValue === 0 ? NaN : storedValue / currentValue;
      default:
        return currentValue;
    }
  }

  function chooseOperation(nextOperation: Exclude<PendingOperation, null>) {
    const currentValue = parseFloat(displayValue);
    if (storedValue !== null && pendingOperation !== null && !isStartingFreshNumber) {
      const result = applyPendingOperation(currentValue);
      setStoredValue(result);
      setDisplayValue(formatResult(result));
    } else {
      setStoredValue(currentValue);
    }
    setPendingOperation(nextOperation);
    setIsStartingFreshNumber(true);
  }

  function computeEquals() {
    const currentValue = parseFloat(displayValue);
    const result = applyPendingOperation(currentValue);
    setDisplayValue(formatResult(result));
    setStoredValue(null);
    setPendingOperation(null);
    setIsStartingFreshNumber(true);
  }

  function formatResult(value: number): string {
    if (!Number.isFinite(value)) return "Error";
    return parseFloat(value.toPrecision(12)).toString();
  }

  function applyUnaryFunction(fn: (value: number) => number) {
    const currentValue = parseFloat(displayValue);
    setDisplayValue(formatResult(fn(currentValue)));
    setIsStartingFreshNumber(true);
  }

  function toRadians(degreesOrRadians: number): number {
    return isInDegreesMode ? (degreesOrRadians * Math.PI) / 180 : degreesOrRadians;
  }

  const digitButtonClass =
    "rounded-lg bg-white border border-slate-200 py-2.5 text-sm font-medium text-brandInk hover:bg-slate-50 active:bg-slate-100";
  const operatorButtonClass =
    "rounded-lg bg-brandAccentSoft border border-blue-200 py-2.5 text-sm font-semibold text-brandAccent hover:bg-blue-100";
  const functionButtonClass =
    "rounded-lg bg-slate-100 border border-slate-200 py-2.5 text-xs font-medium text-slate-700 hover:bg-slate-200";

  return (
    <div className="w-full max-w-xs rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold text-slate-500">Calculator</span>
        <button
          onClick={() => setIsInDegreesMode((current) => !current)}
          className="text-xs rounded-full border border-slate-300 px-2 py-0.5 text-slate-600 hover:bg-slate-100"
        >
          {isInDegreesMode ? "DEG" : "RAD"}
        </button>
      </div>

      <div className="mb-3 rounded-lg bg-brandInk px-3 py-3 text-right">
        <span className="font-mono text-2xl text-white break-all">{displayValue}</span>
      </div>

      <div className="grid grid-cols-4 gap-1.5 mb-1.5">
        <button className={functionButtonClass} onClick={() => applyUnaryFunction((v) => Math.sin(toRadians(v)))}>sin</button>
        <button className={functionButtonClass} onClick={() => applyUnaryFunction((v) => Math.cos(toRadians(v)))}>cos</button>
        <button className={functionButtonClass} onClick={() => applyUnaryFunction((v) => Math.tan(toRadians(v)))}>tan</button>
        <button className={functionButtonClass} onClick={() => applyUnaryFunction((v) => Math.sqrt(v))}>&radic;x</button>

        <button className={functionButtonClass} onClick={() => applyUnaryFunction((v) => Math.pow(v, 2))}>x&sup2;</button>
        <button className={functionButtonClass} onClick={() => applyUnaryFunction((v) => Math.log10(v))}>log</button>
        <button className={functionButtonClass} onClick={() => applyUnaryFunction((v) => Math.log(v))}>ln</button>
        <button className={functionButtonClass} onClick={() => applyUnaryFunction((v) => 1 / v)}>1/x</button>
      </div>

      <div className="grid grid-cols-4 gap-1.5">
        <button className={functionButtonClass} onClick={clearEverything}>AC</button>
        <button className={functionButtonClass} onClick={toggleNegative}>+/-</button>
        <button className={functionButtonClass} onClick={() => applyUnaryFunction((v) => v * Math.PI)}>&times;&pi;</button>
        <button className={operatorButtonClass} onClick={() => chooseOperation("divide")}>&divide;</button>

        <button className={digitButtonClass} onClick={() => inputDigit("7")}>7</button>
        <button className={digitButtonClass} onClick={() => inputDigit("8")}>8</button>
        <button className={digitButtonClass} onClick={() => inputDigit("9")}>9</button>
        <button className={operatorButtonClass} onClick={() => chooseOperation("multiply")}>&times;</button>

        <button className={digitButtonClass} onClick={() => inputDigit("4")}>4</button>
        <button className={digitButtonClass} onClick={() => inputDigit("5")}>5</button>
        <button className={digitButtonClass} onClick={() => inputDigit("6")}>6</button>
        <button className={operatorButtonClass} onClick={() => chooseOperation("subtract")}>&minus;</button>

        <button className={digitButtonClass} onClick={() => inputDigit("1")}>1</button>
        <button className={digitButtonClass} onClick={() => inputDigit("2")}>2</button>
        <button className={digitButtonClass} onClick={() => inputDigit("3")}>3</button>
        <button className={operatorButtonClass} onClick={() => chooseOperation("add")}>+</button>

        <button className={`${digitButtonClass} col-span-2`} onClick={() => inputDigit("0")}>0</button>
        <button className={digitButtonClass} onClick={inputDecimalPoint}>.</button>
        <button className="rounded-lg bg-brandAccent py-2.5 text-sm font-semibold text-white hover:bg-blue-700" onClick={computeEquals}>=</button>
      </div>
    </div>
  );
}
