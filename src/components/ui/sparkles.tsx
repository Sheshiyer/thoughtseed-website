"use client";
import React from "react";
import { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
}

export const SparklesCore = (props: {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
  particleSpeed?: number;
}) => {
  const {
    id,
    className,
    background = "transparent",
    minSize = 0.4,
    maxSize = 1,
    particleDensity = 1200,
    particleColor = "#FFFFFF",
    particleSpeed = 1,
  } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const particles = useRef<Particle[]>([]);
  const animationFrameId = useRef<number | null>(null);
  const isAnimating = useRef<boolean>(false);

  useEffect(() => {
    if (!canvasRef.current) return;
    context.current = canvasRef.current.getContext("2d");

    const initCanvas = () => {
      if (!canvasContainerRef.current || !canvasRef.current || !context.current)
        return;
      canvasRef.current.width = canvasContainerRef.current.offsetWidth;
      canvasRef.current.height = canvasContainerRef.current.offsetHeight;

      const particleCount = Math.min(
        Math.max(
          Math.floor(
            (canvasRef.current.width * canvasRef.current.height) /
              (1920 * 1080) *
              particleDensity
          ),
          50
        ),
        1000
      );

      particles.current = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvasRef.current!.width,
        y: Math.random() * canvasRef.current!.height,
        size: Math.random() * (maxSize - minSize) + minSize,
        speedX: (Math.random() - 0.5) * particleSpeed,
        speedY: (Math.random() - 0.5) * particleSpeed,
      }));
    };

    initCanvas();
    window.addEventListener("resize", initCanvas);

    return () => {
      window.removeEventListener("resize", initCanvas);
    };
  }, [maxSize, minSize, particleDensity, particleSpeed]);

  useEffect(() => {
    if (!context.current || !canvasRef.current) return;

    const animate = () => {
      if (!context.current || !canvasRef.current) return;

      context.current.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );

      particles.current.forEach((particle) => {
        if (!context.current || !canvasRef.current) return;

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0) particle.x = canvasRef.current.width;
        if (particle.x > canvasRef.current.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvasRef.current.height;
        if (particle.y > canvasRef.current.height) particle.y = 0;

        context.current.beginPath();
        context.current.arc(
          particle.x,
          particle.y,
          particle.size,
          0,
          Math.PI * 2
        );
        context.current.fillStyle = particleColor;
        context.current.fill();
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    if (!isAnimating.current) {
      isAnimating.current = true;
      animate();
    }

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      isAnimating.current = false;
    };
  }, [particleColor]);

  return (
    <div
      ref={canvasContainerRef}
      className={cn("h-full w-full", className)}
      style={{
        background: background,
      }}
    >
      <canvas
        ref={canvasRef}
        id={id}
        className="h-full w-full"
      />
    </div>
  );
};
