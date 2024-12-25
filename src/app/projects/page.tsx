"use client";

import { Timeline } from "../../components/ui/timeline";
import { BackgroundBeams } from "../../components/ui/background-beams";
import { HoverBorderGradient } from "../../components/ui/hover-border-gradient";
import { TextGenerateEffect } from "../../components/ui/text-generate-effect";
import Image from "next/image";

interface Project {
  name: string;
  text: string;
  description: string;
  image: string;
  tech: string[];
}

const projects: Project[] = [
  {
    name: "AXTECH",
    text: "B2B ordering app for AXTECH",
    description: "One of the largest infrastructures and energy materials supplier",
    tech: ["React Native", "Firebase", "Appsmith"],
    image: "/projects/axtech.jpg"
  },
  {
    name: "WEGRID",
    text: "AI powered Home optimisation",
    description: "Energy storage device to save energy bill (website)",
    tech: ["Framer"],
    image: "/projects/wegrid.jpg"
  },
  {
    name: "THALEOS",
    text: "iOS & Android App for controlling smart home devices",
    description: "Complete smart home control solution",
    tech: ["Tuya IOT APIs", "Go", "Redis", "Postgres", "React"],
    image: "/projects/thaleos.jpg"
  },
  {
    name: "WATT CONNECT",
    text: "Smart connected thermostats",
    description: "Energy saving for home and demand response capability to stabilise electricity grid",
    tech: ["Tuya IOT APIs", "Go", "Redis", "Postgres", "React", "Webflow"],
    image: "/projects/wattconnect.jpg"
  },
  {
    name: "YOUBLOCK",
    text: "Solar energy mining device",
    description: "Tokenise the excess solar energy through innovative hardware and software solution",
    tech: ["React", "HTML", "Solidity"],
    image: "/projects/youblock.jpg"
  },
  {
    name: "SENSEPLAY",
    text: "Biofeedback wearable for gaming",
    description: "Hardware device that enhances gaming experience through biofeedback",
    tech: ["Embedded C", "ESP32", "BLE", "Autocad", "UE4", "Blender"],
    image: "/projects/senseplay.jpg"
  },
  {
    name: "TOKENOFME",
    text: "Tokenisation of inner wellbeing",
    description: "iOS, Android app and webapp for wellbeing tracking and tokenization",
    tech: ["Swift", "Kotlin", "Python", "Solidity", "WatchOS"],
    image: "/projects/tokenofme.jpg"
  },
  {
    name: "BRIGHTME",
    text: "AI based matchmaking app",
    description: "Connect influencers with brands through intelligent matching",
    tech: ["React Native", "React", "Firebase", "Framer"],
    image: "/projects/brightme.jpg"
  },
  {
    name: "INSTAL",
    text: "Installation provider platform",
    description: "Connect home owners with installation providers for device installation and service",
    tech: ["PHP", "Flutter", "VueJS", "Framer"],
    image: "/projects/instal.jpg"
  },
  {
    name: "VIBRASONIX",
    text: "Vibroacoustic technologies ecosystem",
    description: "Ecosystem of devices for biofield tuning with integrated apps and shop",
    tech: ["Flutter", "Wordpress", "Woocommerce", "Blender"],
    image: "/projects/vibrasonix.jpg"
  },
  {
    name: "BEZLY",
    text: "Amazon review summarizer",
    description: "Chrome plugin for creating summary of Amazon reviews",
    tech: ["ReactJs", "OpenAI APIs"],
    image: "/projects/bezly.jpg"
  },
  {
    name: "ASK ABRAHAM",
    text: "Abraham Hicks AI chatbot",
    description: "Telegram bot trained on 1000+ public videos",
    tech: ["Python", "Fast API"],
    image: "/projects/ask-abraham.jpg"
  },
  {
    name: "UVYIELD",
    text: "AI powered solar calculator",
    description: "Calculate the most optimal photovoltaic system for your home",
    tech: ["Python", "ReactJS", "FastAPI"],
    image: "/projects/uvyield.jpg"
  },
  {
    name: "MAXIMUM PROTOCOL",
    text: "AI crypto portfolio manager",
    description: "Portfolio management and optimisation tool for cryptocurrencies investment",
    tech: ["ReactJs", "HTML", "Python"],
    image: "/projects/maximum-protocol.jpg"
  },
  {
    name: "FMRL",
    text: "Frequency modulated reality lens",
    description: "Image processing technique to visualise light interference patterns",
    tech: ["OpenCV", "Python", "Touchdesigner"],
    image: "/projects/fmrl.jpg"
  },
  {
    name: "WHATSLEGAL",
    text: "AI Legal assistant",
    description: "Trained on German state and federal law using RAG",
    tech: ["Python", "React", "OpenAI"],
    image: "/projects/whatslegal.jpg"
  },
  {
    name: "QAPT",
    text: "Mobile breathing biofeedback",
    description: "Mobile app based breathing biofeedback application",
    tech: ["React Native", "Draftbit"],
    image: "/projects/qapt.jpg"
  }
];

export default function ProjectsPage() {
  const timelineData = projects.map(project => ({
    title: project.name,
    content: (
      <HoverBorderGradient
        containerClassName="rounded-lg w-full"
        className="bg-neutral-900 p-6 w-full dark:text-white"
        as="div"
      >
        <div className="aspect-video relative overflow-hidden rounded-lg mb-6">
          <Image
            src={project.image}
            alt={project.name}
            width={640}
            height={360}
            className="object-cover w-full h-full"
          />
        </div>
        <TextGenerateEffect
          words={project.name}
          className="text-2xl font-bold mb-2 text-white font-['Subjectivity']"
          variant="h4"
          duration={0.7}
        />
        <p className="text-xl font-semibold mb-2 text-white">{project.text}</p>
        <p className="text-neutral-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </HoverBorderGradient>
    ),
  }));

  return (
    <div className="min-h-screen w-full bg-black relative">
      <div className="max-w-7xl mx-auto pt-20 px-4">
        <TextGenerateEffect 
          words="Our Projects"
          className="text-4xl md:text-6xl font-bold text-center mb-4 text-white"
          variant="h1"
          duration={0.8}
          align="center"
        />
        <TextGenerateEffect 
          words="A showcase of our innovative projects spanning various technologies and industries"
          className="text-neutral-300 text-center max-w-2xl mx-auto mb-20"
          variant="body"
          duration={0.5}
          align="center"
          filter={false}
        />
      </div>
      <Timeline data={timelineData} />
      <BackgroundBeams />
    </div>
  );
}
