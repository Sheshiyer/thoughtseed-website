"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Local cn function since we're having path alias issues
function cn(...inputs: (string | number | boolean | undefined | null | { [key: string]: boolean | undefined | null } | (string | number | boolean | undefined | null | { [key: string]: boolean | undefined | null })[])[]): string {
  return twMerge(clsx(inputs));
}

interface Grid3dProps {
  items: {
    title: string;
    description: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}

export function Grid3d({ items, className }: Grid3dProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4", className)}>
      {items.map((item, idx) => (
        <Card key={idx} {...item} />
      ))}
    </div>
  );
}

function Card({ title, description, icon }: {
  title: string;
  description: string;
  icon?: React.ReactNode;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative h-96 w-full rounded-xl bg-gradient-to-br from-quantum-blue/10 via-consciousness-teal/10 to-energetic-orange/10 p-8 group"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="relative h-full w-full"
      >
        {icon && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute top-8 right-8 text-4xl text-white/80"
          >
            {icon}
          </motion.div>
        )}
        <div className="absolute bottom-8 left-8">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-2xl font-bold text-white mb-4"
          >
            {title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base text-white/70"
          >
            {description}
          </motion.p>
        </div>
      </div>

      <motion.div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 bg-gradient-to-br from-quantum-blue/20 via-consciousness-teal/20 to-energetic-orange/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
    </motion.div>
  );
}
