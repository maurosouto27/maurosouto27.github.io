"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function AboutSection() {
  const { elementRef, isVisible } = useScrollAnimation(0.2)

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2
          className={`text-3xl md:text-4xl font-bold mb-8 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          ref={elementRef}
        >
          About Me
        </h2>

        <Card
          className={`border-0 shadow-lg transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <CardContent className="pt-6">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Fullstack developer with experience across frontend, backend, and infrastructure. I've worked on
                internal tools, automation, and user-facing platforms for startups and nonprofits.
              </p>
              <p>
                Comfortable with modern stacks including React, TypeScript, Tailwind CSS, Node.js, and AWS. I have a
                strong focus on building scalable applications with clean, maintainable code.
              </p>
              <p>
                My experience ranges from creating game-like assessment platforms for educational nonprofits to building
                POS systems for restaurants. I'm always looking to grow in architecture and DevOps while delivering
                high-quality solutions.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
