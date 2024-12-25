"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface MacbookScrollProps {
  title: string;
  description: string;
  src: string;
  showGradient?: boolean;
}

export function MacbookScroll({
  title,
  description,
  src,
  showGradient = true,
}: MacbookScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <div
      ref={ref}
      className="h-[80vh] flex items-center justify-center relative py-40 overflow-hidden"
    >
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/0 z-10" />
      )}
      
      <div className="relative w-full max-w-7xl mx-auto px-4">
        <div className="max-w-2xl mb-16">
          <motion.h2
            style={{ opacity, y }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            {title}
          </motion.h2>
          <motion.p
            style={{ opacity, y }}
            className="text-base md:text-lg text-white/70"
          >
            {description}
          </motion.p>
        </div>

        <motion.div
          style={{ scale }}
          className="relative w-full aspect-[16/10] bg-gray-900 rounded-2xl overflow-hidden border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-quantum-blue/20 via-consciousness-teal/20 to-energetic-orange/20" />
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </div>
    </div>
  );
}
