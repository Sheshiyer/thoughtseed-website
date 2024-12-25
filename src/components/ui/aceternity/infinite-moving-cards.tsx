"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Local cn function since we're having path alias issues
function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

interface Card {
  id: number;
  name: string;
  title: string;
  content: string;
  image?: string;
}

interface InfiniteMovingCardsProps {
  items: Card[];
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
  className?: string;
}

export function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsProps) {
  const [duplicatedItems, setDuplicatedItems] = useState<Card[]>([]);

  useEffect(() => {
    // Duplicate items to create seamless loop
    setDuplicatedItems([...items, ...items]);
  }, [items]);

  return (
    <div
      className={cn(
        "relative flex flex-col overflow-hidden py-4 space-y-5",
        className
      )}
    >
      {[0, 1].map((row) => (
        <motion.div
          key={row}
          className="flex gap-5 w-max"
          animate={{
            x: row % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"],
          }}
          transition={{
            duration: 20, // 20px/s
            repeat: Infinity,
            ease: "linear",
          }}
          {...(pauseOnHover && {
            whileHover: { animationPlayState: "paused" },
          })}
        >
          {duplicatedItems.map((item, idx) => (
          <div
            key={item.id + idx}
            className="relative group w-[350px] h-[200px] overflow-hidden rounded-xl bg-gradient-to-br from-quantum-blue/10 via-consciousness-teal/10 to-energetic-orange/10 border border-white/10 backdrop-blur-sm p-8 mx-[10px]"
          >
            <div className="relative z-10">
              <p className="text-base text-white/80 mb-4">{item.content}</p>
              <div className="flex items-center gap-4">
                {item.image && (
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <h4 className="text-base font-semibold text-white">
                    {item.name}
                  </h4>
                  <p className="text-sm text-white/60">{item.title}</p>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-quantum-blue/20 via-consciousness-teal/20 to-energetic-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
        </motion.div>
      ))}
    </div>
  );
}
