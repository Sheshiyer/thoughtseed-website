"use client";

import { ContainerScroll } from "../ui/container-scroll";
import { BackgroundBeams } from "../ui/background-beams";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
      <BackgroundBeams className="opacity-5" />
      <div className="relative z-10 w-full">
        <ContainerScroll
          titleComponent={
            <>
              <TextGenerateEffect 
                words="About Thoughtseed"
                className="h1 text-center mb-4 text-white"
                variant="h1"
                duration={0.8}
                align="center"
              />
              <TextGenerateEffect 
                words="Bridging ancient wisdom with modern innovation to create transformative digital experiences"
                className="section-description"
                variant="body"
                duration={0.5}
                align="center"
                filter={false}
              />
            </>
          }
          className="max-w-7xl mx-auto relative"
        >
          <div className="mt-8"></div>
        </ContainerScroll>
      </div>
    </div>
  );
}
