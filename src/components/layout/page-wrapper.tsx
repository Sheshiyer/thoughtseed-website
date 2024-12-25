"use client";

import React from "react";
import { MainNav } from "../navigation/main-nav";
import { Footer } from "./footer";
import { motion, AnimatePresence } from "framer-motion";

interface PageWrapperProps {
  children: React.ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col">
      {/* Navigation */}
      <MainNav />

      {/* Page Content with Animation */}
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="relative pt-24 flex-grow"
        >
          {/* Content Wrapper */}
          <div className="container mx-auto px-4">
            {children}
          </div>
        </motion.main>
      </AnimatePresence>

      {/* Footer */}
      <Footer />
    </div>
  );
}
