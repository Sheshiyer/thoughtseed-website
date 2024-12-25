"use client";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

// Local cn function since we're having path alias issues
function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

interface HoverEffectProps {
  items: {
    title: string;
    link: string;
    image?: string;
    description?: string;
    icon?: string;
  }[];
  className?: string;
}

export function HoverEffect({ items, className }: HoverEffectProps) {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-4", className)}>
      {items.map((item, idx) => (
        <Link
          href={item.link}
          key={item.link}
          className="relative group block p-4 h-full w-full transition-all duration-300 ease-out hover:scale-105 hover:rotate-1 hover:shadow-2xl"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-r from-quantum-blue via-consciousness-teal to-energetic-orange rounded-lg"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 0.2,
                  transition: { duration: 0.2 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <div className="relative z-10 flex flex-col space-y-4">
            {item.image && (
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-40 object-cover rounded-lg"
              />
            )}
            <div className="space-y-2">
              <span className="text-sm md:text-base font-medium text-zinc-200 duration-150 group-hover:text-white">
                {item.title}
              </span>
              {item.description && (
                <p className="text-sm text-zinc-400 group-hover:text-zinc-300">
                  {item.description}
                </p>
              )}
              {item.icon && (
                <div className="text-2xl">
                  {item.icon}
                </div>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
