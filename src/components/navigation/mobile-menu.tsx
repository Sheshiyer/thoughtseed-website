"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StickyScroll } from "../ui/aceternity/sticky-scroll";

const menuContent = [
  {
    title: "Home",
    description: "Return to our main page and explore our latest updates.",
  },
  {
    title: "Services",
    description: "Discover our comprehensive range of digital solutions.",
  },
  {
    title: "About",
    description: "Learn about our mission, values, and the team behind Thoughtseed.",
  },
  {
    title: "Contact",
    description: "Get in touch with us to discuss your next project.",
  },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-3 bg-black/50 backdrop-blur-md rounded-full border border-white/10"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-5 relative flex flex-col justify-between">
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-white rounded-full origin-left"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-full h-0.5 bg-white rounded-full"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-full h-0.5 bg-white rounded-full origin-left"
          />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-lg pt-20"
          >
            <StickyScroll 
              content={menuContent}
              contentClassName="max-w-xl mx-auto"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
