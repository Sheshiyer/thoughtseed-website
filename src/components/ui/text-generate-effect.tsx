"use client";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "../../lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  variant?: "h1" | "h2" | "h3" | "h4" | "body" | "small" | "caption";
  align?: "left" | "center";
}

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  variant = "body",
  align = "left",
}: TextGenerateEffectProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "0px 0px -200px 0px",
    amount: 0.3
  });
  let wordsArray = words.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.035,
        delayChildren: 0.05,
      },
    },
  };

  const wordVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95,
      filter: filter ? "blur(8px)" : "none",
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: duration,
      },
    },
  };

  const getVariantClasses = () => {
    switch (variant) {
      case "h1":
        return "h1";
      case "h2":
        return "h2";
      case "h3":
        return "h3";
      case "h4":
        return "h4";
      case "small":
        return "text-small";
      case "caption":
        return "text-caption";
      default:
        return "text-body";
    }
  };

  return (
    <motion.div 
      ref={ref} 
      className={cn(
        "font-bold",
        align === "center" ? "text-center" : "text-left",
        getVariantClasses(),
        className
      )}
    >
      <motion.div
        className={cn(
          "inline-flex flex-wrap gap-x-1.5",
          align === "center" ? "justify-center" : "justify-start"
        )}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="inline-block"
            variants={wordVariants}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};
