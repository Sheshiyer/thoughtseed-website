"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";

const quadrants = [
  {
    title: "Science",
    description: "Transforms Information into Knowledge through systematic study and research",
    icon: "🔬",
  },
  {
    title: "Engineering",
    description: "Converts Knowledge into Utility through innovative solutions",
    icon: "⚙️",
  },
  {
    title: "Design",
    description: "Shapes Utility into Behavior through thoughtful and purposeful planning",
    icon: "🎨",
  },
  {
    title: "Art",
    description: "Translates Behavior into Culture through creative expression",
    icon: "✨",
  },
];

export default function PhilosophySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-4 md:px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <TextGenerateEffect 
            words="The Krebs Cycle of Creativity"
            duration={0.6}
            variant="h2"
            align="center"
          />
        </motion.div>
        
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
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-transparent group-hover:from-[rgb(var(--quantum-blue))]/10 group-hover:to-[rgb(var(--consciousness-teal))]/10 transition-all duration-300" />
              
              <span className="text-4xl mb-4 block">{quadrant.icon}</span>
              
              <div className="mb-4 relative z-10">
                <TextGenerateEffect 
                  words={quadrant.title}
                  duration={0.4}
                  variant="h3"
                  align="left"
                />
              </div>
              
              <p className="text-body text-neutral-700 dark:text-neutral-300 relative z-10">
                {quadrant.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
