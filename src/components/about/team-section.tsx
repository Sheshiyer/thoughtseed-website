"use client";

import { InfiniteMovingCards } from "../../components/ui/aceternity/infinite-moving-cards";

const teamMembers = [
  {
    id: 1,
    name: "Mohankumar V",
    role: "Co-founder",
    image: "/team/mohan.jpg",
    quote: "Pioneering the fusion of consciousness and technology through innovative solutions",
  },
  {
    id: 2,
    name: "Shesh Iyer",
    role: "Co-founder",
    image: "/team/shesh.jpg",
    quote: "Bridging ancient wisdom with modern innovation as a Consciousness Architect",
  }
];

export default function TeamSection() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1A237E] to-[#00897B]">
          Our Team
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-center mb-16 max-w-2xl mx-auto text-lg">
          Visionary leaders pioneering the future of conscious technology
        </p>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white dark:from-black dark:via-transparent dark:to-black z-10 pointer-events-none" />
        
        <InfiniteMovingCards
          items={teamMembers.map(member => ({
            id: member.id,
            name: member.name,
            title: member.role,
            content: member.quote,
            image: member.image,
          }))}
          direction="right"
          speed="slow"
          pauseOnHover={true}
        />
      </div>
    </section>
  );
}
