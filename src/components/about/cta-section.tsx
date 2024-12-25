"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";

export default function CTASection() {
  return (
    <section className="h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#1A237E] to-[#00897B] mb-8">
          Ready to Transform Your Ideas into Reality?
        </h2>
        
        <p className="text-neutral-800 dark:text-neutral-200 text-center max-w-lg mx-auto text-lg mb-10">
          Join us on a journey of innovation where consciousness meets technology. Let's create solutions that make a difference.
        </p>
        
        <div className="flex justify-center">
          <a
            href="/contact"
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#1A237E,45%,#00897B,55%,#1A237E)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Get Started
          </a>
        </div>
      </div>
      
      <BackgroundBeams className="opacity-30" />
    </section>
  );
}
