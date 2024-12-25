"use client";

import { HoverEffect } from "../../components/ui/aceternity/hover-effect";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";

const services = [
  {
    title: "AI and Machine Learning",
    description: "Advanced AI solutions for content generation, predictive analytics, and natural language processing",
    icon: "🤖",
    link: "#ai-ml",
  },
  {
    title: "Web3 and Blockchain",
    description: "Decentralized applications, smart contracts, NFT platforms, and cryptocurrency asset management solutions",
    icon: "⛓️",
    link: "#web3",
  },
  {
    title: "VR/AR Development",
    description: "Immersive experiences for gaming, training, and digital art installations",
    icon: "🥽",
    link: "#vr-ar",
  },
  {
    title: "Quantum Computing",
    description: "Consultancy and development services for hybrid quantum systems, pushing boundaries in quantum computing research",
    icon: "⚛️",
    link: "#quantum",
  },
  {
    title: "Wearable Technology",
    description: "Innovative biosensor devices for health monitoring, gaming, and affective computing",
    icon: "⌚",
    link: "#wearables",
  },
  {
    title: "Biofeedback Solutions",
    description: "Interactive experiences integrating physiological data for enhanced mental wellness and performance",
    icon: "🧠",
    link: "#biofeedback",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="section-title">
          <TextGenerateEffect 
            words="Our Services"
            duration={0.6}
            variant="h2"
            align="center"
          />
        </div>
        <div className="section-description">
          <TextGenerateEffect 
            words="Cutting-edge solutions at the intersection of consciousness and technology"
            duration={0.5}
            variant="body"
            align="center"
          />
        </div>

        <HoverEffect 
          items={services} 
          className="grid-cols-1 md:grid-cols-3 lg:grid-cols-3"
        />
      </div>
    </section>
  );
}
