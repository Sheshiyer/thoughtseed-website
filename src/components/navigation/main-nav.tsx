"use client";

import React from "react";
import { motion } from "framer-motion";
import { FloatingNavbar } from "./floating-navbar";
import { MobileMenu } from "./mobile-menu";
import Link from "next/link";
import Image from "next/image";

export function MainNav() {
  return (
    <header className="relative w-full">
      {/* Animated Logo */}
      <Link href="/" className="fixed top-4 left-8 z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          whileHover={{ scale: 1.05 }}
          className="flex items-center bg-black/50 backdrop-blur-md rounded-xl px-4 py-3"
        >
          <div className="h-16 relative flex items-center justify-center">
            <Image
              src="/images/hor-logo-dark.png"
              alt="Thoughtseed Logo"
              width={320}
              height={80}
              style={{ width: "auto", height: "auto" }}
              className="object-contain"
            />
          </div>
        </motion.div>
      </Link>

      {/* Desktop Navigation */}
      <FloatingNavbar />

      {/* Mobile Navigation */}
      <MobileMenu />
    </header>
  );
}
