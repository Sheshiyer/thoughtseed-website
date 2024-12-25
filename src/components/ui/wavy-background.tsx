"use client";

import { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  position = "50%",
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  position?: string;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    contextRef.current = context;
    let animationFrameId: number;
    let phase = 0;

    const defaultColors = [
      "#1A237E", // quantum-blue
      "#00897B", // consciousness-teal
      "#6A1B9A", // ethereal-lavender
    ];

    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      context.scale(dpr, dpr);
    };

    const animate = () => {
      if (!contextRef.current || !canvasRef.current) return;
      phase += speed === "fast" ? 0.002 : 0.0009;

      const { width, height } = canvasRef.current.getBoundingClientRect();
      contextRef.current.clearRect(0, 0, width, height);

      const waves = (colors || defaultColors).map((color, i) => {
        const waveHeight = height * 0.2;
        const yOffset = height * (Number(position.replace("%", "")) / 100);
        return {
          color,
          points: Array.from({ length: Math.floor(width / (waveWidth || 50)) }, (_, x) => ({
            x: x * (waveWidth || 50),
            y:
              yOffset +
              Math.sin(x * 0.2 + phase + i) * waveHeight +
              Math.sin(x * 0.3 + phase + i) * waveHeight * 0.5,
          })),
        };
      });

      contextRef.current.globalAlpha = waveOpacity;
      if (backgroundFill) {
        contextRef.current.fillStyle = backgroundFill;
        contextRef.current.fillRect(0, 0, width, height);
      }
      contextRef.current.filter = `blur(${blur}px)`;

      waves.forEach(({ color, points }) => {
        if (!contextRef.current) return;
        contextRef.current.fillStyle = color;
        contextRef.current.beginPath();
        contextRef.current.moveTo(points[0].x, points[0].y);
        points.forEach((point, i) => {
          if (i === 0) return;
          const xc = (point.x + points[i - 1].x) / 2;
          const yc = (point.y + points[i - 1].y) / 2;
          if (!contextRef.current) return;
          contextRef.current.quadraticCurveTo(points[i - 1].x, points[i - 1].y, xc, yc);
        });
        if (!contextRef.current) return;
        contextRef.current.lineTo(width, height);
        contextRef.current.lineTo(0, height);
        contextRef.current.closePath();
        contextRef.current.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [blur, colors, position, speed, waveOpacity, waveWidth, backgroundFill]);

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden bg-transparent",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        style={{
          filter: `blur(${blur}px)`,
          transform: "translateZ(0)",
        }}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
