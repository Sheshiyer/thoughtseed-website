"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

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
      <HoverBorderGradient
        containerClassName="w-auto"
        className="flex items-center justify-between px-8 py-3 backdrop-blur-[10px] min-w-[600px]"
        duration={2}
      >
        <div className="flex items-center justify-between w-full">
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
            className="ml-8 px-6 py-2 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </HoverBorderGradient>
    </motion.div>
  );
}
