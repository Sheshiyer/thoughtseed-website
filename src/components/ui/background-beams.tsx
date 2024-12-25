"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

const Beam = ({ index }: { index: number }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrame: number;
    const animate = () => {
      const time = performance.now() / 1000;
      setPosition({
        x: Math.sin(time + index) * 10,
        y: Math.cos(time + index) * 10
      });
      animationFrame = requestAnimationFrame(animate);
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [index]);

  return (
    <div
      className="relative"
      style={{
        transition: 'all 40ms ease-out',
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <div 
        className="absolute inset-0 blur-[100px]"
        style={{
          background: `rgba(26, 35, 126, 0.15)`,
        }}
      />
    </div>
  );
};

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-[-1]",
        className
      )}
    >
      <div className="absolute inset-0 z-[-1] bg-black" />
      <div className="absolute inset-0 z-[-1] grid grid-cols-4 grid-rows-3 opacity-20">
        {Array.from({ length: 12 }).map((_, i) => (
          <Beam key={i} index={i} />
        ))}
      </div>
    </div>
  );
};
