"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | number | boolean | undefined | null | { [key: string]: boolean | undefined | null } | (string | number | boolean | undefined | null | { [key: string]: boolean | undefined | null })[])[]): string {
  return twMerge(clsx(inputs));
}

interface ParallaxScrollProps {
  children: React.ReactNode;
  className?: string;
}

export function ParallaxScroll({
  children,
  className,
}: ParallaxScrollProps) {
  const baseX = useMotionValue(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const offsetY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["-25%", "0%", "25%"]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.3, 1, 1, 0.3]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.8, 1, 0.8]
  );

  return (
    <motion.div
      ref={scrollRef}
      style={{
        y: offsetY,
        scale,
        opacity,
      }}
      className={cn(
        "relative w-full overflow-hidden py-20",
        className
      )}
    >
      <div className="relative z-10">
        {children}
      </div>
      
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{
            x: baseX,
            position: "absolute",
            inset: 0,
          }}
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-gradient-to-r from-quantum-blue/20 via-consciousness-teal/20 to-energetic-orange/20"
        />
        <motion.div
          style={{
            x: baseX,
            position: "absolute",
            inset: 0,
          }}
          animate={{
            x: ["-100%", "0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-gradient-to-r from-energetic-orange/20 via-quantum-blue/20 to-consciousness-teal/20"
        />
      </div>
    </motion.div>
  );
}
