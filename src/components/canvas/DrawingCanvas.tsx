"use client";

import { useEffect, useRef, useState } from "react";

// A freehand drawing surface that stands in for pencil-and-paper work:
// writing out algebra steps, sketching a graph, working a related-rates
// diagram, etc. Pure canvas + mouse/touch events, no external library.

const PEN_COLOR_OPTIONS = ["#0f172a", "#2563eb", "#b91c1c", "#15803d", "#b45309"];

export function DrawingCanvas({ heightPixels = 420 }: { heightPixels?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isCurrentlyDrawingRef = useRef(false);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);

  const [selectedColor, setSelectedColor] = useState(PEN_COLOR_OPTIONS[0]);
  const [strokeWidth, setStrokeWidth] = useState(3);
  const [isEraserActive, setIsEraserActive] = useState(false);

  // Keep the canvas's backing resolution matched to its displayed size so
  // strokes stay crisp on high-DPI screens.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parentWidth = canvas.parentElement?.clientWidth ?? 800;
    const devicePixelRatio = window.devicePixelRatio || 1;
    canvas.width = parentWidth * devicePixelRatio;
    canvas.height = heightPixels * devicePixelRatio;
    canvas.style.width = `${parentWidth}px`;
    canvas.style.height = `${heightPixels}px`;
    const context = canvas.getContext("2d");
    if (context) {
      context.scale(devicePixelRatio, devicePixelRatio);
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, parentWidth, heightPixels);
    }
  }, [heightPixels]);

  function getPointFromEvent(event: React.PointerEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const bounds = canvas.getBoundingClientRect();
    return { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
  }

  function handlePointerDown(event: React.PointerEvent<HTMLCanvasElement>) {
    isCurrentlyDrawingRef.current = true;
    lastPointRef.current = getPointFromEvent(event);
  }

  function handlePointerMove(event: React.PointerEvent<HTMLCanvasElement>) {
    if (!isCurrentlyDrawingRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context || !lastPointRef.current) return;

    const currentPoint = getPointFromEvent(event);
    context.strokeStyle = isEraserActive ? "#ffffff" : selectedColor;
    context.lineWidth = isEraserActive ? strokeWidth * 6 : strokeWidth;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.beginPath();
    context.moveTo(lastPointRef.current.x, lastPointRef.current.y);
    context.lineTo(currentPoint.x, currentPoint.y);
    context.stroke();

    lastPointRef.current = currentPoint;
  }

  function handlePointerUp() {
    isCurrentlyDrawingRef.current = false;
    lastPointRef.current = null;
  }

  function clearCanvas() {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    const devicePixelRatio = window.devicePixelRatio || 1;
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width / devicePixelRatio, canvas.height / devicePixelRatio);
  }

  return (
    <div className="w-full rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <span className="text-xs font-semibold text-slate-500 mr-1">Work it out:</span>
        {PEN_COLOR_OPTIONS.map((color) => (
          <button
            key={color}
            onClick={() => {
              setSelectedColor(color);
              setIsEraserActive(false);
            }}
            aria-label={`Choose pen color ${color}`}
            className={`h-6 w-6 rounded-full border-2 ${
              !isEraserActive && selectedColor === color ? "border-brandAccent" : "border-transparent"
            }`}
            style={{ backgroundColor: color }}
          />
        ))}

        <label className="flex items-center gap-1 text-xs text-slate-600 ml-2">
          Width
          <input
            type="range"
            min={1}
            max={8}
            value={strokeWidth}
            onChange={(event) => setStrokeWidth(Number(event.target.value))}
          />
        </label>

        <button
          onClick={() => setIsEraserActive((current) => !current)}
          className={`ml-auto text-xs rounded-md border px-2 py-1 ${
            isEraserActive ? "border-brandAccent bg-brandAccentSoft text-brandAccent" : "border-slate-300 text-slate-600 hover:bg-slate-100"
          }`}
        >
          Eraser
        </button>
        <button
          onClick={clearCanvas}
          className="text-xs rounded-md border border-slate-300 px-2 py-1 text-slate-600 hover:bg-slate-100"
        >
          Clear
        </button>
      </div>

      <canvas
        ref={canvasRef}
        className="w-full rounded-lg border border-slate-200 touch-none cursor-crosshair"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      />
    </div>
  );
}
