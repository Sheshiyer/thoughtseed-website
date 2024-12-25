"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BackgroundBeams } from "../components/ui/background-beams";
import { BackgroundLines } from "../components/ui/background-lines";
import { StickyScroll } from "../components/ui/aceternity/sticky-scroll";
import { HoverEffect } from "../components/ui/aceternity/hover-effect";
import { InfiniteMovingCards } from "../components/ui/aceternity/infinite-moving-cards";
import { SparklesPreview } from "../components/ui/sparkles-preview";
import { FeaturedProjects } from "../components/ui/features-section";
import { TextHoverEffect } from "../components/ui/text-hover-effect";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

// Content imports remain the same...
const krebsCycleContent = [
  {
    title: "Science → Knowledge",
    description: "Converting complex data into actionable insights through advanced AI and machine learning. Showcased in projects like WhatsLegal's German jurisdiction AI and Bezly's review summarization technology.",
    image: "https://placehold.co/400x300/1A237E/FFFFFF/svg?text=Science"
  },
  {
    title: "Engineering → Utility",
    description: "Developing practical solutions from theoretical concepts, exemplified by our work on WEGRID's AI-powered home optimization and Vibrasonix's vibroacoustic technologies.",
    image: "https://placehold.co/400x300/1A237E/FFFFFF/svg?text=Engineering"
  },
  {
    title: "Design → Behavior",
    description: "Creating intuitive interfaces and experiences, demonstrated in TokenofME's wellness tracking and SandboxLife's mental health applications.",
    image: "https://placehold.co/400x300/1A237E/FFFFFF/svg?text=Design"
  },
  {
    title: "Art → Culture",
    description: "Shaping digital experiences through creative expression, as seen in our interactive installations at Sensistan and BrightME's influencer platform.",
    image: "https://placehold.co/400x300/1A237E/FFFFFF/svg?text=Art"
  }
];

const services = [
  {
    title: "AI & Machine Learning",
    description: "Advanced AI solutions tailored for your specific needs",
    icon: "🤖",
    image: "https://placehold.co/300x200/1A237E/FFFFFF/svg?text=AI+%26+ML"
  },
  {
    title: "Web3 & Blockchain",
    description: "Decentralized solutions for the future",
    icon: "⛓️",
    image: "https://placehold.co/300x200/1A237E/FFFFFF/svg?text=Web3"
  },
  {
    title: "VR/AR Development",
    description: "Immersive experiences that transform reality",
    icon: "🥽",
    image: "https://placehold.co/300x200/1A237E/FFFFFF/svg?text=VR+%26+AR"
  },
  {
    title: "Quantum Computing",
    description: "Next-generation computational solutions",
    icon: "💫",
    image: "https://placehold.co/300x200/1A237E/FFFFFF/svg?text=Quantum"
  }
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "CTO, TechCorp",
    content: "Thoughtseed transformed our approach to AI implementation",
    image: "https://placehold.co/60x60/1A237E/FFFFFF/svg?text=SC"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    title: "CEO, InnovateX",
    content: "Their innovative solutions helped us scale efficiently",
    image: "https://placehold.co/60x60/1A237E/FFFFFF/svg?text=MR"
  },
  {
    id: 3,
    name: "Priya Sharma",
    title: "Head of Innovation, FutureNow",
    content: "Exceptional blend of technical expertise and creativity",
    image: "https://placehold.co/60x60/1A237E/FFFFFF/svg?text=PS"
  }
];

export default function Home() {
  return (
    <div className="relative w-full bg-black">
      {/* Hero Section */}
      <section className="relative h-screen pt-24 overflow-hidden bg-black">
        <BackgroundLines className="bg-black">
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <div className="mb-6">
              <TextGenerateEffect 
                words="Empowering Creativity and Efficiency Through Knowledge" 
                duration={0.8}
                variant="h1"
                align="center"
              />
            </div>
            <div className="mb-8">
              <TextGenerateEffect 
                words="Where consciousness meets technology" 
                duration={0.5}
                variant="h3"
                align="center"
              />
            </div>
            <p className="text-body text-white/60 max-w-3xl mb-12 text-center">
              We transform groundbreaking ideas into innovative solutions at the intersection of science, engineering, design, and art.
            </p>
            <Link
              href="/projects"
              className="px-8 py-4 bg-white text-[#1A237E] rounded-full font-medium hover:bg-white/90 transition-colors"
            >
              Explore Our Work
            </Link>
          </div>
        </BackgroundLines>
      </section>

      {/* Krebs Cycle Section */}
      <section className="py-24 bg-black">
        <div className="text-center">
          <div className="section-title">
            <TextGenerateEffect 
              words="The Krebs Cycle of Creativity" 
              duration={0.6}
              variant="h2"
              align="center"
            />
          </div>
          <div className="section-description">
            <TextGenerateEffect 
              words="At Thoughtseed, our approach is guided by the Krebs Cycle of Creativity, a dynamic framework that drives our innovation process."
              duration={0.7}
              variant="body"
              align="center"
            />
          </div>
          <div className="relative h-32 mb-16">
            <SparklesPreview>
              <div className="absolute inset-0" />
            </SparklesPreview>
          </div>
        </div>
        <StickyScroll content={krebsCycleContent} />
      </section>

      {/* Services Section */}
      <section className="py-24 bg-black">
        <div className="text-center">
          <div className="section-title">
            <TextGenerateEffect 
              words="Our Expertise" 
              duration={0.6}
              variant="h2"
              align="center"
            />
          </div>
          <div className="section-description">
            <TextGenerateEffect 
              words="Comprehensive solutions across multiple domains" 
              duration={0.5}
              variant="body"
              align="center"
            />
          </div>
          <div className="relative h-32 mb-16">
            <SparklesPreview>
              <div className="absolute inset-0" />
            </SparklesPreview>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <HoverEffect 
            items={services.map(service => ({
              title: service.title,
              description: service.description,
              icon: service.icon,
              image: service.image,
              link: `/services/${service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
            }))} 
          />
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 bg-black">
        <div className="text-center">
          <div className="section-title">
            <TextGenerateEffect 
              words="Featured Projects" 
              duration={0.6}
              variant="h2"
              align="center"
            />
          </div>
          <div className="relative h-32 mb-16">
            <SparklesPreview>
              <div className="absolute inset-0" />
            </SparklesPreview>
          </div>
        </div>
        <FeaturedProjects />
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-black">
        <div className="text-center">
          <div className="section-title">
            <TextGenerateEffect 
              words="Client Success Stories" 
              duration={0.6}
              variant="h2"
              align="center"
            />
          </div>
          <div className="relative h-32 mb-16">
            <SparklesPreview>
              <div className="absolute inset-0" />
            </SparklesPreview>
          </div>
        </div>
        <div className="space-y-5">
          <InfiniteMovingCards
            items={testimonials.map(t => ({
              id: t.id,
              name: t.name,
              title: t.title,
              content: t.content,
              image: t.image
            }))}
            pauseOnHover={true}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative h-[60vh] py-20 bg-black">
        <BackgroundBeams />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <div className="mb-6">
            <TextGenerateEffect 
              words="Ready to Transform Your Ideas?" 
              duration={0.7}
              variant="h2"
              align="center"
            />
          </div>
          <div className="mb-8">
            <TextGenerateEffect 
              words="Let's create something extraordinary together" 
              duration={0.5}
              variant="h4"
              align="center"
            />
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-[#1A237E] rounded-full font-medium hover:bg-white/90 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-12 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <TextHoverEffect text="THOUGHTSEED" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <nav className="space-y-4">
              <Link href="/" className="block text-white/70 hover:text-white transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#00897B] hover:to-[#1A237E] hover:bg-clip-text hover:text-transparent">Home</Link>
              <Link href="/about" className="block text-white/70 hover:text-white transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#00897B] hover:to-[#1A237E] hover:bg-clip-text hover:text-transparent">About</Link>
              <Link href="/projects" className="block text-white/70 hover:text-white transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#00897B] hover:to-[#1A237E] hover:bg-clip-text hover:text-transparent">Projects</Link>
            </nav>
            <div className="space-y-4">
              <a href="https://linkedin.com" className="block text-white/70 hover:text-white transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#00897B] hover:to-[#1A237E] hover:bg-clip-text hover:text-transparent">LinkedIn</a>
              <a href="https://twitter.com" className="block text-white/70 hover:text-white transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#00897B] hover:to-[#1A237E] hover:bg-clip-text hover:text-transparent">Twitter</a>
              <a href="https://github.com" className="block text-white/70 hover:text-white transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[#00897B] hover:to-[#1A237E] hover:bg-clip-text hover:text-transparent">GitHub</a>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-caption text-white/50">&copy; {new Date().getFullYear()} Thoughtseed. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
