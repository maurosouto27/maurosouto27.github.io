"use client"

import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector("#about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Main content with fade-in animation */}
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-balance">Mauro Souto</h1>
          <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in-up delay-100">Full Stack Developer</p>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Building modern web applications with React, TypeScript, Next.js, and AWS. Passionate about creating
            efficient, scalable solutions and clean code.
          </p>

          {/* CTA Button */}
          <div className="pt-4 animate-fade-in-up delay-300">
            <Button size="lg" onClick={scrollToAbout} className="group">
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
