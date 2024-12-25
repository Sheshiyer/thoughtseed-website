import React from "react";
import { cn } from "../../lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Bolt, Brain, Box, Sun, Eye, Scale } from "lucide-react";

type ProjectType = {
  title: string;
  description: string;
  tags: string[];
  className: string;
  visual: React.ReactNode;
};

interface ProjectCardProps {
  children: React.ReactNode;
  className?: string;
}

interface ProjectTitleProps {
  children: React.ReactNode;
}

interface ProjectDescriptionProps {
  children: React.ReactNode;
}

interface ProjectImageProps {
  icon: React.ReactNode;
  image: string;
}

const ProjectCard = ({ children, className }: ProjectCardProps) => {
  return (
    <div 
      className={cn(
        "p-6 sm:p-8 relative overflow-hidden bg-transparent transition-colors",
        className
      )}
    >
      {children}
    </div>
  );
};

const ProjectTitle = ({ children }: ProjectTitleProps) => {
  return (
    <h3 className="h3">
      {children}
    </h3>
  );
};

const ProjectDescription = ({ children }: ProjectDescriptionProps) => {
  return (
    <p className="mt-2 text-body text-neutral-300">
      {children}
    </p>
  );
};

const ProjectImage = ({ icon, image }: ProjectImageProps) => {
  return (
    <div className="relative h-full">
      <div className="w-full h-full p-4 bg-neutral-900/30 rounded-lg shadow-lg backdrop-blur-sm">
        <div className="absolute top-6 right-6 z-10 p-2 bg-blue-500/10 rounded-lg">
          {icon}
        </div>
        <Image
          src={image}
          alt="Project preview"
          width={800}
          height={600}
          className="w-full h-full object-cover object-center rounded-md"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-black via-black to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-60 bg-gradient-to-b from-black via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

export function FeaturedProjects() {
  const projects: ProjectType[] = [
    {
      title: "WEGRID",
      description: "AI-powered home optimization and energy storage solution for reducing energy bills and maximizing efficiency.",
      tags: ["Framer", "AI", "Energy"],
      className: "col-span-1 lg:col-span-3 border-b lg:border-r border-neutral-800",
      visual: <ProjectImage icon={<Bolt className="w-8 h-8 text-blue-400" />} image="/projects/wegrid.jpg" />,
    },
    {
      title: "Vibrasonix",
      description: "An ecosystem of vibroacoustic technologies for biofield tuning, combining ancient wisdom with modern tech.",
      tags: ["Flutter", "Hardware", "Wellness"],
      className: "col-span-1 lg:col-span-3 border-b border-neutral-800",
      visual: <ProjectImage icon={<Brain className="w-8 h-8 text-blue-400" />} image="/projects/vibrasonix.jpg" />,
    },
    {
      title: "TokenOfMe",
      description: "Revolutionary platform for tokenizing inner wellbeing, bridging consciousness with blockchain technology.",
      tags: ["Swift", "Kotlin", "Blockchain"],
      className: "col-span-1 lg:col-span-2 border-b lg:border-r border-neutral-800",
      visual: <ProjectImage icon={<Box className="w-8 h-8 text-blue-400" />} image="/projects/tokenofme.jpg" />,
    },
    {
      title: "UVYield",
      description: "AI-driven application calculating optimal photovoltaic systems for sustainable home energy solutions.",
      tags: ["Python", "ReactJS", "AI"],
      className: "col-span-1 lg:col-span-4 border-b border-neutral-800",
      visual: <ProjectImage icon={<Sun className="w-8 h-8 text-blue-400" />} image="/projects/uvyield.jpg" />,
    },
    {
      title: "FMRL",
      description: "Frequency modulated reality lens visualizing light interference patterns, exploring consciousness through technology.",
      tags: ["OpenCV", "Python", "Vision"],
      className: "col-span-1 lg:col-span-3 border-b lg:border-r border-neutral-800",
      visual: <ProjectImage icon={<Eye className="w-8 h-8 text-blue-400" />} image="/projects/fmrl.jpg" />,
    },
    {
      title: "WhatsLegal",
      description: "Advanced AI legal assistant leveraging RAG technology for comprehensive German legal consultation.",
      tags: ["Python", "React", "AI"],
      className: "col-span-1 lg:col-span-3 border-b border-neutral-800",
      visual: <ProjectImage icon={<Scale className="w-8 h-8 text-blue-400" />} image="/projects/whatslegal.jpg" />,
    },
  ];

  return (
    <div className="relative z-20 w-full py-16 lg:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Featured Projects
          </h2>
          <p className="section-description">
            Innovative solutions bridging consciousness, technology, and sustainability
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-6 gap-0.5 rounded-lg overflow-hidden border border-neutral-800">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              className={cn(
                project.className,
                index === projects.length - 1 ? "border-b-0" : ""
              )}
            >
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-2 py-1 text-xs font-medium bg-neutral-800/50 text-neutral-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="h-full w-full mt-6">{project.visual}</div>
            </ProjectCard>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="/projects"
            className="btn-primary"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjects;
