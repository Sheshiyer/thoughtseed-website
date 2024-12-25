"use client";

import React from "react";
import { motion } from "framer-motion";
import { FloatingNavbar } from "./floating-navbar";
import { MobileMenu } from "./mobile-menu";
import Link from "next/link";

export function MainNav() {
  return (
    <header className="relative w-full">
      {/* Animated Logo */}
      <Link href="/" className="fixed top-4 left-4 z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2 bg-black/50 backdrop-blur-md rounded-full px-4 py-2 border border-white/10"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-8 h-8 rounded-full bg-[#1A237E]"
          />
          <span className="text-white font-bold">Thoughtseed</span>
        </motion.div>
      </Link>

      {/* Desktop Navigation */}
      <FloatingNavbar />

      {/* Mobile Navigation */}
      <MobileMenu />
    </header>
  );
}
