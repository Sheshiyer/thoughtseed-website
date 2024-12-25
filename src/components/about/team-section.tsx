"use client";

import { InfiniteMovingCards } from "../../components/ui/aceternity/infinite-moving-cards";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";

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
        <div className="section-title">
          <TextGenerateEffect 
            words="Our Team"
            duration={0.6}
            variant="h2"
            align="center"
          />
        </div>
        <div className="section-description">
          <TextGenerateEffect 
            words="Visionary leaders pioneering the future of conscious technology"
            duration={0.5}
            variant="body"
            align="center"
          />
        </div>
      </div>

      <div>
        <InfiniteMovingCards
          items={teamMembers.map(member => ({
            id: member.id,
            name: member.name,
            title: member.role,
            content: member.quote,
            image: member.image,
          }))}
          pauseOnHover={true}
        />
      </div>
    </section>
  );
}
