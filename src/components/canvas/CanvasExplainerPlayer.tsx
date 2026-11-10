"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CanvasAnimationScript, CanvasDrawCommand, MathPoint } from "@/lib/types/animationTypes";
import { evaluateMathExpressionAtX } from "@/lib/animation/safeMathExpressionEvaluator";
import { ReadAloudButton } from "@/components/lesson/ReadAloudButton";

const DEFAULT_STEP_DISPLAY_MILLISECONDS = 3200;
const CANVAS_HEIGHT_PIXELS = 380;

// Renders one CanvasAnimationScript: a caption, a canvas that redraws the
// current step's complete picture, and play/pause/step controls. Math
// coordinates in the script are converted to pixel coordinates here, once,
// so every draw-command handler below can work purely in math space.
export function CanvasExplainerPlayer({ animation }: { animation: CanvasAnimationScript }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentStep = animation.steps[currentStepIndex];
  const isOnLastStep = currentStepIndex === animation.steps.length - 1;

  const { xMin, xMax, yMin, yMax } = animation.coordinatePlane;

  // Converts a math-space point to a pixel-space point within the canvas,
  // based on the canvas's current displayed width/height.
  const toPixelPoint = useMemo(() => {
    return (mathPoint: MathPoint, canvasWidthPixels: number, canvasHeightPixels: number) => {
      const xFraction = (mathPoint.x - xMin) / (xMax - xMin);
      const yFraction = (mathPoint.y - yMin) / (yMax - yMin);
      return {
        x: xFraction * canvasWidthPixels,
        // Canvas y grows downward; math y grows upward, so flip it.
        y: canvasHeightPixels - yFraction * canvasHeightPixels,
      };
    };
  }, [xMin, xMax, yMin, yMax]);

  // Draw whichever step is current whenever it changes or the canvas mounts.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !currentStep) return;

    const parentWidth = canvas.parentElement?.clientWidth ?? 700;
    const devicePixelRatio = window.devicePixelRatio || 1;
    canvas.width = parentWidth * devicePixelRatio;
    canvas.height = CANVAS_HEIGHT_PIXELS * devicePixelRatio;
    canvas.style.width = `${parentWidth}px`;
    canvas.style.height = `${CANVAS_HEIGHT_PIXELS}px`;

    const context = canvas.getContext("2d");
    if (!context) return;
    context.scale(devicePixelRatio, devicePixelRatio);
    context.clearRect(0, 0, parentWidth, CANVAS_HEIGHT_PIXELS);
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, parentWidth, CANVAS_HEIGHT_PIXELS);

    for (const command of currentStep.drawCommands) {
      drawOneCommand(context, command, parentWidth, CANVAS_HEIGHT_PIXELS, toPixelPoint);
    }
  }, [currentStep, toPixelPoint]);

  // Autoplay: advance to the next step after this step's suggested display
  // time, stopping automatically at the last step.
  useEffect(() => {
    if (!isPlaying) return;
    if (isOnLastStep) {
      setIsPlaying(false);
      return;
    }
    const delayMilliseconds = currentStep?.suggestedDisplayMilliseconds ?? DEFAULT_STEP_DISPLAY_MILLISECONDS;
    const timerId = setTimeout(() => setCurrentStepIndex((index) => index + 1), delayMilliseconds);
    return () => clearTimeout(timerId);
  }, [isPlaying, currentStepIndex, isOnLastStep, currentStep]);

  function goToStep(index: number) {
    setIsPlaying(false);
    setCurrentStepIndex(Math.max(0, Math.min(animation.steps.length - 1, index)));
  }

  function handlePlayButtonClick() {
    if (isOnLastStep) {
      setCurrentStepIndex(0);
      setIsPlaying(true);
    } else {
      setIsPlaying((playing) => !playing);
    }
  }

  return (
    <div className="w-full rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
      <p className="text-xs font-semibold text-slate-500 mb-2">{animation.animationTitle}</p>

      <canvas ref={canvasRef} className="w-full rounded-lg border border-slate-200" />

      <div className="mt-3 flex items-center gap-2 flex-wrap">
        <button
          onClick={() => goToStep(currentStepIndex - 1)}
          disabled={currentStepIndex === 0}
          className="rounded-md border border-slate-300 px-2.5 py-1 text-xs text-slate-600 hover:bg-slate-100 disabled:opacity-40"
        >
          &larr; Back
        </button>
        <button
          onClick={handlePlayButtonClick}
          className="rounded-md bg-brandAccent px-3 py-1 text-xs font-medium text-white hover:bg-blue-700"
        >
          {isOnLastStep ? "Replay" : isPlaying ? "Pause" : "Play"}
        </button>
        <button
          onClick={() => goToStep(currentStepIndex + 1)}
          disabled={isOnLastStep}
          className="rounded-md border border-slate-300 px-2.5 py-1 text-xs text-slate-600 hover:bg-slate-100 disabled:opacity-40"
        >
          Next &rarr;
        </button>
        <span className="text-xs text-slate-400">
          Step {currentStepIndex + 1} of {animation.steps.length}
        </span>
        <div className="ml-auto">
          <ReadAloudButton textToSpeak={currentStep?.stepNarration ?? ""} />
        </div>
      </div>

      <div className="mt-2 flex gap-1">
        {animation.steps.map((_, index) => (
          <button
            key={index}
            onClick={() => goToStep(index)}
            aria-label={`Go to step ${index + 1}`}
            className={`h-1.5 flex-1 rounded-full ${index <= currentStepIndex ? "bg-brandAccent" : "bg-slate-200"}`}
          />
        ))}
      </div>

      {currentStep && (
        <p className="mt-3 text-sm text-slate-700 bg-slate-50 rounded-md p-3">{currentStep.stepNarration}</p>
      )}
    </div>
  );
}

function drawOneCommand(
  context: CanvasRenderingContext2D,
  command: CanvasDrawCommand,
  canvasWidthPixels: number,
  canvasHeightPixels: number,
  toPixelPoint: (point: MathPoint, width: number, height: number) => { x: number; y: number }
) {
  const toPixels = (point: MathPoint) => toPixelPoint(point, canvasWidthPixels, canvasHeightPixels);

  switch (command.commandType) {
    case "drawAxes": {
      const origin = toPixels({ x: 0, y: 0 });
      context.strokeStyle = "#cbd5e1";
      context.lineWidth = 1;

      if (command.showGridLines) {
        context.strokeStyle = "#f1f5f9";
        for (let gridX = -50; gridX <= 50; gridX += 1) {
          const point = toPixels({ x: gridX, y: 0 });
          if (point.x < 0 || point.x > canvasWidthPixels) continue;
          context.beginPath();
          context.moveTo(point.x, 0);
          context.lineTo(point.x, canvasHeightPixels);
          context.stroke();
        }
        for (let gridY = -50; gridY <= 50; gridY += 1) {
          const point = toPixels({ x: 0, y: gridY });
          if (point.y < 0 || point.y > canvasHeightPixels) continue;
          context.beginPath();
          context.moveTo(0, point.y);
          context.lineTo(canvasWidthPixels, point.y);
          context.stroke();
        }
      }

      context.strokeStyle = "#94a3b8";
      context.lineWidth = 1.5;
      context.beginPath();
      context.moveTo(0, origin.y);
      context.lineTo(canvasWidthPixels, origin.y);
      context.moveTo(origin.x, 0);
      context.lineTo(origin.x, canvasHeightPixels);
      context.stroke();

      context.fillStyle = "#64748b";
      context.font = "12px sans-serif";
      if (command.xAxisLabel) context.fillText(command.xAxisLabel, canvasWidthPixels - 24, origin.y - 6);
      if (command.yAxisLabel) context.fillText(command.yAxisLabel, origin.x + 6, 14);
      return;
    }

    case "plotFunction": {
      context.strokeStyle = command.color ?? "#2563eb";
      context.lineWidth = command.lineWidthPixels ?? 2.5;
      if (command.dashed) context.setLineDash([6, 4]);
      context.beginPath();

      let hasStartedPath = false;
      const sampleCount = 240;
      for (let i = 0; i <= sampleCount; i += 1) {
        // The plane bounds used for sampling live on the parent script, but
        // this function only has pixel dims - reconstruct the math x range
        // by inverse-mapping the two edge pixels, which toPixels/toPixelPoint
        // already encodes via the closure passed in.
        const fractionAlongCanvas = i / sampleCount;
        const pixelX = fractionAlongCanvas * canvasWidthPixels;
        // Invert pixel->math for x only (y comes from evaluating f(x)).
        const mathX = inversePixelXToMathX(pixelX, canvasWidthPixels, toPixels);
        const mathY = evaluateMathExpressionAtX(command.functionOfX, mathX);
        if (mathY === null) {
          hasStartedPath = false;
          continue;
        }
        const pixelPoint = toPixels({ x: mathX, y: mathY });
        if (pixelPoint.y < -2000 || pixelPoint.y > canvasHeightPixels + 2000) {
          hasStartedPath = false;
          continue;
        }
        if (!hasStartedPath) {
          context.moveTo(pixelPoint.x, pixelPoint.y);
          hasStartedPath = true;
        } else {
          context.lineTo(pixelPoint.x, pixelPoint.y);
        }
      }
      context.stroke();
      context.setLineDash([]);
      return;
    }

    case "plotPoint": {
      const pixelPoint = toPixels(command.point);
      context.fillStyle = command.color ?? "#0f172a";
      context.beginPath();
      context.arc(pixelPoint.x, pixelPoint.y, command.radiusPixels ?? 4.5, 0, Math.PI * 2);
      context.fill();
      if (command.label) {
        context.fillStyle = command.color ?? "#0f172a";
        context.font = "12px sans-serif";
        context.fillText(command.label, pixelPoint.x + 8, pixelPoint.y - 8);
      }
      return;
    }

    case "drawLineSegment": {
      const fromPixel = toPixels(command.fromPoint);
      const toPixel = toPixels(command.toPoint);
      context.strokeStyle = command.color ?? "#0f172a";
      context.lineWidth = command.lineWidthPixels ?? 2;
      if (command.dashed) context.setLineDash([5, 4]);
      context.beginPath();
      context.moveTo(fromPixel.x, fromPixel.y);
      context.lineTo(toPixel.x, toPixel.y);
      context.stroke();
      context.setLineDash([]);
      return;
    }

    case "drawVectorArrow": {
      const fromPixel = toPixels(command.fromPoint);
      const toPixel = toPixels(command.toPoint);
      const color = command.color ?? "#b91c1c";
      context.strokeStyle = color;
      context.fillStyle = color;
      context.lineWidth = 2.2;
      context.beginPath();
      context.moveTo(fromPixel.x, fromPixel.y);
      context.lineTo(toPixel.x, toPixel.y);
      context.stroke();

      const angle = Math.atan2(toPixel.y - fromPixel.y, toPixel.x - fromPixel.x);
      const arrowHeadLength = 9;
      context.beginPath();
      context.moveTo(toPixel.x, toPixel.y);
      context.lineTo(
        toPixel.x - arrowHeadLength * Math.cos(angle - Math.PI / 7),
        toPixel.y - arrowHeadLength * Math.sin(angle - Math.PI / 7)
      );
      context.lineTo(
        toPixel.x - arrowHeadLength * Math.cos(angle + Math.PI / 7),
        toPixel.y - arrowHeadLength * Math.sin(angle + Math.PI / 7)
      );
      context.closePath();
      context.fill();

      if (command.label) {
        context.font = "12px sans-serif";
        context.fillText(command.label, toPixel.x + 6, toPixel.y - 6);
      }
      return;
    }

    case "shadeRegionBetweenCurves": {
      if (command.polygonPoints.length < 3) return;
      context.fillStyle = command.color ?? "#2563eb";
      context.globalAlpha = command.opacityFromZeroToOne ?? 0.25;
      context.beginPath();
      const firstPixel = toPixels(command.polygonPoints[0]);
      context.moveTo(firstPixel.x, firstPixel.y);
      for (const point of command.polygonPoints.slice(1)) {
        const pixel = toPixels(point);
        context.lineTo(pixel.x, pixel.y);
      }
      context.closePath();
      context.fill();
      context.globalAlpha = 1;
      return;
    }

    case "writeLabel": {
      const pixelPoint = toPixels(command.point);
      context.fillStyle = command.color ?? "#0f172a";
      context.font = `${command.fontSizePixels ?? 13}px sans-serif`;
      context.fillText(command.text, pixelPoint.x, pixelPoint.y);
      return;
    }

    case "highlightPointWithRing": {
      const pixelPoint = toPixels(command.point);
      context.strokeStyle = command.color ?? "#f59e0b";
      context.lineWidth = 2.5;
      context.beginPath();
      context.arc(pixelPoint.x, pixelPoint.y, 9, 0, Math.PI * 2);
      context.stroke();
      return;
    }
  }
}

// Recovers the math-space x value for a given pixel x, by using the same
// linear mapping toPixels uses, solved in reverse. toPixels closes over the
// plane bounds, so we probe it at two known math x values (0 and 1) to
// recover the affine mapping's slope/intercept, then invert.
function inversePixelXToMathX(
  pixelX: number,
  canvasWidthPixels: number,
  toPixels: (point: MathPoint) => { x: number; y: number }
): number {
  const pixelAtMathZero = toPixels({ x: 0, y: 0 }).x;
  const pixelAtMathOne = toPixels({ x: 1, y: 0 }).x;
  const pixelsPerMathUnit = pixelAtMathOne - pixelAtMathZero;
  if (pixelsPerMathUnit === 0) return 0;
  return (pixelX - pixelAtMathZero) / pixelsPerMathUnit;
}
