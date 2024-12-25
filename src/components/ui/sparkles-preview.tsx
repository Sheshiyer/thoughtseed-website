"use client";
import React from "react";
import { SparklesCore } from "./sparkles";

export function SparklesPreview({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      {children}
      <div className="w-full h-32 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[3px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[6px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={1500}
          className="w-full h-full"
          particleColor="#FFFFFF"
          particleSpeed={0.5}
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_30%,white)]"></div>
      </div>
    </div>
  );
}
