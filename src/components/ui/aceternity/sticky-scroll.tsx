"use client";

import React, { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";

interface StickyScrollProps {
  content: {
    title: string;
    description: string;
    image?: string;
  }[];
  contentClassName?: string;
}

export function StickyScroll({
  content,
  contentClassName = "",
}: StickyScrollProps) {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end end"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpoint = cardsBreakpoints.reduce((prev, curr) => {
      return Math.abs(curr - latest) < Math.abs(prev - latest) ? curr : prev;
    });
    setActiveCard(cardsBreakpoints.indexOf(closestBreakpoint));
  });

  return (
    <motion.div
      ref={ref}
      className="h-[80vh] overflow-y-auto relative space-y-[100px] scroll-smooth scrollbar-hide"
    >
      {content.map((item, idx) => (
        <div key={idx} className="h-[50vh] flex items-center justify-center">
          <motion.div
            className={`${contentClassName} w-full max-w-4xl mx-auto p-8 bg-[#1A237E]/20 backdrop-blur-sm rounded-xl border border-white/30 hover:border-white/50 transition-all duration-300`}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: idx === activeCard ? 1 : 0.1,
              y: idx === activeCard ? 0 : 20,
              scale: idx === activeCard ? 1 : 0.95,
            }}
            whileHover={{
              scale: idx === activeCard ? 1.02 : 0.95,
              opacity: idx === activeCard ? 1 : 0.2,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut"
            }}
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {item.image && (
                <motion.div 
                  className="w-full md:w-1/2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: idx === activeCard ? 1 : 0.3,
                    x: idx === activeCard ? 0 : -20 
                  }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    width={600}
                    height={192}
                    className="w-full h-48 object-cover rounded-lg shadow-lg"
                  />
                </motion.div>
              )}
              <div className="w-full md:w-1/2 space-y-4">
                <motion.h2 
                  className="text-3xl font-bold text-white/90"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: idx === activeCard ? 1 : 0.3,
                    y: idx === activeCard ? 0 : 10 
                  }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {item.title}
                </motion.h2>
                <motion.p 
                  className="text-lg text-white/80 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: idx === activeCard ? 1 : 0.3,
                    y: idx === activeCard ? 0 : 10 
                  }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {item.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
}
