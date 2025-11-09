"use client"

import { ExperienceCard } from "@/components/experience-card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const experiences = [
  {
    company: "Tarmac.IO",
    position: "Full Stack Developer",
    period: "July 2024 - Present",
    location: "Montevideo, Uruguay",
    description:
      "Working on highly interactive platforms for various clients. Currently at Assessment for Good, building game-like educational assessments with advanced animations, GraphQL, PostgreSQL, and AWS infrastructure.",
    highlights: [
      "Rebuilt cross-project event-tracking module used across 4 applications",
      "Implemented game assessments with dynamic UI and animations",
      "Integrated AWS, Docker, and CI/CD pipelines",
    ],
  },
  {
    company: "Self-employed",
    position: "Freelance Developer",
    period: "February 2024 - Present",
    location: "Remote",
    description:
      "Building custom web applications and solutions for clients. Handling full-stack development, deployment, and infrastructure setup.",
    highlights: [
      "Completed 3-month project with company at LATU",
      "Delivered tailored solutions for real business problems",
    ],
  },
  {
    company: "Portrait",
    position: "Full Stack Developer",
    period: "August 2022 - January 2024",
    location: "United States",
    description:
      "Developed web applications in the health and aesthetics industry for patient bookings and practitioner management.",
    highlights: [
      "Improved payment flows with Square API integration",
      "Built patient records system with role-based access control",
    ],
  },
  {
    company: "Nobly POS (acquired by Revolut)",
    position: "Software Engineer",
    period: "August 2021 - August 2022",
    location: "United Kingdom",
    description:
      "Worked on restaurant POS platform, maintaining complex dashboards and improving code quality through automation and testing.",
    highlights: [
      "Built E2E tests with Playwright and Cypress",
      "Enhanced dashboard customization tools and integrations",
    ],
  },
  {
    company: "RPAMAKER",
    position: "Full Stack Developer",
    period: "February 2021 - August 2021",
    location: "Montevideo, Uruguay",
    description: "Developed internal dashboard and automation scripts using JavaScript and Python/Django.",
    highlights: ["Created automation robots for email processing and data transformation"],
  },
]

export function ExperienceSection() {
  const { elementRef, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-12 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          ref={elementRef}
        >
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <ExperienceCard {...experience} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
