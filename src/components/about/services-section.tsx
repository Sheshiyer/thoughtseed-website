"use client";

import { HoverEffect } from "../../components/ui/aceternity/hover-effect";

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
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1A237E] to-[#00897B]">
          Our Services
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-center mb-16 max-w-2xl mx-auto text-lg">
          Cutting-edge solutions at the intersection of consciousness and technology
        </p>

        <HoverEffect 
          items={services} 
          className="grid-cols-1 md:grid-cols-3 lg:grid-cols-3"
        />
      </div>
    </section>
  );
}
