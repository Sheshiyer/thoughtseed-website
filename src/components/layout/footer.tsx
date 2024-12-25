"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <div className="relative h-12">
            <Image
              src="/images/logo-full-dark.png"
              alt="Thoughtseed"
              width={180}
              height={48}
              style={{ width: '180px', height: '48px' }}
              className="object-contain"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <nav className="space-y-4">
            <Link href="/" className="block text-white/70 hover:text-white transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[rgb(var(--consciousness-teal))] hover:to-[rgb(var(--quantum-blue))] hover:bg-clip-text hover:text-transparent">Home</Link>
            <Link href="/about" className="block text-white/70 hover:text-white transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[rgb(var(--consciousness-teal))] hover:to-[rgb(var(--quantum-blue))] hover:bg-clip-text hover:text-transparent">About</Link>
            <Link href="/projects" className="block text-white/70 hover:text-white transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[rgb(var(--consciousness-teal))] hover:to-[rgb(var(--quantum-blue))] hover:bg-clip-text hover:text-transparent">Projects</Link>
          </nav>
          <div className="space-y-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block text-white/70 hover:text-white transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[rgb(var(--consciousness-teal))] hover:to-[rgb(var(--quantum-blue))] hover:bg-clip-text hover:text-transparent">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="block text-white/70 hover:text-white transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[rgb(var(--consciousness-teal))] hover:to-[rgb(var(--quantum-blue))] hover:bg-clip-text hover:text-transparent">Twitter</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="block text-white/70 hover:text-white transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[rgb(var(--consciousness-teal))] hover:to-[rgb(var(--quantum-blue))] hover:bg-clip-text hover:text-transparent">GitHub</a>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-caption text-white/50 font-['Subjectivity']">&copy; {new Date().getFullYear()} Thoughtseed. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
