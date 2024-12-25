"use client";

import { BackgroundBeams } from "../ui/background-beams";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export default function CTASection() {
  return (
    <section className="h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <div className="mb-8">
          <TextGenerateEffect 
            words="Ready to Transform Your Ideas into Reality?"
            duration={0.7}
            variant="h2"
            align="center"
          />
        </div>
        
        <div className="mb-10">
          <TextGenerateEffect 
            words="Join us on a journey of innovation where consciousness meets technology. Let's create solutions that make a difference."
            duration={0.5}
            variant="body"
            align="center"
          />
        </div>
        
        <div className="flex justify-center">
          <a
            href="/contact"
            className="btn-primary animate-shimmer"
          >
            Get Started
          </a>
        </div>
      </div>
      
      <BackgroundBeams className="opacity-30" />
    </section>
  );
}
