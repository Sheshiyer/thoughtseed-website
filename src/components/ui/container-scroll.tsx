"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface ContainerScrollProps {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const ContainerScroll: React.FC<ContainerScrollProps> = ({
  titleComponent,
  children,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scaleDimensions = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="relative min-h-[60vh] w-full">
      <div
        ref={containerRef}
        className={cn(
          "relative h-full w-full overflow-hidden",
          className
        )}
      >
        <motion.div
          style={{
            scale: scaleDimensions,
            opacity: opacity,
          }}
          className="absolute inset-0 flex flex-col items-center justify-center px-4"
        >
          <div className="text-center">
            {titleComponent}
          </div>
          <div className="mt-8 w-full">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
