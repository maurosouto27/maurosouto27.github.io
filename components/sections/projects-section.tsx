"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const projects = [
  {
    id: 1,
    title: "Inti Aventura",
    description:
      "A real production web application for Inti Aventura travel company. Features a private admin dashboard with authentication for managing trips. Public section currently in development. Active project with real clients.",
    image: "/inti-aventura.png",
    tags: ["React", "Next.js", "TypeScript", "MongoDB", "Authentication"],
    liveUrl: "https://dev-inti-aventura.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Netflix Clone",
    description:
      "Technical assessment project built for a real job application. Displays comprehensive information about movies and series including details, ratings, and descriptions. No streaming functionality, focused on UI/UX and data presentation.",
    image: "/netflix-clone.png",
    tags: ["React", "Next.js", "Tailwind CSS", "API Integration"],
    liveUrl: "https://streaming-service-clone-net.vercel.app",
    featured: true,
  },
  {
    id: 3,
    title: "Memory Game",
    description:
      "Classic memory card game built years ago as a practice project. Features smooth animations and interactive gameplay. No scoring system, focused on demonstrating CSS animations and game logic fundamentals.",
    image: "/memory-game.png",
    tags: ["JavaScript", "CSS Animations", "Game Logic"],
    liveUrl: "https://memory-game-flax-theta.vercel.app",
    featured: true,
  },
];

export function ProjectsSection() {
  const { elementRef, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          ref={elementRef}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            My Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A selection of projects showcasing my skills in frontend, backend,
            and interface design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-card rounded-xl overflow-hidden border border-border shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`Preview de ${project.title}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg"
                  >
                    Visit Site
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-balance">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-pretty leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit Site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
