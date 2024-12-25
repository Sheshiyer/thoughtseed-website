"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const links = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/projects",
    label: "Projects",
  },
];

export function FloatingNavbar() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
    >
      <motion.div 
        className="flex items-center justify-between px-8 py-3 rounded-full bg-[rgba(26,35,126,0.8)] backdrop-blur-[10px] border border-white/10"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Logo */}
        <div className="mr-8">
          <Image 
            src="https://placehold.co/120x40/1A237E/FFFFFF/svg?text=Thoughtseed" 
            alt="Thoughtseed Logo" 
            width={120} 
            height={40}
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="text-white/90 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="ml-8 px-6 py-2 rounded-full bg-white text-[rgba(26,35,126,1)] font-medium hover:bg-white/90 transition-colors duration-300"
        >
          Get in Touch
        </Link>
      </motion.div>
    </motion.div>
  );
}
