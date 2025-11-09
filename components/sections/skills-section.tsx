"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Angular", "React Native", "HTML/CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "GraphQL", "PostgreSQL", "Python", "Django", "Groovy", "REST APIs"],
  },
  {
    title: "Tools & Infrastructure",
    skills: ["AWS", "Docker", "CI/CD", "Git", "Playwright", "Cypress", "SQL"],
  },
  {
    title: "Other",
    skills: ["E2E Testing", "Automation", "DevOps", "Agile", "English (C2)"],
  },
]

export function SkillsSection() {
  const { elementRef, isVisible } = useScrollAnimation(0.1)

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-12 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          ref={elementRef}
        >
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
