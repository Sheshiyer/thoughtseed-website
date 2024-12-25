"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const quadrants = [
  {
    title: "Science",
    description: "Transforms Information into Knowledge through systematic study and research",
    color: "#1A237E",
    icon: "🔬",
  },
  {
    title: "Engineering",
    description: "Converts Knowledge into Utility through innovative solutions",
    color: "#00897B",
    icon: "⚙️",
  },
  {
    title: "Design",
    description: "Shapes Utility into Behavior through thoughtful and purposeful planning",
    color: "#1A237E",
    icon: "🎨",
  },
  {
    title: "Art",
    description: "Translates Behavior into Culture through creative expression",
    color: "#00897B",
    icon: "✨",
  },
];

export default function PhilosophySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 md:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          The Krebs Cycle of Creativity
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {quadrants.map((quadrant, index) => (
            <motion.div
              key={quadrant.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 dark:from-neutral-900 dark:to-neutral-800 shadow-lg hover:shadow-xl transition-all duration-300"
              style={{
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-transparent group-hover:from-[#1A237E]/10 group-hover:to-[#00897B]/10 transition-all duration-300" />
              
              <span className="text-4xl mb-4 block">{quadrant.icon}</span>
              
              <h3 
                className="text-2xl font-bold mb-4 relative z-10"
                style={{ color: quadrant.color }}
              >
                {quadrant.title}
              </h3>
              
              <p className="text-neutral-700 dark:text-neutral-300 relative z-10">
                {quadrant.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
