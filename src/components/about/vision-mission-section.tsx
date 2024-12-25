"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function VisionMissionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/0 dark:from-white/5 dark:to-white/0 pointer-events-none" />
      
      <div className="grid md:grid-cols-2 gap-8 md:gap-0 h-full">
        {/* Vision */}
        <motion.div 
          className="relative px-4 md:px-12 py-16 flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A237E]/10 to-transparent" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#1A237E] to-[#00897B]">
              Our Vision
            </h2>
            <p className="text-lg md:text-xl text-neutral-800 dark:text-neutral-200 max-w-xl">
              To pioneer the integration of consciousness and technology, creating solutions that bridge ancient wisdom with modern innovation. We envision a future where technology seamlessly enhances human potential through our interdisciplinary approach.
            </p>
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div 
          className="relative px-4 md:px-12 py-16 flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-0 bg-gradient-to-bl from-[#00897B]/10 to-transparent" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#00897B] to-[#1A237E]">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-neutral-800 dark:text-neutral-200 max-w-xl">
              To transform groundbreaking ideas into innovative solutions that drive technological advancement and create positive impact. We strive to be at the forefront of AI, machine learning, Web3, VR/AR, and quantum computing, delivering cutting-edge products and services that empower businesses and individuals to thrive in the digital age.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-neutral-300/20 to-transparent hidden md:block" />
      <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-300/20 to-transparent" />
    </section>
  );
}
